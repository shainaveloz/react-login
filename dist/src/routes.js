'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _loginForm = require('./containers/login-form');

var _loginForm2 = _interopRequireDefault(_loginForm);

var _userList = require('./containers/user-list');

var _userList2 = _interopRequireDefault(_userList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _app2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _loginForm2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/users', component: _userList2.default })
);
//# sourceMappingURL=routes.js.map