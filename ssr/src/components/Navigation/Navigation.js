'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    'nav': 'Navigation__nav___2PjKH',
    'is-open': 'Navigation__is-open___Fuw0Q',
    'nav__toggle': 'Navigation__nav__toggle___3tQ3T',
    'nav__list': 'Navigation__nav__list___3ra4H',
    'nav__list-item': 'Navigation__nav__list-item___3-J8e',
    'nav__link': 'Navigation__nav__link___3-TY5'
};

var Navigation = function (_React$Component) {
    _inherits(Navigation, _React$Component);

    function Navigation(props) {
        _classCallCheck(this, Navigation);

        var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

        _this.state = {
            isOpen: false
        };

        _this.openNavigation = _this.openNavigation.bind(_this);
        _this.closeNavigation = _this.closeNavigation.bind(_this);
        _this.toggleNavigation = _this.toggleNavigation.bind(_this);
        return _this;
    }

    _createClass(Navigation, [{
        key: 'openNavigation',
        value: function openNavigation() {
            this.setState({
                isOpen: true
            });
        }
    }, {
        key: 'closeNavigation',
        value: function closeNavigation() {
            this.setState({
                isOpen: false
            });
        }
    }, {
        key: 'toggleNavigation',
        value: function toggleNavigation() {
            if (this.state.isOpen) {
                this.closeNavigation();
            } else if (!this.state.isOpen) {
                this.openNavigation();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var navClass = this.state.isOpen ? 'nav is-open' : 'nav';
            var toggleIcon = this.state.isOpen ? 'Close' : 'Open';

            return _react2.default.createElement(
                'nav',
                { className: navClass },
                _react2.default.createElement(
                    'ul',
                    { className: 'nav__list' },
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__list-item' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/admin', className: 'nav__link', onClick: this.closeNavigation },
                            'Admin'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__list-item' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/', className: 'nav__link', onClick: this.closeNavigation },
                            'Home'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        { className: 'nav__list-item' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/all', className: 'nav__link', onClick: this.closeNavigation },
                            'All'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'nav__toggle', onClick: this.toggleNavigation },
                    toggleIcon
                )
            );
        }
    }]);

    return Navigation;
}(_react2.default.Component);

exports.default = Navigation;