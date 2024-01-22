import{L as Xe,S as ve,i as ke,s as Ee,H as K,k as v,l as k,m as E,h as g,n as i,b as P,T as se,C as ue,V as Je,o as Qe,v as Ze,x as ge,y as be,z as pe,f as F,t as W,A as we,W as Ke,q as H,a as M,P as Se,r as V,c as O,Q as Ne,N as m,d as te,g as le,I as Ce,X as $e,Y as ze,R as ne,Z as et,_ as tt,$ as lt,J as Ge,a0 as re,a1 as rt,a2 as at}from"../../../chunks/index-2d61e68c.js";import{c as nt,a as st,q as it,s as ot,b as ae}from"../../../chunks/index-f6e4bbdf.js";function ct(a,{from:e,to:t},l={}){const r=getComputedStyle(a),s=r.transform==="none"?"":r.transform,[f,h]=r.transformOrigin.split(" ").map(parseFloat),d=e.left+e.width*f/t.width-(t.left+f),n=e.top+e.height*h/t.height-(t.top+h),{delay:c=0,duration:_=b=>Math.sqrt(b)*120,easing:o=nt}=l;return{delay:c,duration:Xe(_)?_(Math.sqrt(d*d+n*n)):_,easing:o,css:(b,p)=>{const y=p*d,T=p*n,u=b+p*e.width/t.width,C=b+p*e.height/t.height;return`transform: ${s} translate(${y}px, ${T}px) scale(${u}, ${C});`}}}const ye=Math.PI/180,Pe=2,Be=1,ce=20,ut=["hotpink","gold","dodgerblue","tomato","rebeccapurple","lightgreen","turquoise"],U=(a,e=0)=>Math.random()*(a-e)+e,ft=(a,e,t,l,r,s,f)=>{let h,d,n,c,_,o,b,p=s[Math.floor(U(s.length))],y=U(90,-90);e?(d=e[0],n=e[1],c=U(t,5),_=U(t,5),h=U(l+r/2,l-r/2)*ye,y*=2):(d=U(a.canvas.width),n=U(-ce),c=U(5),_=U(5,1),h=U(180)*ye),o=Math.cos(h),b=Math.sin(h);let T={dead:!1,life:0,delay:0,x:d,y:n,angle:U(360),da:y,dx:o*c,dy:b*_,w:U(18,10),h:U(6,4),gx:0,gy:U(4.5,2),xw:U(6,1),style:p};return f&&(T=f(T)),T},dt=(a,e)=>{e.dead||e.life<e.delay||(a.save(),a.translate(e.x,e.y),a.rotate(e.angle*ye),e.style instanceof HTMLImageElement?a.drawImage(e.style,-e.style.width/2,-e.style.height/2):(a.fillStyle=e.style,a.beginPath(),a.rect(e.w*-.5,e.h*-.5,e.w,e.h),a.fill()),a.restore())},ht=(a,e)=>{a.life+=e,!(a.dead||a.life<a.delay)&&(a.angle+=a.da*e*Pe,a.dy+=a.gy*e*Pe,a.dx+=U(4,2)*Math.sin(a.life*a.xw)*e,a.dx*=.98,a.dy*=.98,a.x+=a.dx*Be,a.y+=a.dy*Be)},mt=(a,e)=>e.x<-ce||e.x>a.canvas.width+ce||e.y>a.canvas.height+ce;function _t(a){let e,t,l;return K(a[11]),{c(){e=v("canvas"),this.h()},l(r){e=k(r,"CANVAS",{width:!0,height:!0,class:!0}),E(e).forEach(g),this.h()},h(){i(e,"width",a[1]),i(e,"height",a[2]),i(e,"class","svelte-1efe31a")},m(r,s){P(r,e,s),a[12](e),t||(l=se(window,"resize",a[11]),t=!0)},p(r,[s]){s&2&&i(e,"width",r[1]),s&4&&i(e,"height",r[2])},i:ue,o:ue,d(r){r&&g(e),a[12](null),t=!1,l()}}}const gt=(a,e)=>{a.clearRect(0,0,a.canvas.width,a.canvas.height);for(let t=0;t<e.length;++t)dt(a,e[t])},bt=(a,e,t,l)=>{let r=e.length;for(let s=0;s<e.length;++s){const f=e[s];f.dead?r--:(ht(f,t),mt(a,f)&&(f.dead=!0),l&&l(f,t))}return r>0},pt=(a,e,t,l,r,s,f,h,d,n)=>{const c=a.getContext("2d");if(!c)throw new Error("No context?");const _=Array.from({length:t},()=>ft(c,l,r,s,f,h,d));let o,b;const p=y=>{gt(c,_),bt(c,_,(y-b)/1e3,n)?(b=y,o=requestAnimationFrame(p)):e()};return b=performance.now(),o=requestAnimationFrame(p),()=>{cancelAnimationFrame(o)}};function wt(a,e,t){let{styles:l=ut}=e,{particleCount:r=50}=e,{origin:s=void 0}=e,{force:f=15}=e,{angle:h=0}=e,{spread:d=360}=e,{onCreate:n=void 0}=e,{onUpdate:c=void 0}=e;const _=Je();let o,b,p;Qe(()=>(t(0,o.width=b,o),t(0,o.height=p,o),pt(o,()=>_("completed"),r,s,f,h,d,l,n,c)));function y(){t(1,b=window.innerWidth),t(2,p=window.innerHeight)}function T(u){Ze[u?"unshift":"push"](()=>{o=u,t(0,o)})}return a.$$set=u=>{"styles"in u&&t(3,l=u.styles),"particleCount"in u&&t(4,r=u.particleCount),"origin"in u&&t(5,s=u.origin),"force"in u&&t(6,f=u.force),"angle"in u&&t(7,h=u.angle),"spread"in u&&t(8,d=u.spread),"onCreate"in u&&t(9,n=u.onCreate),"onUpdate"in u&&t(10,c=u.onUpdate)},[o,b,p,l,r,s,f,h,d,n,c,y,T]}class yt extends ve{constructor(e){super(),ke(this,e,wt,_t,Ee,{styles:3,particleCount:4,origin:5,force:6,angle:7,spread:8,onCreate:9,onUpdate:10})}}function vt(a){let e,t;return e=new yt({props:{particleCount:a[2],origin:a[0],force:a[3],spread:a[5],angle:a[4],styles:a[1],onCreate:a[6],onUpdate:a[7]}}),e.$on("completed",a[8]),{c(){ge(e.$$.fragment)},l(l){be(e.$$.fragment,l)},m(l,r){pe(e,l,r),t=!0},p(l,[r]){const s={};r&4&&(s.particleCount=l[2]),r&1&&(s.origin=l[0]),r&8&&(s.force=l[3]),r&32&&(s.spread=l[5]),r&16&&(s.angle=l[4]),r&2&&(s.styles=l[1]),r&64&&(s.onCreate=l[6]),r&128&&(s.onUpdate=l[7]),e.$set(s)},i(l){t||(F(e.$$.fragment,l),t=!0)},o(l){W(e.$$.fragment,l),t=!1},d(l){we(e,l)}}}function kt(a,e,t){let{origin:l}=e,{styles:r=void 0}=e,{particleCount:s=50}=e,{force:f=15}=e,{angle:h=-90}=e,{spread:d=360}=e,{onCreate:n=void 0}=e,{onUpdate:c=void 0}=e;function _(o){Ke.call(this,a,o)}return a.$$set=o=>{"origin"in o&&t(0,l=o.origin),"styles"in o&&t(1,r=o.styles),"particleCount"in o&&t(2,s=o.particleCount),"force"in o&&t(3,f=o.force),"angle"in o&&t(4,h=o.angle),"spread"in o&&t(5,d=o.spread),"onCreate"in o&&t(6,n=o.onCreate),"onUpdate"in o&&t(7,c=o.onUpdate)},[l,r,s,f,h,d,n,c,_]}class Ue extends ve{constructor(e){super(),ke(this,e,kt,vt,Ee,{origin:0,styles:1,particleCount:2,force:3,angle:4,spread:5,onCreate:6,onUpdate:7})}}function qe(a,e,t){const l=a.slice();return l[9]=e[t],l}function Fe(a,e,t){const l=a.slice();return l[9]=e[t],l}function De(a,e,t){const l=a.slice();return l[9]=e[t],l}function Et(a){let e,t,l,r,s,f,h,d,n,c,_,o,b,p,y,T;return b=new Ue({props:{particleCount:100,angle:-60,force:30,spread:20,origin:[0,window.innerHeight]}}),y=new Ue({props:{particleCount:100,angle:-120,force:30,spread:20,origin:[window.innerWidth,window.innerHeight]}}),{c(){e=v("section"),t=v("h1"),l=H("Thank you"),r=M(),s=v("h2"),f=H("Your response has been submitted"),h=M(),d=v("a"),n=v("button"),c=H("Home"),o=M(),ge(b.$$.fragment),p=M(),ge(y.$$.fragment),this.h()},l(u){e=k(u,"SECTION",{class:!0});var C=E(e);t=k(C,"H1",{class:!0});var w=E(t);l=V(w,"Thank you"),w.forEach(g),r=O(C),s=k(C,"H2",{class:!0});var x=E(s);f=V(x,"Your response has been submitted"),x.forEach(g),h=O(C),d=k(C,"A",{href:!0});var S=E(d);n=k(S,"BUTTON",{class:!0,type:!0});var I=E(n);c=V(I,"Home"),I.forEach(g),S.forEach(g),C.forEach(g),o=O(u),be(b.$$.fragment,u),p=O(u),be(y.$$.fragment,u),this.h()},h(){i(t,"class","text-white text-3xl md:text-6xl mb-4"),i(s,"class","text-white text-2xl md:text-5xl opacity-50 mb-12"),i(n,"class","py-2 px-12 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"),i(n,"type","button"),i(d,"href","/"),i(e,"class","absolute top-0 left-0 h-screen w-full bg-accent flex flex-col justify-center items-center")},m(u,C){P(u,e,C),m(e,t),m(t,l),m(e,r),m(e,s),m(s,f),m(e,h),m(e,d),m(d,n),m(n,c),P(u,o,C),pe(b,u,C),P(u,p,C),pe(y,u,C),T=!0},p:ue,i(u){T||(_||K(()=>{_=Ce(e,ot,{duration:1e3}),_.start()}),F(b.$$.fragment,u),F(y.$$.fragment,u),T=!0)},o(u){W(b.$$.fragment,u),W(y.$$.fragment,u),T=!1},d(u){u&&g(e),u&&g(o),we(b,u),u&&g(p),we(y,u)}}}function Ct(a){let e,t,l,r,s,f,h,d,n,c,_,o=a[2],b=[];for(let w=0;w<o.length;w+=1)b[w]=He(De(a,o,w));let p=a[0]==null&&Ve(a),y=a[0]!=null&&Ye(a);const T=[Tt,xt],u=[];function C(w,x){return w[0]!=null?0:1}return h=C(a),d=u[h]=T[h](a),{c(){e=v("iframe"),t=M(),l=v("form");for(let w=0;w<b.length;w+=1)b[w].c();r=M(),p&&p.c(),s=M(),y&&y.c(),f=M(),d.c(),this.h()},l(w){e=k(w,"IFRAME",{title:!0,name:!0,id:!0,class:!0}),E(e).forEach(g),t=O(w),l=k(w,"FORM",{class:!0,target:!0,action:!0,method:!0});var x=E(l);for(let S=0;S<b.length;S+=1)b[S].l(x);r=O(x),p&&p.l(x),s=O(x),y&&y.l(x),f=O(x),d.l(x),x.forEach(g),this.h()},h(){i(e,"title","dummyframe"),i(e,"name","dummyframe"),i(e,"id","dummyframe"),i(e,"class","hidden"),i(l,"class","min-h-full h-full flex-grow flex flex-col justify-center relative"),i(l,"target","dummyframe"),i(l,"action","https://public.herotofu.com/v1/2aedf4a0-a7cf-11ed-a31e-753411848f80"),i(l,"method","post")},m(w,x){P(w,e,x),P(w,t,x),P(w,l,x);for(let S=0;S<b.length;S+=1)b[S].m(l,null);m(l,r),p&&p.m(l,null),m(l,s),y&&y.m(l,null),m(l,f),u[h].m(l,null),n=!0,c||(_=se(l,"submit",a[8]),c=!0)},p(w,x){if(x&5){o=w[2];let I;for(I=0;I<o.length;I+=1){const q=De(w,o,I);b[I]?b[I].p(q,x):(b[I]=He(q),b[I].c(),b[I].m(l,r))}for(;I<b.length;I+=1)b[I].d(1);b.length=o.length}w[0]==null?p?(p.p(w,x),x&1&&F(p,1)):(p=Ve(w),p.c(),F(p,1),p.m(l,s)):p&&(le(),W(p,1,1,()=>{p=null}),te()),w[0]!=null?y?(y.p(w,x),x&1&&F(y,1)):(y=Ye(w),y.c(),F(y,1),y.m(l,f)):y&&(le(),W(y,1,1,()=>{y=null}),te());let S=h;h=C(w),h!==S&&(le(),W(u[S],1,1,()=>{u[S]=null}),te(),d=u[h],d||(d=u[h]=T[h](w),d.c()),F(d,1),d.m(l,null))},i(w){n||(F(p),F(y),F(d),n=!0)},o(w){W(p),W(y),W(d),n=!1},d(w){w&&g(e),w&&g(t),w&&g(l),$e(b,w),p&&p.d(),y&&y.d(),u[h].d(),c=!1,_()}}}function He(a){let e,t;return{c(){e=v("input"),this.h()},l(l){e=k(l,"INPUT",{class:!0,type:!0,name:!0}),this.h()},h(){i(e,"class","hidden"),i(e,"type","radio"),i(e,"name","satisfaction"),e.value=a[9],e.checked=t=a[0]==a[9]},m(l,r){P(l,e,r)},p(l,r){r&1&&t!==(t=l[0]==l[9])&&(e.checked=t)},d(l){l&&g(e)}}}function Ve(a){let e,t,l,r=[],s=new Map,f,h=a[2];const d=n=>n[9];for(let n=0;n<h.length;n+=1){let c=Fe(a,h,n),_=d(c);s.set(_,r[n]=We(_,c))}return{c(){e=v("div"),t=M(),l=v("section");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=k(n,"DIV",{class:!0}),E(e).forEach(g),t=O(n),l=k(n,"SECTION",{class:!0});var c=E(l);for(let _=0;_<r.length;_+=1)r[_].l(c);c.forEach(g),this.h()},h(){i(e,"class","flex-grow"),i(l,"class","absolute left-1/2 -translate-x-1/2 top-20 py-5 flex flex-row justify-center items-center gap-5 md:gap-10")},m(n,c){P(n,e,c),P(n,t,c),P(n,l,c);for(let _=0;_<r.length;_+=1)r[_].m(l,null);f=!0},p(n,c){if(c&5){h=n[2],le();for(let _=0;_<r.length;_+=1)r[_].r();r=ze(r,c,d,1,n,h,s,l,rt,We,null,Fe);for(let _=0;_<r.length;_+=1)r[_].a();te()}},i(n){if(!f){for(let c=0;c<h.length;c+=1)F(r[c]);f=!0}},o(n){for(let c=0;c<r.length;c+=1)W(r[c]);f=!1},d(n){n&&g(e),n&&g(t),n&&g(l);for(let c=0;c<r.length;c+=1)r[c].d()}}}function We(a,e){let t,l,r,s,f,h=ue,d,n,c;function _(){return e[6](e[9])}return{key:a,first:null,c(){t=v("img"),this.h()},l(o){t=k(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){i(t,"class","w-14 h-14 sm:w-28 sm:h-28 md:w-40 md:h-40 transition-transform hover:scale-110 cursor-pointer"),ne(t.src,l=`/images/faces/${e[9].toLowerCase().replace(" ","")}.png`)||i(t,"src",l),i(t,"alt",e[9]),this.first=t},m(o,b){P(o,t,b),d=!0,n||(c=se(t,"click",_),n=!0)},p(o,b){e=o},r(){f=t.getBoundingClientRect()},f(){et(t),h(),tt(t,f)},a(){h(),h=lt(t,f,ct,{})},i(o){d||(K(()=>{s&&s.end(1),r=Ce(t,e[4],{key:e[9]}),r.start()}),d=!0)},o(o){r&&r.invalidate(),s=Ge(t,e[3],{key:e[9]}),d=!1},d(o){o&&g(t),o&&s&&s.end(),n=!1,c()}}}function Ye(a){let e,t=[],l=new Map,r,s,f,h,d,n,c,_,o,b,p,y,T,u,C,w,x,S,I,q,$,A,D,B,X,ee,Y,J,j,z,fe,de,Q,he,Z,ie,me=[a[0]];const xe=R=>R[9];for(let R=0;R<1;R+=1){let L=qe(a,me,R),N=xe(L);l.set(N,t[R]=je(N,L))}return{c(){e=v("section");for(let R=0;R<1;R+=1)t[R].c();r=M(),s=v("div"),f=v("p"),h=H("Where are you?"),d=M(),n=v("div"),c=v("input"),_=M(),o=v("label"),b=H("Crawley"),p=M(),y=v("br"),T=M(),u=v("input"),C=M(),w=v("label"),x=H("Belfast"),S=M(),I=v("label"),q=H("What could we have improved?"),$=M(),A=v("textarea"),D=M(),B=v("label"),X=H("What did you enjoy?"),ee=M(),Y=v("textarea"),J=M(),j=v("div"),z=v("button"),fe=H("Skip"),de=M(),Q=v("button"),he=H("Complete"),this.h()},l(R){e=k(R,"SECTION",{class:!0});var L=E(e);for(let _e=0;_e<1;_e+=1)t[_e].l(L);r=O(L),s=k(L,"DIV",{class:!0});var N=E(s);f=k(N,"P",{class:!0});var Te=E(f);h=V(Te,"Where are you?"),Te.forEach(g),d=O(N),n=k(N,"DIV",{class:!0});var G=E(n);c=k(G,"INPUT",{type:!0,name:!0,id:!0}),_=O(G),o=k(G,"LABEL",{class:!0,for:!0});var Ie=E(o);b=V(Ie,"Crawley"),Ie.forEach(g),p=O(G),y=k(G,"BR",{}),T=O(G),u=k(G,"INPUT",{type:!0,name:!0,id:!0}),C=O(G),w=k(G,"LABEL",{class:!0,for:!0});var Me=E(w);x=V(Me,"Belfast"),Me.forEach(g),G.forEach(g),S=O(N),I=k(N,"LABEL",{class:!0,for:!0});var Oe=E(I);q=V(Oe,"What could we have improved?"),Oe.forEach(g),$=O(N),A=k(N,"TEXTAREA",{class:!0,id:!0,name:!0,rows:!0,placeholder:!0}),E(A).forEach(g),D=O(N),B=k(N,"LABEL",{class:!0,for:!0});var Ae=E(B);X=V(Ae,"What did you enjoy?"),Ae.forEach(g),ee=O(N),Y=k(N,"TEXTAREA",{class:!0,id:!0,name:!0,rows:!0,placeholder:!0}),E(Y).forEach(g),J=O(N),j=k(N,"DIV",{class:!0});var oe=E(j);z=k(oe,"BUTTON",{class:!0,type:!0});var Le=E(z);fe=V(Le,"Skip"),Le.forEach(g),de=O(oe),Q=k(oe,"BUTTON",{class:!0,type:!0});var Re=E(Q);he=V(Re,"Complete"),Re.forEach(g),oe.forEach(g),N.forEach(g),L.forEach(g),this.h()},h(){i(f,"class","font-medium text-lg md:text-2xl mb-4"),i(c,"type","radio"),i(c,"name","where"),i(c,"id","crawley"),c.value="Crawley",c.required=!0,i(o,"class","text-lg"),i(o,"for","crawley"),i(u,"type","radio"),i(u,"name","where"),i(u,"id","belfast"),u.value="Belfast",u.required=!0,i(w,"class","text-lg"),i(w,"for","belfast"),i(n,"class",""),i(I,"class","font-medium text-lg md:text-2xl mb-4 mt-8"),i(I,"for","negatives"),i(A,"class","rounded-md border border-accent shadow-md p-4"),i(A,"id","negatives"),i(A,"name","negatives"),i(A,"rows","4"),i(A,"placeholder","I couldn't figure out... this would be better if..."),i(B,"class","font-medium text-lg md:text-2xl mb-4 mt-12"),i(B,"for","positives"),i(Y,"class","rounded-md border border-accent shadow-md p-4"),i(Y,"id","positives"),i(Y,"name","positives"),i(Y,"rows","4"),i(Y,"placeholder","The collaboratives spaces really helped..."),i(z,"class","py-3 px-12 bg-accent text-white font-semibold rounded-lg shadow-md"),i(z,"type","submit"),z.value="Submit",i(Q,"class","py-3 px-12 bg-accent text-white font-semibold rounded-lg shadow-md"),i(Q,"type","submit"),Q.value="Submit",i(j,"class","w-full fixed bottom-0 left-0 px-6 md:px-16 py-4 flex flex-col md:flex-row justify-between gap-4 z-10 backdrop-blur-sm"),i(s,"class","flex flex-col flex-grow"),i(e,"class","flex flex-row gap-12 p-6 md:p-16")},m(R,L){P(R,e,L);for(let N=0;N<1;N+=1)t[N].m(e,null);m(e,r),m(e,s),m(s,f),m(f,h),m(s,d),m(s,n),m(n,c),m(n,_),m(n,o),m(o,b),m(n,p),m(n,y),m(n,T),m(n,u),m(n,C),m(n,w),m(w,x),m(s,S),m(s,I),m(I,q),m(s,$),m(s,A),m(s,D),m(s,B),m(B,X),m(s,ee),m(s,Y),m(s,J),m(s,j),m(j,z),m(z,fe),m(j,de),m(j,Q),m(Q,he),ie=!0},p(R,L){L&1&&(me=[R[0]],le(),t=ze(t,L,xe,1,R,me,l,e,at,je,r,qe),te())},i(R){if(!ie){for(let L=0;L<1;L+=1)F(t[L]);K(()=>{Z||(Z=re(e,ae,{},!0)),Z.run(1)}),ie=!0}},o(R){for(let L=0;L<1;L+=1)W(t[L]);Z||(Z=re(e,ae,{},!1)),Z.run(0),ie=!1},d(R){R&&g(e);for(let L=0;L<1;L+=1)t[L].d();R&&Z&&Z.end()}}}function je(a,e){let t,l,r,s,f,h,d;return{key:a,first:null,c(){t=v("img"),this.h()},l(n){t=k(n,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){i(t,"class","mx-auto mb-12 w-20 h-20 md:w-40 md:h-40 transition-transform hover:scale-110 cursor-pointer"),ne(t.src,l=`/images/faces/${e[0].toLowerCase().replace(" ","")}.png`)||i(t,"src",l),i(t,"alt",e[0]),this.first=t},m(n,c){P(n,t,c),f=!0,h||(d=se(t,"click",e[7]),h=!0)},p(n,c){e=n,(!f||c&1&&!ne(t.src,l=`/images/faces/${e[0].toLowerCase().replace(" ","")}.png`))&&i(t,"src",l),(!f||c&1)&&i(t,"alt",e[0])},i(n){f||(K(()=>{s&&s.end(1),r=Ce(t,e[4],{key:e[0]}),r.start()}),f=!0)},o(n){r&&r.invalidate(),s=Ge(t,e[3],{key:e[0]}),f=!1},d(n){n&&g(t),n&&s&&s.end(),h=!1,d()}}}function xt(a){let e,t,l,r,s;return{c(){e=v("a"),t=v("img"),this.h()},l(f){e=k(f,"A",{class:!0,href:!0});var h=E(e);t=k(h,"IMG",{src:!0,alt:!0}),h.forEach(g),this.h()},h(){ne(t.src,l="/images/simple-logo.svg")||i(t,"src",l),i(t,"alt","COREF logo"),i(e,"class","relative mx-auto"),i(e,"href","/")},m(f,h){P(f,e,h),m(e,t),s=!0},i(f){s||(K(()=>{r||(r=re(e,ae,{},!0)),r.run(1)}),s=!0)},o(f){r||(r=re(e,ae,{},!1)),r.run(0),s=!1},d(f){f&&g(e),f&&r&&r.end()}}}function Tt(a){let e,t,l,r,s,f,h;return{c(){e=v("a"),t=v("img"),s=M(),f=v("div"),this.h()},l(d){e=k(d,"A",{class:!0,href:!0});var n=E(e);t=k(n,"IMG",{src:!0,alt:!0}),n.forEach(g),s=O(d),f=k(d,"DIV",{class:!0}),E(f).forEach(g),this.h()},h(){ne(t.src,l="/images/simple-logo.svg")||i(t,"src",l),i(t,"alt","COREF logo"),i(e,"class","relative mx-auto"),i(e,"href","/"),i(f,"class","mb-36")},m(d,n){P(d,e,n),m(e,t),P(d,s,n),P(d,f,n),h=!0},i(d){h||(K(()=>{r||(r=re(e,ae,{},!0)),r.run(1)}),h=!0)},o(d){r||(r=re(e,ae,{},!1)),r.run(0),h=!1},d(d){d&&g(e),d&&r&&r.end(),d&&g(s),d&&g(f)}}}function It(a){let e,t,l,r,s,f,h,d,n,c,_,o,b,p,y,T,u,C,w,x,S;const I=[Ct,Et],q=[];function $(A,D){return A[1]?1:0}return u=$(a),C=q[u]=I[u](a),{c(){e=v("main"),t=v("section"),l=v("div"),r=v("h1"),s=H("Tell us your experience of the lab"),f=M(),h=v("p"),d=H(`Thanks for taking the time to provide feedback for the COREF lab. Your input is so important\r
				and appreciated because it helps us make the lab even better. Your thoughts and opinions\r
				help us see what we're doing right and where we can improve, so we can make sure the lab is\r
				meeting your needs and expectations.`),n=M(),c=v("button"),_=Se("svg"),o=Se("path"),b=M(),p=v("p"),y=H("Results"),T=M(),C.c(),this.h()},l(A){e=k(A,"MAIN",{class:!0});var D=E(e);t=k(D,"SECTION",{class:!0});var B=E(t);l=k(B,"DIV",{});var X=E(l);r=k(X,"H1",{class:!0});var ee=E(r);s=V(ee,"Tell us your experience of the lab"),ee.forEach(g),f=O(X),h=k(X,"P",{class:!0});var Y=E(h);d=V(Y,`Thanks for taking the time to provide feedback for the COREF lab. Your input is so important\r
				and appreciated because it helps us make the lab even better. Your thoughts and opinions\r
				help us see what we're doing right and where we can improve, so we can make sure the lab is\r
				meeting your needs and expectations.`),Y.forEach(g),X.forEach(g),n=O(B),c=k(B,"BUTTON",{class:!0});var J=E(c);_=Ne(J,"svg",{class:!0,xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var j=E(_);o=Ne(j,"path",{d:!0}),E(o).forEach(g),j.forEach(g),b=O(J),p=k(J,"P",{});var z=E(p);y=V(z,"Results"),z.forEach(g),J.forEach(g),B.forEach(g),T=O(D),C.l(D),D.forEach(g),this.h()},h(){i(r,"class","text-white text-3xl md:text-6xl"),i(h,"class","text-white opacity-50 mt-4 max-w-2xl"),i(o,"d","M 12 1 C 8.6761905 1 6 3.6761905 6 7 L 6 8 C 4.9 8 4 8.9 4 10 L 4 20 C 4 21.1 4.9 22 6 22 L 18 22 C 19.1 22 20 21.1 20 20 L 20 10 C 20 8.9 19.1 8 18 8 L 18 7 C 18 3.6761905 15.32381 1 12 1 z M 12 3 C 14.27619 3 16 4.7238095 16 7 L 16 8 L 8 8 L 8 7 C 8 4.7238095 9.7238095 3 12 3 z M 12 13 C 13.1 13 14 13.9 14 15 C 14 16.1 13.1 17 12 17 C 10.9 17 10 16.1 10 15 C 10 13.9 10.9 13 12 13 z"),i(_,"class","h-4 translate-y-[-0.1rem]"),i(_,"xmlns","http://www.w3.org/2000/svg"),i(_,"viewBox","0 0 24 24"),i(_,"width","24px"),i(_,"height","24px"),i(_,"fill","#fff"),i(c,"class","flex flex-row items-center py-2 px-6 opacity-50 bg-[#454F60] border border-slate-300 text-white font-semibold rounded-lg"),i(t,"class","flex flex-row justify-between items-center bg-accent p-6 md:p-16 shadow-2xl"),i(e,"class","min-h-screen flex flex-col")},m(A,D){P(A,e,D),m(e,t),m(t,l),m(l,r),m(r,s),m(l,f),m(l,h),m(h,d),m(t,n),m(t,c),m(c,_),m(_,o),m(c,b),m(c,p),m(p,y),m(e,T),q[u].m(e,null),w=!0,x||(S=se(c,"click",a[5]),x=!0)},p(A,[D]){let B=u;u=$(A),u===B?q[u].p(A,D):(le(),W(q[B],1,1,()=>{q[B]=null}),te(),C=q[u],C?C.p(A,D):(C=q[u]=I[u](A),C.c()),F(C,1),C.m(e,null))},i(A){w||(F(C),w=!0)},o(A){W(C),w=!1},d(A){A&&g(e),q[u].d(),x=!1,S()}}}function Mt(a,e,t){let l=["Very Happy","Happy","Sad","Very Sad"],r=null,s=!1;const[f,h]=st({duration:o=>Math.sqrt(o*200),fallback(o,b){const p=getComputedStyle(o),y=p.transform==="none"?"":p.transform;return{duration:500,easing:it,css:T=>`transform: ${y} scale(${T/2+.5}); opacity: ${T};`}}});return[r,s,l,f,h,()=>{window.alert("Remember to log out once finshed"),window.open("https://app.herotofu.com/forms/2aedf4a0-a7cf-11ed-a31e-753411848f80/submissions","Feedback Results","width=1000,height=800")},o=>t(0,r=o),()=>t(0,r=null),()=>t(1,s=!0)]}class Lt extends ve{constructor(e){super(),ke(this,e,Mt,It,Ee,{})}}export{Lt as default};
