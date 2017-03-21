'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _index = require('../actions/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.state = {
            value: ''
        };

        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.onFormSubmit = _this.onFormSubmit.bind(_this);
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'onInputChange',
        value: function onInputChange(event) {
            this.setState({
                email: event.target.email,
                password: event.target.password
            });
        }
    }, {
        key: 'onFormSubmit',
        value: function onFormSubmit(event) {
            console.log('A user was logged in: ' + this.state.email);
            event.preventDefault();

            this.props.fetchUsers(this.state.value);
            this.setState({
                email: '',
                password: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'form',
                { className: 'form', onSubmit: this.onFormSubmit },
                _react2.default.createElement(
                    'div',
                    { className: 'col-md-4' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group', placeholder: 'username', required: '' },
                        'Email:',
                        _react2.default.createElement('input', { className: 'form-control', type: 'text', value: this.state.email, onChange: this.onInputChange, placeholder: 'email', required: '' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        'Password:',
                        _react2.default.createElement('input', { type: 'password', className: 'form-control', value: this.state.password, onChange: this.onInputChange, placeholder: 'password', required: '' })
                    ),
                    _react2.default.createElement('input', { type: 'submit', value: 'Submit' })
                )
            );
        }
    }]);

    return LoginForm;
}(_react.Component);

;

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({ fetchUsers: _index.fetchUsers }, dispatch);
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(LoginForm);
//# sourceMappingURL=login-form.js.map