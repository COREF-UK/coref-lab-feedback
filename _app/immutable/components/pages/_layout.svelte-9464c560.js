import{S as v,i as k,s as m,e as p,b as y,g as D,t as f,C as A,d as C,f as c,h as d,D as h,k as E,l as I,m as S,E as b,F as T,G as w,H as q,I as z,J as F,x as G,y as H,z as J,A as L,o as M}from"../../chunks/index-8d59e224.js";import{l as u}from"../../chunks/singletons-ba2e0b62.js";import{f as g}from"../../chunks/index-bd05a354.js";u.disable_scroll_handling;const N=u.goto;u.invalidate;u.invalidateAll;u.preload_data;u.preload_code;u.before_navigate;u.after_navigate;function $(a){let n,l,t,e;const o=a[2].default,s=h(o,a,a[1],null);return{c(){n=E("div"),s&&s.c()},l(r){n=I(r,"DIV",{});var i=S(n);s&&s.l(i),i.forEach(d)},m(r,i){y(r,n,i),s&&s.m(n,null),e=!0},p(r,i){a=r,s&&s.p&&(!e||i&2)&&b(s,o,a,a[1],e?w(o,a[1],i,null):T(a[1]),null)},i(r){e||(c(s,r),q(()=>{t&&t.end(1),l=z(n,g,{x:-5,duration:_,delay:_}),l.start()}),e=!0)},o(r){f(s,r),l&&l.invalidate(),t=F(n,g,{x:5,duration:_}),e=!1},d(r){r&&d(n),s&&s.d(r),r&&t&&t.end()}}}function P(a){let n=a[0],l,t,e=$(a);return{c(){e.c(),l=p()},l(o){e.l(o),l=p()},m(o,s){e.m(o,s),y(o,l,s),t=!0},p(o,[s]){s&1&&m(n,n=o[0])?(D(),f(e,1,1,A),C(),e=$(o),e.c(),c(e,1),e.m(l.parentNode,l)):e.p(o,s)},i(o){t||(c(e),t=!0)},o(o){f(e),t=!1},d(o){o&&d(l),e.d(o)}}}const _=500;function V(a,n,l){let{$$slots:t={},$$scope:e}=n,{url:o=""}=n;return a.$$set=s=>{"url"in s&&l(0,o=s.url),"$$scope"in s&&l(1,e=s.$$scope)},[o,e,t]}class j extends v{constructor(n){super(),k(this,n,V,P,m,{url:0})}}function B(a){let n;const l=a[1].default,t=h(l,a,a[2],null);return{c(){t&&t.c()},l(e){t&&t.l(e)},m(e,o){t&&t.m(e,o),n=!0},p(e,o){t&&t.p&&(!n||o&4)&&b(t,l,e,e[2],n?w(l,e[2],o,null):T(e[2]),null)},i(e){n||(c(t,e),n=!0)},o(e){f(t,e),n=!1},d(e){t&&t.d(e)}}}function K(a){let n,l;return n=new j({props:{url:a[0],$$slots:{default:[B]},$$scope:{ctx:a}}}),{c(){G(n.$$.fragment)},l(t){H(n.$$.fragment,t)},m(t,e){J(n,t,e),l=!0},p(t,[e]){const o={};e&1&&(o.url=t[0]),e&4&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){l||(c(n.$$.fragment,t),l=!0)},o(t){f(n.$$.fragment,t),l=!1},d(t){L(n,t)}}}const W=async({url:a})=>({props:{url:a}});function O(a,n,l){let{$$slots:t={},$$scope:e}=n,{url:o}=n;M(()=>{s()});function s(){let r;window.onload=i,document.onmousemove=i,document.onkeydown=i,document.ontouchstart=i;function i(){clearTimeout(r),r=setTimeout(()=>N("/"),6e4)}}return a.$$set=r=>{"url"in r&&l(0,o=r.url),"$$scope"in r&&l(2,e=r.$$scope)},[o,t,e]}class X extends v{constructor(n){super(),k(this,n,O,K,m,{url:0})}}export{X as default,W as load};