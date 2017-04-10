'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reactRouter = require('react-router');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _app = require('./components/app');

var _app2 = _interopRequireDefault(_app);

var _login = require('./components/auth/login');

var _login2 = _interopRequireDefault(_login);

var _logout = require('./components/auth/logout');

var _logout2 = _interopRequireDefault(_logout);

var _adminUsersAccounts = require('./components/adminUsersAccounts');

var _adminUsersAccounts2 = _interopRequireDefault(_adminUsersAccounts);

var _require_auth = require('./components/auth/require_auth');

var _require_auth2 = _interopRequireDefault(_require_auth);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _types = require('./actions/types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStoreWithMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, _reduxLogger2.default)(_redux.createStore);
var store = createStoreWithMiddleware(_reducers2.default);

var token = localStorage.getItem('token');

if (token) {
    store.dispatch({ type: _types.AUTH_USER });
}

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouter.Router,
        { history: _reactRouter.browserHistory },
        _react2.default.createElement(
            _reactRouter.Route,
            { path: '/', component: _app2.default },
            _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _login2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'logout', component: _logout2.default }),
            _react2.default.createElement(_reactRouter.Route, { path: 'admin/user_accounts', component: (0, _require_auth2.default)(_adminUsersAccounts2.default) })
        )
    )
), document.querySelector('.container'));
//# sourceMappingURL=index.js.map