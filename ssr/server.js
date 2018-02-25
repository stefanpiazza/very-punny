'use strict';

var _App = require('./src/App');

var _App2 = _interopRequireDefault(_App);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reducers = require('./src/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
    apiKey: "AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",
    authDomain: "very-punny.firebaseapp.com",
    databaseURL: "https://very-punny.firebaseio.com",
    projectId: "very-punny",
    storageBucket: "",
    messagingSenderId: "911938183753"
};
_firebase2.default.initializeApp(config);

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.resolve(__dirname, 'dist')));

app.get('*', function (req, res) {
    res.send('\n        <!doctype html>\n        <html>\n            <head>\n                <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>\n                <meta name="viewport" content="width=device-width, initial-scale=1">\n                <link rel="manifest" href="manifest.json">\n                <link rel=\'stylesheet\' href=\'/static/styles/app.css\'>\n            </head>\n            <body>\n                <div id=\'root\'>' + (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: (0, _redux.createStore)(_reducers2.default) },
        _react2.default.createElement(
            _reactRouter.StaticRouter,
            { location: req.url, context: {} },
            _react2.default.createElement(_App2.default, null)
        )
    )) + '</div>\n                <script src=\'/static/scripts/common.js\'></script>\n                <script src=\'/static/scripts/app.js\'></script>\n            </body>\n        </html>\n    ');
});

app.listen(3000, '0.0.0.0', function (err) {
    if (err) {
        console.error(err);
    } else {
        console.info('Listening at http://localhost:3000');
    }
});