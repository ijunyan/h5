(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b650b"],{"1d46":function(e,t,n){"use strict";n.r(t);var u=n("7a23"),l=n("6c02"),i={setup:function(e){var t=Object(l["f"])(),n=function(){return t.go(-1)},i=JSON.parse(localStorage.getItem("userInfo")),c=function(e){return 0===e?"保密":1===e?"男":2===e?"女":void 0};return function(e,t){var l=Object(u["L"])("van-nav-bar"),r=Object(u["L"])("van-cell"),o=Object(u["L"])("van-cell-group");return Object(u["E"])(),Object(u["i"])("div",null,[Object(u["m"])(l,{title:"个人信息","left-arrow":"",onClickLeft:n}),Object(u["m"])(o,null,{default:Object(u["V"])((function(){return[Object(u["m"])(r,{onClick:t[0]||(t[0]=function(t){return e.$router.push("/editinfo")}),title:"用户名",value:Object(u["Q"])(i).username,"is-link":""},null,8,["value"]),Object(u["m"])(r,{onClick:t[1]||(t[1]=function(t){return e.$router.push("/editinfo")}),title:"真实姓名",value:Object(u["Q"])(i).actual_name,"is-link":""},null,8,["value"]),Object(u["m"])(r,{onClick:t[2]||(t[2]=function(t){return e.$router.push("/editinfo")}),title:"联系电话",value:Object(u["Q"])(i).mobile,"is-link":""},null,8,["value"]),Object(u["m"])(r,{onClick:t[3]||(t[3]=function(t){return e.$router.push("/editinfo")}),title:"联系QQ",value:Object(u["Q"])(i).qq,"is-link":""},null,8,["value"]),Object(u["m"])(r,{title:"用户等级",value:"vip"}),Object(u["m"])(r,{title:"性别",value:c(Object(u["Q"])(i).gender)},null,8,["value"])]})),_:1})])}}};const c=i;t["default"]=c}}]);