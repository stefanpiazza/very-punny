webpackJsonp([0],{266:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),i=n(2),c=u(i),f=(n(2),n(25)),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),d=n(270),p=u(d),h=n(269),v=u(h),b=n(271),m=u(b),_=(n(277),function(e){function t(e){r(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={data:[],currentIndex:0,pun:{joke:"",punchLine:""},isLoading:!0},n.update=n.update.bind(n),n}return o(t,e),l(t,[{key:"componentWillMount",value:function(){var e=this;s.database().ref().child("puns").once("value",function(t){e.setState({currentIndex:0,data:t.val(),isLoading:!1,pun:t.val()[0]})})}},{key:"update",value:function(){var e=this,t=this.state.data.filter(function(t){return e.state.data.indexOf(t)!==e.state.currentIndex}),n=Math.floor(Math.random()*t.length),u=t[n];this.setState({currentIndex:this.state.data.indexOf(u),pun:u})}},{key:"render",value:function(){var e=null,t=null,n=null;return this.state.isLoading?e=c.default.createElement(p.default,{text:"Loading..."}):(t=c.default.createElement(v.default,{text:"Tell Me Another",onClick:this.update}),n=c.default.createElement(m.default,{joke:this.state.pun.joke,punchLine:this.state.pun.punchLine}),e=null),c.default.createElement("div",{className:"home"},e,n,t)}}]),t}(c.default.Component));t.default=_},269:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=u(r),o=n(4),l=u(o),i=(n(272),function(e){var t=e.onClick,n=e.text;return a.default.createElement("div",{className:"button",onClick:t},n)});i.propTypes={onClick:l.default.func,text:l.default.string},t.default=i},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),r=function(e){return e&&e.__esModule?e:{default:e}}(u),a=(n(273),function(e){var t=e.text;return r.default.createElement("p",{className:"loading"},t)});t.default=a},271:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),a=u(r),o=n(4),l=u(o),i=(n(274),function(e){var t=e.joke,n=e.punchLine;return a.default.createElement("div",{className:"pun"},a.default.createElement(c,{text:t}),a.default.createElement(f,{text:n}))}),c=function(e){var t=e.text;return a.default.createElement("p",{className:"joke"},t)},f=function(e){var t=e.text;return a.default.createElement("p",{className:"punch-line"},t)};i.propTypes={joke:l.default.string,punchLine:l.default.string},t.default=i},272:function(e,t){e.exports={button:"button"}},273:function(e,t){e.exports={loading:"loading"}},274:function(e,t){e.exports={pun:"pun",joke:"joke","punch-line":"punch-line",punchLine:"punch-line"}},277:function(e,t){e.exports={home:"home"}}});