!function(t){var n={};function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=t,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(r,e){if(1&e&&(r=u(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)u.d(t,n,function(e){return r[e]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/wx/",u(u.s=15)}([function(e,r){e.exports=require("react")},function(e,r){e.exports=require("redux")},function(e,r){e.exports=require("react-redux")},function(e,r){e.exports=require("@babel/runtime/helpers/objectSpread")},function(e,r){e.exports=require("react-dom")},function(e,r){e.exports=require("redux-thunk")},function(e,r){e.exports=require("react-router-redux")},function(e,r){e.exports=require("redux-form")},function(e,r){e.exports=require("redux-logger")},function(e,r){e.exports=require("antd/es/button")},function(e,r){e.exports=require("@babel/runtime/helpers/classCallCheck")},function(e,r){e.exports=require("@babel/runtime/helpers/createClass")},function(e,r){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},function(e,r){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},function(e,r){e.exports=require("@babel/runtime/helpers/inherits")},function(e,r,t){e.exports=t(19)},function(e,r){e.exports=require("antd/es/button/style")},function(e,r){e.exports=require("react-router-dom")},function(e,r,t){e.exports={app:"EF7LdiF5n4rc-vHTchKTY"}},function(e,r,t){"use strict";t.r(r);var n={};t.r(n),t.d(n,"Base",function(){return q});var u=t(3),o=t.n(u),i=t(0),c=t.n(i),a=t(4),l=t.n(a),s=t(1),f=t(2),p=t(5),d=t.n(p),b=t(6),x=t(7),m=t(8),y=t.n(m),q=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};1<arguments.length&&arguments[1];return e},h=(t(16),t(9)),v=t.n(h),g=t(10),j=t.n(g),O=t(11),P=t.n(O),S=t(12),_=t.n(S),C=t(13),E=t.n(C),M=t(14),T=t.n(M),k=(t(17),function(e){function r(){return j()(this,r),_()(this,E()(r).apply(this,arguments))}return T()(r,e),P()(r,[{key:"render",value:function(){return c.a.createElement(v.a,null,"按钮")}}]),r}(i.Component)),w=Object(f.connect)(function(e){return e})(k),R=(t(18),Object(s.combineReducers)(o()({},n,{routing:b.routerReducer,form:x.reducer}))),B=Object(s.compose)(Object(s.applyMiddleware)(d.a,y.a))(s.createStore)(R);l.a.render(c.a.createElement(f.Provider,{store:B},c.a.createElement(w,null)),document.getElementById("app"))}]);