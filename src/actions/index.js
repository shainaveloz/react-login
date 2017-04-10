import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    API_URL,
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_USERS
} from './types';

const token = localStorage.getItem('token');

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    if( (config.url.indexOf(API_URL) === 0 ) && token) {
        config.headers['x-access-token'] = token;
    }
    //console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
    // Do something with response data
    if(response.data.message == 'Failed to authenticate token'){
        browserHistory.push('/login');
    }
    else if(response.config.url.indexOf(API_URL) === 0 && response.data.token) {
        localStorage.setItem('token',response.data.token);
    }

    //console.log(response);
    return response;
}, function (error) {
    // Do something with response error
    if(error.status === 401){
        browserHistory.push('/login');
    }
    /**
     * Account Disabled
     */
    if(response.status === 401 && error.data.message == 'Team account disabled'  ){
        logoutUser();
        browserHistory.push('/login');
    }

    /**
     * Forbiddend Unauthorized
     */
    if(error.status === 403 ){
        //$state.go('home.error',{errorCode: 403});
    }

    /**
     * Not Found
     */
    if(error.status === 404 ){
        //$state.go('home.error',{errorCode: 404});
    }

    /**
     * Invalid Token
     */
    if(error.status === 401 && error.data.message == 'Failed to authenticate token'){
        logoutUser();
        browserHistory.push('/login');
    }
    console.log(error);
    return Promise.reject(response);
});

export function loginUser({email, password}){
    return function(dispatch){
        axios.post(`${API_URL}/authenticate`, {email, password})
            .then(response =>{
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/admin/user_accounts');
            })
            .catch(() =>{
                dispatch(authError('Bad Login Info'));
            })
    }
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function logoutUser() {
    localStorage.removeItem('token');

    return {type: UNAUTH_USER};
}


export function fetchUsers(){
    return function (dispatch){
        axios.get(`${API_URL}/api/admin/accounts`,{
            headers:{'x-access-token':token}
        })
            .then(response => {
                dispatch({
                    type: FETCH_USERS,
                    payload: response
                })
            })
            .catch(() =>{
                dispatch(authError('Error'));
            })
    }
}
