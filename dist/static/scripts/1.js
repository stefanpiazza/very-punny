webpackJsonp([1],{222:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),i=n(2),c=u(i),f=(n(2),n(34)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),p=n(223),d=u(p),_=n(224),m=u(_),h=(n(231),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={data:[],isLoading:!0},n}return o(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this;s.database().ref().child("puns").once("value",function(t){e.setState({data:t.val(),isLoading:!1})})}},{key:"render",value:function(){var e=null,t=null;return this.state.isLoading?e=c.default.createElement(d.default,{text:"Loading..."}):(t=this.state.data.map(function(e,t){return c.default.createElement("li",{className:"pun-list__item",key:t},c.default.createElement(m.default,{joke:e.joke,punchLine:e.punchLine}))}),e=null),c.default.createElement("ul",{className:"pun-list"},e,t)}}]),t}(c.default.Component));t.default=h},223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(u),a=(n(225),function(e){var t=e.text;return r.default.createElement("p",{className:"loading"},t)});t.default=a},224:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=u(r),o=n(5),l=u(o),i=(n(226),function(e){var t=e.joke,n=e.punchLine;return a.default.createElement("div",{className:"pun"},a.default.createElement(c,{text:t}),a.default.createElement(f,{text:n}))}),c=function(e){var t=e.text;return a.default.createElement("p",{className:"joke"},t)},f=function(e){var t=e.text;return a.default.createElement("p",{className:"punch-line"},t)};i.propTypes={joke:l.default.string,punchLine:l.default.string},t.default=i},225:function(e,t){e.exports={loading:"loading"}},226:function(e,t){e.exports={pun:"pun",joke:"joke","punch-line":"punch-line",punchLine:"punch-line"}},231:function(e,t){e.exports={"pun-list":"pun-list",punList:"pun-list","pun-list__item":"pun-list__item",punListItem:"pun-list__item"}}});
//# sourceMappingURL=1.js.map