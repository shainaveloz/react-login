'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _loginForm = require('./components/login-form.js');

var _loginForm2 = _interopRequireDefault(_loginForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
            'div',
            { className: 'col-md-12' },
            _react2.default.createElement(
                'div',
                { className: 'page-header' },
                _react2.default.createElement(
                    'h1',
                    null,
                    'Happster Login'
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'col-md-4' },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Sign In'
                ),
                _react2.default.createElement(_loginForm2.default, null)
            )
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(App, null), document.querySelector('.container'));
//# sourceMappingURL=index.js.map