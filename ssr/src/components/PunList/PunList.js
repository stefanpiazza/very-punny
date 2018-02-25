'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Pun = require('../Pun/Pun');

var _Pun2 = _interopRequireDefault(_Pun);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    'pun-list': 'PunList__pun-list___xnpNz',
    'pun-list__item': 'PunList__pun-list__item___wDM25'
};

var PunList = function PunList(_ref) {
    var puns = _ref.puns;

    var punListItems = function punListItems(puns) {
        return puns.map(function (pun, index) {
            return punListItem(pun, index);
        });
    };
    var punListItem = function punListItem(pun, index) {
        return _react2.default.createElement(
            'li',
            { className: 'pun-list__item', key: index },
            _react2.default.createElement(_Pun2.default, { joke: pun.joke, punchLine: pun.punchLine })
        );
    };

    return _react2.default.createElement(
        'ul',
        { className: 'pun-list' },
        punListItems(puns)
    );
};

exports.default = PunList;