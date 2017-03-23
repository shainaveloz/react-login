'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer_home = require('./reducer_home');

var _reducer_home2 = _interopRequireDefault(_reducer_home);

var _reducer_auth = require('./reducer_auth');

var _reducer_auth2 = _interopRequireDefault(_reducer_auth);

var _reducer_users = require('./reducer_users');

var _reducer_users2 = _interopRequireDefault(_reducer_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    home: _reducer_home2.default,
    auth: _reducer_auth2.default,
    users: _reducer_users2.default
});

exports.default = rootReducer;
//# sourceMappingURL=index.js.map