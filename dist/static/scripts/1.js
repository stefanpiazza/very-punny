webpackJsonp([1],{266:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),i=n(2),c=u(i),f=(n(2),n(25)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),p=n(270),d=u(p),_=n(276),m=u(_),v=(n(278),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={data:[],isLoading:!0},n}return l(t,e),o(t,[{key:"componentWillMount",value:function(){var e=this;s.database().ref().child("puns").once("value",function(t){e.setState({data:t.val(),isLoading:!1})})}},{key:"render",value:function(){var e=null,t=null;return this.state.isLoading?e=c.default.createElement(d.default,{text:"Loading..."}):(t=c.default.createElement(m.default,{puns:this.state.data}),e=null),c.default.createElement("div",{className:"all"},e,t)}}]),t}(c.default.Component));t.default=v},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(u),a=(n(273),function(e){var t=e.text;return r.default.createElement("p",{className:"loading"},t)});t.default=a},271:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=u(r),l=n(4),o=u(l),i=(n(274),function(e){var t=e.joke,n=e.punchLine;return a.default.createElement("div",{className:"pun"},a.default.createElement(c,{text:t}),a.default.createElement(f,{text:n}))}),c=function(e){var t=e.text;return a.default.createElement("p",{className:"joke"},t)},f=function(e){var t=e.text;return a.default.createElement("p",{className:"punch-line"},t)};i.propTypes={joke:o.default.string,punchLine:o.default.string},t.default=i},273:function(e,t){e.exports={loading:"loading"}},274:function(e,t){e.exports={pun:"pun",joke:"joke","punch-line":"punch-line",punchLine:"punch-line"}},276:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=u(r),l=(n(2),n(271)),o=u(l),i=(n(281),function(e){var t=e.puns,n=function(e){return e.map(function(e,t){return u(e,t)})},u=function(e,t){return a.default.createElement("li",{className:"pun-list__item",key:t},a.default.createElement(o.default,{joke:e.joke,punchLine:e.punchLine}))};return a.default.createElement("div",null,function(e){return a.default.createElement("ul",{className:"pun-list"},n(e))}(t))});t.default=i},278:function(e,t){},281:function(e,t){e.exports={"pun-list":"pun-list",punList:"pun-list","pun-list__item":"pun-list__item",punListItem:"pun-list__item"}}});