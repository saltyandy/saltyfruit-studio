var n1=Object.defineProperty;var i1=(Bi,Wn,ar)=>Wn in Bi?n1(Bi,Wn,{enumerable:!0,configurable:!0,writable:!0,value:ar}):Bi[Wn]=ar;var lt=(Bi,Wn,ar)=>i1(Bi,typeof Wn!="symbol"?Wn+"":Wn,ar);(function(){"use strict";var Bi={exports:{}},Wn={},ar={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od;function i0(){if(Od)return Tt;Od=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function S(U,Z,Fe){this.props=U,this.context=Z,this.refs=R,this.updater=Fe||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=S.prototype;function L(U,Z,Fe){this.props=U,this.context=Z,this.refs=R,this.updater=Fe||M}var F=L.prototype=new v;F.constructor=L,w(F,S.prototype),F.isPureReactComponent=!0;var b=Array.isArray,I=Object.prototype.hasOwnProperty,C={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(U,Z,Fe){var $e,Ge={},se=null,ge=null;if(Z!=null)for($e in Z.ref!==void 0&&(ge=Z.ref),Z.key!==void 0&&(se=""+Z.key),Z)I.call(Z,$e)&&!O.hasOwnProperty($e)&&(Ge[$e]=Z[$e]);var he=arguments.length-2;if(he===1)Ge.children=Fe;else if(1<he){for(var Ne=Array(he),je=0;je<he;je++)Ne[je]=arguments[je+2];Ge.children=Ne}if(U&&U.defaultProps)for($e in he=U.defaultProps,he)Ge[$e]===void 0&&(Ge[$e]=he[$e]);return{$$typeof:s,type:U,key:se,ref:ge,props:Ge,_owner:C.current}}function D(U,Z){return{$$typeof:s,type:U.type,key:Z,ref:U.ref,props:U.props,_owner:U._owner}}function H(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function G(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Fe){return Z[Fe]})}var K=/\/+/g;function ce(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):Z.toString(36)}function fe(U,Z,Fe,$e,Ge){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var ge=!1;if(U===null)ge=!0;else switch(se){case"string":case"number":ge=!0;break;case"object":switch(U.$$typeof){case s:case e:ge=!0}}if(ge)return ge=U,Ge=Ge(ge),U=$e===""?"."+ce(ge,0):$e,b(Ge)?(Fe="",U!=null&&(Fe=U.replace(K,"$&/")+"/"),fe(Ge,Z,Fe,"",function(je){return je})):Ge!=null&&(H(Ge)&&(Ge=D(Ge,Fe+(!Ge.key||ge&&ge.key===Ge.key?"":(""+Ge.key).replace(K,"$&/")+"/")+U)),Z.push(Ge)),1;if(ge=0,$e=$e===""?".":$e+":",b(U))for(var he=0;he<U.length;he++){se=U[he];var Ne=$e+ce(se,he);ge+=fe(se,Z,Fe,Ne,Ge)}else if(Ne=g(U),typeof Ne=="function")for(U=Ne.call(U),he=0;!(se=U.next()).done;)se=se.value,Ne=$e+ce(se,he++),ge+=fe(se,Z,Fe,Ne,Ge);else if(se==="object")throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ge}function j(U,Z,Fe){if(U==null)return U;var $e=[],Ge=0;return fe(U,$e,"","",function(se){return Z.call(Fe,se,Ge++)}),$e}function $(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(Fe){(U._status===0||U._status===-1)&&(U._status=1,U._result=Fe)},function(Fe){(U._status===0||U._status===-1)&&(U._status=2,U._result=Fe)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var W={current:null},z={transition:null},re={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:z,ReactCurrentOwner:C};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:j,forEach:function(U,Z,Fe){j(U,function(){Z.apply(this,arguments)},Fe)},count:function(U){var Z=0;return j(U,function(){Z++}),Z},toArray:function(U){return j(U,function(Z){return Z})||[]},only:function(U){if(!H(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Tt.Component=S,Tt.Fragment=n,Tt.Profiler=o,Tt.PureComponent=L,Tt.StrictMode=r,Tt.Suspense=h,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Tt.act=ae,Tt.cloneElement=function(U,Z,Fe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var $e=w({},U.props),Ge=U.key,se=U.ref,ge=U._owner;if(Z!=null){if(Z.ref!==void 0&&(se=Z.ref,ge=C.current),Z.key!==void 0&&(Ge=""+Z.key),U.type&&U.type.defaultProps)var he=U.type.defaultProps;for(Ne in Z)I.call(Z,Ne)&&!O.hasOwnProperty(Ne)&&($e[Ne]=Z[Ne]===void 0&&he!==void 0?he[Ne]:Z[Ne])}var Ne=arguments.length-2;if(Ne===1)$e.children=Fe;else if(1<Ne){he=Array(Ne);for(var je=0;je<Ne;je++)he[je]=arguments[je+2];$e.children=he}return{$$typeof:s,type:U.type,key:Ge,ref:se,props:$e,_owner:ge}},Tt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Tt.createElement=E,Tt.createFactory=function(U){var Z=E.bind(null,U);return Z.type=U,Z},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(U){return{$$typeof:d,render:U}},Tt.isValidElement=H,Tt.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:$}},Tt.memo=function(U,Z){return{$$typeof:m,type:U,compare:Z===void 0?null:Z}},Tt.startTransition=function(U){var Z=z.transition;z.transition={};try{U()}finally{z.transition=Z}},Tt.unstable_act=ae,Tt.useCallback=function(U,Z){return W.current.useCallback(U,Z)},Tt.useContext=function(U){return W.current.useContext(U)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(U){return W.current.useDeferredValue(U)},Tt.useEffect=function(U,Z){return W.current.useEffect(U,Z)},Tt.useId=function(){return W.current.useId()},Tt.useImperativeHandle=function(U,Z,Fe){return W.current.useImperativeHandle(U,Z,Fe)},Tt.useInsertionEffect=function(U,Z){return W.current.useInsertionEffect(U,Z)},Tt.useLayoutEffect=function(U,Z){return W.current.useLayoutEffect(U,Z)},Tt.useMemo=function(U,Z){return W.current.useMemo(U,Z)},Tt.useReducer=function(U,Z,Fe){return W.current.useReducer(U,Z,Fe)},Tt.useRef=function(U){return W.current.useRef(U)},Tt.useState=function(U){return W.current.useState(U)},Tt.useSyncExternalStore=function(U,Z,Fe){return W.current.useSyncExternalStore(U,Z,Fe)},Tt.useTransition=function(){return W.current.useTransition()},Tt.version="18.3.1",Tt}var kd;function uu(){return kd||(kd=1,ar.exports=i0()),ar.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function r0(){if(Bd)return Wn;Bd=1;var s=uu(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var _,x={},g=null,M=null;m!==void 0&&(g=""+m),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(M=h.ref);for(_ in h)r.call(h,_)&&!l.hasOwnProperty(_)&&(x[_]=h[_]);if(d&&d.defaultProps)for(_ in h=d.defaultProps,h)x[_]===void 0&&(x[_]=h[_]);return{$$typeof:e,type:d,key:g,ref:M,props:x,_owner:o.current}}return Wn.Fragment=n,Wn.jsx=c,Wn.jsxs=c,Wn}var zd;function s0(){return zd||(zd=1,Bi.exports=r0()),Bi.exports}var _e=s0(),lo={},cu={exports:{}},Un={},fu={exports:{}},du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vd;function a0(){return Vd||(Vd=1,(function(s){function e(z,re){var ae=z.length;z.push(re);e:for(;0<ae;){var U=ae-1>>>1,Z=z[U];if(0<o(Z,re))z[U]=re,z[ae]=Z,ae=U;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var re=z[0],ae=z.pop();if(ae!==re){z[0]=ae;e:for(var U=0,Z=z.length,Fe=Z>>>1;U<Fe;){var $e=2*(U+1)-1,Ge=z[$e],se=$e+1,ge=z[se];if(0>o(Ge,ae))se<Z&&0>o(ge,Ge)?(z[U]=ge,z[se]=ae,U=se):(z[U]=Ge,z[$e]=ae,U=$e);else if(se<Z&&0>o(ge,ae))z[U]=ge,z[se]=ae,U=se;else break e}}return re}function o(z,re){var ae=z.sortIndex-re.sortIndex;return ae!==0?ae:z.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],_=1,x=null,g=3,M=!1,w=!1,R=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(z){for(var re=n(m);re!==null;){if(re.callback===null)r(m);else if(re.startTime<=z)r(m),re.sortIndex=re.expirationTime,e(h,re);else break;re=n(m)}}function b(z){if(R=!1,F(z),!w)if(n(h)!==null)w=!0,$(I);else{var re=n(m);re!==null&&W(b,re.startTime-z)}}function I(z,re){w=!1,R&&(R=!1,v(E),E=-1),M=!0;var ae=g;try{for(F(re),x=n(h);x!==null&&(!(x.expirationTime>re)||z&&!G());){var U=x.callback;if(typeof U=="function"){x.callback=null,g=x.priorityLevel;var Z=U(x.expirationTime<=re);re=s.unstable_now(),typeof Z=="function"?x.callback=Z:x===n(h)&&r(h),F(re)}else r(h);x=n(h)}if(x!==null)var Fe=!0;else{var $e=n(m);$e!==null&&W(b,$e.startTime-re),Fe=!1}return Fe}finally{x=null,g=ae,M=!1}}var C=!1,O=null,E=-1,D=5,H=-1;function G(){return!(s.unstable_now()-H<D)}function K(){if(O!==null){var z=s.unstable_now();H=z;var re=!0;try{re=O(!0,z)}finally{re?ce():(C=!1,O=null)}}else C=!1}var ce;if(typeof L=="function")ce=function(){L(K)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,j=fe.port2;fe.port1.onmessage=K,ce=function(){j.postMessage(null)}}else ce=function(){S(K,0)};function $(z){O=z,C||(C=!0,ce())}function W(z,re){E=S(function(){z(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,$(I))},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(z){switch(g){case 1:case 2:case 3:var re=3;break;default:re=g}var ae=g;g=re;try{return z()}finally{g=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(z,re){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ae=g;g=z;try{return re()}finally{g=ae}},s.unstable_scheduleCallback=function(z,re,ae){var U=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?U+ae:U):ae=U,z){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ae+Z,z={id:_++,callback:re,priorityLevel:z,startTime:ae,expirationTime:Z,sortIndex:-1},ae>U?(z.sortIndex=ae,e(m,z),n(h)===null&&z===n(m)&&(R?(v(E),E=-1):R=!0,W(b,ae-U))):(z.sortIndex=Z,e(h,z),w||M||(w=!0,$(I))),z},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(z){var re=g;return function(){var ae=g;g=re;try{return z.apply(this,arguments)}finally{g=ae}}}})(du)),du}var Hd;function o0(){return Hd||(Hd=1,fu.exports=a0()),fu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gd;function l0(){if(Gd)return Un;Gd=1;var s=uu(),e=o0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},x={};function g(t){return h.call(x,t)?!0:h.call(_,t)?!1:m.test(t)?x[t]=!0:(_[t]=!0,!1)}function M(t,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,u){if(i===null||typeof i>"u"||M(t,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,a,u,f,p,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,L);S[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,L);S[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,L);S[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,i,a,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,u)&&(a=null),u||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?t.setAttributeNS(u,i,a):t.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),C=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),G=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),z=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=z&&t[z]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,U;function Z(t){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Fe=!1;function $e(t,i){if(!t||Fe)return"";Fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var u=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){u=le}t.call(i.prototype)}else{try{throw Error()}catch(le){u=le}t()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var f=le.stack.split(`
`),p=u.stack.split(`
`),T=f.length-1,N=p.length-1;1<=T&&0<=N&&f[T]!==p[N];)N--;for(;1<=T&&0<=N;T--,N--)if(f[T]!==p[N]){if(T!==1||N!==1)do if(T--,N--,0>N||f[T]!==p[N]){var k=`
`+f[T].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=T&&0<=N);break}}}finally{Fe=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?Z(t):""}function Ge(t){switch(t.tag){case 5:return Z(t.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return t=$e(t.type,!1),t;case 11:return t=$e(t.type.render,!1),t;case 1:return t=$e(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case C:return"Portal";case D:return"Profiler";case E:return"StrictMode";case ce:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G:return(t.displayName||"Context")+".Consumer";case H:return(t._context.displayName||"Context")+".Provider";case K:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case j:return i=t.displayName||null,i!==null?i:se(t.type)||"Memo";case $:i=t._payload,t=t._init;try{return se(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=Ne(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){u=""+T,p.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function ke(t){t._valueTracker||(t._valueTracker=je(t))}function St(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return t&&(u=Ne(t)?t.checked?"true":"false":t.value),t=u,t!==a?(i.setValue(t),!0):!1}function at(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pt(t,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function bt(t,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),t._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(t,i){i=i.checked,i!=null&&F(t,"checked",i,!1)}function Te(t,i){_t(t,i);var a=he(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?st(t,i.type,a):i.hasOwnProperty("defaultValue")&&st(t,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Qe(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function st(t,i,a){(i!=="number"||at(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var ot=Array.isArray;function Ye(t,i,a,u){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&u&&(t[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,u&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function xt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function B(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(ot(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:he(a)}}function Vt(t,i){var a=he(i.value),u=he(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),u!=null&&(t.defaultValue=""+u)}function wt(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function P(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?P(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var q,ee=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,u,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=q.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ue(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(t){Ie.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ee[i]=Ee[t]})});function de(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(t)&&Ee[t]?(""+i).trim():i+"px"}function pe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=de(a,i[a],u);a==="float"&&(a="cssFloat"),u?t.setProperty(a,f):t[a]=f}}var be=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ke(t,i){if(i){if(be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function De(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function qe(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nt=null,ut=null,V=null;function Ae(t){if(t=Ya(t)){if(typeof nt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Tl(i),nt(t.stateNode,t.type,i))}}function me(t){ut?V?V.push(t):V=[t]:ut=t}function Pe(){if(ut){var t=ut,i=V;if(V=ut=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function ye(t,i){return t(i)}function ve(){}var Be=!1;function He(t,i,a){if(Be)return t(i,a);Be=!0;try{return ye(t,i,a)}finally{Be=!1,(ut!==null||V!==null)&&(ve(),Pe())}}function pt(t,i){var a=t.stateNode;if(a===null)return null;var u=Tl(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Ut=!1;if(d)try{var En={};Object.defineProperty(En,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Ut=!1}function ri(t,i,a,u,f,p,T,N,k){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(Se){this.onError(Se)}}var Jr=!1,Vs=null,es=!1,ts=null,af={onError:function(t){Jr=!0,Vs=t}};function al(t,i,a,u,f,p,T,N,k){Jr=!1,Vs=null,ri.apply(af,arguments)}function ol(t,i,a,u,f,p,T,N,k){if(al.apply(this,arguments),Jr){if(Jr){var le=Vs;Jr=!1,Vs=null}else throw Error(n(198));es||(es=!0,ts=le)}}function Dn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Hs(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ba(t){if(Dn(t)!==t)throw Error(n(188))}function ll(t){var i=t.alternate;if(!i){if(i=Dn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,u=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return ba(f),t;if(p===u)return ba(f),i;p=p.sibling}throw Error(n(188))}if(a.return!==u.return)a=f,u=p;else{for(var T=!1,N=f.child;N;){if(N===a){T=!0,a=f,u=p;break}if(N===u){T=!0,u=f,a=p;break}N=N.sibling}if(!T){for(N=p.child;N;){if(N===a){T=!0,a=p,u=f;break}if(N===u){T=!0,u=p,a=f;break}N=N.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ns(t){return t=ll(t),t!==null?Ra(t):null}function Ra(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ra(t);if(i!==null)return i;t=t.sibling}return null}var is=e.unstable_scheduleCallback,Ca=e.unstable_cancelCallback,ul=e.unstable_shouldYield,of=e.unstable_requestPaint,Zt=e.unstable_now,lf=e.unstable_getCurrentPriorityLevel,Pa=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,oe=e.unstable_LowPriority,te=e.unstable_IdlePriority,J=null,Le=null;function We(t){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(J,t,void 0,(t.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:gt,Je=Math.log,rt=Math.LN2;function gt(t){return t>>>=0,t===0?32:31-(Je(t)/rt|0)|0}var vt=64,tt=4194304;function Lt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ht(t,i){var a=t.pendingLanes;if(a===0)return 0;var u=0,f=t.suspendedLanes,p=t.pingedLanes,T=a&268435455;if(T!==0){var N=T&~f;N!==0?u=Lt(N):(p&=T,p!==0&&(u=Lt(p)))}else T=a&~f,T!==0?u=Lt(T):p!==0&&(u=Lt(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)a=31-Re(i),f=1<<a,u|=t[a],i&=~f;return u}function Yt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(t,i){for(var a=t.suspendedLanes,u=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var T=31-Re(p),N=1<<T,k=f[T];k===-1?((N&a)===0||(N&u)!==0)&&(f[T]=Yt(N,i)):k<=i&&(t.expiredLanes|=N),p&=~N}}function sn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ze(){var t=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),t}function gn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Et(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Re(i),t[i]=a}function On(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Re(a),p=1<<f;i[f]=0,u[f]=-1,t[f]=-1,a&=~p}}function kn(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var u=31-Re(a),f=1<<u;f&i|t[u]&i&&(t[u]|=i),a&=~f}}var At=0;function ji(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ot,Wt,vi,zt,_i,Ni=!1,rs=[],_r=null,xr=null,Sr=null,La=new Map,Da=new Map,yr=[],TM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,i){switch(t){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":La.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(i.pointerId)}}function Ia(t,i,a,u,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Ya(i),i!==null&&Wt(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function wM(t,i,a,u,f){switch(i){case"focusin":return _r=Ia(_r,t,i,a,u,f),!0;case"dragenter":return xr=Ia(xr,t,i,a,u,f),!0;case"mouseover":return Sr=Ia(Sr,t,i,a,u,f),!0;case"pointerover":var p=f.pointerId;return La.set(p,Ia(La.get(p)||null,t,i,a,u,f)),!0;case"gotpointercapture":return p=f.pointerId,Da.set(p,Ia(Da.get(p)||null,t,i,a,u,f)),!0}return!1}function Vp(t){var i=ss(t.target);if(i!==null){var a=Dn(i);if(a!==null){if(i=a.tag,i===13){if(i=Hs(a),i!==null){t.blockedOn=i,_i(t.priority,function(){vi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cl(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=cf(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var u=new a.constructor(a.type,a);Ce=u,a.target.dispatchEvent(u),Ce=null}else return i=Ya(a),i!==null&&Wt(i),t.blockedOn=a,!1;i.shift()}return!0}function Hp(t,i,a){cl(t)&&a.delete(i)}function AM(){Ni=!1,_r!==null&&cl(_r)&&(_r=null),xr!==null&&cl(xr)&&(xr=null),Sr!==null&&cl(Sr)&&(Sr=null),La.forEach(Hp),Da.forEach(Hp)}function Na(t,i){t.blockedOn===i&&(t.blockedOn=null,Ni||(Ni=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,AM)))}function Ua(t){function i(f){return Na(f,t)}if(0<rs.length){Na(rs[0],t);for(var a=1;a<rs.length;a++){var u=rs[a];u.blockedOn===t&&(u.blockedOn=null)}}for(_r!==null&&Na(_r,t),xr!==null&&Na(xr,t),Sr!==null&&Na(Sr,t),La.forEach(i),Da.forEach(i),a=0;a<yr.length;a++)u=yr[a],u.blockedOn===t&&(u.blockedOn=null);for(;0<yr.length&&(a=yr[0],a.blockedOn===null);)Vp(a),a.blockedOn===null&&yr.shift()}var Gs=b.ReactCurrentBatchConfig,fl=!0;function bM(t,i,a,u){var f=At,p=Gs.transition;Gs.transition=null;try{At=1,uf(t,i,a,u)}finally{At=f,Gs.transition=p}}function RM(t,i,a,u){var f=At,p=Gs.transition;Gs.transition=null;try{At=4,uf(t,i,a,u)}finally{At=f,Gs.transition=p}}function uf(t,i,a,u){if(fl){var f=cf(t,i,a,u);if(f===null)bf(t,i,u,dl,a),zp(t,u);else if(wM(f,t,i,a,u))u.stopPropagation();else if(zp(t,u),i&4&&-1<TM.indexOf(t)){for(;f!==null;){var p=Ya(f);if(p!==null&&Ot(p),p=cf(t,i,a,u),p===null&&bf(t,i,u,dl,a),p===f)break;f=p}f!==null&&u.stopPropagation()}else bf(t,i,u,null,a)}}var dl=null;function cf(t,i,a,u){if(dl=null,t=qe(u),t=ss(t),t!==null)if(i=Dn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Hs(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return dl=t,null}function Gp(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lf()){case Pa:return 1;case A:return 4;case Y:case oe:return 16;case te:return 536870912;default:return 16}default:return 16}}var Mr=null,ff=null,hl=null;function Wp(){if(hl)return hl;var t,i=ff,a=i.length,u,f="value"in Mr?Mr.value:Mr.textContent,p=f.length;for(t=0;t<a&&i[t]===f[t];t++);var T=a-t;for(u=1;u<=T&&i[a-u]===f[p-u];u++);return hl=f.slice(t,1<u?1-u:void 0)}function pl(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Xp(){return!1}function Zn(t){function i(a,u,f,p,T){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=T,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(p):p[N]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ml:Xp,this.isPropagationStopped=Xp,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),i}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Zn(Ws),Fa=ae({},Ws,{view:0,detail:0}),CM=Zn(Fa),hf,pf,Oa,gl=ae({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oa&&(Oa&&t.type==="mousemove"?(hf=t.screenX-Oa.screenX,pf=t.screenY-Oa.screenY):pf=hf=0,Oa=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:pf}}),$p=Zn(gl),PM=ae({},gl,{dataTransfer:0}),LM=Zn(PM),DM=ae({},Fa,{relatedTarget:0}),mf=Zn(DM),IM=ae({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),NM=Zn(IM),UM=ae({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FM=Zn(UM),OM=ae({},Ws,{data:0}),Yp=Zn(OM),kM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},BM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function VM(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=zM[t])?!!i[t]:!1}function gf(){return VM}var HM=ae({},Fa,{key:function(t){if(t.key){var i=kM[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?BM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gf,charCode:function(t){return t.type==="keypress"?pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),GM=Zn(HM),WM=ae({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qp=Zn(WM),XM=ae({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gf}),$M=Zn(XM),YM=ae({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),qM=Zn(YM),KM=ae({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZM=Zn(KM),jM=[9,13,27,32],vf=d&&"CompositionEvent"in window,ka=null;d&&"documentMode"in document&&(ka=document.documentMode);var QM=d&&"TextEvent"in window&&!ka,Kp=d&&(!vf||ka&&8<ka&&11>=ka),Zp=" ",jp=!1;function Qp(t,i){switch(t){case"keyup":return jM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function JM(t,i){switch(t){case"compositionend":return Jp(i);case"keypress":return i.which!==32?null:(jp=!0,Zp);case"textInput":return t=i.data,t===Zp&&jp?null:t;default:return null}}function eE(t,i){if(Xs)return t==="compositionend"||!vf&&Qp(t,i)?(t=Wp(),hl=ff=Mr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kp&&i.locale!=="ko"?null:i.data;default:return null}}var tE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!tE[t.type]:i==="textarea"}function tm(t,i,a,u){me(u),i=yl(i,"onChange"),0<i.length&&(a=new df("onChange","change",null,a,u),t.push({event:a,listeners:i}))}var Ba=null,za=null;function nE(t){xm(t,0)}function vl(t){var i=Zs(t);if(St(i))return t}function iE(t,i){if(t==="change")return i}var nm=!1;if(d){var _f;if(d){var xf="oninput"in document;if(!xf){var im=document.createElement("div");im.setAttribute("oninput","return;"),xf=typeof im.oninput=="function"}_f=xf}else _f=!1;nm=_f&&(!document.documentMode||9<document.documentMode)}function rm(){Ba&&(Ba.detachEvent("onpropertychange",sm),za=Ba=null)}function sm(t){if(t.propertyName==="value"&&vl(za)){var i=[];tm(i,za,t,qe(t)),He(nE,i)}}function rE(t,i,a){t==="focusin"?(rm(),Ba=i,za=a,Ba.attachEvent("onpropertychange",sm)):t==="focusout"&&rm()}function sE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(za)}function aE(t,i){if(t==="click")return vl(i)}function oE(t,i){if(t==="input"||t==="change")return vl(i)}function lE(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var xi=typeof Object.is=="function"?Object.is:lE;function Va(t,i){if(xi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!h.call(i,f)||!xi(t[f],i[f]))return!1}return!0}function am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function om(t,i){var a=am(t);t=0;for(var u;a;){if(a.nodeType===3){if(u=t+a.textContent.length,t<=i&&u>=i)return{node:a,offset:i-t};t=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=am(a)}}function lm(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?lm(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function um(){for(var t=window,i=at();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=at(t.document)}return i}function Sf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function uE(t){var i=um(),a=t.focusedElem,u=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&lm(a.ownerDocument.documentElement,a)){if(u!==null&&Sf(a)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!t.extend&&p>u&&(f=u,u=p,p=f),f=om(a,p);var T=om(a,u);f&&T&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>u?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cE=d&&"documentMode"in document&&11>=document.documentMode,$s=null,yf=null,Ha=null,Mf=!1;function cm(t,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mf||$s==null||$s!==at(u)||(u=$s,"selectionStart"in u&&Sf(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ha&&Va(Ha,u)||(Ha=u,u=yl(yf,"onSelect"),0<u.length&&(i=new df("onSelect","select",null,i,a),t.push({event:i,listeners:u}),i.target=$s)))}function _l(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ys={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Ef={},fm={};d&&(fm=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function xl(t){if(Ef[t])return Ef[t];if(!Ys[t])return t;var i=Ys[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in fm)return Ef[t]=i[a];return t}var dm=xl("animationend"),hm=xl("animationiteration"),pm=xl("animationstart"),mm=xl("transitionend"),gm=new Map,vm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(t,i){gm.set(t,i),l(i,[t])}for(var Tf=0;Tf<vm.length;Tf++){var wf=vm[Tf],fE=wf.toLowerCase(),dE=wf[0].toUpperCase()+wf.slice(1);Er(fE,"on"+dE)}Er(dm,"onAnimationEnd"),Er(hm,"onAnimationIteration"),Er(pm,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(mm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ga));function _m(t,i,a){var u=t.type||"unknown-event";t.currentTarget=a,ol(u,i,void 0,t),t.currentTarget=null}function xm(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var u=t[a],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var T=u.length-1;0<=T;T--){var N=u[T],k=N.instance,le=N.currentTarget;if(N=N.listener,k!==p&&f.isPropagationStopped())break e;_m(f,N,le),p=k}else for(T=0;T<u.length;T++){if(N=u[T],k=N.instance,le=N.currentTarget,N=N.listener,k!==p&&f.isPropagationStopped())break e;_m(f,N,le),p=k}}}if(es)throw t=ts,es=!1,ts=null,t}function Xt(t,i){var a=i[If];a===void 0&&(a=i[If]=new Set);var u=t+"__bubble";a.has(u)||(Sm(i,t,2,!1),a.add(u))}function Af(t,i,a){var u=0;i&&(u|=4),Sm(a,t,u,i)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Wa(t){if(!t[Sl]){t[Sl]=!0,r.forEach(function(a){a!=="selectionchange"&&(hE.has(a)||Af(a,!1,t),Af(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Sl]||(i[Sl]=!0,Af("selectionchange",!1,i))}}function Sm(t,i,a,u){switch(Gp(i)){case 1:var f=bM;break;case 4:f=RM;break;default:f=uf}a=f.bind(null,i,a,t),f=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function bf(t,i,a,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var N=u.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;T=T.return}for(;N!==null;){if(T=ss(N),T===null)return;if(k=T.tag,k===5||k===6){u=p=T;continue e}N=N.parentNode}}u=u.return}He(function(){var le=p,Se=qe(a),Me=[];e:{var xe=gm.get(t);if(xe!==void 0){var Ve=df,Ze=t;switch(t){case"keypress":if(pl(a)===0)break e;case"keydown":case"keyup":Ve=GM;break;case"focusin":Ze="focus",Ve=mf;break;case"focusout":Ze="blur",Ve=mf;break;case"beforeblur":case"afterblur":Ve=mf;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=$p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=LM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=$M;break;case dm:case hm:case pm:Ve=NM;break;case mm:Ve=qM;break;case"scroll":Ve=CM;break;case"wheel":Ve=ZM;break;case"copy":case"cut":case"paste":Ve=FM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=qp}var et=(i&4)!==0,tn=!et&&t==="scroll",Q=et?xe!==null?xe+"Capture":null:xe;et=[];for(var X=le,ne;X!==null;){ne=X;var we=ne.stateNode;if(ne.tag===5&&we!==null&&(ne=we,Q!==null&&(we=pt(X,Q),we!=null&&et.push(Xa(X,we,ne)))),tn)break;X=X.return}0<et.length&&(xe=new Ve(xe,Ze,null,a,Se),Me.push({event:xe,listeners:et}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",xe&&a!==Ce&&(Ze=a.relatedTarget||a.fromElement)&&(ss(Ze)||Ze[Qi]))break e;if((Ve||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?(Ze=a.relatedTarget||a.toElement,Ve=le,Ze=Ze?ss(Ze):null,Ze!==null&&(tn=Dn(Ze),Ze!==tn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Ve=null,Ze=le),Ve!==Ze)){if(et=$p,we="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(et=qp,we="onPointerLeave",Q="onPointerEnter",X="pointer"),tn=Ve==null?xe:Zs(Ve),ne=Ze==null?xe:Zs(Ze),xe=new et(we,X+"leave",Ve,a,Se),xe.target=tn,xe.relatedTarget=ne,we=null,ss(Se)===le&&(et=new et(Q,X+"enter",Ze,a,Se),et.target=ne,et.relatedTarget=tn,we=et),tn=we,Ve&&Ze)t:{for(et=Ve,Q=Ze,X=0,ne=et;ne;ne=qs(ne))X++;for(ne=0,we=Q;we;we=qs(we))ne++;for(;0<X-ne;)et=qs(et),X--;for(;0<ne-X;)Q=qs(Q),ne--;for(;X--;){if(et===Q||Q!==null&&et===Q.alternate)break t;et=qs(et),Q=qs(Q)}et=null}else et=null;Ve!==null&&ym(Me,xe,Ve,et,!1),Ze!==null&&tn!==null&&ym(Me,tn,Ze,et,!0)}}e:{if(xe=le?Zs(le):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var it=iE;else if(em(xe))if(nm)it=oE;else{it=sE;var ct=rE}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(it=aE);if(it&&(it=it(t,le))){tm(Me,it,a,Se);break e}ct&&ct(t,xe,le),t==="focusout"&&(ct=xe._wrapperState)&&ct.controlled&&xe.type==="number"&&st(xe,"number",xe.value)}switch(ct=le?Zs(le):window,t){case"focusin":(em(ct)||ct.contentEditable==="true")&&($s=ct,yf=le,Ha=null);break;case"focusout":Ha=yf=$s=null;break;case"mousedown":Mf=!0;break;case"contextmenu":case"mouseup":case"dragend":Mf=!1,cm(Me,a,Se);break;case"selectionchange":if(cE)break;case"keydown":case"keyup":cm(Me,a,Se)}var ft;if(vf)e:{switch(t){case"compositionstart":var ht="onCompositionStart";break e;case"compositionend":ht="onCompositionEnd";break e;case"compositionupdate":ht="onCompositionUpdate";break e}ht=void 0}else Xs?Qp(t,a)&&(ht="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ht="onCompositionStart");ht&&(Kp&&a.locale!=="ko"&&(Xs||ht!=="onCompositionStart"?ht==="onCompositionEnd"&&Xs&&(ft=Wp()):(Mr=Se,ff="value"in Mr?Mr.value:Mr.textContent,Xs=!0)),ct=yl(le,ht),0<ct.length&&(ht=new Yp(ht,t,null,a,Se),Me.push({event:ht,listeners:ct}),ft?ht.data=ft:(ft=Jp(a),ft!==null&&(ht.data=ft)))),(ft=QM?JM(t,a):eE(t,a))&&(le=yl(le,"onBeforeInput"),0<le.length&&(Se=new Yp("onBeforeInput","beforeinput",null,a,Se),Me.push({event:Se,listeners:le}),Se.data=ft))}xm(Me,i)})}function Xa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function yl(t,i){for(var a=i+"Capture",u=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=pt(t,a),p!=null&&u.unshift(Xa(t,p,f)),p=pt(t,i),p!=null&&u.push(Xa(t,p,f))),t=t.return}return u}function qs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ym(t,i,a,u,f){for(var p=i._reactName,T=[];a!==null&&a!==u;){var N=a,k=N.alternate,le=N.stateNode;if(k!==null&&k===u)break;N.tag===5&&le!==null&&(N=le,f?(k=pt(a,p),k!=null&&T.unshift(Xa(a,k,N))):f||(k=pt(a,p),k!=null&&T.push(Xa(a,k,N)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var pE=/\r\n?/g,mE=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(pE,`
`).replace(mE,"")}function Ml(t,i,a){if(i=Mm(i),Mm(t)!==i&&a)throw Error(n(425))}function El(){}var Rf=null,Cf=null;function Pf(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lf=typeof setTimeout=="function"?setTimeout:void 0,gE=typeof clearTimeout=="function"?clearTimeout:void 0,Em=typeof Promise=="function"?Promise:void 0,vE=typeof queueMicrotask=="function"?queueMicrotask:typeof Em<"u"?function(t){return Em.resolve(null).then(t).catch(_E)}:Lf;function _E(t){setTimeout(function(){throw t})}function Df(t,i){var a=i,u=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){t.removeChild(f),Ua(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);Ua(i)}function Tr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Tm(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Ks,$a="__reactProps$"+Ks,Qi="__reactContainer$"+Ks,If="__reactEvents$"+Ks,xE="__reactListeners$"+Ks,SE="__reactHandles$"+Ks;function ss(t){var i=t[Ui];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Qi]||a[Ui]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Tm(t);t!==null;){if(a=t[Ui])return a;t=Tm(t)}return i}t=a,a=t.parentNode}return null}function Ya(t){return t=t[Ui]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Tl(t){return t[$a]||null}var Nf=[],js=-1;function wr(t){return{current:t}}function $t(t){0>js||(t.current=Nf[js],Nf[js]=null,js--)}function Gt(t,i){js++,Nf[js]=t.current,t.current=i}var Ar={},Tn=wr(Ar),Bn=wr(!1),as=Ar;function Qs(t,i){var a=t.type.contextTypes;if(!a)return Ar;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function zn(t){return t=t.childContextTypes,t!=null}function wl(){$t(Bn),$t(Tn)}function wm(t,i,a){if(Tn.current!==Ar)throw Error(n(168));Gt(Tn,i),Gt(Bn,a)}function Am(t,i,a){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(n(108,ge(t)||"Unknown",f));return ae({},a,u)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,as=Tn.current,Gt(Tn,t),Gt(Bn,Bn.current),!0}function bm(t,i,a){var u=t.stateNode;if(!u)throw Error(n(169));a?(t=Am(t,i,as),u.__reactInternalMemoizedMergedChildContext=t,$t(Bn),$t(Tn),Gt(Tn,t)):$t(Bn),Gt(Bn,a)}var Ji=null,bl=!1,Uf=!1;function Rm(t){Ji===null?Ji=[t]:Ji.push(t)}function yE(t){bl=!0,Rm(t)}function br(){if(!Uf&&Ji!==null){Uf=!0;var t=0,i=At;try{var a=Ji;for(At=1;t<a.length;t++){var u=a[t];do u=u(!0);while(u!==null)}Ji=null,bl=!1}catch(f){throw Ji!==null&&(Ji=Ji.slice(t+1)),is(Pa,br),f}finally{At=i,Uf=!1}}return null}var Js=[],ea=0,Rl=null,Cl=0,si=[],ai=0,os=null,er=1,tr="";function ls(t,i){Js[ea++]=Cl,Js[ea++]=Rl,Rl=t,Cl=i}function Cm(t,i,a){si[ai++]=er,si[ai++]=tr,si[ai++]=os,os=t;var u=er;t=tr;var f=32-Re(u)-1;u&=~(1<<f),a+=1;var p=32-Re(i)+f;if(30<p){var T=f-f%5;p=(u&(1<<T)-1).toString(32),u>>=T,f-=T,er=1<<32-Re(i)+f|a<<f|u,tr=p+t}else er=1<<p|a<<f|u,tr=t}function Ff(t){t.return!==null&&(ls(t,1),Cm(t,1,0))}function Of(t){for(;t===Rl;)Rl=Js[--ea],Js[ea]=null,Cl=Js[--ea],Js[ea]=null;for(;t===os;)os=si[--ai],si[ai]=null,tr=si[--ai],si[ai]=null,er=si[--ai],si[ai]=null}var jn=null,Qn=null,qt=!1,Si=null;function Pm(t,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Lm(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,jn=t,Qn=Tr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,jn=t,Qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=os!==null?{id:er,overflow:tr}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,jn=t,Qn=null,!0):!1;default:return!1}}function kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bf(t){if(qt){var i=Qn;if(i){var a=i;if(!Lm(t,i)){if(kf(t))throw Error(n(418));i=Tr(a.nextSibling);var u=jn;i&&Lm(t,i)?Pm(u,a):(t.flags=t.flags&-4097|2,qt=!1,jn=t)}}else{if(kf(t))throw Error(n(418));t.flags=t.flags&-4097|2,qt=!1,jn=t}}}function Dm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;jn=t}function Pl(t){if(t!==jn)return!1;if(!qt)return Dm(t),qt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Pf(t.type,t.memoizedProps)),i&&(i=Qn)){if(kf(t))throw Im(),Error(n(418));for(;i;)Pm(t,i),i=Tr(i.nextSibling)}if(Dm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Qn=Tr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Qn=null}}else Qn=jn?Tr(t.stateNode.nextSibling):null;return!0}function Im(){for(var t=Qn;t;)t=Tr(t.nextSibling)}function ta(){Qn=jn=null,qt=!1}function zf(t){Si===null?Si=[t]:Si.push(t)}var ME=b.ReactCurrentBatchConfig;function qa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,t));var f=u,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(T){var N=f.refs;T===null?delete N[p]:N[p]=T},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Ll(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Nm(t){var i=t._init;return i(t._payload)}function Um(t){function i(Q,X){if(t){var ne=Q.deletions;ne===null?(Q.deletions=[X],Q.flags|=16):ne.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)i(Q,X),X=X.sibling;return null}function u(Q,X){for(Q=new Map;X!==null;)X.key!==null?Q.set(X.key,X):Q.set(X.index,X),X=X.sibling;return Q}function f(Q,X){return Q=Ur(Q,X),Q.index=0,Q.sibling=null,Q}function p(Q,X,ne){return Q.index=ne,t?(ne=Q.alternate,ne!==null?(ne=ne.index,ne<X?(Q.flags|=2,X):ne):(Q.flags|=2,X)):(Q.flags|=1048576,X)}function T(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function N(Q,X,ne,we){return X===null||X.tag!==6?(X=Ld(ne,Q.mode,we),X.return=Q,X):(X=f(X,ne),X.return=Q,X)}function k(Q,X,ne,we){var it=ne.type;return it===O?Se(Q,X,ne.props.children,we,ne.key):X!==null&&(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&Nm(it)===X.type)?(we=f(X,ne.props),we.ref=qa(Q,X,ne),we.return=Q,we):(we=tu(ne.type,ne.key,ne.props,null,Q.mode,we),we.ref=qa(Q,X,ne),we.return=Q,we)}function le(Q,X,ne,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=Dd(ne,Q.mode,we),X.return=Q,X):(X=f(X,ne.children||[]),X.return=Q,X)}function Se(Q,X,ne,we,it){return X===null||X.tag!==7?(X=gs(ne,Q.mode,we,it),X.return=Q,X):(X=f(X,ne),X.return=Q,X)}function Me(Q,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ld(""+X,Q.mode,ne),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return ne=tu(X.type,X.key,X.props,null,Q.mode,ne),ne.ref=qa(Q,null,X),ne.return=Q,ne;case C:return X=Dd(X,Q.mode,ne),X.return=Q,X;case $:var we=X._init;return Me(Q,we(X._payload),ne)}if(ot(X)||re(X))return X=gs(X,Q.mode,ne,null),X.return=Q,X;Ll(Q,X)}return null}function xe(Q,X,ne,we){var it=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return it!==null?null:N(Q,X,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:return ne.key===it?k(Q,X,ne,we):null;case C:return ne.key===it?le(Q,X,ne,we):null;case $:return it=ne._init,xe(Q,X,it(ne._payload),we)}if(ot(ne)||re(ne))return it!==null?null:Se(Q,X,ne,we,null);Ll(Q,ne)}return null}function Ve(Q,X,ne,we,it){if(typeof we=="string"&&we!==""||typeof we=="number")return Q=Q.get(ne)||null,N(X,Q,""+we,it);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case I:return Q=Q.get(we.key===null?ne:we.key)||null,k(X,Q,we,it);case C:return Q=Q.get(we.key===null?ne:we.key)||null,le(X,Q,we,it);case $:var ct=we._init;return Ve(Q,X,ne,ct(we._payload),it)}if(ot(we)||re(we))return Q=Q.get(ne)||null,Se(X,Q,we,it,null);Ll(X,we)}return null}function Ze(Q,X,ne,we){for(var it=null,ct=null,ft=X,ht=X=0,pn=null;ft!==null&&ht<ne.length;ht++){ft.index>ht?(pn=ft,ft=null):pn=ft.sibling;var Ft=xe(Q,ft,ne[ht],we);if(Ft===null){ft===null&&(ft=pn);break}t&&ft&&Ft.alternate===null&&i(Q,ft),X=p(Ft,X,ht),ct===null?it=Ft:ct.sibling=Ft,ct=Ft,ft=pn}if(ht===ne.length)return a(Q,ft),qt&&ls(Q,ht),it;if(ft===null){for(;ht<ne.length;ht++)ft=Me(Q,ne[ht],we),ft!==null&&(X=p(ft,X,ht),ct===null?it=ft:ct.sibling=ft,ct=ft);return qt&&ls(Q,ht),it}for(ft=u(Q,ft);ht<ne.length;ht++)pn=Ve(ft,Q,ht,ne[ht],we),pn!==null&&(t&&pn.alternate!==null&&ft.delete(pn.key===null?ht:pn.key),X=p(pn,X,ht),ct===null?it=pn:ct.sibling=pn,ct=pn);return t&&ft.forEach(function(Fr){return i(Q,Fr)}),qt&&ls(Q,ht),it}function et(Q,X,ne,we){var it=re(ne);if(typeof it!="function")throw Error(n(150));if(ne=it.call(ne),ne==null)throw Error(n(151));for(var ct=it=null,ft=X,ht=X=0,pn=null,Ft=ne.next();ft!==null&&!Ft.done;ht++,Ft=ne.next()){ft.index>ht?(pn=ft,ft=null):pn=ft.sibling;var Fr=xe(Q,ft,Ft.value,we);if(Fr===null){ft===null&&(ft=pn);break}t&&ft&&Fr.alternate===null&&i(Q,ft),X=p(Fr,X,ht),ct===null?it=Fr:ct.sibling=Fr,ct=Fr,ft=pn}if(Ft.done)return a(Q,ft),qt&&ls(Q,ht),it;if(ft===null){for(;!Ft.done;ht++,Ft=ne.next())Ft=Me(Q,Ft.value,we),Ft!==null&&(X=p(Ft,X,ht),ct===null?it=Ft:ct.sibling=Ft,ct=Ft);return qt&&ls(Q,ht),it}for(ft=u(Q,ft);!Ft.done;ht++,Ft=ne.next())Ft=Ve(ft,Q,ht,Ft.value,we),Ft!==null&&(t&&Ft.alternate!==null&&ft.delete(Ft.key===null?ht:Ft.key),X=p(Ft,X,ht),ct===null?it=Ft:ct.sibling=Ft,ct=Ft);return t&&ft.forEach(function(t1){return i(Q,t1)}),qt&&ls(Q,ht),it}function tn(Q,X,ne,we){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:e:{for(var it=ne.key,ct=X;ct!==null;){if(ct.key===it){if(it=ne.type,it===O){if(ct.tag===7){a(Q,ct.sibling),X=f(ct,ne.props.children),X.return=Q,Q=X;break e}}else if(ct.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&Nm(it)===ct.type){a(Q,ct.sibling),X=f(ct,ne.props),X.ref=qa(Q,ct,ne),X.return=Q,Q=X;break e}a(Q,ct);break}else i(Q,ct);ct=ct.sibling}ne.type===O?(X=gs(ne.props.children,Q.mode,we,ne.key),X.return=Q,Q=X):(we=tu(ne.type,ne.key,ne.props,null,Q.mode,we),we.ref=qa(Q,X,ne),we.return=Q,Q=we)}return T(Q);case C:e:{for(ct=ne.key;X!==null;){if(X.key===ct)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){a(Q,X.sibling),X=f(X,ne.children||[]),X.return=Q,Q=X;break e}else{a(Q,X);break}else i(Q,X);X=X.sibling}X=Dd(ne,Q.mode,we),X.return=Q,Q=X}return T(Q);case $:return ct=ne._init,tn(Q,X,ct(ne._payload),we)}if(ot(ne))return Ze(Q,X,ne,we);if(re(ne))return et(Q,X,ne,we);Ll(Q,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,X!==null&&X.tag===6?(a(Q,X.sibling),X=f(X,ne),X.return=Q,Q=X):(a(Q,X),X=Ld(ne,Q.mode,we),X.return=Q,Q=X),T(Q)):a(Q,X)}return tn}var na=Um(!0),Fm=Um(!1),Dl=wr(null),Il=null,ia=null,Vf=null;function Hf(){Vf=ia=Il=null}function Gf(t){var i=Dl.current;$t(Dl),t._currentValue=i}function Wf(t,i,a){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===a)break;t=t.return}}function ra(t,i){Il=t,Vf=ia=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Vn=!0),t.firstContext=null)}function oi(t){var i=t._currentValue;if(Vf!==t)if(t={context:t,memoizedValue:i,next:null},ia===null){if(Il===null)throw Error(n(308));ia=t,Il.dependencies={lanes:0,firstContext:t}}else ia=ia.next=t;return i}var us=null;function Xf(t){us===null?us=[t]:us.push(t)}function Om(t,i,a,u){var f=i.interleaved;return f===null?(a.next=a,Xf(i)):(a.next=f.next,f.next=a),i.interleaved=a,nr(t,u)}function nr(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Rr=!1;function $f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function km(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ir(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Cr(t,i,a){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,nr(t,a)}return f=u.interleaved,f===null?(i.next=i,Xf(u)):(i.next=f.next,f.next=i),u.interleaved=i,nr(t,a)}function Nl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,kn(t,a)}}function Bm(t,i){var a=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=T:p=p.next=T,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ul(t,i,a,u){var f=t.updateQueue;Rr=!1;var p=f.firstBaseUpdate,T=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var k=N,le=k.next;k.next=null,T===null?p=le:T.next=le,T=k;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,N=Se.lastBaseUpdate,N!==T&&(N===null?Se.firstBaseUpdate=le:N.next=le,Se.lastBaseUpdate=k))}if(p!==null){var Me=f.baseState;T=0,Se=le=k=null,N=p;do{var xe=N.lane,Ve=N.eventTime;if((u&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Ve,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var Ze=t,et=N;switch(xe=i,Ve=a,et.tag){case 1:if(Ze=et.payload,typeof Ze=="function"){Me=Ze.call(Ve,Me,xe);break e}Me=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=et.payload,xe=typeof Ze=="function"?Ze.call(Ve,Me,xe):Ze,xe==null)break e;Me=ae({},Me,xe);break e;case 2:Rr=!0}}N.callback!==null&&N.lane!==0&&(t.flags|=64,xe=f.effects,xe===null?f.effects=[N]:xe.push(N))}else Ve={eventTime:Ve,lane:xe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Se===null?(le=Se=Ve,k=Me):Se=Se.next=Ve,T|=xe;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;xe=N,N=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(k=Me),f.baseState=k,f.firstBaseUpdate=le,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);ds|=T,t.lanes=T,t.memoizedState=Me}}function zm(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(n(191,f));f.call(u)}}}var Ka={},Fi=wr(Ka),Za=wr(Ka),ja=wr(Ka);function cs(t){if(t===Ka)throw Error(n(174));return t}function Yf(t,i){switch(Gt(ja,i),Gt(Za,t),Gt(Fi,Ka),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}$t(Fi),Gt(Fi,i)}function sa(){$t(Fi),$t(Za),$t(ja)}function Vm(t){cs(ja.current);var i=cs(Fi.current),a=y(i,t.type);i!==a&&(Gt(Za,t),Gt(Fi,a))}function qf(t){Za.current===t&&($t(Fi),$t(Za))}var jt=wr(0);function Fl(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kf=[];function Zf(){for(var t=0;t<Kf.length;t++)Kf[t]._workInProgressVersionPrimary=null;Kf.length=0}var Ol=b.ReactCurrentDispatcher,jf=b.ReactCurrentBatchConfig,fs=0,Qt=null,un=null,dn=null,kl=!1,Qa=!1,Ja=0,EE=0;function wn(){throw Error(n(321))}function Qf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!xi(t[a],i[a]))return!1;return!0}function Jf(t,i,a,u,f,p){if(fs=p,Qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ol.current=t===null||t.memoizedState===null?bE:RE,t=a(u,f),Qa){p=0;do{if(Qa=!1,Ja=0,25<=p)throw Error(n(301));p+=1,dn=un=null,i.updateQueue=null,Ol.current=CE,t=a(u,f)}while(Qa)}if(Ol.current=Vl,i=un!==null&&un.next!==null,fs=0,dn=un=Qt=null,kl=!1,i)throw Error(n(300));return t}function ed(){var t=Ja!==0;return Ja=0,t}function Oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Qt.memoizedState=dn=t:dn=dn.next=t,dn}function li(){if(un===null){var t=Qt.alternate;t=t!==null?t.memoizedState:null}else t=un.next;var i=dn===null?Qt.memoizedState:dn.next;if(i!==null)dn=i,un=t;else{if(t===null)throw Error(n(310));un=t,t={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},dn===null?Qt.memoizedState=dn=t:dn=dn.next=t}return dn}function eo(t,i){return typeof i=="function"?i(t):i}function td(t){var i=li(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=un,f=u.baseQueue,p=a.pending;if(p!==null){if(f!==null){var T=f.next;f.next=p.next,p.next=T}u.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,u=u.baseState;var N=T=null,k=null,le=p;do{var Se=le.lane;if((fs&Se)===Se)k!==null&&(k=k.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:t(u,le.action);else{var Me={lane:Se,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};k===null?(N=k=Me,T=u):k=k.next=Me,Qt.lanes|=Se,ds|=Se}le=le.next}while(le!==null&&le!==p);k===null?T=u:k.next=N,xi(u,i.memoizedState)||(Vn=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=k,a.lastRenderedState=u}if(t=a.interleaved,t!==null){f=t;do p=f.lane,Qt.lanes|=p,ds|=p,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function nd(t){var i=li(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do p=t(p,T.action),T=T.next;while(T!==f);xi(p,i.memoizedState)||(Vn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function Hm(){}function Gm(t,i){var a=Qt,u=li(),f=i(),p=!xi(u.memoizedState,f);if(p&&(u.memoizedState=f,Vn=!0),u=u.queue,id($m.bind(null,a,u,t),[t]),u.getSnapshot!==i||p||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,to(9,Xm.bind(null,a,u,f,i),void 0,null),hn===null)throw Error(n(349));(fs&30)!==0||Wm(a,i,f)}return f}function Wm(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Xm(t,i,a,u){i.value=a,i.getSnapshot=u,Ym(i)&&qm(t)}function $m(t,i,a){return a(function(){Ym(i)&&qm(t)})}function Ym(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!xi(t,a)}catch{return!0}}function qm(t){var i=nr(t,1);i!==null&&Ti(i,t,1,-1)}function Km(t){var i=Oi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:t},i.queue=t,t=t.dispatch=AE.bind(null,Qt,t),[i.memoizedState,t]}function to(t,i,a,u){return t={tag:t,create:i,destroy:a,deps:u,next:null},i=Qt.updateQueue,i===null?(i={lastEffect:null,stores:null},Qt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(u=a.next,a.next=t,t.next=u,i.lastEffect=t)),t}function Zm(){return li().memoizedState}function Bl(t,i,a,u){var f=Oi();Qt.flags|=t,f.memoizedState=to(1|i,a,void 0,u===void 0?null:u)}function zl(t,i,a,u){var f=li();u=u===void 0?null:u;var p=void 0;if(un!==null){var T=un.memoizedState;if(p=T.destroy,u!==null&&Qf(u,T.deps)){f.memoizedState=to(i,a,p,u);return}}Qt.flags|=t,f.memoizedState=to(1|i,a,p,u)}function jm(t,i){return Bl(8390656,8,t,i)}function id(t,i){return zl(2048,8,t,i)}function Qm(t,i){return zl(4,2,t,i)}function Jm(t,i){return zl(4,4,t,i)}function eg(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function tg(t,i,a){return a=a!=null?a.concat([t]):null,zl(4,4,eg.bind(null,i,t),a)}function rd(){}function ng(t,i){var a=li();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Qf(i,u[1])?u[0]:(a.memoizedState=[t,i],t)}function ig(t,i){var a=li();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Qf(i,u[1])?u[0]:(t=t(),a.memoizedState=[t,i],t)}function rg(t,i,a){return(fs&21)===0?(t.baseState&&(t.baseState=!1,Vn=!0),t.memoizedState=a):(xi(a,i)||(a=ze(),Qt.lanes|=a,ds|=a,t.baseState=!0),i)}function TE(t,i){var a=At;At=a!==0&&4>a?a:4,t(!0);var u=jf.transition;jf.transition={};try{t(!1),i()}finally{At=a,jf.transition=u}}function sg(){return li().memoizedState}function wE(t,i,a){var u=Ir(t);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},ag(t))og(i,a);else if(a=Om(t,i,a,u),a!==null){var f=Nn();Ti(a,t,u,f),lg(a,i,u)}}function AE(t,i,a){var u=Ir(t),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(ag(t))og(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var T=i.lastRenderedState,N=p(T,a);if(f.hasEagerState=!0,f.eagerState=N,xi(N,T)){var k=i.interleaved;k===null?(f.next=f,Xf(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}a=Om(t,i,f,u),a!==null&&(f=Nn(),Ti(a,t,u,f),lg(a,i,u))}}function ag(t){var i=t.alternate;return t===Qt||i!==null&&i===Qt}function og(t,i){Qa=kl=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function lg(t,i,a){if((a&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,kn(t,a)}}var Vl={readContext:oi,useCallback:wn,useContext:wn,useEffect:wn,useImperativeHandle:wn,useInsertionEffect:wn,useLayoutEffect:wn,useMemo:wn,useReducer:wn,useRef:wn,useState:wn,useDebugValue:wn,useDeferredValue:wn,useTransition:wn,useMutableSource:wn,useSyncExternalStore:wn,useId:wn,unstable_isNewReconciler:!1},bE={readContext:oi,useCallback:function(t,i){return Oi().memoizedState=[t,i===void 0?null:i],t},useContext:oi,useEffect:jm,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Bl(4194308,4,eg.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Bl(4194308,4,t,i)},useInsertionEffect:function(t,i){return Bl(4,2,t,i)},useMemo:function(t,i){var a=Oi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var u=Oi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=wE.bind(null,Qt,t),[u.memoizedState,t]},useRef:function(t){var i=Oi();return t={current:t},i.memoizedState=t},useState:Km,useDebugValue:rd,useDeferredValue:function(t){return Oi().memoizedState=t},useTransition:function(){var t=Km(!1),i=t[0];return t=TE.bind(null,t[1]),Oi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var u=Qt,f=Oi();if(qt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),hn===null)throw Error(n(349));(fs&30)!==0||Wm(u,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,jm($m.bind(null,u,p,t),[t]),u.flags|=2048,to(9,Xm.bind(null,u,p,a,i),void 0,null),a},useId:function(){var t=Oi(),i=hn.identifierPrefix;if(qt){var a=tr,u=er;a=(u&~(1<<32-Re(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ja++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=EE++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},RE={readContext:oi,useCallback:ng,useContext:oi,useEffect:id,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ig,useReducer:td,useRef:Zm,useState:function(){return td(eo)},useDebugValue:rd,useDeferredValue:function(t){var i=li();return rg(i,un.memoizedState,t)},useTransition:function(){var t=td(eo)[0],i=li().memoizedState;return[t,i]},useMutableSource:Hm,useSyncExternalStore:Gm,useId:sg,unstable_isNewReconciler:!1},CE={readContext:oi,useCallback:ng,useContext:oi,useEffect:id,useImperativeHandle:tg,useInsertionEffect:Qm,useLayoutEffect:Jm,useMemo:ig,useReducer:nd,useRef:Zm,useState:function(){return nd(eo)},useDebugValue:rd,useDeferredValue:function(t){var i=li();return un===null?i.memoizedState=t:rg(i,un.memoizedState,t)},useTransition:function(){var t=nd(eo)[0],i=li().memoizedState;return[t,i]},useMutableSource:Hm,useSyncExternalStore:Gm,useId:sg,unstable_isNewReconciler:!1};function yi(t,i){if(t&&t.defaultProps){i=ae({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function sd(t,i,a,u){i=t.memoizedState,a=a(u,i),a=a==null?i:ae({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hl={isMounted:function(t){return(t=t._reactInternals)?Dn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var u=Nn(),f=Ir(t),p=ir(u,f);p.payload=i,a!=null&&(p.callback=a),i=Cr(t,p,f),i!==null&&(Ti(i,t,f,u),Nl(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var u=Nn(),f=Ir(t),p=ir(u,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=Cr(t,p,f),i!==null&&(Ti(i,t,f,u),Nl(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Nn(),u=Ir(t),f=ir(a,u);f.tag=2,i!=null&&(f.callback=i),i=Cr(t,f,u),i!==null&&(Ti(i,t,u,a),Nl(i,t,u))}};function ug(t,i,a,u,f,p,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,p,T):i.prototype&&i.prototype.isPureReactComponent?!Va(a,u)||!Va(f,p):!0}function cg(t,i,a){var u=!1,f=Ar,p=i.contextType;return typeof p=="object"&&p!==null?p=oi(p):(f=zn(i)?as:Tn.current,u=i.contextTypes,p=(u=u!=null)?Qs(t,f):Ar),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Hl,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function fg(t,i,a,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==t&&Hl.enqueueReplaceState(i,i.state,null)}function ad(t,i,a,u){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},$f(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=oi(p):(p=zn(i)?as:Tn.current,f.context=Qs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(sd(t,i,p,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Hl.enqueueReplaceState(f,f.state,null),Ul(t,a,f,u),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function aa(t,i){try{var a="",u=i;do a+=Ge(u),u=u.return;while(u);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function od(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function ld(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var PE=typeof WeakMap=="function"?WeakMap:Map;function dg(t,i,a){a=ir(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Kl||(Kl=!0,Ed=u),ld(t,i)},a}function hg(t,i,a){a=ir(-1,a),a.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){ld(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){ld(t,i),typeof u!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function pg(t,i,a){var u=t.pingCache;if(u===null){u=t.pingCache=new PE;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),t=WE.bind(null,t,i,a),i.then(t,t))}function mg(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function gg(t,i,a,u,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ir(-1,1),i.tag=2,Cr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var LE=b.ReactCurrentOwner,Vn=!1;function In(t,i,a,u){i.child=t===null?Fm(i,null,a,u):na(i,t.child,a,u)}function vg(t,i,a,u,f){a=a.render;var p=i.ref;return ra(i,f),u=Jf(t,i,a,u,p,f),a=ed(),t!==null&&!Vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,rr(t,i,f)):(qt&&a&&Ff(i),i.flags|=1,In(t,i,u,f),i.child)}function _g(t,i,a,u,f){if(t===null){var p=a.type;return typeof p=="function"&&!Pd(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,xg(t,i,p,u,f)):(t=tu(a.type,null,u,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var T=p.memoizedProps;if(a=a.compare,a=a!==null?a:Va,a(T,u)&&t.ref===i.ref)return rr(t,i,f)}return i.flags|=1,t=Ur(p,u),t.ref=i.ref,t.return=i,i.child=t}function xg(t,i,a,u,f){if(t!==null){var p=t.memoizedProps;if(Va(p,u)&&t.ref===i.ref)if(Vn=!1,i.pendingProps=u=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Vn=!0);else return i.lanes=t.lanes,rr(t,i,f)}return ud(t,i,a,u,f)}function Sg(t,i,a){var u=i.pendingProps,f=u.children,p=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(la,Jn),Jn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Gt(la,Jn),Jn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,Gt(la,Jn),Jn|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,Gt(la,Jn),Jn|=u;return In(t,i,f,a),i.child}function yg(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function ud(t,i,a,u,f){var p=zn(a)?as:Tn.current;return p=Qs(i,p),ra(i,f),a=Jf(t,i,a,u,p,f),u=ed(),t!==null&&!Vn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,rr(t,i,f)):(qt&&u&&Ff(i),i.flags|=1,In(t,i,a,f),i.child)}function Mg(t,i,a,u,f){if(zn(a)){var p=!0;Al(i)}else p=!1;if(ra(i,f),i.stateNode===null)Wl(t,i),cg(i,a,u),ad(i,a,u,f),u=!0;else if(t===null){var T=i.stateNode,N=i.memoizedProps;T.props=N;var k=T.context,le=a.contextType;typeof le=="object"&&le!==null?le=oi(le):(le=zn(a)?as:Tn.current,le=Qs(i,le));var Se=a.getDerivedStateFromProps,Me=typeof Se=="function"||typeof T.getSnapshotBeforeUpdate=="function";Me||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==u||k!==le)&&fg(i,T,u,le),Rr=!1;var xe=i.memoizedState;T.state=xe,Ul(i,u,T,f),k=i.memoizedState,N!==u||xe!==k||Bn.current||Rr?(typeof Se=="function"&&(sd(i,a,Se,u),k=i.memoizedState),(N=Rr||ug(i,a,N,u,xe,k,le))?(Me||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),T.props=u,T.state=k,T.context=le,u=N):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,km(t,i),N=i.memoizedProps,le=i.type===i.elementType?N:yi(i.type,N),T.props=le,Me=i.pendingProps,xe=T.context,k=a.contextType,typeof k=="object"&&k!==null?k=oi(k):(k=zn(a)?as:Tn.current,k=Qs(i,k));var Ve=a.getDerivedStateFromProps;(Se=typeof Ve=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==Me||xe!==k)&&fg(i,T,u,k),Rr=!1,xe=i.memoizedState,T.state=xe,Ul(i,u,T,f);var Ze=i.memoizedState;N!==Me||xe!==Ze||Bn.current||Rr?(typeof Ve=="function"&&(sd(i,a,Ve,u),Ze=i.memoizedState),(le=Rr||ug(i,a,le,u,xe,Ze,k)||!1)?(Se||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,Ze,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,Ze,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ze),T.props=u,T.state=Ze,T.context=k,u=le):(typeof T.componentDidUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),u=!1)}return cd(t,i,a,u,p,f)}function cd(t,i,a,u,f,p){yg(t,i);var T=(i.flags&128)!==0;if(!u&&!T)return f&&bm(i,a,!1),rr(t,i,p);u=i.stateNode,LE.current=i;var N=T&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&T?(i.child=na(i,t.child,null,p),i.child=na(i,null,N,p)):In(t,i,N,p),i.memoizedState=u.state,f&&bm(i,a,!0),i.child}function Eg(t){var i=t.stateNode;i.pendingContext?wm(t,i.pendingContext,i.pendingContext!==i.context):i.context&&wm(t,i.context,!1),Yf(t,i.containerInfo)}function Tg(t,i,a,u,f){return ta(),zf(f),i.flags|=256,In(t,i,a,u),i.child}var fd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function wg(t,i,a){var u=i.pendingProps,f=jt.current,p=!1,T=(i.flags&128)!==0,N;if((N=T)||(N=t!==null&&t.memoizedState===null?!1:(f&2)!==0),N?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Gt(jt,f&1),t===null)return Bf(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,t=u.fallback,p?(u=i.mode,p=i.child,T={mode:"hidden",children:T},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=T):p=nu(T,u,0,null),t=gs(t,u,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=dd(a),i.memoizedState=fd,t):hd(i,T));if(f=t.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return DE(t,i,T,u,N,f,a);if(p){p=u.fallback,T=i.mode,f=t.child,N=f.sibling;var k={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=Ur(f,k),u.subtreeFlags=f.subtreeFlags&14680064),N!==null?p=Ur(N,p):(p=gs(p,T,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,T=t.child.memoizedState,T=T===null?dd(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},p.memoizedState=T,p.childLanes=t.childLanes&~a,i.memoizedState=fd,u}return p=t.child,t=p.sibling,u=Ur(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=u,i.memoizedState=null,u}function hd(t,i){return i=nu({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Gl(t,i,a,u){return u!==null&&zf(u),na(i,t.child,null,a),t=hd(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function DE(t,i,a,u,f,p,T){if(a)return i.flags&256?(i.flags&=-257,u=od(Error(n(422))),Gl(t,i,T,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=nu({mode:"visible",children:u.children},f,0,null),p=gs(p,f,T,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&na(i,t.child,null,T),i.child.memoizedState=dd(T),i.memoizedState=fd,p);if((i.mode&1)===0)return Gl(t,i,T,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var N=u.dgst;return u=N,p=Error(n(419)),u=od(p,u,void 0),Gl(t,i,T,u)}if(N=(T&t.childLanes)!==0,Vn||N){if(u=hn,u!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|T))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,nr(t,f),Ti(u,t,f,-1))}return Cd(),u=od(Error(n(421))),Gl(t,i,T,u)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=XE.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,Qn=Tr(f.nextSibling),jn=i,qt=!0,Si=null,t!==null&&(si[ai++]=er,si[ai++]=tr,si[ai++]=os,er=t.id,tr=t.overflow,os=i),i=hd(i,u.children),i.flags|=4096,i)}function Ag(t,i,a){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),Wf(t.return,i,a)}function pd(t,i,a,u,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=f)}function bg(t,i,a){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(In(t,i,u.children,a),u=jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ag(t,a,i);else if(t.tag===19)Ag(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Gt(jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Fl(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),pd(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Fl(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}pd(i,!0,a,null,p);break;case"together":pd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wl(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function rr(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),ds|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Ur(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Ur(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function IE(t,i,a){switch(i.tag){case 3:Eg(i),ta();break;case 5:Vm(i);break;case 1:zn(i.type)&&Al(i);break;case 4:Yf(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Gt(Dl,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Gt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?wg(t,i,a):(Gt(jt,jt.current&1),t=rr(t,i,a),t!==null?t.sibling:null);Gt(jt,jt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(t.flags&128)!==0){if(u)return bg(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Gt(jt,jt.current),u)break;return null;case 22:case 23:return i.lanes=0,Sg(t,i,a)}return rr(t,i,a)}var Rg,md,Cg,Pg;Rg=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},md=function(){},Cg=function(t,i,a,u){var f=t.memoizedProps;if(f!==u){t=i.stateNode,cs(Fi.current);var p=null;switch(a){case"input":f=Pt(t,f),u=Pt(t,u),p=[];break;case"select":f=ae({},f,{value:void 0}),u=ae({},u,{value:void 0}),p=[];break;case"textarea":f=xt(t,f),u=xt(t,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=El)}Ke(a,u);var T;a=null;for(le in f)if(!u.hasOwnProperty(le)&&f.hasOwnProperty(le)&&f[le]!=null)if(le==="style"){var N=f[le];for(T in N)N.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?p||(p=[]):(p=p||[]).push(le,null));for(le in u){var k=u[le];if(N=f!=null?f[le]:void 0,u.hasOwnProperty(le)&&k!==N&&(k!=null||N!=null))if(le==="style")if(N){for(T in N)!N.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in k)k.hasOwnProperty(T)&&N[T]!==k[T]&&(a||(a={}),a[T]=k[T])}else a||(p||(p=[]),p.push(le,a)),a=k;else le==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(p=p||[]).push(le,k)):le==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(le,""+k):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(k!=null&&le==="onScroll"&&Xt("scroll",t),p||N===k||(p=[])):(p=p||[]).push(le,k))}a&&(p=p||[]).push("style",a);var le=p;(i.updateQueue=le)&&(i.flags|=4)}},Pg=function(t,i,a,u){a!==u&&(i.flags|=4)};function no(t,i){if(!qt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function An(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,u=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=u,t.childLanes=a,i}function NE(t,i,a){var u=i.pendingProps;switch(Of(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(i),null;case 1:return zn(i.type)&&wl(),An(i),null;case 3:return u=i.stateNode,sa(),$t(Bn),$t(Tn),Zf(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Pl(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Si!==null&&(Ad(Si),Si=null))),md(t,i),An(i),null;case 5:qf(i);var f=cs(ja.current);if(a=i.type,t!==null&&i.stateNode!=null)Cg(t,i,a,u,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return An(i),null}if(t=cs(Fi.current),Pl(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[Ui]=i,u[$a]=p,t=(i.mode&1)!==0,a){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(f=0;f<Ga.length;f++)Xt(Ga[f],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":bt(u,p),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},Xt("invalid",u);break;case"textarea":B(u,p),Xt("invalid",u)}Ke(a,p),f=null;for(var T in p)if(p.hasOwnProperty(T)){var N=p[T];T==="children"?typeof N=="string"?u.textContent!==N&&(p.suppressHydrationWarning!==!0&&Ml(u.textContent,N,t),f=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(p.suppressHydrationWarning!==!0&&Ml(u.textContent,N,t),f=["children",""+N]):o.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Xt("scroll",u)}switch(a){case"input":ke(u),Qe(u,p,!0);break;case"textarea":ke(u),wt(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=El)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=P(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=T.createElement(a,{is:u.is}):(t=T.createElement(a),a==="select"&&(T=t,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):t=T.createElementNS(t,a),t[Ui]=i,t[$a]=u,Rg(t,i,!1,!1),i.stateNode=t;e:{switch(T=De(a,u),a){case"dialog":Xt("cancel",t),Xt("close",t),f=u;break;case"iframe":case"object":case"embed":Xt("load",t),f=u;break;case"video":case"audio":for(f=0;f<Ga.length;f++)Xt(Ga[f],t);f=u;break;case"source":Xt("error",t),f=u;break;case"img":case"image":case"link":Xt("error",t),Xt("load",t),f=u;break;case"details":Xt("toggle",t),f=u;break;case"input":bt(t,u),f=Pt(t,u),Xt("invalid",t);break;case"option":f=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},f=ae({},u,{value:void 0}),Xt("invalid",t);break;case"textarea":B(t,u),f=xt(t,u),Xt("invalid",t);break;default:f=u}Ke(a,f),N=f;for(p in N)if(N.hasOwnProperty(p)){var k=N[p];p==="style"?pe(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&ee(t,k)):p==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ue(t,k):typeof k=="number"&&ue(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Xt("scroll",t):k!=null&&F(t,p,k,T))}switch(a){case"input":ke(t),Qe(t,u,!1);break;case"textarea":ke(t),wt(t);break;case"option":u.value!=null&&t.setAttribute("value",""+he(u.value));break;case"select":t.multiple=!!u.multiple,p=u.value,p!=null?Ye(t,!!u.multiple,p,!1):u.defaultValue!=null&&Ye(t,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=El)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return An(i),null;case 6:if(t&&i.stateNode!=null)Pg(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(a=cs(ja.current),cs(Fi.current),Pl(i)){if(u=i.stateNode,a=i.memoizedProps,u[Ui]=i,(p=u.nodeValue!==a)&&(t=jn,t!==null))switch(t.tag){case 3:Ml(u.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ml(u.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Ui]=i,i.stateNode=u}return An(i),null;case 13:if($t(jt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qt&&Qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Im(),ta(),i.flags|=98560,p=!1;else if(p=Pl(i),u!==null&&u.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[Ui]=i}else ta(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;An(i),p=!1}else Si!==null&&(Ad(Si),Si=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(jt.current&1)!==0?cn===0&&(cn=3):Cd())),i.updateQueue!==null&&(i.flags|=4),An(i),null);case 4:return sa(),md(t,i),t===null&&Wa(i.stateNode.containerInfo),An(i),null;case 10:return Gf(i.type._context),An(i),null;case 17:return zn(i.type)&&wl(),An(i),null;case 19:if($t(jt),p=i.memoizedState,p===null)return An(i),null;if(u=(i.flags&128)!==0,T=p.rendering,T===null)if(u)no(p,!1);else{if(cn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=Fl(t),T!==null){for(i.flags|=128,no(p,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,t=u,p.flags&=14680066,T=p.alternate,T===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=T.childLanes,p.lanes=T.lanes,p.child=T.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=T.memoizedProps,p.memoizedState=T.memoizedState,p.updateQueue=T.updateQueue,p.type=T.type,t=T.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Gt(jt,jt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Zt()>ua&&(i.flags|=128,u=!0,no(p,!1),i.lanes=4194304)}else{if(!u)if(t=Fl(T),t!==null){if(i.flags|=128,u=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),no(p,!0),p.tail===null&&p.tailMode==="hidden"&&!T.alternate&&!qt)return An(i),null}else 2*Zt()-p.renderingStartTime>ua&&a!==1073741824&&(i.flags|=128,u=!0,no(p,!1),i.lanes=4194304);p.isBackwards?(T.sibling=i.child,i.child=T):(a=p.last,a!==null?a.sibling=T:i.child=T,p.last=T)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Zt(),i.sibling=null,a=jt.current,Gt(jt,u?a&1|2:a&1),i):(An(i),null);case 22:case 23:return Rd(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Jn&1073741824)!==0&&(An(i),i.subtreeFlags&6&&(i.flags|=8192)):An(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function UE(t,i){switch(Of(i),i.tag){case 1:return zn(i.type)&&wl(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return sa(),$t(Bn),$t(Tn),Zf(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return qf(i),null;case 13:if($t(jt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ta()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return $t(jt),null;case 4:return sa(),null;case 10:return Gf(i.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var Xl=!1,bn=!1,FE=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function oa(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){en(t,i,u)}else a.current=null}function gd(t,i,a){try{a()}catch(u){en(t,i,u)}}var Lg=!1;function OE(t,i){if(Rf=fl,t=um(),Sf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var T=0,N=-1,k=-1,le=0,Se=0,Me=t,xe=null;t:for(;;){for(var Ve;Me!==a||f!==0&&Me.nodeType!==3||(N=T+f),Me!==p||u!==0&&Me.nodeType!==3||(k=T+u),Me.nodeType===3&&(T+=Me.nodeValue.length),(Ve=Me.firstChild)!==null;)xe=Me,Me=Ve;for(;;){if(Me===t)break t;if(xe===a&&++le===f&&(N=T),xe===p&&++Se===u&&(k=T),(Ve=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=Ve}a=N===-1||k===-1?null:{start:N,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Cf={focusedElem:t,selectionRange:a},fl=!1,Xe=i;Xe!==null;)if(i=Xe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Xe=t;else for(;Xe!==null;){i=Xe;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var et=Ze.memoizedProps,tn=Ze.memoizedState,Q=i.stateNode,X=Q.getSnapshotBeforeUpdate(i.elementType===i.type?et:yi(i.type,et),tn);Q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){en(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Xe=t;break}Xe=i.return}return Ze=Lg,Lg=!1,Ze}function io(t,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&gd(i,a,p)}f=f.next}while(f!==u)}}function $l(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function vd(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Dg(t){var i=t.alternate;i!==null&&(t.alternate=null,Dg(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ui],delete i[$a],delete i[If],delete i[xE],delete i[SE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ig(t){return t.tag===5||t.tag===3||t.tag===4}function Ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ig(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=El));else if(u!==4&&(t=t.child,t!==null))for(_d(t,i,a),t=t.sibling;t!==null;)_d(t,i,a),t=t.sibling}function xd(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(xd(t,i,a),t=t.sibling;t!==null;)xd(t,i,a),t=t.sibling}var vn=null,Mi=!1;function Pr(t,i,a){for(a=a.child;a!==null;)Ug(t,i,a),a=a.sibling}function Ug(t,i,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(J,a)}catch{}switch(a.tag){case 5:bn||oa(a,i);case 6:var u=vn,f=Mi;vn=null,Pr(t,i,a),vn=u,Mi=f,vn!==null&&(Mi?(t=vn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(Mi?(t=vn,a=a.stateNode,t.nodeType===8?Df(t.parentNode,a):t.nodeType===1&&Df(t,a),Ua(t)):Df(vn,a.stateNode));break;case 4:u=vn,f=Mi,vn=a.stateNode.containerInfo,Mi=!0,Pr(t,i,a),vn=u,Mi=f;break;case 0:case 11:case 14:case 15:if(!bn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,T=p.destroy;p=p.tag,T!==void 0&&((p&2)!==0||(p&4)!==0)&&gd(a,i,T),f=f.next}while(f!==u)}Pr(t,i,a);break;case 1:if(!bn&&(oa(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(N){en(a,i,N)}Pr(t,i,a);break;case 21:Pr(t,i,a);break;case 22:a.mode&1?(bn=(u=bn)||a.memoizedState!==null,Pr(t,i,a),bn=u):Pr(t,i,a);break;default:Pr(t,i,a)}}function Fg(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new FE),i.forEach(function(u){var f=$E.bind(null,t,u);a.has(u)||(a.add(u),u.then(f,f))})}}function Ei(t,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var p=t,T=i,N=T;e:for(;N!==null;){switch(N.tag){case 5:vn=N.stateNode,Mi=!1;break e;case 3:vn=N.stateNode.containerInfo,Mi=!0;break e;case 4:vn=N.stateNode.containerInfo,Mi=!0;break e}N=N.return}if(vn===null)throw Error(n(160));Ug(p,T,f),vn=null,Mi=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(le){en(f,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Og(i,t),i=i.sibling}function Og(t,i){var a=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ei(i,t),ki(t),u&4){try{io(3,t,t.return),$l(3,t)}catch(et){en(t,t.return,et)}try{io(5,t,t.return)}catch(et){en(t,t.return,et)}}break;case 1:Ei(i,t),ki(t),u&512&&a!==null&&oa(a,a.return);break;case 5:if(Ei(i,t),ki(t),u&512&&a!==null&&oa(a,a.return),t.flags&32){var f=t.stateNode;try{ue(f,"")}catch(et){en(t,t.return,et)}}if(u&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,T=a!==null?a.memoizedProps:p,N=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{N==="input"&&p.type==="radio"&&p.name!=null&&_t(f,p),De(N,T);var le=De(N,p);for(T=0;T<k.length;T+=2){var Se=k[T],Me=k[T+1];Se==="style"?pe(f,Me):Se==="dangerouslySetInnerHTML"?ee(f,Me):Se==="children"?ue(f,Me):F(f,Se,Me,le)}switch(N){case"input":Te(f,p);break;case"textarea":Vt(f,p);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Ve=p.value;Ve!=null?Ye(f,!!p.multiple,Ve,!1):xe!==!!p.multiple&&(p.defaultValue!=null?Ye(f,!!p.multiple,p.defaultValue,!0):Ye(f,!!p.multiple,p.multiple?[]:"",!1))}f[$a]=p}catch(et){en(t,t.return,et)}}break;case 6:if(Ei(i,t),ki(t),u&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(et){en(t,t.return,et)}}break;case 3:if(Ei(i,t),ki(t),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ua(i.containerInfo)}catch(et){en(t,t.return,et)}break;case 4:Ei(i,t),ki(t);break;case 13:Ei(i,t),ki(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Md=Zt())),u&4&&Fg(t);break;case 22:if(Se=a!==null&&a.memoizedState!==null,t.mode&1?(bn=(le=bn)||Se,Ei(i,t),bn=le):Ei(i,t),ki(t),u&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!Se&&(t.mode&1)!==0)for(Xe=t,Se=t.child;Se!==null;){for(Me=Xe=Se;Xe!==null;){switch(xe=Xe,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:io(4,xe,xe.return);break;case 1:oa(xe,xe.return);var Ze=xe.stateNode;if(typeof Ze.componentWillUnmount=="function"){u=xe,a=xe.return;try{i=u,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(et){en(u,a,et)}}break;case 5:oa(xe,xe.return);break;case 22:if(xe.memoizedState!==null){zg(Me);continue}}Ve!==null?(Ve.return=xe,Xe=Ve):zg(Me)}Se=Se.sibling}e:for(Se=null,Me=t;;){if(Me.tag===5){if(Se===null){Se=Me;try{f=Me.stateNode,le?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(N=Me.stateNode,k=Me.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=de("display",T))}catch(et){en(t,t.return,et)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=le?"":Me.memoizedProps}catch(et){en(t,t.return,et)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Ei(i,t),ki(t),u&4&&Fg(t);break;case 21:break;default:Ei(i,t),ki(t)}}function ki(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Ig(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ue(f,""),u.flags&=-33);var p=Ng(t);xd(t,p,f);break;case 3:case 4:var T=u.stateNode.containerInfo,N=Ng(t);_d(t,N,T);break;default:throw Error(n(161))}}catch(k){en(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function kE(t,i,a){Xe=t,kg(t)}function kg(t,i,a){for(var u=(t.mode&1)!==0;Xe!==null;){var f=Xe,p=f.child;if(f.tag===22&&u){var T=f.memoizedState!==null||Xl;if(!T){var N=f.alternate,k=N!==null&&N.memoizedState!==null||bn;N=Xl;var le=bn;if(Xl=T,(bn=k)&&!le)for(Xe=f;Xe!==null;)T=Xe,k=T.child,T.tag===22&&T.memoizedState!==null?Vg(f):k!==null?(k.return=T,Xe=k):Vg(f);for(;p!==null;)Xe=p,kg(p),p=p.sibling;Xe=f,Xl=N,bn=le}Bg(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Xe=p):Bg(t)}}function Bg(t){for(;Xe!==null;){var i=Xe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:bn||$l(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!bn)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:yi(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&zm(i,p,u);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zm(i,T,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var Se=le.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&Ua(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}bn||i.flags&512&&vd(i)}catch(xe){en(i,i.return,xe)}}if(i===t){Xe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function zg(t){for(;Xe!==null;){var i=Xe;if(i===t){Xe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Xe=a;break}Xe=i.return}}function Vg(t){for(;Xe!==null;){var i=Xe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$l(4,i)}catch(k){en(i,a,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(k){en(i,f,k)}}var p=i.return;try{vd(i)}catch(k){en(i,p,k)}break;case 5:var T=i.return;try{vd(i)}catch(k){en(i,T,k)}}}catch(k){en(i,i.return,k)}if(i===t){Xe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Xe=N;break}Xe=i.return}}var BE=Math.ceil,Yl=b.ReactCurrentDispatcher,Sd=b.ReactCurrentOwner,ui=b.ReactCurrentBatchConfig,It=0,hn=null,an=null,_n=0,Jn=0,la=wr(0),cn=0,ro=null,ds=0,ql=0,yd=0,so=null,Hn=null,Md=0,ua=1/0,sr=null,Kl=!1,Ed=null,Lr=null,Zl=!1,Dr=null,jl=0,ao=0,Td=null,Ql=-1,Jl=0;function Nn(){return(It&6)!==0?Zt():Ql!==-1?Ql:Ql=Zt()}function Ir(t){return(t.mode&1)===0?1:(It&2)!==0&&_n!==0?_n&-_n:ME.transition!==null?(Jl===0&&(Jl=ze()),Jl):(t=At,t!==0||(t=window.event,t=t===void 0?16:Gp(t.type)),t)}function Ti(t,i,a,u){if(50<ao)throw ao=0,Td=null,Error(n(185));Et(t,a,u),((It&2)===0||t!==hn)&&(t===hn&&((It&2)===0&&(ql|=a),cn===4&&Nr(t,_n)),Gn(t,u),a===1&&It===0&&(i.mode&1)===0&&(ua=Zt()+500,bl&&br()))}function Gn(t,i){var a=t.callbackNode;Bt(t,i);var u=Ht(t,t===hn?_n:0);if(u===0)a!==null&&Ca(a),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(a!=null&&Ca(a),i===1)t.tag===0?yE(Gg.bind(null,t)):Rm(Gg.bind(null,t)),vE(function(){(It&6)===0&&br()}),a=null;else{switch(ji(u)){case 1:a=Pa;break;case 4:a=A;break;case 16:a=Y;break;case 536870912:a=te;break;default:a=Y}a=jg(a,Hg.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Hg(t,i){if(Ql=-1,Jl=0,(It&6)!==0)throw Error(n(327));var a=t.callbackNode;if(ca()&&t.callbackNode!==a)return null;var u=Ht(t,t===hn?_n:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=eu(t,u);else{i=u;var f=It;It|=2;var p=Xg();(hn!==t||_n!==i)&&(sr=null,ua=Zt()+500,ps(t,i));do try{HE();break}catch(N){Wg(t,N)}while(!0);Hf(),Yl.current=p,It=f,an!==null?i=0:(hn=null,_n=0,i=cn)}if(i!==0){if(i===2&&(f=sn(t),f!==0&&(u=f,i=wd(t,f))),i===1)throw a=ro,ps(t,0),Nr(t,u),Gn(t,Zt()),a;if(i===6)Nr(t,u);else{if(f=t.current.alternate,(u&30)===0&&!zE(f)&&(i=eu(t,u),i===2&&(p=sn(t),p!==0&&(u=p,i=wd(t,p))),i===1))throw a=ro,ps(t,0),Nr(t,u),Gn(t,Zt()),a;switch(t.finishedWork=f,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:ms(t,Hn,sr);break;case 3:if(Nr(t,u),(u&130023424)===u&&(i=Md+500-Zt(),10<i)){if(Ht(t,0)!==0)break;if(f=t.suspendedLanes,(f&u)!==u){Nn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Lf(ms.bind(null,t,Hn,sr),i);break}ms(t,Hn,sr);break;case 4:if(Nr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,f=-1;0<u;){var T=31-Re(u);p=1<<T,T=i[T],T>f&&(f=T),u&=~p}if(u=f,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*BE(u/1960))-u,10<u){t.timeoutHandle=Lf(ms.bind(null,t,Hn,sr),u);break}ms(t,Hn,sr);break;case 5:ms(t,Hn,sr);break;default:throw Error(n(329))}}}return Gn(t,Zt()),t.callbackNode===a?Hg.bind(null,t):null}function wd(t,i){var a=so;return t.current.memoizedState.isDehydrated&&(ps(t,i).flags|=256),t=eu(t,i),t!==2&&(i=Hn,Hn=a,i!==null&&Ad(i)),t}function Ad(t){Hn===null?Hn=t:Hn.push.apply(Hn,t)}function zE(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],p=f.getSnapshot;f=f.value;try{if(!xi(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(t,i){for(i&=~yd,i&=~ql,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Re(i),u=1<<a;t[a]=-1,i&=~u}}function Gg(t){if((It&6)!==0)throw Error(n(327));ca();var i=Ht(t,0);if((i&1)===0)return Gn(t,Zt()),null;var a=eu(t,i);if(t.tag!==0&&a===2){var u=sn(t);u!==0&&(i=u,a=wd(t,u))}if(a===1)throw a=ro,ps(t,0),Nr(t,i),Gn(t,Zt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,ms(t,Hn,sr),Gn(t,Zt()),null}function bd(t,i){var a=It;It|=1;try{return t(i)}finally{It=a,It===0&&(ua=Zt()+500,bl&&br())}}function hs(t){Dr!==null&&Dr.tag===0&&(It&6)===0&&ca();var i=It;It|=1;var a=ui.transition,u=At;try{if(ui.transition=null,At=1,t)return t()}finally{At=u,ui.transition=a,It=i,(It&6)===0&&br()}}function Rd(){Jn=la.current,$t(la)}function ps(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,gE(a)),an!==null)for(a=an.return;a!==null;){var u=a;switch(Of(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&wl();break;case 3:sa(),$t(Bn),$t(Tn),Zf();break;case 5:qf(u);break;case 4:sa();break;case 13:$t(jt);break;case 19:$t(jt);break;case 10:Gf(u.type._context);break;case 22:case 23:Rd()}a=a.return}if(hn=t,an=t=Ur(t.current,null),_n=Jn=i,cn=0,ro=null,yd=ql=ds=0,Hn=so=null,us!==null){for(i=0;i<us.length;i++)if(a=us[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,p=a.pending;if(p!==null){var T=p.next;p.next=f,u.next=T}a.pending=u}us=null}return t}function Wg(t,i){do{var a=an;try{if(Hf(),Ol.current=Vl,kl){for(var u=Qt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}kl=!1}if(fs=0,dn=un=Qt=null,Qa=!1,Ja=0,Sd.current=null,a===null||a.return===null){cn=1,ro=i,an=null;break}e:{var p=t,T=a.return,N=a,k=i;if(i=_n,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var le=k,Se=N,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Ve=mg(T);if(Ve!==null){Ve.flags&=-257,gg(Ve,T,N,p,i),Ve.mode&1&&pg(p,le,i),i=Ve,k=le;var Ze=i.updateQueue;if(Ze===null){var et=new Set;et.add(k),i.updateQueue=et}else Ze.add(k);break e}else{if((i&1)===0){pg(p,le,i),Cd();break e}k=Error(n(426))}}else if(qt&&N.mode&1){var tn=mg(T);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),gg(tn,T,N,p,i),zf(aa(k,N));break e}}p=k=aa(k,N),cn!==4&&(cn=2),so===null?so=[p]:so.push(p),p=T;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Q=dg(p,k,i);Bm(p,Q);break e;case 1:N=k;var X=p.type,ne=p.stateNode;if((p.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Lr===null||!Lr.has(ne)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=hg(p,N,i);Bm(p,we);break e}}p=p.return}while(p!==null)}Yg(a)}catch(it){i=it,an===a&&a!==null&&(an=a=a.return);continue}break}while(!0)}function Xg(){var t=Yl.current;return Yl.current=Vl,t===null?Vl:t}function Cd(){(cn===0||cn===3||cn===2)&&(cn=4),hn===null||(ds&268435455)===0&&(ql&268435455)===0||Nr(hn,_n)}function eu(t,i){var a=It;It|=2;var u=Xg();(hn!==t||_n!==i)&&(sr=null,ps(t,i));do try{VE();break}catch(f){Wg(t,f)}while(!0);if(Hf(),It=a,Yl.current=u,an!==null)throw Error(n(261));return hn=null,_n=0,cn}function VE(){for(;an!==null;)$g(an)}function HE(){for(;an!==null&&!ul();)$g(an)}function $g(t){var i=Zg(t.alternate,t,Jn);t.memoizedProps=t.pendingProps,i===null?Yg(t):an=i,Sd.current=null}function Yg(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=NE(a,i,Jn),a!==null){an=a;return}}else{if(a=UE(a,i),a!==null){a.flags&=32767,an=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{cn=6,an=null;return}}if(i=i.sibling,i!==null){an=i;return}an=i=t}while(i!==null);cn===0&&(cn=5)}function ms(t,i,a){var u=At,f=ui.transition;try{ui.transition=null,At=1,GE(t,i,a,u)}finally{ui.transition=f,At=u}return null}function GE(t,i,a,u){do ca();while(Dr!==null);if((It&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(On(t,p),t===hn&&(an=hn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Zl||(Zl=!0,jg(Y,function(){return ca(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=ui.transition,ui.transition=null;var T=At;At=1;var N=It;It|=4,Sd.current=null,OE(t,a),Og(a,t),uE(Cf),fl=!!Rf,Cf=Rf=null,t.current=a,kE(a),of(),It=N,At=T,ui.transition=p}else t.current=a;if(Zl&&(Zl=!1,Dr=t,jl=f),p=t.pendingLanes,p===0&&(Lr=null),We(a.stateNode),Gn(t,Zt()),i!==null)for(u=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(Kl)throw Kl=!1,t=Ed,Ed=null,t;return(jl&1)!==0&&t.tag!==0&&ca(),p=t.pendingLanes,(p&1)!==0?t===Td?ao++:(ao=0,Td=t):ao=0,br(),null}function ca(){if(Dr!==null){var t=ji(jl),i=ui.transition,a=At;try{if(ui.transition=null,At=16>t?16:t,Dr===null)var u=!1;else{if(t=Dr,Dr=null,jl=0,(It&6)!==0)throw Error(n(331));var f=It;for(It|=4,Xe=t.current;Xe!==null;){var p=Xe,T=p.child;if((Xe.flags&16)!==0){var N=p.deletions;if(N!==null){for(var k=0;k<N.length;k++){var le=N[k];for(Xe=le;Xe!==null;){var Se=Xe;switch(Se.tag){case 0:case 11:case 15:io(8,Se,p)}var Me=Se.child;if(Me!==null)Me.return=Se,Xe=Me;else for(;Xe!==null;){Se=Xe;var xe=Se.sibling,Ve=Se.return;if(Dg(Se),Se===le){Xe=null;break}if(xe!==null){xe.return=Ve,Xe=xe;break}Xe=Ve}}}var Ze=p.alternate;if(Ze!==null){var et=Ze.child;if(et!==null){Ze.child=null;do{var tn=et.sibling;et.sibling=null,et=tn}while(et!==null)}}Xe=p}}if((p.subtreeFlags&2064)!==0&&T!==null)T.return=p,Xe=T;else e:for(;Xe!==null;){if(p=Xe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:io(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,Xe=Q;break e}Xe=p.return}}var X=t.current;for(Xe=X;Xe!==null;){T=Xe;var ne=T.child;if((T.subtreeFlags&2064)!==0&&ne!==null)ne.return=T,Xe=ne;else e:for(T=X;Xe!==null;){if(N=Xe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:$l(9,N)}}catch(it){en(N,N.return,it)}if(N===T){Xe=null;break e}var we=N.sibling;if(we!==null){we.return=N.return,Xe=we;break e}Xe=N.return}}if(It=f,br(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(J,t)}catch{}u=!0}return u}finally{At=a,ui.transition=i}}return!1}function qg(t,i,a){i=aa(a,i),i=dg(t,i,1),t=Cr(t,i,1),i=Nn(),t!==null&&(Et(t,1,i),Gn(t,i))}function en(t,i,a){if(t.tag===3)qg(t,t,a);else for(;i!==null;){if(i.tag===3){qg(i,t,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Lr===null||!Lr.has(u))){t=aa(a,t),t=hg(i,t,1),i=Cr(i,t,1),t=Nn(),i!==null&&(Et(i,1,t),Gn(i,t));break}}i=i.return}}function WE(t,i,a){var u=t.pingCache;u!==null&&u.delete(i),i=Nn(),t.pingedLanes|=t.suspendedLanes&a,hn===t&&(_n&a)===a&&(cn===4||cn===3&&(_n&130023424)===_n&&500>Zt()-Md?ps(t,0):yd|=a),Gn(t,i)}function Kg(t,i){i===0&&((t.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var a=Nn();t=nr(t,i),t!==null&&(Et(t,i,a),Gn(t,a))}function XE(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Kg(t,a)}function $E(t,i){var a=0;switch(t.tag){case 13:var u=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Kg(t,a)}var Zg;Zg=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Bn.current)Vn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Vn=!1,IE(t,i,a);Vn=(t.flags&131072)!==0}else Vn=!1,qt&&(i.flags&1048576)!==0&&Cm(i,Cl,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Wl(t,i),t=i.pendingProps;var f=Qs(i,Tn.current);ra(i,a),f=Jf(null,i,u,t,f,a);var p=ed();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,zn(u)?(p=!0,Al(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,$f(i),f.updater=Hl,i.stateNode=f,f._reactInternals=i,ad(i,u,t,a),i=cd(null,i,u,!0,p,a)):(i.tag=0,qt&&p&&Ff(i),In(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Wl(t,i),t=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=qE(u),t=yi(u,t),f){case 0:i=ud(null,i,u,t,a);break e;case 1:i=Mg(null,i,u,t,a);break e;case 11:i=vg(null,i,u,t,a);break e;case 14:i=_g(null,i,u,yi(u.type,t),a);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),ud(t,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),Mg(t,i,u,f,a);case 3:e:{if(Eg(i),t===null)throw Error(n(387));u=i.pendingProps,p=i.memoizedState,f=p.element,km(t,i),Ul(i,u,null,a);var T=i.memoizedState;if(u=T.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=aa(Error(n(423)),i),i=Tg(t,i,u,a,f);break e}else if(u!==f){f=aa(Error(n(424)),i),i=Tg(t,i,u,a,f);break e}else for(Qn=Tr(i.stateNode.containerInfo.firstChild),jn=i,qt=!0,Si=null,a=Fm(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ta(),u===f){i=rr(t,i,a);break e}In(t,i,u,a)}i=i.child}return i;case 5:return Vm(i),t===null&&Bf(i),u=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,T=f.children,Pf(u,f)?T=null:p!==null&&Pf(u,p)&&(i.flags|=32),yg(t,i),In(t,i,T,a),i.child;case 6:return t===null&&Bf(i),null;case 13:return wg(t,i,a);case 4:return Yf(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=na(i,null,u,a):In(t,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),vg(t,i,u,f,a);case 7:return In(t,i,i.pendingProps,a),i.child;case 8:return In(t,i,i.pendingProps.children,a),i.child;case 12:return In(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,T=f.value,Gt(Dl,u._currentValue),u._currentValue=T,p!==null)if(xi(p.value,T)){if(p.children===f.children&&!Bn.current){i=rr(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var N=p.dependencies;if(N!==null){T=p.child;for(var k=N.firstContext;k!==null;){if(k.context===u){if(p.tag===1){k=ir(-1,a&-a),k.tag=2;var le=p.updateQueue;if(le!==null){le=le.shared;var Se=le.pending;Se===null?k.next=k:(k.next=Se.next,Se.next=k),le.pending=k}}p.lanes|=a,k=p.alternate,k!==null&&(k.lanes|=a),Wf(p.return,a,i),N.lanes|=a;break}k=k.next}}else if(p.tag===10)T=p.type===i.type?null:p.child;else if(p.tag===18){if(T=p.return,T===null)throw Error(n(341));T.lanes|=a,N=T.alternate,N!==null&&(N.lanes|=a),Wf(T,a,i),T=p.sibling}else T=p.child;if(T!==null)T.return=p;else for(T=p;T!==null;){if(T===i){T=null;break}if(p=T.sibling,p!==null){p.return=T.return,T=p;break}T=T.return}p=T}In(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,ra(i,a),f=oi(f),u=u(f),i.flags|=1,In(t,i,u,a),i.child;case 14:return u=i.type,f=yi(u,i.pendingProps),f=yi(u.type,f),_g(t,i,u,f,a);case 15:return xg(t,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),Wl(t,i),i.tag=1,zn(u)?(t=!0,Al(i)):t=!1,ra(i,a),cg(i,u,f),ad(i,u,f,a),cd(null,i,u,!0,t,a);case 19:return bg(t,i,a);case 22:return Sg(t,i,a)}throw Error(n(156,i.tag))};function jg(t,i){return is(t,i)}function YE(t,i,a,u){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,i,a,u){return new YE(t,i,a,u)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qE(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K)return 11;if(t===j)return 14}return 2}function Ur(t,i){var a=t.alternate;return a===null?(a=ci(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function tu(t,i,a,u,f,p){var T=2;if(u=t,typeof t=="function")Pd(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case O:return gs(a.children,f,p,i);case E:T=8,f|=8;break;case D:return t=ci(12,a,i,f|2),t.elementType=D,t.lanes=p,t;case ce:return t=ci(13,a,i,f),t.elementType=ce,t.lanes=p,t;case fe:return t=ci(19,a,i,f),t.elementType=fe,t.lanes=p,t;case W:return nu(a,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:T=10;break e;case G:T=9;break e;case K:T=11;break e;case j:T=14;break e;case $:T=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ci(T,a,i,f),i.elementType=t,i.type=u,i.lanes=p,i}function gs(t,i,a,u){return t=ci(7,t,u,i),t.lanes=a,t}function nu(t,i,a,u){return t=ci(22,t,u,i),t.elementType=W,t.lanes=a,t.stateNode={isHidden:!1},t}function Ld(t,i,a){return t=ci(6,t,null,i),t.lanes=a,t}function Dd(t,i,a){return i=ci(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function KE(t,i,a,u,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Id(t,i,a,u,f,p,T,N,k){return t=new KE(t,i,a,N,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ci(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$f(p),t}function ZE(t,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:u==null?null:""+u,children:t,containerInfo:i,implementation:a}}function Qg(t){if(!t)return Ar;t=t._reactInternals;e:{if(Dn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(zn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(zn(a))return Am(t,a,i)}return i}function Jg(t,i,a,u,f,p,T,N,k){return t=Id(a,u,!0,t,f,p,T,N,k),t.context=Qg(null),a=t.current,u=Nn(),f=Ir(a),p=ir(u,f),p.callback=i??null,Cr(a,p,f),t.current.lanes=f,Et(t,f,u),Gn(t,u),t}function iu(t,i,a,u){var f=i.current,p=Nn(),T=Ir(f);return a=Qg(a),i.context===null?i.context=a:i.pendingContext=a,i=ir(p,T),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=Cr(f,i,T),t!==null&&(Ti(t,f,T,p),Nl(t,f,T)),T}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function e0(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Nd(t,i){e0(t,i),(t=t.alternate)&&e0(t,i)}function jE(){return null}var t0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ud(t){this._internalRoot=t}su.prototype.render=Ud.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));iu(t,i,null,null)},su.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;hs(function(){iu(null,t,null,null)}),i[Qi]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var i=zt();t={blockedOn:null,target:t,priority:i};for(var a=0;a<yr.length&&i!==0&&i<yr[a].priority;a++);yr.splice(a,0,t),a===0&&Vp(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function n0(){}function QE(t,i,a,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var le=ru(T);p.call(le)}}var T=Jg(i,u,t,0,null,!1,!1,"",n0);return t._reactRootContainer=T,t[Qi]=T.current,Wa(t.nodeType===8?t.parentNode:t),hs(),T}for(;f=t.lastChild;)t.removeChild(f);if(typeof u=="function"){var N=u;u=function(){var le=ru(k);N.call(le)}}var k=Id(t,0,!1,null,null,!1,!1,"",n0);return t._reactRootContainer=k,t[Qi]=k.current,Wa(t.nodeType===8?t.parentNode:t),hs(function(){iu(i,k,a,u)}),k}function ou(t,i,a,u,f){var p=a._reactRootContainer;if(p){var T=p;if(typeof f=="function"){var N=f;f=function(){var k=ru(T);N.call(k)}}iu(i,T,t,f)}else T=QE(a,i,t,f,u);return ru(T)}Ot=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Lt(i.pendingLanes);a!==0&&(kn(i,a|1),Gn(i,Zt()),(It&6)===0&&(ua=Zt()+500,br()))}break;case 13:hs(function(){var u=nr(t,1);if(u!==null){var f=Nn();Ti(u,t,1,f)}}),Nd(t,1)}},Wt=function(t){if(t.tag===13){var i=nr(t,134217728);if(i!==null){var a=Nn();Ti(i,t,134217728,a)}Nd(t,134217728)}},vi=function(t){if(t.tag===13){var i=Ir(t),a=nr(t,i);if(a!==null){var u=Nn();Ti(a,t,i,u)}Nd(t,i)}},zt=function(){return At},_i=function(t,i){var a=At;try{return At=t,i()}finally{At=a}},nt=function(t,i,a){switch(i){case"input":if(Te(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==t&&u.form===t.form){var f=Tl(u);if(!f)throw Error(n(90));St(u),Te(u,f)}}}break;case"textarea":Vt(t,a);break;case"select":i=a.value,i!=null&&Ye(t,!!a.multiple,i,!1)}},ye=bd,ve=hs;var JE={usingClientEntryPoint:!1,Events:[Ya,Zs,Tl,me,Pe,bd]},oo={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ns(t),t===null?null:t.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||jE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{J=lu.inject(e1),Le=lu}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=JE,Un.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(i))throw Error(n(200));return ZE(t,i,null,a)},Un.createRoot=function(t,i){if(!Fd(t))throw Error(n(299));var a=!1,u="",f=t0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Id(t,1,!1,null,null,a,!1,u,f),t[Qi]=i.current,Wa(t.nodeType===8?t.parentNode:t),new Ud(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ns(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return hs(t)},Un.hydrate=function(t,i,a){if(!au(i))throw Error(n(200));return ou(null,t,i,!0,a)},Un.hydrateRoot=function(t,i,a){if(!Fd(t))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,f=!1,p="",T=t0;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=Jg(i,null,t,1,a??null,f,!1,p,T),t[Qi]=i.current,Wa(t),u)for(t=0;t<u.length;t++)a=u[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new su(i)},Un.render=function(t,i,a){if(!au(i))throw Error(n(200));return ou(null,t,i,!1,a)},Un.unmountComponentAtNode=function(t){if(!au(t))throw Error(n(40));return t._reactRootContainer?(hs(function(){ou(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1},Un.unstable_batchedUpdates=bd,Un.unstable_renderSubtreeIntoContainer=function(t,i,a,u){if(!au(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ou(t,i,a,!1,u)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Wd;function u0(){if(Wd)return cu.exports;Wd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),cu.exports=l0(),cu.exports}var Xd;function c0(){if(Xd)return lo;Xd=1;var s=u0();return lo.createRoot=s.createRoot,lo.hydrateRoot=s.hydrateRoot,lo}var $d=c0(),Oe=uu();const uo={MARKET:{label:"Market",dot:"#1d9d74"},"ON-CHAIN":{label:"On-chain",dot:"#2f7bc4"},RISK:{label:"Risk",dot:"#d05460"},SOCIAL:{label:"Social",dot:"#8f6fc2"}},Yd={MARKET:{bg:"rgba(191,255,234,0.8)",border:"#83b8c9"},"ON-CHAIN":{bg:"rgba(154,228,253,0.8)",border:"#2b6077"},RISK:{bg:"rgba(255,176,181,0.8)",border:"#ee6f78"},SOCIAL:{bg:"rgba(246,234,255,0.7)",border:"#ba95d6"}},co=[{id:"stake-idle-eth",title:"Your 17 ETH sits idle — wstETH pays 3.2% with no lockup",shortTitle:"Stake idle ETH",chips:[{kind:"ON-CHAIN"},{kind:"MARKET"},{kind:"SOCIAL"}],sources:[{kind:"ON-CHAIN",text:"wstETH has held within 5 bps of fair value for a year — same asset, plus a 3.2% drip, redeemable any time.",detail:{type:"bars",label:"wstETH/ETH deviation · 12m (bps)",bars:[{label:"J",value:4},{label:"F",value:3},{label:"M",value:5},{label:"A",value:2},{label:"M",value:4},{label:"J",value:3},{label:"J",value:2},{label:"A",value:3},{label:"S",value:4},{label:"O",value:2},{label:"N",value:3},{label:"D",value:2}],note:"Within 5 bps of fair value all year"}},{kind:"MARKET",text:"Idle ETH has underperformed staked ETH in every market regime over the trailing three years.",detail:{type:"chart",label:"Staked vs idle ETH · 3y (indexed)",points:[100,103,107,110,114,118,123,127,131,136,140,145],delta:"+3.2% APY",up:!0,stats:[{label:"Your idle ETH",value:"$50K"},{label:"Lockup",value:"None"},{label:"Yearly drip",value:"~$1.6K"}]}},{kind:"SOCIAL",text:"Lido remains the most integrated LST in DeFi; sentiment around wstETH collateral use keeps improving.",detail:{type:"tweets",tweets:[{name:"Lido",handle:"@LidoFinance",time:"1d",text:"wstETH is now live as collateral across 240+ integrations. The most composable LST keeps compounding.",likes:"1.1K",reposts:"260"},{name:"gas fee refugee",handle:"@gasfeerefugee",time:"3d",text:"holding raw ETH in 2026 is paying a 3.2% inconvenience fee to nobody. wrap it, forget it, check back in a year.",likes:"437",reposts:"81"}]}}]},{id:"park-stables",title:"Your $10K of stables earns nothing — Aave v3 pays 4.2%",shortTitle:"Park stables",chips:[{kind:"ON-CHAIN"},{kind:"MARKET"},{kind:"SOCIAL"}],sources:[{kind:"ON-CHAIN",text:"Aave v3 stablecoin supply has held above 4% for 45 days with utilisation steady — boring in the best way.",detail:{type:"bars",label:"Stable supply APY · 45d (%)",bars:[{label:"W1",value:4.1},{label:"W2",value:4.3},{label:"W3",value:4.2},{label:"W4",value:4.4},{label:"W5",value:4.3},{label:"W6",value:4.2},{label:"W7",value:4.2}],note:"Utilisation steady at 78%"}},{kind:"MARKET",text:"Idle cash quietly loses to everything. The deepest audited money market on mainnet fixes that in one click.",detail:{type:"chart",label:"Parked vs idle · 90d (%)",points:[0,.3,.7,1.1,1.4,1.8,2.2,2.5,2.9,3.3,3.6,4],delta:"+4.2% APY",up:!0,stats:[{label:"Your stables",value:"$10K"},{label:"Yearly drip",value:"~$420"},{label:"Withdrawal",value:"Any time"}]}},{kind:"SOCIAL",text:"Aave's quarterly risk reviews came back clean again — no governance or security flags this cycle.",detail:{type:"tweets",tweets:[{name:"Aave",handle:"@aave",time:"2d",text:"Quarterly risk review complete. No governance or security flags across v3 markets. Steady as she goes.",likes:"2.2K",reposts:"410"},{name:"stable studies",handle:"@stablestudies",time:"1d",text:"ranked every stablecoin venue by audits, depth and time-without-incident again this quarter. Aave v3 is still the boring pick, and boring is the point.",likes:"512",reposts:"97"}]}}]},{id:"trim-hype",title:"Trim HYPE by 15% — it has grown to 44% of your book",shortTitle:"Trim HYPE",chips:[{kind:"MARKET"},{kind:"ON-CHAIN"},{kind:"RISK"}],sources:[{kind:"MARKET",text:"HYPE is up 27% on your entry and now dominates the portfolio — a 15% trim locks the gain without leaving the trade.",detail:{type:"chart",label:"HYPE position vs entry · 90d ($K)",points:[303,296,310,318,312,325,334,348,341,356,371,385],delta:"+27% unrealised",up:!0,stats:[{label:"Position",value:"$385K"},{label:"Book share",value:"44%"},{label:"Trim frees",value:"$58K"}]}},{kind:"ON-CHAIN",text:"HYPE order books are the deepest they have been in 60 days — a 15% trim clears without moving the price.",detail:{type:"bars",label:"HYPE exit depth · 7d ($M)",bars:[{label:"M",value:3.1},{label:"T",value:3.4},{label:"W",value:3.9},{label:"T",value:4.2},{label:"F",value:4.8},{label:"S",value:5.3},{label:"S",value:5.6}],note:"Deepest books in 60 days"}},{kind:"RISK",text:"Concentration is the book's biggest open risk: HYPE plus kHYPE is 56% of everything you own.",detail:{type:"gauge",label:"Concentration risk",score:68,level:"Elevated",factors:[{label:"HYPE share",value:"44%"},{label:"With kHYPE",value:"56%"},{label:"Suggested trim",value:"15%"}]}}]}],hu={balanced:co,degen:[{id:"press-hype",title:"Press the HYPE breakout — funding is still paying longs",shortTitle:"Press HYPE",action:"swap",actionIcon:"/assets/imgIcon2.svg",tokenIcons:["/assets/tokens/hype.png"],chips:[{kind:"MARKET"},{kind:"ON-CHAIN"},{kind:"RISK"}],sources:[{kind:"MARKET",text:"HYPE cleared its high on 2.4x volume and funding hasn't flipped — the crowd is not positioned for this yet.",detail:{type:"chart",label:"HYPE · 7d",points:[28,29,31,30,33,35,34,37,40,43,42,46],delta:"+34% · ATH break",up:!0,stats:[{label:"Funding",value:"Neutral"},{label:"Vol vs avg",value:"2.4x"},{label:"Crowding",value:"Low"}]}},{kind:"ON-CHAIN",text:"Open interest is building while exchange balances drain — spot is being taken off the table under the move.",detail:{type:"bars",label:"HYPE open interest · 24h ($M)",bars:[{label:"00",value:51},{label:"04",value:54},{label:"08",value:58},{label:"12",value:61},{label:"16",value:64},{label:"20",value:67}],note:"OI +31% · exchange outflows accelerating"}},{kind:"RISK",text:"You are already 44% HYPE — pressing takes the book past half. This is conviction sizing, not diversification.",detail:{type:"gauge",label:"Chase risk",score:82,level:"High",factors:[{label:"Book share after",value:"52%"},{label:"Drawdown -19%",value:"Erases the gain"},{label:"Suggested stop",value:"-12%"}]}}]},{id:"loop-khype",title:"Loop your kHYPE to 3x — the spread clears 4.1% after borrow",shortTitle:"kHYPE loop",action:"stake",actionIcon:"/assets/imgIcon4.svg",tokenIcons:["/assets/tokens/khype.png"],chips:[{kind:"ON-CHAIN"},{kind:"RISK"},{kind:"SOCIAL"}],sources:[{kind:"ON-CHAIN",text:"The kHYPE staking-loop spread has widened for six straight weeks — 4.1% net of borrow at 3x.",detail:{type:"bars",label:"Loop spread after borrow · 8w (%)",bars:[{label:"W1",value:2.2},{label:"W2",value:2.5},{label:"W3",value:2.4},{label:"W4",value:2.9},{label:"W5",value:3.2},{label:"W6",value:3.5},{label:"W7",value:3.9},{label:"W8",value:4.1}],note:"Widest spread since launch"}},{kind:"RISK",text:"The loop stacks HYPE-correlated risk on a book that is already 56% HYPE-correlated. Liquidation sits at -24%.",detail:{type:"gauge",label:"Loop risk · 3x",score:84,level:"Extreme",factors:[{label:"Liquidation",value:"-24% HYPE"},{label:"Health factor",value:"1.22"},{label:"Correlates with",value:"56% of book"}]}},{kind:"SOCIAL",text:"kHYPE season talk is everywhere on CT — early-loop wallets are being watched and copied.",detail:{type:"tweets",tweets:[{name:"Kinetiq",handle:"@kinetiq_xyz",time:"4h",text:"kHYPE TVL crossed $400M this week. The loop meta is just getting started — mind your health factors out there.",likes:"980",reposts:"214"},{name:"hyperliquid maxi",handle:"@hlmaxi",time:"1h",text:"every cycle has one carry trade everyone brags about at dinner. this cycle it's the kHYPE loop. 4% real spread while it lasts.",likes:"1.6K",reposts:"390"}]}}]},{id:"hype-sol-lp",title:"Seed a HYPE/SOL pool — fees are annualising at 96%",shortTitle:"HYPE/SOL LP",action:"liquidity",actionIcon:"/assets/imgIcon3.svg",tokenIcons:["/assets/tokens/hype.png","/assets/tokens/sol.png"],chips:[{kind:"ON-CHAIN"},{kind:"MARKET"},{kind:"RISK"}],sources:[{kind:"ON-CHAIN",text:"Breakout volume is being paid straight to LPs: the pool's fee run-rate has tripled in a week.",detail:{type:"bars",label:"Pool fees annualised · 7d (%)",bars:[{label:"M",value:31},{label:"T",value:38},{label:"W",value:52},{label:"T",value:61},{label:"F",value:74},{label:"S",value:89},{label:"S",value:96}],note:"Fee run-rate 3x in a week"}},{kind:"MARKET",text:"You hold both legs already — seeding the pool converts breakout churn into yield without buying anything.",detail:{type:"chart",label:"HYPE/SOL volume · 7d ($M)",points:[18,21,19,24,28,27,33,38,36,44,51,58],delta:"+2.2x avg volume",up:!0,stats:[{label:"You hold",value:"Both legs"},{label:"Buy needed",value:"None"},{label:"Suggested size",value:"$15K"}]}},{kind:"RISK",text:"If HYPE keeps running, IL will eat part of the upside — this position trades moonshot for cash flow.",detail:{type:"gauge",label:"Degen LP risk",score:76,level:"High",factors:[{label:"IL if HYPE +50%",value:"-8.2%"},{label:"Fresh liquidity",value:"38% < 7d"},{label:"Trade-off",value:"Upside → fees"}]}}]},{id:"btc-fart-flip",title:"Rotate the sleepy BTC stack into the FART flush",shortTitle:"BTC → FART",action:"rebalance",actionIcon:"/assets/imgIcon1.svg",tokenIcons:["/assets/tokens/btc.png","/assets/tokens/fart.png"],chips:[{kind:"SOCIAL"},{kind:"MARKET"},{kind:"RISK"}],sources:[{kind:"SOCIAL",text:"FART flushed 18% into its unlock and the mention curve just turned back up — the crowd smells a bounce.",detail:{type:"tweets",tweets:[{name:"unlock watcher",handle:"@unlockwatcher",time:"2h",text:"FART unlock is fully absorbed. sellers done, mentions curling back up, funding reset to flat. textbook flush-and-reload if you believe in textbooks for memecoins.",likes:"870",reposts:"196"},{name:"trench radar",handle:"@trenchradar",time:"40m",text:"FART bottom callers are out in force. they're early or they're right, and on memes those are usually the same thing.",likes:"1.2K",reposts:"280"}]}},{kind:"MARKET",text:"Your BTC has moved 1.2% in a month. In degen terms it is furniture — this trade puts it to work.",detail:{type:"chart",label:"FART · 14d",points:[31,30,29,27,25.5,24,23.2,24.1,23.8,24.6,25.2,25.8],delta:"-18% flush, basing",up:!1,stats:[{label:"Your BTC",value:"$30K"},{label:"BTC 30d move",value:"1.2%"},{label:"Unlock",value:"Absorbed"}]}},{kind:"RISK",text:"This swaps the book's only boring asset for its most volatile one. Only size what can go to zero.",detail:{type:"gauge",label:"Rotation risk",score:93,level:"Extreme",factors:[{label:"Meme half-life",value:"Days"},{label:"Book stability",value:"Loses its anchor"},{label:"Loss tolerance",value:"Total"}]}}]}],saver:[{id:"park-stables",title:"Your $10K of stables earns nothing — Aave v3 pays 4.2%",shortTitle:"Park stables",action:"stake",actionIcon:"/assets/imgIcon4.svg",tokenIcons:["/assets/tokens/usdc.png","/assets/tokens/usdt.png"],chips:[{kind:"ON-CHAIN"},{kind:"MARKET"},{kind:"SOCIAL"}],sources:[{kind:"ON-CHAIN",text:"Aave v3 stablecoin supply has held above 4% for 45 days with utilisation steady — boring in the best way.",detail:{type:"bars",label:"Stable supply APY · 45d (%)",bars:[{label:"W1",value:4.1},{label:"W2",value:4.3},{label:"W3",value:4.2},{label:"W4",value:4.4},{label:"W5",value:4.3},{label:"W6",value:4.2},{label:"W7",value:4.2}],note:"Utilisation steady at 78%"}},{kind:"MARKET",text:"Idle cash quietly loses to everything. The deepest audited money market on mainnet fixes that in one click.",detail:{type:"chart",label:"Parked vs idle · 90d (%)",points:[0,.3,.7,1.1,1.4,1.8,2.2,2.5,2.9,3.3,3.6,4],delta:"+4.2% APY",up:!0,stats:[{label:"Your stables",value:"$10K"},{label:"Yearly drip",value:"~$420"},{label:"Withdrawal",value:"Any time"}]}},{kind:"SOCIAL",text:"Aave's quarterly risk reviews came back clean again — no governance or security flags this cycle.",detail:{type:"tweets",tweets:[{name:"Aave",handle:"@aave",time:"2d",text:"Quarterly risk review complete. No governance or security flags across v3 markets. Steady as she goes.",likes:"2.2K",reposts:"410"},{name:"stable studies",handle:"@stablestudies",time:"1d",text:"ranked every stablecoin venue by audits, depth and time-without-incident again this quarter. Aave v3 is still the boring pick, and boring is the point.",likes:"512",reposts:"97"}]}}]},{id:"harvest-hype",title:"Harvest the HYPE run — move $40K of profit into USDC",shortTitle:"Harvest HYPE",action:"rebalance",actionIcon:"/assets/imgIcon1.svg",tokenIcons:["/assets/tokens/hype.png","/assets/tokens/usdc.png"],chips:[{kind:"RISK"},{kind:"MARKET"},{kind:"ON-CHAIN"}],sources:[{kind:"RISK",text:"Nearly half the portfolio rides one token. Harvesting $40K banks most of the gain and cuts the swing.",detail:{type:"gauge",label:"Portfolio swing risk",score:71,level:"Elevated",factors:[{label:"HYPE share",value:"44%"},{label:"Daily swing",value:"±$19K"},{label:"After harvest",value:"±$12K"}]}},{kind:"MARKET",text:"HYPE is stretched 22% above its 30-day average — harvests into strength beat harvests into panic.",detail:{type:"chart",label:"HYPE vs 30d average (%)",points:[2,4,3,6,9,8,12,15,14,18,20,22],delta:"+22% extended",up:!0,stats:[{label:"Unrealised",value:"+$82K"},{label:"Harvest",value:"$40K"},{label:"Keeps riding",value:"$345K"}]}},{kind:"ON-CHAIN",text:"The largest HYPE wallets have been quietly trimming into this strength for a week. Follow the smart exits.",detail:{type:"bars",label:"Top-100 wallet net flow · 7d ($M)",bars:[{label:"M",value:1.8},{label:"T",value:2.4},{label:"W",value:2.1},{label:"T",value:3},{label:"F",value:3.6},{label:"S",value:4.1},{label:"S",value:4.4}],note:"Net distribution, 7 straight days"}}]},{id:"jito-second-stack",title:"Put the second SOL stack to work — Jito nets 7.1% with MEV",shortTitle:"Stake SOL",action:"stake",actionIcon:"/assets/imgIcon4.svg",tokenIcons:["/assets/tokens/sol.png"],chips:[{kind:"ON-CHAIN"},{kind:"MARKET"},{kind:"SOCIAL"}],sources:[{kind:"ON-CHAIN",text:"Your $175K SOL stack earns nothing while Jito's MEV-boosted yield has climbed to 7.1% net.",detail:{type:"bars",label:"Jito net yield · 8w (%)",bars:[{label:"W1",value:6.4},{label:"W2",value:6.5},{label:"W3",value:6.6},{label:"W4",value:6.8},{label:"W5",value:6.7},{label:"W6",value:6.9},{label:"W7",value:7},{label:"W8",value:7.1}],note:"MEV adds +0.8% over vanilla staking"}},{kind:"MARKET",text:"jitoSOL has stayed within 10 bps of peg for six months — the yield comes with exit liquidity intact.",detail:{type:"chart",label:"jitoSOL/SOL peg · 6m",points:[99.96,99.98,100.01,99.97,100.02,99.99,100,99.98,100.01,100,99.99,100.02],delta:"±10 bps · 6m",up:!0,stats:[{label:"Your stack",value:"$175K"},{label:"Yearly drip",value:"~$12.4K"},{label:"Liquidity",value:"Instant"}]}},{kind:"SOCIAL",text:"Jito is still the default recommendation across validator and research communities — no flags this quarter.",detail:{type:"tweets",tweets:[{name:"Jito",handle:"@jito_sol",time:"8h",text:"MEV rewards hit another quarterly record. jitoSOL holders captured 0.8% over vanilla staking, fully liquid the whole way.",likes:"740",reposts:"132"},{name:"sol validator notes",handle:"@laine_sa",time:"1d",text:"If you're staking SOL and not capturing MEV you're leaving ~80bps on the table. Jito remains the default recommendation.",likes:"301",reposts:"45"}]}}]},{id:"fart-to-btc",title:"Sweep the FART bag into BTC before the meme tide turns",shortTitle:"FART → BTC",action:"swap",actionIcon:"/assets/imgIcon2.svg",tokenIcons:["/assets/tokens/fart.png","/assets/tokens/btc.png"],chips:[{kind:"MARKET"},{kind:"SOCIAL"},{kind:"RISK"}],sources:[{kind:"MARKET",text:"FART against BTC is rolling over — the flyer did its job, and BTC is where finished trades go to rest.",detail:{type:"chart",label:"FART/BTC ratio · 30d",points:[1,1.02,.99,.97,.98,.95,.93,.94,.91,.89,.9,.87],delta:"-13% vs BTC",up:!1,stats:[{label:"Your FART",value:"$22.7K"},{label:"Realised if swept",value:"+$6.1K"},{label:"Destination",value:"BTC"}]}},{kind:"SOCIAL",text:"Attention has moved on: FART mentions are half their peak and the accounts that pumped it are pumping elsewhere.",detail:{type:"tweets",tweets:[{name:"meme velocity",handle:"@memevelocity",time:"5h",text:"FART mentions -52% from the weekly peak. attention is rotating and the exit doors get smaller from here.",likes:"690",reposts:"150"},{name:"trench survivor",handle:"@trenchsurvivor",time:"9h",text:"you don't sell a meme because it's over. you sell because everyone else is about to realise it's over.",likes:"2.3K",reposts:"510"}]}},{kind:"RISK",text:"After the sweep the book's most volatile position becomes its calmest — residual risk drops to Low.",detail:{type:"gauge",label:"Residual risk after sweep",score:24,level:"Low",factors:[{label:"Volatility removed",value:"3.4x book avg"},{label:"BTC 30d vol",value:"0.4x book avg"},{label:"Regret risk",value:"If FART 2x's"}]}}]}]},pu="#1d9d74",fo="#d05460",qd=["#8f6fc2","#2f7bc4","#1d9d74","#c4841d"];function f0({points:s,up:e}){const l=Math.min(...s),d=Math.max(...s)-l||1,h=M=>3+M/(s.length-1)*306,m=M=>53-(M-l)/d*50,_=s.map((M,w)=>`${h(w).toFixed(1)},${m(M).toFixed(1)}`).join(" "),x=e?pu:fo,g=`spark-${e?"up":"down"}`;return _e.jsxs("svg",{viewBox:"0 0 312 56",width:"100%",height:56,fill:"none",children:[_e.jsx("defs",{children:_e.jsxs("linearGradient",{id:g,x1:"0",y1:"0",x2:"0",y2:"1",children:[_e.jsx("stop",{offset:"0",stopColor:x,stopOpacity:"0.28"}),_e.jsx("stop",{offset:"1",stopColor:x,stopOpacity:"0"})]})}),[.25,.5,.75].map(M=>_e.jsx("line",{x1:3,x2:309,y1:56*M,y2:56*M,stroke:"rgba(0,0,0,0.06)",strokeWidth:"1"},M)),_e.jsx("polygon",{points:`3,53 ${_} 309,53`,fill:`url(#${g})`}),_e.jsx("polyline",{points:_,stroke:x,strokeWidth:"1.6",strokeLinejoin:"round",strokeLinecap:"round"}),_e.jsx("circle",{cx:h(s.length-1),cy:m(s[s.length-1]),r:"2.4",fill:x})]})}function d0({kind:s,detail:e}){const n=uo[s].dot;if(e.type==="chart")return _e.jsxs("div",{className:"flex flex-col gap-1.5",children:[_e.jsxs("div",{className:"flex items-baseline justify-between",children:[_e.jsx("span",{className:"font-mono text-[8px] uppercase tracking-[0.16em] text-black/40",children:e.label}),_e.jsx("span",{className:"font-mono text-[9px] uppercase tracking-[0.1em]",style:{color:e.up?pu:fo},children:e.delta})]}),_e.jsx(f0,{points:e.points,up:e.up}),_e.jsx("div",{className:"flex divide-x divide-black/10 rounded-[8px] border border-black/10 bg-white/50",children:e.stats.map(o=>_e.jsxs("div",{className:"flex flex-1 flex-col gap-0.5 px-2 py-1.5",children:[_e.jsx("span",{className:"font-mono text-[7px] uppercase tracking-[0.14em] text-black/35",children:o.label}),_e.jsx("span",{className:"text-[10px] leading-3 text-[#191b26]",children:o.value})]},o.label))})]});if(e.type==="tweets")return _e.jsx("div",{className:"flex flex-col gap-1.5",children:e.tweets.map((o,l)=>_e.jsxs("div",{className:"rounded-[10px] border border-black/10 bg-white/55 p-2",children:[_e.jsxs("div",{className:"flex items-center gap-1.5",children:[_e.jsx("span",{className:"grid size-5 shrink-0 place-items-center rounded-full text-[8px] font-medium text-white",style:{background:qd[l%qd.length]},children:o.name.slice(0,1).toUpperCase()}),_e.jsx("span",{className:"truncate text-[10px] font-medium text-[#191b26]",children:o.name}),_e.jsxs("span",{className:"truncate font-mono text-[8px] text-black/35",children:[o.handle," · ",o.time]})]}),_e.jsx("p",{className:"pt-1 text-[10.5px] leading-[14px] text-[#3f3f46]",children:o.text}),_e.jsxs("div",{className:"flex gap-3 pt-1 font-mono text-[8px] text-black/35",children:[_e.jsxs("span",{children:["♥ ",o.likes]}),_e.jsxs("span",{children:["⇄ ",o.reposts]})]})]},o.handle))});if(e.type==="bars"){const o=e.bars.map(m=>m.value),l=Math.max(...o)||1,c=Math.min(...o),d=c-Math.max(l-c,l*.08),h=m=>(m-d)/(l-d||1);return _e.jsxs("div",{className:"flex flex-col gap-1.5",children:[_e.jsx("span",{className:"font-mono text-[8px] uppercase tracking-[0.16em] text-black/40",children:e.label}),_e.jsx("div",{className:"flex h-[52px] items-end gap-1",children:e.bars.map((m,_)=>_e.jsxs("div",{className:"flex flex-1 flex-col items-center gap-0.5",children:[_e.jsx("div",{className:"w-full rounded-t-[3px]",style:{height:`${Math.max(6,h(m.value)*44)}px`,background:n,opacity:.35+.65*h(m.value)}}),_e.jsx("span",{className:"font-mono text-[7px] uppercase text-black/35",children:m.label})]},m.label+_))}),_e.jsx("span",{className:"font-mono text-[8px] uppercase tracking-[0.12em] text-black/45",children:e.note})]})}const r=Math.min(100,Math.max(0,e.score));return _e.jsxs("div",{className:"flex flex-col gap-2",children:[_e.jsxs("div",{className:"flex items-baseline justify-between",children:[_e.jsx("span",{className:"font-mono text-[8px] uppercase tracking-[0.16em] text-black/40",children:e.label}),_e.jsxs("span",{className:"font-mono text-[9px] uppercase tracking-[0.1em]",style:{color:fo},children:[e.level," · ",e.score]})]}),_e.jsx("div",{className:"relative h-[6px] rounded-full",style:{background:`linear-gradient(90deg, ${pu} 0%, #c4841d 55%, ${fo} 100%)`,opacity:.85},children:_e.jsx("span",{className:"absolute top-1/2 size-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[#191b26] shadow-[0_1px_3px_rgba(0,0,0,0.4)]",style:{left:`${r}%`}})}),_e.jsx("div",{className:"flex flex-col divide-y divide-black/[0.07] rounded-[8px] border border-black/10 bg-white/50 px-2",children:e.factors.map(o=>_e.jsxs("div",{className:"flex items-center justify-between py-1",children:[_e.jsx("span",{className:"font-mono text-[8px] uppercase tracking-[0.12em] text-black/40",children:o.label}),_e.jsx("span",{className:"text-[10px] text-[#191b26]",children:o.value})]},o.label))})]})}const Or=88,Kd=432,Zd=1080;function h0({source:s}){const[e,n]=Oe.useState(s),r=Oe.useRef(null),[o,l]=Oe.useState(0);return Oe.useLayoutEffect(()=>{s?n(s):l(0)},[s]),Oe.useLayoutEffect(()=>{s&&r.current&&l(r.current.scrollHeight)},[s,e]),Oe.useEffect(()=>{if(s||!e)return;const c=window.setTimeout(()=>n(null),500);return()=>window.clearTimeout(c)},[s,e]),_e.jsx("div",{style:{height:o,overflow:"hidden",transition:"height 560ms cubic-bezier(0.22,1,0.36,1)"},children:e&&_e.jsxs("div",{ref:r,className:"rise flex flex-col gap-2 pt-2",style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(-8px)",transition:"opacity 340ms ease, transform 480ms cubic-bezier(0.22,1,0.36,1)"},children:[_e.jsx("p",{className:"text-[11px] leading-4 text-[#3f3f46]",children:e.text}),e.detail&&_e.jsx(d0,{kind:e.kind,detail:e.detail})]},e.kind)})}function jd({insight:s,slot:e,dissolving:n,onDismiss:r,onExecute:o}){const[l,c]=Oe.useState("enter"),[d,h]=Oe.useState(0),[m,_]=Oe.useState(null),x=Oe.useRef(null),g=Oe.useRef(null),[M,w]=Oe.useState(69),R=d>=s.title.length;Oe.useLayoutEffect(()=>{var E;const L=x.current;if(!L)return;const F=(((E=g.current)==null?void 0:E.scrollHeight)??136)+2,b=Math.min(F/2,72);if(w(b),e>0){c("open"),L.animate([{opacity:0,transform:"translateY(-14px) scale(0.96)",easing:"cubic-bezier(0.22, 1, 0.36, 1)"},{opacity:1,transform:"translateY(0px) scale(1)"}],{duration:640});return}const I=(F-Or)/2,C=L.animate([{offset:0,width:`${Or}px`,height:`${Or}px`,borderRadius:`${Or/2}px`,transform:`translateY(${I+20}px) scale(0.55)`,opacity:0,backgroundColor:"rgba(250,250,250,0.1)",easing:"cubic-bezier(0.3, 1.05, 0.45, 1)"},{offset:.175,opacity:1},{offset:.275,width:`${Or}px`,height:`${Or}px`,borderRadius:`${Or/2}px`,transform:`translateY(${I}px) scale(1)`,backgroundColor:"rgba(250,250,250,0.1)",easing:"cubic-bezier(0.55, 0, 0.15, 1)"},{offset:1,width:`${Kd}px`,height:`${F}px`,borderRadius:`${b}px`,transform:"translateY(0px) scale(1)",opacity:1,backgroundColor:"rgba(250,250,250,0.78)"}],{duration:Zd,fill:"forwards"});C.onfinish=()=>C.cancel();const O=window.setTimeout(()=>c("open"),Zd-260);return()=>{C.cancel(),window.clearTimeout(O)}},[]),Oe.useEffect(()=>{if(l!=="open"||R||e!==0)return;const L=window.setInterval(()=>h(F=>F+1),24);return()=>window.clearInterval(L)},[l,R,e]),Oe.useEffect(()=>{e>0&&_(null)},[e]);const S=n||e>3,v=m?s.sources.find(L=>L.kind===m):null;return _e.jsx("div",{className:"absolute left-1/2",style:{top:0,transform:`translate(-50%, ${S?e*22+44:e*22}px) scale(${S?.9:1-e*.03})`,opacity:S?0:1-e*.18,filter:`blur(${S?8:e*1.2}px)`,zIndex:40-e,transition:"transform 750ms cubic-bezier(0.22,1,0.36,1), opacity 750ms ease, filter 750ms ease",pointerEvents:e===0&&!S&&l==="open"?"auto":"none"},children:_e.jsx("div",{ref:x,className:"overflow-hidden border border-white/80 shadow-[0_10px_36px_rgba(15,20,32,0.28)] backdrop-blur-[22px]",style:{width:Kd,height:"auto",borderRadius:M,backgroundColor:`rgba(250,250,250,${m?.94:.78})`,transition:"background-color 400ms ease",opacity:l==="open"?1:0},children:_e.jsxs("div",{ref:g,className:"w-[430px] px-8 py-3.5",style:{opacity:l==="open"&&e===0?1:0,transform:l==="open"?"translateY(0)":"translateY(6px)",transition:"opacity 420ms ease, transform 420ms cubic-bezier(0.22,1,0.36,1)"},children:[_e.jsxs("div",{className:"flex items-center justify-between pb-1.5",children:[_e.jsxs("span",{className:"font-mono text-[8px] uppercase tracking-[0.2em] text-black/35",children:["insight_",s.id.slice(0,6)]}),_e.jsx("button",{onClick:r,title:"Dismiss",className:"grid size-5 cursor-pointer place-items-center rounded-full text-black/35 transition-colors hover:bg-black/10 hover:text-black/70",children:_e.jsx("svg",{viewBox:"0 0 10 10",width:"9",height:"9",fill:"none",children:_e.jsx("path",{d:"m1.5 1.5 7 7m0-7-7 7",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round"})})})]}),_e.jsxs("p",{className:"min-h-[20px] text-[14px] leading-5 text-[#191b26]",children:[s.title.slice(0,d),!R&&_e.jsx("span",{className:"animate-pulse text-black/40",children:"▍"})]}),_e.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 pt-2.5",style:{opacity:R?1:0,transition:"opacity 400ms ease"},children:[s.chips.map(({kind:L})=>{const F=m===L;return _e.jsxs("button",{"data-chip":L,onClick:()=>_(b=>b===L?null:L),className:"flex cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-medium text-[#3a3d47] transition-all duration-200 hover:-translate-y-px",style:{background:F?Yd[L].bg:"rgba(255,255,255,0.6)",border:`1px solid ${F?Yd[L].border:"rgba(15,20,32,0.1)"}`,boxShadow:F?"inset 0 1px 0 rgba(255,255,255,0.7)":"inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(15,20,32,0.07)"},children:[_e.jsx("span",{className:"size-[7px] rounded-full",style:{background:uo[L].dot,boxShadow:`0 0 6px ${uo[L].dot}66`}}),uo[L].label]},L)}),_e.jsx("button",{onClick:o,className:"btn-obsidian ml-auto h-8 px-4 text-[12px] font-medium",children:"Execute"})]}),_e.jsx(h0,{source:v??null})]})})})}const or=1080,p0=.33,m0=1.15,fa=co[0],da=co[2],g0=co[1],mu="cubic-bezier(0.22, 1, 0.36, 1)";class gu extends Error{}const xn=(s,e)=>new Promise((n,r)=>{if(e.aborted)return r(new gu);const o=window.setTimeout(()=>{e.removeEventListener("abort",l),n()},s),l=()=>{window.clearTimeout(o),r(new gu)};e.addEventListener("abort",l,{once:!0})});function v0({video:s}){const[e,n]=Oe.useState([]),[r,o]=Oe.useState(!1),[l,c]=Oe.useState(0),[d,h]=Oe.useState(1),m=Oe.useRef(null),_=Oe.useRef(null),x=Oe.useRef(null),g=Oe.useRef(null),M=Oe.useRef(null),w=Oe.useRef(new Map),R=Oe.useRef({x:or*.78,y:or*.82});return Oe.useEffect(()=>{const S=m.current;if(!S)return;const v=()=>h(S.clientWidth/or);v();const L=new ResizeObserver(v);return L.observe(S),()=>L.disconnect()},[]),Oe.useEffect(()=>{const S=m.current;if(!S)return;const v=$=>`translate(${$.x}px, ${$.y}px)`,L=($,W=300)=>{var z;(z=x.current)==null||z.animate([{opacity:$?1:0}],{duration:W,fill:"forwards",easing:"ease"})},F=async($,W,z)=>{const re=x.current;re&&(re.animate([{transform:v(R.current)},{transform:v($)}],{duration:W,easing:mu,fill:"forwards"}),R.current=$,await xn(W,z))},b=$=>{const W=_.current.getBoundingClientRect(),z=$.getBoundingClientRect(),re=W.width/or;return{x:(z.left+z.width/2-W.left)/re,y:(z.top+z.height/2-W.top)/re}},I=($,W)=>{var z;return((z=w.current.get($))==null?void 0:z.querySelector(`[data-chip="${W}"]`))??null},C=$=>{var W;return((W=w.current.get($))==null?void 0:W.querySelector('[title="Dismiss"]'))??null},O=async($,W)=>{const z=x.current;if(!$||!z)return;z.animate([{transform:`${v(R.current)} scale(1)`},{transform:`${v(R.current)} scale(0.86)`,offset:.28},{transform:`${v(R.current)} scale(1)`}],{duration:320,easing:mu}),await xn(95,W),$.click();const re=g.current;if(re){const ae=document.createElement("span");ae.className="lab-live-ripple",ae.style.left=`${R.current.x}px`,ae.style.top=`${R.current.y}px`,re.appendChild(ae),ae.animate([{width:"10px",height:"10px",opacity:.7},{width:"44px",height:"44px",opacity:0}],{duration:460,easing:mu}).finished.finally(()=>ae.remove())}await xn(225,W)},E=async($,W,z)=>{$&&await F(b($),W,z)},D=async $=>{for(;;)n([]),o(!1),c(W=>W+1),R.current={x:or*.78,y:or*.82},x.current&&(x.current.getAnimations().forEach(W=>W.cancel()),x.current.style.opacity="0",x.current.style.transform=v(R.current)),await xn(600,$),n([fa]),await xn(2600,$),n(W=>W.length?[...W,da]:W),await xn(1500,$),L(!0),await E(I(fa.id,"ON-CHAIN"),950,$),await xn(140,$),await O(I(fa.id,"ON-CHAIN"),$),await xn(2900,$),await E(C(fa.id),650,$),await xn(120,$),await O(C(fa.id),$),await xn(1400,$),n(W=>W.length?[...W,g0]:W),await xn(1800,$),await E(I(da.id,"RISK"),950,$),await xn(140,$),await O(I(da.id,"RISK"),$),await xn(3100,$),await E(I(da.id,"MARKET"),700,$),await xn(120,$),await O(I(da.id,"MARKET"),$),await xn(3100,$),L(!1,400),await F({x:R.current.x+170,y:R.current.y+210},700,$),o(!0),await xn(1500,$)};let H=null;const G=()=>{var $;H||(H=new AbortController,($=M.current)==null||$.play().catch(()=>{}),D(H.signal).catch(W=>{if(!(W instanceof gu))throw W}))},K=()=>{var $;H==null||H.abort(),H=null,($=M.current)==null||$.pause(),n([]),o(!1)};let ce=!1;const fe=new IntersectionObserver(([$])=>{ce=$.isIntersecting,ce&&!document.hidden?G():K()},{threshold:.3});fe.observe(S);const j=()=>{document.hidden?K():ce&&G()};return document.addEventListener("visibilitychange",j),()=>{fe.disconnect(),document.removeEventListener("visibilitychange",j),K()}},[]),_e.jsxs("div",{ref:m,className:"lab-live-frame",children:[_e.jsx("video",{ref:M,src:s,muted:!0,loop:!0,playsInline:!0,preload:"metadata"}),_e.jsxs("div",{ref:_,className:"lab-live-stage",style:{width:or,height:or,transform:`scale(${d})`},children:[_e.jsx("div",{style:{position:"absolute",left:"50%",top:`${p0*100}%`,transform:`translateX(-50%) scale(${m0})`,transformOrigin:"top center",zIndex:10},children:e.map((S,v)=>_e.jsx("div",{ref:L=>{L?w.current.set(S.id,L):w.current.delete(S.id)},children:_e.jsx(jd,{insight:S,slot:v,dissolving:r,onDismiss:()=>n(L=>L.filter(F=>F.id!==S.id)),onExecute:()=>{}})},`${l}-${S.id}`))}),_e.jsx("div",{ref:g,className:"lab-live-ripples"}),_e.jsx("div",{ref:x,className:"lab-live-cursor",style:{opacity:0},children:_e.jsx("svg",{viewBox:"0 0 14 19",width:"20",height:"27",children:_e.jsx("path",{d:"M1 1 L1 15.5 L4.9 12.2 L7.4 17.6 L10.1 16.4 L7.6 11 L13 10.6 Z",fill:"#fff",stroke:"rgba(10,12,18,0.85)",strokeWidth:"1.1",strokeLinejoin:"round"})})})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const vu="185",_0=0,Qd=1,x0=2,ho=1,S0=2,ha=3,lr=0,Rn=1,zi=2,Vi=0,vs=1,_u=2,Jd=3,eh=4,y0=5,kr=100,M0=101,E0=102,T0=103,w0=104,A0=200,b0=201,R0=202,C0=203,xu=204,Su=205,P0=206,L0=207,D0=208,I0=209,N0=210,U0=211,F0=212,O0=213,k0=214,yu=0,Mu=1,Eu=2,_s=3,Tu=4,wu=5,Au=6,bu=7,th=0,B0=1,z0=2,wi=0,nh=1,ih=2,rh=3,sh=4,ah=5,oh=6,lh=7,uh=300,Br=301,xs=302,Ru=303,Cu=304,po=306,Pu=1e3,Hi=1001,Lu=1002,mn=1003,V0=1004,mo=1005,Sn=1006,Du=1007,zr=1008,ei=1009,ch=1010,fh=1011,pa=1012,Iu=1013,Ai=1014,bi=1015,Gi=1016,Nu=1017,Uu=1018,ma=1020,dh=35902,hh=35899,ph=1021,mh=1022,fi=1023,Wi=1026,Vr=1027,gh=1028,Fu=1029,Hr=1030,Ou=1031,ku=1033,go=33776,vo=33777,_o=33778,xo=33779,Bu=35840,zu=35841,Vu=35842,Hu=35843,Gu=36196,Wu=37492,Xu=37496,$u=37488,Yu=37489,So=37490,qu=37491,Ku=37808,Zu=37809,ju=37810,Qu=37811,Ju=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,ac=37819,oc=37820,lc=37821,uc=36492,cc=36494,fc=36495,dc=36283,hc=36284,yo=36285,pc=36286,H0=3200,vh=0,G0=1,ur="",ti="srgb",Mo="srgb-linear",Eo="linear",kt="srgb",Ss=7680,_h=519,W0=512,X0=513,$0=514,mc=515,Y0=516,q0=517,gc=518,K0=519,xh=35044,Sh="300 es",Ri=2e3,To=2001;function Z0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function wo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function j0(){const s=wo("canvas");return s.style.display="block",s}const yh={};function Mh(...s){const e="THREE."+s.shift();console.log(e,...s)}function Eh(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function dt(...s){s=Eh(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Dt(...s){s=Eh(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function ys(...s){const e=s.join(" ");e in yh||(yh[e]=!0,dt(...s))}function Q0(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}const J0={[yu]:Mu,[Eu]:Au,[Tu]:bu,[_s]:wu,[Mu]:yu,[Au]:Eu,[bu]:Tu,[wu]:_s};class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vc=Math.PI/180,_c=180/Math.PI;function ga(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function Rt(s,e,n){return Math.max(e,Math.min(n,s))}function ev(s,e){return(s%e+e)%e}function xc(s,e,n){return(1-n)*s+n*e}function va(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Fn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ef=class ef{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ef.prototype.isVector2=!0;let Nt=ef;class Ms{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,c,d){let h=r[o+0],m=r[o+1],_=r[o+2],x=r[o+3],g=l[c+0],M=l[c+1],w=l[c+2],R=l[c+3];if(x!==R||h!==g||m!==M||_!==w){let S=h*g+m*M+_*w+x*R;S<0&&(g=-g,M=-M,w=-w,R=-R,S=-S);let v=1-d;if(S<.9995){const L=Math.acos(S),F=Math.sin(L);v=Math.sin(v*L)/F,d=Math.sin(d*L)/F,h=h*v+g*d,m=m*v+M*d,_=_*v+w*d,x=x*v+R*d}else{h=h*v+g*d,m=m*v+M*d,_=_*v+w*d,x=x*v+R*d;const L=1/Math.sqrt(h*h+m*m+_*_+x*x);h*=L,m*=L,_*=L,x*=L}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x}static multiplyQuaternionsFlat(e,n,r,o,l,c){const d=r[o],h=r[o+1],m=r[o+2],_=r[o+3],x=l[c],g=l[c+1],M=l[c+2],w=l[c+3];return e[n]=d*w+_*x+h*M-m*g,e[n+1]=h*w+_*g+m*x-d*M,e[n+2]=m*w+_*M+d*g-h*x,e[n+3]=_*w-d*x-h*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),_=d(o/2),x=d(l/2),g=h(r/2),M=h(o/2),w=h(l/2);switch(c){case"XYZ":this._x=g*_*x+m*M*w,this._y=m*M*x-g*_*w,this._z=m*_*w+g*M*x,this._w=m*_*x-g*M*w;break;case"YXZ":this._x=g*_*x+m*M*w,this._y=m*M*x-g*_*w,this._z=m*_*w-g*M*x,this._w=m*_*x+g*M*w;break;case"ZXY":this._x=g*_*x-m*M*w,this._y=m*M*x+g*_*w,this._z=m*_*w+g*M*x,this._w=m*_*x-g*M*w;break;case"ZYX":this._x=g*_*x-m*M*w,this._y=m*M*x+g*_*w,this._z=m*_*w-g*M*x,this._w=m*_*x+g*M*w;break;case"YZX":this._x=g*_*x+m*M*w,this._y=m*M*x+g*_*w,this._z=m*_*w-g*M*x,this._w=m*_*x-g*M*w;break;case"XZY":this._x=g*_*x-m*M*w,this._y=m*M*x-g*_*w,this._z=m*_*w+g*M*x,this._w=m*_*x+g*M*w;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],c=n[1],d=n[5],h=n[9],m=n[2],_=n[6],x=n[10],g=r+d+x;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(_-h)*M,this._y=(l-m)*M,this._z=(c-o)*M}else if(r>d&&r>x){const M=2*Math.sqrt(1+r-d-x);this._w=(_-h)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(l+m)/M}else if(d>x){const M=2*Math.sqrt(1+d-r-x);this._w=(l-m)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(h+_)/M}else{const M=2*Math.sqrt(1+x-r-d);this._w=(c-o)/M,this._x=(l+m)/M,this._y=(h+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,c=e._w,d=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+c*d+o*m-l*h,this._y=o*_+c*h+l*d-r*m,this._z=l*_+c*m+r*h-o*d,this._w=c*_-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,c=-c,d=-d);let h=1-n;if(d<.9995){const m=Math.acos(d),_=Math.sin(m);h=Math.sin(h*m)/_,n=Math.sin(n*m)/_,this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+c*n,this._onChangeCallback()}else this._x=this._x*h+r*n,this._y=this._y*h+o*n,this._z=this._z*h+l*n,this._w=this._w*h+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const tf=class tf{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Th.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Th.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*o-d*r),_=2*(d*n-l*o),x=2*(l*r-c*n);return this.x=n+h*m+c*x-d*_,this.y=r+h*_+d*m-l*x,this.z=o+h*x+l*_-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,c=n.x,d=n.y,h=n.z;return this.x=o*h-l*d,this.y=l*c-r*h,this.z=r*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sc.copy(this).projectOnVector(e),this.sub(Sc)}reflect(e){return this.sub(Sc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};tf.prototype.isVector3=!0;let ie=tf;const Sc=new ie,Th=new Ms,nf=class nf{constructor(e,n,r,o,l,c,d,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,c,d,h,m)}set(e,n,r,o,l,c,d,h,m){const _=this.elements;return _[0]=e,_[1]=o,_[2]=d,_[3]=n,_[4]=l,_[5]=h,_[6]=r,_[7]=c,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],_=r[4],x=r[7],g=r[2],M=r[5],w=r[8],R=o[0],S=o[3],v=o[6],L=o[1],F=o[4],b=o[7],I=o[2],C=o[5],O=o[8];return l[0]=c*R+d*L+h*I,l[3]=c*S+d*F+h*C,l[6]=c*v+d*b+h*O,l[1]=m*R+_*L+x*I,l[4]=m*S+_*F+x*C,l[7]=m*v+_*b+x*O,l[2]=g*R+M*L+w*I,l[5]=g*S+M*F+w*C,l[8]=g*v+M*b+w*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8];return n*c*_-n*d*m-r*l*_+r*d*h+o*l*m-o*c*h}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=_*c-d*m,g=d*h-_*l,M=m*l-c*h,w=n*x+r*g+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=x*R,e[1]=(o*m-_*r)*R,e[2]=(d*r-o*c)*R,e[3]=g*R,e[4]=(_*n-o*h)*R,e[5]=(o*l-d*n)*R,e[6]=M*R,e[7]=(r*h-m*n)*R,e[8]=(c*n-r*l)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-o*m,o*h,-o*(-m*c+h*d)+d+n,0,0,1),this}scale(e,n){return ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(e,n)),this}rotate(e){return ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-e)),this}translate(e,n){return ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};nf.prototype.isMatrix3=!0;let mt=nf;const yc=new mt,wh=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tv(){const s={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===kt&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===kt&&(o.r=Es(o.r),o.g=Es(o.g),o.b=Es(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ur?Eo:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Mo]:{primaries:e,whitePoint:r,transfer:Eo,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const Ct=tv();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Es(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ts;class nv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ts===void 0&&(Ts=wo("canvas")),Ts.width=e.width,Ts.height=e.height;const o=Ts.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ts}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Xi(l[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Xi(n[r]/255)*255):n[r]=Xi(n[r]);return{data:n,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let iv=0;class Mc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:iv++}),this.uuid=ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(Ec(o[c].image)):l.push(Ec(o[c]))}else l=Ec(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Ec(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let rv=0;const Tc=new ie;class Cn extends Gr{constructor(e=Cn.DEFAULT_IMAGE,n=Cn.DEFAULT_MAPPING,r=Hi,o=Hi,l=Sn,c=zr,d=fi,h=ei,m=Cn.DEFAULT_ANISOTROPY,_=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rv++}),this.uuid=ga(),this.name="",this.source=new Mc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Tc).x}get height(){return this.source.getSize(Tc).y}get depth(){return this.source.getSize(Tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pu:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Lu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pu:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Lu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null,Cn.DEFAULT_MAPPING=uh,Cn.DEFAULT_ANISOTROPY=1;const rf=class rf{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const h=e.elements,m=h[0],_=h[4],x=h[8],g=h[1],M=h[5],w=h[9],R=h[2],S=h[6],v=h[10];if(Math.abs(_-g)<.01&&Math.abs(x-R)<.01&&Math.abs(w-S)<.01){if(Math.abs(_+g)<.1&&Math.abs(x+R)<.1&&Math.abs(w+S)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(m+1)/2,b=(M+1)/2,I=(v+1)/2,C=(_+g)/4,O=(x+R)/4,E=(w+S)/4;return F>b&&F>I?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=C/r,l=O/r):b>I?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=C/o,l=E/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=O/l,o=E/l),this.set(r,o,l,n),this}let L=Math.sqrt((S-w)*(S-w)+(x-R)*(x-R)+(g-_)*(g-_));return Math.abs(L)<.001&&(L=1),this.x=(S-w)/L,this.y=(x-R)/L,this.z=(g-_)/L,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Rt(this.x,e.x,n.x),this.y=Rt(this.y,e.y,n.y),this.z=Rt(this.z,e.z,n.z),this.w=Rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Rt(this.x,e,n),this.y=Rt(this.y,e,n),this.z=Rt(this.z,e,n),this.w=Rt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rf.prototype.isVector4=!0;let Jt=rf;class sv extends Gr{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},l=new Cn(o),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Mc(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends sv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class bh extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class av extends Cn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=mn,this.minFilter=mn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sl=class sl{constructor(e,n,r,o,l,c,d,h,m,_,x,g,M,w,R,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,c,d,h,m,_,x,g,M,w,R,S)}set(e,n,r,o,l,c,d,h,m,_,x,g,M,w,R,S){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=l,v[5]=c,v[9]=d,v[13]=h,v[2]=m,v[6]=_,v[10]=x,v[14]=g,v[3]=M,v[7]=w,v[11]=R,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/ws.setFromMatrixColumn(e,0).length(),l=1/ws.setFromMatrixColumn(e,1).length(),c=1/ws.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),_=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=c*_,M=c*x,w=d*_,R=d*x;n[0]=h*_,n[4]=-h*x,n[8]=m,n[1]=M+w*m,n[5]=g-R*m,n[9]=-d*h,n[2]=R-g*m,n[6]=w+M*m,n[10]=c*h}else if(e.order==="YXZ"){const g=h*_,M=h*x,w=m*_,R=m*x;n[0]=g+R*d,n[4]=w*d-M,n[8]=c*m,n[1]=c*x,n[5]=c*_,n[9]=-d,n[2]=M*d-w,n[6]=R+g*d,n[10]=c*h}else if(e.order==="ZXY"){const g=h*_,M=h*x,w=m*_,R=m*x;n[0]=g-R*d,n[4]=-c*x,n[8]=w+M*d,n[1]=M+w*d,n[5]=c*_,n[9]=R-g*d,n[2]=-c*m,n[6]=d,n[10]=c*h}else if(e.order==="ZYX"){const g=c*_,M=c*x,w=d*_,R=d*x;n[0]=h*_,n[4]=w*m-M,n[8]=g*m+R,n[1]=h*x,n[5]=R*m+g,n[9]=M*m-w,n[2]=-m,n[6]=d*h,n[10]=c*h}else if(e.order==="YZX"){const g=c*h,M=c*m,w=d*h,R=d*m;n[0]=h*_,n[4]=R-g*x,n[8]=w*x+M,n[1]=x,n[5]=c*_,n[9]=-d*_,n[2]=-m*_,n[6]=M*x+w,n[10]=g-R*x}else if(e.order==="XZY"){const g=c*h,M=c*m,w=d*h,R=d*m;n[0]=h*_,n[4]=-x,n[8]=m*_,n[1]=g*x+R,n[5]=c*_,n[9]=M*x-w,n[2]=w*x-M,n[6]=d*_,n[10]=R*x+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ov,e,lv)}lookAt(e,n,r){const o=this.elements;return Xn.subVectors(e,n),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),cr.crossVectors(r,Xn),cr.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),cr.crossVectors(r,Xn)),cr.normalize(),Ao.crossVectors(Xn,cr),o[0]=cr.x,o[4]=Ao.x,o[8]=Xn.x,o[1]=cr.y,o[5]=Ao.y,o[9]=Xn.y,o[2]=cr.z,o[6]=Ao.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],_=r[1],x=r[5],g=r[9],M=r[13],w=r[2],R=r[6],S=r[10],v=r[14],L=r[3],F=r[7],b=r[11],I=r[15],C=o[0],O=o[4],E=o[8],D=o[12],H=o[1],G=o[5],K=o[9],ce=o[13],fe=o[2],j=o[6],$=o[10],W=o[14],z=o[3],re=o[7],ae=o[11],U=o[15];return l[0]=c*C+d*H+h*fe+m*z,l[4]=c*O+d*G+h*j+m*re,l[8]=c*E+d*K+h*$+m*ae,l[12]=c*D+d*ce+h*W+m*U,l[1]=_*C+x*H+g*fe+M*z,l[5]=_*O+x*G+g*j+M*re,l[9]=_*E+x*K+g*$+M*ae,l[13]=_*D+x*ce+g*W+M*U,l[2]=w*C+R*H+S*fe+v*z,l[6]=w*O+R*G+S*j+v*re,l[10]=w*E+R*K+S*$+v*ae,l[14]=w*D+R*ce+S*W+v*U,l[3]=L*C+F*H+b*fe+I*z,l[7]=L*O+F*G+b*j+I*re,l[11]=L*E+F*K+b*$+I*ae,l[15]=L*D+F*ce+b*W+I*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],_=e[2],x=e[6],g=e[10],M=e[14],w=e[3],R=e[7],S=e[11],v=e[15],L=h*M-m*g,F=d*M-m*x,b=d*g-h*x,I=c*M-m*_,C=c*g-h*_,O=c*x-d*_;return n*(R*L-S*F+v*b)-r*(w*L-S*I+v*C)+o*(w*F-R*I+v*O)-l*(w*b-R*C+S*O)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[1],c=e[5],d=e[9],h=e[2],m=e[6],_=e[10];return n*(c*_-d*m)-r*(l*_-d*h)+o*(l*m-c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],_=e[8],x=e[9],g=e[10],M=e[11],w=e[12],R=e[13],S=e[14],v=e[15],L=n*d-r*c,F=n*h-o*c,b=n*m-l*c,I=r*h-o*d,C=r*m-l*d,O=o*m-l*h,E=_*R-x*w,D=_*S-g*w,H=_*v-M*w,G=x*S-g*R,K=x*v-M*R,ce=g*v-M*S,fe=L*ce-F*K+b*G+I*H-C*D+O*E;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/fe;return e[0]=(d*ce-h*K+m*G)*j,e[1]=(o*K-r*ce-l*G)*j,e[2]=(R*O-S*C+v*I)*j,e[3]=(g*C-x*O-M*I)*j,e[4]=(h*H-c*ce-m*D)*j,e[5]=(n*ce-o*H+l*D)*j,e[6]=(S*b-w*O-v*F)*j,e[7]=(_*O-g*b+M*F)*j,e[8]=(c*K-d*H+m*E)*j,e[9]=(r*H-n*K-l*E)*j,e[10]=(w*C-R*b+v*L)*j,e[11]=(x*b-_*C-M*L)*j,e[12]=(d*D-c*G-h*E)*j,e[13]=(n*G-r*D+o*E)*j,e[14]=(R*F-w*I-S*L)*j,e[15]=(_*I-x*F+g*L)*j,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,c=e.x,d=e.y,h=e.z,m=l*c,_=l*d;return this.set(m*c+r,m*d-o*h,m*h+o*d,0,m*d+o*h,_*d+r,_*h-o*c,0,m*h-o*d,_*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,c=n._y,d=n._z,h=n._w,m=l+l,_=c+c,x=d+d,g=l*m,M=l*_,w=l*x,R=c*_,S=c*x,v=d*x,L=h*m,F=h*_,b=h*x,I=r.x,C=r.y,O=r.z;return o[0]=(1-(R+v))*I,o[1]=(M+b)*I,o[2]=(w-F)*I,o[3]=0,o[4]=(M-b)*C,o[5]=(1-(g+v))*C,o[6]=(S+L)*C,o[7]=0,o[8]=(w+F)*O,o[9]=(S-L)*O,o[10]=(1-(g+R))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),n.identity(),this;let c=ws.set(o[0],o[1],o[2]).length();const d=ws.set(o[4],o[5],o[6]).length(),h=ws.set(o[8],o[9],o[10]).length();l<0&&(c=-c),di.copy(this);const m=1/c,_=1/d,x=1/h;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=_,di.elements[5]*=_,di.elements[6]*=_,di.elements[8]*=x,di.elements[9]*=x,di.elements[10]*=x,n.setFromRotationMatrix(di),r.x=c,r.y=d,r.z=h,this}makePerspective(e,n,r,o,l,c,d=Ri,h=!1){const m=this.elements,_=2*l/(n-e),x=2*l/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let w,R;if(h)w=l/(c-l),R=c*l/(c-l);else if(d===Ri)w=-(c+l)/(c-l),R=-2*c*l/(c-l);else if(d===To)w=-c/(c-l),R=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=x,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,c,d=Ri,h=!1){const m=this.elements,_=2/(n-e),x=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let w,R;if(h)w=1/(c-l),R=c/(c-l);else if(d===Ri)w=-2/(c-l),R=-(c+l)/(c-l);else if(d===To)w=-1/(c-l),R=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=x,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};sl.prototype.isMatrix4=!0;let nn=sl;const ws=new ie,di=new nn,ov=new ie(0,0,0),lv=new ie(1,1,1),cr=new ie,Ao=new ie,Xn=new ie,Rh=new nn,Ch=new Ms;class Wr{constructor(e=0,n=0,r=0,o=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],h=o[1],m=o[5],_=o[9],x=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-_,M),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uv=0;const Lh=new ie,As=new Ms,$i=new nn,bo=new ie,_a=new ie,cv=new ie,fv=new Ms,Dh=new ie(1,0,0),Ih=new ie(0,1,0),Nh=new ie(0,0,1),Uh={type:"added"},dv={type:"removed"},bs={type:"childadded",child:null},wc={type:"childremoved",child:null};class $n extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$n.DEFAULT_UP.clone();const e=new ie,n=new Wr,r=new Ms,o=new ie(1,1,1);function l(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new mt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=$n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,n){return As.setFromAxisAngle(e,n),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Dh,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Nh,e)}translateOnAxis(e,n){return Lh.copy(e).applyQuaternion(this.quaternion),this.position.add(Lh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dh,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Nh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?bo.copy(e):bo.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(_a,bo,this.up):$i.lookAt(bo,_a,this.up),this.quaternion.setFromRotationMatrix($i),o&&($i.extractRotation(o.matrixWorld),As.setFromRotationMatrix($i),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uh),bs.child=e,this.dispatchEvent(bs),bs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dv),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uh),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,cv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,fv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*r-l[8]*o,l[13]+=r-l[1]*n-l[5]*r-l[9]*o,l[14]+=o-l[2]*n-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const x=h[m];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(n){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),_=c(e.images),x=c(e.shapes),g=c(e.skeletons),M=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function c(d){const h=[];for(const m in d){const _=d[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}$n.DEFAULT_UP=new ie(0,1,0),$n.DEFAULT_MATRIX_AUTO_UPDATE=!0,$n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ro extends $n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hv={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const R of e.hand.values()){const S=n.getJointPose(R,r),v=this._getHandJoint(m,R);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const _=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],g=_.position.distanceTo(x.position),M=.02,w=.005;m.inputState.pinching&&g>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ro;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const Fh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Co={h:0,s:0,l:0};function bc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Ct.workingColorSpace){if(e=ev(e,1),n=Rt(n,0,1),r=Rt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,c=2*r-l;this.r=bc(c,l,e+1/3),this.g=bc(c,l,e),this.b=bc(c,l,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,n=ti){function r(l){l!==void 0&&parseFloat(l)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const r=Fh[e.toLowerCase()];return r!==void 0?this.setHex(r,n):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ct.workingToColorSpace(Mn.copy(this),e),Math.round(Rt(Mn.r*255,0,255))*65536+Math.round(Rt(Mn.g*255,0,255))*256+Math.round(Rt(Mn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(Mn.copy(this),n);const r=Mn.r,o=Mn.g,l=Mn.b,c=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const _=(d+c)/2;if(d===c)h=0,m=0;else{const x=c-d;switch(m=_<=.5?x/(c+d):x/(2-c-d),c){case r:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-r)/x+2;break;case l:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(Mn.copy(this),n),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ti){Ct.workingToColorSpace(Mn.copy(this),e);const n=Mn.r,r=Mn.g,o=Mn.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+n,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(fr),e.getHSL(Co);const r=xc(fr.h,Co.h,n),o=xc(fr.s,Co.s,n),l=xc(fr.l,Co.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new yt;yt.NAMES=Fh;class pv extends $n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const hi=new ie,Yi=new ie,Rc=new ie,qi=new ie,Rs=new ie,Cs=new ie,Oh=new ie,Cc=new ie,Pc=new ie,Lc=new ie,Dc=new Jt,Ic=new Jt,Nc=new Jt;class pi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),hi.subVectors(e,n),o.cross(hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){hi.subVectors(o,n),Yi.subVectors(r,n),Rc.subVectors(e,n);const c=hi.dot(hi),d=hi.dot(Yi),h=hi.dot(Rc),m=Yi.dot(Yi),_=Yi.dot(Rc),x=c*m-d*d;if(x===0)return l.set(0,0,0),null;const g=1/x,M=(m*h-d*_)*g,w=(c*_-d*h)*g;return l.set(1-M-w,w,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,n,r,o,l,c,d,h){return this.getBarycoord(e,n,r,o,qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,qi.x),h.addScaledVector(c,qi.y),h.addScaledVector(d,qi.z),h)}static getInterpolatedAttribute(e,n,r,o,l,c){return Dc.setScalar(0),Ic.setScalar(0),Nc.setScalar(0),Dc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,r),Nc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Dc,l.x),c.addScaledVector(Ic,l.y),c.addScaledVector(Nc,l.z),c}static isFrontFacing(e,n,r,o){return hi.subVectors(r,n),Yi.subVectors(e,n),hi.cross(Yi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return pi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let c,d;Rs.subVectors(o,r),Cs.subVectors(l,r),Cc.subVectors(e,r);const h=Rs.dot(Cc),m=Cs.dot(Cc);if(h<=0&&m<=0)return n.copy(r);Pc.subVectors(e,o);const _=Rs.dot(Pc),x=Cs.dot(Pc);if(_>=0&&x<=_)return n.copy(o);const g=h*x-_*m;if(g<=0&&h>=0&&_<=0)return c=h/(h-_),n.copy(r).addScaledVector(Rs,c);Lc.subVectors(e,l);const M=Rs.dot(Lc),w=Cs.dot(Lc);if(w>=0&&M<=w)return n.copy(l);const R=M*m-h*w;if(R<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Cs,d);const S=_*w-M*x;if(S<=0&&x-_>=0&&M-w>=0)return Oh.subVectors(l,o),d=(x-_)/(x-_+(M-w)),n.copy(o).addScaledVector(Oh,d);const v=1/(S+R+g);return c=R*v,d=g*v,n.copy(r).addScaledVector(Rs,c).addScaledVector(Cs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xa{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,mi):mi.fromBufferAttribute(l,c),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Po.copy(r.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),Lo.subVectors(this.max,Sa),Ps.subVectors(e.a,Sa),Ls.subVectors(e.b,Sa),Ds.subVectors(e.c,Sa),dr.subVectors(Ls,Ps),hr.subVectors(Ds,Ls),Xr.subVectors(Ps,Ds);let n=[0,-dr.z,dr.y,0,-hr.z,hr.y,0,-Xr.z,Xr.y,dr.z,0,-dr.x,hr.z,0,-hr.x,Xr.z,0,-Xr.x,-dr.y,dr.x,0,-hr.y,hr.x,0,-Xr.y,Xr.x,0];return!Uc(n,Ps,Ls,Ds,Lo)||(n=[1,0,0,0,1,0,0,0,1],!Uc(n,Ps,Ls,Ds,Lo))?!1:(Do.crossVectors(dr,hr),n=[Do.x,Do.y,Do.z],Uc(n,Ps,Ls,Ds,Lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],mi=new ie,Po=new xa,Ps=new ie,Ls=new ie,Ds=new ie,dr=new ie,hr=new ie,Xr=new ie,Sa=new ie,Lo=new ie,Do=new ie,$r=new ie;function Uc(s,e,n,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){$r.fromArray(s,l);const d=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),h=e.dot($r),m=n.dot($r),_=r.dot($r);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>d)return!1}return!0}const rn=new ie,Io=new Nt;let mv=0;class Pi extends Gr{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=xh,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Io.fromBufferAttribute(this,n),Io.applyMatrix3(e),this.setXY(n,Io.x,Io.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix3(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=va(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Fn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=va(n,this.array)),n}setX(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=va(n,this.array)),n}setY(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=va(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=va(n,this.array)),n}setW(e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Fn(n,this.array),r=Fn(r,this.array),o=Fn(o,this.array),l=Fn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xh&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kh extends Pi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Bh extends Pi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Pn extends Pi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const gv=new xa,ya=new ie,Fc=new ie;class Oc{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):gv.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const n=ya.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Fc)),this.expandByPoint(ya.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let vv=0;const ni=new nn,kc=new $n,Is=new ie,Yn=new xa,Ma=new xa,fn=new ie;class gi extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?Bh:kh)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,r){return ni.makeTranslation(e,n,r),this.applyMatrix4(ni),this}scale(e,n,r){return ni.makeScale(e,n,r),this.applyMatrix4(ni),this}lookAt(e){return kc.lookAt(e),kc.updateMatrix(),this.applyMatrix4(kc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,c=n.length;l<c;l++){const d=n[l];Ma.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Yn.min,Ma.min),Yn.expandByPoint(fn),fn.addVectors(Yn.max,Ma.max),Yn.expandByPoint(fn)):(Yn.expandByPoint(Ma.min),Yn.expandByPoint(Ma.max))}Yn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)fn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(fn));if(n)for(let l=0,c=n.length;l<c;l++){const d=n[l],h=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)fn.fromBufferAttribute(d,m),h&&(Is.fromBufferAttribute(e,m),fn.add(Is)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Pi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],h=[];for(let E=0;E<r.count;E++)d[E]=new ie,h[E]=new ie;const m=new ie,_=new ie,x=new ie,g=new Nt,M=new Nt,w=new Nt,R=new ie,S=new ie;function v(E,D,H){m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,D),x.fromBufferAttribute(r,H),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,D),w.fromBufferAttribute(l,H),_.sub(m),x.sub(m),M.sub(g),w.sub(g);const G=1/(M.x*w.y-w.x*M.y);isFinite(G)&&(R.copy(_).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(G),S.copy(x).multiplyScalar(M.x).addScaledVector(_,-w.x).multiplyScalar(G),d[E].add(R),d[D].add(R),d[H].add(R),h[E].add(S),h[D].add(S),h[H].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let E=0,D=L.length;E<D;++E){const H=L[E],G=H.start,K=H.count;for(let ce=G,fe=G+K;ce<fe;ce+=3)v(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const F=new ie,b=new ie,I=new ie,C=new ie;function O(E){I.fromBufferAttribute(o,E),C.copy(I);const D=d[E];F.copy(D),F.sub(I.multiplyScalar(I.dot(D))).normalize(),b.crossVectors(C,D);const G=b.dot(h[E])<0?-1:1;c.setXYZW(E,F.x,F.y,F.z,G)}for(let E=0,D=L.length;E<D;++E){const H=L[E],G=H.start,K=H.count;for(let ce=G,fe=G+K;ce<fe;ce+=3)O(e.getX(ce+0)),O(e.getX(ce+1)),O(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ie,l=new ie,c=new ie,d=new ie,h=new ie,m=new ie,_=new ie,x=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),R=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(n,w),l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,S),_.subVectors(c,l),x.subVectors(o,l),_.cross(x),d.fromBufferAttribute(r,w),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,S),d.add(_),h.add(_),m.add(_),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),_.subVectors(c,l),x.subVectors(o,l),_.cross(x),r.setXYZ(g+0,_.x,_.y,_.z),r.setXYZ(g+1,_.x,_.y,_.z),r.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)fn.fromBufferAttribute(e,n),fn.normalize(),e.setXYZ(n,fn.x,fn.y,fn.z)}toNonIndexed(){function e(d,h){const m=d.array,_=d.itemSize,x=d.normalized,g=new m.constructor(h.length*_);let M=0,w=0;for(let R=0,S=h.length;R<S;R++){d.isInterleavedBufferAttribute?M=h[R]*d.data.stride+d.offset:M=h[R]*_;for(let v=0;v<_;v++)g[w++]=m[M++]}return new Pi(g,_,x)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gi,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let _=0,x=m.length;_<x;_++){const g=m[_],M=e(g,r);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let x=0,g=m.length;x<g;x++){const M=m[x];_.push(M.toJSON(e.data))}_.length>0&&(o[h]=_,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const _=o[m];this.setAttribute(m,_.clone(n))}const l=e.morphAttributes;for(const m in l){const _=[],x=l[m];for(let g=0,M=x.length;g<M;g++)_.push(x[g].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,_=c.length;m<_;m++){const x=c[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _v=0;class No extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=ga(),this.name="",this.type="Material",this.blending=vs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xu,this.blendDst=Su,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_h,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){dt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xu&&(r.blendSrc=this.blendSrc),this.blendDst!==Su&&(r.blendDst=this.blendDst),this.blendEquation!==kr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_h&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(n){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Nt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new ie,Bc=new ie,Uo=new ie,pr=new ie,zc=new ie,Fo=new ie,Vc=new ie;class xv{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,n),Zi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Bc.copy(e).add(n).multiplyScalar(.5),Uo.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Bc);const l=e.distanceTo(n)*.5,c=-this.direction.dot(Uo),d=pr.dot(this.direction),h=-pr.dot(Uo),m=pr.lengthSq(),_=Math.abs(1-c*c);let x,g,M,w;if(_>0)if(x=c*h-d,g=c*d-h,w=l*_,x>=0)if(g>=-w)if(g<=w){const R=1/_;x*=R,g*=R,M=x*(x+c*g+2*d)+g*(c*x+g+2*h)+m}else g=l,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*h)+m;else g=-l,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*h)+m;else g<=-w?(x=Math.max(0,-(-c*l+d)),g=x>0?-l:Math.min(Math.max(-l,-h),l),M=-x*x+g*(g+2*h)+m):g<=w?(x=0,g=Math.min(Math.max(-l,-h),l),M=g*(g+2*h)+m):(x=Math.max(0,-(c*l+d)),g=x>0?l:Math.min(Math.max(-l,-h),l),M=-x*x+g*(g+2*h)+m);else g=c>0?-l:l,x=Math.max(0,-(c*g+d)),M=-x*x+g*(g+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Bc).addScaledVector(Uo,g),M}intersectSphere(e,n){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,c,d,h;const m=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),_>=0?(l=(e.min.y-g.y)*_,c=(e.max.y-g.y)*_):(l=(e.max.y-g.y)*_,c=(e.min.y-g.y)*_),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(d=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(d=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,n,r,o,l){zc.subVectors(n,e),Fo.subVectors(r,e),Vc.crossVectors(zc,Fo);let c=this.direction.dot(Vc),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;pr.subVectors(this.origin,e);const h=d*this.direction.dot(Fo.crossVectors(pr,Fo));if(h<0)return null;const m=d*this.direction.dot(zc.cross(pr));if(m<0||h+m>c)return null;const _=-d*pr.dot(Vc);return _<0?null:this.at(_/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hc extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zh=new nn,Yr=new xv,Oo=new Oc,Vh=new ie,ko=new ie,Bo=new ie,zo=new ie,Gc=new ie,Vo=new ie,Hh=new ie,Ho=new ie;class qn extends $n{constructor(e=new gi,n=new Hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Vo.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const _=d[h],x=l[h];_!==0&&(Gc.fromBufferAttribute(x,e),c?Vo.addScaledVector(Gc,_):Vo.addScaledVector(Gc.sub(n),_))}n.add(Vo)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Oo.copy(r.boundingSphere),Oo.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(Oo.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Oo,Vh)===null||Yr.origin.distanceToSquared(Vh)>(e.far-e.near)**2))&&(zh.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(zh),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,_=l.attributes.uv1,x=l.attributes.normal,g=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,R=g.length;w<R;w++){const S=g[w],v=c[S.materialIndex],L=Math.max(S.start,M.start),F=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let b=L,I=F;b<I;b+=3){const C=d.getX(b),O=d.getX(b+1),E=d.getX(b+2);o=Go(this,v,e,r,m,_,x,C,O,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let S=w,v=R;S<v;S+=3){const L=d.getX(S),F=d.getX(S+1),b=d.getX(S+2);o=Go(this,c,e,r,m,_,x,L,F,b),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let w=0,R=g.length;w<R;w++){const S=g[w],v=c[S.materialIndex],L=Math.max(S.start,M.start),F=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let b=L,I=F;b<I;b+=3){const C=b,O=b+1,E=b+2;o=Go(this,v,e,r,m,_,x,C,O,E),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let S=w,v=R;S<v;S+=3){const L=S,F=S+1,b=S+2;o=Go(this,c,e,r,m,_,x,L,F,b),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function Sv(s,e,n,r,o,l,c,d){let h;if(e.side===Rn?h=r.intersectTriangle(c,l,o,!0,d):h=r.intersectTriangle(o,l,c,e.side===lr,d),h===null)return null;Ho.copy(d),Ho.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Ho);return m<n.near||m>n.far?null:{distance:m,point:Ho.clone(),object:s}}function Go(s,e,n,r,o,l,c,d,h,m){s.getVertexPosition(d,ko),s.getVertexPosition(h,Bo),s.getVertexPosition(m,zo);const _=Sv(s,e,n,r,ko,Bo,zo,Hh);if(_){const x=new ie;pi.getBarycoord(Hh,ko,Bo,zo,x),o&&(_.uv=pi.getInterpolatedAttribute(o,d,h,m,x,new Nt)),l&&(_.uv1=pi.getInterpolatedAttribute(l,d,h,m,x,new Nt)),c&&(_.normal=pi.getInterpolatedAttribute(c,d,h,m,x,new ie),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const g={a:d,b:h,c:m,normal:new ie,materialIndex:0};pi.getNormal(ko,Bo,zo,g.normal),_.face=g,_.barycoord=x}return _}class yv extends Cn{constructor(e=null,n=1,r=1,o,l,c,d,h,m=mn,_=mn,x,g){super(null,c,d,h,m,_,o,l,x,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wc=new ie,Mv=new ie,Ev=new mt;class qr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Wc.subVectors(r,n).cross(Mv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(Wc),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Ev.getNormalMatrix(e),o=this.coplanarPoint(Wc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Oc,Tv=new Nt(.5,.5),Wo=new ie;class Gh{constructor(e=new qr,n=new qr,r=new qr,o=new qr,l=new qr,c=new qr){this.planes=[e,n,r,o,l,c]}set(e,n,r,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ri,r=!1){const o=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],m=l[3],_=l[4],x=l[5],g=l[6],M=l[7],w=l[8],R=l[9],S=l[10],v=l[11],L=l[12],F=l[13],b=l[14],I=l[15];if(o[0].setComponents(m-c,M-_,v-w,I-L).normalize(),o[1].setComponents(m+c,M+_,v+w,I+L).normalize(),o[2].setComponents(m+d,M+x,v+R,I+F).normalize(),o[3].setComponents(m-d,M-x,v-R,I-F).normalize(),r)o[4].setComponents(h,g,S,b).normalize(),o[5].setComponents(m-h,M-g,v-S,I-b).normalize();else if(o[4].setComponents(m-h,M-g,v-S,I-b).normalize(),n===Ri)o[5].setComponents(m+h,M+g,v+S,I+b).normalize();else if(n===To)o[5].setComponents(h,g,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const n=Tv.distanceTo(e.center);return Kr.radius=.7071067811865476+n,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Wo.x=o.normal.x>0?e.max.x:e.min.x,Wo.y=o.normal.y>0?e.max.y:e.min.y,Wo.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wh extends Cn{constructor(e=[],n=Br,r,o,l,c,d,h,m,_){super(e,n,r,o,l,c,d,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ns extends Cn{constructor(e,n,r=Ai,o,l,c,d=mn,h=mn,m,_=Wi,x=1){if(_!==Wi&&_!==Vr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:x};super(g,o,l,c,d,h,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class wv extends Ns{constructor(e,n=Ai,r=Br,o,l,c=mn,d=mn,h,m=Wi){const _={width:e,height:e,depth:1},x=[_,_,_,_,_,_];super(e,e,n,r,o,l,c,d,h,m),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xh extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ea extends gi{constructor(e=1,n=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],_=[],x=[];let g=0,M=0;w("z","y","x",-1,-1,r,n,e,c,l,0),w("z","y","x",1,-1,r,n,-e,c,l,1),w("x","z","y",1,1,e,r,n,o,c,2),w("x","z","y",1,-1,e,r,-n,o,c,3),w("x","y","z",1,-1,e,n,r,o,l,4),w("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Pn(m,3)),this.setAttribute("normal",new Pn(_,3)),this.setAttribute("uv",new Pn(x,2));function w(R,S,v,L,F,b,I,C,O,E,D){const H=b/O,G=I/E,K=b/2,ce=I/2,fe=C/2,j=O+1,$=E+1;let W=0,z=0;const re=new ie;for(let ae=0;ae<$;ae++){const U=ae*G-ce;for(let Z=0;Z<j;Z++){const Fe=Z*H-K;re[R]=Fe*L,re[S]=U*F,re[v]=fe,m.push(re.x,re.y,re.z),re[R]=0,re[S]=0,re[v]=C>0?1:-1,_.push(re.x,re.y,re.z),x.push(Z/O),x.push(1-ae/E),W+=1}}for(let ae=0;ae<E;ae++)for(let U=0;U<O;U++){const Z=g+U+j*ae,Fe=g+U+j*(ae+1),$e=g+(U+1)+j*(ae+1),Ge=g+(U+1)+j*ae;h.push(Z,Fe,Ge),h.push(Fe,$e,Ge),z+=6}d.addGroup(M,z,D),M+=z,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xo extends gi{constructor(e=1,n=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:r,thetaLength:o},n=Math.max(3,n);const l=[],c=[],d=[],h=[],m=new ie,_=new Nt;c.push(0,0,0),d.push(0,0,1),h.push(.5,.5);for(let x=0,g=3;x<=n;x++,g+=3){const M=r+x/n*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),c.push(m.x,m.y,m.z),d.push(0,0,1),_.x=(c[g]/e+1)/2,_.y=(c[g+1]/e+1)/2,h.push(_.x,_.y)}for(let x=1;x<=n;x++)l.push(x,x+1,0);this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(d,3)),this.setAttribute("uv",new Pn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $o extends gi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,c=n/2,d=Math.floor(r),h=Math.floor(o),m=d+1,_=h+1,x=e/d,g=n/h,M=[],w=[],R=[],S=[];for(let v=0;v<_;v++){const L=v*g-c;for(let F=0;F<m;F++){const b=F*x-l;w.push(b,-L,0),R.push(0,0,1),S.push(F/d),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let L=0;L<d;L++){const F=L+m*v,b=L+m*(v+1),I=L+1+m*(v+1),C=L+1+m*v;M.push(F,b,C),M.push(b,I,C)}this.setIndex(M),this.setAttribute("position",new Pn(w,3)),this.setAttribute("normal",new Pn(R,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yo extends gi{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let m=0;const _=[],x=new ie,g=new ie,M=[],w=[],R=[],S=[];for(let v=0;v<=r;v++){const L=[],F=v/r,b=c+F*d,I=e*Math.cos(b),C=Math.sqrt(e*e-I*I);let O=0;v===0&&c===0?O=.5/n:v===r&&h===Math.PI&&(O=-.5/n);for(let E=0;E<=n;E++){const D=E/n,H=o+D*l;x.x=-C*Math.cos(H),x.y=I,x.z=C*Math.sin(H),w.push(x.x,x.y,x.z),g.copy(x).normalize(),R.push(g.x,g.y,g.z),S.push(D+O,1-F),L.push(m++)}_.push(L)}for(let v=0;v<r;v++)for(let L=0;L<n;L++){const F=_[v][L+1],b=_[v][L],I=_[v+1][L],C=_[v+1][L+1];(v!==0||c>0)&&M.push(F,b,C),(v!==r-1||h<Math.PI)&&M.push(b,I,C)}this.setIndex(M),this.setAttribute("position",new Pn(w,3)),this.setAttribute("normal",new Pn(R,3)),this.setAttribute("uv",new Pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Us(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if($h(o))o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if($h(o[0])){const l=[];for(let c=0,d=o.length;c<d;c++)l[c]=o[c].clone();e[n][r]=l}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Ln(s){const e={};for(let n=0;n<s.length;n++){const r=Us(s[n]);for(const o in r)e[o]=r[o]}return e}function $h(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Av(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Yh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const bv={clone:Us,merge:Ln};var Rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rv,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new yt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Nt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Jt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Pv extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lv extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dv extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qo=new ie,Ko=new Ms,Li=new ie;class qh extends $n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(qo,Ko,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Ko,Li.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(qo,Ko,Li),Li.x===1&&Li.y===1&&Li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(qo,Ko,Li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ie,Kh=new Nt,Zh=new Nt;class ii extends qh{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_c*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,Kh,Zh),n.subVectors(Zh,Kh)}setViewOffset(e,n,r,o,l,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/h,n-=c.offsetY*r/m,o*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class jh extends qh{constructor(e=-1,n=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=_*this.view.offsetY,h=d-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=-90,Os=1;class Iv extends $n{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Fs,Os,e,n);o.layers=this.layers,this.add(o);const l=new ii(Fs,Os,e,n);l.layers=this.layers,this.add(l);const c=new ii(Fs,Os,e,n);c.layers=this.layers,this.add(c);const d=new ii(Fs,Os,e,n);d.layers=this.layers,this.add(d);const h=new ii(Fs,Os,e,n);h.layers=this.layers,this.add(h);const m=new ii(Fs,Os,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,c,d,h]=n;for(const m of n)this.remove(m);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===To)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,_]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,_),e.setRenderTarget(x,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Nv extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Uv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,dt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const sf=class sf{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const l=this.elements;return l[0]=e,l[2]=n,l[1]=r,l[3]=o,this}};sf.prototype.isMatrix2=!0;let Qh=sf;function Jh(s,e,n,r){const o=Fv(r);switch(n){case ph:return s*e;case gh:return s*e/o.components*o.byteLength;case Fu:return s*e/o.components*o.byteLength;case Hr:return s*e*2/o.components*o.byteLength;case Ou:return s*e*2/o.components*o.byteLength;case mh:return s*e*3/o.components*o.byteLength;case fi:return s*e*4/o.components*o.byteLength;case ku:return s*e*4/o.components*o.byteLength;case go:case vo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zu:case Hu:return Math.max(s,16)*Math.max(e,8)/4;case Bu:case Vu:return Math.max(s,8)*Math.max(e,8)/2;case Gu:case Wu:case $u:case Yu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xu:case So:case qu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ku:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ju:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ju:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ac:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uc:case cc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dc:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yo:case pc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Fv(s){switch(s){case ei:case ch:return{byteLength:1,components:1};case pa:case fh:case Gi:return{byteLength:2,components:1};case Nu:case Uu:return{byteLength:2,components:4};case Ai:case Iu:case bi:return{byteLength:4,components:1};case dh:case hh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:vu}})),typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=vu);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ep(){let s=null,e=!1,n=null,r=null;function o(l,c){n(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function Ov(s){const e=new WeakMap;function n(d,h){const m=d.array,_=d.usage,x=m.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,m,_),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,h,m){const _=h.array,x=h.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,_);else{x.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<x.length;M++){const w=x[g],R=x[M];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,x[g]=R)}x.length=g+1;for(let M=0,w=x.length;M<w;M++){const R=x[M];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:c}}var kv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bv=`#ifdef USE_ALPHAHASH
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
#endif`,zv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wv=`#ifdef USE_AOMAP
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
#endif`,Xv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jv=`#ifdef USE_IRIDESCENCE
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
#endif`,Qv=`#ifdef USE_BUMPMAP
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
#endif`,Jv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,r_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,s_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,a_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,o_=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u_=`vec3 transformedNormal = objectNormal;
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
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w_=`#ifdef USE_GRADIENTMAP
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
}`,A_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,P_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,I_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,U_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,F_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,O_=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,q_=`#if defined( USE_POINTS_UV )
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
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Z_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Q_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,J_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ex=`#ifdef USE_MORPHTARGETS
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
#endif`,tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ix=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ox=`#ifdef USE_NORMALMAP
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
#endif`,lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_x=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,Ex=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Tx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wx=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,Rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ix=`#ifdef USE_TRANSMISSION
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
#endif`,Nx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mt={alphahash_fragment:kv,alphahash_pars_fragment:Bv,alphamap_fragment:zv,alphamap_pars_fragment:Vv,alphatest_fragment:Hv,alphatest_pars_fragment:Gv,aomap_fragment:Wv,aomap_pars_fragment:Xv,batching_pars_vertex:$v,batching_vertex:Yv,begin_vertex:qv,beginnormal_vertex:Kv,bsdfs:Zv,iridescence_fragment:jv,bumpmap_pars_fragment:Qv,clipping_planes_fragment:Jv,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:r_,color_pars_vertex:s_,color_vertex:a_,common:o_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:u_,displacementmap_pars_vertex:c_,displacementmap_vertex:f_,emissivemap_fragment:d_,emissivemap_pars_fragment:h_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:v_,envmap_pars_fragment:__,envmap_pars_vertex:x_,envmap_physical_pars_fragment:P_,envmap_vertex:S_,fog_vertex:y_,fog_pars_vertex:M_,fog_fragment:E_,fog_pars_fragment:T_,gradientmap_pars_fragment:w_,lightmap_pars_fragment:A_,lights_lambert_fragment:b_,lights_lambert_pars_fragment:R_,lights_pars_begin:C_,lights_toon_fragment:L_,lights_toon_pars_fragment:D_,lights_phong_fragment:I_,lights_phong_pars_fragment:N_,lights_physical_fragment:U_,lights_physical_pars_fragment:F_,lights_fragment_begin:O_,lights_fragment_maps:k_,lights_fragment_end:B_,lightprobes_pars_fragment:z_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:G_,logdepthbuf_vertex:W_,map_fragment:X_,map_pars_fragment:$_,map_particle_fragment:Y_,map_particle_pars_fragment:q_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:Z_,morphinstance_vertex:j_,morphcolor_vertex:Q_,morphnormal_vertex:J_,morphtarget_pars_vertex:ex,morphtarget_vertex:tx,normal_fragment_begin:nx,normal_fragment_maps:ix,normal_pars_fragment:rx,normal_pars_vertex:sx,normal_vertex:ax,normalmap_pars_fragment:ox,clearcoat_normal_fragment_begin:lx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:cx,iridescence_pars_fragment:fx,opaque_fragment:dx,packing:hx,premultiplied_alpha_fragment:px,project_vertex:mx,dithering_fragment:gx,dithering_pars_fragment:vx,roughnessmap_fragment:_x,roughnessmap_pars_fragment:xx,shadowmap_pars_fragment:Sx,shadowmap_pars_vertex:yx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Ex,skinbase_vertex:Tx,skinning_pars_vertex:wx,skinning_vertex:Ax,skinnormal_vertex:bx,specularmap_fragment:Rx,specularmap_pars_fragment:Cx,tonemapping_fragment:Px,tonemapping_pars_fragment:Lx,transmission_fragment:Dx,transmission_pars_fragment:Ix,uv_pars_fragment:Nx,uv_pars_vertex:Ux,uv_vertex:Fx,worldpos_vertex:Ox,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Ue={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Di={basic:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Ln([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Ln([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Ln([Ue.points,Ue.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Ln([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Ln([Ue.common,Ue.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Ln([Ue.sprite,Ue.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Ln([Ue.common,Ue.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Ln([Ue.lights,Ue.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Di.physical={uniforms:Ln([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Zo={r:0,b:0,g:0},kx=new nn,tp=new mt;tp.set(-1,0,0,0,1,0,0,0,1);function Bx(s,e,n,r,o,l){const c=new yt(0);let d=o===!0?0:1,h,m,_=null,x=0,g=null;function M(L){let F=L.isScene===!0?L.background:null;if(F&&F.isTexture){const b=L.backgroundBlurriness>0;F=e.get(F,b)}return F}function w(L){let F=!1;const b=M(L);b===null?S(c,d):b&&b.isColor&&(S(b,1),F=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(L,F){const b=M(F);b&&(b.isCubeTexture||b.mapping===po)?(m===void 0&&(m=new qn(new Ea(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Us(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=b,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(kx.makeRotationFromEuler(F.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(tp),m.material.toneMapped=Ct.getTransfer(b.colorSpace)!==kt,(_!==b||x!==b.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,_=b,x=b.version,g=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new qn(new $o(2,2),new Kn({name:"BackgroundMaterial",uniforms:Us(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(b.colorSpace)!==kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(_!==b||x!==b.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,_=b,x=b.version,g=s.toneMapping),h.layers.enableAll(),L.unshift(h,h.geometry,h.material,0,0,null))}function S(L,F){L.getRGB(Zo,Yh(s)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,F,l)}function v(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(L,F=1){c.set(L),d=F,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(L){d=L,S(c,d)},render:w,addToRenderList:R,dispose:v}}function zx(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function d(G,K,ce,fe,j){let $=!1;const W=x(G,fe,ce,K);l!==W&&(l=W,m(l.object)),$=M(G,fe,ce,j),$&&w(G,fe,ce,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,b(G,K,ce,fe),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function h(){return s.createVertexArray()}function m(G){return s.bindVertexArray(G)}function _(G){return s.deleteVertexArray(G)}function x(G,K,ce,fe){const j=fe.wireframe===!0;let $=r[K.id];$===void 0&&($={},r[K.id]=$);const W=G.isInstancedMesh===!0?G.id:0;let z=$[W];z===void 0&&(z={},$[W]=z);let re=z[ce.id];re===void 0&&(re={},z[ce.id]=re);let ae=re[j];return ae===void 0&&(ae=g(h()),re[j]=ae),ae}function g(G){const K=[],ce=[],fe=[];for(let j=0;j<n;j++)K[j]=0,ce[j]=0,fe[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ce,attributeDivisors:fe,object:G,attributes:{},index:null}}function M(G,K,ce,fe){const j=l.attributes,$=K.attributes;let W=0;const z=ce.getAttributes();for(const re in z)if(z[re].location>=0){const U=j[re];let Z=$[re];if(Z===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),U===void 0||U.attribute!==Z||Z&&U.data!==Z.data)return!0;W++}return l.attributesNum!==W||l.index!==fe}function w(G,K,ce,fe){const j={},$=K.attributes;let W=0;const z=ce.getAttributes();for(const re in z)if(z[re].location>=0){let U=$[re];U===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Z={};Z.attribute=U,U&&U.data&&(Z.data=U.data),j[re]=Z,W++}l.attributes=j,l.attributesNum=W,l.index=fe}function R(){const G=l.newAttributes;for(let K=0,ce=G.length;K<ce;K++)G[K]=0}function S(G){v(G,0)}function v(G,K){const ce=l.newAttributes,fe=l.enabledAttributes,j=l.attributeDivisors;ce[G]=1,fe[G]===0&&(s.enableVertexAttribArray(G),fe[G]=1),j[G]!==K&&(s.vertexAttribDivisor(G,K),j[G]=K)}function L(){const G=l.newAttributes,K=l.enabledAttributes;for(let ce=0,fe=K.length;ce<fe;ce++)K[ce]!==G[ce]&&(s.disableVertexAttribArray(ce),K[ce]=0)}function F(G,K,ce,fe,j,$,W){W===!0?s.vertexAttribIPointer(G,K,ce,j,$):s.vertexAttribPointer(G,K,ce,fe,j,$)}function b(G,K,ce,fe){R();const j=fe.attributes,$=ce.getAttributes(),W=K.defaultAttributeValues;for(const z in $){const re=$[z];if(re.location>=0){let ae=j[z];if(ae===void 0&&(z==="instanceMatrix"&&G.instanceMatrix&&(ae=G.instanceMatrix),z==="instanceColor"&&G.instanceColor&&(ae=G.instanceColor)),ae!==void 0){const U=ae.normalized,Z=ae.itemSize,Fe=e.get(ae);if(Fe===void 0)continue;const $e=Fe.buffer,Ge=Fe.type,se=Fe.bytesPerElement,ge=Ge===s.INT||Ge===s.UNSIGNED_INT||ae.gpuType===Iu;if(ae.isInterleavedBufferAttribute){const he=ae.data,Ne=he.stride,je=ae.offset;if(he.isInstancedInterleavedBuffer){for(let ke=0;ke<re.locationSize;ke++)v(re.location+ke,he.meshPerAttribute);G.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ke=0;ke<re.locationSize;ke++)S(re.location+ke);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let ke=0;ke<re.locationSize;ke++)F(re.location+ke,Z/re.locationSize,Ge,U,Ne*se,(je+Z/re.locationSize*ke)*se,ge)}else{if(ae.isInstancedBufferAttribute){for(let he=0;he<re.locationSize;he++)v(re.location+he,ae.meshPerAttribute);G.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let he=0;he<re.locationSize;he++)S(re.location+he);s.bindBuffer(s.ARRAY_BUFFER,$e);for(let he=0;he<re.locationSize;he++)F(re.location+he,Z/re.locationSize,Ge,U,Z*se,Z/re.locationSize*he*se,ge)}}else if(W!==void 0){const U=W[z];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(re.location,U);break;case 3:s.vertexAttrib3fv(re.location,U);break;case 4:s.vertexAttrib4fv(re.location,U);break;default:s.vertexAttrib1fv(re.location,U)}}}}L()}function I(){D();for(const G in r){const K=r[G];for(const ce in K){const fe=K[ce];for(const j in fe){const $=fe[j];for(const W in $)_($[W].object),delete $[W];delete fe[j]}}delete r[G]}}function C(G){if(r[G.id]===void 0)return;const K=r[G.id];for(const ce in K){const fe=K[ce];for(const j in fe){const $=fe[j];for(const W in $)_($[W].object),delete $[W];delete fe[j]}}delete r[G.id]}function O(G){for(const K in r){const ce=r[K];for(const fe in ce){const j=ce[fe];if(j[G.id]===void 0)continue;const $=j[G.id];for(const W in $)_($[W].object),delete $[W];delete j[G.id]}}}function E(G){for(const K in r){const ce=r[K],fe=G.isInstancedMesh===!0?G.id:0,j=ce[fe];if(j!==void 0){for(const $ in j){const W=j[$];for(const z in W)_(W[z].object),delete W[z];delete j[$]}delete ce[fe],Object.keys(ce).length===0&&delete r[K]}}}function D(){H(),c=!0,l!==o&&(l=o,m(l.object))}function H(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:D,resetDefaultState:H,dispose:I,releaseStatesOfGeometry:C,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:S,disableUnusedAttributes:L}}function Vx(s,e,n){let r;function o(h){r=h}function l(h,m){s.drawArrays(r,h,m),n.update(m,r,1)}function c(h,m,_){_!==0&&(s.drawArraysInstanced(r,h,m,_),n.update(m,r,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,_);let g=0;for(let M=0;M<_;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Hx(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==fi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const E=O===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ei&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bi&&!E)}function h(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(dt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const x=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),C=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:L,maxVaryings:F,maxFragmentUniforms:b,maxSamples:I,samples:C}}function Gx(s){const e=this;let n=null,r=0,o=!1,l=!1;const c=new qr,d=new mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const M=x.length!==0||g||r!==0||o;return o=g,r=x.length,M},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){n=_(x,g,0)},this.setState=function(x,g,M){const w=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,v=s.get(x);if(!o||w===null||w.length===0||l&&!S)l?_(null):m();else{const L=l?0:r,F=L*4;let b=v.clippingState||null;h.value=b,b=_(w,g,F,M);for(let I=0;I!==F;++I)b[I]=n[I];v.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(x,g,M,w){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=h.value,w!==!0||S===null){const v=M+R*4,L=g.matrixWorldInverse;d.getNormalMatrix(L),(S===null||S.length<v)&&(S=new Float32Array(v));for(let F=0,b=M;F!==R;++F,b+=4)c.copy(x[F]).applyMatrix4(L,d),c.normal.toArray(S,b),S[b+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}const gr=4,np=[.125,.215,.35,.446,.526,.582],Zr=20,Wx=256,Ta=new jh,ip=new yt;let Xc=null,$c=0,Yc=0,qc=!1;const Xx=new ie;class rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:c=256,position:d=Xx}=l;Xc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,d),n>0&&this._blur(h,0,0,n),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=op(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ap(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,$c,Yc),this._renderer.xr.enabled=qc,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Br||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Gi,format:fi,colorSpace:Mo,depthBuffer:!1},o=sp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sp(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$x(l)),this._blurMaterial=qx(l,e,n),this._ggxMaterial=Yx(l,e,n)}return o}_compileMaterial(e){const n=new qn(new gi,e);this._renderer.compile(n,Ta)}_sceneToCubeUV(e,n,r,o,l){const h=new ii(90,1,n,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,M=x.toneMapping;x.getClearColor(ip),x.toneMapping=wi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qn(new Ea,new Hc({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let v=!1;const L=e.background;L?L.isColor&&(S.color.copy(L),e.background=null,v=!0):(S.color.copy(ip),v=!0);for(let F=0;F<6;F++){const b=F%3;b===0?(h.up.set(0,m[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+_[F],l.y,l.z)):b===1?(h.up.set(0,0,m[F]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+_[F],l.z)):(h.up.set(0,m[F],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+_[F]));const I=this._cubeSize;ks(o,b*I,F>2?I:0,I,I),x.setRenderTarget(o),v&&x.render(R,h),x.render(e,h)}x.toneMapping=M,x.autoClear=g,e.background=L}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===Br||e.mapping===xs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=op()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ap());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;ks(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(c,Ta)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,m=r/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),x=Math.sqrt(m*m-_*_),g=0+m*1.25,M=x*g,{_lodMax:w}=this,R=this._sizeLods[r],S=3*R*(r>w-gr?r-w+gr:0),v=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=w-n,ks(l,S,v,3*R,2*R),o.setRenderTarget(l),o.render(d,Ta),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,ks(e,S,v,3*R,2*R),o.setRenderTarget(e),o.render(d,Ta)}_blur(e,n,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[o];x.material=m;const g=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),R=l/w,S=isFinite(l)?1+Math.floor(_*R):Zr;S>Zr&&dt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const v=[];let L=0;for(let O=0;O<Zr;++O){const E=O/R,D=Math.exp(-E*E/2);v.push(D),O===0?L+=D:O<S&&(L+=2*D)}for(let O=0;O<v.length;O++)v[O]=v[O]/L;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=v,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:F}=this;g.dTheta.value=w,g.mipInt.value=F-r;const b=this._sizeLods[o],I=3*b*(o>F-gr?o-F+gr:0),C=4*(this._cubeSize-b);ks(n,I,C,3*b,2*b),h.setRenderTarget(n),h.render(x,Ta)}}function $x(s){const e=[],n=[],r=[];let o=s;const l=s-gr+1+np.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);e.push(d);let h=1/d;c>s-gr?h=np[c-s+gr-1]:c===0&&(h=0),n.push(h);const m=1/(d-2),_=-m,x=1+m,g=[_,_,x,_,x,x,_,_,x,x,_,x],M=6,w=6,R=3,S=2,v=1,L=new Float32Array(R*w*M),F=new Float32Array(S*w*M),b=new Float32Array(v*w*M);for(let C=0;C<M;C++){const O=C%3*2/3-1,E=C>2?0:-1,D=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];L.set(D,R*w*C),F.set(g,S*w*C);const H=[C,C,C,C,C,C];b.set(H,v*w*C)}const I=new gi;I.setAttribute("position",new Pi(L,R)),I.setAttribute("uv",new Pi(F,S)),I.setAttribute("faceIndex",new Pi(b,v)),r.push(new qn(I,null)),o>gr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function sp(s,e,n){const r=new Ci(s,e,n);return r.texture.mapping=po,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ks(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function Yx(s,e,n){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Wx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function qx(s,e,n){const r=new Float32Array(Zr),o=new ie(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function ap(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function op(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}class lp extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Wh(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ea(5,5,5),l=new Kn({name:"CubemapFromEquirect",uniforms:Us(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Rn,blending:Vi});l.uniforms.tEquirect.value=n;const c=new qn(o,l),d=n.minFilter;return n.minFilter===zr&&(n.minFilter=Sn),new Iv(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(l)}}function Kx(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ru||M===Cu)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new lp(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",m),d(R.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const M=g.mapping,w=M===Ru||M===Cu,R=M===Br||M===xs;if(w||R){let S=n.get(g);const v=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new rp(s)),S=w?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const L=g.image;return w&&L&&L.height>0||R&&L&&h(L)?(r===null&&(r=new rp(s)),S=w?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",_),S.texture):null}}}return g}function d(g,M){return M===Ru?g.mapping=Br:M===Cu&&(g.mapping=xs),g}function h(g){let M=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&M++;return M===w}function m(g){const M=g.target;M.removeEventListener("dispose",m);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function _(g){const M=g.target;M.removeEventListener("dispose",_);const w=n.get(M);w!==void 0&&(n.delete(M),w.dispose())}function x(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function Zx(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ys("WebGLRenderer: "+r+" extension not supported."),o}}}function jx(s,e,n,r){const o={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",c),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(x,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,n.memory.geometries++),g}function h(x){const g=x.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(x){const g=[],M=x.index,w=x.attributes.position;let R=0;if(w===void 0)return;if(M!==null){const L=M.array;R=M.version;for(let F=0,b=L.length;F<b;F+=3){const I=L[F+0],C=L[F+1],O=L[F+2];g.push(I,C,C,O,O,I)}}else{const L=w.array;R=w.version;for(let F=0,b=L.length/3-1;F<b;F+=3){const I=F+0,C=F+1,O=F+2;g.push(I,C,C,O,O,I)}}const S=new(w.count>=65535?Bh:kh)(g,1);S.version=R;const v=l.get(x);v&&e.remove(v),l.set(x,S)}function _(x){const g=l.get(x);if(g){const M=x.index;M!==null&&g.version<M.version&&m(x)}else m(x);return l.get(x)}return{get:d,update:h,getWireframeAttribute:_}}function Qx(s,e,n){let r;function o(x){r=x}let l,c;function d(x){l=x.type,c=x.bytesPerElement}function h(x,g){s.drawElements(r,g,l,x*c),n.update(g,r,1)}function m(x,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,x*c,M),n.update(g,r,M))}function _(x,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,x,0,M);let R=0;for(let S=0;S<M;S++)R+=g[S];n.update(R,r,1)}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=_}function Jx(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Dt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function eS(s,e,n){const r=new WeakMap,o=new Jt;function l(c,d,h){const m=c.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=_!==void 0?_.length:0;let g=r.get(d);if(g===void 0||g.count!==x){let D=function(){O.dispose(),r.delete(d),d.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let F=0;M===!0&&(F=1),w===!0&&(F=2),R===!0&&(F=3);let b=d.attributes.position.count*F,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const C=new Float32Array(b*I*4*x),O=new bh(C,b,I,x);O.type=bi,O.needsUpdate=!0;const E=F*4;for(let H=0;H<x;H++){const G=S[H],K=v[H],ce=L[H],fe=b*I*4*H;for(let j=0;j<G.count;j++){const $=j*E;M===!0&&(o.fromBufferAttribute(G,j),C[fe+$+0]=o.x,C[fe+$+1]=o.y,C[fe+$+2]=o.z,C[fe+$+3]=0),w===!0&&(o.fromBufferAttribute(K,j),C[fe+$+4]=o.x,C[fe+$+5]=o.y,C[fe+$+6]=o.z,C[fe+$+7]=0),R===!0&&(o.fromBufferAttribute(ce,j),C[fe+$+8]=o.x,C[fe+$+9]=o.y,C[fe+$+10]=o.z,C[fe+$+11]=ce.itemSize===4?o.w:1)}}g={count:x,texture:O,size:new Nt(b,I)},r.set(d,g),d.addEventListener("dispose",D)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let M=0;for(let R=0;R<m.length;R++)M+=m[R];const w=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function tS(s,e,n,r,o){let l=new WeakMap;function c(m){const _=o.render.frame,x=m.geometry,g=e.get(m,x);if(l.get(g)!==_&&(e.update(g),l.set(g,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==_&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,_))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==_&&(M.update(),l.set(M,_))}return g}function d(){l=new WeakMap}function h(m){const _=m.target;_.removeEventListener("dispose",h),r.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:d}}const nS={[nh]:"LINEAR_TONE_MAPPING",[ih]:"REINHARD_TONE_MAPPING",[rh]:"CINEON_TONE_MAPPING",[sh]:"ACES_FILMIC_TONE_MAPPING",[oh]:"AGX_TONE_MAPPING",[lh]:"NEUTRAL_TONE_MAPPING",[ah]:"CUSTOM_TONE_MAPPING"};function iS(s,e,n,r,o,l){const c=new Ci(e,n,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new Ns(e,n):void 0}),d=new Ci(e,n,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),h=new gi;h.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Pn([0,2,0,0,2,0],2));const m=new Pv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new qn(h,m),x=new jh(-1,1,1,-1,0,1);let g=null,M=null,w=!1,R,S=null,v=[],L=!1;this.setSize=function(F,b){c.setSize(F,b),d.setSize(F,b);for(let I=0;I<v.length;I++){const C=v[I];C.setSize&&C.setSize(F,b)}},this.setEffects=function(F){v=F,L=v.length>0&&v[0].isRenderPass===!0;const b=c.width,I=c.height;for(let C=0;C<v.length;C++){const O=v[C];O.setSize&&O.setSize(b,I)}},this.begin=function(F,b){if(w||F.toneMapping===wi&&v.length===0)return!1;if(S=b,b!==null){const I=b.width,C=b.height;(c.width!==I||c.height!==C)&&this.setSize(I,C)}return L===!1&&F.setRenderTarget(c),R=F.toneMapping,F.toneMapping=wi,!0},this.hasRenderPass=function(){return L},this.end=function(F,b){F.toneMapping=R,w=!0;let I=c,C=d;for(let O=0;O<v.length;O++){const E=v[O];if(E.enabled!==!1&&(E.render(F,C,I,b),E.needsSwap!==!1)){const D=I;I=C,C=D}}if(g!==F.outputColorSpace||M!==F.toneMapping){g=F.outputColorSpace,M=F.toneMapping,m.defines={},Ct.getTransfer(g)===kt&&(m.defines.SRGB_TRANSFER="");const O=nS[M];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,F.setRenderTarget(S),F.render(_,x),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const up=new Cn,Kc=new Ns(1,1),cp=new bh,fp=new av,dp=new Wh,hp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),vp=new Float32Array(4);function Bs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=hp[o];if(l===void 0&&(l=new Float32Array(o),hp[o]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(l,d)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function ln(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Qo(s,e){let n=pp[e];n===void 0&&(n=new Int32Array(e),pp[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function rS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function sS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2fv(this.addr,e),ln(n,e)}}function aS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;s.uniform3fv(this.addr,e),ln(n,e)}}function oS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4fv(this.addr,e),ln(n,e)}}function lS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(n,e)}else{if(on(n,r))return;vp.set(r),s.uniformMatrix2fv(this.addr,!1,vp),ln(n,r)}}function uS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(n,e)}else{if(on(n,r))return;gp.set(r),s.uniformMatrix3fv(this.addr,!1,gp),ln(n,r)}}function cS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(n,e)}else{if(on(n,r))return;mp.set(r),s.uniformMatrix4fv(this.addr,!1,mp),ln(n,r)}}function fS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function dS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2iv(this.addr,e),ln(n,e)}}function hS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3iv(this.addr,e),ln(n,e)}}function pS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4iv(this.addr,e),ln(n,e)}}function mS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2uiv(this.addr,e),ln(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3uiv(this.addr,e),ln(n,e)}}function _S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4uiv(this.addr,e),ln(n,e)}}function xS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Kc.compareFunction=n.isReversedDepthBuffer()?gc:mc,l=Kc):l=up,n.setTexture2D(e||l,o)}function SS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||fp,o)}function yS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||dp,o)}function MS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||cp,o)}function ES(s){switch(s){case 5126:return rS;case 35664:return sS;case 35665:return aS;case 35666:return oS;case 35674:return lS;case 35675:return uS;case 35676:return cS;case 5124:case 35670:return fS;case 35667:case 35671:return dS;case 35668:case 35672:return hS;case 35669:case 35673:return pS;case 5125:return mS;case 36294:return gS;case 36295:return vS;case 36296:return _S;case 35678:case 36198:case 36298:case 36306:case 35682:return xS;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return yS;case 36289:case 36303:case 36311:case 36292:return MS}}function TS(s,e){s.uniform1fv(this.addr,e)}function wS(s,e){const n=Bs(e,this.size,2);s.uniform2fv(this.addr,n)}function AS(s,e){const n=Bs(e,this.size,3);s.uniform3fv(this.addr,n)}function bS(s,e){const n=Bs(e,this.size,4);s.uniform4fv(this.addr,n)}function RS(s,e){const n=Bs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function CS(s,e){const n=Bs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function PS(s,e){const n=Bs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function LS(s,e){s.uniform1iv(this.addr,e)}function DS(s,e){s.uniform2iv(this.addr,e)}function IS(s,e){s.uniform3iv(this.addr,e)}function NS(s,e){s.uniform4iv(this.addr,e)}function US(s,e){s.uniform1uiv(this.addr,e)}function FS(s,e){s.uniform2uiv(this.addr,e)}function OS(s,e){s.uniform3uiv(this.addr,e)}function kS(s,e){s.uniform4uiv(this.addr,e)}function BS(s,e,n){const r=this.cache,o=e.length,l=Qo(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=Kc:c=up;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||c,l[d])}function zS(s,e,n){const r=this.cache,o=e.length,l=Qo(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||fp,l[c])}function VS(s,e,n){const r=this.cache,o=e.length,l=Qo(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||dp,l[c])}function HS(s,e,n){const r=this.cache,o=e.length,l=Qo(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||cp,l[c])}function GS(s){switch(s){case 5126:return TS;case 35664:return wS;case 35665:return AS;case 35666:return bS;case 35674:return RS;case 35675:return CS;case 35676:return PS;case 5124:case 35670:return LS;case 35667:case 35671:return DS;case 35668:case 35672:return IS;case 35669:case 35673:return NS;case 5125:return US;case 36294:return FS;case 36295:return OS;case 36296:return kS;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return zS;case 35680:case 36300:case 36308:case 36293:return VS;case 36289:case 36303:case 36311:case 36292:return HS}}class WS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=ES(n.type)}}class XS{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GS(n.type)}}class $S{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const Zc=/(\w+)(\])?(\[|\.)?/g;function _p(s,e){s.seq.push(e),s.map[e.id]=e}function YS(s,e,n){const r=s.name,o=r.length;for(Zc.lastIndex=0;;){const l=Zc.exec(r),c=Zc.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===o){_p(n,m===void 0?new WS(d,s,e):new XS(d,s,e));break}else{let x=n.map[d];x===void 0&&(x=new $S(d),_p(n,x)),n=x}}}class Jo{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),h=e.getUniformLocation(n,d.name);YS(d,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,c=n.length;l!==c;++l){const d=n[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function xp(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const qS=37297;let KS=0;function ZS(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let c=o;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Sp=new mt;function jS(s){Ct._getMatrix(Sp,Ct.workingColorSpace,s);const e=`mat3( ${Sp.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Eo:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function yp(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+ZS(s.getShaderSource(e),d)}else return l}function QS(s,e){const n=jS(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const JS={[nh]:"Linear",[ih]:"Reinhard",[rh]:"Cineon",[sh]:"ACESFilmic",[oh]:"AgX",[lh]:"Neutral",[ah]:"Custom"};function ey(s,e){const n=JS[e];return n===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new ie;function ty(){Ct.getLuminanceCoefficients(el);const s=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ny(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function iy(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function ry(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function wa(s){return s!==""}function Mp(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sy=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(s){return s.replace(sy,oy)}const ay=new Map;function oy(s,e){let n=Mt[e];if(n===void 0){const r=ay.get(e);if(r!==void 0)n=Mt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return jc(n)}const ly=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(s){return s.replace(ly,uy)}function uy(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function wp(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cy={[ho]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function fy(s){return cy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dy={[Br]:"ENVMAP_TYPE_CUBE",[xs]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE_UV"};function hy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":dy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const py={[xs]:"ENVMAP_MODE_REFRACTION"};function my(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":py[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gy={[th]:"ENVMAP_BLENDING_MULTIPLY",[B0]:"ENVMAP_BLENDING_MIX",[z0]:"ENVMAP_BLENDING_ADD"};function vy(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":gy[s.combine]||"ENVMAP_BLENDING_NONE"}function _y(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function xy(s,e,n,r){const o=s.getContext(),l=n.defines;let c=n.vertexShader,d=n.fragmentShader;const h=fy(n),m=hy(n),_=my(n),x=vy(n),g=_y(n),M=ny(n),w=iy(l),R=o.createProgram();let S,v,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(wa).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(wa).join(`
`),v.length>0&&(v+=`
`)):(S=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),v=[wp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Mt.tonemapping_pars_fragment:"",n.toneMapping!==wi?ey("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,QS("linearToOutputTexel",n.outputColorSpace),ty(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wa).join(`
`)),c=jc(c),c=Mp(c,n),c=Ep(c,n),d=jc(d),d=Mp(d,n),d=Ep(d,n),c=Tp(c),d=Tp(d),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",n.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=L+S+c,b=L+v+d,I=xp(o,o.VERTEX_SHADER,F),C=xp(o,o.FRAGMENT_SHADER,b);o.attachShader(R,I),o.attachShader(R,C),n.index0AttributeName!==void 0?o.bindAttribLocation(R,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function O(G){if(s.debug.checkShaderErrors){const K=o.getProgramInfoLog(R)||"",ce=o.getShaderInfoLog(I)||"",fe=o.getShaderInfoLog(C)||"",j=K.trim(),$=ce.trim(),W=fe.trim();let z=!0,re=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,I,C);else{const ae=yp(o,I,"vertex"),U=yp(o,C,"fragment");Dt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+ae+`
`+U)}else j!==""?dt("WebGLProgram: Program Info Log:",j):($===""||W==="")&&(re=!1);re&&(G.diagnostics={runnable:z,programLog:j,vertexShader:{log:$,prefix:S},fragmentShader:{log:W,prefix:v}})}o.deleteShader(I),o.deleteShader(C),E=new Jo(o,R),D=ry(o,R)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let H=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=o.getProgramParameter(R,qS)),H},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KS++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=C,this}let Sy=0;class yy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new My(e),n.set(e,r)),r}}class My{constructor(e){this.id=Sy++,this.code=e,this.usedTimes=0}}function Ey(s){return s===Hr||s===So||s===yo}function Ty(s,e,n,r,o,l){const c=new Ph,d=new yy,h=new Set,m=[],_=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return h.add(E),E===0?"uv":`uv${E}`}function R(E,D,H,G,K,ce){const fe=G.fog,j=K.geometry,$=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,W=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,z=e.get(E.envMap||$,W),re=z&&z.mapping===po?z.image.height:null,ae=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&dt("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const U=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Z=U!==void 0?U.length:0;let Fe=0;j.morphAttributes.position!==void 0&&(Fe=1),j.morphAttributes.normal!==void 0&&(Fe=2),j.morphAttributes.color!==void 0&&(Fe=3);let $e,Ge,se,ge;if(ae){const He=Di[ae];$e=He.vertexShader,Ge=He.fragmentShader}else{$e=E.vertexShader,Ge=E.fragmentShader;const He=d.getVertexShaderStage(E),pt=d.getFragmentShaderStage(E);d.update(E,He,pt),se=He.id,ge=pt.id}const he=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),je=K.isInstancedMesh===!0,ke=K.isBatchedMesh===!0,St=!!E.map,at=!!E.matcap,Pt=!!z,bt=!!E.aoMap,_t=!!E.lightMap,Te=!!E.bumpMap&&E.wireframe===!1,Qe=!!E.normalMap,st=!!E.displacementMap,ot=!!E.emissiveMap,Ye=!!E.metalnessMap,xt=!!E.roughnessMap,B=E.anisotropy>0,Vt=E.clearcoat>0,wt=E.dispersion>0,P=E.iridescence>0,y=E.sheen>0,q=E.transmission>0,ee=B&&!!E.anisotropyMap,ue=Vt&&!!E.clearcoatMap,Ee=Vt&&!!E.clearcoatNormalMap,Ie=Vt&&!!E.clearcoatRoughnessMap,de=P&&!!E.iridescenceMap,pe=P&&!!E.iridescenceThicknessMap,be=y&&!!E.sheenColorMap,Ke=y&&!!E.sheenRoughnessMap,De=!!E.specularMap,Ce=!!E.specularColorMap,qe=!!E.specularIntensityMap,nt=q&&!!E.transmissionMap,ut=q&&!!E.thicknessMap,V=!!E.gradientMap,Ae=!!E.alphaMap,me=E.alphaTest>0,Pe=!!E.alphaHash,ye=!!E.extensions;let ve=wi;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ve=s.toneMapping);const Be={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:$e,fragmentShader:Ge,defines:E.defines,customVertexShaderID:se,customFragmentShaderID:ge,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:ke,batchingColor:ke&&K._colorsTexture!==null,instancing:je,instancingColor:je&&K.instanceColor!==null,instancingMorph:je&&K.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:St,matcap:at,envMap:Pt,envMapMode:Pt&&z.mapping,envMapCubeUVHeight:re,aoMap:bt,lightMap:_t,bumpMap:Te,normalMap:Qe,displacementMap:st,emissiveMap:ot,normalMapObjectSpace:Qe&&E.normalMapType===G0,normalMapTangentSpace:Qe&&E.normalMapType===vh,packedNormalMap:Qe&&E.normalMapType===vh&&Ey(E.normalMap.format),metalnessMap:Ye,roughnessMap:xt,anisotropy:B,anisotropyMap:ee,clearcoat:Vt,clearcoatMap:ue,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ie,dispersion:wt,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:y,sheenColorMap:be,sheenRoughnessMap:Ke,specularMap:De,specularColorMap:Ce,specularIntensityMap:qe,transmission:q,transmissionMap:nt,thicknessMap:ut,gradientMap:V,opaque:E.transparent===!1&&E.blending===vs&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:me,alphaHash:Pe,combine:E.combine,mapUv:St&&w(E.map.channel),aoMapUv:bt&&w(E.aoMap.channel),lightMapUv:_t&&w(E.lightMap.channel),bumpMapUv:Te&&w(E.bumpMap.channel),normalMapUv:Qe&&w(E.normalMap.channel),displacementMapUv:st&&w(E.displacementMap.channel),emissiveMapUv:ot&&w(E.emissiveMap.channel),metalnessMapUv:Ye&&w(E.metalnessMap.channel),roughnessMapUv:xt&&w(E.roughnessMap.channel),anisotropyMapUv:ee&&w(E.anisotropyMap.channel),clearcoatMapUv:ue&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&w(E.sheenRoughnessMap.channel),specularMapUv:De&&w(E.specularMap.channel),specularColorMapUv:Ce&&w(E.specularColorMap.channel),specularIntensityMapUv:qe&&w(E.specularIntensityMap.channel),transmissionMapUv:nt&&w(E.transmissionMap.channel),thicknessMapUv:ut&&w(E.thicknessMap.channel),alphaMapUv:Ae&&w(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Qe||B),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!j.attributes.uv&&(St||Ae),fog:!!fe,useFog:E.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&Qe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ne,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Fe,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:St&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:ot&&E.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zi,flipSided:E.side===Rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ye&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&E.extensions.multiDraw===!0||ke)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=h.has(1),Be.vertexUv2s=h.has(2),Be.vertexUv3s=h.has(3),h.clear(),Be}function S(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)D.push(H),D.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(v(D,E),L(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function v(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function L(E,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),D.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function F(E){const D=M[E.type];let H;if(D){const G=Di[D];H=bv.clone(G.uniforms)}else H=E.uniforms;return H}function b(E,D){let H=_.get(D);return H!==void 0?++H.usedTimes:(H=new xy(s,D,E,o),m.push(H),_.set(D,H)),H}function I(E){if(--E.usedTimes===0){const D=m.indexOf(E);m[D]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function C(E){d.remove(E)}function O(){d.dispose()}return{getParameters:R,getProgramCacheKey:S,getUniforms:F,acquireProgram:b,releaseProgram:I,releaseShaderCache:C,programs:m,dispose:O}}function wy(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function Ay(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Ap(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bp(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,w,R,S,v){let L=s[e];return L===void 0?(L={id:g.id,object:g,geometry:M,material:w,materialVariant:c(g),groupOrder:R,renderOrder:g.renderOrder,z:S,group:v},s[e]=L):(L.id=g.id,L.object=g,L.geometry=M,L.material=w,L.materialVariant=c(g),L.groupOrder=R,L.renderOrder=g.renderOrder,L.z=S,L.group=v),e++,L}function h(g,M,w,R,S,v){const L=d(g,M,w,R,S,v);w.transmission>0?r.push(L):w.transparent===!0?o.push(L):n.push(L)}function m(g,M,w,R,S,v){const L=d(g,M,w,R,S,v);w.transmission>0?r.unshift(L):w.transparent===!0?o.unshift(L):n.unshift(L)}function _(g,M,w){n.length>1&&n.sort(g||Ay),r.length>1&&r.sort(M||Ap),o.length>1&&o.sort(M||Ap),w&&(n.reverse(),r.reverse(),o.reverse())}function x(){for(let g=e,M=s.length;g<M;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:h,unshift:m,finish:x,sort:_}}function by(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new bp,s.set(r,[c])):o>=l.length?(c=new bp,l.push(c)):c=l[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function Ry(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new yt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function Cy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let Py=0;function Ly(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dy(s){const e=new Ry,n=Cy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,l=new nn,c=new nn;function d(m){let _=0,x=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let M=0,w=0,R=0,S=0,v=0,L=0,F=0,b=0,I=0,C=0,O=0;m.sort(Ly);for(let D=0,H=m.length;D<H;D++){const G=m[D],K=G.color,ce=G.intensity,fe=G.distance;let j=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Hr?j=G.shadow.map.texture:j=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=K.r*ce,x+=K.g*ce,g+=K.b*ce;else if(G.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(G.sh.coefficients[$],ce);O++}else if(G.isDirectionalLight){const $=e.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,z=n.get(G);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,r.directionalShadow[M]=z,r.directionalShadowMap[M]=j,r.directionalShadowMatrix[M]=G.shadow.matrix,L++}r.directional[M]=$,M++}else if(G.isSpotLight){const $=e.get(G);$.position.setFromMatrixPosition(G.matrixWorld),$.color.copy(K).multiplyScalar(ce),$.distance=fe,$.coneCos=Math.cos(G.angle),$.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),$.decay=G.decay,r.spot[R]=$;const W=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,W.updateMatrices(G),G.castShadow&&C++),r.spotLightMatrix[R]=W.matrix,G.castShadow){const z=n.get(G);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,r.spotShadow[R]=z,r.spotShadowMap[R]=j,b++}R++}else if(G.isRectAreaLight){const $=e.get(G);$.color.copy(K).multiplyScalar(ce),$.halfWidth.set(G.width*.5,0,0),$.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=$,S++}else if(G.isPointLight){const $=e.get(G);if($.color.copy(G.color).multiplyScalar(G.intensity),$.distance=G.distance,$.decay=G.decay,G.castShadow){const W=G.shadow,z=n.get(G);z.shadowIntensity=W.intensity,z.shadowBias=W.bias,z.shadowNormalBias=W.normalBias,z.shadowRadius=W.radius,z.shadowMapSize=W.mapSize,z.shadowCameraNear=W.camera.near,z.shadowCameraFar=W.camera.far,r.pointShadow[w]=z,r.pointShadowMap[w]=j,r.pointShadowMatrix[w]=G.shadow.matrix,F++}r.point[w]=$,w++}else if(G.isHemisphereLight){const $=e.get(G);$.skyColor.copy(G.color).multiplyScalar(ce),$.groundColor.copy(G.groundColor).multiplyScalar(ce),r.hemi[v]=$,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==M||E.pointLength!==w||E.spotLength!==R||E.rectAreaLength!==S||E.hemiLength!==v||E.numDirectionalShadows!==L||E.numPointShadows!==F||E.numSpotShadows!==b||E.numSpotMaps!==I||E.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=S,r.point.length=w,r.hemi.length=v,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=b+I-C,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=C,r.numLightProbes=O,E.directionalLength=M,E.pointLength=w,E.spotLength=R,E.rectAreaLength=S,E.hemiLength=v,E.numDirectionalShadows=L,E.numPointShadows=F,E.numSpotShadows=b,E.numSpotMaps=I,E.numLightProbes=O,r.version=Py++)}function h(m,_){let x=0,g=0,M=0,w=0,R=0;const S=_.matrixWorldInverse;for(let v=0,L=m.length;v<L;v++){const F=m[v];if(F.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),x++}else if(F.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(S),M++}else if(F.isRectAreaLight){const b=r.rectArea[w];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(F.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(F.width*.5,0,0),b.halfHeight.set(0,F.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),w++}else if(F.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(F.matrixWorld),b.position.applyMatrix4(S),g++}else if(F.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(F.matrixWorld),b.direction.transformDirection(S),R++}}}return{setup:d,setupView:h,state:r}}function Rp(s){const e=new Dy(s),n=[],r=[],o=[];function l(g){x.camera=g,n.length=0,r.length=0,o.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function h(g){o.push(g)}function m(){e.setup(n)}function _(g){e.setupView(n,g)}const x={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:m,setupLightsView:_,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function Iy(s){let e=new WeakMap;function n(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Rp(s),e.set(o,[d])):l>=c.length?(d=new Rp(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ny=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Fy=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],Oy=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Cp=new nn,Aa=new ie,Qc=new ie;function ky(s,e,n){let r=new Gh;const o=new Nt,l=new Nt,c=new Jt,d=new Lv,h=new Dv,m={},_=n.maxTextureSize,x={[lr]:Rn,[Rn]:lr,[zi]:zi},g=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Ny,fragmentShader:Uy}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new gi;w.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new qn(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ho;let v=this.type;this.render=function(C,O,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||C.length===0)return;this.type===S0&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ho);const D=s.getRenderTarget(),H=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),K=s.state;K.setBlending(Vi),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ce=v!==this.type;ce&&O.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach(j=>j.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,j=C.length;fe<j;fe++){const $=C[fe],W=$.shadow;if(W===void 0){dt("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const z=W.getFrameExtents();o.multiply(z),l.copy(W.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/z.x),o.x=l.x*z.x,W.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/z.y),o.y=l.y*z.y,W.mapSize.y=l.y));const re=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=re,W.map===null||ce===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ha){if($.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ci(o.x,o.y,{format:Hr,type:Gi,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new Ns(o.x,o.y,bi),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=Wi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn}else $.isPointLight?(W.map=new lp(o.x),W.map.depthTexture=new wv(o.x,Ai)):(W.map=new Ci(o.x,o.y),W.map.depthTexture=new Ns(o.x,o.y,Ai)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=Wi,this.type===ho?(W.map.depthTexture.compareFunction=re?gc:mc,W.map.depthTexture.minFilter=Sn,W.map.depthTexture.magFilter=Sn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=mn,W.map.depthTexture.magFilter=mn);W.camera.updateProjectionMatrix()}const ae=W.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ae;U++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,U),s.clear();else{U===0&&(s.setRenderTarget(W.map),s.clear());const Z=W.getViewport(U);c.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),K.viewport(c)}if($.isPointLight){const Z=W.camera,Fe=W.matrix,$e=$.distance||Z.far;$e!==Z.far&&(Z.far=$e,Z.updateProjectionMatrix()),Aa.setFromMatrixPosition($.matrixWorld),Z.position.copy(Aa),Qc.copy(Z.position),Qc.add(Fy[U]),Z.up.copy(Oy[U]),Z.lookAt(Qc),Z.updateMatrixWorld(),Fe.makeTranslation(-Aa.x,-Aa.y,-Aa.z),Cp.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Cp,Z.coordinateSystem,Z.reversedDepth)}else W.updateMatrices($);r=W.getFrustum(),b(O,E,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===ha&&L(W,E),W.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(D,H,G)};function L(C,O){const E=e.update(R);g.defines.VSM_SAMPLES!==C.blurSamples&&(g.defines.VSM_SAMPLES=C.blurSamples,M.defines.VSM_SAMPLES=C.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ci(o.x,o.y,{format:Hr,type:Gi})),g.uniforms.shadow_pass.value=C.map.depthTexture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(O,null,E,g,R,null),M.uniforms.shadow_pass.value=C.mapPass.texture,M.uniforms.resolution.value=C.mapSize,M.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(O,null,E,M,R,null)}function F(C,O,E,D){let H=null;const G=E.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(G!==void 0)H=G;else if(H=E.isPointLight===!0?h:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=H.uuid,ce=O.uuid;let fe=m[K];fe===void 0&&(fe={},m[K]=fe);let j=fe[ce];j===void 0&&(j=H.clone(),fe[ce]=j,O.addEventListener("dispose",I)),H=j}if(H.visible=O.visible,H.wireframe=O.wireframe,D===ha?H.side=O.shadowSide!==null?O.shadowSide:O.side:H.side=O.shadowSide!==null?O.shadowSide:x[O.side],H.alphaMap=O.alphaMap,H.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,H.map=O.map,H.clipShadows=O.clipShadows,H.clippingPlanes=O.clippingPlanes,H.clipIntersection=O.clipIntersection,H.displacementMap=O.displacementMap,H.displacementScale=O.displacementScale,H.displacementBias=O.displacementBias,H.wireframeLinewidth=O.wireframeLinewidth,H.linewidth=O.linewidth,E.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const K=s.properties.get(H);K.light=E}return H}function b(C,O,E,D,H){if(C.visible===!1)return;if(C.layers.test(O.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&H===ha)&&(!C.frustumCulled||r.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,C.matrixWorld);const ce=e.update(C),fe=C.material;if(Array.isArray(fe)){const j=ce.groups;for(let $=0,W=j.length;$<W;$++){const z=j[$],re=fe[z.materialIndex];if(re&&re.visible){const ae=F(C,re,D,H);C.onBeforeShadow(s,C,O,E,ce,ae,z),s.renderBufferDirect(E,null,ce,ae,C,z),C.onAfterShadow(s,C,O,E,ce,ae,z)}}}else if(fe.visible){const j=F(C,fe,D,H);C.onBeforeShadow(s,C,O,E,ce,j,null),s.renderBufferDirect(E,null,ce,j,C,null),C.onAfterShadow(s,C,O,E,ce,j,null)}}const K=C.children;for(let ce=0,fe=K.length;ce<fe;ce++)b(K[ce],O,E,D,H)}function I(C){C.target.removeEventListener("dispose",I);for(const E in m){const D=m[E],H=C.target.uuid;H in D&&(D[H].dispose(),delete D[H])}}}function By(s,e){function n(){let V=!1;const Ae=new Jt;let me=null;const Pe=new Jt(0,0,0,0);return{setMask:function(ye){me!==ye&&!V&&(s.colorMask(ye,ye,ye,ye),me=ye)},setLocked:function(ye){V=ye},setClear:function(ye,ve,Be,He,pt){pt===!0&&(ye*=He,ve*=He,Be*=He),Ae.set(ye,ve,Be,He),Pe.equals(Ae)===!1&&(s.clearColor(ye,ve,Be,He),Pe.copy(Ae))},reset:function(){V=!1,me=null,Pe.set(-1,0,0,0)}}}function r(){let V=!1,Ae=!1,me=null,Pe=null,ye=null;return{setReversed:function(ve){if(Ae!==ve){const Be=e.get("EXT_clip_control");ve?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const He=ye;ye=null,this.setClear(He)}},getReversed:function(){return Ae},setTest:function(ve){ve?he(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(ve){me!==ve&&!V&&(s.depthMask(ve),me=ve)},setFunc:function(ve){if(Ae&&(ve=J0[ve]),Pe!==ve){switch(ve){case yu:s.depthFunc(s.NEVER);break;case Mu:s.depthFunc(s.ALWAYS);break;case Eu:s.depthFunc(s.LESS);break;case _s:s.depthFunc(s.LEQUAL);break;case Tu:s.depthFunc(s.EQUAL);break;case wu:s.depthFunc(s.GEQUAL);break;case Au:s.depthFunc(s.GREATER);break;case bu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=ve}},setLocked:function(ve){V=ve},setClear:function(ve){ye!==ve&&(ye=ve,Ae&&(ve=1-ve),s.clearDepth(ve))},reset:function(){V=!1,me=null,Pe=null,ye=null,Ae=!1}}}function o(){let V=!1,Ae=null,me=null,Pe=null,ye=null,ve=null,Be=null,He=null,pt=null;return{setTest:function(Ut){V||(Ut?he(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(Ut){Ae!==Ut&&!V&&(s.stencilMask(Ut),Ae=Ut)},setFunc:function(Ut,En,ri){(me!==Ut||Pe!==En||ye!==ri)&&(s.stencilFunc(Ut,En,ri),me=Ut,Pe=En,ye=ri)},setOp:function(Ut,En,ri){(ve!==Ut||Be!==En||He!==ri)&&(s.stencilOp(Ut,En,ri),ve=Ut,Be=En,He=ri)},setLocked:function(Ut){V=Ut},setClear:function(Ut){pt!==Ut&&(s.clearStencil(Ut),pt=Ut)},reset:function(){V=!1,Ae=null,me=null,Pe=null,ye=null,ve=null,Be=null,He=null,pt=null}}}const l=new n,c=new r,d=new o,h=new WeakMap,m=new WeakMap;let _={},x={},g={},M=new WeakMap,w=[],R=null,S=!1,v=null,L=null,F=null,b=null,I=null,C=null,O=null,E=new yt(0,0,0),D=0,H=!1,G=null,K=null,ce=null,fe=null,j=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(re)[1]),W=z>=1):re.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),W=z>=2);let ae=null,U={};const Z=s.getParameter(s.SCISSOR_BOX),Fe=s.getParameter(s.VIEWPORT),$e=new Jt().fromArray(Z),Ge=new Jt().fromArray(Fe);function se(V,Ae,me,Pe){const ye=new Uint8Array(4),ve=s.createTexture();s.bindTexture(V,ve),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Be=0;Be<me;Be++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Ae+Be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return ve}const ge={};ge[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),he(s.DEPTH_TEST),c.setFunc(_s),Te(!1),Qe(Qd),he(s.CULL_FACE),bt(Vi);function he(V){_[V]!==!0&&(s.enable(V),_[V]=!0)}function Ne(V){_[V]!==!1&&(s.disable(V),_[V]=!1)}function je(V,Ae){return g[V]!==Ae?(s.bindFramebuffer(V,Ae),g[V]=Ae,V===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),V===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function ke(V,Ae){let me=w,Pe=!1;if(V){me=M.get(Ae),me===void 0&&(me=[],M.set(Ae,me));const ye=V.textures;if(me.length!==ye.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,Be=ye.length;ve<Be;ve++)me[ve]=s.COLOR_ATTACHMENT0+ve;me.length=ye.length,Pe=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(me)}function St(V){return R!==V?(s.useProgram(V),R=V,!0):!1}const at={[kr]:s.FUNC_ADD,[M0]:s.FUNC_SUBTRACT,[E0]:s.FUNC_REVERSE_SUBTRACT};at[T0]=s.MIN,at[w0]=s.MAX;const Pt={[A0]:s.ZERO,[b0]:s.ONE,[R0]:s.SRC_COLOR,[xu]:s.SRC_ALPHA,[N0]:s.SRC_ALPHA_SATURATE,[D0]:s.DST_COLOR,[P0]:s.DST_ALPHA,[C0]:s.ONE_MINUS_SRC_COLOR,[Su]:s.ONE_MINUS_SRC_ALPHA,[I0]:s.ONE_MINUS_DST_COLOR,[L0]:s.ONE_MINUS_DST_ALPHA,[U0]:s.CONSTANT_COLOR,[F0]:s.ONE_MINUS_CONSTANT_COLOR,[O0]:s.CONSTANT_ALPHA,[k0]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(V,Ae,me,Pe,ye,ve,Be,He,pt,Ut){if(V===Vi){S===!0&&(Ne(s.BLEND),S=!1);return}if(S===!1&&(he(s.BLEND),S=!0),V!==y0){if(V!==v||Ut!==H){if((L!==kr||I!==kr)&&(s.blendEquation(s.FUNC_ADD),L=kr,I=kr),Ut)switch(V){case vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _u:s.blendFunc(s.ONE,s.ONE);break;case Jd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case eh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",V);break}else switch(V){case vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case _u:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Jd:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eh:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",V);break}F=null,b=null,C=null,O=null,E.set(0,0,0),D=0,v=V,H=Ut}return}ye=ye||Ae,ve=ve||me,Be=Be||Pe,(Ae!==L||ye!==I)&&(s.blendEquationSeparate(at[Ae],at[ye]),L=Ae,I=ye),(me!==F||Pe!==b||ve!==C||Be!==O)&&(s.blendFuncSeparate(Pt[me],Pt[Pe],Pt[ve],Pt[Be]),F=me,b=Pe,C=ve,O=Be),(He.equals(E)===!1||pt!==D)&&(s.blendColor(He.r,He.g,He.b,pt),E.copy(He),D=pt),v=V,H=!1}function _t(V,Ae){V.side===zi?Ne(s.CULL_FACE):he(s.CULL_FACE);let me=V.side===Rn;Ae&&(me=!me),Te(me),V.blending===vs&&V.transparent===!1?bt(Vi):bt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const Pe=V.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(V){G!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),G=V)}function Qe(V){V!==_0?(he(s.CULL_FACE),V!==K&&(V===Qd?s.cullFace(s.BACK):V===x0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),K=V}function st(V){V!==ce&&(W&&s.lineWidth(V),ce=V)}function ot(V,Ae,me){V?(he(s.POLYGON_OFFSET_FILL),(fe!==Ae||j!==me)&&(fe=Ae,j=me,c.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,me))):Ne(s.POLYGON_OFFSET_FILL)}function Ye(V){V?he(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function xt(V){V===void 0&&(V=s.TEXTURE0+$-1),ae!==V&&(s.activeTexture(V),ae=V)}function B(V,Ae,me){me===void 0&&(ae===null?me=s.TEXTURE0+$-1:me=ae);let Pe=U[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},U[me]=Pe),(Pe.type!==V||Pe.texture!==Ae)&&(ae!==me&&(s.activeTexture(me),ae=me),s.bindTexture(V,Ae||ge[V]),Pe.type=V,Pe.texture=Ae)}function Vt(){const V=U[ae];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function wt(){try{s.compressedTexImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function y(){try{s.texSubImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function q(){try{s.texSubImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function ee(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function ue(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Ee(){try{s.texStorage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function Ie(){try{s.texStorage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function de(){try{s.texImage2D(...arguments)}catch(V){Dt("WebGLState:",V)}}function pe(){try{s.texImage3D(...arguments)}catch(V){Dt("WebGLState:",V)}}function be(V){return x[V]!==void 0?x[V]:s.getParameter(V)}function Ke(V,Ae){x[V]!==Ae&&(s.pixelStorei(V,Ae),x[V]=Ae)}function De(V){$e.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),$e.copy(V))}function Ce(V){Ge.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Ge.copy(V))}function qe(V,Ae){let me=m.get(Ae);me===void 0&&(me=new WeakMap,m.set(Ae,me));let Pe=me.get(V);Pe===void 0&&(Pe=s.getUniformBlockIndex(Ae,V.name),me.set(V,Pe))}function nt(V,Ae){const Pe=m.get(Ae).get(V);h.get(Ae)!==Pe&&(s.uniformBlockBinding(Ae,Pe,V.__bindingPointIndex),h.set(Ae,Pe))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},x={},ae=null,U={},g={},M=new WeakMap,w=[],R=null,S=!1,v=null,L=null,F=null,b=null,I=null,C=null,O=null,E=new yt(0,0,0),D=0,H=!1,G=null,K=null,ce=null,fe=null,j=null,$e.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:he,disable:Ne,bindFramebuffer:je,drawBuffers:ke,useProgram:St,setBlending:bt,setMaterial:_t,setFlipSided:Te,setCullFace:Qe,setLineWidth:st,setPolygonOffset:ot,setScissorTest:Ye,activeTexture:xt,bindTexture:B,unbindTexture:Vt,compressedTexImage2D:wt,compressedTexImage3D:P,texImage2D:de,texImage3D:pe,pixelStorei:Ke,getParameter:be,updateUBOMapping:qe,uniformBlockBinding:nt,texStorage2D:Ee,texStorage3D:Ie,texSubImage2D:y,texSubImage3D:q,compressedTexSubImage2D:ee,compressedTexSubImage3D:ue,scissor:De,viewport:Ce,reset:ut}}function zy(s,e,n,r,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,_=new WeakMap,x=new Set;let g;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(P,y){return w?new OffscreenCanvas(P,y):wo("canvas")}function S(P,y,q){let ee=1;const ue=wt(P);if((ue.width>q||ue.height>q)&&(ee=q/Math.max(ue.width,ue.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ee=Math.floor(ee*ue.width),Ie=Math.floor(ee*ue.height);g===void 0&&(g=R(Ee,Ie));const de=y?R(Ee,Ie):g;return de.width=Ee,de.height=Ie,de.getContext("2d").drawImage(P,0,0,Ee,Ie),dt("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Ee+"x"+Ie+")."),de}else return"data"in P&&dt("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),P;return P}function v(P){return P.generateMipmaps}function L(P){s.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(P,y,q,ee,ue,Ee=!1){if(P!==null){if(s[P]!==void 0)return s[P];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ie;ee&&(Ie=e.get("EXT_texture_norm16"),Ie||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=y;if(y===s.RED&&(q===s.FLOAT&&(de=s.R32F),q===s.HALF_FLOAT&&(de=s.R16F),q===s.UNSIGNED_BYTE&&(de=s.R8),q===s.UNSIGNED_SHORT&&Ie&&(de=Ie.R16_EXT),q===s.SHORT&&Ie&&(de=Ie.R16_SNORM_EXT)),y===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.R8UI),q===s.UNSIGNED_SHORT&&(de=s.R16UI),q===s.UNSIGNED_INT&&(de=s.R32UI),q===s.BYTE&&(de=s.R8I),q===s.SHORT&&(de=s.R16I),q===s.INT&&(de=s.R32I)),y===s.RG&&(q===s.FLOAT&&(de=s.RG32F),q===s.HALF_FLOAT&&(de=s.RG16F),q===s.UNSIGNED_BYTE&&(de=s.RG8),q===s.UNSIGNED_SHORT&&Ie&&(de=Ie.RG16_EXT),q===s.SHORT&&Ie&&(de=Ie.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RG8UI),q===s.UNSIGNED_SHORT&&(de=s.RG16UI),q===s.UNSIGNED_INT&&(de=s.RG32UI),q===s.BYTE&&(de=s.RG8I),q===s.SHORT&&(de=s.RG16I),q===s.INT&&(de=s.RG32I)),y===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),q===s.UNSIGNED_INT&&(de=s.RGB32UI),q===s.BYTE&&(de=s.RGB8I),q===s.SHORT&&(de=s.RGB16I),q===s.INT&&(de=s.RGB32I)),y===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),q===s.UNSIGNED_INT&&(de=s.RGBA32UI),q===s.BYTE&&(de=s.RGBA8I),q===s.SHORT&&(de=s.RGBA16I),q===s.INT&&(de=s.RGBA32I)),y===s.RGB&&(q===s.UNSIGNED_SHORT&&Ie&&(de=Ie.RGB16_EXT),q===s.SHORT&&Ie&&(de=Ie.RGB16_SNORM_EXT),q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),y===s.RGBA){const pe=Ee?Eo:Ct.getTransfer(ue);q===s.FLOAT&&(de=s.RGBA32F),q===s.HALF_FLOAT&&(de=s.RGBA16F),q===s.UNSIGNED_BYTE&&(de=pe===kt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT&&Ie&&(de=Ie.RGBA16_EXT),q===s.SHORT&&Ie&&(de=Ie.RGBA16_SNORM_EXT),q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(P,y){let q;return P?y===null||y===Ai||y===ma?q=s.DEPTH24_STENCIL8:y===bi?q=s.DEPTH32F_STENCIL8:y===pa&&(q=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ai||y===ma?q=s.DEPTH_COMPONENT24:y===bi?q=s.DEPTH_COMPONENT32F:y===pa&&(q=s.DEPTH_COMPONENT16),q}function C(P,y){return v(P)===!0||P.isFramebufferTexture&&P.minFilter!==mn&&P.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function O(P){const y=P.target;y.removeEventListener("dispose",O),D(y),y.isVideoTexture&&_.delete(y),y.isHTMLTexture&&x.delete(y)}function E(P){const y=P.target;y.removeEventListener("dispose",E),G(y)}function D(P){const y=r.get(P);if(y.__webglInit===void 0)return;const q=P.source,ee=M.get(q);if(ee){const ue=ee[y.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&H(P),Object.keys(ee).length===0&&M.delete(q)}r.remove(P)}function H(P){const y=r.get(P);s.deleteTexture(y.__webglTexture);const q=P.source,ee=M.get(q);delete ee[y.__cacheKey],c.memory.textures--}function G(P){const y=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(y.__webglFramebuffer[ee]))for(let ue=0;ue<y.__webglFramebuffer[ee].length;ue++)s.deleteFramebuffer(y.__webglFramebuffer[ee][ue]);else s.deleteFramebuffer(y.__webglFramebuffer[ee]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ee])}else{if(Array.isArray(y.__webglFramebuffer))for(let ee=0;ee<y.__webglFramebuffer.length;ee++)s.deleteFramebuffer(y.__webglFramebuffer[ee]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ee=0;ee<y.__webglColorRenderbuffer.length;ee++)y.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ee]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const q=P.textures;for(let ee=0,ue=q.length;ee<ue;ee++){const Ee=r.get(q[ee]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),c.memory.textures--),r.remove(q[ee])}r.remove(P)}let K=0;function ce(){K=0}function fe(){return K}function j(P){K=P}function $(){const P=K;return P>=o.maxTextures&&dt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),K+=1,P}function W(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function z(P,y){const q=r.get(P);if(P.isVideoTexture&&B(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&q.__version!==P.version){const ee=P.image;if(ee===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(q,P,y);return}}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+y)}function re(P,y){const q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Ne(q,P,y);return}else P.isExternalTexture&&(q.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+y)}function ae(P,y){const q=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){Ne(q,P,y);return}n.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+y)}function U(P,y){const q=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&q.__version!==P.version){je(q,P,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+y)}const Z={[Pu]:s.REPEAT,[Hi]:s.CLAMP_TO_EDGE,[Lu]:s.MIRRORED_REPEAT},Fe={[mn]:s.NEAREST,[V0]:s.NEAREST_MIPMAP_NEAREST,[mo]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[Du]:s.LINEAR_MIPMAP_NEAREST,[zr]:s.LINEAR_MIPMAP_LINEAR},$e={[W0]:s.NEVER,[K0]:s.ALWAYS,[X0]:s.LESS,[mc]:s.LEQUAL,[$0]:s.EQUAL,[gc]:s.GEQUAL,[Y0]:s.GREATER,[q0]:s.NOTEQUAL};function Ge(P,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===Du||y.magFilter===mo||y.magFilter===zr||y.minFilter===Sn||y.minFilter===Du||y.minFilter===mo||y.minFilter===zr)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Z[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Z[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Z[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,Fe[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,Fe[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,$e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===mn||y.minFilter!==mo&&y.minFilter!==zr||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function se(P,y){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",O));const ee=y.source;let ue=M.get(ee);ue===void 0&&(ue={},M.set(ee,ue));const Ee=W(y);if(Ee!==P.__cacheKey){ue[Ee]===void 0&&(ue[Ee]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,q=!0),ue[Ee].usedTimes++;const Ie=ue[P.__cacheKey];Ie!==void 0&&(ue[P.__cacheKey].usedTimes--,Ie.usedTimes===0&&H(y)),P.__cacheKey=Ee,P.__webglTexture=ue[Ee].texture}return q}function ge(P,y,q){return Math.floor(Math.floor(P/q)/y)}function he(P,y,q,ee){const Ee=P.updateRanges;if(Ee.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,q,ee,y.data);else{Ee.sort((Ke,De)=>Ke.start-De.start);let Ie=0;for(let Ke=1;Ke<Ee.length;Ke++){const De=Ee[Ie],Ce=Ee[Ke],qe=De.start+De.count,nt=ge(Ce.start,y.width,4),ut=ge(De.start,y.width,4);Ce.start<=qe+1&&nt===ut&&ge(Ce.start+Ce.count-1,y.width,4)===nt?De.count=Math.max(De.count,Ce.start+Ce.count-De.start):(++Ie,Ee[Ie]=Ce)}Ee.length=Ie+1;const de=n.getParameter(s.UNPACK_ROW_LENGTH),pe=n.getParameter(s.UNPACK_SKIP_PIXELS),be=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ke=0,De=Ee.length;Ke<De;Ke++){const Ce=Ee[Ke],qe=Math.floor(Ce.start/4),nt=Math.ceil(Ce.count/4),ut=qe%y.width,V=Math.floor(qe/y.width),Ae=nt,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(s.UNPACK_SKIP_ROWS,V),n.texSubImage2D(s.TEXTURE_2D,0,ut,V,Ae,me,q,ee,y.data)}P.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,de),n.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(s.UNPACK_SKIP_ROWS,be)}}function Ne(P,y,q){let ee=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ee=s.TEXTURE_3D);const ue=se(P,y),Ee=y.source;n.bindTexture(ee,P.__webglTexture,s.TEXTURE0+q);const Ie=r.get(Ee);if(Ee.version!==Ie.__version||ue===!0){if(n.activeTexture(s.TEXTURE0+q),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const me=Ct.getPrimaries(Ct.workingColorSpace),Pe=y.colorSpace===ur?null:Ct.getPrimaries(y.colorSpace),ye=y.colorSpace===ur||me===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let pe=S(y.image,!1,o.maxTextureSize);pe=Vt(y,pe);const be=l.convert(y.format,y.colorSpace),Ke=l.convert(y.type);let De=b(y.internalFormat,be,Ke,y.normalized,y.colorSpace,y.isVideoTexture);Ge(ee,y);let Ce;const qe=y.mipmaps,nt=y.isVideoTexture!==!0,ut=Ie.__version===void 0||ue===!0,V=Ee.dataReady,Ae=C(y,pe);if(y.isDepthTexture)De=I(y.format===Vr,y.type),ut&&(nt?n.texStorage2D(s.TEXTURE_2D,1,De,pe.width,pe.height):n.texImage2D(s.TEXTURE_2D,0,De,pe.width,pe.height,0,be,Ke,null));else if(y.isDataTexture)if(qe.length>0){nt&&ut&&n.texStorage2D(s.TEXTURE_2D,Ae,De,qe[0].width,qe[0].height);for(let me=0,Pe=qe.length;me<Pe;me++)Ce=qe[me],nt?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Ce.width,Ce.height,be,Ke,Ce.data):n.texImage2D(s.TEXTURE_2D,me,De,Ce.width,Ce.height,0,be,Ke,Ce.data);y.generateMipmaps=!1}else nt?(ut&&n.texStorage2D(s.TEXTURE_2D,Ae,De,pe.width,pe.height),V&&he(y,pe,be,Ke)):n.texImage2D(s.TEXTURE_2D,0,De,pe.width,pe.height,0,be,Ke,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){nt&&ut&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,De,qe[0].width,qe[0].height,pe.depth);for(let me=0,Pe=qe.length;me<Pe;me++)if(Ce=qe[me],y.format!==fi)if(be!==null)if(nt){if(V)if(y.layerUpdates.size>0){const ye=Jh(Ce.width,Ce.height,y.format,y.type);for(const ve of y.layerUpdates){const Be=Ce.data.subarray(ve*ye/Ce.data.BYTES_PER_ELEMENT,(ve+1)*ye/Ce.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ve,Ce.width,Ce.height,1,be,Be)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,pe.depth,be,Ce.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,pe.depth,0,Ce.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?V&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ce.width,Ce.height,pe.depth,be,Ke,Ce.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,De,Ce.width,Ce.height,pe.depth,0,be,Ke,Ce.data)}else{nt&&ut&&n.texStorage2D(s.TEXTURE_2D,Ae,De,qe[0].width,qe[0].height);for(let me=0,Pe=qe.length;me<Pe;me++)Ce=qe[me],y.format!==fi?be!==null?nt?V&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ce.width,Ce.height,be,Ce.data):n.compressedTexImage2D(s.TEXTURE_2D,me,De,Ce.width,Ce.height,0,Ce.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Ce.width,Ce.height,be,Ke,Ce.data):n.texImage2D(s.TEXTURE_2D,me,De,Ce.width,Ce.height,0,be,Ke,Ce.data)}else if(y.isDataArrayTexture)if(nt){if(ut&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,De,pe.width,pe.height,pe.depth),V)if(y.layerUpdates.size>0){const me=Jh(pe.width,pe.height,y.format,y.type);for(const Pe of y.layerUpdates){const ye=pe.data.subarray(Pe*me/pe.data.BYTES_PER_ELEMENT,(Pe+1)*me/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,pe.width,pe.height,1,be,Ke,ye)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,be,Ke,pe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,De,pe.width,pe.height,pe.depth,0,be,Ke,pe.data);else if(y.isData3DTexture)nt?(ut&&n.texStorage3D(s.TEXTURE_3D,Ae,De,pe.width,pe.height,pe.depth),V&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,be,Ke,pe.data)):n.texImage3D(s.TEXTURE_3D,0,De,pe.width,pe.height,pe.depth,0,be,Ke,pe.data);else if(y.isFramebufferTexture){if(ut)if(nt)n.texStorage2D(s.TEXTURE_2D,Ae,De,pe.width,pe.height);else{let me=pe.width,Pe=pe.height;for(let ye=0;ye<Ae;ye++)n.texImage2D(s.TEXTURE_2D,ye,De,me,Pe,0,be,Ke,null),me>>=1,Pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),pe.parentNode!==me){me.appendChild(pe),x.add(y),me.onpaint=Pe=>{const ye=Pe.changedElements;for(const ve of x)ye.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,pe);else{const ye=s.RGBA,ve=s.RGBA,Be=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ye,ve,Be,pe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(qe.length>0){if(nt&&ut){const me=wt(qe[0]);n.texStorage2D(s.TEXTURE_2D,Ae,De,me.width,me.height)}for(let me=0,Pe=qe.length;me<Pe;me++)Ce=qe[me],nt?V&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,be,Ke,Ce):n.texImage2D(s.TEXTURE_2D,me,De,be,Ke,Ce);y.generateMipmaps=!1}else if(nt){if(ut){const me=wt(pe);n.texStorage2D(s.TEXTURE_2D,Ae,De,me.width,me.height)}V&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Ke,pe)}else n.texImage2D(s.TEXTURE_2D,0,De,be,Ke,pe);v(y)&&L(ee),Ie.__version=Ee.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function je(P,y,q){if(y.image.length!==6)return;const ee=se(P,y),ue=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+q);const Ee=r.get(ue);if(ue.version!==Ee.__version||ee===!0){n.activeTexture(s.TEXTURE0+q);const Ie=Ct.getPrimaries(Ct.workingColorSpace),de=y.colorSpace===ur?null:Ct.getPrimaries(y.colorSpace),pe=y.colorSpace===ur||Ie===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const be=y.isCompressedTexture||y.image[0].isCompressedTexture,Ke=y.image[0]&&y.image[0].isDataTexture,De=[];for(let ve=0;ve<6;ve++)!be&&!Ke?De[ve]=S(y.image[ve],!0,o.maxCubemapSize):De[ve]=Ke?y.image[ve].image:y.image[ve],De[ve]=Vt(y,De[ve]);const Ce=De[0],qe=l.convert(y.format,y.colorSpace),nt=l.convert(y.type),ut=b(y.internalFormat,qe,nt,y.normalized,y.colorSpace),V=y.isVideoTexture!==!0,Ae=Ee.__version===void 0||ee===!0,me=ue.dataReady;let Pe=C(y,Ce);Ge(s.TEXTURE_CUBE_MAP,y);let ye;if(be){V&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ut,Ce.width,Ce.height);for(let ve=0;ve<6;ve++){ye=De[ve].mipmaps;for(let Be=0;Be<ye.length;Be++){const He=ye[Be];y.format!==fi?qe!==null?V?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,He.width,He.height,qe,He.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,ut,He.width,He.height,0,He.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,0,0,He.width,He.height,qe,nt,He.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be,ut,He.width,He.height,0,qe,nt,He.data)}}}else{if(ye=y.mipmaps,V&&Ae){ye.length>0&&Pe++;const ve=wt(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Pe,ut,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ke){V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,De[ve].width,De[ve].height,qe,nt,De[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,De[ve].width,De[ve].height,0,qe,nt,De[ve].data);for(let Be=0;Be<ye.length;Be++){const pt=ye[Be].image[ve].image;V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,pt.width,pt.height,qe,nt,pt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,ut,pt.width,pt.height,0,qe,nt,pt.data)}}else{V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,qe,nt,De[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ut,qe,nt,De[ve]);for(let Be=0;Be<ye.length;Be++){const He=ye[Be];V?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,0,0,qe,nt,He.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Be+1,ut,qe,nt,He.image[ve])}}}v(y)&&L(s.TEXTURE_CUBE_MAP),Ee.__version=ue.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ke(P,y,q,ee,ue,Ee){const Ie=l.convert(q.format,q.colorSpace),de=l.convert(q.type),pe=b(q.internalFormat,Ie,de,q.normalized,q.colorSpace),be=r.get(y),Ke=r.get(q);if(Ke.__renderTarget=y,!be.__hasExternalTextures){const De=Math.max(1,y.width>>Ee),Ce=Math.max(1,y.height>>Ee);ue===s.TEXTURE_3D||ue===s.TEXTURE_2D_ARRAY?n.texImage3D(ue,Ee,pe,De,Ce,y.depth,0,Ie,de,null):n.texImage2D(ue,Ee,pe,De,Ce,0,Ie,de,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),xt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,ue,Ke.__webglTexture,0,Ye(y)):(ue===s.TEXTURE_2D||ue>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,ue,Ke.__webglTexture,Ee),n.bindFramebuffer(s.FRAMEBUFFER,null)}function St(P,y,q){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){const ee=y.depthTexture,ue=ee&&ee.isDepthTexture?ee.type:null,Ee=I(y.stencilBuffer,ue),Ie=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;xt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye(y),Ee,y.width,y.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye(y),Ee,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,P)}else{const ee=y.textures;for(let ue=0;ue<ee.length;ue++){const Ee=ee[ue],Ie=l.convert(Ee.format,Ee.colorSpace),de=l.convert(Ee.type),pe=b(Ee.internalFormat,Ie,de,Ee.normalized,Ee.colorSpace);xt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye(y),pe,y.width,y.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye(y),pe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function at(P,y,q){const ee=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=r.get(y.depthTexture);if(ue.__renderTarget=y,(!ue.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ee){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,y.depthTexture.addEventListener("dispose",O)),ue.__webglTexture===void 0){ue.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,y.depthTexture);const be=l.convert(y.depthTexture.format),Ke=l.convert(y.depthTexture.type);let De;y.depthTexture.format===Wi?De=s.DEPTH_COMPONENT24:y.depthTexture.format===Vr&&(De=s.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,De,y.width,y.height,0,be,Ke,null)}}else z(y.depthTexture,0);const Ee=ue.__webglTexture,Ie=Ye(y),de=ee?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,pe=y.depthTexture.format===Vr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Wi)xt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,Ee,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,Ee,0);else if(y.depthTexture.format===Vr)xt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,Ee,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Pt(P){const y=r.get(P),q=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ee){const ue=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ee.removeEventListener("dispose",ue)};ee.addEventListener("dispose",ue),y.__depthDisposeCallback=ue}y.__boundDepthTexture=ee}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(q)for(let ee=0;ee<6;ee++)at(y.__webglFramebuffer[ee],P,ee);else{const ee=P.texture.mipmaps;ee&&ee.length>0?at(y.__webglFramebuffer[0],P,0):at(y.__webglFramebuffer,P,0)}else if(q){y.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ee]),y.__webglDepthbuffer[ee]===void 0)y.__webglDepthbuffer[ee]=s.createRenderbuffer(),St(y.__webglDepthbuffer[ee],P,!1);else{const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=y.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Ee)}}else{const ee=P.texture.mipmaps;if(ee&&ee.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),St(y.__webglDepthbuffer,P,!1);else{const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ee=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,Ee)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(P,y,q){const ee=r.get(P);y!==void 0&&ke(ee.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Pt(P)}function _t(P){const y=P.texture,q=r.get(P),ee=r.get(y);P.addEventListener("dispose",E);const ue=P.textures,Ee=P.isWebGLCubeRenderTarget===!0,Ie=ue.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=y.version,c.memory.textures++),Ee){q.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer[de]=[];for(let pe=0;pe<y.mipmaps.length;pe++)q.__webglFramebuffer[de][pe]=s.createFramebuffer()}else q.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){q.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)q.__webglFramebuffer[de]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let de=0,pe=ue.length;de<pe;de++){const be=r.get(ue[de]);be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&xt(P)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let de=0;de<ue.length;de++){const pe=ue[de];q.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[de]);const be=l.convert(pe.format,pe.colorSpace),Ke=l.convert(pe.type),De=b(pe.internalFormat,be,Ke,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),Ce=Ye(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,De,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,q.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),St(q.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Ge(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)ke(q.__webglFramebuffer[de][pe],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else ke(q.__webglFramebuffer[de],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);v(y)&&L(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let de=0,pe=ue.length;de<pe;de++){const be=ue[de],Ke=r.get(be);let De=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(De=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(De,Ke.__webglTexture),Ge(De,be),ke(q.__webglFramebuffer,P,be,s.COLOR_ATTACHMENT0+de,De,0),v(be)&&L(De)}n.unbindTexture()}else{let de=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(de,ee.__webglTexture),Ge(de,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)ke(q.__webglFramebuffer[pe],P,y,s.COLOR_ATTACHMENT0,de,pe);else ke(q.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,de,0);v(y)&&L(de),n.unbindTexture()}P.depthBuffer&&Pt(P)}function Te(P){const y=P.textures;for(let q=0,ee=y.length;q<ee;q++){const ue=y[q];if(v(ue)){const Ee=F(P),Ie=r.get(ue).__webglTexture;n.bindTexture(Ee,Ie),L(Ee),n.unbindTexture()}}}const Qe=[],st=[];function ot(P){if(P.samples>0){if(xt(P)===!1){const y=P.textures,q=P.width,ee=P.height;let ue=s.COLOR_BUFFER_BIT;const Ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(P),de=y.length>1;if(de)for(let be=0;be<y.length;be++)n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let be=0;be<y.length;be++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ue|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ue|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[be]);const Ke=r.get(y[be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ke,0)}s.blitFramebuffer(0,0,q,ee,0,0,q,ee,ue,s.NEAREST),h===!0&&(Qe.length=0,st.length=0,Qe.push(s.COLOR_ATTACHMENT0+be),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Qe.push(Ee),st.push(Ee),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,st)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let be=0;be<y.length;be++){n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[be]);const Ke=r.get(y[be]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,Ke,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Ye(P){return Math.min(o.maxSamples,P.samples)}function xt(P){const y=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(P){const y=c.render.frame;_.get(P)!==y&&(_.set(P,y),P.update())}function Vt(P,y){const q=P.colorSpace,ee=P.format,ue=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==Mo&&q!==ur&&(Ct.getTransfer(q)===kt?(ee!==fi||ue!==ei)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",q)),y}function wt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=ce,this.getTextureUnits=fe,this.setTextureUnits=j,this.setTexture2D=z,this.setTexture2DArray=re,this.setTexture3D=ae,this.setTextureCube=U,this.rebindTextures=bt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Vy(s,e){function n(r,o=ur){let l;const c=Ct.getTransfer(o);if(r===ei)return s.UNSIGNED_BYTE;if(r===Nu)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Uu)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dh)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ch)return s.BYTE;if(r===fh)return s.SHORT;if(r===pa)return s.UNSIGNED_SHORT;if(r===Iu)return s.INT;if(r===Ai)return s.UNSIGNED_INT;if(r===bi)return s.FLOAT;if(r===Gi)return s.HALF_FLOAT;if(r===ph)return s.ALPHA;if(r===mh)return s.RGB;if(r===fi)return s.RGBA;if(r===Wi)return s.DEPTH_COMPONENT;if(r===Vr)return s.DEPTH_STENCIL;if(r===gh)return s.RED;if(r===Fu)return s.RED_INTEGER;if(r===Hr)return s.RG;if(r===Ou)return s.RG_INTEGER;if(r===ku)return s.RGBA_INTEGER;if(r===go||r===vo||r===_o||r===xo)if(c===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===go)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vo)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_o)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xo)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===go)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vo)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_o)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xo)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bu||r===zu||r===Vu||r===Hu)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Bu)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zu)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vu)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hu)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gu||r===Wu||r===Xu||r===$u||r===Yu||r===So||r===qu)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gu||r===Wu)return c===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Xu)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===$u)return l.COMPRESSED_R11_EAC;if(r===Yu)return l.COMPRESSED_SIGNED_R11_EAC;if(r===So)return l.COMPRESSED_RG11_EAC;if(r===qu)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ku||r===Zu||r===ju||r===Qu||r===Ju||r===ec||r===tc||r===nc||r===ic||r===rc||r===sc||r===ac||r===oc||r===lc)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ku)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zu)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ju)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qu)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ju)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ec)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tc)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nc)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ic)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rc)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sc)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ac)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oc)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lc)return c===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uc||r===cc||r===fc)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uc)return c===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cc)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fc)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dc||r===hc||r===yo||r===pc)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===dc)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hc)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yo)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pc)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ma?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const Hy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
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

}`;class Wy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new Xh(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Kn({vertexShader:Hy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new $o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xy extends Gr{constructor(e,n){super();const r=this;let o=null,l=1,c=null,d="local-floor",h=1,m=null,_=null,x=null,g=null,M=null,w=null;const R=typeof XRWebGLBinding<"u",S=new Wy,v={},L=n.getContextAttributes();let F=null,b=null;const I=[],C=[],O=new Nt;let E=null;const D=new ii;D.viewport=new Jt;const H=new ii;H.viewport=new Jt;const G=[D,H],K=new Nv;let ce=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let ge=I[se];return ge===void 0&&(ge=new Ac,I[se]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(se){let ge=I[se];return ge===void 0&&(ge=new Ac,I[se]=ge),ge.getGripSpace()},this.getHand=function(se){let ge=I[se];return ge===void 0&&(ge=new Ac,I[se]=ge),ge.getHandSpace()};function j(se){const ge=C.indexOf(se.inputSource);if(ge===-1)return;const he=I[ge];he!==void 0&&(he.update(se.inputSource,se.frame,m||c),he.dispatchEvent({type:se.type,data:se.inputSource}))}function $(){o.removeEventListener("select",j),o.removeEventListener("selectstart",j),o.removeEventListener("selectend",j),o.removeEventListener("squeeze",j),o.removeEventListener("squeezestart",j),o.removeEventListener("squeezeend",j),o.removeEventListener("end",$),o.removeEventListener("inputsourceschange",W);for(let se=0;se<I.length;se++){const ge=C[se];ge!==null&&(C[se]=null,I[se].disconnect(ge))}ce=null,fe=null,S.reset();for(const se in v)delete v[se];e.setRenderTarget(F),M=null,g=null,x=null,o=null,b=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){l=se,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){d=se,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(se){m=se},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(o,n)),x},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",j),o.addEventListener("selectstart",j),o.addEventListener("selectend",j),o.addEventListener("squeeze",j),o.addEventListener("squeezestart",j),o.addEventListener("squeezeend",j),o.addEventListener("end",$),o.addEventListener("inputsourceschange",W),L.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ne=null,je=null;L.depth&&(je=L.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=L.stencil?Vr:Wi,Ne=L.stencil?ma:Ai);const ke={colorFormat:n.RGBA8,depthFormat:je,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(ke),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Ci(g.textureWidth,g.textureHeight,{format:fi,type:ei,depthTexture:new Ns(g.textureWidth,g.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,n,he),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Ci(M.framebufferWidth,M.framebufferHeight,{format:fi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await o.requestReferenceSpace(d),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function W(se){for(let ge=0;ge<se.removed.length;ge++){const he=se.removed[ge],Ne=C.indexOf(he);Ne>=0&&(C[Ne]=null,I[Ne].disconnect(he))}for(let ge=0;ge<se.added.length;ge++){const he=se.added[ge];let Ne=C.indexOf(he);if(Ne===-1){for(let ke=0;ke<I.length;ke++)if(ke>=C.length){C.push(he),Ne=ke;break}else if(C[ke]===null){C[ke]=he,Ne=ke;break}if(Ne===-1)break}const je=I[Ne];je&&je.connect(he)}}const z=new ie,re=new ie;function ae(se,ge,he){z.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(he.matrixWorld);const Ne=z.distanceTo(re),je=ge.projectionMatrix.elements,ke=he.projectionMatrix.elements,St=je[14]/(je[10]-1),at=je[14]/(je[10]+1),Pt=(je[9]+1)/je[5],bt=(je[9]-1)/je[5],_t=(je[8]-1)/je[0],Te=(ke[8]+1)/ke[0],Qe=St*_t,st=St*Te,ot=Ne/(-_t+Te),Ye=ot*-_t;if(ge.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Ye),se.translateZ(ot),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),je[10]===-1)se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const xt=St+ot,B=at+ot,Vt=Qe-Ye,wt=st+(Ne-Ye),P=Pt*at/B*xt,y=bt*at/B*xt;se.projectionMatrix.makePerspective(Vt,wt,P,y,xt,B),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,ge){ge===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(ge.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let ge=se.near,he=se.far;S.texture!==null&&(S.depthNear>0&&(ge=S.depthNear),S.depthFar>0&&(he=S.depthFar)),K.near=H.near=D.near=ge,K.far=H.far=D.far=he,(ce!==K.near||fe!==K.far)&&(o.updateRenderState({depthNear:K.near,depthFar:K.far}),ce=K.near,fe=K.far),K.layers.mask=se.layers.mask|6,D.layers.mask=K.layers.mask&-5,H.layers.mask=K.layers.mask&-3;const Ne=se.parent,je=K.cameras;U(K,Ne);for(let ke=0;ke<je.length;ke++)U(je[ke],Ne);je.length===2?ae(K,D,H):K.projectionMatrix.copy(D.projectionMatrix),Z(se,K,Ne)};function Z(se,ge,he){he===null?se.matrix.copy(ge.matrixWorld):(se.matrix.copy(he.matrixWorld),se.matrix.invert(),se.matrix.multiply(ge.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(ge.projectionMatrix),se.projectionMatrixInverse.copy(ge.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=_c*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(se){h=se,g!==null&&(g.fixedFoveation=se),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=se)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(K)},this.getCameraTexture=function(se){return v[se]};let Fe=null;function $e(se,ge){if(_=ge.getViewerPose(m||c),w=ge,_!==null){const he=_.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Ne=!1;he.length!==K.cameras.length&&(K.cameras.length=0,Ne=!0);for(let at=0;at<he.length;at++){const Pt=he[at];let bt=null;if(M!==null)bt=M.getViewport(Pt);else{const Te=x.getViewSubImage(g,Pt);bt=Te.viewport,at===0&&(e.setRenderTargetTextures(b,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(b))}let _t=G[at];_t===void 0&&(_t=new ii,_t.layers.enable(at),_t.viewport=new Jt,G[at]=_t),_t.matrix.fromArray(Pt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Pt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(bt.x,bt.y,bt.width,bt.height),at===0&&(K.matrix.copy(_t.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ne===!0&&K.cameras.push(_t)}const je=o.enabledFeatures;if(je&&je.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){x=r.getBinding();const at=x.getDepthInformation(he[0]);at&&at.isValid&&at.texture&&S.init(at,o.renderState)}if(je&&je.includes("camera-access")&&R){e.state.unbindTexture(),x=r.getBinding();for(let at=0;at<he.length;at++){const Pt=he[at].camera;if(Pt){let bt=v[Pt];bt||(bt=new Xh,v[Pt]=bt);const _t=x.getCameraImage(Pt);bt.sourceTexture=_t}}}}for(let he=0;he<I.length;he++){const Ne=C[he],je=I[he];Ne!==null&&je!==void 0&&je.update(Ne,ge,m||c)}Fe&&Fe(se,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),w=null}const Ge=new ep;Ge.setAnimationLoop($e),this.setAnimationLoop=function(se){Fe=se},this.dispose=function(){}}}const $y=new nn,Pp=new mt;Pp.set(-1,0,0,0,1,0,0,0,1);function Yy(s,e){function n(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,Yh(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,L,F,b){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(S,v):v.isMeshLambertMaterial?(l(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(S,v),x(S,v)):v.isMeshPhongMaterial?(l(S,v),_(S,v),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(S,v),g(S,v),v.isMeshPhysicalMaterial&&M(S,v,b)):v.isMeshMatcapMaterial?(l(S,v),w(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),R(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?h(S,v,L,F):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,n(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===Rn&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,n(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===Rn&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,n(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,n(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const L=e.get(v),F=L.envMap,b=L.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4($y.makeRotationFromEuler(b)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Pp),S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,L,F){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*L,S.scale.value=F*.5,v.map&&(S.map.value=v.map,n(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,n(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,n(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function _(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function x(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function g(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function M(S,v,L){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Rn&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,v){v.matcap&&(S.matcap.value=v.matcap)}function R(S,v){const L=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function qy(s,e,n,r){let o={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,I){const C=I.program;r.uniformBlockBinding(b,C)}function m(b,I){let C=o[b.id];C===void 0&&(S(b),C=_(b),o[b.id]=C,b.addEventListener("dispose",L));const O=I.program;r.updateUBOMapping(b,O);const E=e.render.frame;l[b.id]!==E&&(g(b),l[b.id]=E)}function _(b){const I=x();b.__bindingPointIndex=I;const C=s.createBuffer(),O=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,O,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,C),C}function x(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(b){const I=o[b.id],C=b.uniforms,O=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let E=0,D=C.length;E<D;E++){const H=C[E];if(Array.isArray(H))for(let G=0,K=H.length;G<K;G++)M(H[G],E,G,O);else M(H,E,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(b,I,C,O){if(R(b,I,C,O)===!0){const E=b.__offset,D=b.value;if(Array.isArray(D)){let H=0;for(let G=0;G<D.length;G++){const K=D[G],ce=v(K);w(K,b.__data,H),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(H+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(D,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,b.__data)}}function w(b,I,C){typeof b=="number"||typeof b=="boolean"?I[0]=b:b.isMatrix3?(I[0]=b.elements[0],I[1]=b.elements[1],I[2]=b.elements[2],I[3]=0,I[4]=b.elements[3],I[5]=b.elements[4],I[6]=b.elements[5],I[7]=0,I[8]=b.elements[6],I[9]=b.elements[7],I[10]=b.elements[8],I[11]=0):ArrayBuffer.isView(b)?I.set(new b.constructor(b.buffer,b.byteOffset,I.length)):b.toArray(I,C)}function R(b,I,C,O){const E=b.value,D=I+"_"+C;if(O[D]===void 0)return typeof E=="number"||typeof E=="boolean"?O[D]=E:ArrayBuffer.isView(E)?O[D]=E.slice():O[D]=E.clone(),!0;{const H=O[D];if(typeof E=="number"||typeof E=="boolean"){if(H!==E)return O[D]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(H.equals(E)===!1)return H.copy(E),!0}}return!1}function S(b){const I=b.uniforms;let C=0;const O=16;for(let D=0,H=I.length;D<H;D++){const G=Array.isArray(I[D])?I[D]:[I[D]];for(let K=0,ce=G.length;K<ce;K++){const fe=G[K],j=Array.isArray(fe.value)?fe.value:[fe.value];for(let $=0,W=j.length;$<W;$++){const z=j[$],re=v(z),ae=C%O,U=ae%re.boundary,Z=ae+U;C+=U,Z!==0&&O-Z<re.storage&&(C+=O-Z),fe.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=C,C+=re.storage}}}const E=C%O;return E>0&&(C+=O-E),b.__size=C,b.__cache={},this}function v(b){const I={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(I.boundary=4,I.storage=4):b.isVector2?(I.boundary=8,I.storage=8):b.isVector3||b.isColor?(I.boundary=16,I.storage=12):b.isVector4?(I.boundary=16,I.storage=16):b.isMatrix3?(I.boundary=48,I.storage=48):b.isMatrix4?(I.boundary=64,I.storage=64):b.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(I.boundary=16,I.storage=b.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",b),I}function L(b){const I=b.target;I.removeEventListener("dispose",L);const C=c.indexOf(I.__bindingPointIndex);c.splice(C,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function F(){for(const b in o)s.deleteBuffer(o[b]);c=[],o={},l={}}return{bind:h,update:m,dispose:F}}const Ky=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function Zy(){return Ii===null&&(Ii=new yv(Ky,16,16,Hr,Gi),Ii.name="DFG_LUT",Ii.minFilter=Sn,Ii.magFilter=Sn,Ii.wrapS=Hi,Ii.wrapT=Hi,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class jy{constructor(e={}){const{canvas:n=j0(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ei}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const R=M,S=new Set([ku,Ou,Fu]),v=new Set([ei,Ai,pa,ma,Nu,Uu]),L=new Uint32Array(4),F=new Int32Array(4),b=new ie;let I=null,C=null;const O=[],E=[];let D=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let G=!1,K=null,ce=null,fe=null,j=null;this._outputColorSpace=ti;let $=0,W=0,z=null,re=-1,ae=null;const U=new Jt,Z=new Jt;let Fe=null;const $e=new yt(0);let Ge=0,se=n.width,ge=n.height,he=1,Ne=null,je=null;const ke=new Jt(0,0,se,ge),St=new Jt(0,0,se,ge);let at=!1;const Pt=new Gh;let bt=!1,_t=!1;const Te=new nn,Qe=new ie,st=new Jt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function xt(){return z===null?he:1}let B=r;function Vt(A,Y){return n.getContext(A,Y)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${vu}`),n.addEventListener("webglcontextlost",pt,!1),n.addEventListener("webglcontextrestored",Ut,!1),n.addEventListener("webglcontextcreationerror",En,!1),B===null){const Y="webgl2";if(B=Vt(Y,A),B===null)throw Vt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Dt("WebGLRenderer: "+A.message),A}let wt,P,y,q,ee,ue,Ee,Ie,de,pe,be,Ke,De,Ce,qe,nt,ut,V,Ae,me,Pe,ye,ve;function Be(){wt=new Zx(B),wt.init(),Pe=new Vy(B,wt),P=new Hx(B,wt,e,Pe),y=new By(B,wt),P.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ce=B.createFramebuffer(),fe=B.createFramebuffer(),j=B.createFramebuffer(),q=new Jx(B),ee=new wy,ue=new zy(B,wt,y,ee,P,Pe,q),Ee=new Kx(H),Ie=new Ov(B),ye=new zx(B,Ie),de=new jx(B,Ie,q,ye),pe=new tS(B,de,Ie,ye,q),V=new eS(B,P,ue),qe=new Gx(ee),be=new Ty(H,Ee,wt,P,ye,qe),Ke=new Yy(H,ee),De=new by,Ce=new Iy(wt),ut=new Bx(H,Ee,y,pe,w,h),nt=new ky(H,pe,P),ve=new qy(B,q,P,y),Ae=new Vx(B,wt,q),me=new Qx(B,wt,q),q.programs=be.programs,H.capabilities=P,H.extensions=wt,H.properties=ee,H.renderLists=De,H.shadowMap=nt,H.state=y,H.info=q}Be(),R!==ei&&(D=new iS(R,n.width,n.height,d,o,l));const He=new Xy(H,B);this.xr=He,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=wt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=wt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(se,ge,!1))},this.getSize=function(A){return A.set(se,ge)},this.setSize=function(A,Y,oe=!0){if(He.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,ge=Y,n.width=Math.floor(A*he),n.height=Math.floor(Y*he),oe===!0&&(n.style.width=A+"px",n.style.height=Y+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,A,Y)},this.getDrawingBufferSize=function(A){return A.set(se*he,ge*he).floor()},this.setDrawingBufferSize=function(A,Y,oe){se=A,ge=Y,he=oe,n.width=Math.floor(A*oe),n.height=Math.floor(Y*oe),this.setViewport(0,0,A,Y)},this.setEffects=function(A){if(R===ei){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let Y=0;Y<A.length;Y++)if(A[Y].isOutputPass===!0){dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(ke)},this.setViewport=function(A,Y,oe,te){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,Y,oe,te),y.viewport(U.copy(ke).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(St)},this.setScissor=function(A,Y,oe,te){A.isVector4?St.set(A.x,A.y,A.z,A.w):St.set(A,Y,oe,te),y.scissor(Z.copy(St).multiplyScalar(he).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){y.setScissorTest(at=A)},this.setOpaqueSort=function(A){Ne=A},this.setTransparentSort=function(A){je=A},this.getClearColor=function(A){return A.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(A=!0,Y=!0,oe=!0){let te=0;if(A){let J=!1;if(z!==null){const Le=z.texture.format;J=S.has(Le)}if(J){const Le=z.texture.type,We=v.has(Le),Re=ut.getClearColor(),Je=ut.getClearAlpha(),rt=Re.r,gt=Re.g,vt=Re.b;We?(L[0]=rt,L[1]=gt,L[2]=vt,L[3]=Je,B.clearBufferuiv(B.COLOR,0,L)):(F[0]=rt,F[1]=gt,F[2]=vt,F[3]=Je,B.clearBufferiv(B.COLOR,0,F))}else te|=B.COLOR_BUFFER_BIT}Y&&(te|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(te|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&B.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){n.removeEventListener("webglcontextlost",pt,!1),n.removeEventListener("webglcontextrestored",Ut,!1),n.removeEventListener("webglcontextcreationerror",En,!1),ut.dispose(),De.dispose(),Ce.dispose(),ee.dispose(),Ee.dispose(),pe.dispose(),ye.dispose(),ve.dispose(),be.dispose(),He.dispose(),He.removeEventListener("sessionstart",al),He.removeEventListener("sessionend",ol),Dn.stop()};function pt(A){A.preventDefault(),Mh("WebGLRenderer: Context Lost."),G=!0}function Ut(){Mh("WebGLRenderer: Context Restored."),G=!1;const A=q.autoReset,Y=nt.enabled,oe=nt.autoUpdate,te=nt.needsUpdate,J=nt.type;Be(),q.autoReset=A,nt.enabled=Y,nt.autoUpdate=oe,nt.needsUpdate=te,nt.type=J}function En(A){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ri(A){const Y=A.target;Y.removeEventListener("dispose",ri),Jr(Y)}function Jr(A){Vs(A),ee.remove(A)}function Vs(A){const Y=ee.get(A).programs;Y!==void 0&&(Y.forEach(function(oe){be.releaseProgram(oe)}),A.isShaderMaterial&&be.releaseShaderCache(A))}this.renderBufferDirect=function(A,Y,oe,te,J,Le){Y===null&&(Y=ot);const We=J.isMesh&&J.matrixWorld.determinantAffine()<0,Re=Zt(A,Y,oe,te,J);y.setMaterial(te,We);let Je=oe.index,rt=1;if(te.wireframe===!0){if(Je=de.getWireframeAttribute(oe),Je===void 0)return;rt=2}const gt=oe.drawRange,vt=oe.attributes.position;let tt=gt.start*rt,Lt=(gt.start+gt.count)*rt;Le!==null&&(tt=Math.max(tt,Le.start*rt),Lt=Math.min(Lt,(Le.start+Le.count)*rt)),Je!==null?(tt=Math.max(tt,0),Lt=Math.min(Lt,Je.count)):vt!=null&&(tt=Math.max(tt,0),Lt=Math.min(Lt,vt.count));const Ht=Lt-tt;if(Ht<0||Ht===1/0)return;ye.setup(J,te,Re,oe,Je);let Yt,Bt=Ae;if(Je!==null&&(Yt=Ie.get(Je),Bt=me,Bt.setIndex(Yt)),J.isMesh)te.wireframe===!0?(y.setLineWidth(te.wireframeLinewidth*xt()),Bt.setMode(B.LINES)):Bt.setMode(B.TRIANGLES);else if(J.isLine){let sn=te.linewidth;sn===void 0&&(sn=1),y.setLineWidth(sn*xt()),J.isLineSegments?Bt.setMode(B.LINES):J.isLineLoop?Bt.setMode(B.LINE_LOOP):Bt.setMode(B.LINE_STRIP)}else J.isPoints?Bt.setMode(B.POINTS):J.isSprite&&Bt.setMode(B.TRIANGLES);if(J.isBatchedMesh)if(wt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const sn=J._multiDrawStarts,ze=J._multiDrawCounts,gn=J._multiDrawCount,Et=Je?Ie.get(Je).bytesPerElement:1,On=ee.get(te).currentProgram.getUniforms();for(let kn=0;kn<gn;kn++)On.setValue(B,"_gl_DrawID",kn),Bt.render(sn[kn]/Et,ze[kn])}else if(J.isInstancedMesh)Bt.renderInstances(tt,Ht,J.count);else if(oe.isInstancedBufferGeometry){const sn=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ze=Math.min(oe.instanceCount,sn);Bt.renderInstances(tt,Ht,ze)}else Bt.render(tt,Ht)};function es(A,Y,oe){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,is(A,Y,oe),A.side=lr,A.needsUpdate=!0,is(A,Y,oe),A.side=zi):is(A,Y,oe)}this.compile=function(A,Y,oe=null){oe===null&&(oe=A),C=Ce.get(oe),C.init(Y),E.push(C),oe.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),A!==oe&&A.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(C.pushLight(J),J.castShadow&&C.pushShadow(J))}),C.setupLights();const te=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Le=J.material;if(Le)if(Array.isArray(Le))for(let We=0;We<Le.length;We++){const Re=Le[We];es(Re,oe,J),te.add(Re)}else es(Le,oe,J),te.add(Le)}),C=E.pop(),te},this.compileAsync=function(A,Y,oe=null){const te=this.compile(A,Y,oe);return new Promise(J=>{function Le(){if(te.forEach(function(We){ee.get(We).currentProgram.isReady()&&te.delete(We)}),te.size===0){J(A);return}setTimeout(Le,10)}wt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ts=null;function af(A){ts&&ts(A)}function al(){Dn.stop()}function ol(){Dn.start()}const Dn=new ep;Dn.setAnimationLoop(af),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(A){ts=A,He.setAnimationLoop(A),A===null?Dn.stop():Dn.start()},He.addEventListener("sessionstart",al),He.addEventListener("sessionend",ol),this.render=function(A,Y){if(Y!==void 0&&Y.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;K!==null&&K.renderStart(A,Y);const oe=He.enabled===!0&&He.isPresenting===!0,te=D!==null&&(z===null||oe)&&D.begin(H,z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(Y),Y=He.getCamera()),A.isScene===!0&&A.onBeforeRender(H,A,Y,z),C=Ce.get(A,E.length),C.init(Y),C.state.textureUnits=ue.getTextureUnits(),E.push(C),Te.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Pt.setFromProjectionMatrix(Te,Ri,Y.reversedDepth),_t=this.localClippingEnabled,bt=qe.init(this.clippingPlanes,_t),I=De.get(A,O.length),I.init(),O.push(I),He.enabled===!0&&He.isPresenting===!0){const We=H.xr.getDepthSensingMesh();We!==null&&Hs(We,Y,-1/0,H.sortObjects)}Hs(A,Y,0,H.sortObjects),I.finish(),H.sortObjects===!0&&I.sort(Ne,je,Y.reversedDepth),Ye=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Ye&&ut.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&qe.beginShadows();const J=C.state.shadowsArray;if(nt.render(J,A,Y),bt===!0&&qe.endShadows(),(te&&D.hasRenderPass())===!1){const We=I.opaque,Re=I.transmissive;if(C.setupLights(),Y.isArrayCamera){const Je=Y.cameras;if(Re.length>0)for(let rt=0,gt=Je.length;rt<gt;rt++){const vt=Je[rt];ll(We,Re,A,vt)}Ye&&ut.render(A);for(let rt=0,gt=Je.length;rt<gt;rt++){const vt=Je[rt];ba(I,A,vt,vt.viewport)}}else Re.length>0&&ll(We,Re,A,Y),Ye&&ut.render(A),ba(I,A,Y)}z!==null&&W===0&&(ue.updateMultisampleRenderTarget(z),ue.updateRenderTargetMipmap(z)),te&&D.end(H),A.isScene===!0&&A.onAfterRender(H,A,Y),ye.resetDefaultState(),re=-1,ae=null,E.pop(),E.length>0?(C=E[E.length-1],ue.setTextureUnits(C.state.textureUnits),bt===!0&&qe.setGlobalState(H.clippingPlanes,C.state.camera)):C=null,O.pop(),O.length>0?I=O[O.length-1]:I=null,K!==null&&K.renderEnd()};function Hs(A,Y,oe,te){if(A.visible===!1)return;if(A.layers.test(Y.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Y);else if(A.isLightProbeGrid)C.pushLightProbeGrid(A);else if(A.isLight)C.pushLight(A),A.castShadow&&C.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Pt.intersectsSprite(A)){te&&st.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const We=pe.update(A),Re=A.material;Re.visible&&I.push(A,We,Re,oe,st.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Pt.intersectsObject(A))){const We=pe.update(A),Re=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),st.copy(A.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),st.copy(We.boundingSphere.center)),st.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(Re)){const Je=We.groups;for(let rt=0,gt=Je.length;rt<gt;rt++){const vt=Je[rt],tt=Re[vt.materialIndex];tt&&tt.visible&&I.push(A,We,tt,oe,st.z,vt)}}else Re.visible&&I.push(A,We,Re,oe,st.z,null)}}const Le=A.children;for(let We=0,Re=Le.length;We<Re;We++)Hs(Le[We],Y,oe,te)}function ba(A,Y,oe,te){const{opaque:J,transmissive:Le,transparent:We}=A;C.setupLightsView(oe),bt===!0&&qe.setGlobalState(H.clippingPlanes,oe),te&&y.viewport(U.copy(te)),J.length>0&&ns(J,Y,oe),Le.length>0&&ns(Le,Y,oe),We.length>0&&ns(We,Y,oe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ll(A,Y,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[te.id]===void 0){const tt=wt.has("EXT_color_buffer_half_float")||wt.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[te.id]=new Ci(1,1,{generateMipmaps:!0,type:tt?Gi:ei,minFilter:zr,samples:Math.max(4,P.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Le=C.state.transmissionRenderTarget[te.id],We=te.viewport||U;Le.setSize(We.z*H.transmissionResolutionScale,We.w*H.transmissionResolutionScale);const Re=H.getRenderTarget(),Je=H.getActiveCubeFace(),rt=H.getActiveMipmapLevel();H.setRenderTarget(Le),H.getClearColor($e),Ge=H.getClearAlpha(),Ge<1&&H.setClearColor(16777215,.5),H.clear(),Ye&&ut.render(oe);const gt=H.toneMapping;H.toneMapping=wi;const vt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),C.setupLightsView(te),bt===!0&&qe.setGlobalState(H.clippingPlanes,te),ns(A,oe,te),ue.updateMultisampleRenderTarget(Le),ue.updateRenderTargetMipmap(Le),wt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Lt=0,Ht=Y.length;Lt<Ht;Lt++){const Yt=Y[Lt],{object:Bt,geometry:sn,material:ze,group:gn}=Yt;if(ze.side===zi&&Bt.layers.test(te.layers)){const Et=ze.side;ze.side=Rn,ze.needsUpdate=!0,Ra(Bt,oe,te,sn,ze,gn),ze.side=Et,ze.needsUpdate=!0,tt=!0}}tt===!0&&(ue.updateMultisampleRenderTarget(Le),ue.updateRenderTargetMipmap(Le))}H.setRenderTarget(Re,Je,rt),H.setClearColor($e,Ge),vt!==void 0&&(te.viewport=vt),H.toneMapping=gt}function ns(A,Y,oe){const te=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Le=A.length;J<Le;J++){const We=A[J],{object:Re,geometry:Je,group:rt}=We;let gt=We.material;gt.allowOverride===!0&&te!==null&&(gt=te),Re.layers.test(oe.layers)&&Ra(Re,Y,oe,Je,gt,rt)}}function Ra(A,Y,oe,te,J,Le){A.onBeforeRender(H,Y,oe,te,J,Le),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(H,Y,oe,te,A,Le),J.transparent===!0&&J.side===zi&&J.forceSinglePass===!1?(J.side=Rn,J.needsUpdate=!0,H.renderBufferDirect(oe,Y,te,J,A,Le),J.side=lr,J.needsUpdate=!0,H.renderBufferDirect(oe,Y,te,J,A,Le),J.side=zi):H.renderBufferDirect(oe,Y,te,J,A,Le),A.onAfterRender(H,Y,oe,te,J,Le)}function is(A,Y,oe){Y.isScene!==!0&&(Y=ot);const te=ee.get(A),J=C.state.lights,Le=C.state.shadowsArray,We=J.state.version,Re=be.getParameters(A,J.state,Le,Y,oe,C.state.lightProbeGridArray),Je=be.getProgramCacheKey(Re);let rt=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;const gt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=Ee.get(A.envMap||te.environment,gt),te.envMapRotation=te.environment!==null&&A.envMap===null?Y.environmentRotation:A.envMapRotation,rt===void 0&&(A.addEventListener("dispose",ri),rt=new Map,te.programs=rt);let vt=rt.get(Je);if(vt!==void 0){if(te.currentProgram===vt&&te.lightsStateVersion===We)return ul(A,Re),vt}else Re.uniforms=be.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,oe,Re),A.onBeforeCompile(Re,H),vt=be.acquireProgram(Re,Je),rt.set(Je,vt),te.uniforms=Re.uniforms;const tt=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(tt.clippingPlanes=qe.uniform),ul(A,Re),te.needsLights=Pa(A),te.lightsStateVersion=We,te.needsLights&&(tt.ambientLightColor.value=J.state.ambient,tt.lightProbe.value=J.state.probe,tt.directionalLights.value=J.state.directional,tt.directionalLightShadows.value=J.state.directionalShadow,tt.spotLights.value=J.state.spot,tt.spotLightShadows.value=J.state.spotShadow,tt.rectAreaLights.value=J.state.rectArea,tt.ltc_1.value=J.state.rectAreaLTC1,tt.ltc_2.value=J.state.rectAreaLTC2,tt.pointLights.value=J.state.point,tt.pointLightShadows.value=J.state.pointShadow,tt.hemisphereLights.value=J.state.hemi,tt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,tt.spotLightMatrix.value=J.state.spotLightMatrix,tt.spotLightMap.value=J.state.spotLightMap,tt.pointShadowMatrix.value=J.state.pointShadowMatrix),te.lightProbeGrid=C.state.lightProbeGridArray.length>0,te.currentProgram=vt,te.uniformsList=null,vt}function Ca(A){if(A.uniformsList===null){const Y=A.currentProgram.getUniforms();A.uniformsList=Jo.seqWithValue(Y.seq,A.uniforms)}return A.uniformsList}function ul(A,Y){const oe=ee.get(A);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function of(A,Y){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,te=A.length;oe<te;oe++){const J=A[oe];if(J.texture!==null&&J.boundingBox.containsPoint(b))return J}return null}function Zt(A,Y,oe,te,J){Y.isScene!==!0&&(Y=ot),ue.resetTextureUnits();const Le=Y.fog,We=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,Re=z===null?H.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ct.workingColorSpace,Je=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,rt=Ee.get(te.envMap||We,Je),gt=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,vt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),tt=!!oe.morphAttributes.position,Lt=!!oe.morphAttributes.normal,Ht=!!oe.morphAttributes.color;let Yt=wi;te.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Yt=H.toneMapping);const Bt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,sn=Bt!==void 0?Bt.length:0,ze=ee.get(te),gn=C.state.lights;if(bt===!0&&(_t===!0||A!==ae)){const zt=A===ae&&te.id===re;qe.setState(te,A,zt)}let Et=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==gn.state.version||ze.outputColorSpace!==Re||J.isBatchedMesh&&ze.batching===!1||!J.isBatchedMesh&&ze.batching===!0||J.isBatchedMesh&&ze.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ze.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ze.instancing===!1||!J.isInstancedMesh&&ze.instancing===!0||J.isSkinnedMesh&&ze.skinning===!1||!J.isSkinnedMesh&&ze.skinning===!0||J.isInstancedMesh&&ze.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ze.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ze.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ze.instancingMorph===!1&&J.morphTexture!==null||ze.envMap!==rt||te.fog===!0&&ze.fog!==Le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==qe.numPlanes||ze.numIntersection!==qe.numIntersection)||ze.vertexAlphas!==gt||ze.vertexTangents!==vt||ze.morphTargets!==tt||ze.morphNormals!==Lt||ze.morphColors!==Ht||ze.toneMapping!==Yt||ze.morphTargetsCount!==sn||!!ze.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,ze.__version=te.version);let On=ze.currentProgram;Et===!0&&(On=is(te,Y,J),K&&te.isNodeMaterial&&K.onUpdateProgram(te,On,ze));let kn=!1,At=!1,ji=!1;const Ot=On.getUniforms(),Wt=ze.uniforms;if(y.useProgram(On.program)&&(kn=!0,At=!0,ji=!0),te.id!==re&&(re=te.id,At=!0),ze.needsLights){const zt=of(C.state.lightProbeGridArray,J);ze.lightProbeGrid!==zt&&(ze.lightProbeGrid=zt,At=!0)}if(kn||ae!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ot.setValue(B,"projectionMatrix",A.projectionMatrix),Ot.setValue(B,"viewMatrix",A.matrixWorldInverse);const _i=Ot.map.cameraPosition;_i!==void 0&&_i.setValue(B,Qe.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Ot.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ot.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),ae!==A&&(ae=A,At=!0,ji=!0)}if(ze.needsLights&&(gn.state.directionalShadowMap.length>0&&Ot.setValue(B,"directionalShadowMap",gn.state.directionalShadowMap,ue),gn.state.spotShadowMap.length>0&&Ot.setValue(B,"spotShadowMap",gn.state.spotShadowMap,ue),gn.state.pointShadowMap.length>0&&Ot.setValue(B,"pointShadowMap",gn.state.pointShadowMap,ue)),J.isSkinnedMesh){Ot.setOptional(B,J,"bindMatrix"),Ot.setOptional(B,J,"bindMatrixInverse");const zt=J.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ot.setValue(B,"boneTexture",zt.boneTexture,ue))}J.isBatchedMesh&&(Ot.setOptional(B,J,"batchingTexture"),Ot.setValue(B,"batchingTexture",J._matricesTexture,ue),Ot.setOptional(B,J,"batchingIdTexture"),Ot.setValue(B,"batchingIdTexture",J._indirectTexture,ue),Ot.setOptional(B,J,"batchingColorTexture"),J._colorsTexture!==null&&Ot.setValue(B,"batchingColorTexture",J._colorsTexture,ue));const vi=oe.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&V.update(J,oe,On),(At||ze.receiveShadow!==J.receiveShadow)&&(ze.receiveShadow=J.receiveShadow,Ot.setValue(B,"receiveShadow",J.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(Wt.envMapIntensity.value=Y.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=Zy()),At){if(Ot.setValue(B,"toneMappingExposure",H.toneMappingExposure),ze.needsLights&&lf(Wt,ji),Le&&te.fog===!0&&Ke.refreshFogUniforms(Wt,Le),Ke.refreshMaterialUniforms(Wt,te,he,ge,C.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const zt=ze.lightProbeGrid;Wt.probesSH.value=zt.texture,Wt.probesMin.value.copy(zt.boundingBox.min),Wt.probesMax.value.copy(zt.boundingBox.max),Wt.probesResolution.value.copy(zt.resolution)}Jo.upload(B,Ca(ze),Wt,ue)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Jo.upload(B,Ca(ze),Wt,ue),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ot.setValue(B,"center",J.center),Ot.setValue(B,"modelViewMatrix",J.modelViewMatrix),Ot.setValue(B,"normalMatrix",J.normalMatrix),Ot.setValue(B,"modelMatrix",J.matrixWorld),te.uniformsGroups!==void 0){const zt=te.uniformsGroups;for(let _i=0,Ni=zt.length;_i<Ni;_i++){const rs=zt[_i];ve.update(rs,On),ve.bind(rs,On)}}return On}function lf(A,Y){A.ambientLightColor.needsUpdate=Y,A.lightProbe.needsUpdate=Y,A.directionalLights.needsUpdate=Y,A.directionalLightShadows.needsUpdate=Y,A.pointLights.needsUpdate=Y,A.pointLightShadows.needsUpdate=Y,A.spotLights.needsUpdate=Y,A.spotLightShadows.needsUpdate=Y,A.rectAreaLights.needsUpdate=Y,A.hemisphereLights.needsUpdate=Y}function Pa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,Y,oe){const te=ee.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=Y,ee.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Y){const oe=ee.get(A);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(A,Y=0,oe=0){z=A,$=Y,W=oe;let te=null,J=!1,Le=!1;if(A){const Re=ee.get(A);if(Re.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,Re.__webglFramebuffer),U.copy(A.viewport),Z.copy(A.scissor),Fe=A.scissorTest,y.viewport(U),y.scissor(Z),y.setScissorTest(Fe),re=-1;return}else if(Re.__webglFramebuffer===void 0)ue.setupRenderTarget(A);else if(Re.__hasExternalTextures)ue.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const gt=A.depthTexture;if(Re.__boundDepthTexture!==gt){if(gt!==null&&ee.has(gt)&&(A.width!==gt.image.width||A.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(A)}}const Je=A.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Le=!0);const rt=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(rt[Y])?te=rt[Y][oe]:te=rt[Y],J=!0):A.samples>0&&ue.useMultisampledRTT(A)===!1?te=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(rt)?te=rt[oe]:te=rt,U.copy(A.viewport),Z.copy(A.scissor),Fe=A.scissorTest}else U.copy(ke).multiplyScalar(he).floor(),Z.copy(St).multiplyScalar(he).floor(),Fe=at;if(oe!==0&&(te=ce),y.bindFramebuffer(B.FRAMEBUFFER,te)&&y.drawBuffers(A,te),y.viewport(U),y.scissor(Z),y.setScissorTest(Fe),J){const Re=ee.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re.__webglTexture,oe)}else if(Le){const Re=Y;for(let Je=0;Je<A.textures.length;Je++){const rt=ee.get(A.textures[Je]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Je,rt.__webglTexture,oe,Re)}}else if(A!==null&&oe!==0){const Re=ee.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Re.__webglTexture,oe)}re=-1},this.readRenderTargetPixels=function(A,Y,oe,te,J,Le,We,Re=0){if(!(A&&A.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Je=Je[We]),Je){y.bindFramebuffer(B.FRAMEBUFFER,Je);try{const rt=A.textures[Re],gt=rt.format,vt=rt.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!P.textureFormatReadable(gt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(vt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=A.width-te&&oe>=0&&oe<=A.height-J&&B.readPixels(Y,oe,te,J,Pe.convert(gt),Pe.convert(vt),Le)}finally{const rt=z!==null?ee.get(z).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(A,Y,oe,te,J,Le,We,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&We!==void 0&&(Je=Je[We]),Je)if(Y>=0&&Y<=A.width-te&&oe>=0&&oe<=A.height-J){y.bindFramebuffer(B.FRAMEBUFFER,Je);const rt=A.textures[Re],gt=rt.format,vt=rt.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!P.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.bufferData(B.PIXEL_PACK_BUFFER,Le.byteLength,B.STREAM_READ),B.readPixels(Y,oe,te,J,Pe.convert(gt),Pe.convert(vt),0);const Lt=z!==null?ee.get(z).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Lt);const Ht=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Q0(B,Ht,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Le),B.deleteBuffer(tt),B.deleteSync(Ht),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Y=null,oe=0){const te=Math.pow(2,-oe),J=Math.floor(A.image.width*te),Le=Math.floor(A.image.height*te),We=Y!==null?Y.x:0,Re=Y!==null?Y.y:0;ue.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,oe,0,0,We,Re,J,Le),y.unbindTexture()},this.copyTextureToTexture=function(A,Y,oe=null,te=null,J=0,Le=0){let We,Re,Je,rt,gt,vt,tt,Lt,Ht;const Yt=A.isCompressedTexture?A.mipmaps[Le]:A.image;if(oe!==null)We=oe.max.x-oe.min.x,Re=oe.max.y-oe.min.y,Je=oe.isBox3?oe.max.z-oe.min.z:1,rt=oe.min.x,gt=oe.min.y,vt=oe.isBox3?oe.min.z:0;else{const Wt=Math.pow(2,-J);We=Math.floor(Yt.width*Wt),Re=Math.floor(Yt.height*Wt),A.isDataArrayTexture?Je=Yt.depth:A.isData3DTexture?Je=Math.floor(Yt.depth*Wt):Je=1,rt=0,gt=0,vt=0}te!==null?(tt=te.x,Lt=te.y,Ht=te.z):(tt=0,Lt=0,Ht=0);const Bt=Pe.convert(Y.format),sn=Pe.convert(Y.type);let ze;Y.isData3DTexture?(ue.setTexture3D(Y,0),ze=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ue.setTexture2DArray(Y,0),ze=B.TEXTURE_2D_ARRAY):(ue.setTexture2D(Y,0),ze=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);const gn=y.getParameter(B.UNPACK_ROW_LENGTH),Et=y.getParameter(B.UNPACK_IMAGE_HEIGHT),On=y.getParameter(B.UNPACK_SKIP_PIXELS),kn=y.getParameter(B.UNPACK_SKIP_ROWS),At=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Yt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Yt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,rt),y.pixelStorei(B.UNPACK_SKIP_ROWS,gt),y.pixelStorei(B.UNPACK_SKIP_IMAGES,vt);const ji=A.isDataArrayTexture||A.isData3DTexture,Ot=Y.isDataArrayTexture||Y.isData3DTexture;if(A.isDepthTexture){const Wt=ee.get(A),vi=ee.get(Y),zt=ee.get(Wt.__renderTarget),_i=ee.get(vi.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,zt.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Ni=0;Ni<Je;Ni++)ji&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,J,vt+Ni),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ee.get(Y).__webglTexture,Le,Ht+Ni)),B.blitFramebuffer(rt,gt,We,Re,tt,Lt,We,Re,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||ee.has(A)){const Wt=ee.get(A),vi=ee.get(Y);y.bindFramebuffer(B.READ_FRAMEBUFFER,fe),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,j);for(let zt=0;zt<Je;zt++)ji?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Wt.__webglTexture,J,vt+zt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Wt.__webglTexture,J),Ot?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vi.__webglTexture,Le,Ht+zt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vi.__webglTexture,Le),J!==0?B.blitFramebuffer(rt,gt,We,Re,tt,Lt,We,Re,B.COLOR_BUFFER_BIT,B.NEAREST):Ot?B.copyTexSubImage3D(ze,Le,tt,Lt,Ht+zt,rt,gt,We,Re):B.copyTexSubImage2D(ze,Le,tt,Lt,rt,gt,We,Re);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ot?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(ze,Le,tt,Lt,Ht,We,Re,Je,Bt,sn,Yt.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(ze,Le,tt,Lt,Ht,We,Re,Je,Bt,Yt.data):B.texSubImage3D(ze,Le,tt,Lt,Ht,We,Re,Je,Bt,sn,Yt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Le,tt,Lt,We,Re,Bt,sn,Yt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Le,tt,Lt,Yt.width,Yt.height,Bt,Yt.data):B.texSubImage2D(B.TEXTURE_2D,Le,tt,Lt,We,Re,Bt,sn,Yt);y.pixelStorei(B.UNPACK_ROW_LENGTH,gn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),y.pixelStorei(B.UNPACK_SKIP_PIXELS,On),y.pixelStorei(B.UNPACK_SKIP_ROWS,kn),y.pixelStorei(B.UNPACK_SKIP_IMAGES,At),Le===0&&Y.generateMipmaps&&B.generateMipmap(ze),y.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ue.setTextureCube(A,0):A.isData3DTexture?ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ue.setTexture2DArray(A,0):ue.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){$=0,W=0,z=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const Qy=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  #ifdef ADD_HELPERS
  v_responsiveHelperBox = uv;
  v_responsiveHelperBox *= responsiveBoxScale;
  v_responsiveHelperBox += boxOrigin * (responsiveBoxScale - 1.);
  #endif

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,Lp=1920*1080*4;let Jy=class{constructor(e,n,r,o,l=0,c=0,d=2,h=Lp,m=[]){lt(this,"parentElement");lt(this,"canvasElement");lt(this,"gl");lt(this,"program",null);lt(this,"uniformLocations",{});lt(this,"fragmentShader");lt(this,"rafId",null);lt(this,"lastRenderTime",0);lt(this,"currentFrame",0);lt(this,"speed",0);lt(this,"currentSpeed",0);lt(this,"providedUniforms");lt(this,"mipmaps",[]);lt(this,"hasBeenDisposed",!1);lt(this,"resolutionChanged",!0);lt(this,"textures",new Map);lt(this,"minPixelRatio");lt(this,"maxPixelCount");lt(this,"isSafari",nM());lt(this,"uniformCache",{});lt(this,"textureUnitMap",new Map);lt(this,"ownerDocument");lt(this,"initProgram",()=>{const e=eM(this.gl,Qy,this.fragmentShader);e&&(this.program=e)});lt(this,"setupPositionAttribute",()=>{const e=this.gl.getAttribLocation(this.program,"a_position"),n=this.gl.createBuffer();this.gl.bindBuffer(this.gl.ARRAY_BUFFER,n);const r=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(r),this.gl.STATIC_DRAW),this.gl.enableVertexAttribArray(e),this.gl.vertexAttribPointer(e,2,this.gl.FLOAT,!1,0,0)});lt(this,"setupUniforms",()=>{const e={u_time:this.gl.getUniformLocation(this.program,"u_time"),u_pixelRatio:this.gl.getUniformLocation(this.program,"u_pixelRatio"),u_resolution:this.gl.getUniformLocation(this.program,"u_resolution")};Object.entries(this.providedUniforms).forEach(([n,r])=>{if(e[n]=this.gl.getUniformLocation(this.program,n),r instanceof HTMLImageElement){const o=`${n}AspectRatio`;e[o]=this.gl.getUniformLocation(this.program,o)}}),this.uniformLocations=e});lt(this,"renderScale",1);lt(this,"parentWidth",0);lt(this,"parentHeight",0);lt(this,"parentDevicePixelWidth",0);lt(this,"parentDevicePixelHeight",0);lt(this,"devicePixelsSupported",!1);lt(this,"intersectionObserver",null);lt(this,"isInViewport",!0);lt(this,"resizeObserver",null);lt(this,"setupResizeObserver",()=>{this.resizeObserver=new ResizeObserver(([e])=>{var n;if(e!=null&&e.borderBoxSize[0]){const r=(n=e.devicePixelContentBoxSize)==null?void 0:n[0];r!==void 0&&(this.devicePixelsSupported=!0,this.parentDevicePixelWidth=r.inlineSize,this.parentDevicePixelHeight=r.blockSize),this.parentWidth=e.borderBoxSize[0].inlineSize,this.parentHeight=e.borderBoxSize[0].blockSize}this.handleResize()}),this.resizeObserver.observe(this.parentElement)});lt(this,"setupIntersectionObserver",()=>{const e=this.ownerDocument.defaultView;e!=null&&e.IntersectionObserver&&(this.intersectionObserver=new e.IntersectionObserver(([n])=>{this.isInViewport=(n==null?void 0:n.isIntersecting)??!0,this.updateCurrentSpeed()}),this.intersectionObserver.observe(this.parentElement))});lt(this,"handleVisualViewportChange",()=>{var e;(e=this.resizeObserver)==null||e.disconnect(),this.setupResizeObserver()});lt(this,"handleResize",()=>{let e=0,n=0;const r=Math.max(1,window.devicePixelRatio),o=(visualViewport==null?void 0:visualViewport.scale)??1;if(this.devicePixelsSupported){const _=Math.max(1,this.minPixelRatio/r);e=this.parentDevicePixelWidth*_*o,n=this.parentDevicePixelHeight*_*o}else{let _=Math.max(r,this.minPixelRatio)*o;if(this.isSafari){const x=iM(this.ownerDocument);_*=Math.max(1,x)}e=Math.round(this.parentWidth)*_,n=Math.round(this.parentHeight)*_}const l=Math.sqrt(this.maxPixelCount)/Math.sqrt(e*n),c=Math.min(1,l),d=Math.round(e*c),h=Math.round(n*c),m=d/Math.round(this.parentWidth);(this.canvasElement.width!==d||this.canvasElement.height!==h||this.renderScale!==m)&&(this.renderScale=m,this.canvasElement.width=d,this.canvasElement.height=h,this.resolutionChanged=!0,this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.render(performance.now()))});lt(this,"render",e=>{if(this.hasBeenDisposed)return;if(this.program===null){console.warn("Tried to render before program or gl was initialized");return}const n=e-this.lastRenderTime;this.lastRenderTime=e,this.currentSpeed!==0&&(this.currentFrame+=n*this.currentSpeed),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.useProgram(this.program),this.gl.uniform1f(this.uniformLocations.u_time,this.currentFrame*.001),this.resolutionChanged&&(this.gl.uniform2f(this.uniformLocations.u_resolution,this.gl.canvas.width,this.gl.canvas.height),this.gl.uniform1f(this.uniformLocations.u_pixelRatio,this.renderScale),this.resolutionChanged=!1),this.gl.drawArrays(this.gl.TRIANGLES,0,6),this.currentSpeed!==0?this.requestRender():this.rafId=null});lt(this,"requestRender",()=>{this.rafId!==null&&cancelAnimationFrame(this.rafId),this.rafId=requestAnimationFrame(this.render)});lt(this,"setTextureUniform",(e,n)=>{if(!n.complete||n.naturalWidth===0)throw new Error(`Paper Shaders: image for uniform ${e} must be fully loaded`);const r=this.textures.get(e);r&&this.gl.deleteTexture(r),this.textureUnitMap.has(e)||this.textureUnitMap.set(e,this.textureUnitMap.size);const o=this.textureUnitMap.get(e);this.gl.activeTexture(this.gl.TEXTURE0+o);const l=this.gl.createTexture();this.gl.bindTexture(this.gl.TEXTURE_2D,l),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MAG_FILTER,this.gl.LINEAR),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,n),this.mipmaps.includes(e)&&(this.gl.generateMipmap(this.gl.TEXTURE_2D),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR_MIPMAP_LINEAR));const c=this.gl.getError();if(c!==this.gl.NO_ERROR||l===null){console.error("Paper Shaders: WebGL error when uploading texture:",c);return}this.textures.set(e,l);const d=this.uniformLocations[e];if(d){this.gl.uniform1i(d,o);const h=`${e}AspectRatio`,m=this.uniformLocations[h];if(m){const _=n.naturalWidth/n.naturalHeight;this.gl.uniform1f(m,_)}}});lt(this,"areUniformValuesEqual",(e,n)=>e===n?!0:Array.isArray(e)&&Array.isArray(n)&&e.length===n.length?e.every((r,o)=>this.areUniformValuesEqual(r,n[o])):!1);lt(this,"setUniformValues",e=>{this.gl.useProgram(this.program),Object.entries(e).forEach(([n,r])=>{let o=r;if(r instanceof HTMLImageElement&&(o=`${r.src.slice(0,200)}|${r.naturalWidth}x${r.naturalHeight}`),this.areUniformValuesEqual(this.uniformCache[n],o))return;this.uniformCache[n]=o;const l=this.uniformLocations[n];if(!l){console.warn(`Uniform location for ${n} not found`);return}if(r instanceof HTMLImageElement)this.setTextureUniform(n,r);else if(Array.isArray(r)){let c=null,d=null;if(r[0]!==void 0&&Array.isArray(r[0])){const h=r[0].length;if(r.every(m=>m.length===h))c=r.flat(),d=h;else{console.warn(`All child arrays must be the same length for ${n}`);return}}else c=r,d=c.length;switch(d){case 2:this.gl.uniform2fv(l,c);break;case 3:this.gl.uniform3fv(l,c);break;case 4:this.gl.uniform4fv(l,c);break;case 9:this.gl.uniformMatrix3fv(l,!1,c);break;case 16:this.gl.uniformMatrix4fv(l,!1,c);break;default:console.warn(`Unsupported uniform array length: ${d}`)}}else typeof r=="number"?this.gl.uniform1f(l,r):typeof r=="boolean"?this.gl.uniform1i(l,r?1:0):console.warn(`Unsupported uniform type for ${n}: ${typeof r}`)})});lt(this,"getCurrentFrame",()=>this.currentFrame);lt(this,"setFrame",e=>{this.currentFrame=e,this.lastRenderTime=performance.now(),this.render(performance.now())});lt(this,"setSpeed",(e=1)=>{this.speed=e,this.updateCurrentSpeed()});lt(this,"updateCurrentSpeed",()=>{this.setCurrentSpeed(this.ownerDocument.hidden||!this.isInViewport?0:this.speed)});lt(this,"setCurrentSpeed",e=>{this.currentSpeed=e,this.rafId===null&&e!==0&&(this.lastRenderTime=performance.now(),this.rafId=requestAnimationFrame(this.render)),this.rafId!==null&&e===0&&(cancelAnimationFrame(this.rafId),this.rafId=null)});lt(this,"setMaxPixelCount",(e=Lp)=>{this.maxPixelCount=e,this.handleResize()});lt(this,"setMinPixelRatio",(e=2)=>{this.minPixelRatio=e,this.handleResize()});lt(this,"setUniforms",e=>{this.setUniformValues(e),this.providedUniforms={...this.providedUniforms,...e},this.render(performance.now())});lt(this,"handleDocumentVisibilityChange",()=>{this.updateCurrentSpeed()});lt(this,"dispose",()=>{this.hasBeenDisposed=!0,this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),this.gl&&this.program&&(this.textures.forEach(e=>{this.gl.deleteTexture(e)}),this.textures.clear(),this.gl.deleteProgram(this.program),this.program=null,this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null),this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,null),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,null),this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),this.gl.getError()),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null),this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null),visualViewport==null||visualViewport.removeEventListener("resize",this.handleVisualViewportChange),this.ownerDocument.removeEventListener("visibilitychange",this.handleDocumentVisibilityChange),this.uniformLocations={},this.canvasElement.remove(),delete this.parentElement.paperShaderMount});if((e==null?void 0:e.nodeType)===1)this.parentElement=e;else throw new Error("Paper Shaders: parent element must be an HTMLElement");if(this.ownerDocument=e.ownerDocument,!this.ownerDocument.querySelector("style[data-paper-shader]")){const g=this.ownerDocument.createElement("style");g.innerHTML=tM,g.setAttribute("data-paper-shader",""),this.ownerDocument.head.prepend(g)}const _=this.ownerDocument.createElement("canvas");this.canvasElement=_,this.parentElement.prepend(_),this.fragmentShader=n,this.providedUniforms=r,this.mipmaps=m,this.currentFrame=c,this.minPixelRatio=d,this.maxPixelCount=h;const x=_.getContext("webgl2",o);if(!x)throw new Error("Paper Shaders: WebGL is not supported in this browser");this.gl=x,this.initProgram(),this.setupPositionAttribute(),this.setupUniforms(),this.setUniformValues(this.providedUniforms),this.setupResizeObserver(),visualViewport==null||visualViewport.addEventListener("resize",this.handleVisualViewportChange),this.setupIntersectionObserver(),this.setSpeed(l),this.parentElement.setAttribute("data-paper-shader",""),this.parentElement.paperShaderMount=this,this.ownerDocument.addEventListener("visibilitychange",this.handleDocumentVisibilityChange)}};function Dp(s,e,n){const r=s.createShader(e);return r?(s.shaderSource(r,n),s.compileShader(r),s.getShaderParameter(r,s.COMPILE_STATUS)?r:(console.error("An error occurred compiling the shaders: "+s.getShaderInfoLog(r)),s.deleteShader(r),null)):null}function eM(s,e,n){const r=s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT),o=r?r.precision:null;o&&o<23&&(e=e.replace(/precision\s+(lowp|mediump)\s+float;/g,"precision highp float;"),n=n.replace(/precision\s+(lowp|mediump)\s+float/g,"precision highp float").replace(/\b(uniform|varying|attribute)\s+(lowp|mediump)\s+(\w+)/g,"$1 highp $3"));const l=Dp(s,s.VERTEX_SHADER,e),c=Dp(s,s.FRAGMENT_SHADER,n);if(!l||!c)return null;const d=s.createProgram();return d?(s.attachShader(d,l),s.attachShader(d,c),s.linkProgram(d),s.getProgramParameter(d,s.LINK_STATUS)?(s.detachShader(d,l),s.detachShader(d,c),s.deleteShader(l),s.deleteShader(c),d):(console.error("Unable to initialize the shader program: "+s.getProgramInfoLog(d)),s.deleteProgram(d),s.deleteShader(l),s.deleteShader(c),null)):null}const tM=`@layer paper-shaders {
  :where([data-paper-shader]) {
    isolation: isolate;
    position: relative;

    & canvas {
      contain: strict;
      display: block;
      position: absolute;
      inset: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      corner-shape: inherit;
    }
  }
}`;function nM(){const s=navigator.userAgent.toLowerCase();return s.includes("safari")&&!s.includes("chrome")&&!s.includes("android")}function iM(s){const e=(visualViewport==null?void 0:visualViewport.scale)??1,n=(visualViewport==null?void 0:visualViewport.width)??window.innerWidth,r=window.innerWidth-s.documentElement.clientWidth,o=e*n+r,l=outerWidth/o,c=Math.round(100*l);return c%5===0?c/100:c===33?1/3:c===67?2/3:c===133?4/3:l}const rM={fit:"contain",scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0},sM={none:0,contain:1,cover:2},aM=`#version 300 es
precision mediump float;

uniform float u_rotation;

uniform float u_time;

uniform vec4 u_colorFront;
uniform vec4 u_colorBack;
uniform float u_radius;
uniform float u_contrast;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform float u_size;
uniform float u_grainMixer;
uniform float u_grainOverlay;
uniform float u_grainSize;
uniform float u_grid;
uniform bool u_originalColors;
uniform bool u_inverted;
uniform float u_type;

in vec2 v_imageUV;

out vec4 fragColor;


#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846


vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}


  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }


float valueNoise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  float x1 = mix(a, b, u.x);
  float x2 = mix(c, d, u.x);
  return mix(x1, x2, u.y);
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

float sst(float edge0, float edge1, float x) {
  return smoothstep(edge0, edge1, x);
}

float getCircle(vec2 uv, float r, float baseR) {
  r = mix(.25 * baseR, 0., r);
  float d = length(uv - .5);
  float aa = fwidth(d);
  return 1. - smoothstep(r - aa, r + aa, d);
}

float getCell(vec2 uv) {
  float insideX = step(0.0, uv.x) * (1.0 - step(1.0, uv.x));
  float insideY = step(0.0, uv.y) * (1.0 - step(1.0, uv.y));
  return insideX * insideY;
}

float getCircleWithHole(vec2 uv, float r, float baseR) {
  float cell = getCell(uv);

  r = mix(.75 * baseR, 0., r);
  float rMod = mod(r, .5);

  float d = length(uv - .5);
  float aa = fwidth(d);
  float circle = 1. - smoothstep(rMod - aa, rMod + aa, d);
  if (r < .5) {
    return circle;
  } else {
    return cell - circle;
  }
}

float getGooeyBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = .3;
  if (u_grid == 1.) {
    sizeRadius = .42;
  }
  sizeRadius = mix(sizeRadius * baseR, 0., r);
  d = 1. - sst(0., sizeRadius, d);

  d = pow(d, 2. + baseR);
  return d;
}

float getSoftBall(vec2 uv, float r, float baseR) {
  float d = length(uv - .5);
  float sizeRadius = clamp(baseR, 0., 1.);
  sizeRadius = mix(.5 * sizeRadius, 0., r);
  d = 1. - lst(0., sizeRadius, d);
  float powRadius = 1. - lst(0., 2., baseR);
  d = pow(d, 4. + 3. * powRadius);
  return d;
}

float getUvFrame(vec2 uv, vec2 pad) {
  float aa = 0.0001;

  float left   = smoothstep(-pad.x, -pad.x + aa, uv.x);
  float right  = smoothstep(1.0 + pad.x, 1.0 + pad.x - aa, uv.x);
  float bottom = smoothstep(-pad.y, -pad.y + aa, uv.y);
  float top    = smoothstep(1.0 + pad.y, 1.0 + pad.y - aa, uv.y);

  return left * right * bottom * top;
}

float sigmoid(float x, float k) {
  return 1.0 / (1.0 + exp(-k * (x - 0.5)));
}

float getLumAtPx(vec2 uv, float contrast) {
  vec4 tex = texture(u_image, uv);
  vec3 color = vec3(
  sigmoid(tex.r, contrast),
  sigmoid(tex.g, contrast),
  sigmoid(tex.b, contrast)
  );
  float lum = dot(vec3(0.2126, 0.7152, 0.0722), color);
  lum = mix(1., lum, tex.a);
  lum = u_inverted ? (1. - lum) : lum;
  return lum;
}

float getLumBall(vec2 p, vec2 pad, vec2 inCellOffset, float contrast, float baseR, float stepSize, out vec4 ballColor) {
  p += inCellOffset;
  vec2 uv_i = floor(p);
  vec2 uv_f = fract(p);
  vec2 samplingUV = (uv_i + .5 - inCellOffset) * pad + vec2(.5);
  float outOfFrame = getUvFrame(samplingUV, pad * stepSize);

  float lum = getLumAtPx(samplingUV, contrast);
  ballColor = texture(u_image, samplingUV);
  ballColor.rgb *= ballColor.a;
  ballColor *= outOfFrame;

  float ball = 0.;
  if (u_type == 0.) {
    // classic
    ball = getCircle(uv_f, lum, baseR);
  } else if (u_type == 1.) {
    // gooey
    ball = getGooeyBall(uv_f, lum, baseR);
  } else if (u_type == 2.) {
    // holes
    ball = getCircleWithHole(uv_f, lum, baseR);
  } else if (u_type == 3.) {
    // soft
    ball = getSoftBall(uv_f, lum, baseR);
  }

  return ball * outOfFrame;
}


void main() {

  float stepMultiplier = 1.;
  if (u_type == 0.) {
    // classic
    stepMultiplier = 2.;
  } else if (u_type == 1. || u_type == 3.) {
    // gooey & soft
    stepMultiplier = 6.;
  }

  float cellsPerSide = mix(300., 7., pow(u_size, .7));
  cellsPerSide /= stepMultiplier;
  float cellSizeY = 1. / cellsPerSide;
  vec2 pad = cellSizeY * vec2(1. / u_imageAspectRatio, 1.);
  if (u_type == 1. && u_grid == 1.) {
    // gooey diagonal grid works differently
    pad *= .7;
  }

  vec2 uv = v_imageUV;
  uv -= vec2(.5);
  uv /= pad;

  float contrast = mix(0., 15., pow(u_contrast, 1.5));
  float baseRadius = u_radius;
  if (u_originalColors == true) {
    contrast = mix(.1, 4., pow(u_contrast, 2.));
    baseRadius = 2. * pow(.5 * u_radius, .3);
  }

  float totalShape = 0.;
  vec3 totalColor = vec3(0.);
  float totalOpacity = 0.;

  vec4 ballColor;
  float shape;
  float stepSize = 1. / stepMultiplier;
  for (float x = -0.5; x < 0.5; x += stepSize) {
    for (float y = -0.5; y < 0.5; y += stepSize) {
      vec2 offset = vec2(x, y);

      if (u_grid == 1.) {
        float rowIndex = floor((y + .5) / stepSize);
        float colIndex = floor((x + .5) / stepSize);
        if (stepSize == 1.) {
          rowIndex = floor(uv.y + y + 1.);
          if (u_type == 1.) {
            colIndex = floor(uv.x + x + 1.);
          }
        }
        if (u_type == 1.) {
          if (mod(rowIndex + colIndex, 2.) == 1.) {
            continue;
          }
        } else {
          if (mod(rowIndex, 2.) == 1.) {
            offset.x += .5 * stepSize;
          }
        }
      }

      shape = getLumBall(uv, pad, offset, contrast, baseRadius, stepSize, ballColor);
      totalColor   += ballColor.rgb * shape;
      totalShape   += shape;
      totalOpacity += shape;
    }
  }

  const float eps = 1e-4;

  totalColor /= max(totalShape, eps);
  totalOpacity /= max(totalShape, eps);

  float finalShape = 0.;
  if (u_type == 0.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 1.) {
    float aa = fwidth(totalShape);
    float th = .5;
    finalShape = smoothstep(th - aa, th + aa, totalShape);
  } else if (u_type == 2.) {
    finalShape = min(1., totalShape);
  } else if (u_type == 3.) {
    finalShape = totalShape;
  }

  vec2 grainSize = mix(2000., 200., u_grainSize) * vec2(1., 1. / u_imageAspectRatio);
  vec2 grainUV = v_imageUV - .5;
  grainUV *= grainSize;
  grainUV += .5;
  float grain = valueNoise(grainUV);
  grain = smoothstep(.55, .7 + .2 * u_grainMixer, grain);
  grain *= u_grainMixer;
  finalShape = mix(finalShape, 0., grain);

  vec3 color = vec3(0.);
  float opacity = 0.;

  if (u_originalColors == true) {
    color = totalColor * finalShape;
    opacity = totalOpacity * finalShape;

    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    color = color + bgColor * (1. - opacity);
    opacity = opacity + u_colorBack.a * (1. - opacity);
  } else {
    vec3 fgColor = u_colorFront.rgb * u_colorFront.a;
    float fgOpacity = u_colorFront.a;
    vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
    float bgOpacity = u_colorBack.a;

    color = fgColor * finalShape;
    opacity = fgOpacity * finalShape;
    color += bgColor * (1. - opacity);
    opacity += bgOpacity * (1. - opacity);
  }

  float grainOverlay = valueNoise(rotate(grainUV, 1.) + vec2(3.));
  grainOverlay = mix(grainOverlay, valueNoise(rotate(grainUV, 2.) + vec2(-1.)), .5);
  grainOverlay = pow(grainOverlay, 1.3);

  float grainOverlayV = grainOverlay * 2. - 1.;
  vec3 grainOverlayColor = vec3(step(0., grainOverlayV));
  float grainOverlayStrength = u_grainOverlay * abs(grainOverlayV);
  grainOverlayStrength = pow(grainOverlayStrength, .8);
  color = mix(color, grainOverlayColor, .5 * grainOverlayStrength);

  opacity += .5 * grainOverlayStrength;
  opacity = clamp(opacity, 0., 1.);

  fragColor = vec4(color, opacity);
}
`,oM={classic:0,gooey:1,holes:2,soft:3},lM={square:0,hex:1};function Ip(s){if(Array.isArray(s))return s.length===4?s:s.length===3?[...s,1]:zs;if(typeof s!="string")return zs;let e,n,r,o=1;if(s.startsWith("#"))[e,n,r,o]=uM(s);else if(s.startsWith("rgb")){const l=cM(s);if(l===null)return zs;[e,n,r,o]=l}else if(s.startsWith("hsl")){const l=fM(s);if(l===null)return zs;[e,n,r,o]=dM(l)}else return console.error("Unsupported color format",s),zs;return[tl(e,0,1),tl(n,0,1),tl(r,0,1),tl(o,0,1)]}function uM(s){if(s=s.replace(/^#/,""),(s.length===3||s.length===4)&&(s=s.split("").map(l=>l+l).join("")),s.length===6&&(s=s+"ff"),!/^[0-9a-f]{8}$/i.test(s))return console.warn("Invalid hex color"),zs;const e=parseInt(s.slice(0,2),16)/255,n=parseInt(s.slice(2,4),16)/255,r=parseInt(s.slice(4,6),16)/255,o=parseInt(s.slice(6,8),16)/255;return[e,n,r,o]}function cM(s){const e=s.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([0-9.]+))?\s*\)$/i);return e?[parseInt(e[1]??"0")/255,parseInt(e[2]??"0")/255,parseInt(e[3]??"0")/255,e[4]===void 0?1:parseFloat(e[4])]:null}function fM(s){const e=s.match(/^hsla?\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([0-9.]+))?\s*\)$/i);return e?[parseInt(e[1]??"0"),parseInt(e[2]??"0"),parseInt(e[3]??"0"),e[4]===void 0?1:parseFloat(e[4])]:null}function dM(s){const[e,n,r,o]=s,l=e/360,c=n/100,d=r/100;let h,m,_;if(n===0)h=m=_=d;else{const x=(w,R,S)=>(S<0&&(S+=1),S>1&&(S-=1),S<.16666666666666666?w+(R-w)*6*S:S<.5?R:S<.6666666666666666?w+(R-w)*(.6666666666666666-S)*6:w),g=d<.5?d*(1+c):d+c-d*c,M=2*d-g;h=x(M,g,l+1/3),m=x(M,g,l),_=x(M,g,l-1/3)}return[h,m,_,o]}const tl=(s,e,n)=>Math.min(Math.max(s,e),n),zs=[.5,.5,.5,1],hM="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";function pM(s){const e=Oe.useRef(void 0),n=Oe.useCallback(r=>{const o=s.map(l=>{if(l!=null){if(typeof l=="function"){const c=l,d=c(r);return typeof d=="function"?d:()=>{c(null)}}return l.current=r,()=>{l.current=null}}});return()=>{o.forEach(l=>l==null?void 0:l())}},s);return Oe.useMemo(()=>s.every(r=>r==null)?null:r=>{e.current&&(e.current(),e.current=void 0),r!=null&&(e.current=n(r))},s)}function Np(s){if(s.naturalWidth<1024&&s.naturalHeight<1024){if(s.naturalWidth<1||s.naturalHeight<1)return;const e=s.naturalWidth/s.naturalHeight;s.width=Math.round(e>1?1024*e:1024),s.height=Math.round(e>1?1024:1024/e)}}async function Up(s){const e={},n=[],r=l=>{try{return l.startsWith("/")||new URL(l),!0}catch{return!1}},o=l=>{try{return l.startsWith("/")?!1:new URL(l,window.location.origin).origin!==window.location.origin}catch{return!1}};return Object.entries(s).forEach(([l,c])=>{if(typeof c=="string"){const d=c||hM;if(!r(d)){console.warn(`Uniform "${l}" has invalid URL "${d}". Skipping image loading.`);return}const h=new Promise((m,_)=>{const x=new Image;o(d)&&(x.crossOrigin="anonymous"),x.onload=()=>{Np(x),e[l]=x,m()},x.onerror=()=>{console.error(`Could not set uniforms. Failed to load image at ${d}`),_()},x.src=d});n.push(h)}else if(c instanceof HTMLImageElement){const d=c.decode().then(()=>{Np(c),e[l]=c});n.push(d)}else e[l]=c}),await Promise.all(n),e}const Fp=Oe.forwardRef(function({fragmentShader:e,uniforms:n,webGlContextAttributes:r,speed:o=0,frame:l=0,width:c,height:d,minPixelRatio:h,maxPixelCount:m,mipmaps:_,style:x,...g},M){const[w,R]=Oe.useState(!1),S=Oe.useRef(null),v=Oe.useRef(null),L=Oe.useRef(r);Oe.useEffect(()=>((async()=>{const I=await Up(n);S.current&&!v.current&&(v.current=new Jy(S.current,e,I,L.current,o,l,h,m,_),R(!0))})(),()=>{var I;(I=v.current)==null||I.dispose(),v.current=null}),[e]),Oe.useEffect(()=>{let b=!1;return(async()=>{var O;const C=await Up(n);b||(O=v.current)==null||O.setUniforms(C)})(),()=>{b=!0}},[n,w]),Oe.useEffect(()=>{var b;(b=v.current)==null||b.setSpeed(o)},[o,w]),Oe.useEffect(()=>{var b;(b=v.current)==null||b.setMaxPixelCount(m)},[m,w]),Oe.useEffect(()=>{var b;(b=v.current)==null||b.setMinPixelRatio(h)},[h,w]),Oe.useEffect(()=>{var b;(b=v.current)==null||b.setFrame(l)},[l,w]);const F=pM([S,M]);return _e.jsx("div",{ref:F,style:c!==void 0||d!==void 0?{width:typeof c=="string"&&isNaN(+c)===!1?+c:c,height:typeof d=="string"&&isNaN(+d)===!1?+d:d,...x}:x,...g})});Fp.displayName="ShaderMount";function mM(s,e){var n,r,o;if(Object.keys(s).length!==Object.keys(e).length)return!1;for(const l in s){if(l==="colors"){const c=Array.isArray(s.colors),d=Array.isArray(e.colors);if(!c||!d){if(Object.is(s.colors,e.colors)===!1)return!1;continue}if(((n=s.colors)==null?void 0:n.length)!==((r=e.colors)==null?void 0:r.length)||!((o=s.colors)!=null&&o.every((h,m)=>{var _;return h===((_=e.colors)==null?void 0:_[m])})))return!1;continue}if(Object.is(s[l],e[l])===!1)return!1}return!0}const Kt={params:{...rM,fit:"cover",speed:0,frame:0,colorBack:"#f2f1e8",colorFront:"#2b2b2b",size:.5,radius:1.25,contrast:.4,originalColors:!1,inverted:!1,grainMixer:.2,grainOverlay:.2,grainSize:.5,grid:"hex",type:"gooey"}},gM=Oe.memo(function({speed:e=Kt.params.speed,frame:n=Kt.params.frame,colorFront:r=Kt.params.colorFront,colorBack:o=Kt.params.colorBack,image:l="",size:c=Kt.params.size,radius:d=Kt.params.radius,contrast:h=Kt.params.contrast,originalColors:m=Kt.params.originalColors,inverted:_=Kt.params.inverted,grainMixer:x=Kt.params.grainMixer,grainOverlay:g=Kt.params.grainOverlay,grainSize:M=Kt.params.grainSize,grid:w=Kt.params.grid,type:R=Kt.params.type,fit:S=Kt.params.fit,scale:v=Kt.params.scale,rotation:L=Kt.params.rotation,originX:F=Kt.params.originX,originY:b=Kt.params.originY,offsetX:I=Kt.params.offsetX,offsetY:C=Kt.params.offsetY,worldWidth:O=Kt.params.worldWidth,worldHeight:E=Kt.params.worldHeight,...D}){const H={u_image:l,u_colorFront:Ip(r),u_colorBack:Ip(o),u_size:c,u_radius:d,u_contrast:h,u_originalColors:m,u_inverted:_,u_grainMixer:x,u_grainOverlay:g,u_grainSize:M,u_grid:lM[w],u_type:oM[R],u_fit:sM[S],u_rotation:L,u_scale:v,u_offsetX:I,u_offsetY:C,u_originX:F,u_originY:b,u_worldWidth:O,u_worldHeight:E};return _e.jsx(Fp,{...D,speed:e,frame:n,fragmentShader:aM,uniforms:H})},mM),Op=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
float fbm(vec3 p) {
  float f = 0.0;
  f += 0.5333 * snoise(p);
  f += 0.2667 * snoise(p * 2.02);
  f += 0.1333 * snoise(p * 4.05);
  f += 0.0667 * snoise(p * 8.1);
  return f;
}
`,vM=`
varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vViewDir;
void main() {
  // a perfect glass sphere — all the gaseous motion lives in the shading
  vPos = position;
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vViewDir = normalize(-mvPosition.xyz);
  gl_Position = projectionMatrix * mvPosition;
}
`,_M=`
uniform float uTime;
uniform float uScale;
uniform float uSoft;
uniform float uBlur;
uniform float uVeinAmp;
uniform float uRimAmp;
uniform vec3 uW; // degen / balanced / saver shares
uniform vec3 uDeepD; uniform vec3 uMidD; uniform vec3 uBrightD; uniform vec3 uVeinD;
uniform vec3 uDeepB; uniform vec3 uMidB; uniform vec3 uBrightB; uniform vec3 uVeinB;
uniform vec3 uDeepS; uniform vec3 uMidS; uniform vec3 uBrightS; uniform vec3 uVeinS;
uniform vec3 uRim;
varying vec3 vNormal;
varying vec3 vPos;
varying vec3 vViewDir;
${Op}

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewDir);
  float t = uTime;

  // domain-warped flow at a large, cloudy scale
  vec3 p = vPos * uScale;
  vec3 warp = vec3(
    fbm(p + vec3(t * 0.05, 0.0, -t * 0.03)),
    fbm(p + vec3(-t * 0.04, t * 0.025, 7.3)),
    fbm(p + vec3(3.1, -t * 0.03, t * 0.04))
  );
  float flow = fbm(p * 1.25 + warp * 1.3);
  float haze = fbm(p * 2.1 + warp * 1.5 + vec3(0.0, t * 0.08, 0.0));

  // ---- mood territories --------------------------------------------
  // amber gathers on one side, green on the other (like the artwork),
  // with an organic drifting frontier; region sizes follow the shares
  float s = clamp(0.5 + 0.30 * vPos.x + 0.26 * snoise(vPos * 0.9 + warp * 0.8), 0.0, 1.0);
  // keep the field clear of the thresholds' soft edges so a 100% share
  // paints the entire sphere
  s = 0.15 + 0.70 * s;
  float e = 0.11 + 0.22 * uBlur;
  float t1 = uW.x;
  float t2 = uW.x + uW.y;
  float wD = 1.0 - smoothstep(t1 - e, t1 + e, s);
  float wS = smoothstep(t2 - e, t2 + e, s);
  float wB = clamp(1.0 - wD - wS, 0.0, 1.0);

  vec3 deep = uDeepD * wD + uDeepB * wB + uDeepS * wS;
  vec3 mid = uMidD * wD + uMidB * wB + uMidS * wS;
  vec3 bright = uBrightD * wD + uBrightB * wB + uBrightS * wS;
  vec3 veinCol = uVeinD * wD + uVeinB * wB + uVeinS * wS;

  // broad body shading — soft edges, no hard patches; blur melts the
  // features into one another
  float damp = 1.0 - 0.55 * uBlur;
  float band = smoothstep(-1.0, 1.0, flow * damp);
  vec3 col = mix(deep, mid, band);
  col = mix(col, bright, smoothstep(0.25, 1.15 + 0.5 * uBlur, flow * damp + haze * 0.4 * damp) * 0.85);

  // wide luminous currents
  float ridge = 1.0 - abs(snoise(p * 1.15 + warp * 1.1 + vec3(0.0, t * 0.05, 0.0)));
  float veinPow = mix(mix(5.0, 1.4, uSoft), 1.0, uBlur * 0.8);
  float vein = pow(max(ridge, 0.0), veinPow);
  float pulse = 0.8 + 0.2 * sin(t * 0.9 + flow * 5.0);
  col += veinCol * vein * pulse * uVeinAmp * 0.6;

  // key light + soft fill
  vec3 lightDir = normalize(vec3(-0.55, 0.75, 0.6));
  float diff = max(dot(n, lightDir), 0.0);
  col *= 0.45 + diff * 0.8;

  // broad sheen, not a tight specular point
  vec3 halfDir = normalize(lightDir + v);
  col += pow(max(dot(n, halfDir), 0.0), 24.0) * 0.22;

  // atmosphere rim — the cut-out-of-the-sky edge
  float fresnel = pow(1.0 - max(dot(n, v), 0.0), 2.4);
  col += fresnel * uRim * uRimAmp;

  // stipple grain, matching the brand artwork
  col += (hash(gl_FragCoord.xy + fract(uTime) * 100.0) - 0.5) * 0.10;

  gl_FragColor = vec4(col, 1.0);
}
`,xM=`
uniform float uTime;
uniform float uPhase;
uniform float uAmp;
varying float vLick;
varying vec3 vNormal;
varying vec3 vViewDir;
${Op}
void main() {
  float lick = snoise(normalize(position) * 1.5 + vec3(uPhase, uTime * 0.07 + uPhase, uTime * 0.03));
  lick = max(lick, 0.0);
  vLick = lick;
  vec3 displaced = position * (1.0 + lick * uAmp);
  vNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
  vViewDir = normalize(-mvPosition.xyz);
  gl_Position = projectionMatrix * mvPosition;
}
`,SM=`
uniform vec3 uFlare;
uniform float uCorona;
uniform float uAlpha;
varying float vLick;
varying vec3 vNormal;
varying vec3 vViewDir;
void main() {
  vec3 n = normalize(vNormal);
  vec3 v = normalize(vViewDir);
  float rim = pow(1.0 - abs(dot(n, v)), 3.0);
  float veil = smoothstep(0.05, 0.85, vLick);
  float a = rim * (0.08 + veil * 0.3) * uCorona * uAlpha;
  gl_FragColor = vec4(uFlare, a);
}
`,vr=[{deep:"#1c1009",mid:"#8a4a1c",bright:"#f5b054",vein:"#f78d33",rim:"#ffc073",flare:"#f9a24a",bgStops:["#ffe9cf","#f8bd85","#e88d55","#b8623a"],label:"Degen",color:"#b4592a"},{deep:"#0a1a2e",mid:"#1e4a74",bright:"#7fc4e8",vein:"#4fa8e0",rim:"#9fd4ec",flare:"#6fb4e6",bgStops:["#e9f3fc","#b7d9f0","#7fb0dc","#5583ba"],label:"Balanced",color:"#2e5f96"},{deep:"#0a1f18",mid:"#1e5c46",bright:"#8fd8ae",vein:"#4fc08a",rim:"#b2e6c8",flare:"#6fcf9a",bgStops:["#e8f9ee","#b9e6c8","#83d0a2","#54a97a"],label:"Saver",color:"#1e6b47"}],nl=[[58,22,8],[10,46,24],[6,25,61]];function kp(s){const e=(n,r,o)=>n.map((l,c)=>l+(r[c]-l)*o);return s<.5?e(nl[0],nl[1],s/.5):e(nl[1],nl[2],(s-.5)/.5)}function Jc(s){const e=kp(s),n=e[0]+e[1]+e[2];return[e[0]/n,e[1]/n,e[2]/n]}const yM={scale:.22,soft:.75,blur:.54,vein:1.49,speed:.18,rim:.79,corona:0};function MM(s,e){const n=Jc(s),r=[[...hu.degen],[...hu.balanced],[...hu.saver]];for(const d of r){const h=e%d.length;d.push(...d.splice(0,h))}const o=[0,0,0],l=[],c=r.reduce((d,h)=>d+h.length,0);for(;l.length<c;){let d=-1;for(let h=0;h<3;h++)r[h].length&&(o[h]+=n[h],(d===-1||o[h]>o[d])&&(d=h));o[d]-=1,l.push(r[d].shift())}return l}function il({value:s}){const[e,n]=Oe.useState(s),r=Oe.useRef(s);return r.current=e,Oe.useEffect(()=>{let o=0;const l=()=>{const c=s-r.current;if(Math.abs(c)<.6){n(s);return}n(r.current+c*.18),o=requestAnimationFrame(l)};return o=requestAnimationFrame(l),()=>cancelAnimationFrame(o)},[s]),_e.jsx(_e.Fragment,{children:Math.round(e)})}const jr=s=>new yt(s),Qr=(s,e,n)=>(s.setRGB(e[0].r*n[0]+e[1].r*n[1]+e[2].r*n[2],e[0].g*n[0]+e[1].g*n[1]+e[2].g*n[2],e[0].b*n[0]+e[1].b*n[1]+e[2].b*n[2]),s),rl=s=>`#${s.getHexString()}`;function EM({bg:s}){const e=Oe.useRef(null),n=Oe.useRef(null),r=Oe.useRef(null),[o,l]=Oe.useState(.9),[c,d]=Oe.useState(!1),[h,m]=Oe.useState({w:0,h:0}),_=Oe.useRef(o);_.current=o;const x=Oe.useRef(yM),g=Oe.useRef(null),[M,w]=Oe.useState(!1),[R,S]=Oe.useState(!1),v=Oe.useRef(!1);v.current=R;const[L,F]=Oe.useState(!1);Oe.useEffect(()=>{const Te=e.current;if(!Te)return;const Qe=()=>m({w:Te.clientWidth,h:Te.clientHeight});Qe();const st=new ResizeObserver(Qe);return st.observe(Te),()=>st.disconnect()},[]),Oe.useEffect(()=>{const Te=e.current;if(!Te)return;let Qe=0;const st=new IntersectionObserver((Ye,xt)=>{Ye.some(B=>B.isIntersecting)&&(w(!0),Qe=window.setTimeout(()=>l(.5),900),xt.disconnect())},{threshold:.4});st.observe(Te);const ot=new IntersectionObserver(Ye=>S(Ye.some(xt=>xt.isIntersecting)),{threshold:.05});return ot.observe(Te),()=>{st.disconnect(),ot.disconnect(),window.clearTimeout(Qe)}},[]);const[b,I]=Oe.useState(!1),C=Te=>{const Qe=e.current.getBoundingClientRect();return{x:Te.clientX-Qe.left,y:Te.clientY-Qe.top}},O=(Te,Qe)=>{const st=Te-h.w/2,ot=Qe-h.h/2,Ye=h.h*.47;if(Math.abs(Math.hypot(st,ot)-Ye)>100)return!1;const xt=Math.atan2(st,-ot),B=50/Ye;return xt>=65*Math.PI/180-B&&xt<=115*Math.PI/180+B},E=Te=>{if(Te.target.closest("button, input, [data-ui]"))return;const Qe=C(Te);O(Qe.x,Qe.y)&&(g.current={startY:Te.clientY,startV:_.current},d(!0),F(!0),Te.currentTarget.setPointerCapture(Te.pointerId))},D=Te=>{const Qe=C(Te);I(O(Qe.x,Qe.y));const st=g.current;if(!st)return;const ot=(Te.clientY-st.startY)/(h.h*.55);l(Math.min(1,Math.max(0,st.startV+ot)))},H=()=>{g.current=null,d(!1)},G=Te=>{if(Te.target.closest("[data-ui]"))return;const Qe=C(Te);O(Qe.x,Qe.y)&&(F(!0),l(st=>Math.min(1,Math.max(0,st+Te.deltaY*45e-5))))};Oe.useEffect(()=>{const Te=n.current;if(!Te)return;const Qe=new jy({antialias:!0,alpha:!0});Qe.setPixelRatio(Math.min(window.devicePixelRatio,2)),Qe.setSize(Te.clientWidth,Te.clientHeight),Te.appendChild(Qe.domElement);const st=new pv,ot=new ii(35,Te.clientWidth/Te.clientHeight,.1,20);ot.position.z=4.6;const Ye=vr.map(ye=>({deep:jr(ye.deep),mid:jr(ye.mid),bright:jr(ye.bright),vein:jr(ye.vein),rim:jr(ye.rim),flare:jr(ye.flare),bgStops:ye.bgStops.map(jr)})),xt=Jc(_.current),B={uTime:{value:0},uScale:{value:x.current.scale},uSoft:{value:x.current.soft},uBlur:{value:x.current.blur},uVeinAmp:{value:x.current.vein},uRimAmp:{value:x.current.rim},uW:{value:new ie(...xt)},uDeepD:{value:Ye[0].deep},uMidD:{value:Ye[0].mid},uBrightD:{value:Ye[0].bright},uVeinD:{value:Ye[0].vein},uDeepB:{value:Ye[1].deep},uMidB:{value:Ye[1].mid},uBrightB:{value:Ye[1].bright},uVeinB:{value:Ye[1].vein},uDeepS:{value:Ye[2].deep},uMidS:{value:Ye[2].mid},uBrightS:{value:Ye[2].bright},uVeinS:{value:Ye[2].vein},uRim:{value:Qr(new yt,Ye.map(ye=>ye.rim),xt)}},Vt=new qn(new Yo(1,128,128),new Kn({vertexShader:vM,fragmentShader:_M,uniforms:B}));st.add(Vt);const wt={uTop:{value:new yt},uBottom:{value:new yt}},P=new Kn({uniforms:wt,vertexShader:`
        varying vec2 vXY;
        void main() {
          vXY = position.xy;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 uTop;
        uniform vec3 uBottom;
        varying vec2 vXY;
        void main() {
          // lit from the key light's corner, falling away below
          float g = clamp(0.5 + (vXY.y - vXY.x * 0.35) / 2.6, 0.0, 1.0);
          vec3 col = mix(uBottom, uTop, g);
          gl_FragColor = vec4(col, 1.0);
        }
      `}),y=new qn(new Xo(1.22,128),P);y.position.z=-.3,st.add(y);const q=new Hc({color:0}),ee=new qn(new Xo(1.26,128),q);ee.position.z=-.32,st.add(ee);const ue={value:new yt},Ee={value:x.current.corona},de=[{radius:1.04,phase:0,amp:.1,alpha:.45},{radius:1.09,phase:2.7,amp:.14,alpha:.3},{radius:1.15,phase:5.1,amp:.18,alpha:.2}].map(ye=>{const ve=new qn(new Yo(ye.radius,96,96),new Kn({vertexShader:xM,fragmentShader:SM,uniforms:{uTime:B.uTime,uPhase:{value:ye.phase},uAmp:{value:ye.amp},uAlpha:{value:ye.alpha},uFlare:ue,uCorona:Ee},transparent:!0,depthWrite:!1,blending:_u,side:Rn}));return st.add(ve),ve}),pe={x:0,y:0},be={x:0,y:0},Ke=ye=>Math.min(.75,Math.max(-.75,ye)),De=ye=>{const ve=Te.getBoundingClientRect();pe.x=Ke((ye.clientX-ve.left)/ve.width-.5),pe.y=Ke((ye.clientY-ve.top)/ve.height-.5)};window.addEventListener("pointermove",De);const Ce=new ResizeObserver(()=>{ot.aspect=Te.clientWidth/Te.clientHeight,ot.updateProjectionMatrix(),Qe.setSize(Te.clientWidth,Te.clientHeight)});Ce.observe(Te);const qe=new yt,nt=[new yt,new yt,new yt,new yt];let ut=_.current;const V=new Uv;let Ae=0,me=0;const Pe=()=>{if(!v.current){V.getDelta(),me=requestAnimationFrame(Pe);return}const ye=Math.min(V.getDelta(),.1),ve=x.current;Ae+=ye*ve.speed,ut+=(_.current-ut)*.05;const Be=Jc(ut);if(B.uW.value.set(Be[0],Be[1],Be[2]),Qr(B.uRim.value,Ye.map(pt=>pt.rim),Be),Qr(ue.value,Ye.map(pt=>pt.flare),Be),Qr(qe,Ye.map(pt=>pt.mid),Be).multiplyScalar(1.05),wt.uTop.value.copy(qe),Qr(qe,Ye.map(pt=>pt.deep),Be).multiplyScalar(.3),wt.uBottom.value.copy(qe),Qr(qe,Ye.map(pt=>pt.mid),Be).multiplyScalar(.5),q.color.copy(qe),r.current){for(let pt=0;pt<4;pt++)Qr(nt[pt],Ye.map(Ut=>Ut.bgStops[pt]),Be);r.current.style.background=`radial-gradient(ellipse 85% 70% at 50% 40%, ${rl(nt[0])} 0%, ${rl(nt[1])} 48%, ${rl(nt[2])} 80%, ${rl(nt[3])} 100%)`}B.uTime.value=Ae,Ee.value=ve.corona,be.x+=(pe.x-be.x)*.04,be.y+=(pe.y-be.y)*.04,Vt.rotation.y=Ae*.07+be.x*.6,Vt.rotation.x=be.y*.4;const He=Math.sin(Ae*.4)*.04;Vt.position.y=He,y.position.y=He,ee.position.y=He;for(const pt of de)pt.rotation.copy(Vt.rotation),pt.position.y=He;Qe.render(st,ot),me=requestAnimationFrame(Pe)};return Pe(),()=>{cancelAnimationFrame(me),window.removeEventListener("pointermove",De),Ce.disconnect(),Vt.geometry.dispose(),Vt.material.dispose(),y.geometry.dispose(),P.dispose(),ee.geometry.dispose(),q.dispose();for(const ye of de)ye.geometry.dispose(),ye.material.dispose();Qe.dispose(),Te.removeChild(Qe.domElement)}},[]);const K=Oe.useMemo(()=>kp(o).map(Math.round),[o]),[ce,fe]=Oe.useState([]),[j,$]=Oe.useState([]),[W,z]=Oe.useState(!1),[re,ae]=Oe.useState(0),U=Oe.useRef(new Set),Z=Oe.useRef(0),Fe=Oe.useRef(null),$e=!M||!R;Oe.useEffect(()=>{if($e)return;const Te=Fe.current===null;if(!Te&&Math.abs(o-Fe.current)<.005)return;const Qe=window.setTimeout(()=>{Fe.current=o,U.current=new Set,z(!0),window.setTimeout(()=>{$(MM(o,Z.current++)),fe([]),ae(st=>st+1),z(!1)},Te?0:650)},Te?0:420);return()=>window.clearTimeout(Qe)},[o,$e]),Oe.useEffect(()=>{if(W||$e||j.length===0)return;const Te=()=>{fe(ot=>{if(ot.length>=3)return ot;const Ye=j.find(xt=>!ot.some(B=>B.id===xt.id)&&!U.current.has(xt.id));return Ye?[...ot,Ye]:ot})};let Qe=0;const st=ot=>{Qe=window.setTimeout(()=>{Te(),st(3600)},ot)};return st(900),()=>window.clearTimeout(Qe)},[j,W,$e]);const Ge=h.w/2,se=h.h/2,ge=h.h*.47,he=65*Math.PI/180,Ne=115*Math.PI/180,je=Te=>({x:Ge+ge*Math.sin(Te),y:se-ge*Math.cos(Te)}),ke=je(he),St=je(Ne),at=je(he+(Ne-he)*o),Pt=he+(Ne-he)*o,bt=Math.atan2(-Math.cos(Pt),Math.sin(Pt))*180/Math.PI,_t=K.indexOf(Math.max(...K));return _e.jsxs("div",{ref:e,className:"lab-live-frame select-none",style:{background:"#aebdd8",cursor:c?"grabbing":b?"ns-resize":"default",touchAction:"pan-y"},onPointerDown:E,onPointerMove:D,onPointerUp:H,onPointerCancel:H,onWheel:G,children:[_e.jsx(gM,{image:s,originalColors:!0,colorBack:"#00000000",type:"classic",grid:"square",size:.017,radius:1.2,contrast:.58,speed:.25,fit:"cover",grainMixer:.15,grainSize:.3,width:"100%",height:"100%",style:{position:"absolute",inset:0,opacity:.85}}),_e.jsx("div",{ref:r,className:"absolute inset-0",style:{opacity:.44}}),_e.jsx("div",{className:"absolute inset-0",style:{background:"radial-gradient(ellipse 62% 55% at 50% 46%, rgba(10,14,20,0.04) 0%, rgba(10,14,20,0.1) 62%, rgba(8,11,16,0.2) 100%)"}}),_e.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 26%, rgba(255,255,255,0) 52%, rgba(6,9,14,0.08) 100%)"}}),_e.jsx("div",{ref:n,className:"absolute inset-0"}),_e.jsx("div",{className:"pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay",style:{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,backgroundSize:"256px 256px"}}),_e.jsxs("svg",{className:"pointer-events-none absolute inset-0",width:h.w,height:h.h,viewBox:`0 0 ${h.w} ${h.h}`,fill:"none",children:[_e.jsxs("defs",{children:[_e.jsxs("linearGradient",{id:"moodarcgrad",gradientUnits:"userSpaceOnUse",x1:ke.x,y1:ke.y,x2:St.x,y2:St.y,children:[_e.jsx("stop",{offset:"0",stopColor:vr[0].vein}),_e.jsx("stop",{offset:"0.5",stopColor:vr[1].vein}),_e.jsx("stop",{offset:"1",stopColor:vr[2].vein})]}),_e.jsx("filter",{id:"moodarcglow",x:"-60%",y:"-60%",width:"220%",height:"220%",children:_e.jsx("feGaussianBlur",{stdDeviation:"6"})})]}),Array.from({length:13},(Te,Qe)=>{const st=Qe/12,ot=he+(Ne-he)*st,Ye=Qe%6===0,xt={x:Math.sin(ot),y:-Math.cos(ot)},B=ge+12,Vt=B+(Ye?10:6),wt=Math.max(0,1-Math.abs(st-o)/.16);return _e.jsx("line",{x1:Ge+xt.x*B,y1:se+xt.y*B,x2:Ge+xt.x*Vt,y2:se+xt.y*Vt,stroke:`rgba(16,20,28,${.4+.3*wt})`,strokeWidth:Ye?1.6:1.2,strokeLinecap:"round"},Qe)}),_e.jsx("path",{d:`M ${ke.x} ${ke.y} A ${ge} ${ge} 0 0 1 ${St.x} ${St.y}`,stroke:"rgba(5,21,46,0.72)",strokeWidth:"12",strokeLinecap:"round"}),_e.jsx("path",{d:`M ${ke.x-1} ${ke.y-1} A ${ge} ${ge} 0 0 1 ${St.x-1} ${St.y-1}`,stroke:"rgb(5,8,23)",strokeWidth:"3",strokeLinecap:"round"}),_e.jsx("path",{d:`M ${ke.x+1.4} ${ke.y+.7}
              A ${ge} ${ge} 0 0 1 ${St.x+1.4} ${St.y+.7}`,stroke:"rgba(255,255,255,0.4)",strokeWidth:"1",strokeLinecap:"round"}),_e.jsx("path",{d:`M ${ke.x} ${ke.y} A ${ge} ${ge} 0 0 1 ${St.x} ${St.y}`,stroke:"url(#moodarcgrad)",strokeWidth:"4.5",strokeOpacity:"0.95",strokeLinecap:"round"}),_e.jsx("path",{d:`M ${ke.x} ${ke.y} A ${ge} ${ge} 0 0 1 ${St.x} ${St.y}`,stroke:"url(#moodarcgrad)",strokeWidth:"2.4",strokeOpacity:"1",strokeLinecap:"round"}),(()=>{const Te=he+(Ne-he)*o,Qe=Math.max(he,Te-.17),st=Math.min(Ne,Te+.17),ot=je(Qe),Ye=je(st);return _e.jsx("path",{d:`M ${ot.x} ${ot.y} A ${ge} ${ge} 0 0 1 ${Ye.x} ${Ye.y}`,stroke:"url(#moodarcgrad)",strokeWidth:"10",strokeOpacity:"0.65",strokeLinecap:"round",filter:"url(#moodarcglow)"})})()]}),_e.jsxs("div",{className:"pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]",style:{left:ke.x+24,top:ke.y-36,opacity:Math.hypot(at.x-ke.x,at.y-ke.y)<80?0:1,transition:"opacity 300ms ease"},children:["Degen ",_e.jsx(il,{value:K[0]}),"%"]}),_e.jsxs("div",{className:"pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]",style:{left:St.x+24,top:St.y+10,opacity:Math.hypot(at.x-St.x,at.y-St.y)<80?0:1,transition:"opacity 300ms ease"},children:["Saver ",_e.jsx(il,{value:K[2]}),"%"]}),(()=>{const Te=je((he+Ne)/2);return _e.jsxs("div",{className:"pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]",style:{left:Te.x+44,top:Te.y,transform:"translateY(-50%)",opacity:Math.hypot(at.x-Te.x,at.y-Te.y)<80?0:1,transition:"opacity 300ms ease"},children:["Balanced ",_e.jsx(il,{value:K[1]}),"%"]})})(),_e.jsx("div",{className:"pointer-events-none absolute",style:{left:at.x,top:at.y,transform:`translate(-50%, -50%) rotate(${bt}deg) scale(${c?.94:1})`,transition:"transform 140ms ease"},children:_e.jsx("div",{className:"relative overflow-hidden rounded-full",style:{width:38,height:20,background:"linear-gradient(180deg, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.1) 55%, rgba(255,255,255,0.2) 100%)",backdropFilter:"blur(3px) brightness(1.1)",WebkitBackdropFilter:"blur(3px) brightness(1.1)",border:"1px solid rgba(255,255,255,0.4)",boxShadow:c?`inset 0 2px 6px rgba(8,10,16,0.35), 0 0 18px ${vr[_t].vein}88, 0 2px 8px rgba(10,14,20,0.35)`:`inset 0 1px 2px rgba(255,255,255,0.65), inset 0 -2px 5px rgba(8,11,18,0.18), 0 3px 10px rgba(10,14,20,0.35), 0 0 20px ${vr[_t].vein}66`,transition:"box-shadow 140ms ease"}})}),_e.jsxs("div",{className:"pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] font-medium uppercase leading-3 tracking-[0.18em] shadow-[0_2px_8px_rgba(10,14,20,0.1)]",style:{left:at.x+45,top:at.y,transform:"translateY(-50%)",color:vr[_t].color,textShadow:"0 1px 0 rgba(255,255,255,0.35)"},children:[vr[_t].label," ",_e.jsx(il,{value:K[_t]}),"%"]}),!L&&_e.jsx("div",{className:"mood-hint pointer-events-none absolute rounded-[12px] border border-white/70 bg-white/40 px-4 py-2 font-sans text-[10px] uppercase leading-3 tracking-[0.18em] text-black/70 [text-shadow:0_1px_0_rgba(255,255,255,0.4)]",style:{left:at.x+45,top:at.y+26,opacity:M?void 0:0},children:"Drag — the room re-lights"}),_e.jsx("div",{"data-ui":!0,className:"absolute left-1/2 top-[24%] z-10 -translate-x-1/2",children:ce.map((Te,Qe)=>_e.jsx(jd,{insight:Te,slot:Qe,dissolving:W,onDismiss:()=>{U.current.add(Te.id),fe(st=>st.filter(ot=>ot.id!==Te.id))},onExecute:()=>{U.current.add(Te.id),fe(st=>st.filter(ot=>ot.id!==Te.id))}},`${re}-${Te.id}`))})]})}const Bp=()=>{const s=document.getElementById("lab-live-root");s&&$d.createRoot(s).render(_e.jsx(v0,{video:s.dataset.video??"assets/video/orb-backdrop.mp4"}));const e=document.getElementById("mood-live-root");e&&$d.createRoot(e).render(_e.jsx(EM,{bg:e.dataset.bg??"assets/img/orb-bg-scene.webp"}))};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Bp,{once:!0}):Bp()})();
