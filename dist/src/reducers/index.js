'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer_users = require('./reducer_users');

var _reducer_users2 = _interopRequireDefault(_reducer_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    users: _reducer_users2.default
});

exports.default = rootReducer;
//# sourceMappingURL=index.js.map