'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _reactRedux = require('react-redux');

var _index = require('../../actions/index');

var actions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Authenticate = function (_Component) {
    _inherits(Authenticate, _Component);

    function Authenticate() {
        _classCallCheck(this, Authenticate);

        return _possibleConstructorReturn(this, (Authenticate.__proto__ || Object.getPrototypeOf(Authenticate)).apply(this, arguments));
    }

    _createClass(Authenticate, [{
        key: 'handleFormSubmit',
        value: function handleFormSubmit(_ref) {
            var email = _ref.email,
                password = _ref.password;

            console.log(email, password);

            this.props.loginUser({ email: email, password: password });
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
            var handleSubmit = this.props.handleSubmit;

            return _react2.default.createElement(
                'form',
                { onSubmit: handleSubmit(this.handleFormSubmit.bind(this)) },
                _react2.default.createElement(
                    'fieldset',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Email:'
                    ),
                    _react2.default.createElement(_reduxForm.Field, { name: 'email', component: 'input', type: 'text', className: 'form-control' })
                ),
                _react2.default.createElement(
                    'fieldset',
                    { className: 'form-group' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'Password:'
                    ),
                    _react2.default.createElement(_reduxForm.Field, { name: 'password', component: 'input', type: 'password', className: 'form-control' })
                ),
                _react2.default.createElement(
                    'button',
                    { action: 'submit', className: 'btn btn-primary' },
                    ' Log in'
                )
            );
        }
    }]);

    return Authenticate;
}(_react.Component);

;

function mapStateToProps(state) {
    return { form: state.form };
}

Authenticate = (0, _reactRedux.connect)(mapStateToProps, actions)(Authenticate);

Authenticate = (0, _reduxForm.reduxForm)({
    form: 'login'
})(Authenticate);

exports.default = Authenticate;
//# sourceMappingURL=authenticate.js.map