'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Button = require('../../components/Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Pun = require('../../components/Pun/Pun');

var _Pun2 = _interopRequireDefault(_Pun);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    'home': 'Home__home___OjJam'
};

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.update = _this.update.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.update();
        }
    }, {
        key: 'update',
        value: function update() {
            var _this2 = this;

            var puns = this.props.puns.filter(function (item) {
                return item !== _this2.props.pun;
            });
            var pun = puns[Math.floor(Math.random() * puns.length)];

            this.props.selectPun(pun);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'home' },
                _react2.default.createElement(_Pun2.default, { joke: this.props.pun.joke, punchLine: this.props.pun.punchLine }),
                _react2.default.createElement(_Button2.default, { text: 'Tell Me Another', onClick: this.update })
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

function mapStatesToProps(state) {
    return {
        puns: state.puns,
        pun: state.pun
    };
}

function matchDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        selectPun: _actions.selectPun
    }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatesToProps, matchDispatchToProps)(Home);