'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _systemImportTransformerGlobalIdentifier = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _app = require('firebase/app');

var firebase = _interopRequireWildcard(_app);

require('firebase/database');

var _Navigation = require('./components/Navigation/Navigation');

var _Navigation2 = _interopRequireDefault(_Navigation);

var _AsyncRoute = require('./components/AsyncRoute/AsyncRoute');

var _AsyncRoute2 = _interopRequireDefault(_AsyncRoute);

var _Loading = require('./components/Loading/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('./actions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    'app': 'App__app___2XyUa',
    'container': 'App__container___sGqxY'
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            isFetching: _this.props.puns.length > 0 ? false : true
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            if (this.state.isFetching) {
                var db = firebase.database();
                var dbRef = db.ref();
                var punsRef = dbRef.child('puns');
                punsRef.once('value', function (snap) {
                    snap.val().map(function (pun) {
                        _this2.props.addPun(pun);
                    });
                }).then(function () {
                    _this2.setState({
                        isFetching: false
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.isFetching) {
                return _react2.default.createElement(
                    'div',
                    { className: 'app' },
                    _react2.default.createElement(_Navigation2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(_Loading2.default, { text: 'Loading...' })
                    )
                );
            } else {
                return _react2.default.createElement(
                    'div',
                    { className: 'app' },
                    _react2.default.createElement(_Navigation2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'container' },
                        _react2.default.createElement(
                            _reactRouterDom.Switch,
                            null,
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: function component(props) {
                                    return _react2.default.createElement(_AsyncRoute2.default, { props: props, loading: new Promise(function (resolve, reject) {
                                            _systemImportTransformerGlobalIdentifier.require(['./containers/Home/Home'], resolve, reject);
                                        }) });
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/all', component: function component(props) {
                                    return _react2.default.createElement(_AsyncRoute2.default, { props: props, loading: new Promise(function (resolve, reject) {
                                            _systemImportTransformerGlobalIdentifier.require(['./containers/All/All'], resolve, reject);
                                        }) });
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/admin', component: function component(props) {
                                    return _react2.default.createElement(_AsyncRoute2.default, { props: props, loading: new Promise(function (resolve, reject) {
                                            _systemImportTransformerGlobalIdentifier.require(['./containers/Admin/Admin'], resolve, reject);
                                        }) });
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { path: '/pun/:id', component: function component(props) {
                                    return _react2.default.createElement(_AsyncRoute2.default, { props: props, loading: new Promise(function (resolve, reject) {
                                            _systemImportTransformerGlobalIdentifier.require(['./containers/Pun/Pun'], resolve, reject);
                                        }) });
                                } }),
                            _react2.default.createElement(_reactRouterDom.Route, { component: function component(props) {
                                    return _react2.default.createElement(_AsyncRoute2.default, { props: props, loading: new Promise(function (resolve, reject) {
                                            _systemImportTransformerGlobalIdentifier.require(['./containers/NotFound/NotFound'], resolve, reject);
                                        }) });
                                } })
                        )
                    )
                );
            }
        }
    }]);

    return App;
}(_react2.default.Component);

function mapStatesToProps(state) {
    return {
        puns: state.puns
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        addPun: _actions.addPun
    }, dispatch);
}

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStatesToProps, matchDispatchToProps)(App));