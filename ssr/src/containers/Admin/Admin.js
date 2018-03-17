'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _app = require('firebase/app');

var firebase = _interopRequireWildcard(_app);

require('firebase/auth');

var _Button = require('../../components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _PunList = require('../../components/PunList/PunList');

var _PunList2 = _interopRequireDefault(_PunList);

var _Pun = require('../../components/Pun/Pun');

var _Pun2 = _interopRequireDefault(_Pun);

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
    'pun-list__item': 'Admin__pun-list__item___2TnIW',
    'button': 'Admin__button___3jrHQ',
    'form': 'Admin__form___1GJ7H',
    'input': 'Admin__input___2CD05',
    'input--error': 'Admin__input--error___1R8Zu',
    'input-joke': 'Admin__input-joke___2nSnB',
    'input-punch-line': 'Admin__input-punch-line___2p9Tk'
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
        _this.handleRemove = _this.handleRemove.bind(_this);
        _this.handleAdd = _this.handleAdd.bind(_this);
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

                _this2.props.userLogIn({ name: email });
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
        key: 'renderLoggedIn',
        value: function renderLoggedIn() {
            var _this4 = this;

            return _react2.default.createElement(
                'ul',
                { className: 'pun-list' },
                _react2.default.createElement(
                    'li',
                    { className: 'pun-list__item' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pun' },
                        _react2.default.createElement('input', { type: 'text', className: 'joke input-joke', placeholder: 'Enter a joke' }),
                        _react2.default.createElement('input', { type: 'text', className: 'punch-line input-punch-line', placeholder: 'Enter a punch line' })
                    ),
                    _react2.default.createElement(_Button2.default, { text: '+', onClick: function onClick() {
                            return _this4.handleAdd();
                        }, type: 'square' })
                ),
                this.props.puns.map(function (pun, index) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'pun-list__item', key: index },
                        _react2.default.createElement(
                            'div',
                            { className: 'pun' },
                            _react2.default.createElement(
                                'p',
                                { type: 'text', className: 'joke' },
                                pun.joke
                            ),
                            _react2.default.createElement(
                                'p',
                                { type: 'text', className: 'punch-line' },
                                pun.punchLine
                            )
                        ),
                        _react2.default.createElement(_Button2.default, { text: '-', onClick: function onClick() {
                                return _this4.handleRemove(pun);
                            }, type: 'square' })
                    );
                })
            );
        }
    }, {
        key: 'handleRemove',
        value: function handleRemove(pun) {
            this.props.removePun(pun);
        }
    }, {
        key: 'handleAdd',
        value: function handleAdd() {
            var _this5 = this;

            var joke = document.getElementById('joke').value;
            var punchLine = document.getElementById('punch-line').value;

            if (!joke || !punchLine) return;

            var pun = {
                "joke": document.getElementById('joke').value,
                "punchLine": document.getElementById('punch-line').value
            };

            var index = this.props.puns.length;

            var db = firebase.database();
            var dbRef = db.ref();
            var punsRef = dbRef.child('puns');

            punsRef.child(index).set(pun).then(function () {
                _this5.props.addPun(pun);

                document.getElementById('joke').value = '';
                document.getElementById('punch-line').value = '';
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var adminLoggedIn = null;
            var adminLogin = null;
            var button = null;

            if (!this.props.user.isLoggedIn) {
                adminLoggedIn = false;
                adminLogin = this.renderLogIn();
                button = _react2.default.createElement(_Button2.default, { text: 'Log in', onClick: this.handleLogIn });
            } else {
                adminLoggedIn = this.renderLoggedIn();
                adminLogin = null;
                button = _react2.default.createElement(_Button2.default, { text: 'Log Out', onClick: this.handleLogOut });
            }

            return _react2.default.createElement(
                'div',
                { className: 'admin' },
                adminLoggedIn,
                adminLogin,
                button
            );
        }
    }]);

    return Admin;
}(_react2.default.Component);

function mapStatesToProps(state) {
    return {
        puns: state.puns,
        user: state.user
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        userLogIn: _actions.userLogIn,
        userLogOut: _actions.userLogOut,
        addPun: _actions.addPun,
        removePun: _actions.removePun
    }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatesToProps, matchDispatchToProps)(Admin);