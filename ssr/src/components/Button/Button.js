'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    'button': 'Button__button___1WSrj'
};

var Button = function Button(_ref) {
    var onClick = _ref.onClick,
        text = _ref.text;

    return _react2.default.createElement(
        'div',
        { className: 'button', onClick: onClick },
        text
    );
};

Button.propTypes = {
    onClick: _propTypes2.default.func,
    text: _propTypes2.default.string
};

exports.default = Button;