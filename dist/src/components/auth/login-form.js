'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _redux = require('redux');

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'handleSubmit',
        value: function handleSubmit(event, _ref) {
            var email = _ref.email,
                password = _ref.password;

            console.log('A user was logged in: ' + this.state.email);
            event.preventDefault();

            // Need to do something to log user in
            this.props.requestLogin({ email: email, password: password });
        }
    }, {
        key: 'renderAlert',
        value: function renderAlert() {
            if (this.props.errorMessage) {
                return _react2.default.createElement(
                    'div',
                    { className: 'alert alert-danger' },
                    _react2.default.createElement(
                        'strong',
                        null,
                        'Oops!'
                    ),
                    ' ',
                    this.props.errorMessage
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                _props$fields = _props.fields,
                email = _props$fields.email,
                password = _props$fields.password;

            return _react2.default.createElement(
                'form',
                { className: 'form', onSubmit: handleSubmit(this.handleSubmit(this).bind) },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-4' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group', placeholder: 'username', required: '' },
                        'Email:',
                        _react2.default.createElement('input', _extends({}, email, { className: 'form-control', type: 'text', name: 'email', placeholder: 'email', required: '' }))
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        'Password:',
                        _react2.default.createElement('input', _extends({}, password, { type: 'password', className: 'form-control', name: 'password', placeholder: 'password', required: '' }))
                    ),
                    this.renderAlert(),
                    _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                )
            );
        }
    }]);

    return Login;
}(_react.Component);

;

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

exports.default = (0, _reduxForm.reduxForm)({
    form: 'login',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Login);
//# sourceMappingURL=login-form.js.map