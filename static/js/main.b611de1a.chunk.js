(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{35:function(e,t,n){},61:function(e,t,n){e.exports=n(93)},66:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),l=(n(66),n(27)),u=n(60),o=n(13);n(35);var m=function(){return c.a.createElement("h1",{className:"header"}," my-react-app shop")};var s=function(e){var t=Object(a.useState)([null]),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){return c.a.createElement(d,null)}),[e.cart]),c.a.createElement("div",null,r,c.a.createElement("div",{className:"carts"},c.a.createElement("h2",null,e.title),c.a.createElement("div",null,c.a.createElement("img",{className:"image",src:e.image})),c.a.createElement("button",{onClick:function(){return i(e.addtocart())}}," + "),c.a.createElement("button",{onClick:function(){return i(e.lessCount)}}," - ")),c.a.createElement("div",null,"sum: ",r.length))},d=function(e){var t=Object(a.useState)(e.quantity),n=Object(o.a)(t,2),r=(n[0],n[1]);return c.a.createElement("div",null,c.a.createElement("div",{className:"product"},c.a.createElement("h2",null,e.title),c.a.createElement("div",null,c.a.createElement("img",{className:"image",src:e.image})),c.a.createElement("div",null,"quantity: ",e.quantity),c.a.createElement("div",null,"price: ",e.price),c.a.createElement("div",null,"description: ",e.description),c.a.createElement("button",{onClick:function(){return e.addtocart()}}," + "),c.a.createElement("button",{onClick:function(){return r(e.lessCount)}}," - ")))},p=n(46),f=n.n(p),E=n(95),g=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),p=Object(o.a)(i,2),g=p[0],v=p[1],b=Object(a.useState)([]),h=Object(o.a)(b,2),j=h[0],O=h[1],y=Object(a.useState)([]),k=Object(o.a)(y,2),C=k[0],N=k[1];return Object(a.useEffect)((function(){f.a.get("https://gocode-rn.glitch.me/products").then((function(e){v(e.data),N([e.data.reduce((function(e,t){return e.price<t.price?e:t})).price,e.data.reduce((function(e,t){return e.price>t.price?e:t})).price]),console.log()}))}),[]),console.log(g),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(m,null)),c.a.createElement("div",{className:"products"},c.a.createElement("div",{className:"product"},g.filter((function(e){return e.price<=C[1]&&e.price>=C[0]})).map((function(e){return c.a.createElement(d,{key:e.id,title:e.title,image:e.image,quantity:e.quantity,price:e.price,addtocart:function(){r(n+1),e.quantity--;var t=j.find((function(t){return t.id===e.id}));O(t?j.map((function(t){return t.id!==e.id?t:Object(l.a)(Object(l.a)({},t),{},{count:t.count+1})})):[].concat(Object(u.a)(j),[Object(l.a)(Object(l.a)({},e),{},{count:1})]))},lessCount:function(){r(n-1)}})})))),C[0]&&C[1]?c.a.createElement(E.a,{range:!0,step:10,defaultValue:C,min:C[0],max:C[1],onChange:function(e){console.log("onChange",e)},onAfterChange:function(e){var t=e[0],n=e[1],a=g.filter((function(e){return e.price<=n&&e.price>=t}));v(a)}}):null,c.a.createElement("div",{className:"cart"},c.a.createElement("p",null," cart: ",n," "),j.map((function(e,t){return c.a.createElement(s,{key:e.id,title:e.title,image:e.image,quantity:e.quantity,price:e.price})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[61,1,2]]]);
//# sourceMappingURL=main.b611de1a.chunk.js.map