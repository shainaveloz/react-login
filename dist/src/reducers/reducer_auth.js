'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = auth;

var _index = require('../actions/index');

//import jwtDecode from 'jwt-decode';

function auth() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        isFetching: false,
        isAuthenticated: localStorage.getItem('id_token') ? true : false
    };
    var action = arguments[1];

    switch (action.type) {
        case _index.LOGIN_USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds
            });
        case _index.LOGIN_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            });
        case _index.LOGIN_USER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message
            });
        case _index.LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });
        default:
            return state;
    }
}
//# sourceMappingURL=reducer_auth.js.map