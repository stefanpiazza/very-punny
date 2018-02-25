'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _firebase = require('firebase');

var firebase = _interopRequireWildcard(_firebase);

var _Button = require('../../components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    'admin': 'Admin__admin___3PpTK',
    'form': 'Admin__form___1GJ7H',
    'input': 'Admin__input___2CD05',
    'input--error': 'Admin__input--error___1R8Zu'
};

var Admin = function (_React$Component) {
    _inherits(Admin, _React$Component);

    function Admin(props) {
        _classCallCheck(this, Admin);

        var _this = _possibleConstructorReturn(this, (Admin.__proto__ || Object.getPrototypeOf(Admin)).call(this, props));

        _this.state = {
            email: null,
            password: null
        };

        _this.handleLogIn = _this.handleLogIn.bind(_this);
        _this.handleLogOut = _this.handleLogOut.bind(_this);
        return _this;
    }

    _createClass(Admin, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'renderLogIn',
        value: function renderLogIn() {
            var emailClass = this.state.email === false ? 'input input--error' : 'input';
            var passwordClass = this.state.password === false ? 'input input--error' : 'input';

            return _react2.default.createElement(
                'div',
                { className: 'form' },
                _react2.default.createElement('input', { type: 'email', placeholder: 'Enter email', className: emailClass, id: 'email' }),
                _react2.default.createElement('input', { type: 'password', placeholder: 'Enter password', className: passwordClass, id: 'password' })
            );
        }
    }, {
        key: 'handleLogIn',
        value: function handleLogIn() {
            var _this2 = this;

            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            this.setState({
                email: null,
                password: null
            });

            if (!email) this.setState({ email: false });
            if (!password) this.setState({ password: false });

            if (!email || !password) return;

            var auth = firebase.auth();
            auth.signInWithEmailAndPassword(email, password).then(function () {
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';

                _this2.props.userLogIn({ name: 'Stefan' });
            }).catch(function () {
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';

                _this2.props.userLogOut();
            });
        }
    }, {
        key: 'handleLogOut',
        value: function handleLogOut() {
            var _this3 = this;

            var auth = firebase.auth();
            auth.signOut().then(function () {
                _this3.props.userLogOut();
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var adminLogin = null;
            var button = null;

            if (!this.props.user.isLoggedIn) {
                adminLogin = this.renderLogIn();
                button = _react2.default.createElement(_Button2.default, { text: 'Log in', onClick: this.handleLogIn });
            } else {
                adminLogin = null;
                button = _react2.default.createElement(_Button2.default, { text: 'Log Out', onClick: this.handleLogOut });
            }

            return _react2.default.createElement(
                'div',
                { className: 'admin' },
                adminLogin,
                button
            );
        }
    }]);

    return Admin;
}(_react2.default.Component);

function mapStatesToProps(state) {
    return {
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        userLogIn: _actions.userLogIn,
        userLogOut: _actions.userLogOut
    }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatesToProps, matchDispatchToProps)(Admin);