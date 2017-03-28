'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'renderLinks',
        value: function renderLinks() {
            if (this.props.authenticated) {
                return _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'nav-link', to: '/logout' },
                        'Log Out'
                    )
                );
            } else {
                return _react2.default.createElement(
                    'li',
                    { className: 'nav-item' },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { className: 'nav-link', to: '/login' },
                        'Log In'
                    )
                );
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-light' },
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/', className: 'navbar-brand' },
                    ' Happster App'
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'nav navbar-nav' },
                    this.renderLinks()
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);
//# sourceMappingURL=header.js.map