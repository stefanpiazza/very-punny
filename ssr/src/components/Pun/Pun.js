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
    'pun': 'Pun__pun___1myxT',
    'joke': 'Pun__joke___29VBX',
    'punch-line': 'Pun__punch-line___3lSAt'
};

var Pun = function Pun(_ref) {
    var joke = _ref.joke,
        punchLine = _ref.punchLine;

    return _react2.default.createElement(
        'div',
        { className: 'pun' },
        _react2.default.createElement(Joke, { text: joke }),
        _react2.default.createElement(PunchLine, { text: punchLine })
    );
};

var Joke = function Joke(_ref2) {
    var text = _ref2.text;
    return _react2.default.createElement(
        'p',
        { className: 'joke' },
        text
    );
};
var PunchLine = function PunchLine(_ref3) {
    var text = _ref3.text;
    return _react2.default.createElement(
        'p',
        { className: 'punch-line' },
        text
    );
};

Pun.propTypes = {
    joke: _propTypes2.default.string,
    punchLine: _propTypes2.default.string
};

exports.default = Pun;