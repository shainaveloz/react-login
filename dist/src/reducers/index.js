'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducer_userLogin = require('./reducer_userLogin.js');

var _reducer_userLogin2 = _interopRequireDefault(_reducer_userLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    userLogin: _reducer_userLogin2.default
});

exports.default = rootReducer;
//# sourceMappingURL=index.js.map