!function(e){function t(t){for(var r,u,i=t[0],l=t[1],c=t[2],f=0,p=[];f<i.length;f++)u=i[f],o[u]&&p.push(o[u][0]),o[u]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={6:0},a=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=o[e]=[t,r]});t.push(n[2]=r);var a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=12e4,u.nc&&i.setAttribute("nonce",u.nc),i.src=u.p+"static/scripts/"+({}[e]||e)+".js";var l=setTimeout(function(){c({type:"timeout",target:i})},12e4);function c(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}}i.onerror=i.onload=c,a.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var s=l;a.push([198,5]),n()}({113:function(e,t){},114:function(e,t){e.exports={app:"app",container:"container"}},115:function(e,t){e.exports={nav:"nav","is-open":"is-open",isOpen:"is-open",nav__toggle:"nav__toggle",navToggle:"nav__toggle",nav__list:"nav__list",navList:"nav__list","nav__list-item":"nav__list-item",navListItem:"nav__list-item",nav__link:"nav__link",navLink:"nav__link"}},116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=(r=a)&&r.__esModule?r:{default:r},i=n(71);n(115);var l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isOpen:!1},n.openNavigation=n.openNavigation.bind(n),n.closeNavigation=n.closeNavigation.bind(n),n.toggleNavigation=n.toggleNavigation.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"openNavigation",value:function(){this.setState({isOpen:!0})}},{key:"closeNavigation",value:function(){this.setState({isOpen:!1})}},{key:"toggleNavigation",value:function(){this.state.isOpen?this.closeNavigation():this.state.isOpen||this.openNavigation()}},{key:"render",value:function(){var e=this.state.isOpen?"nav is-open":"nav",t=this.state.isOpen?"Close":"Open";return u.default.createElement("nav",{className:e},u.default.createElement("ul",{className:"nav__list"},u.default.createElement("li",{className:"nav__list-item"},u.default.createElement(i.Link,{to:"/admin",className:"nav__link",onClick:this.closeNavigation},"Admin")),u.default.createElement("li",{className:"nav__list-item"},u.default.createElement(i.Link,{to:"/",className:"nav__link",onClick:this.closeNavigation},"Home")),u.default.createElement("li",{className:"nav__list-item"},u.default.createElement(i.Link,{to:"/all",className:"nav__link",onClick:this.closeNavigation},"All"))),u.default.createElement("div",{className:"nav__toggle",onClick:this.toggleNavigation},t))}}]),t}();t.default=l},117:function(e,t){e.exports={home:"home"}},118:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.userLogIn=function(e){return{type:"USER_LOGGED_IN",payload:e}},t.userLogOut=function(e){return{type:"USER_LOGGED_OUT",payload:e}}},119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.selectPun=function(e){return{type:"SELECTED_PUN",payload:e}}},120:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPun=function(e){return{type:"ADDED_PUN",payload:e}},t.addPuns=function(e){return{type:"ADDED_PUNS",payload:e}},t.removePun=function(e){return{type:"REMOVED_PUN",payload:e}}},121:function(e,t){e.exports={pun:"pun",joke:"joke","punch-line":"punch-line",punchLine:"punch-line"}},122:function(e,t){e.exports={button:"button","button--square":"button--square",buttonSquare:"button--square"}},123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(2)),a=(n(12),s(n(53))),u=s(n(25)),i=n(14),l=n(9),c=n(21);function s(e){return e&&e.__esModule?e:{default:e}}n(117);var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.update=n.update.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){}},{key:"update",value:function(){var e=this,t=this.props.puns.filter(function(t){return t!==e.props.pun}),n=t[Math.floor(Math.random()*t.length)];this.props.selectPun(n)}},{key:"render",value:function(){return o.default.createElement("div",{className:"home"},o.default.createElement(u.default,{joke:this.props.pun.joke,punchLine:this.props.pun.punchLine}),o.default.createElement(a.default,{text:"Tell Me Another",onClick:this.update}))}}]),t}();t.default=(0,i.connect)(function(e){return{puns:e.puns,pun:e.pun}},function(e){return(0,l.bindActionCreators)({selectPun:c.selectPun},e)})(f)},124:function(e,t){e.exports={loading:"loading"}},125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=u(n(2)),a=u(n(72));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loading:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loading.then(function(t){e.component=t.default,e.setState({loading:!1})})}},{key:"render",value:function(){return this.state.loading?o.default.createElement(a.default,{text:"Loading..."}):o.default.createElement(this.component,this.props.props)}}]),t}();t.default=i},126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=v(n(2)),a=(n(12),n(71)),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(30));n(99);var i=v(n(125)),l=v(n(123)),c=v(n(72)),s=v(n(116)),f=n(14),p=n(9),d=n(21);function v(e){return e&&e.__esModule?e:{default:e}}n(114);var _=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isFetching:!(n.props.puns.length>0)},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){var e=this;this.state.isFetching&&u.database().ref().child("puns").once("value",function(t){var n=t.val(),r=n[Math.floor(Math.random()*n.length)];e.props.addPuns(n),e.props.selectPun(r)}).then(function(){e.setState({isFetching:!1})})}},{key:"render",value:function(){return this.state.isFetching?o.default.createElement("div",{className:"app"},o.default.createElement(s.default,null),o.default.createElement("div",{className:"container"},o.default.createElement(c.default,{text:"Loading..."}))):o.default.createElement("div",{className:"app"},o.default.createElement(s.default,null),o.default.createElement("div",{className:"container"},o.default.createElement(a.Switch,null,o.default.createElement(a.Route,{exact:!0,path:"/",component:l.default}),o.default.createElement(a.Route,{exact:!0,path:"/all",component:function(e){return o.default.createElement(i.default,{props:e,loading:n.e(4).then(function(){var e=n(69);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})})}}),o.default.createElement(a.Route,{exact:!0,path:"/admin",component:function(e){return o.default.createElement(i.default,{props:e,loading:Promise.all([n.e(0),n.e(3)]).then(function(){var e=n(68);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})})}}),o.default.createElement(a.Route,{path:"/pun/:id",component:function(e){return o.default.createElement(i.default,{props:e,loading:n.e(2).then(function(){var e=n(67);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})})}}),o.default.createElement(a.Route,{component:function(e){return o.default.createElement(i.default,{props:e,loading:n.e(1).then(function(){var e=n(29);return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})})}}))))}}]),t}();t.default=(0,a.withRouter)((0,f.connect)(function(e){return{puns:e.puns,pun:e.pun}},function(e){return(0,p.bindActionCreators)({addPuns:d.addPuns,selectPun:d.selectPun},e)})(_))},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments[1];switch(t.type){case"SELECTED_PUN":return Object.assign.apply(Object,[{}].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e),[t.payload]));default:return e}}},128:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=[];t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments[1];switch(t.type){case"ADDED_PUN":return[].concat(r(e),[t.payload]);case"ADDED_PUNS":return[].concat(r(e)),t.payload;case"REMOVED_PUN":return e.filter(function(n){return e.indexOf(n)!==e.indexOf(t.payload)});default:return e}}},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={isLoggedIn:!1};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r;switch(arguments[1].type){case"USER_LOGGED_IN":return Object.assign({},e,{isLoggedIn:!0});case"USER_LOGGED_OUT":return Object.assign({},e,{isLoggedIn:!1});default:return e}}},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),o=n(70),a=l(n(129)),u=l(n(128)),i=l(n(127));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.combineReducers)({user:a.default,puns:u.default,pun:i.default,routing:o.routerReducer});t.default=c},198:function(e,t,n){"use strict";var r=n(70),o=n(28),a=n(9),u=n(14),i=n(12),l=(p(n(0)),p(n(2))),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(30));n(99);var s=p(n(130)),f=p(n(126));function p(e){return e&&e.__esModule?e:{default:e}}n(113);c.initializeApp({apiKey:"AIzaSyDXFaxhOmIfqVN7S2UjhVa3-L8W8-FPIDM",authDomain:"very-punny.firebaseapp.com",databaseURL:"https://very-punny.firebaseio.com",projectId:"very-punny",storageBucket:"",messagingSenderId:"911938183753"}),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})});var d=window.__PRELOADED_STATE__;delete window.__PRELOADED_STATE__;var v=(0,o.createBrowserHistory)(),_=(0,a.createStore)(s.default,d,(0,a.applyMiddleware)((0,r.routerMiddleware)(v)));(0,i.render)(l.default.createElement(u.Provider,{store:_},l.default.createElement(r.ConnectedRouter,{history:v},l.default.createElement(f.default,null))),document.getElementById("root"))},21:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectPun=t.removePun=t.addPuns=t.addPun=t.userLogOut=t.userLogIn=void 0;var r=n(120),o=n(119),a=n(118);t.userLogIn=a.userLogIn,t.userLogOut=a.userLogOut,t.addPun=r.addPun,t.addPuns=r.addPuns,t.removePun=r.removePun,t.selectPun=o.selectPun},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(2)),o=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}n(121);var u=function(e){var t=e.joke,n=e.punchLine;return r.default.createElement("div",{className:"pun"},r.default.createElement(i,{text:t}),r.default.createElement(l,{text:n}))},i=function(e){var t=e.text;return r.default.createElement("p",{className:"joke"},t)},l=function(e){var t=e.text;return r.default.createElement("p",{className:"punch-line"},t)};u.propTypes={joke:o.default.string,punchLine:o.default.string},t.default=u},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(2)),o=a(n(0));function a(e){return e&&e.__esModule?e:{default:e}}n(122);var u=function(e){var t=e.onClick,n=e.text,o=e.type,a="button";return o&&(a+=" button--"+o),r.default.createElement("button",{className:a,onClick:t},n)};u.propTypes={onClick:o.default.func,text:o.default.string},t.default=u},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(2),a=(r=o)&&r.__esModule?r:{default:r};n(124);t.default=function(e){var t=e.text;return a.default.createElement("p",{className:"loading"},t)}}});