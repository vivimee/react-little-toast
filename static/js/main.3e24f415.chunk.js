(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(t,n,e){var a=e(181);"string"===typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(84)(a,o);a.locals&&(t.exports=a.locals)},181:function(t,n,e){(t.exports=e(83)(!1)).push([t.i,".rlt-toast-container {\n  position: fixed;\n  top: 10%;\n  width: 90%;\n  left: 0;\n  right: 0;\n  margin: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  pointer-events: none;\n}\n.rlt-toast-item {\n  margin-bottom: 10px;\n  position: relative;\n  -webkit-animation: toast-enter 0.2s ease forwards;\n          animation: toast-enter 0.2s ease forwards;\n}\n.rlt-toast-item:last-child {\n  margin-bottom: 0;\n}\n.rlt-toast-item.info {\n  padding: 8px 20px;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.7);\n  border-radius: 4px;\n}\n.rlt-toast-item.fade {\n  -webkit-animation-name: toast-fade;\n          animation-name: toast-fade;\n}\n@-webkit-keyframes toast-enter {\n  from {\n    bottom: -20px;\n    opacity: 0.2;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n@keyframes toast-enter {\n  from {\n    bottom: -20px;\n    opacity: 0.2;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n@-webkit-keyframes toast-fade {\n  from {\n    top: 0;\n    opacity: 1;\n  }\n  to {\n    top: -20px;\n    opacity: 0;\n  }\n}\n@keyframes toast-fade {\n  from {\n    top: 0;\n    opacity: 1;\n  }\n  to {\n    top: -20px;\n    opacity: 0;\n  }\n}\n",""])},183:function(t,n,e){var a=e(184);"string"===typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(84)(a,o);a.locals&&(t.exports=a.locals)},184:function(t,n,e){(t.exports=e(83)(!1)).push([t.i,".form-item {\n  display: flex;\n  align-items: center;\n  padding: 10px 20px;\n  margin: 10px auto;\n  width: 80%;\n}\n.form-item .label {\n  flex-shrink: 0;\n  margin-right: 20px;\n  width: 30%;\n  text-align: right;\n}\n.form-item input {\n  flex-grow: 1;\n  outline: none;\n  border: none;\n  border-bottom: 1px solid #e7e7e7;\n  padding: 10px 5px;\n  font-size: 14px;\n}\n.submit-btn {\n  width: 80%;\n  margin: 20px auto;\n  padding: 15px;\n  background-color: #f63;\n  border-radius: 4px;\n  color: #fff;\n  border: none;\n  outline: none;\n  display: block;\n  font-size: 16px;\n}\n@media (min-width: 375px) {\n  .page-content {\n    width: 375px;\n    margin: 0 auto;\n  }\n}\n",""])},185:function(t,n,e){"use strict";e.r(n);var a=e(5),o=e.n(a),i=e(34),r=e.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=e(18),m=e(24),c=e(26),l=e(25),u=e(27),p=e(85),d=(e(180),function(t){function n(){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this))).state={timeup:!1,display:!0},t}return Object(u.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this,n=this.props.timeout,e=void 0===n?3e3:n;this.timmer=setTimeout(function(){t.setState({timeup:!0},function(){t.timmer=setTimeout(function(){t.setState({display:!1})},200)})},e)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timmer)}},{key:"render",value:function(){var t=this.state,n=t.timeup,e=t.display,a=this.props.message;return e?o.a.createElement("div",{className:"rlt-toast-item info".concat(n?" fade":"")},a):null}}]),n}(o.a.Component)),f=function(t){function n(){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this))).pushInfo=function(n){var e=t.state.messages;t.setState({messages:e.concat([Object(p.a)({},n,{_type:"info"})])})},t.messageMapper=function(t,n){if("info"===t._type)return o.a.createElement(d,Object.assign({key:n},t))},t.state={messages:[]},t}return Object(u.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){var t=this.state.messages;return o.a.createElement("div",{className:"rlt-toast-container"},t.map(this.messageMapper))}}]),n}(o.a.Component),h=new function t(){var n=this;if(Object(s.a)(this,t),this.bindToastContainer=function(t){n.toastContainer=t},this.info=function(t){n.toastContainer.pushInfo(t)},"undefined"!==typeof window){var e=document.createElement("div");document.body.appendChild(e),Object(i.render)(o.a.createElement(f,{ref:this.bindToastContainer}),e),this.ele=e}},b=(e(183),function(t){function n(){var t;return Object(s.a)(this,n),(t=Object(c.a)(this,Object(l.a)(n).call(this))).run=function(){var n=t.state,e=n.message,a=n.timeout;h.info({message:e,timeout:a})},t.state={message:"Hello World",timeout:3e3},t}return Object(u.a)(n,t),Object(m.a)(n,[{key:"render",value:function(){var t=this,n=this.state,e=n.message,a=n.timeout;return o.a.createElement("div",{className:"page-content"},o.a.createElement("header",null,o.a.createElement("div",{className:"form-item"},o.a.createElement("span",{className:"label"},"text"),o.a.createElement("input",{value:e,onChange:function(n){return t.setState({message:n.target.value})}})),o.a.createElement("div",{className:"form-item"},o.a.createElement("span",{className:"label"},"timeout"),o.a.createElement("input",{value:a,onChange:function(n){return t.setState({timeout:n.target.value})}})),o.a.createElement("button",{className:"submit-btn",type:"button",onClick:this.run},"Show Toast")))}}]),n}(a.Component)),g=b;b.__docgenInfo={description:"",methods:[{name:"run",docblock:null,modifiers:[],params:[],returns:null}],displayName:"App"},r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},86:function(t,n,e){t.exports=e(185)}},[[86,2,1]]]);
//# sourceMappingURL=main.3e24f415.chunk.js.map