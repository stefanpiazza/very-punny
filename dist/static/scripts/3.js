webpackJsonp([3],{

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _firebase = __webpack_require__(25);

var firebase = _interopRequireWildcard(_firebase);

var _Loading = __webpack_require__(107);

var _Loading2 = _interopRequireDefault(_Loading);

var _Pun = __webpack_require__(108);

var _Pun2 = _interopRequireDefault(_Pun);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(235);

var PunList = function (_React$Component) {
    _inherits(PunList, _React$Component);

    function PunList(props) {
        _classCallCheck(this, PunList);

        var _this = _possibleConstructorReturn(this, (PunList.__proto__ || Object.getPrototypeOf(PunList)).call(this, props));

        _this.state = {
            data: [],
            isLoading: true
        };
        return _this;
    }

    _createClass(PunList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var db = firebase.database();
            var dbRef = db.ref();
            var punsRef = dbRef.child('puns');
            punsRef.once('value', function (snap) {
                _this2.setState({
                    data: snap.val(),
                    isLoading: false
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var loading = null;
            var punList = null;

            if (!this.state.isLoading) {
                punList = this.state.data.map(function (pun, index) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'pun-list__item', key: index },
                        _react2.default.createElement(_Pun2.default, { joke: pun.joke, punchLine: pun.punchLine })
                    );
                });

                loading = null;
            } else {
                loading = _react2.default.createElement(_Loading2.default, { text: 'Loading...' });
            }

            return _react2.default.createElement(
                'ul',
                { className: 'pun-list' },
                loading,
                punList
            );
        }
    }]);

    return PunList;
}(_react2.default.Component);

exports.default = PunList;

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pun-list":"pun-list","punList":"pun-list","pun-list__item":"pun-list__item","punListItem":"pun-list__item"};

/***/ })

});
//# sourceMappingURL=3.js.map