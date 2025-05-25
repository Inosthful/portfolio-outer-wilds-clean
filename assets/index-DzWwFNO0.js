(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Lc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const _t={},Fs=[],$n=()=>{},Bp=()=>!1,ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Dc=n=>n.startsWith("onUpdate:"),Ot=Object.assign,Ic=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},zp=Object.prototype.hasOwnProperty,at=(n,e)=>zp.call(n,e),He=Array.isArray,Os=n=>ga(n)==="[object Map]",Ff=n=>ga(n)==="[object Set]",qe=n=>typeof n=="function",At=n=>typeof n=="string",Si=n=>typeof n=="symbol",xt=n=>n!==null&&typeof n=="object",Of=n=>(xt(n)||qe(n))&&qe(n.then)&&qe(n.catch),Bf=Object.prototype.toString,ga=n=>Bf.call(n),kp=n=>ga(n).slice(8,-1),zf=n=>ga(n)==="[object Object]",Uc=n=>At(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ar=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Hp=/-(\w)/g,Gi=_a(n=>n.replace(Hp,(e,t)=>t?t.toUpperCase():"")),Vp=/\B([A-Z])/g,ds=_a(n=>n.replace(Vp,"-$1").toLowerCase()),kf=_a(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ia=_a(n=>n?`on${kf(n)}`:""),Hi=(n,e)=>!Object.is(n,e),Ua=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Hf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Gp=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Wp=n=>{const e=At(n)?Number(n):NaN;return isNaN(e)?n:e};let Tu;const va=()=>Tu||(Tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function js(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=At(i)?Yp(i):js(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(At(n)||xt(n))return n}const Xp=/;(?![^(]*\))/g,jp=/:([^]+)/,qp=/\/\*[^]*?\*\//g;function Yp(n){const e={};return n.replace(qp,"").split(Xp).forEach(t=>{if(t){const i=t.split(jp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Tn(n){let e="";if(At(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=Tn(n[t]);i&&(e+=i+" ")}else if(xt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const $p="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kp=Lc($p);function Vf(n){return!!n||n===""}const Gf=n=>!!(n&&n.__v_isRef===!0),lt=n=>At(n)?n:n==null?"":He(n)||xt(n)&&(n.toString===Bf||!qe(n.toString))?Gf(n)?lt(n.value):JSON.stringify(n,Wf,2):String(n),Wf=(n,e)=>Gf(e)?Wf(n,e.value):Os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Na(i,r)+" =>"]=s,t),{})}:Ff(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Na(t))}:Si(e)?Na(e):xt(e)&&!He(e)&&!zf(e)?String(e):e,Na=(n,e="")=>{var t;return Si(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class Zp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){++this._on===1&&(this.prevScope=cn,cn=this)}off(){this._on>0&&--this._on===0&&(cn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jp(){return cn}let gt;const Fa=new WeakSet;class Xf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Eu(this),Yf(this);const e=gt,t=On;gt=this,On=!0;try{return this.fn()}finally{$f(this),gt=e,On=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Oc(e);this.deps=this.depsTail=void 0,Eu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rl(this)&&this.run()}get dirty(){return Rl(this)}}let jf=0,Rr,Cr;function qf(n,e=!1){if(n.flags|=8,e){n.next=Cr,Cr=n;return}n.next=Rr,Rr=n}function Nc(){jf++}function Fc(){if(--jf>0)return;if(Cr){let e=Cr;for(Cr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Rr;){let e=Rr;for(Rr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Yf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $f(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Oc(i),Qp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Rl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Kf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Kf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rl(n))))return;n.flags|=2;const e=n.dep,t=gt,i=On;gt=n,On=!0;try{Yf(n);const s=n.fn(n._value);(e.version===0||Hi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{gt=t,On=i,$f(n),n.flags&=-3}}function Oc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Oc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Qp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let On=!0;const Zf=[];function yi(){Zf.push(On),On=!1}function Mi(){const n=Zf.pop();On=n===void 0?!0:n}function Eu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=gt;gt=void 0;try{e()}finally{gt=t}}}let Br=0;class em{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!gt||!On||gt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==gt)t=this.activeLink=new em(gt,this),gt.deps?(t.prevDep=gt.depsTail,gt.depsTail.nextDep=t,gt.depsTail=t):gt.deps=gt.depsTail=t,Jf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=gt.depsTail,t.nextDep=void 0,gt.depsTail.nextDep=t,gt.depsTail=t,gt.deps===t&&(gt.deps=i)}return t}trigger(e){this.version++,Br++,this.notify(e)}notify(e){Nc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Fc()}}}function Jf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Cl=new WeakMap,us=Symbol(""),Pl=Symbol(""),zr=Symbol("");function Xt(n,e,t){if(On&&gt){let i=Cl.get(n);i||Cl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Bc),s.map=i,s.key=t),s.track()}}function pi(n,e,t,i,s,r){const o=Cl.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Nc(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&Uc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===zr||!Si(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(zr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(us)),Os(n)&&a(o.get(Pl)));break;case"delete":l||(a(o.get(us)),Os(n)&&a(o.get(Pl)));break;case"set":Os(n)&&a(o.get(us));break}}Fc()}function gs(n){const e=it(n);return e===n?e:(Xt(e,"iterate",zr),En(n)?e:e.map(kt))}function xa(n){return Xt(n=it(n),"iterate",zr),n}const tm={__proto__:null,[Symbol.iterator](){return Oa(this,Symbol.iterator,kt)},concat(...n){return gs(this).concat(...n.map(e=>He(e)?gs(e):e))},entries(){return Oa(this,"entries",n=>(n[1]=kt(n[1]),n))},every(n,e){return ii(this,"every",n,e,void 0,arguments)},filter(n,e){return ii(this,"filter",n,e,t=>t.map(kt),arguments)},find(n,e){return ii(this,"find",n,e,kt,arguments)},findIndex(n,e){return ii(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return ii(this,"findLast",n,e,kt,arguments)},findLastIndex(n,e){return ii(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return ii(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ba(this,"includes",n)},indexOf(...n){return Ba(this,"indexOf",n)},join(n){return gs(this).join(n)},lastIndexOf(...n){return Ba(this,"lastIndexOf",n)},map(n,e){return ii(this,"map",n,e,void 0,arguments)},pop(){return hr(this,"pop")},push(...n){return hr(this,"push",n)},reduce(n,...e){return wu(this,"reduce",n,e)},reduceRight(n,...e){return wu(this,"reduceRight",n,e)},shift(){return hr(this,"shift")},some(n,e){return ii(this,"some",n,e,void 0,arguments)},splice(...n){return hr(this,"splice",n)},toReversed(){return gs(this).toReversed()},toSorted(n){return gs(this).toSorted(n)},toSpliced(...n){return gs(this).toSpliced(...n)},unshift(...n){return hr(this,"unshift",n)},values(){return Oa(this,"values",kt)}};function Oa(n,e,t){const i=xa(n),s=i[e]();return i!==n&&!En(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const nm=Array.prototype;function ii(n,e,t,i,s,r){const o=xa(n),a=o!==n&&!En(n),l=o[e];if(l!==nm[e]){const h=l.apply(n,r);return a?kt(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,kt(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function wu(n,e,t,i){const s=xa(n);let r=t;return s!==n&&(En(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,kt(a),l,n)}),s[e](r,...i)}function Ba(n,e,t){const i=it(n);Xt(i,"iterate",zr);const s=i[e](...t);return(s===-1||s===!1)&&Vc(t[0])?(t[0]=it(t[0]),i[e](...t)):s}function hr(n,e,t=[]){yi(),Nc();const i=it(n)[e].apply(n,t);return Fc(),Mi(),i}const im=Lc("__proto__,__v_isRef,__isVue"),Qf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Si));function sm(n){Si(n)||(n=String(n));const e=it(this);return Xt(e,"has",n),e.hasOwnProperty(n)}class ed{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?pm:sd:r?id:nd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!s){let l;if(o&&(l=tm[t]))return l;if(t==="hasOwnProperty")return sm}const a=Reflect.get(e,t,Yt(e)?e:i);return(Si(t)?Qf.has(t):im(t))||(s||Xt(e,"get",t),r)?a:Yt(a)?o&&Uc(t)?a:a.value:xt(a)?s?rd(a):kc(a):a}}class td extends ed{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Wi(r);if(!En(i)&&!Wi(i)&&(r=it(r),i=it(i)),!He(e)&&Yt(r)&&!Yt(i))return l?!1:(r.value=i,!0)}const o=He(e)&&Uc(t)?Number(t)<e.length:at(e,t),a=Reflect.set(e,t,i,Yt(e)?e:s);return e===it(s)&&(o?Hi(i,r)&&pi(e,"set",t,i):pi(e,"add",t,i)),a}deleteProperty(e,t){const i=at(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Si(t)||!Qf.has(t))&&Xt(e,"has",t),i}ownKeys(e){return Xt(e,"iterate",He(e)?"length":us),Reflect.ownKeys(e)}}class rm extends ed{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const om=new td,am=new rm,lm=new td(!0);const Ll=n=>n,co=n=>Reflect.getPrototypeOf(n);function cm(n,e,t){return function(...i){const s=this.__v_raw,r=it(s),o=Os(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ll:e?na:kt;return!e&&Xt(r,"iterate",l?Pl:us),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function uo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function um(n,e){const t={get(s){const r=this.__v_raw,o=it(r),a=it(s);n||(Hi(s,a)&&Xt(o,"get",s),Xt(o,"get",a));const{has:l}=co(o),c=e?Ll:n?na:kt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xt(it(s),"iterate",us),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=it(r),a=it(s);return n||(Hi(s,a)&&Xt(o,"has",s),Xt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=it(a),c=e?Ll:n?na:kt;return!n&&Xt(l,"iterate",us),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Ot(t,n?{add:uo("add"),set:uo("set"),delete:uo("delete"),clear:uo("clear")}:{add(s){!e&&!En(s)&&!Wi(s)&&(s=it(s));const r=it(this);return co(r).has.call(r,s)||(r.add(s),pi(r,"add",s,s)),this},set(s,r){!e&&!En(r)&&!Wi(r)&&(r=it(r));const o=it(this),{has:a,get:l}=co(o);let c=a.call(o,s);c||(s=it(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Hi(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=it(this),{has:o,get:a}=co(r);let l=o.call(r,s);l||(s=it(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=it(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=cm(s,n,e)}),t}function zc(n,e){const t=um(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(at(t,s)&&s in i?t:i,s,r)}const hm={get:zc(!1,!1)},fm={get:zc(!1,!0)},dm={get:zc(!0,!1)};const nd=new WeakMap,id=new WeakMap,sd=new WeakMap,pm=new WeakMap;function mm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gm(n){return n.__v_skip||!Object.isExtensible(n)?0:mm(kp(n))}function kc(n){return Wi(n)?n:Hc(n,!1,om,hm,nd)}function _m(n){return Hc(n,!1,lm,fm,id)}function rd(n){return Hc(n,!0,am,dm,sd)}function Hc(n,e,t,i,s){if(!xt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=gm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Bs(n){return Wi(n)?Bs(n.__v_raw):!!(n&&n.__v_isReactive)}function Wi(n){return!!(n&&n.__v_isReadonly)}function En(n){return!!(n&&n.__v_isShallow)}function Vc(n){return n?!!n.__v_raw:!1}function it(n){const e=n&&n.__v_raw;return e?it(e):n}function vm(n){return!at(n,"__v_skip")&&Object.isExtensible(n)&&Hf(n,"__v_skip",!0),n}const kt=n=>xt(n)?kc(n):n,na=n=>xt(n)?rd(n):n;function Yt(n){return n?n.__v_isRef===!0:!1}function Et(n){return xm(n,!1)}function xm(n,e){return Yt(n)?n:new ym(n,e)}class ym{constructor(e,t){this.dep=new Bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:kt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||En(e)||Wi(e);e=i?e:it(e),Hi(e,t)&&(this._rawValue=e,this._value=i?e:kt(e),this.dep.trigger())}}function Mm(n){return Yt(n)?n.value:n}const Sm={get:(n,e,t)=>e==="__v_raw"?n:Mm(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Yt(s)&&!Yt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function od(n){return Bs(n)?n:new Proxy(n,Sm)}class bm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return qf(this,!0),!0}get value(){const e=this.dep.track();return Kf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tm(n,e,t=!1){let i,s;return qe(n)?i=n:(i=n.get,s=n.set),new bm(i,s,t)}const ho={},ia=new WeakMap;let rs;function Em(n,e=!1,t=rs){if(t){let i=ia.get(t);i||ia.set(t,i=[]),i.push(n)}}function wm(n,e,t=_t){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=M=>s?M:En(M)||s===!1||s===0?Fi(M,1):Fi(M);let u,h,f,d,g=!1,_=!1;if(Yt(n)?(h=()=>n.value,g=En(n)):Bs(n)?(h=()=>c(n),g=!0):He(n)?(_=!0,g=n.some(M=>Bs(M)||En(M)),h=()=>n.map(M=>{if(Yt(M))return M.value;if(Bs(M))return c(M);if(qe(M))return l?l(M,2):M()})):qe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){yi();try{f()}finally{Mi()}}const M=rs;rs=u;try{return l?l(n,3,[d]):n(d)}finally{rs=M}}:h=$n,e&&s){const M=h,D=s===!0?1/0:s;h=()=>Fi(M(),D)}const m=Jp(),p=()=>{u.stop(),m&&m.active&&Ic(m.effects,u)};if(r&&e){const M=e;e=(...D)=>{M(...D),p()}}let w=_?new Array(n.length).fill(ho):ho;const A=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const D=u.run();if(s||g||(_?D.some((C,P)=>Hi(C,w[P])):Hi(D,w))){f&&f();const C=rs;rs=u;try{const P=[D,w===ho?void 0:_&&w[0]===ho?[]:w,d];l?l(e,3,P):e(...P),w=D}finally{rs=C}}}else u.run()};return a&&a(A),u=new Xf(h),u.scheduler=o?()=>o(A,!1):A,d=M=>Em(M,!1,u),f=u.onStop=()=>{const M=ia.get(u);if(M){if(l)l(M,4);else for(const D of M)D();ia.delete(u)}},e?i?A(!0):w=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Fi(n,e=1/0,t){if(e<=0||!xt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Yt(n))Fi(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)Fi(n[i],e,t);else if(Ff(n)||Os(n))n.forEach(i=>{Fi(i,e,t)});else if(zf(n)){for(const i in n)Fi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Fi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(n,e,t,i){try{return i?n(...i):n()}catch(s){ya(s,e,t)}}function Hn(n,e,t,i){if(qe(n)){const s=to(n,e,t,i);return s&&Of(s)&&s.catch(r=>{ya(r,e,t)}),s}if(He(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Hn(n[r],e,t,i));return s}}function ya(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||_t;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){yi(),to(r,null,10,[n,l,c]),Mi();return}}Am(n,t,s,i,o)}function Am(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const en=[];let jn=-1;const zs=[];let Di=null,Ds=0;const ad=Promise.resolve();let sa=null;function Rm(n){const e=sa||ad;return n?e.then(this?n.bind(this):n):e}function Cm(n){let e=jn+1,t=en.length;for(;e<t;){const i=e+t>>>1,s=en[i],r=kr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Gc(n){if(!(n.flags&1)){const e=kr(n),t=en[en.length-1];!t||!(n.flags&2)&&e>=kr(t)?en.push(n):en.splice(Cm(e),0,n),n.flags|=1,ld()}}function ld(){sa||(sa=ad.then(ud))}function Pm(n){He(n)?zs.push(...n):Di&&n.id===-1?Di.splice(Ds+1,0,n):n.flags&1||(zs.push(n),n.flags|=1),ld()}function Au(n,e,t=jn+1){for(;t<en.length;t++){const i=en[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;en.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function cd(n){if(zs.length){const e=[...new Set(zs)].sort((t,i)=>kr(t)-kr(i));if(zs.length=0,Di){Di.push(...e);return}for(Di=e,Ds=0;Ds<Di.length;Ds++){const t=Di[Ds];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Di=null,Ds=0}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ud(n){try{for(jn=0;jn<en.length;jn++){const e=en[jn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),to(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;jn<en.length;jn++){const e=en[jn];e&&(e.flags&=-2)}jn=-1,en.length=0,cd(),sa=null,(en.length||zs.length)&&ud()}}let nn=null,hd=null;function ra(n){const e=nn;return nn=n,hd=n&&n.type.__scopeId||null,e}function ks(n,e=nn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Bu(-1);const r=ra(e);let o;try{o=n(...s)}finally{ra(r),i._d&&Bu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Yi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(yi(),Hn(l,t,8,[n.el,a,n,e]),Mi())}}const Lm=Symbol("_vte"),fd=n=>n.__isTeleport,Ii=Symbol("_leaveCb"),fo=Symbol("_enterCb");function Dm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return sr(()=>{n.isMounted=!0}),yd(()=>{n.isUnmounting=!0}),n}const yn=[Function,Array],dd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yn,onEnter:yn,onAfterEnter:yn,onEnterCancelled:yn,onBeforeLeave:yn,onLeave:yn,onAfterLeave:yn,onLeaveCancelled:yn,onBeforeAppear:yn,onAppear:yn,onAfterAppear:yn,onAppearCancelled:yn},pd=n=>{const e=n.subTree;return e.component?pd(e.component):e},Im={name:"BaseTransition",props:dd,setup(n,{slots:e}){const t=Cg(),i=Dm();return()=>{const s=e.default&&_d(e.default(),!0);if(!s||!s.length)return;const r=md(s),o=it(n),{mode:a}=o;if(i.isLeaving)return za(r);const l=Ru(r);if(!l)return za(r);let c=Dl(l,o,i,t,h=>c=h);l.type!==jt&&Hr(l,c);let u=t.subTree&&Ru(t.subTree);if(u&&u.type!==jt&&!as(l,u)&&pd(t).type!==jt){let h=Dl(u,o,i,t);if(Hr(u,h),a==="out-in"&&l.type!==jt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},za(r);a==="in-out"&&l.type!==jt?h.delayLeave=(f,d,g)=>{const _=gd(i,u);_[String(u.key)]=u,f[Ii]=()=>{d(),f[Ii]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function md(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==jt){e=t;break}}return e}const Um=Im;function gd(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function Dl(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:w,onAppearCancelled:A}=e,M=String(n.key),D=gd(t,n),C=(E,S)=>{E&&Hn(E,i,9,S)},P=(E,S)=>{const I=S[1];C(E,S),He(E)?E.every(B=>B.length<=1)&&I():E.length<=1&&I()},N={mode:o,persisted:a,beforeEnter(E){let S=l;if(!t.isMounted)if(r)S=m||l;else return;E[Ii]&&E[Ii](!0);const I=D[M];I&&as(n,I)&&I.el[Ii]&&I.el[Ii](),C(S,[E])},enter(E){let S=c,I=u,B=h;if(!t.isMounted)if(r)S=p||c,I=w||u,B=A||h;else return;let G=!1;const Q=E[fo]=le=>{G||(G=!0,le?C(B,[E]):C(I,[E]),N.delayedLeave&&N.delayedLeave(),E[fo]=void 0)};S?P(S,[E,Q]):Q()},leave(E,S){const I=String(n.key);if(E[fo]&&E[fo](!0),t.isUnmounting)return S();C(f,[E]);let B=!1;const G=E[Ii]=Q=>{B||(B=!0,S(),Q?C(_,[E]):C(g,[E]),E[Ii]=void 0,D[I]===n&&delete D[I])};D[I]=n,d?P(d,[E,G]):G()},clone(E){const S=Dl(E,e,t,i,s);return s&&s(S),S}};return N}function za(n){if(Ma(n))return n=Xi(n),n.children=null,n}function Ru(n){if(!Ma(n))return fd(n.type)&&n.children?md(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function Hr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Hr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function _d(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===wt?(o.patchFlag&128&&s++,i=i.concat(_d(o.children,e,a))):(e||o.type!==jt)&&i.push(a!=null?Xi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function _n(n,e){return qe(n)?Ot({name:n.name},e,{setup:n}):n}function vd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function oa(n,e,t,i,s=!1){if(He(n)){n.forEach((g,_)=>oa(g,e&&(He(e)?e[_]:e),t,i,s));return}if(Hs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&oa(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?qc(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===_t?a.refs={}:a.refs,h=a.setupState,f=it(h),d=h===_t?()=>!1:g=>at(f,g);if(c!=null&&c!==l&&(At(c)?(u[c]=null,d(c)&&(h[c]=null)):Yt(c)&&(c.value=null)),qe(l))to(l,a,12,[o,u]);else{const g=At(l),_=Yt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;s?He(p)&&Ic(p,r):He(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,pn(m,t)):m()}}}va().requestIdleCallback;va().cancelIdleCallback;const Hs=n=>!!n.type.__asyncLoader,Ma=n=>n.type.__isKeepAlive;function Nm(n,e){xd(n,"a",e)}function Fm(n,e){xd(n,"da",e)}function xd(n,e,t=qt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Sa(e,i,t),t){let s=t.parent;for(;s&&s.parent;)Ma(s.parent.vnode)&&Om(i,e,t,s),s=s.parent}}function Om(n,e,t,i){const s=Sa(e,n,i,!0);ba(()=>{Ic(i[e],s)},t)}function Sa(n,e,t=qt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{yi();const a=no(t),l=Hn(e,t,n,o);return a(),Mi(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(e,t=qt)=>{(!Xr||n==="sp")&&Sa(n,(...i)=>e(...i),t)},Bm=bi("bm"),sr=bi("m"),zm=bi("bu"),km=bi("u"),yd=bi("bum"),ba=bi("um"),Hm=bi("sp"),Vm=bi("rtg"),Gm=bi("rtc");function Wm(n,e=qt){Sa("ec",n,e)}const Xm=Symbol.for("v-ndc");function Bi(n,e,t,i){let s;const r=t,o=He(n);if(o||At(n)){const a=o&&Bs(n);let l=!1,c=!1;a&&(l=!En(n),c=Wi(n),n=xa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?na(kt(n[u])):kt(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(xt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}function Cu(n,e,t={},i,s){if(nn.ce||nn.parent&&Hs(nn.parent)&&nn.parent.ce)return e!=="default"&&(t.name=e),ke(),qs(wt,null,[pt("slot",t,i)],64);let r=n[e];r&&r._c&&(r._d=!1),ke();const o=r&&Md(r(t)),a=t.key||o&&o.key,l=qs(wt,{key:(a&&!Si(a)?a:`_${e}`)+""},o||[],o&&n._===1?64:-2);return r&&r._c&&(r._d=!0),l}function Md(n){return n.some(e=>Gr(e)?!(e.type===jt||e.type===wt&&!Md(e.children)):!0)?n:null}const Il=n=>n?Hd(n)?qc(n):Il(n.parent):null,Pr=Ot(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Il(n.parent),$root:n=>Il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>bd(n),$forceUpdate:n=>n.f||(n.f=()=>{Gc(n.update)}),$nextTick:n=>n.n||(n.n=Rm.bind(n.proxy)),$watch:n=>dg.bind(n)}),ka=(n,e)=>n!==_t&&!n.__isScriptSetup&&at(n,e),jm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ka(i,e))return o[e]=1,i[e];if(s!==_t&&at(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&at(c,e))return o[e]=3,r[e];if(t!==_t&&at(t,e))return o[e]=4,t[e];Ul&&(o[e]=0)}}const u=Pr[e];let h,f;if(u)return e==="$attrs"&&Xt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==_t&&at(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,at(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ka(s,e)?(s[e]=t,!0):i!==_t&&at(i,e)?(i[e]=t,!0):at(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==_t&&at(n,o)||ka(e,o)||(a=r[0])&&at(a,o)||at(i,o)||at(Pr,o)||at(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:at(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Pu(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ul=!0;function qm(n){const e=bd(n),t=n.proxy,i=n.ctx;Ul=!1,e.beforeCreate&&Lu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:A,unmounted:M,render:D,renderTracked:C,renderTriggered:P,errorCaptured:N,serverPrefetch:E,expose:S,inheritAttrs:I,components:B,directives:G,filters:Q}=e;if(c&&Ym(c,i,null),o)for(const se in o){const Y=o[se];qe(Y)&&(i[se]=Y.bind(t))}if(s){const se=s.call(t,t);xt(se)&&(n.data=kc(se))}if(Ul=!0,r)for(const se in r){const Y=r[se],ve=qe(Y)?Y.bind(t,t):qe(Y.get)?Y.get.bind(t,t):$n,Te=!qe(Y)&&qe(Y.set)?Y.set.bind(t):$n,Pe=Ir({get:ve,set:Te});Object.defineProperty(i,se,{enumerable:!0,configurable:!0,get:()=>Pe.value,set:ze=>Pe.value=ze})}if(a)for(const se in a)Sd(a[se],i,t,se);if(l){const se=qe(l)?l.call(t):l;Reflect.ownKeys(se).forEach(Y=>{eg(Y,se[Y])})}u&&Lu(u,n,"c");function ne(se,Y){He(Y)?Y.forEach(ve=>se(ve.bind(t))):Y&&se(Y.bind(t))}if(ne(Bm,h),ne(sr,f),ne(zm,d),ne(km,g),ne(Nm,_),ne(Fm,m),ne(Wm,N),ne(Gm,C),ne(Vm,P),ne(yd,w),ne(ba,M),ne(Hm,E),He(S))if(S.length){const se=n.exposed||(n.exposed={});S.forEach(Y=>{Object.defineProperty(se,Y,{get:()=>t[Y],set:ve=>t[Y]=ve})})}else n.exposed||(n.exposed={});D&&n.render===$n&&(n.render=D),I!=null&&(n.inheritAttrs=I),B&&(n.components=B),G&&(n.directives=G),E&&vd(n)}function Ym(n,e,t=$n){He(n)&&(n=Nl(n));for(const i in n){const s=n[i];let r;xt(s)?"default"in s?r=Vo(s.from||i,s.default,!0):r=Vo(s.from||i):r=Vo(s),Yt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Lu(n,e,t){Hn(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Sd(n,e,t,i){let s=i.includes(".")?Fd(t,i):()=>t[i];if(At(n)){const r=e[n];qe(r)&&Lr(s,r)}else if(qe(n))Lr(s,n.bind(t));else if(xt(n))if(He(n))n.forEach(r=>Sd(r,e,t,i));else{const r=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(r)&&Lr(s,r,n)}}function bd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>aa(l,c,o,!0)),aa(l,e,o)),xt(e)&&r.set(e,l),l}function aa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&aa(n,r,t,!0),s&&s.forEach(o=>aa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=$m[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const $m={data:Du,props:Iu,emits:Iu,methods:Sr,computed:Sr,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Sr,directives:Sr,watch:Zm,provide:Du,inject:Km};function Du(n,e){return e?n?function(){return Ot(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function Km(n,e){return Sr(Nl(n),Nl(e))}function Nl(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Jt(n,e){return n?[...new Set([].concat(n,e))]:e}function Sr(n,e){return n?Ot(Object.create(null),n,e):e}function Iu(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:Ot(Object.create(null),Pu(n),Pu(e??{})):e}function Zm(n,e){if(!n)return e;if(!e)return n;const t=Ot(Object.create(null),n);for(const i in e)t[i]=Jt(n[i],e[i]);return t}function Td(){return{app:null,config:{isNativeTag:Bp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jm=0;function Qm(n,e){return function(i,s=null){qe(i)||(i=Ot({},i)),s!=null&&!xt(s)&&(s=null);const r=Td(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Jm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Fg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...h)):qe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||pt(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,qc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Hn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Vs;Vs=c;try{return u()}finally{Vs=h}}};return c}}let Vs=null;function eg(n,e){if(qt){let t=qt.provides;const i=qt.parent&&qt.parent.provides;i===t&&(t=qt.provides=Object.create(i)),t[n]=e}}function Vo(n,e,t=!1){const i=qt||nn;if(i||Vs){const s=Vs?Vs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&qe(e)?e.call(i&&i.proxy):e}}const Ed={},wd=()=>Object.create(Ed),Ad=n=>Object.getPrototypeOf(n)===Ed;function tg(n,e,t,i=!1){const s={},r=wd();n.propsDefaults=Object.create(null),Rd(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:_m(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function ng(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=it(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ta(n.emitsOptions,f))continue;const d=e[f];if(l)if(at(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Gi(f);s[g]=Fl(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Rd(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!at(e,h)&&((u=ds(h))===h||!at(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Fl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!at(e,h))&&(delete r[h],c=!0)}c&&pi(n.attrs,"set","")}function Rd(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ar(l))continue;const c=e[l];let u;s&&at(s,u=Gi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=it(t),c=a||_t;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Fl(s,l,h,c[h],n,!at(c,h))}}return o}function Fl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=at(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=no(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ds(t))&&(i=!0))}return i}const ig=new WeakMap;function Cd(n,e,t=!1){const i=t?ig:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qe(n)){const u=h=>{l=!0;const[f,d]=Cd(h,e,!0);Ot(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return xt(n)&&i.set(n,Fs),Fs;if(He(r))for(let u=0;u<r.length;u++){const h=Gi(r[u]);Uu(h)&&(o[h]=_t)}else if(r)for(const u in r){const h=Gi(u);if(Uu(h)){const f=r[u],d=o[h]=He(f)||qe(f)?{type:f}:Ot({},f),g=d.type;let _=!1,m=!0;if(He(g))for(let p=0;p<g.length;++p){const w=g[p],A=qe(w)&&w.name;if(A==="Boolean"){_=!0;break}else A==="String"&&(m=!1)}else _=qe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||at(d,"default"))&&a.push(h)}}const c=[o,a];return xt(n)&&i.set(n,c),c}function Uu(n){return n[0]!=="$"&&!Ar(n)}const Wc=n=>n[0]==="_"||n==="$stable",Xc=n=>He(n)?n.map(qn):[qn(n)],sg=(n,e,t)=>{if(e._n)return e;const i=ks((...s)=>Xc(e(...s)),t);return i._c=!1,i},Pd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Wc(s))continue;const r=n[s];if(qe(r))e[s]=sg(s,r,i);else if(r!=null){const o=Xc(r);e[s]=()=>o}}},Ld=(n,e)=>{const t=Xc(e);n.slots.default=()=>t},Dd=(n,e,t)=>{for(const i in e)(t||!Wc(i))&&(n[i]=e[i])},rg=(n,e,t)=>{const i=n.slots=wd();if(n.vnode.shapeFlag&32){const s=e._;s?(Dd(i,e,t),t&&Hf(i,"_",s,!0)):Pd(e,i)}else e&&Ld(n,e)},og=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=_t;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Dd(s,e,t):(r=!e.$stable,Pd(e,s)),o=e}else e&&(Ld(n,e),o={default:1});if(r)for(const a in s)!Wc(a)&&o[a]==null&&delete s[a]},pn=yg;function ag(n){return lg(n)}function lg(n,e){const t=va();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=$n,insertStaticContent:g}=n,_=(T,R,x,q=null,H=null,W=null,K=void 0,ee=null,$=!!R.dynamicChildren)=>{if(T===R)return;T&&!as(T,R)&&(q=ye(T),ze(T,H,W,!0),T=null),R.patchFlag===-2&&($=!1,R.dynamicChildren=null);const{type:y,ref:v,shapeFlag:L}=R;switch(y){case Ea:m(T,R,x,q);break;case jt:p(T,R,x,q);break;case Go:T==null&&w(R,x,q,K);break;case wt:B(T,R,x,q,H,W,K,ee,$);break;default:L&1?D(T,R,x,q,H,W,K,ee,$):L&6?G(T,R,x,q,H,W,K,ee,$):(L&64||L&128)&&y.process(T,R,x,q,H,W,K,ee,$,te)}v!=null&&H&&oa(v,T&&T.ref,W,R||T,!R)},m=(T,R,x,q)=>{if(T==null)i(R.el=a(R.children),x,q);else{const H=R.el=T.el;R.children!==T.children&&c(H,R.children)}},p=(T,R,x,q)=>{T==null?i(R.el=l(R.children||""),x,q):R.el=T.el},w=(T,R,x,q)=>{[T.el,T.anchor]=g(T.children,R,x,q,T.el,T.anchor)},A=({el:T,anchor:R},x,q)=>{let H;for(;T&&T!==R;)H=f(T),i(T,x,q),T=H;i(R,x,q)},M=({el:T,anchor:R})=>{let x;for(;T&&T!==R;)x=f(T),s(T),T=x;s(R)},D=(T,R,x,q,H,W,K,ee,$)=>{R.type==="svg"?K="svg":R.type==="math"&&(K="mathml"),T==null?C(R,x,q,H,W,K,ee,$):E(T,R,H,W,K,ee,$)},C=(T,R,x,q,H,W,K,ee)=>{let $,y;const{props:v,shapeFlag:L,transition:O,dirs:j}=T;if($=T.el=o(T.type,W,v&&v.is,v),L&8?u($,T.children):L&16&&N(T.children,$,null,q,H,Ha(T,W),K,ee),j&&Yi(T,null,q,"created"),P($,T,T.scopeId,K,q),v){for(const fe in v)fe!=="value"&&!Ar(fe)&&r($,fe,null,v[fe],W,q);"value"in v&&r($,"value",null,v.value,W),(y=v.onVnodeBeforeMount)&&Xn(y,q,T)}j&&Yi(T,null,q,"beforeMount");const X=cg(H,O);X&&O.beforeEnter($),i($,R,x),((y=v&&v.onVnodeMounted)||X||j)&&pn(()=>{y&&Xn(y,q,T),X&&O.enter($),j&&Yi(T,null,q,"mounted")},H)},P=(T,R,x,q,H)=>{if(x&&d(T,x),q)for(let W=0;W<q.length;W++)d(T,q[W]);if(H){let W=H.subTree;if(R===W||Bd(W.type)&&(W.ssContent===R||W.ssFallback===R)){const K=H.vnode;P(T,K,K.scopeId,K.slotScopeIds,H.parent)}}},N=(T,R,x,q,H,W,K,ee,$=0)=>{for(let y=$;y<T.length;y++){const v=T[y]=ee?Ui(T[y]):qn(T[y]);_(null,v,R,x,q,H,W,K,ee)}},E=(T,R,x,q,H,W,K)=>{const ee=R.el=T.el;let{patchFlag:$,dynamicChildren:y,dirs:v}=R;$|=T.patchFlag&16;const L=T.props||_t,O=R.props||_t;let j;if(x&&$i(x,!1),(j=O.onVnodeBeforeUpdate)&&Xn(j,x,R,T),v&&Yi(R,T,x,"beforeUpdate"),x&&$i(x,!0),(L.innerHTML&&O.innerHTML==null||L.textContent&&O.textContent==null)&&u(ee,""),y?S(T.dynamicChildren,y,ee,x,q,Ha(R,H),W):K||Y(T,R,ee,null,x,q,Ha(R,H),W,!1),$>0){if($&16)I(ee,L,O,x,H);else if($&2&&L.class!==O.class&&r(ee,"class",null,O.class,H),$&4&&r(ee,"style",L.style,O.style,H),$&8){const X=R.dynamicProps;for(let fe=0;fe<X.length;fe++){const ce=X[fe],Me=L[ce],xe=O[ce];(xe!==Me||ce==="value")&&r(ee,ce,Me,xe,H,x)}}$&1&&T.children!==R.children&&u(ee,R.children)}else!K&&y==null&&I(ee,L,O,x,H);((j=O.onVnodeUpdated)||v)&&pn(()=>{j&&Xn(j,x,R,T),v&&Yi(R,T,x,"updated")},q)},S=(T,R,x,q,H,W,K)=>{for(let ee=0;ee<R.length;ee++){const $=T[ee],y=R[ee],v=$.el&&($.type===wt||!as($,y)||$.shapeFlag&70)?h($.el):x;_($,y,v,null,q,H,W,K,!0)}},I=(T,R,x,q,H)=>{if(R!==x){if(R!==_t)for(const W in R)!Ar(W)&&!(W in x)&&r(T,W,R[W],null,H,q);for(const W in x){if(Ar(W))continue;const K=x[W],ee=R[W];K!==ee&&W!=="value"&&r(T,W,ee,K,H,q)}"value"in x&&r(T,"value",R.value,x.value,H)}},B=(T,R,x,q,H,W,K,ee,$)=>{const y=R.el=T?T.el:a(""),v=R.anchor=T?T.anchor:a("");let{patchFlag:L,dynamicChildren:O,slotScopeIds:j}=R;j&&(ee=ee?ee.concat(j):j),T==null?(i(y,x,q),i(v,x,q),N(R.children||[],x,v,H,W,K,ee,$)):L>0&&L&64&&O&&T.dynamicChildren?(S(T.dynamicChildren,O,x,H,W,K,ee),(R.key!=null||H&&R===H.subTree)&&Id(T,R,!0)):Y(T,R,x,v,H,W,K,ee,$)},G=(T,R,x,q,H,W,K,ee,$)=>{R.slotScopeIds=ee,T==null?R.shapeFlag&512?H.ctx.activate(R,x,q,K,$):Q(R,x,q,H,W,K,$):le(T,R,$)},Q=(T,R,x,q,H,W,K)=>{const ee=T.component=Rg(T,q,H);if(Ma(T)&&(ee.ctx.renderer=te),Pg(ee,!1,K),ee.asyncDep){if(H&&H.registerDep(ee,ne,K),!T.el){const $=ee.subTree=pt(jt);p(null,$,R,x)}}else ne(ee,T,R,x,H,W,K)},le=(T,R,x)=>{const q=R.component=T.component;if(vg(T,R,x))if(q.asyncDep&&!q.asyncResolved){se(q,R,x);return}else q.next=R,q.update();else R.el=T.el,q.vnode=R},ne=(T,R,x,q,H,W,K)=>{const ee=()=>{if(T.isMounted){let{next:L,bu:O,u:j,parent:X,vnode:fe}=T;{const de=Ud(T);if(de){L&&(L.el=fe.el,se(T,L,K)),de.asyncDep.then(()=>{T.isUnmounted||ee()});return}}let ce=L,Me;$i(T,!1),L?(L.el=fe.el,se(T,L,K)):L=fe,O&&Ua(O),(Me=L.props&&L.props.onVnodeBeforeUpdate)&&Xn(Me,X,L,fe),$i(T,!0);const xe=Fu(T),ae=T.subTree;T.subTree=xe,_(ae,xe,h(ae.el),ye(ae),T,H,W),L.el=xe.el,ce===null&&xg(T,xe.el),j&&pn(j,H),(Me=L.props&&L.props.onVnodeUpdated)&&pn(()=>Xn(Me,X,L,fe),H)}else{let L;const{el:O,props:j}=R,{bm:X,m:fe,parent:ce,root:Me,type:xe}=T,ae=Hs(R);$i(T,!1),X&&Ua(X),!ae&&(L=j&&j.onVnodeBeforeMount)&&Xn(L,ce,R),$i(T,!0);{Me.ce&&Me.ce._injectChildStyle(xe);const de=T.subTree=Fu(T);_(null,de,x,q,T,H,W),R.el=de.el}if(fe&&pn(fe,H),!ae&&(L=j&&j.onVnodeMounted)){const de=R;pn(()=>Xn(L,ce,de),H)}(R.shapeFlag&256||ce&&Hs(ce.vnode)&&ce.vnode.shapeFlag&256)&&T.a&&pn(T.a,H),T.isMounted=!0,R=x=q=null}};T.scope.on();const $=T.effect=new Xf(ee);T.scope.off();const y=T.update=$.run.bind($),v=T.job=$.runIfDirty.bind($);v.i=T,v.id=T.uid,$.scheduler=()=>Gc(v),$i(T,!0),y()},se=(T,R,x)=>{R.component=T;const q=T.vnode.props;T.vnode=R,T.next=null,ng(T,R.props,q,x),og(T,R.children,x),yi(),Au(T),Mi()},Y=(T,R,x,q,H,W,K,ee,$=!1)=>{const y=T&&T.children,v=T?T.shapeFlag:0,L=R.children,{patchFlag:O,shapeFlag:j}=R;if(O>0){if(O&128){Te(y,L,x,q,H,W,K,ee,$);return}else if(O&256){ve(y,L,x,q,H,W,K,ee,$);return}}j&8?(v&16&&Re(y,H,W),L!==y&&u(x,L)):v&16?j&16?Te(y,L,x,q,H,W,K,ee,$):Re(y,H,W,!0):(v&8&&u(x,""),j&16&&N(L,x,q,H,W,K,ee,$))},ve=(T,R,x,q,H,W,K,ee,$)=>{T=T||Fs,R=R||Fs;const y=T.length,v=R.length,L=Math.min(y,v);let O;for(O=0;O<L;O++){const j=R[O]=$?Ui(R[O]):qn(R[O]);_(T[O],j,x,null,H,W,K,ee,$)}y>v?Re(T,H,W,!0,!1,L):N(R,x,q,H,W,K,ee,$,L)},Te=(T,R,x,q,H,W,K,ee,$)=>{let y=0;const v=R.length;let L=T.length-1,O=v-1;for(;y<=L&&y<=O;){const j=T[y],X=R[y]=$?Ui(R[y]):qn(R[y]);if(as(j,X))_(j,X,x,null,H,W,K,ee,$);else break;y++}for(;y<=L&&y<=O;){const j=T[L],X=R[O]=$?Ui(R[O]):qn(R[O]);if(as(j,X))_(j,X,x,null,H,W,K,ee,$);else break;L--,O--}if(y>L){if(y<=O){const j=O+1,X=j<v?R[j].el:q;for(;y<=O;)_(null,R[y]=$?Ui(R[y]):qn(R[y]),x,X,H,W,K,ee,$),y++}}else if(y>O)for(;y<=L;)ze(T[y],H,W,!0),y++;else{const j=y,X=y,fe=new Map;for(y=X;y<=O;y++){const _e=R[y]=$?Ui(R[y]):qn(R[y]);_e.key!=null&&fe.set(_e.key,y)}let ce,Me=0;const xe=O-X+1;let ae=!1,de=0;const De=new Array(xe);for(y=0;y<xe;y++)De[y]=0;for(y=j;y<=L;y++){const _e=T[y];if(Me>=xe){ze(_e,H,W,!0);continue}let Fe;if(_e.key!=null)Fe=fe.get(_e.key);else for(ce=X;ce<=O;ce++)if(De[ce-X]===0&&as(_e,R[ce])){Fe=ce;break}Fe===void 0?ze(_e,H,W,!0):(De[Fe-X]=y+1,Fe>=de?de=Fe:ae=!0,_(_e,R[Fe],x,null,H,W,K,ee,$),Me++)}const Ie=ae?ug(De):Fs;for(ce=Ie.length-1,y=xe-1;y>=0;y--){const _e=X+y,Fe=R[_e],Xe=_e+1<v?R[_e+1].el:q;De[y]===0?_(null,Fe,x,Xe,H,W,K,ee,$):ae&&(ce<0||y!==Ie[ce]?Pe(Fe,x,Xe,2):ce--)}}},Pe=(T,R,x,q,H=null)=>{const{el:W,type:K,transition:ee,children:$,shapeFlag:y}=T;if(y&6){Pe(T.component.subTree,R,x,q);return}if(y&128){T.suspense.move(R,x,q);return}if(y&64){K.move(T,R,x,te);return}if(K===wt){i(W,R,x);for(let L=0;L<$.length;L++)Pe($[L],R,x,q);i(T.anchor,R,x);return}if(K===Go){A(T,R,x);return}if(q!==2&&y&1&&ee)if(q===0)ee.beforeEnter(W),i(W,R,x),pn(()=>ee.enter(W),H);else{const{leave:L,delayLeave:O,afterLeave:j}=ee,X=()=>{T.ctx.isUnmounted?s(W):i(W,R,x)},fe=()=>{L(W,()=>{X(),j&&j()})};O?O(W,X,fe):fe()}else i(W,R,x)},ze=(T,R,x,q=!1,H=!1)=>{const{type:W,props:K,ref:ee,children:$,dynamicChildren:y,shapeFlag:v,patchFlag:L,dirs:O,cacheIndex:j}=T;if(L===-2&&(H=!1),ee!=null&&(yi(),oa(ee,null,x,T,!0),Mi()),j!=null&&(R.renderCache[j]=void 0),v&256){R.ctx.deactivate(T);return}const X=v&1&&O,fe=!Hs(T);let ce;if(fe&&(ce=K&&K.onVnodeBeforeUnmount)&&Xn(ce,R,T),v&6)ge(T.component,x,q);else{if(v&128){T.suspense.unmount(x,q);return}X&&Yi(T,null,R,"beforeUnmount"),v&64?T.type.remove(T,R,x,te,q):y&&!y.hasOnce&&(W!==wt||L>0&&L&64)?Re(y,R,x,!1,!0):(W===wt&&L&384||!H&&v&16)&&Re($,R,x),q&&tt(T)}(fe&&(ce=K&&K.onVnodeUnmounted)||X)&&pn(()=>{ce&&Xn(ce,R,T),X&&Yi(T,null,R,"unmounted")},x)},tt=T=>{const{type:R,el:x,anchor:q,transition:H}=T;if(R===wt){oe(x,q);return}if(R===Go){M(T);return}const W=()=>{s(x),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(T.shapeFlag&1&&H&&!H.persisted){const{leave:K,delayLeave:ee}=H,$=()=>K(x,W);ee?ee(T.el,W,$):$()}else W()},oe=(T,R)=>{let x;for(;T!==R;)x=f(T),s(T),T=x;s(R)},ge=(T,R,x)=>{const{bum:q,scope:H,job:W,subTree:K,um:ee,m:$,a:y,parent:v,slots:{__:L}}=T;Nu($),Nu(y),q&&Ua(q),v&&He(L)&&L.forEach(O=>{v.renderCache[O]=void 0}),H.stop(),W&&(W.flags|=8,ze(K,T,R,x)),ee&&pn(ee,R),pn(()=>{T.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Re=(T,R,x,q=!1,H=!1,W=0)=>{for(let K=W;K<T.length;K++)ze(T[K],R,x,q,H)},ye=T=>{if(T.shapeFlag&6)return ye(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const R=f(T.anchor||T.el),x=R&&R[Lm];return x?f(x):R};let V=!1;const re=(T,R,x)=>{T==null?R._vnode&&ze(R._vnode,null,null,!0):_(R._vnode||null,T,R,null,null,null,x),R._vnode=T,V||(V=!0,Au(),cd(),V=!1)},te={p:_,um:ze,m:Pe,r:tt,mt:Q,mc:N,pc:Y,pbc:S,n:ye,o:n};return{render:re,hydrate:void 0,createApp:Qm(re)}}function Ha({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function $i({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function cg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Id(n,e,t=!1){const i=n.children,s=e.children;if(He(i)&&He(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ui(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Id(o,a)),a.type===Ea&&(a.el=o.el),a.type===jt&&!a.el&&(a.el=o.el)}}function ug(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ud(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ud(e)}function Nu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const hg=Symbol.for("v-scx"),fg=()=>Vo(hg);function Lr(n,e,t){return Nd(n,e,t)}function Nd(n,e,t=_t){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ot({},t),l=e&&i||!e&&r!=="post";let c;if(Xr){if(r==="sync"){const d=fg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=$n,d.resume=$n,d.pause=$n,d}}const u=qt;a.call=(d,g,_)=>Hn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{pn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Gc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=wm(n,e,a);return Xr&&(c?c.push(f):l&&f()),f}function dg(n,e,t){const i=this.proxy,s=At(n)?n.includes(".")?Fd(i,n):()=>i[n]:n.bind(i,i);let r;qe(e)?r=e:(r=e.handler,t=e);const o=no(this),a=Nd(s,r.bind(i),t);return o(),a}function Fd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const pg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Gi(e)}Modifiers`]||n[`${ds(e)}Modifiers`];function mg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||_t;let s=t;const r=e.startsWith("update:"),o=r&&pg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>At(u)?u.trim():u)),o.number&&(s=t.map(Gp)));let a,l=i[a=Ia(e)]||i[a=Ia(Gi(e))];!l&&r&&(l=i[a=Ia(ds(e))]),l&&Hn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Hn(c,n,6,s)}}function Od(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const u=Od(c,e,!0);u&&(a=!0,Ot(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(xt(n)&&i.set(n,null),null):(He(r)?r.forEach(l=>o[l]=null):Ot(o,r),xt(n)&&i.set(n,o),o)}function Ta(n,e){return!n||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),at(n,e[0].toLowerCase()+e.slice(1))||at(n,ds(e))||at(n,e))}function Fu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=ra(n);let p,w;try{if(t.shapeFlag&4){const M=s||i,D=M;p=qn(c.call(D,M,u,h,d,f,g)),w=a}else{const M=e;p=qn(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),w=e.props?a:gg(a)}}catch(M){Dr.length=0,ya(M,n,1),p=pt(jt)}let A=p;if(w&&_!==!1){const M=Object.keys(w),{shapeFlag:D}=A;M.length&&D&7&&(r&&M.some(Dc)&&(w=_g(w,r)),A=Xi(A,w,!1,!0))}return t.dirs&&(A=Xi(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(t.dirs):t.dirs),t.transition&&Hr(A,t.transition),p=A,ra(m),p}const gg=n=>{let e;for(const t in n)(t==="class"||t==="style"||ma(t))&&((e||(e={}))[t]=n[t]);return e},_g=(n,e)=>{const t={};for(const i in n)(!Dc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function vg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Ou(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!Ta(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ou(i,o,c):!0:!!o;return!1}function Ou(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Ta(t,r))return!0}return!1}function xg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Bd=n=>n.__isSuspense;function yg(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):Pm(n)}const wt=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),jt=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),Dr=[];let mn=null;function ke(n=!1){Dr.push(mn=n?null:[])}function Mg(){Dr.pop(),mn=Dr[Dr.length-1]||null}let Vr=1;function Bu(n,e=!1){Vr+=n,n<0&&mn&&e&&(mn.hasOnce=!0)}function zd(n){return n.dynamicChildren=Vr>0?mn||Fs:null,Mg(),Vr>0&&mn&&mn.push(n),n}function We(n,e,t,i,s,r){return zd(ue(n,e,t,i,s,r,!0))}function qs(n,e,t,i,s){return zd(pt(n,e,t,i,s,!0))}function Gr(n){return n?n.__v_isVNode===!0:!1}function as(n,e){return n.type===e.type&&n.key===e.key}const kd=({key:n})=>n??null,Wo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?At(n)||Yt(n)||qe(n)?{i:nn,r:n,k:e,f:!!t}:n:null);function ue(n,e=null,t=null,i=0,s=null,r=n===wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&kd(e),ref:e&&Wo(e),scopeId:hd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:nn};return a?(jc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),Vr>0&&!o&&mn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mn.push(l),l}const pt=Sg;function Sg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Xm)&&(n=jt),Gr(n)){const a=Xi(n,e,!0);return t&&jc(a,t),Vr>0&&!r&&mn&&(a.shapeFlag&6?mn[mn.indexOf(n)]=a:mn.push(a)),a.patchFlag=-2,a}if(Ug(n)&&(n=n.__vccOpts),e){e=bg(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Tn(a)),xt(l)&&(Vc(l)&&!He(l)&&(l=Ot({},l)),e.style=js(l))}const o=At(n)?1:Bd(n)?128:fd(n)?64:xt(n)?4:qe(n)?2:0;return ue(n,e,t,i,s,o,r,!0)}function bg(n){return n?Vc(n)||Ad(n)?Ot({},n):n:null}function Xi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Eg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&kd(c),ref:e&&e.ref?t&&r?He(r)?r.concat(Wo(e)):[r,Wo(e)]:Wo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==wt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xi(n.ssContent),ssFallback:n.ssFallback&&Xi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Hr(u,l.clone(u)),u}function Wr(n=" ",e=0){return pt(Ea,null,n,e)}function Tg(n,e){const t=pt(Go,null,n);return t.staticCount=e,t}function Pt(n="",e=!1){return e?(ke(),qs(jt,null,n)):pt(jt,null,n)}function qn(n){return n==null||typeof n=="boolean"?pt(jt):He(n)?pt(wt,null,n.slice()):Gr(n)?Ui(n):pt(Ea,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xi(n)}function jc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),jc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Ad(e)?e._ctx=nn:s===3&&nn&&(nn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:nn},t=32):(e=String(e),i&64?(t=16,e=[Wr(e)]):t=8);n.children=e,n.shapeFlag|=t}function Eg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Tn([e.class,i.class]));else if(s==="style")e.style=js([e.style,i.style]);else if(ma(s)){const r=e[s],o=i[s];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function Xn(n,e,t,i=null){Hn(n,e,7,[t,i])}const wg=Td();let Ag=0;function Rg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||wg,r={uid:Ag++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Zp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cd(i,s),emitsOptions:Od(i,s),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:i.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=mg.bind(null,r),n.ce&&n.ce(r),r}let qt=null;const Cg=()=>qt||nn;let la,Ol;{const n=va(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};la=e("__VUE_INSTANCE_SETTERS__",t=>qt=t),Ol=e("__VUE_SSR_SETTERS__",t=>Xr=t)}const no=n=>{const e=qt;return la(n),n.scope.on(),()=>{n.scope.off(),la(e)}},zu=()=>{qt&&qt.scope.off(),la(null)};function Hd(n){return n.vnode.shapeFlag&4}let Xr=!1;function Pg(n,e=!1,t=!1){e&&Ol(e);const{props:i,children:s}=n.vnode,r=Hd(n);tg(n,i,r,e),rg(n,s,t||e);const o=r?Lg(n,e):void 0;return e&&Ol(!1),o}function Lg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jm);const{setup:i}=t;if(i){yi();const s=n.setupContext=i.length>1?Ig(n):null,r=no(n),o=to(i,n,0,[n.props,s]),a=Of(o);if(Mi(),r(),(a||n.sp)&&!Hs(n)&&vd(n),a){if(o.then(zu,zu),e)return o.then(l=>{ku(n,l)}).catch(l=>{ya(l,n,0)});n.asyncDep=o}else ku(n,o)}else Vd(n)}function ku(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:xt(e)&&(n.setupState=od(e)),Vd(n)}function Vd(n,e,t){const i=n.type;n.render||(n.render=i.render||$n);{const s=no(n);yi();try{qm(n)}finally{Mi(),s()}}}const Dg={get(n,e){return Xt(n,"get",""),n[e]}};function Ig(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Dg),slots:n.slots,emit:n.emit,expose:e}}function qc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(od(vm(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Pr)return Pr[t](n)},has(e,t){return t in e||t in Pr}})):n.proxy}function Ug(n){return qe(n)&&"__vccOpts"in n}const Ir=(n,e)=>Tm(n,e,Xr);function Ng(n,e,t){const i=arguments.length;return i===2?xt(e)&&!He(e)?Gr(e)?pt(n,null,[e]):pt(n,e):pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Gr(t)&&(t=[t]),pt(n,e,t))}const Fg="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bl;const Hu=typeof window<"u"&&window.trustedTypes;if(Hu)try{Bl=Hu.createPolicy("vue",{createHTML:n=>n})}catch{}const Gd=Bl?n=>Bl.createHTML(n):n=>n,Og="http://www.w3.org/2000/svg",Bg="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,Vu=fi&&fi.createElement("template"),zg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?fi.createElementNS(Og,n):e==="mathml"?fi.createElementNS(Bg,n):t?fi.createElement(n,{is:t}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Vu.innerHTML=Gd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Vu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ti="transition",fr="animation",jr=Symbol("_vtc"),Wd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},kg=Ot({},dd,Wd),Hg=n=>(n.displayName="Transition",n.props=kg,n),Xd=Hg((n,{slots:e})=>Ng(Um,Vg(n),e)),Ki=(n,e=[])=>{He(n)?n.forEach(t=>t(...e)):n&&n(...e)},Gu=n=>n?He(n)?n.some(e=>e.length>1):n.length>1:!1;function Vg(n){const e={};for(const B in n)B in Wd||(e[B]=n[B]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=Gg(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:w,onEnterCancelled:A,onLeave:M,onLeaveCancelled:D,onBeforeAppear:C=p,onAppear:P=w,onAppearCancelled:N=A}=e,E=(B,G,Q,le)=>{B._enterCancelled=le,Zi(B,G?u:a),Zi(B,G?c:o),Q&&Q()},S=(B,G)=>{B._isLeaving=!1,Zi(B,h),Zi(B,d),Zi(B,f),G&&G()},I=B=>(G,Q)=>{const le=B?P:w,ne=()=>E(G,B,Q);Ki(le,[G,ne]),Wu(()=>{Zi(G,B?l:r),si(G,B?u:a),Gu(le)||Xu(G,i,_,ne)})};return Ot(e,{onBeforeEnter(B){Ki(p,[B]),si(B,r),si(B,o)},onBeforeAppear(B){Ki(C,[B]),si(B,l),si(B,c)},onEnter:I(!1),onAppear:I(!0),onLeave(B,G){B._isLeaving=!0;const Q=()=>S(B,G);si(B,h),B._enterCancelled?(si(B,f),Yu()):(Yu(),si(B,f)),Wu(()=>{B._isLeaving&&(Zi(B,h),si(B,d),Gu(M)||Xu(B,i,m,Q))}),Ki(M,[B,Q])},onEnterCancelled(B){E(B,!1,void 0,!0),Ki(A,[B])},onAppearCancelled(B){E(B,!0,void 0,!0),Ki(N,[B])},onLeaveCancelled(B){S(B),Ki(D,[B])}})}function Gg(n){if(n==null)return null;if(xt(n))return[Va(n.enter),Va(n.leave)];{const e=Va(n);return[e,e]}}function Va(n){return Wp(n)}function si(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[jr]||(n[jr]=new Set)).add(e)}function Zi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[jr];t&&(t.delete(e),t.size||(n[jr]=void 0))}function Wu(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Wg=0;function Xu(n,e,t,i){const s=n._endId=++Wg,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Xg(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function Xg(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${Ti}Delay`),r=i(`${Ti}Duration`),o=ju(s,r),a=i(`${fr}Delay`),l=i(`${fr}Duration`),c=ju(a,l);let u=null,h=0,f=0;e===Ti?o>0&&(u=Ti,h=o,f=r.length):e===fr?c>0&&(u=fr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?Ti:fr:null,f=u?u===Ti?r.length:l.length:0);const d=u===Ti&&/\b(transform|all)(,|$)/.test(i(`${Ti}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function ju(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>qu(t)+qu(n[i])))}function qu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Yu(){return document.body.offsetHeight}function jg(n,e,t){const i=n[jr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const $u=Symbol("_vod"),qg=Symbol("_vsh"),Yg=Symbol(""),$g=/(^|;)\s*display\s*:/;function Kg(n,e,t){const i=n.style,s=At(t);let r=!1;if(t&&!s){if(e)if(At(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Xo(i,a,"")}else for(const o in e)t[o]==null&&Xo(i,o,"");for(const o in t)o==="display"&&(r=!0),Xo(i,o,t[o])}else if(s){if(e!==t){const o=i[Yg];o&&(t+=";"+o),i.cssText=t,r=$g.test(t)}}else e&&n.removeAttribute("style");$u in n&&(n[$u]=r?i.display:"",n[qg]&&(i.display="none"))}const Ku=/\s*!important$/;function Xo(n,e,t){if(He(t))t.forEach(i=>Xo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Zg(n,e);Ku.test(t)?n.setProperty(ds(i),t.replace(Ku,""),"important"):n[i]=t}}const Zu=["Webkit","Moz","ms"],Ga={};function Zg(n,e){const t=Ga[e];if(t)return t;let i=Gi(e);if(i!=="filter"&&i in n)return Ga[e]=i;i=kf(i);for(let s=0;s<Zu.length;s++){const r=Zu[s]+i;if(r in n)return Ga[e]=r}return e}const Ju="http://www.w3.org/1999/xlink";function Qu(n,e,t,i,s,r=Kp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Ju,e.slice(6,e.length)):n.setAttributeNS(Ju,e,t):t==null||r&&!Vf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Si(t)?String(t):t)}function eh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Gd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Vf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Jg(n,e,t,i){n.addEventListener(e,t,i)}function Qg(n,e,t,i){n.removeEventListener(e,t,i)}const th=Symbol("_vei");function e_(n,e,t,i,s=null){const r=n[th]||(n[th]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=t_(e);if(i){const c=r[e]=s_(i,s);Jg(n,a,c,l)}else o&&(Qg(n,a,o,l),r[e]=void 0)}}const nh=/(?:Once|Passive|Capture)$/;function t_(n){let e;if(nh.test(n)){e={};let i;for(;i=n.match(nh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ds(n.slice(2)),e]}let Wa=0;const n_=Promise.resolve(),i_=()=>Wa||(n_.then(()=>Wa=0),Wa=Date.now());function s_(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Hn(r_(i,t.value),e,5,[i])};return t.value=n,t.attached=i_(),t}function r_(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const ih=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,o_=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?jg(n,i,o):e==="style"?Kg(n,t,i):ma(e)?Dc(e)||e_(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):a_(n,e,i,o))?(eh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qu(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!At(i))?eh(n,Gi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Qu(n,e,i,o))};function a_(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&ih(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ih(e)&&At(t)?!1:e in n}const l_=["ctrl","shift","alt","meta"],c_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>l_.some(t=>n[`${t}Key`]&&!e.includes(t))},jd=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=c_[e[o]];if(a&&a(s,e))return}return n(s,...r)})},u_=Ot({patchProp:o_},zg);let sh;function h_(){return sh||(sh=ag(u_))}const f_=(...n)=>{const e=h_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=p_(i);if(!s)return;const r=e._component;!qe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,d_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function d_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function p_(n){return At(n)?document.querySelector(n):n}const m_={class:"fixed bottom-4 right-4 flex flex-col gap-2 z-40"},g_=_n({__name:"FloatingButtons",props:{showTutorial:{type:Boolean,default:!1},showPerformanceMonitor:{type:Boolean,default:!1}},emits:["open-tutorial","open-performance-monitor"],setup(n){return(e,t)=>(ke(),We("div",m_,[n.showTutorial?Pt("",!0):(ke(),We("button",{key:0,onClick:t[0]||(t[0]=i=>e.$emit("open-tutorial")),class:"group relative bg-space-dark/80 hover:bg-space-dark border border-space-accent/30 hover:border-space-accent rounded-full p-3 transition-all duration-300",title:"Réouvrir le tutoriel"},t[2]||(t[2]=[ue("div",{class:"absolute -top-2 -right-2 w-2 h-2 rounded-full bg-space-accent/50 group-hover:bg-space-accent transition-colors"},null,-1),ue("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-space-accent/70 group-hover:text-space-accent transition-colors",viewBox:"0 0 20 20",fill:"currentColor"},[ue("path",{"fill-rule":"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z","clip-rule":"evenodd"})],-1)]))),n.showPerformanceMonitor?Pt("",!0):(ke(),We("button",{key:1,onClick:t[1]||(t[1]=i=>e.$emit("open-performance-monitor")),class:"group relative bg-space-dark/80 hover:bg-space-dark border border-space-accent/30 hover:border-space-accent rounded-full p-3 transition-all duration-300",title:"Réouvrir le moniteur de performance"},t[3]||(t[3]=[ue("div",{class:"absolute -top-2 -right-2 w-2 h-2 rounded-full bg-space-accent/50 group-hover:bg-space-accent transition-colors"},null,-1),ue("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-space-accent/70 group-hover:text-space-accent transition-colors",viewBox:"0 0 20 20",fill:"currentColor"},[ue("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"})],-1)])))]))}}),Gn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},__=Gn(g_,[["__scopeId","data-v-16f670a4"]]),v_={key:0,class:"fixed inset-0 bg-space-dark z-[200] flex flex-col items-center justify-center"},x_={class:"w-64 h-1 bg-white/10 rounded-full overflow-hidden"},y_={class:"text-space-light text-sm mt-2"},M_={class:"text-space-light/60 text-xs mt-8 max-w-md text-center"},S_=_n({__name:"LoadingScreen",props:{isLoading:{type:Boolean,required:!0},progress:{type:Number,required:!0}},setup(n){const e=Et("Initialisation du système solaire..."),t=["Chargement des textures planétaires...","Configuration des orbites...","Initialisation des effets de particules...","Préparation des modèles 3D...","Optimisation des performances...","Chargement des données astronomiques...","Configuration des contrôles...","Finalisation du système..."];let i=0;return sr(()=>{const s=setInterval(()=>{i=(i+1)%t.length,e.value=t[i]},2e3);return()=>clearInterval(s)}),(s,r)=>n.isLoading?(ke(),We("div",v_,[r[0]||(r[0]=Tg('<div class="relative w-64 h-64 mb-8" data-v-74aec833><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500 rounded-full animate-pulse shadow-lg shadow-yellow-500/50" data-v-74aec833></div><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full" data-v-74aec833><div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-spin-slow" data-v-74aec833></div></div></div><div class="text-space-accent text-2xl font-space mb-4" data-v-74aec833> Chargement du système solaire... </div>',2)),ue("div",x_,[ue("div",{class:"h-full bg-space-accent transition-all duration-300 ease-out",style:js({width:`${n.progress}%`})},null,4)]),ue("div",y_,lt(n.progress)+"%",1),ue("div",M_,lt(e.value),1)])):Pt("",!0)}}),b_=Gn(S_,[["__scopeId","data-v-74aec833"]]),T_={class:"list-none"},E_=["onClick"],w_=_n({__name:"NavMenu",props:{isNavOpen:{type:Boolean,required:!0},planets:{type:Array,required:!0},activePlanet:{type:String,required:!0}},emits:["navigate"],setup(n,{emit:e}){const t=e,i=s=>{t("navigate",s)};return(s,r)=>(ke(),We("nav",{class:Tn(["fixed top-0 h-screen w-[300px] bg-space-dark/90 backdrop-blur-lg z-[90] transition-all duration-300 pt-20 px-5 pb-5",n.isNavOpen?"right-0":"-right-[300px]"])},[ue("ul",T_,[(ke(!0),We(wt,null,Bi(n.planets,o=>(ke(),We("li",{key:o.id,class:"mb-5"},[ue("a",{onClick:jd(a=>i(o.id),["prevent"]),class:Tn(["text-space-light hover:cursor-pointer no-underline text-lg transition-colors duration-300 block p-2.5 rounded-md hover:text-space-accent hover:bg-white/10",{"text-space-accent bg-white/10":n.activePlanet===o.id}])},lt(o.name),11,E_)]))),128))])],2))}}),A_=Gn(w_,[["__scopeId","data-v-7f920789"]]),R_={key:0,class:"fixed top-5 left-5 bg-black/90 text-green-400 p-4 rounded-lg text-sm font-mono z-[100] border border-green-500/30 backdrop-blur-sm"},C_={class:"grid grid-cols-2 gap-4"},P_={class:"text-lg"},L_={class:"text-lg"},D_={class:"text-lg"},I_={class:"text-lg"},U_={class:"text-xs"},N_={class:"mt-3 border-t border-gray-700 pt-2"},F_={class:"flex gap-2"},O_=_n({__name:"PerformanceMonitor",props:{showPerformanceMonitor:{type:Boolean,required:!0},performanceStats:{type:Object,required:!0},isMobile:{type:Boolean,required:!0},qualityLevel:{type:String,required:!0}},emits:["setQualityLevel","close"],setup(n,{emit:e}){const t=e,i=r=>{t("setQualityLevel",r)},s=()=>{t("close")};return(r,o)=>n.showPerformanceMonitor?(ke(),We("div",R_,[o[9]||(o[9]=ue("div",{class:"text-green-300 font-bold mb-2"},"⚡ Performance Monitor",-1)),ue("div",C_,[ue("div",null,[o[2]||(o[2]=ue("div",{class:"text-gray-400"},"FPS:",-1)),ue("div",{class:Tn(["text-xl font-bold",n.performanceStats.fps>=60?"text-green-400":n.performanceStats.fps>=30?"text-yellow-400":"text-red-400"])},lt(n.performanceStats.fps),3)]),ue("div",null,[o[3]||(o[3]=ue("div",{class:"text-gray-400"},"Frame Time:",-1)),ue("div",P_,lt(n.performanceStats.frameTime)+"ms",1)]),ue("div",null,[o[4]||(o[4]=ue("div",{class:"text-gray-400"},"Triangles:",-1)),ue("div",L_,lt(n.performanceStats.triangles.toLocaleString()),1)]),ue("div",null,[o[5]||(o[5]=ue("div",{class:"text-gray-400"},"Draw Calls:",-1)),ue("div",D_,lt(n.performanceStats.drawCalls),1)]),ue("div",null,[o[6]||(o[6]=ue("div",{class:"text-gray-400"},"Memory:",-1)),ue("div",I_,lt(n.performanceStats.memory)+"MB",1)]),ue("div",null,[o[7]||(o[7]=ue("div",{class:"text-gray-400"},"Device:",-1)),ue("div",U_,lt(n.isMobile?"Mobile":"Desktop"),1)])]),ue("div",N_,[o[8]||(o[8]=ue("div",{class:"text-gray-400 mb-1"},"Qualité:",-1)),ue("div",F_,[ue("button",{onClick:o[0]||(o[0]=a=>i("medium")),class:Tn(["px-2 py-1 text-xs rounded",n.qualityLevel==="medium"?"bg-green-800 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"])}," Moyenne ",2),ue("button",{onClick:o[1]||(o[1]=a=>i("high")),class:Tn(["px-2 py-1 text-xs rounded",n.qualityLevel==="high"?"bg-green-800 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"])}," Haute ",2)])]),ue("button",{onClick:s,class:"mt-2 text-xs text-gray-500 hover:text-gray-300"}," [Fermer] ")])):Pt("",!0)}}),B_=Gn(O_,[["__scopeId","data-v-2495719f"]]),z_={class:"group bg-space-dark/50 border border-space-accent/10 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-space-accent/10 hover:border-space-accent/30"},k_={class:"relative aspect-video overflow-hidden"},H_=["src","alt"],V_={class:"p-6"},G_={class:"text-xl mb-3 text-space-accent font-space group-hover:text-space-accent/90 transition-colors duration-300"},W_={class:"text-space-light/80 mb-4 line-clamp-2"},X_={class:"flex flex-wrap gap-2 mb-5"},j_={class:"flex gap-3"},q_=["href"],Y_=["href"],$_=_n({__name:"ProjectCard",props:{project:{type:Object,required:!0}},setup(n){const e=n,t=Et(!1),i=s=>"/portfolio-outer-wilds-clean/".replace(/\/$/,"")+"/"+s.replace(/^\//,"");return sr(()=>{const s=new Image;s.src=i(e.project.image),s.onload=()=>{t.value=!0}}),(s,r)=>(ke(),We("div",z_,[ue("div",k_,[ue("img",{class:"w-full h-full object-cover transition-transform duration-700 group-hover:scale-110",src:i(n.project.image),alt:n.project.title,loading:"lazy",decoding:"async",width:800,height:450},null,8,H_),r[0]||(r[0]=ue("div",{class:"absolute inset-0 bg-gradient-to-t from-space-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"},null,-1))]),ue("div",V_,[ue("h3",G_,lt(n.project.title),1),ue("p",W_,lt(n.project.description),1),ue("div",X_,[(ke(!0),We(wt,null,Bi(n.project.technologies,o=>(ke(),We("span",{key:o,class:"px-3 py-1 bg-space-accent/5 text-space-accent/80 rounded-full text-sm border border-space-accent/10 transition-colors duration-300 group-hover:bg-space-accent/10 group-hover:border-space-accent/20"},lt(o),1))),128))]),ue("div",j_,[n.project.demo?(ke(),We("a",{key:0,href:n.project.demo,target:"_blank",class:"inline-flex items-center gap-2 px-4 py-2 bg-space-accent/10 text-space-accent rounded-lg text-sm transition-all duration-300 hover:bg-space-accent/20 hover:scale-105 border border-space-accent/20"},r[1]||(r[1]=[ue("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1),Wr(" Démo ")]),8,q_)):Pt("",!0),n.project.github?(ke(),We("a",{key:1,href:n.project.github,target:"_blank",class:"inline-flex items-center gap-2 px-4 py-2 bg-space-accent/10 text-space-accent rounded-lg text-sm transition-all duration-300 hover:bg-space-accent/20 hover:scale-105 border border-space-accent/20"},r[2]||(r[2]=[ue("svg",{class:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24"},[ue("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})],-1),Wr(" GitHub ")]),8,Y_)):Pt("",!0)])])]))}}),K_=Gn($_,[["__scopeId","data-v-91c37f54"]]),Z_={key:0,class:"mt-8"},J_={key:0,class:"text-3xl mb-5 text-space-secondary font-space"},Q_={key:1,class:"text-3xl mb-5 text-space-secondary font-space"},e0={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"},t0=_n({__name:"ProjectGrid",props:{projects:{type:Array,required:!0},planetName:{type:String,required:!0}},setup(n){return(e,t)=>n.projects&&n.projects.length?(ke(),We("div",Z_,[n.planetName==="Jupiter"?(ke(),We("h2",J_," Projets associés ")):(ke(),We("h2",Q_," Compétences associées ")),ue("div",e0,[(ke(!0),We(wt,null,Bi(n.projects,(i,s)=>(ke(),qs(K_,{key:s,project:i},null,8,["project"]))),128))])])):Pt("",!0)}}),n0=Gn(t0,[["__scopeId","data-v-9a9139d6"]]),i0={key:0,class:"fixed bottom-0 overflow-y-auto left-0 w-full max-h-[85vh] bg-space-dark/90 backdrop-blur-xl p-6 sm:p-8 pb-[calc(env(safe-area-inset-bottom)+2rem)] rounded-t-[40px] z-20 border-t border-space-accent/20 shadow-[0_-4px_30px_rgba(0,0,0,0.3)]"},s0={class:"flex items-center gap-4 mb-4 sm:mb-6"},r0={class:"text-3xl sm:text-4xl text-space-accent font-space"},o0={class:"space-y-6 sm:space-y-8"},a0={class:"text-base sm:text-lg leading-relaxed text-space-light/90 max-w-3xl"},l0=_n({__name:"PlanetContent",props:{activePlanet:{type:String,required:!0},planets:{type:Array,required:!0}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=Ir(()=>t.planets.find(o=>o.id===t.activePlanet)||{}),r=()=>{i("close")};return(o,a)=>(ke(),qs(Xd,{name:"slide-up"},{default:ks(()=>[n.activePlanet?(ke(),We("main",i0,[ue("button",{onClick:r,class:"absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 bg-space-accent/10 border border-space-accent/20 rounded-full text-space-light text-2xl leading-none cursor-pointer transition-all duration-300 z-[85] flex items-center justify-center hover:bg-space-accent/20 hover:scale-110 hover:border-space-accent/40"}," × "),(ke(),We("section",{key:n.activePlanet,class:"max-w-6xl mx-auto"},[ue("div",s0,[a[0]||(a[0]=ue("div",{class:"w-3 h-3 rounded-full bg-space-accent animate-pulse"},null,-1)),ue("h1",r0,lt(s.value.name),1)]),ue("div",o0,[ue("p",a0,lt(s.value.description),1),pt(n0,{projects:s.value.projects,planetName:s.value.name},null,8,["projects","planetName"])])]))])):Pt("",!0)]),_:1}))}}),c0=Gn(l0,[["__scopeId","data-v-54a40154"]]),u0={class:"relative min-h-screen flex items-center justify-center p-4"},h0={class:"flex items-center justify-between p-6 border-b border-space-accent/10"},f0={class:"p-6"},d0={key:0,class:"flex items-center justify-end gap-4 p-6 border-t border-space-accent/10"},p0=_n({__name:"Modal",props:{isOpen:{type:Boolean,required:!0},title:{type:String,required:!0},size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},showCloseButton:{type:Boolean,default:!0},closeOnBackdrop:{type:Boolean,default:!0}},emits:["close"],setup(n,{emit:e}){const t=n,i=e,s=()=>{i("close")},r=()=>{t.closeOnBackdrop&&s()};return(o,a)=>(ke(),qs(Xd,{"enter-active-class":"transition duration-300 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:ks(()=>[n.isOpen?(ke(),We("div",{key:0,class:"fixed inset-0 z-[1000] overflow-y-auto",onClick:jd(r,["self"])},[a[1]||(a[1]=ue("div",{class:"fixed inset-0 bg-black/60 backdrop-blur-sm"},null,-1)),ue("div",u0,[ue("div",{class:Tn(["relative bg-space-dark/95 border border-space-accent/20 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden",[n.size==="sm"?"max-w-md":n.size==="lg"?"max-w-4xl":"max-w-2xl"]])},[ue("div",h0,[ue("h3",{class:Tn(["text-2xl font-space text-space-accent",{"text-center w-full":!n.showCloseButton}])},lt(n.title),3),n.showCloseButton?(ke(),We("button",{key:0,onClick:s,class:"text-space-light hover:text-space-accent transition-colors duration-200 focus:outline-none"},a[0]||(a[0]=[ue("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)]))):Pt("",!0)]),ue("div",f0,[Cu(o.$slots,"default",{},void 0,!0)]),o.$slots.footer?(ke(),We("div",d0,[Cu(o.$slots,"footer",{},void 0,!0)])):Pt("",!0)],2)])])):Pt("",!0)]),_:3}))}}),rh=Gn(p0,[["__scopeId","data-v-d9b24bce"]]),m0={key:0,class:"space-y-6"},g0={class:"aspect-video relative rounded-lg overflow-hidden bg-space-dark/50"},_0=["src","alt"],v0={class:"space-y-4"},x0={class:"text-3xl font-space text-space-accent"},y0={class:"text-space-light text-lg leading-relaxed"},M0={class:"flex flex-wrap gap-2"},S0={key:0,class:"space-y-2"},b0={class:"list-disc list-inside space-y-1 text-space-light"},T0={class:"flex gap-4"},E0=["href"],w0=["href"],A0={key:0,class:"space-y-6"},R0={class:"flex items-center gap-4"},C0={class:"w-16 h-16 rounded-lg bg-space-accent/10 flex items-center justify-center"},P0={class:"text-2xl font-space text-space-accent"},L0={class:"text-space-light/80"},D0={class:"space-y-4"},I0={class:"text-space-light leading-relaxed"},U0={key:0,class:"space-y-2"},N0={class:"text-space-light"},F0={key:1,class:"space-y-2"},O0={class:"list-disc list-inside space-y-1 text-space-light"},B0={class:"flex flex-wrap gap-2"},z0=_n({__name:"ProjectModals",props:{isProjectDetailsOpen:{type:Boolean,required:!0},isSkillDetailsOpen:{type:Boolean,required:!0},selectedProject:{type:Object,default:null},selectedSkill:{type:Object,default:null}},emits:["close-project-details","close-skill-details"],setup(n,{emit:e}){const t=e,i=()=>{t("close-project-details")},s=()=>{t("close-skill-details")},r=o=>"/portfolio-outer-wilds-clean/".replace(/\/$/,"")+"/"+o.replace(/^\//,"");return(o,a)=>(ke(),We("div",null,[pt(rh,{isOpen:n.isProjectDetailsOpen,title:"Détails du projet",size:"lg",onClose:i},{footer:ks(()=>{var l,c;return[ue("div",T0,[(l=n.selectedProject)!=null&&l.demo?(ke(),We("a",{key:0,href:n.selectedProject.demo,target:"_blank",class:"px-6 py-2 bg-space-accent text-white rounded-lg hover:bg-space-accent/90 transition-colors duration-200 flex items-center gap-2"},a[1]||(a[1]=[ue("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),ue("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})],-1),Wr(" Voir la démo ")]),8,E0)):Pt("",!0),(c=n.selectedProject)!=null&&c.github?(ke(),We("a",{key:1,href:n.selectedProject.github,target:"_blank",class:"px-6 py-2 bg-space-secondary text-white rounded-lg hover:bg-space-secondary/90 transition-colors duration-200 flex items-center gap-2"},a[2]||(a[2]=[ue("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24"},[ue("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})],-1),Wr(" Voir le code ")]),8,w0)):Pt("",!0)])]}),default:ks(()=>[n.selectedProject?(ke(),We("div",m0,[ue("div",g0,[ue("img",{src:r(n.selectedProject.image),alt:n.selectedProject.title,class:"w-full h-full object-cover"},null,8,_0)]),ue("div",v0,[ue("h2",x0,lt(n.selectedProject.title),1),ue("p",y0,lt(n.selectedProject.description),1),ue("div",M0,[(ke(!0),We(wt,null,Bi(n.selectedProject.technologies,l=>(ke(),We("span",{key:l,class:"px-3 py-1 bg-space-accent/10 text-space-accent rounded-full text-sm"},lt(l),1))),128))]),n.selectedProject.features?(ke(),We("div",S0,[a[0]||(a[0]=ue("h3",{class:"text-xl font-space text-space-secondary"}," Fonctionnalités ",-1)),ue("ul",b0,[(ke(!0),We(wt,null,Bi(n.selectedProject.features,l=>(ke(),We("li",{key:l},lt(l),1))),128))])])):Pt("",!0)])])):Pt("",!0)]),_:1},8,["isOpen"]),pt(rh,{isOpen:n.isSkillDetailsOpen,title:"Détails de la compétence",size:"md",onClose:s},{default:ks(()=>[n.selectedSkill?(ke(),We("div",A0,[ue("div",R0,[ue("div",C0,[ue("i",{class:Tn([n.selectedSkill.icon,"text-3xl text-space-accent"])},null,2)]),ue("div",null,[ue("h2",P0,lt(n.selectedSkill.title),1),ue("p",L0,lt(n.selectedSkill.level),1)])]),ue("div",D0,[ue("p",I0,lt(n.selectedSkill.description),1),n.selectedSkill.experience?(ke(),We("div",U0,[a[3]||(a[3]=ue("h3",{class:"text-xl font-space text-space-secondary"},"Expérience",-1)),ue("p",N0,lt(n.selectedSkill.experience),1)])):Pt("",!0),n.selectedSkill.projects?(ke(),We("div",F0,[a[4]||(a[4]=ue("h3",{class:"text-xl font-space text-space-secondary"}," Projets associés ",-1)),ue("ul",O0,[(ke(!0),We(wt,null,Bi(n.selectedSkill.projects,l=>(ke(),We("li",{key:l},lt(l),1))),128))])])):Pt("",!0),ue("div",B0,[(ke(!0),We(wt,null,Bi(n.selectedSkill.technologies,l=>(ke(),We("span",{key:l,class:"px-3 py-1 bg-space-accent/10 text-space-accent rounded-full text-sm"},lt(l),1))),128))])])])):Pt("",!0)]),_:1},8,["isOpen"])]))}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yc="176",Gs={ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},k0=0,oh=1,H0=2,V0=0,qd=1,zl=2,hi=3,Kn=0,Lt=1,Dn=2,_i=0,hs=1,qr=2,ah=3,lh=4,G0=5,ls=100,W0=101,X0=102,j0=103,q0=104,Y0=200,$0=201,K0=202,Z0=203,kl=204,Hl=205,J0=206,Q0=207,ev=208,tv=209,nv=210,iv=211,sv=212,rv=213,ov=214,Vl=0,Gl=1,Wl=2,Ys=3,Xl=4,jl=5,ql=6,Yl=7,$c=0,av=1,lv=2,Vi=0,cv=1,uv=2,hv=3,Yd=4,fv=5,dv=6,pv=7,ch="attached",mv="detached",$d=300,$s=301,Ks=302,$l=303,Kl=304,wa=306,Zs=1e3,zi=1001,ca=1002,rn=1003,Kd=1004,br=1005,gn=1006,jo=1007,mi=1008,Zn=1009,Zd=1010,Jd=1011,Yr=1012,Kc=1013,fs=1014,Nn=1015,vi=1016,Zc=1017,Jc=1018,$r=1020,Qd=35902,ep=1021,tp=1022,bn=1023,Kr=1026,Zr=1027,Qc=1028,eu=1029,np=1030,tu=1031,nu=1033,qo=33776,Yo=33777,$o=33778,Ko=33779,Zl=35840,Jl=35841,Ql=35842,ec=35843,tc=36196,nc=37492,ic=37496,sc=37808,rc=37809,oc=37810,ac=37811,lc=37812,cc=37813,uc=37814,hc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,_c=37821,Zo=36492,vc=36494,xc=36495,ip=36283,yc=36284,Mc=36285,Sc=36286,Jr=2300,Qr=2301,Xa=2302,uh=2400,hh=2401,fh=2402,gv=2500,_v=0,sp=1,bc=2,vv=3200,xv=3201,iu=0,yv=1,Oi="",zt="srgb",on="srgb-linear",ua="linear",ft="srgb",_s=7680,dh=519,Mv=512,Sv=513,bv=514,rp=515,Tv=516,Ev=517,wv=518,Av=519,Tc=35044,ph="300 es",gi=2e3,ha=2001;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mh=1234567;const Ur=Math.PI/180,Js=180/Math.PI;function Bn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function su(n,e){return(n%e+e)%e}function Rv(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Cv(n,e,t){return n!==e?(t-n)/(e-n):0}function Nr(n,e,t){return(1-t)*n+t*e}function Pv(n,e,t,i){return Nr(n,e,1-Math.exp(-t*i))}function Lv(n,e=1){return e-Math.abs(su(n,e*2)-e)}function Dv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Iv(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Uv(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Nv(n,e){return n+Math.random()*(e-n)}function Fv(n){return n*(.5-Math.random())}function Ov(n){n!==void 0&&(mh=n);let e=mh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Bv(n){return n*Ur}function zv(n){return n*Js}function kv(n){return(n&n-1)===0&&n!==0}function Hv(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vv(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gv(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const op={DEG2RAD:Ur,RAD2DEG:Js,generateUUID:Bn,clamp:Ze,euclideanModulo:su,mapLinear:Rv,inverseLerp:Cv,lerp:Nr,damp:Pv,pingpong:Lv,smoothstep:Dv,smootherstep:Iv,randInt:Uv,randFloat:Nv,randFloatSpread:Fv,seededRandom:Ov,degToRad:Bv,radToDeg:zv,isPowerOfTwo:kv,ceilPowerOfTwo:Hv,floorPowerOfTwo:Vv,setQuaternionFromProperEuler:Gv,normalize:ut,denormalize:In};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,t,i,s,r,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],w=s[1],A=s[4],M=s[7],D=s[2],C=s[5],P=s[8];return r[0]=o*_+a*w+l*D,r[3]=o*m+a*A+l*C,r[6]=o*p+a*M+l*P,r[1]=c*_+u*w+h*D,r[4]=c*m+u*A+h*C,r[7]=c*p+u*M+h*P,r[2]=f*_+d*w+g*D,r[5]=f*m+d*A+g*C,r[8]=f*p+d*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new $e;function ap(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Wv(){const n=eo("canvas");return n.style.display="block",n}const gh={};function Jo(n){n in gh||(gh[n]=!0,console.warn(n))}function Xv(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function jv(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qv(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _h=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yv(){const n={enabled:!0,workingColorSpace:on,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Ws(s.r),s.g=Ws(s.g),s.b=Ws(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Oi?ua:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[on]:{primaries:e,whitePoint:i,transfer:ua,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),n}const Qe=Yv();function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vs;class $v{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vs===void 0&&(vs=eo("canvas")),vs.width=e.width,vs.height=e.height;const s=vs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=vs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(xi(t[i]/255)*255):t[i]=xi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kv=0;class ru{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qa(s[o].image)):r.push(qa(s[o]))}else r=qa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$v.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zv=0;class Dt extends ps{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=zi,s=zi,r=gn,o=mi,a=bn,l=Zn,c=Dt.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Bn(),this.name="",this.source=new ru(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case zi:e.x=e.x<0?0:1;break;case ca:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case zi:e.y=e.y<0?0:1;break;case ca:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=$d;Dt.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,M=(d+1)/2,D=(p+1)/2,C=(u+f)/4,P=(h+_)/4,N=(g+m)/4;return A>M&&A>D?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=C/i,r=P/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=C/s,r=N/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=P/r,s=N/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jv extends ps{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const r=new Dt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ru(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Jv{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class lp extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qv extends Dt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,w=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const D=Math.sqrt(A),C=Math.atan2(D,p*w);m=Math.sin(m*C)/D,a=Math.sin(a*C)/D}const M=a*w;if(l=l*m+f*M,c=c*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new U,xh=new Jn;class Qn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dr),mo.subVectors(this.max,dr),xs.subVectors(e.a,dr),ys.subVectors(e.b,dr),Ms.subVectors(e.c,dr),Ei.subVectors(ys,xs),wi.subVectors(Ms,ys),Ji.subVectors(xs,Ms);let t=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Ji.z,Ji.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Ji.z,0,-Ji.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Ji.y,Ji.x,0];return!$a(t,xs,ys,Ms,mo)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,xs,ys,Ms,mo))?!1:(go.crossVectors(Ei,wi),t=[go.x,go.y,go.z],$a(t,xs,ys,Ms,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new U,new U,new U,new U,new U,new U,new U,new U],Rn=new U,po=new Qn,xs=new U,ys=new U,Ms=new U,Ei=new U,wi=new U,Ji=new U,dr=new U,mo=new U,go=new U,Qi=new U;function $a(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Qi.fromArray(n,r);const a=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),l=e.dot(Qi),c=t.dot(Qi),u=i.dot(Qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ex=new Qn,pr=new U,Ka=new U;class ei{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ex.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(pr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(Ka)),this.expandByPoint(pr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new U,Za=new U,_o=new U,Ai=new U,Ja=new U,vo=new U,Qa=new U;class rr{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Za.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),Ai.copy(this.origin).sub(Za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_o),a=Ai.dot(this.direction),l=-Ai.dot(_o),c=Ai.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Za).addScaledVector(_o,f),d}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){Ja.subVectors(t,e),vo.subVectors(i,e),Qa.crossVectors(Ja,vo);let o=this.direction.dot(Qa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,e);const l=a*this.direction.dot(vo.crossVectors(Ai,vo));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(Qa);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ss.setFromMatrixColumn(e,0).length(),r=1/Ss.setFromMatrixColumn(e,1).length(),o=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,nx)}lookAt(e,t,i){const s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ri.crossVectors(i,fn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ri.crossVectors(i,fn)),Ri.normalize(),xo.crossVectors(fn,Ri),s[0]=Ri.x,s[4]=xo.x,s[8]=fn.x,s[1]=Ri.y,s[5]=xo.y,s[9]=fn.y,s[2]=Ri.z,s[6]=xo.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],A=i[7],M=i[11],D=i[15],C=s[0],P=s[4],N=s[8],E=s[12],S=s[1],I=s[5],B=s[9],G=s[13],Q=s[2],le=s[6],ne=s[10],se=s[14],Y=s[3],ve=s[7],Te=s[11],Pe=s[15];return r[0]=o*C+a*S+l*Q+c*Y,r[4]=o*P+a*I+l*le+c*ve,r[8]=o*N+a*B+l*ne+c*Te,r[12]=o*E+a*G+l*se+c*Pe,r[1]=u*C+h*S+f*Q+d*Y,r[5]=u*P+h*I+f*le+d*ve,r[9]=u*N+h*B+f*ne+d*Te,r[13]=u*E+h*G+f*se+d*Pe,r[2]=g*C+_*S+m*Q+p*Y,r[6]=g*P+_*I+m*le+p*ve,r[10]=g*N+_*B+m*ne+p*Te,r[14]=g*E+_*G+m*se+p*Pe,r[3]=w*C+A*S+M*Q+D*Y,r[7]=w*P+A*I+M*le+D*ve,r[11]=w*N+A*B+M*ne+D*Te,r[15]=w*E+A*G+M*se+D*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,A=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,M=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,D=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,C=t*w+i*A+s*M+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=w*P,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=A*P,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=M*P,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*P,e[12]=D*P,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,w=l*c,A=l*u,M=l*h,D=i.x,C=i.y,P=i.z;return s[0]=(1-(_+p))*D,s[1]=(d+M)*D,s[2]=(g-A)*D,s[3]=0,s[4]=(d-M)*C,s[5]=(1-(f+p))*C,s[6]=(m+w)*C,s[7]=0,s[8]=(g+A)*P,s[9]=(m-w)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=Ss.set(s[0],s[1],s[2]).length();const o=Ss.set(s[4],s[5],s[6]).length(),a=Ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const c=1/r,u=1/o,h=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=h,Cn.elements[9]*=h,Cn.elements[10]*=h,t.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=gi){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===gi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ha)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=gi){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===gi)g=(o+r)*h,_=-2*h;else if(a===ha)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ss=new U,Cn=new je,tx=new U(0,0,0),nx=new U(1,1,1),Ri=new U,xo=new U,fn=new U,yh=new je,Mh=new Jn;class Vn{constructor(e=0,t=0,i=0,s=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mh.setFromEuler(this),this.setFromQuaternion(Mh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ix=0;const Sh=new U,bs=new Jn,ai=new je,yo=new U,mr=new U,sx=new U,rx=new Jn,bh=new U(1,0,0),Th=new U(0,1,0),Eh=new U(0,0,1),wh={type:"added"},ox={type:"removed"},Ts={type:"childadded",child:null},el={type:"childremoved",child:null};class Mt extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new U,t=new Vn,i=new Jn,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new $e}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(bh,e)}rotateY(e){return this.rotateOnAxis(Th,e)}rotateZ(e){return this.rotateOnAxis(Eh,e)}translateOnAxis(e,t){return Sh.copy(e).applyQuaternion(this.quaternion),this.position.add(Sh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bh,e)}translateY(e){return this.translateOnAxis(Th,e)}translateZ(e){return this.translateOnAxis(Eh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?yo.copy(e):yo.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(mr,yo,this.up):ai.lookAt(yo,mr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ai),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wh),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ox),el.child=e,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wh),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new U(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new U,li=new U,tl=new U,ci=new U,Es=new U,ws=new U,Ah=new U,nl=new U,il=new U,sl=new U,rl=new st,ol=new st,al=new st;class Un{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Pn.subVectors(e,t),s.cross(Pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Pn.subVectors(s,t),li.subVectors(i,t),tl.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(li),l=Pn.dot(tl),c=li.dot(li),u=li.dot(tl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return rl.setScalar(0),ol.setScalar(0),al.setScalar(0),rl.fromBufferAttribute(e,t),ol.fromBufferAttribute(e,i),al.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(rl,r.x),o.addScaledVector(ol,r.y),o.addScaledVector(al,r.z),o}static isFrontFacing(e,t,i,s){return Pn.subVectors(i,t),li.subVectors(e,t),Pn.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Pn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Es.subVectors(s,i),ws.subVectors(r,i),nl.subVectors(e,i);const l=Es.dot(nl),c=ws.dot(nl);if(l<=0&&c<=0)return t.copy(i);il.subVectors(e,s);const u=Es.dot(il),h=ws.dot(il);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Es,o);sl.subVectors(e,r);const d=Es.dot(sl),g=ws.dot(sl);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(ws,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Ah.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(Ah,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(Es,o).addScaledVector(ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function ll(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ne{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Qe.workingColorSpace){if(e=su(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=ll(o,r,e+1/3),this.g=ll(o,r,e),this.b=ll(o,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=zt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const i=cp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Qe.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Ze(Wt.r*255,0,255))*65536+Math.round(Ze(Wt.g*255,0,255))*256+Math.round(Ze(Wt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=zt){Qe.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,s=Wt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+t,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ci),e.getHSL(Mo);const i=Nr(Ci.h,Mo.h,t),s=Nr(Ci.s,Mo.s,t),r=Nr(Ci.l,Mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ne;Ne.NAMES=cp;let ax=0;class kn extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=hs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Hl,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class un extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new U,So=new Ue;let lx=0;class St{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}}class up extends St{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class hp extends St{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ht extends St{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cx=0;const Mn=new je,cl=new Mt,As=new U,dn=new Qn,gr=new Qn,Ft=new U;class $t extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ap(e)?hp:up)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new $e().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,t,i){return Mn.makeTranslation(e,t,i),this.applyMatrix4(Mn),this}scale(e,t,i){return Mn.makeScale(e,t,i),this.applyMatrix4(Mn),this}lookAt(e){return cl.lookAt(e),cl.updateMatrix(),this.applyMatrix4(cl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ht(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(dn.min,gr.min),dn.expandByPoint(Ft),Ft.addVectors(dn.max,gr.max),dn.expandByPoint(Ft)):(dn.expandByPoint(gr.min),dn.expandByPoint(gr.max))}dn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Ft.add(As)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new U,l[N]=new U;const c=new U,u=new U,h=new U,f=new Ue,d=new Ue,g=new Ue,_=new U,m=new U;function p(N,E,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,E),h.fromBufferAttribute(i,S),f.fromBufferAttribute(r,N),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(I),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),a[N].add(_),a[E].add(_),a[S].add(_),l[N].add(m),l[E].add(m),l[S].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let N=0,E=w.length;N<E;++N){const S=w[N],I=S.start,B=S.count;for(let G=I,Q=I+B;G<Q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const A=new U,M=new U,D=new U,C=new U;function P(N){D.fromBufferAttribute(s,N),C.copy(D);const E=a[N];A.copy(E),A.sub(D.multiplyScalar(D.dot(E))).normalize(),M.crossVectors(C,E);const I=M.dot(l[N])<0?-1:1;o.setXYZW(N,A.x,A.y,A.z,I)}for(let N=0,E=w.length;N<E;++N){const S=w[N],I=S.start,B=S.count;for(let G=I,Q=I+B;G<Q;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new St(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rh=new je,es=new rr,bo=new ei,Ch=new U,To=new U,Eo=new U,wo=new U,ul=new U,Ao=new U,Ph=new U,Ro=new U;class vt extends Mt{constructor(e=new $t,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(ul.fromBufferAttribute(h,e),o?Ao.addScaledVector(ul,u):Ao.addScaledVector(ul.sub(t),u))}t.add(Ao)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),es.copy(e.ray).recast(e.near),!(bo.containsPoint(es.origin)===!1&&(es.intersectSphere(bo,Ch)===null||es.origin.distanceToSquared(Ch)>(e.far-e.near)**2))&&(Rh.copy(r).invert(),es.copy(e.ray).applyMatrix4(Rh),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),A=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,D=A;M<D;M+=3){const C=a.getX(M),P=a.getX(M+1),N=a.getX(M+2);s=Co(this,p,e,i,c,u,h,C,P,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Co(this,o,e,i,c,u,h,w,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,d.start),A=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,D=A;M<D;M+=3){const C=M,P=M+1,N=M+2;s=Co(this,p,e,i,c,u,h,C,P,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const w=m,A=m+1,M=m+2;s=Co(this,o,e,i,c,u,h,w,A,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function ux(n,e,t,i,s,r,o,a){let l;if(e.side===Lt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Kn,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ro);return c<t.near||c>t.far?null:{distance:c,point:Ro.clone(),object:n}}function Co(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,To),n.getVertexPosition(l,Eo),n.getVertexPosition(c,wo);const u=ux(n,e,t,i,To,Eo,wo,Ph);if(u){const h=new U;Un.getBarycoord(Ph,To,Eo,wo,h),s&&(u.uv=Un.getInterpolatedAttribute(s,a,l,c,h,new Ue)),r&&(u.uv1=Un.getInterpolatedAttribute(r,a,l,c,h,new Ue)),o&&(u.normal=Un.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new U,materialIndex:0};Un.getNormal(To,Eo,wo,f.normal),u.face=f,u.barycoord=h}return u}class io extends $t{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ht(c,3)),this.setAttribute("normal",new Ht(u,3)),this.setAttribute("uv",new Ht(h,2));function g(_,m,p,w,A,M,D,C,P,N,E){const S=M/P,I=D/N,B=M/2,G=D/2,Q=C/2,le=P+1,ne=N+1;let se=0,Y=0;const ve=new U;for(let Te=0;Te<ne;Te++){const Pe=Te*I-G;for(let ze=0;ze<le;ze++){const tt=ze*S-B;ve[_]=tt*w,ve[m]=Pe*A,ve[p]=Q,c.push(ve.x,ve.y,ve.z),ve[_]=0,ve[m]=0,ve[p]=C>0?1:-1,u.push(ve.x,ve.y,ve.z),h.push(ze/P),h.push(1-Te/N),se+=1}}for(let Te=0;Te<N;Te++)for(let Pe=0;Pe<P;Pe++){const ze=f+Pe+le*Te,tt=f+Pe+le*(Te+1),oe=f+(Pe+1)+le*(Te+1),ge=f+(Pe+1)+le*Te;l.push(ze,tt,ge),l.push(tt,oe,ge),Y+=6}a.addGroup(d,Y,E),d+=Y,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Qt(n){const e={};for(let t=0;t<n.length;t++){const i=Qs(n[t]);for(const s in i)e[s]=i[s]}return e}function hx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fp(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const fa={clone:Qs,merge:Qt};var fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sn extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fx,this.fragmentShader=dx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dp extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new U,Lh=new Ue,Dh=new Ue;class tn extends dp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,Lh,Dh),t.subVectors(Dh,Lh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Rs=-90,Cs=1;class px extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new tn(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const r=new tn(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const o=new tn(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const a=new tn(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const l=new tn(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new tn(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class pp extends Dt{constructor(e=[],t=$s,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mx extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new io(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:_i});r.uniforms.tEquirect.value=t;const o=new vt(s,r),a=t.minFilter;return t.minFilter===mi&&(t.minFilter=gn),new px(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Fn extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gx={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _x extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new U;class au{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=In(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new au(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ih=new U,Uh=new st,Nh=new st,xx=new U,Fh=new je,Po=new U,fl=new ei,Oh=new je,dl=new rr;class yx extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ch,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Po),this.boundingBox.expandByPoint(Po)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Po),this.boundingSphere.expandByPoint(Po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fl.copy(this.boundingSphere),fl.applyMatrix4(s),e.ray.intersectsSphere(fl)!==!1&&(Oh.copy(s).invert(),dl.copy(e.ray).applyMatrix4(Oh),!(this.boundingBox!==null&&dl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,dl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ch?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===mv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Uh.fromBufferAttribute(s.attributes.skinIndex,e),Nh.fromBufferAttribute(s.attributes.skinWeight,e),Ih.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Nh.getComponent(r);if(o!==0){const a=Uh.getComponent(r);Fh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(xx.copy(Ih).applyMatrix4(Fh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mp extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gp extends Dt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,u=rn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bh=new je,Mx=new je;class lu{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new je;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Mx;Bh.multiplyMatrices(a,t[r]),Bh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new lu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new gp(t,e,e,bn,Nn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mp),this.bones.push(o),this.boneInverses.push(new je().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Ec extends St{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new je,zh=new je,Lo=[],kh=new Qn,Sx=new je,_r=new vt,vr=new ei;class bx extends vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ec(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Sx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),kh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(kh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),vr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),vr.copy(this.boundingSphere),vr.applyMatrix4(i),e.ray.intersectsSphere(vr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),zh.multiplyMatrices(i,Ps),_r.matrixWorld=zh,_r.raycast(e,Lo);for(let o=0,a=Lo.length;o<a;o++){const l=Lo[o];l.instanceId=r,l.object=this,t.push(l)}Lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ec(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gp(new Float32Array(s*this.count),s,this.count,Qc,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pl=new U,Tx=new U,Ex=new $e;class Ni{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=pl.subVectors(i,t).cross(Tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(pl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ex.getNormalMatrix(e),s=this.coplanarPoint(pl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new ei,Do=new U;class cu{constructor(e=new Ni,t=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],A=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-d,M-p).normalize(),i[1].setComponents(l+r,f+c,m+d,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+w).normalize(),i[3].setComponents(l-o,f-u,m-g,M-w).normalize(),i[4].setComponents(l-a,f-h,m-_,M-A).normalize(),t===gi)i[5].setComponents(l+a,f+h,m+_,M+A).normalize();else if(t===ha)i[5].setComponents(a,h,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _p extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const da=new U,pa=new U,Hh=new je,xr=new rr,Io=new ei,ml=new U,Vh=new U;class uu extends Mt{constructor(e=new $t,t=new _p){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)da.fromBufferAttribute(t,s-1),pa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=da.distanceTo(pa);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,e.ray.intersectsSphere(Io)===!1)return;Hh.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Hh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),w=u.getX(_+1),A=Uo(this,e,xr,l,p,w,_);A&&t.push(A)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=Uo(this,e,xr,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=Uo(this,e,xr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Uo(this,e,xr,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(da.fromBufferAttribute(a,s),pa.fromBufferAttribute(a,r),t.distanceSqToSegment(da,pa,ml,Vh)>i)return;ml.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(ml);if(!(c<e.near||c>e.far))return{distance:c,point:Vh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Gh=new U,Wh=new U;class wx extends uu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Gh.fromBufferAttribute(t,s),Wh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Gh.distanceTo(Wh);e.setAttribute("lineDistance",new Ht(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ax extends uu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fr extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Xh=new je,wc=new rr,No=new ei,Fo=new U;class Tr extends Mt{constructor(e=new $t,t=new Fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Xh.copy(s).invert(),wc.copy(e.ray).applyMatrix4(Xh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);Fo.fromBufferAttribute(h,m),jh(Fo,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Fo.fromBufferAttribute(h,g),jh(Fo,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jh(n,e,t,i,s,r,o){const a=wc.distanceSqToPoint(n);if(a<t){const l=new U;wc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Rx extends Dt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vp extends Dt{constructor(e,t,i=fs,s,r,o,a=rn,l=rn,c,u=Kr){if(u!==Kr&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ru(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Aa extends $t{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*f-o;for(let A=0;A<c;A++){const M=A*h-r;g.push(M,-w,0),_.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const A=w+c*p,M=w+c*(p+1),D=w+1+c*(p+1),C=w+1+c*p;d.push(A,M,C),d.push(M,D,C)}this.setIndex(d),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.widthSegments,e.heightSegments)}}class hu extends $t{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,d=new U,g=new Ue;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const w=p+m,A=w,M=w+i+1,D=w+i+2,C=w+1;a.push(A,M,C),a.push(M,D,C)}}this.setIndex(a),this.setAttribute("position",new Ht(l,3)),this.setAttribute("normal",new Ht(c,3)),this.setAttribute("uv",new Ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ln extends $t{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new U,f=new U,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const w=[],A=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&l===Math.PI&&(M=-.5/t);for(let D=0;D<=t;D++){const C=D/t;h.x=-e*Math.cos(s+C*r)*Math.sin(o+A*a),h.y=e*Math.cos(o+A*a),h.z=e*Math.sin(s+C*r)*Math.sin(o+A*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(C+M,1-A),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const A=u[p][w+1],M=u[p][w],D=u[p+1][w],C=u[p+1][w+1];(p!==0||o>0)&&d.push(A,M,C),(p!==i-1||l<Math.PI)&&d.push(M,D,C)}this.setIndex(d),this.setAttribute("position",new Ht(g,3)),this.setAttribute("normal",new Ht(_,3)),this.setAttribute("uv",new Ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ra extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ti extends Ra{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qh extends kn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cx extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Px extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Oo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Lx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Dx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Yh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function xp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class so{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ix extends so{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=e,a=2*t-i;break;case fh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:o=e,l=2*i-t;break;case fh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,w=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,A=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let D=0;D!==a;++D)r[D]=p*o[u+D]+w*o[c+D]+A*o[l+D]+M*o[h+D];return r}}class Ux extends so{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Nx extends so{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ux(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ix(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Jr:t=this.InterpolantFactoryMethodDiscrete;break;case Qr:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Lx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Qr;class or extends Wn{constructor(e,t,i){super(e,t,i)}}or.prototype.ValueTypeName="bool";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Jr;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;class yp extends Wn{constructor(e,t,i,s){super(e,t,i,s)}}yp.prototype.ValueTypeName="color";class er extends Wn{constructor(e,t,i,s){super(e,t,i,s)}}er.prototype.ValueTypeName="number";class Fx extends so{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Jn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class tr extends Wn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Fx(this.times,this.values,this.getValueSize(),e)}}tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;class ar extends Wn{constructor(e,t,i){super(e,t,i)}}ar.prototype.ValueTypeName="string";ar.prototype.ValueBufferType=Array;ar.prototype.DefaultInterpolation=Jr;ar.prototype.InterpolantFactoryMethodLinear=void 0;ar.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends Wn{constructor(e,t,i,s){super(e,t,i,s)}}nr.prototype.ValueTypeName="vector";class Ox{constructor(e="",t=-1,i=[],s=gv){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(zx(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Wn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Dx(l);l=Yh(l,1,u),c=Yh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new er(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];xp(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let w=0;w!==f[g].morphTargets.length;++w){const A=f[g];m.push(A.time),p.push(A.morphTarget===_?1:0)}s.push(new er(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(nr,d+".position",f,"pos",s),i(tr,d+".quaternion",f,"rot",s),i(nr,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return er;case"vector":case"vector2":case"vector3":case"vector4":return nr;case"color":return yp;case"quaternion":return tr;case"bool":case"boolean":return or;case"string":return ar}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function zx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bx(n.type);if(n.times===void 0){const t=[],i=[];xp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const ki={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class kx{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Hx=new kx;class lr{constructor(e){this.manager=e!==void 0?e:Hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}lr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class Vx extends Error{constructor(e,t){super(e),this.response=t}}class Mp extends lr{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ki.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:i,onError:s});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){w();function w(){h.read().then(({done:A,value:M})=>{if(A)p.close();else{_+=M.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let C=0,P=u.length;C<P;C++){const N=u[C];N.onProgress&&N.onProgress(D)}p.enqueue(M),w()}},A=>{p.error(A)})}}});return new Response(m)}else throw new Vx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{ki.add(e,c);const u=ui[e];delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gx extends lr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=eo("img");function l(){u(),ki.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Wx extends lr{constructor(e){super(e)}load(e,t,i,s){const r=new Dt,o=new Gx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class ro extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Xx extends ro{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gl=new je,$h=new U,Kh=new U;class fu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cu,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;$h.setFromMatrixPosition(e.matrixWorld),t.position.copy($h),Kh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kh),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class jx extends fu{constructor(){super(new tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class qx extends ro{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new jx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Zh=new je,yr=new U,_l=new U;class Yx extends fu{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),yr.setFromMatrixPosition(e.matrixWorld),i.position.copy(yr),_l.copy(i.position),_l.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_l),i.updateMatrixWorld(),s.makeTranslation(-yr.x,-yr.y,-yr.z),Zh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zh)}}class Qo extends ro{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Yx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ca extends dp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $x extends fu{constructor(){super(new Ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Is extends ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new $x}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kx extends ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Or{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Zx extends lr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ki.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ki.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ki.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ki.add(e,l),r.manager.itemStart(e)}}class Jx extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Qx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Jh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Jh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Jh(){return performance.now()}const du="\\[\\]\\.:\\/",ey=new RegExp("["+du+"]","g"),pu="[^"+du+"]",ty="[^"+du.replace("\\.","")+"]",ny=/((?:WC+[\/:])*)/.source.replace("WC",pu),iy=/(WCOD+)?/.source.replace("WCOD",ty),sy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),oy=new RegExp("^"+ny+iy+sy+ry+"$"),ay=["material","materials","bones","map"];class ly{constructor(e,t,i){const s=i||ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ht{constructor(e,t,i){this.path=t,this.parsedPath=i||ht.parseTrackName(t),this.node=ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ht.Composite(e,t,i):new ht(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ey,"")}static parseTrackName(e){const t=oy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);ay.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ht.Composite=ly;ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ht.prototype.GetterByBindingType=[ht.prototype._getValue_direct,ht.prototype._getValue_array,ht.prototype._getValue_arrayElement,ht.prototype._getValue_toArray];ht.prototype.SetterByBindingTypeAndVersioning=[[ht.prototype._setValue_direct,ht.prototype._setValue_direct_setNeedsUpdate,ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_array,ht.prototype._setValue_array_setNeedsUpdate,ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_arrayElement,ht.prototype._setValue_arrayElement_setNeedsUpdate,ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ht.prototype._setValue_fromArray,ht.prototype._setValue_fromArray_setNeedsUpdate,ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Qh=new je;class cy{constructor(e,t,i=0,s=1/0){this.ray=new rr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qh),this}intersectObject(e,t=!0,i=[]){return Ac(e,this,i,t),i.sort(ef),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,i,t);return i.sort(ef),i}}function ef(n,e){return n.distance-e.distance}function Ac(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ac(r[o],e,t,!0)}}class tf{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uy extends ps{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function nf(n,e,t,i){const s=hy(i);switch(t){case ep:return n*e;case Qc:return n*e/s.components*s.byteLength;case eu:return n*e/s.components*s.byteLength;case np:return n*e*2/s.components*s.byteLength;case tu:return n*e*2/s.components*s.byteLength;case tp:return n*e*3/s.components*s.byteLength;case bn:return n*e*4/s.components*s.byteLength;case nu:return n*e*4/s.components*s.byteLength;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $o:case Ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Jl:case ec:return Math.max(n,16)*Math.max(e,8)/4;case Zl:case Ql:return Math.max(n,8)*Math.max(e,8)/2;case tc:case nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ac:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Zo:case vc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ip:case yc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hy(n){switch(n){case Zn:case Zd:return{byteLength:1,components:1};case Yr:case Jd:case vi:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case fs:case Kc:case Nn:return{byteLength:4,components:1};case Qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function fy(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var dy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,by=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ey=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ay=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,By=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,rM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,hM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,PM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,DM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,FM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,MS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,AS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,LS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,IS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,US=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:dy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:_y,alphatest_pars_fragment:vy,aomap_fragment:xy,aomap_pars_fragment:yy,batching_pars_vertex:My,batching_vertex:Sy,begin_vertex:by,beginnormal_vertex:Ty,bsdfs:Ey,iridescence_fragment:wy,bumpmap_pars_fragment:Ay,clipping_planes_fragment:Ry,clipping_planes_pars_fragment:Cy,clipping_planes_pars_vertex:Py,clipping_planes_vertex:Ly,color_fragment:Dy,color_pars_fragment:Iy,color_pars_vertex:Uy,color_vertex:Ny,common:Fy,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:ky,emissivemap_fragment:Hy,emissivemap_pars_fragment:Vy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:Xy,envmap_common_pars_fragment:jy,envmap_pars_fragment:qy,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:rM,envmap_vertex:$y,fog_vertex:Ky,fog_pars_vertex:Zy,fog_fragment:Jy,fog_pars_fragment:Qy,gradientmap_pars_fragment:eM,lightmap_pars_fragment:tM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:sM,lights_toon_fragment:oM,lights_toon_pars_fragment:aM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:uM,lights_physical_pars_fragment:hM,lights_fragment_begin:fM,lights_fragment_maps:dM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:gM,logdepthbuf_pars_vertex:_M,logdepthbuf_vertex:vM,map_fragment:xM,map_pars_fragment:yM,map_particle_fragment:MM,map_particle_pars_fragment:SM,metalnessmap_fragment:bM,metalnessmap_pars_fragment:TM,morphinstance_vertex:EM,morphcolor_vertex:wM,morphnormal_vertex:AM,morphtarget_pars_vertex:RM,morphtarget_vertex:CM,normal_fragment_begin:PM,normal_fragment_maps:LM,normal_pars_fragment:DM,normal_pars_vertex:IM,normal_vertex:UM,normalmap_pars_fragment:NM,clearcoat_normal_fragment_begin:FM,clearcoat_normal_fragment_maps:OM,clearcoat_pars_fragment:BM,iridescence_pars_fragment:zM,opaque_fragment:kM,packing:HM,premultiplied_alpha_fragment:VM,project_vertex:GM,dithering_fragment:WM,dithering_pars_fragment:XM,roughnessmap_fragment:jM,roughnessmap_pars_fragment:qM,shadowmap_pars_fragment:YM,shadowmap_pars_vertex:$M,shadowmap_vertex:KM,shadowmask_pars_fragment:ZM,skinbase_vertex:JM,skinning_pars_vertex:QM,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:sS,tonemapping_pars_fragment:rS,transmission_fragment:oS,transmission_pars_fragment:aS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:hS,background_vert:fS,background_frag:dS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:_S,depth_vert:vS,depth_frag:xS,distanceRGBA_vert:yS,distanceRGBA_frag:MS,equirect_vert:SS,equirect_frag:bS,linedashed_vert:TS,linedashed_frag:ES,meshbasic_vert:wS,meshbasic_frag:AS,meshlambert_vert:RS,meshlambert_frag:CS,meshmatcap_vert:PS,meshmatcap_frag:LS,meshnormal_vert:DS,meshnormal_frag:IS,meshphong_vert:US,meshphong_frag:NS,meshphysical_vert:FS,meshphysical_frag:OS,meshtoon_vert:BS,meshtoon_frag:zS,points_vert:kS,points_frag:HS,shadow_vert:VS,shadow_frag:GS,sprite_vert:WS,sprite_frag:XS},Se={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},Yn={basic:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Qt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Qt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Qt([Se.points,Se.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Qt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Qt([Se.common,Se.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Qt([Se.sprite,Se.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Qt([Se.common,Se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Qt([Se.lights,Se.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Yn.physical={uniforms:Qt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Bo={r:0,b:0,g:0},ns=new Vn,jS=new je;function qS(n,e,t,i,s,r,o){const a=new Ne(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?t:e).get(M)),M}function _(A){let M=!1;const D=g(A);D===null?p(a,l):D&&D.isColor&&(p(D,1),M=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(A,M){const D=g(M);D&&(D.isCubeTexture||D.mapping===wa)?(u===void 0&&(u=new vt(new io(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Qs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(M.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jS.makeRotationFromEuler(ns)),u.material.toneMapped=Qe.getTransfer(D.colorSpace)!==ft,(h!==D||f!==D.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=D,f=D.version,d=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new vt(new Aa(2,2),new sn({name:"BackgroundMaterial",uniforms:Qs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(D.colorSpace)!==ft,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||f!==D.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=D,f=D.version,d=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,M){A.getRGB(Bo,fp(n)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,M,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,M=1){a.set(A),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:_,addToRenderList:m,dispose:w}}function YS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(S,I,B,G,Q){let le=!1;const ne=h(G,B,I);r!==ne&&(r=ne,c(r.object)),le=d(S,G,B,Q),le&&g(S,G,B,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(le||o)&&(o=!1,M(S,I,B,G),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,I,B){const G=B.wireframe===!0;let Q=i[S.id];Q===void 0&&(Q={},i[S.id]=Q);let le=Q[I.id];le===void 0&&(le={},Q[I.id]=le);let ne=le[G];return ne===void 0&&(ne=f(l()),le[G]=ne),ne}function f(S){const I=[],B=[],G=[];for(let Q=0;Q<t;Q++)I[Q]=0,B[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:G,object:S,attributes:{},index:null}}function d(S,I,B,G){const Q=r.attributes,le=I.attributes;let ne=0;const se=B.getAttributes();for(const Y in se)if(se[Y].location>=0){const Te=Q[Y];let Pe=le[Y];if(Pe===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Pe=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Pe=S.instanceColor)),Te===void 0||Te.attribute!==Pe||Pe&&Te.data!==Pe.data)return!0;ne++}return r.attributesNum!==ne||r.index!==G}function g(S,I,B,G){const Q={},le=I.attributes;let ne=0;const se=B.getAttributes();for(const Y in se)if(se[Y].location>=0){let Te=le[Y];Te===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(Te=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(Te=S.instanceColor));const Pe={};Pe.attribute=Te,Te&&Te.data&&(Pe.data=Te.data),Q[Y]=Pe,ne++}r.attributes=Q,r.attributesNum=ne,r.index=G}function _(){const S=r.newAttributes;for(let I=0,B=S.length;I<B;I++)S[I]=0}function m(S){p(S,0)}function p(S,I){const B=r.newAttributes,G=r.enabledAttributes,Q=r.attributeDivisors;B[S]=1,G[S]===0&&(n.enableVertexAttribArray(S),G[S]=1),Q[S]!==I&&(n.vertexAttribDivisor(S,I),Q[S]=I)}function w(){const S=r.newAttributes,I=r.enabledAttributes;for(let B=0,G=I.length;B<G;B++)I[B]!==S[B]&&(n.disableVertexAttribArray(B),I[B]=0)}function A(S,I,B,G,Q,le,ne){ne===!0?n.vertexAttribIPointer(S,I,B,Q,le):n.vertexAttribPointer(S,I,B,G,Q,le)}function M(S,I,B,G){_();const Q=G.attributes,le=B.getAttributes(),ne=I.defaultAttributeValues;for(const se in le){const Y=le[se];if(Y.location>=0){let ve=Q[se];if(ve===void 0&&(se==="instanceMatrix"&&S.instanceMatrix&&(ve=S.instanceMatrix),se==="instanceColor"&&S.instanceColor&&(ve=S.instanceColor)),ve!==void 0){const Te=ve.normalized,Pe=ve.itemSize,ze=e.get(ve);if(ze===void 0)continue;const tt=ze.buffer,oe=ze.type,ge=ze.bytesPerElement,Re=oe===n.INT||oe===n.UNSIGNED_INT||ve.gpuType===Kc;if(ve.isInterleavedBufferAttribute){const ye=ve.data,V=ye.stride,re=ve.offset;if(ye.isInstancedInterleavedBuffer){for(let te=0;te<Y.locationSize;te++)p(Y.location+te,ye.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let te=0;te<Y.locationSize;te++)A(Y.location+te,Pe/Y.locationSize,oe,Te,V*ge,(re+Pe/Y.locationSize*te)*ge,Re)}else{if(ve.isInstancedBufferAttribute){for(let ye=0;ye<Y.locationSize;ye++)p(Y.location+ye,ve.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ye=0;ye<Y.locationSize;ye++)m(Y.location+ye);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ye=0;ye<Y.locationSize;ye++)A(Y.location+ye,Pe/Y.locationSize,oe,Te,Pe*ge,Pe/Y.locationSize*ye*ge,Re)}}else if(ne!==void 0){const Te=ne[se];if(Te!==void 0)switch(Te.length){case 2:n.vertexAttrib2fv(Y.location,Te);break;case 3:n.vertexAttrib3fv(Y.location,Te);break;case 4:n.vertexAttrib4fv(Y.location,Te);break;default:n.vertexAttrib1fv(Y.location,Te)}}}}w()}function D(){N();for(const S in i){const I=i[S];for(const B in I){const G=I[B];for(const Q in G)u(G[Q].object),delete G[Q];delete I[B]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const I=i[S.id];for(const B in I){const G=I[B];for(const Q in G)u(G[Q].object),delete G[Q];delete I[B]}delete i[S.id]}function P(S){for(const I in i){const B=i[I];if(B[S.id]===void 0)continue;const G=B[S.id];for(const Q in G)u(G[Q].object),delete G[Q];delete B[S.id]}}function N(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function $S(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function KS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==bn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Zn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nn&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,C=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:D,maxSamples:C}}function ZS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ni,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const w=r?0:i,A=w*4;let M=p.clippingState||null;l.value=M,M=u(g,f,A,d);for(let D=0;D!==A;++D)M[D]=t[D];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=d;A!==_;++A,M+=4)o.copy(h[A]).applyMatrix4(w,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function JS(n){let e=new WeakMap;function t(o,a){return a===$l?o.mapping=$s:a===Kl&&(o.mapping=Ks),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$l||a===Kl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ns=4,sf=[.125,.215,.35,.446,.526,.582],cs=20,vl=new Ca,rf=new Ne;let xl=null,yl=0,Ml=0,Sl=!1;const os=(1+Math.sqrt(5))/2,Ls=1/os,of=[new U(-os,Ls,0),new U(os,Ls,0),new U(-Ls,0,os),new U(Ls,0,os),new U(0,os,-Ls),new U(0,os,Ls),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],QS=new U;class af{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=QS}=r;xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xl,yl,Ml),this._renderer.xr.enabled=Sl,e.scissorTest=!1,zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:vi,format:bn,colorSpace:on,depthBuffer:!1},s=lf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lf(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=eb(r)),this._blurMaterial=tb(r,e,t)}return s}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,vl)}_sceneToCubeUV(e,t,i,s,r){const l=new tn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(rf),h.toneMapping=Vi,h.autoClear=!1;const g=new un({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),_=new vt(new io,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(rf),m=!0);for(let w=0;w<6;w++){const A=w%3;A===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[w],r.y,r.z)):A===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[w]));const M=this._cubeSize;zo(s,A*M,w>2?M:0,M,M),h.setRenderTarget(s),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===$s||e.mapping===Ks;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;zo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,vl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=of[(s-r-1)%of.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new vt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const p=[];let w=0;for(let P=0;P<cs;++P){const N=P/_,E=Math.exp(-N*N/2);p.push(E),P===0?w+=E:P<m&&(w+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const M=this._sizeLods[s],D=3*M*(s>A-Ns?s-A+Ns:0),C=4*(this._cubeSize-M);zo(t,D,C,3*M,2*M),l.setRenderTarget(t),l.render(h,vl)}}function eb(n){const e=[],t=[],i=[];let s=n;const r=n-Ns+1+sf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ns?l=sf[o-n+Ns-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*d),A=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,N=C>2?0:-1,E=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];w.set(E,_*g*C),A.set(f,m*g*C);const S=[C,C,C,C,C,C];M.set(S,p*g*C)}const D=new $t;D.setAttribute("position",new St(w,_)),D.setAttribute("uv",new St(A,m)),D.setAttribute("faceIndex",new St(M,p)),e.push(D),s>Ns&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function lf(n,e,t){const i=new zn(n,e,t);return i.texture.mapping=wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function tb(n,e,t){const i=new Float32Array(cs),s=new U(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function cf(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function uf(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nb(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===$l||l===Kl,u=l===$s||l===Ks;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new af(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new af(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ib(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Jo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function sb(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const w=d.array;_=d.version;for(let A=0,M=w.length;A<M;A+=3){const D=w[A+0],C=w[A+1],P=w[A+2];f.push(D,C,C,P,P,D)}}else if(g!==void 0){const w=g.array;_=g.version;for(let A=0,M=w.length/3-1;A<M;A+=3){const D=A+0,C=A+1,P=A+2;f.push(D,C,C,P,P,D)}}else return;const m=new(ap(f)?hp:up)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function rb(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=d[w]*_[w];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function ob(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function ab(n,e,t){const i=new WeakMap,s=new st;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,C=1;D>e.maxTextureSize&&(C=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const P=new Float32Array(D*C*4*h),N=new lp(P,D,C,h);N.type=Nn,N.needsUpdate=!0;const E=M*4;for(let I=0;I<h;I++){const B=p[I],G=w[I],Q=A[I],le=D*C*4*I;for(let ne=0;ne<B.count;ne++){const se=ne*E;g===!0&&(s.fromBufferAttribute(B,ne),P[le+se+0]=s.x,P[le+se+1]=s.y,P[le+se+2]=s.z,P[le+se+3]=0),_===!0&&(s.fromBufferAttribute(G,ne),P[le+se+4]=s.x,P[le+se+5]=s.y,P[le+se+6]=s.z,P[le+se+7]=0),m===!0&&(s.fromBufferAttribute(Q,ne),P[le+se+8]=s.x,P[le+se+9]=s.y,P[le+se+10]=s.z,P[le+se+11]=Q.itemSize===4?s.w:1)}}f={count:h,texture:N,size:new Ue(D,C)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function lb(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const bp=new Dt,hf=new vp(1,1),Tp=new lp,Ep=new Qv,wp=new pp,ff=[],df=[],pf=new Float32Array(16),mf=new Float32Array(9),gf=new Float32Array(4);function cr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=ff[s];if(r===void 0&&(r=new Float32Array(s),ff[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Pa(n,e){let t=df[e];t===void 0&&(t=new Int32Array(e),df[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function db(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;gf.set(i),n.uniformMatrix2fv(this.addr,!1,gf),Nt(t,i)}}function pb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;mf.set(i),n.uniformMatrix3fv(this.addr,!1,mf),Nt(t,i)}}function mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,i))return;pf.set(i),n.uniformMatrix4fv(this.addr,!1,pf),Nt(t,i)}}function gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function Tb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hf.compareFunction=rp,r=hf):r=bp,t.setTexture2D(e||r,s)}function Eb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Ep,s)}function wb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||wp,s)}function Ab(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tp,s)}function Rb(n){switch(n){case 5126:return cb;case 35664:return ub;case 35665:return hb;case 35666:return fb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return yb;case 36294:return Mb;case 36295:return Sb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Tb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Cb(n,e){n.uniform1fv(this.addr,e)}function Pb(n,e){const t=cr(e,this.size,2);n.uniform2fv(this.addr,t)}function Lb(n,e){const t=cr(e,this.size,3);n.uniform3fv(this.addr,t)}function Db(n,e){const t=cr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ib(n,e){const t=cr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ub(n,e){const t=cr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Nb(n,e){const t=cr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fb(n,e){n.uniform1iv(this.addr,e)}function Ob(n,e){n.uniform2iv(this.addr,e)}function Bb(n,e){n.uniform3iv(this.addr,e)}function zb(n,e){n.uniform4iv(this.addr,e)}function kb(n,e){n.uniform1uiv(this.addr,e)}function Hb(n,e){n.uniform2uiv(this.addr,e)}function Vb(n,e){n.uniform3uiv(this.addr,e)}function Gb(n,e){n.uniform4uiv(this.addr,e)}function Wb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||bp,r[o])}function Xb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Ep,r[o])}function jb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||wp,r[o])}function qb(n,e,t){const i=this.cache,s=e.length,r=Pa(t,s);Ut(i,r)||(n.uniform1iv(this.addr,r),Nt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Tp,r[o])}function Yb(n){switch(n){case 5126:return Cb;case 35664:return Pb;case 35665:return Lb;case 35666:return Db;case 35674:return Ib;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return kb;case 36294:return Hb;case 36295:return Vb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return qb}}class $b{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Rb(t.type)}}class Kb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yb(t.type)}}class Zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function _f(n,e){n.seq.push(e),n.map[e.id]=e}function Jb(n,e,t){const i=n.name,s=i.length;for(bl.lastIndex=0;;){const r=bl.exec(i),o=bl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){_f(t,c===void 0?new $b(a,n,e):new Kb(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Zb(a),_f(t,h)),t=h}}}class ea{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Jb(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function vf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qb=37297;let eT=0;function tT(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const xf=new $e;function nT(n){Qe._getMatrix(xf,Qe.workingColorSpace,n);const e=`mat3( ${xf.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(n)){case ua:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function yf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tT(n.getShaderSource(e),o)}else return s}function iT(n,e){const t=nT(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function sT(n,e){let t;switch(e){case cv:t="Linear";break;case uv:t="Reinhard";break;case hv:t="Cineon";break;case Yd:t="ACESFilmic";break;case dv:t="AgX";break;case pv:t="Neutral";break;case fv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ko=new U;function rT(){Qe.getLuminanceCoefficients(ko);const n=ko.x.toFixed(4),e=ko.y.toFixed(4),t=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oT(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function aT(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lT(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Er(n){return n!==""}function Mf(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rc(n){return n.replace(cT,hT)}const uT=new Map;function hT(n,e){let t=Ke[e];if(t===void 0){const i=uT.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rc(t)}const fT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bf(n){return n.replace(fT,dT)}function dT(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pT(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zl?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function mT(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $s:case Ks:e="ENVMAP_TYPE_CUBE";break;case wa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gT(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function _T(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $c:e="ENVMAP_BLENDING_MULTIPLY";break;case av:e="ENVMAP_BLENDING_MIX";break;case lv:e="ENVMAP_BLENDING_ADD";break}return e}function vT(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xT(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=pT(t),c=mT(t),u=gT(t),h=_T(t),f=vT(t),d=oT(t),g=aT(r),_=s.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(m=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[Tf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Vi?sT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,iT("linearToOutputTexel",t.outputColorSpace),rT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=Rc(o),o=Mf(o,t),o=Sf(o,t),a=Rc(a),a=Mf(a,t),a=Sf(a,t),o=bf(o),a=bf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=w+m+o,M=w+p+a,D=vf(s,s.VERTEX_SHADER,A),C=vf(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,C),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(I){if(n.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(D).trim(),Q=s.getShaderInfoLog(C).trim();let le=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(le=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,D,C);else{const se=yf(s,D,"vertex"),Y=yf(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+se+`
`+Y)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||Q==="")&&(ne=!1);ne&&(I.diagnostics={runnable:le,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(D),s.deleteShader(C),N=new ea(s,_),E=lT(s,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,Qb)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eT++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=C,this}let yT=0;class MT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ST(e),t.set(e,i)),i}}class ST{constructor(e){this.id=yT++,this.code=e,this.usedTimes=0}}function bT(n,e,t,i,s,r,o){const a=new ou,l=new MT,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,I,B,G){const Q=B.fog,le=G.geometry,ne=E.isMeshStandardMaterial?B.environment:null,se=(E.isMeshStandardMaterial?t:e).get(E.envMap||ne),Y=se&&se.mapping===wa?se.image.height:null,ve=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const Te=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Pe=Te!==void 0?Te.length:0;let ze=0;le.morphAttributes.position!==void 0&&(ze=1),le.morphAttributes.normal!==void 0&&(ze=2),le.morphAttributes.color!==void 0&&(ze=3);let tt,oe,ge,Re;if(ve){const ct=Yn[ve];tt=ct.vertexShader,oe=ct.fragmentShader}else tt=E.vertexShader,oe=E.fragmentShader,l.update(E),ge=l.getVertexShaderID(E),Re=l.getFragmentShaderID(E);const ye=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),re=G.isInstancedMesh===!0,te=G.isBatchedMesh===!0,me=!!E.map,T=!!E.matcap,R=!!se,x=!!E.aoMap,q=!!E.lightMap,H=!!E.bumpMap,W=!!E.normalMap,K=!!E.displacementMap,ee=!!E.emissiveMap,$=!!E.metalnessMap,y=!!E.roughnessMap,v=E.anisotropy>0,L=E.clearcoat>0,O=E.dispersion>0,j=E.iridescence>0,X=E.sheen>0,fe=E.transmission>0,ce=v&&!!E.anisotropyMap,Me=L&&!!E.clearcoatMap,xe=L&&!!E.clearcoatNormalMap,ae=L&&!!E.clearcoatRoughnessMap,de=j&&!!E.iridescenceMap,De=j&&!!E.iridescenceThicknessMap,Ie=X&&!!E.sheenColorMap,_e=X&&!!E.sheenRoughnessMap,Fe=!!E.specularMap,Xe=!!E.specularColorMap,mt=!!E.specularIntensityMap,F=fe&&!!E.transmissionMap,Ee=fe&&!!E.thicknessMap,ie=!!E.gradientMap,he=!!E.alphaMap,Ae=E.alphaTest>0,we=!!E.alphaHash,Ye=!!E.extensions;let bt=Vi;E.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Vt={shaderID:ve,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:oe,defines:E.defines,customVertexShaderID:ge,customFragmentShaderID:Re,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:te,batchingColor:te&&G._colorsTexture!==null,instancing:re,instancingColor:re&&G.instanceColor!==null,instancingMorph:re&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:on,alphaToCoverage:!!E.alphaToCoverage,map:me,matcap:T,envMap:R,envMapMode:R&&se.mapping,envMapCubeUVHeight:Y,aoMap:x,lightMap:q,bumpMap:H,normalMap:W,displacementMap:f&&K,emissiveMap:ee,normalMapObjectSpace:W&&E.normalMapType===yv,normalMapTangentSpace:W&&E.normalMapType===iu,metalnessMap:$,roughnessMap:y,anisotropy:v,anisotropyMap:ce,clearcoat:L,clearcoatMap:Me,clearcoatNormalMap:xe,clearcoatRoughnessMap:ae,dispersion:O,iridescence:j,iridescenceMap:de,iridescenceThicknessMap:De,sheen:X,sheenColorMap:Ie,sheenRoughnessMap:_e,specularMap:Fe,specularColorMap:Xe,specularIntensityMap:mt,transmission:fe,transmissionMap:F,thicknessMap:Ee,gradientMap:ie,opaque:E.transparent===!1&&E.blending===hs&&E.alphaToCoverage===!1,alphaMap:he,alphaTest:Ae,alphaHash:we,combine:E.combine,mapUv:me&&_(E.map.channel),aoMapUv:x&&_(E.aoMap.channel),lightMapUv:q&&_(E.lightMap.channel),bumpMapUv:H&&_(E.bumpMap.channel),normalMapUv:W&&_(E.normalMap.channel),displacementMapUv:K&&_(E.displacementMap.channel),emissiveMapUv:ee&&_(E.emissiveMap.channel),metalnessMapUv:$&&_(E.metalnessMap.channel),roughnessMapUv:y&&_(E.roughnessMap.channel),anisotropyMapUv:ce&&_(E.anisotropyMap.channel),clearcoatMapUv:Me&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(E.sheenRoughnessMap.channel),specularMapUv:Fe&&_(E.specularMap.channel),specularColorMapUv:Xe&&_(E.specularColorMap.channel),specularIntensityMapUv:mt&&_(E.specularIntensityMap.channel),transmissionMapUv:F&&_(E.transmissionMap.channel),thicknessMapUv:Ee&&_(E.thicknessMap.channel),alphaMapUv:he&&_(E.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(W||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!le.attributes.uv&&(me||he),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:V,skinning:G.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:me&&E.map.isVideoTexture===!0&&Qe.getTransfer(E.map.colorSpace)===ft,decodeVideoTextureEmissive:ee&&E.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(E.emissiveMap.colorSpace)===ft,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Dn,flipSided:E.side===Lt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ye&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&E.extensions.multiDraw===!0||te)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const I in E.defines)S.push(I),S.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(w(S,E),A(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function w(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function A(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function M(E){const S=g[E.type];let I;if(S){const B=Yn[S];I=fa.clone(B.uniforms)}else I=E.uniforms;return I}function D(E,S){let I;for(let B=0,G=u.length;B<G;B++){const Q=u[B];if(Q.cacheKey===S){I=Q,++I.usedTimes;break}}return I===void 0&&(I=new xT(n,S,E,r),u.push(I)),I}function C(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:D,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:N}}function TT(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ET(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ef(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wf(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||ET),i.length>1&&i.sort(f||Ef),s.length>1&&s.sort(f||Ef)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function wT(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new wf,n.set(i,[o])):s>=r.length?(o=new wf,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ne};break;case"SpotLight":t={position:new U,direction:new U,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function RT(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let CT=0;function PT(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function LT(n){const e=new AT,t=RT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,r=new je,o=new je;function a(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,w=0,A=0,M=0,D=0,C=0,P=0;c.sort(PT);for(let E=0,S=c.length;E<S;E++){const I=c[E],B=I.color,G=I.intensity,Q=I.distance,le=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*G,h+=B.g*G,f+=B.b*G;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(I.sh.coefficients[ne],G);P++}else if(I.isDirectionalLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const se=I.shadow,Y=t.get(I);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.directionalShadow[d]=Y,i.directionalShadowMap[d]=le,i.directionalShadowMatrix[d]=I.shadow.matrix,w++}i.directional[d]=ne,d++}else if(I.isSpotLight){const ne=e.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(B).multiplyScalar(G),ne.distance=Q,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,i.spot[_]=ne;const se=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,se.updateMatrices(I),I.castShadow&&C++),i.spotLightMatrix[_]=se.matrix,I.castShadow){const Y=t.get(I);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=le,M++}_++}else if(I.isRectAreaLight){const ne=e.get(I);ne.color.copy(B).multiplyScalar(G),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=ne,m++}else if(I.isPointLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const se=I.shadow,Y=t.get(I);Y.shadowIntensity=se.intensity,Y.shadowBias=se.bias,Y.shadowNormalBias=se.normalBias,Y.shadowRadius=se.radius,Y.shadowMapSize=se.mapSize,Y.shadowCameraNear=se.camera.near,Y.shadowCameraFar=se.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=le,i.pointShadowMatrix[g]=I.shadow.matrix,A++}i.point[g]=ne,g++}else if(I.isHemisphereLight){const ne=e.get(I);ne.skyColor.copy(I.color).multiplyScalar(G),ne.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[p]=ne,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==_||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==w||N.numPointShadows!==A||N.numSpotShadows!==M||N.numSpotMaps!==D||N.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,N.directionalLength=d,N.pointLength=g,N.spotLength=_,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=w,N.numPointShadows=A,N.numSpotShadows=M,N.numSpotMaps=D,N.numLightProbes=P,i.version=CT++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const A=c[p];if(A.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(A.isSpotLight){const M=i.spot[d];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(A.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Af(n){const e=new LT(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function DT(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Af(n),e.set(s,[a])):r>=o.length?(a=new Af(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const IT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function NT(n,e,t){let i=new cu;const s=new Ue,r=new Ue,o=new st,a=new Cx({depthPacking:xv}),l=new Px,c={},u=t.maxTextureSize,h={[Kn]:Lt,[Lt]:Kn,[Dn]:Dn},f=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:IT,fragmentShader:UT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qd;let p=this.type;this.render=function(C,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const E=n.getRenderTarget(),S=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),B=n.state;B.setBlending(_i),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=p!==hi&&this.type===hi,Q=p===hi&&this.type!==hi;for(let le=0,ne=C.length;le<ne;le++){const se=C[le],Y=se.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const ve=Y.getFrameExtents();if(s.multiply(ve),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ve.x),s.x=r.x*ve.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ve.y),s.y=r.y*ve.y,Y.mapSize.y=r.y)),Y.map===null||G===!0||Q===!0){const Pe=this.type!==hi?{minFilter:rn,magFilter:rn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new zn(s.x,s.y,Pe),Y.map.texture.name=se.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const Te=Y.getViewportCount();for(let Pe=0;Pe<Te;Pe++){const ze=Y.getViewport(Pe);o.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),B.viewport(o),Y.updateMatrices(se,Pe),i=Y.getFrustum(),M(P,N,Y.camera,se,this.type)}Y.isPointLightShadow!==!0&&this.type===hi&&w(Y,N),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,S,I)};function w(C,P){const N=e.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,d.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new zn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(P,null,N,f,_,null),d.uniforms.shadow_pass.value=C.mapPass.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(P,null,N,d,_,null)}function A(C,P,N,E){let S=null;const I=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)S=I;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=S.uuid,G=P.uuid;let Q=c[B];Q===void 0&&(Q={},c[B]=Q);let le=Q[G];le===void 0&&(le=S.clone(),Q[G]=le,P.addEventListener("dispose",D)),S=le}if(S.visible=P.visible,S.wireframe=P.wireframe,E===hi?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:h[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=n.properties.get(S);B.light=N}return S}function M(C,P,N,E,S){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===hi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const G=e.update(C),Q=C.material;if(Array.isArray(Q)){const le=G.groups;for(let ne=0,se=le.length;ne<se;ne++){const Y=le[ne],ve=Q[Y.materialIndex];if(ve&&ve.visible){const Te=A(C,ve,E,S);C.onBeforeShadow(n,C,P,N,G,Te,Y),n.renderBufferDirect(N,null,G,Te,C,Y),C.onAfterShadow(n,C,P,N,G,Te,Y)}}}else if(Q.visible){const le=A(C,Q,E,S);C.onBeforeShadow(n,C,P,N,G,le,null),n.renderBufferDirect(N,null,G,le,C,null),C.onAfterShadow(n,C,P,N,G,le,null)}}const B=C.children;for(let G=0,Q=B.length;G<Q;G++)M(B[G],P,N,E,S)}function D(C){C.target.removeEventListener("dispose",D);for(const N in c){const E=c[N],S=C.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const FT={[Vl]:Gl,[Wl]:ql,[Xl]:Yl,[Ys]:jl,[Gl]:Vl,[ql]:Wl,[Yl]:Xl,[jl]:Ys};function OT(n,e){function t(){let F=!1;const Ee=new st;let ie=null;const he=new st(0,0,0,0);return{setMask:function(Ae){ie!==Ae&&!F&&(n.colorMask(Ae,Ae,Ae,Ae),ie=Ae)},setLocked:function(Ae){F=Ae},setClear:function(Ae,we,Ye,bt,Vt){Vt===!0&&(Ae*=bt,we*=bt,Ye*=bt),Ee.set(Ae,we,Ye,bt),he.equals(Ee)===!1&&(n.clearColor(Ae,we,Ye,bt),he.copy(Ee))},reset:function(){F=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let F=!1,Ee=!1,ie=null,he=null,Ae=null;return{setReversed:function(we){if(Ee!==we){const Ye=e.get("EXT_clip_control");we?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ee=we;const bt=Ae;Ae=null,this.setClear(bt)}},getReversed:function(){return Ee},setTest:function(we){we?ye(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(we){ie!==we&&!F&&(n.depthMask(we),ie=we)},setFunc:function(we){if(Ee&&(we=FT[we]),he!==we){switch(we){case Vl:n.depthFunc(n.NEVER);break;case Gl:n.depthFunc(n.ALWAYS);break;case Wl:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Xl:n.depthFunc(n.EQUAL);break;case jl:n.depthFunc(n.GEQUAL);break;case ql:n.depthFunc(n.GREATER);break;case Yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=we}},setLocked:function(we){F=we},setClear:function(we){Ae!==we&&(Ee&&(we=1-we),n.clearDepth(we),Ae=we)},reset:function(){F=!1,ie=null,he=null,Ae=null,Ee=!1}}}function s(){let F=!1,Ee=null,ie=null,he=null,Ae=null,we=null,Ye=null,bt=null,Vt=null;return{setTest:function(ct){F||(ct?ye(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(ct){Ee!==ct&&!F&&(n.stencilMask(ct),Ee=ct)},setFunc:function(ct,wn,ni){(ie!==ct||he!==wn||Ae!==ni)&&(n.stencilFunc(ct,wn,ni),ie=ct,he=wn,Ae=ni)},setOp:function(ct,wn,ni){(we!==ct||Ye!==wn||bt!==ni)&&(n.stencilOp(ct,wn,ni),we=ct,Ye=wn,bt=ni)},setLocked:function(ct){F=ct},setClear:function(ct){Vt!==ct&&(n.clearStencil(ct),Vt=ct)},reset:function(){F=!1,Ee=null,ie=null,he=null,Ae=null,we=null,Ye=null,bt=null,Vt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,A=null,M=null,D=null,C=null,P=new Ne(0,0,0),N=0,E=!1,S=null,I=null,B=null,G=null,Q=null;const le=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,se=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Y)[1]),ne=se>=1):Y.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),ne=se>=2);let ve=null,Te={};const Pe=n.getParameter(n.SCISSOR_BOX),ze=n.getParameter(n.VIEWPORT),tt=new st().fromArray(Pe),oe=new st().fromArray(ze);function ge(F,Ee,ie,he){const Ae=new Uint8Array(4),we=n.createTexture();n.bindTexture(F,we),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ye=0;Ye<ie;Ye++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Ee,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(Ee+Ye,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return we}const Re={};Re[n.TEXTURE_2D]=ge(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=ge(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=ge(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=ge(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(Ys),H(!1),W(oh),ye(n.CULL_FACE),x(_i);function ye(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function V(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function re(F,Ee){return h[F]!==Ee?(n.bindFramebuffer(F,Ee),h[F]=Ee,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ee),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ee),!0):!1}function te(F,Ee){let ie=d,he=!1;if(F){ie=f.get(Ee),ie===void 0&&(ie=[],f.set(Ee,ie));const Ae=F.textures;if(ie.length!==Ae.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Ye=Ae.length;we<Ye;we++)ie[we]=n.COLOR_ATTACHMENT0+we;ie.length=Ae.length,he=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,he=!0);he&&n.drawBuffers(ie)}function me(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const T={[ls]:n.FUNC_ADD,[W0]:n.FUNC_SUBTRACT,[X0]:n.FUNC_REVERSE_SUBTRACT};T[j0]=n.MIN,T[q0]=n.MAX;const R={[Y0]:n.ZERO,[$0]:n.ONE,[K0]:n.SRC_COLOR,[kl]:n.SRC_ALPHA,[nv]:n.SRC_ALPHA_SATURATE,[ev]:n.DST_COLOR,[J0]:n.DST_ALPHA,[Z0]:n.ONE_MINUS_SRC_COLOR,[Hl]:n.ONE_MINUS_SRC_ALPHA,[tv]:n.ONE_MINUS_DST_COLOR,[Q0]:n.ONE_MINUS_DST_ALPHA,[iv]:n.CONSTANT_COLOR,[sv]:n.ONE_MINUS_CONSTANT_COLOR,[rv]:n.CONSTANT_ALPHA,[ov]:n.ONE_MINUS_CONSTANT_ALPHA};function x(F,Ee,ie,he,Ae,we,Ye,bt,Vt,ct){if(F===_i){_===!0&&(V(n.BLEND),_=!1);return}if(_===!1&&(ye(n.BLEND),_=!0),F!==G0){if(F!==m||ct!==E){if((p!==ls||M!==ls)&&(n.blendEquation(n.FUNC_ADD),p=ls,M=ls),ct)switch(F){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qr:n.blendFunc(n.ONE,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ah:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case lh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,A=null,D=null,C=null,P.set(0,0,0),N=0,m=F,E=ct}return}Ae=Ae||Ee,we=we||ie,Ye=Ye||he,(Ee!==p||Ae!==M)&&(n.blendEquationSeparate(T[Ee],T[Ae]),p=Ee,M=Ae),(ie!==w||he!==A||we!==D||Ye!==C)&&(n.blendFuncSeparate(R[ie],R[he],R[we],R[Ye]),w=ie,A=he,D=we,C=Ye),(bt.equals(P)===!1||Vt!==N)&&(n.blendColor(bt.r,bt.g,bt.b,Vt),P.copy(bt),N=Vt),m=F,E=!1}function q(F,Ee){F.side===Dn?V(n.CULL_FACE):ye(n.CULL_FACE);let ie=F.side===Lt;Ee&&(ie=!ie),H(ie),F.blending===hs&&F.transparent===!1?x(_i):x(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const he=F.stencilWrite;a.setTest(he),he&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ee(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function H(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function W(F){F!==k0?(ye(n.CULL_FACE),F!==I&&(F===oh?n.cullFace(n.BACK):F===H0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),I=F}function K(F){F!==B&&(ne&&n.lineWidth(F),B=F)}function ee(F,Ee,ie){F?(ye(n.POLYGON_OFFSET_FILL),(G!==Ee||Q!==ie)&&(n.polygonOffset(Ee,ie),G=Ee,Q=ie)):V(n.POLYGON_OFFSET_FILL)}function $(F){F?ye(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function y(F){F===void 0&&(F=n.TEXTURE0+le-1),ve!==F&&(n.activeTexture(F),ve=F)}function v(F,Ee,ie){ie===void 0&&(ve===null?ie=n.TEXTURE0+le-1:ie=ve);let he=Te[ie];he===void 0&&(he={type:void 0,texture:void 0},Te[ie]=he),(he.type!==F||he.texture!==Ee)&&(ve!==ie&&(n.activeTexture(ie),ve=ie),n.bindTexture(F,Ee||Re[F]),he.type=F,he.texture=Ee)}function L(){const F=Te[ve];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function O(){try{n.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function X(){try{n.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{n.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{n.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(F){tt.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),tt.copy(F))}function _e(F){oe.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),oe.copy(F))}function Fe(F,Ee){let ie=c.get(Ee);ie===void 0&&(ie=new WeakMap,c.set(Ee,ie));let he=ie.get(F);he===void 0&&(he=n.getUniformBlockIndex(Ee,F.name),ie.set(F,he))}function Xe(F,Ee){const he=c.get(Ee).get(F);l.get(Ee)!==he&&(n.uniformBlockBinding(Ee,he,F.__bindingPointIndex),l.set(Ee,he))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ve=null,Te={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,w=null,A=null,M=null,D=null,C=null,P=new Ne(0,0,0),N=0,E=!1,S=null,I=null,B=null,G=null,Q=null,tt.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:V,bindFramebuffer:re,drawBuffers:te,useProgram:me,setBlending:x,setMaterial:q,setFlipSided:H,setCullFace:W,setLineWidth:K,setPolygonOffset:ee,setScissorTest:$,activeTexture:y,bindTexture:v,unbindTexture:L,compressedTexImage2D:O,compressedTexImage3D:j,texImage2D:de,texImage3D:De,updateUBOMapping:Fe,uniformBlockBinding:Xe,texStorage2D:xe,texStorage3D:ae,texSubImage2D:X,texSubImage3D:fe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Me,scissor:Ie,viewport:_e,reset:mt}}function BT(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,v){return d?new OffscreenCanvas(y,v):eo("canvas")}function _(y,v,L){let O=1;const j=$(y);if((j.width>L||j.height>L)&&(O=L/Math.max(j.width,j.height)),O<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const X=Math.floor(O*j.width),fe=Math.floor(O*j.height);h===void 0&&(h=g(X,fe));const ce=v?g(X,fe):h;return ce.width=X,ce.height=fe,ce.getContext("2d").drawImage(y,0,0,X,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+fe+")."),ce}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(y,v,L,O,j=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let X=v;if(v===n.RED&&(L===n.FLOAT&&(X=n.R32F),L===n.HALF_FLOAT&&(X=n.R16F),L===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.R8UI),L===n.UNSIGNED_SHORT&&(X=n.R16UI),L===n.UNSIGNED_INT&&(X=n.R32UI),L===n.BYTE&&(X=n.R8I),L===n.SHORT&&(X=n.R16I),L===n.INT&&(X=n.R32I)),v===n.RG&&(L===n.FLOAT&&(X=n.RG32F),L===n.HALF_FLOAT&&(X=n.RG16F),L===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RG8UI),L===n.UNSIGNED_SHORT&&(X=n.RG16UI),L===n.UNSIGNED_INT&&(X=n.RG32UI),L===n.BYTE&&(X=n.RG8I),L===n.SHORT&&(X=n.RG16I),L===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGB8UI),L===n.UNSIGNED_SHORT&&(X=n.RGB16UI),L===n.UNSIGNED_INT&&(X=n.RGB32UI),L===n.BYTE&&(X=n.RGB8I),L===n.SHORT&&(X=n.RGB16I),L===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(L===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),L===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),L===n.UNSIGNED_INT&&(X=n.RGBA32UI),L===n.BYTE&&(X=n.RGBA8I),L===n.SHORT&&(X=n.RGBA16I),L===n.INT&&(X=n.RGBA32I)),v===n.RGB&&L===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),v===n.RGBA){const fe=j?ua:Qe.getTransfer(O);L===n.FLOAT&&(X=n.RGBA32F),L===n.HALF_FLOAT&&(X=n.RGBA16F),L===n.UNSIGNED_BYTE&&(X=fe===ft?n.SRGB8_ALPHA8:n.RGBA8),L===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),L===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function M(y,v){let L;return y?v===null||v===fs||v===$r?L=n.DEPTH24_STENCIL8:v===Nn?L=n.DEPTH32F_STENCIL8:v===Yr&&(L=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===fs||v===$r?L=n.DEPTH_COMPONENT24:v===Nn?L=n.DEPTH_COMPONENT32F:v===Yr&&(L=n.DEPTH_COMPONENT16),L}function D(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==rn&&y.minFilter!==gn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function C(y){const v=y.target;v.removeEventListener("dispose",C),N(v),v.isVideoTexture&&u.delete(v)}function P(y){const v=y.target;v.removeEventListener("dispose",P),S(v)}function N(y){const v=i.get(y);if(v.__webglInit===void 0)return;const L=y.source,O=f.get(L);if(O){const j=O[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(y),Object.keys(O).length===0&&f.delete(L)}i.remove(y)}function E(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const L=y.source,O=f.get(L);delete O[v.__cacheKey],o.memory.textures--}function S(y){const v=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(v.__webglFramebuffer[O]))for(let j=0;j<v.__webglFramebuffer[O].length;j++)n.deleteFramebuffer(v.__webglFramebuffer[O][j]);else n.deleteFramebuffer(v.__webglFramebuffer[O]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[O])}else{if(Array.isArray(v.__webglFramebuffer))for(let O=0;O<v.__webglFramebuffer.length;O++)n.deleteFramebuffer(v.__webglFramebuffer[O]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let O=0;O<v.__webglColorRenderbuffer.length;O++)v.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[O]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const L=y.textures;for(let O=0,j=L.length;O<j;O++){const X=i.get(L[O]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(L[O])}i.remove(y)}let I=0;function B(){I=0}function G(){const y=I;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),I+=1,y}function Q(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function le(y,v){const L=i.get(y);if(y.isVideoTexture&&K(y),y.isRenderTargetTexture===!1&&y.version>0&&L.__version!==y.version){const O=y.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(L,y,v);return}}t.bindTexture(n.TEXTURE_2D,L.__webglTexture,n.TEXTURE0+v)}function ne(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){oe(L,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,L.__webglTexture,n.TEXTURE0+v)}function se(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){oe(L,y,v);return}t.bindTexture(n.TEXTURE_3D,L.__webglTexture,n.TEXTURE0+v)}function Y(y,v){const L=i.get(y);if(y.version>0&&L.__version!==y.version){ge(L,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+v)}const ve={[Zs]:n.REPEAT,[zi]:n.CLAMP_TO_EDGE,[ca]:n.MIRRORED_REPEAT},Te={[rn]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[br]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[jo]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},Pe={[Mv]:n.NEVER,[Av]:n.ALWAYS,[Sv]:n.LESS,[rp]:n.LEQUAL,[bv]:n.EQUAL,[wv]:n.GEQUAL,[Tv]:n.GREATER,[Ev]:n.NOTEQUAL};function ze(y,v){if(v.type===Nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===gn||v.magFilter===jo||v.magFilter===br||v.magFilter===mi||v.minFilter===gn||v.minFilter===jo||v.minFilter===br||v.minFilter===mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ve[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ve[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ve[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,Te[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,Te[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==br&&v.minFilter!==mi||v.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const L=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function tt(y,v){let L=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",C));const O=v.source;let j=f.get(O);j===void 0&&(j={},f.set(O,j));const X=Q(v);if(X!==y.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),j[X].usedTimes++;const fe=j[y.__cacheKey];fe!==void 0&&(j[y.__cacheKey].usedTimes--,fe.usedTimes===0&&E(v)),y.__cacheKey=X,y.__webglTexture=j[X].texture}return L}function oe(y,v,L){let O=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(O=n.TEXTURE_3D);const j=tt(y,v),X=v.source;t.bindTexture(O,y.__webglTexture,n.TEXTURE0+L);const fe=i.get(X);if(X.version!==fe.__version||j===!0){t.activeTexture(n.TEXTURE0+L);const ce=Qe.getPrimaries(Qe.workingColorSpace),Me=v.colorSpace===Oi?null:Qe.getPrimaries(v.colorSpace),xe=v.colorSpace===Oi||ce===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ae=_(v.image,!1,s.maxTextureSize);ae=ee(v,ae);const de=r.convert(v.format,v.colorSpace),De=r.convert(v.type);let Ie=A(v.internalFormat,de,De,v.colorSpace,v.isVideoTexture);ze(O,v);let _e;const Fe=v.mipmaps,Xe=v.isVideoTexture!==!0,mt=fe.__version===void 0||j===!0,F=X.dataReady,Ee=D(v,ae);if(v.isDepthTexture)Ie=M(v.format===Zr,v.type),mt&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,Ie,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,de,De,null));else if(v.isDataTexture)if(Fe.length>0){Xe&&mt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ie,Fe[0].width,Fe[0].height);for(let ie=0,he=Fe.length;ie<he;ie++)_e=Fe[ie],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,_e.width,_e.height,de,De,_e.data):t.texImage2D(n.TEXTURE_2D,ie,Ie,_e.width,_e.height,0,de,De,_e.data);v.generateMipmaps=!1}else Xe?(mt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ie,ae.width,ae.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,de,De,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,ae.width,ae.height,0,de,De,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xe&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ie,Fe[0].width,Fe[0].height,ae.depth);for(let ie=0,he=Fe.length;ie<he;ie++)if(_e=Fe[ie],v.format!==bn)if(de!==null)if(Xe){if(F)if(v.layerUpdates.size>0){const Ae=nf(_e.width,_e.height,v.format,v.type);for(const we of v.layerUpdates){const Ye=_e.data.subarray(we*Ae/_e.data.BYTES_PER_ELEMENT,(we+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,we,_e.width,_e.height,1,de,Ye)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,ae.depth,de,_e.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ie,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,ae.depth,de,De,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ie,_e.width,_e.height,ae.depth,0,de,De,_e.data)}else{Xe&&mt&&t.texStorage2D(n.TEXTURE_2D,Ee,Ie,Fe[0].width,Fe[0].height);for(let ie=0,he=Fe.length;ie<he;ie++)_e=Fe[ie],v.format!==bn?de!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,_e.width,_e.height,de,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,_e.width,_e.height,de,De,_e.data):t.texImage2D(n.TEXTURE_2D,ie,Ie,_e.width,_e.height,0,de,De,_e.data)}else if(v.isDataArrayTexture)if(Xe){if(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ee,Ie,ae.width,ae.height,ae.depth),F)if(v.layerUpdates.size>0){const ie=nf(ae.width,ae.height,v.format,v.type);for(const he of v.layerUpdates){const Ae=ae.data.subarray(he*ie/ae.data.BYTES_PER_ELEMENT,(he+1)*ie/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,ae.width,ae.height,1,de,De,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,de,De,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,de,De,ae.data);else if(v.isData3DTexture)Xe?(mt&&t.texStorage3D(n.TEXTURE_3D,Ee,Ie,ae.width,ae.height,ae.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,de,De,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,de,De,ae.data);else if(v.isFramebufferTexture){if(mt)if(Xe)t.texStorage2D(n.TEXTURE_2D,Ee,Ie,ae.width,ae.height);else{let ie=ae.width,he=ae.height;for(let Ae=0;Ae<Ee;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ie,ie,he,0,de,De,null),ie>>=1,he>>=1}}else if(Fe.length>0){if(Xe&&mt){const ie=$(Fe[0]);t.texStorage2D(n.TEXTURE_2D,Ee,Ie,ie.width,ie.height)}for(let ie=0,he=Fe.length;ie<he;ie++)_e=Fe[ie],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de,De,_e):t.texImage2D(n.TEXTURE_2D,ie,Ie,de,De,_e);v.generateMipmaps=!1}else if(Xe){if(mt){const ie=$(ae);t.texStorage2D(n.TEXTURE_2D,Ee,Ie,ie.width,ie.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,de,De,ae)}else t.texImage2D(n.TEXTURE_2D,0,Ie,de,De,ae);m(v)&&p(O),fe.__version=X.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function ge(y,v,L){if(v.image.length!==6)return;const O=tt(y,v),j=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+L);const X=i.get(j);if(j.version!==X.__version||O===!0){t.activeTexture(n.TEXTURE0+L);const fe=Qe.getPrimaries(Qe.workingColorSpace),ce=v.colorSpace===Oi?null:Qe.getPrimaries(v.colorSpace),Me=v.colorSpace===Oi||fe===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,ae=v.image[0]&&v.image[0].isDataTexture,de=[];for(let he=0;he<6;he++)!xe&&!ae?de[he]=_(v.image[he],!0,s.maxCubemapSize):de[he]=ae?v.image[he].image:v.image[he],de[he]=ee(v,de[he]);const De=de[0],Ie=r.convert(v.format,v.colorSpace),_e=r.convert(v.type),Fe=A(v.internalFormat,Ie,_e,v.colorSpace),Xe=v.isVideoTexture!==!0,mt=X.__version===void 0||O===!0,F=j.dataReady;let Ee=D(v,De);ze(n.TEXTURE_CUBE_MAP,v);let ie;if(xe){Xe&&mt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,De.width,De.height);for(let he=0;he<6;he++){ie=de[he].mipmaps;for(let Ae=0;Ae<ie.length;Ae++){const we=ie[Ae];v.format!==bn?Ie!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,we.width,we.height,Ie,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,we.width,we.height,Ie,_e,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,Fe,we.width,we.height,0,Ie,_e,we.data)}}}else{if(ie=v.mipmaps,Xe&&mt){ie.length>0&&Ee++;const he=$(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Fe,he.width,he.height)}for(let he=0;he<6;he++)if(ae){Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,de[he].width,de[he].height,Ie,_e,de[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Fe,de[he].width,de[he].height,0,Ie,_e,de[he].data);for(let Ae=0;Ae<ie.length;Ae++){const Ye=ie[Ae].image[he].image;Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Ye.width,Ye.height,Ie,_e,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,Fe,Ye.width,Ye.height,0,Ie,_e,Ye.data)}}else{Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie,_e,de[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Fe,Ie,_e,de[he]);for(let Ae=0;Ae<ie.length;Ae++){const we=ie[Ae];Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Ie,_e,we.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,Fe,Ie,_e,we.image[he])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),X.__version=j.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Re(y,v,L,O,j,X){const fe=r.convert(L.format,L.colorSpace),ce=r.convert(L.type),Me=A(L.internalFormat,fe,ce,L.colorSpace),xe=i.get(v),ae=i.get(L);if(ae.__renderTarget=v,!xe.__hasExternalTextures){const de=Math.max(1,v.width>>X),De=Math.max(1,v.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,Me,de,De,v.depth,0,fe,ce,null):t.texImage2D(j,X,Me,de,De,0,fe,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),W(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,j,ae.__webglTexture,0,H(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,j,ae.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(y,v,L){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const O=v.depthTexture,j=O&&O.isDepthTexture?O.type:null,X=M(v.stencilBuffer,j),fe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=H(v);W(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,X,v.width,v.height):L?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,y)}else{const O=v.textures;for(let j=0;j<O.length;j++){const X=O[j],fe=r.convert(X.format,X.colorSpace),ce=r.convert(X.type),Me=A(X.internalFormat,fe,ce,X.colorSpace),xe=H(v);L&&W(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,Me,v.width,v.height):W(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,Me,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,Me,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(v.depthTexture);O.__renderTarget=v,(!O.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),le(v.depthTexture,0);const j=O.__webglTexture,X=H(v);if(v.depthTexture.format===Kr)W(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(v.depthTexture.format===Zr)W(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function re(y){const v=i.get(y),L=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const O=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),O){const j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,O.removeEventListener("dispose",j)};O.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=O}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");const O=y.texture.mipmaps;O&&O.length>0?V(v.__webglFramebuffer[0],y):V(v.__webglFramebuffer,y)}else if(L){v.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[O]),v.__webglDepthbuffer[O]===void 0)v.__webglDepthbuffer[O]=n.createRenderbuffer(),ye(v.__webglDepthbuffer[O],y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{const O=y.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ye(v.__webglDepthbuffer,y,!1);else{const j=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function te(y,v,L){const O=i.get(y);v!==void 0&&Re(O.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),L!==void 0&&re(y)}function me(y){const v=y.texture,L=i.get(y),O=i.get(v);y.addEventListener("dispose",P);const j=y.textures,X=y.isWebGLCubeRenderTarget===!0,fe=j.length>1;if(fe||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=v.version,o.memory.textures++),X){L.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[ce]=[];for(let Me=0;Me<v.mipmaps.length;Me++)L.__webglFramebuffer[ce][Me]=n.createFramebuffer()}else L.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)L.__webglFramebuffer[ce]=n.createFramebuffer()}else L.__webglFramebuffer=n.createFramebuffer();if(fe)for(let ce=0,Me=j.length;ce<Me;ce++){const xe=i.get(j[ce]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&W(y)===!1){L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ce=0;ce<j.length;ce++){const Me=j[ce];L.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,L.__webglColorRenderbuffer[ce]);const xe=r.convert(Me.format,Me.colorSpace),ae=r.convert(Me.type),de=A(Me.internalFormat,xe,ae,Me.colorSpace,y.isXRRenderTarget===!0),De=H(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,de,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,L.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(L.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),ze(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Re(L.__webglFramebuffer[ce][Me],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Me);else Re(L.__webglFramebuffer[ce],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ce=0,Me=j.length;ce<Me;ce++){const xe=j[ce],ae=i.get(xe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ze(n.TEXTURE_2D,xe),Re(L.__webglFramebuffer,y,xe,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(xe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(ce=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,O.__webglTexture),ze(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let Me=0;Me<v.mipmaps.length;Me++)Re(L.__webglFramebuffer[Me],y,v,n.COLOR_ATTACHMENT0,ce,Me);else Re(L.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,ce,0);m(v)&&p(ce),t.unbindTexture()}y.depthBuffer&&re(y)}function T(y){const v=y.textures;for(let L=0,O=v.length;L<O;L++){const j=v[L];if(m(j)){const X=w(y),fe=i.get(j).__webglTexture;t.bindTexture(X,fe),p(X),t.unbindTexture()}}}const R=[],x=[];function q(y){if(y.samples>0){if(W(y)===!1){const v=y.textures,L=y.width,O=y.height;let j=n.COLOR_BUFFER_BIT;const X=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(y),ce=v.length>1;if(ce)for(let xe=0;xe<v.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const Me=y.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let xe=0;xe<v.length;xe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);const ae=i.get(v[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,L,O,0,0,L,O,j,n.NEAREST),l===!0&&(R.length=0,x.length=0,R.push(n.COLOR_ATTACHMENT0+xe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(R.push(X),x.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let xe=0;xe<v.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,fe.__webglColorRenderbuffer[xe]);const ae=i.get(v[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function H(y){return Math.min(s.maxSamples,y.samples)}function W(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function K(y){const v=o.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function ee(y,v){const L=y.colorSpace,O=y.format,j=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||L!==on&&L!==Oi&&(Qe.getTransfer(L)===ft?(O!==bn||j!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),v}function $(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=se,this.setTextureCube=Y,this.rebindTextures=te,this.setupRenderTarget=me,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=W}function zT(n,e){function t(i,s=Oi){let r;const o=Qe.getTransfer(s);if(i===Zn)return n.UNSIGNED_BYTE;if(i===Zc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Jc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zd)return n.BYTE;if(i===Jd)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===Kc)return n.INT;if(i===fs)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===vi)return n.HALF_FLOAT;if(i===ep)return n.ALPHA;if(i===tp)return n.RGB;if(i===bn)return n.RGBA;if(i===Kr)return n.DEPTH_COMPONENT;if(i===Zr)return n.DEPTH_STENCIL;if(i===Qc)return n.RED;if(i===eu)return n.RED_INTEGER;if(i===np)return n.RG;if(i===tu)return n.RG_INTEGER;if(i===nu)return n.RGBA_INTEGER;if(i===qo||i===Yo||i===$o||i===Ko)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===Jl||i===Ql||i===ec)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===tc||i===nc||i===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===tc||i===nc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ic)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===hc||i===fc||i===dc||i===pc||i===mc||i===gc||i===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===sc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ac)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===vc||i===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Zo)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ip||i===yc||i===Mc||i===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===yc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const kT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Dt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new sn({vertexShader:kT,fragmentShader:HT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new vt(new Aa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GT extends ps{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new VT,m=t.getContextAttributes();let p=null,w=null;const A=[],M=[],D=new Ue;let C=null;const P=new tn;P.viewport=new st;const N=new tn;N.viewport=new st;const E=[P,N],S=new Jx;let I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ge=A[oe];return ge===void 0&&(ge=new hl,A[oe]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(oe){let ge=A[oe];return ge===void 0&&(ge=new hl,A[oe]=ge),ge.getGripSpace()},this.getHand=function(oe){let ge=A[oe];return ge===void 0&&(ge=new hl,A[oe]=ge),ge.getHandSpace()};function G(oe){const ge=M.indexOf(oe.inputSource);if(ge===-1)return;const Re=A[ge];Re!==void 0&&(Re.update(oe.inputSource,oe.frame,c||o),Re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function Q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",le);for(let oe=0;oe<A.length;oe++){const ge=M[oe];ge!==null&&(M[oe]=null,A[oe].disconnect(ge))}I=null,B=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,w=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",le),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(D),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ye=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=m.stencil?Zr:Kr,ye=m.stencil?$r:fs);const re={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(re),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),w=new zn(f.textureWidth,f.textureHeight,{format:bn,type:Zn,depthTexture:new vp(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),w=new zn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function le(oe){for(let ge=0;ge<oe.removed.length;ge++){const Re=oe.removed[ge],ye=M.indexOf(Re);ye>=0&&(M[ye]=null,A[ye].disconnect(Re))}for(let ge=0;ge<oe.added.length;ge++){const Re=oe.added[ge];let ye=M.indexOf(Re);if(ye===-1){for(let re=0;re<A.length;re++)if(re>=M.length){M.push(Re),ye=re;break}else if(M[re]===null){M[re]=Re,ye=re;break}if(ye===-1)break}const V=A[ye];V&&V.connect(Re)}}const ne=new U,se=new U;function Y(oe,ge,Re){ne.setFromMatrixPosition(ge.matrixWorld),se.setFromMatrixPosition(Re.matrixWorld);const ye=ne.distanceTo(se),V=ge.projectionMatrix.elements,re=Re.projectionMatrix.elements,te=V[14]/(V[10]-1),me=V[14]/(V[10]+1),T=(V[9]+1)/V[5],R=(V[9]-1)/V[5],x=(V[8]-1)/V[0],q=(re[8]+1)/re[0],H=te*x,W=te*q,K=ye/(-x+q),ee=K*-x;if(ge.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ee),oe.translateZ(K),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),V[10]===-1)oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const $=te+K,y=me+K,v=H-ee,L=W+(ye-ee),O=T*me/y*$,j=R*me/y*$;oe.projectionMatrix.makePerspective(v,L,O,j,$,y),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function ve(oe,ge){ge===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ge.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let ge=oe.near,Re=oe.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(Re=_.depthFar)),S.near=N.near=P.near=ge,S.far=N.far=P.far=Re,(I!==S.near||B!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),I=S.near,B=S.far),P.layers.mask=oe.layers.mask|2,N.layers.mask=oe.layers.mask|4,S.layers.mask=P.layers.mask|N.layers.mask;const ye=oe.parent,V=S.cameras;ve(S,ye);for(let re=0;re<V.length;re++)ve(V[re],ye);V.length===2?Y(S,P,N):S.projectionMatrix.copy(P.projectionMatrix),Te(oe,S,ye)};function Te(oe,ge,Re){Re===null?oe.matrix.copy(ge.matrixWorld):(oe.matrix.copy(Re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ge.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ge.projectionMatrix),oe.projectionMatrixInverse.copy(ge.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Js*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Pe=null;function ze(oe,ge){if(u=ge.getViewerPose(c||o),g=ge,u!==null){const Re=u.views;d!==null&&(e.setRenderTargetFramebuffer(w,d.framebuffer),e.setRenderTarget(w));let ye=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,ye=!0);for(let te=0;te<Re.length;te++){const me=Re[te];let T=null;if(d!==null)T=d.getViewport(me);else{const x=h.getViewSubImage(f,me);T=x.viewport,te===0&&(e.setRenderTargetTextures(w,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(w))}let R=E[te];R===void 0&&(R=new tn,R.layers.enable(te),R.viewport=new st,E[te]=R),R.matrix.fromArray(me.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(me.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(T.x,T.y,T.width,T.height),te===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ye===!0&&S.cameras.push(R)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const te=h.getDepthInformation(Re[0]);te&&te.isValid&&te.texture&&_.init(e,te,s.renderState)}}for(let Re=0;Re<A.length;Re++){const ye=M[Re],V=A[Re];ye!==null&&V!==void 0&&V.update(ye,ge,c||o)}Pe&&Pe(oe,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}const tt=new Sp;tt.setAnimationLoop(ze),this.setAnimationLoop=function(oe){Pe=oe},this.dispose=function(){}}}const is=new Vn,WT=new je;function XT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,fp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,A,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Lt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Lt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),A=w.envMap,M=w.envMapRotation;A&&(m.envMap.value=A,is.copy(M),is.x*=-1,is.y*=-1,is.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(WT.makeRotationFromEuler(is)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=A*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Lt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function jT(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const M=A.program;i.uniformBlockBinding(w,M)}function c(w,A){let M=s[w.id];M===void 0&&(g(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));const D=A.program;i.updateUBOMapping(w,D);const C=e.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function u(w){const A=h();w.__bindingPointIndex=A;const M=n.createBuffer(),D=w.__size,C=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,D,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const A=s[w.id],M=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let C=0,P=M.length;C<P;C++){const N=Array.isArray(M[C])?M[C]:[M[C]];for(let E=0,S=N.length;E<S;E++){const I=N[E];if(d(I,C,E,D)===!0){const B=I.__offset,G=Array.isArray(I.value)?I.value:[I.value];let Q=0;for(let le=0;le<G.length;le++){const ne=G[le],se=_(ne);typeof ne=="number"||typeof ne=="boolean"?(I.__data[0]=ne,n.bufferSubData(n.UNIFORM_BUFFER,B+Q,I.__data)):ne.isMatrix3?(I.__data[0]=ne.elements[0],I.__data[1]=ne.elements[1],I.__data[2]=ne.elements[2],I.__data[3]=0,I.__data[4]=ne.elements[3],I.__data[5]=ne.elements[4],I.__data[6]=ne.elements[5],I.__data[7]=0,I.__data[8]=ne.elements[6],I.__data[9]=ne.elements[7],I.__data[10]=ne.elements[8],I.__data[11]=0):(ne.toArray(I.__data,Q),Q+=se.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,B,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,A,M,D){const C=w.value,P=A+"_"+M;if(D[P]===void 0)return typeof C=="number"||typeof C=="boolean"?D[P]=C:D[P]=C.clone(),!0;{const N=D[P];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return D[P]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function g(w){const A=w.uniforms;let M=0;const D=16;for(let P=0,N=A.length;P<N;P++){const E=Array.isArray(A[P])?A[P]:[A[P]];for(let S=0,I=E.length;S<I;S++){const B=E[S],G=Array.isArray(B.value)?B.value:[B.value];for(let Q=0,le=G.length;Q<le;Q++){const ne=G[Q],se=_(ne),Y=M%D,ve=Y%se.boundary,Te=Y+ve;M+=ve,Te!==0&&D-Te<se.storage&&(M+=D-Te),B.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=se.storage}}}const C=M%D;return C>0&&(M+=D-C),w.__size=M,w.__cache={},this}function _(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function m(w){const A=w.target;A.removeEventListener("dispose",m);const M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class qT{constructor(e={}){const{canvas:t=Wv(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=zt;let C=0,P=0,N=null,E=-1,S=null;const I=new st,B=new st;let G=null;const Q=new Ne(0);let le=0,ne=t.width,se=t.height,Y=1,ve=null,Te=null;const Pe=new st(0,0,ne,se),ze=new st(0,0,ne,se);let tt=!1;const oe=new cu;let ge=!1,Re=!1;const ye=new je,V=new je,re=new U,te=new st,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let T=!1;function R(){return N===null?Y:1}let x=i;function q(b,z){return t.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yc}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",we,!1),x===null){const z="webgl2";if(x=q(z,b),x===null)throw q(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let H,W,K,ee,$,y,v,L,O,j,X,fe,ce,Me,xe,ae,de,De,Ie,_e,Fe,Xe,mt,F;function Ee(){H=new ib(x),H.init(),Xe=new zT(x,H),W=new KS(x,H,e,Xe),K=new OT(x,H),W.reverseDepthBuffer&&f&&K.buffers.depth.setReversed(!0),ee=new ob(x),$=new TT,y=new BT(x,H,K,$,W,Xe,ee),v=new JS(M),L=new nb(M),O=new fy(x),mt=new YS(x,O),j=new sb(x,O,ee,mt),X=new lb(x,j,O,ee),Ie=new ab(x,W,y),ae=new ZS($),fe=new bT(M,v,L,H,W,mt,ae),ce=new XT(M,$),Me=new wT,xe=new DT(H),De=new qS(M,v,L,K,X,d,l),de=new NT(M,X,W),F=new jT(x,ee,W,K),_e=new $S(x,H,ee),Fe=new rb(x,H,ee),ee.programs=fe.programs,M.capabilities=W,M.extensions=H,M.properties=$,M.renderLists=Me,M.shadowMap=de,M.state=K,M.info=ee}Ee();const ie=new GT(M,x);this.xr=ie,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const b=H.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=H.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(b){b!==void 0&&(Y=b,this.setSize(ne,se,!1))},this.getSize=function(b){return b.set(ne,se)},this.setSize=function(b,z,Z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,se=z,t.width=Math.floor(b*Y),t.height=Math.floor(z*Y),Z===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(ne*Y,se*Y).floor()},this.setDrawingBufferSize=function(b,z,Z){ne=b,se=z,Y=Z,t.width=Math.floor(b*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(I)},this.getViewport=function(b){return b.copy(Pe)},this.setViewport=function(b,z,Z,J){b.isVector4?Pe.set(b.x,b.y,b.z,b.w):Pe.set(b,z,Z,J),K.viewport(I.copy(Pe).multiplyScalar(Y).round())},this.getScissor=function(b){return b.copy(ze)},this.setScissor=function(b,z,Z,J){b.isVector4?ze.set(b.x,b.y,b.z,b.w):ze.set(b,z,Z,J),K.scissor(B.copy(ze).multiplyScalar(Y).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(b){K.setScissorTest(tt=b)},this.setOpaqueSort=function(b){ve=b},this.setTransparentSort=function(b){Te=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,Z=!0){let J=0;if(b){let k=!1;if(N!==null){const pe=N.texture.format;k=pe===nu||pe===tu||pe===eu}if(k){const pe=N.texture.type,be=pe===Zn||pe===fs||pe===Yr||pe===$r||pe===Zc||pe===Jc,Ce=De.getClearColor(),Le=De.getClearAlpha(),Ge=Ce.r,Ve=Ce.g,Oe=Ce.b;be?(g[0]=Ge,g[1]=Ve,g[2]=Oe,g[3]=Le,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=Ge,_[1]=Ve,_[2]=Oe,_[3]=Le,x.clearBufferiv(x.COLOR,0,_))}else J|=x.COLOR_BUFFER_BIT}z&&(J|=x.DEPTH_BUFFER_BIT),Z&&(J|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",we,!1),De.dispose(),Me.dispose(),xe.dispose(),$.dispose(),v.dispose(),L.dispose(),X.dispose(),mt.dispose(),F.dispose(),fe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",_u),ie.removeEventListener("sessionend",vu),ji.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=ee.autoReset,z=de.enabled,Z=de.autoUpdate,J=de.needsUpdate,k=de.type;Ee(),ee.autoReset=b,de.enabled=z,de.autoUpdate=Z,de.needsUpdate=J,de.type=k}function we(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ye(b){const z=b.target;z.removeEventListener("dispose",Ye),bt(z)}function bt(b){Vt(b),$.remove(b)}function Vt(b){const z=$.get(b).programs;z!==void 0&&(z.forEach(function(Z){fe.releaseProgram(Z)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Z,J,k,pe){z===null&&(z=me);const be=k.isMesh&&k.matrixWorld.determinant()<0,Ce=Dp(b,z,Z,J,k);K.setMaterial(J,be);let Le=Z.index,Ge=1;if(J.wireframe===!0){if(Le=j.getWireframeAttribute(Z),Le===void 0)return;Ge=2}const Ve=Z.drawRange,Oe=Z.attributes.position;let et=Ve.start*Ge,rt=(Ve.start+Ve.count)*Ge;pe!==null&&(et=Math.max(et,pe.start*Ge),rt=Math.min(rt,(pe.start+pe.count)*Ge)),Le!==null?(et=Math.max(et,0),rt=Math.min(rt,Le.count)):Oe!=null&&(et=Math.max(et,0),rt=Math.min(rt,Oe.count));const Rt=rt-et;if(Rt<0||Rt===1/0)return;mt.setup(k,J,Ce,Z,Le);let Tt,nt=_e;if(Le!==null&&(Tt=O.get(Le),nt=Fe,nt.setIndex(Tt)),k.isMesh)J.wireframe===!0?(K.setLineWidth(J.wireframeLinewidth*R()),nt.setMode(x.LINES)):nt.setMode(x.TRIANGLES);else if(k.isLine){let Be=J.linewidth;Be===void 0&&(Be=1),K.setLineWidth(Be*R()),k.isLineSegments?nt.setMode(x.LINES):k.isLineLoop?nt.setMode(x.LINE_LOOP):nt.setMode(x.LINE_STRIP)}else k.isPoints?nt.setMode(x.POINTS):k.isSprite&&nt.setMode(x.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Jo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Be=k._multiDrawStarts,Bt=k._multiDrawCounts,ot=k._multiDrawCount,An=Le?O.get(Le).bytesPerElement:1,ms=$.get(J).currentProgram.getUniforms();for(let hn=0;hn<ot;hn++)ms.setValue(x,"_gl_DrawID",hn),nt.render(Be[hn]/An,Bt[hn])}else if(k.isInstancedMesh)nt.renderInstances(et,Rt,k.count);else if(Z.isInstancedBufferGeometry){const Be=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Bt=Math.min(Z.instanceCount,Be);nt.renderInstances(et,Rt,Bt)}else nt.render(et,Rt)};function ct(b,z,Z){b.transparent===!0&&b.side===Dn&&b.forceSinglePass===!1?(b.side=Lt,b.needsUpdate=!0,lo(b,z,Z),b.side=Kn,b.needsUpdate=!0,lo(b,z,Z),b.side=Dn):lo(b,z,Z)}this.compile=function(b,z,Z=null){Z===null&&(Z=b),p=xe.get(Z),p.init(z),A.push(p),Z.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==Z&&b.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const J=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const pe=k.material;if(pe)if(Array.isArray(pe))for(let be=0;be<pe.length;be++){const Ce=pe[be];ct(Ce,Z,k),J.add(Ce)}else ct(pe,Z,k),J.add(pe)}),p=A.pop(),J},this.compileAsync=function(b,z,Z=null){const J=this.compile(b,z,Z);return new Promise(k=>{function pe(){if(J.forEach(function(be){$.get(be).currentProgram.isReady()&&J.delete(be)}),J.size===0){k(b);return}setTimeout(pe,10)}H.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let wn=null;function ni(b){wn&&wn(b)}function _u(){ji.stop()}function vu(){ji.start()}const ji=new Sp;ji.setAnimationLoop(ni),typeof self<"u"&&ji.setContext(self),this.setAnimationLoop=function(b){wn=b,ie.setAnimationLoop(b),b===null?ji.stop():ji.start()},ie.addEventListener("sessionstart",_u),ie.addEventListener("sessionend",vu),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(z),z=ie.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,z,N),p=xe.get(b,A.length),p.init(z),A.push(p),V.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),oe.setFromProjectionMatrix(V),Re=this.localClippingEnabled,ge=ae.init(this.clippingPlanes,Re),m=Me.get(b,w.length),m.init(),w.push(m),ie.enabled===!0&&ie.isPresenting===!0){const pe=M.xr.getDepthSensingMesh();pe!==null&&La(pe,z,-1/0,M.sortObjects)}La(b,z,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(ve,Te),T=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,T&&De.addToRenderList(m,b),this.info.render.frame++,ge===!0&&ae.beginShadows();const Z=p.state.shadowsArray;de.render(Z,b,z),ge===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,k=m.transmissive;if(p.setupLights(),z.isArrayCamera){const pe=z.cameras;if(k.length>0)for(let be=0,Ce=pe.length;be<Ce;be++){const Le=pe[be];yu(J,k,b,Le)}T&&De.render(b);for(let be=0,Ce=pe.length;be<Ce;be++){const Le=pe[be];xu(m,b,Le,Le.viewport)}}else k.length>0&&yu(J,k,b,z),T&&De.render(b),xu(m,b,z);N!==null&&P===0&&(y.updateMultisampleRenderTarget(N),y.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(M,b,z),mt.resetDefaultState(),E=-1,S=null,A.pop(),A.length>0?(p=A[A.length-1],ge===!0&&ae.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function La(b,z,Z,J){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||oe.intersectsSprite(b)){J&&te.setFromMatrixPosition(b.matrixWorld).applyMatrix4(V);const be=X.update(b),Ce=b.material;Ce.visible&&m.push(b,be,Ce,Z,te.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||oe.intersectsObject(b))){const be=X.update(b),Ce=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),te.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),te.copy(be.boundingSphere.center)),te.applyMatrix4(b.matrixWorld).applyMatrix4(V)),Array.isArray(Ce)){const Le=be.groups;for(let Ge=0,Ve=Le.length;Ge<Ve;Ge++){const Oe=Le[Ge],et=Ce[Oe.materialIndex];et&&et.visible&&m.push(b,be,et,Z,te.z,Oe)}}else Ce.visible&&m.push(b,be,Ce,Z,te.z,null)}}const pe=b.children;for(let be=0,Ce=pe.length;be<Ce;be++)La(pe[be],z,Z,J)}function xu(b,z,Z,J){const k=b.opaque,pe=b.transmissive,be=b.transparent;p.setupLightsView(Z),ge===!0&&ae.setGlobalState(M.clippingPlanes,Z),J&&K.viewport(I.copy(J)),k.length>0&&ao(k,z,Z),pe.length>0&&ao(pe,z,Z),be.length>0&&ao(be,z,Z),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function yu(b,z,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new zn(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?vi:Zn,minFilter:mi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const pe=p.state.transmissionRenderTarget[J.id],be=J.viewport||I;pe.setSize(be.z*M.transmissionResolutionScale,be.w*M.transmissionResolutionScale);const Ce=M.getRenderTarget();M.setRenderTarget(pe),M.getClearColor(Q),le=M.getClearAlpha(),le<1&&M.setClearColor(16777215,.5),M.clear(),T&&De.render(Z);const Le=M.toneMapping;M.toneMapping=Vi;const Ge=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),ge===!0&&ae.setGlobalState(M.clippingPlanes,J),ao(b,Z,J),y.updateMultisampleRenderTarget(pe),y.updateRenderTargetMipmap(pe),H.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Oe=0,et=z.length;Oe<et;Oe++){const rt=z[Oe],Rt=rt.object,Tt=rt.geometry,nt=rt.material,Be=rt.group;if(nt.side===Dn&&Rt.layers.test(J.layers)){const Bt=nt.side;nt.side=Lt,nt.needsUpdate=!0,Mu(Rt,Z,J,Tt,nt,Be),nt.side=Bt,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(y.updateMultisampleRenderTarget(pe),y.updateRenderTargetMipmap(pe))}M.setRenderTarget(Ce),M.setClearColor(Q,le),Ge!==void 0&&(J.viewport=Ge),M.toneMapping=Le}function ao(b,z,Z){const J=z.isScene===!0?z.overrideMaterial:null;for(let k=0,pe=b.length;k<pe;k++){const be=b[k],Ce=be.object,Le=be.geometry,Ge=be.group;let Ve=be.material;Ve.allowOverride===!0&&J!==null&&(Ve=J),Ce.layers.test(Z.layers)&&Mu(Ce,z,Z,Le,Ve,Ge)}}function Mu(b,z,Z,J,k,pe){b.onBeforeRender(M,z,Z,J,k,pe),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(M,z,Z,J,b,pe),k.transparent===!0&&k.side===Dn&&k.forceSinglePass===!1?(k.side=Lt,k.needsUpdate=!0,M.renderBufferDirect(Z,z,J,k,b,pe),k.side=Kn,k.needsUpdate=!0,M.renderBufferDirect(Z,z,J,k,b,pe),k.side=Dn):M.renderBufferDirect(Z,z,J,k,b,pe),b.onAfterRender(M,z,Z,J,k,pe)}function lo(b,z,Z){z.isScene!==!0&&(z=me);const J=$.get(b),k=p.state.lights,pe=p.state.shadowsArray,be=k.state.version,Ce=fe.getParameters(b,k.state,pe,z,Z),Le=fe.getProgramCacheKey(Ce);let Ge=J.programs;J.environment=b.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(b.isMeshStandardMaterial?L:v).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Ge===void 0&&(b.addEventListener("dispose",Ye),Ge=new Map,J.programs=Ge);let Ve=Ge.get(Le);if(Ve!==void 0){if(J.currentProgram===Ve&&J.lightsStateVersion===be)return bu(b,Ce),Ve}else Ce.uniforms=fe.getUniforms(b),b.onBeforeCompile(Ce,M),Ve=fe.acquireProgram(Ce,Le),Ge.set(Le,Ve),J.uniforms=Ce.uniforms;const Oe=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=ae.uniform),bu(b,Ce),J.needsLights=Up(b),J.lightsStateVersion=be,J.needsLights&&(Oe.ambientLightColor.value=k.state.ambient,Oe.lightProbe.value=k.state.probe,Oe.directionalLights.value=k.state.directional,Oe.directionalLightShadows.value=k.state.directionalShadow,Oe.spotLights.value=k.state.spot,Oe.spotLightShadows.value=k.state.spotShadow,Oe.rectAreaLights.value=k.state.rectArea,Oe.ltc_1.value=k.state.rectAreaLTC1,Oe.ltc_2.value=k.state.rectAreaLTC2,Oe.pointLights.value=k.state.point,Oe.pointLightShadows.value=k.state.pointShadow,Oe.hemisphereLights.value=k.state.hemi,Oe.directionalShadowMap.value=k.state.directionalShadowMap,Oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Oe.spotShadowMap.value=k.state.spotShadowMap,Oe.spotLightMatrix.value=k.state.spotLightMatrix,Oe.spotLightMap.value=k.state.spotLightMap,Oe.pointShadowMap.value=k.state.pointShadowMap,Oe.pointShadowMatrix.value=k.state.pointShadowMatrix),J.currentProgram=Ve,J.uniformsList=null,Ve}function Su(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=ea.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function bu(b,z){const Z=$.get(b);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function Dp(b,z,Z,J,k){z.isScene!==!0&&(z=me),y.resetTextureUnits();const pe=z.fog,be=J.isMeshStandardMaterial?z.environment:null,Ce=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:on,Le=(J.isMeshStandardMaterial?L:v).get(J.envMap||be),Ge=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Oe=!!Z.morphAttributes.position,et=!!Z.morphAttributes.normal,rt=!!Z.morphAttributes.color;let Rt=Vi;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=M.toneMapping);const Tt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,nt=Tt!==void 0?Tt.length:0,Be=$.get(J),Bt=p.state.lights;if(ge===!0&&(Re===!0||b!==S)){const Kt=b===S&&J.id===E;ae.setState(J,b,Kt)}let ot=!1;J.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Bt.state.version||Be.outputColorSpace!==Ce||k.isBatchedMesh&&Be.batching===!1||!k.isBatchedMesh&&Be.batching===!0||k.isBatchedMesh&&Be.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Be.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Be.instancing===!1||!k.isInstancedMesh&&Be.instancing===!0||k.isSkinnedMesh&&Be.skinning===!1||!k.isSkinnedMesh&&Be.skinning===!0||k.isInstancedMesh&&Be.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Be.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Be.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Be.instancingMorph===!1&&k.morphTexture!==null||Be.envMap!==Le||J.fog===!0&&Be.fog!==pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ae.numPlanes||Be.numIntersection!==ae.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==Ve||Be.morphTargets!==Oe||Be.morphNormals!==et||Be.morphColors!==rt||Be.toneMapping!==Rt||Be.morphTargetsCount!==nt)&&(ot=!0):(ot=!0,Be.__version=J.version);let An=Be.currentProgram;ot===!0&&(An=lo(J,z,k));let ms=!1,hn=!1,ur=!1;const yt=An.getUniforms(),vn=Be.uniforms;if(K.useProgram(An.program)&&(ms=!0,hn=!0,ur=!0),J.id!==E&&(E=J.id,hn=!0),ms||S!==b){K.buffers.depth.getReversed()?(ye.copy(b.projectionMatrix),jv(ye),qv(ye),yt.setValue(x,"projectionMatrix",ye)):yt.setValue(x,"projectionMatrix",b.projectionMatrix),yt.setValue(x,"viewMatrix",b.matrixWorldInverse);const an=yt.map.cameraPosition;an!==void 0&&an.setValue(x,re.setFromMatrixPosition(b.matrixWorld)),W.logarithmicDepthBuffer&&yt.setValue(x,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&yt.setValue(x,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,hn=!0,ur=!0)}if(k.isSkinnedMesh){yt.setOptional(x,k,"bindMatrix"),yt.setOptional(x,k,"bindMatrixInverse");const Kt=k.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),yt.setValue(x,"boneTexture",Kt.boneTexture,y))}k.isBatchedMesh&&(yt.setOptional(x,k,"batchingTexture"),yt.setValue(x,"batchingTexture",k._matricesTexture,y),yt.setOptional(x,k,"batchingIdTexture"),yt.setValue(x,"batchingIdTexture",k._indirectTexture,y),yt.setOptional(x,k,"batchingColorTexture"),k._colorsTexture!==null&&yt.setValue(x,"batchingColorTexture",k._colorsTexture,y));const xn=Z.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Ie.update(k,Z,An),(hn||Be.receiveShadow!==k.receiveShadow)&&(Be.receiveShadow=k.receiveShadow,yt.setValue(x,"receiveShadow",k.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(vn.envMap.value=Le,vn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(vn.envMapIntensity.value=z.environmentIntensity),hn&&(yt.setValue(x,"toneMappingExposure",M.toneMappingExposure),Be.needsLights&&Ip(vn,ur),pe&&J.fog===!0&&ce.refreshFogUniforms(vn,pe),ce.refreshMaterialUniforms(vn,J,Y,se,p.state.transmissionRenderTarget[b.id]),ea.upload(x,Su(Be),vn,y)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ea.upload(x,Su(Be),vn,y),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&yt.setValue(x,"center",k.center),yt.setValue(x,"modelViewMatrix",k.modelViewMatrix),yt.setValue(x,"normalMatrix",k.normalMatrix),yt.setValue(x,"modelMatrix",k.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Kt=J.uniformsGroups;for(let an=0,Da=Kt.length;an<Da;an++){const qi=Kt[an];F.update(qi,An),F.bind(qi,An)}}return An}function Ip(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Up(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,z,Z){const J=$.get(b);J.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),$.get(b.texture).__webglTexture=z,$.get(b.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:Z,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const Z=$.get(b);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const Np=x.createFramebuffer();this.setRenderTarget=function(b,z=0,Z=0){N=b,C=z,P=Z;let J=!0,k=null,pe=!1,be=!1;if(b){const Le=$.get(b);if(Le.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(x.FRAMEBUFFER,null),J=!1;else if(Le.__webglFramebuffer===void 0)y.setupRenderTarget(b);else if(Le.__hasExternalTextures)y.rebindTextures(b,$.get(b.texture).__webglTexture,$.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Oe=b.depthTexture;if(Le.__boundDepthTexture!==Oe){if(Oe!==null&&$.has(Oe)&&(b.width!==Oe.image.width||b.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(b)}}const Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);const Ve=$.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?k=Ve[z][Z]:k=Ve[z],pe=!0):b.samples>0&&y.useMultisampledRTT(b)===!1?k=$.get(b).__webglMultisampledFramebuffer:Array.isArray(Ve)?k=Ve[Z]:k=Ve,I.copy(b.viewport),B.copy(b.scissor),G=b.scissorTest}else I.copy(Pe).multiplyScalar(Y).floor(),B.copy(ze).multiplyScalar(Y).floor(),G=tt;if(Z!==0&&(k=Np),K.bindFramebuffer(x.FRAMEBUFFER,k)&&J&&K.drawBuffers(b,k),K.viewport(I),K.scissor(B),K.setScissorTest(G),pe){const Le=$.get(b.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+z,Le.__webglTexture,Z)}else if(be){const Le=$.get(b.texture),Ge=z;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Le.__webglTexture,Z,Ge)}else if(b!==null&&Z!==0){const Le=$.get(b.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Le.__webglTexture,Z)}E=-1},this.readRenderTargetPixels=function(b,z,Z,J,k,pe,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce){K.bindFramebuffer(x.FRAMEBUFFER,Ce);try{const Le=b.texture,Ge=Le.format,Ve=Le.type;if(!W.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-J&&Z>=0&&Z<=b.height-k&&x.readPixels(z,Z,J,k,Xe.convert(Ge),Xe.convert(Ve),pe)}finally{const Le=N!==null?$.get(N).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,z,Z,J,k,pe,be){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=$.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Ce=Ce[be]),Ce)if(z>=0&&z<=b.width-J&&Z>=0&&Z<=b.height-k){K.bindFramebuffer(x.FRAMEBUFFER,Ce);const Le=b.texture,Ge=Le.format,Ve=Le.type;if(!W.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Oe=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Oe),x.bufferData(x.PIXEL_PACK_BUFFER,pe.byteLength,x.STREAM_READ),x.readPixels(z,Z,J,k,Xe.convert(Ge),Xe.convert(Ve),0);const et=N!==null?$.get(N).__webglFramebuffer:null;K.bindFramebuffer(x.FRAMEBUFFER,et);const rt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Xv(x,rt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Oe),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,pe),x.deleteBuffer(Oe),x.deleteSync(rt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,Z=0){const J=Math.pow(2,-Z),k=Math.floor(b.image.width*J),pe=Math.floor(b.image.height*J),be=z!==null?z.x:0,Ce=z!==null?z.y:0;y.setTexture2D(b,0),x.copyTexSubImage2D(x.TEXTURE_2D,Z,0,0,be,Ce,k,pe),K.unbindTexture()};const Fp=x.createFramebuffer(),Op=x.createFramebuffer();this.copyTextureToTexture=function(b,z,Z=null,J=null,k=0,pe=null){pe===null&&(k!==0?(Jo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=k,k=0):pe=0);let be,Ce,Le,Ge,Ve,Oe,et,rt,Rt;const Tt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(Z!==null)be=Z.max.x-Z.min.x,Ce=Z.max.y-Z.min.y,Le=Z.isBox3?Z.max.z-Z.min.z:1,Ge=Z.min.x,Ve=Z.min.y,Oe=Z.isBox3?Z.min.z:0;else{const xn=Math.pow(2,-k);be=Math.floor(Tt.width*xn),Ce=Math.floor(Tt.height*xn),b.isDataArrayTexture?Le=Tt.depth:b.isData3DTexture?Le=Math.floor(Tt.depth*xn):Le=1,Ge=0,Ve=0,Oe=0}J!==null?(et=J.x,rt=J.y,Rt=J.z):(et=0,rt=0,Rt=0);const nt=Xe.convert(z.format),Be=Xe.convert(z.type);let Bt;z.isData3DTexture?(y.setTexture3D(z,0),Bt=x.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(y.setTexture2DArray(z,0),Bt=x.TEXTURE_2D_ARRAY):(y.setTexture2D(z,0),Bt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,z.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,z.unpackAlignment);const ot=x.getParameter(x.UNPACK_ROW_LENGTH),An=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ms=x.getParameter(x.UNPACK_SKIP_PIXELS),hn=x.getParameter(x.UNPACK_SKIP_ROWS),ur=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,Tt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,Tt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ge),x.pixelStorei(x.UNPACK_SKIP_ROWS,Ve),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Oe);const yt=b.isDataArrayTexture||b.isData3DTexture,vn=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const xn=$.get(b),Kt=$.get(z),an=$.get(xn.__renderTarget),Da=$.get(Kt.__renderTarget);K.bindFramebuffer(x.READ_FRAMEBUFFER,an.__webglFramebuffer),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,Da.__webglFramebuffer);for(let qi=0;qi<Le;qi++)yt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,$.get(b).__webglTexture,k,Oe+qi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,$.get(z).__webglTexture,pe,Rt+qi)),x.blitFramebuffer(Ge,Ve,be,Ce,et,rt,be,Ce,x.DEPTH_BUFFER_BIT,x.NEAREST);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(k!==0||b.isRenderTargetTexture||$.has(b)){const xn=$.get(b),Kt=$.get(z);K.bindFramebuffer(x.READ_FRAMEBUFFER,Fp),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,Op);for(let an=0;an<Le;an++)yt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,xn.__webglTexture,k,Oe+an):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,xn.__webglTexture,k),vn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Kt.__webglTexture,pe,Rt+an):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Kt.__webglTexture,pe),k!==0?x.blitFramebuffer(Ge,Ve,be,Ce,et,rt,be,Ce,x.COLOR_BUFFER_BIT,x.NEAREST):vn?x.copyTexSubImage3D(Bt,pe,et,rt,Rt+an,Ge,Ve,be,Ce):x.copyTexSubImage2D(Bt,pe,et,rt,Ge,Ve,be,Ce);K.bindFramebuffer(x.READ_FRAMEBUFFER,null),K.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else vn?b.isDataTexture||b.isData3DTexture?x.texSubImage3D(Bt,pe,et,rt,Rt,be,Ce,Le,nt,Be,Tt.data):z.isCompressedArrayTexture?x.compressedTexSubImage3D(Bt,pe,et,rt,Rt,be,Ce,Le,nt,Tt.data):x.texSubImage3D(Bt,pe,et,rt,Rt,be,Ce,Le,nt,Be,Tt):b.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,pe,et,rt,be,Ce,nt,Be,Tt.data):b.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,pe,et,rt,Tt.width,Tt.height,nt,Tt.data):x.texSubImage2D(x.TEXTURE_2D,pe,et,rt,be,Ce,nt,Be,Tt);x.pixelStorei(x.UNPACK_ROW_LENGTH,ot),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,An),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ms),x.pixelStorei(x.UNPACK_SKIP_ROWS,hn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,ur),pe===0&&z.generateMipmaps&&x.generateMipmap(Bt),K.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Z=null,J=null,k=0){return Jo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,Z,J,k)},this.initRenderTarget=function(b){$.get(b).__webglFramebuffer===void 0&&y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?y.setTextureCube(b,0):b.isData3DTexture?y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?y.setTexture2DArray(b,0):y.setTexture2D(b,0),K.unbindTexture()},this.resetState=function(){C=0,P=0,N=null,K.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}const Rf={type:"change"},gu={type:"start"},Ap={type:"end"},Ho=new rr,Cf=new Ni,YT=Math.cos(70*op.DEG2RAD),It=new U,ln=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Tl=1e-6;class $T extends uy{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gs.ROTATE,MIDDLE:Gs.DOLLY,RIGHT:Gs.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Jn,this._lastTargetPosition=new U,this._quat=new Jn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new tf,this._sphericalDelta=new tf,this._scale=1,this._panOffset=new U,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new U,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ZT.bind(this),this._onPointerDown=KT.bind(this),this._onPointerUp=JT.bind(this),this._onContextMenu=rE.bind(this),this._onMouseWheel=tE.bind(this),this._onKeyDown=nE.bind(this),this._onTouchStart=iE.bind(this),this._onTouchMove=sE.bind(this),this._onMouseDown=QT.bind(this),this._onMouseMove=eE.bind(this),this._interceptControlDown=oE.bind(this),this._interceptControlUp=aE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rf),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;It.copy(t).sub(this.target),It.applyQuaternion(this._quat),this._spherical.setFromVector3(It),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ln:i>Math.PI&&(i-=ln),s<-Math.PI?s+=ln:s>Math.PI&&(s-=ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(It.setFromSpherical(this._spherical),It.applyQuaternion(this._quatInverse),t.copy(this.target).add(It),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=It.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=It.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<YT?this.object.lookAt(this.target):(Cf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(Cf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Tl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Tl||this._lastTargetPosition.distanceToSquared(this.target)>Tl?(this.dispatchEvent(Rf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ln/60*this.autoRotateSpeed*e:ln/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){It.setFromMatrixColumn(t,0),It.multiplyScalar(-e),this._panOffset.add(It)}_panUp(e,t){this.screenSpacePanning===!0?It.setFromMatrixColumn(t,1):(It.setFromMatrixColumn(t,0),It.crossVectors(this.object.up,It)),It.multiplyScalar(e),this._panOffset.add(It)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;It.copy(s).sub(this.target);let r=It.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ln*this._rotateDelta.x/t.clientHeight),this._rotateUp(ln*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function KT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function ZT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function JT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ap),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function QT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=dt.DOLLY;break;case Gs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}break;case Gs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(gu)}function eE(n){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function tE(n){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(n.preventDefault(),this.dispatchEvent(gu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Ap))}function nE(n){this.enabled!==!1&&this._handleKeyDown(n)}function iE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Us.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=dt.TOUCH_ROTATE;break;case Us.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case Us.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=dt.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(gu)}function sE(n){switch(this._trackPointer(n),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=dt.NONE}}function rE(n){this.enabled!==!1&&n.preventDefault()}function oE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pf(n,e){if(e===_v)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===bc||e===sp){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===bc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class lE extends lr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new dE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new ME(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new AE(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Or.extractUrlBase(e);o=Or.resolveURL(c,this.path)}else o=Or.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rp){try{o[Je.KHR_BINARY_GLTF]=new RE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new HE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:o[h]=new hE;break;case Je.KHR_DRACO_MESH_COMPRESSION:o[h]=new CE(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:o[h]=new PE;break;case Je.KHR_MESH_QUANTIZATION:o[h]=new LE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function cE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uE{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ne(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],on);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Is(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qo(u),c.distance=h;break;case"spot":c=new qx(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class hE{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return un}extendParams(e,t,i){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],on),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,zt))}return Promise.all(s)}}class fE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class dE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(a,a)}return Promise.all(r)}}class pE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class mE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class gE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],on)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,zt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class _E{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class vE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(a[0],a[1],a[2],on),Promise.all(r)}}class xE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class yE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(a[0],a[1],a[2],on),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,zt)),Promise.all(r)}}class ME{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class SE{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:ti}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class bE{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class TE{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class EE{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class wE{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class AE{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new je,m=new U,p=new Jn,w=new U(1,1,1),A=new bx(g.geometry,g.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&w.fromBufferAttribute(l.SCALE,M),A.setMatrixAt(M,_.compose(m,p,w));for(const M in l)if(M==="_COLOR_0"){const D=l[M];A.instanceColor=new Ec(D.array,D.itemSize,D.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Mt.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),d.push(A)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Rp="glTF",Mr=12,Lf={JSON:1313821514,BIN:5130562};class RE{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Mr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Mr,r=new DataView(e,Mr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Lf.JSON){const c=new Uint8Array(e,Mr+o,a);this.content=i.decode(c)}else if(l===Lf.BIN){const c=Mr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class CE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Cc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Cc[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Xs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,on,f)})})}}class PE{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class LE{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Cp extends so{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,w=1-m,A=p-f+h;for(let M=0;M!==a;M++){const D=o[_+M+a],C=o[_+M+l]*u,P=o[g+M+a],N=o[g+M]*u;r[M]=w*D+A*C+m*P+p*N}return r}}const DE=new Jn;class IE extends Cp{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return DE.fromArray(r).normalize().toArray(r),r}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Xs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Df={9728:rn,9729:gn,9984:Kd,9985:jo,9986:br,9987:mi},If={33071:zi,33648:ca,10497:Zs},El={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Li={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},UE={CUBICSPLINE:void 0,LINEAR:Qr,STEP:Jr},wl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function NE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Ra({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Kn})),n.DefaultMaterial}function ss(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function di(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function FE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function OE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function BE(n){let e;const t=n.extensions&&n.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Al(t.attributes):e=n.indices+":"+Al(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Al(n.targets[i]);return e}function Al(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Pc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const kE=new je;class HE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new Wx(this.options.manager):this.textureLoader=new Zx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ss(r,a,s),di(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Or.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=El[s.type],a=Xs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new St(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=El[s.type],c=Xs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),w="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let A=t.cache.get(w);A||(_=new c(a,p*d,s.count*d/u),A=new vx(_,d/u),t.cache.add(w,A)),m=new au(A,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new St(_,l,g);if(s.sparse!==void 0){const p=El.SCALAR,w=Xs[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,D=new w(o[1],A,s.sparse.count*p),C=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,N=D.length;P<N;P++){const E=D[P];if(m.setX(E,C[P*l]),l>=2&&m.setY(E,C[P*l+1]),l>=3&&m.setZ(E,C[P*l+2]),l>=4&&m.setW(E,C[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Df[f.magFilter]||gn,u.minFilter=Df[f.minFilter]||mi,u.wrapS=If[f.wrapS]||Zs,u.wrapT=If[f.wrapT]||Zs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==rn&&u.minFilter!==gn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Dt(_);m.needsUpdate=!0,f(m)}),t.load(Or.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),di(h,o),h.userData.mimeType=o.mimeType||zE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Fr,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _p,kn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ra}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ne(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],on),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,zt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Dn);const u=r.alphaMode||wl.OPAQUE;if(u===wl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===wl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==un&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==un&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==un){const h=r.emissiveFactor;a.emissive=new Ne().setRGB(h[0],h[1],h[2],on)}return r.emissiveTexture!==void 0&&o!==un&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,zt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),di(h,r),t.associations.set(h,{materials:e}),r.extensions&&ss(s,h,r),h})}createUniqueName(e){const t=ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Uf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=BE(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Uf(new $t,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?NE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const w=c[d];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new yx(_,w):new vt(_,w),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?p.geometry=Pf(p.geometry,sp):m.mode===Sn.TRIANGLE_FAN&&(p.geometry=Pf(p.geometry,bc));else if(m.mode===Sn.LINES)p=new wx(_,w);else if(m.mode===Sn.LINE_STRIP)p=new uu(_,w);else if(m.mode===Sn.LINE_LOOP)p=new Ax(_,w);else if(m.mode===Sn.POINTS)p=new Tr(_,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&OE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),di(p,r),m.extensions&&ss(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&ss(s,h[0],r),h[0];const f=new Fn;r.extensions&&ss(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new tn(op.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ca(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),di(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new je;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lu(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,w=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",w)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let w=0,A=f.length;w<A;w++){const M=f[w],D=d[w],C=g[w],P=_[w],N=m[w];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const E=i._createAnimationTracks(M,D,C,P,N);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new Ox(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,kE)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new mp:c.length>1?u=new Fn:c.length===1?u=c[0]:u=new Mt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),di(u,r),r.extensions&&ss(i,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Fn;i.name&&(r.name=s.createUniqueName(i.name)),di(r,i),i.extensions&&ss(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof kn||f instanceof Dt)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Li[r.path]===Li.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Li[r.path]){case Li.weights:c=er;break;case Li.rotation:c=tr;break;case Li.translation:case Li.scale:c=nr;break;default:switch(i.itemSize){case 1:c=er;break;case 2:case 3:default:c=nr;break}break}const u=s.interpolation!==void 0?UE[s.interpolation]:Qr,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+Li[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Pc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof tr?IE:Cp;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function VE(n,e,t){const i=e.attributes,s=new Qn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new U(l[0],l[1],l[2]),new U(c[0],c[1],c[2])),a.normalized){const u=Pc(Xs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new U,l=new U;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=Pc(Xs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new ei;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Uf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Cc[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Qe.workingColorSpace!==on&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),di(n,e),VE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?FE(n,e.targets,t):n})}const ta={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class oo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const GE=new Ca(-1,1,1,-1,0,1);class WE extends $t{constructor(){super(),this.setAttribute("position",new Ht([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ht([0,2,0,0,2,0],2))}}const XE=new WE;class Pp{constructor(e){this._mesh=new vt(XE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,GE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Lp extends oo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=fa.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Nf extends oo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class jE extends oo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qE{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ue);this._width=i.width,this._height=i.height,t=new zn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Lp(ta),this.copyPass.material.blending=_i,this.clock=new Qx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Nf!==void 0&&(o instanceof Nf?i=!0:o instanceof jE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class YE extends oo{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ne}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const $E={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ne(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ir extends oo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Ue(e.x,e.y):new Ue(256,256),this.clearColor=new Ne(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new zn(r,o,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new zn(r,o,{type:vi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new zn(r,o,{type:vi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=$E;this.highPassUniforms=fa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ue(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fa.clone(ta.uniforms),this.blendMaterial=new sn({uniforms:this.copyUniforms,vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,blending:qr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ne,this._oldClearAlpha=1,this._basic=new un,this._fsQuad=new Pp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ue(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ir.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ir.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new sn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ue(.5,.5)},direction:{value:new Ue(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new sn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ir.BlurDirectionX=new Ue(1,0);ir.BlurDirectionY=new Ue(0,1);const wr=[{id:"about",name:"À propos",modelName:"mercure.glb",description:"Mon nom est Enzo Martinez, j'ai 21 ans et je suis étudiant en tant que Master expert en développement full stack à Ynov Montpellier. Je vous présente mon porfolio inspiré du jeu Outer Wilds. Mon portfolio est une invitation à explorer mes compétences et mes projets dans un environnement ludique et immersif. J'ai essayé de rendre la chose la plus immersive possible et j'ai toujours des idées pour améliorer le concept.",size:.7,orbitRadius:8,orbitSpeed:.1,rotationSpeed:.005,color:8947848,atmosphereColor:8947848,initialAngle:Math.PI*.5,texture:{diffuse:"#22c55e",roughness:.6,metalness:.1,emissive:4352}},{id:"skills",name:"Compétences",modelName:"mars.glb",description:"Maîtrise des technologies front-end modernes avec une expertise particulière en JavaScript, TypeScript, Vue.js et React. Conception d'interfaces utilisateur intuitives et responsive avec un souci du détail et de l'expérience utilisateur. J'ai aussi participé à des projets académiques et personnels, mettant en avant mes compétences en développement web et backend.",size:.6,orbitRadius:12,orbitSpeed:.05,rotationSpeed:.003,atmosphereColor:11674146,initialAngle:Math.PI*1.1,projects:[{title:"Maîtrise Front-end",description:"JavaScript, TypeScript, Vue.js, React",image:"/images/LogoFrontend.png",technologies:["JavaScript","TypeScript","Vue.js","React"]},{title:"Design & UI/UX",description:"Interfaces responsive, animations fluides, expérience utilisateur",image:"/images/LogoDesign.png",technologies:["CSS/SASS","Tailwind","Animations","Gsap"]},{title:"Compétences backend",description:"Node.js, MongoDB, API REST, gestion de bases de données",image:"/images/Logobackend.png",technologies:["Node.js","GraphQL","MongoDB","API REST"]}]},{id:"projects",name:"Projets",modelName:"jupiter.glb",description:"Découvrez une sélection de mes projets personnels et académiques, reflétant ma passion pour le développement web et ma capacité à créer des applications fonctionnelles et esthétiques.",size:.9,orbitRadius:16,orbitSpeed:.08,rotationSpeed:.004,color:1982639,atmosphereColor:13808780,initialAngle:Math.PI*1.7,projects:[{title:"React Blog",description:"Blog react avec connexion API",image:"/images/ReactDrapeau.png",technologies:["reactjs","SASS","axios","json-server"],github:"https://github.com/Inosthful/ReactDrapeau",demo:"https://reactdb.netlify.app/"},{title:"Application React 3d ",description:"Application 3D avec react-three-fiber et visulisation de données",image:"/images/ReactThree.png",technologies:["JSX","React","Threejs"],github:"https://github.com/Inosthful/React3D",demo:"https://github.com/Inosthful/React3D"}]},{id:"contact",name:"Contact",modelName:"earth.glb",description:"Si vous souhaitez me contacter, n'hésitez pas à m'envoyer un message via mon mail : 'enzo.martinez34@ynov.com'. Je suis toujours ouvert à de nouvelles opportunités et collaborations.",size:.8,orbitRadius:14,orbitSpeed:.02,rotationSpeed:.002,color:2776234,atmosphereColor:2776234,initialAngle:Math.PI*.8},{id:"experience",name:"Expérience",modelName:"neptune.glb",description:"Mon parcours professionnel et académique, incluant mes stages, projets d'études et contributions qui ont façonné mon expertise en développement web.",size:.8,orbitRadius:20,orbitSpeed:.09,rotationSpeed:.002,color:14427686,atmosphereColor:3029639,initialAngle:Math.PI*.2}],KE=_n({__name:"SolarSystem3D",props:{planets:{type:Array,required:!0},activePlanet:{type:String,default:""},quality:{type:String,default:"high"}},emits:["navigate","loading-progress","loading-complete","update-performance-stats"],setup(n,{emit:e}){const t=n,i=Et(null);let s,r,o,a,l,c,u,h=[],f=[],d,g,_,m=!1,p;Et(!1);const w=Et({fps:0,frameTime:0,triangles:0,drawCalls:0,memory:0}),A=Et("high");let M=0,D=performance.now();const C=e,P=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,N=async()=>{var V;m=P(),C("loading-progress",10),s=new _x,s.background=new Ne(0),r=new tn(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.set(0,5,25),C("loading-progress",20),o=new qT({antialias:!m,alpha:!0,powerPreference:"high-performance"}),o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.shadowMap.enabled=!0,o.shadowMap.type=zl,o.shadowMap.autoUpdate=!1,o.toneMapping=Yd,o.toneMappingExposure=1.5,(V=i.value)==null||V.appendChild(o.domElement),C("loading-progress",30),a=new $T(r,o.domElement),a.enableDamping=!0,a.dampingFactor=.05,a.minDistance=5,a.maxDistance=50,a.enablePan=!1,p=new lE,C("loading-progress",40),E(),g=new cy,_=new Ue,C("loading-progress",50),Re(t.quality),await S(),C("loading-progress",70),I(),C("loading-progress",80),B(),C("loading-progress",90),Q(),le(),C("loading-progress",100),C("loading-complete")},E=()=>{l=new qE(o);const V=new YE(s,r);l.addPass(V),c=new ir(new Ue(window.innerWidth,window.innerHeight),.6,.4,.75),l.addPass(c);const re={uniforms:{tDiffuse:{value:null},time:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform sampler2D tDiffuse;
      uniform float time;
      varying vec2 vUv;
      void main() {
        vec4 color = texture2D(tDiffuse, vUv);
        color.rgb *= 1.05;
        float flicker = sin(time * 2.0 + vUv.x * 10.0) * 0.015;
        color.rgb += flicker;
        gl_FragColor = color;
      }
    `},te=new Lp(re);l.addPass(te)},S=async()=>{const V={id:"sun",name:"Soleil",modelName:"sun.glb",size:2};V.modelUrl="/portfolio-outer-wilds-clean/"+V.modelName;try{u=await oe(V),u.traverse(T=>{T.isMesh&&T.material&&(T.material.emissive=new Ne(16771899),T.material.emissiveIntensity=1,T.material.needsUpdate=!0,T.castShadow=!1,T.receiveShadow=!1)}),u.castShadow=!1,u.receiveShadow=!1,s.add(u)}catch(T){console.error("Erreur lors du chargement du soleil GLB, utilisation de la texture par défaut:",T);const R=new Ln(2,64,64),x=tt(),q=new un({map:x,emissive:16771899,emissiveIntensity:1});u=new vt(R,q),u.castShadow=!1,u.receiveShadow=!1,s.add(u)}const re=new Ln(2.4,64,64),te=new un({color:16729344,transparent:!0,opacity:.1,side:Lt}),me=new vt(re,te);s.add(me);for(let T=0;T<wr.length;T++){const R=wr[T],x=new Fn;R.modelUrl="/portfolio-outer-wilds-clean/"+R.modelName;const q=await oe(R);q.userData={planetId:R.id,planetData:R};const H=R.initialAngle;q.position.set(Math.cos(H)*R.orbitRadius,0,Math.sin(H)*R.orbitRadius),x.add(q);const W=G(R);W.position.copy(q.position),x.add(W);const K=new hu(R.orbitRadius-.01,R.orbitRadius+.01,128),ee=new un({color:16777215,transparent:!0,opacity:.12,side:Dn}),$=new vt(K,ee);$.rotation.x=Math.PI/2,x.add($),s.add(x),h.push(q),f.push(x)}},I=()=>{const V=new Kx(16777215,.6);s.add(V);const re=new Is(16777215,3);re.position.set(10,20,10),re.castShadow=!0,re.shadow.mapSize.width=1024,re.shadow.mapSize.height=1024,re.shadow.camera.near=.5,re.shadow.camera.far=100,re.shadow.camera.left=-50,re.shadow.camera.right=50,re.shadow.camera.top=50,re.shadow.camera.bottom=-50,s.add(re);const te=new Qo(16775388,1,50);te.position.set(0,0,0),te.castShadow=!0,te.shadow.mapSize.width=1024,te.shadow.mapSize.height=1024,s.add(te);const me=new Is(16770229,2);me.position.set(-20,10,-20),s.add(me);const T=new Is(15135743,1.8);T.position.set(20,-10,20),s.add(T);const R=new Is(16773350,1.5);R.position.set(0,-15,0),s.add(R);const x=new Xx(16777215,4473924,1.5);s.add(x);const q=new Qo(16769213,4,120);q.position.set(0,-30,-30),s.add(q);const H=new Qo(14743295,3.5,120);H.position.set(30,0,30),s.add(H);const W=new Is(16777215,1);W.position.set(0,0,-20),s.add(W)},B=()=>{const re=new $t,te=new Float32Array(1e3*3),me=new Float32Array(1e3),T=new Float32Array(1e3*3);for(let O=0;O<1e3;O++){const j=O*3,X=100+Math.random()*400,fe=Math.random()*Math.PI*2,ce=Math.acos(2*Math.random()-1);te[j]=X*Math.sin(ce)*Math.cos(fe),te[j+1]=X*Math.sin(ce)*Math.sin(fe),te[j+2]=X*Math.cos(ce),me[O]=Math.random()*1.2;const Me=new Ne;Me.setHSL(.6+Math.random()*.1,.8,.5+Math.random()*.3),T[j]=Me.r,T[j+1]=Me.g,T[j+2]=Me.b}re.setAttribute("position",new St(te,3)),re.setAttribute("size",new St(me,1)),re.setAttribute("color",new St(T,3));const R=new Fr({size:.7,vertexColors:!0,transparent:!0,opacity:.7,sizeAttenuation:!0,depthWrite:!1}),x=new Tr(re,R);s.add(x);const q=600,H=new $t,W=new Float32Array(q*3),K=new Float32Array(q),ee=new Float32Array(q*3);for(let O=0;O<q;O++){const j=O*3,X=20+Math.random()*80,fe=Math.random()*Math.PI*2,ce=Math.acos(2*Math.random()-1);W[j]=X*Math.sin(ce)*Math.cos(fe),W[j+1]=X*Math.sin(ce)*Math.sin(fe),W[j+2]=X*Math.cos(ce),K[O]=Math.random()*.25;const Me=new Ne;Me.setHSL(.6+Math.random()*.1,.6,.7+Math.random()*.3),ee[j]=Me.r,ee[j+1]=Me.g,ee[j+2]=Me.b}H.setAttribute("position",new St(W,3)),H.setAttribute("size",new St(K,1)),H.setAttribute("color",new St(ee,3));const $=new Fr({size:.25,vertexColors:!0,transparent:!0,opacity:.4,sizeAttenuation:!0,depthWrite:!1}),y=new Tr(H,$);s.add(y);const v=new vt(new Ln(200,32,32),new un({color:1713022,transparent:!0,opacity:.05,side:Lt}));s.add(v);const L=new vt(new Ln(100,32,32),new un({color:3754411,transparent:!0,opacity:.03,side:Lt}));s.add(L)},G=(V,re)=>{const te=new Fn,me=new Ln(V.size*1.1,64,64),T=new qh({color:V.atmosphereColor||16777215,transparent:!0,opacity:.2,side:Lt,shininess:100}),R=new vt(me,T);te.add(R);const x=new Ln(V.size*1.15,64,64),q=new qh({color:V.atmosphereColor||16777215,transparent:!0,opacity:.1,side:Kn,shininess:50}),H=new vt(x,q);te.add(H);const W=new Ln(V.size*1.2,64,64),K=new sn({uniforms:{color:{value:new Ne(V.atmosphereColor||16777215)},time:{value:0}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 color;
      uniform float time;
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        intensity += sin(vPosition.y * 10.0 + time) * 0.1;
        gl_FragColor = vec4(color, intensity * 0.3);
      }
    `,transparent:!0,side:Lt}),ee=new vt(W,K);return te.add(ee),te},Q=()=>{d=requestAnimationFrame(Q),M++;const V=performance.now();if(V-D>=1e3&&(w.value.fps=Math.round(M*1e3/(V-D)),w.value.frameTime=Math.round(1e3/w.value.fps),M=0,D=V),o){const te=o.info;w.value.triangles=te.render.triangles,w.value.drawCalls=te.render.calls,w.value.memory=Math.round(te.memory.geometries/1e3),C("update-performance-stats",w.value)}a.update(),u&&(u.rotation.y+=.005);const re=Date.now()*.001;h.forEach((te,me)=>{const T=wr[me];te.rotation.y+=T.rotationSpeed,me%2===0?te.rotation.x=Math.sin(re*.1)*.05:te.rotation.z=Math.sin(re*.15)*.03;const R=T.initialAngle+re*T.orbitSpeed,x=Math.sin(re*.2+me)*.5;te.position.set(Math.cos(R)*T.orbitRadius,x,Math.sin(R)*T.orbitRadius);const q=f[me].children.find(H=>H instanceof Fn&&H.children.length>1);if(q){q.position.copy(te.position),q.rotation.y+=T.rotationSpeed*.5;const H=q.children[2];H.material.uniforms&&(H.material.uniforms.time.value=re)}}),l?(l.passes[2]&&l.passes[2].uniforms&&(l.passes[2].uniforms.time.value=re),l.render()):o.render(s,r)},le=()=>{window.addEventListener("resize",ne),o.domElement.addEventListener("click",se),window.addEventListener("mousemove",Y),a.addEventListener("start",()=>{}),a.addEventListener("end",()=>{})},ne=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),l&&l.setSize(window.innerWidth,window.innerHeight),m=P()},se=V=>{_.x=V.clientX/window.innerWidth*2-1,_.y=-(V.clientY/window.innerHeight)*2+1,g.setFromCamera(_,r);const re=h.filter(me=>{var R;const T=(R=me.userData)==null?void 0:R.planetId;return T&&T!=="sun"}),te=g.intersectObjects(re);if(te.length>0){const me=te[0].object;ze(me.userData)}},Y=V=>{_.x=V.clientX/window.innerWidth*2-1,_.y=-(V.clientY/window.innerHeight)*2+1,g.setFromCamera(_,r);const re=h.filter(me=>{var R;const T=(R=me.userData)==null?void 0:R.planetId;return T&&T!=="sun"});g.intersectObjects(re).length>0?document.body.style.cursor="pointer":document.body.style.cursor="auto"},ve=(V,re)=>{const te=new U(0,0,0),me=2,T=3,R=re.clone().sub(V).normalize(),q=te.clone().sub(V).length();if(q>me+T)return V.clone().add(R.multiplyScalar(q*.5));const H=new U(-R.z,0,R.x).normalize(),W=Math.max(5,q*.5);return new U(V.x+R.x*q*.3+H.x*W,W,V.z+R.z*q*.3+H.z*W)},Te=(V,re)=>{const te=V.scale.x*4,me=Math.min(re.orbitRadius/10,2);return Math.max(te*me,8)},Pe=V=>{var Me;const re=new Fn;(Me=V.parent)==null||Me.add(re);const te=new Ln(V.scale.x*1.2,32,32),me=new un({color:16777215,transparent:!0,opacity:.3,side:Lt}),T=new vt(te,me);re.add(T);const R=50,x=new $t,q=new Float32Array(R*3),H=new Float32Array(R);for(let xe=0;xe<R;xe++){const ae=xe*3,de=V.scale.x*1.5,De=Math.random()*Math.PI*2,Ie=Math.acos(2*Math.random()-1);q[ae]=de*Math.sin(Ie)*Math.cos(De),q[ae+1]=de*Math.sin(Ie)*Math.sin(De),q[ae+2]=de*Math.cos(Ie),H[xe]=Math.random()*.2}x.setAttribute("position",new St(q,3)),x.setAttribute("size",new St(H,1));const W=new Fr({color:16777215,size:.1,transparent:!0,opacity:.6,blending:qr}),K=new Tr(x,W);re.add(K);const ee=r.position.clone(),$=V.userData.planetData,y=Te(V,$),v=new U(0,y*.3,y),L=V.position.clone().add(v),O=ve(ee,L),j=Date.now(),X=2e3,fe=()=>{const xe=Date.now()-j,ae=Math.min(xe/X,1);let de;if(ae<.5){const _e=ae*2,Fe=1-Math.pow(1-_e,3);de=new U().lerpVectors(ee,O,Fe)}else{const _e=(ae-.5)*2,Fe=1-Math.pow(1-_e,3);de=new U().lerpVectors(O,L,Fe)}r.position.copy(de),V.position.clone().sub(de).normalize();const De=V.position.clone().add(new U(0,y*.1,0)),Ie=new je;Ie.lookAt(de,De,new U(0,1,0)),r.quaternion.setFromRotationMatrix(Ie),ae<1&&requestAnimationFrame(fe)},ce=()=>{const xe=Date.now()*.001;T.scale.setScalar(1+Math.sin(xe*2)*.1),me.opacity=.3+Math.sin(xe*3)*.1;const ae=x.attributes.position.array;for(let de=0;de<R;de++){const De=de*3,Ie=V.scale.x*(1.5+Math.sin(xe+de)*.1),_e=xe*.5+de*.1,Fe=Math.acos(2*Math.random()-1);ae[De]=Ie*Math.sin(Fe)*Math.cos(_e),ae[De+1]=Ie*Math.sin(Fe)*Math.sin(_e),ae[De+2]=Ie*Math.cos(Fe)}x.attributes.position.needsUpdate=!0,requestAnimationFrame(ce)};fe(),ce(),setTimeout(()=>{re.removeFromParent(),re.traverse(xe=>{xe.geometry&&xe.geometry.dispose(),xe.material&&xe.material.dispose()})},5e3)},ze=V=>{const re=h.find(te=>te.userData.planetId===V.planetId);re&&Pe(re),C("navigate",V.planetId)},tt=()=>{const V=document.createElement("canvas");V.width=1024,V.height=1024;const re=V.getContext("2d");if(!re)return new Dt;re.fillStyle="#000000",re.fillRect(0,0,1024,1024);const te=re.createRadialGradient(512,512,0,512,512,450);te.addColorStop(0,"#ffffff"),te.addColorStop(.1,"#fffde7"),te.addColorStop(.2,"#fff59d"),te.addColorStop(.4,"#ffeb3b"),te.addColorStop(.6,"#ffa000"),te.addColorStop(.8,"#ff6f00"),te.addColorStop(.9,"#e65100"),te.addColorStop(1,"#bf360c"),re.fillStyle=te,re.fillRect(0,0,1024,1024);for(let me=0;me<2e3;me++){const T=Math.random()*1024,R=Math.random()*1024;if(Math.sqrt(Math.pow(T-512,2)+Math.pow(R-512,2))<450){const q=Math.random()*8+2,H=Math.random()*.3+.7;re.fillStyle=`rgba(255, 255, 255, ${H*.3})`,re.beginPath(),re.arc(T,R,q,0,Math.PI*2),re.fill()}}for(let me=0;me<12;me++){const T=Math.random()*Math.PI*2,R=Math.random()*300+50,x=512+Math.cos(T)*R,q=512+Math.sin(T)*R,H=Math.random()*30+10,W=re.createRadialGradient(x,q,0,x,q,H);W.addColorStop(0,"rgba(50, 50, 50, 0.8)"),W.addColorStop(.5,"rgba(80, 50, 20, 0.6)"),W.addColorStop(1,"rgba(255, 140, 0, 0)"),re.fillStyle=W,re.beginPath(),re.arc(x,q,H,0,Math.PI*2),re.fill()}for(let me=0;me<20;me++){const T=Math.random()*Math.PI*2,R=512+Math.cos(T)*450,x=512+Math.sin(T)*450,q=Math.random()*100+50,H=Math.random()*20+10,W=512+Math.cos(T)*(450+q),K=512+Math.sin(T)*(450+q),ee=512+Math.cos(T+Math.random()*.4-.2)*(450+q*.7),$=512+Math.sin(T+Math.random()*.4-.2)*(450+q*.7),y=re.createLinearGradient(R,x,W,K);y.addColorStop(0,"rgba(255, 255, 0, 0.8)"),y.addColorStop(.5,"rgba(255, 165, 0, 0.5)"),y.addColorStop(1,"rgba(255, 69, 0, 0)"),re.strokeStyle=y,re.lineWidth=H,re.lineCap="round",re.beginPath(),re.moveTo(R,x),re.quadraticCurveTo(ee,$,W,K),re.stroke()}return new Rx(V)},oe=async V=>{if(!V.modelUrl)return console.log(`${V.name}: Pas de modèle URL, création d'une sphère par défaut`),ge(V);const re=wr.modelUrl||"/portfolio-outer-wilds-clean/"+V.modelName;return console.log(`🚀 Début du chargement du modèle pour ${V.name}`),console.log(`📁 URL du modèle: ${re}`),new Promise(te=>{p.load(re,me=>{console.log(`✅ Modèle chargé avec succès pour ${V.name}:`,me);const T=me.scene;if(T.userData={planetId:V.id,planetData:V},T.children.length===0){console.warn(`⚠️ Le modèle ${V.name} semble vide, utilisation de la sphère par défaut`);const ee=ge(V);ee.userData={planetId:V.id,planetData:V},te(ee);return}const R=new Qn().setFromObject(T),x=R.getSize(new U),q=R.getCenter(new U);console.log("📏 Taille originale du modèle:",x),console.log("🎯 Centre du modèle:",q);const H=Math.max(x.x,x.y,x.z),W=V.size*2,K=W/H;console.log(`🔍 Taille max: ${H}, Taille cible: ${W}, Échelle: ${K}`),T.scale.setScalar(K),console.log("📐 Échelle appliquée:",T.scale),T.position.sub(q.multiplyScalar(K)),console.log("📍 Position finale:",T.position),T.traverse(ee=>{ee.isMesh&&(console.log(`🔧 Configuration du mesh: ${ee.name||"sans nom"}`),ee.castShadow=!0,ee.receiveShadow=!0,ee.userData={planetId:V.id,planetData:V},ee.material&&(ee.material.transparent=!1,ee.material.opacity=1,ee.material.visible=!0,ee.material.emissive&&(ee.material.emissive.setHex(1118481),ee.material.emissiveIntensity=.1),ee.material.roughness=.7,ee.material.metalness=.1,ee.material.needsUpdate=!0,console.log("✨ Matériau configuré:",ee.material)))}),console.log(`🎉 Modèle ${V.name} prêt à être ajouté à la scène`),console.log("🔍 UserData du modèle:",T.userData),te(T)},me=>{const T=Math.floor(me.loaded/me.total*100);console.log(`📊 Chargement ${V.name}: ${T}% (${me.loaded}/${me.total} bytes)`)},me=>{console.error(`❌ ERREUR lors du chargement du modèle ${V.name}:`,me),console.error(`🔗 URL tentée: ${V.modelUrl}`),console.error(`📝 Message d'erreur: ${me.message}`),console.error(`🔍 Type d'erreur: ${me.type||"inconnu"}`),console.log(`🔄 Utilisation de la sphère par défaut pour ${V.name}`);const T=ge(V);T.userData={planetId:V.id,planetData:V},te(T)})})},ge=V=>{console.log(`🟦 Création d'une planète par défaut pour ${V.name}`);const re=new Ln(V.size,64,64),te=new Ra({color:V.color,roughness:.7,metalness:.1,emissive:V.texture.emissive||0,emissiveIntensity:.2}),me=new vt(re,te);return me.castShadow=!0,me.receiveShadow=!0,console.log(`✅ Cube créé pour ${V.name}:`,me),me},Re=V=>{if(A.value=V,o){const re=Math.min(window.devicePixelRatio,V==="high"?2:.8);o.setPixelRatio(re)}l&&c&&(c.strength=V==="high"?.6:.4,c.radius=V==="high"?.75:.5,c.threshold=V==="high"?.4:.5),o&&(o.shadowMap.enabled=V==="high",o.shadowMap.type=V==="high"?zl:V0),s.traverse(re=>{if(re instanceof Tr){const te=re.material;V==="high"?(te.size=te.userData.originalSize||.7,te.opacity=te.userData.originalOpacity||.7,te.blending=hs):(te.userData.originalSize||(te.userData.originalSize=te.size,te.userData.originalOpacity=te.opacity),te.size*=.75,te.opacity*=.75,te.blending=qr),te.needsUpdate=!0}}),f.forEach(re=>{re.traverse(te=>{if(te instanceof vt&&te.material){const me=te.material;me.transparent&&(V==="high"?me.opacity=me.userData.originalOpacity||.2:(me.userData.originalOpacity||(me.userData.originalOpacity=me.opacity),me.opacity*=.75),me.needsUpdate=!0)}})}),l?l.render():o&&o.render(s,r)};Lr(()=>t.quality,V=>{Re(V)});const ye=()=>{const V=r.position.clone(),re=new U(0,5,25),te=Date.now(),me=1500,T=()=>{const R=Date.now()-te,x=Math.min(R/me,1),q=1-Math.pow(1-x,3);r.position.lerpVectors(V,re,q),r.lookAt(new U(0,0,0)),x<1?requestAnimationFrame(T):(a.target.set(0,0,0),a.update())};T()};return Lr(()=>t.activePlanet,(V,re)=>{!V&&re&&ye()}),sr(()=>{N()}),ba(()=>{d&&cancelAnimationFrame(d),o&&o.dispose(),s&&s.traverse(V=>{V.geometry&&V.geometry.dispose(),V.material&&(Array.isArray(V.material)?V.material.forEach(re=>re.dispose()):V.material.dispose())}),window.removeEventListener("resize",ne),o.domElement.removeEventListener("click",se),window.removeEventListener("mousemove",Y)}),(V,re)=>(ke(),We("div",{class:"fixed inset-0 z-10",ref_key:"solarSystemContainer",ref:i},null,512))}}),ZE=Gn(KE,[["__scopeId","data-v-f4611e0b"]]),JE={class:"fixed inset-0 -z-10 overflow-hidden bg-space-bg"},QE=_n({__name:"StarField",setup(n){return(e,t)=>(ke(),We("div",JE,t[0]||(t[0]=[ue("div",{class:"absolute inset-0 stars"},null,-1),ue("div",{class:"absolute inset-0 stars2"},null,-1),ue("div",{class:"absolute inset-0 stars3"},null,-1)])))}}),ew=Gn(QE,[["__scopeId","data-v-b5e8fbaf"]]),tw={key:0,class:"fixed inset-0 z-50"},nw={class:"flex items-start gap-4"},iw={class:"flex-shrink-0 w-8 h-8 rounded-full bg-space-accent/20 flex items-center justify-center"},sw={class:"text-space-accent text-lg font-bold"},rw={class:"flex-grow"},ow={class:"text-space-accent font-space text-lg mb-2"},aw={class:"text-space-light/80 text-sm leading-relaxed"},lw={class:"flex justify-between items-center mt-6"},cw={class:"flex gap-2"},uw=["onClick"],hw={class:"flex gap-3"},fw=_n({__name:"Tutorial",props:{isActive:{type:Boolean,default:!0},targetElement:{type:String,default:""}},emits:["complete"],setup(n,{emit:e}){const t=n,i=e,s=Et(0),r=[{title:"Bienvenue dans mon Portfolio Spatial",description:"Explorez mon univers de développement à travers ce système solaire interactif. Chaque planète représente une compétence ou un projet.",position:"center"},{title:"Navigation",description:"Utilisez votre souris pour faire pivoter la vue. Faites défiler pour zoomer et dézoomer. Cliquez sur une planète pour en savoir plus.",position:"center"},{title:"Découvrez mes Projets",description:"Chaque planète abrite des projets que j'ai réalisés. Cliquez sur une planète pour voir les détails et les technologies utilisées.",position:"center"},{title:"Explorez mes Compétences",description:"Les planètes sont organisées par domaine de compétence. Plus vous vous rapprochez du soleil, plus les compétences sont fondamentales.",position:"center"},{title:"Moniteur de Performance",description:"En haut à gauche, vous trouverez un moniteur de performance. Il vous permet d'ajuster la qualité visuelle selon votre appareil.",position:"top-right"},{title:"Prêt à Explorer ?",description:"Vous êtes maintenant prêt à explorer mon portfolio ! N'hésitez pas à interagir avec les planètes et à découvrir mes projets.",position:"center"}],o=Ir(()=>s.value===r.length-1),a=Ir(()=>{if(t.targetElement&&document.querySelector(t.targetElement)){const d=document.querySelector(t.targetElement),g=d==null?void 0:d.getBoundingClientRect();if(g)return{clipPath:`path('M 0 0 L 0 ${window.innerHeight} L ${window.innerWidth} ${window.innerHeight} L ${window.innerWidth} 0 Z M ${g.left} ${g.top} L ${g.right} ${g.top} L ${g.right} ${g.bottom} L ${g.left} ${g.bottom} Z')`}}return{}}),l=Ir(()=>{const d=r[s.value],g=d.position;return{...d.customStyle||{},top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),c=()=>{o.value?i("complete"):s.value++},u=()=>{s.value>0&&s.value--},h=d=>{s.value=d},f=d=>{d.target===d.currentTarget&&i("complete")};return(d,g)=>n.isActive?(ke(),We("div",tw,[ue("div",{class:"absolute inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500",style:js(a.value),onClick:f},null,4),ue("div",{class:"absolute p-6 bg-space-dark/95 border border-space-accent/30 rounded-xl shadow-2xl max-w-sm transition-all duration-500",style:js(l.value)},[ue("div",nw,[ue("div",iw,[ue("span",sw,lt(s.value+1),1)]),ue("div",rw,[ue("h3",ow,lt(r[s.value].title),1),ue("p",aw,lt(r[s.value].description),1)])]),ue("div",lw,[ue("div",cw,[(ke(),We(wt,null,Bi(r,(_,m)=>ue("button",{key:m,class:Tn(["w-2 h-2 rounded-full transition-all duration-300",m===s.value?"bg-space-accent":"bg-space-accent/30"]),onClick:p=>h(m)},null,10,uw)),64))]),ue("div",hw,[s.value>0?(ke(),We("button",{key:0,onClick:u,class:"px-4 py-2 text-sm text-space-light/60 hover:text-space-light transition-colors"}," Précédent ")):Pt("",!0),ue("button",{onClick:c,class:"px-4 py-2 text-sm bg-space-accent/20 text-space-accent rounded-lg hover:bg-space-accent/30 transition-colors"},lt(o.value?"Terminer":"Suivant"),1)])])],4)])):Pt("",!0)}}),dw=Gn(fw,[["__scopeId","data-v-db46d89b"]]),pw={class:"relative w-full h-screen overflow-hidden"},mw=_n({__name:"SolarSystem",setup(n){const e=Et(!1),t=Et(""),i=Et(!1),s=Et(!1),r=Et("high"),o=Et(!0),a=Et(0),l=Et(!1),c=Et(!1),u=Et(null),h=Et(null),f=Et({fps:0,frameTime:0,triangles:0,drawCalls:0,memory:0}),d=Et(wr),g=Et(!0),_=Q=>{console.log("Navigation vers la planète:",Q),t.value=Q,e.value=!1},m=()=>{console.log("Fermeture du contenu"),t.value=""},p=Q=>{r.value=Q},w=()=>{i.value=!1},A=Q=>{a.value=Q},M=()=>{o.value=!1},D=Q=>{console.log("Ouverture des détails du projet:",Q),u.value=Q,l.value=!0},C=()=>{console.log("Fermeture des détails du projet"),l.value=!1,u.value=null},P=Q=>{console.log("Ouverture des détails de la compétence:",Q),h.value=Q,c.value=!0},N=()=>{console.log("Fermeture des détails de la compétence"),c.value=!1,h.value=null},E=()=>{g.value=!1,localStorage.setItem("tutorialCompleted","true")},S=()=>{g.value=!0,localStorage.removeItem("tutorialCompleted")},I=()=>{i.value=!0},B=Q=>{f.value={...Q}},G=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768;return sr(()=>{s.value=G(),window.addEventListener("resize",()=>{s.value=G()}),localStorage.getItem("tutorialCompleted")&&(g.value=!1),setTimeout(()=>{i.value=!0},1e3)}),ba(()=>{window.removeEventListener("resize",()=>{s.value=G()})}),(Q,le)=>(ke(),We("div",pw,[pt(b_,{isLoading:o.value,progress:a.value},null,8,["isLoading","progress"]),pt(ew),pt(ZE,{planets:d.value,activePlanet:t.value,quality:r.value,onNavigate:_,onLoadingProgress:A,onLoadingComplete:M,onUpdatePerformanceStats:B},null,8,["planets","activePlanet","quality"]),pt(A_,{isNavOpen:e.value,planets:d.value,activePlanet:t.value,onNavigate:_},null,8,["isNavOpen","planets","activePlanet"]),pt(c0,{activePlanet:t.value,planets:d.value,onClose:m,onOpenProjectDetails:D,onOpenSkillDetails:P},null,8,["activePlanet","planets"]),pt(B_,{showPerformanceMonitor:i.value,performanceStats:f.value,isMobile:s.value,qualityLevel:r.value,onSetQualityLevel:p,onClose:w},null,8,["showPerformanceMonitor","performanceStats","isMobile","qualityLevel"]),pt(z0,{isProjectDetailsOpen:l.value,isSkillDetailsOpen:c.value,selectedProject:u.value,selectedSkill:h.value,onCloseProjectDetails:C,onCloseSkillDetails:N},null,8,["isProjectDetailsOpen","isSkillDetailsOpen","selectedProject","selectedSkill"]),pt(dw,{isActive:g.value,onComplete:E},null,8,["isActive"]),pt(__,{showTutorial:g.value,showPerformanceMonitor:i.value,onOpenTutorial:S,onOpenPerformanceMonitor:I},null,8,["showTutorial","showPerformanceMonitor"])]))}});f_(mw).mount("#app");
