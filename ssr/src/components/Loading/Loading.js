'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'loading': 'Loading__loading___1_Z-O'
};

var Loading = function Loading(_ref) {
  var text = _ref.text;
  return _react2.default.createElement(
    'p',
    { className: 'loading' },
    text
  );
};

exports.default = Loading;