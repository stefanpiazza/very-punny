'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ssrapp = undefined;

var _firebaseFunctions = require('firebase-functions');

var functions = _interopRequireWildcard(_firebaseFunctions);

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reducers = require('./src/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./src/actions');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var config = {
    apiKey: "AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",
    authDomain: "very-punny.firebaseapp.com",
    databaseURL: "https://very-punny.firebaseio.com",
    projectId: "very-punny",
    storageBucket: "",
    messagingSenderId: "911938183753"
};
_firebase2.default.initializeApp(config);

var index = _fs2.default.readFileSync(_path2.default.resolve(__dirname, 'dist/ssr-index.html'), 'utf-8');
var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.resolve(__dirname, 'dist')));

app.get('*', function (req, res) {
    var db = _firebase2.default.database();
    var dbRef = db.ref();
    var punsRef = dbRef.child('puns');
    punsRef.once('value').then(function (snap) {
        var store = (0, _redux.createStore)(_reducers2.default, { user: { "isLoggedIn": false }, puns: snap.val(), pun: {} });

        var html = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouter.StaticRouter,
                { location: req.url, context: {} },
                _react2.default.createElement(_App2.default, null)
            )
        ));

        var finalHtml = index.replace('<!-- ::App:: -->', html);

        res.send(finalHtml);
    });
});

app.listen(3000, '0.0.0.0', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info('Listening at http://localhost:3000');
    }
});

var ssrapp = exports.ssrapp = functions.https.onRequest(app);