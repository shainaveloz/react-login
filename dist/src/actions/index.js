'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LOGOUT_FAILURE = exports.LOGOUT_SUCCESS = exports.LOGOUT_REQUEST = exports.LOGIN_USER_FAILURE = exports.LOGIN_USER_SUCCESS = exports.LOGIN_USER_REQUEST = undefined;
exports.parseJSON = parseJSON;
exports.loginUser = loginUser;
exports.logoutUser = logoutUser;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

var _api = require('../middleware/api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOGIN_USER_REQUEST = exports.LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
var LOGIN_USER_SUCCESS = exports.LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
var LOGIN_USER_FAILURE = exports.LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
var LOGOUT_REQUEST = exports.LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_SUCCESS = exports.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
var LOGOUT_FAILURE = exports.LOGOUT_FAILURE = 'LOGOUT_FAILURE';
//export const FETCH_USERS = 'FETCH_USERS';

function parseJSON(response) {
    return response.json();
}

function requestLogin(name) {
    return {
        type: LOGIN_USER_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        name: name
    };
}

function receiveLogin(user) {
    return {
        type: LOGIN_USER_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        id_token: user.id_token
    };
}

function loginError(message) {
    return {
        type: LOGIN_USER_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message: message
    };
}

function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    };
}

function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    };
}

function loginUser(creds) {

    var config = {
        method: 'POST',
        headers: { 'x-access-token': 'application/x-www-form-urlencoded' },
        body: 'email=' + name.email + '&password=' + name.password
    };

    return function (dispatch) {
        // We dispatch requestLogin to kickoff the call to the API
        dispatch(requestLogin(name));

        return fetch('http://localhost:8080/sessions/create', config).then(function (response) {
            return response.json().then(function (user) {
                return { user: user, response: response };
            });
        }).then(function (_ref) {
            var user = _ref.user,
                response = _ref.response;

            if (!response.ok) {
                // If there was a problem, we want to
                // dispatch the error condition
                dispatch(loginError(user.message));
                return Promise.reject(user);
            } else {
                // If login was successful, set the token in local storage
                localStorage.setItem('id_token', user.id_token);
                // Dispatch the success action
                dispatch(receiveLogin(user));
            }
        }).catch(function (err) {
            return console.log("Error: ", err);
        });
    };
}

// Logs the user out
function logoutUser() {
    return function (dispatch) {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        dispatch(receiveLogout());
    };
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
//# sourceMappingURL=index.js.map