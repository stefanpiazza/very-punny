(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{48:function(e,t){e.exports={admin:"admin",input:"input","input--error":"input--error",inputError:"input--error"}},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=c(n(2)),u=(n(12),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(29)));n(66);var a=c(n(51)),l=n(14),i=n(9),s=n(19);function c(e){return e&&e.__esModule?e:{default:e}}n(48);var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={email:null,password:null},n.handleLogIn=n.handleLogIn.bind(n),n.handleLogOut=n.handleLogOut.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),r(t,[{key:"componentWillMount",value:function(){}},{key:"renderLogIn",value:function(){var e=!1===this.state.email?"input input--error":"input",t=!1===this.state.password?"input input--error":"input";return o.default.createElement("div",{className:"form"},o.default.createElement("input",{type:"email",placeholder:"Enter email",className:e,id:"email"}),o.default.createElement("input",{type:"password",placeholder:"Enter password",className:t,id:"password"}))}},{key:"handleLogIn",value:function(){var e=this,t=document.getElementById("email").value,n=document.getElementById("password").value;(this.setState({email:null,password:null}),t||this.setState({email:!1}),n||this.setState({password:!1}),t&&n)&&u.auth().signInWithEmailAndPassword(t,n).then(function(){document.getElementById("email").value="",document.getElementById("password").value="",e.props.userLogIn({name:"Stefan"})}).catch(function(){document.getElementById("email").value="",document.getElementById("password").value="",e.props.userLogOut()})}},{key:"handleLogOut",value:function(){var e=this;u.auth().signOut().then(function(){e.props.userLogOut()})}},{key:"render",value:function(){var e=null,t=null;return this.props.user.isLoggedIn?(e=null,t=o.default.createElement(a.default,{text:"Log Out",onClick:this.handleLogOut})):(e=this.renderLogIn(),t=o.default.createElement(a.default,{text:"Log in",onClick:this.handleLogIn})),o.default.createElement("div",{className:"admin"},e,t)}}]),t}();t.default=(0,l.connect)(function(e){return{user:e.user}},function(e){return(0,i.bindActionCreators)({userLogIn:s.userLogIn,userLogOut:s.userLogOut},e)})(d)}}]);