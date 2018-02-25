webpackJsonp([2],{279:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{user:e.user}}function i(e){return(0,y.bindActionCreators)({userLogIn:v.userLogIn,userLogOut:v.userLogOut},e)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),d=r(c),f=(n(2),n(28)),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(f),m=n(283),h=r(m),g=n(41),y=n(21),v=n(133),b=(n(289),function(e){function t(e){o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={email:null,password:null},n.handleLogIn=n.handleLogIn.bind(n),n.handleLogOut=n.handleLogOut.bind(n),n}return a(t,e),s(t,[{key:"componentWillMount",value:function(){}},{key:"renderLogIn",value:function(){var e=!1===this.state.email?"input input--error":"input",t=!1===this.state.password?"input input--error":"input";return d.default.createElement("div",{className:"form"},d.default.createElement("input",{type:"email",placeholder:"Enter email",className:e,id:"email"}),d.default.createElement("input",{type:"password",placeholder:"Enter password",className:t,id:"password"}))}},{key:"handleLogIn",value:function(){var e=this,t=document.getElementById("email").value,n=document.getElementById("password").value;if(this.setState({email:null,password:null}),t||this.setState({email:!1}),n||this.setState({password:!1}),t&&n){p.auth().signInWithEmailAndPassword(t,n).then(function(){document.getElementById("email").value="",document.getElementById("password").value="",e.props.userLogIn({name:"Stefan"})}).catch(function(){document.getElementById("email").value="",document.getElementById("password").value="",e.props.userLogOut()})}}},{key:"handleLogOut",value:function(){var e=this;p.auth().signOut().then(function(){e.props.userLogOut()})}},{key:"render",value:function(){var e=null,t=null;return this.props.user.isLoggedIn?(e=null,t=d.default.createElement(h.default,{text:"Log Out",onClick:this.handleLogOut})):(e=this.renderLogIn(),t=d.default.createElement(h.default,{text:"Log in",onClick:this.handleLogIn})),d.default.createElement("div",{className:"admin"},e,t)}}]),t}(d.default.Component));t.default=(0,g.connect)(l,i)(b)},283:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(2),u=r(o),a=n(4),l=r(a),i=(n(285),function(e){var t=e.onClick,n=e.text;return u.default.createElement("div",{className:"button",onClick:t},n)});i.propTypes={onClick:l.default.func,text:l.default.string},t.default=i},285:function(e,t){e.exports={button:"button"}},289:function(e,t){e.exports={admin:"admin",input:"input","input--error":"input--error",inputError:"input--error"}}});