'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _PunList = require('../../components/PunList/PunList');

var _PunList2 = _interopRequireDefault(_PunList);

var _NotFound = require('../../containers/NotFound/NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

var _reactRedux = require('react-redux');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {};

var Pun = function (_React$Component) {
	_inherits(Pun, _React$Component);

	function Pun(props) {
		_classCallCheck(this, Pun);

		return _possibleConstructorReturn(this, (Pun.__proto__ || Object.getPrototypeOf(Pun)).call(this, props));
	}

	_createClass(Pun, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			// Filters list rather than attempting to index out of bounds
			var punList = this.props.puns.filter(function (pun) {
				return _this2.props.puns.indexOf(pun) == _this2.props.match.params.id;
			});

			if (punList.length !== 0) {
				return _react2.default.createElement(
					'div',
					{ className: 'all' },
					_react2.default.createElement(_PunList2.default, { puns: punList })
				);
			} else {
				return _react2.default.createElement(_NotFound2.default, null);
			}
		}
	}]);

	return Pun;
}(_react2.default.Component);

function mapStatesToProps(state) {
	return {
		puns: state.puns
	};
}

function matchDispatchToProps(dispatch) {
	return (0, _redux.bindActionCreators)({}, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStatesToProps, matchDispatchToProps)(Pun);