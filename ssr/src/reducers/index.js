'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reactRouterRedux = require('react-router-redux');

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _puns = require('./puns');

var _puns2 = _interopRequireDefault(_puns);

var _pun = require('./pun');

var _pun2 = _interopRequireDefault(_pun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    user: _user2.default,
    puns: _puns2.default,
    pun: _pun2.default,
    routing: _reactRouterRedux.routerReducer
});

exports.default = reducers;