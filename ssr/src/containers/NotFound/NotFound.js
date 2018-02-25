'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var styles = {
    'not-found': 'NotFound__not-found___17Y8-',
    'error': 'NotFound__error___1GmJ5'
};

var NotFound = function NotFound(_ref) {
    _objectDestructuringEmpty(_ref);

    return _react2.default.createElement(
        'div',
        { className: 'not-found' },
        _react2.default.createElement(
            'p',
            { className: 'error' },
            'No puns here.'
        )
    );
};

exports.default = NotFound;