import{S as t,i as s,s as e,e as a,a as n,t as o,q as c,c as i,d as r,b as l,f as u,g as h,h as d,j as f,k as p,l as m,n as v}from"./client.73372f8d.js";function y(t){let s,e,y,E,g,x,b,j,w,D,H,I,M,T=t[0].title+"",V=t[0].html+"",$=t[0].pubdate+"";return document.title=s=t[0].title,{c(){e=a("meta"),E=n(),g=a("div"),x=a("h1"),b=o(T),j=n(),w=a("div"),D=n(),H=a("div"),I=a("p"),M=o($),this.h()},l(t){const s=c('[data-svelte="svelte-19wcsm0"]',document.head);e=i(s,"META",{property:!0,content:!0}),s.forEach(r),E=l(t),g=i(t,"DIV",{class:!0});var a=u(g);x=i(a,"H1",{});var n=u(x);b=h(n,T),n.forEach(r),a.forEach(r),j=l(t),w=i(t,"DIV",{class:!0}),u(w).forEach(r),D=l(t),H=i(t,"DIV",{class:!0});var o=u(H);I=i(o,"P",{class:!0});var d=u(I);M=h(d,$),d.forEach(r),o.forEach(r),this.h()},h(){d(e,"property","og:title"),d(e,"content",y=t[0].title),d(g,"class","title"),d(w,"class","content"),d(I,"class","date"),d(H,"class","meta")},m(t,s){f(document.head,e),p(t,E,s),p(t,g,s),f(g,x),f(x,b),p(t,j,s),p(t,w,s),w.innerHTML=V,p(t,D,s),p(t,H,s),f(H,I),f(I,M)},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title)&&d(e,"content",y),1&a&&T!==(T=t[0].title+"")&&m(b,T),1&a&&V!==(V=t[0].html+"")&&(w.innerHTML=V),1&a&&$!==($=t[0].pubdate+"")&&m(M,$)},i:v,o:v,d(t){r(e),t&&r(E),t&&r(g),t&&r(j),t&&r(w),t&&r(D),t&&r(H)}}}var E=function(t,s,e,a){return new(e||(e=Promise))((function(n,o){function c(t){try{r(a.next(t))}catch(t){o(t)}}function i(t){try{r(a.throw(t))}catch(t){o(t)}}function r(t){var s;t.done?n(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(c,i)}r((a=a.apply(t,s||[])).next())}))};function g({params:t}){return E(this,void 0,void 0,(function*(){const s=yield this.fetch(`blog/${t.slug}.json`),e=yield s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}))}function x(t,s,e){let{post:a}=s;return t.$$set=t=>{"post"in t&&e(0,a=t.post)},[a]}export default class extends t{constructor(t){super(),s(this,t,x,y,e,{post:0})}}export{g as preload};