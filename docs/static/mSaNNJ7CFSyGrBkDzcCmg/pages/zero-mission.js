(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9Jkg":function(t,e,n){t.exports=n("oh+g")},Fp53:function(t,e,n){"use strict";n.r(e);var r=n("9Jkg"),c=n.n(r),o=n("dfwq"),i=n("q1tI"),a=n.n(i),u=n("I/Ru"),f=n("dGHw"),s=a.a.createElement;e.default=function(){var t=Object(i.useRef)(null),e=Object(i.useRef)(null),n=Object(i.useState)([]),r=n[0],a=n[1],p=Object(i.useState)(0),l=(p[0],p[1]),d=function(n){if(n.target!==e.current&&t.current&&t.current.contains(n.target)){var c=r,i=new Date;a([].concat(Object(o.a)(c),[{idx:i.getTime(),top:n.pageY,left:n.pageX}]))}},m=function(t){var e=r;e.splice(e.findIndex((function(e){return e.idx===t})),1),a(Object(o.a)(e))};return Object(i.useEffect)((function(){return document.addEventListener("mousedown",d),function(){document.removeEventListener("mousedown",d)}})),Object(i.useEffect)((function(){r.length&&localStorage.setItem("mzm_map_checks",c()(r))}),[r]),Object(i.useEffect)((function(){var t=localStorage.getItem("mzm_map_checks");if(t){var e=JSON.parse(t)||[];a(e),l(e.length)}}),[]),s(u.a,{pageTitle:"Metroid Zero Mission map"},s("img",{ref:t,src:"/zero-mission/metroidzm_map.jpg",alt:"map"}),r.map((function(t,n){return s(f.a,{ref:e,key:"".concat(n).concat(t.top),idx:t.idx,top:t.top,left:t.left,handleClick:m})})))}},dGHw:function(t,e,n){"use strict";var r=n("q1tI"),c=n.n(r),o=n("vOnD"),i=c.a.createElement,a=c.a.forwardRef((function(t,e){var n=t.className,c=t.idx,o=t.handleClick,a=Object(r.useState)(c),u=a[0];a[1];return i("div",{ref:e,onClick:function(){return o(u)},className:n},i("img",{src:"/samus-helmet.png",alt:"check"}))})),u=Object(o.default)(a).withConfig({displayName:"check",componentId:"cjbgll-0"})(["position:absolute;transform:translate(-50%,-50%);left:","px;top:","px;img{width:25px;height:25px;}"],(function(t){return t.left}),(function(t){return t.top}));n.d(e,"a",(function(){return u}))},dfwq:function(t,e,n){"use strict";var r=n("p0XB"),c=n.n(r);var o=n("d04V"),i=n.n(o),a=n("yLu3"),u=n.n(a);function f(t){return function(t){if(c()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(u()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return i()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return f}))},"oh+g":function(t,e,n){var r=n("WEpk"),c=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return c.stringify.apply(c,arguments)}},xLP9:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/zero-mission",function(){return n("Fp53")}])}},[["xLP9",1,2,4,0,3]]]);