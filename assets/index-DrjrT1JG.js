(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function vc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ft={},Ds=[],kn=()=>{},Pp=()=>!1,na=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),yc=n=>n.startsWith("onUpdate:"),Nt=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Lp=Object.prototype.hasOwnProperty,rt=(n,e)=>Lp.call(n,e),Be=Array.isArray,Is=n=>ia(n)==="[object Map]",Tf=n=>ia(n)==="[object Set]",Xe=n=>typeof n=="function",vt=n=>typeof n=="string",zi=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",bf=n=>(dt(n)||Xe(n))&&Xe(n.then)&&Xe(n.catch),Ef=Object.prototype.toString,ia=n=>Ef.call(n),Dp=n=>ia(n).slice(8,-1),Af=n=>ia(n)==="[object Object]",Sc=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,_r=vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ip=/-(\w)/g,Fi=sa(n=>n.replace(Ip,(e,t)=>t?t.toUpperCase():"")),Up=/\B([A-Z])/g,ls=sa(n=>n.replace(Up,"-$1").toLowerCase()),wf=sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),va=sa(n=>n?`on${wf(n)}`:""),Ui=(n,e)=>!Object.is(n,e),ya=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Rf=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Np=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Fp=n=>{const e=vt(n)?Number(n):NaN;return isNaN(e)?n:e};let du;const ra=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tc(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=vt(i)?Hp(i):Tc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(vt(n)||dt(n))return n}const Op=/;(?![^(]*\))/g,Bp=/:([^]+)/,zp=/\/\*[^]*?\*\//g;function Hp(n){const e={};return n.replace(zp,"").split(Op).forEach(t=>{if(t){const i=t.split(Bp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function _n(n){let e="";if(vt(n))e=n;else if(Be(n))for(let t=0;t<n.length;t++){const i=_n(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Vp=vc(kp);function Cf(n){return!!n||n===""}const Pf=n=>!!(n&&n.__v_isRef===!0),ln=n=>vt(n)?n:n==null?"":Be(n)||dt(n)&&(n.toString===Ef||!Xe(n.toString))?Pf(n)?ln(n.value):JSON.stringify(n,Lf,2):String(n),Lf=(n,e)=>Pf(e)?Lf(n,e.value):Is(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ma(i,r)+" =>"]=s,t),{})}:Tf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ma(t))}:zi(e)?Ma(e):dt(e)&&!Be(e)&&!Af(e)?String(e):e,Ma=(n,e="")=>{var t;return zi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let en;class Gp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=en,!e&&en&&(this.index=(en.scopes||(en.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=en;try{return en=this,e()}finally{en=t}}}on(){++this._on===1&&(this.prevScope=en,en=this)}off(){this._on>0&&--this._on===0&&(en=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Wp(){return en}let ht;const Sa=new WeakSet;class Df{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,en&&en.active&&en.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sa.has(this)&&(Sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pu(this),Nf(this);const e=ht,t=Dn;ht=this,Dn=!0;try{return this.fn()}finally{Ff(this),ht=e,Dn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ac(e);this.deps=this.depsTail=void 0,pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gl(this)&&this.run()}get dirty(){return gl(this)}}let If=0,xr,vr;function Uf(n,e=!1){if(n.flags|=8,e){n.next=vr,vr=n;return}n.next=xr,xr=n}function bc(){If++}function Ec(){if(--If>0)return;if(vr){let e=vr;for(vr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;xr;){let e=xr;for(xr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Nf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ff(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ac(i),Xp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function gl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Of(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Of(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ar)||(n.globalVersion=Ar,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!gl(n))))return;n.flags|=2;const e=n.dep,t=ht,i=Dn;ht=n,Dn=!0;try{Nf(n);const s=n.fn(n._value);(e.version===0||Ui(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ht=t,Dn=i,Ff(n),n.flags&=-3}}function Ac(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ac(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Xp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Dn=!0;const Bf=[];function di(){Bf.push(Dn),Dn=!1}function pi(){const n=Bf.pop();Dn=n===void 0?!0:n}function pu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ht;ht=void 0;try{e()}finally{ht=t}}}let Ar=0;class jp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ht||!Dn||ht===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ht)t=this.activeLink=new jp(ht,this),ht.deps?(t.prevDep=ht.depsTail,ht.depsTail.nextDep=t,ht.depsTail=t):ht.deps=ht.depsTail=t,zf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ht.depsTail,t.nextDep=void 0,ht.depsTail.nextDep=t,ht.depsTail=t,ht.deps===t&&(ht.deps=i)}return t}trigger(e){this.version++,Ar++,this.notify(e)}notify(e){bc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ec()}}}function zf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)zf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const _l=new WeakMap,os=Symbol(""),xl=Symbol(""),wr=Symbol("");function zt(n,e,t){if(Dn&&ht){let i=_l.get(n);i||_l.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new wc),s.map=i,s.key=t),s.track()}}function ai(n,e,t,i,s,r){const o=_l.get(n);if(!o){Ar++;return}const a=l=>{l&&l.trigger()};if(bc(),e==="clear")o.forEach(a);else{const l=Be(n),c=l&&Sc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===wr||!zi(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(wr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(os)),Is(n)&&a(o.get(xl)));break;case"delete":l||(a(o.get(os)),Is(n)&&a(o.get(xl)));break;case"set":Is(n)&&a(o.get(os));break}}Ec()}function hs(n){const e=tt(n);return e===n?e:(zt(e,"iterate",wr),Mn(n)?e:e.map(It))}function oa(n){return zt(n=tt(n),"iterate",wr),n}const qp={__proto__:null,[Symbol.iterator](){return Ta(this,Symbol.iterator,It)},concat(...n){return hs(this).concat(...n.map(e=>Be(e)?hs(e):e))},entries(){return Ta(this,"entries",n=>(n[1]=It(n[1]),n))},every(n,e){return $n(this,"every",n,e,void 0,arguments)},filter(n,e){return $n(this,"filter",n,e,t=>t.map(It),arguments)},find(n,e){return $n(this,"find",n,e,It,arguments)},findIndex(n,e){return $n(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return $n(this,"findLast",n,e,It,arguments)},findLastIndex(n,e){return $n(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return $n(this,"forEach",n,e,void 0,arguments)},includes(...n){return ba(this,"includes",n)},indexOf(...n){return ba(this,"indexOf",n)},join(n){return hs(this).join(n)},lastIndexOf(...n){return ba(this,"lastIndexOf",n)},map(n,e){return $n(this,"map",n,e,void 0,arguments)},pop(){return ir(this,"pop")},push(...n){return ir(this,"push",n)},reduce(n,...e){return mu(this,"reduce",n,e)},reduceRight(n,...e){return mu(this,"reduceRight",n,e)},shift(){return ir(this,"shift")},some(n,e){return $n(this,"some",n,e,void 0,arguments)},splice(...n){return ir(this,"splice",n)},toReversed(){return hs(this).toReversed()},toSorted(n){return hs(this).toSorted(n)},toSpliced(...n){return hs(this).toSpliced(...n)},unshift(...n){return ir(this,"unshift",n)},values(){return Ta(this,"values",It)}};function Ta(n,e,t){const i=oa(n),s=i[e]();return i!==n&&!Mn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const Yp=Array.prototype;function $n(n,e,t,i,s,r){const o=oa(n),a=o!==n&&!Mn(n),l=o[e];if(l!==Yp[e]){const h=l.apply(n,r);return a?It(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,It(h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function mu(n,e,t,i){const s=oa(n);let r=t;return s!==n&&(Mn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,It(a),l,n)}),s[e](r,...i)}function ba(n,e,t){const i=tt(n);zt(i,"iterate",wr);const s=i[e](...t);return(s===-1||s===!1)&&Pc(t[0])?(t[0]=tt(t[0]),i[e](...t)):s}function ir(n,e,t=[]){di(),bc();const i=tt(n)[e].apply(n,t);return Ec(),pi(),i}const Kp=vc("__proto__,__v_isRef,__isVue"),Hf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(zi));function $p(n){zi(n)||(n=String(n));const e=tt(this);return zt(e,"has",n),e.hasOwnProperty(n)}class kf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?om:Xf:r?Wf:Gf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Be(e);if(!s){let l;if(o&&(l=qp[t]))return l;if(t==="hasOwnProperty")return $p}const a=Reflect.get(e,t,kt(e)?e:i);return(zi(t)?Hf.has(t):Kp(t))||(s||zt(e,"get",t),r)?a:kt(a)?o&&Sc(t)?a:a.value:dt(a)?s?jf(a):Rr(a):a}}class Vf extends kf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Oi(r);if(!Mn(i)&&!Oi(i)&&(r=tt(r),i=tt(i)),!Be(e)&&kt(r)&&!kt(i))return l?!1:(r.value=i,!0)}const o=Be(e)&&Sc(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,kt(e)?e:s);return e===tt(s)&&(o?Ui(i,r)&&ai(e,"set",t,i):ai(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ai(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!zi(t)||!Hf.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Be(e)?"length":os),Reflect.ownKeys(e)}}class Zp extends kf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jp=new Vf,Qp=new Zp,em=new Vf(!0);const vl=n=>n,Kr=n=>Reflect.getPrototypeOf(n);function tm(n,e,t){return function(...i){const s=this.__v_raw,r=tt(s),o=Is(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?vl:e?Vo:It;return!e&&zt(r,"iterate",l?xl:os),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function $r(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function nm(n,e){const t={get(s){const r=this.__v_raw,o=tt(r),a=tt(s);n||(Ui(s,a)&&zt(o,"get",s),zt(o,"get",a));const{has:l}=Kr(o),c=e?vl:n?Vo:It;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&zt(tt(s),"iterate",os),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=tt(r),a=tt(s);return n||(Ui(s,a)&&zt(o,"has",s),zt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=tt(a),c=e?vl:n?Vo:It;return!n&&zt(l,"iterate",os),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return Nt(t,n?{add:$r("add"),set:$r("set"),delete:$r("delete"),clear:$r("clear")}:{add(s){!e&&!Mn(s)&&!Oi(s)&&(s=tt(s));const r=tt(this);return Kr(r).has.call(r,s)||(r.add(s),ai(r,"add",s,s)),this},set(s,r){!e&&!Mn(r)&&!Oi(r)&&(r=tt(r));const o=tt(this),{has:a,get:l}=Kr(o);let c=a.call(o,s);c||(s=tt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ui(r,u)&&ai(o,"set",s,r):ai(o,"add",s,r),this},delete(s){const r=tt(this),{has:o,get:a}=Kr(r);let l=o.call(r,s);l||(s=tt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ai(r,"delete",s,void 0),c},clear(){const s=tt(this),r=s.size!==0,o=s.clear();return r&&ai(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=tm(s,n,e)}),t}function Rc(n,e){const t=nm(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(rt(t,s)&&s in i?t:i,s,r)}const im={get:Rc(!1,!1)},sm={get:Rc(!1,!0)},rm={get:Rc(!0,!1)};const Gf=new WeakMap,Wf=new WeakMap,Xf=new WeakMap,om=new WeakMap;function am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lm(n){return n.__v_skip||!Object.isExtensible(n)?0:am(Dp(n))}function Rr(n){return Oi(n)?n:Cc(n,!1,Jp,im,Gf)}function cm(n){return Cc(n,!1,em,sm,Wf)}function jf(n){return Cc(n,!0,Qp,rm,Xf)}function Cc(n,e,t,i,s){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=lm(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function Us(n){return Oi(n)?Us(n.__v_raw):!!(n&&n.__v_isReactive)}function Oi(n){return!!(n&&n.__v_isReadonly)}function Mn(n){return!!(n&&n.__v_isShallow)}function Pc(n){return n?!!n.__v_raw:!1}function tt(n){const e=n&&n.__v_raw;return e?tt(e):n}function um(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&Rf(n,"__v_skip",!0),n}const It=n=>dt(n)?Rr(n):n,Vo=n=>dt(n)?jf(n):n;function kt(n){return n?n.__v_isRef===!0:!1}function Vi(n){return hm(n,!1)}function hm(n,e){return kt(n)?n:new fm(n,e)}class fm{constructor(e,t){this.dep=new wc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:tt(e),this._value=t?e:It(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Mn(e)||Oi(e);e=i?e:tt(e),Ui(e,t)&&(this._rawValue=e,this._value=i?e:It(e),this.dep.trigger())}}function qf(n){return kt(n)?n.value:n}const dm={get:(n,e,t)=>e==="__v_raw"?n:qf(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return kt(s)&&!kt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Yf(n){return Us(n)?n:new Proxy(n,dm)}class pm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new wc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ar-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ht!==this)return Uf(this,!0),!0}get value(){const e=this.dep.track();return Of(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mm(n,e,t=!1){let i,s;return Xe(n)?i=n:(i=n.get,s=n.set),new pm(i,s,t)}const Zr={},Go=new WeakMap;let ts;function gm(n,e=!1,t=ts){if(t){let i=Go.get(t);i||Go.set(t,i=[]),i.push(n)}}function _m(n,e,t=ft){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=y=>s?y:Mn(y)||s===!1||s===0?Ci(y,1):Ci(y);let u,h,f,d,g=!1,_=!1;if(kt(n)?(h=()=>n.value,g=Mn(n)):Us(n)?(h=()=>c(n),g=!0):Be(n)?(_=!0,g=n.some(y=>Us(y)||Mn(y)),h=()=>n.map(y=>{if(kt(y))return y.value;if(Us(y))return c(y);if(Xe(y))return l?l(y,2):y()})):Xe(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){di();try{f()}finally{pi()}}const y=ts;ts=u;try{return l?l(n,3,[d]):n(d)}finally{ts=y}}:h=kn,e&&s){const y=h,U=s===!0?1/0:s;h=()=>Ci(y(),U)}const m=Wp(),p=()=>{u.stop(),m&&m.active&&Mc(m.effects,u)};if(r&&e){const y=e;e=(...U)=>{y(...U),p()}}let A=_?new Array(n.length).fill(Zr):Zr;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const U=u.run();if(s||g||(_?U.some((D,P)=>Ui(D,A[P])):Ui(U,A))){f&&f();const D=ts;ts=u;try{const P=[U,A===Zr?void 0:_&&A[0]===Zr?[]:A,d];l?l(e,3,P):e(...P),A=U}finally{ts=D}}}else u.run()};return a&&a(E),u=new Df(h),u.scheduler=o?()=>o(E,!1):E,d=y=>gm(y,!1,u),f=u.onStop=()=>{const y=Go.get(u);if(y){if(l)l(y,4);else for(const U of y)U();Go.delete(u)}},e?i?E(!0):A=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ci(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,kt(n))Ci(n.value,e,t);else if(Be(n))for(let i=0;i<n.length;i++)Ci(n[i],e,t);else if(Tf(n)||Is(n))n.forEach(i=>{Ci(i,e,t)});else if(Af(n)){for(const i in n)Ci(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ci(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kr(n,e,t,i){try{return i?n(...i):n()}catch(s){aa(s,e,t)}}function Nn(n,e,t,i){if(Xe(n)){const s=kr(n,e,t,i);return s&&bf(s)&&s.catch(r=>{aa(r,e,t)}),s}if(Be(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],e,t,i));return s}}function aa(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ft;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){di(),kr(r,null,10,[n,l,c]),pi();return}}xm(n,t,s,i,o)}function xm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const qt=[];let Bn=-1;const Ns=[];let Ei=null,ws=0;const Kf=Promise.resolve();let Wo=null;function $f(n){const e=Wo||Kf;return n?e.then(this?n.bind(this):n):e}function vm(n){let e=Bn+1,t=qt.length;for(;e<t;){const i=e+t>>>1,s=qt[i],r=Cr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Lc(n){if(!(n.flags&1)){const e=Cr(n),t=qt[qt.length-1];!t||!(n.flags&2)&&e>=Cr(t)?qt.push(n):qt.splice(vm(e),0,n),n.flags|=1,Zf()}}function Zf(){Wo||(Wo=Kf.then(Qf))}function ym(n){Be(n)?Ns.push(...n):Ei&&n.id===-1?Ei.splice(ws+1,0,n):n.flags&1||(Ns.push(n),n.flags|=1),Zf()}function gu(n,e,t=Bn+1){for(;t<qt.length;t++){const i=qt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;qt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Jf(n){if(Ns.length){const e=[...new Set(Ns)].sort((t,i)=>Cr(t)-Cr(i));if(Ns.length=0,Ei){Ei.push(...e);return}for(Ei=e,ws=0;ws<Ei.length;ws++){const t=Ei[ws];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ei=null,ws=0}}const Cr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Qf(n){try{for(Bn=0;Bn<qt.length;Bn++){const e=qt[Bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),kr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bn<qt.length;Bn++){const e=qt[Bn];e&&(e.flags&=-2)}Bn=-1,qt.length=0,Jf(),Wo=null,(qt.length||Ns.length)&&Qf()}}let Pn=null,ed=null;function Xo(n){const e=Pn;return Pn=n,ed=n&&n.type.__scopeId||null,e}function td(n,e=Pn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Au(-1);const r=Xo(e);let o;try{o=n(...s)}finally{Xo(r),i._d&&Au(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Gi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(di(),Nn(l,t,8,[n.el,a,n,e]),pi())}}const Mm=Symbol("_vte"),nd=n=>n.__isTeleport,Ai=Symbol("_leaveCb"),Jr=Symbol("_enterCb");function Sm(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dc(()=>{n.isMounted=!0}),ud(()=>{n.isUnmounting=!0}),n}const mn=[Function,Array],id={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},sd=n=>{const e=n.subTree;return e.component?sd(e.component):e},Tm={name:"BaseTransition",props:id,setup(n,{slots:e}){const t=yg(),i=Sm();return()=>{const s=e.default&&ad(e.default(),!0);if(!s||!s.length)return;const r=rd(s),o=tt(n),{mode:a}=o;if(i.isLeaving)return Ea(r);const l=_u(r);if(!l)return Ea(r);let c=yl(l,o,i,t,h=>c=h);l.type!==Kt&&Pr(l,c);let u=t.subTree&&_u(t.subTree);if(u&&u.type!==Kt&&!is(l,u)&&sd(t).type!==Kt){let h=yl(u,o,i,t);if(Pr(u,h),a==="out-in"&&l.type!==Kt)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete h.afterLeave,u=void 0},Ea(r);a==="in-out"&&l.type!==Kt?h.delayLeave=(f,d,g)=>{const _=od(i,u);_[String(u.key)]=u,f[Ai]=()=>{d(),f[Ai]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function rd(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Kt){e=t;break}}return e}const bm=Tm;function od(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function yl(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:f,onLeave:d,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:E}=e,y=String(n.key),U=od(t,n),D=(b,M)=>{b&&Nn(b,i,9,M)},P=(b,M)=>{const N=M[1];D(b,M),Be(b)?b.every(H=>H.length<=1)&&N():b.length<=1&&N()},z={mode:o,persisted:a,beforeEnter(b){let M=l;if(!t.isMounted)if(r)M=m||l;else return;b[Ai]&&b[Ai](!0);const N=U[y];N&&is(n,N)&&N.el[Ai]&&N.el[Ai](),D(M,[b])},enter(b){let M=c,N=u,H=h;if(!t.isMounted)if(r)M=p||c,N=A||u,H=E||h;else return;let X=!1;const se=b[Jr]=ae=>{X||(X=!0,ae?D(H,[b]):D(N,[b]),z.delayedLeave&&z.delayedLeave(),b[Jr]=void 0)};M?P(M,[b,se]):se()},leave(b,M){const N=String(n.key);if(b[Jr]&&b[Jr](!0),t.isUnmounting)return M();D(f,[b]);let H=!1;const X=b[Ai]=se=>{H||(H=!0,M(),se?D(_,[b]):D(g,[b]),b[Ai]=void 0,U[N]===n&&delete U[N])};U[N]=n,d?P(d,[b,X]):X()},clone(b){const M=yl(b,e,t,i,s);return s&&s(M),M}};return z}function Ea(n){if(la(n))return n=Bi(n),n.children=null,n}function _u(n){if(!la(n))return nd(n.type)&&n.children?rd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Xe(t.default))return t.default()}}function Pr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Pr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function ad(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===un?(o.patchFlag&128&&s++,i=i.concat(ad(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?Bi(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function ld(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function jo(n,e,t,i,s=!1){if(Be(n)){n.forEach((g,_)=>jo(g,e&&(Be(e)?e[_]:e),t,i,s));return}if(yr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&jo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?Oc(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ft?a.refs={}:a.refs,h=a.setupState,f=tt(h),d=h===ft?()=>!1:g=>rt(f,g);if(c!=null&&c!==l&&(vt(c)?(u[c]=null,d(c)&&(h[c]=null)):kt(c)&&(c.value=null)),Xe(l))kr(l,a,12,[o,u]);else{const g=vt(l),_=kt(l);if(g||_){const m=()=>{if(n.f){const p=g?d(l)?h[l]:u[l]:l.value;s?Be(p)&&Mc(p,r):Be(p)?p.includes(r)||p.push(r):g?(u[l]=[r],d(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,d(l)&&(h[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(m.id=-1,cn(m,t)):m()}}}ra().requestIdleCallback;ra().cancelIdleCallback;const yr=n=>!!n.type.__asyncLoader,la=n=>n.type.__isKeepAlive;function Em(n,e){cd(n,"a",e)}function Am(n,e){cd(n,"da",e)}function cd(n,e,t=Ht){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ca(e,i,t),t){let s=t.parent;for(;s&&s.parent;)la(s.parent.vnode)&&wm(i,e,t,s),s=s.parent}}function wm(n,e,t,i){const s=ca(e,n,i,!0);Ic(()=>{Mc(i[e],s)},t)}function ca(n,e,t=Ht,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{di();const a=Vr(t),l=Nn(e,t,n,o);return a(),pi(),l});return i?s.unshift(r):s.push(r),r}}const gi=n=>(e,t=Ht)=>{(!Dr||n==="sp")&&ca(n,(...i)=>e(...i),t)},Rm=gi("bm"),Dc=gi("m"),Cm=gi("bu"),Pm=gi("u"),ud=gi("bum"),Ic=gi("um"),Lm=gi("sp"),Dm=gi("rtg"),Im=gi("rtc");function Um(n,e=Ht){ca("ec",n,e)}const Nm=Symbol.for("v-ndc");function Aa(n,e,t,i){let s;const r=t,o=Be(n);if(o||vt(n)){const a=o&&Us(n);let l=!1,c=!1;a&&(l=!Mn(n),c=Oi(n),n=oa(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Vo(It(n[u])):It(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(dt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Ml=n=>n?Pd(n)?Oc(n):Ml(n.parent):null,Mr=Nt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ml(n.parent),$root:n=>Ml(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fd(n),$forceUpdate:n=>n.f||(n.f=()=>{Lc(n.update)}),$nextTick:n=>n.n||(n.n=$f.bind(n.proxy)),$watch:n=>ig.bind(n)}),wa=(n,e)=>n!==ft&&!n.__isScriptSetup&&rt(n,e),Fm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(wa(i,e))return o[e]=1,i[e];if(s!==ft&&rt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,r[e];if(t!==ft&&rt(t,e))return o[e]=4,t[e];Sl&&(o[e]=0)}}const u=Mr[e];let h,f;if(u)return e==="$attrs"&&zt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==ft&&rt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return wa(s,e)?(s[e]=t,!0):i!==ft&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==ft&&rt(n,o)||wa(e,o)||(a=r[0])&&rt(a,o)||rt(i,o)||rt(Mr,o)||rt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function xu(n){return Be(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Sl=!0;function Om(n){const e=fd(n),t=n.proxy,i=n.ctx;Sl=!1,e.beforeCreate&&vu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:E,unmounted:y,render:U,renderTracked:D,renderTriggered:P,errorCaptured:z,serverPrefetch:b,expose:M,inheritAttrs:N,components:H,directives:X,filters:se}=e;if(c&&Bm(c,i,null),o)for(const ne in o){const q=o[ne];Xe(q)&&(i[ne]=q.bind(t))}if(s){const ne=s.call(t,t);dt(ne)&&(n.data=Rr(ne))}if(Sl=!0,r)for(const ne in r){const q=r[ne],me=Xe(q)?q.bind(t,t):Xe(q.get)?q.get.bind(t,t):kn,ve=!Xe(q)&&Xe(q.set)?q.set.bind(t):kn,we=Dd({get:me,set:ve});Object.defineProperty(i,ne,{enumerable:!0,configurable:!0,get:()=>we.value,set:Fe=>we.value=Fe})}if(a)for(const ne in a)hd(a[ne],i,t,ne);if(l){const ne=Xe(l)?l.call(t):l;Reflect.ownKeys(ne).forEach(q=>{Wm(q,ne[q])})}u&&vu(u,n,"c");function Y(ne,q){Be(q)?q.forEach(me=>ne(me.bind(t))):q&&ne(q.bind(t))}if(Y(Rm,h),Y(Dc,f),Y(Cm,d),Y(Pm,g),Y(Em,_),Y(Am,m),Y(Um,z),Y(Im,D),Y(Dm,P),Y(ud,A),Y(Ic,y),Y(Lm,b),Be(M))if(M.length){const ne=n.exposed||(n.exposed={});M.forEach(q=>{Object.defineProperty(ne,q,{get:()=>t[q],set:me=>t[q]=me})})}else n.exposed||(n.exposed={});U&&n.render===kn&&(n.render=U),N!=null&&(n.inheritAttrs=N),H&&(n.components=H),X&&(n.directives=X),b&&ld(n)}function Bm(n,e,t=kn){Be(n)&&(n=Tl(n));for(const i in n){const s=n[i];let r;dt(s)?"default"in s?r=Ro(s.from||i,s.default,!0):r=Ro(s.from||i):r=Ro(s),kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function vu(n,e,t){Nn(Be(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function hd(n,e,t,i){let s=i.includes(".")?Ed(t,i):()=>t[i];if(vt(n)){const r=e[n];Xe(r)&&Co(s,r)}else if(Xe(n))Co(s,n.bind(t));else if(dt(n))if(Be(n))n.forEach(r=>hd(r,e,t,i));else{const r=Xe(n.handler)?n.handler.bind(t):e[n.handler];Xe(r)&&Co(s,r,n)}}function fd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>qo(l,c,o,!0)),qo(l,e,o)),dt(e)&&r.set(e,l),l}function qo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&qo(n,r,t,!0),s&&s.forEach(o=>qo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=zm[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const zm={data:yu,props:Mu,emits:Mu,methods:pr,computed:pr,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:pr,directives:pr,watch:km,provide:yu,inject:Hm};function yu(n,e){return e?n?function(){return Nt(Xe(n)?n.call(this,this):n,Xe(e)?e.call(this,this):e)}:e:n}function Hm(n,e){return pr(Tl(n),Tl(e))}function Tl(n){if(Be(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Xt(n,e){return n?[...new Set([].concat(n,e))]:e}function pr(n,e){return n?Nt(Object.create(null),n,e):e}function Mu(n,e){return n?Be(n)&&Be(e)?[...new Set([...n,...e])]:Nt(Object.create(null),xu(n),xu(e??{})):e}function km(n,e){if(!n)return e;if(!e)return n;const t=Nt(Object.create(null),n);for(const i in e)t[i]=Xt(n[i],e[i]);return t}function dd(){return{app:null,config:{isNativeTag:Pp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vm=0;function Gm(n,e){return function(i,s=null){Xe(i)||(i=Nt({},i)),s!=null&&!dt(s)&&(s=null);const r=dd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Vm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:wg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Xe(u.install)?(o.add(u),u.install(c,...h)):Xe(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const d=c._ceVNode||tn(i,s);return d.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(d,u,f),l=!0,c._container=u,u.__vue_app__=c,Oc(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Fs;Fs=c;try{return u()}finally{Fs=h}}};return c}}let Fs=null;function Wm(n,e){if(Ht){let t=Ht.provides;const i=Ht.parent&&Ht.parent.provides;i===t&&(t=Ht.provides=Object.create(i)),t[n]=e}}function Ro(n,e,t=!1){const i=Ht||Pn;if(i||Fs){const s=Fs?Fs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Xe(e)?e.call(i&&i.proxy):e}}const pd={},md=()=>Object.create(pd),gd=n=>Object.getPrototypeOf(n)===pd;function Xm(n,e,t,i=!1){const s={},r=md();n.propsDefaults=Object.create(null),_d(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:cm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function jm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=tt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ua(n.emitsOptions,f))continue;const d=e[f];if(l)if(rt(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const g=Fi(f);s[g]=bl(l,a,g,d,n,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{_d(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!rt(e,h)&&((u=ls(h))===h||!rt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=bl(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!rt(e,h))&&(delete r[h],c=!0)}c&&ai(n.attrs,"set","")}function _d(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(_r(l))continue;const c=e[l];let u;s&&rt(s,u=Fi(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ua(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=tt(t),c=a||ft;for(let u=0;u<r.length;u++){const h=r[u];t[h]=bl(s,l,h,c[h],n,!rt(c,h))}}return o}function bl(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Vr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ls(t))&&(i=!0))}return i}const qm=new WeakMap;function xd(n,e,t=!1){const i=t?qm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xe(n)){const u=h=>{l=!0;const[f,d]=xd(h,e,!0);Nt(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return dt(n)&&i.set(n,Ds),Ds;if(Be(r))for(let u=0;u<r.length;u++){const h=Fi(r[u]);Su(h)&&(o[h]=ft)}else if(r)for(const u in r){const h=Fi(u);if(Su(h)){const f=r[u],d=o[h]=Be(f)||Xe(f)?{type:f}:Nt({},f),g=d.type;let _=!1,m=!0;if(Be(g))for(let p=0;p<g.length;++p){const A=g[p],E=Xe(A)&&A.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=Xe(g)&&g.name==="Boolean";d[0]=_,d[1]=m,(_||rt(d,"default"))&&a.push(h)}}const c=[o,a];return dt(n)&&i.set(n,c),c}function Su(n){return n[0]!=="$"&&!_r(n)}const Uc=n=>n[0]==="_"||n==="$stable",Nc=n=>Be(n)?n.map(zn):[zn(n)],Ym=(n,e,t)=>{if(e._n)return e;const i=td((...s)=>Nc(e(...s)),t);return i._c=!1,i},vd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Uc(s))continue;const r=n[s];if(Xe(r))e[s]=Ym(s,r,i);else if(r!=null){const o=Nc(r);e[s]=()=>o}}},yd=(n,e)=>{const t=Nc(e);n.slots.default=()=>t},Md=(n,e,t)=>{for(const i in e)(t||!Uc(i))&&(n[i]=e[i])},Km=(n,e,t)=>{const i=n.slots=md();if(n.vnode.shapeFlag&32){const s=e._;s?(Md(i,e,t),t&&Rf(i,"_",s,!0)):vd(e,i)}else e&&yd(n,e)},$m=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ft;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Md(s,e,t):(r=!e.$stable,vd(e,s)),o=e}else e&&(yd(n,e),o={default:1});if(r)for(const a in s)!Uc(a)&&o[a]==null&&delete s[a]},cn=ug;function Zm(n){return Jm(n)}function Jm(n,e){const t=ra();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=kn,insertStaticContent:g}=n,_=(C,L,S,ce=null,Q=null,ee=null,te=void 0,ue=null,J=!!L.dynamicChildren)=>{if(C===L)return;C&&!is(C,L)&&(ce=ge(C),Fe(C,Q,ee,!0),C=null),L.patchFlag===-2&&(J=!1,L.dynamicChildren=null);const{type:v,ref:x,shapeFlag:I}=L;switch(v){case ha:m(C,L,S,ce);break;case Kt:p(C,L,S,ce);break;case Ca:C==null&&A(L,S,ce,te);break;case un:H(C,L,S,ce,Q,ee,te,ue,J);break;default:I&1?U(C,L,S,ce,Q,ee,te,ue,J):I&6?X(C,L,S,ce,Q,ee,te,ue,J):(I&64||I&128)&&v.process(C,L,S,ce,Q,ee,te,ue,J,De)}x!=null&&Q&&jo(x,C&&C.ref,ee,L||C,!L)},m=(C,L,S,ce)=>{if(C==null)i(L.el=a(L.children),S,ce);else{const Q=L.el=C.el;L.children!==C.children&&c(Q,L.children)}},p=(C,L,S,ce)=>{C==null?i(L.el=l(L.children||""),S,ce):L.el=C.el},A=(C,L,S,ce)=>{[C.el,C.anchor]=g(C.children,L,S,ce,C.el,C.anchor)},E=({el:C,anchor:L},S,ce)=>{let Q;for(;C&&C!==L;)Q=f(C),i(C,S,ce),C=Q;i(L,S,ce)},y=({el:C,anchor:L})=>{let S;for(;C&&C!==L;)S=f(C),s(C),C=S;s(L)},U=(C,L,S,ce,Q,ee,te,ue,J)=>{L.type==="svg"?te="svg":L.type==="math"&&(te="mathml"),C==null?D(L,S,ce,Q,ee,te,ue,J):b(C,L,Q,ee,te,ue,J)},D=(C,L,S,ce,Q,ee,te,ue)=>{let J,v;const{props:x,shapeFlag:I,transition:W,dirs:w}=C;if(J=C.el=o(C.type,ee,x&&x.is,x),I&8?u(J,C.children):I&16&&z(C.children,J,null,ce,Q,Ra(C,ee),te,ue),w&&Gi(C,null,ce,"created"),P(J,C,C.scopeId,te,ce),x){for(const O in x)O!=="value"&&!_r(O)&&r(J,O,null,x[O],ee,ce);"value"in x&&r(J,"value",null,x.value,ee),(v=x.onVnodeBeforeMount)&&On(v,ce,C)}w&&Gi(C,null,ce,"beforeMount");const R=Qm(Q,W);R&&W.beforeEnter(J),i(J,L,S),((v=x&&x.onVnodeMounted)||R||w)&&cn(()=>{v&&On(v,ce,C),R&&W.enter(J),w&&Gi(C,null,ce,"mounted")},Q)},P=(C,L,S,ce,Q)=>{if(S&&d(C,S),ce)for(let ee=0;ee<ce.length;ee++)d(C,ce[ee]);if(Q){let ee=Q.subTree;if(L===ee||wd(ee.type)&&(ee.ssContent===L||ee.ssFallback===L)){const te=Q.vnode;P(C,te,te.scopeId,te.slotScopeIds,Q.parent)}}},z=(C,L,S,ce,Q,ee,te,ue,J=0)=>{for(let v=J;v<C.length;v++){const x=C[v]=ue?wi(C[v]):zn(C[v]);_(null,x,L,S,ce,Q,ee,te,ue)}},b=(C,L,S,ce,Q,ee,te)=>{const ue=L.el=C.el;let{patchFlag:J,dynamicChildren:v,dirs:x}=L;J|=C.patchFlag&16;const I=C.props||ft,W=L.props||ft;let w;if(S&&Wi(S,!1),(w=W.onVnodeBeforeUpdate)&&On(w,S,L,C),x&&Gi(L,C,S,"beforeUpdate"),S&&Wi(S,!0),(I.innerHTML&&W.innerHTML==null||I.textContent&&W.textContent==null)&&u(ue,""),v?M(C.dynamicChildren,v,ue,S,ce,Ra(L,Q),ee):te||q(C,L,ue,null,S,ce,Ra(L,Q),ee,!1),J>0){if(J&16)N(ue,I,W,S,Q);else if(J&2&&I.class!==W.class&&r(ue,"class",null,W.class,Q),J&4&&r(ue,"style",I.style,W.style,Q),J&8){const R=L.dynamicProps;for(let O=0;O<R.length;O++){const G=R[O],j=I[G],re=W[G];(re!==j||G==="value")&&r(ue,G,j,re,Q,S)}}J&1&&C.children!==L.children&&u(ue,L.children)}else!te&&v==null&&N(ue,I,W,S,Q);((w=W.onVnodeUpdated)||x)&&cn(()=>{w&&On(w,S,L,C),x&&Gi(L,C,S,"updated")},ce)},M=(C,L,S,ce,Q,ee,te)=>{for(let ue=0;ue<L.length;ue++){const J=C[ue],v=L[ue],x=J.el&&(J.type===un||!is(J,v)||J.shapeFlag&70)?h(J.el):S;_(J,v,x,null,ce,Q,ee,te,!0)}},N=(C,L,S,ce,Q)=>{if(L!==S){if(L!==ft)for(const ee in L)!_r(ee)&&!(ee in S)&&r(C,ee,L[ee],null,Q,ce);for(const ee in S){if(_r(ee))continue;const te=S[ee],ue=L[ee];te!==ue&&ee!=="value"&&r(C,ee,ue,te,Q,ce)}"value"in S&&r(C,"value",L.value,S.value,Q)}},H=(C,L,S,ce,Q,ee,te,ue,J)=>{const v=L.el=C?C.el:a(""),x=L.anchor=C?C.anchor:a("");let{patchFlag:I,dynamicChildren:W,slotScopeIds:w}=L;w&&(ue=ue?ue.concat(w):w),C==null?(i(v,S,ce),i(x,S,ce),z(L.children||[],S,x,Q,ee,te,ue,J)):I>0&&I&64&&W&&C.dynamicChildren?(M(C.dynamicChildren,W,S,Q,ee,te,ue),(L.key!=null||Q&&L===Q.subTree)&&Sd(C,L,!0)):q(C,L,S,x,Q,ee,te,ue,J)},X=(C,L,S,ce,Q,ee,te,ue,J)=>{L.slotScopeIds=ue,C==null?L.shapeFlag&512?Q.ctx.activate(L,S,ce,te,J):se(L,S,ce,Q,ee,te,J):ae(C,L,J)},se=(C,L,S,ce,Q,ee,te)=>{const ue=C.component=vg(C,ce,Q);if(la(C)&&(ue.ctx.renderer=De),Mg(ue,!1,te),ue.asyncDep){if(Q&&Q.registerDep(ue,Y,te),!C.el){const J=ue.subTree=tn(Kt);p(null,J,L,S)}}else Y(ue,C,L,S,Q,ee,te)},ae=(C,L,S)=>{const ce=L.component=C.component;if(lg(C,L,S))if(ce.asyncDep&&!ce.asyncResolved){ne(ce,L,S);return}else ce.next=L,ce.update();else L.el=C.el,ce.vnode=L},Y=(C,L,S,ce,Q,ee,te)=>{const ue=()=>{if(C.isMounted){let{next:I,bu:W,u:w,parent:R,vnode:O}=C;{const le=Td(C);if(le){I&&(I.el=O.el,ne(C,I,te)),le.asyncDep.then(()=>{C.isUnmounted||ue()});return}}let G=I,j;Wi(C,!1),I?(I.el=O.el,ne(C,I,te)):I=O,W&&ya(W),(j=I.props&&I.props.onVnodeBeforeUpdate)&&On(j,R,I,O),Wi(C,!0);const re=bu(C),Z=C.subTree;C.subTree=re,_(Z,re,h(Z.el),ge(Z),C,Q,ee),I.el=re.el,G===null&&cg(C,re.el),w&&cn(w,Q),(j=I.props&&I.props.onVnodeUpdated)&&cn(()=>On(j,R,I,O),Q)}else{let I;const{el:W,props:w}=L,{bm:R,m:O,parent:G,root:j,type:re}=C,Z=yr(L);Wi(C,!1),R&&ya(R),!Z&&(I=w&&w.onVnodeBeforeMount)&&On(I,G,L),Wi(C,!0);{j.ce&&j.ce._injectChildStyle(re);const le=C.subTree=bu(C);_(null,le,S,ce,C,Q,ee),L.el=le.el}if(O&&cn(O,Q),!Z&&(I=w&&w.onVnodeMounted)){const le=L;cn(()=>On(I,G,le),Q)}(L.shapeFlag&256||G&&yr(G.vnode)&&G.vnode.shapeFlag&256)&&C.a&&cn(C.a,Q),C.isMounted=!0,L=S=ce=null}};C.scope.on();const J=C.effect=new Df(ue);C.scope.off();const v=C.update=J.run.bind(J),x=C.job=J.runIfDirty.bind(J);x.i=C,x.id=C.uid,J.scheduler=()=>Lc(x),Wi(C,!0),v()},ne=(C,L,S)=>{L.component=C;const ce=C.vnode.props;C.vnode=L,C.next=null,jm(C,L.props,ce,S),$m(C,L.children,S),di(),gu(C),pi()},q=(C,L,S,ce,Q,ee,te,ue,J=!1)=>{const v=C&&C.children,x=C?C.shapeFlag:0,I=L.children,{patchFlag:W,shapeFlag:w}=L;if(W>0){if(W&128){ve(v,I,S,ce,Q,ee,te,ue,J);return}else if(W&256){me(v,I,S,ce,Q,ee,te,ue,J);return}}w&8?(x&16&&Ee(v,Q,ee),I!==v&&u(S,I)):x&16?w&16?ve(v,I,S,ce,Q,ee,te,ue,J):Ee(v,Q,ee,!0):(x&8&&u(S,""),w&16&&z(I,S,ce,Q,ee,te,ue,J))},me=(C,L,S,ce,Q,ee,te,ue,J)=>{C=C||Ds,L=L||Ds;const v=C.length,x=L.length,I=Math.min(v,x);let W;for(W=0;W<I;W++){const w=L[W]=J?wi(L[W]):zn(L[W]);_(C[W],w,S,null,Q,ee,te,ue,J)}v>x?Ee(C,Q,ee,!0,!1,I):z(L,S,ce,Q,ee,te,ue,J,I)},ve=(C,L,S,ce,Q,ee,te,ue,J)=>{let v=0;const x=L.length;let I=C.length-1,W=x-1;for(;v<=I&&v<=W;){const w=C[v],R=L[v]=J?wi(L[v]):zn(L[v]);if(is(w,R))_(w,R,S,null,Q,ee,te,ue,J);else break;v++}for(;v<=I&&v<=W;){const w=C[I],R=L[W]=J?wi(L[W]):zn(L[W]);if(is(w,R))_(w,R,S,null,Q,ee,te,ue,J);else break;I--,W--}if(v>I){if(v<=W){const w=W+1,R=w<x?L[w].el:ce;for(;v<=W;)_(null,L[v]=J?wi(L[v]):zn(L[v]),S,R,Q,ee,te,ue,J),v++}}else if(v>W)for(;v<=I;)Fe(C[v],Q,ee,!0),v++;else{const w=v,R=v,O=new Map;for(v=R;v<=W;v++){const de=L[v]=J?wi(L[v]):zn(L[v]);de.key!=null&&O.set(de.key,v)}let G,j=0;const re=W-R+1;let Z=!1,le=0;const _e=new Array(re);for(v=0;v<re;v++)_e[v]=0;for(v=w;v<=I;v++){const de=C[v];if(j>=re){Fe(de,Q,ee,!0);continue}let Te;if(de.key!=null)Te=O.get(de.key);else for(G=R;G<=W;G++)if(_e[G-R]===0&&is(de,L[G])){Te=G;break}Te===void 0?Fe(de,Q,ee,!0):(_e[Te-R]=v+1,Te>=le?le=Te:Z=!0,_(de,L[Te],S,null,Q,ee,te,ue,J),j++)}const Ae=Z?eg(_e):Ds;for(G=Ae.length-1,v=re-1;v>=0;v--){const de=R+v,Te=L[de],ze=de+1<x?L[de+1].el:ce;_e[v]===0?_(null,Te,S,ze,Q,ee,te,ue,J):Z&&(G<0||v!==Ae[G]?we(Te,S,ze,2):G--)}}},we=(C,L,S,ce,Q=null)=>{const{el:ee,type:te,transition:ue,children:J,shapeFlag:v}=C;if(v&6){we(C.component.subTree,L,S,ce);return}if(v&128){C.suspense.move(L,S,ce);return}if(v&64){te.move(C,L,S,De);return}if(te===un){i(ee,L,S);for(let I=0;I<J.length;I++)we(J[I],L,S,ce);i(C.anchor,L,S);return}if(te===Ca){E(C,L,S);return}if(ce!==2&&v&1&&ue)if(ce===0)ue.beforeEnter(ee),i(ee,L,S),cn(()=>ue.enter(ee),Q);else{const{leave:I,delayLeave:W,afterLeave:w}=ue,R=()=>{C.ctx.isUnmounted?s(ee):i(ee,L,S)},O=()=>{I(ee,()=>{R(),w&&w()})};W?W(ee,R,O):O()}else i(ee,L,S)},Fe=(C,L,S,ce=!1,Q=!1)=>{const{type:ee,props:te,ref:ue,children:J,dynamicChildren:v,shapeFlag:x,patchFlag:I,dirs:W,cacheIndex:w}=C;if(I===-2&&(Q=!1),ue!=null&&(di(),jo(ue,null,S,C,!0),pi()),w!=null&&(L.renderCache[w]=void 0),x&256){L.ctx.deactivate(C);return}const R=x&1&&W,O=!yr(C);let G;if(O&&(G=te&&te.onVnodeBeforeUnmount)&&On(G,L,C),x&6)pe(C.component,S,ce);else{if(x&128){C.suspense.unmount(S,ce);return}R&&Gi(C,null,L,"beforeUnmount"),x&64?C.type.remove(C,L,S,De,ce):v&&!v.hasOnce&&(ee!==un||I>0&&I&64)?Ee(v,L,S,!1,!0):(ee===un&&I&384||!Q&&x&16)&&Ee(J,L,S),ce&&Qe(C)}(O&&(G=te&&te.onVnodeUnmounted)||R)&&cn(()=>{G&&On(G,L,C),R&&Gi(C,null,L,"unmounted")},S)},Qe=C=>{const{type:L,el:S,anchor:ce,transition:Q}=C;if(L===un){oe(S,ce);return}if(L===Ca){y(C);return}const ee=()=>{s(S),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(C.shapeFlag&1&&Q&&!Q.persisted){const{leave:te,delayLeave:ue}=Q,J=()=>te(S,ee);ue?ue(C.el,ee,J):J()}else ee()},oe=(C,L)=>{let S;for(;C!==L;)S=f(C),s(C),C=S;s(L)},pe=(C,L,S)=>{const{bum:ce,scope:Q,job:ee,subTree:te,um:ue,m:J,a:v,parent:x,slots:{__:I}}=C;Tu(J),Tu(v),ce&&ya(ce),x&&Be(I)&&I.forEach(W=>{x.renderCache[W]=void 0}),Q.stop(),ee&&(ee.flags|=8,Fe(te,C,L,S)),ue&&cn(ue,L),cn(()=>{C.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},Ee=(C,L,S,ce=!1,Q=!1,ee=0)=>{for(let te=ee;te<C.length;te++)Fe(C[te],L,S,ce,Q)},ge=C=>{if(C.shapeFlag&6)return ge(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const L=f(C.anchor||C.el),S=L&&L[Mm];return S?f(S):L};let Le=!1;const Ke=(C,L,S)=>{C==null?L._vnode&&Fe(L._vnode,null,null,!0):_(L._vnode||null,C,L,null,null,null,S),L._vnode=C,Le||(Le=!0,gu(),Jf(),Le=!1)},De={p:_,um:Fe,m:we,r:Qe,mt:se,mc:z,pc:q,pbc:M,n:ge,o:n};return{render:Ke,hydrate:void 0,createApp:Gm(Ke)}}function Ra({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Wi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Qm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Sd(n,e,t=!1){const i=n.children,s=e.children;if(Be(i)&&Be(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=wi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Sd(o,a)),a.type===ha&&(a.el=o.el),a.type===Kt&&!a.el&&(a.el=o.el)}}function eg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Td(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Td(e)}function Tu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const tg=Symbol.for("v-scx"),ng=()=>Ro(tg);function Co(n,e,t){return bd(n,e,t)}function bd(n,e,t=ft){const{immediate:i,deep:s,flush:r,once:o}=t,a=Nt({},t),l=e&&i||!e&&r!=="post";let c;if(Dr){if(r==="sync"){const d=ng();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=kn,d.resume=kn,d.pause=kn,d}}const u=Ht;a.call=(d,g,_)=>Nn(d,u,g,_);let h=!1;r==="post"?a.scheduler=d=>{cn(d,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(d,g)=>{g?d():Lc(d)}),a.augmentJob=d=>{e&&(d.flags|=4),h&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const f=_m(n,e,a);return Dr&&(c?c.push(f):l&&f()),f}function ig(n,e,t){const i=this.proxy,s=vt(n)?n.includes(".")?Ed(i,n):()=>i[n]:n.bind(i,i);let r;Xe(e)?r=e:(r=e.handler,t=e);const o=Vr(this),a=bd(s,r.bind(i),t);return o(),a}function Ed(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const sg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Fi(e)}Modifiers`]||n[`${ls(e)}Modifiers`];function rg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ft;let s=t;const r=e.startsWith("update:"),o=r&&sg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>vt(u)?u.trim():u)),o.number&&(s=t.map(Np)));let a,l=i[a=va(e)]||i[a=va(Fi(e))];!l&&r&&(l=i[a=va(ls(e))]),l&&Nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,s)}}function Ad(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xe(n)){const l=c=>{const u=Ad(c,e,!0);u&&(a=!0,Nt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(dt(n)&&i.set(n,null),null):(Be(r)?r.forEach(l=>o[l]=null):Nt(o,r),dt(n)&&i.set(n,o),o)}function ua(n,e){return!n||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,ls(e))||rt(n,e))}function bu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:d,ctx:g,inheritAttrs:_}=n,m=Xo(n);let p,A;try{if(t.shapeFlag&4){const y=s||i,U=y;p=zn(c.call(U,y,u,h,d,f,g)),A=a}else{const y=e;p=zn(y.length>1?y(h,{attrs:a,slots:o,emit:l}):y(h,null)),A=e.props?a:og(a)}}catch(y){Sr.length=0,aa(y,n,1),p=tn(Kt)}let E=p;if(A&&_!==!1){const y=Object.keys(A),{shapeFlag:U}=E;y.length&&U&7&&(r&&y.some(yc)&&(A=ag(A,r)),E=Bi(E,A,!1,!0))}return t.dirs&&(E=Bi(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&Pr(E,t.transition),p=E,Xo(m),p}const og=n=>{let e;for(const t in n)(t==="class"||t==="style"||na(t))&&((e||(e={}))[t]=n[t]);return e},ag=(n,e)=>{const t={};for(const i in n)(!yc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function lg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Eu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==i[f]&&!ua(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Eu(i,o,c):!0:!!o;return!1}function Eu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!ua(t,r))return!0}return!1}function cg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const wd=n=>n.__isSuspense;function ug(n,e){e&&e.pendingBranch?Be(n)?e.effects.push(...n):e.effects.push(n):ym(n)}const un=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Ca=Symbol.for("v-stc"),Sr=[];let hn=null;function Ct(n=!1){Sr.push(hn=n?null:[])}function hg(){Sr.pop(),hn=Sr[Sr.length-1]||null}let Lr=1;function Au(n,e=!1){Lr+=n,n<0&&hn&&e&&(hn.hasOnce=!0)}function Rd(n){return n.dynamicChildren=Lr>0?hn||Ds:null,hg(),Lr>0&&hn&&hn.push(n),n}function Lt(n,e,t,i,s,r){return Rd(Ie(n,e,t,i,s,r,!0))}function fg(n,e,t,i,s){return Rd(tn(n,e,t,i,s,!0))}function Yo(n){return n?n.__v_isVNode===!0:!1}function is(n,e){return n.type===e.type&&n.key===e.key}const Cd=({key:n})=>n??null,Po=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||kt(n)||Xe(n)?{i:Pn,r:n,k:e,f:!!t}:n:null);function Ie(n,e=null,t=null,i=0,s=null,r=n===un?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Cd(e),ref:e&&Po(e),scopeId:ed,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Pn};return a?(Fc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),Lr>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const tn=dg;function dg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Nm)&&(n=Kt),Yo(n)){const a=Bi(n,e,!0);return t&&Fc(a,t),Lr>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if(Eg(n)&&(n=n.__vccOpts),e){e=pg(e);let{class:a,style:l}=e;a&&!vt(a)&&(e.class=_n(a)),dt(l)&&(Pc(l)&&!Be(l)&&(l=Nt({},l)),e.style=Tc(l))}const o=vt(n)?1:wd(n)?128:nd(n)?64:dt(n)?4:Xe(n)?2:0;return Ie(n,e,t,i,s,o,r,!0)}function pg(n){return n?Pc(n)||gd(n)?Nt({},n):n:null}function Bi(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?gg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Cd(c),ref:e&&e.ref?t&&r?Be(r)?r.concat(Po(e)):[r,Po(e)]:Po(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==un?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bi(n.ssContent),ssFallback:n.ssFallback&&Bi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Pr(u,l.clone(u)),u}function mg(n=" ",e=0){return tn(ha,null,n,e)}function Xi(n="",e=!1){return e?(Ct(),fg(Kt,null,n)):tn(Kt,null,n)}function zn(n){return n==null||typeof n=="boolean"?tn(Kt):Be(n)?tn(un,null,n.slice()):Yo(n)?wi(n):tn(ha,null,String(n))}function wi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bi(n)}function Fc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Be(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Fc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!gd(e)?e._ctx=Pn:s===3&&Pn&&(Pn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Pn},t=32):(e=String(e),i&64?(t=16,e=[mg(e)]):t=8);n.children=e,n.shapeFlag|=t}function gg(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=_n([e.class,i.class]));else if(s==="style")e.style=Tc([e.style,i.style]);else if(na(s)){const r=e[s],o=i[s];o&&r!==o&&!(Be(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function On(n,e,t,i=null){Nn(n,e,7,[t,i])}const _g=dd();let xg=0;function vg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||_g,r={uid:xg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(i,s),emitsOptions:Ad(i,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:i.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=rg.bind(null,r),n.ce&&n.ce(r),r}let Ht=null;const yg=()=>Ht||Pn;let Ko,El;{const n=ra(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ko=e("__VUE_INSTANCE_SETTERS__",t=>Ht=t),El=e("__VUE_SSR_SETTERS__",t=>Dr=t)}const Vr=n=>{const e=Ht;return Ko(n),n.scope.on(),()=>{n.scope.off(),Ko(e)}},wu=()=>{Ht&&Ht.scope.off(),Ko(null)};function Pd(n){return n.vnode.shapeFlag&4}let Dr=!1;function Mg(n,e=!1,t=!1){e&&El(e);const{props:i,children:s}=n.vnode,r=Pd(n);Xm(n,i,r,e),Km(n,s,t||e);const o=r?Sg(n,e):void 0;return e&&El(!1),o}function Sg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Fm);const{setup:i}=t;if(i){di();const s=n.setupContext=i.length>1?bg(n):null,r=Vr(n),o=kr(i,n,0,[n.props,s]),a=bf(o);if(pi(),r(),(a||n.sp)&&!yr(n)&&ld(n),a){if(o.then(wu,wu),e)return o.then(l=>{Ru(n,l)}).catch(l=>{aa(l,n,0)});n.asyncDep=o}else Ru(n,o)}else Ld(n)}function Ru(n,e,t){Xe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=Yf(e)),Ld(n)}function Ld(n,e,t){const i=n.type;n.render||(n.render=i.render||kn);{const s=Vr(n);di();try{Om(n)}finally{pi(),s()}}}const Tg={get(n,e){return zt(n,"get",""),n[e]}};function bg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Tg),slots:n.slots,emit:n.emit,expose:e}}function Oc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yf(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Mr)return Mr[t](n)},has(e,t){return t in e||t in Mr}})):n.proxy}function Eg(n){return Xe(n)&&"__vccOpts"in n}const Dd=(n,e)=>mm(n,e,Dr);function Ag(n,e,t){const i=arguments.length;return i===2?dt(e)&&!Be(e)?Yo(e)?tn(n,null,[e]):tn(n,e):tn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Yo(t)&&(t=[t]),tn(n,e,t))}const wg="3.5.14";/**
* @vue/runtime-dom v3.5.14
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Al;const Cu=typeof window<"u"&&window.trustedTypes;if(Cu)try{Al=Cu.createPolicy("vue",{createHTML:n=>n})}catch{}const Id=Al?n=>Al.createHTML(n):n=>n,Rg="http://www.w3.org/2000/svg",Cg="http://www.w3.org/1998/Math/MathML",ri=typeof document<"u"?document:null,Pu=ri&&ri.createElement("template"),Pg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ri.createElementNS(Rg,n):e==="mathml"?ri.createElementNS(Cg,n):t?ri.createElement(n,{is:t}):ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ri.createTextNode(n),createComment:n=>ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Pu.innerHTML=Id(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Pu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_i="transition",sr="animation",Ir=Symbol("_vtc"),Ud={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Lg=Nt({},id,Ud),Dg=n=>(n.displayName="Transition",n.props=Lg,n),Ig=Dg((n,{slots:e})=>Ag(bm,Ug(n),e)),ji=(n,e=[])=>{Be(n)?n.forEach(t=>t(...e)):n&&n(...e)},Lu=n=>n?Be(n)?n.some(e=>e.length>1):n.length>1:!1;function Ug(n){const e={};for(const H in n)H in Ud||(e[H]=n[H]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,g=Ng(s),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:E,onLeave:y,onLeaveCancelled:U,onBeforeAppear:D=p,onAppear:P=A,onAppearCancelled:z=E}=e,b=(H,X,se,ae)=>{H._enterCancelled=ae,qi(H,X?u:a),qi(H,X?c:o),se&&se()},M=(H,X)=>{H._isLeaving=!1,qi(H,h),qi(H,d),qi(H,f),X&&X()},N=H=>(X,se)=>{const ae=H?P:A,Y=()=>b(X,H,se);ji(ae,[X,Y]),Du(()=>{qi(X,H?l:r),Zn(X,H?u:a),Lu(ae)||Iu(X,i,_,Y)})};return Nt(e,{onBeforeEnter(H){ji(p,[H]),Zn(H,r),Zn(H,o)},onBeforeAppear(H){ji(D,[H]),Zn(H,l),Zn(H,c)},onEnter:N(!1),onAppear:N(!0),onLeave(H,X){H._isLeaving=!0;const se=()=>M(H,X);Zn(H,h),H._enterCancelled?(Zn(H,f),Fu()):(Fu(),Zn(H,f)),Du(()=>{H._isLeaving&&(qi(H,h),Zn(H,d),Lu(y)||Iu(H,i,m,se))}),ji(y,[H,se])},onEnterCancelled(H){b(H,!1,void 0,!0),ji(E,[H])},onAppearCancelled(H){b(H,!0,void 0,!0),ji(z,[H])},onLeaveCancelled(H){M(H),ji(U,[H])}})}function Ng(n){if(n==null)return null;if(dt(n))return[Pa(n.enter),Pa(n.leave)];{const e=Pa(n);return[e,e]}}function Pa(n){return Fp(n)}function Zn(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ir]||(n[Ir]=new Set)).add(e)}function qi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Ir];t&&(t.delete(e),t.size||(n[Ir]=void 0))}function Du(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Fg=0;function Iu(n,e,t,i){const s=n._endId=++Fg,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=Og(n,e);if(!o)return i();const c=o+"end";let u=0;const h=()=>{n.removeEventListener(c,f),r()},f=d=>{d.target===n&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),n.addEventListener(c,f)}function Og(n,e){const t=window.getComputedStyle(n),i=g=>(t[g]||"").split(", "),s=i(`${_i}Delay`),r=i(`${_i}Duration`),o=Uu(s,r),a=i(`${sr}Delay`),l=i(`${sr}Duration`),c=Uu(a,l);let u=null,h=0,f=0;e===_i?o>0&&(u=_i,h=o,f=r.length):e===sr?c>0&&(u=sr,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?_i:sr:null,f=u?u===_i?r.length:l.length:0);const d=u===_i&&/\b(transform|all)(,|$)/.test(i(`${_i}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:d}}function Uu(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Nu(t)+Nu(n[i])))}function Nu(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Fu(){return document.body.offsetHeight}function Bg(n,e,t){const i=n[Ir];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ou=Symbol("_vod"),zg=Symbol("_vsh"),Hg=Symbol(""),kg=/(^|;)\s*display\s*:/;function Vg(n,e,t){const i=n.style,s=vt(t);let r=!1;if(t&&!s){if(e)if(vt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Lo(i,a,"")}else for(const o in e)t[o]==null&&Lo(i,o,"");for(const o in t)o==="display"&&(r=!0),Lo(i,o,t[o])}else if(s){if(e!==t){const o=i[Hg];o&&(t+=";"+o),i.cssText=t,r=kg.test(t)}}else e&&n.removeAttribute("style");Ou in n&&(n[Ou]=r?i.display:"",n[zg]&&(i.display="none"))}const Bu=/\s*!important$/;function Lo(n,e,t){if(Be(t))t.forEach(i=>Lo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Gg(n,e);Bu.test(t)?n.setProperty(ls(i),t.replace(Bu,""),"important"):n[i]=t}}const zu=["Webkit","Moz","ms"],La={};function Gg(n,e){const t=La[e];if(t)return t;let i=Fi(e);if(i!=="filter"&&i in n)return La[e]=i;i=wf(i);for(let s=0;s<zu.length;s++){const r=zu[s]+i;if(r in n)return La[e]=r}return e}const Hu="http://www.w3.org/1999/xlink";function ku(n,e,t,i,s,r=Vp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Hu,e.slice(6,e.length)):n.setAttributeNS(Hu,e,t):t==null||r&&!Cf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":zi(t)?String(t):t)}function Vu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Id(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Cf(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Wg(n,e,t,i){n.addEventListener(e,t,i)}function Xg(n,e,t,i){n.removeEventListener(e,t,i)}const Gu=Symbol("_vei");function jg(n,e,t,i,s=null){const r=n[Gu]||(n[Gu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=qg(e);if(i){const c=r[e]=$g(i,s);Wg(n,a,c,l)}else o&&(Xg(n,a,o,l),r[e]=void 0)}}const Wu=/(?:Once|Passive|Capture)$/;function qg(n){let e;if(Wu.test(n)){e={};let i;for(;i=n.match(Wu);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ls(n.slice(2)),e]}let Da=0;const Yg=Promise.resolve(),Kg=()=>Da||(Yg.then(()=>Da=0),Da=Date.now());function $g(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Nn(Zg(i,t.value),e,5,[i])};return t.value=n,t.attached=Kg(),t}function Zg(n,e){if(Be(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Xu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Jg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Bg(n,i,o):e==="style"?Vg(n,t,i):na(e)?yc(e)||jg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qg(n,e,i,o))?(Vu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ku(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!vt(i))?Vu(n,Fi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ku(n,e,i,o))};function Qg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Xu(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xu(e)&&vt(t)?!1:e in n}const e_=["ctrl","shift","alt","meta"],t_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>e_.some(t=>n[`${t}Key`]&&!e.includes(t))},n_=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=t_[e[o]];if(a&&a(s,e))return}return n(s,...r)})},i_=Nt({patchProp:Jg},Pg);let ju;function s_(){return ju||(ju=Zm(i_))}const r_=(...n)=>{const e=s_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=a_(i);if(!s)return;const r=e._component;!Xe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,o_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function o_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function a_(n){return vt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="176",Os={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},l_=0,qu=1,c_=2,Nd=1,Fd=2,si=3,mi=0,Tt=1,wn=2,ui=0,Bs=1,wl=2,Yu=3,Ku=4,u_=5,ss=100,h_=101,f_=102,d_=103,p_=104,m_=200,g_=201,__=202,x_=203,Rl=204,Cl=205,v_=206,y_=207,M_=208,S_=209,T_=210,b_=211,E_=212,A_=213,w_=214,Pl=0,Ll=1,Dl=2,ks=3,Il=4,Ul=5,Nl=6,Fl=7,Od=0,R_=1,C_=2,Ni=0,P_=1,L_=2,D_=3,Bd=4,I_=5,U_=6,N_=7,$u="attached",F_="detached",zd=300,Vs=301,Gs=302,Ol=303,Bl=304,fa=306,Ws=1e3,Li=1001,$o=1002,$t=1003,Hd=1004,mr=1005,fn=1006,Do=1007,li=1008,Gn=1009,kd=1010,Vd=1011,Ur=1012,zc=1013,as=1014,Ln=1015,hi=1016,Hc=1017,kc=1018,Nr=1020,Gd=35902,Wd=1021,Xd=1022,vn=1023,Fr=1026,Or=1027,Vc=1028,Gc=1029,jd=1030,Wc=1031,Xc=1033,Io=33776,Uo=33777,No=33778,Fo=33779,zl=35840,Hl=35841,kl=35842,Vl=35843,Gl=36196,Wl=37492,Xl=37496,jl=37808,ql=37809,Yl=37810,Kl=37811,$l=37812,Zl=37813,Jl=37814,Ql=37815,ec=37816,tc=37817,nc=37818,ic=37819,sc=37820,rc=37821,Oo=36492,oc=36494,ac=36495,qd=36283,lc=36284,cc=36285,uc=36286,Br=2300,zr=2301,Ia=2302,Zu=2400,Ju=2401,Qu=2402,O_=2500,B_=0,Yd=1,hc=2,z_=3200,H_=3201,Kd=0,k_=1,Pi="",Dt="srgb",Zt="srgb-linear",Zo="linear",ct="srgb",fs=7680,eh=519,V_=512,G_=513,W_=514,$d=515,X_=516,j_=517,q_=518,Y_=519,fc=35044,th="300 es",ci=2e3,Jo=2001;class cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const Tr=Math.PI/180,Xs=180/Math.PI;function In(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function qe(n,e,t){return Math.max(e,Math.min(t,n))}function jc(n,e){return(n%e+e)%e}function K_(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function $_(n,e,t){return n!==e?(t-n)/(e-n):0}function br(n,e,t){return(1-t)*n+t*e}function Z_(n,e,t,i){return br(n,e,1-Math.exp(-t*i))}function J_(n,e=1){return e-Math.abs(jc(n,e*2)-e)}function Q_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function e0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function t0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function n0(n,e){return n+Math.random()*(e-n)}function i0(n){return n*(.5-Math.random())}function s0(n){n!==void 0&&(nh=n);let e=nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r0(n){return n*Tr}function o0(n){return n*Xs}function a0(n){return(n&n-1)===0&&n!==0}function l0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function c0(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function u0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),d=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function at(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zd={DEG2RAD:Tr,RAD2DEG:Xs,generateUUID:In,clamp:qe,euclideanModulo:jc,mapLinear:K_,inverseLerp:$_,lerp:br,damp:Z_,pingpong:J_,smoothstep:Q_,smootherstep:e0,randInt:t0,randFloat:n0,randFloatSpread:i0,seededRandom:s0,degToRad:r0,radToDeg:o0,isPowerOfTwo:a0,ceilPowerOfTwo:l0,floorPowerOfTwo:c0,setQuaternionFromProperEuler:u0,normalize:at,denormalize:Rn};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,s,r,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],A=s[1],E=s[4],y=s[7],U=s[2],D=s[5],P=s[8];return r[0]=o*_+a*A+l*U,r[3]=o*m+a*E+l*D,r[6]=o*p+a*y+l*P,r[1]=c*_+u*A+h*U,r[4]=c*m+u*E+h*D,r[7]=c*p+u*y+h*P,r[2]=f*_+d*A+g*U,r[5]=f*m+d*E+g*D,r[8]=f*p+d*y+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,g=t*h+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new We;function Jd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Hr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function h0(){const n=Hr("canvas");return n.style.display="block",n}const ih={};function Bo(n){n in ih||(ih[n]=!0,console.warn(n))}function f0(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function d0(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function p0(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const sh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m0(){const n={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ct&&(s.r=fi(s.r),s.g=fi(s.g),s.b=fi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?Zo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Zt]:{primaries:e,whitePoint:i,transfer:Zo,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dt},outputColorSpaceConfig:{drawingBufferColorSpace:Dt}},[Dt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:sh,fromXYZ:rh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dt}}}),n}const $e=m0();function fi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ds;class g0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ds===void 0&&(ds=Hr("canvas")),ds.width=e.width,ds.height=e.height;const s=ds.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ds}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=fi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fi(t[i]/255)*255):t[i]=fi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _0=0;class qc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=In(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Na(s[o].image)):r.push(Na(s[o]))}else r=Na(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?g0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let x0=0;class Et extends cs{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,i=Li,s=Li,r=fn,o=li,a=vn,l=Gn,c=Et.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=In(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case $o:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case $o:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=zd;Et.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(d+1)/2,U=(p+1)/2,D=(u+f)/4,P=(h+_)/4,z=(g+m)/4;return E>y&&E>U?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=D/i,r=P/i):y>U?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=D/s,r=z/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=P/r,s=z/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(h-_)/A,this.z=(f-u)/A,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v0 extends cs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth?i.depth:1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:this.depth};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},i);const r=new Et(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Un extends v0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Qd extends Et{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y0 extends Et{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==g){let m=1-a;const p=l*f+c*d+u*g+h*_,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const U=Math.sqrt(E),D=Math.atan2(U,p*A);m=Math.sin(m*D)/U,a=Math.sin(a*D)/U}const y=a*A;if(l=l*m+f*y,c=c*m+d*y,u=u*m+g*y,h=h*m+_*y,m===1-a){const U=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=U,c*=U,u*=U,h*=U}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>h){const d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-i-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fa.copy(this).projectOnVector(e),this.sub(Fa)}reflect(e){return this.sub(Fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fa=new F,oh=new Wn;class jn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),eo.subVectors(this.max,rr),ps.subVectors(e.a,rr),ms.subVectors(e.b,rr),gs.subVectors(e.c,rr),xi.subVectors(ms,ps),vi.subVectors(gs,ms),Yi.subVectors(ps,gs);let t=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-Yi.z,Yi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,Yi.z,0,-Yi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-Yi.y,Yi.x,0];return!Oa(t,ps,ms,gs,eo)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,ps,ms,gs,eo))?!1:(to.crossVectors(xi,vi),t=[to.x,to.y,to.z],Oa(t,ps,ms,gs,eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jn=[new F,new F,new F,new F,new F,new F,new F,new F],bn=new F,Qr=new jn,ps=new F,ms=new F,gs=new F,xi=new F,vi=new F,Yi=new F,rr=new F,eo=new F,to=new F,Ki=new F;function Oa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const M0=new jn,or=new F,Ba=new F;class qn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):M0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(or,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ba.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Ba)),this.expandByPoint(or.copy(e.center).sub(Ba))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qn=new F,za=new F,no=new F,yi=new F,Ha=new F,io=new F,ka=new F;class Zs{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){za.copy(e).add(t).multiplyScalar(.5),no.copy(t).sub(e).normalize(),yi.copy(this.origin).sub(za);const r=e.distanceTo(t)*.5,o=-this.direction.dot(no),a=yi.dot(this.direction),l=-yi.dot(no),c=yi.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(za).addScaledVector(no,f),d}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);const i=Qn.dot(this.direction),s=Qn.dot(Qn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,i,s,r){Ha.subVectors(t,e),io.subVectors(i,e),ka.crossVectors(Ha,io);let o=this.direction.dot(ka),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,e);const l=a*this.direction.dot(io.crossVectors(yi,io));if(l<0)return null;const c=a*this.direction.dot(Ha.cross(yi));if(c<0||l+c>o)return null;const u=-a*yi.dot(ka);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m)}set(e,t,i,s,r,o,a,l,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(S0,e,T0)}lookAt(e,t,i){const s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),Mi.crossVectors(i,on),Mi.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Mi.crossVectors(i,on)),Mi.normalize(),so.crossVectors(on,Mi),s[0]=Mi.x,s[4]=so.x,s[8]=on.x,s[1]=Mi.y,s[5]=so.y,s[9]=on.y,s[2]=Mi.z,s[6]=so.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],E=i[7],y=i[11],U=i[15],D=s[0],P=s[4],z=s[8],b=s[12],M=s[1],N=s[5],H=s[9],X=s[13],se=s[2],ae=s[6],Y=s[10],ne=s[14],q=s[3],me=s[7],ve=s[11],we=s[15];return r[0]=o*D+a*M+l*se+c*q,r[4]=o*P+a*N+l*ae+c*me,r[8]=o*z+a*H+l*Y+c*ve,r[12]=o*b+a*X+l*ne+c*we,r[1]=u*D+h*M+f*se+d*q,r[5]=u*P+h*N+f*ae+d*me,r[9]=u*z+h*H+f*Y+d*ve,r[13]=u*b+h*X+f*ne+d*we,r[2]=g*D+_*M+m*se+p*q,r[6]=g*P+_*N+m*ae+p*me,r[10]=g*z+_*H+m*Y+p*ve,r[14]=g*b+_*X+m*ne+p*we,r[3]=A*D+E*M+y*se+U*q,r[7]=A*P+E*N+y*ae+U*me,r[11]=A*z+E*H+y*Y+U*ve,r[15]=A*b+E*X+y*ne+U*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*d-i*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=h*m*c-_*f*c+_*l*d-a*m*d-h*l*p+a*f*p,E=g*f*c-u*m*c-g*l*d+o*m*d+u*l*p-o*f*p,y=u*_*c-g*h*c+g*a*d-o*_*d-u*a*p+o*h*p,U=g*h*l-u*_*l-g*a*f+o*_*f+u*a*m-o*h*m,D=t*A+i*E+s*y+r*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=A*P,e[1]=(_*f*r-h*m*r-_*s*d+i*m*d+h*s*p-i*f*p)*P,e[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*P,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*d-i*l*d)*P,e[4]=E*P,e[5]=(u*m*r-g*f*r+g*s*d-t*m*d-u*s*p+t*f*p)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*d+t*l*d)*P,e[8]=y*P,e[9]=(g*h*r-u*_*r-g*i*d+t*_*d+u*i*p-t*h*p)*P,e[10]=(o*_*r-g*a*r+g*i*c-t*_*c-o*i*p+t*a*p)*P,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*d-t*a*d)*P,e[12]=U*P,e[13]=(u*_*s-g*h*s+g*i*f-t*_*f-u*i*m+t*h*m)*P,e[14]=(g*a*s-o*_*s-g*i*l+t*_*l+o*i*m-t*a*m)*P,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*P,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,A=l*c,E=l*u,y=l*h,U=i.x,D=i.y,P=i.z;return s[0]=(1-(_+p))*U,s[1]=(d+y)*U,s[2]=(g-E)*U,s[3]=0,s[4]=(d-y)*D,s[5]=(1-(f+p))*D,s[6]=(m+A)*D,s[7]=0,s[8]=(g+E)*P,s[9]=(m-A)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=_s.set(s[0],s[1],s[2]).length();const o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);const c=1/r,u=1/o,h=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=h,En.elements[9]*=h,En.elements[10]*=h,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ci){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let d,g;if(a===ci)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Jo)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,d=(i+s)*u;let g,_;if(a===ci)g=(o+r)*h,_=-2*h;else if(a===Jo)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const _s=new F,En=new Ve,S0=new F(0,0,0),T0=new F(1,1,1),Mi=new F,so=new F,on=new F,ah=new Ve,lh=new Wn;class Xn{constructor(e=0,t=0,i=0,s=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Yc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let b0=0;const ch=new F,xs=new Wn,ei=new Ve,ro=new F,ar=new F,E0=new F,A0=new Wn,uh=new F(1,0,0),hh=new F(0,1,0),fh=new F(0,0,1),dh={type:"added"},w0={type:"removed"},vs={type:"childadded",child:null},Va={type:"childremoved",child:null};class gt extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=In(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new F,t=new Xn,i=new Wn,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ve},normalMatrix:{value:new We}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ro.copy(e):ro.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ar,ro,this.up):ei.lookAt(ro,ar,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ei),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dh),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(w0),Va.child=e,this.dispatchEvent(Va),Va.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dh),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,A0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?{min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}:void 0,boundingSphere:a.boundingSphere?{radius:a.boundingSphere.radius,center:a.boundingSphere.center.toArray()}:void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gt.DEFAULT_UP=new F(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new F,ti=new F,Ga=new F,ni=new F,ys=new F,Ms=new F,ph=new F,Wa=new F,Xa=new F,ja=new F,qa=new nt,Ya=new nt,Ka=new nt;class Cn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),An.subVectors(e,t),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){An.subVectors(s,t),ti.subVectors(i,t),Ga.subVectors(e,t);const o=An.dot(An),a=An.dot(ti),l=An.dot(Ga),c=ti.dot(ti),u=ti.dot(Ga),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return qa.setScalar(0),Ya.setScalar(0),Ka.setScalar(0),qa.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,i),Ka.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(qa,r.x),o.addScaledVector(Ya,r.y),o.addScaledVector(Ka,r.z),o}static isFrontFacing(e,t,i,s){return An.subVectors(i,t),ti.subVectors(e,t),An.cross(ti).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),An.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Cn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Cn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;ys.subVectors(s,i),Ms.subVectors(r,i),Wa.subVectors(e,i);const l=ys.dot(Wa),c=Ms.dot(Wa);if(l<=0&&c<=0)return t.copy(i);Xa.subVectors(e,s);const u=ys.dot(Xa),h=Ms.dot(Xa);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(ys,o);ja.subVectors(e,r);const d=ys.dot(ja),g=Ms.dot(ja);if(g>=0&&d<=g)return t.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Ms,a);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return ph.subVectors(r,s),a=(h-u)/(h-u+(d-g)),t.copy(s).addScaledVector(ph,a);const p=1/(m+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(ys,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},oo={h:0,s:0,l:0};function $a(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=$e.workingColorSpace){if(e=jc(e,1),t=qe(t,0,1),i=qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=$a(o,r,e+1/3),this.g=$a(o,r,e),this.b=$a(o,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=Dt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const i=ep[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return $e.fromWorkingColorSpace(Bt.copy(this),e),Math.round(qe(Bt.r*255,0,255))*65536+Math.round(qe(Bt.g*255,0,255))*256+Math.round(qe(Bt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Dt){$e.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(oo);const i=br(Si.h,oo.h,t),s=br(Si.s,oo.s,t),r=br(Si.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Oe;Oe.NAMES=ep;let R0=0;class Vn extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=In(),this.name="",this.type="Material",this.blending=Bs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yn extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new F,ao=new Pe;let C0=0;class Vt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fc,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ao.fromBufferAttribute(this,t),ao.applyMatrix3(e),this.setXY(t,ao.x,ao.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fc&&(e.usage=this.usage),e}}class tp extends Vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class np extends Vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ut extends Vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let P0=0;const gn=new Ve,Za=new gt,Ss=new F,an=new jn,lr=new jn,Rt=new F;class sn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=In(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?np:tp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,t,i){return gn.makeTranslation(e,t,i),this.applyMatrix4(gn),this}scale(e,t,i){return gn.makeScale(e,t,i),this.applyMatrix4(gn),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ut(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(an.min,lr.min),an.expandByPoint(Rt),Rt.addVectors(an.max,lr.max),an.expandByPoint(Rt)):(an.expandByPoint(lr.min),an.expandByPoint(lr.max))}an.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Rt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Rt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Rt.add(Ss)),s=Math.max(s,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new F,l[z]=new F;const c=new F,u=new F,h=new F,f=new Pe,d=new Pe,g=new Pe,_=new F,m=new F;function p(z,b,M){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),f.fromBufferAttribute(r,z),d.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(N),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),a[z].add(_),a[b].add(_),a[M].add(_),l[z].add(m),l[b].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,b=A.length;z<b;++z){const M=A[z],N=M.start,H=M.count;for(let X=N,se=N+H;X<se;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const E=new F,y=new F,U=new F,D=new F;function P(z){U.fromBufferAttribute(s,z),D.copy(U);const b=a[z];E.copy(b),E.sub(U.multiplyScalar(U.dot(b))).normalize(),y.crossVectors(D,b);const N=y.dot(l[z])<0?-1:1;o.setXYZW(z,E.x,E.y,E.z,N)}for(let z=0,b=A.length;z<b;++z){const M=A[z],N=M.start,H=M.count;for(let X=N,se=N+H;X<se;X+=3)P(e.getX(X+0)),P(e.getX(X+1)),P(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new Vt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mh=new Ve,$i=new Zs,lo=new qn,gh=new F,co=new F,uo=new F,ho=new F,Ja=new F,fo=new F,_h=new F,po=new F;class bt extends gt{constructor(e=new sn,t=new yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){fo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Ja.fromBufferAttribute(h,e),o?fo.addScaledVector(Ja,u):fo.addScaledVector(Ja.sub(t),u))}t.add(fo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),$i.copy(e.ray).recast(e.near),!(lo.containsPoint($i.origin)===!1&&($i.intersectSphere(lo,gh)===null||$i.origin.distanceToSquared(gh)>(e.far-e.near)**2))&&(mh.copy(r).invert(),$i.copy(e.ray).applyMatrix4(mh),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$i)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,U=E;y<U;y+=3){const D=a.getX(y),P=a.getX(y+1),z=a.getX(y+2);s=mo(this,p,e,i,c,u,h,D,P,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=mo(this,o,e,i,c,u,h,A,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],A=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=A,U=E;y<U;y+=3){const D=y,P=y+1,z=y+2;s=mo(this,p,e,i,c,u,h,D,P,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const A=m,E=m+1,y=m+2;s=mo(this,o,e,i,c,u,h,A,E,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function L0(n,e,t,i,s,r,o,a){let l;if(e.side===Tt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===mi,a),l===null)return null;po.copy(a),po.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(po);return c<t.near||c>t.far?null:{distance:c,point:po.clone(),object:n}}function mo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,co),n.getVertexPosition(l,uo),n.getVertexPosition(c,ho);const u=L0(n,e,t,i,co,uo,ho,_h);if(u){const h=new F;Cn.getBarycoord(_h,co,uo,ho,h),s&&(u.uv=Cn.getInterpolatedAttribute(s,a,l,c,h,new Pe)),r&&(u.uv1=Cn.getInterpolatedAttribute(r,a,l,c,h,new Pe)),o&&(u.normal=Cn.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new F,materialIndex:0};Cn.getNormal(co,uo,ho,f.normal),u.face=f,u.barycoord=h}return u}class Gr extends sn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function g(_,m,p,A,E,y,U,D,P,z,b){const M=y/P,N=U/z,H=y/2,X=U/2,se=D/2,ae=P+1,Y=z+1;let ne=0,q=0;const me=new F;for(let ve=0;ve<Y;ve++){const we=ve*N-X;for(let Fe=0;Fe<ae;Fe++){const Qe=Fe*M-H;me[_]=Qe*A,me[m]=we*E,me[p]=se,c.push(me.x,me.y,me.z),me[_]=0,me[m]=0,me[p]=D>0?1:-1,u.push(me.x,me.y,me.z),h.push(Fe/P),h.push(1-ve/z),ne+=1}}for(let ve=0;ve<z;ve++)for(let we=0;we<P;we++){const Fe=f+we+ae*ve,Qe=f+we+ae*(ve+1),oe=f+(we+1)+ae*(ve+1),pe=f+(we+1)+ae*ve;l.push(Fe,Qe,pe),l.push(Qe,oe,pe),q+=6}a.addGroup(d,q,b),d+=q,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function jt(n){const e={};for(let t=0;t<n.length;t++){const i=js(n[t]);for(const s in i)e[s]=i[s]}return e}function D0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ip(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const Qo={clone:js,merge:jt};var I0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I0,this.fragmentShader=U0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=D0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class sp extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new F,xh=new Pe,vh=new Pe;class Yt extends sp{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,xh,vh),t.subVectors(vh,xh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,bs=1;class N0 extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Ts,bs,e,t);s.layers=this.layers,this.add(s);const r=new Yt(Ts,bs,e,t);r.layers=this.layers,this.add(r);const o=new Yt(Ts,bs,e,t);o.layers=this.layers,this.add(o);const a=new Yt(Ts,bs,e,t);a.layers=this.layers,this.add(a);const l=new Yt(Ts,bs,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Ts,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class rp extends Et{constructor(e=[],t=Vs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class F0 extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new rp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gr(5,5,5),r=new nn({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Tt,blending:ui});r.uniforms.tEquirect.value=t;const o=new bt(s,r),a=t.minFilter;return t.minFilter===li&&(t.minFilter=fn),new N0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Di extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class Qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Di;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class B0 extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class z0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=In()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=In()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new F;class Kc{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Rn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=at(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),i=at(i,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const yh=new F,Mh=new nt,Sh=new nt,H0=new F,Th=new Ve,go=new F,el=new qn,bh=new Ve,tl=new Zs;class k0 extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=$u,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new jn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,go),this.boundingBox.expandByPoint(go)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,go),this.boundingSphere.expandByPoint(go)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(s),e.ray.intersectsSphere(el)!==!1&&(bh.copy(s).invert(),tl.copy(e.ray).applyMatrix4(bh),!(this.boundingBox!==null&&tl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,tl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new nt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===$u?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===F_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Mh.fromBufferAttribute(s.attributes.skinIndex,e),Sh.fromBufferAttribute(s.attributes.skinWeight,e),yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Sh.getComponent(r);if(o!==0){const a=Mh.getComponent(r);Th.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(H0.copy(yh).applyMatrix4(Th),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class op extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ap extends Et{constructor(e=null,t=1,i=1,s,r,o,a,l,c=$t,u=$t,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eh=new Ve,V0=new Ve;class $c{constructor(e=[],t=[]){this.uuid=In(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:V0;Eh.multiplyMatrices(a,t[r]),Eh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new ap(t,e,e,vn,Ln);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new op),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class dc extends Vt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Es=new Ve,Ah=new Ve,_o=[],wh=new jn,G0=new Ve,cr=new bt,ur=new qn;class W0 extends bt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new dc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,G0)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),wh.copy(e.boundingBox).applyMatrix4(Es),this.boundingBox.union(wh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Es),ur.copy(e.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(i),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),Ah.multiplyMatrices(i,Es),cr.matrixWorld=Ah,cr.raycast(e,_o);for(let o=0,a=_o.length;o<a;o++){const l=_o[o];l.instanceId=r,l.object=this,t.push(l)}_o.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ap(new Float32Array(s*this.count),s,this.count,Vc,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const nl=new F,X0=new F,j0=new We;class Ri{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=nl.subVectors(i,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(nl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||j0.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new qn,xo=new F;class Zc{constructor(e=new Ri,t=new Ri,i=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],A=s[13],E=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-d,y-p).normalize(),i[1].setComponents(l+r,f+c,m+d,y+p).normalize(),i[2].setComponents(l+o,f+u,m+g,y+A).normalize(),i[3].setComponents(l-o,f-u,m-g,y-A).normalize(),i[4].setComponents(l-a,f-h,m-_,y-E).normalize(),t===ci)i[5].setComponents(l+a,f+h,m+_,y+E).normalize();else if(t===Jo)i[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xo.x=s.normal.x>0?e.max.x:e.min.x,xo.y=s.normal.y>0?e.max.y:e.min.y,xo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lp extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ea=new F,ta=new F,Rh=new Ve,hr=new Zs,vo=new qn,il=new F,Ch=new F;class Jc extends gt{constructor(e=new sn,t=new lp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)ea.fromBufferAttribute(t,s-1),ta.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=ea.distanceTo(ta);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),vo.radius+=r,e.ray.intersectsSphere(vo)===!1)return;Rh.copy(s).invert(),hr.copy(e.ray).applyMatrix4(Rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),A=u.getX(_+1),E=yo(this,e,hr,l,p,A,_);E&&t.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=yo(this,e,hr,l,_,m,g-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){const p=yo(this,e,hr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=yo(this,e,hr,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yo(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(ea.fromBufferAttribute(a,s),ta.fromBufferAttribute(a,r),t.distanceSqToSegment(ea,ta,il,Ch)>i)return;il.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(il);if(!(c<e.near||c>e.far))return{distance:c,point:Ch.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ph=new F,Lh=new F;class q0 extends Jc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Ph.fromBufferAttribute(t,s),Lh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Ph.distanceTo(Lh);e.setAttribute("lineDistance",new Ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Y0 extends Jc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Qc extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Dh=new Ve,pc=new Zs,Mo=new qn,So=new F;class cp extends gt{constructor(e=new sn,t=new Qc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,e.ray.intersectsSphere(Mo)===!1)return;Dh.copy(s).invert(),pc.copy(e.ray).applyMatrix4(Dh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);So.fromBufferAttribute(h,m),Ih(So,m,l,s,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)So.fromBufferAttribute(h,g),Ih(So,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ih(n,e,t,i,s,r,o){const a=pc.distanceSqToPoint(n);if(a<t){const l=new F;pc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class K0 extends Et{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class up extends Et{constructor(e,t,i=as,s,r,o,a=$t,l=$t,c,u=Fr){if(u!==Fr&&u!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class da extends sn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*f-o;for(let E=0;E<c;E++){const y=E*h-r;g.push(y,-A,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const E=A+c*p,y=A+c*(p+1),U=A+1+c*(p+1),D=A+1+c*p;d.push(E,y,D),d.push(y,U,D)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class eu extends sn{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/s,d=new F,g=new Pe;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const A=p+m,E=A,y=A+i+1,U=A+i+2,D=A+1;a.push(E,y,D),a.push(y,U,D)}}this.setIndex(a),this.setAttribute("position",new Ut(l,3)),this.setAttribute("normal",new Ut(c,3)),this.setAttribute("uv",new Ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ps extends sn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new F,f=new F,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const A=[],E=p/i;let y=0;p===0&&o===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let U=0;U<=t;U++){const D=U/t;h.x=-e*Math.cos(s+D*r)*Math.sin(o+E*a),h.y=e*Math.cos(o+E*a),h.z=e*Math.sin(s+D*r)*Math.sin(o+E*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(D+y,1-E),A.push(c++)}u.push(A)}for(let p=0;p<i;p++)for(let A=0;A<t;A++){const E=u[p][A+1],y=u[p][A],U=u[p+1][A],D=u[p+1][A+1];(p!==0||o>0)&&d.push(E,y,D),(p!==i-1||l<Math.PI)&&d.push(y,U,D)}this.setIndex(d),this.setAttribute("position",new Ut(g,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pa extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kd,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends pa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class $0 extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=z_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z0 extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function To(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function J0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Q0(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Uh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function hp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Wr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ex extends Wr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zu,endingEnd:Zu}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ju:r=e,a=2*t-i;break;case Qu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ju:o=e,l=2*i-t;break;case Qu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,A=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,E=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let U=0;U!==a;++U)r[U]=p*o[u+U]+A*o[c+U]+E*o[l+U]+y*o[h+U];return r}}class tx extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class nx extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Fn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=To(t,this.TimeBufferType),this.values=To(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:To(e.times,Array),values:To(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new nx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Br:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Br;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&J0(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ia,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,d=h+i;for(let g=0;g!==i;++g){const _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let d=0;d!==i;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=zr;class Js extends Fn{constructor(e,t,i){super(e,t,i)}}Js.prototype.ValueTypeName="bool";Js.prototype.ValueBufferType=Array;Js.prototype.DefaultInterpolation=Br;Js.prototype.InterpolantFactoryMethodLinear=void 0;Js.prototype.InterpolantFactoryMethodSmooth=void 0;class fp extends Fn{constructor(e,t,i,s){super(e,t,i,s)}}fp.prototype.ValueTypeName="color";class qs extends Fn{constructor(e,t,i,s){super(e,t,i,s)}}qs.prototype.ValueTypeName="number";class ix extends Wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Wn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Ys extends Fn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ix(this.times,this.values,this.getValueSize(),e)}}Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Qs extends Fn{constructor(e,t,i){super(e,t,i)}}Qs.prototype.ValueTypeName="string";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=Br;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ks extends Fn{constructor(e,t,i,s){super(e,t,i,s)}}Ks.prototype.ValueTypeName="vector";class sx{constructor(e="",t=-1,i=[],s=O_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=In(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ox(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Fn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Q0(l);l=Uh(l,1,u),c=Uh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new qs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,d,g,_){if(d.length!==0){const m=[],p=[];hp(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(const _ in d){const m=[],p=[];for(let A=0;A!==f[g].morphTargets.length;++A){const E=f[g];m.push(E.time),p.push(E.morphTarget===_?1:0)}s.push(new qs(".morphTargetInfluence["+_+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";i(Ks,d+".position",f,"pos",s),i(Ys,d+".quaternion",f,"rot",s),i(Ks,d+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rx(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qs;case"vector":case"vector2":case"vector3":case"vector4":return Ks;case"color":return fp;case"quaternion":return Ys;case"bool":case"boolean":return Js;case"string":return Qs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ox(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rx(n.type);if(n.times===void 0){const t=[],i=[];hp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ii={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class ax{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const lx=new ax;class er{constructor(e){this.manager=e!==void 0?e:lx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}er.DEFAULT_MATERIAL_NAME="__DEFAULT";const ii={};class cx extends Error{constructor(e,t){super(e),this.response=t}}class dp extends er{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ii.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:i,onError:s});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ii[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:E,value:y})=>{if(E)p.close();else{_+=y.byteLength;const U=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let D=0,P=u.length;D<P;D++){const z=u[D];z.onProgress&&z.onProgress(U)}p.enqueue(y),A()}},E=>{p.error(E)})}}});return new Response(m)}else throw new cx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Ii.add(e,c);const u=ii[e];delete ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ii[e];if(u===void 0)throw this.manager.itemError(e),c;delete ii[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ux extends er{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ii.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Hr("img");function l(){u(),Ii.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class hx extends er{constructor(e){super(e)}load(e,t,i,s){const r=new Et,o=new ux(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Xr extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fx extends Xr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sl=new Ve,Nh=new F,Fh=new F;class tu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zc,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Fh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fh),t.updateMatrixWorld(),sl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dx extends tu{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Xs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class px extends Xr{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new dx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Oh=new Ve,fr=new F,rl=new F;class mx extends tu{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pe(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),fr.setFromMatrixPosition(e.matrixWorld),i.position.copy(fr),rl.copy(i.position),rl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(rl),i.updateMatrixWorld(),s.makeTranslation(-fr.x,-fr.y,-fr.z),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh)}}class zo extends Xr{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new mx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ma extends sp{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class gx extends tu{constructor(){super(new ma(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rs extends Xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new gx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _x extends Xr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Er{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xx extends er{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ii.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ii.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ii.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ii.add(e,l),r.manager.itemStart(e)}}class vx extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class yx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Bh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Bh(){return performance.now()}const nu="\\[\\]\\.:\\/",Mx=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",Sx="[^"+nu.replace("\\.","")+"]",Tx=/((?:WC+[\/:])*)/.source.replace("WC",iu),bx=/(WCOD+)?/.source.replace("WCOD",Sx),Ex=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),wx=new RegExp("^"+Tx+bx+Ex+Ax+"$"),Rx=["material","materials","bones","map"];class Cx{constructor(e,t,i){const s=i||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class lt{constructor(e,t,i){this.path=t,this.parsedPath=i||lt.parseTrackName(t),this.node=lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new lt.Composite(e,t,i):new lt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mx,"")}static parseTrackName(e){const t=wx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Rx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}lt.Composite=Cx;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const zh=new Ve;class Px{constructor(e,t,i=0,s=1/0){this.ray=new Zs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Yc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zh),this}intersectObject(e,t=!0,i=[]){return mc(e,this,i,t),i.sort(Hh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)mc(e[s],this,i,t);return i.sort(Hh),i}}function Hh(n,e){return n.distance-e.distance}function mc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)mc(r[o],e,t,!0)}}class kh{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lx extends cs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Vh(n,e,t,i){const s=Dx(i);switch(t){case Wd:return n*e;case Vc:return n*e/s.components*s.byteLength;case Gc:return n*e/s.components*s.byteLength;case jd:return n*e*2/s.components*s.byteLength;case Wc:return n*e*2/s.components*s.byteLength;case Xd:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case Xc:return n*e*4/s.components*s.byteLength;case Io:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case Fo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hl:case Vl:return Math.max(n,16)*Math.max(e,8)/4;case zl:case kl:return Math.max(n,8)*Math.max(e,8)/2;case Gl:case Wl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Oo:case oc:case ac:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qd:case lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case cc:case uc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dx(n){switch(n){case Gn:case kd:return{byteLength:1,components:1};case Ur:case Vd:case hi:return{byteLength:2,components:1};case Hc:case kc:return{byteLength:2,components:4};case as:case zc:case Ln:return{byteLength:4,components:1};case Gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ix(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ux=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nx=`#ifdef USE_ALPHAHASH
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
#endif`,Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ox=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hx=`#ifdef USE_AOMAP
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
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vx=`#ifdef USE_BATCHING
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
#endif`,Gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qx=`#ifdef USE_IRIDESCENCE
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
#endif`,Yx=`#ifdef USE_BUMPMAP
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
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,iv=`#define PI 3.141592653589793
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
} // validated`,sv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rv=`vec3 transformedNormal = objectNormal;
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
#endif`,ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
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
#endif`,dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pv=`#ifdef USE_ENVMAP
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
#endif`,mv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
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
#endif`,_v=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mv=`#ifdef USE_GRADIENTMAP
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
}`,Sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
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
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,wv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lv=`PhysicalMaterial material;
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
#endif`,Dv=`struct PhysicalMaterial {
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
}`,Iv=`
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
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ov=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gv=`#if defined( USE_POINTS_UV )
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
#endif`,Wv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`#ifdef USE_MORPHTARGETS
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
#endif`,$v=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ny=`#ifdef USE_NORMALMAP
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
#endif`,iy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ay=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xy=`float getShadowMask() {
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
}`,vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,My=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,Ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,by=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ay=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uy=`uniform sampler2D t2D;
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
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,By=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zy=`#include <common>
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
}`,Hy=`#if DEPTH_PACKING == 3200
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
}`,ky=`#define DISTANCE
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
}`,Vy=`#define DISTANCE
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
}`,Gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xy=`uniform float scale;
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
}`,jy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,Yy=`uniform vec3 diffuse;
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
}`,Ky=`#define LAMBERT
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
}`,$y=`#define LAMBERT
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define MATCAP
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
}`,Qy=`#define NORMAL
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
}`,eM=`#define NORMAL
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
}`,tM=`#define PHONG
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
}`,nM=`#define PHONG
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
}`,iM=`#define STANDARD
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
}`,sM=`#define STANDARD
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
}`,rM=`#define TOON
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
}`,oM=`#define TOON
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
}`,aM=`uniform float size;
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
}`,lM=`uniform vec3 diffuse;
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
}`,cM=`#include <common>
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
}`,uM=`uniform vec3 color;
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
}`,hM=`uniform float rotation;
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
}`,fM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Ux,alphahash_pars_fragment:Nx,alphamap_fragment:Fx,alphamap_pars_fragment:Ox,alphatest_fragment:Bx,alphatest_pars_fragment:zx,aomap_fragment:Hx,aomap_pars_fragment:kx,batching_pars_vertex:Vx,batching_vertex:Gx,begin_vertex:Wx,beginnormal_vertex:Xx,bsdfs:jx,iridescence_fragment:qx,bumpmap_pars_fragment:Yx,clipping_planes_fragment:Kx,clipping_planes_pars_fragment:$x,clipping_planes_pars_vertex:Zx,clipping_planes_vertex:Jx,color_fragment:Qx,color_pars_fragment:ev,color_pars_vertex:tv,color_vertex:nv,common:iv,cube_uv_reflection_fragment:sv,defaultnormal_vertex:rv,displacementmap_pars_vertex:ov,displacementmap_vertex:av,emissivemap_fragment:lv,emissivemap_pars_fragment:cv,colorspace_fragment:uv,colorspace_pars_fragment:hv,envmap_fragment:fv,envmap_common_pars_fragment:dv,envmap_pars_fragment:pv,envmap_pars_vertex:mv,envmap_physical_pars_fragment:Av,envmap_vertex:gv,fog_vertex:_v,fog_pars_vertex:xv,fog_fragment:vv,fog_pars_fragment:yv,gradientmap_pars_fragment:Mv,lightmap_pars_fragment:Sv,lights_lambert_fragment:Tv,lights_lambert_pars_fragment:bv,lights_pars_begin:Ev,lights_toon_fragment:wv,lights_toon_pars_fragment:Rv,lights_phong_fragment:Cv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Iv,lights_fragment_maps:Uv,lights_fragment_end:Nv,logdepthbuf_fragment:Fv,logdepthbuf_pars_fragment:Ov,logdepthbuf_pars_vertex:Bv,logdepthbuf_vertex:zv,map_fragment:Hv,map_pars_fragment:kv,map_particle_fragment:Vv,map_particle_pars_fragment:Gv,metalnessmap_fragment:Wv,metalnessmap_pars_fragment:Xv,morphinstance_vertex:jv,morphcolor_vertex:qv,morphnormal_vertex:Yv,morphtarget_pars_vertex:Kv,morphtarget_vertex:$v,normal_fragment_begin:Zv,normal_fragment_maps:Jv,normal_pars_fragment:Qv,normal_pars_vertex:ey,normal_vertex:ty,normalmap_pars_fragment:ny,clearcoat_normal_fragment_begin:iy,clearcoat_normal_fragment_maps:sy,clearcoat_pars_fragment:ry,iridescence_pars_fragment:oy,opaque_fragment:ay,packing:ly,premultiplied_alpha_fragment:cy,project_vertex:uy,dithering_fragment:hy,dithering_pars_fragment:fy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:py,shadowmap_pars_fragment:my,shadowmap_pars_vertex:gy,shadowmap_vertex:_y,shadowmask_pars_fragment:xy,skinbase_vertex:vy,skinning_pars_vertex:yy,skinning_vertex:My,skinnormal_vertex:Sy,specularmap_fragment:Ty,specularmap_pars_fragment:by,tonemapping_fragment:Ey,tonemapping_pars_fragment:Ay,transmission_fragment:wy,transmission_pars_fragment:Ry,uv_pars_fragment:Cy,uv_pars_vertex:Py,uv_vertex:Ly,worldpos_vertex:Dy,background_vert:Iy,background_frag:Uy,backgroundCube_vert:Ny,backgroundCube_frag:Fy,cube_vert:Oy,cube_frag:By,depth_vert:zy,depth_frag:Hy,distanceRGBA_vert:ky,distanceRGBA_frag:Vy,equirect_vert:Gy,equirect_frag:Wy,linedashed_vert:Xy,linedashed_frag:jy,meshbasic_vert:qy,meshbasic_frag:Yy,meshlambert_vert:Ky,meshlambert_frag:$y,meshmatcap_vert:Zy,meshmatcap_frag:Jy,meshnormal_vert:Qy,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:sM,meshtoon_vert:rM,meshtoon_frag:oM,points_vert:aM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:hM,sprite_frag:fM},xe={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Hn={basic:{uniforms:jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:jt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:jt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:jt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Oe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:jt([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:jt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:jt([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:jt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:jt([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:jt([xe.common,xe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:jt([xe.lights,xe.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Hn.physical={uniforms:jt([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const bo={r:0,b:0,g:0},Ji=new Xn,dM=new Ve;function pM(n,e,t,i,s,r,o){const a=new Oe(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const U=g(E);U===null?p(a,l):U&&U.isColor&&(p(U,1),y=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,y){const U=g(y);U&&(U.isCubeTexture||U.mapping===fa)?(u===void 0&&(u=new bt(new Gr(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:js(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ji.copy(y.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=U,u.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dM.makeRotationFromEuler(Ji)),u.material.toneMapped=$e.getTransfer(U.colorSpace)!==ct,(h!==U||f!==U.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,h=U,f=U.version,d=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):U&&U.isTexture&&(c===void 0&&(c=new bt(new da(2,2),new nn({name:"BackgroundMaterial",uniforms:js(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=U,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$e.getTransfer(U.colorSpace)!==ct,U.matrixAutoUpdate===!0&&U.updateMatrix(),c.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||f!==U.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=U,f=U.version,d=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(bo,ip(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:A}}function mM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(M,N,H,X,se){let ae=!1;const Y=h(X,H,N);r!==Y&&(r=Y,c(r.object)),ae=d(M,X,H,se),ae&&g(M,X,H,se),se!==null&&e.update(se,n.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,y(M,N,H,X),se!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,N,H){const X=H.wireframe===!0;let se=i[M.id];se===void 0&&(se={},i[M.id]=se);let ae=se[N.id];ae===void 0&&(ae={},se[N.id]=ae);let Y=ae[X];return Y===void 0&&(Y=f(l()),ae[X]=Y),Y}function f(M){const N=[],H=[],X=[];for(let se=0;se<t;se++)N[se]=0,H[se]=0,X[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:X,object:M,attributes:{},index:null}}function d(M,N,H,X){const se=r.attributes,ae=N.attributes;let Y=0;const ne=H.getAttributes();for(const q in ne)if(ne[q].location>=0){const ve=se[q];let we=ae[q];if(we===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;Y++}return r.attributesNum!==Y||r.index!==X}function g(M,N,H,X){const se={},ae=N.attributes;let Y=0;const ne=H.getAttributes();for(const q in ne)if(ne[q].location>=0){let ve=ae[q];ve===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),se[q]=we,Y++}r.attributes=se,r.attributesNum=Y,r.index=X}function _(){const M=r.newAttributes;for(let N=0,H=M.length;N<H;N++)M[N]=0}function m(M){p(M,0)}function p(M,N){const H=r.newAttributes,X=r.enabledAttributes,se=r.attributeDivisors;H[M]=1,X[M]===0&&(n.enableVertexAttribArray(M),X[M]=1),se[M]!==N&&(n.vertexAttribDivisor(M,N),se[M]=N)}function A(){const M=r.newAttributes,N=r.enabledAttributes;for(let H=0,X=N.length;H<X;H++)N[H]!==M[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function E(M,N,H,X,se,ae,Y){Y===!0?n.vertexAttribIPointer(M,N,H,se,ae):n.vertexAttribPointer(M,N,H,X,se,ae)}function y(M,N,H,X){_();const se=X.attributes,ae=H.getAttributes(),Y=N.defaultAttributeValues;for(const ne in ae){const q=ae[ne];if(q.location>=0){let me=se[ne];if(me===void 0&&(ne==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),ne==="instanceColor"&&M.instanceColor&&(me=M.instanceColor)),me!==void 0){const ve=me.normalized,we=me.itemSize,Fe=e.get(me);if(Fe===void 0)continue;const Qe=Fe.buffer,oe=Fe.type,pe=Fe.bytesPerElement,Ee=oe===n.INT||oe===n.UNSIGNED_INT||me.gpuType===zc;if(me.isInterleavedBufferAttribute){const ge=me.data,Le=ge.stride,Ke=me.offset;if(ge.isInstancedInterleavedBuffer){for(let De=0;De<q.locationSize;De++)p(q.location+De,ge.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let De=0;De<q.locationSize;De++)m(q.location+De);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let De=0;De<q.locationSize;De++)E(q.location+De,we/q.locationSize,oe,ve,Le*pe,(Ke+we/q.locationSize*De)*pe,Ee)}else{if(me.isInstancedBufferAttribute){for(let ge=0;ge<q.locationSize;ge++)p(q.location+ge,me.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ge=0;ge<q.locationSize;ge++)m(q.location+ge);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let ge=0;ge<q.locationSize;ge++)E(q.location+ge,we/q.locationSize,oe,ve,we*pe,we/q.locationSize*ge*pe,Ee)}}else if(Y!==void 0){const ve=Y[ne];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(q.location,ve);break;case 3:n.vertexAttrib3fv(q.location,ve);break;case 4:n.vertexAttrib4fv(q.location,ve);break;default:n.vertexAttrib1fv(q.location,ve)}}}}A()}function U(){z();for(const M in i){const N=i[M];for(const H in N){const X=N[H];for(const se in X)u(X[se].object),delete X[se];delete N[H]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const N=i[M.id];for(const H in N){const X=N[H];for(const se in X)u(X[se].object),delete X[se];delete N[H]}delete i[M.id]}function P(M){for(const N in i){const H=i[N];if(H[M.id]===void 0)continue;const X=H[M.id];for(const se in X)u(X[se].object),delete X[se];delete H[M.id]}}function z(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function gM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];t.update(d,i,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _M(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const z=P===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Gn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ln&&!z)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:U,maxSamples:D}}function xM(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Ri,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||s;return s=f,i=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,E=A*4;let y=p.clippingState||null;l.value=y,y=u(g,f,E,d);for(let U=0;U!==E;++U)y[U]=t[U];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=d;E!==_;++E,y+=4)o.copy(h[E]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vM(n){let e=new WeakMap;function t(o,a){return a===Ol?o.mapping=Vs:a===Bl&&(o.mapping=Gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ol||a===Bl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new F0(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ls=4,Gh=[.125,.215,.35,.446,.526,.582],rs=20,ol=new ma,Wh=new Oe;let al=null,ll=0,cl=0,ul=!1;const ns=(1+Math.sqrt(5))/2,As=1/ns,Xh=[new F(-ns,As,0),new F(ns,As,0),new F(-As,0,ns),new F(As,0,ns),new F(0,ns,-As),new F(0,ns,As),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],yM=new F;class jh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=yM}=r;al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ll,cl),this._renderer.xr.enabled=ul,e.scissorTest=!1,Eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:hi,format:vn,colorSpace:Zt,depthBuffer:!1},s=qh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MM(r)),this._blurMaterial=SM(r,e,t)}return s}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,s,r){const l=new Yt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Wh),h.toneMapping=Ni,h.autoClear=!1;const g=new yn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),_=new bt(new Gr,g);let m=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,m=!0):(g.color.copy(Wh),m=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[A],r.y,r.z)):E===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[A]));const y=this._cubeSize;Eo(s,E*y,A>2?y:0,y,y),h.setRenderTarget(s),m&&h.render(_,l),h.render(e,l)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Vs||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Eo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ol)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Xh[(s-r-1)%Xh.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let A=0;for(let P=0;P<rs;++P){const z=P/_,b=Math.exp(-z*z/2);p.push(b),P===0?A+=b:P<m&&(A+=2*b)}for(let P=0;P<p.length;P++)p[P]=p[P]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-i;const y=this._sizeLods[s],U=3*y*(s>E-Ls?s-E+Ls:0),D=4*(this._cubeSize-y);Eo(t,U,D,3*y,2*y),l.setRenderTarget(t),l.render(h,ol)}}function MM(n){const e=[],t=[],i=[];let s=n;const r=n-Ls+1+Gh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ls?l=Gh[o-n+Ls-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*d),E=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let D=0;D<d;D++){const P=D%3*2/3-1,z=D>2?0:-1,b=[P,z,0,P+2/3,z,0,P+2/3,z+1,0,P,z,0,P+2/3,z+1,0,P,z+1,0];A.set(b,_*g*D),E.set(f,m*g*D);const M=[D,D,D,D,D,D];y.set(M,p*g*D)}const U=new sn;U.setAttribute("position",new Vt(A,_)),U.setAttribute("uv",new Vt(E,m)),U.setAttribute("faceIndex",new Vt(y,p)),e.push(U),s>Ls&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qh(n,e,t){const i=new Un(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function SM(n,e,t){const i=new Float32Array(rs),s=new F(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:su(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Yh(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:su(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Kh(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:su(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function su(){return`

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
	`}function TM(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ol||l===Bl,u=l===Vs||l===Gs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new jh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new jh(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function bM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Bo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function EM(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],n.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const A=d.array;_=d.version;for(let E=0,y=A.length;E<y;E+=3){const U=A[E+0],D=A[E+1],P=A[E+2];f.push(U,D,D,P,P,U)}}else if(g!==void 0){const A=g.array;_=g.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const U=E+0,D=E+1,P=E+2;f.push(U,D,D,P,P,U)}}else return;const m=new(Jd(f)?np:tp)(f,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function AM(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*o),t.update(d,i,1)}function c(f,d,g){g!==0&&(n.drawElementsInstanced(i,d,r,f*o,g),t.update(d,i,g))}function u(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function h(f,d,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=d[A]*_[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function wM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function RM(n,e,t){const i=new WeakMap,s=new nt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let M=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let U=a.attributes.position.count*y,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const P=new Float32Array(U*D*4*h),z=new Qd(P,U,D,h);z.type=Ln,z.needsUpdate=!0;const b=y*4;for(let N=0;N<h;N++){const H=p[N],X=A[N],se=E[N],ae=U*D*4*N;for(let Y=0;Y<H.count;Y++){const ne=Y*b;g===!0&&(s.fromBufferAttribute(H,Y),P[ae+ne+0]=s.x,P[ae+ne+1]=s.y,P[ae+ne+2]=s.z,P[ae+ne+3]=0),_===!0&&(s.fromBufferAttribute(X,Y),P[ae+ne+4]=s.x,P[ae+ne+5]=s.y,P[ae+ne+6]=s.z,P[ae+ne+7]=0),m===!0&&(s.fromBufferAttribute(se,Y),P[ae+ne+8]=s.x,P[ae+ne+9]=s.y,P[ae+ne+10]=s.z,P[ae+ne+11]=se.itemSize===4?s.w:1)}}f={count:h,texture:z,size:new Pe(U,D)},i.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function CM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const mp=new Et,$h=new up(1,1),gp=new Qd,_p=new y0,xp=new rp,Zh=[],Jh=[],Qh=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Zh[s];if(r===void 0&&(r=new Float32Array(s),Zh[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ga(n,e){let t=Jh[e];t===void 0&&(t=new Int32Array(e),Jh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function PM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function LM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function DM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function IM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function UM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),wt(t,i)}}function NM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),wt(t,i)}}function FM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),wt(t,i)}}function OM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function BM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function zM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function HM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function kM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function VM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function GM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function WM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function XM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?($h.compareFunction=$d,r=$h):r=mp,t.setTexture2D(e||r,s)}function jM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_p,s)}function qM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||xp,s)}function YM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||gp,s)}function KM(n){switch(n){case 5126:return PM;case 35664:return LM;case 35665:return DM;case 35666:return IM;case 35674:return UM;case 35675:return NM;case 35676:return FM;case 5124:case 35670:return OM;case 35667:case 35671:return BM;case 35668:case 35672:return zM;case 35669:case 35673:return HM;case 5125:return kM;case 36294:return VM;case 36295:return GM;case 36296:return WM;case 35678:case 36198:case 36298:case 36306:case 35682:return XM;case 35679:case 36299:case 36307:return jM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}function $M(n,e){n.uniform1fv(this.addr,e)}function ZM(n,e){const t=tr(e,this.size,2);n.uniform2fv(this.addr,t)}function JM(n,e){const t=tr(e,this.size,3);n.uniform3fv(this.addr,t)}function QM(n,e){const t=tr(e,this.size,4);n.uniform4fv(this.addr,t)}function eS(n,e){const t=tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function tS(n,e){const t=tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function nS(n,e){const t=tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function iS(n,e){n.uniform1iv(this.addr,e)}function sS(n,e){n.uniform2iv(this.addr,e)}function rS(n,e){n.uniform3iv(this.addr,e)}function oS(n,e){n.uniform4iv(this.addr,e)}function aS(n,e){n.uniform1uiv(this.addr,e)}function lS(n,e){n.uniform2uiv(this.addr,e)}function cS(n,e){n.uniform3uiv(this.addr,e)}function uS(n,e){n.uniform4uiv(this.addr,e)}function hS(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||mp,r[o])}function fS(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||_p,r[o])}function dS(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||xp,r[o])}function pS(n,e,t){const i=this.cache,s=e.length,r=ga(t,s);At(i,r)||(n.uniform1iv(this.addr,r),wt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||gp,r[o])}function mS(n){switch(n){case 5126:return $M;case 35664:return ZM;case 35665:return JM;case 35666:return QM;case 35674:return eS;case 35675:return tS;case 35676:return nS;case 5124:case 35670:return iS;case 35667:case 35671:return sS;case 35668:case 35672:return rS;case 35669:case 35673:return oS;case 5125:return aS;case 36294:return lS;case 36295:return cS;case 36296:return uS;case 35678:case 36198:case 36298:case 36306:case 35682:return hS;case 35679:case 36299:case 36307:return fS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return pS}}class gS{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KM(t.type)}}class _S{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mS(t.type)}}class xS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function nf(n,e){n.seq.push(e),n.map[e.id]=e}function vS(n,e,t){const i=n.name,s=i.length;for(hl.lastIndex=0;;){const r=hl.exec(i),o=hl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){nf(t,c===void 0?new gS(a,n,e):new _S(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new xS(a),nf(t,h)),t=h}}}class Ho{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);vS(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function sf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const yS=37297;let MS=0;function SS(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const rf=new We;function TS(n){$e._getMatrix(rf,$e.workingColorSpace,n);const e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(n)){case Zo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function of(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+SS(n.getShaderSource(e),o)}else return s}function bS(n,e){const t=TS(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ES(n,e){let t;switch(e){case P_:t="Linear";break;case L_:t="Reinhard";break;case D_:t="Cineon";break;case Bd:t="ACESFilmic";break;case U_:t="AgX";break;case N_:t="Neutral";break;case I_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ao=new F;function AS(){$e.getLuminanceCoefficients(Ao);const n=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wS(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gr).join(`
`)}function RS(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function CS(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function gr(n){return n!==""}function af(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(n){return n.replace(PS,DS)}const LS=new Map;function DS(n,e){let t=je[e];if(t===void 0){const i=LS.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gc(t)}const IS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(IS,US)}function US(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function NS(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===si&&(e="SHADOWMAP_TYPE_VSM"),e}function FS(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OS(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function BS(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Od:e="ENVMAP_BLENDING_MULTIPLY";break;case R_:e="ENVMAP_BLENDING_MIX";break;case C_:e="ENVMAP_BLENDING_ADD";break}return e}function zS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function HS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=NS(t),c=FS(t),u=OS(t),h=BS(t),f=zS(t),d=wS(t),g=RS(r),_=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(gr).join(`
`),p.length>0&&(p+=`
`)):(m=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),p=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?je.tonemapping_pars_fragment:"",t.toneMapping!==Ni?ES("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,bS("linearToOutputTexel",t.outputColorSpace),AS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gr).join(`
`)),o=gc(o),o=af(o,t),o=lf(o,t),a=gc(a),a=af(a,t),a=lf(a,t),o=cf(o),a=cf(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=A+m+o,y=A+p+a,U=sf(s,s.VERTEX_SHADER,E),D=sf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,U),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(N){if(n.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),X=s.getShaderInfoLog(U).trim(),se=s.getShaderInfoLog(D).trim();let ae=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,U,D);else{const ne=of(s,U,"vertex"),q=of(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+H+`
`+ne+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||se==="")&&(Y=!1);Y&&(N.diagnostics={runnable:ae,programLog:H,vertexShader:{log:X,prefix:m},fragmentShader:{log:se,prefix:p}})}s.deleteShader(U),s.deleteShader(D),z=new Ho(s,_),b=CS(s,_)}let z;this.getUniforms=function(){return z===void 0&&P(this),z};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,yS)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=D,this}let kS=0;class VS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new GS(e),t.set(e,i)),i}}class GS{constructor(e){this.id=kS++,this.code=e,this.usedTimes=0}}function WS(n,e,t,i,s,r,o){const a=new Yc,l=new VS,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,N,H,X){const se=H.fog,ae=X.geometry,Y=b.isMeshStandardMaterial?H.environment:null,ne=(b.isMeshStandardMaterial?t:e).get(b.envMap||Y),q=ne&&ne.mapping===fa?ne.image.height:null,me=g[b.type];b.precision!==null&&(d=s.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const ve=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,we=ve!==void 0?ve.length:0;let Fe=0;ae.morphAttributes.position!==void 0&&(Fe=1),ae.morphAttributes.normal!==void 0&&(Fe=2),ae.morphAttributes.color!==void 0&&(Fe=3);let Qe,oe,pe,Ee;if(me){const ot=Hn[me];Qe=ot.vertexShader,oe=ot.fragmentShader}else Qe=b.vertexShader,oe=b.fragmentShader,l.update(b),pe=l.getVertexShaderID(b),Ee=l.getFragmentShaderID(b);const ge=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Ke=X.isInstancedMesh===!0,De=X.isBatchedMesh===!0,pt=!!b.map,C=!!b.matcap,L=!!ne,S=!!b.aoMap,ce=!!b.lightMap,Q=!!b.bumpMap,ee=!!b.normalMap,te=!!b.displacementMap,ue=!!b.emissiveMap,J=!!b.metalnessMap,v=!!b.roughnessMap,x=b.anisotropy>0,I=b.clearcoat>0,W=b.dispersion>0,w=b.iridescence>0,R=b.sheen>0,O=b.transmission>0,G=x&&!!b.anisotropyMap,j=I&&!!b.clearcoatMap,re=I&&!!b.clearcoatNormalMap,Z=I&&!!b.clearcoatRoughnessMap,le=w&&!!b.iridescenceMap,_e=w&&!!b.iridescenceThicknessMap,Ae=R&&!!b.sheenColorMap,de=R&&!!b.sheenRoughnessMap,Te=!!b.specularMap,ze=!!b.specularColorMap,Ze=!!b.specularIntensityMap,B=O&&!!b.transmissionMap,Me=O&&!!b.thicknessMap,ie=!!b.gradientMap,he=!!b.alphaMap,be=b.alphaTest>0,Se=!!b.alphaHash,Ge=!!b.extensions;let _t=Ni;b.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(_t=n.toneMapping);const Ft={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:oe,defines:b.defines,customVertexShaderID:pe,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:De,batchingColor:De&&X._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&X.instanceColor!==null,instancingMorph:Ke&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Zt,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:C,envMap:L,envMapMode:L&&ne.mapping,envMapCubeUVHeight:q,aoMap:S,lightMap:ce,bumpMap:Q,normalMap:ee,displacementMap:f&&te,emissiveMap:ue,normalMapObjectSpace:ee&&b.normalMapType===k_,normalMapTangentSpace:ee&&b.normalMapType===Kd,metalnessMap:J,roughnessMap:v,anisotropy:x,anisotropyMap:G,clearcoat:I,clearcoatMap:j,clearcoatNormalMap:re,clearcoatRoughnessMap:Z,dispersion:W,iridescence:w,iridescenceMap:le,iridescenceThicknessMap:_e,sheen:R,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:Te,specularColorMap:ze,specularIntensityMap:Ze,transmission:O,transmissionMap:B,thicknessMap:Me,gradientMap:ie,opaque:b.transparent===!1&&b.blending===Bs&&b.alphaToCoverage===!1,alphaMap:he,alphaTest:be,alphaHash:Se,combine:b.combine,mapUv:pt&&_(b.map.channel),aoMapUv:S&&_(b.aoMap.channel),lightMapUv:ce&&_(b.lightMap.channel),bumpMapUv:Q&&_(b.bumpMap.channel),normalMapUv:ee&&_(b.normalMap.channel),displacementMapUv:te&&_(b.displacementMap.channel),emissiveMapUv:ue&&_(b.emissiveMap.channel),metalnessMapUv:J&&_(b.metalnessMap.channel),roughnessMapUv:v&&_(b.roughnessMap.channel),anisotropyMapUv:G&&_(b.anisotropyMap.channel),clearcoatMapUv:j&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:re&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(b.sheenRoughnessMap.channel),specularMapUv:Te&&_(b.specularMap.channel),specularColorMapUv:ze&&_(b.specularColorMap.channel),specularIntensityMapUv:Ze&&_(b.specularIntensityMap.channel),transmissionMapUv:B&&_(b.transmissionMap.channel),thicknessMapUv:Me&&_(b.thicknessMap.channel),alphaMapUv:he&&_(b.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(ee||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ae.attributes.uv&&(pt||he),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Le,skinning:X.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:_t,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&$e.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:ue&&b.emissiveMap.isVideoTexture===!0&&$e.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wn,flipSided:b.side===Tt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||De)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const N in b.defines)M.push(N),M.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(A(M,b),E(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function A(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function E(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const M=g[b.type];let N;if(M){const H=Hn[M];N=Qo.clone(H.uniforms)}else N=b.uniforms;return N}function U(b,M){let N;for(let H=0,X=u.length;H<X;H++){const se=u[H];if(se.cacheKey===M){N=se,++N.usedTimes;break}}return N===void 0&&(N=new HS(n,M,b,r),u.push(N)),N}function D(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:U,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:z}}function XS(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function jS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ff(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,d,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(h,f,d,g,_,m){const p=o(h,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||jS),i.length>1&&i.sort(f||hf),s.length>1&&s.sort(f||hf)}function u(){for(let h=e,f=n.length;h<f;h++){const d=n[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function qS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new ff,n.set(i,[o])):s>=r.length?(o=new ff,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function YS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Oe};break;case"SpotLight":t={position:new F,direction:new F,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function KS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $S=0;function ZS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function JS(n){const e=new YS,t=KS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new Ve,o=new Ve;function a(c){let u=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,A=0,E=0,y=0,U=0,D=0,P=0;c.sort(ZS);for(let b=0,M=c.length;b<M;b++){const N=c[b],H=N.color,X=N.intensity,se=N.distance,ae=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=H.r*X,h+=H.g*X,f+=H.b*X;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],X);P++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ne=N.shadow,q=t.get(N);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.directionalShadow[d]=q,i.directionalShadowMap[d]=ae,i.directionalShadowMatrix[d]=N.shadow.matrix,A++}i.directional[d]=Y,d++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(H).multiplyScalar(X),Y.distance=se,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[_]=Y;const ne=N.shadow;if(N.map&&(i.spotLightMap[U]=N.map,U++,ne.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[_]=ne.matrix,N.castShadow){const q=t.get(N);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=ae,y++}_++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(H).multiplyScalar(X),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=Y,m++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const ne=N.shadow,q=t.get(N);q.shadowIntensity=ne.intensity,q.shadowBias=ne.bias,q.shadowNormalBias=ne.normalBias,q.shadowRadius=ne.radius,q.shadowMapSize=ne.mapSize,q.shadowCameraNear=ne.camera.near,q.shadowCameraFar=ne.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=ae,i.pointShadowMatrix[g]=N.shadow.matrix,E++}i.point[g]=Y,g++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(X),Y.groundColor.copy(N.groundColor).multiplyScalar(X),i.hemi[p]=Y,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==d||z.pointLength!==g||z.spotLength!==_||z.rectAreaLength!==m||z.hemiLength!==p||z.numDirectionalShadows!==A||z.numPointShadows!==E||z.numSpotShadows!==y||z.numSpotMaps!==U||z.numLightProbes!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+U-D,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=P,z.directionalLength=d,z.pointLength=g,z.spotLength=_,z.rectAreaLength=m,z.hemiLength=p,z.numDirectionalShadows=A,z.numPointShadows=E,z.numSpotShadows=y,z.numSpotMaps=U,z.numLightProbes=P,i.version=$S++)}function l(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const E=c[p];if(E.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),h++}else if(E.isSpotLight){const y=i.spot[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function df(n){const e=new JS(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function QS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new df(n),e.set(s,[a])):r>=o.length?(a=new df(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
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
}`;function nT(n,e,t){let i=new Zc;const s=new Pe,r=new Pe,o=new nt,a=new $0({depthPacking:H_}),l=new Z0,c={},u=t.maxTextureSize,h={[mi]:Tt,[Tt]:mi,[wn]:wn},f=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:eT,fragmentShader:tT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let p=this.type;this.render=function(D,P,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const X=p!==si&&this.type===si,se=p===si&&this.type!==si;for(let ae=0,Y=D.length;ae<Y;ae++){const ne=D[ae],q=ne.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const me=q.getFrameExtents();if(s.multiply(me),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/me.x),s.x=r.x*me.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/me.y),s.y=r.y*me.y,q.mapSize.y=r.y)),q.map===null||X===!0||se===!0){const we=this.type!==si?{minFilter:$t,magFilter:$t}:{};q.map!==null&&q.map.dispose(),q.map=new Un(s.x,s.y,we),q.map.texture.name=ne.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const ve=q.getViewportCount();for(let we=0;we<ve;we++){const Fe=q.getViewport(we);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),H.viewport(o),q.updateMatrices(ne,we),i=q.getFrustum(),y(P,z,q.camera,ne,this.type)}q.isPointLightShadow!==!0&&this.type===si&&A(q,z),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,N)};function A(D,P){const z=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,d.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(P,null,z,f,_,null),d.uniforms.shadow_pass.value=D.mapPass.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(P,null,z,d,_,null)}function E(D,P,z,b){let M=null;const N=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(N!==void 0)M=N;else if(M=z.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const H=M.uuid,X=P.uuid;let se=c[H];se===void 0&&(se={},c[H]=se);let ae=se[X];ae===void 0&&(ae=M.clone(),se[X]=ae,P.addEventListener("dispose",U)),M=ae}if(M.visible=P.visible,M.wireframe=P.wireframe,b===si?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=n.properties.get(M);H.light=z}return M}function y(D,P,z,b,M){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===si)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const X=e.update(D),se=D.material;if(Array.isArray(se)){const ae=X.groups;for(let Y=0,ne=ae.length;Y<ne;Y++){const q=ae[Y],me=se[q.materialIndex];if(me&&me.visible){const ve=E(D,me,b,M);D.onBeforeShadow(n,D,P,z,X,ve,q),n.renderBufferDirect(z,null,X,ve,D,q),D.onAfterShadow(n,D,P,z,X,ve,q)}}}else if(se.visible){const ae=E(D,se,b,M);D.onBeforeShadow(n,D,P,z,X,ae,null),n.renderBufferDirect(z,null,X,ae,D,null),D.onAfterShadow(n,D,P,z,X,ae,null)}}const H=D.children;for(let X=0,se=H.length;X<se;X++)y(H[X],P,z,b,M)}function U(D){D.target.removeEventListener("dispose",U);for(const z in c){const b=c[z],M=D.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const iT={[Pl]:Ll,[Dl]:Nl,[Il]:Fl,[ks]:Ul,[Ll]:Pl,[Nl]:Dl,[Fl]:Il,[Ul]:ks};function sT(n,e){function t(){let B=!1;const Me=new nt;let ie=null;const he=new nt(0,0,0,0);return{setMask:function(be){ie!==be&&!B&&(n.colorMask(be,be,be,be),ie=be)},setLocked:function(be){B=be},setClear:function(be,Se,Ge,_t,Ft){Ft===!0&&(be*=_t,Se*=_t,Ge*=_t),Me.set(be,Se,Ge,_t),he.equals(Me)===!1&&(n.clearColor(be,Se,Ge,_t),he.copy(Me))},reset:function(){B=!1,ie=null,he.set(-1,0,0,0)}}}function i(){let B=!1,Me=!1,ie=null,he=null,be=null;return{setReversed:function(Se){if(Me!==Se){const Ge=e.get("EXT_clip_control");Se?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Me=Se;const _t=be;be=null,this.setClear(_t)}},getReversed:function(){return Me},setTest:function(Se){Se?ge(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(Se){ie!==Se&&!B&&(n.depthMask(Se),ie=Se)},setFunc:function(Se){if(Me&&(Se=iT[Se]),he!==Se){switch(Se){case Pl:n.depthFunc(n.NEVER);break;case Ll:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case ks:n.depthFunc(n.LEQUAL);break;case Il:n.depthFunc(n.EQUAL);break;case Ul:n.depthFunc(n.GEQUAL);break;case Nl:n.depthFunc(n.GREATER);break;case Fl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}he=Se}},setLocked:function(Se){B=Se},setClear:function(Se){be!==Se&&(Me&&(Se=1-Se),n.clearDepth(Se),be=Se)},reset:function(){B=!1,ie=null,he=null,be=null,Me=!1}}}function s(){let B=!1,Me=null,ie=null,he=null,be=null,Se=null,Ge=null,_t=null,Ft=null;return{setTest:function(ot){B||(ot?ge(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function(ot){Me!==ot&&!B&&(n.stencilMask(ot),Me=ot)},setFunc:function(ot,Sn,Kn){(ie!==ot||he!==Sn||be!==Kn)&&(n.stencilFunc(ot,Sn,Kn),ie=ot,he=Sn,be=Kn)},setOp:function(ot,Sn,Kn){(Se!==ot||Ge!==Sn||_t!==Kn)&&(n.stencilOp(ot,Sn,Kn),Se=ot,Ge=Sn,_t=Kn)},setLocked:function(ot){B=ot},setClear:function(ot){Ft!==ot&&(n.clearStencil(ot),Ft=ot)},reset:function(){B=!1,Me=null,ie=null,he=null,be=null,Se=null,Ge=null,_t=null,Ft=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,E=null,y=null,U=null,D=null,P=new Oe(0,0,0),z=0,b=!1,M=null,N=null,H=null,X=null,se=null;const ae=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ne=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ne>=2);let me=null,ve={};const we=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),Qe=new nt().fromArray(we),oe=new nt().fromArray(Fe);function pe(B,Me,ie,he){const be=new Uint8Array(4),Se=n.createTexture();n.bindTexture(B,Se),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<ie;Ge++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,he,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Me+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Se}const Ee={};Ee[n.TEXTURE_2D]=pe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=pe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=pe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=pe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ge(n.DEPTH_TEST),o.setFunc(ks),Q(!1),ee(qu),ge(n.CULL_FACE),S(ui);function ge(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Le(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ke(B,Me){return h[B]!==Me?(n.bindFramebuffer(B,Me),h[B]=Me,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Me),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function De(B,Me){let ie=d,he=!1;if(B){ie=f.get(Me),ie===void 0&&(ie=[],f.set(Me,ie));const be=B.textures;if(ie.length!==be.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Se=0,Ge=be.length;Se<Ge;Se++)ie[Se]=n.COLOR_ATTACHMENT0+Se;ie.length=be.length,he=!0}}else ie[0]!==n.BACK&&(ie[0]=n.BACK,he=!0);he&&n.drawBuffers(ie)}function pt(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const C={[ss]:n.FUNC_ADD,[h_]:n.FUNC_SUBTRACT,[f_]:n.FUNC_REVERSE_SUBTRACT};C[d_]=n.MIN,C[p_]=n.MAX;const L={[m_]:n.ZERO,[g_]:n.ONE,[__]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[T_]:n.SRC_ALPHA_SATURATE,[M_]:n.DST_COLOR,[v_]:n.DST_ALPHA,[x_]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[S_]:n.ONE_MINUS_DST_COLOR,[y_]:n.ONE_MINUS_DST_ALPHA,[b_]:n.CONSTANT_COLOR,[E_]:n.ONE_MINUS_CONSTANT_COLOR,[A_]:n.CONSTANT_ALPHA,[w_]:n.ONE_MINUS_CONSTANT_ALPHA};function S(B,Me,ie,he,be,Se,Ge,_t,Ft,ot){if(B===ui){_===!0&&(Le(n.BLEND),_=!1);return}if(_===!1&&(ge(n.BLEND),_=!0),B!==u_){if(B!==m||ot!==b){if((p!==ss||y!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,y=ss),ot)switch(B){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wl:n.blendFunc(n.ONE,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ku:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ku:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}A=null,E=null,U=null,D=null,P.set(0,0,0),z=0,m=B,b=ot}return}be=be||Me,Se=Se||ie,Ge=Ge||he,(Me!==p||be!==y)&&(n.blendEquationSeparate(C[Me],C[be]),p=Me,y=be),(ie!==A||he!==E||Se!==U||Ge!==D)&&(n.blendFuncSeparate(L[ie],L[he],L[Se],L[Ge]),A=ie,E=he,U=Se,D=Ge),(_t.equals(P)===!1||Ft!==z)&&(n.blendColor(_t.r,_t.g,_t.b,Ft),P.copy(_t),z=Ft),m=B,b=!1}function ce(B,Me){B.side===wn?Le(n.CULL_FACE):ge(n.CULL_FACE);let ie=B.side===Tt;Me&&(ie=!ie),Q(ie),B.blending===Bs&&B.transparent===!1?S(ui):S(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const he=B.stencilWrite;a.setTest(he),he&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ue(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(B){M!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),M=B)}function ee(B){B!==l_?(ge(n.CULL_FACE),B!==N&&(B===qu?n.cullFace(n.BACK):B===c_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),N=B}function te(B){B!==H&&(Y&&n.lineWidth(B),H=B)}function ue(B,Me,ie){B?(ge(n.POLYGON_OFFSET_FILL),(X!==Me||se!==ie)&&(n.polygonOffset(Me,ie),X=Me,se=ie)):Le(n.POLYGON_OFFSET_FILL)}function J(B){B?ge(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function v(B){B===void 0&&(B=n.TEXTURE0+ae-1),me!==B&&(n.activeTexture(B),me=B)}function x(B,Me,ie){ie===void 0&&(me===null?ie=n.TEXTURE0+ae-1:ie=me);let he=ve[ie];he===void 0&&(he={type:void 0,texture:void 0},ve[ie]=he),(he.type!==B||he.texture!==Me)&&(me!==ie&&(n.activeTexture(ie),me=ie),n.bindTexture(B,Me||Ee[B]),he.type=B,he.texture=Me)}function I(){const B=ve[me];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function W(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function R(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _e(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ae(B){Qe.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Qe.copy(B))}function de(B){oe.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),oe.copy(B))}function Te(B,Me){let ie=c.get(Me);ie===void 0&&(ie=new WeakMap,c.set(Me,ie));let he=ie.get(B);he===void 0&&(he=n.getUniformBlockIndex(Me,B.name),ie.set(B,he))}function ze(B,Me){const he=c.get(Me).get(B);l.get(Me)!==he&&(n.uniformBlockBinding(Me,he,B.__bindingPointIndex),l.set(Me,he))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},me=null,ve={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,A=null,E=null,y=null,U=null,D=null,P=new Oe(0,0,0),z=0,b=!1,M=null,N=null,H=null,X=null,se=null,Qe.set(0,0,n.canvas.width,n.canvas.height),oe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ge,disable:Le,bindFramebuffer:Ke,drawBuffers:De,useProgram:pt,setBlending:S,setMaterial:ce,setFlipSided:Q,setCullFace:ee,setLineWidth:te,setPolygonOffset:ue,setScissorTest:J,activeTexture:v,bindTexture:x,unbindTexture:I,compressedTexImage2D:W,compressedTexImage3D:w,texImage2D:le,texImage3D:_e,updateUBOMapping:Te,uniformBlockBinding:ze,texStorage2D:re,texStorage3D:Z,texSubImage2D:R,texSubImage3D:O,compressedTexSubImage2D:G,compressedTexSubImage3D:j,scissor:Ae,viewport:de,reset:Ze}}function rT(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pe,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(v,x){return d?new OffscreenCanvas(v,x):Hr("canvas")}function _(v,x,I){let W=1;const w=J(v);if((w.width>I||w.height>I)&&(W=I/Math.max(w.width,w.height)),W<1)if(typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&v instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&v instanceof ImageBitmap||typeof VideoFrame<"u"&&v instanceof VideoFrame){const R=Math.floor(W*w.width),O=Math.floor(W*w.height);h===void 0&&(h=g(R,O));const G=x?g(R,O):h;return G.width=R,G.height=O,G.getContext("2d").drawImage(v,0,0,R,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+R+"x"+O+")."),G}else return"data"in v&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),v;return v}function m(v){return v.generateMipmaps}function p(v){n.generateMipmap(v)}function A(v){return v.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:v.isWebGL3DRenderTarget?n.TEXTURE_3D:v.isWebGLArrayRenderTarget||v.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(v,x,I,W,w=!1){if(v!==null){if(n[v]!==void 0)return n[v];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+v+"'")}let R=x;if(x===n.RED&&(I===n.FLOAT&&(R=n.R32F),I===n.HALF_FLOAT&&(R=n.R16F),I===n.UNSIGNED_BYTE&&(R=n.R8)),x===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(R=n.R8UI),I===n.UNSIGNED_SHORT&&(R=n.R16UI),I===n.UNSIGNED_INT&&(R=n.R32UI),I===n.BYTE&&(R=n.R8I),I===n.SHORT&&(R=n.R16I),I===n.INT&&(R=n.R32I)),x===n.RG&&(I===n.FLOAT&&(R=n.RG32F),I===n.HALF_FLOAT&&(R=n.RG16F),I===n.UNSIGNED_BYTE&&(R=n.RG8)),x===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(R=n.RG8UI),I===n.UNSIGNED_SHORT&&(R=n.RG16UI),I===n.UNSIGNED_INT&&(R=n.RG32UI),I===n.BYTE&&(R=n.RG8I),I===n.SHORT&&(R=n.RG16I),I===n.INT&&(R=n.RG32I)),x===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(R=n.RGB8UI),I===n.UNSIGNED_SHORT&&(R=n.RGB16UI),I===n.UNSIGNED_INT&&(R=n.RGB32UI),I===n.BYTE&&(R=n.RGB8I),I===n.SHORT&&(R=n.RGB16I),I===n.INT&&(R=n.RGB32I)),x===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(R=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(R=n.RGBA16UI),I===n.UNSIGNED_INT&&(R=n.RGBA32UI),I===n.BYTE&&(R=n.RGBA8I),I===n.SHORT&&(R=n.RGBA16I),I===n.INT&&(R=n.RGBA32I)),x===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(R=n.RGB9_E5),x===n.RGBA){const O=w?Zo:$e.getTransfer(W);I===n.FLOAT&&(R=n.RGBA32F),I===n.HALF_FLOAT&&(R=n.RGBA16F),I===n.UNSIGNED_BYTE&&(R=O===ct?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(R=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(R=n.RGB5_A1)}return(R===n.R16F||R===n.R32F||R===n.RG16F||R===n.RG32F||R===n.RGBA16F||R===n.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function y(v,x){let I;return v?x===null||x===as||x===Nr?I=n.DEPTH24_STENCIL8:x===Ln?I=n.DEPTH32F_STENCIL8:x===Ur&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===as||x===Nr?I=n.DEPTH_COMPONENT24:x===Ln?I=n.DEPTH_COMPONENT32F:x===Ur&&(I=n.DEPTH_COMPONENT16),I}function U(v,x){return m(v)===!0||v.isFramebufferTexture&&v.minFilter!==$t&&v.minFilter!==fn?Math.log2(Math.max(x.width,x.height))+1:v.mipmaps!==void 0&&v.mipmaps.length>0?v.mipmaps.length:v.isCompressedTexture&&Array.isArray(v.image)?x.mipmaps.length:1}function D(v){const x=v.target;x.removeEventListener("dispose",D),z(x),x.isVideoTexture&&u.delete(x)}function P(v){const x=v.target;x.removeEventListener("dispose",P),M(x)}function z(v){const x=i.get(v);if(x.__webglInit===void 0)return;const I=v.source,W=f.get(I);if(W){const w=W[x.__cacheKey];w.usedTimes--,w.usedTimes===0&&b(v),Object.keys(W).length===0&&f.delete(I)}i.remove(v)}function b(v){const x=i.get(v);n.deleteTexture(x.__webglTexture);const I=v.source,W=f.get(I);delete W[x.__cacheKey],o.memory.textures--}function M(v){const x=i.get(v);if(v.depthTexture&&(v.depthTexture.dispose(),i.remove(v.depthTexture)),v.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let w=0;w<x.__webglFramebuffer[W].length;w++)n.deleteFramebuffer(x.__webglFramebuffer[W][w]);else n.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)n.deleteFramebuffer(x.__webglFramebuffer[W]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const I=v.textures;for(let W=0,w=I.length;W<w;W++){const R=i.get(I[W]);R.__webglTexture&&(n.deleteTexture(R.__webglTexture),o.memory.textures--),i.remove(I[W])}i.remove(v)}let N=0;function H(){N=0}function X(){const v=N;return v>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+v+" texture units while this GPU supports only "+s.maxTextures),N+=1,v}function se(v){const x=[];return x.push(v.wrapS),x.push(v.wrapT),x.push(v.wrapR||0),x.push(v.magFilter),x.push(v.minFilter),x.push(v.anisotropy),x.push(v.internalFormat),x.push(v.format),x.push(v.type),x.push(v.generateMipmaps),x.push(v.premultiplyAlpha),x.push(v.flipY),x.push(v.unpackAlignment),x.push(v.colorSpace),x.join()}function ae(v,x){const I=i.get(v);if(v.isVideoTexture&&te(v),v.isRenderTargetTexture===!1&&v.version>0&&I.__version!==v.version){const W=v.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(I,v,x);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+x)}function Y(v,x){const I=i.get(v);if(v.version>0&&I.__version!==v.version){oe(I,v,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+x)}function ne(v,x){const I=i.get(v);if(v.version>0&&I.__version!==v.version){oe(I,v,x);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+x)}function q(v,x){const I=i.get(v);if(v.version>0&&I.__version!==v.version){pe(I,v,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+x)}const me={[Ws]:n.REPEAT,[Li]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},ve={[$t]:n.NEAREST,[Hd]:n.NEAREST_MIPMAP_NEAREST,[mr]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Do]:n.LINEAR_MIPMAP_NEAREST,[li]:n.LINEAR_MIPMAP_LINEAR},we={[V_]:n.NEVER,[Y_]:n.ALWAYS,[G_]:n.LESS,[$d]:n.LEQUAL,[W_]:n.EQUAL,[q_]:n.GEQUAL,[X_]:n.GREATER,[j_]:n.NOTEQUAL};function Fe(v,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===fn||x.magFilter===Do||x.magFilter===mr||x.magFilter===li||x.minFilter===fn||x.minFilter===Do||x.minFilter===mr||x.minFilter===li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(v,n.TEXTURE_WRAP_S,me[x.wrapS]),n.texParameteri(v,n.TEXTURE_WRAP_T,me[x.wrapT]),(v===n.TEXTURE_3D||v===n.TEXTURE_2D_ARRAY)&&n.texParameteri(v,n.TEXTURE_WRAP_R,me[x.wrapR]),n.texParameteri(v,n.TEXTURE_MAG_FILTER,ve[x.magFilter]),n.texParameteri(v,n.TEXTURE_MIN_FILTER,ve[x.minFilter]),x.compareFunction&&(n.texParameteri(v,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(v,n.TEXTURE_COMPARE_FUNC,we[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$t||x.minFilter!==mr&&x.minFilter!==li||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(v,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(v,x){let I=!1;v.__webglInit===void 0&&(v.__webglInit=!0,x.addEventListener("dispose",D));const W=x.source;let w=f.get(W);w===void 0&&(w={},f.set(W,w));const R=se(x);if(R!==v.__cacheKey){w[R]===void 0&&(w[R]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),w[R].usedTimes++;const O=w[v.__cacheKey];O!==void 0&&(w[v.__cacheKey].usedTimes--,O.usedTimes===0&&b(x)),v.__cacheKey=R,v.__webglTexture=w[R].texture}return I}function oe(v,x,I){let W=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=n.TEXTURE_3D);const w=Qe(v,x),R=x.source;t.bindTexture(W,v.__webglTexture,n.TEXTURE0+I);const O=i.get(R);if(R.version!==O.__version||w===!0){t.activeTexture(n.TEXTURE0+I);const G=$e.getPrimaries($e.workingColorSpace),j=x.colorSpace===Pi?null:$e.getPrimaries(x.colorSpace),re=x.colorSpace===Pi||G===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let Z=_(x.image,!1,s.maxTextureSize);Z=ue(x,Z);const le=r.convert(x.format,x.colorSpace),_e=r.convert(x.type);let Ae=E(x.internalFormat,le,_e,x.colorSpace,x.isVideoTexture);Fe(W,x);let de;const Te=x.mipmaps,ze=x.isVideoTexture!==!0,Ze=O.__version===void 0||w===!0,B=R.dataReady,Me=U(x,Z);if(x.isDepthTexture)Ae=y(x.format===Or,x.type),Ze&&(ze?t.texStorage2D(n.TEXTURE_2D,1,Ae,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,Ae,Z.width,Z.height,0,le,_e,null));else if(x.isDataTexture)if(Te.length>0){ze&&Ze&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,Te[0].width,Te[0].height);for(let ie=0,he=Te.length;ie<he;ie++)de=Te[ie],ze?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,le,_e,de.data):t.texImage2D(n.TEXTURE_2D,ie,Ae,de.width,de.height,0,le,_e,de.data);x.generateMipmaps=!1}else ze?(Ze&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,Z.width,Z.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,le,_e,Z.data)):t.texImage2D(n.TEXTURE_2D,0,Ae,Z.width,Z.height,0,le,_e,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ze&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ae,Te[0].width,Te[0].height,Z.depth);for(let ie=0,he=Te.length;ie<he;ie++)if(de=Te[ie],x.format!==vn)if(le!==null)if(ze){if(B)if(x.layerUpdates.size>0){const be=Vh(de.width,de.height,x.format,x.type);for(const Se of x.layerUpdates){const Ge=de.data.subarray(Se*be/de.data.BYTES_PER_ELEMENT,(Se+1)*be/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,Se,de.width,de.height,1,le,Ge)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,Z.depth,le,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,Ae,de.width,de.height,Z.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,de.width,de.height,Z.depth,le,_e,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,Ae,de.width,de.height,Z.depth,0,le,_e,de.data)}else{ze&&Ze&&t.texStorage2D(n.TEXTURE_2D,Me,Ae,Te[0].width,Te[0].height);for(let ie=0,he=Te.length;ie<he;ie++)de=Te[ie],x.format!==vn?le!==null?ze?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,le,de.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,de.width,de.height,le,_e,de.data):t.texImage2D(n.TEXTURE_2D,ie,Ae,de.width,de.height,0,le,_e,de.data)}else if(x.isDataArrayTexture)if(ze){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ae,Z.width,Z.height,Z.depth),B)if(x.layerUpdates.size>0){const ie=Vh(Z.width,Z.height,x.format,x.type);for(const he of x.layerUpdates){const be=Z.data.subarray(he*ie/Z.data.BYTES_PER_ELEMENT,(he+1)*ie/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Z.width,Z.height,1,le,_e,be)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,_e,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ae,Z.width,Z.height,Z.depth,0,le,_e,Z.data);else if(x.isData3DTexture)ze?(Ze&&t.texStorage3D(n.TEXTURE_3D,Me,Ae,Z.width,Z.height,Z.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,_e,Z.data)):t.texImage3D(n.TEXTURE_3D,0,Ae,Z.width,Z.height,Z.depth,0,le,_e,Z.data);else if(x.isFramebufferTexture){if(Ze)if(ze)t.texStorage2D(n.TEXTURE_2D,Me,Ae,Z.width,Z.height);else{let ie=Z.width,he=Z.height;for(let be=0;be<Me;be++)t.texImage2D(n.TEXTURE_2D,be,Ae,ie,he,0,le,_e,null),ie>>=1,he>>=1}}else if(Te.length>0){if(ze&&Ze){const ie=J(Te[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ae,ie.width,ie.height)}for(let ie=0,he=Te.length;ie<he;ie++)de=Te[ie],ze?B&&t.texSubImage2D(n.TEXTURE_2D,ie,0,0,le,_e,de):t.texImage2D(n.TEXTURE_2D,ie,Ae,le,_e,de);x.generateMipmaps=!1}else if(ze){if(Ze){const ie=J(Z);t.texStorage2D(n.TEXTURE_2D,Me,Ae,ie.width,ie.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,_e,Z)}else t.texImage2D(n.TEXTURE_2D,0,Ae,le,_e,Z);m(x)&&p(W),O.__version=R.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function pe(v,x,I){if(x.image.length!==6)return;const W=Qe(v,x),w=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,v.__webglTexture,n.TEXTURE0+I);const R=i.get(w);if(w.version!==R.__version||W===!0){t.activeTexture(n.TEXTURE0+I);const O=$e.getPrimaries($e.workingColorSpace),G=x.colorSpace===Pi?null:$e.getPrimaries(x.colorSpace),j=x.colorSpace===Pi||O===G?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const re=x.isCompressedTexture||x.image[0].isCompressedTexture,Z=x.image[0]&&x.image[0].isDataTexture,le=[];for(let he=0;he<6;he++)!re&&!Z?le[he]=_(x.image[he],!0,s.maxCubemapSize):le[he]=Z?x.image[he].image:x.image[he],le[he]=ue(x,le[he]);const _e=le[0],Ae=r.convert(x.format,x.colorSpace),de=r.convert(x.type),Te=E(x.internalFormat,Ae,de,x.colorSpace),ze=x.isVideoTexture!==!0,Ze=R.__version===void 0||W===!0,B=w.dataReady;let Me=U(x,_e);Fe(n.TEXTURE_CUBE_MAP,x);let ie;if(re){ze&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Te,_e.width,_e.height);for(let he=0;he<6;he++){ie=le[he].mipmaps;for(let be=0;be<ie.length;be++){const Se=ie[be];x.format!==vn?Ae!==null?ze?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,Te,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,0,0,Se.width,Se.height,Ae,de,Se.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be,Te,Se.width,Se.height,0,Ae,de,Se.data)}}}else{if(ie=x.mipmaps,ze&&Ze){ie.length>0&&Me++;const he=J(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Te,he.width,he.height)}for(let he=0;he<6;he++)if(Z){ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,le[he].width,le[he].height,Ae,de,le[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Te,le[he].width,le[he].height,0,Ae,de,le[he].data);for(let be=0;be<ie.length;be++){const Ge=ie[be].image[he].image;ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,Ge.width,Ge.height,Ae,de,Ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,Te,Ge.width,Ge.height,0,Ae,de,Ge.data)}}else{ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae,de,le[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,Te,Ae,de,le[he]);for(let be=0;be<ie.length;be++){const Se=ie[be];ze?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,0,0,Ae,de,Se.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,be+1,Te,Ae,de,Se.image[he])}}}m(x)&&p(n.TEXTURE_CUBE_MAP),R.__version=w.version,x.onUpdate&&x.onUpdate(x)}v.__version=x.version}function Ee(v,x,I,W,w,R){const O=r.convert(I.format,I.colorSpace),G=r.convert(I.type),j=E(I.internalFormat,O,G,I.colorSpace),re=i.get(x),Z=i.get(I);if(Z.__renderTarget=x,!re.__hasExternalTextures){const le=Math.max(1,x.width>>R),_e=Math.max(1,x.height>>R);w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY?t.texImage3D(w,R,j,le,_e,x.depth,0,O,G,null):t.texImage2D(w,R,j,le,_e,0,O,G,null)}t.bindFramebuffer(n.FRAMEBUFFER,v),ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,w,Z.__webglTexture,0,Q(x)):(w===n.TEXTURE_2D||w>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&w<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,w,Z.__webglTexture,R),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(v,x,I){if(n.bindRenderbuffer(n.RENDERBUFFER,v),x.depthBuffer){const W=x.depthTexture,w=W&&W.isDepthTexture?W.type:null,R=y(x.stencilBuffer,w),O=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=Q(x);ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,G,R,x.width,x.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,G,R,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,R,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,v)}else{const W=x.textures;for(let w=0;w<W.length;w++){const R=W[w],O=r.convert(R.format,R.colorSpace),G=r.convert(R.type),j=E(R.internalFormat,O,G,R.colorSpace),re=Q(x);I&&ee(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,re,j,x.width,x.height):ee(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,re,j,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(v,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,v),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const W=i.get(x.depthTexture);W.__renderTarget=x,(!W.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ae(x.depthTexture,0);const w=W.__webglTexture,R=Q(x);if(x.depthTexture.format===Fr)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,w,0,R):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,w,0);else if(x.depthTexture.format===Or)ee(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,w,0,R):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,w,0);else throw new Error("Unknown depthTexture format")}function Ke(v){const x=i.get(v),I=v.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==v.depthTexture){const W=v.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const w=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",w)};W.addEventListener("dispose",w),x.__depthDisposeCallback=w}x.__boundDepthTexture=W}if(v.depthTexture&&!x.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const W=v.texture.mipmaps;W&&W.length>0?Le(x.__webglFramebuffer[0],v):Le(x.__webglFramebuffer,v)}else if(I){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=n.createRenderbuffer(),ge(x.__webglDepthbuffer[W],v,!1);else{const w=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=x.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,R)}}else{const W=v.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ge(x.__webglDepthbuffer,v,!1);else{const w=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,w,n.RENDERBUFFER,R)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function De(v,x,I){const W=i.get(v);x!==void 0&&Ee(W.__webglFramebuffer,v,v.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&Ke(v)}function pt(v){const x=v.texture,I=i.get(v),W=i.get(x);v.addEventListener("dispose",P);const w=v.textures,R=v.isWebGLCubeRenderTarget===!0,O=w.length>1;if(O||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=x.version,o.memory.textures++),R){I.__webglFramebuffer=[];for(let G=0;G<6;G++)if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer[G]=[];for(let j=0;j<x.mipmaps.length;j++)I.__webglFramebuffer[G][j]=n.createFramebuffer()}else I.__webglFramebuffer[G]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){I.__webglFramebuffer=[];for(let G=0;G<x.mipmaps.length;G++)I.__webglFramebuffer[G]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(O)for(let G=0,j=w.length;G<j;G++){const re=i.get(w[G]);re.__webglTexture===void 0&&(re.__webglTexture=n.createTexture(),o.memory.textures++)}if(v.samples>0&&ee(v)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let G=0;G<w.length;G++){const j=w[G];I.__webglColorRenderbuffer[G]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[G]);const re=r.convert(j.format,j.colorSpace),Z=r.convert(j.type),le=E(j.internalFormat,re,Z,j.colorSpace,v.isXRRenderTarget===!0),_e=Q(v);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,le,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+G,n.RENDERBUFFER,I.__webglColorRenderbuffer[G])}n.bindRenderbuffer(n.RENDERBUFFER,null),v.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(I.__webglDepthRenderbuffer,v,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(R){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,x);for(let G=0;G<6;G++)if(x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ee(I.__webglFramebuffer[G][j],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,j);else Ee(I.__webglFramebuffer[G],v,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+G,0);m(x)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(O){for(let G=0,j=w.length;G<j;G++){const re=w[G],Z=i.get(re);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),Fe(n.TEXTURE_2D,re),Ee(I.__webglFramebuffer,v,re,n.COLOR_ATTACHMENT0+G,n.TEXTURE_2D,0),m(re)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let G=n.TEXTURE_2D;if((v.isWebGL3DRenderTarget||v.isWebGLArrayRenderTarget)&&(G=v.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(G,W.__webglTexture),Fe(G,x),x.mipmaps&&x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ee(I.__webglFramebuffer[j],v,x,n.COLOR_ATTACHMENT0,G,j);else Ee(I.__webglFramebuffer,v,x,n.COLOR_ATTACHMENT0,G,0);m(x)&&p(G),t.unbindTexture()}v.depthBuffer&&Ke(v)}function C(v){const x=v.textures;for(let I=0,W=x.length;I<W;I++){const w=x[I];if(m(w)){const R=A(v),O=i.get(w).__webglTexture;t.bindTexture(R,O),p(R),t.unbindTexture()}}}const L=[],S=[];function ce(v){if(v.samples>0){if(ee(v)===!1){const x=v.textures,I=v.width,W=v.height;let w=n.COLOR_BUFFER_BIT;const R=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,O=i.get(v),G=x.length>1;if(G)for(let re=0;re<x.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer);const j=v.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let re=0;re<x.length;re++){if(v.resolveDepthBuffer&&(v.depthBuffer&&(w|=n.DEPTH_BUFFER_BIT),v.stencilBuffer&&v.resolveStencilBuffer&&(w|=n.STENCIL_BUFFER_BIT)),G){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Z=i.get(x[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,I,W,0,0,I,W,w,n.NEAREST),l===!0&&(L.length=0,S.length=0,L.push(n.COLOR_ATTACHMENT0+re),v.depthBuffer&&v.resolveDepthBuffer===!1&&(L.push(R),S.push(R),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,L))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),G)for(let re=0;re<x.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const Z=i.get(x[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,O.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,Z,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(v.depthBuffer&&v.resolveDepthBuffer===!1&&l){const x=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Q(v){return Math.min(s.maxSamples,v.samples)}function ee(v){const x=i.get(v);return v.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function te(v){const x=o.render.frame;u.get(v)!==x&&(u.set(v,x),v.update())}function ue(v,x){const I=v.colorSpace,W=v.format,w=v.type;return v.isCompressedTexture===!0||v.isVideoTexture===!0||I!==Zt&&I!==Pi&&($e.getTransfer(I)===ct?(W!==vn||w!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),x}function J(v){return typeof HTMLImageElement<"u"&&v instanceof HTMLImageElement?(c.width=v.naturalWidth||v.width,c.height=v.naturalHeight||v.height):typeof VideoFrame<"u"&&v instanceof VideoFrame?(c.width=v.displayWidth,c.height=v.displayHeight):(c.width=v.width,c.height=v.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.setTexture2D=ae,this.setTexture2DArray=Y,this.setTexture3D=ne,this.setTextureCube=q,this.rebindTextures=De,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ee}function oT(n,e){function t(i,s=Pi){let r;const o=$e.getTransfer(s);if(i===Gn)return n.UNSIGNED_BYTE;if(i===Hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===kc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Gd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kd)return n.BYTE;if(i===Vd)return n.SHORT;if(i===Ur)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===as)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===hi)return n.HALF_FLOAT;if(i===Wd)return n.ALPHA;if(i===Xd)return n.RGB;if(i===vn)return n.RGBA;if(i===Fr)return n.DEPTH_COMPONENT;if(i===Or)return n.DEPTH_STENCIL;if(i===Vc)return n.RED;if(i===Gc)return n.RED_INTEGER;if(i===jd)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===Xc)return n.RGBA_INTEGER;if(i===Io||i===Uo||i===No||i===Fo)if(o===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Io)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Io)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zl||i===Hl||i===kl||i===Vl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Gl||i===Wl||i===Xl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Gl||i===Wl)return o===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jl||i===ql||i===Yl||i===Kl||i===$l||i===Zl||i===Jl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===sc||i===rc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jl)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ec)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ic)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return o===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===oc||i===ac)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Oo)return o===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qd||i===lc||i===cc||i===uc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const aT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lT=`
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

}`;class cT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new nn({vertexShader:aT,fragmentShader:lT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uT extends cs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new cT,m=t.getContextAttributes();let p=null,A=null;const E=[],y=[],U=new Pe;let D=null;const P=new Yt;P.viewport=new nt;const z=new Yt;z.viewport=new nt;const b=[P,z],M=new vx;let N=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let pe=E[oe];return pe===void 0&&(pe=new Qa,E[oe]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(oe){let pe=E[oe];return pe===void 0&&(pe=new Qa,E[oe]=pe),pe.getGripSpace()},this.getHand=function(oe){let pe=E[oe];return pe===void 0&&(pe=new Qa,E[oe]=pe),pe.getHandSpace()};function X(oe){const pe=y.indexOf(oe.inputSource);if(pe===-1)return;const Ee=E[pe];Ee!==void 0&&(Ee.update(oe.inputSource,oe.frame,c||o),Ee.dispatchEvent({type:oe.type,data:oe.inputSource}))}function se(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",ae);for(let oe=0;oe<E.length;oe++){const pe=y[oe];pe!==null&&(y[oe]=null,E[oe].disconnect(pe))}N=null,H=null,_.reset(),e.setRenderTarget(p),d=null,f=null,h=null,s=null,A=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",se),s.addEventListener("inputsourceschange",ae),m.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,ge=null,Le=null;m.depth&&(Le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=m.stencil?Or:Fr,ge=m.stencil?Nr:as);const Ke={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),A=new Un(f.textureWidth,f.textureHeight,{format:vn,type:Gn,depthTexture:new up(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ee),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),A=new Un(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(oe){for(let pe=0;pe<oe.removed.length;pe++){const Ee=oe.removed[pe],ge=y.indexOf(Ee);ge>=0&&(y[ge]=null,E[ge].disconnect(Ee))}for(let pe=0;pe<oe.added.length;pe++){const Ee=oe.added[pe];let ge=y.indexOf(Ee);if(ge===-1){for(let Ke=0;Ke<E.length;Ke++)if(Ke>=y.length){y.push(Ee),ge=Ke;break}else if(y[Ke]===null){y[Ke]=Ee,ge=Ke;break}if(ge===-1)break}const Le=E[ge];Le&&Le.connect(Ee)}}const Y=new F,ne=new F;function q(oe,pe,Ee){Y.setFromMatrixPosition(pe.matrixWorld),ne.setFromMatrixPosition(Ee.matrixWorld);const ge=Y.distanceTo(ne),Le=pe.projectionMatrix.elements,Ke=Ee.projectionMatrix.elements,De=Le[14]/(Le[10]-1),pt=Le[14]/(Le[10]+1),C=(Le[9]+1)/Le[5],L=(Le[9]-1)/Le[5],S=(Le[8]-1)/Le[0],ce=(Ke[8]+1)/Ke[0],Q=De*S,ee=De*ce,te=ge/(-S+ce),ue=te*-S;if(pe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ue),oe.translateZ(te),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Le[10]===-1)oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const J=De+te,v=pt+te,x=Q-ue,I=ee+(ge-ue),W=C*pt/v*J,w=L*pt/v*J;oe.projectionMatrix.makePerspective(x,I,W,w,J,v),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function me(oe,pe){pe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(pe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let pe=oe.near,Ee=oe.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(Ee=_.depthFar)),M.near=z.near=P.near=pe,M.far=z.far=P.far=Ee,(N!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),N=M.near,H=M.far),P.layers.mask=oe.layers.mask|2,z.layers.mask=oe.layers.mask|4,M.layers.mask=P.layers.mask|z.layers.mask;const ge=oe.parent,Le=M.cameras;me(M,ge);for(let Ke=0;Ke<Le.length;Ke++)me(Le[Ke],ge);Le.length===2?q(M,P,z):M.projectionMatrix.copy(P.projectionMatrix),ve(oe,M,ge)};function ve(oe,pe,Ee){Ee===null?oe.matrix.copy(pe.matrixWorld):(oe.matrix.copy(Ee.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(pe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Xs*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=oe)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let we=null;function Fe(oe,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const Ee=u.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let ge=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let De=0;De<Ee.length;De++){const pt=Ee[De];let C=null;if(d!==null)C=d.getViewport(pt);else{const S=h.getViewSubImage(f,pt);C=S.viewport,De===0&&(e.setRenderTargetTextures(A,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(A))}let L=b[De];L===void 0&&(L=new Yt,L.layers.enable(De),L.viewport=new nt,b[De]=L),L.matrix.fromArray(pt.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(pt.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(C.x,C.y,C.width,C.height),De===0&&(M.matrix.copy(L.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(L)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const De=h.getDepthInformation(Ee[0]);De&&De.isValid&&De.texture&&_.init(e,De,s.renderState)}}for(let Ee=0;Ee<E.length;Ee++){const ge=y[Ee],Le=E[Ee];ge!==null&&Le!==void 0&&Le.update(ge,pe,c||o)}we&&we(oe,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Qe=new pp;Qe.setAnimationLoop(Fe),this.setAnimationLoop=function(oe){we=oe},this.dispose=function(){}}}const Qi=new Xn,hT=new Ve;function fT(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ip(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Tt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Tt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),E=A.envMap,y=A.envMapRotation;E&&(m.envMap.value=E,Qi.copy(y),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(hT.makeRotationFromEuler(Qi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dT(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const y=E.program;i.uniformBlockBinding(A,y)}function c(A,E){let y=s[A.id];y===void 0&&(g(A),y=u(A),s[A.id]=y,A.addEventListener("dispose",m));const U=E.program;i.updateUBOMapping(A,U);const D=e.render.frame;r[A.id]!==D&&(f(A),r[A.id]=D)}function u(A){const E=h();A.__bindingPointIndex=E;const y=n.createBuffer(),U=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,U,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=s[A.id],y=A.uniforms,U=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let D=0,P=y.length;D<P;D++){const z=Array.isArray(y[D])?y[D]:[y[D]];for(let b=0,M=z.length;b<M;b++){const N=z[b];if(d(N,D,b,U)===!0){const H=N.__offset,X=Array.isArray(N.value)?N.value:[N.value];let se=0;for(let ae=0;ae<X.length;ae++){const Y=X[ae],ne=_(Y);typeof Y=="number"||typeof Y=="boolean"?(N.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,H+se,N.__data)):Y.isMatrix3?(N.__data[0]=Y.elements[0],N.__data[1]=Y.elements[1],N.__data[2]=Y.elements[2],N.__data[3]=0,N.__data[4]=Y.elements[3],N.__data[5]=Y.elements[4],N.__data[6]=Y.elements[5],N.__data[7]=0,N.__data[8]=Y.elements[6],N.__data[9]=Y.elements[7],N.__data[10]=Y.elements[8],N.__data[11]=0):(Y.toArray(N.__data,se),se+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(A,E,y,U){const D=A.value,P=E+"_"+y;if(U[P]===void 0)return typeof D=="number"||typeof D=="boolean"?U[P]=D:U[P]=D.clone(),!0;{const z=U[P];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return U[P]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function g(A){const E=A.uniforms;let y=0;const U=16;for(let P=0,z=E.length;P<z;P++){const b=Array.isArray(E[P])?E[P]:[E[P]];for(let M=0,N=b.length;M<N;M++){const H=b[M],X=Array.isArray(H.value)?H.value:[H.value];for(let se=0,ae=X.length;se<ae;se++){const Y=X[se],ne=_(Y),q=y%U,me=q%ne.boundary,ve=q+me;y+=me,ve!==0&&U-ve<ne.storage&&(y+=U-ve),H.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=ne.storage}}}const D=y%U;return D>0&&(y+=U-D),A.__size=y,A.__cache={},this}function _(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class pT{constructor(e={}){const{canvas:t=h0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let U=!1;this._outputColorSpace=Dt;let D=0,P=0,z=null,b=-1,M=null;const N=new nt,H=new nt;let X=null;const se=new Oe(0);let ae=0,Y=t.width,ne=t.height,q=1,me=null,ve=null;const we=new nt(0,0,Y,ne),Fe=new nt(0,0,Y,ne);let Qe=!1;const oe=new Zc;let pe=!1,Ee=!1;const ge=new Ve,Le=new Ve,Ke=new F,De=new nt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function L(){return z===null?q:1}let S=i;function ce(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Se,!1),S===null){const k="webgl2";if(S=ce(k,T),S===null)throw ce(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Q,ee,te,ue,J,v,x,I,W,w,R,O,G,j,re,Z,le,_e,Ae,de,Te,ze,Ze,B;function Me(){Q=new bM(S),Q.init(),ze=new oT(S,Q),ee=new _M(S,Q,e,ze),te=new sT(S,Q),ee.reverseDepthBuffer&&f&&te.buffers.depth.setReversed(!0),ue=new wM(S),J=new XS,v=new rT(S,Q,te,J,ee,ze,ue),x=new vM(y),I=new TM(y),W=new Ix(S),Ze=new mM(S,W),w=new EM(S,W,ue,Ze),R=new CM(S,w,W,ue),Ae=new RM(S,ee,v),Z=new xM(J),O=new WS(y,x,I,Q,ee,Ze,Z),G=new fT(y,J),j=new qS,re=new QS(Q),_e=new pM(y,x,I,te,R,d,l),le=new nT(y,R,ee),B=new dT(S,ue,ee,te),de=new gM(S,Q,ue),Te=new AM(S,Q,ue),ue.programs=O.programs,y.capabilities=ee,y.extensions=Q,y.properties=J,y.renderLists=j,y.shadowMap=le,y.state=te,y.info=ue}Me();const ie=new uT(y,S);this.xr=ie,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const T=Q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(Y,ne,!1))},this.getSize=function(T){return T.set(Y,ne)},this.setSize=function(T,k,K=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,ne=k,t.width=Math.floor(T*q),t.height=Math.floor(k*q),K===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Y*q,ne*q).floor()},this.setDrawingBufferSize=function(T,k,K){Y=T,ne=k,q=K,t.width=Math.floor(T*K),t.height=Math.floor(k*K),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(N)},this.getViewport=function(T){return T.copy(we)},this.setViewport=function(T,k,K,$){T.isVector4?we.set(T.x,T.y,T.z,T.w):we.set(T,k,K,$),te.viewport(N.copy(we).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Fe)},this.setScissor=function(T,k,K,$){T.isVector4?Fe.set(T.x,T.y,T.z,T.w):Fe.set(T,k,K,$),te.scissor(H.copy(Fe).multiplyScalar(q).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){te.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){ve=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,K=!0){let $=0;if(T){let V=!1;if(z!==null){const fe=z.texture.format;V=fe===Xc||fe===Wc||fe===Gc}if(V){const fe=z.texture.type,ye=fe===Gn||fe===as||fe===Ur||fe===Nr||fe===Hc||fe===kc,Re=_e.getClearColor(),Ce=_e.getClearAlpha(),ke=Re.r,He=Re.g,Ue=Re.b;ye?(g[0]=ke,g[1]=He,g[2]=Ue,g[3]=Ce,S.clearBufferuiv(S.COLOR,0,g)):(_[0]=ke,_[1]=He,_[2]=Ue,_[3]=Ce,S.clearBufferiv(S.COLOR,0,_))}else $|=S.COLOR_BUFFER_BIT}k&&($|=S.DEPTH_BUFFER_BIT),K&&($|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),_e.dispose(),j.dispose(),re.dispose(),J.dispose(),x.dispose(),I.dispose(),R.dispose(),Ze.dispose(),B.dispose(),O.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ou),ie.removeEventListener("sessionend",au),Hi.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const T=ue.autoReset,k=le.enabled,K=le.autoUpdate,$=le.needsUpdate,V=le.type;Me(),ue.autoReset=T,le.enabled=k,le.autoUpdate=K,le.needsUpdate=$,le.type=V}function Se(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){const k=T.target;k.removeEventListener("dispose",Ge),_t(k)}function _t(T){Ft(T),J.remove(T)}function Ft(T){const k=J.get(T).programs;k!==void 0&&(k.forEach(function(K){O.releaseProgram(K)}),T.isShaderMaterial&&O.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,K,$,V,fe){k===null&&(k=pt);const ye=V.isMesh&&V.matrixWorld.determinant()<0,Re=bp(T,k,K,$,V);te.setMaterial($,ye);let Ce=K.index,ke=1;if($.wireframe===!0){if(Ce=w.getWireframeAttribute(K),Ce===void 0)return;ke=2}const He=K.drawRange,Ue=K.attributes.position;let Je=He.start*ke,it=(He.start+He.count)*ke;fe!==null&&(Je=Math.max(Je,fe.start*ke),it=Math.min(it,(fe.start+fe.count)*ke)),Ce!==null?(Je=Math.max(Je,0),it=Math.min(it,Ce.count)):Ue!=null&&(Je=Math.max(Je,0),it=Math.min(it,Ue.count));const yt=it-Je;if(yt<0||yt===1/0)return;Ze.setup(V,$,Re,K,Ce);let xt,et=de;if(Ce!==null&&(xt=W.get(Ce),et=Te,et.setIndex(xt)),V.isMesh)$.wireframe===!0?(te.setLineWidth($.wireframeLinewidth*L()),et.setMode(S.LINES)):et.setMode(S.TRIANGLES);else if(V.isLine){let Ne=$.linewidth;Ne===void 0&&(Ne=1),te.setLineWidth(Ne*L()),V.isLineSegments?et.setMode(S.LINES):V.isLineLoop?et.setMode(S.LINE_LOOP):et.setMode(S.LINE_STRIP)}else V.isPoints?et.setMode(S.POINTS):V.isSprite&&et.setMode(S.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Bo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),et.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))et.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ne=V._multiDrawStarts,Pt=V._multiDrawCounts,st=V._multiDrawCount,Tn=Ce?W.get(Ce).bytesPerElement:1,us=J.get($).currentProgram.getUniforms();for(let rn=0;rn<st;rn++)us.setValue(S,"_gl_DrawID",rn),et.render(Ne[rn]/Tn,Pt[rn])}else if(V.isInstancedMesh)et.renderInstances(Je,yt,V.count);else if(K.isInstancedBufferGeometry){const Ne=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Pt=Math.min(K.instanceCount,Ne);et.renderInstances(Je,yt,Pt)}else et.render(Je,yt)};function ot(T,k,K){T.transparent===!0&&T.side===wn&&T.forceSinglePass===!1?(T.side=Tt,T.needsUpdate=!0,Yr(T,k,K),T.side=mi,T.needsUpdate=!0,Yr(T,k,K),T.side=wn):Yr(T,k,K)}this.compile=function(T,k,K=null){K===null&&(K=T),p=re.get(K),p.init(k),E.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==K&&T.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return T.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const fe=V.material;if(fe)if(Array.isArray(fe))for(let ye=0;ye<fe.length;ye++){const Re=fe[ye];ot(Re,K,V),$.add(Re)}else ot(fe,K,V),$.add(fe)}),p=E.pop(),$},this.compileAsync=function(T,k,K=null){const $=this.compile(T,k,K);return new Promise(V=>{function fe(){if($.forEach(function(ye){J.get(ye).currentProgram.isReady()&&$.delete(ye)}),$.size===0){V(T);return}setTimeout(fe,10)}Q.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Sn=null;function Kn(T){Sn&&Sn(T)}function ou(){Hi.stop()}function au(){Hi.start()}const Hi=new pp;Hi.setAnimationLoop(Kn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(T){Sn=T,ie.setAnimationLoop(T),T===null?Hi.stop():Hi.start()},ie.addEventListener("sessionstart",ou),ie.addEventListener("sessionend",au),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(k),k=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,k,z),p=re.get(T,E.length),p.init(k),E.push(p),Le.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),oe.setFromProjectionMatrix(Le),Ee=this.localClippingEnabled,pe=Z.init(this.clippingPlanes,Ee),m=j.get(T,A.length),m.init(),A.push(m),ie.enabled===!0&&ie.isPresenting===!0){const fe=y.xr.getDepthSensingMesh();fe!==null&&_a(fe,k,-1/0,y.sortObjects)}_a(T,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(me,ve),C=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,C&&_e.addToRenderList(m,T),this.info.render.frame++,pe===!0&&Z.beginShadows();const K=p.state.shadowsArray;le.render(K,T,k),pe===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,V=m.transmissive;if(p.setupLights(),k.isArrayCamera){const fe=k.cameras;if(V.length>0)for(let ye=0,Re=fe.length;ye<Re;ye++){const Ce=fe[ye];cu($,V,T,Ce)}C&&_e.render(T);for(let ye=0,Re=fe.length;ye<Re;ye++){const Ce=fe[ye];lu(m,T,Ce,Ce.viewport)}}else V.length>0&&cu($,V,T,k),C&&_e.render(T),lu(m,T,k);z!==null&&P===0&&(v.updateMultisampleRenderTarget(z),v.updateRenderTargetMipmap(z)),T.isScene===!0&&T.onAfterRender(y,T,k),Ze.resetDefaultState(),b=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],pe===!0&&Z.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function _a(T,k,K,$){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||oe.intersectsSprite(T)){$&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Le);const ye=R.update(T),Re=T.material;Re.visible&&m.push(T,ye,Re,K,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||oe.intersectsObject(T))){const ye=R.update(T),Re=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(Le)),Array.isArray(Re)){const Ce=ye.groups;for(let ke=0,He=Ce.length;ke<He;ke++){const Ue=Ce[ke],Je=Re[Ue.materialIndex];Je&&Je.visible&&m.push(T,ye,Je,K,De.z,Ue)}}else Re.visible&&m.push(T,ye,Re,K,De.z,null)}}const fe=T.children;for(let ye=0,Re=fe.length;ye<Re;ye++)_a(fe[ye],k,K,$)}function lu(T,k,K,$){const V=T.opaque,fe=T.transmissive,ye=T.transparent;p.setupLightsView(K),pe===!0&&Z.setGlobalState(y.clippingPlanes,K),$&&te.viewport(N.copy($)),V.length>0&&qr(V,k,K),fe.length>0&&qr(fe,k,K),ye.length>0&&qr(ye,k,K),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function cu(T,k,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Un(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?hi:Gn,minFilter:li,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const fe=p.state.transmissionRenderTarget[$.id],ye=$.viewport||N;fe.setSize(ye.z*y.transmissionResolutionScale,ye.w*y.transmissionResolutionScale);const Re=y.getRenderTarget();y.setRenderTarget(fe),y.getClearColor(se),ae=y.getClearAlpha(),ae<1&&y.setClearColor(16777215,.5),y.clear(),C&&_e.render(K);const Ce=y.toneMapping;y.toneMapping=Ni;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),pe===!0&&Z.setGlobalState(y.clippingPlanes,$),qr(T,K,$),v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe),Q.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ue=0,Je=k.length;Ue<Je;Ue++){const it=k[Ue],yt=it.object,xt=it.geometry,et=it.material,Ne=it.group;if(et.side===wn&&yt.layers.test($.layers)){const Pt=et.side;et.side=Tt,et.needsUpdate=!0,uu(yt,K,$,xt,et,Ne),et.side=Pt,et.needsUpdate=!0,He=!0}}He===!0&&(v.updateMultisampleRenderTarget(fe),v.updateRenderTargetMipmap(fe))}y.setRenderTarget(Re),y.setClearColor(se,ae),ke!==void 0&&($.viewport=ke),y.toneMapping=Ce}function qr(T,k,K){const $=k.isScene===!0?k.overrideMaterial:null;for(let V=0,fe=T.length;V<fe;V++){const ye=T[V],Re=ye.object,Ce=ye.geometry,ke=ye.group;let He=ye.material;He.allowOverride===!0&&$!==null&&(He=$),Re.layers.test(K.layers)&&uu(Re,k,K,Ce,He,ke)}}function uu(T,k,K,$,V,fe){T.onBeforeRender(y,k,K,$,V,fe),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(y,k,K,$,T,fe),V.transparent===!0&&V.side===wn&&V.forceSinglePass===!1?(V.side=Tt,V.needsUpdate=!0,y.renderBufferDirect(K,k,$,V,T,fe),V.side=mi,V.needsUpdate=!0,y.renderBufferDirect(K,k,$,V,T,fe),V.side=wn):y.renderBufferDirect(K,k,$,V,T,fe),T.onAfterRender(y,k,K,$,V,fe)}function Yr(T,k,K){k.isScene!==!0&&(k=pt);const $=J.get(T),V=p.state.lights,fe=p.state.shadowsArray,ye=V.state.version,Re=O.getParameters(T,V.state,fe,k,K),Ce=O.getProgramCacheKey(Re);let ke=$.programs;$.environment=T.isMeshStandardMaterial?k.environment:null,$.fog=k.fog,$.envMap=(T.isMeshStandardMaterial?I:x).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Ge),ke=new Map,$.programs=ke);let He=ke.get(Ce);if(He!==void 0){if($.currentProgram===He&&$.lightsStateVersion===ye)return fu(T,Re),He}else Re.uniforms=O.getUniforms(T),T.onBeforeCompile(Re,y),He=O.acquireProgram(Re,Ce),ke.set(Ce,He),$.uniforms=Re.uniforms;const Ue=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ue.clippingPlanes=Z.uniform),fu(T,Re),$.needsLights=Ap(T),$.lightsStateVersion=ye,$.needsLights&&(Ue.ambientLightColor.value=V.state.ambient,Ue.lightProbe.value=V.state.probe,Ue.directionalLights.value=V.state.directional,Ue.directionalLightShadows.value=V.state.directionalShadow,Ue.spotLights.value=V.state.spot,Ue.spotLightShadows.value=V.state.spotShadow,Ue.rectAreaLights.value=V.state.rectArea,Ue.ltc_1.value=V.state.rectAreaLTC1,Ue.ltc_2.value=V.state.rectAreaLTC2,Ue.pointLights.value=V.state.point,Ue.pointLightShadows.value=V.state.pointShadow,Ue.hemisphereLights.value=V.state.hemi,Ue.directionalShadowMap.value=V.state.directionalShadowMap,Ue.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ue.spotShadowMap.value=V.state.spotShadowMap,Ue.spotLightMatrix.value=V.state.spotLightMatrix,Ue.spotLightMap.value=V.state.spotLightMap,Ue.pointShadowMap.value=V.state.pointShadowMap,Ue.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=He,$.uniformsList=null,He}function hu(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Ho.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function fu(T,k){const K=J.get(T);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function bp(T,k,K,$,V){k.isScene!==!0&&(k=pt),v.resetTextureUnits();const fe=k.fog,ye=$.isMeshStandardMaterial?k.environment:null,Re=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Zt,Ce=($.isMeshStandardMaterial?I:x).get($.envMap||ye),ke=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,He=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ue=!!K.morphAttributes.position,Je=!!K.morphAttributes.normal,it=!!K.morphAttributes.color;let yt=Ni;$.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(yt=y.toneMapping);const xt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=xt!==void 0?xt.length:0,Ne=J.get($),Pt=p.state.lights;if(pe===!0&&(Ee===!0||T!==M)){const Gt=T===M&&$.id===b;Z.setState($,T,Gt)}let st=!1;$.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Pt.state.version||Ne.outputColorSpace!==Re||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Ce||$.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Z.numPlanes||Ne.numIntersection!==Z.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==He||Ne.morphTargets!==Ue||Ne.morphNormals!==Je||Ne.morphColors!==it||Ne.toneMapping!==yt||Ne.morphTargetsCount!==et)&&(st=!0):(st=!0,Ne.__version=$.version);let Tn=Ne.currentProgram;st===!0&&(Tn=Yr($,k,V));let us=!1,rn=!1,nr=!1;const mt=Tn.getUniforms(),dn=Ne.uniforms;if(te.useProgram(Tn.program)&&(us=!0,rn=!0,nr=!0),$.id!==b&&(b=$.id,rn=!0),us||M!==T){te.buffers.depth.getReversed()?(ge.copy(T.projectionMatrix),d0(ge),p0(ge),mt.setValue(S,"projectionMatrix",ge)):mt.setValue(S,"projectionMatrix",T.projectionMatrix),mt.setValue(S,"viewMatrix",T.matrixWorldInverse);const Jt=mt.map.cameraPosition;Jt!==void 0&&Jt.setValue(S,Ke.setFromMatrixPosition(T.matrixWorld)),ee.logarithmicDepthBuffer&&mt.setValue(S,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&mt.setValue(S,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,rn=!0,nr=!0)}if(V.isSkinnedMesh){mt.setOptional(S,V,"bindMatrix"),mt.setOptional(S,V,"bindMatrixInverse");const Gt=V.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),mt.setValue(S,"boneTexture",Gt.boneTexture,v))}V.isBatchedMesh&&(mt.setOptional(S,V,"batchingTexture"),mt.setValue(S,"batchingTexture",V._matricesTexture,v),mt.setOptional(S,V,"batchingIdTexture"),mt.setValue(S,"batchingIdTexture",V._indirectTexture,v),mt.setOptional(S,V,"batchingColorTexture"),V._colorsTexture!==null&&mt.setValue(S,"batchingColorTexture",V._colorsTexture,v));const pn=K.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ae.update(V,K,Tn),(rn||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,mt.setValue(S,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(dn.envMap.value=Ce,dn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&k.environment!==null&&(dn.envMapIntensity.value=k.environmentIntensity),rn&&(mt.setValue(S,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Ep(dn,nr),fe&&$.fog===!0&&G.refreshFogUniforms(dn,fe),G.refreshMaterialUniforms(dn,$,q,ne,p.state.transmissionRenderTarget[T.id]),Ho.upload(S,hu(Ne),dn,v)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ho.upload(S,hu(Ne),dn,v),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&mt.setValue(S,"center",V.center),mt.setValue(S,"modelViewMatrix",V.modelViewMatrix),mt.setValue(S,"normalMatrix",V.normalMatrix),mt.setValue(S,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Gt=$.uniformsGroups;for(let Jt=0,xa=Gt.length;Jt<xa;Jt++){const ki=Gt[Jt];B.update(ki,Tn),B.bind(ki,Tn)}}return Tn}function Ep(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function Ap(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,k,K){const $=J.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(T.texture).__webglTexture=k,J.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const K=J.get(T);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const wp=S.createFramebuffer();this.setRenderTarget=function(T,k=0,K=0){z=T,D=k,P=K;let $=!0,V=null,fe=!1,ye=!1;if(T){const Ce=J.get(T);if(Ce.__useDefaultFramebuffer!==void 0)te.bindFramebuffer(S.FRAMEBUFFER,null),$=!1;else if(Ce.__webglFramebuffer===void 0)v.setupRenderTarget(T);else if(Ce.__hasExternalTextures)v.rebindTextures(T,J.get(T.texture).__webglTexture,J.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ue=T.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&J.has(Ue)&&(T.width!==Ue.image.width||T.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const He=J.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[k])?V=He[k][K]:V=He[k],fe=!0):T.samples>0&&v.useMultisampledRTT(T)===!1?V=J.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?V=He[K]:V=He,N.copy(T.viewport),H.copy(T.scissor),X=T.scissorTest}else N.copy(we).multiplyScalar(q).floor(),H.copy(Fe).multiplyScalar(q).floor(),X=Qe;if(K!==0&&(V=wp),te.bindFramebuffer(S.FRAMEBUFFER,V)&&$&&te.drawBuffers(T,V),te.viewport(N),te.scissor(H),te.setScissorTest(X),fe){const Ce=J.get(T.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,K)}else if(ye){const Ce=J.get(T.texture),ke=k;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ce.__webglTexture,K,ke)}else if(T!==null&&K!==0){const Ce=J.get(T.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ce.__webglTexture,K)}b=-1},this.readRenderTargetPixels=function(T,k,K,$,V,fe,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){te.bindFramebuffer(S.FRAMEBUFFER,Re);try{const Ce=T.texture,ke=Ce.format,He=Ce.type;if(!ee.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-$&&K>=0&&K<=T.height-V&&S.readPixels(k,K,$,V,ze.convert(ke),ze.convert(He),fe)}finally{const Ce=z!==null?J.get(z).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,k,K,$,V,fe,ye){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=J.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re)if(k>=0&&k<=T.width-$&&K>=0&&K<=T.height-V){te.bindFramebuffer(S.FRAMEBUFFER,Re);const Ce=T.texture,ke=Ce.format,He=Ce.type;if(!ee.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ue=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ue),S.bufferData(S.PIXEL_PACK_BUFFER,fe.byteLength,S.STREAM_READ),S.readPixels(k,K,$,V,ze.convert(ke),ze.convert(He),0);const Je=z!==null?J.get(z).__webglFramebuffer:null;te.bindFramebuffer(S.FRAMEBUFFER,Je);const it=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await f0(S,it,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ue),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,fe),S.deleteBuffer(Ue),S.deleteSync(it),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,K=0){const $=Math.pow(2,-K),V=Math.floor(T.image.width*$),fe=Math.floor(T.image.height*$),ye=k!==null?k.x:0,Re=k!==null?k.y:0;v.setTexture2D(T,0),S.copyTexSubImage2D(S.TEXTURE_2D,K,0,0,ye,Re,V,fe),te.unbindTexture()};const Rp=S.createFramebuffer(),Cp=S.createFramebuffer();this.copyTextureToTexture=function(T,k,K=null,$=null,V=0,fe=null){fe===null&&(V!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=V,V=0):fe=0);let ye,Re,Ce,ke,He,Ue,Je,it,yt;const xt=T.isCompressedTexture?T.mipmaps[fe]:T.image;if(K!==null)ye=K.max.x-K.min.x,Re=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,He=K.min.y,Ue=K.isBox3?K.min.z:0;else{const pn=Math.pow(2,-V);ye=Math.floor(xt.width*pn),Re=Math.floor(xt.height*pn),T.isDataArrayTexture?Ce=xt.depth:T.isData3DTexture?Ce=Math.floor(xt.depth*pn):Ce=1,ke=0,He=0,Ue=0}$!==null?(Je=$.x,it=$.y,yt=$.z):(Je=0,it=0,yt=0);const et=ze.convert(k.format),Ne=ze.convert(k.type);let Pt;k.isData3DTexture?(v.setTexture3D(k,0),Pt=S.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(v.setTexture2DArray(k,0),Pt=S.TEXTURE_2D_ARRAY):(v.setTexture2D(k,0),Pt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,k.unpackAlignment);const st=S.getParameter(S.UNPACK_ROW_LENGTH),Tn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),us=S.getParameter(S.UNPACK_SKIP_PIXELS),rn=S.getParameter(S.UNPACK_SKIP_ROWS),nr=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,xt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,xt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,ke),S.pixelStorei(S.UNPACK_SKIP_ROWS,He),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ue);const mt=T.isDataArrayTexture||T.isData3DTexture,dn=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const pn=J.get(T),Gt=J.get(k),Jt=J.get(pn.__renderTarget),xa=J.get(Gt.__renderTarget);te.bindFramebuffer(S.READ_FRAMEBUFFER,Jt.__webglFramebuffer),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,xa.__webglFramebuffer);for(let ki=0;ki<Ce;ki++)mt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,J.get(T).__webglTexture,V,Ue+ki),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,J.get(k).__webglTexture,fe,yt+ki)),S.blitFramebuffer(ke,He,ye,Re,Je,it,ye,Re,S.DEPTH_BUFFER_BIT,S.NEAREST);te.bindFramebuffer(S.READ_FRAMEBUFFER,null),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(V!==0||T.isRenderTargetTexture||J.has(T)){const pn=J.get(T),Gt=J.get(k);te.bindFramebuffer(S.READ_FRAMEBUFFER,Rp),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,Cp);for(let Jt=0;Jt<Ce;Jt++)mt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,pn.__webglTexture,V,Ue+Jt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,pn.__webglTexture,V),dn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Gt.__webglTexture,fe,yt+Jt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Gt.__webglTexture,fe),V!==0?S.blitFramebuffer(ke,He,ye,Re,Je,it,ye,Re,S.COLOR_BUFFER_BIT,S.NEAREST):dn?S.copyTexSubImage3D(Pt,fe,Je,it,yt+Jt,ke,He,ye,Re):S.copyTexSubImage2D(Pt,fe,Je,it,ke,He,ye,Re);te.bindFramebuffer(S.READ_FRAMEBUFFER,null),te.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else dn?T.isDataTexture||T.isData3DTexture?S.texSubImage3D(Pt,fe,Je,it,yt,ye,Re,Ce,et,Ne,xt.data):k.isCompressedArrayTexture?S.compressedTexSubImage3D(Pt,fe,Je,it,yt,ye,Re,Ce,et,xt.data):S.texSubImage3D(Pt,fe,Je,it,yt,ye,Re,Ce,et,Ne,xt):T.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,fe,Je,it,ye,Re,et,Ne,xt.data):T.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,fe,Je,it,xt.width,xt.height,et,xt.data):S.texSubImage2D(S.TEXTURE_2D,fe,Je,it,ye,Re,et,Ne,xt);S.pixelStorei(S.UNPACK_ROW_LENGTH,st),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Tn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,us),S.pixelStorei(S.UNPACK_SKIP_ROWS,rn),S.pixelStorei(S.UNPACK_SKIP_IMAGES,nr),fe===0&&k.generateMipmaps&&S.generateMipmap(Pt),te.unbindTexture()},this.copyTextureToTexture3D=function(T,k,K=null,$=null,V=0){return Bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,k,K,$,V)},this.initRenderTarget=function(T){J.get(T).__webglFramebuffer===void 0&&v.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?v.setTextureCube(T,0):T.isData3DTexture?v.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?v.setTexture2DArray(T,0):v.setTexture2D(T,0),te.unbindTexture()},this.resetState=function(){D=0,P=0,z=null,te.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}const pf={type:"change"},ru={type:"start"},vp={type:"end"},wo=new Zs,mf=new Ri,mT=Math.cos(70*Zd.DEG2RAD),St=new F,Qt=2*Math.PI,ut={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fl=1e-6;class gT extends Lx{constructor(e,t=null){super(e,t),this.state=ut.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Os.ROTATE,MIDDLE:Os.DOLLY,RIGHT:Os.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Wn,this._lastTargetPosition=new F,this._quat=new Wn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new kh,this._sphericalDelta=new kh,this._scale=1,this._panOffset=new F,this._rotateStart=new Pe,this._rotateEnd=new Pe,this._rotateDelta=new Pe,this._panStart=new Pe,this._panEnd=new Pe,this._panDelta=new Pe,this._dollyStart=new Pe,this._dollyEnd=new Pe,this._dollyDelta=new Pe,this._dollyDirection=new F,this._mouse=new Pe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=xT.bind(this),this._onPointerDown=_T.bind(this),this._onPointerUp=vT.bind(this),this._onContextMenu=AT.bind(this),this._onMouseWheel=ST.bind(this),this._onKeyDown=TT.bind(this),this._onTouchStart=bT.bind(this),this._onTouchMove=ET.bind(this),this._onMouseDown=yT.bind(this),this._onMouseMove=MT.bind(this),this._interceptControlDown=wT.bind(this),this._interceptControlUp=RT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(pf),this.update(),this.state=ut.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===ut.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Qt:i>Math.PI&&(i-=Qt),s<-Math.PI?s+=Qt:s>Math.PI&&(s-=Qt),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=St.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(wo.origin.copy(this.object.position),wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wo.direction))<mT?this.object.lookAt(this.target):(mf.setFromNormalAndCoplanarPoint(this.object.up,this.target),wo.intersectPlane(mf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fl||this._lastTargetPosition.distanceToSquared(this.target)>fl?(this.dispatchEvent(pf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qt/60*this.autoRotateSpeed*e:Qt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;St.copy(s).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Pe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function _T(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function xT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(vp),this.state=ut.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function yT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Os.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ut.DOLLY;break;case Os.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}break;case Os.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ut.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ut.PAN}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(ru)}function MT(n){switch(this.state){case ut.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ut.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ut.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ST(n){this.enabled===!1||this.enableZoom===!1||this.state!==ut.NONE||(n.preventDefault(),this.dispatchEvent(ru),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(vp))}function TT(n){this.enabled!==!1&&this._handleKeyDown(n)}function bT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ut.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ut.TOUCH_PAN;break;default:this.state=ut.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ut.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ut.TOUCH_DOLLY_ROTATE;break;default:this.state=ut.NONE}break;default:this.state=ut.NONE}this.state!==ut.NONE&&this.dispatchEvent(ru)}function ET(n){switch(this._trackPointer(n),this.state){case ut.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ut.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ut.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ut.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ut.NONE}}function AT(n){this.enabled!==!1&&n.preventDefault()}function wT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gf(n,e){if(e===B_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===hc||e===Yd){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===hc)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class CT extends er{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new UT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new WT(t)}),this.register(function(t){return new XT(t)}),this.register(function(t){return new jT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new GT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new qT(t)}),this.register(function(t){return new YT(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Er.extractUrlBase(e);o=Er.resolveURL(c,this.path)}else o=Er.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new dp(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yp){try{o[Ye.KHR_BINARY_GLTF]=new KT(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lb(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:o[h]=new DT;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[h]=new $T(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[h]=new ZT;break;case Ye.KHR_MESH_QUANTIZATION:o[h]=new JT;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function PT(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class LT{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zo(u),c.distance=h;break;case"spot":c=new px(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class DT{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return yn}extendParams(e,t,i){const s=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Dt))}return Promise.all(s)}}class IT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class UT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Pe(a,a)}return Promise.all(r)}}class NT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class FT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class OT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Dt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class zT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Zt),Promise.all(r)}}class HT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class kT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],Zt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Dt)),Promise.all(r)}}class VT{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class GT{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class WT{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class XT{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class jT{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class qT{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}}class YT{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==xn.TRIANGLES&&c.mode!==xn.TRIANGLE_STRIP&&c.mode!==xn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const g of h){const _=new Ve,m=new F,p=new Wn,A=new F(1,1,1),E=new W0(g.geometry,g.material,f);for(let y=0;y<f;y++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,y),l.SCALE&&A.fromBufferAttribute(l.SCALE,y),E.setMatrixAt(y,_.compose(m,p,A));for(const y in l)if(y==="_COLOR_0"){const U=l[y];E.instanceColor=new dc(U.array,U.itemSize,U.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&g.geometry.setAttribute(y,l[y]);gt.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),d.push(E)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const yp="glTF",dr=12,_f={JSON:1313821514,BIN:5130562};class KT{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,dr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-dr,r=new DataView(e,dr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===_f.JSON){const c=new Uint8Array(e,dr+o,a);this.content=i.decode(c)}else if(l===_f.BIN){const c=dr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class $T{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=_c[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=_c[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],d=Hs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(const g in d.attributes){const _=d.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}h(d)},a,c,Zt,f)})})}}class ZT{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class JT{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Mp extends Wr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,d=f*h,g=e*c,_=g-c,m=-2*d+3*f,p=d-f,A=1-m,E=p-f+h;for(let y=0;y!==a;y++){const U=o[_+y+a],D=o[_+y+l]*u,P=o[g+y+a],z=o[g+y]*u;r[y]=A*U+E*D+m*P+p*z}return r}}const QT=new Wn;class eb extends Mp{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return QT.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Hs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xf={9728:$t,9729:fn,9984:Hd,9985:Do,9986:mr,9987:li},vf={33071:Li,33648:$o,10497:Ws},dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_c={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tb={CUBICSPLINE:void 0,LINEAR:zr,STEP:Br},pl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nb(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new pa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:mi})),n.DefaultMaterial}function es(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function oi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ib(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function sb(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rb(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ml(t.attributes):e=n.indices+":"+ml(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+ml(n.targets[i]);return e}function ml(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function xc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ob(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ab=new Ve;class lb{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new PT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new hx(this.options.manager):this.textureLoader=new xx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new dp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return es(r,a,s),oi(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Er.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=dl[s.type],a=Hs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=dl[s.type],c=Hs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(d&&d!==h){const p=Math.floor(f/d),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(A);E||(_=new c(a,p*d,s.count*d/u),E=new z0(_,d/u),t.cache.add(A,E)),m=new Kc(E,l,f%d/u,g)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Vt(_,l,g);if(s.sparse!==void 0){const p=dl.SCALAR,A=Hs[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,U=new A(o[1],E,s.sparse.count*p),D=new c(o[2],y,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,z=U.length;P<z;P++){const b=U[P];if(m.setX(b,D[P*l]),l>=2&&m.setY(b,D[P*l+1]),l>=3&&m.setZ(b,D[P*l+2]),l>=4&&m.setW(b,D[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=xf[f.magFilter]||fn,u.minFilter=xf[f.minFilter]||li,u.wrapS=vf[f.wrapS]||Ws,u.wrapT=vf[f.wrapT]||Ws,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==$t&&u.minFilter!==fn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new Et(_);m.needsUpdate=!0,f(m)}),t.load(Er.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),oi(h,o),h.userData.mimeType=o.mimeType||ob(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Qc,Vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new lp,Vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return pa}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=s[Ye.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Zt),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Dt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wn);const u=r.alphaMode||pl.OPAQUE;if(u===pl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===pl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Pe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==yn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yn){const h=r.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],Zt)}return r.emissiveTexture!==void 0&&o!==yn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Dt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),oi(h,r),t.associations.set(h,{materials:e}),r.extensions&&es(s,h,r),h})}createUniqueName(e){const t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=rb(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=yf(new sn,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?nb(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,g=u.length;d<g;d++){const _=u[d],m=o[d];let p;const A=c[d];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new k0(_,A):new bt(_,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=gf(p.geometry,Yd):m.mode===xn.TRIANGLE_FAN&&(p.geometry=gf(p.geometry,hc));else if(m.mode===xn.LINES)p=new q0(_,A);else if(m.mode===xn.LINE_STRIP)p=new Jc(_,A);else if(m.mode===xn.LINE_LOOP)p=new Y0(_,A);else if(m.mode===xn.POINTS)p=new cp(_,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),oi(p,r),m.extensions&&es(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&es(s,h[0],r),h[0];const f=new Di;r.extensions&&es(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Yt(Zd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new ma(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),oi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Ve;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $c(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const d=s.channels[h],g=s.samplers[d.sampler],_=d.target,m=_.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let A=0,E=f.length;A<E;A++){const y=f[A],U=d[A],D=g[A],P=_[A],z=m[A];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const b=i._createAnimationTracks(y,U,D,P,z);if(b)for(let M=0;M<b.length;M++)p.push(b[M])}return new sx(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ab)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new op:c.length>1?u=new Di:c.length===1?u=c[0]:u=new gt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),oi(u,r),r.extensions&&es(i,u,r),r.matrix!==void 0){const h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Di;i.name&&(r.name=s.createUniqueName(i.name)),oi(r,i),i.extensions&&es(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of s.associations)(f instanceof Vn||f instanceof Et)&&h.set(f,d);return u.traverse(f=>{const d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];bi[r.path]===bi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(bi[r.path]){case bi.weights:c=qs;break;case bi.rotation:c=Ys;break;case bi.translation:case bi.scale:c=Ks;break;default:switch(i.itemSize){case 1:c=qs;break;case 2:case 3:default:c=Ks;break}break}const u=s.interpolation!==void 0?tb[s.interpolation]:zr,h=this._getArrayFromAccessor(i);for(let f=0,d=l.length;f<d;f++){const g=new c(l[f]+"."+bi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=xc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Ys?eb:Mp;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function cb(n,e,t){const i=e.attributes,s=new jn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const u=xc(Hs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){const _=xc(Hs[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new qn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function yf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=_c[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return $e.workingColorSpace!==Zt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),oi(n,e),cb(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ib(n,e.targets,t):n})}const ko={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class jr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ub=new ma(-1,1,1,-1,0,1);class hb extends sn{constructor(){super(),this.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ut([0,2,0,0,2,0],2))}}const fb=new hb;class Sp{constructor(e){this._mesh=new bt(fb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ub)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Tp extends jr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Qo.clone(e.uniforms),this.material=new nn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mf extends jr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class db extends jr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class pb{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Pe);this._width=i.width,this._height=i.height,t=new Un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Tp(ko),this.copyPass.material.blending=ui,this.clock=new yx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Mf!==void 0&&(o instanceof Mf?i=!0:o instanceof db&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mb extends jr{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const gb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class $s extends jr{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Un(r,o,{type:hi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Un(r,o,{type:hi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Un(r,o,{type:hi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=gb;this.highPassUniforms=Qo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Pe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Qo.clone(ko.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:ko.vertexShader,fragmentShader:ko.fragmentShader,blending:wl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new yn,this._fsQuad=new Sp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Pe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=$s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=$s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new nn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new nn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}$s.BlurDirectionX=new Pe(1,0);$s.BlurDirectionY=new Pe(0,1);const Sf=[{id:"about",name:"À propos",modelName:"mercure.glb",description:"Mon nom est Enzo Martinez, j'ai 21 ans et je suis étudiant en tant que Master expert en développement full stack à Ynov Montpellier. Je vous présente mon porfolio inspiré du jeu Outer Wilds. Mon portfolio est une invitation à explorer mes compétences et mes projets dans un environnement ludique et immersif. J'ai essayé de rendre la chose la plus immersive possible et j'ai toujours des idées pour améliorer le concept.",size:.7,orbitRadius:8,orbitSpeed:.1,rotationSpeed:.005,color:8947848,atmosphereColor:8947848,initialAngle:Math.PI*.5,texture:{diffuse:"#22c55e",roughness:.6,metalness:.1,emissive:4352}},{id:"skills",name:"Compétences",modelName:"mars.glb",description:"Maîtrise des technologies front-end modernes avec une expertise particulière en JavaScript, TypeScript, Vue.js et React. Conception d'interfaces utilisateur intuitives et responsive avec un souci du détail et de l'expérience utilisateur. J'ai aussi participé à des projets académiques et personnels, mettant en avant mes compétences en développement web et backend.",size:.6,orbitRadius:12,orbitSpeed:.05,rotationSpeed:.003,atmosphereColor:11674146,initialAngle:Math.PI*1.1,projects:[{title:"Maîtrise Front-end",description:"JavaScript, TypeScript, Vue.js, React",image:"/placeholder.svg?height=200&width=300",technologies:["JavaScript","TypeScript","Vue.js","React"]},{title:"Design & UI/UX",description:"Interfaces responsive, animations fluides, expérience utilisateur",image:"/placeholder.svg?height=200&width=300",technologies:["CSS/SASS","Tailwind","Animations","Gsap"]},{title:"Compétences backend",description:"Node.js, MongoDB, API REST, gestion de bases de données",image:"/placeholder.svg?height=200&width=300",technologies:["Node.js","GraphQL","MongoDB","API REST"]}]},{id:"projects",name:"Projets",modelName:"jupiter.glb",description:"Découvrez une sélection de mes projets personnels et académiques, reflétant ma passion pour le développement web et ma capacité à créer des applications fonctionnelles et esthétiques.",size:.9,orbitRadius:16,orbitSpeed:.08,rotationSpeed:.004,color:1982639,atmosphereColor:13808780,initialAngle:Math.PI*1.7,projects:[{title:"React Blog",description:"Blog react avec connexion API",image:"images/ReactDrapeau.png",technologies:["reactjs","SASS","axios","json-server"],github:"https://github.com/Inosthful/ReactDrapeau",demo:"https://reactdb.netlify.app/"},{title:"Application React 3d ",description:"Application 3D avec react-three-fiber et visulisation de données",image:"images/ReactThree.png",technologies:["JSX","React","Threejs"],github:"https://github.com/Inosthful/React3D",demo:"https://github.com/Inosthful/React3D"}]},{id:"contact",name:"Contact",modelName:"earth.glb",description:"Si vous souhaitez me contacter, n'hésitez pas à m'envoyer un message via mon mail : 'enzo.martinez34@ynov.com'. Je suis toujours ouvert à de nouvelles opportunités et collaborations.",size:.8,orbitRadius:14,orbitSpeed:.02,rotationSpeed:.002,color:2776234,atmosphereColor:2776234,initialAngle:Math.PI*.8},{id:"experience",name:"Expérience",modelName:"neptune.glb",description:"Mon parcours professionnel et académique, incluant mes stages, projets d'études et contributions qui ont façonné mon expertise en développement web.",size:.8,orbitRadius:20,orbitSpeed:.09,rotationSpeed:.002,color:14427686,atmosphereColor:3029639,initialAngle:Math.PI*.2}],_b={class:"list-none"},xb=["onClick"],vb={key:0,class:"fixed bottom-0 overflow-y-auto left-0 w-full max-h-[60vh] bg-space-dark/80 backdrop-blur-lg p-8 pb-10 rounded-t-[30px] z-20"},yb={class:"text-4xl mb-5 text-space-accent font-space"},Mb={class:"text-lg leading-relaxed mb-5 text-space-light"},Sb={key:0,class:"mt-8"},Tb={key:0,class:"text-3xl mb-5 text-space-secondary font-space"},bb={key:1,class:"text-3xl mb-5 text-space-secondary font-space"},Eb={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"},Ab=["src"],wb={class:"p-5"},Rb={class:"text-xl mb-2.5 text-space-primary font-space"},Cb={class:"text-space-light mb-4"},Pb={class:"flex flex-wrap gap-2 my-4"},Lb={class:"flex gap-4 mt-4"},Db=["href"],Ib=["href"],Ub={key:0,class:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-[100] text-space-light"},Nb={key:1,class:"fixed top-5 left-5 bg-black/90 text-green-400 p-4 rounded-lg text-sm font-mono z-[100] border border-green-500/30 backdrop-blur-sm"},Fb={class:"grid grid-cols-2 gap-4"},Ob={class:"text-lg"},Bb={class:"text-lg"},zb={class:"text-lg"},Hb={class:"text-lg"},kb={class:"text-xs"},Vb={class:"mt-3 border-t border-gray-700 pt-2"},Gb={class:"flex gap-2"},Wb={__name:"App",setup(n){const e=Vi(!1),t=Vi(null),i=Vi(null),s=Vi(!0),r=Vi(!1),o=Vi("medium"),a=w=>"/portfolio-outer-wilds-clean/".replace(/\/$/,"")+"/"+w.replace(/^\//,""),l=Rr({fps:0,frameTime:0,triangles:0,drawCalls:0,memory:0}),c=Rr({x:0,y:0}),u=Vi(Sf);let h,f,d,g,_,m,p,A=[],E=[],y,U,D,P=!1,z,b=null,M=[],N=[],H=0,X=0;const se=Dd(()=>u.value.find(w=>w.id===t.value)||{}),ae=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,Y={medium:{segments:24,particleCount:1e3,bloomStrength:.6,bloomRadius:.4,bloomThreshold:.75,shadowMapSize:1024,toneMappingExposure:1.5,enablePostProcessing:!0},high:{segments:32,particleCount:2e3,bloomStrength:.7,bloomRadius:.4,bloomThreshold:.7,shadowMapSize:2048,toneMappingExposure:1.6,enablePostProcessing:!0}},ne=w=>{w!==o.value&&(o.value=w,d&&(d.toneMappingExposure=Y[w].toneMappingExposure,d.shadowMap.enabled=!0),m&&(m.strength=Y[w].bloomStrength,m.radius=Y[w].bloomRadius,m.threshold=Y[w].bloomThreshold),_&&!Y[w].enablePostProcessing&&console.log("Post-processing désactivé pour améliorer les performances"))},q=()=>{l.fps<70?ne("medium"):ne("high")},me=()=>{const w=document.createElement("canvas");w.width=1024,w.height=1024;const R=w.getContext("2d");R.fillStyle="#000000",R.fillRect(0,0,1024,1024);const O=R.createRadialGradient(512,512,0,512,512,450);O.addColorStop(0,"#ffffff"),O.addColorStop(.1,"#fffde7"),O.addColorStop(.2,"#fff59d"),O.addColorStop(.4,"#ffeb3b"),O.addColorStop(.6,"#ffa000"),O.addColorStop(.8,"#ff6f00"),O.addColorStop(.9,"#e65100"),O.addColorStop(1,"#bf360c"),R.fillStyle=O,R.fillRect(0,0,1024,1024);for(let G=0;G<2e3;G++){const j=Math.random()*1024,re=Math.random()*1024;if(Math.sqrt(Math.pow(j-512,2)+Math.pow(re-512,2))<450){const le=Math.random()*8+2,_e=Math.random()*.3+.7;R.fillStyle=`rgba(255, 255, 255, ${_e*.3})`,R.beginPath(),R.arc(j,re,le,0,Math.PI*2),R.fill()}}for(let G=0;G<12;G++){const j=Math.random()*Math.PI*2,re=Math.random()*300+50,Z=512+Math.cos(j)*re,le=512+Math.sin(j)*re,_e=Math.random()*30+10,Ae=R.createRadialGradient(Z,le,0,Z,le,_e);Ae.addColorStop(0,"rgba(50, 50, 50, 0.8)"),Ae.addColorStop(.5,"rgba(80, 50, 20, 0.6)"),Ae.addColorStop(1,"rgba(255, 140, 0, 0)"),R.fillStyle=Ae,R.beginPath(),R.arc(Z,le,_e,0,Math.PI*2),R.fill()}for(let G=0;G<20;G++){const j=Math.random()*Math.PI*2,re=512+Math.cos(j)*450,Z=512+Math.sin(j)*450,le=Math.random()*100+50,_e=Math.random()*20+10,Ae=512+Math.cos(j)*(450+le),de=512+Math.sin(j)*(450+le),Te=512+Math.cos(j+Math.random()*.4-.2)*(450+le*.7),ze=512+Math.sin(j+Math.random()*.4-.2)*(450+le*.7),Ze=R.createLinearGradient(re,Z,Ae,de);Ze.addColorStop(0,"rgba(255, 255, 0, 0.8)"),Ze.addColorStop(.5,"rgba(255, 165, 0, 0.5)"),Ze.addColorStop(1,"rgba(255, 69, 0, 0)"),R.strokeStyle=Ze,R.lineWidth=_e,R.lineCap="round",R.beginPath(),R.moveTo(re,Z),R.quadraticCurveTo(Te,ze,Ae,de),R.stroke()}return new K0(w)},ve=async w=>{if(!w.modelUrl){console.log(`${w.name}: Pas de modèle URL, création d'une sphère par défaut`);const O=we(w);return O.userData={planetId:w.id,planetData:w},O}console.log("fooooooot"+w.modelName);const R=Sf.modelUrl||"/portfolio-outer-wilds-clean/"+w.modelName;return console.log(`🚀 Début du chargement du modèle pour ${w.name}`),console.log(`📁 URL du modèle: ${w.modelUrl}`),new Promise(O=>{z.load(R,G=>{console.log(`✅ Modèle chargé avec succès pour ${w.name}:`,G);const j=G.scene;if(j.userData={planetId:w.id,planetData:w},j.children.length===0){console.warn(`⚠️ Le modèle ${w.name} semble vide, utilisation de la sphère par défaut`);const Te=we(w);Te.userData={planetId:w.id,planetData:w},O(Te);return}const re=new jn().setFromObject(j),Z=re.getSize(new F),le=re.getCenter(new F);console.log("📏 Taille originale du modèle:",Z),console.log("🎯 Centre du modèle:",le);const _e=Math.max(Z.x,Z.y,Z.z),Ae=w.size*2,de=Ae/_e;console.log(`🔍 Taille max: ${_e}, Taille cible: ${Ae}, Échelle: ${de}`),j.scale.setScalar(de),console.log("📐 Échelle appliquée:",j.scale),j.position.sub(le.multiplyScalar(de)),console.log("📍 Position finale:",j.position),j.traverse(Te=>{Te.isMesh&&(console.log(`🔧 Configuration du mesh: ${Te.name||"sans nom"}`),Te.castShadow=!0,Te.receiveShadow=!0,Te.userData={planetId:w.id,planetData:w},Te.material&&(Te.material.transparent=!1,Te.material.opacity=1,Te.material.visible=!0,Te.material.emissive&&(Te.material.emissive.setHex(1118481),Te.material.emissiveIntensity=.1),Te.material.roughness=.7,Te.material.metalness=.1,Te.material.needsUpdate=!0,console.log("✨ Matériau configuré:",Te.material)))}),console.log(`🎉 Modèle ${w.name} prêt à être ajouté à la scène`),console.log("🔍 UserData du modèle:",j.userData),O(j)},G=>{const j=Math.floor(G.loaded/G.total*100);console.log(`📊 Chargement ${w.name}: ${j}% (${G.loaded}/${G.total} bytes)`)},G=>{console.error(`❌ ERREUR lors du chargement du modèle ${w.name}:`,G),console.error(`🔗 URL tentée: ${w.modelUrl}`),console.error(`📝 Message d'erreur: ${G.message}`),console.error(`🔍 Type d'erreur: ${G.type||"inconnu"}`),console.log(`🔄 Utilisation de la sphère par défaut pour ${w.name}`);const j=we(w);j.userData={planetId:w.id,planetData:w},O(j)})})},we=w=>{console.log(`🟦 Création d'une planète par défaut pour ${w.name}`);const R=new Ps(w.size,64,64),O=new pa({color:w.color,roughness:.7,metalness:.1,emissive:w.texture.emissive||0,emissiveIntensity:.2}),G=new bt(R,O);return G.castShadow=!0,G.receiveShadow=!0,console.log(`✅ Cube créé pour ${w.name}:`,G),G},Fe=async()=>{try{P=ae(),P&&ne("medium"),h=new B0,f=new Yt(75,window.innerWidth/window.innerHeight,.1,1e3),f.position.set(0,5,25),d=new pT({antialias:!P,alpha:!0,powerPreference:"high-performance"}),d.setSize(window.innerWidth,window.innerHeight),d.setPixelRatio(Math.min(window.devicePixelRatio,P?1.5:2)),d.shadowMap.enabled=!0,d.shadowMap.type=Fd,d.toneMapping=Bd,d.toneMappingExposure=Y[o.value].toneMappingExposure,i.value.appendChild(d.domElement),g=new gT(f,d.domElement),g.enableDamping=!0,g.dampingFactor=.05,g.minDistance=5,g.maxDistance=50,g.enablePan=!1,z=new CT,Y[o.value].enablePostProcessing&&Qe(),U=new Px,D=new Pe,await oe(),pe(),Ee(),Le(),Ke(),s.value=!1,setTimeout(()=>{P||q()},5e3)}catch(w){console.error("Erreur lors de l'initialisation de Three.js:",w),s.value=!1}},Qe=()=>{_=new pb(d);const w=new mb(h,f);_.addPass(w),m=new $s(new Pe(window.innerWidth,window.innerHeight),Y[o.value].bloomStrength,Y[o.value].bloomRadius,Y[o.value].bloomThreshold),_.addPass(m);const R={uniforms:{tDiffuse:{value:null},time:{value:0}},vertexShader:`
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

        // Luminosité ajustée
        color.rgb *= 1.05;

        // Ajouter un léger effet de scintillement
        float flicker = sin(time * 2.0 + vUv.x * 10.0) * 0.015;
        color.rgb += flicker;

        gl_FragColor = color;
      }
    `},O=new Tp(R);_.addPass(O)},oe=async()=>{const w={id:"sun",name:"Soleil",modelName:"sun.glb",size:2};w.modelUrl="/portfolio-outer-wilds-clean/"+w.modelName;try{p=await ve(w),p.traverse(j=>{j.isMesh&&j.material&&(j.material.emissive=new Oe(16771899),j.material.emissiveIntensity=1,j.material.needsUpdate=!0,j.castShadow=!1,j.receiveShadow=!1)}),p.castShadow=!1,p.receiveShadow=!1,h.add(p)}catch(j){console.error("Erreur lors du chargement du soleil GLB, utilisation de la texture par défaut:",j);const re=new Ps(2,64,64),Z=me(),le=new yn({map:Z,emissive:16771899,emissiveIntensity:1});p=new bt(re,le),p.castShadow=!1,p.receiveShadow=!1,h.add(p)}const R=new Ps(2.4,64,64),O=new yn({color:16729344,transparent:!0,opacity:.1,side:Tt}),G=new bt(R,O);h.add(G);for(let j=0;j<u.value.length;j++){const re=u.value[j],Z=new Di;re.modelUrl="/portfolio-outer-wilds-clean/"+re.modelName;const le=await ve(re);le.userData={planetId:re.id,planetData:re};const _e=re.initialAngle;le.position.set(Math.cos(_e)*re.orbitRadius,0,Math.sin(_e)*re.orbitRadius),Z.add(le);const Ae=new Ps(re.size*1.15,24,24),de=new yn({color:re.atmosphereColor,transparent:!0,opacity:.2,side:Tt}),Te=new bt(Ae,de);Te.position.copy(le.position),Z.add(Te);const ze=new eu(re.orbitRadius-.01,re.orbitRadius+.01,128),Ze=new yn({color:16777215,transparent:!0,opacity:.12,side:wn}),B=new bt(ze,Ze);B.rotation.x=Math.PI/2,Z.add(B),h.add(Z),A.push(le),E.push(Z)}},pe=()=>{const w=new _x(16777215,.6);h.add(w);const R=new Rs(16777215,3);R.position.set(10,20,10),R.castShadow=!0,R.shadow.mapSize.width=Y[o.value].shadowMapSize,R.shadow.mapSize.height=Y[o.value].shadowMapSize,R.shadow.camera.near=.5,R.shadow.camera.far=100,R.shadow.camera.left=-50,R.shadow.camera.right=50,R.shadow.camera.top=50,R.shadow.camera.bottom=-50,h.add(R);const O=new zo(16775388,1,50);O.position.set(0,0,0),O.castShadow=!0,O.shadow.mapSize.width=1024,O.shadow.mapSize.height=1024,h.add(O);const G=new Rs(16770229,2);G.position.set(-20,10,-20),h.add(G);const j=new Rs(15135743,1.8);j.position.set(20,-10,20),h.add(j);const re=new Rs(16773350,1.5);re.position.set(0,-15,0),h.add(re);const Z=new fx(16777215,4473924,1.5);h.add(Z);const le=new zo(16769213,4,120);le.position.set(0,-30,-30),h.add(le);const _e=new zo(14743295,3.5,120);_e.position.set(30,0,30),h.add(_e);const Ae=new Rs(16777215,1);Ae.position.set(0,0,-20),h.add(Ae)},Ee=()=>{const w=Y[o.value].particleCount,R=new sn,O=new Float32Array(w*3);for(let re=0;re<w*3;re+=3)O[re]=(Math.random()-.5)*100,O[re+1]=(Math.random()-.5)*100,O[re+2]=(Math.random()-.5)*100;R.setAttribute("position",new Vt(O,3));const G=new Qc({color:16777215,size:.12,transparent:!0,opacity:.7}),j=new cp(R,G);h.add(j)},ge=()=>{if(!r.value)return;X++;const w=performance.now();w-H>=1e3&&(l.fps=Math.round(X*1e3/(w-H)),l.frameTime=Math.round((w-H)/X*100)/100,l.triangles=d.info.render.triangles,l.drawCalls=d.info.render.calls,performance.memory?l.memory=Math.round(performance.memory.usedJSHeapSize/1024/1024):l.memory=Math.round(d.info.memory.geometries+d.info.memory.textures),X=0,H=w)},Le=()=>{y=requestAnimationFrame(Le),g.update(),p&&(p.rotation.y+=.005);const w=Date.now()*.001;A.forEach((R,O)=>{const G=u.value[O];R.rotation.y+=G.rotationSpeed,O%2===0?R.rotation.x=Math.sin(w*.1)*.05:R.rotation.z=Math.sin(w*.15)*.03;const j=G.initialAngle+w*G.orbitSpeed,re=Math.sin(w*.2+O)*.5;R.position.set(Math.cos(j)*G.orbitRadius,re,Math.sin(j)*G.orbitRadius);const Z=E[O].children.find(le=>le.material&&le.material.transparent&&le.material.side===Tt);Z&&(Z.position.copy(R.position),Z.rotation.y+=G.rotationSpeed*.5)}),ge(),_&&Y[o.value].enablePostProcessing?(_.passes[2]&&_.passes[2].uniforms&&(_.passes[2].uniforms.time.value=w),_.render()):d.render(h,f),A.forEach((R,O)=>{M[O]&&te(R,M[O])})},Ke=()=>{window.addEventListener("resize",De),d.domElement.addEventListener("click",pt),window.addEventListener("mousemove",C),g.addEventListener("start",()=>{}),g.addEventListener("end",()=>{})},De=()=>{f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight),_&&_.setSize(window.innerWidth,window.innerHeight),P=ae()},pt=w=>{D.x=w.clientX/window.innerWidth*2-1,D.y=-(w.clientY/window.innerHeight)*2+1,U.setFromCamera(D,f);const R=U.intersectObjects(A);if(R.length>0){const G=R[0].object.userData.planetId;G&&v(G)}},C=w=>{if(c.x=(w.clientX/window.innerWidth-.5)*2,c.y=(w.clientY/window.innerHeight-.5)*2,P)return;D.x=w.clientX/window.innerWidth*2-1,D.y=-(w.clientY/window.innerHeight)*2+1,U.setFromCamera(D,f);const R=U.intersectObjects(A);if(R.length>0){const O=R[0].object;document.body.style.cursor="pointer",b!==O&&(b&&S(b),L(O),b=O)}else document.body.style.cursor="auto",b&&(S(b),b=null)},L=w=>{const R=w.userData.planetId,O=u.value.findIndex(re=>re.id===R),G=u.value[O];N[O]||(N[O]=w.scale.clone());const j=N[O].clone().multiplyScalar(1.15);if(ce(w,j,300),E[O]&&E[O].children){const re=E[O].children.find(Z=>Z.material&&Z.material.transparent&&Z.material.side===Tt);re&&(Q(re.material,.4,300),ce(re,new F(1.1,1.1,1.1),300))}ee(w,G.name)},S=w=>{const R=w.userData.planetId,O=u.value.findIndex(G=>G.id===R);if(N[O]&&ce(w,N[O],300),E[O]&&E[O].children){const G=E[O].children.find(j=>j.material&&j.material.transparent&&j.material.side===Tt);G&&(Q(G.material,.2,300),ce(G,new F(1,1,1),300))}ue(O)},ce=(w,R,O)=>{const G=w.scale.clone(),j=Date.now(),re=()=>{const Z=Date.now()-j,le=Math.min(Z/O,1),_e=1-Math.pow(1-le,3);w.scale.lerpVectors(G,R,_e),le<1&&requestAnimationFrame(re)};re()},Q=(w,R,O)=>{const G=w.opacity,j=Date.now(),re=()=>{const Z=Date.now()-j,le=Math.min(Z/O,1),_e=1-Math.pow(1-le,3);w.opacity=G+(R-G)*_e,le<1&&requestAnimationFrame(re)};re()},ee=(w,R)=>{const O=w.userData.planetId,G=u.value.findIndex(re=>re.id===O);ue(G);const j=document.createElement("div");j.className="planet-label",j.textContent=R,j.style.position="absolute",j.style.color="white",j.style.padding="5px 10px",j.style.borderRadius="4px",j.style.backgroundColor="rgba(0, 0, 0, 0.6)",j.style.backdropFilter="blur(4px)",j.style.fontFamily="'Space Grotesk', sans-serif",j.style.fontSize="14px",j.style.fontWeight="bold",j.style.textShadow="0 0 5px rgba(255, 255, 255, 0.5)",j.style.transform="translate(-50%, -50%)",j.style.pointerEvents="none",j.style.zIndex="50",j.style.opacity="0",j.style.transition="opacity 0.3s ease",document.body.appendChild(j),M[G]=j,setTimeout(()=>{j.style.opacity="1"},10),te(w,j)},te=(w,R)=>{const O=new F;O.copy(w.position);let G=2;w.geometry&&w.geometry.parameters&&w.geometry.parameters.radius&&(G=w.geometry.parameters.radius),O.y+=G*2,O.project(f);const j=(O.x*.5+.5)*window.innerWidth,re=(-(O.y*.5)+.5)*window.innerHeight;R.style.left=`${j}px`,R.style.top=`${re}px`},ue=w=>{M[w]&&(document.body.removeChild(M[w]),M[w]=null)},J=()=>{e.value=!e.value},v=w=>{if(!w)return;t.value=w,e.value=!1;const R=u.value.findIndex(O=>O.id===w);if(R!==-1){const O=A[R],G=new F(O.position.x*1.5,O.position.y+3,O.position.z*1.5);x(G,O.position)}},x=(w,R)=>{const O=f.position.clone(),G=g.target.clone();let j=0;const re=2e3,Z=Date.now(),le=()=>{const _e=Date.now()-Z;j=Math.min(_e/re,1);const Ae=j<.5?2*j*j:1-Math.pow(-2*j+2,3)/2;f.position.lerpVectors(O,w,Ae),g.target.lerpVectors(G,R,Ae),g.update(),j<1&&requestAnimationFrame(le)};le()},I=()=>{t.value=null;const w=new F(0,5,25),R=new F(0,0,0);x(w,R)},W=w=>{w.target.closest('button[class*="fixed top-5 right-5"]')||w.target.closest("nav")||(e.value=!1)};return Dc(async()=>{await $f(),await Fe(),document.addEventListener("click",W),document.body.style.overflow="hidden"}),Ic(()=>{y&&cancelAnimationFrame(y),d&&d.dispose(),h&&h.traverse(w=>{w.geometry&&w.geometry.dispose(),w.material&&(Array.isArray(w.material)?w.material.forEach(R=>R.dispose()):w.material.dispose())}),M.forEach(w=>{w&&w.parentNode&&w.parentNode.removeChild(w)}),window.removeEventListener("resize",De),document.removeEventListener("click",W),document.body.style.overflow=""}),Co(o,w=>{console.log(`Niveau de qualité changé à: ${w}`),d&&(d.toneMappingExposure=Y[w].toneMappingExposure),m&&(m.strength=Y[w].bloomStrength,m.radius=Y[w].bloomRadius,m.threshold=Y[w].bloomThreshold)}),(w,R)=>(Ct(),Lt("div",{class:_n(["relative h-screen w-screen overflow-hidden",{"nav-open":e.value}]),style:{perspective:"1000px"}},[R[13]||(R[13]=Ie("div",{class:"fixed inset-0 -z-10 overflow-hidden bg-space-bg"},[Ie("div",{class:"absolute inset-0 stars"}),Ie("div",{class:"absolute inset-0 stars2"}),Ie("div",{class:"absolute inset-0 stars3"})],-1)),Ie("div",{class:"fixed inset-0 z-10",ref_key:"solarSystemContainer",ref:i},null,512),Ie("button",{onClick:J,class:"fixed top-5 right-5 w-10 h-10 bg-transparent border-none cursor-pointer z-[100] flex flex-col justify-center items-center"},[Ie("span",{class:_n(["block w-[30px] h-[3px] my-[3px] bg-space-light transition-all duration-300",e.value?"transform translate-y-[9px] rotate-45":""])},null,2),Ie("span",{class:_n(["block w-[30px] h-[3px] my-[3px] bg-space-light transition-all duration-300",e.value?"opacity-0":""])},null,2),Ie("span",{class:_n(["block w-[30px] h-[3px] my-[3px] bg-space-light transition-all duration-300",e.value?"transform -translate-y-[9px] -rotate-45":""])},null,2)]),Ie("nav",{class:_n(["fixed top-0 h-screen w-[300px] bg-space-dark/90 backdrop-blur-lg z-[90] transition-all duration-300 pt-20 px-5 pb-5",e.value?"right-0":"-right-[300px]"])},[Ie("ul",_b,[(Ct(!0),Lt(un,null,Aa(u.value,O=>(Ct(),Lt("li",{key:O.id,class:"mb-5"},[Ie("a",{onClick:n_(G=>v(O.id),["prevent"]),class:_n(["text-space-light hover:cursor-pointer no-underline text-lg transition-colors duration-300 block p-2.5 rounded-md hover:text-space-accent hover:bg-white/10",{"text-space-accent bg-white/10":t.value===O.id}])},ln(O.name),11,xb)]))),128))])],2),tn(Ig,{name:"fade"},{default:td(()=>[t.value?(Ct(),Lt("main",vb,[Ie("button",{onClick:I,class:"absolute top-5 right-5 w-10 h-10 bg-white/10 border-none rounded-full text-space-light text-2xl leading-none cursor-pointer transition-all duration-300 z-[85] flex items-center justify-center hover:bg-white/20 hover:scale-110"}," × "),(Ct(),Lt("section",{key:t.value,class:"max-w-6xl mx-auto"},[Ie("h1",yb,ln(se.value.name),1),Ie("div",null,[Ie("p",Mb,ln(se.value.description),1),se.value.projects&&se.value.projects.length?(Ct(),Lt("div",Sb,[se.value.name==w.Jupiter?(Ct(),Lt("h2",Tb," Projets associés ")):(Ct(),Lt("h2",bb," Compétences associées ")),Ie("div",Eb,[(Ct(!0),Lt(un,null,Aa(se.value.projects,(O,G)=>(Ct(),Lt("div",{key:G,class:"bg-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30"},[Ie("img",{class:"max-w-[100%] md:h-[220px] bg-cover bg-center",src:a(O.image)},null,8,Ab),Ie("div",wb,[Ie("h3",Rb,ln(O.title),1),Ie("p",Cb,ln(O.description),1),Ie("div",Pb,[(Ct(!0),Lt(un,null,Aa(O.technologies,j=>(Ct(),Lt("span",{key:j,class:"bg-white/10 px-2.5 py-1 rounded-full text-xs text-space-light"},ln(j),1))),128))]),Ie("div",Lb,[O.demo?(Ct(),Lt("a",{key:0,href:O.demo,target:"_blank",class:"inline-block px-4 py-2 bg-space-primary text-white no-underline rounded text-sm transition-colors duration-300 hover:bg-space-secondary"}," Démo ",8,Db)):Xi("",!0),O.github?(Ct(),Lt("a",{key:1,href:O.github,target:"_blank",class:"inline-block px-4 py-2 bg-space-primary text-white no-underline rounded text-sm transition-colors duration-300 hover:bg-space-secondary"}," GitHub ",8,Ib)):Xi("",!0)])])]))),128))])])):Xi("",!0)])]))])):Xi("",!0)]),_:1}),s.value?(Ct(),Lt("div",Ub,R[4]||(R[4]=[Ie("div",{class:"w-12 h-12 border-3 border-white/30 border-t-space-accent rounded-full animate-spin mx-auto mb-5"},null,-1),Ie("p",{class:"font-space"},"Initialisation du système solaire...",-1)]))):Xi("",!0),r.value?(Ct(),Lt("div",Nb,[R[12]||(R[12]=Ie("div",{class:"text-green-300 font-bold mb-2"},"⚡ Performance Monitor",-1)),Ie("div",Fb,[Ie("div",null,[R[5]||(R[5]=Ie("div",{class:"text-gray-400"},"FPS:",-1)),Ie("div",{class:_n(["text-xl font-bold",l.fps>=60?"text-green-400":l.fps>=30?"text-yellow-400":"text-red-400"])},ln(l.fps),3)]),Ie("div",null,[R[6]||(R[6]=Ie("div",{class:"text-gray-400"},"Frame Time:",-1)),Ie("div",Ob,ln(l.frameTime)+"ms",1)]),Ie("div",null,[R[7]||(R[7]=Ie("div",{class:"text-gray-400"},"Triangles:",-1)),Ie("div",Bb,ln(l.triangles.toLocaleString()),1)]),Ie("div",null,[R[8]||(R[8]=Ie("div",{class:"text-gray-400"},"Draw Calls:",-1)),Ie("div",zb,ln(l.drawCalls),1)]),Ie("div",null,[R[9]||(R[9]=Ie("div",{class:"text-gray-400"},"Memory:",-1)),Ie("div",Hb,ln(l.memory)+"MB",1)]),Ie("div",null,[R[10]||(R[10]=Ie("div",{class:"text-gray-400"},"Device:",-1)),Ie("div",kb,ln(qf(P)?"Mobile":"Desktop"),1)])]),Ie("div",Vb,[R[11]||(R[11]=Ie("div",{class:"text-gray-400 mb-1"},"Qualité:",-1)),Ie("div",Gb,[Ie("button",{onClick:R[0]||(R[0]=O=>ne("medium")),class:_n(["px-2 py-1 text-xs rounded",o.value==="medium"?"bg-green-800 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"])}," Moyenne ",2),Ie("button",{onClick:R[1]||(R[1]=O=>ne("high")),class:_n(["px-2 py-1 text-xs rounded",o.value==="high"?"bg-green-800 text-white":"bg-gray-800 text-gray-400 hover:bg-gray-700"])}," Haute ",2)])]),Ie("button",{onClick:R[2]||(R[2]=O=>r.value=!1),class:"mt-2 text-xs text-gray-500 hover:text-gray-300"}," [Fermer] ")])):Xi("",!0),r.value?Xi("",!0):(Ct(),Lt("button",{key:2,onClick:R[3]||(R[3]=O=>r.value=!0),class:"fixed bottom-5 left-5 bg-green-500/20 hover:bg-green-500/30 text-green-400 p-2 rounded-lg text-xs font-mono z-[100] border border-green-500/30 backdrop-blur-sm transition-all duration-300"}," 📊 FPS "))],2))}};r_(Wb).mount("#app");
