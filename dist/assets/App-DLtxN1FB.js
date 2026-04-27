import{r as oe,j as E,L as nt,c as Ef,u as q_,s as vt,a as Tf,O as $_}from"./index-BEA6SVZk.js";import{S as z_}from"./switcher-dmGL1Y8W.js";import{M as Oi}from"./switcherdata-BvEmZt31.js";import{S as mc}from"./spk-dropdown-GaKInIYH.js";import{S as Sh}from"./spk-button-DfHy_acw.js";import{T as Jc}from"./action-B0BG8J-I.js";import{i as Ph}from"./us_flag-Dz_ZHUeQ.js";import{f as G_}from"./9-BePpARcd.js";import{_ as Yc}from"./tslib.es6-CVcKHFb-.js";import{S as W_}from"./index-CACX4aJR.js";import{B as K_}from"./backtotop-CksG7I_f.js";import"./preline-CaInYyPY.js";import{A as H_}from"./contextapi-CqFwWJib.js";import"./spk-overlay-CF-4RBOn.js";import"./spk-badge-BAI-kfva.js";const Q_=()=>{const[r,e]=oe.useState("false"),t=()=>e("false"),[n,i]=oe.useState("false"),[s,o]=oe.useState(""),[c,l]=oe.useState("false"),[h,f]=oe.useState("text-dark"),[m,_]=oe.useState("Type something"),[A,T]=oe.useState([]);oe.useEffect(()=>{const W=X=>{const J=document.querySelector(".search-result");J&&J.classList.add("hidden")};return document.addEventListener("click",W),()=>{document.removeEventListener("click",W)}},[]);const D=W=>{var I;(I=document.querySelector(".search-result"))==null||I.classList.remove("hidden");const X=[],J=[];Oi.forEach(g=>{g.children&&(i(!0),g.children.forEach(y=>{X.push(y),y.children&&y.children.forEach(w=>{X.push(w),w.children&&w.children.forEach(b=>{X.push(b)})})}))});for(const g of X)g.title.toLowerCase().includes(W.toLowerCase())&&g.title.toLowerCase().startsWith(W.toLowerCase())&&(l(!0),g.path&&!J.some(y=>y.title===g.title)&&J.push(g));(!J.length||W==="")&&(W===""&&(l(!1),_("Type something"),f("text-dark")),J.length||(l(!1),f("text-danger"),_("There is no component with this name"))),T(J)},N=[{id:1,class:"People",icon:"user"},{id:2,class:"Pages",icon:"file-text"},{id:3,class:"Articales",icon:"align-left"},{id:4,class:"Tags",icon:"server"}],[j,K]=oe.useState(N);function G(W){const X=j.filter(J=>J.id!==W);K(X)}return E.jsx("div",{id:"search-modal",className:"hs-overlay ti-modal hidden mt-[1.75rem]",onClick:t,children:E.jsx("div",{className:"ti-modal-box",children:E.jsxs("div",{className:"ti-modal-content !border !border-defaultborder dark:!border-defaultborder/10 !rounded-[0.5rem]",children:[E.jsxs("div",{className:"ti-modal-body",children:[E.jsxs("div",{className:"input-group border-[2px] border-primary rounded-[0.25rem] w-full flex",children:[E.jsx("a",{"aria-label":"anchor",href:"#",className:"input-group-text flex items-center bg-light border-e-[#dee2e6] !py-[0.375rem] !px-[0.75rem] !rounded-none !text-[0.875rem]",id:"Search-Grid",children:E.jsx("i",{className:"fe fe-search header-link-icon text-[0.875rem]"})}),E.jsx("input",{type:"search",className:"form-control border-0 px-2 !text-[0.8rem] w-full focus:ring-transparent",placeholder:"Search","aria-label":"Username",defaultValue:s,autoComplete:"off",onChange:W=>{D(W.target.value),o(W.target.value)}}),E.jsx("a",{"aria-label":"anchor",href:"#",className:"!border-e-0 flex items-center input-group-text bg-light !py-[0.375rem] !px-[0.75rem]",id:"voice-search",children:E.jsx("i",{className:"fe fe-mic header-link-icon"})}),E.jsxs(mc,{Icon:!0,IconClass:"fe fe-more-vertical",arialexpand:!1,Linktag:!0,Custommenuclass:"absolute !-mt-2 !p-0",Linkclass:"flex items-center btn btn-light btn-icon !bg-light !py-[0.375rem] !rounded-none !px-[0.75rem] text-[0.95rem] h-[2.413rem] w-[2.313rem]",children:[E.jsx("li",{children:E.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Action"})}),E.jsx("li",{children:E.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Another action"})}),E.jsx("li",{children:E.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Something else here"})}),E.jsx("li",{children:E.jsx("hr",{className:"dropdown-divider"})}),E.jsx("li",{children:E.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Separated link"})})]})]}),n?E.jsxs("div",{className:"box search-result relative z-[9] search-fix  border border-gray-200 dark:border-white/10 mt-1 w-100",children:[E.jsx("div",{className:"box-header",children:E.jsxs("h6",{className:"box-title me-2 text-break",children:["Search result of ",s]})}),E.jsx("div",{className:"box-body p-2 flex flex-col max-h-[250px] overflow-auto",children:c?A.map(W=>E.jsx("div",{className:"ti-list-group gap-x-3.5 text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white",children:E.jsx(nt,{to:`${W.path}/`,className:"search-result-item",onClick:()=>{i("false"),o("")},children:W.title})},Math.random())):E.jsx("b",{className:`${h} `,children:m})})]}):"",E.jsxs("div",{className:"mt-5",children:[E.jsx("p",{className:"font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] dark:text-gray-200 mb-2",children:"Are You Looking For..."}),j.map(W=>E.jsxs("span",{className:"search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10 me-2",children:[E.jsx("i",{className:`fe fe-${W.icon} me-2`}),W.class,E.jsxs(nt,{to:"#",onClick:()=>G(W.id),className:"tag-addon header-remove-btn",children:[E.jsx("span",{className:"sr-only",children:"Remove badge"}),E.jsx("i",{className:"fe fe-x"})]})]},Math.random()))]}),E.jsxs("div",{className:"my-[1.5rem]",children:[E.jsx("p",{className:"font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-2",children:"Recent Search :"}),E.jsxs("div",{id:"dismiss-alert",role:"alert",className:"!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert",children:[E.jsx(nt,{to:"/pages/notifications/",children:E.jsx("span",{children:"Notifications"})}),E.jsx(nt,{"aria-label":"anchor",className:"ms-auto leading-none",to:"#","data-hs-remove-element":"#dismiss-alert",children:E.jsx("i",{className:"fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"})})]}),E.jsxs("div",{id:"dismiss-alert1",role:"alert",className:"!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert",children:[E.jsx(nt,{to:"/ui-elements/alerts/",children:E.jsx("span",{children:"Alerts"})}),E.jsx(nt,{"aria-label":"anchor",className:"ms-auto leading-none",to:"#","data-hs-remove-element":"#dismiss-alert1",children:E.jsx("i",{className:"fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"})})]}),E.jsxs("div",{id:"dismiss-alert2",role:"alert",className:"!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 !text-[0.8125rem] alert",children:[E.jsx(nt,{to:"/pages/email/mail-app/",children:E.jsx("span",{children:"Mail"})}),E.jsx(nt,{"aria-label":"anchor",className:"ms-auto lh-1",to:"#","data-hs-remove-element":"#dismiss-alert2",children:E.jsx("i",{className:"fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"})})]})]})]}),E.jsx("div",{className:"ti-modal-footer !py-[1rem] !px-[1.25rem]",children:E.jsxs("div",{className:"inline-flex rounded-md  shadow-sm",children:[E.jsx(Sh,{buttontype:"button",customClass:"ti-btn-group !px-[0.75rem] !py-[0.45rem]  rounded-s-[0.25rem] !rounded-e-none ti-btn-primary !text-[0.75rem] dark:border-white/10",children:"Search"}),E.jsx(Sh,{buttontype:"button",customClass:"ti-btn-group  ti-btn-primary-full rounded-e-[0.25rem] dark:border-white/10 !text-[0.75rem] !rounded-s-none !px-[0.75rem] !py-[0.45rem]",children:"Clear Recents"})]})})]})})})};var xh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},J_=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,l=i+2<r.length,h=l?r[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,A=h&63;l||(A=64,o||(_=64)),n.push(t[f],t[m],t[_],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(bf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):J_(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new Y_;const _=s<<2|c>>4;if(n.push(_),h!==64){const A=c<<4&240|h>>2;if(n.push(A),m!==64){const T=h<<6&192|m;n.push(T)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Y_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X_=function(r){const e=bf(r);return Af.encodeByteArray(e,!0)},Ro=function(r){return X_(r).replace(/\./g,"")},Rf=function(r){try{return Af.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function So(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Z_(t)||(r[t]=So(r[t],e[t]));return r}function Z_(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=()=>Sf().__FIREBASE_DEFAULTS__,ty=()=>{if(typeof process>"u"||typeof xh>"u")return;const r=xh.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ny=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Rf(r[1]);return e&&JSON.parse(e)},Xc=()=>{try{return ey()||ty()||ny()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Pf=()=>{var r;return(r=Xc())===null||r===void 0?void 0:r.config},ry=r=>{var e;return(e=Xc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ro(JSON.stringify(t)),Ro(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Zc(){var r;const e=(r=Xc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ay(){return typeof window<"u"||xf()}function xf(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function cy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kf(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function el(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Cf(){const r=Ie();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Nf(){return!Zc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xi(){try{return typeof indexedDB=="object"}catch{return!1}}function ly(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="FirebaseError";class Xe extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=uy,Object.setPrototypeOf(this,Xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lr.prototype.create)}}class lr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hy(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Xe(i,c,n)}}function hy(r,e){return r.replace(dy,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const dy=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function fy(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Zi(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(Ch(s)&&Ch(o)){if(!Zi(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Ch(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Cr(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Li(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Df(r,e){const t=new my(r,e);return t.subscribe.bind(t)}class my{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");py(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Xa),i.error===void 0&&(i.error=Xa),i.complete===void 0&&(i.complete=Xa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function py(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Xa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(r){return r&&r._delegate?r._delegate:r}class Ct{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new iy;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yy(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:_y(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _y(r){return r===Fn?void 0:r}function yy(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=[];var ne;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ne||(ne={}));const Of={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},vy=ne.INFO,Iy={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},wy=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Iy[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ko{constructor(e){this.name=e,this._logLevel=vy,this._logHandler=wy,this._userLogHandler=null,tl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Of[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}function Ey(r){tl.forEach(e=>{e.setLogLevel(r)})}function Ty(r,e){for(const t of tl){let n=null;e&&e.level&&(n=Of[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const c=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(n??i.logLevel)&&r({level:ne[s].toLowerCase(),message:c,args:o,type:i.name})}}}const by=(r,e)=>e.some(t=>r instanceof t);let Nh,Dh;function Ay(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ry(){return Dh||(Dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lf=new WeakMap,pc=new WeakMap,Mf=new WeakMap,Za=new WeakMap,nl=new WeakMap;function Sy(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(dn(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Lf.set(t,r)}).catch(()=>{}),nl.set(e,r),e}function Py(r){if(pc.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});pc.set(r,e)}let gc={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return pc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Mf.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return dn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function xy(r){gc=r(gc)}function ky(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(ec(this),e,...t);return Mf.set(n,e.sort?e.sort():[e]),dn(n)}:Ry().includes(r)?function(...e){return r.apply(ec(this),e),dn(Lf.get(this))}:function(...e){return dn(r.apply(ec(this),e))}}function Cy(r){return typeof r=="function"?ky(r):(r instanceof IDBTransaction&&Py(r),by(r,Ay())?new Proxy(r,gc):r)}function dn(r){if(r instanceof IDBRequest)return Sy(r);if(Za.has(r))return Za.get(r);const e=Cy(r);return e!==r&&(Za.set(r,e),nl.set(e,r)),e}const ec=r=>nl.get(r);function Ny(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=dn(o);return n&&o.addEventListener("upgradeneeded",l=>{n(dn(o.result),l.oldVersion,l.newVersion,dn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Dy=["get","getKey","getAll","getAllKeys","count"],Vy=["put","add","delete","clear"],tc=new Map;function Vh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=Vy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Dy.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&l.done]))[0]};return tc.set(e,s),s}xy(r=>({...r,get:(e,t,n)=>Vh(e,t)||r.get(e,t,n),has:(e,t)=>!!Vh(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ly(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Ly(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Po="@firebase/app",_c="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=new Ko("@firebase/app"),My="@firebase/app-compat",Fy="@firebase/analytics-compat",Uy="@firebase/analytics",By="@firebase/app-check-compat",jy="@firebase/app-check",qy="@firebase/auth",$y="@firebase/auth-compat",zy="@firebase/database",Gy="@firebase/data-connect",Wy="@firebase/database-compat",Ky="@firebase/functions",Hy="@firebase/functions-compat",Qy="@firebase/installations",Jy="@firebase/installations-compat",Yy="@firebase/messaging",Xy="@firebase/messaging-compat",Zy="@firebase/performance",ev="@firebase/performance-compat",tv="@firebase/remote-config",nv="@firebase/remote-config-compat",rv="@firebase/storage",iv="@firebase/storage-compat",sv="@firebase/firestore",ov="@firebase/vertexai-preview",av="@firebase/firestore-compat",cv="firebase",lv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="[DEFAULT]",uv={[Po]:"fire-core",[My]:"fire-core-compat",[Uy]:"fire-analytics",[Fy]:"fire-analytics-compat",[jy]:"fire-app-check",[By]:"fire-app-check-compat",[qy]:"fire-auth",[$y]:"fire-auth-compat",[zy]:"fire-rtdb",[Gy]:"fire-data-connect",[Wy]:"fire-rtdb-compat",[Ky]:"fire-fn",[Hy]:"fire-fn-compat",[Qy]:"fire-iid",[Jy]:"fire-iid-compat",[Yy]:"fire-fcm",[Xy]:"fire-fcm-compat",[Zy]:"fire-perf",[ev]:"fire-perf-compat",[tv]:"fire-rc",[nv]:"fire-rc-compat",[rv]:"fire-gcs",[iv]:"fire-gcs-compat",[sv]:"fire-fst",[av]:"fire-fst-compat",[ov]:"fire-vertex","fire-js":"fire-js",[cv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Map,Fr=new Map,Ur=new Map;function es(r,e){try{r.container.addComponent(e)}catch(t){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ff(r,e){r.container.addOrOverwriteComponent(e)}function gn(r){const e=r.name;if(Ur.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Ur.set(e,r);for(const t of pn.values())es(t,r);for(const t of Fr.values())es(t,r);return!0}function Uf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function hv(r,e,t=mn){Uf(r,e).clearInstance(t)}function Bf(r){return r.options!==void 0}function Ee(r){return r.settings!==void 0}function dv(){Ur.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new lr("app","Firebase",fv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv extends jf{constructor(e,t,n,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:n,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const c=e;super(c.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,It(Po,_c,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){il(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw gt.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=lv;function rl(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:mn,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=Pf()),!t)throw gt.create("no-options");const s=pn.get(i);if(s){if(Zi(t,s.options)&&Zi(n,s.config))return s;throw gt.create("duplicate-app",{appName:i})}const o=new Vf(i);for(const l of Ur.values())o.addComponent(l);const c=new jf(t,n,o);return pn.set(i,c),c}function pv(r,e){if(ay()&&!xf())throw gt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Bf(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const i=h=>[...h].reduce((f,m)=>Math.imul(31,f)+m.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw gt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(n)),o=Fr.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const c=new Vf(s);for(const h of Ur.values())c.addComponent(h);const l=new mv(t,e,s,c);return Fr.set(s,l),l}function gv(r=mn){const e=pn.get(r);if(!e&&r===mn&&Pf())return rl();if(!e)throw gt.create("no-app",{appName:r});return e}function _v(){return Array.from(pn.values())}async function il(r){let e=!1;const t=r.name;pn.has(t)?(e=!0,pn.delete(t)):Fr.has(t)&&r.decRefCount()<=0&&(Fr.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function It(r,e,t){var n;let i=(n=uv[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(c.join(" "));return}gn(new Ct(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function qf(r,e){if(r!==null&&typeof r!="function")throw gt.create("invalid-log-argument");Ty(r,e)}function $f(r){Ey(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv="firebase-heartbeat-database",vv=1,ts="firebase-heartbeat-store";let nc=null;function zf(){return nc||(nc=Ny(yv,vv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ts)}catch(t){console.warn(t)}}}}).catch(r=>{throw gt.create("idb-open",{originalErrorMessage:r.message})})),nc}async function Iv(r){try{const t=(await zf()).transaction(ts),n=await t.objectStore(ts).get(Gf(r));return await t.done,n}catch(e){if(e instanceof Xe)qt.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(t.message)}}}async function Oh(r,e){try{const n=(await zf()).transaction(ts,"readwrite");await n.objectStore(ts).put(e,Gf(r)),await n.done}catch(t){if(t instanceof Xe)qt.warn(t.message);else{const n=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});qt.warn(n.message)}}}function Gf(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=1024,Ev=30*24*60*60*1e3;class Tv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Av(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Lh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Ev}),this._storage.overwrite(this._heartbeatsCache))}catch(n){qt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Lh(),{heartbeatsToSend:n,unsentEntries:i}=bv(this._heartbeatsCache.heartbeats),s=Ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return qt.warn(t),""}}}function Lh(){return new Date().toISOString().substring(0,10)}function bv(r,e=wv){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Mh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Mh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Av{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xi()?ly().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Iv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Mh(r){return Ro(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(r){gn(new Ct("platform-logger",e=>new Oy(e),"PRIVATE")),gn(new Ct("heartbeat",e=>new Tv(e),"PRIVATE")),It(Po,_c,r),It(Po,_c,"esm2017"),It("fire-js","")}Rv("");const Sv=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Xe,SDK_VERSION:An,_DEFAULT_ENTRY_NAME:mn,_addComponent:es,_addOrOverwriteComponent:Ff,_apps:pn,_clearComponents:dv,_components:Ur,_getProvider:Uf,_isFirebaseApp:Bf,_isFirebaseServerApp:Ee,_registerComponent:gn,_removeServiceInstance:hv,_serverApps:Fr,deleteApp:il,getApp:gv,getApps:_v,initializeApp:rl,initializeServerApp:pv,onLog:qf,registerVersion:It,setLogLevel:$f},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this._delegate=e,this.firebase=t,es(e,new Ct("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),il(this._delegate)))}_getService(e,t=mn){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=mn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){es(this._delegate,e)}_addOrOverwriteComponent(e){Ff(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Fh=new lr("app-compat","Firebase",xv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(r){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:It,setLogLevel:$f,onLog:qf,apps:null,SDK_VERSION:An,INTERNAL:{registerComponent:c,removeApp:n,useAsService:l,modularAPIs:Sv}};t.default=t,Object.defineProperty(t,"apps",{get:o});function n(h){delete e[h]}function i(h){if(h=h||mn,!kh(e,h))throw Fh.create("no-app",{appName:h});return e[h]}i.App=r;function s(h,f={}){const m=rl(h,f);if(kh(e,m.name))return e[m.name];const _=new r(m,t);return e[m.name]=_,_}function o(){return Object.keys(e).map(h=>e[h])}function c(h){const f=h.name,m=f.replace("-compat","");if(gn(h)&&h.type==="PUBLIC"){const _=(A=i())=>{if(typeof A[m]!="function")throw Fh.create("invalid-app-argument",{appName:f});return A[m]()};h.serviceProps!==void 0&&So(_,h.serviceProps),t[m]=_,r.prototype[m]=function(...A){return this._getService.bind(this,f).apply(this,h.multipleInstances?A:[])}}return h.type==="PUBLIC"?t[m]:null}function l(h,f){return f==="serverAuth"?null:f}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){const r=kv(Pv);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:Wf,extendNamespace:e,createSubscribe:Df,ErrorFactory:lr,deepExtend:So});function e(t){So(r,t)}return r}const Cv=Wf();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new Ko("@firebase/app-compat"),Nv="@firebase/app-compat",Dv="0.2.43";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(r){It(Nv,Dv,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */try{const r=Sf();if(r.firebase!==void 0){Uh.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Uh.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ur=Cv;Vv();var Ov="firebase",Lv="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur.registerVersion(Ov,Lv,"app-compat");const Si={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},wr={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fv=Mv,Uv=Kf,Hf=new lr("auth","Firebase",Kf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=new Ko("@firebase/auth");function Bv(r,...e){xo.logLevel<=ne.WARN&&xo.warn(`Auth (${An}): ${r}`,...e)}function mo(r,...e){xo.logLevel<=ne.ERROR&&xo.error(`Auth (${An}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(r,...e){throw ol(r,...e)}function Ne(r,...e){return ol(r,...e)}function sl(r,e,t){const n=Object.assign(Object.assign({},Uv()),{[e]:t});return new lr("auth","Firebase",n).create(e,{appName:r.name})}function Me(r){return sl(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ni(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&qe(r,"argument-error"),sl(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ol(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Hf.create(r,...e)}function M(r,e,...t){if(!r)throw ol(e,...t)}function Rt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw mo(e),new Error(e)}function wt(r,e){r||Rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function al(){return Bh()==="http:"||Bh()==="https:"}function Bh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(al()||kf()||"connection"in navigator)?navigator.onLine:!0}function qv(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.shortDelay=e,this.longDelay=t,wt(t>e,"Short delay should be less than long delay!"),this.isMobile=oy()||el()}get(){return jv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(r,e){wt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=new Es(3e4,6e4);function Ae(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Re(r,e,t,n,i={}){return Jf(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=ti(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},s);return cy()||(h.referrerPolicy="no-referrer"),Qf.fetch()(Yf(r,r.config.apiHost,t,c),h)})}async function Jf(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},$v),e);try{const i=new Wv(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Mi(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Mi(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Mi(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sl(r,f,h);qe(r,f)}}catch(i){if(i instanceof Xe)throw i;qe(r,"network-request-failed",{message:String(i)})}}async function Wt(r,e,t,n,i={}){const s=await Re(r,e,t,n,i);return"mfaPendingCredential"in s&&qe(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Yf(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?cl(r.config,i):`${r.config.apiScheme}://${i}`}function Gv(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Wv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ne(this.auth,"network-request-failed")),zv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Mi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Ne(r,e,n);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(r){return r!==void 0&&r.getResponse!==void 0}function qh(r){return r!==void 0&&r.enterprise!==void 0}class Kv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Gv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(r){return(await Re(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Qv(r,e){return Re(r,"GET","/v2/recaptchaConfig",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(r,e){return Re(r,"POST","/v1/accounts:delete",e)}async function Yv(r,e){return Re(r,"POST","/v1/accounts:update",e)}async function Xf(r,e){return Re(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xv(r,e=!1){const t=Q(r),n=await t.getIdToken(e),i=Ho(n);M(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:$i(rc(i.auth_time)),issuedAtTime:$i(rc(i.iat)),expirationTime:$i(rc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rc(r){return Number(r)*1e3}function Ho(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rf(t);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $h(r){const e=Ho(r);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $t(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Xe&&Zv(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function Zv({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$i(this.lastLoginAt),this.creationTime=$i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(r){var e;const t=r.auth,n=await r.getIdToken(),i=await $t(r,Xf(t,{idToken:n}));M(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Zf(s.providerUserInfo):[],c=nI(r.providerData,o),l=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new yc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function tI(r){const e=Q(r);await rs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nI(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Zf(r){return r.map(e=>{var{providerId:t}=e,n=Yc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(r,e){const t=await Jf(r,{},async()=>{const n=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=Yf(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Qf.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iI(r,e){return Re(r,"POST","/v2/accounts:revokeToken",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$h(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=$h(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await rI(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new Nr;return n&&(M(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(r,e){M(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Yc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await $t(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xv(this,e)}reload(){return tI(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await rs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ee(this.auth.app))return Promise.reject(Me(this.auth));const e=await this.getIdToken();return await $t(this,Jv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,l,h,f;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,j=(h=t.createdAt)!==null&&h!==void 0?h:void 0,K=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:G,emailVerified:W,isAnonymous:X,providerData:J,stsTokenManager:I}=t;M(G&&I,e,"internal-error");const g=Nr.fromJSON(this.name,I);M(typeof G=="string",e,"internal-error"),rn(m,e.name),rn(_,e.name),M(typeof W=="boolean",e,"internal-error"),M(typeof X=="boolean",e,"internal-error"),rn(A,e.name),rn(T,e.name),rn(D,e.name),rn(N,e.name),rn(j,e.name),rn(K,e.name);const y=new Ft({uid:G,auth:e,email:_,emailVerified:W,displayName:m,isAnonymous:X,photoURL:T,phoneNumber:A,tenantId:D,stsTokenManager:g,createdAt:j,lastLoginAt:K});return J&&Array.isArray(J)&&(y.providerData=J.map(w=>Object.assign({},w))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new Nr;i.updateFromServerResponse(t);const s=new Ft({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await rs(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Zf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Nr;c.updateFromIdToken(n);const l=new Ft({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new yc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new Map;function dt(r){wt(r instanceof Function,"Expected a class definition");let e=zh.get(r);return e?(wt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,zh.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}em.type="NONE";const Br=em;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(r,e,t){return`firebase:${r}:${e}:${t}`}class Dr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Hn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Hn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ft._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Dr(dt(Br),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||dt(Br);const o=Hn(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const m=Ft._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Dr(s,e,n):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Dr(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sm(e))return"Blackberry";if(om(e))return"Webos";if(nm(e))return"Safari";if((e.includes("chrome/")||rm(e))&&!e.includes("edge/"))return"Chrome";if(Ts(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function tm(r=Ie()){return/firefox\//i.test(r)}function nm(r=Ie()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rm(r=Ie()){return/crios\//i.test(r)}function im(r=Ie()){return/iemobile/i.test(r)}function Ts(r=Ie()){return/android/i.test(r)}function sm(r=Ie()){return/blackberry/i.test(r)}function om(r=Ie()){return/webos/i.test(r)}function bs(r=Ie()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function sI(r=Ie()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function oI(r=Ie()){var e;return bs(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aI(){return Cf()&&document.documentMode===10}function am(r=Ie()){return bs(r)||Ts(r)||om(r)||sm(r)||/windows phone/i.test(r)||im(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(r,e=[]){let t;switch(r){case"Browser":t=Gh(Ie());break;case"Worker":t=`${Gh(Ie())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${An}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(r,e={}){return Re(r,"GET","/v2/passwordPolicy",Ae(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=6;class hI{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:uI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wh(this),this.idTokenSubscription=new Wh(this),this.beforeStateQueue=new cI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xf(this,{idToken:e}),n=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ee(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ee(this.app))return Promise.reject(Me(this));const t=e?Q(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ee(this.app)?Promise.reject(Me(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ee(this.app)?Promise.reject(Me(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lI(this),t=new hI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new lr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await iI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Bv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Te(r){return Q(r)}class Wh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Df(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fI(r){As=r}function ll(r){return As.loadJS(r)}function mI(){return As.recaptchaV2Script}function pI(){return As.recaptchaEnterpriseScript}function gI(){return As.gapiScript}function lm(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const _I="recaptcha-enterprise",yI="NO_RECAPTCHA";class vI{constructor(e){this.type=_I,this.auth=Te(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{Qv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new Kv(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;qh(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(yI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&qh(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pI();l.length!==0&&(l+=c),ll(l).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Kh(r,e,t,n=!1){const i=new vI(r);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function is(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Kh(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Kh(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(s)})}function II(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(dt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function wI(r,e,t){const n=Te(r);M(n._canInitEmulator,n,"emulator-config-failed"),M(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=um(e),{host:o,port:c}=EI(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||TI()}function um(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function EI(r){const e=um(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Hh(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Hh(o)}}}function Hh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function TI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rt("not implemented")}_getIdTokenResponse(e){return Rt("not implemented")}_linkToIdToken(e,t){return Rt("not implemented")}_getReauthenticationResolver(e){return Rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(r,e){return Re(r,"POST","/v1/accounts:resetPassword",Ae(r,e))}async function bI(r,e){return Re(r,"POST","/v1/accounts:update",e)}async function AI(r,e){return Re(r,"POST","/v1/accounts:signUp",e)}async function RI(r,e){return Re(r,"POST","/v1/accounts:update",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(r,e){return Wt(r,"POST","/v1/accounts:signInWithPassword",Ae(r,e))}async function Qo(r,e){return Re(r,"POST","/v1/accounts:sendOobCode",Ae(r,e))}async function PI(r,e){return Qo(r,e)}async function xI(r,e){return Qo(r,e)}async function kI(r,e){return Qo(r,e)}async function CI(r,e){return Qo(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(r,e){return Wt(r,"POST","/v1/accounts:signInWithEmailLink",Ae(r,e))}async function DI(r,e){return Wt(r,"POST","/v1/accounts:signInWithEmailLink",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends ri{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ss(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ss(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return is(e,t,"signInWithPassword",SI);case"emailLink":return NI(e,{email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return is(e,n,"signUpPassword",AI);case"emailLink":return DI(e,{idToken:t,email:this._email,oobCode:this._password});default:qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(r,e){return Wt(r,"POST","/v1/accounts:signInWithIdp",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="http://localhost";class Nt extends ri{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Yc(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Nt(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return jt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,jt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jt(e,t)}buildRequest(){const e={requestUri:VI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ti(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(r,e){return Re(r,"POST","/v1/accounts:sendVerificationCode",Ae(r,e))}async function LI(r,e){return Wt(r,"POST","/v1/accounts:signInWithPhoneNumber",Ae(r,e))}async function MI(r,e){const t=await Wt(r,"POST","/v1/accounts:signInWithPhoneNumber",Ae(r,e));if(t.temporaryProof)throw Mi(r,"account-exists-with-different-credential",t);return t}const FI={USER_NOT_FOUND:"user-not-found"};async function UI(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Wt(r,"POST","/v1/accounts:signInWithPhoneNumber",Ae(r,t),FI)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ri{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Qn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Qn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return LI(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return MI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return UI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!t&&!i&&!s?null:new Qn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jI(r){const e=Cr(Li(r)).link,t=e?Cr(Li(e)).deep_link_id:null,n=Cr(Li(r)).deep_link_id;return(n?Cr(Li(n)).link:null)||n||t||e||r}class Jo{constructor(e){var t,n,i,s,o,c;const l=Cr(Li(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,m=BI((i=l.mode)!==null&&i!==void 0?i:null);M(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=jI(e);try{return new Jo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,t){return ss._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Jo.parseLink(t);return M(n,"argument-error"),ss._fromEmailAndCode(e,n.code,n.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Kt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vr extends ii{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return M("providerId"in t&&"signInMethod"in t,"argument-error"),Nt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return M(e.idToken||e.accessToken,"argument-error"),Nt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!n&&!i&&!t&&!s||!c)return null;try{return new Vr(c)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ii{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Tt.credential(t,n)}catch{return null}}}Tt.GOOGLE_SIGN_IN_METHOD="google.com";Tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends ii{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="http://localhost";class jr extends ri{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return jt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,jt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=t;return!n||!i||!s||n!==i?null:new jr(n,s)}static _create(e,t){return new jr(e,t)}buildRequest(){return{requestUri:qI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="saml.";class ko extends Kt{constructor(e){M(e.startsWith($I),"argument-error"),super(e)}static credentialFromResult(e){return ko.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ko.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=jr.fromJSON(e);return M(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return jr._create(n,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends ii{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return At.credential(t,n)}catch{return null}}}At.TWITTER_SIGN_IN_METHOD="twitter.com";At.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dm(r,e){return Wt(r,"POST","/v1/accounts:signUp",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await Ft._fromIdTokenResponse(e,n,i),o=Qh(n);return new _t({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Qh(n);return new _t({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Qh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zI(r){var e;if(Ee(r.app))return Promise.reject(Me(r));const t=Te(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new _t({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await dm(t,{returnSecureToken:!0}),i=await _t._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co extends Xe{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Co.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Co(e,t,n,i)}}function fm(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Co._fromErrorAndOperation(r,s,e,n):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GI(r,e){const t=Q(r);await Yo(!0,t,e);const{providerUserInfo:n}=await Yv(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=mm(n||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function ul(r,e,t=!1){const n=await $t(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return _t._forOperation(r,"link",n)}async function Yo(r,e,t){await rs(e);const n=mm(e.providerData),i=r===!1?"provider-already-linked":"no-such-provider";M(n.has(t)===r,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pm(r,e,t=!1){const{auth:n}=r;if(Ee(n.app))return Promise.reject(Me(n));const i="reauthenticate";try{const s=await $t(r,fm(n,i,e,r),t);M(s.idToken,n,"internal-error");const o=Ho(s.idToken);M(o,n,"internal-error");const{sub:c}=o;return M(r.uid===c,n,"user-mismatch"),_t._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&qe(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gm(r,e,t=!1){if(Ee(r.app))return Promise.reject(Me(r));const n="signIn",i=await fm(r,n,e),s=await _t._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function Xo(r,e){return gm(Te(r),e)}async function _m(r,e){const t=Q(r);return await Yo(!1,t,e.providerId),ul(t,e)}async function ym(r,e){return pm(Q(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(r,e){return Wt(r,"POST","/v1/accounts:signInWithCustomToken",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(r,e){if(Ee(r.app))return Promise.reject(Me(r));const t=Te(r),n=await WI(t,{token:e,returnSecureToken:!0}),i=await _t._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?hl._fromServerResponse(e,t):"totpInfo"in t?dl._fromServerResponse(e,t):qe(e,"internal-error")}}class hl extends Rs{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new hl(t)}}class dl extends Rs{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new dl(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(r,e,t){var n;M(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),M(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(M(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(M(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(r){const e=Te(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HI(r,e,t){const n=Te(r),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Zo(n,i,t),await is(n,i,"getOobCode",xI)}async function QI(r,e,t){await hm(Q(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&fl(r),n})}async function JI(r,e){await RI(Q(r),{oobCode:e})}async function vm(r,e){const t=Q(r),n=await hm(t,{oobCode:e}),i=n.requestType;switch(M(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":M(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":M(n.mfaInfo,t,"internal-error");default:M(n.email,t,"internal-error")}let s=null;return n.mfaInfo&&(s=Rs._fromServerResponse(Te(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function YI(r,e){const{data:t}=await vm(Q(r),e);return t.email}async function XI(r,e,t){if(Ee(r.app))return Promise.reject(Me(r));const n=Te(r),o=await is(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dm).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&fl(r),l}),c=await _t._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function ZI(r,e,t){return Ee(r.app)?Promise.reject(Me(r)):Xo(Q(r),Rn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&fl(r),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ew(r,e,t){const n=Te(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){M(c.handleCodeInApp,n,"argument-error"),c&&Zo(n,o,c)}s(i,t),await is(n,i,"getOobCode",kI)}function tw(r,e){const t=Jo.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function nw(r,e,t){if(Ee(r.app))return Promise.reject(Me(r));const n=Q(r),i=Rn.credentialWithLink(e,t||ns());return M(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Xo(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(r,e){return Re(r,"POST","/v1/accounts:createAuthUri",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(r,e){const t=al()?ns():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:i}=await rw(Q(r),n);return i||[]}async function sw(r,e){const t=Q(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Zo(t.auth,i,e);const{email:s}=await PI(t.auth,i);s!==r.email&&await r.reload()}async function ow(r,e,t){const n=Q(r),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Zo(n.auth,s,t);const{email:o}=await CI(n.auth,s);o!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aw(r,e){return Re(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Q(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await $t(n,aw(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function lw(r,e){const t=Q(r);return Ee(t.auth.app)?Promise.reject(Me(t.auth)):Im(t,e,null)}function uw(r,e){return Im(Q(r),null,e)}async function Im(r,e,t){const{auth:n}=r,s={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await $t(r,bI(n,s));await r._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(r){var e,t;if(!r)return null;const{providerId:n}=r,i=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},s=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(r!=null&&r.idToken)){const o=(t=(e=Ho(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Or(s,c)}}if(!n)return null;switch(n){case"facebook.com":return new dw(s,i);case"github.com":return new fw(s,i);case"google.com":return new mw(s,i);case"twitter.com":return new pw(s,i,r.screenName||null);case"custom":case"anonymous":return new Or(s,null);default:return new Or(s,n,i)}}class Or{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class wm extends Or{constructor(e,t,n,i){super(e,t,n),this.username=i}}class dw extends Or{constructor(e,t){super(e,"facebook.com",t)}}class fw extends wm{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class mw extends Or{constructor(e,t){super(e,"google.com",t)}}class pw extends wm{constructor(e,t,n){super(e,"twitter.com",t,n)}}function gw(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:hw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Gn("enroll",e,t)}static _fromMfaPendingCredential(e){return new Gn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Gn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return Gn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Te(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(c=>Rs._fromServerResponse(n,c));M(i.mfaPendingCredential,n,"internal-error");const o=Gn._fromMfaPendingCredential(i.mfaPendingCredential);return new ml(o,s,async c=>{const l=await c._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const h=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const f=await _t._fromIdTokenResponse(n,t.operationType,h);return await n._updateCurrentUser(f.user),f;case"reauthenticate":return M(t.user,n,"internal-error"),_t._forOperation(t.user,t.operationType,h);default:qe(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function _w(r,e){var t;const n=Q(r),i=e;return M(e.customData.operationType,n,"argument-error"),M((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,n,"argument-error"),ml._fromError(n,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(r,e){return Re(r,"POST","/v2/accounts/mfaEnrollment:start",Ae(r,e))}function vw(r,e){return Re(r,"POST","/v2/accounts/mfaEnrollment:finalize",Ae(r,e))}function Iw(r,e){return Re(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Ae(r,e))}class pl{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>Rs._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new pl(e)}async getSession(){return Gn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),s=await $t(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const i=await $t(this.user,Iw(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ic=new WeakMap;function ww(r){const e=Q(r);return ic.has(e)||ic.set(e,pl._fromUser(e)),ic.get(e)}const No="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew=1e3,Tw=10;class Tm extends Em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);aI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Tw):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tm.type="LOCAL";const gl=Tm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends Em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bm.type="SESSION";const Yn=bm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new ea(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),l=await bw(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const h=Ss("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function Rw(r){Ce().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function Sw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pw(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function xw(){return _l()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="firebaseLocalStorageDb",kw=1,Do="firebaseLocalStorage",Rm="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ta(r,e){return r.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function Cw(){const r=indexedDB.deleteDatabase(Am);return new Ps(r).toPromise()}function vc(){const r=indexedDB.open(Am,kw);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Do,{keyPath:Rm})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Do)?e(n):(n.close(),await Cw(),e(await vc()))})})}async function Jh(r,e,t){const n=ta(r,!0).put({[Rm]:e,value:t});return new Ps(n).toPromise()}async function Nw(r,e){const t=ta(r,!1).get(e),n=await new Ps(t).toPromise();return n===void 0?null:n.value}function Yh(r,e){const t=ta(r,!0).delete(e);return new Ps(t).toPromise()}const Dw=800,Vw=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>Vw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(xw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Sw(),!this.activeServiceWorker)return;this.sender=new Aw(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vc();return await Jh(e,No,"1"),await Yh(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Nw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ta(i,!1).getAll();return new Ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const os=Sm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(r,e){return Re(r,"POST","/v2/accounts/mfaSignIn:start",Ae(r,e))}function Lw(r,e){return Re(r,"POST","/v2/accounts/mfaSignIn:finalize",Ae(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw=500,Fw=6e4,oo=1e12;class Uw{constructor(e){this.auth=e,this.counter=oo,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Bw(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||oo;(t=this._widgets.get(n))===null||t===void 0||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||oo;return((t=this._widgets.get(n))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const n=e||oo;return(t=this._widgets.get(n))===null||t===void 0||t.execute(),""}}class Bw{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;M(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=jw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Fw)},Mw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function jw(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=lm("rcb"),qw=new Es(3e4,6e4);class $w{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ce().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return M(zw(t),e,"argument-error"),this.shouldResolveImmediately(t)&&jh(Ce().grecaptcha)?Promise.resolve(Ce().grecaptcha):new Promise((n,i)=>{const s=Ce().setTimeout(()=>{i(Ne(e,"network-request-failed"))},qw.get());Ce()[sc]=()=>{Ce().clearTimeout(s),delete Ce()[sc];const c=Ce().grecaptcha;if(!c||!jh(c)){i(Ne(e,"internal-error"));return}const l=c.render;c.render=(h,f)=>{const m=l(h,f);return this.counter++,m},this.hostLanguage=t,n(c)};const o=`${mI()}?${ti({onload:sc,render:"explicit",hl:t})}`;ll(o).catch(()=>{clearTimeout(s),i(Ne(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ce().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zw(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class Gw{async load(e){return new Uw(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="recaptcha",Ww={theme:"light",type:"image"};let Kw=class{constructor(e,t,n=Object.assign({},Ww)){this.parameters=n,this.type=Pm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Te(e),this.isInvisible=this.parameters.size==="invisible",M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;M(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Gw:new $w,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){M(!this.parameters.sitekey,this.auth,"argument-error"),M(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),M(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Ce()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){M(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){M(al()&&!_l(),this.auth,"internal-error"),await Hw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Hv(this.auth);M(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return M(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function Hw(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Qn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Qw(r,e,t){if(Ee(r.app))return Promise.reject(Me(r));const n=Te(r),i=await na(n,e,Q(t));return new yl(i,s=>Xo(n,s))}async function Jw(r,e,t){const n=Q(r);await Yo(!1,n,"phone");const i=await na(n.auth,e,Q(t));return new yl(i,s=>_m(n,s))}async function Yw(r,e,t){const n=Q(r);if(Ee(n.auth.app))return Promise.reject(Me(n.auth));const i=await na(n.auth,e,Q(t));return new yl(i,s=>ym(n,s))}async function na(r,e,t){var n;const i=await t.verify();try{M(typeof i=="string",r,"argument-error"),M(t.type===Pm,r,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return M(o.type==="enroll",r,"internal-error"),(await yw(r,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{M(o.type==="signin",r,"internal-error");const c=((n=s.multiFactorHint)===null||n===void 0?void 0:n.uid)||s.multiFactorUid;return M(c,r,"missing-multi-factor-info"),(await Ow(r,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await OI(r,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function Xw(r,e){const t=Q(r);if(Ee(t.auth.app))return Promise.reject(Me(t.auth));await ul(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn=class po{constructor(e){this.providerId=po.PROVIDER_ID,this.auth=Te(e)}verifyPhoneNumber(e,t){return na(this.auth,e,Q(t))}static credential(e,t){return Qn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return po.credentialFromTaggedObject(t)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Qn._fromTokenResponse(t,n):null}};Xn.PROVIDER_ID="phone";Xn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(r,e){return e?dt(e):(M(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends ri{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zw(r){return gm(r.auth,new vl(r),r.bypassAuthState)}function eE(r){const{auth:e,user:t}=r;return M(t,e,"internal-error"),pm(t,new vl(r),r.bypassAuthState)}async function tE(r){const{auth:e,user:t}=r;return M(t,e,"internal-error"),ul(t,new vl(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zw;case"linkViaPopup":case"linkViaRedirect":return tE;case"reauthViaPopup":case"reauthViaRedirect":return eE;default:qe(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Es(2e3,1e4);async function rE(r,e,t){if(Ee(r.app))return Promise.reject(Ne(r,"operation-not-supported-in-this-environment"));const n=Te(r);ni(r,e,Kt);const i=hr(n,t);return new Ut(n,"signInViaPopup",e,i).executeNotNull()}async function iE(r,e,t){const n=Q(r);if(Ee(n.auth.app))return Promise.reject(Ne(n.auth,"operation-not-supported-in-this-environment"));ni(n.auth,e,Kt);const i=hr(n.auth,t);return new Ut(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function sE(r,e,t){const n=Q(r);ni(n.auth,e,Kt);const i=hr(n.auth,t);return new Ut(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class Ut extends xm{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Ss();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ne(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ne(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ne(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nE.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="pendingRedirect",zi=new Map;class aE extends xm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=zi.get(this.auth._key());if(!e){try{const n=await cE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}zi.set(this.auth._key(),e)}return this.bypassAuthState||zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cE(r,e){const t=Cm(e),n=km(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function Il(r,e){return km(r)._set(Cm(e),"true")}function lE(){zi.clear()}function wl(r,e){zi.set(r._key(),e)}function km(r){return dt(r._redirectPersistence)}function Cm(r){return Hn(oE,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(r,e,t){return hE(r,e,t)}async function hE(r,e,t){if(Ee(r.app))return Promise.reject(Me(r));const n=Te(r);ni(r,e,Kt),await n._initializationPromise;const i=hr(n,t);return await Il(i,n),i._openRedirect(n,e,"signInViaRedirect")}function dE(r,e,t){return fE(r,e,t)}async function fE(r,e,t){const n=Q(r);if(ni(n.auth,e,Kt),Ee(n.auth.app))return Promise.reject(Me(n.auth));await n.auth._initializationPromise;const i=hr(n.auth,t);await Il(i,n.auth);const s=await Nm(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",s)}function mE(r,e,t){return pE(r,e,t)}async function pE(r,e,t){const n=Q(r);ni(n.auth,e,Kt),await n.auth._initializationPromise;const i=hr(n.auth,t);await Yo(!1,n,e.providerId),await Il(i,n.auth);const s=await Nm(n);return i._openRedirect(n.auth,e,"linkViaRedirect",s)}async function gE(r,e){return await Te(r)._initializationPromise,ra(r,e,!1)}async function ra(r,e,t=!1){if(Ee(r.app))return Promise.reject(Me(r));const n=Te(r),i=hr(n,e),o=await new aE(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function Nm(r){const e=Ss(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=10*60*1e3;class Dm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Vm(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ne(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_E&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xh(e))}saveEventToCache(e){this.cachedEventUids.add(Xh(e)),this.lastProcessedEventTime=Date.now()}}function Xh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Vm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vm(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(r,e={}){return Re(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IE=/^https?/;async function wE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Om(r);for(const t of e)try{if(EE(t))return}catch{}qe(r,"unauthorized-domain")}function EE(r){const e=ns(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!IE.test(t))return!1;if(vE.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE=new Es(3e4,6e4);function Zh(){const r=Ce().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function bE(r){return new Promise((e,t)=>{var n,i,s;function o(){Zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zh(),t(Ne(r,"network-request-failed"))},timeout:TE.get()})}if(!((i=(n=Ce().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ce().gapi)===null||s===void 0)&&s.load)o();else{const c=lm("iframefcb");return Ce()[c]=()=>{gapi.load?o():t(Ne(r,"network-request-failed"))},ll(`${gI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw go=null,e})}let go=null;function AE(r){return go=go||bE(r),go}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new Es(5e3,15e3),SE="__/auth/iframe",PE="emulator/auth/iframe",xE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CE(r){const e=r.config;M(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?cl(e,PE):`https://${r.config.authDomain}/${SE}`,n={apiKey:e.apiKey,appName:r.name,v:An},i=kE.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${ti(n).slice(1)}`}async function NE(r){const e=await AE(r),t=Ce().gapi;return M(t,r,"internal-error"),e.open({where:document.body,url:CE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xE,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Ne(r,"network-request-failed"),c=Ce().setTimeout(()=>{s(o)},RE.get());function l(){Ce().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VE=500,OE=600,LE="_blank",ME="http://localhost";class ed{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FE(r,e,t,n=VE,i=OE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},DE),{width:n.toString(),height:i.toString(),top:s,left:o}),h=Ie().toLowerCase();t&&(c=rm(h)?LE:t),tm(h)&&(e=e||ME,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[A,T])=>`${_}${A}=${T},`,"");if(oI(h)&&c!=="_self")return UE(e||"",c),new ed(null);const m=window.open(e||"",c,f);M(m,r,"popup-blocked");try{m.focus()}catch{}return new ed(m)}function UE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="__/auth/handler",jE="emulator/auth/handler",qE=encodeURIComponent("fac");async function Ic(r,e,t,n,i,s){M(r.config.authDomain,r,"auth-domain-config-required"),M(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:An,eventId:i};if(e instanceof Kt){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",fy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof ii){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${qE}=${encodeURIComponent(l)}`:"";return`${$E(r)}?${ti(c).slice(1)}${h}`}function $E({config:r}){return r.emulator?cl(r,jE):`https://${r.authDomain}/${BE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class zE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yn,this._completeRedirectFn=ra,this._overrideRedirectResult=wl}async _openPopup(e,t,n,i){var s;wt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ic(e,t,n,ns(),i);return FE(e,o,Ss())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await Ic(e,t,n,ns(),i);return Rw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(wt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await NE(e),n=new Dm(e);return t.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(oc,{type:oc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oc];o!==void 0&&t(!!o),qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return am()||nm()||bs()}}const GE=zE;class WE{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Rt("unexpected MultiFactorSessionType")}}}class El extends WE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new El(e)}_finalizeEnroll(e,t,n){return vw(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Lw(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lm{constructor(){}static assertion(e){return El._fromCredential(e)}}Lm.FACTOR_ID="phone";var td="@firebase/auth",nd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QE(r){gn(new Ct("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cm(r)},h=new dI(n,i,s,l);return II(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),gn(new Ct("auth-internal",e=>{const t=Te(e.getProvider("auth").getImmediate());return(n=>new KE(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),It(td,nd,HE(r)),It(td,nd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE=5*60;ry("authIdTokenMaxAge");function YE(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}fI({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Ne("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",YE().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QE("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=2e3;async function ZE(r,e,t){var n;const{BuildInfo:i}=Zn();wt(e.sessionId,"AuthEvent did not contain a session ID");const s=await iT(e.sessionId),o={};return bs()?o.ibi=i.packageName:Ts()?o.apn=i.packageName:qe(r,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Ic(r,t,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,o)}async function eT(r){const{BuildInfo:e}=Zn(),t={};bs()?t.iosBundleId=e.packageName:Ts()?t.androidPackageName=e.packageName:qe(r,"operation-not-supported-in-this-environment"),await Om(r,t)}function tT(r){const{cordova:e}=Zn();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let i=null;n?e.plugins.browsertab.openUrl(r):i=e.InAppBrowser.open(r,sI()?"_blank":"_system","location=yes"),t(i)})})}async function nT(r,e,t){const{cordova:n}=Zn();let i=()=>{};try{await new Promise((s,o)=>{let c=null;function l(){var m;s();const _=(m=n.plugins.browsertab)===null||m===void 0?void 0:m.close;typeof _=="function"&&_(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function h(){c||(c=window.setTimeout(()=>{o(Ne(r,"redirect-cancelled-by-user"))},XE))}function f(){(document==null?void 0:document.visibilityState)==="visible"&&h()}e.addPassiveListener(l),document.addEventListener("resume",h,!1),Ts()&&document.addEventListener("visibilitychange",f,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",f,!1),c&&window.clearTimeout(c)}})}finally{i()}}function rT(r){var e,t,n,i,s,o,c,l,h,f;const m=Zn();M(typeof((e=m==null?void 0:m.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),M(typeof((t=m==null?void 0:m.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),M(typeof((s=(i=(n=m==null?void 0:m.cordova)===null||n===void 0?void 0:n.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((l=(c=(o=m==null?void 0:m.cordova)===null||o===void 0?void 0:o.plugins)===null||c===void 0?void 0:c.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),M(typeof((f=(h=m==null?void 0:m.cordova)===null||h===void 0?void 0:h.InAppBrowser)===null||f===void 0?void 0:f.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function iT(r){const e=sT(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function sT(r){if(wt(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=20;class aT extends Dm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function cT(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:hT(),postBody:null,tenantId:r.tenantId,error:Ne(r,"no-auth-event")}}function lT(r,e){return wc()._set(Ec(r),e)}async function rd(r){const e=await wc()._get(Ec(r));return e&&await wc()._remove(Ec(r)),e}function uT(r,e){var t,n;const i=fT(e);if(i.includes("/__/auth/callback")){const s=_o(i),o=s.firebaseError?dT(decodeURIComponent(s.firebaseError)):null,c=(n=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||n===void 0?void 0:n[1],l=c?Ne(c):null;return l?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:i,postBody:null}}return null}function hT(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<oT;t++){const n=Math.floor(Math.random()*e.length);r.push(e.charAt(n))}return r.join("")}function wc(){return dt(gl)}function Ec(r){return Hn("authEvent",r.config.apiKey,r.name)}function dT(r){try{return JSON.parse(r)}catch{return null}}function fT(r){const e=_o(r),t=e.link?decodeURIComponent(e.link):void 0,n=_o(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _o(i).link||i||n||t||r}function _o(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return Cr(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=500;class pT{constructor(){this._redirectPersistence=Yn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ra,this._overrideRedirectResult=wl}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new aT(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){qe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){rT(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),lE(),await this._originValidation(e);const o=cT(e,n,i);await lT(e,o);const c=await ZE(e,o,t),l=await tT(c);return nT(e,s,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eT(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:s}=Zn(),o=setTimeout(async()=>{await rd(e),t.onEvent(id())},mT),c=async f=>{clearTimeout(o);const m=await rd(e);let _=null;m&&(f!=null&&f.url)&&(_=uT(m,f.url)),t.onEvent(_||id())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,c);const l=i,h=`${s.packageName.toLowerCase()}://`;Zn().handleOpenURL=async f=>{if(f.toLowerCase().startsWith(h)&&c({url:f}),typeof l=="function")try{l(f)}catch(m){console.error(m)}}}}const gT=pT;function id(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Ne("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(r,e){Te(r)._logFramework(e)}var yT="@firebase/auth-compat",vT="0.5.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=1e3;function Gi(){var r;return((r=self==null?void 0:self.location)===null||r===void 0?void 0:r.protocol)||null}function wT(){return Gi()==="http:"||Gi()==="https:"}function Mm(r=Ie()){return!!((Gi()==="file:"||Gi()==="ionic:"||Gi()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function ET(){return el()||Zc()}function TT(){return Cf()&&(document==null?void 0:document.documentMode)===11}function bT(r=Ie()){return/Edge\/\d+/.test(r)}function AT(r=Ie()){return TT()||bT(r)}function Fm(){try{const r=self.localStorage,e=Ss();if(r)return r.setItem(e,"1"),r.removeItem(e),AT()?Xi():!0}catch{return Tl()&&Xi()}return!1}function Tl(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ac(){return(wT()||kf()||Mm())&&!ET()&&Fm()&&!Tl()}function Um(){return Mm()&&typeof document<"u"}async function RT(){return Um()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},IT);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function ST(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht={LOCAL:"local",NONE:"none",SESSION:"session"},Pi=M,Bm="persistence";function PT(r,e){if(Pi(Object.values(ht).includes(e),r,"invalid-persistence-type"),el()){Pi(e!==ht.SESSION,r,"unsupported-persistence-type");return}if(Zc()){Pi(e===ht.NONE,r,"unsupported-persistence-type");return}if(Tl()){Pi(e===ht.NONE||e===ht.LOCAL&&Xi(),r,"unsupported-persistence-type");return}Pi(e===ht.NONE||Fm(),r,"unsupported-persistence-type")}async function Tc(r){await r._initializationPromise;const e=jm(),t=Hn(Bm,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function xT(r,e){const t=jm();if(!t)return[];const n=Hn(Bm,r,e);switch(t.getItem(n)){case ht.NONE:return[Br];case ht.LOCAL:return[os,Yn];case ht.SESSION:return[Yn];default:return[]}}function jm(){var r;try{return((r=ST())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=M;class un{constructor(){this.browserResolver=dt(GE),this.cordovaResolver=dt(gT),this.underlyingResolver=null,this._redirectPersistence=Yn,this._completeRedirectFn=ra,this._overrideRedirectResult=wl}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Um()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return kT(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await RT();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(r){return r.unwrap()}function CT(r){return r.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(r){return $m(r)}function DT(r,e){var t;const n=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new VT(r,_w(r,e))}else if(n){const i=$m(e),s=e;i&&(s.credential=i,s.tenantId=n.tenantId||void 0,s.email=n.email||void 0,s.phoneNumber=n.phoneNumber||void 0)}}function $m(r){const{_tokenResponse:e}=r instanceof Xe?r.customData:r;if(!e)return null;if(!(r instanceof Xe)&&"temporaryProof"in e&&"phoneNumber"in e)return Xn.credentialFromResult(r);const t=e.providerId;if(!t||t===Si.PASSWORD)return null;let n;switch(t){case Si.GOOGLE:n=Tt;break;case Si.FACEBOOK:n=Et;break;case Si.GITHUB:n=bt;break;case Si.TWITTER:n=At;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:c,nonce:l}=e;return!s&&!o&&!i&&!c?null:c?t.startsWith("saml.")?jr._create(t,c):Nt._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:i,accessToken:s}):new Vr(t).credential({idToken:i,accessToken:s,rawNonce:l})}return r instanceof Xe?n.credentialFromError(r):n.credentialFromResult(r)}function rt(r,e){return e.catch(t=>{throw t instanceof Xe&&DT(r,t),t}).then(t=>{const n=t.operationType,i=t.user;return{operationType:n,credential:NT(t),additionalUserInfo:gw(t),user:ia.getOrCreate(i)}})}async function bc(r,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>rt(r,t.confirm(n))}}class VT{constructor(e,t){this.resolver=t,this.auth=CT(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return rt(qm(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ia=class Fi{constructor(e){this._delegate=e,this.multiFactor=ww(e)}static getOrCreate(e){return Fi.USER_MAP.has(e)||Fi.USER_MAP.set(e,new Fi(e)),Fi.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return rt(this.auth,_m(this._delegate,e))}async linkWithPhoneNumber(e,t){return bc(this.auth,Jw(this._delegate,e,t))}async linkWithPopup(e){return rt(this.auth,sE(this._delegate,e,un))}async linkWithRedirect(e){return await Tc(Te(this.auth)),mE(this._delegate,e,un)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return rt(this.auth,ym(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return bc(this.auth,Yw(this._delegate,e,t))}reauthenticateWithPopup(e){return rt(this.auth,iE(this._delegate,e,un))}async reauthenticateWithRedirect(e){return await Tc(Te(this.auth)),dE(this._delegate,e,un)}sendEmailVerification(e){return sw(this._delegate,e)}async unlink(e){return await GI(this._delegate,e),this}updateEmail(e){return lw(this._delegate,e)}updatePassword(e){return uw(this._delegate,e)}updatePhoneNumber(e){return Xw(this._delegate,e)}updateProfile(e){return cw(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return ow(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};ia.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=M;class Ac{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;xi(n,"invalid-api-key",{appName:e.name}),xi(n,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?un:void 0;this._delegate=t.initialize({options:{persistence:OT(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Fv),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ia.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){wI(this._delegate,e,t)}applyActionCode(e){return JI(this._delegate,e)}checkActionCode(e){return vm(this._delegate,e)}confirmPasswordReset(e,t){return QI(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return rt(this._delegate,XI(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return iw(this._delegate,e)}isSignInWithEmailLink(e){return tw(this._delegate,e)}async getRedirectResult(){xi(ac(),this._delegate,"operation-not-supported-in-this-environment");const e=await gE(this._delegate,un);return e?rt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){_T(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:s,complete:o}=sd(e,t,n);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,n){const{next:i,error:s,complete:o}=sd(e,t,n);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return ew(this._delegate,e,t)}sendPasswordResetEmail(e,t){return HI(this._delegate,e,t||void 0)}async setPersistence(e){PT(this._delegate,e);let t;switch(e){case ht.SESSION:t=Yn;break;case ht.LOCAL:t=await dt(os)._isAvailable()?os:gl;break;case ht.NONE:t=Br;break;default:return qe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return rt(this._delegate,zI(this._delegate))}signInWithCredential(e){return rt(this._delegate,Xo(this._delegate,e))}signInWithCustomToken(e){return rt(this._delegate,KI(this._delegate,e))}signInWithEmailAndPassword(e,t){return rt(this._delegate,ZI(this._delegate,e,t))}signInWithEmailLink(e,t){return rt(this._delegate,nw(this._delegate,e,t))}signInWithPhoneNumber(e,t){return bc(this._delegate,Qw(this._delegate,e,t))}async signInWithPopup(e){return xi(ac(),this._delegate,"operation-not-supported-in-this-environment"),rt(this._delegate,rE(this._delegate,e,un))}async signInWithRedirect(e){return xi(ac(),this._delegate,"operation-not-supported-in-this-environment"),await Tc(this._delegate),uE(this._delegate,e,un)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return YI(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Ac.Persistence=ht;function sd(r,e,t){let n=r;typeof r!="function"&&({next:n,error:e,complete:t}=r);const i=n;return{next:o=>i(o&&ia.getOrCreate(o)),error:e,complete:t}}function OT(r,e){const t=xT(r,e);if(typeof self<"u"&&!t.includes(os)&&t.push(os),typeof window<"u")for(const n of[gl,Yn])t.includes(n)||t.push(n);return t.includes(Br)||t.push(Br),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.providerId="phone",this._delegate=new Xn(qm(ur.auth()))}static credential(e,t){return Xn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}bl.PHONE_SIGN_IN_METHOD=Xn.PHONE_SIGN_IN_METHOD;bl.PROVIDER_ID=Xn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LT=M;class MT{constructor(e,t,n=ur.app()){var i;LT((i=n.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Kw(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="auth-compat";function UT(r){r.INTERNAL.registerComponent(new Ct(FT,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Ac(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:wr.EMAIL_SIGNIN,PASSWORD_RESET:wr.PASSWORD_RESET,RECOVER_EMAIL:wr.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:wr.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:wr.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:wr.VERIFY_EMAIL}},EmailAuthProvider:Rn,FacebookAuthProvider:Et,GithubAuthProvider:bt,GoogleAuthProvider:Tt,OAuthProvider:Vr,SAMLAuthProvider:ko,PhoneAuthProvider:bl,PhoneMultiFactorGenerator:Lm,RecaptchaVerifier:MT,TwitterAuthProvider:At,Auth:Ac,AuthCredential:ri,Error:Xe}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(yT,vT)}UT(ur);var od=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jn,zm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function y(){}y.prototype=g.prototype,I.D=g.prototype,I.prototype=new y,I.prototype.constructor=I,I.C=function(w,b,S){for(var v=Array(arguments.length-2),mt=2;mt<arguments.length;mt++)v[mt-2]=arguments[mt];return g.prototype[b].apply(w,v)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(I,g,y){y||(y=0);var w=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)w[b]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(b=0;16>b;++b)w[b]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=I.g[0],y=I.g[1],b=I.g[2];var S=I.g[3],v=g+(S^y&(b^S))+w[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+w[1]+3905402710&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+w[2]+606105819&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+w[3]+3250441966&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(S^y&(b^S))+w[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+w[5]+1200080426&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+w[6]+2821735955&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+w[7]+4249261313&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(S^y&(b^S))+w[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+w[9]+2336552879&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+w[10]+4294925233&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+w[11]+2304563134&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(S^y&(b^S))+w[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+w[13]+4254626195&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+w[14]+2792965006&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+w[15]+1236535329&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(b^S&(y^b))+w[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+w[6]+3225465664&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+w[11]+643717713&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+w[0]+3921069994&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(b^S&(y^b))+w[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+w[10]+38016083&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+w[15]+3634488961&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+w[4]+3889429448&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(b^S&(y^b))+w[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+w[14]+3275163606&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+w[3]+4107603335&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+w[8]+1163531501&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(b^S&(y^b))+w[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+w[2]+4243563512&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+w[7]+1735328473&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+w[12]+2368359562&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(y^b^S)+w[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+w[8]+2272392833&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+w[11]+1839030562&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+w[14]+4259657740&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(y^b^S)+w[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+w[4]+1272893353&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+w[7]+4139469664&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+w[10]+3200236656&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(y^b^S)+w[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+w[0]+3936430074&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+w[3]+3572445317&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+w[6]+76029189&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(y^b^S)+w[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+w[12]+3873151461&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+w[15]+530742520&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+w[2]+3299628645&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(b^(y|~S))+w[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+w[7]+1126891415&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+w[14]+2878612391&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+w[5]+4237533241&4294967295,y=b+(v<<21&4294967295|v>>>11),v=g+(b^(y|~S))+w[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+w[3]+2399980690&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+w[10]+4293915773&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+w[1]+2240044497&4294967295,y=b+(v<<21&4294967295|v>>>11),v=g+(b^(y|~S))+w[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+w[15]+4264355552&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+w[6]+2734768916&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+w[13]+1309151649&4294967295,y=b+(v<<21&4294967295|v>>>11),v=g+(b^(y|~S))+w[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+w[11]+3174756917&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+w[2]+718787259&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}n.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var y=g-this.blockSize,w=this.B,b=this.h,S=0;S<g;){if(b==0)for(;S<=y;)i(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<g;)if(w[b++]=I.charCodeAt(S++),b==this.blockSize){i(this,w),b=0;break}}else for(;S<g;)if(w[b++]=I[S++],b==this.blockSize){i(this,w),b=0;break}}this.h=b,this.o+=g},n.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var y=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=y&255,y/=256;for(this.u(I),I=Array(16),g=y=0;4>g;++g)for(var w=0;32>w;w+=8)I[y++]=this.g[g]>>>w&255;return I};function s(I,g){var y=c;return Object.prototype.hasOwnProperty.call(y,I)?y[I]:y[I]=g(I)}function o(I,g){this.h=g;for(var y=[],w=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;w&&S==g||(y[b]=S,w=!1)}this.g=y}var c={};function l(I){return-128<=I&&128>I?s(I,function(g){return new o([g|0],0>g?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return N(h(-I));for(var g=[],y=1,w=0;I>=y;w++)g[w]=I/y|0,y*=4294967296;return new o(g,0)}function f(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return N(f(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),w=m,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),v=parseInt(I.substring(b,b+S),g);8>S?(S=h(Math.pow(g,S)),w=w.j(S).add(h(v))):(w=w.j(y),w=w.add(h(v)))}return w}var m=l(0),_=l(1),A=l(16777216);r=o.prototype,r.m=function(){if(D(this))return-N(this).m();for(var I=0,g=1,y=0;y<this.g.length;y++){var w=this.i(y);I+=(0<=w?w:4294967296+w)*g,g*=4294967296}return I},r.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(T(this))return"0";if(D(this))return"-"+N(this).toString(I);for(var g=h(Math.pow(I,6)),y=this,w="";;){var b=W(y,g).g;y=j(y,b.j(g));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(I);if(y=b,T(y))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},r.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function T(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function D(I){return I.h==-1}r.l=function(I){return I=j(this,I),D(I)?-1:T(I)?0:1};function N(I){for(var g=I.g.length,y=[],w=0;w<g;w++)y[w]=~I.g[w];return new o(y,~I.h).add(_)}r.abs=function(){return D(this)?N(this):this},r.add=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0,b=0;b<=g;b++){var S=w+(this.i(b)&65535)+(I.i(b)&65535),v=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);w=v>>>16,S&=65535,v&=65535,y[b]=v<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function j(I,g){return I.add(N(g))}r.j=function(I){if(T(this)||T(I))return m;if(D(this))return D(I)?N(this).j(N(I)):N(N(this).j(I));if(D(I))return N(this.j(N(I)));if(0>this.l(A)&&0>I.l(A))return h(this.m()*I.m());for(var g=this.g.length+I.g.length,y=[],w=0;w<2*g;w++)y[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<I.g.length;b++){var S=this.i(w)>>>16,v=this.i(w)&65535,mt=I.i(b)>>>16,Yt=I.i(b)&65535;y[2*w+2*b]+=v*Yt,K(y,2*w+2*b),y[2*w+2*b+1]+=S*Yt,K(y,2*w+2*b+1),y[2*w+2*b+1]+=v*mt,K(y,2*w+2*b+1),y[2*w+2*b+2]+=S*mt,K(y,2*w+2*b+2)}for(w=0;w<g;w++)y[w]=y[2*w+1]<<16|y[2*w];for(w=g;w<2*g;w++)y[w]=0;return new o(y,0)};function K(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function G(I,g){this.g=I,this.h=g}function W(I,g){if(T(g))throw Error("division by zero");if(T(I))return new G(m,m);if(D(I))return g=W(N(I),g),new G(N(g.g),N(g.h));if(D(g))return g=W(I,N(g)),new G(N(g.g),g.h);if(30<I.g.length){if(D(I)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,w=g;0>=w.l(I);)y=X(y),w=X(w);var b=J(y,1),S=J(w,1);for(w=J(w,2),y=J(y,2);!T(w);){var v=S.add(w);0>=v.l(I)&&(b=b.add(y),S=v),w=J(w,1),y=J(y,1)}return g=j(I,b.j(g)),new G(b,g)}for(b=m;0<=I.l(g);){for(y=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(y)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=h(y),v=S.j(g);D(v)||0<v.l(I);)y-=w,S=h(y),v=S.j(g);T(S)&&(S=_),b=b.add(S),I=j(I,v)}return new G(b,I)}r.A=function(I){return W(this,I).h},r.and=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)&I.i(w);return new o(y,this.h&I.h)},r.or=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)|I.i(w);return new o(y,this.h|I.h)},r.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),y=[],w=0;w<g;w++)y[w]=this.i(w)^I.i(w);return new o(y,this.h^I.h)};function X(I){for(var g=I.g.length+1,y=[],w=0;w<g;w++)y[w]=I.i(w)<<1|I.i(w-1)>>>31;return new o(y,I.h)}function J(I,g){var y=g>>5;g%=32;for(var w=I.g.length-y,b=[],S=0;S<w;S++)b[S]=0<g?I.i(S+y)>>>g|I.i(S+y+1)<<32-g:I.i(S+y);return new o(b,I.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,zm=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Jn=o}).apply(typeof od<"u"?od:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gm,Ui,Wm,yo,Rc,Km,Hm,Qm;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var R=a[p];if(!(R in d))break e;d=d[R]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,p=!1,R={next:function(){if(!p&&d<a.length){var C=d++;return{value:u(C,a[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function m(a,u,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),a.apply(u,R)}}return function(){return a.apply(u,arguments)}}function _(a,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function A(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function T(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,R,C){for(var F=Array(arguments.length-2),he=2;he<arguments.length;he++)F[he-2]=arguments[he];return u.prototype[R].apply(p,F)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function N(a,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const R=a.length||0,C=p.length||0;a.length=R+C;for(let F=0;F<C;F++)a[R+F]=p[F]}else a.push(p)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function K(a){return/^[\s\xa0]*$/.test(a)}function G(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function W(a){return W[" "](a),a}W[" "]=function(){};var X=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function J(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,u){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)a[d]=p[d];for(let C=0;C<y.length;C++)d=y[C],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function v(){var a=fi;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class mt{constructor(){this.h=this.g=null}add(u,d){const p=Yt.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var Yt=new j(()=>new qs,a=>a.reset());class qs{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Xt,Zt=!1,fi=new mt,$s=()=>{const a=c.Promise.resolve(void 0);Xt=()=>{a.then(Pa)}};var Pa=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){S(d)}var u=Yt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Zt=!1};function x(){this.s=this.s,this.C=this.C}x.prototype.s=!1,x.prototype.ma=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function L(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}L.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function Y(a,u){if(L.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(X){e:{try{W(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:te[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Y.aa.h.call(this)}}T(Y,L);var te={2:"touch",3:"pen",4:"mouse"};Y.prototype.h=function(){Y.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),Cn=0;function Nn(a,u,d,p,R){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=R,this.key=++Cn,this.da=this.fa=!1}function ct(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function lt(a){this.src=a,this.g={},this.h=0}lt.prototype.add=function(a,u,d,p,R){var C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);var F=ka(a,u,p,R);return-1<F?(u=a[F],d||(u.fa=!1)):(u=new Nn(u,this.src,C,!!p,R),u.fa=d,a.push(u)),u};function xa(a,u){var d=u.type;if(d in a.g){var p=a.g[d],R=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(ct(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ka(a,u,d,p){for(var R=0;R<a.length;++R){var C=a[R];if(!C.da&&C.listener==u&&C.capture==!!d&&C.ha==p)return R}return-1}var Ca="closure_lm_"+(1e6*Math.random()|0),Na={};function Pu(a,u,d,p,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)Pu(a,u[C],d,p,R);return null}return d=Cu(d),a&&a[Ve]?a.K(u,d,h(p)?!!p.capture:!1,R):f_(a,u,d,!1,p,R)}function f_(a,u,d,p,R,C){if(!u)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,he=Va(a);if(he||(a[Ca]=he=new lt(a)),d=he.add(u,d,p,F,C),d.proxy)return d;if(p=m_(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)H||(R=F),R===void 0&&(R=!1),a.addEventListener(u.toString(),p,R);else if(a.attachEvent)a.attachEvent(ku(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function m_(){function a(d){return u.call(a.src,a.listener,d)}const u=p_;return a}function xu(a,u,d,p,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)xu(a,u[C],d,p,R);else p=h(p)?!!p.capture:!!p,d=Cu(d),a&&a[Ve]?(a=a.i,u=String(u).toString(),u in a.g&&(C=a.g[u],d=ka(C,d,p,R),-1<d&&(ct(C[d]),Array.prototype.splice.call(C,d,1),C.length==0&&(delete a.g[u],a.h--)))):a&&(a=Va(a))&&(u=a.g[u.toString()],a=-1,u&&(a=ka(u,d,p,R)),(d=-1<a?u[a]:null)&&Da(d))}function Da(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Ve])xa(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(ku(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Va(u))?(xa(d,a),d.h==0&&(d.src=null,u[Ca]=null)):ct(a)}}}function ku(a){return a in Na?Na[a]:Na[a]="on"+a}function p_(a,u){if(a.da)a=!0;else{u=new Y(u,this);var d=a.listener,p=a.ha||a.src;a.fa&&Da(a),a=d.call(p,u)}return a}function Va(a){return a=a[Ca],a instanceof lt?a:null}var Oa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cu(a){return typeof a=="function"?a:(a[Oa]||(a[Oa]=function(u){return a.handleEvent(u)}),a[Oa])}function $e(){x.call(this),this.i=new lt(this),this.M=this,this.F=null}T($e,x),$e.prototype[Ve]=!0,$e.prototype.removeEventListener=function(a,u,d,p){xu(this,a,u,d,p)};function He(a,u){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new L(u,a);else if(u instanceof L)u.target=u.target||a;else{var R=u;u=new L(p,a),w(u,R)}if(R=!0,d)for(var C=d.length-1;0<=C;C--){var F=u.g=d[C];R=zs(F,p,!0,u)&&R}if(F=u.g=a,R=zs(F,p,!0,u)&&R,R=zs(F,p,!1,u)&&R,d)for(C=0;C<d.length;C++)F=u.g=d[C],R=zs(F,p,!1,u)&&R}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],p=0;p<d.length;p++)ct(d[p]);delete a.g[u],a.h--}}this.F=null},$e.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},$e.prototype.L=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function zs(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var F=u[C];if(F&&!F.da&&F.capture==d){var he=F.listener,Fe=F.ha||F.src;F.fa&&xa(a.i,F),R=he.call(Fe,p)!==!1&&R}}return R&&!p.defaultPrevented}function Nu(a,u,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Du(a){a.g=Nu(()=>{a.g=null,a.i&&(a.i=!1,Du(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class g_ extends x{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Du(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(a){x.call(this),this.h=a,this.g={}}T(mi,x);var Vu=[];function Ou(a){J(a.g,function(u,d){this.g.hasOwnProperty(d)&&Da(u)},a),a.g={}}mi.prototype.N=function(){mi.aa.N.call(this),Ou(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var La=c.JSON.stringify,__=c.JSON.parse,y_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Ma(){}Ma.prototype.h=null;function Lu(a){return a.h||(a.h=a.i())}function Mu(){}var pi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fa(){L.call(this,"d")}T(Fa,L);function Ua(){L.call(this,"c")}T(Ua,L);var Dn={},Fu=null;function Gs(){return Fu=Fu||new $e}Dn.La="serverreachability";function Uu(a){L.call(this,Dn.La,a)}T(Uu,L);function gi(a){const u=Gs();He(u,new Uu(u))}Dn.STAT_EVENT="statevent";function Bu(a,u){L.call(this,Dn.STAT_EVENT,a),this.stat=u}T(Bu,L);function Qe(a){const u=Gs();He(u,new Bu(u,a))}Dn.Ma="timingevent";function ju(a,u){L.call(this,Dn.Ma,a),this.size=u}T(ju,L);function _i(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function yi(){this.g=!0}yi.prototype.xa=function(){this.g=!1};function v_(a,u,d,p,R,C){a.info(function(){if(a.g)if(C)for(var F="",he=C.split("&"),Fe=0;Fe<he.length;Fe++){var ae=he[Fe].split("=");if(1<ae.length){var ze=ae[0];ae=ae[1];var Ge=ze.split("_");F=2<=Ge.length&&Ge[1]=="type"?F+(ze+"="+ae+"&"):F+(ze+"=redacted&")}}else F=null;else F=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+d+`
`+F})}function I_(a,u,d,p,R,C,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+d+`
`+C+" "+F})}function _r(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+E_(a,d)+(p?" "+p:"")})}function w_(a,u){a.info(function(){return"TIMEOUT: "+u})}yi.prototype.info=function(){};function E_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return La(d)}catch{return u}}var Ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ba;function Ks(){}T(Ks,Ma),Ks.prototype.g=function(){return new XMLHttpRequest},Ks.prototype.i=function(){return{}},Ba=new Ks;function en(a,u,d,p){this.j=a,this.i=u,this.l=d,this.R=p||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $u}function $u(){this.i=null,this.g="",this.h=!1}var zu={},ja={};function qa(a,u,d){a.L=1,a.v=Ys(Lt(u)),a.m=d,a.P=!0,Gu(a,null)}function Gu(a,u){a.F=Date.now(),Hs(a),a.A=Lt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),sh(d.i,"t",p),a.C=0,d=a.j.J,a.h=new $u,a.g=Th(a.j,d?u:null,!a.m),0<a.O&&(a.M=new g_(_(a.Y,a,a.g),a.O)),u=a.U,d=a.g,p=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Vu[0]=R.toString()),R=Vu);for(var C=0;C<R.length;C++){var F=Pu(d,R[C],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),gi(),v_(a.i,a.u,a.A,a.l,a.R,a.m)}en.prototype.ca=function(a){a=a.target;const u=this.M;u&&Mt(a)==3?u.j():this.Y(a)},en.prototype.Y=function(a){try{if(a==this.g)e:{const Ge=Mt(this.g);var u=this.g.Ba();const Ir=this.g.Z();if(!(3>Ge)&&(Ge!=3||this.g&&(this.h.h||this.g.oa()||dh(this.g)))){this.J||Ge!=4||u==7||(u==8||0>=Ir?gi(3):gi(2)),$a(this);var d=this.g.Z();this.X=d;t:if(Wu(this)){var p=dh(this.g);a="";var R=p.length,C=Mt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vn(this),vi(this);var F="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(C&&u==R-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,I_(this.i,this.u,this.A,this.l,this.R,Ge,d),this.o){if(this.T&&!this.K){t:{if(this.g){var he,Fe=this.g;if((he=Fe.g?Fe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(he)){var ae=he;break t}}ae=null}if(d=ae)_r(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,za(this,d);else{this.o=!1,this.s=3,Qe(12),Vn(this),vi(this);break e}}if(this.P){d=!0;let yt;for(;!this.J&&this.C<F.length;)if(yt=T_(this,F),yt==ja){Ge==4&&(this.s=4,Qe(14),d=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(yt==zu){this.s=4,Qe(15),_r(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else _r(this.i,this.l,yt,null),za(this,yt);if(Wu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ge!=4||F.length!=0||this.h.h||(this.s=1,Qe(16),d=!1),this.o=this.o&&d,!d)_r(this.i,this.l,F,"[Invalid Chunked Response]"),Vn(this),vi(this);else if(0<F.length&&!this.W){this.W=!0;var ze=this.j;ze.g==this&&ze.ba&&!ze.M&&(ze.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Ja(ze),ze.M=!0,Qe(11))}}else _r(this.i,this.l,F,null),za(this,F);Ge==4&&Vn(this),this.o&&!this.J&&(Ge==4?vh(this.j,this):(this.o=!1,Hs(this)))}else B_(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),Vn(this),vi(this)}}}catch{}finally{}};function Wu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function T_(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?ja:(d=Number(u.substring(d,p)),isNaN(d)?zu:(p+=1,p+d>u.length?ja:(u=u.slice(p,p+d),a.C=p+d,u)))}en.prototype.cancel=function(){this.J=!0,Vn(this)};function Hs(a){a.S=Date.now()+a.I,Ku(a,a.I)}function Ku(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=_i(_(a.ba,a),u)}function $a(a){a.B&&(c.clearTimeout(a.B),a.B=null)}en.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(w_(this.i,this.A),this.L!=2&&(gi(),Qe(17)),Vn(this),this.s=2,vi(this)):Ku(this,this.S-a)};function vi(a){a.j.G==0||a.J||vh(a.j,a)}function Vn(a){$a(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ou(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function za(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Ga(d.h,a))){if(!a.K&&Ga(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ro(d),to(d);else break e;Qa(d),Qe(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=_i(_(d.Za,d),6e3));if(1>=Ju(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Ln(d,11)}else if((a.K||d.g==a)&&ro(d),!K(u))for(R=d.Da.g.parse(u),u=0;u<R.length;u++){let ae=R[u];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const ze=ae[3];ze!=null&&(d.la=ze,d.j.info("VER="+d.la));const Ge=ae[4];Ge!=null&&(d.Aa=Ge,d.j.info("SVER="+d.Aa));const Ir=ae[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(p=1.5*Ir,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const yt=a.g;if(yt){const so=yt.g?yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var C=p.h;C.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Wa(C,C.h),C.h=null))}if(p.D){const Ya=yt.g?yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ya&&(p.ya=Ya,fe(p.I,p.D,Ya))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=a;if(p.qa=Eh(p,p.J?p.ia:null,p.W),F.K){Yu(p.h,F);var he=F,Fe=p.L;Fe&&(he.I=Fe),he.B&&($a(he),Hs(he)),p.g=F}else _h(p);0<d.i.length&&no(d)}else ae[0]!="stop"&&ae[0]!="close"||Ln(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?Ln(d,7):Ha(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}gi(4)}catch{}}var b_=class{constructor(a,u){this.g=a,this.map=u}};function Hu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ju(a){return a.h?1:a.g?a.g.size:0}function Ga(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Wa(a,u){a.g?a.g.add(u):a.h=u}function Yu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Hu.prototype.cancel=function(){if(this.i=Xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Xu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function A_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,p=0;p<d;p++)u.push(a[p]);return u}u=[],d=0;for(p in a)u[d++]=a[p];return u}function R_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const p in a)u[d++]=p;return u}}}function Zu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=R_(a),p=A_(a),R=p.length,C=0;C<R;C++)u.call(void 0,p[C],d&&d[C],a)}var eh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),R=null;if(0<=p){var C=a[d].substring(0,p);R=a[d].substring(p+1)}else C=a[d];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function On(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof On){this.h=a.h,Qs(this,a.j),this.o=a.o,this.g=a.g,Js(this,a.s),this.l=a.l;var u=a.i,d=new Ei;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),th(this,d),this.m=a.m}else a&&(u=String(a).match(eh))?(this.h=!1,Qs(this,u[1]||"",!0),this.o=Ii(u[2]||""),this.g=Ii(u[3]||"",!0),Js(this,u[4]),this.l=Ii(u[5]||"",!0),th(this,u[6]||"",!0),this.m=Ii(u[7]||"")):(this.h=!1,this.i=new Ei(null,this.h))}On.prototype.toString=function(){var a=[],u=this.j;u&&a.push(wi(u,nh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(wi(u,nh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(wi(d,d.charAt(0)=="/"?k_:x_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",wi(d,N_)),a.join("")};function Lt(a){return new On(a)}function Qs(a,u,d){a.j=d?Ii(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Js(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function th(a,u,d){u instanceof Ei?(a.i=u,D_(a.i,a.h)):(d||(u=wi(u,C_)),a.i=new Ei(u,a.h))}function fe(a,u,d){a.i.set(u,d)}function Ys(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ii(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wi(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,P_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function P_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var nh=/[#\/\?@]/g,x_=/[#\?:]/g,k_=/[#\?]/g,C_=/[#\?@]/g,N_=/#/g;function Ei(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function tn(a){a.g||(a.g=new Map,a.h=0,a.i&&S_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Ei.prototype,r.add=function(a,u){tn(this),this.i=null,a=yr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function rh(a,u){tn(a),u=yr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function ih(a,u){return tn(a),u=yr(a,u),a.g.has(u)}r.forEach=function(a,u){tn(this),this.g.forEach(function(d,p){d.forEach(function(R){a.call(u,R,p,this)},this)},this)},r.na=function(){tn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const R=a[p];for(let C=0;C<R.length;C++)d.push(u[p])}return d},r.V=function(a){tn(this);let u=[];if(typeof a=="string")ih(this,a)&&(u=u.concat(this.g.get(yr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return tn(this),this.i=null,a=yr(this,a),ih(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function sh(a,u,d){rh(a,u),0<d.length&&(a.i=null,a.g.set(yr(a,u),D(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const C=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var R=C;F[p]!==""&&(R+="="+encodeURIComponent(String(F[p]))),a.push(R)}}return this.i=a.join("&")};function yr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function D_(a,u){u&&!a.j&&(tn(a),a.i=null,a.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(rh(this,p),sh(this,R,d))},a)),a.j=u}function V_(a,u){const d=new yi;if(c.Image){const p=new Image;p.onload=A(nn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=A(nn,d,"TestLoadImage: error",!1,u,p),p.onabort=A(nn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=A(nn,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function O_(a,u){const d=new yi,p=new AbortController,R=setTimeout(()=>{p.abort(),nn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?nn(d,"TestPingServer: ok",!0,u):nn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),nn(d,"TestPingServer: error",!1,u)})}function nn(a,u,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function L_(){this.g=new y_}function M_(a,u,d){const p=d||"";try{Zu(a,function(R,C){let F=R;h(R)&&(F=La(R)),u.push(p+C+"="+encodeURIComponent(F))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Xs(a){this.l=a.Ub||null,this.j=a.eb||!1}T(Xs,Ma),Xs.prototype.g=function(){return new Zs(this.l,this.j)},Xs.prototype.i=function(a){return function(){return a}}({});function Zs(a,u){$e.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Zs,$e),r=Zs.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,bi(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ti(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;oh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function oh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ti(this):bi(this),this.readyState==3&&oh(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Ti(this))},r.Qa=function(a){this.g&&(this.response=a,Ti(this))},r.ga=function(){this.g&&Ti(this)};function Ti(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bi(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ah(a){let u="";return J(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Ka(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ah(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):fe(a,u,d))}function we(a){$e.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(we,$e);var F_=/^https?$/i,U_=["POST","PUT"];r=we.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ba.g(),this.v=this.o?Lu(this.o):Lu(Ba),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(C){ch(this,C);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())d.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(U_,u,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,F]of d)this.g.setRequestHeader(C,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{hh(this),this.u=!0,this.g.send(a),this.u=!1}catch(C){ch(this,C)}};function ch(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,lh(a),eo(a)}function lh(a){a.A||(a.A=!0,He(a,"complete"),He(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,He(this,"complete"),He(this,"abort"),eo(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),eo(this,!0)),we.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?uh(this):this.bb())},r.bb=function(){uh(this)};function uh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Mt(a)!=4||a.Z()!=2)){if(a.u&&Mt(a)==4)Nu(a.Ea,0,a);else if(He(a,"readystatechange"),Mt(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=F===0){var R=String(a.D).match(eh)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!F_.test(R?R.toLowerCase():"")}d=p}if(d)He(a,"complete"),He(a,"success");else{a.m=6;try{var C=2<Mt(a)?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.Z()+"]",lh(a)}}finally{eo(a)}}}}function eo(a,u){if(a.g){hh(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||He(a,"ready");try{d.onreadystatechange=p}catch{}}}function hh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Mt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Mt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),__(u)}};function dh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function B_(a){const u={};a=(a.g&&2<=Mt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(K(a[p]))continue;var d=b(a[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const C=u[R]||[];u[R]=C,C.push(d)}I(u,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ai(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function fh(a){this.Aa=0,this.i=[],this.j=new yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ai("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ai("baseRetryDelayMs",5e3,a),this.cb=Ai("retryDelaySeedMs",1e4,a),this.Wa=Ai("forwardChannelMaxRetries",2,a),this.wa=Ai("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Hu(a&&a.concurrentRequestLimit),this.Da=new L_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=fh.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,p){Qe(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Eh(this,null,this.W),no(this)};function Ha(a){if(mh(a),a.G==3){var u=a.U++,d=Lt(a.I);if(fe(d,"SID",a.K),fe(d,"RID",u),fe(d,"TYPE","terminate"),Ri(a,d),u=new en(a,a.j,u),u.L=2,u.v=Ys(Lt(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Th(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hs(u)}wh(a)}function to(a){a.g&&(Ja(a),a.g.cancel(),a.g=null)}function mh(a){to(a),a.u&&(c.clearTimeout(a.u),a.u=null),ro(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function no(a){if(!Qu(a.h)&&!a.s){a.s=!0;var u=a.Ga;Xt||$s(),Zt||(Xt(),Zt=!0),fi.add(u,a),a.B=0}}function j_(a,u){return Ju(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=_i(_(a.Ga,a,u),Ih(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new en(this,this.j,a);let C=this.o;if(this.S&&(C?(C=g(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=gh(this,R,u),d=Lt(this.I),fe(d,"RID",a),fe(d,"CVER",22),this.D&&fe(d,"X-HTTP-Session-Id",this.D),Ri(this,d),C&&(this.O?u="headers="+encodeURIComponent(String(ah(C)))+"&"+u:this.m&&Ka(d,this.m,C)),Wa(this.h,R),this.Ua&&fe(d,"TYPE","init"),this.P?(fe(d,"$req",u),fe(d,"SID","null"),R.T=!0,qa(R,d,null)):qa(R,d,u),this.G=2}}else this.G==3&&(a?ph(this,a):this.i.length==0||Qu(this.h)||ph(this))};function ph(a,u){var d;u?d=u.l:d=a.U++;const p=Lt(a.I);fe(p,"SID",a.K),fe(p,"RID",d),fe(p,"AID",a.T),Ri(a,p),a.m&&a.o&&Ka(p,a.m,a.o),d=new en(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=gh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Wa(a.h,d),qa(d,p,u)}function Ri(a,u){a.H&&J(a.H,function(d,p){fe(u,p,d)}),a.l&&Zu({},function(d,p){fe(u,p,d)})}function gh(a,u,d){d=Math.min(a.i.length,d);var p=a.l?_(a.l.Na,a.l,a):null;e:{var R=a.i;let C=-1;for(;;){const F=["count="+d];C==-1?0<d?(C=R[0].g,F.push("ofs="+C)):C=0:F.push("ofs="+C);let he=!0;for(let Fe=0;Fe<d;Fe++){let ae=R[Fe].g;const ze=R[Fe].map;if(ae-=C,0>ae)C=Math.max(0,R[Fe].g-100),he=!1;else try{M_(ze,F,"req"+ae+"_")}catch{p&&p(ze)}}if(he){p=F.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,p}function _h(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Xt||$s(),Zt||(Xt(),Zt=!0),fi.add(u,a),a.v=0}}function Qa(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=_i(_(a.Fa,a),Ih(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,yh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=_i(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qe(10),to(this),yh(this))};function Ja(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function yh(a){a.g=new en(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Lt(a.qa);fe(u,"RID","rpc"),fe(u,"SID",a.K),fe(u,"AID",a.T),fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(u,"TO",a.ja),fe(u,"TYPE","xmlhttp"),Ri(a,u),a.m&&a.o&&Ka(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ys(Lt(u)),d.m=null,d.P=!0,Gu(d,a)}r.Za=function(){this.C!=null&&(this.C=null,to(this),Qa(this),Qe(19))};function ro(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function vh(a,u){var d=null;if(a.g==u){ro(a),Ja(a),a.g=null;var p=2}else if(Ga(a.h,u))d=u.D,Yu(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var R=a.B;p=Gs(),He(p,new ju(p,d)),no(a)}else _h(a);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&j_(a,u)||p==2&&Qa(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),R){case 1:Ln(a,5);break;case 4:Ln(a,10);break;case 3:Ln(a,6);break;default:Ln(a,2)}}}function Ih(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Ln(a,u){if(a.j.info("Error code "+u),u==2){var d=_(a.fb,a),p=a.Xa;const R=!p;p=new On(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Qs(p,"https"),Ys(p),R?V_(p.toString(),d):O_(p.toString(),d)}else Qe(2);a.G=0,a.l&&a.l.sa(u),wh(a),mh(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function wh(a){if(a.G=0,a.ka=[],a.l){const u=Xu(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Eh(a,u,d){var p=d instanceof On?Lt(d):new On(d);if(p.g!="")u&&(p.g=u+"."+p.g),Js(p,p.s);else{var R=c.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new On(null);p&&Qs(C,p),u&&(C.g=u),R&&Js(C,R),d&&(C.l=d),p=C}return d=a.D,u=a.ya,d&&u&&fe(p,d,u),fe(p,"VER",a.la),Ri(a,p),p}function Th(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new we(new Xs({eb:d})):new we(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function bh(){}r=bh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function io(){}io.prototype.g=function(a,u){return new ut(a,u)};function ut(a,u){$e.call(this),this.g=new fh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!K(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!K(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new vr(this)}T(ut,$e),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){Ha(this.g)},ut.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=La(a),a=d);u.i.push(new b_(u.Ya++,a)),u.G==3&&no(u)},ut.prototype.N=function(){this.g.l=null,delete this.j,Ha(this.g),delete this.g,ut.aa.N.call(this)};function Ah(a){Fa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}T(Ah,Fa);function Rh(){Ua.call(this),this.status=1}T(Rh,Ua);function vr(a){this.g=a}T(vr,bh),vr.prototype.ua=function(){He(this.g,"a")},vr.prototype.ta=function(a){He(this.g,new Ah(a))},vr.prototype.sa=function(a){He(this.g,new Rh)},vr.prototype.ra=function(){He(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,Qm=function(){return new io},Hm=function(){return Gs()},Km=Dn,Rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ws.NO_ERROR=0,Ws.TIMEOUT=8,Ws.HTTP_ERROR=6,yo=Ws,qu.COMPLETE="complete",Wm=qu,Mu.EventType=pi,pi.OPEN="a",pi.CLOSE="b",pi.ERROR="c",pi.MESSAGE="d",$e.prototype.listen=$e.prototype.K,Ui=Mu,we.prototype.listenOnce=we.prototype.L,we.prototype.getLastError=we.prototype.Ka,we.prototype.getLastErrorCode=we.prototype.Ba,we.prototype.getStatus=we.prototype.Z,we.prototype.getResponseJson=we.prototype.Oa,we.prototype.getResponseText=we.prototype.oa,we.prototype.send=we.prototype.ea,we.prototype.setWithCredentials=we.prototype.Ha,Gm=we}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const ad="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=new Ko("@firebase/firestore");function Rr(){return _n.logLevel}function BT(r){_n.setLogLevel(r)}function O(r,...e){if(_n.logLevel<=ne.DEBUG){const t=e.map(Al);_n.debug(`Firestore (${si}): ${r}`,...t)}}function Se(r,...e){if(_n.logLevel<=ne.ERROR){const t=e.map(Al);_n.error(`Firestore (${si}): ${r}`,...t)}}function Dt(r,...e){if(_n.logLevel<=ne.WARN){const t=e.map(Al);_n.warn(`Firestore (${si}): ${r}`,...t)}}function Al(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(r="Unexpected state"){const e=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: `+r;throw Se(e),new Error(e)}function $(r,e){r||q()}function jT(r,e){r||q()}function B(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Xe{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class qT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class $T{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class zT{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){$(this.o===void 0);let n=this.i;const i=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let s=new je;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new je,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new je)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?($(typeof n.accessToken=="string"),new Jm(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new Le(e)}}class GT{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class WT{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new GT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HT{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){$(this.o===void 0);const n=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?($(typeof t.token=="string"),this.R=t.token,new KT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=QT(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Z(r,e){return r<e?-1:r>e?1:0}function qr(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Xm(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ye(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new ye(0,0))}static max(){return new z(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,n){t===void 0?t=0:t>e.length&&q(),n===void 0?n=e.length-t:n>e.length-t&&q(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return as.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof as?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class re extends as{construct(e,t,n){return new re(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(k.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new re(t)}static emptyPath(){return new re([])}}const JT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends as{construct(e,t,n){return new ge(e,t,n)}static isValidIdentifier(e){return JT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ge(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new V(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new V(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(re.fromString(e))}static fromName(e){return new U(re.fromString(e).popFirst(5))}static empty(){return new U(re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new re(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Sc(r){return r.fields.find(e=>e.kind===2)}function Un(r){return r.fields.filter(e=>e.kind!==2)}Vo.UNKNOWN_ID=-1;class vo{constructor(e,t){this.fieldPath=e,this.kind=t}}class cs{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new cs(0,ft.min())}}function Zm(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=z.fromTimestamp(n===1e9?new ye(t+1,0):new ye(t,n));return new ft(i,U.empty(),e)}function ep(r){return new ft(r.readTime,r.key,-1)}class ft{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new ft(z.min(),U.empty(),-1)}static max(){return new ft(z.max(),U.empty(),-1)}}function Rl(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(r.documentKey,e.documentKey),t!==0?t:Z(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class np{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sn(r){if(r.code!==k.FAILED_PRECONDITION||r.message!==tp)throw r;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,n)=>{t(e)})}static reject(e){return new P((t,n)=>{n(e)})}static waitFor(e){return new P((t,n)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>n(l))}),o=!0,s===i&&t()})}static or(e){let t=P.resolve(!1);for(const n of e)t=t.next(i=>i?P.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new P((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new P((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new je,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Wi(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=Sl(n.target.error);this.V.reject(new Wi(e,i))}}static open(e,t,n,i){try{return new sa(t,e.transaction(i,n))}catch(s){throw new Wi(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new XT(t)}}class xt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,xt.S(Ie())===12.2&&Se("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),Bn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Xi())return!1;if(xt.v())return!0;const e=Ie(),t=xt.S(e),n=0<t&&t<10,i=rp(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new Wi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new V(k.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new V(k.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Wi(e,o))},i.onupgradeneeded=s=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=sa.open(this.db,e,s?"readonly":"readwrite",n),l=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),P.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(O("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class YT{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Bn(this.B.delete())}}class Wi extends V{constructor(e,t){super(k.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Pn(r){return r.name==="IndexedDbTransactionError"}class XT{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(O("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Bn(n)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),Bn(this.store.add(e))}get(e){return Bn(this.store.get(e)).next(t=>(t===void 0&&(t=null),O("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),Bn(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),Bn(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new P((o,c)=>{s.onerror=l=>{c(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new P((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){O("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new P((n,i)=>{t.onerror=s=>{const o=Sl(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new P((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const l=new YT(c),h=t(c.primaryKey,c.value,l);if(h instanceof P){const f=h.catch(m=>(l.done(),P.reject(m)));n.push(f)}l.isDone?i():l.K===null?c.continue():c.continue(l.K)}}).next(()=>P.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Bn(r){return new P((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Sl(n.target.error);t(i)}})}let cd=!1;function Sl(r){const e=xt.S(Ie());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return cd||(cd=!0,setTimeout(()=>{throw n},0)),n}}return r}class ZT{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){O("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{O("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Pn(t)?O("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Sn(t)}await this.X(6e4)})}}class eb{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return P.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return O("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(O("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=ep(s);Rl(o,n)>0&&(n=o)}),new ft(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}st.oe=-1;function xs(r){return r==null}function ls(r){return r===0&&1/r==-1/0}function ip(r){return typeof r=="number"&&Number.isInteger(r)&&!ls(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ld(e)),e=tb(r.get(t),e);return ld(e)}function tb(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ld(r){return r+""}function St(r){const e=r.length;if($(e>=2),e===2)return $(r.charAt(0)===""&&r.charAt(1)===""),re.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&q(),r.charAt(o+1)){case"":const c=r.substring(s,o);let l;i.length===0?l=c:(i+=c,l=i,i=""),n.push(l);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:q()}s=o+2}return new re(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(r,e){return[r,Ze(e)]}function sp(r,e,t){return[r,Ze(e),t]}const nb={},rb=["prefixPath","collectionGroup","readTime","documentId"],ib=["prefixPath","collectionGroup","documentId"],sb=["collectionGroup","readTime","prefixPath","documentId"],ob=["canonicalId","targetId"],ab=["targetId","path"],cb=["path","targetId"],lb=["collectionId","parent"],ub=["indexId","uid"],hb=["uid","sequenceNumber"],db=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fb=["indexId","uid","orderedDocumentKey"],mb=["userId","collectionPath","documentId"],pb=["userId","collectionPath","largestBatchId"],gb=["userId","collectionGroup","largestBatchId"],op=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_b=[...op,"documentOverlays"],ap=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],cp=ap,Pl=[...cp,"indexConfiguration","indexState","indexEntries"],yb=Pl,vb=[...Pl,"globals"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends np{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function De(r,e){const t=B(r);return xt.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hd(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function dr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function lp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e,t){this.comparator=e,this.root=t||Ue.EMPTY}insert(e,t){return new de(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new de(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new Ue(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw q();const e=this.left.check();if(e!==this.right.check())throw q();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw q()}get value(){throw q()}get color(){throw q()}get left(){throw q()}get right(){throw q()}copy(e,t,n,i,s){return this}insert(e,t,n){return new Ue(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.comparator=e,this.data=new de(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new dd(this.data.getIterator())}getIteratorFrom(e){return new dd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof ue)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ue(this.comparator);return t.data=e,t}}class dd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Er(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new ot([])}unionWith(e){let t=new ue(ge.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ib(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new up("Invalid base64 string: "+s):s}}(e);return new be(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const wb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(r){if($(!!r),typeof r=="string"){let e=0;const t=wb.exec(r);if($(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yn(r){return typeof r=="string"?be.fromBase64String(r):be.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function xl(r){const e=r.mapValue.fields.__previous_value__;return oa(e)?xl(e):e}function us(r){const e=zt(r.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t,n,i,s,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class vn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},wo={nullValue:"NULL_VALUE"};function er(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?oa(r)?4:hp(r)?9007199254740991:aa(r)?10:11:q()}function Vt(r,e){if(r===e)return!0;const t=er(r);if(t!==er(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return us(r).isEqual(us(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=zt(i.timestampValue),c=zt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return yn(i.bytesValue).isEqual(yn(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return pe(i.geoPointValue.latitude)===pe(s.geoPointValue.latitude)&&pe(i.geoPointValue.longitude)===pe(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pe(i.integerValue)===pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=pe(i.doubleValue),c=pe(s.doubleValue);return o===c?ls(o)===ls(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return qr(r.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(hd(o)!==hd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Vt(o[l],c[l])))return!1;return!0}(r,e);default:return q()}}function hs(r,e){return(r.values||[]).find(t=>Vt(t,e))!==void 0}function In(r,e){if(r===e)return 0;const t=er(r),n=er(e);if(t!==n)return Z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(r.booleanValue,e.booleanValue);case 2:return function(s,o){const c=pe(s.integerValue||s.doubleValue),l=pe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return fd(r.timestampValue,e.timestampValue);case 4:return fd(us(r),us(e));case 5:return Z(r.stringValue,e.stringValue);case 6:return function(s,o){const c=yn(s),l=yn(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Z(c[h],l[h]);if(f!==0)return f}return Z(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const c=Z(pe(s.latitude),pe(o.latitude));return c!==0?c:Z(pe(s.longitude),pe(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return md(r.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,h,f;const m=s.fields||{},_=o.fields||{},A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,T=(l=_.value)===null||l===void 0?void 0:l.arrayValue,D=Z(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:md(A,T)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===hn.mapValue&&o===hn.mapValue)return 0;if(s===hn.mapValue)return 1;if(o===hn.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=Z(l[m],f[m]);if(_!==0)return _;const A=In(c[l[m]],h[f[m]]);if(A!==0)return A}return Z(l.length,f.length)}(r.mapValue,e.mapValue);default:throw q()}}function fd(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Z(r,e);const t=zt(r),n=zt(e),i=Z(t.seconds,n.seconds);return i!==0?i:Z(t.nanos,n.nanos)}function md(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=In(t[i],n[i]);if(s)return s}return Z(t.length,n.length)}function $r(r){return xc(r)}function xc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=zt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return yn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return U.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=xc(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${xc(t.fields[o])}`;return i+"}"}(r.mapValue):q()}function tr(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function kc(r){return!!r&&"integerValue"in r}function ds(r){return!!r&&"arrayValue"in r}function pd(r){return!!r&&"nullValue"in r}function gd(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Eo(r){return!!r&&"mapValue"in r}function aa(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ki(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return dr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ki(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ki(r.arrayValue.values[t]);return e}return Object.assign({},r)}function hp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const dp={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Tb(r){return"nullValue"in r?wo:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?tr(vn.empty(),U.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?aa(r)?dp:{mapValue:{}}:q()}function bb(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?tr(vn.empty(),U.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?dp:"mapValue"in r?aa(r)?{mapValue:{}}:hn:q()}function _d(r,e){const t=In(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function yd(r,e){const t=In(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Eo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(t)}setAll(e){let t=ge.emptyPath(),n={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Ki(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Eo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Eo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){dr(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new Be(Ki(this.value))}}function fp(r){const e=[];return dr(r.fields,(t,n)=>{const i=new ge([t]);if(Eo(n)){const s=fp(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ot(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new me(e,0,z.min(),z.min(),z.min(),Be.empty(),0)}static newFoundDocument(e,t,n,i){return new me(e,1,t,z.min(),n,i,0)}static newNoDocument(e,t){return new me(e,2,t,z.min(),z.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new me(e,3,t,z.min(),z.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof me&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new me(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t){this.position=e,this.inclusive=t}}function vd(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=U.comparator(U.fromName(o.referenceValue),t.key):n=In(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Id(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Vt(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ab(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{}class ie extends mp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Rb(e,t,n):t==="array-contains"?new xb(e,n):t==="in"?new Ip(e,n):t==="not-in"?new kb(e,n):t==="array-contains-any"?new Cb(e,n):new ie(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Sb(e,n):new Pb(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(In(t,this.value)):t!==null&&er(this.value)===er(t)&&this.matchesComparison(In(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends mp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new le(e,t)}matches(e){return zr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zr(r){return r.op==="and"}function Cc(r){return r.op==="or"}function kl(r){return pp(r)&&zr(r)}function pp(r){for(const e of r.filters)if(e instanceof le)return!1;return!0}function Nc(r){if(r instanceof ie)return r.field.canonicalString()+r.op.toString()+$r(r.value);if(kl(r))return r.filters.map(e=>Nc(e)).join(",");{const e=r.filters.map(t=>Nc(t)).join(",");return`${r.op}(${e})`}}function gp(r,e){return r instanceof ie?function(n,i){return i instanceof ie&&n.op===i.op&&n.field.isEqual(i.field)&&Vt(n.value,i.value)}(r,e):r instanceof le?function(n,i){return i instanceof le&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,c)=>s&&gp(o,i.filters[c]),!0):!1}(r,e):void q()}function _p(r,e){const t=r.filters.concat(e);return le.create(t,r.op)}function yp(r){return r instanceof ie?function(t){return`${t.field.canonicalString()} ${t.op} ${$r(t.value)}`}(r):r instanceof le?function(t){return t.op.toString()+" {"+t.getFilters().map(yp).join(" ,")+"}"}(r):"Filter"}class Rb extends ie{constructor(e,t,n){super(e,t,n),this.key=U.fromName(n.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sb extends ie{constructor(e,t){super(e,"in",t),this.keys=vp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Pb extends ie{constructor(e,t){super(e,"not-in",t),this.keys=vp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vp(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>U.fromName(n.referenceValue))}class xb extends ie{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ds(t)&&hs(t.arrayValue,this.value)}}class Ip extends ie{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hs(this.value.arrayValue,t)}}class kb extends ie{constructor(e,t){super(e,"not-in",t)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!hs(this.value.arrayValue,t)}}class Cb extends ie{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ds(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>hs(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nb{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function Dc(r,e=null,t=[],n=[],i=null,s=null,o=null){return new Nb(r,e,t,n,i,s,o)}function nr(r){const e=B(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Nc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),xs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>$r(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>$r(n)).join(",")),e.ue=t}return e.ue}function ks(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Ab(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!gp(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Id(r.startAt,e.startAt)&&Id(r.endAt,e.endAt)}function Oo(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Lo(r,e){return r.filters.filter(t=>t instanceof ie&&t.field.isEqual(e))}function wd(r,e,t){let n=wo,i=!0;for(const s of Lo(r,e)){let o=wo,c=!0;switch(s.op){case"<":case"<=":o=Tb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=wo}_d({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];_d({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Ed(r,e,t){let n=hn,i=!0;for(const s of Lo(r,e)){let o=hn,c=!0;switch(s.op){case">=":case">":o=bb(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=hn}yd({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];yd({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wp(r,e,t,n,i,s,o,c){return new Ht(r,e,t,n,i,s,o,c)}function oi(r){return new Ht(r)}function Td(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Cl(r){return r.collectionGroup!==null}function Lr(r){const e=B(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ue(ge.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new fs(s,n))}),t.has(ge.keyField().canonicalString())||e.ce.push(new fs(ge.keyField(),n))}return e.ce}function et(r){const e=B(r);return e.le||(e.le=Db(e,Lr(r))),e.le}function Db(r,e){if(r.limitType==="F")return Dc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new fs(i.field,s)});const t=r.endAt?new wn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new wn(r.startAt.position,r.startAt.inclusive):null;return Dc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Vc(r,e){const t=r.filters.concat([e]);return new Ht(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Mo(r,e,t){return new Ht(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Cs(r,e){return ks(et(r),et(e))&&r.limitType===e.limitType}function Ep(r){return`${nr(et(r))}|lt:${r.limitType}`}function Sr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>yp(i)).join(", ")}]`),xs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>$r(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>$r(i)).join(",")),`Target(${n})`}(et(r))}; limitType=${r.limitType})`}function Ns(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):U.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Lr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,c,l){const h=vd(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Lr(n),i)||n.endAt&&!function(o,c,l){const h=vd(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Lr(n),i))}(r,e)}function Tp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function bp(r){return(e,t)=>{let n=!1;for(const i of Lr(r)){const s=Vb(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function Vb(r,e,t){const n=r.field.isKeyField()?U.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),h=c.data.field(s);return l!==null&&h!==null?In(l,h):q()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){dr(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return lp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob=new de(U.comparator);function at(){return Ob}const Ap=new de(U.comparator);function Bi(...r){let e=Ap;for(const t of r)e=e.insert(t.key,t);return e}function Rp(r){let e=Ap;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Pt(){return Hi()}function Sp(){return Hi()}function Hi(){return new xn(r=>r.toString(),(r,e)=>r.isEqual(e))}const Lb=new de(U.comparator),Mb=new ue(U.comparator);function ee(...r){let e=Mb;for(const t of r)e=e.add(t);return e}const Fb=new ue(Z);function Nl(){return Fb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ls(e)?"-0":e}}function Pp(r){return{integerValue:""+r}}function xp(r,e){return ip(e)?Pp(e):Dl(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this._=void 0}}function Ub(r,e,t){return r instanceof Gr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&oa(s)&&(s=xl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof rr?Cp(r,e):r instanceof ir?Np(r,e):function(i,s){const o=kp(i,s),c=bd(o)+bd(i.Pe);return kc(o)&&kc(i.Pe)?Pp(c):Dl(i.serializer,c)}(r,e)}function Bb(r,e,t){return r instanceof rr?Cp(r,e):r instanceof ir?Np(r,e):t}function kp(r,e){return r instanceof Wr?function(n){return kc(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Gr extends ca{}class rr extends ca{constructor(e){super(),this.elements=e}}function Cp(r,e){const t=Dp(e);for(const n of r.elements)t.some(i=>Vt(i,n))||t.push(n);return{arrayValue:{values:t}}}class ir extends ca{constructor(e){super(),this.elements=e}}function Np(r,e){let t=Dp(e);for(const n of r.elements)t=t.filter(i=>!Vt(i,n));return{arrayValue:{values:t}}}class Wr extends ca{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function bd(r){return pe(r.integerValue||r.doubleValue)}function Dp(r){return ds(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.field=e,this.transform=t}}function jb(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof rr&&i instanceof rr||n instanceof ir&&i instanceof ir?qr(n.elements,i.elements,Vt):n instanceof Wr&&i instanceof Wr?Vt(n.Pe,i.Pe):n instanceof Gr&&i instanceof Gr}(r.transform,e.transform)}class qb{constructor(e,t){this.version=e,this.transformResults=t}}class _e{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new _e}static exists(e){return new _e(void 0,e)}static updateTime(e){return new _e(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class la{}function Vp(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ci(r.key,_e.none()):new ai(r.key,r.data,_e.none());{const t=r.data,n=Be.empty();let i=new ue(ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new Qt(r.key,n,new ot(i.toArray()),_e.none())}}function $b(r,e,t){r instanceof ai?function(i,s,o){const c=i.value.clone(),l=Rd(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Qt?function(i,s,o){if(!To(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Rd(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Op(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Qi(r,e,t,n){return r instanceof ai?function(s,o,c,l){if(!To(s.precondition,o))return c;const h=s.value.clone(),f=Sd(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Qt?function(s,o,c,l){if(!To(s.precondition,o))return c;const h=Sd(s.fieldTransforms,l,o),f=o.data;return f.setAll(Op(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,o,c){return To(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function zb(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=kp(n.transform,i||null);s!=null&&(t===null&&(t=Be.empty()),t.set(n.field,s))}return t||null}function Ad(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&qr(n,i,(s,o)=>jb(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ai extends la{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qt extends la{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Op(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Rd(r,e,t){const n=new Map;$(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,Bb(o,c,t[i]))}return n}function Sd(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,Ub(s,o,e))}return n}class ci extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vl extends la{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&$b(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Sp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const l=Vp(o,c);l!==null&&n.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(t,n)=>Ad(t,n))&&qr(this.baseMutations,e.baseMutations,(t,n)=>Ad(t,n))}}class Ll{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){$(e.mutations.length===n.length);let i=function(){return Lb}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Ll(e,t,n,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,se;function Lp(r){switch(r){default:return q();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function Mp(r){if(r===void 0)return Se("GRPC error has no .code"),k.UNKNOWN;switch(r){case ke.OK:return k.OK;case ke.CANCELLED:return k.CANCELLED;case ke.UNKNOWN:return k.UNKNOWN;case ke.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case ke.INTERNAL:return k.INTERNAL;case ke.UNAVAILABLE:return k.UNAVAILABLE;case ke.UNAUTHENTICATED:return k.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case ke.NOT_FOUND:return k.NOT_FOUND;case ke.ALREADY_EXISTS:return k.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return k.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case ke.ABORTED:return k.ABORTED;case ke.OUT_OF_RANGE:return k.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return k.UNIMPLEMENTED;case ke.DATA_LOSS:return k.DATA_LOSS;default:return q()}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=new Jn([4294967295,4294967295],0);function Pd(r){const e=Fp().encode(r),t=new zm;return t.update(e),new Uint8Array(t.digest())}function xd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jn([t,n],0),new Jn([i,s],0)]}class Fl{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ji(`Invalid padding: ${t}`);if(n<0)throw new ji(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ji(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Jn.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Jn.fromNumber(n)));return i.compare(Wb)===1&&(i=new Jn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Pd(e),[n,i]=xd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Fl(s,i,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Pd(e),[n,i]=xd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Os.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Vs(z.min(),i,new de(Z),at(),ee())}}class Os{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Os(n,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Up{constructor(e,t){this.targetId=e,this.me=t}}class Bp{constructor(e,t,n=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class kd{constructor(){this.fe=0,this.ge=Nd(),this.pe=be.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),n=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:q()}}),new Os(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Nd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Kb{constructor(e){this.Le=e,this.Be=new Map,this.ke=at(),this.qe=Cd(),this.Qe=new de(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Oo(s))if(n===0){const o=new U(s.path);this.Ue(t,o,me.newNoDocument(o,z.min()))}else $(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=yn(n).toUint8Array()}catch(l){if(l instanceof up)return Dt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Fl(o,i,s)}catch(l){return Dt(l instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&Oo(c.target)){const l=new U(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,me.newNoDocument(l,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let n=ee();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Vs(e,t,this.Qe,this.ke,n);return this.ke=at(),this.qe=Cd(),this.Qe=new de(Z),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new kd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ue(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new kd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Cd(){return new de(U.comparator)}function Nd(){return new de(U.comparator)}const Hb={asc:"ASCENDING",desc:"DESCENDING"},Qb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Jb={and:"AND",or:"OR"};class Yb{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oc(r,e){return r.useProto3Json||xs(e)?e:{value:e}}function Kr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jp(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Xb(r,e){return Kr(r,e.toTimestamp())}function Pe(r){return $(!!r),z.fromTimestamp(function(t){const n=zt(t);return new ye(n.seconds,n.nanos)}(r))}function Ul(r,e){return Lc(r,e).canonicalString()}function Lc(r,e){const t=function(i){return new re(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function qp(r){const e=re.fromString(r);return $(Xp(e)),e}function ms(r,e){return Ul(r.databaseId,e.path)}function kt(r,e){const t=qp(e);if(t.get(1)!==r.databaseId.projectId)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new U(Gp(t))}function $p(r,e){return Ul(r.databaseId,e)}function zp(r){const e=qp(r);return e.length===4?re.emptyPath():Gp(e)}function Mc(r){return new re(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Gp(r){return $(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Dd(r,e,t){return{name:ms(r,e),fields:t.value.mapValue.fields}}function Wp(r,e,t){const n=kt(r,e.name),i=Pe(e.updateTime),s=e.createTime?Pe(e.createTime):z.min(),o=new Be({mapValue:{fields:e.fields}}),c=me.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Zb(r,e){return"found"in e?function(n,i){$(!!i.found),i.found.name,i.found.updateTime;const s=kt(n,i.found.name),o=Pe(i.found.updateTime),c=i.found.createTime?Pe(i.found.createTime):z.min(),l=new Be({mapValue:{fields:i.found.fields}});return me.newFoundDocument(s,o,c,l)}(r,e):"missing"in e?function(n,i){$(!!i.missing),$(!!i.readTime);const s=kt(n,i.missing),o=Pe(i.readTime);return me.newNoDocument(s,o)}(r,e):q()}function eA(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?($(f===void 0||typeof f=="string"),be.fromBase64String(f||"")):($(f===void 0||f instanceof Buffer||f instanceof Uint8Array),be.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?k.UNKNOWN:Mp(h.code);return new V(f,h.message||"")}(o);t=new Bp(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=kt(r,n.document.name),s=Pe(n.document.updateTime),o=n.document.createTime?Pe(n.document.createTime):z.min(),c=new Be({mapValue:{fields:n.document.fields}}),l=me.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new bo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=kt(r,n.document),s=n.readTime?Pe(n.readTime):z.min(),o=me.newNoDocument(i,s),c=n.removedTargetIds||[];t=new bo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=kt(r,n.document),s=n.removedTargetIds||[];t=new bo([],s,i,null)}else{if(!("filter"in e))return q();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Gb(i,s),c=n.targetId;t=new Up(c,o)}}return t}function ps(r,e){let t;if(e instanceof ai)t={update:Dd(r,e.key,e.value)};else if(e instanceof ci)t={delete:ms(r,e.key)};else if(e instanceof Qt)t={update:Dd(r,e.key,e.data),updateMask:oA(e.fieldMask)};else{if(!(e instanceof Vl))return q();t={verify:ms(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const c=o.transform;if(c instanceof Gr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof rr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ir)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Wr)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw q()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q()}(r,e.precondition)),t}function Fc(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?_e.updateTime(Pe(s.updateTime)):s.exists!==void 0?_e.exists(s.exists):_e.none()}(e.currentDocument):_e.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let l=null;if("setToServerValue"in c)$(c.setToServerValue==="REQUEST_TIME"),l=new Gr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new rr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new ir(f)}else"increment"in c?l=new Wr(o,c.increment):q();const h=ge.fromServerFormat(c.fieldPath);return new Ds(h,l)}(r,i)):[];if(e.update){e.update.name;const i=kt(r,e.update.name),s=new Be({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new ot(h.map(f=>ge.fromServerFormat(f)))}(e.updateMask);return new Qt(i,s,o,t,n)}return new ai(i,s,t,n)}if(e.delete){const i=kt(r,e.delete);return new ci(i,t)}if(e.verify){const i=kt(r,e.verify);return new Vl(i,t)}return q()}function tA(r,e){return r&&r.length>0?($(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?Pe(i.updateTime):Pe(s);return o.isEqual(z.min())&&(o=Pe(s)),new qb(o,i.transformResults||[])}(t,e))):[]}function Kp(r,e){return{documents:[$p(r,e.path)]}}function Hp(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=$p(r,i);const s=function(h){if(h.length!==0)return Yp(le.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Pr(_.field),direction:rA(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Oc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Qp(r){let e=zp(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){$(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const _=Jp(m);return _ instanceof le&&kl(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(T){return new fs(xr(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,xs(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,A=m.values||[];return new wn(A,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,A=m.values||[];return new wn(A,_)}(t.endAt)),wp(e,i,o,s,c,"F",l,h)}function nA(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=xr(t.unaryFilter.field);return ie.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=xr(t.unaryFilter.field);return ie.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=xr(t.unaryFilter.field);return ie.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xr(t.unaryFilter.field);return ie.create(o,"!=",{nullValue:"NULL_VALUE"});default:return q()}}(r):r.fieldFilter!==void 0?function(t){return ie.create(xr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return q()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return le.create(t.compositeFilter.filters.map(n=>Jp(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return q()}}(t.compositeFilter.op))}(r):q()}function rA(r){return Hb[r]}function iA(r){return Qb[r]}function sA(r){return Jb[r]}function Pr(r){return{fieldPath:r.canonicalString()}}function xr(r){return ge.fromServerFormat(r.fieldPath)}function Yp(r){return r instanceof ie?function(t){if(t.op==="=="){if(gd(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NAN"}};if(pd(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(gd(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NAN"}};if(pd(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(t.field),op:iA(t.op),value:t.value}}}(r):r instanceof le?function(t){const n=t.getFilters().map(i=>Yp(i));return n.length===1?n[0]:{compositeFilter:{op:sA(t.op),filters:n}}}(r):q()}function oA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xp(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t,n,i,s=z.min(),o=z.min(),c=be.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this.ct=e}}function aA(r,e){let t;if(e.document)t=Wp(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=U.fromSegments(e.noDocument.path),i=or(e.noDocument.readTime);t=me.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return q();{const n=U.fromSegments(e.unknownDocument.path),i=or(e.unknownDocument.version);t=me.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new ye(i[0],i[1]);return z.fromTimestamp(s)}(e.readTime)),t}function Vd(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Fo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:ms(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Kr(s,o.version.toTimestamp()),createTime:Kr(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:sr(e.version)};else{if(!e.isUnknownDocument())return q();n.unknownDocument={path:t.path.toArray(),version:sr(e.version)}}return n}function Fo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function sr(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function or(r){const e=new ye(r.seconds,r.nanoseconds);return z.fromTimestamp(e)}function jn(r,e){const t=(e.baseMutations||[]).map(s=>Fc(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Fc(r.ct,s)),i=ye.fromMillis(e.localWriteTimeMs);return new Ol(e.batchId,i,t,n)}function qi(r){const e=or(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?or(r.lastLimboFreeSnapshotVersion):z.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return $(s.documents.length===1),et(oi(zp(s.documents[0])))}(r.query):function(s){return et(Qp(s))}(r.query),new Bt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,be.fromBase64String(r.resumeToken))}function eg(r,e){const t=sr(e.snapshotVersion),n=sr(e.lastLimboFreeSnapshotVersion);let i;i=Oo(e.target)?Kp(r.ct,e.target):Hp(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:nr(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function Bl(r){const e=Qp({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Mo(e,e.limit,"L"):e}function cc(r,e){return new Ml(e.largestBatchId,Fc(r.ct,e.overlayMutation))}function Od(r,e){const t=e.path.lastSegment();return[r,Ze(e.path.popLast()),t]}function Ld(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:sr(n.readTime),documentKey:Ze(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{getBundleMetadata(e,t){return Md(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:or(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Md(e).put(function(i){return{bundleId:i.id,createTime:sr(Pe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Fd(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:Bl(s.bundledQuery),readTime:or(s.readTime)}}(n)})}saveNamedQuery(e,t){return Fd(e).put(function(i){return{name:i.name,readTime:sr(Pe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Md(r){return De(r,"bundles")}function Fd(r){return De(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new ua(e,n)}getOverlay(e,t){return ki(e).get(Od(this.userId,t)).next(n=>n?cc(this.serializer,n):null)}getOverlays(e,t){const n=Pt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const c=new Ml(t,o);i.push(this.ht(e,c))}),P.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(Ze(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(ki(e).j("collectionPathOverlayIndex",c))}),P.waitFor(s)}getOverlaysForCollection(e,t,n){const i=Pt(),s=Ze(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ki(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=cc(this.serializer,l);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=Pt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ki(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const m=cc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return ki(e).put(function(i,s,o){const[c,l,h]=Od(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ps(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ki(r){return De(r,"documentOverlays")}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{Pt(e){return De(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?be.fromUint8Array(n):be.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(pe(e.integerValue));else if("doubleValue"in e){const n=pe(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),ls(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=zt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(yn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?hp(e)?this.dt(t,Number.MAX_SAFE_INTEGER):aa(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):q()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const s=e.fields||{};this.dt(t,53);const o="value",c=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(pe(c)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),U.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}qn.vt=new qn;function uA(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Ud(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=uA(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class hA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),n=Ud(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=Ud(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class dA{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class fA{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Ci{constructor(){this.jt=new hA,this.Ht=new dA(this.jt),this.Jt=new fA(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new $n(this.indexId,this.documentKey,this.arrayValue,n)}}function sn(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Bd(r.arrayValue,e.arrayValue),t!==0?t:(t=Bd(r.directionalValue,e.directionalValue),t!==0?t:U.comparator(r.documentKey,e.documentKey)))}function Bd(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.Xt=new ue((t,n)=>ge.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if($(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Sc(e);if(t!==void 0&&!this.sn(t))return!1;const n=Un(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const l=n[s];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new ue(ge.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new vo(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new vo(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new vo(n.field,n.dir==="asc"?0:1)));return new Vo(Vo.UNKNOWN_ID,this.collectionId,t,cs.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(r){var e,t;if($(r instanceof ie||r instanceof le),r instanceof ie){if(r instanceof Ip){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>ie.create(r.field,"==",s)))||[];return le.create(i,"or")}return r}const n=r.filters.map(i=>tg(i));return le.create(n,r.op)}function mA(r){if(r.getFilters().length===0)return[];const e=jc(tg(r));return $(ng(e)),Uc(e)||Bc(e)?[e]:e.getFilters()}function Uc(r){return r instanceof ie}function Bc(r){return r instanceof le&&kl(r)}function ng(r){return Uc(r)||Bc(r)||function(t){if(t instanceof le&&Cc(t)){for(const n of t.getFilters())if(!Uc(n)&&!Bc(n))return!1;return!0}return!1}(r)}function jc(r){if($(r instanceof ie||r instanceof le),r instanceof ie)return r;if(r.filters.length===1)return jc(r.filters[0]);const e=r.filters.map(n=>jc(n));let t=le.create(e,r.op);return t=Uo(t),ng(t)?t:($(t instanceof le),$(zr(t)),$(t.filters.length>1),t.filters.reduce((n,i)=>jl(n,i)))}function jl(r,e){let t;return $(r instanceof ie||r instanceof le),$(e instanceof ie||e instanceof le),t=r instanceof ie?e instanceof ie?function(i,s){return le.create([i,s],"and")}(r,e):qd(r,e):e instanceof ie?qd(e,r):function(i,s){if($(i.filters.length>0&&s.filters.length>0),zr(i)&&zr(s))return _p(i,s.getFilters());const o=Cc(i)?i:s,c=Cc(i)?s:i,l=o.filters.map(h=>jl(h,c));return le.create(l,"or")}(r,e),Uo(t)}function qd(r,e){if(zr(e))return _p(e,r.getFilters());{const t=e.filters.map(n=>jl(r,n));return le.create(t,"or")}}function Uo(r){if($(r instanceof ie||r instanceof le),r instanceof ie)return r;const e=r.getFilters();if(e.length===1)return Uo(e[0]);if(pp(r))return r;const t=e.map(i=>Uo(i)),n=[];return t.forEach(i=>{i instanceof ie?n.push(i):i instanceof le&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:le.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.un=new ql}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(ft.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(ft.min())}updateCollectionGroup(e,t,n){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class ql{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ue(re.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ue(re.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Uint8Array(0);class gA{constructor(e,t){this.databaseId=t,this.cn=new ql,this.ln=new xn(n=>nr(n),(n,i)=>ks(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:n,parent:Ze(i)};return $d(e).put(s)}return P.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Xm(t),""],!1,!0);return $d(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(St(o.parent))}return n})}addFieldIndex(e,t){const n=Ni(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=br(e);return s.next(c=>{o.put(Ld(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=Ni(e),i=br(e),s=Tr(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ni(e),n=Tr(e),i=br(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return P.forEach(this.hn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new jd(n).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=Tr(e);let i=!0;const s=new Map;return P.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=ee();const c=[];return P.forEach(s,(l,h)=>{O("IndexedDbIndexManager",`Using index ${function(G){return`id=${G.indexId}|cg=${G.collectionGroup}|f=${G.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(l)} to execute ${nr(t)}`);const f=function(G,W){const X=Sc(W);if(X===void 0)return null;for(const J of Lo(G,X.fieldPath))switch(J.op){case"array-contains-any":return J.value.arrayValue.values||[];case"array-contains":return[J.value]}return null}(h,l),m=function(G,W){const X=new Map;for(const J of Un(W))for(const I of Lo(G,J.fieldPath))switch(I.op){case"==":case"in":X.set(J.fieldPath.canonicalString(),I.value);break;case"not-in":case"!=":return X.set(J.fieldPath.canonicalString(),I.value),Array.from(X.values())}return null}(h,l),_=function(G,W){const X=[];let J=!0;for(const I of Un(W)){const g=I.kind===0?wd(G,I.fieldPath,G.startAt):Ed(G,I.fieldPath,G.startAt);X.push(g.value),J&&(J=g.inclusive)}return new wn(X,J)}(h,l),A=function(G,W){const X=[];let J=!0;for(const I of Un(W)){const g=I.kind===0?Ed(G,I.fieldPath,G.endAt):wd(G,I.fieldPath,G.endAt);X.push(g.value),J&&(J=g.inclusive)}return new wn(X,J)}(h,l),T=this.In(l,h,_),D=this.In(l,h,A),N=this.Tn(l,h,m),j=this.En(l.indexId,f,T,_.inclusive,D,A.inclusive,N);return P.forEach(j,K=>n.G(K,t.limit).next(G=>{G.forEach(W=>{const X=U.fromSegments(W.documentKey);o.has(X)||(o=o.add(X),c.push(X))})}))}).next(()=>c)}return P.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=mA(le.create(e.filters,"and")).map(n=>Dc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,i,s,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,s.length),h=l/(t!=null?t.length:1),f=[];for(let m=0;m<l;++m){const _=t?this.dn(t[m/h]):lo,A=this.An(e,_,n[m%h],i),T=this.Rn(e,_,s[m%h],o),D=c.map(N=>this.An(e,_,N,!0));f.push(...this.createRange(A,T,D))}return f}An(e,t,n,i){const s=new $n(e,U.empty(),t,n);return i?s:s.Zt()}Rn(e,t,n,i){const s=new $n(e,U.empty(),t,n);return i?s.Zt():s}Pn(e,t){const n=new jd(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const i=this.hn(t);return P.forEach(i,s=>this.Pn(e,s).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new ue(ge.comparator),f=!1;for(const m of l.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of l.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}Vn(e,t){const n=new Ci;for(const i of Un(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Yt(i.kind);qn.vt.It(s,o)}return n.zt()}dn(e){const t=new Ci;return qn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Ci;return qn.vt.It(tr(this.databaseId,t),n.Yt(function(s){const o=Un(s);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let i=[];i.push(new Ci);let s=0;for(const o of Un(e)){const c=n[s++];for(const l of i)if(this.fn(t,o.fieldPath)&&ds(c))i=this.gn(i,o,c);else{const h=l.Yt(o.kind);qn.vt.It(c,h)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const l=new Ci;l.seed(c.zt()),qn.vt.It(o,l.Yt(t.kind)),s.push(l)}return s}fn(e,t){return!!e.filters.find(n=>n instanceof ie&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Ni(e),i=br(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return P.forEach(s,c=>i.get([c.indexId,this.uid]).next(l=>{o.push(function(f,m){const _=m?new cs(m.sequenceNumber,new ft(or(m.readTime),new U(St(m.documentKey)),m.largestBatchId)):cs.empty(),A=f.fields.map(([T,D])=>new vo(ge.fromServerFormat(T),D));return new Vo(f.indexId,f.collectionGroup,A,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=Ni(e),s=br(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>s.put(Ld(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return P.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),P.forEach(c,l=>this.wn(e,i,l).next(h=>{const f=this.Sn(s,l);return h.isEqual(f)?P.resolve():this.bn(e,s,l,h,f)}))))})}Dn(e,t,n,i){return Tr(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return Tr(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=Tr(e);let s=new ue(sn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{s=s.add(new $n(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Sn(e,t){let n=new ue(sn);const i=this.Vn(t,e);if(i==null)return n;const s=Sc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(ds(o))for(const c of o.arrayValue.values||[])n=n.add(new $n(t.indexId,e.key,this.dn(c),i))}else n=n.add(new $n(t.indexId,e.key,lo,i));return n}bn(e,t,n,i,s){O("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,m,_){const A=l.getIterator(),T=h.getIterator();let D=Er(A),N=Er(T);for(;D||N;){let j=!1,K=!1;if(D&&N){const G=f(D,N);G<0?K=!0:G>0&&(j=!0)}else D!=null?K=!0:j=!0;j?(m(N),N=Er(T)):K?(_(D),D=Er(A)):(D=Er(A),N=Er(T))}}(i,s,sn,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),P.waitFor(o)}yn(e){let t=1;return br(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>sn(o,c)).filter((o,c,l)=>!c||sn(o,l[c-1])!==0);const i=[];i.push(e);for(const o of n){const c=sn(o,e),l=sn(o,t);if(c===0)i[0]=e.Zt();else if(c>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,lo,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,lo,[]];s.push(IDBKeyRange.bound(c,l))}return s}Cn(e,t){return sn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(zd)}getMinOffset(e,t){return P.mapArray(this.hn(t),n=>this.Pn(e,n).next(i=>i||q())).next(zd)}}function $d(r){return De(r,"collectionParents")}function Tr(r){return De(r,"indexEntries")}function Ni(r){return De(r,"indexConfiguration")}function br(r){return De(r,"indexState")}function zd(r){$(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Rl(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new ft(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class it{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,m,_)=>(c++,_.delete()));s.push(l.next(()=>{$(c===1)}));const h=[];for(const f of t.mutations){const m=sp(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return P.waitFor(s).next(()=>h)}function Bo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw q();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(41943040,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);class ha{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ha(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return on(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=kr(e),o=on(e);return o.add({}).next(c=>{$(typeof c=="number");const l=new Ol(c,t,n,i),h=function(A,T,D){const N=D.baseMutations.map(K=>ps(A.ct,K)),j=D.mutations.map(K=>ps(A.ct,K));return{userId:T,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:N,mutations:j}}(this.serializer,this.userId,l),f=[];let m=new ue((_,A)=>Z(_.canonicalString(),A.canonicalString()));for(const _ of i){const A=sp(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(A,nb))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return on(e).get(t).next(n=>n?($(n.userId===this.userId),jn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?P.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return on(e).J({index:"userMutationsIndex",range:i},(o,c,l)=>{c.userId===this.userId&&($(c.batchId>=n),s=jn(this.serializer,c)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return on(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return on(e).U("userMutationsIndex",t).next(n=>n.map(i=>jn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Io(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return kr(e).J({range:i},(o,c,l)=>{const[h,f,m]=o,_=St(f);if(h===this.userId&&t.path.isEqual(_))return on(e).get(m).next(A=>{if(!A)throw q();$(A.userId===this.userId),s.push(jn(this.serializer,A))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ue(Z);const i=[];return t.forEach(s=>{const o=Io(this.userId,s.path),c=IDBKeyRange.lowerBound(o),l=kr(e).J({range:c},(h,f,m)=>{const[_,A,T]=h,D=St(A);_===this.userId&&s.path.isEqual(D)?n=n.add(T):m.done()});i.push(l)}),P.waitFor(i).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Io(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new ue(Z);return kr(e).J({range:o},(l,h,f)=>{const[m,_,A]=l,T=St(_);m===this.userId&&n.isPrefixOf(T)?T.length===i&&(c=c.add(A)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(on(e).get(s).next(o=>{if(o===null)throw q();$(o.userId===this.userId),n.push(jn(this.serializer,o))}))}),P.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return rg(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),P.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return kr(e).J({range:n},(s,o,c)=>{if(s[0]===this.userId){const l=St(s[1]);i.push(l)}else c.done()}).next(()=>{$(i.length===0)})})}containsKey(e,t){return ig(e,this.userId,t)}Nn(e){return sg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ig(r,e,t){const n=Io(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return kr(r).J({range:s,H:!0},(c,l,h)=>{const[f,m,_]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function on(r){return De(r,"mutations")}function kr(r){return De(r,"documentMutations")}function sg(r){return De(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ar(0)}static kn(){return new ar(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new ar(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>z.fromTimestamp(new ye(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ar(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>($(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return Ar(e).J((o,c)=>{const l=qi(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(s)).next(()=>i)}forEachTarget(e,t){return Ar(e).J((n,i)=>{const s=qi(i);t(s)})}qn(e){return Wd(e).get("targetGlobalKey").next(t=>($(t!==null),t))}Qn(e,t){return Wd(e).put("targetGlobalKey",t)}Kn(e,t){return Ar(e).put(eg(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=nr(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return Ar(e).J({range:i,index:"queryTargetsIndex"},(o,c,l)=>{const h=qi(c);ks(t,h.target)&&(s=h,l.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=cn(e);return t.forEach(o=>{const c=Ze(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))}),P.waitFor(i)}removeMatchingKeys(e,t,n){const i=cn(e);return P.forEach(t,s=>{const o=Ze(s.path);return P.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=cn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=cn(e);let s=ee();return i.J({range:n,H:!0},(o,c,l)=>{const h=St(o[1]),f=new U(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=Ze(t.path),i=IDBKeyRange.bound([n],[Xm(n)],!1,!0);let s=0;return cn(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],l,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return Ar(e).get(t).next(n=>n?qi(n):null)}}function Ar(r){return De(r,"targets")}function Wd(r){return De(r,"targetGlobal")}function cn(r){return De(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd([r,e],[t,n]){const i=Z(r,t);return i===0?Z(e,n):i}class yA{constructor(e){this.Un=e,this.buffer=new ue(Kd),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Kd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class vA{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){O("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pn(t)?O("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Sn(t)}await this.Hn(3e5)})}}class IA{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return P.resolve(st.oe);const n=new yA(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Gd)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gd):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,c=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),Rr()<=ne.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function wA(r,e){return new IA(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e,t){this.db=e,this.garbageCollector=wA(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,i)=>t(i))}addReference(e,t,n){return uo(e,n)}removeReference(e,t,n){return uo(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return uo(e,t)}nr(e,t){return function(i,s){let o=!1;return sg(i).Y(c=>ig(i,c,s).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,z.min()),cn(e).delete(function(m){return[0,Ze(m.path)]}(o))))});i.push(l)}}).next(()=>P.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return uo(e,t)}tr(e,t){const n=cn(e);let i,s=st.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(s!==st.oe&&t(new U(St(i)),s),s=h,i=l):s=st.oe}).next(()=>{s!==st.oe&&t(new U(St(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function uo(r,e){return cn(r).put(function(n,i){return{targetId:0,path:Ze(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(){this.changes=new xn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,me.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?P.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Mn(e).put(n)}removeEntry(e,t,n){return Mn(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Fo(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=me.newInvalidDocument(t);return Mn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Di(t))},(i,s)=>{n=this.ir(t,s)}).next(()=>n)}sr(e,t){let n={size:0,document:me.newInvalidDocument(t)};return Mn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Di(t))},(i,s)=>{n={document:this.ir(t,s),size:Bo(s)}}).next(()=>n)}getEntries(e,t){let n=at();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);n=n.insert(i,o)}).next(()=>n)}ar(e,t){let n=at(),i=new de(U.comparator);return this._r(e,t,(s,o)=>{const c=this.ir(s,o);n=n.insert(s,c),i=i.insert(s,Bo(o))}).next(()=>({documents:n,ur:i}))}_r(e,t,n){if(t.isEmpty())return P.resolve();let i=new ue(Jd);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Di(i.first()),Di(i.last())),o=i.getIterator();let c=o.getNext();return Mn(e).J({index:"documentKeyIndex",range:s},(l,h,f)=>{const m=U.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Jd(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Di(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Fo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Mn(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=at();for(const m of h){const _=this.ir(U.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(Ns(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=at();const o=Qd(t,n),c=Qd(t,ft.max());return Mn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const m=this.ir(U.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new bA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Hd(e).get("remoteDocumentGlobalKey").next(t=>($(!!t),t))}rr(e,t){return Hd(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=aA(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(z.min())))return n}return me.newInvalidDocument(e)}}function ag(r){return new TA(r)}class bA extends og{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new xn(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new ue((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const l=Vd(this.cr.serializer,o);i=i.add(s.path.popLast());const h=Bo(l);n+=h-c.size,t.push(this.cr.addEntry(e,s,l))}else if(n-=c.size,this.trackRemovals){const l=Vd(this.cr.serializer,o.convertToNoDocument(z.min()));t.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,n)),P.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function Hd(r){return De(r,"remoteDocumentGlobal")}function Mn(r){return De(r,"remoteDocumentsV14")}function Di(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Qd(r,e){const t=e.documentKey.path.toArray();return[r,Fo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Jd(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=Z(t[s],n[s]),i)return i;return i=Z(t.length,n.length),i||(i=Z(t[t.length-2],n[n.length-2]),i||Z(t[t.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Qi(n.mutation,i,ot.empty(),ye.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ee()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ee()){const i=Pt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Bi();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=Pt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ee()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,i){let s=at();const o=Hi(),c=function(){return Hi()}();return t.forEach((l,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Qt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Qi(f.mutation,h,f.mutation.getFieldMask(),ye.now())):o.set(h.key,ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new AA(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Hi();let i=new de((o,c)=>o-c),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||ot.empty();f=c.applyToLocalView(h,f),n.set(l,f);const m=(i.get(c.batchId)||ee()).add(l);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=Sp();f.forEach(_=>{if(!s.has(_)){const A=Vp(t.get(_),n.get(_));A!==null&&m.set(_,A),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return P.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Cl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):P.resolve(Pt());let c=-1,l=s;return o.next(h=>P.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,ee())).next(f=>({batchId:c,changes:Rp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(n=>{let i=Bi();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Bi();return this.indexManager.getCollectionParents(e,s).next(c=>P.forEach(c,l=>{const h=function(m,_){return new Ht(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,me.newInvalidDocument(f)))});let c=Bi();return o.forEach((l,h)=>{const f=s.get(l);f!==void 0&&Qi(f.mutation,h,ot.empty(),ye.now()),Ns(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Pe(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:Bl(i.bundledQuery),readTime:Pe(i.readTime)}}(t)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.overlays=new de(U.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Pt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),P.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),P.resolve()}getOverlaysForCollection(e,t,n){const i=Pt(),s=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>n&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new de((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=Pt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Pt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return P.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Ml(t,n));let s=this.Ir.get(t);s===void 0&&(s=ee(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.Tr=new ue(Oe.Er),this.dr=new ue(Oe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Oe(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Oe(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new U(new re([])),n=new Oe(t,e),i=new Oe(t,e+1),s=[];return this.dr.forEachInRange([n,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new U(new re([])),n=new Oe(t,e),i=new Oe(t,e+1);let s=ee();return this.dr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Oe(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Oe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return U.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new ue(Oe.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ol(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.br=this.br.add(new Oe(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Oe(t,0),i=new Oe(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],o=>{const c=this.Dr(o.wr);s.push(c)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ue(Z);return t.forEach(i=>{const s=new Oe(i,0),o=new Oe(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],c=>{n=n.add(c.wr)})}),P.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;U.isDocumentKey(s)||(s=s.child(""));const o=new Oe(new U(s),0);let c=new ue(Z);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.wr)),!0)},o),P.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){$(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return P.forEach(t.mutations,i=>{const s=new Oe(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Oe(t,0),i=this.br.firstAfterOrEqual(n);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.Mr=e,this.docs=function(){return new de(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return P.resolve(n?n.document.mutableCopy():me.newInvalidDocument(t))}getEntries(e,t){let n=at();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():me.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=at();const o=t.path,c=new U(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Rl(ep(f),n)<=0||(i.has(f.key)||Ns(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,t,n,i){q()}Or(e,t){return P.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new CA(this)}getSize(e){return P.resolve(this.size)}}class CA extends og{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.persistence=e,this.Nr=new xn(t=>nr(t),ks),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $l,this.targetCount=0,this.kr=ar.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new ar(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return P.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),P.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return P.resolve(n)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new st(0),this.Kr=!1,this.Kr=!0,this.$r=new PA,this.referenceDelegate=e(this),this.Ur=new NA(this),this.indexManager=new pA,this.remoteDocumentCache=function(i){return new kA(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Zp(t),this.Gr=new RA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new SA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new xA(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);const i=new DA(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return P.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class DA extends np{constructor(e){super(),this.currentSequenceNumber=e}}class da{constructor(e){this.persistence=e,this.Jr=new $l,this.Yr=null}static Zr(e){return new da(e)}get Xr(){if(this.Yr)return this.Yr;throw q()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),P.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,n=>{const i=U.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.serializer=e}O(e,t,n,i){const s=new sa("createOrUpgrade",t);n<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ud,{unique:!0}),l.createObjectStore("documentMutations")}(e),Yd(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=P.resolve();return n<3&&i>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Yd(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ud,{unique:!0});const m=h.store("mutations"),_=f.map(A=>m.put(A));return P.waitFor(_)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.ni(s))),n<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),n<7&&i>=7&&(o=o.next(()=>this.ii(s))),n<8&&i>=8&&(o=o.next(()=>this.si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.oi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:mb});h.createIndex("collectionPathOverlayIndex",pb,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",gb,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:rb});h.createIndex("documentKeyIndex",ib),h.createIndex("collectionGroupIndex",sb)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),n<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:ub}).createIndex("sequenceNumberIndex",hb,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:db}).createIndex("documentKeyIndex",fb,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Bo(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>P.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>P.forEach(c,l=>{$(l.userId===s.userId);const h=jn(this.serializer,l);return rg(e,s.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,c)=>{const l=new re(o),h=function(m){return[0,Ze(m)]}(l);s.push(t.get(h).next(f=>f?P.resolve():(m=>t.put({targetId:0,path:Ze(m),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:lb});const n=t.store("collectionParents"),i=new ql,s=o=>{if(i.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Ze(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new re(o);return s(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=St(c);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,i)=>{const s=qi(i),o=eg(this.serializer,s);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const c=t.store("remoteDocumentsV14"),l=function(m){return m.document?new U(re.fromString(m.document.name).popFirst(5)):m.noDocument?U.fromSegments(m.noDocument.path):m.unknownDocument?U.fromSegments(m.unknownDocument.path):q()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>P.waitFor(i))}ai(e,t){const n=t.store("mutations"),i=ag(this.serializer),s=new lg(da.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:ee();jn(this.serializer,l).keys().forEach(m=>f=f.add(m)),c.set(l.userId,f)}),P.forEach(c,(l,h)=>{const f=new Le(h),m=ua.lt(this.serializer,f),_=s.getIndexManager(f),A=ha.lt(f,this.serializer,_,s.referenceDelegate);return new cg(i,A,m,_).recalculateAndSaveOverlaysForDocumentKeys(new Pc(t,st.oe),l).next()})})}}function Yd(r){r.createObjectStore("targetDocuments",{keyPath:ab}).createIndex("documentTargetsIndex",cb,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ob,{unique:!0}),r.createObjectStore("targetGlobal")}const lc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class zl{constructor(e,t,n,i,s,o,c,l,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=s,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!zl.D())throw new V(k.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new EA(this,i),this.Ai=t+"main",this.serializer=new Zp(l),this.Ri=new xt(this.Ai,this.hi,new VA(this.serializer)),this.$r=new lA,this.Ur=new _A(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ag(this.serializer),this.Gr=new cA,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Se("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(k.FAILED_PRECONDITION,lc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new st(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ho(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Pn(e))return O("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Vi(e).get("owner").next(t=>P.resolve(this.vi(t)))}Ci(e){return ho(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=De(t,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return P.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?P.resolve(!0):Vi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new V(k.FAILED_PRECONDITION,lc);return!1}}return!(!this.networkEnabled||!this.inForeground)||ho(e).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&O("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Pc(e,st.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ho(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return ha.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new gA(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ua.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){O("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===17?vb:l===16?yb:l===15?Pl:l===14?cp:l===13?ap:l===12?_b:l===11?op:void q()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,c=>(o=new Pc(c,this.Qr?this.Qr.next():st.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Se(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new V(k.FAILED_PRECONDITION,tp);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Vi(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(k.FAILED_PRECONDITION,lc)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Vi(e).put("owner",t)}static D(){return xt.D()}bi(e){const t=Vi(e);return t.get("owner").next(n=>this.vi(n)?(O("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):P.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Se(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Nf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return O("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Se("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Se("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Vi(r){return De(r,"owner")}function ho(r){return De(r,"clientMetadata")}function Gl(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Wl(e,t.fromCache,n,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nf()?8:rp(Ie())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new OA;return this.Xi(e,t,o).next(c=>{if(s.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(Rr()<=ne.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Rr()<=ne.DEBUG&&O("QueryEngine","Query:",Sr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Rr()<=ne.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,et(t))):P.resolve())}Yi(e,t){if(Td(t))return P.resolve(null);let n=et(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Mo(t,null,"F"),n=et(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,Mo(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,i){return Td(t)||i.isEqual(z.min())?P.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const o=this.ts(t,s);return this.ns(t,o,n,i)?P.resolve(null):(Rr()<=ne.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sr(t)),this.rs(e,o,t,Zm(i,-1)).next(c=>c))})}ts(e,t){let n=new ue(bp(e));return t.forEach((i,s)=>{Ns(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return Rr()<=ne.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Sr(t)),this.Ji.getDocumentsMatchingQuery(e,t,ft.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new de(Z),this._s=new xn(s=>nr(s),ks),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function hg(r,e,t,n){return new LA(r,e,t,n)}async function dg(r,e){const t=B(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],c=[];let l=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function MA(r,e){const t=B(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const m=h.batch,_=m.keys();let A=P.resolve();return _.forEach(T=>{A=A.next(()=>f.getEntry(l,T)).next(D=>{const N=h.docVersions.get(T);$(N!==null),D.version.compareTo(N)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function fg(r){const e=B(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function FA(r,e){const t=B(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(be.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,n)),i=i.insert(m,A),function(D,N,j){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(_,A,f)&&c.push(t.Ur.updateTargetData(s,A))});let l=at(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(mg(s,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(z.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return P.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(t.os=i,s))}function mg(r,e,t){let n=ee(),i=ee();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=at();return t.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(z.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function UA(r,e){const t=B(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Hr(r,e){const t=B(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,P.resolve(i)):t.Ur.allocateTargetId(n).next(o=>(i=new Bt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Qr(r,e,t){const n=B(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pn(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function jo(r,e,t){const n=B(r);let i=z.min(),s=ee();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const m=B(l),_=m._s.get(f);return _!==void 0?P.resolve(m.os.get(_)):m.Ur.getTargetData(h,f)}(n,o,et(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?i:z.min(),t?s:ee())).next(c=>(_g(n,Tp(e),c),{documents:c,Ts:s})))}function pg(r,e){const t=B(r),n=B(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function gg(r,e){const t=B(r),n=t.us.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Zm(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(_g(t,e,i),i))}function _g(r,e,t){let n=r.us.get(e)||z.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}async function BA(r,e,t,n){const i=B(r);let s=ee(),o=at();for(const h of t){const f=e.Es(h.metadata.name);h.document&&(s=s.add(f));const m=e.ds(h);m.setReadTime(e.As(h.metadata.readTime)),o=o.insert(f,m)}const c=i.cs.newChangeBuffer({trackRemovals:!0}),l=await Hr(i,function(f){return et(oi(re.fromString(`__bundle__/docs/${f}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",h=>mg(h,c,o).next(f=>(c.apply(h),f)).next(f=>i.Ur.removeMatchingKeysForTargetId(h,l.targetId).next(()=>i.Ur.addMatchingKeys(h,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(h,f.Ps,f.Is)).next(()=>f.Ps)))}async function jA(r,e,t=ee()){const n=await Hr(r,et(Bl(e.bundledQuery))),i=B(r);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Pe(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const c=n.withResumeToken(be.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(c.targetId,c),i.Ur.updateTargetData(s,c).next(()=>i.Ur.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,n.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Xd(r,e){return`firestore_clients_${r}_${e}`}function Zd(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function uc(r,e){return`firestore_targets_${r}_${e}`}class qo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new V(i.error.code,i.error.message))),o?new qo(e,t,i.state,s):(Se("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ji{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new V(n.error.code,n.error.message))),s?new Ji(e,n.state,i):(Se("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $o{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Nl();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=ip(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new $o(e,s):(Se("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Kl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Kl(t.clientId,t.onlineState):(Se("SharedClientState",`Failed to parse online state: ${e}`),null)}}class qc{constructor(){this.activeTargetIds=Nl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hc{constructor(e,t,n,i,s){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new de(Z),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Xd(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new qc),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const i=this.getItem(Xd(this.persistenceKey,n));if(i){const s=$o.Rs(n,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(uc(this.persistenceKey,e));if(i){const s=Ji.Rs(e,i);s&&(n=s.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(uc(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return O("SharedClientState","READ",e,t),t}setItem(e,t){O("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){O("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(O("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Se("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(s){let o=st.oe;if(s!=null)try{const c=JSON.parse(s);$(typeof c=="number"),o=c}catch(c){Se("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==st.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new qo(this.currentUser,e,t,n),s=Zd(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=Zd(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=uc(this.persistenceKey,e),s=new Ji(e,t,n);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return $o.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return qo.Rs(new Le(s),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return Ji.Rs(i,t)}Ls(e){return Kl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);O("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(n),o=[],c=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Nl();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class yg{constructor(){this.so=new qc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new qc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo=null;function dc(){return fo===null?fo=function(){return 268435456+Math.round(2147483648*Math.random())}():fo++,"0x"+fo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class GA extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,o){const c=dc(),l=this.xo(t,n.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,l,h,i).then(f=>(O("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Dt("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(t,n,i,s,o,c){return this.Mo(t,n,i,s,o)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,n){const i=$A[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=dc();return new Promise((o,c)=>{const l=new Gm;l.setWithCredentials(!0),l.listenOnce(Wm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yo.NO_ERROR:const f=l.getResponseJson();O(We,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case yo.TIMEOUT:O(We,`RPC '${e}' ${s} timed out`),c(new V(k.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const m=l.getStatus();if(O(We,`RPC '${e}' ${s} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const T=function(N){const j=N.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(j)>=0?j:k.UNKNOWN}(A.status);c(new V(T,A.message))}else c(new V(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new V(k.UNAVAILABLE,"Connection failed."));break;default:q()}}finally{O(We,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);O(We,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=dc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qm(),c=Hm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=s.join("");O(We,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=o.createWebChannel(f,l);let _=!1,A=!1;const T=new zA({Io:N=>{A?O(We,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(_||(O(We,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),O(We,`RPC '${e}' stream ${i} sending:`,N),m.send(N))},To:()=>m.close()}),D=(N,j,K)=>{N.listen(j,G=>{try{K(G)}catch(W){setTimeout(()=>{throw W},0)}})};return D(m,Ui.EventType.OPEN,()=>{A||(O(We,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),D(m,Ui.EventType.CLOSE,()=>{A||(A=!0,O(We,`RPC '${e}' stream ${i} transport closed`),T.So())}),D(m,Ui.EventType.ERROR,N=>{A||(A=!0,Dt(We,`RPC '${e}' stream ${i} transport errored:`,N),T.So(new V(k.UNAVAILABLE,"The operation could not be completed")))}),D(m,Ui.EventType.MESSAGE,N=>{var j;if(!A){const K=N.data[0];$(!!K);const G=K,W=G.error||((j=G[0])===null||j===void 0?void 0:j.error);if(W){O(We,`RPC '${e}' stream ${i} received error:`,W);const X=W.status;let J=function(y){const w=ke[y];if(w!==void 0)return Mp(w)}(X),I=W.message;J===void 0&&(J=k.INTERNAL,I="Unknown error status: "+X+" with message "+W.message),A=!0,T.So(new V(J,I)),m.close()}else O(We,`RPC '${e}' stream ${i} received:`,K),T.bo(K)}}),D(c,Km.STAT_EVENT,N=>{N.stat===Rc.PROXY?O(We,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Rc.NOPROXY&&O(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(){return typeof window<"u"?window:null}function Ao(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(r){return new Yb(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t,n,i,s,o,c,l){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Hl(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(Se(t.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new V(k.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WA extends Ig{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=eA(this.serializer,e),n=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?Pe(o.readTime):z.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Mc(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=Oo(l)?{documents:Kp(s,l)}:{query:Hp(s,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=jp(s,o.resumeToken);const h=Oc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(z.min())>0){c.readTime=Kr(s,o.snapshotVersion.toTimestamp());const h=Oc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=nA(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Mc(this.serializer),t.removeTarget=e,this.a_(t)}}class KA extends Ig{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return $(!!e.streamToken),this.lastStreamToken=e.streamToken,$(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){$(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=tA(e.writeResults,e.commitTime),n=Pe(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Mc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>ps(this.serializer,n))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Lc(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(k.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Lc(t,n),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(k.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class QA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Se(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{kn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=B(l);h.L_.add(4),await li(h),h.q_.set("Unknown"),h.L_.delete(4),await Ms(h)}(this))})}),this.q_=new QA(n,i)}}async function Ms(r){if(kn(r))for(const e of r.B_)await e(!0)}async function li(r){for(const e of r.B_)await e(!1)}function fa(r,e){const t=B(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Yl(t)?Jl(t):hi(t).r_()&&Ql(t,e))}function Jr(r,e){const t=B(r),n=hi(t);t.N_.delete(e),n.r_()&&wg(t,e),t.N_.size===0&&(n.r_()?n.o_():kn(t)&&t.q_.set("Unknown"))}function Ql(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hi(r).A_(e)}function wg(r,e){r.Q_.xe(e),hi(r).R_(e)}function Jl(r){r.Q_=new Kb({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),hi(r).start(),r.q_.v_()}function Yl(r){return kn(r)&&!hi(r).n_()&&r.N_.size>0}function kn(r){return B(r).L_.size===0}function Eg(r){r.Q_=void 0}async function YA(r){r.q_.set("Online")}async function XA(r){r.N_.forEach((e,t)=>{Ql(r,e)})}async function ZA(r,e){Eg(r),Yl(r)?(r.q_.M_(e),Jl(r)):r.q_.set("Unknown")}async function eR(r,e,t){if(r.q_.set("Online"),e instanceof Bp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.N_.delete(c),i.Q_.removeTarget(c))}(r,e)}catch(n){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await zo(r,n)}else if(e instanceof bo?r.Q_.Ke(e):e instanceof Up?r.Q_.He(e):r.Q_.We(e),!t.isEqual(z.min()))try{const n=await fg(r.localStore);t.compareTo(n)>=0&&await function(s,o){const c=s.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=s.N_.get(l);if(!f)return;s.N_.set(l,f.withResumeToken(be.EMPTY_BYTE_STRING,f.snapshotVersion)),wg(s,l);const m=new Bt(f.target,l,h,f.sequenceNumber);Ql(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){O("RemoteStore","Failed to raise snapshot:",n),await zo(r,n)}}async function zo(r,e,t){if(!Pn(e))throw e;r.L_.add(1),await li(r),r.q_.set("Offline"),t||(t=()=>fg(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Ms(r)})}function Tg(r,e){return e().catch(t=>zo(r,t,e))}async function ui(r){const e=B(r),t=En(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tR(e);)try{const i=await UA(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,nR(e,i)}catch(i){await zo(e,i)}bg(e)&&Ag(e)}function tR(r){return kn(r)&&r.O_.length<10}function nR(r,e){r.O_.push(e);const t=En(r);t.r_()&&t.V_&&t.m_(e.mutations)}function bg(r){return kn(r)&&!En(r).n_()&&r.O_.length>0}function Ag(r){En(r).start()}async function rR(r){En(r).p_()}async function iR(r){const e=En(r);for(const t of r.O_)e.m_(t.mutations)}async function sR(r,e,t){const n=r.O_.shift(),i=Ll.from(n,e,t);await Tg(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await ui(r)}async function oR(r,e){e&&En(r).V_&&await async function(n,i){if(function(o){return Lp(o)&&o!==k.ABORTED}(i.code)){const s=n.O_.shift();En(n).s_(),await Tg(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ui(n)}}(r,e),bg(r)&&Ag(r)}async function tf(r,e){const t=B(r);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const n=kn(t);t.L_.add(3),await li(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ms(t)}async function $c(r,e){const t=B(r);e?(t.L_.delete(2),await Ms(t)):e||(t.L_.add(2),await li(t),t.q_.set("Unknown"))}function hi(r){return r.K_||(r.K_=function(t,n,i){const s=B(t);return s.w_(),new WA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:YA.bind(null,r),Ro:XA.bind(null,r),mo:ZA.bind(null,r),d_:eR.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Yl(r)?Jl(r):r.q_.set("Unknown")):(await r.K_.stop(),Eg(r))})),r.K_}function En(r){return r.U_||(r.U_=function(t,n,i){const s=B(t);return s.w_(),new KA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rR.bind(null,r),mo:oR.bind(null,r),f_:iR.bind(null,r),g_:sR.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await ui(r)):(await r.U_.stop(),r.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new je,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new Xl(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function di(r,e){if(Se("AsyncQueue",`${e}: ${r}`),Pn(r))return new V(k.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.comparator=e?(t,n)=>e(t,n)||U.comparator(t.key,n.key):(t,n)=>U.comparator(t.key,n.key),this.keyedMap=Bi(),this.sortedSet=new de(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Mr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(){this.W_=new de(U.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):q():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Yr{constructor(e,t,n,i,s,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Yr(e,t,Mr.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cR{constructor(){this.queries=rf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=B(t),s=i.queries;i.queries=rf(),s.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new V(k.ABORTED,"Firestore shutting down"))}}function rf(){return new xn(r=>Ep(r),Cs)}async function Zl(r,e){const t=B(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new aR,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=di(o,`Initialization of query '${Sr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&tu(t)}async function eu(r,e){const t=B(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function lR(r,e){const t=B(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.j_)c.X_(i)&&(n=!0);o.z_=i}}n&&tu(t)}function uR(r,e,t){const n=B(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function tu(r){r.Y_.forEach(e=>{e.next()})}var zc,sf;(sf=zc||(zc={})).ea="default",sf.Cache="cache";class nu{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Yr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==zc.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.serializer=e}Es(e){return kt(this.serializer,e)}ds(e){return e.metadata.exists?Wp(this.serializer,e.document,!1):me.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return Pe(e)}}class dR{constructor(e,t,n){this.ca=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Rg(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const n=re.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,n=new of(this.serializer);for(const i of e)if(i.metadata.queries){const s=n.Es(i.metadata.name);for(const o of i.metadata.queries){const c=(t.get(o)||ee()).add(s);t.set(o,c)}}return t}async complete(){const e=await BA(this.localStore,new of(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const n of this.queries)await jA(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function Rg(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.key=e}}class Pg{constructor(e){this.key=e}}class xg{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=bp(e),this.Ra=new Mr(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new nf,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),A=Ns(this.query,m)?m:null,T=!!_&&this.mutatedKeys.has(_.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;_&&A?_.data.isEqual(A.data)?T!==D&&(n.track({type:3,doc:A}),N=!0):this.ga(_,A)||(n.track({type:2,doc:A}),N=!0,(l&&this.Aa(A,l)>0||h&&this.Aa(A,h)<0)&&(c=!0)):!_&&A?(n.track({type:0,doc:A}),N=!0):_&&!A&&(n.track({type:1,doc:_}),N=!0,(l||h)&&(c=!0)),N&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,T){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q()}};return D(A)-D(T)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(n),i=i!=null&&i;const c=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Yr(this.query,e.Ra,s,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new nf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Pg(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Sg(n))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Yr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fR{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class mR{constructor(e){this.key=e,this.va=!1}}class pR{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new xn(c=>Ep(c),Cs),this.Ma=new Map,this.xa=new Set,this.Oa=new de(U.comparator),this.Na=new Map,this.La=new $l,this.Ba={},this.ka=new Map,this.qa=ar.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gR(r,e,t=!0){const n=ma(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await kg(n,e,t,!0),i}async function _R(r,e){const t=ma(r);await kg(t,e,!0,!1)}async function kg(r,e,t,n){const i=await Hr(r.localStore,et(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await ru(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&fa(r.remoteStore,i),c}async function ru(r,e,t,n,i){r.Ka=(m,_,A)=>async function(D,N,j,K){let G=N.view.ma(j);G.ns&&(G=await jo(D.localStore,N.query,!1).then(({documents:I})=>N.view.ma(I,G)));const W=K&&K.targetChanges.get(N.targetId),X=K&&K.targetMismatches.get(N.targetId)!=null,J=N.view.applyChanges(G,D.isPrimaryClient,W,X);return Gc(D,N.targetId,J.wa),J.snapshot}(r,m,_,A);const s=await jo(r.localStore,e,!0),o=new xg(e,s.Ts),c=o.ma(s.documents),l=Os.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,l);Gc(r,t,h.wa);const f=new fR(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function yR(r,e,t){const n=B(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(o=>!Cs(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Qr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Jr(n.remoteStore,i.targetId),Xr(n,i.targetId)}).catch(Sn)):(Xr(n,i.targetId),await Qr(n.localStore,i.targetId,!0))}async function vR(r,e){const t=B(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Jr(t.remoteStore,n.targetId))}async function IR(r,e,t){const n=au(r);try{const i=await function(o,c){const l=B(o),h=ye.now(),f=c.reduce((A,T)=>A.add(T.key),ee());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let T=at(),D=ee();return l.cs.getEntries(A,f).next(N=>{T=N,T.forEach((j,K)=>{K.isValidDocument()||(D=D.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,T)).next(N=>{m=N;const j=[];for(const K of c){const G=zb(K,m.get(K.key).overlayedDocument);G!=null&&j.push(new Qt(K.key,G,fp(G.value.mapValue),_e.exists(!0)))}return l.mutationQueue.addMutationBatch(A,h,j,c)}).next(N=>{_=N;const j=N.applyToLocalDocumentSet(m,D);return l.documentOverlayCache.saveOverlays(A,N.batchId,j)})}).then(()=>({batchId:_.batchId,changes:Rp(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new de(Z)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,i.batchId,t),await Jt(n,i.changes),await ui(n.remoteStore)}catch(i){const s=di(i,"Failed to persist write");t.reject(s)}}async function Cg(r,e){const t=B(r);try{const n=await FA(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&($(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?$(o.va):i.removedDocuments.size>0&&($(o.va),o.va=!1))}),await Jt(t,n,e)}catch(n){await Sn(n)}}function af(r,e,t){const n=B(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,o)=>{const c=o.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=B(o);l.onlineState=c;let h=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(c)&&(h=!0)}),h&&tu(l)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function wR(r,e,t){const n=B(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let o=new de(U.comparator);o=o.insert(s,me.newNoDocument(s,z.min()));const c=ee().add(s),l=new Vs(z.min(),new Map,new de(Z),o,c);await Cg(n,l),n.Oa=n.Oa.remove(s),n.Na.delete(e),ou(n)}else await Qr(n.localStore,e,!1).then(()=>Xr(n,e,t)).catch(Sn)}async function ER(r,e){const t=B(r),n=e.batch.batchId;try{const i=await MA(t.localStore,e);su(t,n,null),iu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Jt(t,i)}catch(i){await Sn(i)}}async function TR(r,e,t){const n=B(r);try{const i=await function(o,c){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>($(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);su(n,e,t),iu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Jt(n,i)}catch(i){await Sn(i)}}async function bR(r,e){const t=B(r);kn(t.remoteStore)||O("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(o){const c=B(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>c.mutationQueue.getHighestUnacknowledgedBatchId(l))}(t.localStore);if(n===-1)return void e.resolve();const i=t.ka.get(n)||[];i.push(e),t.ka.set(n,i)}catch(n){const i=di(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function iu(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function su(r,e,t){const n=B(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function Xr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Ng(r,n)})}function Ng(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Jr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),ou(r))}function Gc(r,e,t){for(const n of t)n instanceof Sg?(r.La.addReference(n.key,e),AR(r,n)):n instanceof Pg?(O("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Ng(r,n.key)):q()}function AR(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(O("SyncEngine","New document in limbo: "+t),r.xa.add(n),ou(r))}function ou(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new U(re.fromString(e)),n=r.qa.next();r.Na.set(n,new mR(t)),r.Oa=r.Oa.insert(t,n),fa(r.remoteStore,new Bt(et(oi(t.path)),n,"TargetPurposeLimboResolution",st.oe))}}async function Jt(r,e,t){const n=B(r),i=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Wl.Wi(l.targetId,h);s.push(m)}}))}),await Promise.all(o),n.Ca.d_(i),await async function(l,h){const f=B(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(h,_=>P.forEach(_.$i,A=>f.persistence.referenceDelegate.addReference(m,_.targetId,A)).next(()=>P.forEach(_.Ui,A=>f.persistence.referenceDelegate.removeReference(m,_.targetId,A)))))}catch(m){if(!Pn(m))throw m;O("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const A=f.os.get(_),T=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(_,D)}}}(n.localStore,s))}async function RR(r,e){const t=B(r);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const n=await dg(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(c=>{c.forEach(l=>{l.reject(new V(k.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Jt(t,n.hs)}}function SR(r,e){const t=B(r),n=t.Na.get(e);if(n&&n.va)return ee().add(n.key);{let i=ee();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const c=t.Fa.get(o);i=i.unionWith(c.view.Va)}return i}}async function PR(r,e){const t=B(r),n=await jo(t.localStore,e.query,!0),i=e.view.ba(n);return t.isPrimaryClient&&Gc(t,e.targetId,i.wa),i}async function xR(r,e){const t=B(r);return gg(t.localStore,e).then(n=>Jt(t,n))}async function kR(r,e,t,n){const i=B(r),s=await function(c,l){const h=B(c),f=B(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,l).next(_=>_?h.localDocuments.getDocuments(m,_):P.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ui(i.remoteStore):t==="acknowledged"||t==="rejected"?(su(i,e,n||null),iu(i,e),function(c,l){B(B(c).mutationQueue).On(l)}(i.localStore,e)):q(),await Jt(i,s)):O("SyncEngine","Cannot apply mutation batch with id: "+e)}async function CR(r,e){const t=B(r);if(ma(t),au(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await cf(t,n.toArray());t.Qa=!0,await $c(t.remoteStore,!0);for(const s of i)fa(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const n=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(Xr(t,o),Qr(t.localStore,o,!0))),Jr(t.remoteStore,o)}),await i,await cf(t,n),function(o){const c=B(o);c.Na.forEach((l,h)=>{Jr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new de(U.comparator)}(t),t.Qa=!1,await $c(t.remoteStore,!1)}}async function cf(r,e,t){const n=B(r),i=[],s=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Hr(n.localStore,et(l[0]));for(const h of l){const f=n.Fa.get(h),m=await PR(n,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await pg(n.localStore,o);c=await Hr(n.localStore,h),await ru(n,Dg(h),o,!1,c.resumeToken)}i.push(c)}return n.Ca.d_(s),i}function Dg(r){return wp(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function NR(r){return function(t){return B(B(t).persistence).Qi()}(B(r).localStore)}async function DR(r,e,t,n){const i=B(r);if(i.Qa)return void O("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await gg(i.localStore,Tp(s[0])),c=Vs.createSynthesizedRemoteEventForCurrentChange(e,t==="current",be.EMPTY_BYTE_STRING);await Jt(i,o,c);break}case"rejected":await Qr(i.localStore,e,!0),Xr(i,e,n);break;default:q()}}async function VR(r,e,t){const n=ma(r);if(n.Qa){for(const i of e){if(n.Ma.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){O("SyncEngine","Adding an already active target "+i);continue}const s=await pg(n.localStore,i),o=await Hr(n.localStore,s);await ru(n,Dg(s),o.targetId,!1,o.resumeToken),fa(n.remoteStore,o)}for(const i of t)n.Ma.has(i)&&await Qr(n.localStore,i,!1).then(()=>{Jr(n.remoteStore,i),Xr(n,i)}).catch(Sn)}}function ma(r){const e=B(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wR.bind(null,e),e.Ca.d_=lR.bind(null,e.eventManager),e.Ca.$a=uR.bind(null,e.eventManager),e}function au(r){const e=B(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ER.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TR.bind(null,e),e}function OR(r,e,t){const n=B(r);(async function(s,o,c){try{const l=await o.getMetadata();if(await function(A,T){const D=B(A),N=Pe(T.createTime);return D.persistence.runTransaction("hasNewerBundle","readonly",j=>D.Gr.getBundleMetadata(j,T.id)).then(j=>!!j&&j.createTime.compareTo(N)>=0)}(s.localStore,l))return await o.close(),c._completeWith(function(A){return{taskState:"Success",documentsLoaded:A.totalDocuments,bytesLoaded:A.totalBytes,totalDocuments:A.totalDocuments,totalBytes:A.totalBytes}}(l)),Promise.resolve(new Set);c._updateProgress(Rg(l));const h=new dR(l,s.localStore,o.serializer);let f=await o.Ua();for(;f;){const _=await h.la(f);_&&c._updateProgress(_),f=await o.Ua()}const m=await h.complete();return await Jt(s,m.Ia,void 0),await function(A,T){const D=B(A);return D.persistence.runTransaction("Save bundle","readwrite",N=>D.Gr.saveBundleMetadata(N,T))}(s.localStore,l),c._completeWith(m.progress),Promise.resolve(m.Pa)}catch(l){return Dt("SyncEngine",`Loading bundle failed with ${l}`),c._failWith(l),Promise.resolve(new Set)}})(n,e,t).then(i=>{n.sharedClientState.notifyBundleLoaded(i)})}class gs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ls(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return hg(this.persistence,new ug,e.initialUser,this.serializer)}Ga(e){return new lg(da.Zr,this.serializer)}Wa(e){return new yg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gs.provider={build:()=>new gs};class Vg extends gs{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await au(this.Ja.syncEngine),await ui(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return hg(this.persistence,new ug,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new vA(n,e.asyncQueue,t)}Ha(e,t){const n=new eb(t,this.persistence);return new ZT(e.asyncQueue,n)}Ga(e){const t=Gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new zl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,vg(),Ao(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new yg}}class LR extends Vg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof hc&&(this.sharedClientState.syncEngine={no:kR.bind(null,t),ro:DR.bind(null,t),io:VR.bind(null,t),Qi:NR.bind(null,t),eo:xR.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await CR(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=vg();if(!hc.D(t))throw new V(k.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class _s{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>af(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=RR.bind(null,this.syncEngine),await $c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cR}()}createDatastore(e){const t=Ls(e.databaseInfo.databaseId),n=function(s){return new GA(s)}(e.databaseInfo);return function(s,o,c,l){return new HA(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,c){return new JA(n,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>af(this.syncEngine,t,0),function(){return ef.D()?new ef:new qA}())}createSyncEngine(e,t){return function(i,s,o,c,l,h,f){const m=new pR(i,s,o,c,l,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=B(i);O("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await li(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}_s.provider={build:()=>new _s};function lf(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Se("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new je,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(n=>{n&&n.ua()?this.metadata.resolve(n.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.aa)}`))},n=>this.metadata.reject(n))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),n=Number(t);isNaN(n)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(n);return new hR(JSON.parse(i),e.length+n)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(k.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=B(i),c={documents:s.map(m=>ms(o.serializer,m))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,re.emptyPath(),c,s.length),h=new Map;l.forEach(m=>{const _=Zb(o.serializer,m);h.set(_.key.toString(),_)});const f=[];return s.forEach(m=>{const _=h.get(m.toString());$(!!_),f.push(_)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new ci(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const i=U.fromPath(n);this.mutations.push(new Vl(i,this.precondition(i)))}),await async function(n,i){const s=B(n),o={writes:i.map(c=>ps(s.serializer,c))};await s.Mo("Commit",s.serializer.databaseId,re.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw q();t=z.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new V(k.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(z.min())?_e.exists(!1):_e.updateTime(t):_e.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(z.min()))throw new V(k.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return _e.updateTime(t)}return _e.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this._u=n.maxAttempts,this.t_=new Hl(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new FR(this.datastore),t=this.cu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.lu(i)}))}).catch(n=>{this.lu(n)})})}cu(e){try{const t=this.updateFunction(e);return!xs(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Lp(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Le.UNAUTHENTICATED,this.clientId=Ym.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{O("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(O("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new je;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=di(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function fc(r,e){r.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await dg(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function uf(r,e){r.asyncQueue.verifyOperationInProgress();const t=await cu(r);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>tf(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>tf(e.remoteStore,i)),r._onlineComponents=e}async function cu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await fc(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Dt("Error using user provided cache. Falling back to memory cache: "+t),await fc(r,new gs)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await fc(r,new gs);return r._offlineComponents}async function ga(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await uf(r,r._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await uf(r,new _s))),r._onlineComponents}function Og(r){return cu(r).then(e=>e.persistence)}function lu(r){return cu(r).then(e=>e.localStore)}function Lg(r){return ga(r).then(e=>e.remoteStore)}function uu(r){return ga(r).then(e=>e.syncEngine)}function jR(r){return ga(r).then(e=>e.datastore)}async function Zr(r){const e=await ga(r),t=e.eventManager;return t.onListen=gR.bind(null,e.syncEngine),t.onUnlisten=yR.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_R.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=vR.bind(null,e.syncEngine),t}function qR(r){return r.asyncQueue.enqueue(async()=>{const e=await Og(r),t=await Lg(r);return e.setNetworkEnabled(!0),function(i){const s=B(i);return s.L_.delete(0),Ms(s)}(t)})}function $R(r){return r.asyncQueue.enqueue(async()=>{const e=await Og(r),t=await Lg(r);return e.setNetworkEnabled(!1),async function(i){const s=B(i);s.L_.add(0),await li(s),s.q_.set("Offline")}(t)})}function zR(r,e){const t=new je;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await function(h,f){const m=B(h);return m.persistence.runTransaction("read document","readonly",_=>m.localDocuments.getDocument(_,f))}(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new V(k.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const l=di(c,`Failed to get document '${s} from cache`);o.reject(l)}}(await lu(r),e,t)),t.promise}function Mg(r,e,t={}){const n=new je;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new pa({next:_=>{f.Za(),o.enqueueAndForget(()=>eu(s,m));const A=_.docs.has(c);!A&&_.fromCache?h.reject(new V(k.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&l&&l.source==="server"?h.reject(new V(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new nu(oi(c.path),f,{includeMetadataChanges:!0,_a:!0});return Zl(s,m)}(await Zr(r),r.asyncQueue,e,t,n)),n.promise}function GR(r,e){const t=new je;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await jo(i,s,!0),l=new xg(s,c.Ts),h=l.ma(c.documents),f=l.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const l=di(c,`Failed to execute query '${s} against cache`);o.reject(l)}}(await lu(r),e,t)),t.promise}function Fg(r,e,t={}){const n=new je;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new pa({next:_=>{f.Za(),o.enqueueAndForget(()=>eu(s,m)),_.fromCache&&l.source==="server"?h.reject(new V(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new nu(c,f,{includeMetadataChanges:!0,_a:!0});return Zl(s,m)}(await Zr(r),r.asyncQueue,e,t,n)),n.promise}function WR(r,e){const t=new pa(e);return r.asyncQueue.enqueueAndForget(async()=>function(i,s){B(i).Y_.add(s),s.next()}(await Zr(r),t)),()=>{t.Za(),r.asyncQueue.enqueueAndForget(async()=>function(i,s){B(i).Y_.delete(s)}(await Zr(r),t))}}function KR(r,e,t,n){const i=function(o,c){let l;return l=typeof o=="string"?Fp().encode(o):o,function(f,m){return new MR(f,m)}(function(f,m){if(f instanceof Uint8Array)return lf(f,m);if(f instanceof ArrayBuffer)return lf(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),c)}(t,Ls(e));r.asyncQueue.enqueueAndForget(async()=>{OR(await uu(r),i,n)})}function HR(r,e){return r.asyncQueue.enqueue(async()=>function(n,i){const s=B(n);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await lu(r),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ug(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(r,e,t){if(!t)throw new V(k.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Bg(r,e,t,n){if(e===!0&&n===!0)throw new V(k.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function df(r){if(!U.isDocumentKey(r))throw new V(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ff(r){if(U.isDocumentKey(r))throw new V(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function _a(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":q()}function ce(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_a(r);throw new V(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function jg(r,e){if(e<=0)throw new V(k.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(k.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Fs{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new qT;switch(n.type){case"firstParty":return new WT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=hf.get(t);n&&(O("ComponentProvider","Removing Datastore"),hf.delete(t),n.terminate())}(this),Promise.resolve()}}function QR(r,e,t,n={}){var i;const s=(r=ce(r,Fs))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Dt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let c,l;if(typeof n.mockUserToken=="string")c=n.mockUserToken,l=Le.MOCK_USER;else{c=sy(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new V(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Le(h)}r._authCredentials=new $T(new Jm(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class qg{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qg(this.firestore,e,this._query)}},ve=class $g{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $g(this.firestore,e,this._key)}},fn=class zg extends tt{constructor(e,t,n){super(e,t,oi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ve(this.firestore,null,new U(e))}withConverter(e){return new zg(this.firestore,e,this._path)}};function Gg(r,e,...t){if(r=Q(r),hu("collection","path",e),r instanceof Fs){const n=re.fromString(e,...t);return ff(n),new fn(r,null,n)}{if(!(r instanceof ve||r instanceof fn))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(re.fromString(e,...t));return ff(n),new fn(r.firestore,null,n)}}function JR(r,e){if(r=ce(r,Fs),hu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(k.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new tt(r,null,function(n){return new Ht(re.emptyPath(),n)}(e))}function Go(r,e,...t){if(r=Q(r),arguments.length===1&&(e=Ym.newId()),hu("doc","path",e),r instanceof Fs){const n=re.fromString(e,...t);return df(n),new ve(r,null,new U(n))}{if(!(r instanceof ve||r instanceof fn))throw new V(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(re.fromString(e,...t));return df(n),new ve(r.firestore,r instanceof fn?r.converter:null,new U(n))}}function Wg(r,e){return r=Q(r),e=Q(e),(r instanceof ve||r instanceof fn)&&(e instanceof ve||e instanceof fn)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Kg(r,e){return r=Q(r),e=Q(e),r instanceof tt&&e instanceof tt&&r.firestore===e.firestore&&Cs(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Hl(this,"async_queue_retry"),this.Vu=()=>{const n=Ao();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=Ao();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new je;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Pn(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw Se("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Xl.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&q()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Wc(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class YR{constructor(){this._progressObserver={},this._taskCompletionResolver=new je,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR=-1;let xe=class extends Fs{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new pf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pf(e),this._firestoreClient=void 0,await e}}};function Ke(r){if(r._terminated)throw new V(k.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Hg(r),r._firestoreClient}function Hg(r){var e,t,n;const i=r._freezeSettings(),s=function(c,l,h,f){return new Eb(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ug(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new BR(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}function ZR(r,e){Dt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Qg(r,_s.provider,{build:n=>new Vg(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function eS(r){Dt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();Qg(r,_s.provider,{build:t=>new LR(t,e.cacheSizeBytes)})}function Qg(r,e,t){if((r=ce(r,xe))._firestoreClient||r._terminated)throw new V(k.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(k.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Hg(r)}function tS(r){if(r._initialized&&!r._terminated)throw new V(k.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new je;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!xt.D())return Promise.resolve();const i=n+"main";await xt.delete(i)}(Gl(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function nS(r){return function(t){const n=new je;return t.asyncQueue.enqueueAndForget(async()=>bR(await uu(t),n)),n.promise}(Ke(r=ce(r,xe)))}function rS(r){return qR(Ke(r=ce(r,xe)))}function iS(r){return $R(Ke(r=ce(r,xe)))}function sS(r,e){const t=Ke(r=ce(r,xe)),n=new YR;return KR(t,r._databaseId,e,n),n}function oS(r,e){return HR(Ke(r=ce(r,xe)),e).then(t=>t?new tt(r,null,t.query):null)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(be.fromBase64String(e))}catch(t){throw new V(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ot(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=/^__.*__$/;class cS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class Jg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yg(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q()}}class va{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new va(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Wo(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Yg(this.Cu)&&aS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class lS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Ls(e)}Qu(e,t,n,i=!1){return new va({Cu:e,methodName:t,qu:n,path:ge.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mr(r){const e=r._freezeSettings(),t=Ls(r._databaseId);return new lS(r._databaseId,!!e.ignoreUndefinedProperties,t)}function Ia(r,e,t,n,i,s={}){const o=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);vu("Data must be an object, but it was:",o,n);const c=e_(n,o);let l,h;if(s.merge)l=new ot(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=Kc(e,m,t);if(!o.contains(_))throw new V(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);n_(f,_)||f.push(_)}l=new ot(f),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new cS(new Be(c),l,h)}class Us extends fr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Us}}function Xg(r,e,t){return new va({Cu:3,qu:e.settings.qu,methodName:r._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class fu extends fr{_toFieldTransform(e){return new Ds(e.path,new Gr)}isEqual(e){return e instanceof fu}}class mu extends fr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Xg(this,e,!0),n=this.Ku.map(s=>pr(s,t)),i=new rr(n);return new Ds(e.path,i)}isEqual(e){return e instanceof mu&&Zi(this.Ku,e.Ku)}}class pu extends fr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Xg(this,e,!0),n=this.Ku.map(s=>pr(s,t)),i=new ir(n);return new Ds(e.path,i)}isEqual(e){return e instanceof pu&&Zi(this.Ku,e.Ku)}}class gu extends fr{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Wr(e.serializer,xp(e.serializer,this.$u));return new Ds(e.path,t)}isEqual(e){return e instanceof gu&&this.$u===e.$u}}function _u(r,e,t,n){const i=r.Qu(1,e,t);vu("Data must be an object, but it was:",i,n);const s=[],o=Be.empty();dr(n,(l,h)=>{const f=Iu(e,l,t);h=Q(h);const m=i.Nu(f);if(h instanceof Us)s.push(f);else{const _=pr(h,m);_!=null&&(s.push(f),o.set(f,_))}});const c=new ot(s);return new Jg(o,c,i.fieldTransforms)}function yu(r,e,t,n,i,s){const o=r.Qu(1,e,t),c=[Kc(e,n,t)],l=[i];if(s.length%2!=0)throw new V(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(Kc(e,s[_])),l.push(s[_+1]);const h=[],f=Be.empty();for(let _=c.length-1;_>=0;--_)if(!n_(h,c[_])){const A=c[_];let T=l[_];T=Q(T);const D=o.Nu(A);if(T instanceof Us)h.push(A);else{const N=pr(T,D);N!=null&&(h.push(A),f.set(A,N))}}const m=new ot(h);return new Jg(f,m,o.fieldTransforms)}function Zg(r,e,t,n=!1){return pr(t,r.Qu(n?4:3,e))}function pr(r,e){if(t_(r=Q(r)))return vu("Unsupported field value:",e,r),e_(r,e);if(r instanceof fr)return function(n,i){if(!Yg(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const c of n){let l=pr(c,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=Q(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return xp(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=ye.fromDate(n);return{timestampValue:Kr(i.serializer,s)}}if(n instanceof ye){const s=new ye(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Kr(i.serializer,s)}}if(n instanceof ya)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ot)return{bytesValue:jp(i.serializer,n._byteString)};if(n instanceof ve){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ul(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof du)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Dl(c.serializer,l)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${_a(n)}`)}(r,e)}function e_(r,e){const t={};return lp(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):dr(r,(n,i)=>{const s=pr(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function t_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ye||r instanceof ya||r instanceof Ot||r instanceof ve||r instanceof fr||r instanceof du)}function vu(r,e,t){if(!t_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=_a(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Kc(r,e,t){if((e=Q(e))instanceof Tn)return e._internalPath;if(typeof e=="string")return Iu(r,e);throw Wo("Field path arguments must be of type string or ",r,!1,void 0,t)}const uS=new RegExp("[~\\*/\\[\\]]");function Iu(r,e,t){if(e.search(uS)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Tn(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Wo(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new V(k.INVALID_ARGUMENT,c+r+l)}function n_(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hS extends ys{data(){return super.data()}}function wa(r,e){return typeof e=="string"?Iu(r,e):e instanceof Tn?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wu{}class Bs extends wu{}function an(r,e,...t){let n=[];e instanceof wu&&n.push(e),n=n.concat(t),function(s){const o=s.filter(l=>l instanceof Eu).length,c=s.filter(l=>l instanceof Ea).length;if(o>1||o>0&&c>0)throw new V(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Ea extends Bs{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ea(e,t,n)}_apply(e){const t=this._parse(e);return s_(e._query,t),new tt(e.firestore,e.converter,Vc(e._query,t))}_parse(e){const t=mr(e.firestore);return function(s,o,c,l,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){_f(m,f);const A=[];for(const T of m)A.push(gf(l,s,T));_={arrayValue:{values:A}}}else _=gf(l,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||_f(m,f),_=Zg(c,o,m,f==="in"||f==="not-in");return ie.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function dS(r,e,t){const n=e,i=wa("where",r);return Ea._create(i,n,t)}class Eu extends wu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Eu(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:le.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const l of c)s_(o,l),o=Vc(o,l)}(e._query,t),new tt(e.firestore,e.converter,Vc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Tu extends Bs{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Tu(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new V(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new fs(s,o)}(e._query,this._field,this._direction);return new tt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Ht(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function fS(r,e="asc"){const t=e,n=wa("orderBy",r);return Tu._create(n,t)}class Ta extends Bs{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new Ta(e,t,n)}_apply(e){return new tt(e.firestore,e.converter,Mo(e._query,this._limit,this._limitType))}}function mS(r){return jg("limit",r),Ta._create("limit",r,"F")}function pS(r){return jg("limitToLast",r),Ta._create("limitToLast",r,"L")}class ba extends Bs{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new ba(e,t,n)}_apply(e){const t=i_(e,this.type,this._docOrFields,this._inclusive);return new tt(e.firestore,e.converter,function(i,s){return new Ht(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function gS(...r){return ba._create("startAt",r,!0)}function _S(...r){return ba._create("startAfter",r,!1)}class Aa extends Bs{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Aa(e,t,n)}_apply(e){const t=i_(e,this.type,this._docOrFields,this._inclusive);return new tt(e.firestore,e.converter,function(i,s){return new Ht(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function yS(...r){return Aa._create("endBefore",r,!1)}function vS(...r){return Aa._create("endAt",r,!0)}function i_(r,e,t,n){if(t[0]=Q(t[0]),t[0]instanceof ys)return function(s,o,c,l,h){if(!l)throw new V(k.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const m of Lr(s))if(m.field.isKeyField())f.push(tr(o,l.key));else{const _=l.data.field(m.field);if(oa(_))throw new V(k.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const A=m.field.canonicalString();throw new V(k.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`)}f.push(_)}return new wn(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const i=mr(r.firestore);return function(o,c,l,h,f,m){const _=o.explicitOrderBy;if(f.length>_.length)throw new V(k.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const A=[];for(let T=0;T<f.length;T++){const D=f[T];if(_[T].field.isKeyField()){if(typeof D!="string")throw new V(k.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!Cl(o)&&D.indexOf("/")!==-1)throw new V(k.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const N=o.path.child(re.fromString(D));if(!U.isDocumentKey(N))throw new V(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const j=new U(N);A.push(tr(c,j))}else{const N=Zg(l,h,D);A.push(N)}}return new wn(A,m)}(r._query,r.firestore._databaseId,i,e,t,n)}}function gf(r,e,t){if(typeof(t=Q(t))=="string"){if(t==="")throw new V(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cl(e)&&t.indexOf("/")!==-1)throw new V(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(re.fromString(t));if(!U.isDocumentKey(n))throw new V(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return tr(r,new U(n))}if(t instanceof ve)return tr(r,t._key);throw new V(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_a(t)}.`)}function _f(r,e){if(!Array.isArray(r)||r.length===0)throw new V(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function s_(r,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bu{convertValue(e,t="none"){switch(er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return dr(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>pe(o.doubleValue));return new du(s)}convertGeoPoint(e){return new ya(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=xl(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(us(e));default:return null}}convertTimestamp(e){const t=zt(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=re.fromString(e);$(Xp(n));const i=new vn(n.get(1),n.get(3)),s=new U(n.popFirst(5));return i.isEqual(t)||Se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class IS extends bu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Gt=class extends ys{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(wa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},Yi=class extends Gt{data(e={}){return super.data(e)}},bn=class{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Wn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Yi(this._firestore,this._userDataWriter,n.key,n,new Wn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const l=new Yi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Wn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new Yi(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Wn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:wS(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function wS(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q()}}function o_(r,e){return r instanceof Gt&&e instanceof Gt?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof bn&&e instanceof bn&&r._firestore===e._firestore&&Kg(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(r){r=ce(r,ve);const e=ce(r.firestore,xe);return Mg(Ke(e),r._key).then(t=>Au(e,r,t))}class gr extends bu{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ve(this.firestore,null,t)}}function TS(r){r=ce(r,ve);const e=ce(r.firestore,xe),t=Ke(e),n=new gr(e);return zR(t,r._key).then(i=>new Gt(e,n,r._key,i,new Wn(i!==null&&i.hasLocalMutations,!0),r.converter))}function bS(r){r=ce(r,ve);const e=ce(r.firestore,xe);return Mg(Ke(e),r._key,{source:"server"}).then(t=>Au(e,r,t))}function AS(r){r=ce(r,tt);const e=ce(r.firestore,xe),t=Ke(e),n=new gr(e);return r_(r._query),Fg(t,r._query).then(i=>new bn(e,n,r,i))}function RS(r){r=ce(r,tt);const e=ce(r.firestore,xe),t=Ke(e),n=new gr(e);return GR(t,r._query).then(i=>new bn(e,n,r,i))}function SS(r){r=ce(r,tt);const e=ce(r.firestore,xe),t=Ke(e),n=new gr(e);return Fg(t,r._query,{source:"server"}).then(i=>new bn(e,n,r,i))}function yf(r,e,t){r=ce(r,ve);const n=ce(r.firestore,xe),i=Ra(r.converter,e,t);return js(n,[Ia(mr(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,_e.none())])}function vf(r,e,t,...n){r=ce(r,ve);const i=ce(r.firestore,xe),s=mr(i);let o;return o=typeof(e=Q(e))=="string"||e instanceof Tn?yu(s,"updateDoc",r._key,e,t,n):_u(s,"updateDoc",r._key,e),js(i,[o.toMutation(r._key,_e.exists(!0))])}function PS(r){return js(ce(r.firestore,xe),[new ci(r._key,_e.none())])}function xS(r,e){const t=ce(r.firestore,xe),n=Go(r),i=Ra(r.converter,e);return js(t,[Ia(mr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,_e.exists(!1))]).then(()=>n)}function a_(r,...e){var t,n,i;r=Q(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Wc(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Wc(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let l,h,f;if(r instanceof ve)h=ce(r.firestore,xe),f=oi(r._key.path),l={next:m=>{e[o]&&e[o](Au(h,r,m))},error:e[o+1],complete:e[o+2]};else{const m=ce(r,tt);h=ce(m.firestore,xe),f=m._query;const _=new gr(h);l={next:A=>{e[o]&&e[o](new bn(h,_,m,A))},error:e[o+1],complete:e[o+2]},r_(r._query)}return function(_,A,T,D){const N=new pa(D),j=new nu(A,N,T);return _.asyncQueue.enqueueAndForget(async()=>Zl(await Zr(_),j)),()=>{N.Za(),_.asyncQueue.enqueueAndForget(async()=>eu(await Zr(_),j))}}(Ke(h),f,c,l)}function kS(r,e){return WR(Ke(r=ce(r,xe)),Wc(e)?e:{next:e})}function js(r,e){return function(n,i){const s=new je;return n.asyncQueue.enqueueAndForget(async()=>IR(await uu(n),i,s)),s.promise}(Ke(r),e)}function Au(r,e,t){const n=t.docs.get(e._key),i=new gr(r);return new Gt(r,i,e._key,n,new Wn(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NS=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=mr(e)}set(e,t,n){this._verifyNotCommitted();const i=ln(e,this._firestore),s=Ra(i.converter,t,n),o=Ia(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,_e.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=ln(e,this._firestore);let o;return o=typeof(t=Q(t))=="string"||t instanceof Tn?yu(this._dataReader,"WriteBatch.update",s._key,t,n,i):_u(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,_e.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ln(e,this._firestore);return this._mutations=this._mutations.concat(new ci(t._key,_e.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(k.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ln(r,e){if((r=Q(r)).firestore!==e)throw new V(k.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DS=class extends class{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=mr(t)}get(t){const n=ln(t,this._firestore),i=new IS(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return q();const o=s[0];if(o.isFoundDocument())return new ys(this._firestore,i,o.key,o,n.converter);if(o.isNoDocument())return new ys(this._firestore,i,n._key,null,n.converter);throw q()})}set(t,n,i){const s=ln(t,this._firestore),o=Ra(s.converter,n,i),c=Ia(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,n,i,...s){const o=ln(t,this._firestore);let c;return c=typeof(n=Q(n))=="string"||n instanceof Tn?yu(this._dataReader,"Transaction.update",o._key,n,i,s):_u(this._dataReader,"Transaction.update",o._key,n),this._transaction.update(o._key,c),this}delete(t){const n=ln(t,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ln(e,this._firestore),n=new gr(this._firestore);return super.get(e).then(i=>new Gt(this._firestore,n,t._key,i._document,new Wn(!1,!1),t.converter))}};function VS(r,e,t){r=ce(r,xe);const n=Object.assign(Object.assign({},CS),t);return function(s){if(s.maxAttempts<1)throw new V(k.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(s,o,c){const l=new je;return s.asyncQueue.enqueueAndForget(async()=>{const h=await jR(s);new UR(s.asyncQueue,h,c,o,l).au()}),l.promise}(Ke(r),i=>e(new DS(r,i)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OS(){return new Us("deleteField")}function LS(){return new fu("serverTimestamp")}function MS(...r){return new mu("arrayUnion",r)}function FS(...r){return new pu("arrayRemove",r)}function US(r){return new gu("increment",r)}(function(e,t=!0){(function(i){si=i})(An),gn(new Ct("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new xe(new zT(n.getProvider("auth-internal")),new HT(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),It(ad,"4.7.3",e),It(ad,"4.7.3","esm2017")})();const BS="@firebase/firestore-compat",jS="0.3.38";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new V("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){if(typeof Uint8Array>"u")throw new V("unimplemented","Uint8Arrays are not available in this environment.")}function wf(){if(!Ib())throw new V("unimplemented","Blobs are unavailable in Firestore in this environment.")}class vs{constructor(e){this._delegate=e}static fromBase64String(e){return wf(),new vs(Ot.fromBase64String(e))}static fromUint8Array(e){return If(),new vs(Ot.fromUint8Array(e))}toBase64(){return wf(),this._delegate.toBase64()}toUint8Array(){return If(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(r){return qS(r,["next","error","complete"])}function qS(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{enableIndexedDbPersistence(e,t){return ZR(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return eS(e._delegate)}clearIndexedDbPersistence(e){return tS(e._delegate)}}class c_{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof vn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Dt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){QR(this._delegate,e,t,n)}enableNetwork(){return rS(this._delegate)}disableNetwork(){return iS(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Bg("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return nS(this._delegate)}onSnapshotsInSync(e){return kS(this._delegate,e)}get app(){if(!this._appCompat)throw new V("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ei(this,Gg(this._delegate,e))}catch(t){throw Ye(t,"collection()","Firestore.collection()")}}doc(e){try{return new pt(this,Go(this._delegate,e))}catch(t){throw Ye(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Je(this,JR(this._delegate,e))}catch(t){throw Ye(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return VS(this._delegate,t=>e(new l_(this,t)))}batch(){return Ke(this._delegate),new u_(new NS(this._delegate,e=>js(this._delegate,e)))}loadBundle(e){return sS(this._delegate,e)}namedQuery(e){return oS(this._delegate,e).then(t=>t?new Je(this,t):null)}}class Sa extends bu{constructor(e){super(),this.firestore=e}convertBytes(e){return new vs(new Ot(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return pt.forKey(t,this.firestore,null)}}function zS(r){BT(r)}class l_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Sa(e)}get(e){const t=Kn(e);return this._delegate.get(t).then(n=>new Is(this._firestore,new Gt(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const i=Kn(e);return n?(Ru("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=Kn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=Kn(e);return this._delegate.delete(t),this}}class u_{constructor(e){this._delegate=e}set(e,t,n){const i=Kn(e);return n?(Ru("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=Kn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=Kn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class cr{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Yi(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ws(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=cr.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(t);return s||(s=new cr(e,new Sa(e),t),i.set(t,s)),s}}cr.INSTANCES=new WeakMap;class pt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Sa(e)}static forPath(e,t,n){if(e.length%2!==0)throw new V("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new pt(t,new ve(t._delegate,n,new U(e)))}static forKey(e,t,n){return new pt(t,new ve(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ei(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ei(this.firestore,Gg(this._delegate,e))}catch(t){throw Ye(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Q(e),e instanceof ve?Wg(this._delegate,e):!1}set(e,t){t=Ru("DocumentReference.set",t);try{return t?yf(this._delegate,e,t):yf(this._delegate,e)}catch(n){throw Ye(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?vf(this._delegate,e):vf(this._delegate,e,t,...n)}catch(i){throw Ye(i,"updateDoc()","DocumentReference.update()")}}delete(){return PS(this._delegate)}onSnapshot(...e){const t=h_(e),n=d_(e,i=>new Is(this.firestore,new Gt(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return a_(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=TS(this._delegate):(e==null?void 0:e.source)==="server"?t=bS(this._delegate):t=ES(this._delegate),t.then(n=>new Is(this.firestore,new Gt(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new pt(this.firestore,e?this._delegate.withConverter(cr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ye(r,e,t){return r.message=r.message.replace(e,t),r}function h_(r){for(const e of r)if(typeof e=="object"&&!Hc(e))return e;return{}}function d_(r,e){var t,n;let i;return Hc(r[0])?i=r[0]:Hc(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class Is{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new pt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return o_(this._delegate,e._delegate)}}class ws extends Is{data(e){const t=this._delegate.data(e);return this._delegate._converter||jT(t!==void 0),t}}class Je{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Sa(e)}where(e,t,n){try{return new Je(this.firestore,an(this._delegate,dS(e,t,n)))}catch(i){throw Ye(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Je(this.firestore,an(this._delegate,fS(e,t)))}catch(n){throw Ye(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Je(this.firestore,an(this._delegate,mS(e)))}catch(t){throw Ye(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Je(this.firestore,an(this._delegate,pS(e)))}catch(t){throw Ye(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Je(this.firestore,an(this._delegate,gS(...e)))}catch(t){throw Ye(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Je(this.firestore,an(this._delegate,_S(...e)))}catch(t){throw Ye(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Je(this.firestore,an(this._delegate,yS(...e)))}catch(t){throw Ye(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Je(this.firestore,an(this._delegate,vS(...e)))}catch(t){throw Ye(t,"endAt()","Query.endAt()")}}isEqual(e){return Kg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=RS(this._delegate):(e==null?void 0:e.source)==="server"?t=SS(this._delegate):t=AS(this._delegate),t.then(n=>new Qc(this.firestore,new bn(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=h_(e),n=d_(e,i=>new Qc(this.firestore,new bn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return a_(this._delegate,t,n)}withConverter(e){return new Je(this.firestore,e?this._delegate.withConverter(cr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class GS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ws(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Qc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Je(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ws(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new GS(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new ws(this._firestore,n))})}isEqual(e){return o_(this._delegate,e._delegate)}}class ei extends Je{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new pt(this.firestore,e):null}doc(e){try{return e===void 0?new pt(this.firestore,Go(this._delegate)):new pt(this.firestore,Go(this._delegate,e))}catch(t){throw Ye(t,"doc()","CollectionReference.doc()")}}add(e){return xS(this._delegate,e).then(t=>new pt(this.firestore,t))}isEqual(e){return Wg(this._delegate,e._delegate)}withConverter(e){return new ei(this.firestore,e?this._delegate.withConverter(cr.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Kn(r){return ce(r,ve)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(...e){this._delegate=new Tn(...e)}static documentId(){return new Su(ge.keyField().canonicalString())}isEqual(e){return e=Q(e),e instanceof Tn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this._delegate=e}static serverTimestamp(){const e=LS();return e._methodName="FieldValue.serverTimestamp",new zn(e)}static delete(){const e=OS();return e._methodName="FieldValue.delete",new zn(e)}static arrayUnion(...e){const t=MS(...e);return t._methodName="FieldValue.arrayUnion",new zn(t)}static arrayRemove(...e){const t=FS(...e);return t._methodName="FieldValue.arrayRemove",new zn(t)}static increment(e){const t=US(e);return t._methodName="FieldValue.increment",new zn(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WS={Firestore:c_,GeoPoint:ya,Timestamp:ye,Blob:vs,Transaction:l_,WriteBatch:u_,DocumentReference:pt,DocumentSnapshot:Is,Query:Je,QueryDocumentSnapshot:ws,QuerySnapshot:Qc,CollectionReference:ei,FieldPath:Su,FieldValue:zn,setLogLevel:zS,CACHE_SIZE_UNLIMITED:XR};function KS(r,e){r.INTERNAL.registerComponent(new Ct("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},WS)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(r){KS(r,(e,t)=>new c_(e,t,new $S)),r.registerVersion(BS,jS)}HS(ur);const QS={apiKey:"***********************",authDomain:"*********************",projectId:"*********************",storageBucket:"*********************",messagingSenderId:"***************",appId:"**********************",measurementId:"****************"},JS=ur.initializeApp(QS);JS.firestore();const YS=ur.auth(),XS=({local_varaiable:r,ThemeChanger:e})=>{const[t,n]=oe.useState(""),[i,s]=oe.useState("");oe.useEffect(()=>{const T=localStorage.getItem("userData");T&&(n(JSON.parse(T).name),s(JSON.parse(T).role))},[]);const[o,c]=oe.useState(!1),l=()=>{o?document.exitFullscreen():document.documentElement.requestFullscreen()};oe.useEffect(()=>{const T=()=>{c(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",T),()=>{document.removeEventListener("fullscreenchange",T)}},[]),oe.useEffect(()=>{const T=()=>{};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}},[]);function h(){const T=vt.getState();window.innerWidth<=992&&e({...T,dataToggled:"close"}),window.innerWidth>=992&&e({...T,dataToggled:r.dataToggled?r.dataToggled:""})}oe.useEffect(()=>{const T=()=>{};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}},[]);const f=()=>{const T=vt.getState(),D=T.dataNavLayout;if(window.innerWidth>=992){if(D==="vertical"){const N=T.dataVerticalStyle,j=T.dataNavStyle;switch(N){case"closed":e({...T,dataNavStyle:""}),T.dataToggled==="close-menu-close"?e({...T,dataToggled:""}):e({...T,dataToggled:"close-menu-close"});break;case"overlay":e({...T,dataNavStyle:""}),T.dataToggled==="icon-overlay-close"?e({...T,dataToggled:"",iconOverlay:""}):window.innerWidth>=992&&e({...T,dataToggled:"icon-overlay-close",iconOverlay:""});break;case"icontext":e({...T,dataNavStyle:""}),T.dataToggled==="icon-text-close"?e({...T,dataToggled:""}):e({...T,dataToggled:"icon-text-close"});break;case"doublemenu":if(e({...T,dataNavStyle:""}),e({...T,dataNavStyle:""}),T.dataToggled==="double-menu-open")e({...T,dataToggled:"double-menu-close"});else{const K=document.querySelector(".side-menu__item.active");K&&(e({...T,dataToggled:"double-menu-open"}),K.nextElementSibling?K.nextElementSibling.classList.add("double-menu-active"):e({...T,dataToggled:"double-menu-close"}))}break;case"detached":T.dataToggled==="detached-close"?e({...T,dataToggled:"",iconOverlay:""}):e({...T,dataToggled:"detached-close",iconOverlay:""});break;case"default":e({...T,dataToggled:""})}switch(j){case"menu-click":T.dataToggled==="menu-click-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"menu-click-closed"});break;case"menu-hover":T.dataToggled==="menu-hover-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"menu-hover-closed"});break;case"icon-click":T.dataToggled==="icon-click-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"icon-click-closed"});break;case"icon-hover":T.dataToggled==="icon-hover-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"icon-hover-closed"});break}}}else T.dataToggled==="close"?(e({...T,dataToggled:"open"}),setTimeout(()=>{if(T.dataToggled=="open"){const N=document.querySelector("#responsive-overlay");N&&(N.classList.add("active"),N.addEventListener("click",()=>{const j=document.querySelector("#responsive-overlay");j&&(j.classList.remove("active"),h())}))}window.addEventListener("resize",()=>{if(window.screen.width>=992){const N=document.querySelector("#responsive-overlay");N&&N.classList.remove("active")}})},100)):e({...T,dataToggled:"close"})},m=()=>{e({...r,class:r.class=="dark"?"light":"dark",dataHeaderStyles:r.class=="dark"?"light":"dark",dataMenuStyles:r.dataNavLayout=="horizontal"&&r.class=="dark"?"light":"dark"});const T=vt.getState();T.class!="dark"?(e({...T,bodyBg:"",Light:"",darkBg:"",inputBorder:""}),localStorage.setItem("ynexlighttheme","light"),localStorage.removeItem("ynexdarktheme"),localStorage.removeItem("ynexMenu"),localStorage.removeItem("ynexHeader"),localStorage.removeItem("darkBgRGB"),localStorage.removeItem("bodyBgRGB"),localStorage.removeItem("Light")):(localStorage.setItem("ynexdarktheme","dark"),localStorage.removeItem("ynexlighttheme"),localStorage.removeItem("ynexMenu"),localStorage.removeItem("ynexHeader"))};oe.useEffect(()=>{const T=document==null?void 0:document.querySelector(".header"),D=document==null?void 0:document.querySelector(".app-sidebar"),N=T==null?void 0:T.clientHeight;function j(){window.pageYOffset>=N?(T==null||T.classList.add("sticky-pin"),D==null||D.classList.add("sticky-pin")):(T==null||T.classList.remove("sticky-pin"),D==null||D.classList.remove("sticky-pin"))}return window.addEventListener("scroll",j),window.addEventListener("DOMContentLoaded",j),()=>{window.removeEventListener("scroll",j),window.removeEventListener("DOMContentLoaded",j)}},[]);const _=q_(),A=()=>{const T="/firebase/login";localStorage.removeItem("userData"),localStorage.removeItem("token"),localStorage.removeItem("balance"),_(T)};return E.jsxs(oe.Fragment,{children:[E.jsx("div",{className:"app-header sticky top-0 z-50 shadow-sm bg-white dark:bg-bodybg border-b border-gray-200 dark:border-defaultborder/10",children:E.jsx("nav",{className:"main-header !h-[4.5rem]","aria-label":"Global",children:E.jsxs("div",{className:"main-header-container ps-4 pe-6",children:[E.jsxs("div",{className:"header-content-left flex items-center gap-4",children:[E.jsx("div",{className:"header-element",children:E.jsx("div",{className:"horizontal-logo flex items-center gap-3",children:E.jsxs(nt,{to:"/dashboards/corporate",className:"header-logo flex items-center gap-3 group",children:[E.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all",children:E.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),E.jsxs("div",{className:"hidden lg:block",children:[E.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white tracking-tight",children:"MoolaCore"}),E.jsx("p",{className:"text-xs text-gray-500 dark:text-white/50 -mt-0.5",children:"Financial Dashboard"})]})]})})}),E.jsx("div",{className:"header-element md:px-2 !items-center",onClick:()=>f(),children:E.jsx("button",{"aria-label":"Toggle Sidebar",className:"sidemenu-toggle p-2 hover:bg-gray-100 dark:hover:bg-black/20 rounded-lg transition-all inline-flex items-center",children:E.jsx("svg",{className:"w-6 h-6 text-gray-600 dark:text-white/70",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]}),E.jsxs("div",{className:"header-content-right flex items-center gap-2",children:[E.jsx("div",{className:"header-element hidden md:block",children:E.jsxs("div",{className:"relative",children:[E.jsx("input",{type:"text",placeholder:"Search...",className:"w-64 pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-defaultborder/20 bg-gray-50 dark:bg-black/20 text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"}),E.jsx("svg",{className:"absolute left-3 top-2.5 w-5 h-5 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})]})}),E.jsx(mc,{Customclass:"header-element py-[1rem] md:px-[0.65rem] px-2  header-country hidden sm:block [--placement:bottom-left]",buttonid:"dropdown-flag",CustomToggleclass:"hs-dropdown-toggle !p-0 flex-shrink-0 !m-0 !border-0 !rounded-full !shadow-none",Imagetag:!0,Image:Ph,Imagename:"flag-img",Imageclass:"h-[1.25rem] w-[1.25rem] rounded-full",Custommenuclass:"min-w-[10rem] !-mt-3",Menulabel:"dropdown-flag",children:E.jsx("div",{className:"ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10",children:E.jsx("div",{className:"py-2 first:pt-0 last:pb-0",children:E.jsx("div",{className:"ti-dropdown-item !p-[0.65rem] ",children:E.jsxs("div",{className:"flex items-center space-x-2 rtl:space-x-reverse w-full",children:[E.jsx("div",{className:"h-[1.375rem] flex items-center w-[1.375rem] rounded-full",children:E.jsx("img",{src:Ph,alt:"flag-img",className:"h-[1rem] w-[1rem] rounded-full"})}),E.jsx("div",{children:E.jsx("p",{className:"!text-[0.8125rem] font-medium",children:"English"})})]})})})})}),E.jsx("div",{className:"header-element header-theme-mode hidden !items-center sm:block",onClick:()=>m(),children:E.jsxs("button",{className:"p-2.5 hover:bg-gray-100 dark:hover:bg-black/20 rounded-xl transition-all group",children:[E.jsx("i",{className:"bx bx-moon text-xl text-gray-600 dark:text-white/70 group-hover:text-primary dark:group-hover:text-primary transition-colors hs-dark-mode-active:hidden"}),E.jsx("i",{className:"bx bx-sun text-xl text-gray-600 dark:text-white/70 group-hover:text-primary dark:group-hover:text-primary transition-colors hs-dark-mode-active:block hidden"})]})}),E.jsxs("div",{className:"hs-dropdown ti-dropdown header-element !hidden md:!block [--placement:bottom-right]",children:[E.jsxs("button",{id:"dropdown-notification",type:"button",className:"hs-dropdown-toggle relative p-2.5 hover:bg-gray-100 dark:hover:bg-black/20 rounded-xl transition-all group",children:[E.jsx("i",{className:"bx bx-bell text-xl text-gray-600 dark:text-white/70 group-hover:text-primary transition-colors"}),E.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-bodybg"})]}),E.jsxs("div",{className:"main-header-dropdown !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu bg-white !w-[22rem] border-0 border-defaultborder hidden !m-0","aria-labelledby":"dropdown-notification",children:[E.jsx("div",{className:"ti-dropdown-header !m-0 !p-4 !bg-transparent flex justify-between items-center",children:E.jsx("p",{className:"mb-0 text-[1.0625rem] text-defaulttextcolor font-semibold ",children:"Notifications"})}),E.jsx("div",{className:"dropdown-divider"}),E.jsx("ul",{className:"list-none !m-0 !p-0 end-0",id:"header-notification-scroll"})]})]}),E.jsxs(mc,{Customclass:"header-element header-apps dark:text-[#8c9097] dark:text-white/50 py-[1rem] md:px-[0.65rem] px-2 md:!block !hidden [--placement:bottom-left]",buttonid:"dropdown-apps",CustomToggleclass:"!p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none text-xs",Menulabel:"dropdown-apps",Icon:!0,IconClass:"bx bx-grid-alt header-link-icon text-[1.125rem]",Custommenuclass:"main-header-dropdown !-mt-3 !w-[22rem] border-0 border-defaultborder",children:[E.jsx("div",{className:"p-4",children:E.jsx("div",{className:"flex items-center justify-between",children:E.jsx("p",{className:"mb-0 text-defaulttextcolor text-[1.0625rem]  font-semibold",children:"Corporate Dashboard"})})}),E.jsx("div",{className:"dropdown-divider mb-0"}),E.jsx("div",{className:"ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10 main-header-shortcuts p-2",id:"header-shortcut-scroll"})]}),E.jsx("div",{className:"header-element header-fullscreen",children:E.jsx("button",{onClick:()=>l(),className:"p-2.5 hover:bg-gray-100 dark:hover:bg-black/20 rounded-xl transition-all group",children:o?E.jsx("i",{className:"bx bx-exit-fullscreen text-xl text-gray-600 dark:text-white/70 group-hover:text-primary transition-colors"}):E.jsx("i",{className:"bx bx-fullscreen text-xl text-gray-600 dark:text-white/70 group-hover:text-primary transition-colors"})})}),E.jsxs("div",{className:"header-element hs-dropdown !items-center ti-dropdown [--placement:bottom-left]",children:[E.jsxs("button",{id:"dropdown-profile",type:"button",className:"hs-dropdown-toggle flex items-center gap-3 p-2 hover:bg-gray-100 dark:hover:bg-black/20 rounded-xl transition-all",children:[E.jsxs("div",{className:"md:block hidden text-right",children:[E.jsx("p",{className:"font-semibold text-sm text-gray-900 dark:text-white leading-tight",children:t}),E.jsx("span",{className:"text-xs text-gray-500 dark:text-white/50 capitalize",children:i})]}),E.jsxs("div",{className:"relative",children:[E.jsx("img",{className:"w-10 h-10 rounded-full border-2 border-gray-200 dark:border-defaultborder/20",src:G_,alt:"Profile"}),E.jsx("span",{className:"absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-bodybg"})]})]}),E.jsx("div",{className:"hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder hidden main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end","aria-labelledby":"dropdown-profile",children:E.jsx("ul",{className:"text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50",children:E.jsx("li",{children:E.jsxs("a",{className:"w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex",href:"#",onClick:T=>{T.preventDefault(),YS.signOut(),A()},children:[E.jsx("i",{className:"ti ti-logout text-[1.125rem] me-2 opacity-[0.7] !inline-flex"}),"Log Out"]})})})})]}),E.jsx("div",{className:"header-element",children:E.jsx("button",{type:"button",className:"hs-dropdown-toggle switcher-icon p-2.5 hover:bg-gray-100 dark:hover:bg-black/20 rounded-xl transition-all group","data-hs-overlay":"#hs-overlay-switcher",children:E.jsx("i",{className:"bx bx-cog text-xl text-gray-600 dark:text-white/70 group-hover:text-primary group-hover:rotate-90 transition-all duration-300"})})})]})]})})}),E.jsx(Q_,{})]})},ZS=r=>({local_varaiable:r}),eP=Ef(ZS,{ThemeChanger:Jc})(XS),tP=({local_varaiable:r,ThemeChanger:e})=>{const[t,n]=oe.useState(Oi),[i,s]=oe.useState(""),[o,c]=oe.useState({}),l=(i||"").toLowerCase(),h=l==="staff"||l==="stuff",f=l==="corporate",m=new Set(["Moola Plus","Transaction Details","Register Application","Auto Settlement","Report","User Management","Dispute Page","My Account","LOGS & CHARTS","Transactions","Charts"]),_=(x,L)=>h?m.has(x||L||""):!1,A=new Set(["Analytics","Dashboards","MOOLA","Dashboard","Transaction Details","Register Application","Auto Settlement","Report","Dispute Page","My Account"]),T=x=>{c(L=>({...L,[x]:!L[x]}))};let D=Oi.map(x=>{var L;if(h)return x;if(f&&!A.has(x.title||x.menutitle))return null;if(x.type==="sub"){const H=(L=x.children)==null?void 0:L.filter(Y=>h?!0:f?!Y.roles||Y.roles.some(te=>te.toLowerCase()==="corporate"):!Y.roles||Y.roles.some(te=>te.toLowerCase()===l));return!H||H.length===0?null:{...x,children:H}}return f?!x.roles||x.roles.some(H=>H.toLowerCase()==="corporate")?x:null:!x.roles||x.roles.some(H=>H.toLowerCase()===l)?x:null}).filter(Boolean);oe.useEffect(()=>{const x=localStorage.getItem("userData");if(x){const L=JSON.parse(x),H=String((L==null?void 0:L.role)||"").toLowerCase();s(H==="stuff"?"Staff":L.role)}},[]);function N(){const x=L=>{L==null||L.forEach(H=>{H.active=!1,x(H.children)})};x(Oi),n(L=>[...L])}oe.useEffect(()=>{window.addEventListener("resize",J),window.addEventListener("resize",g);const x=document.querySelector(".main-content");if(window.innerWidth<=992)if(x){const L=vt.getState();e({...L,dataToggled:"close"})}else document.documentElement.getAttribute("data-nav-layout")=="horizontal"&&N();return x.addEventListener("click",W),()=>{window.removeEventListener("resize",J),window.removeEventListener("resize",g)}},[]);const j=Tf();function K(){const x=vt.getState();(x.dataToggled=="icon-overlay-close"||x.dataToggled=="detached-close")&&x.iconOverlay!="open"&&e({...x,iconOverlay:"open"})}function G(){const x=vt.getState();(x.dataToggled=="icon-overlay-close"||x.dataToggled=="detached-close")&&x.iconOverlay=="open"&&e({...x,iconOverlay:""})}function W(){const x=vt.getState();window.innerWidth<=992&&e({...x,dataToggled:"close"});const L=document.querySelector("#responsive-overlay");L&&L.classList.remove("active"),(x.dataNavLayout=="horizontal"||x.dataNavStyle=="menu-click"||x.dataNavStyle=="icon-click")&&N()}const X=typeof window<"u"?[window.innerWidth]:[];function J(){if(typeof window>"u")return;X.push(window.innerWidth),X.length>2&&X.shift();const x=vt.getState(),L=X[X.length-1],H=X[X.length-2];X.length>1&&(L<992&&H>=992&&e({...x,dataToggled:"close"}),L>=992&&H<992&&e({...x,dataToggled:x.dataVerticalStyle==="doublemenu"?"double-menu-open":""}))}function I(){function x(){const L=document.querySelectorAll(".slide"),H=document.querySelectorAll(".slide-menu");L.forEach(Y=>{Y.classList.contains("is-expanded")&&Y.classList.remove("is-expanded")}),H.forEach(Y=>{Y.classList.contains("open")&&(Y.classList.remove("open"),Y.style.display="none")})}x()}const g=()=>{var Ve;const x=document.querySelector(".main-menu"),L=document.querySelector(".main-sidebar"),H=Math.ceil(Number(window.getComputedStyle(x).marginLeft.split("px")[0])),Y=Math.ceil(Number(window.getComputedStyle(x).marginRight.split("px")[0])),te=x.scrollWidth-L.offsetWidth;x.scrollWidth>L.offsetWidth||(x.style.marginLeft="0px",x.style.marginRight="0px",x.style.marginInlineStart="0px"),((Ve=document.querySelector("html"))==null?void 0:Ve.getAttribute("dir"))!=="rtl"?x.scrollWidth>L.offsetWidth&&Math.abs(te)<Math.abs(H)&&(x.style.marginLeft=-te+"px"):x.scrollWidth>L.offsetWidth&&Math.abs(te)<Math.abs(Y)&&(x.style.marginRight=-te+"px")};function y(){const x=document.querySelector(".main-menu"),L=document.querySelector(".main-sidebar");if(x&&L){const H=Math.ceil(Number(window.getComputedStyle(x).marginInlineStart.split("px")[0])),Y=Math.ceil(Number(window.getComputedStyle(x).marginInlineEnd.split("px")[0])),te=x.scrollWidth-L.offsetWidth;let Ve=L.offsetWidth;if(x.scrollWidth>L.offsetWidth){if(r.dataVerticalStyle.dir!=="rtl"){if(Math.abs(te)>Math.abs(H)){if(x.style.marginInlineEnd="0",!(Math.abs(te)>Math.abs(H)+Ve)){Ve=Math.abs(te)-Math.abs(H);const lt=document.querySelector("#slide-right");lt&&lt.classList.add("hidden")}x.style.marginInlineStart=Number(x.style.marginInlineStart.split("px")[0])-Math.abs(Ve)+"px";const ct=document.querySelector("#slide-right");ct&&ct.classList.remove("hidden")}}else if(Math.abs(te)>Math.abs(Y)){if(x.style.marginInlineEnd="0",!(Math.abs(te)>Math.abs(Y)+Ve)){Ve=Math.abs(te)-Math.abs(Y);const lt=document.querySelector("#slide-right");lt&&lt.classList.add("hidden")}x.style.marginInlineStart=Number(x.style.marginInlineStart.split("px")[0])-Math.abs(Ve)+"px";const ct=document.querySelector("#slide-left");ct&&ct.classList.remove("hidden")}}const Cn=document.querySelector(".main-menu > .slide.open"),Nn=document.querySelector(".main-menu > .slide.open > ul");Cn&&Cn.classList.remove("active"),Nn&&(Nn.style.display="none")}I(),g()}function w(){const x=document.querySelector(".main-menu"),L=document.querySelector(".main-sidebar");if(x&&L){const H=Math.ceil(Number(window.getComputedStyle(x).marginInlineStart.split("px")[0])),Y=Math.ceil(Number(window.getComputedStyle(x).marginInlineEnd.split("px")[0])),te=x.scrollWidth-L.offsetWidth;let Ve=L.offsetWidth;if(x.scrollWidth>L.offsetWidth){if(r.dataVerticalStyle.dir!=="rtl")Math.abs(te)<=Math.abs(H)&&(x.style.marginInlineStart="0px");else if(Math.abs(te)>Math.abs(Y)){if(x.style.marginInlineStart="0",!(Math.abs(te)>Math.abs(Y)+Ve)){Ve=Math.abs(te)-Math.abs(Y);const lt=document.querySelector("#slide-right");lt&&lt.classList.add("hidden")}x.style.marginInlineStart=Number(x.style.marginInlineStart.split("px")[0])-Math.abs(Ve)+"px";const ct=document.querySelector("#slide-left");ct&&ct.classList.remove("hidden")}}const Cn=document.querySelector(".main-menu > .slide.open"),Nn=document.querySelector(".main-menu > .slide.open > ul");Cn&&Cn.classList.remove("active"),Nn&&(Nn.style.display="none")}I()}const b=()=>{typeof window<"u"&&(window.scrollY>30&&document.querySelector(".app-sidebar")?document.querySelectorAll(".app-sidebar").forEach(L=>{L.classList.add("sticky-pin")}):document.querySelectorAll(".app-sidebar").forEach(L=>{L.classList.remove("sticky-pin")}))};typeof window<"u"&&window.addEventListener("scroll",b);let S=!1,v=0;function mt(x,L,H=t){const Y=vt.getState();if((window.screen.availWidth<=992||Y.dataNavStyle!="icon-hover")&&(window.screen.availWidth<=992||Y.dataNavStyle!="menu-hover"))for(const te of H)te===L?(te.active=!0,te.selected=!0,qs(te)):!te.active&&!te.selected?(te.active=!1,te.selected=!1):Xt(te),te.children&&te.children.length>0&&mt(x,L,te.children);n(te=>[...te])}function Yt(x,L){for(const H in x)if(x.hasOwnProperty(H)){if(typeof x[H]=="object"&&JSON.stringify(x[H])===JSON.stringify(L))return x;if(typeof x[H]=="object"){const Y=Yt(x[H],L);if(Y!==null)return Y}}return null}function qs(x){const L=Yt(t,x),H=vt.getState();L?(v>2&&(S=!0),L.active=!0,L.selected=!0,v+=1,qs(L)):S||H.dataVerticalStyle=="doublemenu"&&e({...H,dataToggled:"double-menu-close"})}function Xt(x){if(x){if(Array.isArray(x))for(const L of x)L.active=!1,L.selected=!1;x.active=!1,x.selected=!1,x.children&&x.children.length>0&&Xt(x.children)}}function Zt(x){S=!1,v=1;const L=H=>{H==null||H.forEach(Y=>{Y.path==""||Y.path===x&&mt(null,Y),L(Y.children)})};L(Oi)}const[fi,$s]=oe.useState("/");oe.useEffect(()=>{const x=document.documentElement,L=new MutationObserver(Pa),H={attributes:!0};L.observe(x,H);let Y=j.pathname.endsWith("/")?j.pathname.slice(0,-1):j.pathname;Y!==fi&&(Zt(Y),$s(Y))},[j]);function Pa(x){for(const L of x)if(L.type==="attributes"&&L.attributeName==="data-nav-layout")if(L.target.getAttribute("data-nav-layout")=="vertical"){let Y=j.pathname.endsWith("/")?j.pathname.slice(0,-1):j.pathname;Y=Y||"/dashboards/collections",Zt(Y)}else N()}return E.jsxs(oe.Fragment,{children:[E.jsx("div",{id:"responsive-overlay",onClick:()=>{W()}}),E.jsxs("aside",{className:"app-sidebar border-r border-gray-200 dark:border-defaultborder/10 bg-white dark:!bg-bodybg",id:"sidebar",onMouseOver:()=>K(),onMouseLeave:()=>G(),children:[E.jsx("div",{className:"main-sidebar-header px-6 py-6 border-b border-gray-200 dark:border-defaultborder/10",children:E.jsxs(nt,{to:"/dashboards/corporate/",className:"header-logo sidebar-brand-link flex items-center gap-3 group",children:[E.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-primary via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all",children:E.jsx("span",{className:"text-white text-xl font-extrabold leading-none tracking-tight",children:"M"})}),E.jsxs("div",{className:"min-w-0 sidebar-brand-text",children:[E.jsx("h1",{className:"text-sm sm:text-lg font-bold text-primary dark:text-white tracking-tight leading-tight truncate",children:"MoolaCore"}),E.jsx("p",{className:"text-[10px] sm:text-xs text-gray-500 dark:text-white/50 -mt-0.5 truncate",children:"Financial Dashboard"})]})]})}),E.jsx(W_,{className:"main-sidebar px-3 py-4",id:"sidebar-scroll",children:E.jsxs("nav",{className:"main-menu-container nav nav-pills flex-column sub-open",children:[E.jsx("div",{className:"slide-left",id:"slide-left",onClick:()=>{w()},children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#7b8191",width:"24",height:"24",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"})})}),E.jsx("ul",{className:"main-menu space-y-1",children:D.map((x,L)=>E.jsx(oe.Fragment,{children:E.jsxs("li",{className:`${x.menutitle?"slide__category":""} ${x.type==="link"?"slide":""} ${x.type==="sub"?"slide has-sub":""} ${o[L]?"open":""} ${x.selected?"active":""}`,children:[x.menutitle&&E.jsx("span",{className:"category-name text-xs font-semibold text-gray-400 dark:text-white/40 uppercase tracking-wider px-4 py-3 block",children:x.menutitle}),x.type==="link"&&E.jsxs(nt,{to:_(x.title,x.menutitle)?"#":x.path+"/",onClick:H=>{_(x.title,x.menutitle)&&H.preventDefault()},className:`side-menu__item flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-white/70 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-600/10 hover:text-primary dark:hover:text-primary transition-all group ${x.selected?"bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-white shadow-md":""} ${_(x.title,x.menutitle)?"opacity-50 pointer-events-none cursor-not-allowed":""}`,children:[E.jsx("span",{className:`text-lg ${x.selected?"text-white":"text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors"}`,children:x.icon}),E.jsx("span",{className:"side-menu__label font-medium",children:x.title}),x.badge&&E.jsx("span",{className:"ml-auto px-2 py-0.5 text-xs font-semibold rounded-full bg-primary/10 text-primary",children:x.badge})]}),x.type==="sub"&&E.jsxs(E.Fragment,{children:[E.jsxs("button",{className:`side-menu__item w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-gray-700 dark:text-white/70 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-600/10 hover:text-primary dark:hover:text-primary transition-all group ${x.selected?"bg-gradient-to-r from-primary/20 to-purple-600/20 text-primary":""} ${_(x.title,x.menutitle)?"opacity-50 cursor-not-allowed":""}`,onClick:()=>{_(x.title,x.menutitle)||T(L)},disabled:_(x.title,x.menutitle),children:[E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("span",{className:`text-lg ${x.selected?"text-primary":"text-gray-500 group-hover:text-primary dark:group-hover:text-primary transition-colors"}`,children:x.icon}),E.jsx("span",{className:"side-menu__label font-medium",children:x.title})]}),E.jsx("svg",{className:`w-4 h-4 transition-transform duration-200 ${o[L]?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),o[L]&&E.jsx("ul",{className:"sub-menu pl-4 mt-1 space-y-1",children:x.children.map((H,Y)=>E.jsx("li",{children:E.jsxs(nt,{to:H.path+"/",className:"side-menu__item flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-gray-600 dark:text-white/60 hover:bg-primary/5 hover:text-primary dark:hover:text-primary transition-all",children:[H.icon&&E.jsx("span",{className:"text-base",children:H.icon}),E.jsx("span",{className:"side-menu__label",children:H.title})]})},Y))})]})]})},L))}),E.jsx("div",{className:"slide-right",onClick:()=>{y()},id:"slide-right",children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#7b8191",width:"24",height:"24",viewBox:"0 0 24 24",children:E.jsx("path",{d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"})})})]})})]})]})},nP=r=>({local_varaiable:r}),rP=Ef(nP,{ThemeChanger:Jc})(tP),iP=()=>E.jsx(oe.Fragment,{children:E.jsx("footer",{className:"footer mt-auto xl:ps-[15rem]  font-normal font-inter bg-white text-defaultsize leading-normal text-[0.813] shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] dark:bg-bodybg py-4 text-center",children:E.jsx("div",{className:"container",children:E.jsxs("span",{className:"text-gray dark:text-defaulttextcolor/50",children:[" Copyright © ",E.jsx("span",{id:"year",children:"2025"})," ",E.jsx(nt,{to:"#",className:"text-defaulttextcolor font-semibold dark:text-defaulttextcolor",children:"DDIN Group Ltd"}),". Designed by ",E.jsxs(nt,{to:"https://ddin.rw/",children:[" ",E.jsx("span",{className:"font-semibold text-primary underline",children:"DDIN Team"})," "]})," All rights reserved "]})})})}),VP=()=>{const[r,e]=oe.useState(""),t=()=>{const o=vt.getState();localStorage.getItem("ynexverticalstyles")=="icontext"&&e(""),window.innerWidth>992&&o.iconOverlay==="open"&&Jc({...o,iconOverlay:""})},[n,i]=oe.useState(!1);oe.useEffect(()=>{i(!0)});const s=Tf();return oe.useEffect(()=>{window.HSStaticMethods.autoInit()},[s.pathname]),E.jsx(E.Fragment,{children:E.jsx(oe.Fragment,{children:E.jsx(H_,{children:E.jsxs("div",{style:{display:`${n?"block":"none"}`},children:[E.jsx(z_,{}),E.jsxs("div",{className:"page bg-gray-50 dark:bg-bodybg min-h-screen",children:[E.jsx(eP,{}),E.jsx(rP,{}),E.jsx("div",{className:"content mt-[4.5rem]",children:E.jsx("div",{className:"main-content p-6",onClick:t,children:E.jsx($_,{})})}),E.jsx(iP,{})]}),E.jsx(K_,{})]})})})})};export{VP as default};
