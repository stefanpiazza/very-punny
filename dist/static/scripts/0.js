webpackJsonp([0],{280:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{puns:e.puns}}function a(e){return(0,m.bindActionCreators)({},e)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),f=n(2),s=u(f),p=(n(2),n(287)),d=u(p),_=n(41),m=n(21),b=(n(133),n(290),function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),c(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"all"},s.default.createElement(d.default,{puns:this.props.puns}))}}]),t}(s.default.Component));t.default=(0,_.connect)(l,a)(b)},284:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=u(r),i=n(4),l=u(i),a=(n(286),function(e){var t=e.joke,n=e.punchLine;return o.default.createElement("div",{className:"pun"},o.default.createElement(c,{text:t}),o.default.createElement(f,{text:n}))}),c=function(e){var t=e.text;return o.default.createElement("p",{className:"joke"},t)},f=function(e){var t=e.text;return o.default.createElement("p",{className:"punch-line"},t)};a.propTypes={joke:l.default.string,punchLine:l.default.string},t.default=a},286:function(e,t){e.exports={pun:"pun",joke:"joke","punch-line":"punch-line",punchLine:"punch-line"}},287:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),o=u(r),i=(n(2),n(284)),l=u(i),a=(n(288),function(e){var t=e.puns,n=function(e,t){return o.default.createElement("li",{className:"pun-list__item",key:t},o.default.createElement(l.default,{joke:e.joke,punchLine:e.punchLine}))};return o.default.createElement("ul",{className:"pun-list"},function(e){return e.map(function(e,t){return n(e,t)})}(t))});t.default=a},288:function(e,t){e.exports={"pun-list":"pun-list",punList:"pun-list","pun-list__item":"pun-list__item",punListItem:"pun-list__item"}},290:function(e,t){}});