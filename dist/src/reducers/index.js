'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxForm = require('redux-form');

var _reducer_auth = require('./reducer_auth');

var _reducer_auth2 = _interopRequireDefault(_reducer_auth);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
    form: _reduxForm.reducer,
    auth: _reducer_auth2.default,
    users: _users2.default

});

exports.default = rootReducer;
//# sourceMappingURL=index.js.map