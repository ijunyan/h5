(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0333b697"],{"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"4bea":function(t,e,r){},"512e":function(t,e,r){"use strict";r.r(e);r("433b");var n=r("d399"),o=r("1da1"),i=(r("96cf"),r("7a23")),a=r("6c02"),c=r("c24f"),u={class:"main"},l={style:{margin:"16px"}},s=Object(i["l"])(" 创建账户 "),f={setup:function(t){var e=/\d{5}/,r=/^[a-zA-Z0-9]{6,12}$/,f=/^[a-zA-Z0-9]{6,16}$/,h=/^[\u4e00-\u9fa5]{0,}$/,d=/\d{4}/,p=Object(i["I"])({registConfig:{actual_name:"",check_password:"",code:"",invitation_code:"",password:"",username:""},code:"0000"}),m=Object(a["f"])(),g=function(){return m.go(-1)},v=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["q"])(p.registConfig);case 2:if(e=t.sent,e.result){t.next=7;break}return t.next=6,Object(n["a"])(e.message);case 6:return t.abrupt("return");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["u"])();case 2:e=t.sent,200===e.code&&(p.code=e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(i["B"])(y),function(t,n){var o=Object(i["L"])("van-nav-bar"),a=Object(i["L"])("van-field"),c=Object(i["L"])("van-button"),m=Object(i["L"])("van-cell-group"),b=Object(i["L"])("van-form");return Object(i["E"])(),Object(i["i"])("div",u,[Object(i["m"])(o,{title:"欢迎注册使用","left-arrow":"",onClickLeft:g}),Object(i["m"])(b,{onSubmit:v},{default:Object(i["V"])((function(){return[Object(i["m"])(m,{inset:""},{default:Object(i["V"])((function(){return[Object(i["m"])(a,{modelValue:Object(i["Q"])(p).registConfig.invitation_code,"onUpdate:modelValue":n[0]||(n[0]=function(t){return Object(i["Q"])(p).registConfig.invitation_code=t}),name:"邀请码",label:"邀请码",required:"",placeholder:"5位数字组合",rules:[{required:!0,pattern:e,message:"请填写正确邀请码"}]},null,8,["modelValue","rules"]),Object(i["m"])(a,{modelValue:Object(i["Q"])(p).registConfig.username,"onUpdate:modelValue":n[1]||(n[1]=function(t){return Object(i["Q"])(p).registConfig.username=t}),required:"",name:"账号",label:"账号",placeholder:"6-12位字母数字组合",rules:[{required:!0,pattern:r,message:"请填写正确账号"}]},null,8,["modelValue","rules"]),Object(i["m"])(a,{modelValue:Object(i["Q"])(p).registConfig.password,"onUpdate:modelValue":n[2]||(n[2]=function(t){return Object(i["Q"])(p).registConfig.password=t}),required:"",type:"password",name:"密码",label:"密码",placeholder:"6-16位字母数字组合",rules:[{required:!0,pattern:f,message:"请填写正确密码"}]},null,8,["modelValue","rules"]),Object(i["m"])(a,{modelValue:Object(i["Q"])(p).registConfig.check_password,"onUpdate:modelValue":n[3]||(n[3]=function(t){return Object(i["Q"])(p).registConfig.check_password=t}),required:"",type:"password",name:"确认密码",label:"确认密码",placeholder:"6-16位字母数字组合",rules:[{required:!0,pattern:f,message:"请再次输入密码"}]},null,8,["modelValue","rules"]),Object(i["m"])(a,{modelValue:Object(i["Q"])(p).registConfig.actual_name,"onUpdate:modelValue":n[4]||(n[4]=function(t){return Object(i["Q"])(p).registConfig.actual_name=t}),required:"",name:"真实姓名",label:"真实姓名",placeholder:"请填写真实姓名",rules:[{required:!0,pattern:h,message:"请填写正确真实姓名"}]},null,8,["modelValue","rules"]),Object(i["m"])(a,{modelValue:Object(i["Q"])(p).registConfig.code,"onUpdate:modelValue":n[6]||(n[6]=function(t){return Object(i["Q"])(p).registConfig.code=t}),required:"",name:"验证码",label:"验证码",placeholder:"请填写验证码",rules:[{required:!0,pattern:d,message:"请填写正确验证码"}]},{button:Object(i["V"])((function(){return[Object(i["m"])(c,{style:{width:"1rem"},size:"small",type:"primary",onClick:n[5]||(n[5]=function(t){return y()})},{default:Object(i["V"])((function(){return[Object(i["l"])(Object(i["P"])(Object(i["Q"])(p).code),1)]})),_:1})]})),_:1},8,["modelValue","rules"])]})),_:1}),Object(i["j"])("div",l,[Object(i["m"])(c,{round:"",block:"",type:"primary","native-type":"submit"},{default:Object(i["V"])((function(){return[s]})),_:1})])]})),_:1})])}}},h=(r("7102"),r("6b0d")),d=r.n(h);const p=d()(f,[["__scopeId","data-v-9fbf7718"]]);e["default"]=p},7102:function(t,e,r){"use strict";r("4bea")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new C(n||[]);return i._invoke=_(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",m={};function g(){}function v(){}function y(){}var b={};u(b,i,(function(){return this}));var w=Object.getPrototypeOf,j=w&&w(w(q([])));j&&j!==r&&n.call(j,i)&&(b=j);var O=y.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function _(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return Q()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function V(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(V,this),this.reset(!0)}function q(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:Q}}function Q(){return{value:e,done:!0}}return v.prototype=y,u(O,"constructor",y),u(y,"constructor",v),v.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(O),u(O,c,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=q,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(k),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:q(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);