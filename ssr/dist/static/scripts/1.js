(window.webpackJsonp=window.webpackJsonp||[]).push([[1,0],{17:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(2)),u=(n(12),o(n(24)));function o(e){return e&&e.__esModule?e:{default:e}}n(46);t.default=function(e){var t=e.puns,n=function(e,t){return r.default.createElement("li",{className:"pun-list__item",key:t},r.default.createElement(u.default,{joke:e.joke,punchLine:e.punchLine}))};return r.default.createElement("ul",{className:"pun-list"},function(e){return e.map(function(e,t){return n(e,t)})}(t))}},29:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,u=n(2),o=(r=u)&&r.__esModule?r:{default:r};n(47);t.default=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),o.default.createElement("div",{className:"not-found"},o.default.createElement("p",{className:"error"},"No puns here."))}},46:function(e,t){e.exports={"pun-list":"pun-list",punList:"pun-list","pun-list__item":"pun-list__item",punListItem:"pun-list__item"}},47:function(e,t){e.exports={"not-found":"not-found",notFound:"not-found",error:"error"}},48:function(e,t){},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=c(n(2)),o=(n(12),c(n(17))),i=c(n(29)),l=n(14),a=n(9);function c(e){return e&&e.__esModule?e:{default:e}}n(48);var f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),r(t,[{key:"render",value:function(){var e=this,t=this.props.puns.filter(function(t){return e.props.puns.indexOf(t)==e.props.match.params.id});return 0!==t.length?u.default.createElement("div",{className:"all"},u.default.createElement(o.default,{puns:t})):u.default.createElement(i.default,null)}}]),t}();t.default=(0,l.connect)(function(e){return{puns:e.puns}},function(e){return(0,a.bindActionCreators)({},e)})(f)}}]);