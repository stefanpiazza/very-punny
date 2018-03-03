'use strict';

var _reactRouterRedux = require('react-router-redux');

var _history = require('history');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('firebase/app');

var firebase = _interopRequireWildcard(_app);

require('firebase/database');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var config = {
    apiKey: "AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",
    authDomain: "very-punny.firebaseapp.com",
    databaseURL: "https://very-punny.firebaseio.com",
    projectId: "very-punny",
    storageBucket: "",
    messagingSenderId: "911938183753"
};
firebase.initializeApp(config);

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
    module.hot.accept('./reducers', function () {
        store.replaceReducer(require('./reducers').default);
    });
} else if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/sw.js').then(function (registration) {
                console.log('SW registered: ', registration);
            }).catch(function (registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
}

var history = (0, _history.createBrowserHistory)();
var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)((0, _reactRouterRedux.routerMiddleware)(history)));

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouterRedux.ConnectedRouter,
        { history: history },
        _react2.default.createElement(_App2.default, null)
    )
), document.getElementById('root'));