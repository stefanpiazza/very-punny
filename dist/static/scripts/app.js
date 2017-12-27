webpackJsonp([0],{

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _firebase = __webpack_require__(20);

var firebase = _interopRequireWildcard(_firebase);

var _App = __webpack_require__(86);

var _App2 = _interopRequireDefault(_App);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = __webpack_require__(87);

var config = {
    apiKey: "AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",
    authDomain: "very-punny.firebaseapp.com",
    databaseURL: "https://very-punny.firebaseio.com",
    projectId: "very-punny",
    storageBucket: "",
    messagingSenderId: "911938183753"
};
firebase.initializeApp(config);

(0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"container":"container"};

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(178);

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'button', onClick: this.props.onClick },
                this.props.text
            );
        }
    }]);

    return Button;
}(_react2.default.Component);

Button.propTypes = {
    onClick: _propTypes2.default.func,
    text: _propTypes2.default.string
};

exports.default = Button;

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"button":"button"};

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(180);

var Pun = function (_React$Component) {
    _inherits(Pun, _React$Component);

    function Pun(props) {
        _classCallCheck(this, Pun);

        return _possibleConstructorReturn(this, (Pun.__proto__ || Object.getPrototypeOf(Pun)).call(this, props));
    }

    _createClass(Pun, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'pun' },
                _react2.default.createElement(
                    'p',
                    { className: 'joke' },
                    this.props.joke
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'punch-line' },
                    this.props.punchLine
                )
            );
        }
    }]);

    return Pun;
}(_react2.default.Component);

exports.default = Pun;

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"pun":"pun","joke":"joke","punch-line":"punch-line","punchLine":"punch-line"};

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = [{"joke":"Did you hear about the guy whose whole left side was cut off?","punchLine":"He's all right now."},{"joke":"Why don't some couples go to the gym?","punchLine":"Because some relationships don't work out."},{"joke":"I wasn't originally going to get a brain transplant,","punchLine":"but then I changed my mind."},{"joke":"Yesterday I accidentally swallowed some food coloring.","punchLine":"The doctor says I'm OK, but I feel like I've dyed a little inside."},{"joke":"I wondered why the baseball was getting bigger.","punchLine":"Then it hit me."},{"joke":"I'd tell you a chemistry joke","punchLine":"but I know I wouldn't get a reaction."},{"joke":"A friend of mine tried to annoy me with bird puns","punchLine":"but I soon realized that toucan play at that game."},{"joke":"Have you ever tried to eat a clock?","punchLine":"It's very time consuming."},{"joke":"Did you hear about the guy who got hit in the head with a can of soda?","punchLine":"He was lucky it was a soft drink."},{"joke":"If there was someone selling drugs in this place,","punchLine":"weed know."}]

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(7);

var _propTypes = __webpack_require__(31);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _firebase = __webpack_require__(20);

var firebase = _interopRequireWildcard(_firebase);

var _Button = __webpack_require__(177);

var _Button2 = _interopRequireDefault(_Button);

var _Pun = __webpack_require__(179);

var _Pun2 = _interopRequireDefault(_Pun);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = __webpack_require__(162);

var data = __webpack_require__(181);

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            currentIndex: 0,
            pun: data[0]
        };

        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {}
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            var filteredData = data.filter(function (item) {
                return data.indexOf(item) !== _this2.state.currentIndex;
            });
            var dataIndex = Math.floor(Math.random() * filteredData.length);
            var item = filteredData[dataIndex];

            this.setState({
                currentIndex: data.indexOf(item),
                pun: item
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'app' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_Pun2.default, { joke: this.state.pun.joke, punchLine: this.state.pun.punchLine }),
                    _react2.default.createElement(_Button2.default, { text: 'Another Pun', onClick: this.update })
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[161]);
//# sourceMappingURL=app.js.map