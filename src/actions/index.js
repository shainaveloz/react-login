import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_MESSAGE
} from './types';

const API_URL = '';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem('token');
    if( (config.url.indexOf(API_URL) === 0 ) && token) {
        config.headers['x-access-token'] = token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});


axios.interceptors.response.use(function (res) {
    // Do something with response data
    const token = localStorage.getItem('token');
    if(res.data.message == 'Failed to authenticate token'){
        browserHistory.push('/login');
    }
    else if(res.config.url.indexOf(API_URL) === 0 && res.data.token) {
        console.log(res.data.token);
    }
    return response;
}, function (error) {
    // Do something with response error
    browserHistory.push('/login');
    return Promise.reject(error);
});

export function loginUser({email, password}){
    return function(dispatch){
        axios.post(`${API_URL}/authenticate`, {email, password})
            .then(response =>{
                console.log(response.headers);
                dispatch({type: AUTH_USER});
                localStorage.setItem('token', response.data.token);
                browserHistory.push('/feature');
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

export function fetchMessage() {
    return function (dispatch) {
        axios.get(API_URL, {
            headers:{
                authorization: localStorage.getItem('token')
            }
        })
            .then(response =>{
                dispatch({
                    type: FETCH_MESSAGE,
                    payload: response.data.message
                })
            })
    }
}