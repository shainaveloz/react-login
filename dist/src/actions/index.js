'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginUser = loginUser;
exports.authError = authError;
exports.logoutUser = logoutUser;
exports.fetchMessage = fetchMessage;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = '';

_axios2.default.interceptors.request.use(function (config) {
    // Do something before request is sent
    var token = localStorage.getItem('token');
    if (config.url.indexOf(API_URL) === 0 && token) {
        config.headers['x-access-token'] = token;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

_axios2.default.interceptors.response.use(function (res) {
    // Do something with response data
    var token = localStorage.getItem('token');
    if (res.data.message == 'Failed to authenticate token') {
        _reactRouter.browserHistory.push('/login');
    } else if (res.config.url.indexOf(API_URL) === 0 && res.data.token) {
        console.log(res.data.token);
    }
    return response;
}, function (error) {
    // Do something with response error
    _reactRouter.browserHistory.push('/login');
    return Promise.reject(error);
});

function loginUser(_ref) {
    var email = _ref.email,
        password = _ref.password;

    return function (dispatch) {
        _axios2.default.post(API_URL + '/authenticate', { email: email, password: password }).then(function (response) {
            console.log(response.headers);
            dispatch({ type: _types.AUTH_USER });
            localStorage.setItem('token', response.data.token);
            _reactRouter.browserHistory.push('/feature');
        }).catch(function () {
            dispatch(authError('Bad Login Info'));
        });
    };
}

function authError(error) {
    return {
        type: _types.AUTH_ERROR,
        payload: error
    };
}

function logoutUser() {
    localStorage.removeItem('token');

    return { type: _types.UNAUTH_USER };
}

function fetchMessage() {
    return function (dispatch) {
        _axios2.default.get(API_URL, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        }).then(function (response) {
            dispatch({
                type: _types.FETCH_MESSAGE,
                payload: response.data.message
            });
        });
    };
}
//# sourceMappingURL=index.js.map