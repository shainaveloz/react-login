'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginUser = loginUser;
exports.authError = authError;
exports.logoutUser = logoutUser;
exports.fetchUsers = fetchUsers;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouter = require('react-router');

var _types = require('./types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var token = localStorage.getItem('token');

_axios2.default.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (config.url.indexOf(_types.API_URL) === 0 && token) {
        config.headers['x-access-token'] = token;
    }
    //console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    console.log(error);
    return Promise.reject(error);
});

_axios2.default.interceptors.response.use(function (response) {
    // Do something with response data
    if (response.data.message == 'Failed to authenticate token') {
        _reactRouter.browserHistory.push('/login');
    } else if (response.config.url.indexOf(_types.API_URL) === 0 && response.data.token) {
        localStorage.setItem('token', response.data.token);
    }

    //console.log(response);
    return response;
}, function (error) {
    // Do something with response error
    if (error.status === 401) {
        _reactRouter.browserHistory.push('/login');
    }
    /**
     * Account Disabled
     */
    if (response.status === 401 && error.data.message == 'Team account disabled') {
        logoutUser();
        _reactRouter.browserHistory.push('/login');
    }

    /**
     * Forbiddend Unauthorized
     */
    if (error.status === 403) {}
    //$state.go('home.error',{errorCode: 403});


    /**
     * Not Found
     */
    if (error.status === 404) {}
    //$state.go('home.error',{errorCode: 404});


    /**
     * Invalid Token
     */
    if (error.status === 401 && error.data.message == 'Failed to authenticate token') {
        logoutUser();
        _reactRouter.browserHistory.push('/login');
    }
    console.log(error);
    return Promise.reject(response);
});

function loginUser(_ref) {
    var email = _ref.email,
        password = _ref.password;

    return function (dispatch) {
        _axios2.default.post(_types.API_URL + '/authenticate', { email: email, password: password }).then(function (response) {
            dispatch({ type: _types.AUTH_USER });
            localStorage.setItem('token', response.data.token);
            _reactRouter.browserHistory.push('/admin/user_accounts');
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

function fetchUsers() {
    return function (dispatch) {
        _axios2.default.get(_types.API_URL + '/api/admin/accounts', {
            headers: { 'x-access-token': token }
        }).then(function (response) {
            dispatch({
                type: _types.FETCH_USERS,
                payload: response
            });
        }).catch(function () {
            dispatch(authError('Error'));
        });
    };
}
//# sourceMappingURL=index.js.map