function $(){}const G=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function st(t){return t()}function nt(){return Object.create(null)}function N(t){t.forEach(st)}function T(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let L;function Wt(t,e){return L||(L=document.createElement("a")),L.href=e,t===L.href}function bt(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(xt(e,n))}function Jt(t,e,n,r){if(t){const i=ct(t,e,n,r);return t[0](i)}}function ct(t,e,n,r){return t[1]&&r?gt(n.ctx.slice(),t[1](r(e))):n.ctx}function Kt(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],s=Math.max(e.dirty.length,i.length);for(let c=0;c<s;c+=1)l[c]=e.dirty[c]|i[c];return l}return e.dirty|i}return e.dirty}function Qt(t,e,n,r,i,l){if(i){const s=ct(e,n,r,l);t.p(s,i)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const ot=typeof window<"u";let J=ot?()=>window.performance.now():()=>Date.now(),X=ot?t=>requestAnimationFrame(t):$;const M=new Set;function lt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&X(lt)}function K(t){let e;return M.size===0&&X(lt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let Q=!1;function $t(){Q=!0}function wt(){Q=!1}function vt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let a=0;a<e.length;a++){const f=e[a];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let o=0;o<e.length;o++){const a=e[o].claim_order,f=(i>0&&e[n[i]].claim_order<=a?i+1:vt(1,i,h=>e[n[h]].claim_order,a))-1;r[o]=n[f]+1;const _=f+1;n[_]=o,i=Math.max(_,i)}const l=[],s=[];let c=e.length-1;for(let o=n[i]+1;o!=0;o=r[o-1]){for(l.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);l.reverse(),s.sort((o,a)=>o.claim_order-a.claim_order);for(let o=0,a=0;o<s.length;o++){for(;a<l.length&&s[o].claim_order>=l[a].claim_order;)a++;const f=a<l.length?l[a]:null;t.insertBefore(s[o],f)}}function Et(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=ft("style");return Nt(at(t),e),e.sheet}function Nt(t,e){return Et(t.head||t,e),e.sheet}function St(t,e){if(Q){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){Q&&!n?St(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ut(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ft(t){return document.createElement(t)}function Y(t){return document.createTextNode(t)}function Yt(){return Y(" ")}function Zt(){return Y("")}function te(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function At(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function _t(t,e,n,r,i=!1){Mt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,i?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function jt(t,e,n,r){return _t(t,i=>i.nodeName===e,i=>{const l=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||l.push(c.name)}l.forEach(s=>i.removeAttribute(s))},()=>r(e))}function ne(t,e,n){return jt(t,e,n,ft)}function Rt(t,e){return _t(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>Y(e),!0)}function ie(t){return Rt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function se(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function dt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function ce(t,e){return new t(e)}const I=new Map;let W=0;function Bt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Pt(t,e){const n={stylesheet:Ct(e),rules:{}};return I.set(t,n),n}function D(t,e,n,r,i,l,s,c=0){const o=16.666/r;let a=`{
`;for(let m=0;m<=1;m+=o){const y=e+(n-e)*l(m);a+=m*100+`%{${s(y,1-y)}}
`}const f=a+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Bt(f)}_${c}`,h=at(t),{stylesheet:u,rules:d}=I.get(h)||Pt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${r}ms linear ${i}ms 1 both`,W+=1,_}function O(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),W-=i,W||Dt())}function Dt(){X(()=>{W||(I.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ut(e)}),I.clear())})}function oe(t,e,n,r){if(!e)return $;const i=t.getBoundingClientRect();if(e.left===i.left&&e.right===i.right&&e.top===i.top&&e.bottom===i.bottom)return $;const{delay:l=0,duration:s=300,easing:c=G,start:o=J()+l,end:a=o+s,tick:f=$,css:_}=n(t,{from:e,to:i},r);let h=!0,u=!1,d;function p(){_&&(d=D(t,0,1,s,l,c,_)),l||(u=!0)}function m(){_&&O(t,d),h=!1}return K(y=>{if(!u&&y>=o&&(u=!0),u&&y>=a&&(f(1,0),m()),!h)return!1;if(u){const x=y-o,b=0+1*c(x/s);f(b,1-b)}return!0}),p(),f(0,1),m}function le(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:r}=e,i=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=r,Ot(t,i)}}function Ot(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const r=getComputedStyle(t),i=r.transform==="none"?"":r.transform;t.style.transform=`${i} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let q;function P(t){q=t}function Z(){if(!q)throw new Error("Function called outside component initialization");return q}function ae(t){Z().$$.on_mount.push(t)}function ue(t){Z().$$.after_update.push(t)}function fe(){const t=Z();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=dt(e,n,{cancelable:r});return i.slice().forEach(s=>{s.call(t,l)}),!l.defaultPrevented}return!0}}function _e(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const A=[],it=[],F=[],rt=[],ht=Promise.resolve();let V=!1;function mt(){V||(V=!0,ht.then(pt))}function de(){return mt(),ht}function j(t){F.push(t)}const U=new Set;let S=0;function pt(){if(S!==0)return;const t=q;do{try{for(;S<A.length;){const e=A[S];S++,P(e),qt(e.$$)}}catch(e){throw A.length=0,S=0,e}for(P(null),A.length=0,S=0;it.length;)it.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];U.has(n)||(U.add(n),n())}F.length=0}while(A.length);for(;rt.length;)rt.pop()();V=!1,U.clear(),P(t)}function qt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let B;function tt(){return B||(B=Promise.resolve(),B.then(()=>{B=null})),B}function C(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const H=new Set;let E;function he(){E={r:0,c:[],p:E}}function me(){E.r||N(E.c),E=E.p}function yt(t,e){t&&t.i&&(H.delete(t),t.i(e))}function Tt(t,e,n,r){if(t&&t.o){if(H.has(t))return;H.add(t),E.c.push(()=>{H.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const et={duration:0};function pe(t,e,n){const r={direction:"in"};let i=e(t,n,r),l=!1,s,c,o=0;function a(){s&&O(t,s)}function f(){const{delay:h=0,duration:u=300,easing:d=G,tick:p=$,css:m}=i||et;m&&(s=D(t,0,1,u,h,d,m,o++)),p(0,1);const y=J()+h,x=y+u;c&&c.abort(),l=!0,j(()=>C(t,!0,"start")),c=K(b=>{if(l){if(b>=x)return p(1,0),C(t,!0,"end"),a(),l=!1;if(b>=y){const w=d((b-y)/u);p(w,1-w)}}return l})}let _=!1;return{start(){_||(_=!0,O(t),T(i)?(i=i(r),tt().then(f)):f())},invalidate(){_=!1},end(){l&&(a(),l=!1)}}}function ye(t,e,n){const r={direction:"out"};let i=e(t,n,r),l=!0,s;const c=E;c.r+=1;function o(){const{delay:a=0,duration:f=300,easing:_=G,tick:h=$,css:u}=i||et;u&&(s=D(t,1,0,f,a,_,u));const d=J()+a,p=d+f;j(()=>C(t,!1,"start")),K(m=>{if(l){if(m>=p)return h(0,1),C(t,!1,"end"),--c.r||N(c.c),!1;if(m>=d){const y=_((m-d)/f);h(1-y,y)}}return l})}return T(i)?tt().then(()=>{i=i(r),o()}):o(),{end(a){a&&i.tick&&i.tick(1,0),l&&(s&&O(t,s),l=!1)}}}function ge(t,e,n,r){const i={direction:"both"};let l=e(t,n,i),s=r?0:1,c=null,o=null,a=null;function f(){a&&O(t,a)}function _(u,d){const p=u.b-s;return d*=Math.abs(p),{a:s,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=G,tick:y=$,css:x}=l||et,b={start:J()+d,b:u};u||(b.group=E,E.r+=1),c||o?o=b:(x&&(f(),a=D(t,s,u,p,d,m,x)),u&&y(0,1),c=_(b,p),j(()=>C(t,u,"start")),K(w=>{if(o&&w>o.start&&(c=_(o,p),o=null,C(t,c.b,"start"),x&&(f(),a=D(t,s,c.b,c.duration,0,m,l.css))),c){if(w>=c.end)y(s=c.b,1-s),C(t,c.b,"end"),o||(c.b?f():--c.group.r||N(c.group.c)),c=null;else if(w>=c.start){const R=w-c.start;s=c.a+c.d*m(R/c.duration),y(s,1-s)}}return!!(c||o)}))}return{run(u){T(l)?tt().then(()=>{l=l(i),h(u)}):h(u)},end(){f(),c=o=null}}}function zt(t,e){Tt(t,1,1,()=>{e.delete(t.key)})}function be(t,e){t.f(),zt(t,e)}function xe(t,e,n,r,i,l,s,c,o,a,f,_){let h=t.length,u=l.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],y=new Map,x=new Map;for(d=u;d--;){const g=_(i,l,d),v=n(g);let k=s.get(v);k?r&&k.p(g,e):(k=a(v,g),k.c()),y.set(v,m[d]=k),v in p&&x.set(v,Math.abs(d-p[v]))}const b=new Set,w=new Set;function R(g){yt(g,1),g.m(c,f),s.set(g.key,g),f=g.first,u--}for(;h&&u;){const g=m[u-1],v=t[h-1],k=g.key,z=v.key;g===v?(f=g.first,h--,u--):y.has(z)?!s.has(k)||b.has(k)?R(g):w.has(z)?h--:x.get(k)>x.get(z)?(w.add(k),R(g)):(b.add(z),h--):(o(v,s),h--)}for(;h--;){const g=t[h];y.has(g.key)||o(g,s)}for(;u;)R(m[u-1]);return m}function $e(t){t&&t.c()}function we(t,e){t&&t.l(e)}function Lt(t,e,n,r){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),r||j(()=>{const s=t.$$.on_mount.map(st).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),l.forEach(j)}function Ft(t,e){const n=t.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(A.push(t),mt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,r,i,l,s,c=[-1]){const o=q;P(t);const a=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:i,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:nt(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(a.root);let f=!1;if(a.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return a.ctx&&i(a.ctx[_],a.ctx[_]=d)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](d),f&&Ht(t,_)),h}):[],a.update(),f=!0,N(a.before_update),a.fragment=r?r(a.ctx):!1,e.target){if(e.hydrate){$t();const _=At(e.target);a.fragment&&a.fragment.l(_),_.forEach(ut)}else a.fragment&&a.fragment.c();e.intro&&yt(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),wt(),pt()}P(o)}class ke{$destroy(){Ft(this,1),this.$destroy=$}$on(e,n){if(!T(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{zt as $,Ft as A,de as B,$ as C,Jt as D,Qt as E,Ut as F,Kt as G,j as H,pe as I,ye as J,gt as K,T as L,G as M,St as N,Gt as O,Wt as P,te as Q,fe as R,ke as S,_e as T,Xt as U,xe as V,le as W,Ot as X,oe as Y,ge as Z,be as _,Yt as a,Vt as b,ie as c,me as d,Zt as e,yt as f,he as g,ut as h,ve as i,ue as j,ft as k,ne as l,At as m,ee as n,ae as o,se as p,Y as q,Rt as r,It as s,Tt as t,re as u,it as v,ce as w,$e as x,we as y,Lt as z};