'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FETCH_USERS = undefined;
exports.fetchUsers = fetchUsers;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API = '';

var FETCH_USERS = exports.FETCH_USERS = 'FETCH_USERS';

function fetchUsers() {
    var url = API + '/authenticate';
    var request = _axios2.default.get(url);

    return {
        type: FETCH_USERS,
        payload: request
    };
}
//# sourceMappingURL=index.js.map