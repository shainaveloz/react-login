import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { CALL_API } from '../middleware/api'

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';
//export const FETCH_USERS = 'FETCH_USERS';

export function parseJSON(response) {
    return response.json()
}

function requestLogin(name) {
    return {
        type: LOGIN_USER_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        name
    }
}

function receiveLogin(user) {
    return {
        type: LOGIN_USER_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    }
}

function loginError(message) {
    return {
        type: LOGIN_USER_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}


export function loginUser(creds) {

    let config = {
        method: 'POST',
        headers: { 'x-access-token':'application/x-www-form-urlencoded' },
        body: `email=${name.email}&password=${name.password}`
    }

    return dispatch => {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(name))

        return fetch('http://localhost:8080/sessions/create', config)
            .then(response =>
                response.json().then(user => ({ user, response }))
            ).then(({ user, response }) =>  {
                if (!response.ok) {
                    // If there was a problem, we want to
                    // dispatch the error condition
                    dispatch(loginError(user.message))
                    return Promise.reject(user)
                } else {
                    // If login was successful, set the token in local storage
                    localStorage.setItem('id_token', user.id_token)
                    // Dispatch the success action
                    dispatch(receiveLogin(user))
                }
            }).catch(err => console.log("Error: ", err))
    }
}

// Logs the user out
export function logoutUser() {
    return dispatch => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        dispatch(receiveLogout())
    }
}


// export function fetchUsers() {
//     const url = `${API}`;
//     const request = axios.get(url);
//
//     return{
//         type: FETCH_USERS,
//         payload: request
//     }
// }