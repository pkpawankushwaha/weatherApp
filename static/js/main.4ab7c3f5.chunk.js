(this.webpackJsonpweatherApp=this.webpackJsonpweatherApp||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),s=n.n(r),o=(n(11),n(3)),i=n.n(o),u=n(4),j=n(2),p=n(0),l=function(){var e=Object(c.useState)("Gorakhpur"),t=Object(j.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("Gorakhpur"),s=Object(j.a)(r,2),o=s[0],l=s[1],h=Object(c.useState)("Gorakhpur"),b=Object(j.a)(h,2),d=b[0],f=b[1],O=Object(c.useState)(["0","1"]),x=Object(j.a)(O,2),m=x[0],v=x[1];return Object(c.useEffect)((function(){a("Wait"),function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(d,"&units=metric&appid=3bd5599cff906aa5f9efc20ce75c0b47"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,a(c.main),l(c.name),c.coord&&v([c.coord.lon,c.coord.lat]),console.log(c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[d]),Object(p.jsxs)("div",{className:"reactApp-div",children:[Object(p.jsx)("input",{type:"search",className:"search-box",defaultValue:d,onChange:function(e){f(e.target.value),a(e.target.value)}}),n?Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["City : ",o]}),Object(p.jsxs)("p",{children:["Temperature : ",n.temp," Celsius"]}),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:["Latitude :  ",m[0]," | Longitude : ",m[1]]})]}):Object(p.jsx)("p",{children:"No Data"})]})},h=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=(t[0],t[1],Object(c.useState)(null)),a=Object(j.a)(n,2);a[0],a[1];return Object(c.useEffect)((function(){(function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"learntothrive"})},"http://localhost:5000/",e.next=4,fetch("http://localhost:5000/",t);case 4:return n=e.sent,e.t0=console,e.next=8,n;case 8:if(e.t1=e.sent,e.t0.log.call(e.t0,e.t1),n){e.next=15;break}return e.next=13,n.json();case 13:c=e.sent,console.log(c);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()})),Object(p.jsx)("div",{})};n(14);var b=function(){return Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsx)("h1",{className:"main-heading",children:"Weather App Demo"}),Object(p.jsx)(l,{}),Object(p.jsx)(h,{})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.4ab7c3f5.chunk.js.map