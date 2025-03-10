import{r as ue,j as I,L as Me,c as Yc,u as W_,s as at,a as Tf,O as G_}from"./index-Cwgo8lsz.js";import{S as K_}from"./switcher-CdpMqfLl.js";import{M as Vi}from"./switcherdata-CwHaD5Ha.js";import{S as pc}from"./spk-dropdown-DxTWF-dP.js";import{S as Et}from"./spk-button-CNgHgY8w.js";import{T as Ko}from"./action-B0BG8J-I.js";import{i as Ph}from"./us_flag-Dz_ZHUeQ.js";import{f as H_}from"./9-BePpARcd.js";import{d as Q_}from"./desktop-logo-CfFAqhBb.js";import{t as J_}from"./toggle-logo-c-n624U2.js";import{d as kh}from"./ddinlogoT-8dqW01Cr.js";import{t as Y_}from"./toggle-dark-c-n624U2.js";import{t as X_}from"./toggle-white-c-n624U2.js";import{_ as Xc}from"./tslib.es6-C1llOWvr.js";import{S as Z_}from"./index-LxRqfBG2.js";import{B as ey}from"./backtotop-D4UG9JzQ.js";import"./preline-CebrZH6F.js";import{A as ty}from"./contextapi-CGRcXlS9.js";import"./spk-overlay-CBrCLbcC.js";import"./spk-badge-CitHwdXb.js";const ny=()=>{const[r,e]=ue.useState("false"),t=()=>e("false"),[n,i]=ue.useState("false"),[s,o]=ue.useState(""),[c,l]=ue.useState("false"),[h,f]=ue.useState("text-dark"),[m,_]=ue.useState("Type something"),[A,T]=ue.useState([]);ue.useEffect(()=>{const H=ne=>{const Y=document.querySelector(".search-result");Y&&Y.classList.add("hidden")};return document.addEventListener("click",H),()=>{document.removeEventListener("click",H)}},[]);const D=H=>{var w;(w=document.querySelector(".search-result"))==null||w.classList.remove("hidden");const ne=[],Y=[];Vi.forEach(g=>{g.children&&(i(!0),g.children.forEach(y=>{ne.push(y),y.children&&y.children.forEach(E=>{ne.push(E),E.children&&E.children.forEach(b=>{ne.push(b)})})}))});for(const g of ne)g.title.toLowerCase().includes(H.toLowerCase())&&g.title.toLowerCase().startsWith(H.toLowerCase())&&(l(!0),g.path&&!Y.some(y=>y.title===g.title)&&Y.push(g));(!Y.length||H==="")&&(H===""&&(l(!1),_("Type something"),f("text-dark")),Y.length||(l(!1),f("text-danger"),_("There is no component with this name"))),T(Y)},N=[{id:1,class:"People",icon:"user"},{id:2,class:"Pages",icon:"file-text"},{id:3,class:"Articales",icon:"align-left"},{id:4,class:"Tags",icon:"server"}],[$,Q]=ue.useState(N);function G(H){const ne=$.filter(Y=>Y.id!==H);Q(ne)}return I.jsx("div",{id:"search-modal",className:"hs-overlay ti-modal hidden mt-[1.75rem]",onClick:t,children:I.jsx("div",{className:"ti-modal-box",children:I.jsxs("div",{className:"ti-modal-content !border !border-defaultborder dark:!border-defaultborder/10 !rounded-[0.5rem]",children:[I.jsxs("div",{className:"ti-modal-body",children:[I.jsxs("div",{className:"input-group border-[2px] border-primary rounded-[0.25rem] w-full flex",children:[I.jsx("a",{"aria-label":"anchor",href:"#",className:"input-group-text flex items-center bg-light border-e-[#dee2e6] !py-[0.375rem] !px-[0.75rem] !rounded-none !text-[0.875rem]",id:"Search-Grid",children:I.jsx("i",{className:"fe fe-search header-link-icon text-[0.875rem]"})}),I.jsx("input",{type:"search",className:"form-control border-0 px-2 !text-[0.8rem] w-full focus:ring-transparent",placeholder:"Search","aria-label":"Username",defaultValue:s,autoComplete:"off",onChange:H=>{D(H.target.value),o(H.target.value)}}),I.jsx("a",{"aria-label":"anchor",href:"#",className:"!border-e-0 flex items-center input-group-text bg-light !py-[0.375rem] !px-[0.75rem]",id:"voice-search",children:I.jsx("i",{className:"fe fe-mic header-link-icon"})}),I.jsxs(pc,{Icon:!0,IconClass:"fe fe-more-vertical",arialexpand:!1,Linktag:!0,Custommenuclass:"absolute !-mt-2 !p-0",Linkclass:"flex items-center btn btn-light btn-icon !bg-light !py-[0.375rem] !rounded-none !px-[0.75rem] text-[0.95rem] h-[2.413rem] w-[2.313rem]",children:[I.jsx("li",{children:I.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Action"})}),I.jsx("li",{children:I.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Another action"})}),I.jsx("li",{children:I.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Something else here"})}),I.jsx("li",{children:I.jsx("hr",{className:"dropdown-divider"})}),I.jsx("li",{children:I.jsx("a",{className:"ti-dropdown-item flex text-defaulttextcolor dark:text-defaulttextcolor/70 !py-[0.5rem] !px-[0.9375rem] !text-[0.8125rem] font-medium",href:"#",children:"Separated link"})})]})]}),n?I.jsxs("div",{className:"box search-result relative z-[9] search-fix  border border-gray-200 dark:border-white/10 mt-1 w-100",children:[I.jsx("div",{className:"box-header",children:I.jsxs("h6",{className:"box-title me-2 text-break",children:["Search result of ",s]})}),I.jsx("div",{className:"box-body p-2 flex flex-col max-h-[250px] overflow-auto",children:c?A.map(H=>I.jsx("div",{className:"ti-list-group gap-x-3.5 text-gray-800 dark:bg-bgdark dark:border-white/10 dark:text-white",children:I.jsx(Me,{to:`${H.path}/`,className:"search-result-item",onClick:()=>{i("false"),o("")},children:H.title})},Math.random())):I.jsx("b",{className:`${h} `,children:m})})]}):"",I.jsxs("div",{className:"mt-5",children:[I.jsx("p",{className:"font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] dark:text-gray-200 mb-2",children:"Are You Looking For..."}),$.map(H=>I.jsxs("span",{className:"search-tags text-[0.75rem] !py-[0rem] !px-[0.55rem] dark:border-defaultborder/10 me-2",children:[I.jsx("i",{className:`fe fe-${H.icon} me-2`}),H.class,I.jsxs(Me,{to:"#",onClick:()=>G(H.id),className:"tag-addon header-remove-btn",children:[I.jsx("span",{className:"sr-only",children:"Remove badge"}),I.jsx("i",{className:"fe fe-x"})]})]},Math.random()))]}),I.jsxs("div",{className:"my-[1.5rem]",children:[I.jsx("p",{className:"font-normal  text-[#8c9097] dark:text-white/50 text-[0.813rem] mb-2",children:"Recent Search :"}),I.jsxs("div",{id:"dismiss-alert",role:"alert",className:"!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert",children:[I.jsx(Me,{to:"/pages/notifications/",children:I.jsx("span",{children:"Notifications"})}),I.jsx(Me,{"aria-label":"anchor",className:"ms-auto leading-none",to:"#","data-hs-remove-element":"#dismiss-alert",children:I.jsx("i",{className:"fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"})})]}),I.jsxs("div",{id:"dismiss-alert1",role:"alert",className:"!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-2 !text-[0.8125rem] alert",children:[I.jsx(Me,{to:"/ui-elements/alerts/",children:I.jsx("span",{children:"Alerts"})}),I.jsx(Me,{"aria-label":"anchor",className:"ms-auto leading-none",to:"#","data-hs-remove-element":"#dismiss-alert1",children:I.jsx("i",{className:"fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"})})]}),I.jsxs("div",{id:"dismiss-alert2",role:"alert",className:"!p-2 border dark:border-defaultborder/10 rounded-[0.3125rem] flex items-center text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 !text-[0.8125rem] alert",children:[I.jsx(Me,{to:"/pages/email/mail-app/",children:I.jsx("span",{children:"Mail"})}),I.jsx(Me,{"aria-label":"anchor",className:"ms-auto lh-1",to:"#","data-hs-remove-element":"#dismiss-alert2",children:I.jsx("i",{className:"fe fe-x !text-[0.8125rem] text-[#8c9097] dark:text-white/50"})})]})]})]}),I.jsx("div",{className:"ti-modal-footer !py-[1rem] !px-[1.25rem]",children:I.jsxs("div",{className:"inline-flex rounded-md  shadow-sm",children:[I.jsx(Et,{buttontype:"button",customClass:"ti-btn-group !px-[0.75rem] !py-[0.45rem]  rounded-s-[0.25rem] !rounded-e-none ti-btn-primary !text-[0.75rem] dark:border-white/10",children:"Search"}),I.jsx(Et,{buttontype:"button",customClass:"ti-btn-group  ti-btn-primary-full rounded-e-[0.25rem] dark:border-white/10 !text-[0.75rem] !rounded-s-none !px-[0.75rem] !py-[0.45rem]",children:"Clear Recents"})]})})]})})})};var Ch={};/**
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
 */const bf=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ry=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const i=r[t++];if(i<128)e[n++]=String.fromCharCode(i);else if(i>191&&i<224){const s=r[t++];e[n++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=r[t++],o=r[t++],c=r[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=r[t++],o=r[t++];e[n++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Af={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<r.length;i+=3){const s=r[i],o=i+1<r.length,c=o?r[i+1]:0,l=i+2<r.length,h=l?r[i+2]:0,f=s>>2,m=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,A=h&63;l||(A=64,o||(_=64)),n.push(t[f],t[m],t[_],t[A])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(bf(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ry(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<r.length;){const s=t[r.charAt(i++)],c=i<r.length?t[r.charAt(i)]:0;++i;const h=i<r.length?t[r.charAt(i)]:64;++i;const m=i<r.length?t[r.charAt(i)]:64;if(++i,s==null||c==null||h==null||m==null)throw new iy;const _=s<<2|c>>4;if(n.push(_),h!==64){const A=c<<4&240|h>>2;if(n.push(A),m!==64){const T=h<<6&192|m;n.push(T)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class iy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sy=function(r){const e=bf(r);return Af.encodeByteArray(e,!0)},Ro=function(r){return sy(r).replace(/\./g,"")},Rf=function(r){try{return Af.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function So(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!oy(t)||(r[t]=So(r[t],e[t]));return r}function oy(r){return r!=="__proto__"}/**
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
 */const ay=()=>Sf().__FIREBASE_DEFAULTS__,cy=()=>{if(typeof process>"u"||typeof Ch>"u")return;const r=Ch.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},ly=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Rf(r[1]);return e&&JSON.parse(e)},Zc=()=>{try{return ay()||cy()||ly()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Pf=()=>{var r;return(r=Zc())===null||r===void 0?void 0:r.config},uy=r=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class hy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function dy(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",i=r.iat||0,s=r.sub||r.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Ro(JSON.stringify(t)),Ro(JSON.stringify(o)),""].join(".")}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function el(){var r;const e=(r=Zc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function my(){return typeof window<"u"||kf()}function kf(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function py(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Cf(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function tl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xf(){const r=Te();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Nf(){return!el()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Yi(){try{return typeof indexedDB=="object"}catch{return!1}}function gy(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const _y="FirebaseError";class rt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=_y,Object.setPrototypeOf(this,rt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cr.prototype.create)}}class cr{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?yy(s,n):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new rt(i,c,n)}}function yy(r,e){return r.replace(vy,(t,n)=>{const i=e[n];return i!=null?String(i):`<${n}?>`})}const vy=/\{\$([^}]+)}/g;/**
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
 */function xh(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function Iy(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Xi(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const i of t){if(!n.includes(i))return!1;const s=r[i],o=e[i];if(Nh(s)&&Nh(o)){if(!Xi(s,o))return!1}else if(s!==o)return!1}for(const i of n)if(!t.includes(i))return!1;return!0}function Nh(r){return r!==null&&typeof r=="object"}/**
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
 */function ti(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function xr(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[i,s]=n.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oi(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Df(r,e){const t=new wy(r,e);return t.subscribe.bind(t)}class wy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let i;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Ey(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:n},i.next===void 0&&(i.next=Za),i.error===void 0&&(i.error=Za),i.complete===void 0&&(i.complete=Za);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ey(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Za(){}/**
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
 */function J(r){return r&&r._delegate?r._delegate:r}class Vt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mn="[DEFAULT]";/**
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
 */class Ty{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new hy;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ay(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});n.resolve(s)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(i))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:by(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function by(r){return r===Mn?void 0:r}function Ay(r){return r.instantiationMode==="EAGER"}/**
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
 */class Vf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ty(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const nl=[];var re;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(re||(re={}));const Of={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},Ry=re.INFO,Sy={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},Py=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),i=Sy[e];if(i)console[i](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ho{constructor(e){this.name=e,this._logLevel=Ry,this._logHandler=Py,this._userLogHandler=null,nl.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Of[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}function ky(r){nl.forEach(e=>{e.setLogLevel(r)})}function Cy(r,e){for(const t of nl){let n=null;e&&e.level&&(n=Of[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(i,s,...o)=>{const c=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(n??i.logLevel)&&r({level:re[s].toLowerCase(),message:c,args:o,type:i.name})}}}const xy=(r,e)=>e.some(t=>r instanceof t);let Dh,Vh;function Ny(){return Dh||(Dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Dy(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lf=new WeakMap,gc=new WeakMap,Mf=new WeakMap,ec=new WeakMap,rl=new WeakMap;function Vy(r){const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("success",s),r.removeEventListener("error",o)},s=()=>{t(dn(r.result)),i()},o=()=>{n(r.error),i()};r.addEventListener("success",s),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Lf.set(t,r)}).catch(()=>{}),rl.set(e,r),e}function Oy(r){if(gc.has(r))return;const e=new Promise((t,n)=>{const i=()=>{r.removeEventListener("complete",s),r.removeEventListener("error",o),r.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),i()};r.addEventListener("complete",s),r.addEventListener("error",o),r.addEventListener("abort",o)});gc.set(r,e)}let _c={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return gc.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Mf.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return dn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function Ly(r){_c=r(_c)}function My(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(tc(this),e,...t);return Mf.set(n,e.sort?e.sort():[e]),dn(n)}:Dy().includes(r)?function(...e){return r.apply(tc(this),e),dn(Lf.get(this))}:function(...e){return dn(r.apply(tc(this),e))}}function Fy(r){return typeof r=="function"?My(r):(r instanceof IDBTransaction&&Oy(r),xy(r,Ny())?new Proxy(r,_c):r)}function dn(r){if(r instanceof IDBRequest)return Vy(r);if(ec.has(r))return ec.get(r);const e=Fy(r);return e!==r&&(ec.set(r,e),rl.set(e,r)),e}const tc=r=>rl.get(r);function Uy(r,e,{blocked:t,upgrade:n,blocking:i,terminated:s}={}){const o=indexedDB.open(r,e),c=dn(o);return n&&o.addEventListener("upgradeneeded",l=>{n(dn(o.result),l.oldVersion,l.newVersion,dn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const By=["get","getKey","getAll","getAllKeys","count"],jy=["put","add","delete","clear"],nc=new Map;function Oh(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(nc.get(e))return nc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,i=jy.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(i||By.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),i&&l.done]))[0]};return nc.set(e,s),s}Ly(r=>({...r,get:(e,t,n)=>Oh(e,t)||r.get(e,t,n),has:(e,t)=>!!Oh(e,t)||r.has(e,t)}));/**
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
 */class qy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if($y(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function $y(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Po="@firebase/app",yc="0.10.13";/**
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
 */const Wt=new Ho("@firebase/app"),zy="@firebase/app-compat",Wy="@firebase/analytics-compat",Gy="@firebase/analytics",Ky="@firebase/app-check-compat",Hy="@firebase/app-check",Qy="@firebase/auth",Jy="@firebase/auth-compat",Yy="@firebase/database",Xy="@firebase/data-connect",Zy="@firebase/database-compat",ev="@firebase/functions",tv="@firebase/functions-compat",nv="@firebase/installations",rv="@firebase/installations-compat",iv="@firebase/messaging",sv="@firebase/messaging-compat",ov="@firebase/performance",av="@firebase/performance-compat",cv="@firebase/remote-config",lv="@firebase/remote-config-compat",uv="@firebase/storage",hv="@firebase/storage-compat",dv="@firebase/firestore",fv="@firebase/vertexai-preview",mv="@firebase/firestore-compat",pv="firebase",gv="10.14.1";/**
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
 */const mn="[DEFAULT]",_v={[Po]:"fire-core",[zy]:"fire-core-compat",[Gy]:"fire-analytics",[Wy]:"fire-analytics-compat",[Hy]:"fire-app-check",[Ky]:"fire-app-check-compat",[Qy]:"fire-auth",[Jy]:"fire-auth-compat",[Yy]:"fire-rtdb",[Xy]:"fire-data-connect",[Zy]:"fire-rtdb-compat",[ev]:"fire-fn",[tv]:"fire-fn-compat",[nv]:"fire-iid",[rv]:"fire-iid-compat",[iv]:"fire-fcm",[sv]:"fire-fcm-compat",[ov]:"fire-perf",[av]:"fire-perf-compat",[cv]:"fire-rc",[lv]:"fire-rc-compat",[uv]:"fire-gcs",[hv]:"fire-gcs-compat",[dv]:"fire-fst",[mv]:"fire-fst-compat",[fv]:"fire-vertex","fire-js":"fire-js",[pv]:"fire-js-all"};/**
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
 */const pn=new Map,Fr=new Map,Ur=new Map;function Zi(r,e){try{r.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Ff(r,e){r.container.addOrOverwriteComponent(e)}function gn(r){const e=r.name;if(Ur.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;Ur.set(e,r);for(const t of pn.values())Zi(t,r);for(const t of Fr.values())Zi(t,r);return!0}function Uf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function yv(r,e,t=mn){Uf(r,e).clearInstance(t)}function Bf(r){return r.options!==void 0}function Ae(r){return r.settings!==void 0}function vv(){Ur.clear()}/**
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
 */const Iv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new cr("app","Firebase",Iv);/**
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
 */let jf=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}};/**
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
 */class wv extends jf{constructor(e,t,n,i){const s=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,o={name:n,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const c=e;super(c.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},t),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,Tt(Po,yc,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){sl(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw yt.create("server-app-deleted")}}/**
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
 */const An=gv;function il(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:mn,automaticDataCollectionEnabled:!1},e),i=n.name;if(typeof i!="string"||!i)throw yt.create("bad-app-name",{appName:String(i)});if(t||(t=Pf()),!t)throw yt.create("no-options");const s=pn.get(i);if(s){if(Xi(t,s.options)&&Xi(n,s.config))return s;throw yt.create("duplicate-app",{appName:i})}const o=new Vf(i);for(const l of Ur.values())o.addComponent(l);const c=new jf(t,n,o);return pn.set(i,c),c}function Ev(r,e){if(my()&&!kf())throw yt.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;Bf(r)?t=r.options:t=r;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const i=h=>[...h].reduce((f,m)=>Math.imul(31,f)+m.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw yt.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(n)),o=Fr.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const c=new Vf(s);for(const h of Ur.values())c.addComponent(h);const l=new wv(t,e,s,c);return Fr.set(s,l),l}function Tv(r=mn){const e=pn.get(r);if(!e&&r===mn&&Pf())return il();if(!e)throw yt.create("no-app",{appName:r});return e}function bv(){return Array.from(pn.values())}async function sl(r){let e=!1;const t=r.name;pn.has(t)?(e=!0,pn.delete(t)):Fr.has(t)&&r.decRefCount()<=0&&(Fr.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(n=>n.delete())),r.isDeleted=!0)}function Tt(r,e,t){var n;let i=(n=_v[r])!==null&&n!==void 0?n:r;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(c.join(" "));return}gn(new Vt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function qf(r,e){if(r!==null&&typeof r!="function")throw yt.create("invalid-log-argument");Cy(r,e)}function $f(r){ky(r)}/**
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
 */const Av="firebase-heartbeat-database",Rv=1,es="firebase-heartbeat-store";let rc=null;function zf(){return rc||(rc=Uy(Av,Rv,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(es)}catch(t){console.warn(t)}}}}).catch(r=>{throw yt.create("idb-open",{originalErrorMessage:r.message})})),rc}async function Sv(r){try{const t=(await zf()).transaction(es),n=await t.objectStore(es).get(Wf(r));return await t.done,n}catch(e){if(e instanceof rt)Wt.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function Lh(r,e){try{const n=(await zf()).transaction(es,"readwrite");await n.objectStore(es).put(e,Wf(r)),await n.done}catch(t){if(t instanceof rt)Wt.warn(t.message);else{const n=yt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(n.message)}}}function Wf(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Pv=1024,kv=30*24*60*60*1e3;class Cv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Nv(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Mh();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=kv}),this._storage.overwrite(this._heartbeatsCache))}catch(n){Wt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mh(),{heartbeatsToSend:n,unsentEntries:i}=xv(this._heartbeatsCache.heartbeats),s=Ro(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Wt.warn(t),""}}}function Mh(){return new Date().toISOString().substring(0,10)}function xv(r,e=Pv){const t=[];let n=r.slice();for(const i of r){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Fh(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fh(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Nv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yi()?gy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Sv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Lh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fh(r){return Ro(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function Dv(r){gn(new Vt("platform-logger",e=>new qy(e),"PRIVATE")),gn(new Vt("heartbeat",e=>new Cv(e),"PRIVATE")),Tt(Po,yc,r),Tt(Po,yc,"esm2017"),Tt("fire-js","")}Dv("");const Vv=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:rt,SDK_VERSION:An,_DEFAULT_ENTRY_NAME:mn,_addComponent:Zi,_addOrOverwriteComponent:Ff,_apps:pn,_clearComponents:vv,_components:Ur,_getProvider:Uf,_isFirebaseApp:Bf,_isFirebaseServerApp:Ae,_registerComponent:gn,_removeServiceInstance:yv,_serverApps:Fr,deleteApp:sl,getApp:Tv,getApps:bv,initializeApp:il,initializeServerApp:Ev,onLog:qf,registerVersion:Tt,setLogLevel:$f},Symbol.toStringTag,{value:"Module"}));/**
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
 */class Ov{constructor(e,t){this._delegate=e,this.firebase=t,Zi(e,new Vt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),sl(this._delegate)))}_getService(e,t=mn){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((n=i.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=mn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Zi(this._delegate,e)}_addOrOverwriteComponent(e){Ff(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Lv={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Uh=new cr("app-compat","Firebase",Lv);/**
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
 */function Mv(r){const e={},t={__esModule:!0,initializeApp:s,app:i,registerVersion:Tt,setLogLevel:$f,onLog:qf,apps:null,SDK_VERSION:An,INTERNAL:{registerComponent:c,removeApp:n,useAsService:l,modularAPIs:Vv}};t.default=t,Object.defineProperty(t,"apps",{get:o});function n(h){delete e[h]}function i(h){if(h=h||mn,!xh(e,h))throw Uh.create("no-app",{appName:h});return e[h]}i.App=r;function s(h,f={}){const m=il(h,f);if(xh(e,m.name))return e[m.name];const _=new r(m,t);return e[m.name]=_,_}function o(){return Object.keys(e).map(h=>e[h])}function c(h){const f=h.name,m=f.replace("-compat","");if(gn(h)&&h.type==="PUBLIC"){const _=(A=i())=>{if(typeof A[m]!="function")throw Uh.create("invalid-app-argument",{appName:f});return A[m]()};h.serviceProps!==void 0&&So(_,h.serviceProps),t[m]=_,r.prototype[m]=function(...A){return this._getService.bind(this,f).apply(this,h.multipleInstances?A:[])}}return h.type==="PUBLIC"?t[m]:null}function l(h,f){return f==="serverAuth"?null:f}return t}/**
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
 */function Gf(){const r=Mv(Ov);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:Gf,extendNamespace:e,createSubscribe:Df,ErrorFactory:cr,deepExtend:So});function e(t){So(r,t)}return r}const Fv=Gf();/**
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
 */const Bh=new Ho("@firebase/app-compat"),Uv="@firebase/app-compat",Bv="0.2.43";/**
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
 */function jv(r){Tt(Uv,Bv,r)}/**
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
 */try{const r=Sf();if(r.firebase!==void 0){Bh.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=r.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Bh.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const lr=Fv;jv();var qv="firebase",$v="10.14.1";/**
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
 */lr.registerVersion(qv,$v,"app-compat");const Ri={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ir={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function zv(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Kf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wv=zv,Gv=Kf,Hf=new cr("auth","Firebase",Kf());/**
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
 */const ko=new Ho("@firebase/auth");function Kv(r,...e){ko.logLevel<=re.WARN&&ko.warn(`Auth (${An}): ${r}`,...e)}function mo(r,...e){ko.logLevel<=re.ERROR&&ko.error(`Auth (${An}): ${r}`,...e)}/**
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
 */function Ke(r,...e){throw al(r,...e)}function Fe(r,...e){return al(r,...e)}function ol(r,e,t){const n=Object.assign(Object.assign({},Gv()),{[e]:t});return new cr("auth","Firebase",n).create(e,{appName:r.name})}function qe(r){return ol(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ni(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Ke(r,"argument-error"),ol(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function al(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Hf.create(r,...e)}function L(r,e,...t){if(!r)throw al(e,...t)}function kt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw mo(e),new Error(e)}function bt(r,e){r||kt(e)}/**
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
 */function ts(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function cl(){return jh()==="http:"||jh()==="https:"}function jh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Hv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cl()||Cf()||"connection"in navigator)?navigator.onLine:!0}function Qv(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,bt(t>e,"Short delay should be less than long delay!"),this.isMobile=fy()||tl()}get(){return Hv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ll(r,e){bt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Qf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yv=new ws(3e4,6e4);function Pe(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function ke(r,e,t,n,i={}){return Jf(r,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=ti(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const h=Object.assign({method:e,headers:l},s);return py()||(h.referrerPolicy="no-referrer"),Qf.fetch()(Yf(r,r.config.apiHost,t,c),h)})}async function Jf(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Jv),e);try{const i=new Zv(r),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Li(r,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Li(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Li(r,"user-disabled",o);const f=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ol(r,f,h);Ke(r,f)}}catch(i){if(i instanceof rt)throw i;Ke(r,"network-request-failed",{message:String(i)})}}async function Qt(r,e,t,n,i={}){const s=await ke(r,e,t,n,i);return"mfaPendingCredential"in s&&Ke(r,"multi-factor-auth-required",{_serverResponse:s}),s}function Yf(r,e,t,n){const i=`${e}${t}?${n}`;return r.config.emulator?ll(r.config,i):`${r.config.apiScheme}://${i}`}function Xv(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Fe(this.auth,"network-request-failed")),Yv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const i=Fe(r,e,n);return i.customData._tokenResponse=t,i}/**
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
 */function qh(r){return r!==void 0&&r.getResponse!==void 0}function $h(r){return r!==void 0&&r.enterprise!==void 0}class eI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function tI(r){return(await ke(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function nI(r,e){return ke(r,"GET","/v2/recaptchaConfig",Pe(r,e))}/**
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
 */async function rI(r,e){return ke(r,"POST","/v1/accounts:delete",e)}async function iI(r,e){return ke(r,"POST","/v1/accounts:update",e)}async function Xf(r,e){return ke(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function qi(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sI(r,e=!1){const t=J(r),n=await t.getIdToken(e),i=Qo(n);L(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:qi(ic(i.auth_time)),issuedAtTime:qi(ic(i.iat)),expirationTime:qi(ic(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ic(r){return Number(r)*1e3}function Qo(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rf(t);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zh(r){const e=Qo(r);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gt(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof rt&&oI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function oI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class aI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ns(r){var e;const t=r.auth,n=await r.getIdToken(),i=await Gt(r,Xf(t,{idToken:n}));L(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];r._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Zf(s.providerUserInfo):[],c=lI(r.providerData,o),l=r.isAnonymous,h=!(r.email&&s.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new vc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(r,m)}async function cI(r){const e=J(r);await ns(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lI(r,e){return[...r.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function Zf(r){return r.map(e=>{var{providerId:t}=e,n=Xc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function uI(r,e){const t=await Jf(r,{},async()=>{const n=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=r.config,o=Yf(r,i,"/v1/token",`key=${s}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Qf.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hI(r,e){return ke(r,"POST","/v2/accounts:revokeToken",Pe(r,e))}/**
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
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){L(e.length!==0,"internal-error");const t=zh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(L(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:s}=await uI(e,t);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:s}=t,o=new Nr;return n&&(L(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return kt("not implemented")}}/**
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
 */function rn(r,e){L(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,s=Xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Gt(this,this.stsTokenManager.getToken(this.auth,e));return L(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return sI(this,e)}reload(){return cI(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ns(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ae(this.auth.app))return Promise.reject(qe(this.auth));const e=await this.getIdToken();return await Gt(this,rI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,s,o,c,l,h,f;const m=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(i=t.email)!==null&&i!==void 0?i:void 0,A=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=t.photoURL)!==null&&o!==void 0?o:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,Q=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:G,emailVerified:H,isAnonymous:ne,providerData:Y,stsTokenManager:w}=t;L(G&&w,e,"internal-error");const g=Nr.fromJSON(this.name,w);L(typeof G=="string",e,"internal-error"),rn(m,e.name),rn(_,e.name),L(typeof H=="boolean",e,"internal-error"),L(typeof ne=="boolean",e,"internal-error"),rn(A,e.name),rn(T,e.name),rn(D,e.name),rn(N,e.name),rn($,e.name),rn(Q,e.name);const y=new jt({uid:G,auth:e,email:_,emailVerified:H,displayName:m,isAnonymous:ne,photoURL:T,phoneNumber:A,tenantId:D,stsTokenManager:g,createdAt:$,lastLoginAt:Q});return Y&&Array.isArray(Y)&&(y.providerData=Y.map(E=>Object.assign({},E))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,t,n=!1){const i=new Nr;i.updateFromServerResponse(t);const s=new jt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ns(s),s}static async _fromGetAccountInfoResponse(e,t,n){const i=t.users[0];L(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Zf(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Nr;c.updateFromIdToken(n);const l=new jt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,h),l}}/**
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
 */const Wh=new Map;function pt(r){bt(r instanceof Function,"Expected a class definition");let e=Wh.get(r);return e?(bt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Wh.set(r,e),e)}/**
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
 */function Kn(r,e,t){return`firebase:${r}:${e}:${t}`}class Dr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Kn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kn("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Dr(pt(Br),e,n);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||pt(Br);const o=Kn(n,e.config.apiKey,e.name);let c=null;for(const h of t)try{const f=await h._get(o);if(f){const m=jt._fromJSON(e,f);h!==s&&(c=m),s=h;break}}catch{}const l=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Dr(s,e,n):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Dr(s,e,n))}}/**
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
 */function Gh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sm(e))return"Blackberry";if(om(e))return"Webos";if(nm(e))return"Safari";if((e.includes("chrome/")||rm(e))&&!e.includes("edge/"))return"Chrome";if(Es(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function tm(r=Te()){return/firefox\//i.test(r)}function nm(r=Te()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rm(r=Te()){return/crios\//i.test(r)}function im(r=Te()){return/iemobile/i.test(r)}function Es(r=Te()){return/android/i.test(r)}function sm(r=Te()){return/blackberry/i.test(r)}function om(r=Te()){return/webos/i.test(r)}function Ts(r=Te()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function dI(r=Te()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function fI(r=Te()){var e;return Ts(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mI(){return xf()&&document.documentMode===10}function am(r=Te()){return Ts(r)||Es(r)||om(r)||sm(r)||/windows phone/i.test(r)||im(r)}/**
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
 */function cm(r,e=[]){let t;switch(r){case"Browser":t=Gh(Te());break;case"Worker":t=`${Gh(Te())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${An}/${n}`}/**
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
 */class pI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function gI(r,e={}){return ke(r,"GET","/v2/passwordPolicy",Pe(r,e))}/**
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
 */const _I=6;class yI{constructor(e){var t,n,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:_I,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,i,s,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let i=0;i<e.length;i++)n=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class vI{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new pI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pt(t)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xf(this,{idToken:e}),n=await jt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ae(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ns(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ae(this.app))return Promise.reject(qe(this));const t=e?J(e):null;return t&&L(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ae(this.app)?Promise.reject(qe(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ae(this.app)?Promise.reject(qe(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gI(this),t=new yI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new cr("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await hI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pt(e)||this._popupRedirectResolver;L(t,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[pt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(L(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Kv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Re(r){return J(r)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Df(t=>this.observer=t)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let bs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function II(r){bs=r}function ul(r){return bs.loadJS(r)}function wI(){return bs.recaptchaV2Script}function EI(){return bs.recaptchaEnterpriseScript}function TI(){return bs.gapiScript}function lm(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const bI="recaptcha-enterprise",AI="NO_RECAPTCHA";class RI{constructor(e){this.type=bI,this.auth=Re(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{nI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new eI(l);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function i(s,o,c){const l=window.grecaptcha;$h(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(AI)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&$h(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=EI();l.length!==0&&(l+=c),ul(l).then(()=>{i(c,s,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Hh(r,e,t,n=!1){const i=new RI(r);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function rs(r,e,t,n){var i;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Hh(r,e,t,t==="getOobCode");return n(r,s)}else return n(r,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hh(r,e,t,t==="getOobCode");return n(r,o)}else return Promise.reject(s)})}function SI(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(pt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function PI(r,e,t){const n=Re(r);L(n._canInitEmulator,n,"emulator-config-failed"),L(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),s=um(e),{host:o,port:c}=kI(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||CI()}function um(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function kI(r){const e=um(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:Qh(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:Qh(o)}}}function Qh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function CI(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class ri{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return kt("not implemented")}_getIdTokenResponse(e){return kt("not implemented")}_linkToIdToken(e,t){return kt("not implemented")}_getReauthenticationResolver(e){return kt("not implemented")}}/**
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
 */async function hm(r,e){return ke(r,"POST","/v1/accounts:resetPassword",Pe(r,e))}async function xI(r,e){return ke(r,"POST","/v1/accounts:update",e)}async function NI(r,e){return ke(r,"POST","/v1/accounts:signUp",e)}async function DI(r,e){return ke(r,"POST","/v1/accounts:update",Pe(r,e))}/**
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
 */async function VI(r,e){return Qt(r,"POST","/v1/accounts:signInWithPassword",Pe(r,e))}async function Jo(r,e){return ke(r,"POST","/v1/accounts:sendOobCode",Pe(r,e))}async function OI(r,e){return Jo(r,e)}async function LI(r,e){return Jo(r,e)}async function MI(r,e){return Jo(r,e)}async function FI(r,e){return Jo(r,e)}/**
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
 */async function UI(r,e){return Qt(r,"POST","/v1/accounts:signInWithEmailLink",Pe(r,e))}async function BI(r,e){return Qt(r,"POST","/v1/accounts:signInWithEmailLink",Pe(r,e))}/**
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
 */class is extends ri{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new is(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new is(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rs(e,t,"signInWithPassword",VI);case"emailLink":return UI(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rs(e,n,"signUpPassword",NI);case"emailLink":return BI(e,{idToken:t,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function zt(r,e){return Qt(r,"POST","/v1/accounts:signInWithIdp",Pe(r,e))}/**
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
 */const jI="http://localhost";class Ot extends ri{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ot(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ke("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,s=Xc(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Ot(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zt(e,t)}buildRequest(){const e={requestUri:jI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ti(t)}return e}}/**
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
 */async function qI(r,e){return ke(r,"POST","/v1/accounts:sendVerificationCode",Pe(r,e))}async function $I(r,e){return Qt(r,"POST","/v1/accounts:signInWithPhoneNumber",Pe(r,e))}async function zI(r,e){const t=await Qt(r,"POST","/v1/accounts:signInWithPhoneNumber",Pe(r,e));if(t.temporaryProof)throw Li(r,"account-exists-with-different-credential",t);return t}const WI={USER_NOT_FOUND:"user-not-found"};async function GI(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Qt(r,"POST","/v1/accounts:signInWithPhoneNumber",Pe(r,t),WI)}/**
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
 */class Hn extends ri{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Hn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Hn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return $I(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return zI(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return GI(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s}=e;return!n&&!t&&!i&&!s?null:new Hn({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:s})}}/**
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
 */function KI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HI(r){const e=xr(Oi(r)).link,t=e?xr(Oi(e)).deep_link_id:null,n=xr(Oi(r)).deep_link_id;return(n?xr(Oi(n)).link:null)||n||t||e||r}class Yo{constructor(e){var t,n,i,s,o,c;const l=xr(Oi(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,f=(n=l.oobCode)!==null&&n!==void 0?n:null,m=KI((i=l.mode)!==null&&i!==void 0?i:null);L(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=HI(e);try{return new Yo(t)}catch{return null}}}/**
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
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,t){return is._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Yo.parseLink(t);return L(n,"argument-error"),is._fromEmailAndCode(e,n.code,n.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ii extends Jt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Vr extends ii{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return L("providerId"in t&&"signInMethod"in t,"argument-error"),Ot._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return L(e.idToken||e.accessToken,"argument-error"),Ot._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Vr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Vr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:c}=e;if(!n&&!i&&!t&&!s||!c)return null;try{return new Vr(c)._credential({idToken:t,accessToken:n,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class At extends ii{constructor(){super("facebook.com")}static credential(e){return Ot._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ot._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Rt.credential(t,n)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class St extends ii{constructor(){super("github.com")}static credential(e){return Ot._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */const QI="http://localhost";class jr extends ri{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return zt(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zt(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:s}=t;return!n||!i||!s||n!==i?null:new jr(n,s)}static _create(e,t){return new jr(e,t)}buildRequest(){return{requestUri:QI,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const JI="saml.";class Co extends Jt{constructor(e){L(e.startsWith(JI),"argument-error"),super(e)}static credentialFromResult(e){return Co.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Co.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=jr.fromJSON(e);return L(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return jr._create(n,t)}catch{return null}}}/**
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
 */class Pt extends ii{constructor(){super("twitter.com")}static credential(e,t){return Ot._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pt.credential(t,n)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */async function dm(r,e){return Qt(r,"POST","/v1/accounts:signUp",Pe(r,e))}/**
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
 */class vt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const s=await jt._fromIdTokenResponse(e,n,i),o=Jh(n);return new vt({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Jh(n);return new vt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Jh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */async function YI(r){var e;if(Ae(r.app))return Promise.reject(qe(r));const t=Re(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new vt({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await dm(t,{returnSecureToken:!0}),i=await vt._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(i.user),i}/**
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
 */class xo extends rt{constructor(e,t,n,i){var s;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,xo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new xo(e,t,n,i)}}function fm(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xo._fromErrorAndOperation(r,s,e,n):s})}/**
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
 */async function XI(r,e){const t=J(r);await Xo(!0,t,e);const{providerUserInfo:n}=await iI(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),i=mm(n||[]);return t.providerData=t.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function hl(r,e,t=!1){const n=await Gt(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return vt._forOperation(r,"link",n)}async function Xo(r,e,t){await ns(e);const n=mm(e.providerData),i=r===!1?"provider-already-linked":"no-such-provider";L(n.has(t)===r,e.auth,i)}/**
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
 */async function pm(r,e,t=!1){const{auth:n}=r;if(Ae(n.app))return Promise.reject(qe(n));const i="reauthenticate";try{const s=await Gt(r,fm(n,i,e,r),t);L(s.idToken,n,"internal-error");const o=Qo(s.idToken);L(o,n,"internal-error");const{sub:c}=o;return L(r.uid===c,n,"user-mismatch"),vt._forOperation(r,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ke(n,"user-mismatch"),s}}/**
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
 */async function gm(r,e,t=!1){if(Ae(r.app))return Promise.reject(qe(r));const n="signIn",i=await fm(r,n,e),s=await vt._fromIdTokenResponse(r,n,i);return t||await r._updateCurrentUser(s.user),s}async function Zo(r,e){return gm(Re(r),e)}async function _m(r,e){const t=J(r);return await Xo(!1,t,e.providerId),hl(t,e)}async function ym(r,e){return pm(J(r),e)}/**
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
 */async function ZI(r,e){return Qt(r,"POST","/v1/accounts:signInWithCustomToken",Pe(r,e))}/**
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
 */async function ew(r,e){if(Ae(r.app))return Promise.reject(qe(r));const t=Re(r),n=await ZI(t,{token:e,returnSecureToken:!0}),i=await vt._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(i.user),i}/**
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
 */class As{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?dl._fromServerResponse(e,t):"totpInfo"in t?fl._fromServerResponse(e,t):Ke(e,"internal-error")}}class dl extends As{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new dl(t)}}class fl extends As{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new fl(t)}}/**
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
 */function ea(r,e,t){var n;L(((n=t.url)===null||n===void 0?void 0:n.length)>0,r,"invalid-continue-uri"),L(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(L(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(L(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function ml(r){const e=Re(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tw(r,e,t){const n=Re(r),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&ea(n,i,t),await rs(n,i,"getOobCode",LI)}async function nw(r,e,t){await hm(J(r),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&ml(r),n})}async function rw(r,e){await DI(J(r),{oobCode:e})}async function vm(r,e){const t=J(r),n=await hm(t,{oobCode:e}),i=n.requestType;switch(L(i,t,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":L(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":L(n.mfaInfo,t,"internal-error");default:L(n.email,t,"internal-error")}let s=null;return n.mfaInfo&&(s=As._fromServerResponse(Re(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:s},operation:i}}async function iw(r,e){const{data:t}=await vm(J(r),e);return t.email}async function sw(r,e,t){if(Ae(r.app))return Promise.reject(qe(r));const n=Re(r),o=await rs(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dm).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ml(r),l}),c=await vt._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function ow(r,e,t){return Ae(r.app)?Promise.reject(qe(r)):Zo(J(r),Rn.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&ml(r),n})}/**
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
 */async function aw(r,e,t){const n=Re(r),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,c){L(c.handleCodeInApp,n,"argument-error"),c&&ea(n,o,c)}s(i,t),await rs(n,i,"getOobCode",MI)}function cw(r,e){const t=Yo.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function lw(r,e,t){if(Ae(r.app))return Promise.reject(qe(r));const n=J(r),i=Rn.credentialWithLink(e,t||ts());return L(i._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Zo(n,i)}/**
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
 */async function uw(r,e){return ke(r,"POST","/v1/accounts:createAuthUri",Pe(r,e))}/**
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
 */async function hw(r,e){const t=cl()?ts():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:i}=await uw(J(r),n);return i||[]}async function dw(r,e){const t=J(r),i={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&ea(t.auth,i,e);const{email:s}=await OI(t.auth,i);s!==r.email&&await r.reload()}async function fw(r,e,t){const n=J(r),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&ea(n.auth,s,t);const{email:o}=await FI(n.auth,s);o!==r.email&&await r.reload()}/**
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
 */async function mw(r,e){return ke(r,"POST","/v1/accounts:update",e)}/**
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
 */async function pw(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=J(r),s={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Gt(n,mw(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function gw(r,e){const t=J(r);return Ae(t.auth.app)?Promise.reject(qe(t.auth)):Im(t,e,null)}function _w(r,e){return Im(J(r),null,e)}async function Im(r,e,t){const{auth:n}=r,s={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(s.email=e),t&&(s.password=t);const o=await Gt(r,xI(n,s));await r._updateTokensIfNecessary(o,!0)}/**
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
 */function yw(r){var e,t;if(!r)return null;const{providerId:n}=r,i=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},s=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(r!=null&&r.idToken)){const o=(t=(e=Qo(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const c=o!=="anonymous"&&o!=="custom"?o:null;return new Or(s,c)}}if(!n)return null;switch(n){case"facebook.com":return new vw(s,i);case"github.com":return new Iw(s,i);case"google.com":return new ww(s,i);case"twitter.com":return new Ew(s,i,r.screenName||null);case"custom":case"anonymous":return new Or(s,null);default:return new Or(s,n,i)}}class Or{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class wm extends Or{constructor(e,t,n,i){super(e,t,n),this.username=i}}class vw extends Or{constructor(e,t){super(e,"facebook.com",t)}}class Iw extends wm{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class ww extends Or{constructor(e,t){super(e,"google.com",t)}}class Ew extends wm{constructor(e,t,n){super(e,"twitter.com",t,n)}}function Tw(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:yw(t)}/**
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
 */class zn{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new zn("enroll",e,t)}static _fromMfaPendingCredential(e){return new zn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return zn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return zn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class pl{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),i=t.customData._serverResponse,s=(i.mfaInfo||[]).map(c=>As._fromServerResponse(n,c));L(i.mfaPendingCredential,n,"internal-error");const o=zn._fromMfaPendingCredential(i.mfaPendingCredential);return new pl(o,s,async c=>{const l=await c._process(n,o);delete i.mfaInfo,delete i.mfaPendingCredential;const h=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(t.operationType){case"signIn":const f=await vt._fromIdTokenResponse(n,t.operationType,h);return await n._updateCurrentUser(f.user),f;case"reauthenticate":return L(t.user,n,"internal-error"),vt._forOperation(t.user,t.operationType,h);default:Ke(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function bw(r,e){var t;const n=J(r),i=e;return L(e.customData.operationType,n,"argument-error"),L((t=i.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,n,"argument-error"),pl._fromError(n,i)}/**
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
 */function Aw(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:start",Pe(r,e))}function Rw(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:finalize",Pe(r,e))}function Sw(r,e){return ke(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Pe(r,e))}class gl{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>As._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new gl(e)}async getSession(){return zn._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,i=await this.getSession(),s=await Gt(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const i=await Gt(this.user,Sw(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==t),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const sc=new WeakMap;function Pw(r){const e=J(r);return sc.has(e)||sc.set(e,gl._fromUser(e)),sc.get(e)}const No="__sak";/**
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
 */const kw=1e3,Cw=10;class Tm extends Em{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);mI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Cw):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tm.type="LOCAL";const _l=Tm;/**
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
 */class bm extends Em{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bm.type="SESSION";const Jn=bm;/**
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
 */function xw(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const n=new ta(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const c=Array.from(o).map(async h=>h(t.origin,s)),l=await xw(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function Rs(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class Nw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const h=Rs("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(m){const _=m;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(_.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Le(){return window}function Dw(r){Le().location.href=r}/**
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
 */function yl(){return typeof Le().WorkerGlobalScope<"u"&&typeof Le().importScripts=="function"}async function Vw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ow(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function Lw(){return yl()?self:null}/**
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
 */const Am="firebaseLocalStorageDb",Mw=1,Do="firebaseLocalStorage",Rm="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function na(r,e){return r.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function Fw(){const r=indexedDB.deleteDatabase(Am);return new Ss(r).toPromise()}function Ic(){const r=indexedDB.open(Am,Mw);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Do,{keyPath:Rm})}catch(i){t(i)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Do)?e(n):(n.close(),await Fw(),e(await Ic()))})})}async function Yh(r,e,t){const n=na(r,!0).put({[Rm]:e,value:t});return new Ss(n).toPromise()}async function Uw(r,e){const t=na(r,!1).get(e),n=await new Ss(t).toPromise();return n===void 0?null:n.value}function Xh(r,e){const t=na(r,!0).delete(e);return new Ss(t).toPromise()}const Bw=800,jw=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ic(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>jw)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(Lw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vw(),!this.activeServiceWorker)return;this.sender=new Nw(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ow()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ic();return await Yh(e,No,"1"),await Xh(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Yh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>Uw(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=na(i,!1).getAll();return new Ss(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const ss=Sm;/**
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
 */function qw(r,e){return ke(r,"POST","/v2/accounts/mfaSignIn:start",Pe(r,e))}function $w(r,e){return ke(r,"POST","/v2/accounts/mfaSignIn:finalize",Pe(r,e))}/**
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
 */const zw=500,Ww=6e4,oo=1e12;class Gw{constructor(e){this.auth=e,this.counter=oo,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new Kw(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||oo;(t=this._widgets.get(n))===null||t===void 0||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||oo;return((t=this._widgets.get(n))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const n=e||oo;return(t=this._widgets.get(n))===null||t===void 0||t.execute(),""}}class Kw{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;L(i,"argument-error",{appName:t}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Hw(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Ww)},zw))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Hw(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<r;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const oc=lm("rcb"),Qw=new ws(3e4,6e4);class Jw{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Le().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return L(Yw(t),e,"argument-error"),this.shouldResolveImmediately(t)&&qh(Le().grecaptcha)?Promise.resolve(Le().grecaptcha):new Promise((n,i)=>{const s=Le().setTimeout(()=>{i(Fe(e,"network-request-failed"))},Qw.get());Le()[oc]=()=>{Le().clearTimeout(s),delete Le()[oc];const c=Le().grecaptcha;if(!c||!qh(c)){i(Fe(e,"internal-error"));return}const l=c.render;c.render=(h,f)=>{const m=l(h,f);return this.counter++,m},this.hostLanguage=t,n(c)};const o=`${wI()}?${ti({onload:oc,render:"explicit",hl:t})}`;ul(o).catch(()=>{clearTimeout(s),i(Fe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Le().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Yw(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class Xw{async load(e){return new Gw(e)}clearedOneInstance(){}}/**
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
 */const Pm="recaptcha",Zw={theme:"light",type:"image"};let eE=class{constructor(e,t,n=Object.assign({},Zw)){this.parameters=n,this.type=Pm,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(e),this.isInvisible=this.parameters.size==="invisible",L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof t=="string"?document.getElementById(t):t;L(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Xw:new Jw,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){L(!this.parameters.sitekey,this.auth,"argument-error"),L(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Le()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){L(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){L(cl()&&!yl(),this.auth,"internal-error"),await tE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await tI(this.auth);L(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return L(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function tE(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
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
 */class vl{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Hn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function nE(r,e,t){if(Ae(r.app))return Promise.reject(qe(r));const n=Re(r),i=await ra(n,e,J(t));return new vl(i,s=>Zo(n,s))}async function rE(r,e,t){const n=J(r);await Xo(!1,n,"phone");const i=await ra(n.auth,e,J(t));return new vl(i,s=>_m(n,s))}async function iE(r,e,t){const n=J(r);if(Ae(n.auth.app))return Promise.reject(qe(n.auth));const i=await ra(n.auth,e,J(t));return new vl(i,s=>ym(n,s))}async function ra(r,e,t){var n;const i=await t.verify();try{L(typeof i=="string",r,"argument-error"),L(t.type===Pm,r,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return L(o.type==="enroll",r,"internal-error"),(await Aw(r,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{L(o.type==="signin",r,"internal-error");const c=((n=s.multiFactorHint)===null||n===void 0?void 0:n.uid)||s.multiFactorUid;return L(c,r,"missing-multi-factor-info"),(await qw(r,{mfaPendingCredential:o.credential,mfaEnrollmentId:c,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await qI(r,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{t._reset()}}async function sE(r,e){const t=J(r);if(Ae(t.auth.app))return Promise.reject(qe(t.auth));await hl(t,e)}/**
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
 */let Yn=class po{constructor(e){this.providerId=po.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return ra(this.auth,e,J(t))}static credential(e,t){return Hn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return po.credentialFromTaggedObject(t)}static credentialFromError(e){return po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Hn._fromTokenResponse(t,n):null}};Yn.PROVIDER_ID="phone";Yn.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ur(r,e){return e?pt(e):(L(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Il extends ri{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oE(r){return gm(r.auth,new Il(r),r.bypassAuthState)}function aE(r){const{auth:e,user:t}=r;return L(t,e,"internal-error"),pm(t,new Il(r),r.bypassAuthState)}async function cE(r){const{auth:e,user:t}=r;return L(t,e,"internal-error"),hl(t,new Il(r),r.bypassAuthState)}/**
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
 */class km{constructor(e,t,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oE;case"linkViaPopup":case"linkViaRedirect":return cE;case"reauthViaPopup":case"reauthViaRedirect":return aE;default:Ke(this.auth,"internal-error")}}resolve(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const lE=new ws(2e3,1e4);async function uE(r,e,t){if(Ae(r.app))return Promise.reject(Fe(r,"operation-not-supported-in-this-environment"));const n=Re(r);ni(r,e,Jt);const i=ur(n,t);return new qt(n,"signInViaPopup",e,i).executeNotNull()}async function hE(r,e,t){const n=J(r);if(Ae(n.auth.app))return Promise.reject(Fe(n.auth,"operation-not-supported-in-this-environment"));ni(n.auth,e,Jt);const i=ur(n.auth,t);return new qt(n.auth,"reauthViaPopup",e,i,n).executeNotNull()}async function dE(r,e,t){const n=J(r);ni(n.auth,e,Jt);const i=ur(n.auth,t);return new qt(n.auth,"linkViaPopup",e,i,n).executeNotNull()}class qt extends km{constructor(e,t,n,i,s){super(e,t,i,s),this.provider=n,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lE.get())};e()}}qt.currentPopupAction=null;/**
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
 */const fE="pendingRedirect",$i=new Map;class mE extends km{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$i.get(this.auth._key());if(!e){try{const n=await pE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pE(r,e){const t=xm(e),n=Cm(r);if(!await n._isAvailable())return!1;const i=await n._get(t)==="true";return await n._remove(t),i}async function wl(r,e){return Cm(r)._set(xm(e),"true")}function gE(){$i.clear()}function El(r,e){$i.set(r._key(),e)}function Cm(r){return pt(r._redirectPersistence)}function xm(r){return Kn(fE,r.config.apiKey,r.name)}/**
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
 */function _E(r,e,t){return yE(r,e,t)}async function yE(r,e,t){if(Ae(r.app))return Promise.reject(qe(r));const n=Re(r);ni(r,e,Jt),await n._initializationPromise;const i=ur(n,t);return await wl(i,n),i._openRedirect(n,e,"signInViaRedirect")}function vE(r,e,t){return IE(r,e,t)}async function IE(r,e,t){const n=J(r);if(ni(n.auth,e,Jt),Ae(n.auth.app))return Promise.reject(qe(n.auth));await n.auth._initializationPromise;const i=ur(n.auth,t);await wl(i,n.auth);const s=await Nm(n);return i._openRedirect(n.auth,e,"reauthViaRedirect",s)}function wE(r,e,t){return EE(r,e,t)}async function EE(r,e,t){const n=J(r);ni(n.auth,e,Jt),await n.auth._initializationPromise;const i=ur(n.auth,t);await Xo(!1,n,e.providerId),await wl(i,n.auth);const s=await Nm(n);return i._openRedirect(n.auth,e,"linkViaRedirect",s)}async function TE(r,e){return await Re(r)._initializationPromise,ia(r,e,!1)}async function ia(r,e,t=!1){if(Ae(r.app))return Promise.reject(qe(r));const n=Re(r),i=ur(n,e),o=await new mE(n,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}async function Nm(r){const e=Rs(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
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
 */const bE=10*60*1e3;class Dm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Vm(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zh(e))}saveEventToCache(e){this.cachedEventUids.add(Zh(e)),this.lastProcessedEventTime=Date.now()}}function Zh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Vm({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AE(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vm(r);default:return!1}}/**
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
 */async function Om(r,e={}){return ke(r,"GET","/v1/projects",e)}/**
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
 */const RE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SE=/^https?/;async function PE(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Om(r);for(const t of e)try{if(kE(t))return}catch{}Ke(r,"unauthorized-domain")}function kE(r){const e=ts(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!SE.test(t))return!1;if(RE.test(r))return n===r;const i=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const CE=new ws(3e4,6e4);function ed(){const r=Le().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function xE(r){return new Promise((e,t)=>{var n,i,s;function o(){ed(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ed(),t(Fe(r,"network-request-failed"))},timeout:CE.get()})}if(!((i=(n=Le().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Le().gapi)===null||s===void 0)&&s.load)o();else{const c=lm("iframefcb");return Le()[c]=()=>{gapi.load?o():t(Fe(r,"network-request-failed"))},ul(`${TI()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw go=null,e})}let go=null;function NE(r){return go=go||xE(r),go}/**
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
 */const DE=new ws(5e3,15e3),VE="__/auth/iframe",OE="emulator/auth/iframe",LE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ME=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FE(r){const e=r.config;L(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?ll(e,OE):`https://${r.config.authDomain}/${VE}`,n={apiKey:e.apiKey,appName:r.name,v:An},i=ME.get(r.config.apiHost);i&&(n.eid=i);const s=r._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${ti(n).slice(1)}`}async function UE(r){const e=await NE(r),t=Le().gapi;return L(t,r,"internal-error"),e.open({where:document.body,url:FE(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LE,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=Fe(r,"network-request-failed"),c=Le().setTimeout(()=>{s(o)},DE.get());function l(){Le().clearTimeout(c),i(n)}n.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const BE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jE=500,qE=600,$E="_blank",zE="http://localhost";class td{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function WE(r,e,t,n=jE,i=qE){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},BE),{width:n.toString(),height:i.toString(),top:s,left:o}),h=Te().toLowerCase();t&&(c=rm(h)?$E:t),tm(h)&&(e=e||zE,l.scrollbars="yes");const f=Object.entries(l).reduce((_,[A,T])=>`${_}${A}=${T},`,"");if(fI(h)&&c!=="_self")return GE(e||"",c),new td(null);const m=window.open(e||"",c,f);L(m,r,"popup-blocked");try{m.focus()}catch{}return new td(m)}function GE(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const KE="__/auth/handler",HE="emulator/auth/handler",QE=encodeURIComponent("fac");async function wc(r,e,t,n,i,s){L(r.config.authDomain,r,"auth-domain-config-required"),L(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:An,eventId:i};if(e instanceof Jt){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Iy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(s||{}))o[f]=m}if(e instanceof ii){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await r._getAppCheckToken(),h=l?`#${QE}=${encodeURIComponent(l)}`:"";return`${JE(r)}?${ti(c).slice(1)}${h}`}function JE({config:r}){return r.emulator?ll(r,HE):`https://${r.authDomain}/${KE}`}/**
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
 */const ac="webStorageSupport";class YE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jn,this._completeRedirectFn=ia,this._overrideRedirectResult=El}async _openPopup(e,t,n,i){var s;bt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wc(e,t,n,ts(),i);return WE(e,o,Rs())}async _openRedirect(e,t,n,i){await this._originValidation(e);const s=await wc(e,t,n,ts(),i);return Dw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await UE(e),n=new Dm(e);return t.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ac,{type:ac},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ac];o!==void 0&&t(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return am()||nm()||Ts()}}const XE=YE;class ZE{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return kt("unexpected MultiFactorSessionType")}}}class Tl extends ZE{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Tl(e)}_finalizeEnroll(e,t,n){return Rw(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return $w(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Lm{constructor(){}static assertion(e){return Tl._fromCredential(e)}}Lm.FACTOR_ID="phone";var nd="@firebase/auth",rd="1.7.9";/**
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
 */class eT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nT(r){gn(new Vt("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cm(r)},h=new vI(n,i,s,l);return SI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),gn(new Vt("auth-internal",e=>{const t=Re(e.getProvider("auth").getImmediate());return(n=>new eT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(nd,rd,tT(r)),Tt(nd,rd,"esm2017")}/**
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
 */const rT=5*60;uy("authIdTokenMaxAge");function iT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}II({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=i=>{const s=Fe("internal-error");s.customData=i,t(s)},n.type="text/javascript",n.charset="UTF-8",iT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nT("Browser");/**
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
 */function Xn(){return window}/**
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
 */const sT=2e3;async function oT(r,e,t){var n;const{BuildInfo:i}=Xn();bt(e.sessionId,"AuthEvent did not contain a session ID");const s=await hT(e.sessionId),o={};return Ts()?o.ibi=i.packageName:Es()?o.apn=i.packageName:Ke(r,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,wc(r,t,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,o)}async function aT(r){const{BuildInfo:e}=Xn(),t={};Ts()?t.iosBundleId=e.packageName:Es()?t.androidPackageName=e.packageName:Ke(r,"operation-not-supported-in-this-environment"),await Om(r,t)}function cT(r){const{cordova:e}=Xn();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let i=null;n?e.plugins.browsertab.openUrl(r):i=e.InAppBrowser.open(r,dI()?"_blank":"_system","location=yes"),t(i)})})}async function lT(r,e,t){const{cordova:n}=Xn();let i=()=>{};try{await new Promise((s,o)=>{let c=null;function l(){var m;s();const _=(m=n.plugins.browsertab)===null||m===void 0?void 0:m.close;typeof _=="function"&&_(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function h(){c||(c=window.setTimeout(()=>{o(Fe(r,"redirect-cancelled-by-user"))},sT))}function f(){(document==null?void 0:document.visibilityState)==="visible"&&h()}e.addPassiveListener(l),document.addEventListener("resume",h,!1),Es()&&document.addEventListener("visibilitychange",f,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",h,!1),document.removeEventListener("visibilitychange",f,!1),c&&window.clearTimeout(c)}})}finally{i()}}function uT(r){var e,t,n,i,s,o,c,l,h,f;const m=Xn();L(typeof((e=m==null?void 0:m.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),L(typeof((t=m==null?void 0:m.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),L(typeof((s=(i=(n=m==null?void 0:m.cordova)===null||n===void 0?void 0:n.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((l=(c=(o=m==null?void 0:m.cordova)===null||o===void 0?void 0:o.plugins)===null||c===void 0?void 0:c.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((f=(h=m==null?void 0:m.cordova)===null||h===void 0?void 0:h.InAppBrowser)===null||f===void 0?void 0:f.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function hT(r){const e=dT(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(i=>i.toString(16).padStart(2,"0")).join("")}function dT(r){if(bt(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let n=0;n<r.length;n++)t[n]=r.charCodeAt(n);return t}/**
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
 */const fT=20;class mT extends Dm{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function pT(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:yT(),postBody:null,tenantId:r.tenantId,error:Fe(r,"no-auth-event")}}function gT(r,e){return Ec()._set(Tc(r),e)}async function id(r){const e=await Ec()._get(Tc(r));return e&&await Ec()._remove(Tc(r)),e}function _T(r,e){var t,n;const i=IT(e);if(i.includes("/__/auth/callback")){const s=_o(i),o=s.firebaseError?vT(decodeURIComponent(s.firebaseError)):null,c=(n=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||n===void 0?void 0:n[1],l=c?Fe(c):null;return l?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:i,postBody:null}}return null}function yT(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<fT;t++){const n=Math.floor(Math.random()*e.length);r.push(e.charAt(n))}return r.join("")}function Ec(){return pt(_l)}function Tc(r){return Kn("authEvent",r.config.apiKey,r.name)}function vT(r){try{return JSON.parse(r)}catch{return null}}function IT(r){const e=_o(r),t=e.link?decodeURIComponent(e.link):void 0,n=_o(t).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _o(i).link||i||n||t||r}function _o(r){if(!(r!=null&&r.includes("?")))return{};const[e,...t]=r.split("?");return xr(t.join("?"))}/**
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
 */const wT=500;class ET{constructor(){this._redirectPersistence=Jn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ia,this._overrideRedirectResult=El}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new mT(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){Ke(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){uT(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),gE(),await this._originValidation(e);const o=pT(e,n,i);await gT(e,o);const c=await oT(e,o,t),l=await cT(c);return lT(e,s,l)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=aT(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:s}=Xn(),o=setTimeout(async()=>{await id(e),t.onEvent(sd())},wT),c=async f=>{clearTimeout(o);const m=await id(e);let _=null;m&&(f!=null&&f.url)&&(_=_T(m,f.url)),t.onEvent(_||sd())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,c);const l=i,h=`${s.packageName.toLowerCase()}://`;Xn().handleOpenURL=async f=>{if(f.toLowerCase().startsWith(h)&&c({url:f}),typeof l=="function")try{l(f)}catch(m){console.error(m)}}}}const TT=ET;function sd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Fe("no-auth-event")}}/**
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
 */function bT(r,e){Re(r)._logFramework(e)}var AT="@firebase/auth-compat",RT="0.5.14";/**
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
 */const ST=1e3;function zi(){var r;return((r=self==null?void 0:self.location)===null||r===void 0?void 0:r.protocol)||null}function PT(){return zi()==="http:"||zi()==="https:"}function Mm(r=Te()){return!!((zi()==="file:"||zi()==="ionic:"||zi()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function kT(){return tl()||el()}function CT(){return xf()&&(document==null?void 0:document.documentMode)===11}function xT(r=Te()){return/Edge\/\d+/.test(r)}function NT(r=Te()){return CT()||xT(r)}function Fm(){try{const r=self.localStorage,e=Rs();if(r)return r.setItem(e,"1"),r.removeItem(e),NT()?Yi():!0}catch{return bl()&&Yi()}return!1}function bl(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function cc(){return(PT()||Cf()||Mm())&&!kT()&&Fm()&&!bl()}function Um(){return Mm()&&typeof document<"u"}async function DT(){return Um()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},ST);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function VT(){return typeof window<"u"?window:null}/**
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
 */const mt={LOCAL:"local",NONE:"none",SESSION:"session"},Si=L,Bm="persistence";function OT(r,e){if(Si(Object.values(mt).includes(e),r,"invalid-persistence-type"),tl()){Si(e!==mt.SESSION,r,"unsupported-persistence-type");return}if(el()){Si(e===mt.NONE,r,"unsupported-persistence-type");return}if(bl()){Si(e===mt.NONE||e===mt.LOCAL&&Yi(),r,"unsupported-persistence-type");return}Si(e===mt.NONE||Fm(),r,"unsupported-persistence-type")}async function bc(r){await r._initializationPromise;const e=jm(),t=Kn(Bm,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function LT(r,e){const t=jm();if(!t)return[];const n=Kn(Bm,r,e);switch(t.getItem(n)){case mt.NONE:return[Br];case mt.LOCAL:return[ss,Jn];case mt.SESSION:return[Jn];default:return[]}}function jm(){var r;try{return((r=VT())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
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
 */const MT=L;class un{constructor(){this.browserResolver=pt(XE),this.cordovaResolver=pt(TT),this.underlyingResolver=null,this._redirectPersistence=Jn,this._completeRedirectFn=ia,this._overrideRedirectResult=El}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Um()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return MT(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await DT();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function qm(r){return r.unwrap()}function FT(r){return r.wrapped()}/**
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
 */function UT(r){return $m(r)}function BT(r,e){var t;const n=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new jT(r,bw(r,e))}else if(n){const i=$m(e),s=e;i&&(s.credential=i,s.tenantId=n.tenantId||void 0,s.email=n.email||void 0,s.phoneNumber=n.phoneNumber||void 0)}}function $m(r){const{_tokenResponse:e}=r instanceof rt?r.customData:r;if(!e)return null;if(!(r instanceof rt)&&"temporaryProof"in e&&"phoneNumber"in e)return Yn.credentialFromResult(r);const t=e.providerId;if(!t||t===Ri.PASSWORD)return null;let n;switch(t){case Ri.GOOGLE:n=Rt;break;case Ri.FACEBOOK:n=At;break;case Ri.GITHUB:n=St;break;case Ri.TWITTER:n=Pt;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:c,nonce:l}=e;return!s&&!o&&!i&&!c?null:c?t.startsWith("saml.")?jr._create(t,c):Ot._fromParams({providerId:t,signInMethod:t,pendingToken:c,idToken:i,accessToken:s}):new Vr(t).credential({idToken:i,accessToken:s,rawNonce:l})}return r instanceof rt?n.credentialFromError(r):n.credentialFromResult(r)}function ct(r,e){return e.catch(t=>{throw t instanceof rt&&BT(r,t),t}).then(t=>{const n=t.operationType,i=t.user;return{operationType:n,credential:UT(t),additionalUserInfo:Tw(t),user:sa.getOrCreate(i)}})}async function Ac(r,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>ct(r,t.confirm(n))}}class jT{constructor(e,t){this.resolver=t,this.auth=FT(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return ct(qm(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let sa=class Mi{constructor(e){this._delegate=e,this.multiFactor=Pw(e)}static getOrCreate(e){return Mi.USER_MAP.has(e)||Mi.USER_MAP.set(e,new Mi(e)),Mi.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return ct(this.auth,_m(this._delegate,e))}async linkWithPhoneNumber(e,t){return Ac(this.auth,rE(this._delegate,e,t))}async linkWithPopup(e){return ct(this.auth,dE(this._delegate,e,un))}async linkWithRedirect(e){return await bc(Re(this.auth)),wE(this._delegate,e,un)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return ct(this.auth,ym(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Ac(this.auth,iE(this._delegate,e,t))}reauthenticateWithPopup(e){return ct(this.auth,hE(this._delegate,e,un))}async reauthenticateWithRedirect(e){return await bc(Re(this.auth)),vE(this._delegate,e,un)}sendEmailVerification(e){return dw(this._delegate,e)}async unlink(e){return await XI(this._delegate,e),this}updateEmail(e){return gw(this._delegate,e)}updatePassword(e){return _w(this._delegate,e)}updatePhoneNumber(e){return sE(this._delegate,e)}updateProfile(e){return pw(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return fw(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};sa.USER_MAP=new WeakMap;/**
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
 */const Pi=L;class Rc{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Pi(n,"invalid-api-key",{appName:e.name}),Pi(n,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?un:void 0;this._delegate=t.initialize({options:{persistence:qT(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(Wv),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?sa.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){PI(this._delegate,e,t)}applyActionCode(e){return rw(this._delegate,e)}checkActionCode(e){return vm(this._delegate,e)}confirmPasswordReset(e,t){return nw(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return ct(this._delegate,sw(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hw(this._delegate,e)}isSignInWithEmailLink(e){return cw(this._delegate,e)}async getRedirectResult(){Pi(cc(),this._delegate,"operation-not-supported-in-this-environment");const e=await TE(this._delegate,un);return e?ct(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){bT(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:s,complete:o}=od(e,t,n);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,t,n){const{next:i,error:s,complete:o}=od(e,t,n);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,t){return aw(this._delegate,e,t)}sendPasswordResetEmail(e,t){return tw(this._delegate,e,t||void 0)}async setPersistence(e){OT(this._delegate,e);let t;switch(e){case mt.SESSION:t=Jn;break;case mt.LOCAL:t=await pt(ss)._isAvailable()?ss:_l;break;case mt.NONE:t=Br;break;default:return Ke("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return ct(this._delegate,YI(this._delegate))}signInWithCredential(e){return ct(this._delegate,Zo(this._delegate,e))}signInWithCustomToken(e){return ct(this._delegate,ew(this._delegate,e))}signInWithEmailAndPassword(e,t){return ct(this._delegate,ow(this._delegate,e,t))}signInWithEmailLink(e,t){return ct(this._delegate,lw(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Ac(this._delegate,nE(this._delegate,e,t))}async signInWithPopup(e){return Pi(cc(),this._delegate,"operation-not-supported-in-this-environment"),ct(this._delegate,uE(this._delegate,e,un))}async signInWithRedirect(e){return Pi(cc(),this._delegate,"operation-not-supported-in-this-environment"),await bc(this._delegate),_E(this._delegate,e,un)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return iw(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Rc.Persistence=mt;function od(r,e,t){let n=r;typeof r!="function"&&({next:n,error:e,complete:t}=r);const i=n;return{next:o=>i(o&&sa.getOrCreate(o)),error:e,complete:t}}function qT(r,e){const t=LT(r,e);if(typeof self<"u"&&!t.includes(ss)&&t.push(ss),typeof window<"u")for(const n of[_l,Jn])t.includes(n)||t.push(n);return t.includes(Br)||t.push(Br),t}/**
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
 */class Al{constructor(){this.providerId="phone",this._delegate=new Yn(qm(lr.auth()))}static credential(e,t){return Yn.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Al.PHONE_SIGN_IN_METHOD=Yn.PHONE_SIGN_IN_METHOD;Al.PROVIDER_ID=Yn.PROVIDER_ID;/**
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
 */const $T=L;class zT{constructor(e,t,n=lr.app()){var i;$T((i=n.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new eE(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const WT="auth-compat";function GT(r){r.INTERNAL.registerComponent(new Vt(WT,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new Rc(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ir.EMAIL_SIGNIN,PASSWORD_RESET:Ir.PASSWORD_RESET,RECOVER_EMAIL:Ir.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ir.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ir.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ir.VERIFY_EMAIL}},EmailAuthProvider:Rn,FacebookAuthProvider:At,GithubAuthProvider:St,GoogleAuthProvider:Rt,OAuthProvider:Vr,SAMLAuthProvider:Co,PhoneAuthProvider:Al,PhoneMultiFactorGenerator:Lm,RecaptchaVerifier:zT,TwitterAuthProvider:Pt,Auth:Rc,AuthCredential:ri,Error:rt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(AT,RT)}GT(lr);var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qn,zm;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,g){function y(){}y.prototype=g.prototype,w.D=g.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(E,b,S){for(var v=Array(arguments.length-2),It=2;It<arguments.length;It++)v[It-2]=arguments[It];return g.prototype[b].apply(E,v)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,g,y){y||(y=0);var E=Array(16);if(typeof g=="string")for(var b=0;16>b;++b)E[b]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(b=0;16>b;++b)E[b]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=w.g[0],y=w.g[1],b=w.g[2];var S=w.g[3],v=g+(S^y&(b^S))+E[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+E[1]+3905402710&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+E[2]+606105819&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+E[3]+3250441966&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(S^y&(b^S))+E[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+E[5]+1200080426&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+E[6]+2821735955&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+E[7]+4249261313&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(S^y&(b^S))+E[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+E[9]+2336552879&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+E[10]+4294925233&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+E[11]+2304563134&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(S^y&(b^S))+E[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=S+(b^g&(y^b))+E[13]+4254626195&4294967295,S=g+(v<<12&4294967295|v>>>20),v=b+(y^S&(g^y))+E[14]+2792965006&4294967295,b=S+(v<<17&4294967295|v>>>15),v=y+(g^b&(S^g))+E[15]+1236535329&4294967295,y=b+(v<<22&4294967295|v>>>10),v=g+(b^S&(y^b))+E[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+E[6]+3225465664&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+E[11]+643717713&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+E[0]+3921069994&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(b^S&(y^b))+E[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+E[10]+38016083&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+E[15]+3634488961&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+E[4]+3889429448&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(b^S&(y^b))+E[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+E[14]+3275163606&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+E[3]+4107603335&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+E[8]+1163531501&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(b^S&(y^b))+E[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=S+(y^b&(g^y))+E[2]+4243563512&4294967295,S=g+(v<<9&4294967295|v>>>23),v=b+(g^y&(S^g))+E[7]+1735328473&4294967295,b=S+(v<<14&4294967295|v>>>18),v=y+(S^g&(b^S))+E[12]+2368359562&4294967295,y=b+(v<<20&4294967295|v>>>12),v=g+(y^b^S)+E[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+E[8]+2272392833&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+E[11]+1839030562&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+E[14]+4259657740&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(y^b^S)+E[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+E[4]+1272893353&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+E[7]+4139469664&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+E[10]+3200236656&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(y^b^S)+E[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+E[0]+3936430074&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+E[3]+3572445317&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+E[6]+76029189&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(y^b^S)+E[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=S+(g^y^b)+E[12]+3873151461&4294967295,S=g+(v<<11&4294967295|v>>>21),v=b+(S^g^y)+E[15]+530742520&4294967295,b=S+(v<<16&4294967295|v>>>16),v=y+(b^S^g)+E[2]+3299628645&4294967295,y=b+(v<<23&4294967295|v>>>9),v=g+(b^(y|~S))+E[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+E[7]+1126891415&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+E[14]+2878612391&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+E[5]+4237533241&4294967295,y=b+(v<<21&4294967295|v>>>11),v=g+(b^(y|~S))+E[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+E[3]+2399980690&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+E[10]+4293915773&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+E[1]+2240044497&4294967295,y=b+(v<<21&4294967295|v>>>11),v=g+(b^(y|~S))+E[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+E[15]+4264355552&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+E[6]+2734768916&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+E[13]+1309151649&4294967295,y=b+(v<<21&4294967295|v>>>11),v=g+(b^(y|~S))+E[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=S+(y^(g|~b))+E[11]+3174756917&4294967295,S=g+(v<<10&4294967295|v>>>22),v=b+(g^(S|~y))+E[2]+718787259&4294967295,b=S+(v<<15&4294967295|v>>>17),v=y+(S^(b|~g))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+g&4294967295,w.g[1]=w.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}n.prototype.u=function(w,g){g===void 0&&(g=w.length);for(var y=g-this.blockSize,E=this.B,b=this.h,S=0;S<g;){if(b==0)for(;S<=y;)i(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<g;)if(E[b++]=w.charCodeAt(S++),b==this.blockSize){i(this,E),b=0;break}}else for(;S<g;)if(E[b++]=w[S++],b==this.blockSize){i(this,E),b=0;break}}this.h=b,this.o+=g},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var g=1;g<w.length-8;++g)w[g]=0;var y=8*this.o;for(g=w.length-8;g<w.length;++g)w[g]=y&255,y/=256;for(this.u(w),w=Array(16),g=y=0;4>g;++g)for(var E=0;32>E;E+=8)w[y++]=this.g[g]>>>E&255;return w};function s(w,g){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=g(w)}function o(w,g){this.h=g;for(var y=[],E=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;E&&S==g||(y[b]=S,E=!1)}this.g=y}var c={};function l(w){return-128<=w&&128>w?s(w,function(g){return new o([g|0],0>g?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return N(h(-w));for(var g=[],y=1,E=0;w>=y;E++)g[E]=w/y|0,y*=4294967296;return new o(g,0)}function f(w,g){if(w.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(w.charAt(0)=="-")return N(f(w.substring(1),g));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),E=m,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),v=parseInt(w.substring(b,b+S),g);8>S?(S=h(Math.pow(g,S)),E=E.j(S).add(h(v))):(E=E.j(y),E=E.add(h(v)))}return E}var m=l(0),_=l(1),A=l(16777216);r=o.prototype,r.m=function(){if(D(this))return-N(this).m();for(var w=0,g=1,y=0;y<this.g.length;y++){var E=this.i(y);w+=(0<=E?E:4294967296+E)*g,g*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(T(this))return"0";if(D(this))return"-"+N(this).toString(w);for(var g=h(Math.pow(w,6)),y=this,E="";;){var b=H(y,g).g;y=$(y,b.j(g));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=b,T(y))return S+E;for(;6>S.length;)S="0"+S;E=S+E}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function T(w){if(w.h!=0)return!1;for(var g=0;g<w.g.length;g++)if(w.g[g]!=0)return!1;return!0}function D(w){return w.h==-1}r.l=function(w){return w=$(this,w),D(w)?-1:T(w)?0:1};function N(w){for(var g=w.g.length,y=[],E=0;E<g;E++)y[E]=~w.g[E];return new o(y,~w.h).add(_)}r.abs=function(){return D(this)?N(this):this},r.add=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0,b=0;b<=g;b++){var S=E+(this.i(b)&65535)+(w.i(b)&65535),v=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);E=v>>>16,S&=65535,v&=65535,y[b]=v<<16|S}return new o(y,y[y.length-1]&-2147483648?-1:0)};function $(w,g){return w.add(N(g))}r.j=function(w){if(T(this)||T(w))return m;if(D(this))return D(w)?N(this).j(N(w)):N(N(this).j(w));if(D(w))return N(this.j(N(w)));if(0>this.l(A)&&0>w.l(A))return h(this.m()*w.m());for(var g=this.g.length+w.g.length,y=[],E=0;E<2*g;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<w.g.length;b++){var S=this.i(E)>>>16,v=this.i(E)&65535,It=w.i(b)>>>16,xn=w.i(b)&65535;y[2*E+2*b]+=v*xn,Q(y,2*E+2*b),y[2*E+2*b+1]+=S*xn,Q(y,2*E+2*b+1),y[2*E+2*b+1]+=v*It,Q(y,2*E+2*b+1),y[2*E+2*b+2]+=S*It,Q(y,2*E+2*b+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new o(y,0)};function Q(w,g){for(;(w[g]&65535)!=w[g];)w[g+1]+=w[g]>>>16,w[g]&=65535,g++}function G(w,g){this.g=w,this.h=g}function H(w,g){if(T(g))throw Error("division by zero");if(T(w))return new G(m,m);if(D(w))return g=H(N(w),g),new G(N(g.g),N(g.h));if(D(g))return g=H(w,N(g)),new G(N(g.g),g.h);if(30<w.g.length){if(D(w)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var y=_,E=g;0>=E.l(w);)y=ne(y),E=ne(E);var b=Y(y,1),S=Y(E,1);for(E=Y(E,2),y=Y(y,2);!T(E);){var v=S.add(E);0>=v.l(w)&&(b=b.add(y),S=v),E=Y(E,1),y=Y(y,1)}return g=$(w,b.j(g)),new G(b,g)}for(b=m;0<=w.l(g);){for(y=Math.max(1,Math.floor(w.m()/g.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),S=h(y),v=S.j(g);D(v)||0<v.l(w);)y-=E,S=h(y),v=S.j(g);T(S)&&(S=_),b=b.add(S),w=$(w,v)}return new G(b,w)}r.A=function(w){return H(this,w).h},r.and=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)&w.i(E);return new o(y,this.h&w.h)},r.or=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)|w.i(E);return new o(y,this.h|w.h)},r.xor=function(w){for(var g=Math.max(this.g.length,w.g.length),y=[],E=0;E<g;E++)y[E]=this.i(E)^w.i(E);return new o(y,this.h^w.h)};function ne(w){for(var g=w.g.length+1,y=[],E=0;E<g;E++)y[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(y,w.h)}function Y(w,g){var y=g>>5;g%=32;for(var E=w.g.length-y,b=[],S=0;S<E;S++)b[S]=0<g?w.i(S+y)>>>g|w.i(S+y+1)<<32-g:w.i(S+y);return new o(b,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,zm=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Qn=o}).apply(typeof ad<"u"?ad:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wm,Fi,Gm,yo,Sc,Km,Hm,Qm;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function i(a,u){if(u)e:{var d=n;a=a.split(".");for(var p=0;p<a.length-1;p++){var R=a[p];if(!(R in d))break e;d=d[R]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,p=!1,R={next:function(){if(!p&&d<a.length){var x=d++;return{value:u(x,a[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function m(a,u,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),a.apply(u,R)}}return function(){return a.apply(u,arguments)}}function _(a,u,d){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,_.apply(null,arguments)}function A(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function T(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,R,x){for(var F=Array(arguments.length-2),me=2;me<arguments.length;me++)F[me-2]=arguments[me];return u.prototype[R].apply(p,F)}}function D(a){const u=a.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function N(a,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const R=a.length||0,x=p.length||0;a.length=R+x;for(let F=0;F<x;F++)a[R+F]=p[F]}else a.push(p)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(a){return/^[\s\xa0]*$/.test(a)}function G(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var ne=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Y(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(a,u){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)a[d]=p[d];for(let x=0;x<y.length;x++)d=y[x],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function v(){var a=z;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class It{constructor(){this.h=this.g=null}add(u,d){const p=xn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var xn=new $(()=>new ka,a=>a.reset());class ka{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let k,M=!1,z=new It,q=()=>{const a=c.Promise.resolve(void 0);k=()=>{a.then(te)}};var te=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){S(d)}var u=xn;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}M=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var De=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function he(a,u){if(le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ne){e:{try{H(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ve[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&he.aa.h.call(this)}}T(he,le);var Ve={2:"touch",3:"pen",4:"mouse"};he.prototype.h=function(){he.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var js="closure_listenable_"+(1e6*Math.random()|0),m_=0;function p_(a,u,d,p,R){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=R,this.key=++m_,this.da=this.fa=!1}function qs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function $s(a){this.src=a,this.g={},this.h=0}$s.prototype.add=function(a,u,d,p,R){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var F=xa(a,u,p,R);return-1<F?(u=a[F],d||(u.fa=!1)):(u=new p_(u,this.src,x,!!p,R),u.fa=d,a.push(u)),u};function Ca(a,u){var d=u.type;if(d in a.g){var p=a.g[d],R=Array.prototype.indexOf.call(p,u,void 0),x;(x=0<=R)&&Array.prototype.splice.call(p,R,1),x&&(qs(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function xa(a,u,d,p){for(var R=0;R<a.length;++R){var x=a[R];if(!x.da&&x.listener==u&&x.capture==!!d&&x.ha==p)return R}return-1}var Na="closure_lm_"+(1e6*Math.random()|0),Da={};function ku(a,u,d,p,R){if(Array.isArray(u)){for(var x=0;x<u.length;x++)ku(a,u[x],d,p,R);return null}return d=Nu(d),a&&a[js]?a.K(u,d,h(p)?!!p.capture:!!p,R):g_(a,u,d,!1,p,R)}function g_(a,u,d,p,R,x){if(!u)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,me=Oa(a);if(me||(a[Na]=me=new $s(a)),d=me.add(u,d,p,F,x),d.proxy)return d;if(p=__(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)De||(R=F),R===void 0&&(R=!1),a.addEventListener(u.toString(),p,R);else if(a.attachEvent)a.attachEvent(xu(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function __(){function a(d){return u.call(a.src,a.listener,d)}const u=y_;return a}function Cu(a,u,d,p,R){if(Array.isArray(u))for(var x=0;x<u.length;x++)Cu(a,u[x],d,p,R);else p=h(p)?!!p.capture:!!p,d=Nu(d),a&&a[js]?(a=a.i,u=String(u).toString(),u in a.g&&(x=a.g[u],d=xa(x,d,p,R),-1<d&&(qs(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete a.g[u],a.h--)))):a&&(a=Oa(a))&&(u=a.g[u.toString()],a=-1,u&&(a=xa(u,d,p,R)),(d=-1<a?u[a]:null)&&Va(d))}function Va(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[js])Ca(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(xu(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Oa(u))?(Ca(d,a),d.h==0&&(d.src=null,u[Na]=null)):qs(a)}}}function xu(a){return a in Da?Da[a]:Da[a]="on"+a}function y_(a,u){if(a.da)a=!0;else{u=new he(u,this);var d=a.listener,p=a.ha||a.src;a.fa&&Va(a),a=d.call(p,u)}return a}function Oa(a){return a=a[Na],a instanceof $s?a:null}var La="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nu(a){return typeof a=="function"?a:(a[La]||(a[La]=function(u){return a.handleEvent(u)}),a[La])}function He(){X.call(this),this.i=new $s(this),this.M=this,this.F=null}T(He,X),He.prototype[js]=!0,He.prototype.removeEventListener=function(a,u,d,p){Cu(this,a,u,d,p)};function Ze(a,u){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new le(u,a);else if(u instanceof le)u.target=u.target||a;else{var R=u;u=new le(p,a),E(u,R)}if(R=!0,d)for(var x=d.length-1;0<=x;x--){var F=u.g=d[x];R=zs(F,p,!0,u)&&R}if(F=u.g=a,R=zs(F,p,!0,u)&&R,R=zs(F,p,!1,u)&&R,d)for(x=0;x<d.length;x++)F=u.g=d[x],R=zs(F,p,!1,u)&&R}He.prototype.N=function(){if(He.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],p=0;p<d.length;p++)qs(d[p]);delete a.g[u],a.h--}}this.F=null},He.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},He.prototype.L=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function zs(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,x=0;x<u.length;++x){var F=u[x];if(F&&!F.da&&F.capture==d){var me=F.listener,$e=F.ha||F.src;F.fa&&Ca(a.i,F),R=me.call($e,p)!==!1&&R}}return R&&!p.defaultPrevented}function Du(a,u,d){if(typeof a=="function")d&&(a=_(a,d));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Vu(a){a.g=Du(()=>{a.g=null,a.i&&(a.i=!1,Vu(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class v_ extends X{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vu(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fi(a){X.call(this),this.h=a,this.g={}}T(fi,X);var Ou=[];function Lu(a){Y(a.g,function(u,d){this.g.hasOwnProperty(d)&&Va(u)},a),a.g={}}fi.prototype.N=function(){fi.aa.N.call(this),Lu(this)},fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ma=c.JSON.stringify,I_=c.JSON.parse,w_=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Fa(){}Fa.prototype.h=null;function Mu(a){return a.h||(a.h=a.i())}function Fu(){}var mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ua(){le.call(this,"d")}T(Ua,le);function Ba(){le.call(this,"c")}T(Ba,le);var Nn={},Uu=null;function Ws(){return Uu=Uu||new He}Nn.La="serverreachability";function Bu(a){le.call(this,Nn.La,a)}T(Bu,le);function pi(a){const u=Ws();Ze(u,new Bu(u))}Nn.STAT_EVENT="statevent";function ju(a,u){le.call(this,Nn.STAT_EVENT,a),this.stat=u}T(ju,le);function et(a){const u=Ws();Ze(u,new ju(u,a))}Nn.Ma="timingevent";function qu(a,u){le.call(this,Nn.Ma,a),this.size=u}T(qu,le);function gi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function _i(){this.g=!0}_i.prototype.xa=function(){this.g=!1};function E_(a,u,d,p,R,x){a.info(function(){if(a.g)if(x)for(var F="",me=x.split("&"),$e=0;$e<me.length;$e++){var ae=me[$e].split("=");if(1<ae.length){var Qe=ae[0];ae=ae[1];var Je=Qe.split("_");F=2<=Je.length&&Je[1]=="type"?F+(Qe+"="+ae+"&"):F+(Qe+"=redacted&")}}else F=null;else F=x;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+d+`
`+F})}function T_(a,u,d,p,R,x,F){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+d+`
`+x+" "+F})}function gr(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+A_(a,d)+(p?" "+p:"")})}function b_(a,u){a.info(function(){return"TIMEOUT: "+u})}_i.prototype.info=function(){};function A_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var x=R[0];if(x!="noop"&&x!="stop"&&x!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return Ma(d)}catch{return u}}var Gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$u={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ja;function Ks(){}T(Ks,Fa),Ks.prototype.g=function(){return new XMLHttpRequest},Ks.prototype.i=function(){return{}},ja=new Ks;function en(a,u,d,p){this.j=a,this.i=u,this.l=d,this.R=p||1,this.U=new fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zu}function zu(){this.i=null,this.g="",this.h=!1}var Wu={},qa={};function $a(a,u,d){a.L=1,a.v=Ys(Ut(u)),a.m=d,a.P=!0,Gu(a,null)}function Gu(a,u){a.F=Date.now(),Hs(a),a.A=Ut(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),oh(d.i,"t",p),a.C=0,d=a.j.J,a.h=new zu,a.g=bh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new v_(_(a.Y,a,a.g),a.O)),u=a.U,d=a.g,p=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ou[0]=R.toString()),R=Ou);for(var x=0;x<R.length;x++){var F=ku(d,R[x],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),pi(),E_(a.i,a.u,a.A,a.l,a.R,a.m)}en.prototype.ca=function(a){a=a.target;const u=this.M;u&&Bt(a)==3?u.j():this.Y(a)},en.prototype.Y=function(a){try{if(a==this.g)e:{const Je=Bt(this.g);var u=this.g.Ba();const vr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||fh(this.g)))){this.J||Je!=4||u==7||(u==8||0>=vr?pi(3):pi(2)),za(this);var d=this.g.Z();this.X=d;t:if(Ku(this)){var p=fh(this.g);a="";var R=p.length,x=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dn(this),yi(this);var F="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(x&&u==R-1)});p.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,T_(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var me,$e=this.g;if((me=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(me)){var ae=me;break t}}ae=null}if(d=ae)gr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Wa(this,d);else{this.o=!1,this.s=3,et(12),Dn(this),yi(this);break e}}if(this.P){d=!0;let wt;for(;!this.J&&this.C<F.length;)if(wt=R_(this,F),wt==qa){Je==4&&(this.s=4,et(14),d=!1),gr(this.i,this.l,null,"[Incomplete Response]");break}else if(wt==Wu){this.s=4,et(15),gr(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else gr(this.i,this.l,wt,null),Wa(this,wt);if(Ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||F.length!=0||this.h.h||(this.s=1,et(16),d=!1),this.o=this.o&&d,!d)gr(this.i,this.l,F,"[Invalid Chunked Response]"),Dn(this),yi(this);else if(0<F.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Ya(Qe),Qe.M=!0,et(11))}}else gr(this.i,this.l,F,null),Wa(this,F);Je==4&&Dn(this),this.o&&!this.J&&(Je==4?Ih(this.j,this):(this.o=!1,Hs(this)))}else $_(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),Dn(this),yi(this)}}}catch{}finally{}};function Ku(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function R_(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?qa:(d=Number(u.substring(d,p)),isNaN(d)?Wu:(p+=1,p+d>u.length?qa:(u=u.slice(p,p+d),a.C=p+d,u)))}en.prototype.cancel=function(){this.J=!0,Dn(this)};function Hs(a){a.S=Date.now()+a.I,Hu(a,a.I)}function Hu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=gi(_(a.ba,a),u)}function za(a){a.B&&(c.clearTimeout(a.B),a.B=null)}en.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(b_(this.i,this.A),this.L!=2&&(pi(),et(17)),Dn(this),this.s=2,yi(this)):Hu(this,this.S-a)};function yi(a){a.j.G==0||a.J||Ih(a.j,a)}function Dn(a){za(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Lu(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Wa(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||Ga(d.h,a))){if(!a.K&&Ga(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ro(d),to(d);else break e;Ja(d),et(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=gi(_(d.Za,d),6e3));if(1>=Yu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else On(d,11)}else if((a.K||d.g==a)&&ro(d),!Q(u))for(R=d.Da.g.parse(u),u=0;u<R.length;u++){let ae=R[u];if(d.T=ae[0],ae=ae[1],d.G==2)if(ae[0]=="c"){d.K=ae[1],d.ia=ae[2];const Qe=ae[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Je=ae[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const vr=ae[5];vr!=null&&typeof vr=="number"&&0<vr&&(p=1.5*vr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const wt=a.g;if(wt){const so=wt.g?wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(so){var x=p.h;x.g||so.indexOf("spdy")==-1&&so.indexOf("quic")==-1&&so.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ka(x,x.h),x.h=null))}if(p.D){const Xa=wt.g?wt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xa&&(p.ya=Xa,ge(p.I,p.D,Xa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=a;if(p.qa=Th(p,p.J?p.ia:null,p.W),F.K){Xu(p.h,F);var me=F,$e=p.L;$e&&(me.I=$e),me.B&&(za(me),Hs(me)),p.g=F}else yh(p);0<d.i.length&&no(d)}else ae[0]!="stop"&&ae[0]!="close"||On(d,7);else d.G==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?On(d,7):Qa(d):ae[0]!="noop"&&d.l&&d.l.ta(ae),d.v=0)}}pi(4)}catch{}}var S_=class{constructor(a,u){this.g=a,this.map=u}};function Qu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ju(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yu(a){return a.h?1:a.g?a.g.size:0}function Ga(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ka(a,u){a.g?a.g.add(u):a.h=u}function Xu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Qu.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return D(a.i)}function P_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,p=0;p<d;p++)u.push(a[p]);return u}u=[],d=0;for(p in a)u[d++]=a[p];return u}function k_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const p in a)u[d++]=p;return u}}}function eh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=k_(a),p=P_(a),R=p.length,x=0;x<R;x++)u.call(void 0,p[x],d&&d[x],a)}var th=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),R=null;if(0<=p){var x=a[d].substring(0,p);R=a[d].substring(p+1)}else x=a[d];u(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Vn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Vn){this.h=a.h,Qs(this,a.j),this.o=a.o,this.g=a.g,Js(this,a.s),this.l=a.l;var u=a.i,d=new wi;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),nh(this,d),this.m=a.m}else a&&(u=String(a).match(th))?(this.h=!1,Qs(this,u[1]||"",!0),this.o=vi(u[2]||""),this.g=vi(u[3]||"",!0),Js(this,u[4]),this.l=vi(u[5]||"",!0),nh(this,u[6]||"",!0),this.m=vi(u[7]||"")):(this.h=!1,this.i=new wi(null,this.h))}Vn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ii(u,rh,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ii(u,rh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ii(d,d.charAt(0)=="/"?D_:N_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ii(d,O_)),a.join("")};function Ut(a){return new Vn(a)}function Qs(a,u,d){a.j=d?vi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Js(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function nh(a,u,d){u instanceof wi?(a.i=u,L_(a.i,a.h)):(d||(u=Ii(u,V_)),a.i=new wi(u,a.h))}function ge(a,u,d){a.i.set(u,d)}function Ys(a){return ge(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function vi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ii(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,x_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function x_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rh=/[#\/\?@]/g,N_=/[#\?:]/g,D_=/[#\?]/g,V_=/[#\?@]/g,O_=/#/g;function wi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function tn(a){a.g||(a.g=new Map,a.h=0,a.i&&C_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=wi.prototype,r.add=function(a,u){tn(this),this.i=null,a=_r(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ih(a,u){tn(a),u=_r(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function sh(a,u){return tn(a),u=_r(a,u),a.g.has(u)}r.forEach=function(a,u){tn(this),this.g.forEach(function(d,p){d.forEach(function(R){a.call(u,R,p,this)},this)},this)},r.na=function(){tn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const R=a[p];for(let x=0;x<R.length;x++)d.push(u[p])}return d},r.V=function(a){tn(this);let u=[];if(typeof a=="string")sh(this,a)&&(u=u.concat(this.g.get(_r(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},r.set=function(a,u){return tn(this),this.i=null,a=_r(this,a),sh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function oh(a,u,d){ih(a,u),0<d.length&&(a.i=null,a.g.set(_r(a,u),D(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const x=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var R=x;F[p]!==""&&(R+="="+encodeURIComponent(String(F[p]))),a.push(R)}}return this.i=a.join("&")};function _r(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function L_(a,u){u&&!a.j&&(tn(a),a.i=null,a.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(ih(this,p),oh(this,R,d))},a)),a.j=u}function M_(a,u){const d=new _i;if(c.Image){const p=new Image;p.onload=A(nn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=A(nn,d,"TestLoadImage: error",!1,u,p),p.onabort=A(nn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=A(nn,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function F_(a,u){const d=new _i,p=new AbortController,R=setTimeout(()=>{p.abort(),nn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(x=>{clearTimeout(R),x.ok?nn(d,"TestPingServer: ok",!0,u):nn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),nn(d,"TestPingServer: error",!1,u)})}function nn(a,u,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function U_(){this.g=new w_}function B_(a,u,d){const p=d||"";try{eh(a,function(R,x){let F=R;h(R)&&(F=Ma(R)),u.push(p+x+"="+encodeURIComponent(F))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Xs(a){this.l=a.Ub||null,this.j=a.eb||!1}T(Xs,Fa),Xs.prototype.g=function(){return new Zs(this.l,this.j)},Xs.prototype.i=function(a){return function(){return a}}({});function Zs(a,u){He.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Zs,He),r=Zs.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ti(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ei(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ti(this)),this.g&&(this.readyState=3,Ti(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ah(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function ah(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ei(this):Ti(this),this.readyState==3&&ah(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Ei(this))},r.Qa=function(a){this.g&&(this.response=a,Ei(this))},r.ga=function(){this.g&&Ei(this)};function Ei(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ti(a)}r.setRequestHeader=function(a,u){this.u.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ti(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ch(a){let u="";return Y(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Ha(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ch(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ge(a,u,d))}function be(a){He.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(be,He);var j_=/^https?$/i,q_=["POST","PUT"];r=be.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ja.g(),this.v=this.o?Mu(this.o):Mu(ja),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){lh(this,x);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())d.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),R=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(q_,u,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,F]of d)this.g.setRequestHeader(x,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dh(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){lh(this,x)}};function lh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,uh(a),eo(a)}function uh(a){a.A||(a.A=!0,Ze(a,"complete"),Ze(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ze(this,"complete"),Ze(this,"abort"),eo(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),eo(this,!0)),be.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?hh(this):this.bb())},r.bb=function(){hh(this)};function hh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Bt(a)!=4||a.Z()!=2)){if(a.u&&Bt(a)==4)Du(a.Ea,0,a);else if(Ze(a,"readystatechange"),Bt(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=F===0){var R=String(a.D).match(th)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!j_.test(R?R.toLowerCase():"")}d=p}if(d)Ze(a,"complete"),Ze(a,"success");else{a.m=6;try{var x=2<Bt(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",uh(a)}}finally{eo(a)}}}}function eo(a,u){if(a.g){dh(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Ze(a,"ready");try{d.onreadystatechange=p}catch{}}}function dh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Bt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),I_(u)}};function fh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(a){const u={};a=(a.g&&2<=Bt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(Q(a[p]))continue;var d=b(a[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=u[R]||[];u[R]=x,x.push(d)}w(u,function(p){return p.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bi(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function mh(a){this.Aa=0,this.i=[],this.j=new _i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bi("baseRetryDelayMs",5e3,a),this.cb=bi("retryDelaySeedMs",1e4,a),this.Wa=bi("forwardChannelMaxRetries",2,a),this.wa=bi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qu(a&&a.concurrentRequestLimit),this.Da=new U_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=mh.prototype,r.la=8,r.G=1,r.connect=function(a,u,d,p){et(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Th(this,null,this.W),no(this)};function Qa(a){if(ph(a),a.G==3){var u=a.U++,d=Ut(a.I);if(ge(d,"SID",a.K),ge(d,"RID",u),ge(d,"TYPE","terminate"),Ai(a,d),u=new en(a,a.j,u),u.L=2,u.v=Ys(Ut(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=bh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hs(u)}Eh(a)}function to(a){a.g&&(Ya(a),a.g.cancel(),a.g=null)}function ph(a){to(a),a.u&&(c.clearTimeout(a.u),a.u=null),ro(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function no(a){if(!Ju(a.h)&&!a.s){a.s=!0;var u=a.Ga;k||q(),M||(k(),M=!0),z.add(u,a),a.B=0}}function z_(a,u){return Yu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=gi(_(a.Ga,a,u),wh(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new en(this,this.j,a);let x=this.o;if(this.S&&(x?(x=g(x),E(x,this.S)):x=this.S),this.m!==null||this.O||(R.H=x,x=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=_h(this,R,u),d=Ut(this.I),ge(d,"RID",a),ge(d,"CVER",22),this.D&&ge(d,"X-HTTP-Session-Id",this.D),Ai(this,d),x&&(this.O?u="headers="+encodeURIComponent(String(ch(x)))+"&"+u:this.m&&Ha(d,this.m,x)),Ka(this.h,R),this.Ua&&ge(d,"TYPE","init"),this.P?(ge(d,"$req",u),ge(d,"SID","null"),R.T=!0,$a(R,d,null)):$a(R,d,u),this.G=2}}else this.G==3&&(a?gh(this,a):this.i.length==0||Ju(this.h)||gh(this))};function gh(a,u){var d;u?d=u.l:d=a.U++;const p=Ut(a.I);ge(p,"SID",a.K),ge(p,"RID",d),ge(p,"AID",a.T),Ai(a,p),a.m&&a.o&&Ha(p,a.m,a.o),d=new en(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=_h(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ka(a.h,d),$a(d,p,u)}function Ai(a,u){a.H&&Y(a.H,function(d,p){ge(u,p,d)}),a.l&&eh({},function(d,p){ge(u,p,d)})}function _h(a,u,d){d=Math.min(a.i.length,d);var p=a.l?_(a.l.Na,a.l,a):null;e:{var R=a.i;let x=-1;for(;;){const F=["count="+d];x==-1?0<d?(x=R[0].g,F.push("ofs="+x)):x=0:F.push("ofs="+x);let me=!0;for(let $e=0;$e<d;$e++){let ae=R[$e].g;const Qe=R[$e].map;if(ae-=x,0>ae)x=Math.max(0,R[$e].g-100),me=!1;else try{B_(Qe,F,"req"+ae+"_")}catch{p&&p(Qe)}}if(me){p=F.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,p}function yh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;k||q(),M||(k(),M=!0),z.add(u,a),a.v=0}}function Ja(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=gi(_(a.Fa,a),wh(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,vh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=gi(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),to(this),vh(this))};function Ya(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function vh(a){a.g=new en(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Ut(a.qa);ge(u,"RID","rpc"),ge(u,"SID",a.K),ge(u,"AID",a.T),ge(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ge(u,"TO",a.ja),ge(u,"TYPE","xmlhttp"),Ai(a,u),a.m&&a.o&&Ha(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Ys(Ut(u)),d.m=null,d.P=!0,Gu(d,a)}r.Za=function(){this.C!=null&&(this.C=null,to(this),Ja(this),et(19))};function ro(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Ih(a,u){var d=null;if(a.g==u){ro(a),Ya(a),a.g=null;var p=2}else if(Ga(a.h,u))d=u.D,Xu(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var R=a.B;p=Ws(),Ze(p,new qu(p,d)),no(a)}else yh(a);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&z_(a,u)||p==2&&Ja(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),R){case 1:On(a,5);break;case 4:On(a,10);break;case 3:On(a,6);break;default:On(a,2)}}}function wh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function On(a,u){if(a.j.info("Error code "+u),u==2){var d=_(a.fb,a),p=a.Xa;const R=!p;p=new Vn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Qs(p,"https"),Ys(p),R?M_(p.toString(),d):F_(p.toString(),d)}else et(2);a.G=0,a.l&&a.l.sa(u),Eh(a),ph(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Eh(a){if(a.G=0,a.ka=[],a.l){const u=Zu(a.h);(u.length!=0||a.i.length!=0)&&(N(a.ka,u),N(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function Th(a,u,d){var p=d instanceof Vn?Ut(d):new Vn(d);if(p.g!="")u&&(p.g=u+"."+p.g),Js(p,p.s);else{var R=c.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var x=new Vn(null);p&&Qs(x,p),u&&(x.g=u),R&&Js(x,R),d&&(x.l=d),p=x}return d=a.D,u=a.ya,d&&u&&ge(p,d,u),ge(p,"VER",a.la),Ai(a,p),p}function bh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new be(new Xs({eb:d})):new be(a.pa),u.Ha(a.J),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ah(){}r=Ah.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function io(){}io.prototype.g=function(a,u){return new ft(a,u)};function ft(a,u){He.call(this),this.g=new mh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!Q(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new yr(this)}T(ft,He),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Qa(this.g)},ft.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Ma(a),a=d);u.i.push(new S_(u.Ya++,a)),u.G==3&&no(u)},ft.prototype.N=function(){this.g.l=null,delete this.j,Qa(this.g),delete this.g,ft.aa.N.call(this)};function Rh(a){Ua.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}T(Rh,Ua);function Sh(){Ba.call(this),this.status=1}T(Sh,Ba);function yr(a){this.g=a}T(yr,Ah),yr.prototype.ua=function(){Ze(this.g,"a")},yr.prototype.ta=function(a){Ze(this.g,new Rh(a))},yr.prototype.sa=function(a){Ze(this.g,new Sh)},yr.prototype.ra=function(){Ze(this.g,"b")},io.prototype.createWebChannel=io.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,Qm=function(){return new io},Hm=function(){return Ws()},Km=Nn,Sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,yo=Gs,$u.COMPLETE="complete",Gm=$u,Fu.EventType=mi,mi.OPEN="a",mi.CLOSE="b",mi.ERROR="c",mi.MESSAGE="d",He.prototype.listen=He.prototype.K,Fi=Fu,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,Wm=be}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const cd="@firebase/firestore";/**
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
 */class je{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */const _n=new Ho("@firebase/firestore");function Rr(){return _n.logLevel}function KT(r){_n.setLogLevel(r)}function O(r,...e){if(_n.logLevel<=re.DEBUG){const t=e.map(Rl);_n.debug(`Firestore (${si}): ${r}`,...t)}}function Ce(r,...e){if(_n.logLevel<=re.ERROR){const t=e.map(Rl);_n.error(`Firestore (${si}): ${r}`,...t)}}function Lt(r,...e){if(_n.logLevel<=re.WARN){const t=e.map(Rl);_n.warn(`Firestore (${si}): ${r}`,...t)}}function Rl(r){if(typeof r=="string")return r;try{/**
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
 */function j(r="Unexpected state"){const e=`FIRESTORE (${si}) INTERNAL ASSERTION FAILED: `+r;throw Ce(e),new Error(e)}function W(r,e){r||j()}function HT(r,e){r||j()}function B(r,e){return r}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends rt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ge{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Jm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(je.UNAUTHENTICATED))}shutdown(){}}class JT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class YT{constructor(e){this.t=e,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0);let n=this.i;const i=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let s=new Ge;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ge,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},c=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ge)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string"),new Jm(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string"),new je(e)}}class XT{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=je.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZT{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new XT(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){W(this.o===void 0);const n=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>n(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(W(typeof t.token=="string"),this.R=t.token,new eb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nb(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Ym{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=nb(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<t&&(n+=e.charAt(i[s]%e.length))}return n}}function Z(r,e){return r<e?-1:r>e?1:0}function qr(r,e,t){return r.length===e.length&&r.every((n,i)=>t(n,e[i]))}function Xm(r){return r+"\0"}/**
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
 */class we{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new we(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new we(0,0))}static max(){return new K(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class os{constructor(e,t,n){t===void 0?t=0:t>e.length&&j(),n===void 0?n=e.length-t:n>e.length-t&&j(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return os.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof os?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ie extends os{construct(e,t,n){return new ie(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(i=>i.length>0))}return new ie(t)}static emptyPath(){return new ie([])}}const rb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ve extends os{construct(e,t,n){return new ve(e,t,n)}static isValidIdentifier(e){return rb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ve(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const s=()=>{if(n.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(n+=c,i++):(s(),i++)}if(s(),o)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ve(t)}static emptyPath(){return new ve([])}}/**
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
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}static empty(){return new U(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ie.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}/**
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
 */class Vo{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function Pc(r){return r.fields.find(e=>e.kind===2)}function Fn(r){return r.fields.filter(e=>e.kind!==2)}Vo.UNKNOWN_ID=-1;class vo{constructor(e,t){this.fieldPath=e,this.kind=t}}class as{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new as(0,gt.min())}}function Zm(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=K.fromTimestamp(n===1e9?new we(t+1,0):new we(t,n));return new gt(i,U.empty(),e)}function ep(r){return new gt(r.readTime,r.key,-1)}class gt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new gt(K.min(),U.empty(),-1)}static max(){return new gt(K.max(),U.empty(),-1)}}function Sl(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(r.documentKey,e.documentKey),t!==0?t:Z(r.largestBatchId,e.largestBatchId))}/**
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
 */async function Sn(r){if(r.code!==C.FAILED_PRECONDITION||r.message!==tp)throw r;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((n,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,n)=>{t(e)})}static reject(e){return new P((t,n)=>{n(e)})}static waitFor(e){return new P((t,n)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&t()},l=>n(l))}),o=!0,s===i&&t()})}static or(e){let t=P.resolve(!1);for(const n of e)t=t.next(i=>i?P.resolve(i):n());return t}static forEach(e,t){const n=[];return e.forEach((i,s)=>{n.push(t.call(this,i,s))}),this.waitFor(n)}static mapArray(e,t){return new P((n,i)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const h=l;t(e[h]).next(f=>{o[h]=f,++c,c===s&&n(o)},f=>i(f))}})}static doWhile(e,t){return new P((n,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):n()};s()})}}/**
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
 */class oa{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new Ge,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Wi(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const i=Pl(n.target.error);this.V.reject(new Wi(e,i))}}static open(e,t,n,i){try{return new oa(t,e.transaction(i,n))}catch(s){throw new Wi(t,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new sb(t)}}class Nt{constructor(e,t,n){this.name=e,this.version=t,this.p=n,Nt.S(Te())===12.2&&Ce("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),Un(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Yi())return!1;if(Nt.v())return!0;const e=Te(),t=Nt.S(e),n=0<t&&t<10,i=rp(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;t(o)},i.onblocked=()=>{n(new Wi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?n(new V(C.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new V(C.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Wi(e,o))},i.onupgradeneeded=s=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const s=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=oa.open(this.db,e,s?"readonly":"readwrite",n),l=i(c).next(h=>(c.g(),h)).catch(h=>(c.abort(h),P.reject(h))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,h=l.name!=="FirebaseError"&&o<3;if(O("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class ib{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Un(this.B.delete())}}class Wi extends V{constructor(e,t){super(C.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Pn(r){return r.name==="IndexedDbTransactionError"}class sb{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(O("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Un(n)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),Un(this.store.add(e))}get(e){return Un(this.store.get(e)).next(t=>(t===void 0&&(t=null),O("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),Un(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),Un(this.store.count())}U(e,t){const n=this.options(e,t),i=n.index?this.store.index(n.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(n.range);return new P((o,c)=>{s.onerror=l=>{c(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(n),o=[];return this.W(s,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new P((i,s)=>{n.onerror=o=>{s(o.target.error)},n.onsuccess=o=>{i(o.target.result)}})}j(e,t){O("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const i=this.cursor(n);return this.W(i,(s,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}Y(e){const t=this.cursor({});return new P((n,i)=>{t.onerror=s=>{const o=Pl(s.target.error);i(o)},t.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new P((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void i();const l=new ib(c),h=t(c.primaryKey,c.value,l);if(h instanceof P){const f=h.catch(m=>(l.done(),P.reject(m)));n.push(f)}l.isDone?i():l.K===null?c.continue():c.continue(l.K)}}).next(()=>P.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Un(r){return new P((e,t)=>{r.onsuccess=n=>{const i=n.target.result;e(i)},r.onerror=n=>{const i=Pl(n.target.error);t(i)}})}let ld=!1;function Pl(r){const e=Nt.S(Te());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new V("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ld||(ld=!0,setTimeout(()=>{throw n},0)),n}}return r}class ob{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){O("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{O("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Pn(t)?O("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Sn(t)}await this.X(6e4)})}}class ab{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let i=t,s=!0;return P.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return O("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(c=>{i-=c,n.add(o)});s=!1})).next(()=>t-i)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(c=>(O("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((i,s)=>{const o=ep(s);Sl(o,n)>0&&(n=o)}),new gt(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class ut{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ut.oe=-1;function Ps(r){return r==null}function cs(r){return r===0&&1/r==-1/0}function ip(r){return typeof r=="number"&&Number.isInteger(r)&&!cs(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function it(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=ud(e)),e=cb(r.get(t),e);return ud(e)}function cb(r,e){let t=e;const n=r.length;for(let i=0;i<n;i++){const s=r.charAt(i);switch(s){case"\0":t+="";break;case"":t+="";break;default:t+=s}}return t}function ud(r){return r+""}function Ct(r){const e=r.length;if(W(e>=2),e===2)return W(r.charAt(0)===""&&r.charAt(1)===""),ie.emptyPath();const t=e-2,n=[];let i="";for(let s=0;s<e;){const o=r.indexOf("",s);switch((o<0||o>t)&&j(),r.charAt(o+1)){case"":const c=r.substring(s,o);let l;i.length===0?l=c:(i+=c,l=i,i=""),n.push(l);break;case"":i+=r.substring(s,o),i+="\0";break;case"":i+=r.substring(s,o+1);break;default:j()}s=o+2}return new ie(n)}/**
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
 */const hd=["userId","batchId"];/**
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
 */function Io(r,e){return[r,it(e)]}function sp(r,e,t){return[r,it(e),t]}const lb={},ub=["prefixPath","collectionGroup","readTime","documentId"],hb=["prefixPath","collectionGroup","documentId"],db=["collectionGroup","readTime","prefixPath","documentId"],fb=["canonicalId","targetId"],mb=["targetId","path"],pb=["path","targetId"],gb=["collectionId","parent"],_b=["indexId","uid"],yb=["uid","sequenceNumber"],vb=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Ib=["indexId","uid","orderedDocumentKey"],wb=["userId","collectionPath","documentId"],Eb=["userId","collectionPath","largestBatchId"],Tb=["userId","collectionGroup","largestBatchId"],op=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bb=[...op,"documentOverlays"],ap=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],cp=ap,kl=[...cp,"indexConfiguration","indexState","indexEntries"],Ab=kl,Rb=[...kl,"globals"];/**
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
 */class kc extends np{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Ue(r,e){const t=B(r);return Nt.F(t._e,e)}/**
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
 */function dd(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function hr(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function lp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||ze.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=n??ze.RED,this.left=i??ze.EMPTY,this.right=s??ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,s){return new ze(e??this.key,t??this.value,n??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ze.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw j();const e=this.left.check();if(e!==this.right.check())throw j();return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw j()}get value(){throw j()}get color(){throw j()}get left(){throw j()}get right(){throw j()}copy(e,t,n,i,s){return this}insert(e,t,n){return new ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fd(this.data.getIterator())}getIteratorFrom(e){return new fd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class fd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function wr(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class ht{constructor(e){this.fields=e,e.sort(ve.comparator)}static empty(){return new ht([])}unionWith(e){let t=new fe(ve.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ht(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */function Sb(){return typeof atob<"u"}/**
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
 */class Se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new up("Invalid base64 string: "+s):s}}(e);return new Se(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Se.EMPTY_BYTE_STRING=new Se("");const Pb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kt(r){if(W(!!r),typeof r=="string"){let e=0;const t=Pb.exec(r);if(W(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ye(r.seconds),nanos:ye(r.nanos)}}function ye(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yn(r){return typeof r=="string"?Se.fromBase64String(r):Se.fromUint8Array(r)}/**
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
 */function aa(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Cl(r){const e=r.mapValue.fields.__previous_value__;return aa(e)?Cl(e):e}function ls(r){const e=Kt(r.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */class kb{constructor(e,t,n,i,s,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class vn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},wo={nullValue:"NULL_VALUE"};function Zn(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?aa(r)?4:hp(r)?9007199254740991:ca(r)?10:11:j()}function Mt(r,e){if(r===e)return!0;const t=Zn(r);if(t!==Zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return ls(r).isEqual(ls(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kt(i.timestampValue),c=Kt(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,s){return yn(i.bytesValue).isEqual(yn(s.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(r,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ye(i.doubleValue),c=ye(s.doubleValue);return o===c?cs(o)===cs(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return qr(r.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(dd(o)!==dd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Mt(o[l],c[l])))return!1;return!0}(r,e);default:return j()}}function us(r,e){return(r.values||[]).find(t=>Mt(t,e))!==void 0}function In(r,e){if(r===e)return 0;const t=Zn(r),n=Zn(e);if(t!==n)return Z(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(r.booleanValue,e.booleanValue);case 2:return function(s,o){const c=ye(s.integerValue||s.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return md(r.timestampValue,e.timestampValue);case 4:return md(ls(r),ls(e));case 5:return Z(r.stringValue,e.stringValue);case 6:return function(s,o){const c=yn(s),l=yn(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Z(c[h],l[h]);if(f!==0)return f}return Z(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(s,o){const c=Z(ye(s.latitude),ye(o.latitude));return c!==0?c:Z(ye(s.longitude),ye(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return pd(r.arrayValue,e.arrayValue);case 10:return function(s,o){var c,l,h,f;const m=s.fields||{},_=o.fields||{},A=(c=m.value)===null||c===void 0?void 0:c.arrayValue,T=(l=_.value)===null||l===void 0?void 0:l.arrayValue,D=Z(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=T==null?void 0:T.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:pd(A,T)}(r.mapValue,e.mapValue);case 11:return function(s,o){if(s===hn.mapValue&&o===hn.mapValue)return 0;if(s===hn.mapValue)return 1;if(o===hn.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let m=0;m<l.length&&m<f.length;++m){const _=Z(l[m],f[m]);if(_!==0)return _;const A=In(c[l[m]],h[f[m]]);if(A!==0)return A}return Z(l.length,f.length)}(r.mapValue,e.mapValue);default:throw j()}}function md(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Z(r,e);const t=Kt(r),n=Kt(e),i=Z(t.seconds,n.seconds);return i!==0?i:Z(t.nanos,n.nanos)}function pd(r,e){const t=r.values||[],n=e.values||[];for(let i=0;i<t.length&&i<n.length;++i){const s=In(t[i],n[i]);if(s)return s}return Z(t.length,n.length)}function $r(r){return Cc(r)}function Cc(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Kt(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return yn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return U.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",i=!0;for(const s of t.values||[])i?i=!1:n+=",",n+=Cc(s);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of n)s?s=!1:i+=",",i+=`${o}:${Cc(t.fields[o])}`;return i+"}"}(r.mapValue):j()}function er(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function xc(r){return!!r&&"integerValue"in r}function hs(r){return!!r&&"arrayValue"in r}function gd(r){return!!r&&"nullValue"in r}function _d(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Eo(r){return!!r&&"mapValue"in r}function ca(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Gi(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return hr(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Gi(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Gi(r.arrayValue.values[t]);return e}return Object.assign({},r)}function hp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const dp={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Cb(r){return"nullValue"in r?wo:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?er(vn.empty(),U.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?ca(r)?dp:{mapValue:{}}:j()}function xb(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?er(vn.empty(),U.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?dp:"mapValue"in r?ca(r)?{mapValue:{}}:hn:j()}function yd(r,e){const t=In(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function vd(r,e){const t=In(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Eo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gi(t)}setAll(e){let t=ve.emptyPath(),n={},i=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,i),n={},i=[],t=c.popLast()}o?n[c.lastSegment()]=Gi(o):i.push(c.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,i)}delete(e){const t=this.field(e.popLast());Eo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Eo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){hr(t,(i,s)=>e[i]=s);for(const i of n)delete e[i]}clone(){return new We(Gi(this.value))}}function fp(r){const e=[];return hr(r.fields,(t,n)=>{const i=new ve([t]);if(Eo(n)){const s=fp(n.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ht(e)}/**
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
 */class _e{constructor(e,t,n,i,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new _e(e,0,K.min(),K.min(),K.min(),We.empty(),0)}static newFoundDocument(e,t,n,i){return new _e(e,1,t,K.min(),n,i,0)}static newNoDocument(e,t){return new _e(e,2,t,K.min(),K.min(),We.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,K.min(),K.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class wn{constructor(e,t){this.position=e,this.inclusive=t}}function Id(r,e,t){let n=0;for(let i=0;i<r.position.length;i++){const s=e[i],o=r.position[i];if(s.field.isKeyField()?n=U.comparator(U.fromName(o.referenceValue),t.key):n=In(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function wd(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Mt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ds{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nb(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class mp{}class se extends mp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Db(e,t,n):t==="array-contains"?new Lb(e,n):t==="in"?new Ip(e,n):t==="not-in"?new Mb(e,n):t==="array-contains-any"?new Fb(e,n):new se(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Vb(e,n):new Ob(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(In(t,this.value)):t!==null&&Zn(this.value)===Zn(t)&&this.matchesComparison(In(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class de extends mp{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new de(e,t)}matches(e){return zr(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zr(r){return r.op==="and"}function Nc(r){return r.op==="or"}function xl(r){return pp(r)&&zr(r)}function pp(r){for(const e of r.filters)if(e instanceof de)return!1;return!0}function Dc(r){if(r instanceof se)return r.field.canonicalString()+r.op.toString()+$r(r.value);if(xl(r))return r.filters.map(e=>Dc(e)).join(",");{const e=r.filters.map(t=>Dc(t)).join(",");return`${r.op}(${e})`}}function gp(r,e){return r instanceof se?function(n,i){return i instanceof se&&n.op===i.op&&n.field.isEqual(i.field)&&Mt(n.value,i.value)}(r,e):r instanceof de?function(n,i){return i instanceof de&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,o,c)=>s&&gp(o,i.filters[c]),!0):!1}(r,e):void j()}function _p(r,e){const t=r.filters.concat(e);return de.create(t,r.op)}function yp(r){return r instanceof se?function(t){return`${t.field.canonicalString()} ${t.op} ${$r(t.value)}`}(r):r instanceof de?function(t){return t.op.toString()+" {"+t.getFilters().map(yp).join(" ,")+"}"}(r):"Filter"}class Db extends se{constructor(e,t,n){super(e,t,n),this.key=U.fromName(n.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vb extends se{constructor(e,t){super(e,"in",t),this.keys=vp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Ob extends se{constructor(e,t){super(e,"not-in",t),this.keys=vp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function vp(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>U.fromName(n.referenceValue))}class Lb extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hs(t)&&us(t.arrayValue,this.value)}}class Ip extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&us(this.value.arrayValue,t)}}class Mb extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!us(this.value.arrayValue,t)}}class Fb extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>us(this.value.arrayValue,n))}}/**
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
 */class Ub{constructor(e,t=null,n=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.ue=null}}function Vc(r,e=null,t=[],n=[],i=null,s=null,o=null){return new Ub(r,e,t,n,i,s,o)}function tr(r){const e=B(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>Dc(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),Ps(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>$r(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>$r(n)).join(",")),e.ue=t}return e.ue}function ks(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Nb(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!gp(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!wd(r.startAt,e.startAt)&&wd(r.endAt,e.endAt)}function Oo(r){return U.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Lo(r,e){return r.filters.filter(t=>t instanceof se&&t.field.isEqual(e))}function Ed(r,e,t){let n=wo,i=!0;for(const s of Lo(r,e)){let o=wo,c=!0;switch(s.op){case"<":case"<=":o=Cb(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,c=!1;break;case"!=":case"not-in":o=wo}yd({value:n,inclusive:i},{value:o,inclusive:c})<0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];yd({value:n,inclusive:i},{value:o,inclusive:t.inclusive})<0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}function Td(r,e,t){let n=hn,i=!0;for(const s of Lo(r,e)){let o=hn,c=!0;switch(s.op){case">=":case">":o=xb(s.value),c=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,c=!1;break;case"!=":case"not-in":o=hn}vd({value:n,inclusive:i},{value:o,inclusive:c})>0&&(n=o,i=c)}if(t!==null){for(let s=0;s<r.orderBy.length;++s)if(r.orderBy[s].field.isEqual(e)){const o=t.position[s];vd({value:n,inclusive:i},{value:o,inclusive:t.inclusive})>0&&(n=o,i=t.inclusive);break}}return{value:n,inclusive:i}}/**
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
 */class Yt{constructor(e,t=null,n=[],i=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wp(r,e,t,n,i,s,o,c){return new Yt(r,e,t,n,i,s,o,c)}function oi(r){return new Yt(r)}function bd(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Nl(r){return r.collectionGroup!==null}function Lr(r){const e=B(r);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new fe(ve.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ds(s,n))}),t.has(ve.keyField().canonicalString())||e.ce.push(new ds(ve.keyField(),n))}return e.ce}function st(r){const e=B(r);return e.le||(e.le=Bb(e,Lr(r))),e.le}function Bb(r,e){if(r.limitType==="F")return Vc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ds(i.field,s)});const t=r.endAt?new wn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new wn(r.startAt.position,r.startAt.inclusive):null;return Vc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Oc(r,e){const t=r.filters.concat([e]);return new Yt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Mo(r,e,t){return new Yt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Cs(r,e){return ks(st(r),st(e))&&r.limitType===e.limitType}function Ep(r){return`${tr(st(r))}|lt:${r.limitType}`}function Sr(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(i=>yp(i)).join(", ")}]`),Ps(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>$r(i)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>$r(i)).join(",")),`Target(${n})`}(st(r))}; limitType=${r.limitType})`}function xs(r,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):U.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(r,e)&&function(n,i){for(const s of Lr(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(r,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(r,e)&&function(n,i){return!(n.startAt&&!function(o,c,l){const h=Id(o,c,l);return o.inclusive?h<=0:h<0}(n.startAt,Lr(n),i)||n.endAt&&!function(o,c,l){const h=Id(o,c,l);return o.inclusive?h>=0:h>0}(n.endAt,Lr(n),i))}(r,e)}function Tp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function bp(r){return(e,t)=>{let n=!1;for(const i of Lr(r)){const s=jb(i,e,t);if(s!==0)return s;n=n||i.field.isKeyField()}return 0}}function jb(r,e,t){const n=r.field.isKeyField()?U.comparator(e.key,t.key):function(s,o,c){const l=o.data.field(s),h=c.data.field(s);return l!==null&&h!==null?In(l,h):j()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return j()}}/**
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
 */class kn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[i,s]of n)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return n.length===1?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hr(this.inner,(t,n)=>{for(const[i,s]of n)e(i,s)})}isEmpty(){return lp(this.inner)}size(){return this.innerSize}}/**
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
 */const qb=new pe(U.comparator);function dt(){return qb}const Ap=new pe(U.comparator);function Ui(...r){let e=Ap;for(const t of r)e=e.insert(t.key,t);return e}function Rp(r){let e=Ap;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function xt(){return Ki()}function Sp(){return Ki()}function Ki(){return new kn(r=>r.toString(),(r,e)=>r.isEqual(e))}const $b=new pe(U.comparator),zb=new fe(U.comparator);function ee(...r){let e=zb;for(const t of r)e=e.add(t);return e}const Wb=new fe(Z);function Dl(){return Wb}/**
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
 */function Vl(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cs(e)?"-0":e}}function Pp(r){return{integerValue:""+r}}function kp(r,e){return ip(e)?Pp(e):Vl(r,e)}/**
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
 */class la{constructor(){this._=void 0}}function Gb(r,e,t){return r instanceof Wr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&aa(s)&&(s=Cl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):r instanceof nr?xp(r,e):r instanceof rr?Np(r,e):function(i,s){const o=Cp(i,s),c=Ad(o)+Ad(i.Pe);return xc(o)&&xc(i.Pe)?Pp(c):Vl(i.serializer,c)}(r,e)}function Kb(r,e,t){return r instanceof nr?xp(r,e):r instanceof rr?Np(r,e):t}function Cp(r,e){return r instanceof Gr?function(n){return xc(n)||function(s){return!!s&&"doubleValue"in s}(n)}(e)?e:{integerValue:0}:null}class Wr extends la{}class nr extends la{constructor(e){super(),this.elements=e}}function xp(r,e){const t=Dp(e);for(const n of r.elements)t.some(i=>Mt(i,n))||t.push(n);return{arrayValue:{values:t}}}class rr extends la{constructor(e){super(),this.elements=e}}function Np(r,e){let t=Dp(e);for(const n of r.elements)t=t.filter(i=>!Mt(i,n));return{arrayValue:{values:t}}}class Gr extends la{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ad(r){return ye(r.integerValue||r.doubleValue)}function Dp(r){return hs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class Ns{constructor(e,t){this.field=e,this.transform=t}}function Hb(r,e){return r.field.isEqual(e.field)&&function(n,i){return n instanceof nr&&i instanceof nr||n instanceof rr&&i instanceof rr?qr(n.elements,i.elements,Mt):n instanceof Gr&&i instanceof Gr?Mt(n.Pe,i.Pe):n instanceof Wr&&i instanceof Wr}(r.transform,e.transform)}class Qb{constructor(e,t){this.version=e,this.transformResults=t}}class Ie{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ie}static exists(e){return new Ie(void 0,e)}static updateTime(e){return new Ie(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function To(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ua{}function Vp(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new ci(r.key,Ie.none()):new ai(r.key,r.data,Ie.none());{const t=r.data,n=We.empty();let i=new fe(ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),i=i.add(s)}return new Xt(r.key,n,new ht(i.toArray()),Ie.none())}}function Jb(r,e,t){r instanceof ai?function(i,s,o){const c=i.value.clone(),l=Sd(i.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof Xt?function(i,s,o){if(!To(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Sd(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Op(i)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Hi(r,e,t,n){return r instanceof ai?function(s,o,c,l){if(!To(s.precondition,o))return c;const h=s.value.clone(),f=Pd(s.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(r,e,t,n):r instanceof Xt?function(s,o,c,l){if(!To(s.precondition,o))return c;const h=Pd(s.fieldTransforms,l,o),f=o.data;return f.setAll(Op(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(r,e,t,n):function(s,o,c){return To(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function Yb(r,e){let t=null;for(const n of r.fieldTransforms){const i=e.data.field(n.field),s=Cp(n.transform,i||null);s!=null&&(t===null&&(t=We.empty()),t.set(n.field,s))}return t||null}function Rd(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&qr(n,i,(s,o)=>Hb(s,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class ai extends ua{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Xt extends ua{constructor(e,t,n,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Op(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Sd(r,e,t){const n=new Map;W(r.length===t.length);for(let i=0;i<t.length;i++){const s=r[i],o=s.transform,c=e.data.field(s.field);n.set(s.field,Kb(o,c,t[i]))}return n}function Pd(r,e,t){const n=new Map;for(const i of r){const s=i.transform,o=t.data.field(i.field);n.set(i.field,Gb(s,o,e))}return n}class ci extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ol extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ll{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Jb(s,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Hi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Hi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Sp();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(i.key)?null:c;const l=Vp(o,c);l!==null&&n.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(K.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&qr(this.mutations,e.mutations,(t,n)=>Rd(t,n))&&qr(this.baseMutations,e.baseMutations,(t,n)=>Rd(t,n))}}class Ml{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){W(e.mutations.length===n.length);let i=function(){return $b}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,n[o].version);return new Ml(e,t,n,i)}}/**
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
 */class Fl{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Xb{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Oe,oe;function Lp(r){switch(r){default:return j();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function Mp(r){if(r===void 0)return Ce("GRPC error has no .code"),C.UNKNOWN;switch(r){case Oe.OK:return C.OK;case Oe.CANCELLED:return C.CANCELLED;case Oe.UNKNOWN:return C.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return C.INTERNAL;case Oe.UNAVAILABLE:return C.UNAVAILABLE;case Oe.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Oe.NOT_FOUND:return C.NOT_FOUND;case Oe.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Oe.ABORTED:return C.ABORTED;case Oe.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Oe.DATA_LOSS:return C.DATA_LOSS;default:return j()}}(oe=Oe||(Oe={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Zb=new Qn([4294967295,4294967295],0);function kd(r){const e=Fp().encode(r),t=new zm;return t.update(e),new Uint8Array(t.digest())}function Cd(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Qn([t,n],0),new Qn([i,s],0)]}class Ul{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Bi(`Invalid padding: ${t}`);if(n<0)throw new Bi(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Bi(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Bi(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Qn.fromNumber(this.Ie)}Ee(e,t,n){let i=e.add(t.multiply(Qn.fromNumber(n)));return i.compare(Zb)===1&&(i=new Qn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=kd(e),[n,i]=Cd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);if(!this.de(o))return!1}return!0}static create(e,t,n){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Ul(s,i,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=kd(e),[n,i]=Cd(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Bi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ds{constructor(e,t,n,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,Vs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ds(K.min(),i,new pe(Z),dt(),ee())}}class Vs{constructor(e,t,n,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Vs(n,t,ee(),ee(),ee())}}/**
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
 */class bo{constructor(e,t,n,i){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=i}}class Up{constructor(e,t){this.targetId=e,this.me=t}}class Bp{constructor(e,t,n=Se.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class xd{constructor(){this.fe=0,this.ge=Dd(),this.pe=Se.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),n=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:j()}}),new Vs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Dd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,W(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class eA{constructor(e){this.Le=e,this.Be=new Map,this.ke=dt(),this.qe=Nd(),this.Qe=new pe(Z)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const n=this.Ge(t);switch(e.state){case 0:this.ze(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),n.De(e.resumeToken));break;default:j()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,n=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Oo(s))if(n===0){const o=new U(s.path);this.Ue(t,o,_e.newNoDocument(o,K.min()))}else W(n===1);else{const o=this.Ye(t);if(o!==n){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:s=0}=t;let o,c;try{o=yn(n).toUint8Array()}catch(l){if(l instanceof up)return Lt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ul(o,i,s)}catch(l){return Lt(l instanceof Bi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,n){return t.me.count===n-this.nt(e,t.targetId)?0:2}nt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let i=0;return n.forEach(s=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const c=this.Je(o);if(c){if(s.current&&Oo(c.target)){const l=new U(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,_e.newNoDocument(l,e))}s.be&&(t.set(o,s.ve()),s.Ce())}});let n=ee();this.qe.forEach((s,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ds(e,t,this.Qe,this.ke,n);return this.ke=dt(),this.qe=Nd(),this.Qe=new pe(Z),i}$e(e,t){if(!this.ze(e))return;const n=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,n){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new xd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new fe(Z),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Nd(){return new pe(U.comparator)}function Dd(){return new pe(U.comparator)}const tA={asc:"ASCENDING",desc:"DESCENDING"},nA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rA={and:"AND",or:"OR"};class iA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Lc(r,e){return r.useProto3Json||Ps(e)?e:{value:e}}function Kr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jp(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function sA(r,e){return Kr(r,e.toTimestamp())}function xe(r){return W(!!r),K.fromTimestamp(function(t){const n=Kt(t);return new we(n.seconds,n.nanos)}(r))}function Bl(r,e){return Mc(r,e).canonicalString()}function Mc(r,e){const t=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(r).child("documents");return e===void 0?t:t.child(e)}function qp(r){const e=ie.fromString(r);return W(Xp(e)),e}function fs(r,e){return Bl(r.databaseId,e.path)}function Dt(r,e){const t=qp(e);if(t.get(1)!==r.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new U(Wp(t))}function $p(r,e){return Bl(r.databaseId,e)}function zp(r){const e=qp(r);return e.length===4?ie.emptyPath():Wp(e)}function Fc(r){return new ie(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Wp(r){return W(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Vd(r,e,t){return{name:fs(r,e),fields:t.value.mapValue.fields}}function Gp(r,e,t){const n=Dt(r,e.name),i=xe(e.updateTime),s=e.createTime?xe(e.createTime):K.min(),o=new We({mapValue:{fields:e.fields}}),c=_e.newFoundDocument(n,i,s,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function oA(r,e){return"found"in e?function(n,i){W(!!i.found),i.found.name,i.found.updateTime;const s=Dt(n,i.found.name),o=xe(i.found.updateTime),c=i.found.createTime?xe(i.found.createTime):K.min(),l=new We({mapValue:{fields:i.found.fields}});return _e.newFoundDocument(s,o,c,l)}(r,e):"missing"in e?function(n,i){W(!!i.missing),W(!!i.readTime);const s=Dt(n,i.missing),o=xe(i.readTime);return _e.newNoDocument(s,o)}(r,e):j()}function aA(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:j()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(W(f===void 0||typeof f=="string"),Se.fromBase64String(f||"")):(W(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Se.fromUint8Array(f||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?C.UNKNOWN:Mp(h.code);return new V(f,h.message||"")}(o);t=new Bp(n,i,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const i=Dt(r,n.document.name),s=xe(n.document.updateTime),o=n.document.createTime?xe(n.document.createTime):K.min(),c=new We({mapValue:{fields:n.document.fields}}),l=_e.newFoundDocument(i,s,o,c),h=n.targetIds||[],f=n.removedTargetIds||[];t=new bo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const i=Dt(r,n.document),s=n.readTime?xe(n.readTime):K.min(),o=_e.newNoDocument(i,s),c=n.removedTargetIds||[];t=new bo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const i=Dt(r,n.document),s=n.removedTargetIds||[];t=new bo([],s,i,null)}else{if(!("filter"in e))return j();{e.filter;const n=e.filter;n.targetId;const{count:i=0,unchangedNames:s}=n,o=new Xb(i,s),c=n.targetId;t=new Up(c,o)}}return t}function ms(r,e){let t;if(e instanceof ai)t={update:Vd(r,e.key,e.value)};else if(e instanceof ci)t={delete:fs(r,e.key)};else if(e instanceof Xt)t={update:Vd(r,e.key,e.data),updateMask:fA(e.fieldMask)};else{if(!(e instanceof Ol))return j();t={verify:fs(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(s,o){const c=o.transform;if(c instanceof Wr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof nr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof rr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Gr)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw j()}(0,n))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:sA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:j()}(r,e.precondition)),t}function Uc(r,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Ie.updateTime(xe(s.updateTime)):s.exists!==void 0?Ie.exists(s.exists):Ie.none()}(e.currentDocument):Ie.none(),n=e.updateTransforms?e.updateTransforms.map(i=>function(o,c){let l=null;if("setToServerValue"in c)W(c.setToServerValue==="REQUEST_TIME"),l=new Wr;else if("appendMissingElements"in c){const f=c.appendMissingElements.values||[];l=new nr(f)}else if("removeAllFromArray"in c){const f=c.removeAllFromArray.values||[];l=new rr(f)}else"increment"in c?l=new Gr(o,c.increment):j();const h=ve.fromServerFormat(c.fieldPath);return new Ns(h,l)}(r,i)):[];if(e.update){e.update.name;const i=Dt(r,e.update.name),s=new We({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const h=l.fieldPaths||[];return new ht(h.map(f=>ve.fromServerFormat(f)))}(e.updateMask);return new Xt(i,s,o,t,n)}return new ai(i,s,t,n)}if(e.delete){const i=Dt(r,e.delete);return new ci(i,t)}if(e.verify){const i=Dt(r,e.verify);return new Ol(i,t)}return j()}function cA(r,e){return r&&r.length>0?(W(e!==void 0),r.map(t=>function(i,s){let o=i.updateTime?xe(i.updateTime):xe(s);return o.isEqual(K.min())&&(o=xe(s)),new Qb(o,i.transformResults||[])}(t,e))):[]}function Kp(r,e){return{documents:[$p(r,e.path)]}}function Hp(r,e){const t={structuredQuery:{}},n=e.path;let i;e.collectionGroup!==null?(i=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=$p(r,i);const s=function(h){if(h.length!==0)return Yp(de.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(_){return{field:Pr(_.field),direction:uA(_.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Lc(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function Qp(r){let e=zp(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let i=null;if(n>0){W(n===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const _=Jp(m);return _ instanceof de&&xl(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(_=>function(T){return new ds(kr(T.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(m){let _;return _=typeof m=="object"?m.value:m,Ps(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(m){const _=!!m.before,A=m.values||[];return new wn(A,_)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const _=!m.before,A=m.values||[];return new wn(A,_)}(t.endAt)),wp(e,i,o,s,c,"F",l,h)}function lA(r,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jp(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=kr(t.unaryFilter.field);return se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=kr(t.unaryFilter.field);return se.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=kr(t.unaryFilter.field);return se.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=kr(t.unaryFilter.field);return se.create(o,"!=",{nullValue:"NULL_VALUE"});default:return j()}}(r):r.fieldFilter!==void 0?function(t){return se.create(kr(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return j()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return de.create(t.compositeFilter.filters.map(n=>Jp(n)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j()}}(t.compositeFilter.op))}(r):j()}function uA(r){return tA[r]}function hA(r){return nA[r]}function dA(r){return rA[r]}function Pr(r){return{fieldPath:r.canonicalString()}}function kr(r){return ve.fromServerFormat(r.fieldPath)}function Yp(r){return r instanceof se?function(t){if(t.op==="=="){if(_d(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NAN"}};if(gd(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_d(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NAN"}};if(gd(t.value))return{unaryFilter:{field:Pr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(t.field),op:hA(t.op),value:t.value}}}(r):r instanceof de?function(t){const n=t.getFilters().map(i=>Yp(i));return n.length===1?n[0]:{compositeFilter:{op:dA(t.op),filters:n}}}(r):j()}function fA(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xp(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class $t{constructor(e,t,n,i,s=K.min(),o=K.min(),c=Se.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new $t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Zp{constructor(e){this.ct=e}}function mA(r,e){let t;if(e.document)t=Gp(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=U.fromSegments(e.noDocument.path),i=sr(e.noDocument.readTime);t=_e.newNoDocument(n,i),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return j();{const n=U.fromSegments(e.unknownDocument.path),i=sr(e.unknownDocument.version);t=_e.newUnknownDocument(n,i)}}return e.readTime&&t.setReadTime(function(i){const s=new we(i[0],i[1]);return K.fromTimestamp(s)}(e.readTime)),t}function Od(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Fo(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(s,o){return{name:fs(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Kr(s,o.version.toTimestamp()),createTime:Kr(s,o.createTime.toTimestamp())}}(r.ct,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:ir(e.version)};else{if(!e.isUnknownDocument())return j();n.unknownDocument={path:t.path.toArray(),version:ir(e.version)}}return n}function Fo(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function ir(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function sr(r){const e=new we(r.seconds,r.nanoseconds);return K.fromTimestamp(e)}function Bn(r,e){const t=(e.baseMutations||[]).map(s=>Uc(r.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const c=e.mutations[s+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const n=e.mutations.map(s=>Uc(r.ct,s)),i=we.fromMillis(e.localWriteTimeMs);return new Ll(e.batchId,i,t,n)}function ji(r){const e=sr(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?sr(r.lastLimboFreeSnapshotVersion):K.min();let n;return n=function(s){return s.documents!==void 0}(r.query)?function(s){return W(s.documents.length===1),st(oi(zp(s.documents[0])))}(r.query):function(s){return st(Qp(s))}(r.query),new $t(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Se.fromBase64String(r.resumeToken))}function eg(r,e){const t=ir(e.snapshotVersion),n=ir(e.lastLimboFreeSnapshotVersion);let i;i=Oo(e.target)?Kp(r.ct,e.target):Hp(r.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:tr(e.target),readTime:t,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:i}}function jl(r){const e=Qp({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Mo(e,e.limit,"L"):e}function lc(r,e){return new Fl(e.largestBatchId,Uc(r.ct,e.overlayMutation))}function Ld(r,e){const t=e.path.lastSegment();return[r,it(e.path.popLast()),t]}function Md(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:ir(n.readTime),documentKey:it(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class pA{getBundleMetadata(e,t){return Fd(e).get(t).next(n=>{if(n)return function(s){return{id:s.bundleId,createTime:sr(s.createTime),version:s.version}}(n)})}saveBundleMetadata(e,t){return Fd(e).put(function(i){return{bundleId:i.id,createTime:ir(xe(i.createTime)),version:i.version}}(t))}getNamedQuery(e,t){return Ud(e).get(t).next(n=>{if(n)return function(s){return{name:s.name,query:jl(s.bundledQuery),readTime:sr(s.readTime)}}(n)})}saveNamedQuery(e,t){return Ud(e).put(function(i){return{name:i.name,readTime:ir(xe(i.readTime)),bundledQuery:i.bundledQuery}}(t))}}function Fd(r){return Ue(r,"bundles")}function Ud(r){return Ue(r,"namedQueries")}/**
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
 */class ha{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const n=t.uid||"";return new ha(e,n)}getOverlay(e,t){return ki(e).get(Ld(this.userId,t)).next(n=>n?lc(this.serializer,n):null)}getOverlays(e,t){const n=xt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){const i=[];return n.forEach((s,o)=>{const c=new Fl(t,o);i.push(this.ht(e,c))}),P.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach(o=>i.add(it(o.getCollectionPath())));const s=[];return i.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);s.push(ki(e).j("collectionPathOverlayIndex",c))}),P.waitFor(s)}getOverlaysForCollection(e,t,n){const i=xt(),s=it(t),o=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return ki(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const h=lc(this.serializer,l);i.set(h.getKey(),h)}return i})}getOverlaysForCollectionGroup(e,t,n,i){const s=xt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return ki(e).J({index:"collectionGroupOverlayIndex",range:c},(l,h,f)=>{const m=lc(this.serializer,h);s.size()<i||m.largestBatchId===o?(s.set(m.getKey(),m),o=m.largestBatchId):f.done()}).next(()=>s)}ht(e,t){return ki(e).put(function(i,s,o){const[c,l,h]=Ld(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:h,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ms(i.ct,o.mutation)}}(this.serializer,this.userId,t))}}function ki(r){return Ue(r,"documentOverlays")}/**
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
 */class gA{Pt(e){return Ue(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?Se.fromUint8Array(n):Se.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Pt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class jn{constructor(){}It(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.dt(t,5);else if("booleanValue"in e)this.dt(t,10),t.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(t,15),t.At(ye(e.integerValue));else if("doubleValue"in e){const n=ye(e.doubleValue);isNaN(n)?this.dt(t,13):(this.dt(t,15),cs(n)?t.At(0):t.At(n))}else if("timestampValue"in e){let n=e.timestampValue;this.dt(t,20),typeof n=="string"&&(n=Kt(n)),t.Rt(`${n.seconds||""}`),t.At(n.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,t),this.ft(t);else if("bytesValue"in e)this.dt(t,30),t.gt(yn(e.bytesValue)),this.ft(t);else if("referenceValue"in e)this.yt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.dt(t,45),t.At(n.latitude||0),t.At(n.longitude||0)}else"mapValue"in e?hp(e)?this.dt(t,Number.MAX_SAFE_INTEGER):ca(e)?this.wt(e.mapValue,t):(this.St(e.mapValue,t),this.ft(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.ft(t)):j()}Vt(e,t){this.dt(t,25),this.Dt(e,t)}Dt(e,t){t.Rt(e)}St(e,t){const n=e.fields||{};this.dt(t,55);for(const i of Object.keys(n))this.Vt(i,t),this.Tt(n[i],t)}wt(e,t){var n,i;const s=e.fields||{};this.dt(t,53);const o="value",c=((i=(n=s[o].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.length)||0;this.dt(t,15),t.At(ye(c)),this.Vt(o,t),this.Tt(s[o],t)}bt(e,t){const n=e.values||[];this.dt(t,50);for(const i of n)this.Tt(i,t)}yt(e,t){this.dt(t,37),U.fromName(e).path.forEach(n=>{this.dt(t,60),this.Dt(n,t)})}dt(e,t){e.At(t)}ft(e){e.At(2)}}jn.vt=new jn;function _A(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Bd(r){const e=64-function(n){let i=0;for(let s=0;s<8;++s){const o=_A(255&n[s]);if(i+=o,o!==8)break}return i}(r);return Math.ceil(e/8)}class yA{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ft(n.value),n=t.next();this.Mt()}xt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Ot(n.value),n=t.next();this.Nt()}Lt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ft(n);else if(n<2048)this.Ft(960|n>>>6),this.Ft(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ft(480|n>>>12),this.Ft(128|63&n>>>6),this.Ft(128|63&n);else{const i=t.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Bt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Ot(n);else if(n<2048)this.Ot(960|n>>>6),this.Ot(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Ot(480|n>>>12),this.Ot(128|63&n>>>6),this.Ot(128|63&n);else{const i=t.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const t=this.qt(e),n=Bd(t);this.Qt(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Kt(e){const t=this.qt(e),n=Bd(t);this.Qt(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const t=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Ft(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}Ot(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class vA{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class IA{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Ci{constructor(){this.jt=new yA,this.Ht=new vA(this.jt),this.Jt=new IA(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class qn{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}Zt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new qn(this.indexId,this.documentKey,this.arrayValue,n)}}function sn(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=jd(r.arrayValue,e.arrayValue),t!==0?t:(t=jd(r.directionalValue,e.directionalValue),t!==0?t:U.comparator(r.documentKey,e.documentKey)))}function jd(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class qd{constructor(e){this.Xt=new fe((t,n)=>ve.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const t of e.filters){const n=t;n.isInequality()?this.Xt=this.Xt.add(n):this.tn.push(n)}}get nn(){return this.Xt.size>1}rn(e){if(W(e.collectionGroup===this.collectionId),this.nn)return!1;const t=Pc(e);if(t!==void 0&&!this.sn(t))return!1;const n=Fn(e);let i=new Set,s=0,o=0;for(;s<n.length&&this.sn(n[s]);++s)i=i.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Xt.size>0){const c=this.Xt.getIterator().getNext();if(!i.has(c.field.canonicalString())){const l=n[s];if(!this.on(c,l)||!this._n(this.en[o++],l))return!1}++s}for(;s<n.length;++s){const c=n[s];if(o>=this.en.length||!this._n(this.en[o++],c))return!1}return!0}an(){if(this.nn)return null;let e=new fe(ve.comparator);const t=[];for(const n of this.tn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new vo(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new vo(n.field,0))}for(const n of this.en)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new vo(n.field,n.dir==="asc"?0:1)));return new Vo(Vo.UNKNOWN_ID,this.collectionId,t,as.empty())}sn(e){for(const t of this.tn)if(this.on(t,e))return!0;return!1}on(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}_n(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function tg(r){var e,t;if(W(r instanceof se||r instanceof de),r instanceof se){if(r instanceof Ip){const i=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(s=>se.create(r.field,"==",s)))||[];return de.create(i,"or")}return r}const n=r.filters.map(i=>tg(i));return de.create(n,r.op)}function wA(r){if(r.getFilters().length===0)return[];const e=qc(tg(r));return W(ng(e)),Bc(e)||jc(e)?[e]:e.getFilters()}function Bc(r){return r instanceof se}function jc(r){return r instanceof de&&xl(r)}function ng(r){return Bc(r)||jc(r)||function(t){if(t instanceof de&&Nc(t)){for(const n of t.getFilters())if(!Bc(n)&&!jc(n))return!1;return!0}return!1}(r)}function qc(r){if(W(r instanceof se||r instanceof de),r instanceof se)return r;if(r.filters.length===1)return qc(r.filters[0]);const e=r.filters.map(n=>qc(n));let t=de.create(e,r.op);return t=Uo(t),ng(t)?t:(W(t instanceof de),W(zr(t)),W(t.filters.length>1),t.filters.reduce((n,i)=>ql(n,i)))}function ql(r,e){let t;return W(r instanceof se||r instanceof de),W(e instanceof se||e instanceof de),t=r instanceof se?e instanceof se?function(i,s){return de.create([i,s],"and")}(r,e):$d(r,e):e instanceof se?$d(e,r):function(i,s){if(W(i.filters.length>0&&s.filters.length>0),zr(i)&&zr(s))return _p(i,s.getFilters());const o=Nc(i)?i:s,c=Nc(i)?s:i,l=o.filters.map(h=>ql(h,c));return de.create(l,"or")}(r,e),Uo(t)}function $d(r,e){if(zr(e))return _p(e,r.getFilters());{const t=e.filters.map(n=>ql(r,n));return de.create(t,"or")}}function Uo(r){if(W(r instanceof se||r instanceof de),r instanceof se)return r;const e=r.getFilters();if(e.length===1)return Uo(e[0]);if(pp(r))return r;const t=e.map(i=>Uo(i)),n=[];return t.forEach(i=>{i instanceof se?n.push(i):i instanceof de&&(i.op===r.op?n.push(...i.filters):n.push(i))}),n.length===1?n[0]:de.create(n,r.op)}/**
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
 */class EA{constructor(){this.un=new $l}addToCollectionParentIndex(e,t){return this.un.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(gt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(gt.min())}updateCollectionGroup(e,t,n){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class $l{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new fe(ie.comparator),s=!i.has(n);return this.index[t]=i.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new fe(ie.comparator)).toArray()}}/**
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
 */const lo=new Uint8Array(0);class TA{constructor(e,t){this.databaseId=t,this.cn=new $l,this.ln=new kn(n=>tr(n),(n,i)=>ks(n,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.cn.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener(()=>{this.cn.add(t)});const s={collectionId:n,parent:it(i)};return zd(e).put(s)}return P.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[Xm(t),""],!1,!0);return zd(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==t)break;n.push(Ct(o.parent))}return n})}addFieldIndex(e,t){const n=xi(e),i=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete i.indexId;const s=n.add(i);if(t.indexState){const o=Tr(e);return s.next(c=>{o.put(Md(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return s.next()}deleteFieldIndex(e,t){const n=xi(e),i=Tr(e),s=Er(e);return n.delete(t.indexId).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=xi(e),n=Er(e),i=Tr(e);return t.j().next(()=>n.j()).next(()=>i.j())}createTargetIndexes(e,t){return P.forEach(this.hn(t),n=>this.getIndexType(e,n).next(i=>{if(i===0||i===1){const s=new qd(n).an();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,t){const n=Er(e);let i=!0;const s=new Map;return P.forEach(this.hn(t),o=>this.Pn(e,o).next(c=>{i&&(i=!!c),s.set(o,c)})).next(()=>{if(i){let o=ee();const c=[];return P.forEach(s,(l,h)=>{O("IndexedDbIndexManager",`Using index ${function(G){return`id=${G.indexId}|cg=${G.collectionGroup}|f=${G.fields.map(H=>`${H.fieldPath}:${H.kind}`).join(",")}`}(l)} to execute ${tr(t)}`);const f=function(G,H){const ne=Pc(H);if(ne===void 0)return null;for(const Y of Lo(G,ne.fieldPath))switch(Y.op){case"array-contains-any":return Y.value.arrayValue.values||[];case"array-contains":return[Y.value]}return null}(h,l),m=function(G,H){const ne=new Map;for(const Y of Fn(H))for(const w of Lo(G,Y.fieldPath))switch(w.op){case"==":case"in":ne.set(Y.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return ne.set(Y.fieldPath.canonicalString(),w.value),Array.from(ne.values())}return null}(h,l),_=function(G,H){const ne=[];let Y=!0;for(const w of Fn(H)){const g=w.kind===0?Ed(G,w.fieldPath,G.startAt):Td(G,w.fieldPath,G.startAt);ne.push(g.value),Y&&(Y=g.inclusive)}return new wn(ne,Y)}(h,l),A=function(G,H){const ne=[];let Y=!0;for(const w of Fn(H)){const g=w.kind===0?Td(G,w.fieldPath,G.endAt):Ed(G,w.fieldPath,G.endAt);ne.push(g.value),Y&&(Y=g.inclusive)}return new wn(ne,Y)}(h,l),T=this.In(l,h,_),D=this.In(l,h,A),N=this.Tn(l,h,m),$=this.En(l.indexId,f,T,_.inclusive,D,A.inclusive,N);return P.forEach($,Q=>n.G(Q,t.limit).next(G=>{G.forEach(H=>{const ne=U.fromSegments(H.documentKey);o.has(ne)||(o=o.add(ne),c.push(ne))})}))}).next(()=>c)}return P.resolve(null)})}hn(e){let t=this.ln.get(e);return t||(e.filters.length===0?t=[e]:t=wA(de.create(e.filters,"and")).map(n=>Vc(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,t),t)}En(e,t,n,i,s,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,s.length),h=l/(t!=null?t.length:1),f=[];for(let m=0;m<l;++m){const _=t?this.dn(t[m/h]):lo,A=this.An(e,_,n[m%h],i),T=this.Rn(e,_,s[m%h],o),D=c.map(N=>this.An(e,_,N,!0));f.push(...this.createRange(A,T,D))}return f}An(e,t,n,i){const s=new qn(e,U.empty(),t,n);return i?s:s.Zt()}Rn(e,t,n,i){const s=new qn(e,U.empty(),t,n);return i?s.Zt():s}Pn(e,t){const n=new qd(t),i=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const c of s)n.rn(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const i=this.hn(t);return P.forEach(i,s=>this.Pn(e,s).next(o=>{o?n!==0&&o.fields.length<function(l){let h=new fe(ve.comparator),f=!1;for(const m of l.filters)for(const _ of m.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:h=h.add(_.field));for(const m of l.orderBy)m.field.isKeyField()||(h=h.add(m.field));return h.size+(f?1:0)}(s)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&i.length>1&&n===2?1:n)}Vn(e,t){const n=new Ci;for(const i of Fn(e)){const s=t.data.field(i.fieldPath);if(s==null)return null;const o=n.Yt(i.kind);jn.vt.It(s,o)}return n.zt()}dn(e){const t=new Ci;return jn.vt.It(e,t.Yt(0)),t.zt()}mn(e,t){const n=new Ci;return jn.vt.It(er(this.databaseId,t),n.Yt(function(s){const o=Fn(s);return o.length===0?0:o[o.length-1].kind}(e))),n.zt()}Tn(e,t,n){if(n===null)return[];let i=[];i.push(new Ci);let s=0;for(const o of Fn(e)){const c=n[s++];for(const l of i)if(this.fn(t,o.fieldPath)&&hs(c))i=this.gn(i,o,c);else{const h=l.Yt(o.kind);jn.vt.It(c,h)}}return this.pn(i)}In(e,t,n){return this.Tn(e,t,n.position)}pn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].zt();return t}gn(e,t,n){const i=[...e],s=[];for(const o of n.arrayValue.values||[])for(const c of i){const l=new Ci;l.seed(c.zt()),jn.vt.It(o,l.Yt(t.kind)),s.push(l)}return s}fn(e,t){return!!e.filters.find(n=>n instanceof se&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=xi(e),i=Tr(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(s=>{const o=[];return P.forEach(s,c=>i.get([c.indexId,this.uid]).next(l=>{o.push(function(f,m){const _=m?new as(m.sequenceNumber,new gt(sr(m.readTime),new U(Ct(m.documentKey)),m.largestBatchId)):as.empty(),A=f.fields.map(([T,D])=>new vo(ve.fromServerFormat(T),D));return new Vo(f.indexId,f.collectionGroup,A,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,i)=>{const s=n.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Z(n.collectionGroup,i.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const i=xi(e),s=Tr(e);return this.yn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>P.forEach(c,l=>s.put(Md(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return P.forEach(t,(i,s)=>{const o=n.get(i.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(c=>(n.set(i.collectionGroup,c),P.forEach(c,l=>this.wn(e,i,l).next(h=>{const f=this.Sn(s,l);return h.isEqual(f)?P.resolve():this.bn(e,s,l,h,f)}))))})}Dn(e,t,n,i){return Er(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.mn(n,t.key),documentKey:t.key.path.toArray()})}vn(e,t,n,i){return Er(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.mn(n,t.key),t.key.path.toArray()])}wn(e,t,n){const i=Er(e);let s=new fe(sn);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.mn(n,t)])},(o,c)=>{s=s.add(new qn(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>s)}Sn(e,t){let n=new fe(sn);const i=this.Vn(t,e);if(i==null)return n;const s=Pc(t);if(s!=null){const o=e.data.field(s.fieldPath);if(hs(o))for(const c of o.arrayValue.values||[])n=n.add(new qn(t.indexId,e.key,this.dn(c),i))}else n=n.add(new qn(t.indexId,e.key,lo,i));return n}bn(e,t,n,i,s){O("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,h,f,m,_){const A=l.getIterator(),T=h.getIterator();let D=wr(A),N=wr(T);for(;D||N;){let $=!1,Q=!1;if(D&&N){const G=f(D,N);G<0?Q=!0:G>0&&($=!0)}else D!=null?Q=!0:$=!0;$?(m(N),N=wr(T)):Q?(_(D),D=wr(A)):(D=wr(A),N=wr(T))}}(i,s,sn,c=>{o.push(this.Dn(e,t,n,c))},c=>{o.push(this.vn(e,t,n,c))}),P.waitFor(o)}yn(e){let t=1;return Tr(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,i,s)=>{s.done(),t=i.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>sn(o,c)).filter((o,c,l)=>!c||sn(o,l[c-1])!==0);const i=[];i.push(e);for(const o of n){const c=sn(o,e),l=sn(o,t);if(c===0)i[0]=e.Zt();else if(c>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(t);const s=[];for(let o=0;o<i.length;o+=2){if(this.Cn(i[o],i[o+1]))return[];const c=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,lo,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,lo,[]];s.push(IDBKeyRange.bound(c,l))}return s}Cn(e,t){return sn(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Wd)}getMinOffset(e,t){return P.mapArray(this.hn(t),n=>this.Pn(e,n).next(i=>i||j())).next(Wd)}}function zd(r){return Ue(r,"collectionParents")}function Er(r){return Ue(r,"indexEntries")}function xi(r){return Ue(r,"indexConfiguration")}function Tr(r){return Ue(r,"indexState")}function Wd(r){W(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const i=r[n].indexState.offset;Sl(i,e)<0&&(e=i),t<i.largestBatchId&&(t=i.largestBatchId)}return new gt(e.readTime,e.documentKey,t)}/**
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
 */const Gd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class lt{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function rg(r,e,t){const n=r.store("mutations"),i=r.store("documentMutations"),s=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(f,m,_)=>(c++,_.delete()));s.push(l.next(()=>{W(c===1)}));const h=[];for(const f of t.mutations){const m=sp(e,f.key.path,t.batchId);s.push(i.delete(m)),h.push(f.key)}return P.waitFor(s).next(()=>h)}function Bo(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw j();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(41943040,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);class da{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.Fn={}}static lt(e,t,n,i){W(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new da(s,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return on(e).J({index:"userMutationsIndex",range:n},(i,s,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,i){const s=Cr(e),o=on(e);return o.add({}).next(c=>{W(typeof c=="number");const l=new Ll(c,t,n,i),h=function(A,T,D){const N=D.baseMutations.map(Q=>ms(A.ct,Q)),$=D.mutations.map(Q=>ms(A.ct,Q));return{userId:T,batchId:D.batchId,localWriteTimeMs:D.localWriteTime.toMillis(),baseMutations:N,mutations:$}}(this.serializer,this.userId,l),f=[];let m=new fe((_,A)=>Z(_.canonicalString(),A.canonicalString()));for(const _ of i){const A=sp(this.userId,_.key.path,c);m=m.add(_.key.path.popLast()),f.push(o.put(h)),f.push(s.put(A,lb))}return m.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.Fn[c]=l.keys()}),P.waitFor(f).next(()=>l)})}lookupMutationBatch(e,t){return on(e).get(t).next(n=>n?(W(n.userId===this.userId),Bn(this.serializer,n)):null)}Mn(e,t){return this.Fn[t]?P.resolve(this.Fn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const i=n.keys();return this.Fn[t]=i,i}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return on(e).J({index:"userMutationsIndex",range:i},(o,c,l)=>{c.userId===this.userId&&(W(c.batchId>=n),s=Bn(this.serializer,c)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return on(e).J({index:"userMutationsIndex",range:t,reverse:!0},(i,s,o)=>{n=s.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return on(e).U("userMutationsIndex",t).next(n=>n.map(i=>Bn(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Io(this.userId,t.path),i=IDBKeyRange.lowerBound(n),s=[];return Cr(e).J({range:i},(o,c,l)=>{const[h,f,m]=o,_=Ct(f);if(h===this.userId&&t.path.isEqual(_))return on(e).get(m).next(A=>{if(!A)throw j();W(A.userId===this.userId),s.push(Bn(this.serializer,A))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new fe(Z);const i=[];return t.forEach(s=>{const o=Io(this.userId,s.path),c=IDBKeyRange.lowerBound(o),l=Cr(e).J({range:c},(h,f,m)=>{const[_,A,T]=h,D=Ct(A);_===this.userId&&s.path.isEqual(D)?n=n.add(T):m.done()});i.push(l)}),P.waitFor(i).next(()=>this.xn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,s=Io(this.userId,n),o=IDBKeyRange.lowerBound(s);let c=new fe(Z);return Cr(e).J({range:o},(l,h,f)=>{const[m,_,A]=l,T=Ct(_);m===this.userId&&n.isPrefixOf(T)?T.length===i&&(c=c.add(A)):f.done()}).next(()=>this.xn(e,c))}xn(e,t){const n=[],i=[];return t.forEach(s=>{i.push(on(e).get(s).next(o=>{if(o===null)throw j();W(o.userId===this.userId),n.push(Bn(this.serializer,o))}))}),P.waitFor(i).next(()=>n)}removeMutationBatch(e,t){return rg(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.On(t.batchId)}),P.forEach(n,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return P.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Cr(e).J({range:n},(s,o,c)=>{if(s[0]===this.userId){const l=Ct(s[1]);i.push(l)}else c.done()}).next(()=>{W(i.length===0)})})}containsKey(e,t){return ig(e,this.userId,t)}Nn(e){return sg(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function ig(r,e,t){const n=Io(e,t.path),i=n[1],s=IDBKeyRange.lowerBound(n);let o=!1;return Cr(r).J({range:s,H:!0},(c,l,h)=>{const[f,m,_]=c;f===e&&m===i&&(o=!0),h.done()}).next(()=>o)}function on(r){return Ue(r,"mutations")}function Cr(r){return Ue(r,"documentMutations")}function sg(r){return Ue(r,"mutationQueues")}/**
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
 */class or{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new or(0)}static kn(){return new or(-1)}}/**
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
 */class bA{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.qn(e).next(t=>{const n=new or(t.highestTargetId);return t.highestTargetId=n.next(),this.Qn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(t=>K.fromTimestamp(new we(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.qn(e).next(i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Qn(e,i)))}addTargetData(e,t){return this.Kn(e,t).next(()=>this.qn(e).next(n=>(n.targetCount+=1,this.$n(t,n),this.Qn(e,n))))}updateTargetData(e,t){return this.Kn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>br(e).delete(t.targetId)).next(()=>this.qn(e)).next(n=>(W(n.targetCount>0),n.targetCount-=1,this.Qn(e,n)))}removeTargets(e,t,n){let i=0;const s=[];return br(e).J((o,c)=>{const l=ji(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>P.waitFor(s)).next(()=>i)}forEachTarget(e,t){return br(e).J((n,i)=>{const s=ji(i);t(s)})}qn(e){return Kd(e).get("targetGlobalKey").next(t=>(W(t!==null),t))}Qn(e,t){return Kd(e).put("targetGlobalKey",t)}Kn(e,t){return br(e).put(eg(this.serializer,t))}$n(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.qn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=tr(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return br(e).J({range:i,index:"queryTargetsIndex"},(o,c,l)=>{const h=ji(c);ks(t,h.target)&&(s=h,l.done())}).next(()=>s)}addMatchingKeys(e,t,n){const i=[],s=cn(e);return t.forEach(o=>{const c=it(o.path);i.push(s.put({targetId:n,path:c})),i.push(this.referenceDelegate.addReference(e,n,o))}),P.waitFor(i)}removeMatchingKeys(e,t,n){const i=cn(e);return P.forEach(t,s=>{const o=it(s.path);return P.waitFor([i.delete([n,o]),this.referenceDelegate.removeReference(e,n,s)])})}removeMatchingKeysForTargetId(e,t){const n=cn(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=cn(e);let s=ee();return i.J({range:n,H:!0},(o,c,l)=>{const h=Ct(o[1]),f=new U(h);s=s.add(f)}).next(()=>s)}containsKey(e,t){const n=it(t.path),i=IDBKeyRange.bound([n],[Xm(n)],!1,!0);let s=0;return cn(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,c],l,h)=>{o!==0&&(s++,h.done())}).next(()=>s>0)}ot(e,t){return br(e).get(t).next(n=>n?ji(n):null)}}function br(r){return Ue(r,"targets")}function Kd(r){return Ue(r,"targetGlobal")}function cn(r){return Ue(r,"targetDocuments")}/**
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
 */function Hd([r,e],[t,n]){const i=Z(r,t);return i===0?Z(e,n):i}class AA{constructor(e){this.Un=e,this.buffer=new fe(Hd),this.Wn=0}Gn(){return++this.Wn}zn(e){const t=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Hd(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class RA{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){O("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pn(t)?O("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Sn(t)}await this.Hn(3e5)})}}class SA{constructor(e,t){this.Jn=e,this.params=t}calculateTargetCount(e,t){return this.Jn.Yn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return P.resolve(ut.oe);const n=new AA(t);return this.Jn.forEachTarget(e,i=>n.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>n.zn(i))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Jn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Gd)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gd):this.Xn(e,t))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,t){let n,i,s,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(m=>(m>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${m}`),i=this.params.maximumSequenceNumbersToCollect):i=m,o=Date.now(),this.nthSequenceNumber(e,i))).next(m=>(n=m,c=Date.now(),this.removeTargets(e,n,t))).next(m=>(s=m,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(m=>(h=Date.now(),Rr()<=re.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${m} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:m})))}}function PA(r,e){return new SA(r,e)}/**
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
 */class kA{constructor(e,t){this.db=e,this.garbageCollector=PA(this,t)}Yn(e){const t=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(i=>n+i))}er(e){let t=0;return this.Zn(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Zn(e,t){return this.tr(e,(n,i)=>t(i))}addReference(e,t,n){return uo(e,n)}removeReference(e,t,n){return uo(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return uo(e,t)}nr(e,t){return function(i,s){let o=!1;return sg(i).Y(c=>ig(i,c,s).next(l=>(l&&(o=!0),P.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.tr(e,(o,c)=>{if(c<=t){const l=this.nr(e,o).next(h=>{if(!h)return s++,n.getEntry(e,o).next(()=>(n.removeEntry(o,K.min()),cn(e).delete(function(m){return[0,it(m.path)]}(o))))});i.push(l)}}).next(()=>P.waitFor(i)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return uo(e,t)}tr(e,t){const n=cn(e);let i,s=ut.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:h})=>{o===0?(s!==ut.oe&&t(new U(Ct(i)),s),s=h,i=l):s=ut.oe}).next(()=>{s!==ut.oe&&t(new U(Ct(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function uo(r,e){return cn(r).put(function(n,i){return{targetId:0,path:it(n.path),sequenceNumber:i}}(e,r.currentSequenceNumber))}/**
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
 */class og{constructor(){this.changes=new kn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?P.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CA{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return Ln(e).put(n)}removeEntry(e,t,n){return Ln(e).delete(function(s,o){const c=s.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Fo(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.rr(e,n)))}getEntry(e,t){let n=_e.newInvalidDocument(t);return Ln(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ni(t))},(i,s)=>{n=this.ir(t,s)}).next(()=>n)}sr(e,t){let n={size:0,document:_e.newInvalidDocument(t)};return Ln(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ni(t))},(i,s)=>{n={document:this.ir(t,s),size:Bo(s)}}).next(()=>n)}getEntries(e,t){let n=dt();return this._r(e,t,(i,s)=>{const o=this.ir(i,s);n=n.insert(i,o)}).next(()=>n)}ar(e,t){let n=dt(),i=new pe(U.comparator);return this._r(e,t,(s,o)=>{const c=this.ir(s,o);n=n.insert(s,c),i=i.insert(s,Bo(o))}).next(()=>({documents:n,ur:i}))}_r(e,t,n){if(t.isEmpty())return P.resolve();let i=new fe(Yd);t.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Ni(i.first()),Ni(i.last())),o=i.getIterator();let c=o.getNext();return Ln(e).J({index:"documentKeyIndex",range:s},(l,h,f)=>{const m=U.fromSegments([...h.prefixPath,h.collectionGroup,h.documentId]);for(;c&&Yd(c,m)<0;)n(c,null),c=o.getNext();c&&c.isEqual(m)&&(n(c,h),c=o.hasNext()?o.getNext():null),c?f.$(Ni(c)):f.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,i,s){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Fo(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ln(e).U(IDBKeyRange.bound(c,l,!0)).next(h=>{s==null||s.incrementDocumentReadCount(h.length);let f=dt();for(const m of h){const _=this.ir(U.fromSegments(m.prefixPath.concat(m.collectionGroup,m.documentId)),m);_.isFoundDocument()&&(xs(t,_)||i.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(e,t,n,i){let s=dt();const o=Jd(t,n),c=Jd(t,gt.max());return Ln(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,h,f)=>{const m=this.ir(U.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);s=s.insert(m.key,m),s.size===i&&f.done()}).next(()=>s)}newChangeBuffer(e){return new xA(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Qd(e).get("remoteDocumentGlobalKey").next(t=>(W(!!t),t))}rr(e,t){return Qd(e).put("remoteDocumentGlobalKey",t)}ir(e,t){if(t){const n=mA(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(K.min())))return n}return _e.newInvalidDocument(e)}}function ag(r){return new CA(r)}class xA extends og{constructor(e,t){super(),this.cr=e,this.trackRemovals=t,this.lr=new kn(n=>n.toString(),(n,i)=>n.isEqual(i))}applyChanges(e){const t=[];let n=0,i=new fe((s,o)=>Z(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const c=this.lr.get(s);if(t.push(this.cr.removeEntry(e,s,c.readTime)),o.isValidDocument()){const l=Od(this.cr.serializer,o);i=i.add(s.path.popLast());const h=Bo(l);n+=h-c.size,t.push(this.cr.addEntry(e,s,l))}else if(n-=c.size,this.trackRemovals){const l=Od(this.cr.serializer,o.convertToNoDocument(K.min()));t.push(this.cr.addEntry(e,s,l))}}),i.forEach(s=>{t.push(this.cr.indexManager.addToCollectionParentIndex(e,s))}),t.push(this.cr.updateMetadata(e,n)),P.waitFor(t)}getFromCache(e,t){return this.cr.sr(e,t).next(n=>(this.lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.cr.ar(e,t).next(({documents:n,ur:i})=>(i.forEach((s,o)=>{this.lr.set(s,{size:o,readTime:n.get(s).readTime})}),n))}}function Qd(r){return Ue(r,"remoteDocumentGlobal")}function Ln(r){return Ue(r,"remoteDocumentsV14")}function Ni(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Jd(r,e){const t=e.documentKey.path.toArray();return[r,Fo(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Yd(r,e){const t=r.path.toArray(),n=e.path.toArray();let i=0;for(let s=0;s<t.length-2&&s<n.length-2;++s)if(i=Z(t[s],n[s]),i)return i;return i=Z(t.length,n.length),i||(i=Z(t[t.length-2],n[n.length-2]),i||Z(t[t.length-1],n[n.length-1]))}/**
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
 */class NA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class cg{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(n=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(n!==null&&Hi(n.mutation,i,ht.empty(),we.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ee()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ee()){const i=xt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,n).next(s=>{let o=Ui();return s.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=xt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ee()))}populateOverlays(e,t,n){const i=[];return n.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,i){let s=dt();const o=Ki(),c=function(){return Ki()}();return t.forEach((l,h)=>{const f=n.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Xt)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Hi(f.mutation,h,f.mutation.getFieldMask(),we.now())):o.set(h.key,ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return c.set(h,new NA(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Ki();let i=new pe((o,c)=>o-c),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let f=n.get(l)||ht.empty();f=c.applyToLocalView(h,f),n.set(l,f);const m=(i.get(c.batchId)||ee()).add(l);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,m=Sp();f.forEach(_=>{if(!s.has(_)){const A=Vp(t.get(_),n.get(_));A!==null&&m.set(_,A),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return P.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,i){return function(o){return U.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Nl(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,i):this.getDocumentsMatchingCollectionQuery(e,t,n,i)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-s.size):P.resolve(xt());let c=-1,l=s;return o.next(h=>P.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),s.get(f)?P.resolve():this.remoteDocumentCache.getEntry(e,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,l,h,ee())).next(f=>({batchId:c,changes:Rp(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(n=>{let i=Ui();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,n,i){const s=t.collectionGroup;let o=Ui();return this.indexManager.getCollectionParents(e,s).next(c=>P.forEach(c,l=>{const h=function(m,_){return new Yt(_,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,n,i).next(f=>{f.forEach((m,_)=>{o=o.insert(m,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,i))).next(o=>{s.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,_e.newInvalidDocument(f)))});let c=Ui();return o.forEach((l,h)=>{const f=s.get(l);f!==void 0&&Hi(f.mutation,h,ht.empty(),we.now()),xs(t,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class DA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return P.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:xe(i.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(i){return{name:i.name,query:jl(i.bundledQuery),readTime:xe(i.readTime)}}(t)),P.resolve()}}/**
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
 */class VA{constructor(){this.overlays=new pe(U.comparator),this.Ir=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const n=xt();return P.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&n.set(i,s)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((i,s)=>{this.ht(e,t,s)}),P.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.Ir.get(n);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(n)),P.resolve()}getOverlaysForCollection(e,t,n){const i=xt(),s=t.length+1,o=new U(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>n&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let s=new pe((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>n){let f=s.get(h.largestBatchId);f===null&&(f=xt(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=xt(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return P.resolve(c)}ht(e,t,n){const i=this.overlays.get(n.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(n.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new Fl(t,n));let s=this.Ir.get(t);s===void 0&&(s=ee(),this.Ir.set(t,s)),this.Ir.set(t,s.add(n.key))}}/**
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
 */class OA{constructor(){this.sessionToken=Se.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class zl{constructor(){this.Tr=new fe(Be.Er),this.dr=new fe(Be.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const n=new Be(e,t);this.Tr=this.Tr.add(n),this.dr=this.dr.add(n)}Rr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Vr(new Be(e,t))}mr(e,t){e.forEach(n=>this.removeReference(n,t))}gr(e){const t=new U(new ie([])),n=new Be(t,e),i=new Be(t,e+1),s=[];return this.dr.forEachInRange([n,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new U(new ie([])),n=new Be(t,e),i=new Be(t,e+1);let s=ee();return this.dr.forEachInRange([n,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Be(e,0),n=this.Tr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Be{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return U.comparator(e.key,t.key)||Z(e.wr,t.wr)}static Ar(e,t){return Z(e.wr,t.wr)||U.comparator(e.key,t.key)}}/**
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
 */class LA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new fe(Be.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ll(s,t,n,i);this.mutationQueue.push(o);for(const c of i)this.br=this.br.add(new Be(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,t){return P.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.vr(n),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Be(t,0),i=new Be(t,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([n,i],o=>{const c=this.Dr(o.wr);s.push(c)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new fe(Z);return t.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],c=>{n=n.add(c.wr)})}),P.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let s=n;U.isDocumentKey(s)||(s=s.child(""));const o=new Be(new U(s),0);let c=new fe(Z);return this.br.forEachWhile(l=>{const h=l.key.path;return!!n.isPrefixOf(h)&&(h.length===i&&(c=c.add(l.wr)),!0)},o),P.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(n=>{const i=this.Dr(n);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){W(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.br;return P.forEach(t.mutations,i=>{const s=new Be(i.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=n})}On(e){}containsKey(e,t){const n=new Be(t,0),i=this.br.firstAfterOrEqual(n);return P.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class MA{constructor(e){this.Mr=e,this.docs=function(){return new pe(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),s=i?i.size:0,o=this.Mr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return P.resolve(n?n.document.mutableCopy():_e.newInvalidDocument(t))}getEntries(e,t){let n=dt();return t.forEach(i=>{const s=this.docs.get(i);n=n.insert(i,s?s.document.mutableCopy():_e.newInvalidDocument(i))}),P.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let s=dt();const o=t.path,c=new U(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Sl(ep(f),n)<=0||(i.has(f.key)||xs(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,t,n,i){j()}Or(e,t){return P.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new FA(this)}getSize(e){return P.resolve(this.size)}}class FA extends og{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((n,i)=>{i.isValidDocument()?t.push(this.cr.addEntry(e,i)):this.cr.removeEntry(n)}),P.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
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
 */class UA{constructor(e){this.persistence=e,this.Nr=new kn(t=>tr(t),ks),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Lr=0,this.Br=new zl,this.targetCount=0,this.kr=or.Bn()}forEachTarget(e,t){return this.Nr.forEach((n,i)=>t(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Lr&&(this.Lr=t),P.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new or(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.Kn(t),P.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,n){let i=0;const s=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const n=this.Nr.get(t)||null;return P.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Rr(t,n),P.resolve()}removeMatchingKeys(e,t,n){this.Br.mr(t,n);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Br.yr(t);return P.resolve(n)}containsKey(e,t){return P.resolve(this.Br.containsKey(t))}}/**
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
 */class lg{constructor(e,t){this.qr={},this.overlays={},this.Qr=new ut(0),this.Kr=!1,this.Kr=!0,this.$r=new OA,this.referenceDelegate=e(this),this.Ur=new UA(this),this.indexManager=new EA,this.remoteDocumentCache=function(i){return new MA(i)}(n=>this.referenceDelegate.Wr(n)),this.serializer=new Zp(t),this.Gr=new DA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new VA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.qr[e.toKey()];return n||(n=new LA(t,this.referenceDelegate),this.qr[e.toKey()]=n),n}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,n){O("MemoryPersistence","Starting transaction:",e);const i=new BA(this.Qr.next());return this.referenceDelegate.zr(),n(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,t){return P.or(Object.values(this.qr).map(n=>()=>n.containsKey(e,t)))}}class BA extends np{constructor(e){super(),this.currentSequenceNumber=e}}class fa{constructor(e){this.persistence=e,this.Jr=new zl,this.Yr=null}static Zr(e){return new fa(e)}get Xr(){if(this.Yr)return this.Yr;throw j()}addReference(e,t,n){return this.Jr.addReference(n,t),this.Xr.delete(n.toString()),P.resolve()}removeReference(e,t,n){return this.Jr.removeReference(n,t),this.Xr.add(n.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),P.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(i=>this.Xr.add(i.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>n.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,n=>{const i=U.fromPath(n);return this.ei(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(n=>{n?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return P.or([()=>P.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
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
 */class jA{constructor(e){this.serializer=e}O(e,t,n,i){const s=new oa("createOrUpgrade",t);n<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hd,{unique:!0}),l.createObjectStore("documentMutations")}(e),Xd(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=P.resolve();return n<3&&i>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),Xd(e)),o=o.next(()=>function(l){const h=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:K.min().toTimestamp(),targetCount:0};return h.put("targetGlobalKey",f)}(s))),n<4&&i>=4&&(n!==0&&(o=o.next(()=>function(l,h){return h.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",hd,{unique:!0});const m=h.store("mutations"),_=f.map(A=>m.put(A));return P.waitFor(_)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&i>=5&&(o=o.next(()=>this.ni(s))),n<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ri(s)))),n<7&&i>=7&&(o=o.next(()=>this.ii(s))),n<8&&i>=8&&(o=o.next(()=>this.si(e,s))),n<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&i>=10&&(o=o.next(()=>this.oi(s))),n<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&i>=12&&(o=o.next(()=>{(function(l){const h=l.createObjectStore("documentOverlays",{keyPath:wb});h.createIndex("collectionPathOverlayIndex",Eb,{unique:!1}),h.createIndex("collectionGroupOverlayIndex",Tb,{unique:!1})})(e)})),n<13&&i>=13&&(o=o.next(()=>function(l){const h=l.createObjectStore("remoteDocumentsV14",{keyPath:ub});h.createIndex("documentKeyIndex",hb),h.createIndex("collectionGroupIndex",db)}(e)).next(()=>this._i(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&i>=14&&(o=o.next(()=>this.ai(e,s))),n<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:_b}).createIndex("sequenceNumberIndex",yb,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:vb}).createIndex("documentKeyIndex",Ib,{unique:!1})}(e))),n<16&&i>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&i>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let t=0;return e.store("remoteDocuments").J((n,i)=>{t+=Bo(i)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ni(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(i=>P.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>P.forEach(c,l=>{W(l.userId===s.userId);const h=Bn(this.serializer,l);return rg(e,s.userId,h).next(()=>{})}))}))}ii(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return n.J((o,c)=>{const l=new ie(o),h=function(m){return[0,it(m)]}(l);s.push(t.get(h).next(f=>f?P.resolve():(m=>t.put({targetId:0,path:it(m),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>P.waitFor(s))})}si(e,t){e.createObjectStore("collectionParents",{keyPath:gb});const n=t.store("collectionParents"),i=new $l,s=o=>{if(i.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:it(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new ie(o);return s(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],h)=>{const f=Ct(c);return s(f.popLast())}))}oi(e){const t=e.store("targets");return t.J((n,i)=>{const s=ji(i),o=eg(this.serializer,s);return t.put(o)})}_i(e,t){const n=t.store("remoteDocuments"),i=[];return n.J((s,o)=>{const c=t.store("remoteDocumentsV14"),l=function(m){return m.document?new U(ie.fromString(m.document.name).popFirst(5)):m.noDocument?U.fromSegments(m.noDocument.path):m.unknownDocument?U.fromSegments(m.unknownDocument.path):j()}(o).path.toArray(),h={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(c.put(h))}).next(()=>P.waitFor(i))}ai(e,t){const n=t.store("mutations"),i=ag(this.serializer),s=new lg(fa.Zr,this.serializer.ct);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var h;let f=(h=c.get(l.userId))!==null&&h!==void 0?h:ee();Bn(this.serializer,l).keys().forEach(m=>f=f.add(m)),c.set(l.userId,f)}),P.forEach(c,(l,h)=>{const f=new je(h),m=ha.lt(this.serializer,f),_=s.getIndexManager(f),A=da.lt(f,this.serializer,_,s.referenceDelegate);return new cg(i,A,m,_).recalculateAndSaveOverlaysForDocumentKeys(new kc(t,ut.oe),l).next()})})}}function Xd(r){r.createObjectStore("targetDocuments",{keyPath:mb}).createIndex("documentTargetsIndex",pb,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",fb,{unique:!0}),r.createObjectStore("targetGlobal")}const uc="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Wl{constructor(e,t,n,i,s,o,c,l,h,f,m=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.ui=s,this.window=o,this.document=c,this.ci=h,this.li=f,this.hi=m,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=_=>Promise.resolve(),!Wl.D())throw new V(C.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new kA(this,i),this.Ai=t+"main",this.serializer=new Zp(l),this.Ri=new Nt(this.Ai,this.hi,new jA(this.serializer)),this.$r=new gA,this.Ur=new bA(this.referenceDelegate,this.serializer),this.remoteDocumentCache=ag(this.serializer),this.Gr=new pA,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,f===!1&&Ce("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new V(C.FAILED_PRECONDITION,uc);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new ut(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ho(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(t=>{t||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(t=>this.isPrimary&&!t?this.bi(e).next(()=>!1):!!t&&this.Di(e).next(()=>!0))).catch(e=>{if(Pn(e))return O("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return O("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Di(e).get("owner").next(t=>P.resolve(this.vi(t)))}Ci(e){return ho(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ue(t,"clientMetadata");return n.U().next(i=>{const s=this.xi(i,18e5),o=i.filter(c=>s.indexOf(c)===-1);return P.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const t of e)this.Vi.removeItem(this.Oi(t.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?P.resolve(!0):Di(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)){if(this.vi(t)&&this.networkEnabled)return!0;if(!this.vi(t)){if(!t.allowTabSynchronization)throw new V(C.FAILED_PRECONDITION,uc);return!1}}return!(!this.networkEnabled||!this.inForeground)||ho(e).U().next(n=>this.xi(n,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,c=this.networkEnabled===i.networkEnabled;if(s||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&O("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new kc(e,ut.oe);return this.bi(t).next(()=>this.Ci(t))}),this.Ri.close(),this.qi()}xi(e,t){return e.filter(n=>this.Mi(n.updateTimeMs,t)&&!this.Ni(n.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>ho(e).U().next(t=>this.xi(t,18e5).map(n=>n.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,t){return da.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new TA(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return ha.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,t,n){O("IndexedDbPersistence","Starting transaction:",e);const i=t==="readonly"?"readonly":"readwrite",s=function(l){return l===17?Rb:l===16?Ab:l===15?kl:l===14?cp:l===13?ap:l===12?bb:l===11?op:void j()}(this.hi);let o;return this.Ri.runTransaction(e,i,s,c=>(o=new kc(c,this.Qr?this.Qr.next():ut.oe),t==="readwrite-primary"?this.wi(o).next(l=>!!l||this.Si(o)).next(l=>{if(!l)throw Ce(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new V(C.FAILED_PRECONDITION,tp);return n(o)}).next(l=>this.Di(o).next(()=>l)):this.Ki(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ki(e){return Di(e).get("owner").next(t=>{if(t!==null&&this.Mi(t.leaseTimestampMs,5e3)&&!this.Ni(t.ownerId)&&!this.vi(t)&&!(this.li||this.allowTabSynchronization&&t.allowTabSynchronization))throw new V(C.FAILED_PRECONDITION,uc)})}Di(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Di(e).put("owner",t)}static D(){return Nt.D()}bi(e){const t=Di(e);return t.get("owner").next(n=>this.vi(n)?(O("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):P.resolve())}Mi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Ce(`Detected an update time that is in the future: ${e} > ${n}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const t=/(?:Version|Mobile)\/1[456]/;Nf()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var t;try{const n=((t=this.Vi)===null||t===void 0?void 0:t.getItem(this.Oi(e)))!==null;return O("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Ce("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){Ce("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Di(r){return Ue(r,"owner")}function ho(r){return Ue(r,"clientMetadata")}function Gl(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Kl{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.$i=n,this.Ui=i}static Wi(e,t){let n=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kl(e,t.fromCache,n,i)}}/**
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
 */class qA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ug{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nf()?8:rp(Te())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,n,i){const s={result:null};return this.Yi(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,t,i,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new qA;return this.Xi(e,t,o).next(c=>{if(s.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>s.result)}es(e,t,n,i){return n.documentReadCount<this.ji?(Rr()<=re.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(Rr()<=re.DEBUG&&O("QueryEngine","Query:",Sr(t),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Hi*i?(Rr()<=re.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,st(t))):P.resolve())}Yi(e,t){if(bd(t))return P.resolve(null);let n=st(t);return this.indexManager.getIndexType(e,n).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Mo(t,null,"F"),n=st(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(s=>{const o=ee(...s);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,Mo(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,n,i){return bd(t)||i.isEqual(K.min())?P.resolve(null):this.Ji.getDocuments(e,n).next(s=>{const o=this.ts(t,s);return this.ns(t,o,n,i)?P.resolve(null):(Rr()<=re.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sr(t)),this.rs(e,o,t,Zm(i,-1)).next(c=>c))})}ts(e,t){let n=new fe(bp(e));return t.forEach((i,s)=>{xs(e,s)&&(n=n.add(s))}),n}ns(e,t,n,i){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,t,n){return Rr()<=re.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Sr(t)),this.Ji.getDocumentsMatchingQuery(e,t,gt.min(),n)}rs(e,t,n,i){return this.Ji.getDocumentsMatchingQuery(e,n,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class $A{constructor(e,t,n,i){this.persistence=e,this.ss=t,this.serializer=i,this.os=new pe(Z),this._s=new kn(s=>tr(s),ks),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(n)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cg(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function hg(r,e,t,n){return new $A(r,e,t,n)}async function dg(r,e){const t=B(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let i;return t.mutationQueue.getAllMutationBatches(n).next(s=>(i=s,t.ls(e),t.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],c=[];let l=ee();for(const h of i){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of s){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return t.localDocuments.getDocuments(n,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function zA(r,e){const t=B(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const i=e.batch.keys(),s=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const m=h.batch,_=m.keys();let A=P.resolve();return _.forEach(T=>{A=A.next(()=>f.getEntry(l,T)).next(D=>{const N=h.docVersions.get(T);W(N!==null),D.version.compareTo(N)<0&&(m.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>c.mutationQueue.removeMutationBatch(l,m))}(t,n,e,s).next(()=>s.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,i))})}function fg(r){const e=B(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function WA(r,e){const t=B(r),n=e.snapshotVersion;let i=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});i=t.os;const c=[];e.targetChanges.forEach((f,m)=>{const _=i.get(m);if(!_)return;c.push(t.Ur.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.Ur.addMatchingKeys(s,f.addedDocuments,m)));let A=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?A=A.withResumeToken(Se.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,n)),i=i.insert(m,A),function(D,N,$){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(_,A,f)&&c.push(t.Ur.updateTargetData(s,A))});let l=dt(),h=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(mg(s,o,e.documentUpdates).next(f=>{l=f.Ps,h=f.Is})),!n.isEqual(K.min())){const f=t.Ur.getLastRemoteSnapshotVersion(s).next(m=>t.Ur.setTargetsMetadata(s,s.currentSequenceNumber,n));c.push(f)}return P.waitFor(c).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(t.os=i,s))}function mg(r,e,t){let n=ee(),i=ee();return t.forEach(s=>n=n.add(s)),e.getEntries(r,n).next(s=>{let o=dt();return t.forEach((c,l)=>{const h=s.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),l.isNoDocument()&&l.version.isEqual(K.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):O("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function GA(r,e){const t=B(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Hr(r,e){const t=B(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let i;return t.Ur.getTargetData(n,e).next(s=>s?(i=s,P.resolve(i)):t.Ur.allocateTargetId(n).next(o=>(i=new $t(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Ur.addTargetData(n,i).next(()=>i))))}).then(n=>{const i=t.os.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.os=t.os.insert(n.targetId,n),t._s.set(e,n.targetId)),n})}async function Qr(r,e,t){const n=B(r),i=n.os.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Pn(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.os=n.os.remove(e),n._s.delete(i.target)}function jo(r,e,t){const n=B(r);let i=K.min(),s=ee();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const m=B(l),_=m._s.get(f);return _!==void 0?P.resolve(m.os.get(_)):m.Ur.getTargetData(h,f)}(n,o,st(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{s=l})}).next(()=>n.ss.getDocumentsMatchingQuery(o,e,t?i:K.min(),t?s:ee())).next(c=>(_g(n,Tp(e),c),{documents:c,Ts:s})))}function pg(r,e){const t=B(r),n=B(t.Ur),i=t.os.get(e);return i?Promise.resolve(i.target):t.persistence.runTransaction("Get target data","readonly",s=>n.ot(s,e).next(o=>o?o.target:null))}function gg(r,e){const t=B(r),n=t.us.get(e)||K.min();return t.persistence.runTransaction("Get new document changes","readonly",i=>t.cs.getAllFromCollectionGroup(i,e,Zm(n,-1),Number.MAX_SAFE_INTEGER)).then(i=>(_g(t,e,i),i))}function _g(r,e,t){let n=r.us.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),r.us.set(e,n)}async function KA(r,e,t,n){const i=B(r);let s=ee(),o=dt();for(const h of t){const f=e.Es(h.metadata.name);h.document&&(s=s.add(f));const m=e.ds(h);m.setReadTime(e.As(h.metadata.readTime)),o=o.insert(f,m)}const c=i.cs.newChangeBuffer({trackRemovals:!0}),l=await Hr(i,function(f){return st(oi(ie.fromString(`__bundle__/docs/${f}`)))}(n));return i.persistence.runTransaction("Apply bundle documents","readwrite",h=>mg(h,c,o).next(f=>(c.apply(h),f)).next(f=>i.Ur.removeMatchingKeysForTargetId(h,l.targetId).next(()=>i.Ur.addMatchingKeys(h,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(h,f.Ps,f.Is)).next(()=>f.Ps)))}async function HA(r,e,t=ee()){const n=await Hr(r,st(jl(e.bundledQuery))),i=B(r);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=xe(e.readTime);if(n.snapshotVersion.compareTo(o)>=0)return i.Gr.saveNamedQuery(s,e);const c=n.withResumeToken(Se.EMPTY_BYTE_STRING,o);return i.os=i.os.insert(c.targetId,c),i.Ur.updateTargetData(s,c).next(()=>i.Ur.removeMatchingKeysForTargetId(s,n.targetId)).next(()=>i.Ur.addMatchingKeys(s,t,n.targetId)).next(()=>i.Gr.saveNamedQuery(s,e))})}function Zd(r,e){return`firestore_clients_${r}_${e}`}function ef(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function hc(r,e){return`firestore_targets_${r}_${e}`}class qo{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Rs(e,t,n){const i=JSON.parse(n);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new V(i.error.code,i.error.message))),o?new qo(e,t,i.state,s):(Ce("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qi{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Rs(e,t){const n=JSON.parse(t);let i,s=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return s&&n.error&&(s=typeof n.error.message=="string"&&typeof n.error.code=="string",s&&(i=new V(n.error.code,n.error.message))),s?new Qi(e,n.state,i):(Ce("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class $o{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Rs(e,t){const n=JSON.parse(t);let i=typeof n=="object"&&n.activeTargetIds instanceof Array,s=Dl();for(let o=0;i&&o<n.activeTargetIds.length;++o)i=ip(n.activeTargetIds[o]),s=s.add(n.activeTargetIds[o]);return i?new $o(e,s):(Ce("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Hl{constructor(e,t){this.clientId=e,this.onlineState=t}static Rs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Hl(t.clientId,t.onlineState):(Ce("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $c{constructor(){this.activeTargetIds=Dl()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dc{constructor(e,t,n,i,s){this.window=e,this.ui=t,this.persistenceKey=n,this.ps=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new pe(Z),this.started=!1,this.bs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Ds=Zd(this.persistenceKey,this.ps),this.vs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new $c),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Os=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const n of e){if(n===this.ps)continue;const i=this.getItem(Zd(this.persistenceKey,n));if(i){const s=$o.Rs(n,i);s&&(this.Ss=this.Ss.insert(s.clientId,s))}}this.Ns();const t=this.storage.getItem(this.xs);if(t){const n=this.Ls(t);n&&this.Bs(n)}for(const n of this.bs)this.ws(n);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let t=!1;return this.Ss.forEach((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,t,n){this.qs(e,t,n),this.Qs(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(hc(this.persistenceKey,e));if(i){const s=Qi.Rs(e,i);s&&(n=s.state)}}return t&&this.Ks.fs(e),this.Ns(),n}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(hc(this.persistenceKey,e))}updateQueryState(e,t,n){this.$s(e,t,n)}handleUserChange(e,t,n){t.forEach(i=>{this.Qs(i)}),this.currentUser=e,n.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return O("SharedClientState","READ",e,t),t}setItem(e,t){O("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){O("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const t=e;if(t.storageArea===this.storage){if(O("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Ds)return void Ce("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Cs.test(t.key)){if(t.newValue==null){const n=this.Gs(t.key);return this.zs(n,null)}{const n=this.js(t.key,t.newValue);if(n)return this.zs(n.clientId,n)}}else if(this.Fs.test(t.key)){if(t.newValue!==null){const n=this.Hs(t.key,t.newValue);if(n)return this.Js(n)}}else if(this.Ms.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(t.key===this.xs){if(t.newValue!==null){const n=this.Ls(t.newValue);if(n)return this.Bs(n)}}else if(t.key===this.vs){const n=function(s){let o=ut.oe;if(s!=null)try{const c=JSON.parse(s);W(typeof c=="number"),o=c}catch(c){Ce("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==ut.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Os){const n=this.Xs(t.newValue);await Promise.all(n.map(i=>this.syncEngine.eo(i)))}}}else this.bs.push(t)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,t,n){const i=new qo(this.currentUser,e,t,n),s=ef(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Vs())}Qs(e){const t=ef(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Us(e){const t={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(t))}$s(e,t,n){const i=hc(this.persistenceKey,e),s=new Qi(e,t,n);this.setItem(i,s.Vs())}Ws(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Os,t)}Gs(e){const t=this.Cs.exec(e);return t?t[1]:null}js(e,t){const n=this.Gs(e);return $o.Rs(n,t)}Hs(e,t){const n=this.Fs.exec(e),i=Number(n[1]),s=n[2]!==void 0?n[2]:null;return qo.Rs(new je(s),i,t)}Ys(e,t){const n=this.Ms.exec(e),i=Number(n[1]);return Qi.Rs(i,t)}Ls(e){return Hl.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);O("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,t){const n=t?this.Ss.insert(e,t):this.Ss.remove(e),i=this.ks(this.Ss),s=this.ks(n),o=[],c=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||c.push(l)}),this.syncEngine.io(o,c).then(()=>{this.Ss=n})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let t=Dl();return e.forEach((n,i)=>{t=t.unionWith(i.activeTargetIds)}),t}}class yg{constructor(){this.so=new $c,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,n){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new $c,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class QA{_o(e){}shutdown(){}}/**
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
 */class tf{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fo=null;function fc(){return fo===null?fo=function(){return 268435456+Math.round(2147483648*Math.random())}():fo++,"0x"+fo.toString(16)}/**
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
 */const JA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class YA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Ye="WebChannelConnection";class XA extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=n+"://"+t.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(t,n,i,s,o){const c=fc(),l=this.xo(t,n.toUriEncodedString());O("RestConnection",`Sending RPC '${t}' ${c}:`,l,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,o),this.No(t,l,h,i).then(f=>(O("RestConnection",`Received RPC '${t}' ${c}: `,f),f),f=>{throw Lt("RestConnection",`RPC '${t}' ${c} failed with error: `,f,"url: ",l,"request:",i),f})}Lo(t,n,i,s,o,c){return this.Mo(t,n,i,s,o)}Oo(t,n,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+si}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}xo(t,n){const i=JA[t];return`${this.Do}/v1/${n}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,n,i){const s=fc();return new Promise((o,c)=>{const l=new Wm;l.setWithCredentials(!0),l.listenOnce(Gm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yo.NO_ERROR:const f=l.getResponseJson();O(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case yo.TIMEOUT:O(Ye,`RPC '${e}' ${s} timed out`),c(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case yo.HTTP_ERROR:const m=l.getStatus();if(O(Ye,`RPC '${e}' ${s} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const T=function(N){const $=N.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf($)>=0?$:C.UNKNOWN}(A.status);c(new V(T,A.message))}else c(new V(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new V(C.UNAVAILABLE,"Connection failed."));break;default:j()}}finally{O(Ye,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);O(Ye,`RPC '${e}' ${s} sending request:`,i),l.send(t,"POST",h,n,15)})}Bo(e,t,n){const i=fc(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Qm(),c=Hm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const f=s.join("");O(Ye,`Creating RPC '${e}' stream ${i}: ${f}`,l);const m=o.createWebChannel(f,l);let _=!1,A=!1;const T=new YA({Io:N=>{A?O(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(_||(O(Ye,`Opening RPC '${e}' stream ${i} transport.`),m.open(),_=!0),O(Ye,`RPC '${e}' stream ${i} sending:`,N),m.send(N))},To:()=>m.close()}),D=(N,$,Q)=>{N.listen($,G=>{try{Q(G)}catch(H){setTimeout(()=>{throw H},0)}})};return D(m,Fi.EventType.OPEN,()=>{A||(O(Ye,`RPC '${e}' stream ${i} transport opened.`),T.yo())}),D(m,Fi.EventType.CLOSE,()=>{A||(A=!0,O(Ye,`RPC '${e}' stream ${i} transport closed`),T.So())}),D(m,Fi.EventType.ERROR,N=>{A||(A=!0,Lt(Ye,`RPC '${e}' stream ${i} transport errored:`,N),T.So(new V(C.UNAVAILABLE,"The operation could not be completed")))}),D(m,Fi.EventType.MESSAGE,N=>{var $;if(!A){const Q=N.data[0];W(!!Q);const G=Q,H=G.error||(($=G[0])===null||$===void 0?void 0:$.error);if(H){O(Ye,`RPC '${e}' stream ${i} received error:`,H);const ne=H.status;let Y=function(y){const E=Oe[y];if(E!==void 0)return Mp(E)}(ne),w=H.message;Y===void 0&&(Y=C.INTERNAL,w="Unknown error status: "+ne+" with message "+H.message),A=!0,T.So(new V(Y,w)),m.close()}else O(Ye,`RPC '${e}' stream ${i} received:`,Q),T.bo(Q)}}),D(c,Km.STAT_EVENT,N=>{N.stat===Sc.PROXY?O(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===Sc.NOPROXY&&O(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}/**
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
 */function Os(r){return new iA(r,!0)}/**
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
 */class Ql{constructor(e,t,n=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=t,this.ko=n,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),n=Math.max(0,Date.now()-this.Uo),i=Math.max(0,t-n);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Ig{constructor(e,t,n,i,s,o,c,l){this.ui=e,this.Ho=n,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Ql(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(Ce(t.toString()),Ce("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,i])=>{this.Yo===t&&this.P_(n,i)},n=>{e(()=>{const i=new V(C.UNKNOWN,"Fetching auth token failed: "+n.message);return this.I_(i)})})}P_(e,t){const n=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{n(()=>this.listener.Eo())}),this.stream.Ro(()=>{n(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{n(()=>this.I_(i))}),this.stream.onMessage(i=>{n(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZA extends Ig{constructor(e,t,n,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=aA(this.serializer,e),n=function(s){if(!("targetChange"in s))return K.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?xe(o.readTime):K.min()}(e);return this.listener.d_(t,n)}A_(e){const t={};t.database=Fc(this.serializer),t.addTarget=function(s,o){let c;const l=o.target;if(c=Oo(l)?{documents:Kp(s,l)}:{query:Hp(s,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=jp(s,o.resumeToken);const h=Lc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(K.min())>0){c.readTime=Kr(s,o.snapshotVersion.toTimestamp());const h=Lc(s,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const n=lA(this.serializer,e);n&&(t.labels=n),this.a_(t)}R_(e){const t={};t.database=Fc(this.serializer),t.removeTarget=e,this.a_(t)}}class e0 extends Ig{constructor(e,t,n,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return W(!!e.streamToken),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){W(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=cA(e.writeResults,e.commitTime),n=xe(e.commitTime);return this.listener.g_(n,t)}p_(){const e={};e.database=Fc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>ms(this.serializer,n))};this.a_(t)}}/**
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
 */class t0 extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,n,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,Mc(t,n),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(C.UNKNOWN,s.toString())})}Lo(e,t,n,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Mc(t,n),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(C.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class n0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ce(t),this.D_=!1):O("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class r0{constructor(e,t,n,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{n.enqueueAndForget(async()=>{Cn(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=B(l);h.L_.add(4),await li(h),h.q_.set("Unknown"),h.L_.delete(4),await Ls(h)}(this))})}),this.q_=new n0(n,i)}}async function Ls(r){if(Cn(r))for(const e of r.B_)await e(!0)}async function li(r){for(const e of r.B_)await e(!1)}function ma(r,e){const t=B(r);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),Xl(t)?Yl(t):hi(t).r_()&&Jl(t,e))}function Jr(r,e){const t=B(r),n=hi(t);t.N_.delete(e),n.r_()&&wg(t,e),t.N_.size===0&&(n.r_()?n.o_():Cn(t)&&t.q_.set("Unknown"))}function Jl(r,e){if(r.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hi(r).A_(e)}function wg(r,e){r.Q_.xe(e),hi(r).R_(e)}function Yl(r){r.Q_=new eA({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.N_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),hi(r).start(),r.q_.v_()}function Xl(r){return Cn(r)&&!hi(r).n_()&&r.N_.size>0}function Cn(r){return B(r).L_.size===0}function Eg(r){r.Q_=void 0}async function i0(r){r.q_.set("Online")}async function s0(r){r.N_.forEach((e,t)=>{Jl(r,e)})}async function o0(r,e){Eg(r),Xl(r)?(r.q_.M_(e),Yl(r)):r.q_.set("Unknown")}async function a0(r,e,t){if(r.q_.set("Online"),e instanceof Bp&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds)i.N_.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.N_.delete(c),i.Q_.removeTarget(c))}(r,e)}catch(n){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await zo(r,n)}else if(e instanceof bo?r.Q_.Ke(e):e instanceof Up?r.Q_.He(e):r.Q_.We(e),!t.isEqual(K.min()))try{const n=await fg(r.localStore);t.compareTo(n)>=0&&await function(s,o){const c=s.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=s.N_.get(h);f&&s.N_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=s.N_.get(l);if(!f)return;s.N_.set(l,f.withResumeToken(Se.EMPTY_BYTE_STRING,f.snapshotVersion)),wg(s,l);const m=new $t(f.target,l,h,f.sequenceNumber);Jl(s,m)}),s.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){O("RemoteStore","Failed to raise snapshot:",n),await zo(r,n)}}async function zo(r,e,t){if(!Pn(e))throw e;r.L_.add(1),await li(r),r.q_.set("Offline"),t||(t=()=>fg(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await t(),r.L_.delete(1),await Ls(r)})}function Tg(r,e){return e().catch(t=>zo(r,t,e))}async function ui(r){const e=B(r),t=En(e);let n=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;c0(e);)try{const i=await GA(e.localStore,n);if(i===null){e.O_.length===0&&t.o_();break}n=i.batchId,l0(e,i)}catch(i){await zo(e,i)}bg(e)&&Ag(e)}function c0(r){return Cn(r)&&r.O_.length<10}function l0(r,e){r.O_.push(e);const t=En(r);t.r_()&&t.V_&&t.m_(e.mutations)}function bg(r){return Cn(r)&&!En(r).n_()&&r.O_.length>0}function Ag(r){En(r).start()}async function u0(r){En(r).p_()}async function h0(r){const e=En(r);for(const t of r.O_)e.m_(t.mutations)}async function d0(r,e,t){const n=r.O_.shift(),i=Ml.from(n,e,t);await Tg(r,()=>r.remoteSyncer.applySuccessfulWrite(i)),await ui(r)}async function f0(r,e){e&&En(r).V_&&await async function(n,i){if(function(o){return Lp(o)&&o!==C.ABORTED}(i.code)){const s=n.O_.shift();En(n).s_(),await Tg(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ui(n)}}(r,e),bg(r)&&Ag(r)}async function nf(r,e){const t=B(r);t.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const n=Cn(t);t.L_.add(3),await li(t),n&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ls(t)}async function zc(r,e){const t=B(r);e?(t.L_.delete(2),await Ls(t)):e||(t.L_.add(2),await li(t),t.q_.set("Unknown"))}function hi(r){return r.K_||(r.K_=function(t,n,i){const s=B(t);return s.w_(),new ZA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:i0.bind(null,r),Ro:s0.bind(null,r),mo:o0.bind(null,r),d_:a0.bind(null,r)}),r.B_.push(async e=>{e?(r.K_.s_(),Xl(r)?Yl(r):r.q_.set("Unknown")):(await r.K_.stop(),Eg(r))})),r.K_}function En(r){return r.U_||(r.U_=function(t,n,i){const s=B(t);return s.w_(),new e0(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(r.datastore,r.asyncQueue,{Eo:()=>Promise.resolve(),Ro:u0.bind(null,r),mo:f0.bind(null,r),f_:h0.bind(null,r),g_:d0.bind(null,r)}),r.B_.push(async e=>{e?(r.U_.s_(),await ui(r)):(await r.U_.stop(),r.O_.length>0&&(O("RemoteStore",`Stopping write stream with ${r.O_.length} pending writes`),r.O_=[]))})),r.U_}/**
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
 */class Zl{constructor(e,t,n,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ge,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,i,s){const o=Date.now()+n,c=new Zl(e,t,o,i,s);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function di(r,e){if(Ce("AsyncQueue",`${e}: ${r}`),Pn(r))return new V(C.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class Mr{constructor(e){this.comparator=e?(t,n)=>e(t,n)||U.comparator(t.key,n.key):(t,n)=>U.comparator(t.key,n.key),this.keyedMap=Ui(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new Mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=n.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class rf{constructor(){this.W_=new pe(U.comparator)}track(e){const t=e.doc.key,n=this.W_.get(t);n?e.type!==0&&n.type===3?this.W_=this.W_.insert(t,e):e.type===3&&n.type!==1?this.W_=this.W_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.W_=this.W_.remove(t):e.type===1&&n.type===2?this.W_=this.W_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):j():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,n)=>{e.push(n)}),e}}class Yr{constructor(e,t,n,i,s,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,n,i,s){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Yr(e,t,Mr.emptySet(t),o,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class m0{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class p0{constructor(){this.queries=sf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,n){const i=B(t),s=i.queries;i.queries=sf(),s.forEach((o,c)=>{for(const l of c.j_)l.onError(n)})})(this,new V(C.ABORTED,"Firestore shutting down"))}}function sf(){return new kn(r=>Ep(r),Cs)}async function eu(r,e){const t=B(r);let n=3;const i=e.query;let s=t.queries.get(i);s?!s.H_()&&e.J_()&&(n=2):(s=new m0,n=e.J_()?0:1);try{switch(n){case 0:s.z_=await t.onListen(i,!0);break;case 1:s.z_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=di(o,`Initialization of query '${Sr(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,s),s.j_.push(e),e.Z_(t.onlineState),s.z_&&e.X_(s.z_)&&nu(t)}async function tu(r,e){const t=B(r),n=e.query;let i=3;const s=t.queries.get(n);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function g0(r,e){const t=B(r);let n=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const c of o.j_)c.X_(i)&&(n=!0);o.z_=i}}n&&nu(t)}function _0(r,e,t){const n=B(r),i=n.queries.get(e);if(i)for(const s of i.j_)s.onError(t);n.queries.delete(e)}function nu(r){r.Y_.forEach(e=>{e.next()})}var Wc,of;(of=Wc||(Wc={})).ea="default",of.Cache="cache";class ru{constructor(e,t,n){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=n||{}}X_(e){if(!this.options.includeMetadataChanges){const n=[];for(const i of e.docChanges)i.type!==3&&n.push(i);e=new Yr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const n=t!=="Offline";return(!this.options._a||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Yr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Wc.Cache}}/**
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
 */class y0{constructor(e,t){this.aa=e,this.byteLength=t}ua(){return"metadata"in this.aa}}/**
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
 */class af{constructor(e){this.serializer=e}Es(e){return Dt(this.serializer,e)}ds(e){return e.metadata.exists?Gp(this.serializer,e.document,!1):_e.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return xe(e)}}class v0{constructor(e,t,n){this.ca=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Rg(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++t;const n=ie.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ha(e){const t=new Map,n=new af(this.serializer);for(const i of e)if(i.metadata.queries){const s=n.Es(i.metadata.name);for(const o of i.metadata.queries){const c=(t.get(o)||ee()).add(s);t.set(o,c)}}return t}async complete(){const e=await KA(this.localStore,new af(this.serializer),this.documents,this.ca.id),t=this.ha(this.documents);for(const n of this.queries)await HA(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function Rg(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
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
 */class Sg{constructor(e){this.key=e}}class Pg{constructor(e){this.key=e}}class kg{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=bp(e),this.Ra=new Mr(this.Aa)}get Va(){return this.Ta}ma(e,t){const n=t?t.fa:new rf,i=t?t.Ra:this.Ra;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const _=i.get(f),A=xs(this.query,m)?m:null,T=!!_&&this.mutatedKeys.has(_.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let N=!1;_&&A?_.data.isEqual(A.data)?T!==D&&(n.track({type:3,doc:A}),N=!0):this.ga(_,A)||(n.track({type:2,doc:A}),N=!0,(l&&this.Aa(A,l)>0||h&&this.Aa(A,h)<0)&&(c=!0)):!_&&A?(n.track({type:0,doc:A}),N=!0):_&&!A&&(n.track({type:1,doc:_}),N=!0,(l||h)&&(c=!0)),N&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),n.track({type:1,doc:f})}return{Ra:o,fa:n,ns:c,mutatedKeys:s}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(A,T){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j()}};return D(A)-D(T)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(n),i=i!=null&&i;const c=t&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Yr(this.query,e.Ra,s,o,e.mutatedKeys,l===0,h,!1,!!n&&n.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rf,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(n=>{this.Sa(n.key)&&(this.da=this.da.add(n.key))});const t=[];return e.forEach(n=>{this.da.has(n)||t.push(new Pg(n))}),this.da.forEach(n=>{e.has(n)||t.push(new Sg(n))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Yr.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class I0{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class w0{constructor(e){this.key=e,this.va=!1}}class E0{constructor(e,t,n,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new kn(c=>Ep(c),Cs),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(U.comparator),this.Na=new Map,this.La=new zl,this.Ba={},this.ka=new Map,this.qa=or.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function T0(r,e,t=!0){const n=pa(r);let i;const s=n.Fa.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await Cg(n,e,t,!0),i}async function b0(r,e){const t=pa(r);await Cg(t,e,!0,!1)}async function Cg(r,e,t,n){const i=await Hr(r.localStore,st(e)),s=i.targetId,o=r.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await iu(r,e,s,o==="current",i.resumeToken)),r.isPrimaryClient&&t&&ma(r.remoteStore,i),c}async function iu(r,e,t,n,i){r.Ka=(m,_,A)=>async function(D,N,$,Q){let G=N.view.ma($);G.ns&&(G=await jo(D.localStore,N.query,!1).then(({documents:w})=>N.view.ma(w,G)));const H=Q&&Q.targetChanges.get(N.targetId),ne=Q&&Q.targetMismatches.get(N.targetId)!=null,Y=N.view.applyChanges(G,D.isPrimaryClient,H,ne);return Gc(D,N.targetId,Y.wa),Y.snapshot}(r,m,_,A);const s=await jo(r.localStore,e,!0),o=new kg(e,s.Ts),c=o.ma(s.documents),l=Vs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",i),h=o.applyChanges(c,r.isPrimaryClient,l);Gc(r,t,h.wa);const f=new I0(e,t,o);return r.Fa.set(e,f),r.Ma.has(t)?r.Ma.get(t).push(e):r.Ma.set(t,[e]),h.snapshot}async function A0(r,e,t){const n=B(r),i=n.Fa.get(e),s=n.Ma.get(i.targetId);if(s.length>1)return n.Ma.set(i.targetId,s.filter(o=>!Cs(o,e))),void n.Fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Qr(n.localStore,i.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(i.targetId),t&&Jr(n.remoteStore,i.targetId),Xr(n,i.targetId)}).catch(Sn)):(Xr(n,i.targetId),await Qr(n.localStore,i.targetId,!0))}async function R0(r,e){const t=B(r),n=t.Fa.get(e),i=t.Ma.get(n.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Jr(t.remoteStore,n.targetId))}async function S0(r,e,t){const n=cu(r);try{const i=await function(o,c){const l=B(o),h=we.now(),f=c.reduce((A,T)=>A.add(T.key),ee());let m,_;return l.persistence.runTransaction("Locally write mutations","readwrite",A=>{let T=dt(),D=ee();return l.cs.getEntries(A,f).next(N=>{T=N,T.forEach(($,Q)=>{Q.isValidDocument()||(D=D.add($))})}).next(()=>l.localDocuments.getOverlayedDocuments(A,T)).next(N=>{m=N;const $=[];for(const Q of c){const G=Yb(Q,m.get(Q.key).overlayedDocument);G!=null&&$.push(new Xt(Q.key,G,fp(G.value.mapValue),Ie.exists(!0)))}return l.mutationQueue.addMutationBatch(A,h,$,c)}).next(N=>{_=N;const $=N.applyToLocalDocumentSet(m,D);return l.documentOverlayCache.saveOverlays(A,N.batchId,$)})}).then(()=>({batchId:_.batchId,changes:Rp(m)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(i.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new pe(Z)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(n,i.batchId,t),await Zt(n,i.changes),await ui(n.remoteStore)}catch(i){const s=di(i,"Failed to persist write");t.reject(s)}}async function xg(r,e){const t=B(r);try{const n=await WA(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Na.get(s);o&&(W(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?W(o.va):i.removedDocuments.size>0&&(W(o.va),o.va=!1))}),await Zt(t,n,e)}catch(n){await Sn(n)}}function cf(r,e,t){const n=B(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const i=[];n.Fa.forEach((s,o)=>{const c=o.view.Z_(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const l=B(o);l.onlineState=c;let h=!1;l.queries.forEach((f,m)=>{for(const _ of m.j_)_.Z_(c)&&(h=!0)}),h&&nu(l)}(n.eventManager,e),i.length&&n.Ca.d_(i),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function P0(r,e,t){const n=B(r);n.sharedClientState.updateQueryState(e,"rejected",t);const i=n.Na.get(e),s=i&&i.key;if(s){let o=new pe(U.comparator);o=o.insert(s,_e.newNoDocument(s,K.min()));const c=ee().add(s),l=new Ds(K.min(),new Map,new pe(Z),o,c);await xg(n,l),n.Oa=n.Oa.remove(s),n.Na.delete(e),au(n)}else await Qr(n.localStore,e,!1).then(()=>Xr(n,e,t)).catch(Sn)}async function k0(r,e){const t=B(r),n=e.batch.batchId;try{const i=await zA(t.localStore,e);ou(t,n,null),su(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Zt(t,i)}catch(i){await Sn(i)}}async function C0(r,e,t){const n=B(r);try{const i=await function(o,c){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(m=>(W(m!==null),f=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(n.localStore,e);ou(n,e,t),su(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Zt(n,i)}catch(i){await Sn(i)}}async function x0(r,e){const t=B(r);Cn(t.remoteStore)||O("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(o){const c=B(o);return c.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>c.mutationQueue.getHighestUnacknowledgedBatchId(l))}(t.localStore);if(n===-1)return void e.resolve();const i=t.ka.get(n)||[];i.push(e),t.ka.set(n,i)}catch(n){const i=di(n,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function su(r,e){(r.ka.get(e)||[]).forEach(t=>{t.resolve()}),r.ka.delete(e)}function ou(r,e,t){const n=B(r);let i=n.Ba[n.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),n.Ba[n.currentUser.toKey()]=i}}function Xr(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Ma.get(e))r.Fa.delete(n),t&&r.Ca.$a(n,t);r.Ma.delete(e),r.isPrimaryClient&&r.La.gr(e).forEach(n=>{r.La.containsKey(n)||Ng(r,n)})}function Ng(r,e){r.xa.delete(e.path.canonicalString());const t=r.Oa.get(e);t!==null&&(Jr(r.remoteStore,t),r.Oa=r.Oa.remove(e),r.Na.delete(t),au(r))}function Gc(r,e,t){for(const n of t)n instanceof Sg?(r.La.addReference(n.key,e),N0(r,n)):n instanceof Pg?(O("SyncEngine","Document no longer in limbo: "+n.key),r.La.removeReference(n.key,e),r.La.containsKey(n.key)||Ng(r,n.key)):j()}function N0(r,e){const t=e.key,n=t.path.canonicalString();r.Oa.get(t)||r.xa.has(n)||(O("SyncEngine","New document in limbo: "+t),r.xa.add(n),au(r))}function au(r){for(;r.xa.size>0&&r.Oa.size<r.maxConcurrentLimboResolutions;){const e=r.xa.values().next().value;r.xa.delete(e);const t=new U(ie.fromString(e)),n=r.qa.next();r.Na.set(n,new w0(t)),r.Oa=r.Oa.insert(t,n),ma(r.remoteStore,new $t(st(oi(t.path)),n,"TargetPurposeLimboResolution",ut.oe))}}async function Zt(r,e,t){const n=B(r),i=[],s=[],o=[];n.Fa.isEmpty()||(n.Fa.forEach((c,l)=>{o.push(n.Ka(l,e,t).then(h=>{var f;if((h||t)&&n.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;n.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Kl.Wi(l.targetId,h);s.push(m)}}))}),await Promise.all(o),n.Ca.d_(i),await async function(l,h){const f=B(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>P.forEach(h,_=>P.forEach(_.$i,A=>f.persistence.referenceDelegate.addReference(m,_.targetId,A)).next(()=>P.forEach(_.Ui,A=>f.persistence.referenceDelegate.removeReference(m,_.targetId,A)))))}catch(m){if(!Pn(m))throw m;O("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const _=m.targetId;if(!m.fromCache){const A=f.os.get(_),T=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(T);f.os=f.os.insert(_,D)}}}(n.localStore,s))}async function D0(r,e){const t=B(r);if(!t.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const n=await dg(t.localStore,e);t.currentUser=e,function(s,o){s.ka.forEach(c=>{c.forEach(l=>{l.reject(new V(C.CANCELLED,o))})}),s.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Zt(t,n.hs)}}function V0(r,e){const t=B(r),n=t.Na.get(e);if(n&&n.va)return ee().add(n.key);{let i=ee();const s=t.Ma.get(e);if(!s)return i;for(const o of s){const c=t.Fa.get(o);i=i.unionWith(c.view.Va)}return i}}async function O0(r,e){const t=B(r),n=await jo(t.localStore,e.query,!0),i=e.view.ba(n);return t.isPrimaryClient&&Gc(t,e.targetId,i.wa),i}async function L0(r,e){const t=B(r);return gg(t.localStore,e).then(n=>Zt(t,n))}async function M0(r,e,t,n){const i=B(r),s=await function(c,l){const h=B(c),f=B(h.mutationQueue);return h.persistence.runTransaction("Lookup mutation documents","readonly",m=>f.Mn(m,l).next(_=>_?h.localDocuments.getDocuments(m,_):P.resolve(null)))}(i.localStore,e);s!==null?(t==="pending"?await ui(i.remoteStore):t==="acknowledged"||t==="rejected"?(ou(i,e,n||null),su(i,e),function(c,l){B(B(c).mutationQueue).On(l)}(i.localStore,e)):j(),await Zt(i,s)):O("SyncEngine","Cannot apply mutation batch with id: "+e)}async function F0(r,e){const t=B(r);if(pa(t),cu(t),e===!0&&t.Qa!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),i=await lf(t,n.toArray());t.Qa=!0,await zc(t.remoteStore,!0);for(const s of i)ma(t.remoteStore,s)}else if(e===!1&&t.Qa!==!1){const n=[];let i=Promise.resolve();t.Ma.forEach((s,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):i=i.then(()=>(Xr(t,o),Qr(t.localStore,o,!0))),Jr(t.remoteStore,o)}),await i,await lf(t,n),function(o){const c=B(o);c.Na.forEach((l,h)=>{Jr(c.remoteStore,h)}),c.La.pr(),c.Na=new Map,c.Oa=new pe(U.comparator)}(t),t.Qa=!1,await zc(t.remoteStore,!1)}}async function lf(r,e,t){const n=B(r),i=[],s=[];for(const o of e){let c;const l=n.Ma.get(o);if(l&&l.length!==0){c=await Hr(n.localStore,st(l[0]));for(const h of l){const f=n.Fa.get(h),m=await O0(n,f);m.snapshot&&s.push(m.snapshot)}}else{const h=await pg(n.localStore,o);c=await Hr(n.localStore,h),await iu(n,Dg(h),o,!1,c.resumeToken)}i.push(c)}return n.Ca.d_(s),i}function Dg(r){return wp(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function U0(r){return function(t){return B(B(t).persistence).Qi()}(B(r).localStore)}async function B0(r,e,t,n){const i=B(r);if(i.Qa)return void O("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ma.get(e);if(s&&s.length>0)switch(t){case"current":case"not-current":{const o=await gg(i.localStore,Tp(s[0])),c=Ds.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Se.EMPTY_BYTE_STRING);await Zt(i,o,c);break}case"rejected":await Qr(i.localStore,e,!0),Xr(i,e,n);break;default:j()}}async function j0(r,e,t){const n=pa(r);if(n.Qa){for(const i of e){if(n.Ma.has(i)&&n.sharedClientState.isActiveQueryTarget(i)){O("SyncEngine","Adding an already active target "+i);continue}const s=await pg(n.localStore,i),o=await Hr(n.localStore,s);await iu(n,Dg(s),o.targetId,!1,o.resumeToken),ma(n.remoteStore,o)}for(const i of t)n.Ma.has(i)&&await Qr(n.localStore,i,!1).then(()=>{Jr(n.remoteStore,i),Xr(n,i)}).catch(Sn)}}function pa(r){const e=B(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=xg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=V0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=P0.bind(null,e),e.Ca.d_=g0.bind(null,e.eventManager),e.Ca.$a=_0.bind(null,e.eventManager),e}function cu(r){const e=B(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=k0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C0.bind(null,e),e}function q0(r,e,t){const n=B(r);(async function(s,o,c){try{const l=await o.getMetadata();if(await function(A,T){const D=B(A),N=xe(T.createTime);return D.persistence.runTransaction("hasNewerBundle","readonly",$=>D.Gr.getBundleMetadata($,T.id)).then($=>!!$&&$.createTime.compareTo(N)>=0)}(s.localStore,l))return await o.close(),c._completeWith(function(A){return{taskState:"Success",documentsLoaded:A.totalDocuments,bytesLoaded:A.totalBytes,totalDocuments:A.totalDocuments,totalBytes:A.totalBytes}}(l)),Promise.resolve(new Set);c._updateProgress(Rg(l));const h=new v0(l,s.localStore,o.serializer);let f=await o.Ua();for(;f;){const _=await h.la(f);_&&c._updateProgress(_),f=await o.Ua()}const m=await h.complete();return await Zt(s,m.Ia,void 0),await function(A,T){const D=B(A);return D.persistence.runTransaction("Save bundle","readwrite",N=>D.Gr.saveBundleMetadata(N,T))}(s.localStore,l),c._completeWith(m.progress),Promise.resolve(m.Pa)}catch(l){return Lt("SyncEngine",`Loading bundle failed with ${l}`),c._failWith(l),Promise.resolve(new Set)}})(n,e,t).then(i=>{n.sharedClientState.notifyBundleLoaded(i)})}class ps{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Os(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return hg(this.persistence,new ug,e.initialUser,this.serializer)}Ga(e){return new lg(fa.Zr,this.serializer)}Wa(e){return new yg}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ps.provider={build:()=>new ps};class Vg extends ps{constructor(e,t,n){super(),this.Ja=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await cu(this.Ja.syncEngine),await ui(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return hg(this.persistence,new ug,e.initialUser,this.serializer)}ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new RA(n,e.asyncQueue,t)}Ha(e,t){const n=new ab(t,this.persistence);return new ob(e.asyncQueue,n)}Ga(e){const t=Gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new Wl(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,vg(),Ao(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new yg}}class $0 extends Vg{constructor(e,t){super(e,t,!1),this.Ja=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Ja.syncEngine;this.sharedClientState instanceof dc&&(this.sharedClientState.syncEngine={no:M0.bind(null,t),ro:B0.bind(null,t),io:j0.bind(null,t),Qi:U0.bind(null,t),eo:L0.bind(null,t)},await this.sharedClientState.start()),await this.persistence.yi(async n=>{await F0(this.Ja.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}Wa(e){const t=vg();if(!dc.D(t))throw new V(C.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Gl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new dc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class gs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>cf(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=D0.bind(null,this.syncEngine),await zc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new p0}()}createDatastore(e){const t=Os(e.databaseInfo.databaseId),n=function(s){return new XA(s)}(e.databaseInfo);return function(s,o,c,l){return new t0(s,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,i,s,o,c){return new r0(n,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>cf(this.syncEngine,t,0),function(){return tf.D()?new tf:new QA}())}createSyncEngine(e,t){return function(i,s,o,c,l,h,f){const m=new E0(i,s,o,c,l,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=B(i);O("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await li(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}gs.provider={build:()=>new gs};function uf(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const n={value:r.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class ga{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ce("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class z0{constructor(e,t){this.Xa=e,this.serializer=t,this.metadata=new Ge,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(n=>{n&&n.ua()?this.metadata.resolve(n.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.aa)}`))},n=>this.metadata.reject(n))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const t=this.eu.decode(e),n=Number(t);isNaN(n)&&this.ru(`length string (${t}) is not valid number`);const i=await this.iu(n);return new y0(JSON.parse(i),e.length+n)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const t=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class W0{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new V(C.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(i,s){const o=B(i),c={documents:s.map(m=>fs(o.serializer,m))},l=await o.Lo("BatchGetDocuments",o.serializer.databaseId,ie.emptyPath(),c,s.length),h=new Map;l.forEach(m=>{const _=oA(o.serializer,m);h.set(_.key.toString(),_)});const f=[];return s.forEach(m=>{const _=h.get(m.toString());W(!!_),f.push(_)}),f}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new ci(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const i=U.fromPath(n);this.mutations.push(new Ol(i,this.precondition(i)))}),await async function(n,i){const s=B(n),o={writes:i.map(c=>ms(s.serializer,c))};await s.Mo("Commit",s.serializer.databaseId,ie.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw j();t=K.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new V(C.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(K.min())?Ie.exists(!1):Ie.updateTime(t):Ie.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(K.min()))throw new V(C.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ie.updateTime(t)}return Ie.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class G0{constructor(e,t,n,i,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=s,this._u=n.maxAttempts,this.t_=new Ql(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new W0(this.datastore),t=this.cu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(i=>{this.lu(i)}))}).catch(n=>{this.lu(n)})})}cu(e){try{const t=this.updateFunction(e);return!Ps(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Lp(t)}return!1}}/**
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
 */class K0{constructor(e,t,n,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=Ym.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async o=>{O("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(O("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ge;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=di(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function mc(r,e){r.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async i=>{n.isEqual(i)||(await dg(e.localStore,i),n=i)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function hf(r,e){r.asyncQueue.verifyOperationInProgress();const t=await lu(r);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>nf(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,i)=>nf(e.remoteStore,i)),r._onlineComponents=e}async function lu(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await mc(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===C.FAILED_PRECONDITION||i.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;Lt("Error using user provided cache. Falling back to memory cache: "+t),await mc(r,new ps)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await mc(r,new ps);return r._offlineComponents}async function _a(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await hf(r,r._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await hf(r,new gs))),r._onlineComponents}function Og(r){return lu(r).then(e=>e.persistence)}function uu(r){return lu(r).then(e=>e.localStore)}function Lg(r){return _a(r).then(e=>e.remoteStore)}function hu(r){return _a(r).then(e=>e.syncEngine)}function H0(r){return _a(r).then(e=>e.datastore)}async function Zr(r){const e=await _a(r),t=e.eventManager;return t.onListen=T0.bind(null,e.syncEngine),t.onUnlisten=A0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=b0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=R0.bind(null,e.syncEngine),t}function Q0(r){return r.asyncQueue.enqueue(async()=>{const e=await Og(r),t=await Lg(r);return e.setNetworkEnabled(!0),function(i){const s=B(i);return s.L_.delete(0),Ls(s)}(t)})}function J0(r){return r.asyncQueue.enqueue(async()=>{const e=await Og(r),t=await Lg(r);return e.setNetworkEnabled(!1),async function(i){const s=B(i);s.L_.add(0),await li(s),s.q_.set("Offline")}(t)})}function Y0(r,e){const t=new Ge;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await function(h,f){const m=B(h);return m.persistence.runTransaction("read document","readonly",_=>m.localDocuments.getDocument(_,f))}(i,s);c.isFoundDocument()?o.resolve(c):c.isNoDocument()?o.resolve(null):o.reject(new V(C.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(c){const l=di(c,`Failed to get document '${s} from cache`);o.reject(l)}}(await uu(r),e,t)),t.promise}function Mg(r,e,t={}){const n=new Ge;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new ga({next:_=>{f.Za(),o.enqueueAndForget(()=>tu(s,m));const A=_.docs.has(c);!A&&_.fromCache?h.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&l&&l.source==="server"?h.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new ru(oi(c.path),f,{includeMetadataChanges:!0,_a:!0});return eu(s,m)}(await Zr(r),r.asyncQueue,e,t,n)),n.promise}function X0(r,e){const t=new Ge;return r.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const c=await jo(i,s,!0),l=new kg(s,c.Ts),h=l.ma(c.documents),f=l.applyChanges(h,!1);o.resolve(f.snapshot)}catch(c){const l=di(c,`Failed to execute query '${s} against cache`);o.reject(l)}}(await uu(r),e,t)),t.promise}function Fg(r,e,t={}){const n=new Ge;return r.asyncQueue.enqueueAndForget(async()=>function(s,o,c,l,h){const f=new ga({next:_=>{f.Za(),o.enqueueAndForget(()=>tu(s,m)),_.fromCache&&l.source==="server"?h.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),m=new ru(c,f,{includeMetadataChanges:!0,_a:!0});return eu(s,m)}(await Zr(r),r.asyncQueue,e,t,n)),n.promise}function Z0(r,e){const t=new ga(e);return r.asyncQueue.enqueueAndForget(async()=>function(i,s){B(i).Y_.add(s),s.next()}(await Zr(r),t)),()=>{t.Za(),r.asyncQueue.enqueueAndForget(async()=>function(i,s){B(i).Y_.delete(s)}(await Zr(r),t))}}function eR(r,e,t,n){const i=function(o,c){let l;return l=typeof o=="string"?Fp().encode(o):o,function(f,m){return new z0(f,m)}(function(f,m){if(f instanceof Uint8Array)return uf(f,m);if(f instanceof ArrayBuffer)return uf(new Uint8Array(f),m);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),c)}(t,Os(e));r.asyncQueue.enqueueAndForget(async()=>{q0(await hu(r),i,n)})}function tR(r,e){return r.asyncQueue.enqueue(async()=>function(n,i){const s=B(n);return s.persistence.runTransaction("Get named query","readonly",o=>s.Gr.getNamedQuery(o,i))}(await uu(r),e))}/**
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
 */const df=new Map;/**
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
 */function du(r,e,t){if(!t)throw new V(C.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Bg(r,e,t,n){if(e===!0&&n===!0)throw new V(C.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function ff(r){if(!U.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function mf(r){if(U.isDocumentKey(r))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ya(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":j()}function ce(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ya(r);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function jg(r,e){if(e<=0)throw new V(C.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
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
 */class pf{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Bg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ug((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ms{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new QT;switch(n.type){case"firstParty":return new ZT(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=df.get(t);n&&(O("ComponentProvider","Removing Datastore"),df.delete(t),n.terminate())}(this),Promise.resolve()}}function nR(r,e,t,n={}){var i;const s=(r=ce(r,Ms))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Lt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let c,l;if(typeof n.mockUserToken=="string")c=n.mockUserToken,l=je.MOCK_USER;else{c=dy(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const h=n.mockUserToken.sub||n.mockUserToken.user_id;if(!h)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new je(h)}r._authCredentials=new JT(new Jm(c,l))}}/**
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
 */let ot=class qg{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qg(this.firestore,e,this._query)}},Ee=class $g{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $g(this.firestore,e,this._key)}},fn=class zg extends ot{constructor(e,t,n){super(e,t,oi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ee(this.firestore,null,new U(e))}withConverter(e){return new zg(this.firestore,e,this._path)}};function Wg(r,e,...t){if(r=J(r),du("collection","path",e),r instanceof Ms){const n=ie.fromString(e,...t);return mf(n),new fn(r,null,n)}{if(!(r instanceof Ee||r instanceof fn))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ie.fromString(e,...t));return mf(n),new fn(r.firestore,null,n)}}function rR(r,e){if(r=ce(r,Ms),du("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ot(r,null,function(n){return new Yt(ie.emptyPath(),n)}(e))}function Wo(r,e,...t){if(r=J(r),arguments.length===1&&(e=Ym.newId()),du("doc","path",e),r instanceof Ms){const n=ie.fromString(e,...t);return ff(n),new Ee(r,null,new U(n))}{if(!(r instanceof Ee||r instanceof fn))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(ie.fromString(e,...t));return ff(n),new Ee(r.firestore,r instanceof fn?r.converter:null,new U(n))}}function Gg(r,e){return r=J(r),e=J(e),(r instanceof Ee||r instanceof fn)&&(e instanceof Ee||e instanceof fn)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function Kg(r,e){return r=J(r),e=J(e),r instanceof ot&&e instanceof ot&&r.firestore===e.firestore&&Cs(r._query,e._query)&&r.converter===e.converter}/**
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
 */class gf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ql(this,"async_queue_retry"),this.Vu=()=>{const n=Ao();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.t_.jo()},this.mu=e;const t=Ao();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ao();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ge;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Pn(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(n=>{this.Eu=n,this.du=!1;const i=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw Ce("INTERNAL UNHANDLED ERROR: ",i),n}).then(n=>(this.du=!1,n))));return this.mu=t,t}enqueueAfterDelay(e,t,n){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const i=Zl.createAndSchedule(this,e,t,n,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&j()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}function Kc(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of n)if(s in i&&typeof i[s]=="function")return!0;return!1}(r,["next","error","complete"])}class iR{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ge,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const sR=-1;let Ne=class extends Ms{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new gf,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new gf(e),this._firestoreClient=void 0,await e}}};function Xe(r){if(r._terminated)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Hg(r),r._firestoreClient}function Hg(r){var e,t,n;const i=r._freezeSettings(),s=function(c,l,h,f){return new kb(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ug(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new K0(r._authCredentials,r._appCheckCredentials,r._queue,s,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}function oR(r,e){Lt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings();return Qg(r,gs.provider,{build:n=>new Vg(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function aR(r){Lt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings();Qg(r,gs.provider,{build:t=>new $0(t,e.cacheSizeBytes)})}function Qg(r,e,t){if((r=ce(r,Ne))._firestoreClient||r._terminated)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(r._componentsProvider||r._getSettings().localCache)throw new V(C.FAILED_PRECONDITION,"SDK cache is already specified.");r._componentsProvider={_online:e,_offline:t},Hg(r)}function cR(r){if(r._initialized&&!r._terminated)throw new V(C.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ge;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Nt.D())return Promise.resolve();const i=n+"main";await Nt.delete(i)}(Gl(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function lR(r){return function(t){const n=new Ge;return t.asyncQueue.enqueueAndForget(async()=>x0(await hu(t),n)),n.promise}(Xe(r=ce(r,Ne)))}function uR(r){return Q0(Xe(r=ce(r,Ne)))}function hR(r){return J0(Xe(r=ce(r,Ne)))}function dR(r,e){const t=Xe(r=ce(r,Ne)),n=new iR;return eR(t,r._databaseId,e,n),n}function fR(r,e){return tR(Xe(r=ce(r,Ne)),e).then(t=>t?new ot(r,null,t.query):null)}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(Se.fromBase64String(e))}catch(t){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ft(Se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Tn=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let dr=class{constructor(e){this._methodName=e}};/**
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
 */class va{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
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
 */class fu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,i){if(n.length!==i.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const mR=/^__.*__$/;class pR{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Xt(e,this.data,this.fieldMask,t,this.fieldTransforms):new ai(e,this.data,t,this.fieldTransforms)}}class Jg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Xt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Yg(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j()}}class Ia{constructor(e,t,n,i,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Ia(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.Ou(e),i}Nu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Fu({path:n,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Go(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Yg(this.Cu)&&mR.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class gR{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Os(e)}Qu(e,t,n,i=!1){return new Ia({Cu:e,methodName:t,qu:n,path:ve.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fr(r){const e=r._freezeSettings(),t=Os(r._databaseId);return new gR(r._databaseId,!!e.ignoreUndefinedProperties,t)}function wa(r,e,t,n,i,s={}){const o=r.Qu(s.merge||s.mergeFields?2:0,e,t,i);Iu("Data must be an object, but it was:",o,n);const c=e_(n,o);let l,h;if(s.merge)l=new ht(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const _=Hc(e,m,t);if(!o.contains(_))throw new V(C.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);n_(f,_)||f.push(_)}l=new ht(f),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new pR(new We(c),l,h)}class Fs extends dr{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fs}}function Xg(r,e,t){return new Ia({Cu:3,qu:e.settings.qu,methodName:r._methodName,xu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class mu extends dr{_toFieldTransform(e){return new Ns(e.path,new Wr)}isEqual(e){return e instanceof mu}}class pu extends dr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Xg(this,e,!0),n=this.Ku.map(s=>mr(s,t)),i=new nr(n);return new Ns(e.path,i)}isEqual(e){return e instanceof pu&&Xi(this.Ku,e.Ku)}}class gu extends dr{constructor(e,t){super(e),this.Ku=t}_toFieldTransform(e){const t=Xg(this,e,!0),n=this.Ku.map(s=>mr(s,t)),i=new rr(n);return new Ns(e.path,i)}isEqual(e){return e instanceof gu&&Xi(this.Ku,e.Ku)}}class _u extends dr{constructor(e,t){super(e),this.$u=t}_toFieldTransform(e){const t=new Gr(e.serializer,kp(e.serializer,this.$u));return new Ns(e.path,t)}isEqual(e){return e instanceof _u&&this.$u===e.$u}}function yu(r,e,t,n){const i=r.Qu(1,e,t);Iu("Data must be an object, but it was:",i,n);const s=[],o=We.empty();hr(n,(l,h)=>{const f=wu(e,l,t);h=J(h);const m=i.Nu(f);if(h instanceof Fs)s.push(f);else{const _=mr(h,m);_!=null&&(s.push(f),o.set(f,_))}});const c=new ht(s);return new Jg(o,c,i.fieldTransforms)}function vu(r,e,t,n,i,s){const o=r.Qu(1,e,t),c=[Hc(e,n,t)],l=[i];if(s.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)c.push(Hc(e,s[_])),l.push(s[_+1]);const h=[],f=We.empty();for(let _=c.length-1;_>=0;--_)if(!n_(h,c[_])){const A=c[_];let T=l[_];T=J(T);const D=o.Nu(A);if(T instanceof Fs)h.push(A);else{const N=mr(T,D);N!=null&&(h.push(A),f.set(A,N))}}const m=new ht(h);return new Jg(f,m,o.fieldTransforms)}function Zg(r,e,t,n=!1){return mr(t,r.Qu(n?4:3,e))}function mr(r,e){if(t_(r=J(r)))return Iu("Unsupported field value:",e,r),e_(r,e);if(r instanceof dr)return function(n,i){if(!Yg(i.Cu))throw i.Bu(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(n,i){const s=[];let o=0;for(const c of n){let l=mr(c,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(r,e)}return function(n,i){if((n=J(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return kp(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=we.fromDate(n);return{timestampValue:Kr(i.serializer,s)}}if(n instanceof we){const s=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Kr(i.serializer,s)}}if(n instanceof va)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ft)return{bytesValue:jp(i.serializer,n._byteString)};if(n instanceof Ee){const s=i.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Bl(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof fu)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return Vl(c.serializer,l)})}}}}}}(n,i);throw i.Bu(`Unsupported field value: ${ya(n)}`)}(r,e)}function e_(r,e){const t={};return lp(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hr(r,(n,i)=>{const s=mr(i,e.Mu(n));s!=null&&(t[n]=s)}),{mapValue:{fields:t}}}function t_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof we||r instanceof va||r instanceof Ft||r instanceof Ee||r instanceof dr||r instanceof fu)}function Iu(r,e,t){if(!t_(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const n=ya(t);throw n==="an object"?e.Bu(r+" a custom object"):e.Bu(r+" "+n)}}function Hc(r,e,t){if((e=J(e))instanceof Tn)return e._internalPath;if(typeof e=="string")return wu(r,e);throw Go("Field path arguments must be of type string or ",r,!1,void 0,t)}const _R=new RegExp("[~\\*/\\[\\]]");function wu(r,e,t){if(e.search(_R)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Tn(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Go(r,e,t,n,i){const s=n&&!n.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${i}`),l+=")"),new V(C.INVALID_ARGUMENT,c+r+l)}function n_(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class _s{constructor(e,t,n,i,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ea("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yR extends _s{data(){return super.data()}}function Ea(r,e){return typeof e=="string"?wu(r,e):e instanceof Tn?e._internalPath:e._delegate._internalPath}/**
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
 */function r_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Eu{}class Us extends Eu{}function an(r,e,...t){let n=[];e instanceof Eu&&n.push(e),n=n.concat(t),function(s){const o=s.filter(l=>l instanceof Tu).length,c=s.filter(l=>l instanceof Ta).length;if(o>1||o>0&&c>0)throw new V(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const i of n)r=i._apply(r);return r}class Ta extends Us{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ta(e,t,n)}_apply(e){const t=this._parse(e);return s_(e._query,t),new ot(e.firestore,e.converter,Oc(e._query,t))}_parse(e){const t=fr(e.firestore);return function(s,o,c,l,h,f,m){let _;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new V(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){yf(m,f);const A=[];for(const T of m)A.push(_f(l,s,T));_={arrayValue:{values:A}}}else _=_f(l,s,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||yf(m,f),_=Zg(c,o,m,f==="in"||f==="not-in");return se.create(h,f,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function vR(r,e,t){const n=e,i=Ea("where",r);return Ta._create(i,n,t)}class Tu extends Eu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Tu(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:de.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const l of c)s_(o,l),o=Oc(o,l)}(e._query,t),new ot(e.firestore,e.converter,Oc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class bu extends Us{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new bu(e,t)}_apply(e){const t=function(i,s,o){if(i.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ds(s,o)}(e._query,this._field,this._direction);return new ot(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Yt(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,t))}}function IR(r,e="asc"){const t=e,n=Ea("orderBy",r);return bu._create(n,t)}class ba extends Us{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new ba(e,t,n)}_apply(e){return new ot(e.firestore,e.converter,Mo(e._query,this._limit,this._limitType))}}function wR(r){return jg("limit",r),ba._create("limit",r,"F")}function ER(r){return jg("limitToLast",r),ba._create("limitToLast",r,"L")}class Aa extends Us{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Aa(e,t,n)}_apply(e){const t=i_(e,this.type,this._docOrFields,this._inclusive);return new ot(e.firestore,e.converter,function(i,s){return new Yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,t))}}function TR(...r){return Aa._create("startAt",r,!0)}function bR(...r){return Aa._create("startAfter",r,!1)}class Ra extends Us{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Ra(e,t,n)}_apply(e){const t=i_(e,this.type,this._docOrFields,this._inclusive);return new ot(e.firestore,e.converter,function(i,s){return new Yt(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,t))}}function AR(...r){return Ra._create("endBefore",r,!1)}function RR(...r){return Ra._create("endAt",r,!0)}function i_(r,e,t,n){if(t[0]=J(t[0]),t[0]instanceof _s)return function(s,o,c,l,h){if(!l)throw new V(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${c}().`);const f=[];for(const m of Lr(s))if(m.field.isKeyField())f.push(er(o,l.key));else{const _=l.data.field(m.field);if(aa(_))throw new V(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+m.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const A=m.field.canonicalString();throw new V(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${A}' (used as the orderBy) does not exist.`)}f.push(_)}return new wn(f,h)}(r._query,r.firestore._databaseId,e,t[0]._document,n);{const i=fr(r.firestore);return function(o,c,l,h,f,m){const _=o.explicitOrderBy;if(f.length>_.length)throw new V(C.INVALID_ARGUMENT,`Too many arguments provided to ${h}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const A=[];for(let T=0;T<f.length;T++){const D=f[T];if(_[T].field.isKeyField()){if(typeof D!="string")throw new V(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${h}(), but got a ${typeof D}`);if(!Nl(o)&&D.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${h}() must be a plain document ID, but '${D}' contains a slash.`);const N=o.path.child(ie.fromString(D));if(!U.isDocumentKey(N))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${h}() must result in a valid document path, but '${N}' is not because it contains an odd number of segments.`);const $=new U(N);A.push(er(c,$))}else{const N=Zg(l,h,D);A.push(N)}}return new wn(A,m)}(r._query,r.firestore._databaseId,i,e,t,n)}}function _f(r,e,t){if(typeof(t=J(t))=="string"){if(t==="")throw new V(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nl(e)&&t.indexOf("/")!==-1)throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(ie.fromString(t));if(!U.isDocumentKey(n))throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return er(r,new U(n))}if(t instanceof Ee)return er(r,t._key);throw new V(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ya(t)}.`)}function yf(r,e){if(!Array.isArray(r)||r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function s_(r,e){const t=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Au{convertValue(e,t="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return hr(e,(i,s)=>{n[i]=this.convertValue(s,t)}),n}convertVectorValue(e){var t,n,i;const s=(i=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map(o=>ye(o.doubleValue));return new fu(s)}convertGeoPoint(e){return new va(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cl(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const t=Kt(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ie.fromString(e);W(Xp(n));const i=new vn(n.get(1),n.get(3)),s=new U(n.popFirst(5));return i.isEqual(t)||Ce(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function Sa(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class SR extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,t)}}/**
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
 */class Wn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ht=class extends _s{constructor(e,t,n,i,s,o){super(e,t,n,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ea("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},Ji=class extends Ht{data(e={}){return super.data(e)}},bn=class{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Wn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Ji(this._firestore,this._userDataWriter,n.key,n,new Wn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const l=new Ji(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Wn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const l=new Ji(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Wn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:PR(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function PR(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j()}}function o_(r,e){return r instanceof Ht&&e instanceof Ht?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof bn&&e instanceof bn&&r._firestore===e._firestore&&Kg(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
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
 */function kR(r){r=ce(r,Ee);const e=ce(r.firestore,Ne);return Mg(Xe(e),r._key).then(t=>Ru(e,r,t))}class pr extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ee(this.firestore,null,t)}}function CR(r){r=ce(r,Ee);const e=ce(r.firestore,Ne),t=Xe(e),n=new pr(e);return Y0(t,r._key).then(i=>new Ht(e,n,r._key,i,new Wn(i!==null&&i.hasLocalMutations,!0),r.converter))}function xR(r){r=ce(r,Ee);const e=ce(r.firestore,Ne);return Mg(Xe(e),r._key,{source:"server"}).then(t=>Ru(e,r,t))}function NR(r){r=ce(r,ot);const e=ce(r.firestore,Ne),t=Xe(e),n=new pr(e);return r_(r._query),Fg(t,r._query).then(i=>new bn(e,n,r,i))}function DR(r){r=ce(r,ot);const e=ce(r.firestore,Ne),t=Xe(e),n=new pr(e);return X0(t,r._query).then(i=>new bn(e,n,r,i))}function VR(r){r=ce(r,ot);const e=ce(r.firestore,Ne),t=Xe(e),n=new pr(e);return Fg(t,r._query,{source:"server"}).then(i=>new bn(e,n,r,i))}function vf(r,e,t){r=ce(r,Ee);const n=ce(r.firestore,Ne),i=Sa(r.converter,e,t);return Bs(n,[wa(fr(n),"setDoc",r._key,i,r.converter!==null,t).toMutation(r._key,Ie.none())])}function If(r,e,t,...n){r=ce(r,Ee);const i=ce(r.firestore,Ne),s=fr(i);let o;return o=typeof(e=J(e))=="string"||e instanceof Tn?vu(s,"updateDoc",r._key,e,t,n):yu(s,"updateDoc",r._key,e),Bs(i,[o.toMutation(r._key,Ie.exists(!0))])}function OR(r){return Bs(ce(r.firestore,Ne),[new ci(r._key,Ie.none())])}function LR(r,e){const t=ce(r.firestore,Ne),n=Wo(r),i=Sa(r.converter,e);return Bs(t,[wa(fr(r.firestore),"addDoc",n._key,i,r.converter!==null,{}).toMutation(n._key,Ie.exists(!1))]).then(()=>n)}function a_(r,...e){var t,n,i;r=J(r);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Kc(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Kc(e[o])){const m=e[o];e[o]=(t=m.next)===null||t===void 0?void 0:t.bind(m),e[o+1]=(n=m.error)===null||n===void 0?void 0:n.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let l,h,f;if(r instanceof Ee)h=ce(r.firestore,Ne),f=oi(r._key.path),l={next:m=>{e[o]&&e[o](Ru(h,r,m))},error:e[o+1],complete:e[o+2]};else{const m=ce(r,ot);h=ce(m.firestore,Ne),f=m._query;const _=new pr(h);l={next:A=>{e[o]&&e[o](new bn(h,_,m,A))},error:e[o+1],complete:e[o+2]},r_(r._query)}return function(_,A,T,D){const N=new ga(D),$=new ru(A,N,T);return _.asyncQueue.enqueueAndForget(async()=>eu(await Zr(_),$)),()=>{N.Za(),_.asyncQueue.enqueueAndForget(async()=>tu(await Zr(_),$))}}(Xe(h),f,c,l)}function MR(r,e){return Z0(Xe(r=ce(r,Ne)),Kc(e)?e:{next:e})}function Bs(r,e){return function(n,i){const s=new Ge;return n.asyncQueue.enqueueAndForget(async()=>S0(await hu(n),i,s)),s.promise}(Xe(r),e)}function Ru(r,e,t){const n=t.docs.get(e._key),i=new pr(r);return new Ht(r,i,e._key,n,new Wn(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const FR={maxAttempts:5};/**
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
 */let UR=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=fr(e)}set(e,t,n){this._verifyNotCommitted();const i=ln(e,this._firestore),s=Sa(i.converter,t,n),o=wa(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,n);return this._mutations.push(o.toMutation(i._key,Ie.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const s=ln(e,this._firestore);let o;return o=typeof(t=J(t))=="string"||t instanceof Tn?vu(this._dataReader,"WriteBatch.update",s._key,t,n,i):yu(this._dataReader,"WriteBatch.update",s._key,t),this._mutations.push(o.toMutation(s._key,Ie.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=ln(e,this._firestore);return this._mutations=this._mutations.concat(new ci(t._key,Ie.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new V(C.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function ln(r,e){if((r=J(r)).firestore!==e)throw new V(C.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
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
 */let BR=class extends class{constructor(t,n){this._firestore=t,this._transaction=n,this._dataReader=fr(t)}get(t){const n=ln(t,this._firestore),i=new SR(this._firestore);return this._transaction.lookup([n._key]).then(s=>{if(!s||s.length!==1)return j();const o=s[0];if(o.isFoundDocument())return new _s(this._firestore,i,o.key,o,n.converter);if(o.isNoDocument())return new _s(this._firestore,i,n._key,null,n.converter);throw j()})}set(t,n,i){const s=ln(t,this._firestore),o=Sa(s.converter,n,i),c=wa(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,c),this}update(t,n,i,...s){const o=ln(t,this._firestore);let c;return c=typeof(n=J(n))=="string"||n instanceof Tn?vu(this._dataReader,"Transaction.update",o._key,n,i,s):yu(this._dataReader,"Transaction.update",o._key,n),this._transaction.update(o._key,c),this}delete(t){const n=ln(t,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=ln(e,this._firestore),n=new pr(this._firestore);return super.get(e).then(i=>new Ht(this._firestore,n,t._key,i._document,new Wn(!1,!1),t.converter))}};function jR(r,e,t){r=ce(r,Ne);const n=Object.assign(Object.assign({},FR),t);return function(s){if(s.maxAttempts<1)throw new V(C.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(s,o,c){const l=new Ge;return s.asyncQueue.enqueueAndForget(async()=>{const h=await H0(s);new G0(s.asyncQueue,h,c,o,l).au()}),l.promise}(Xe(r),i=>e(new BR(r,i)),n)}/**
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
 */function qR(){return new Fs("deleteField")}function $R(){return new mu("serverTimestamp")}function zR(...r){return new pu("arrayUnion",r)}function WR(...r){return new gu("arrayRemove",r)}function GR(r){return new _u("increment",r)}(function(e,t=!0){(function(i){si=i})(An),gn(new Vt("firestore",(n,{instanceIdentifier:i,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new Ne(new YT(n.getProvider("auth-internal")),new tb(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Tt(cd,"4.7.3",e),Tt(cd,"4.7.3","esm2017")})();const KR="@firebase/firestore-compat",HR="0.3.38";/**
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
 */function Su(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new V("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function wf(){if(typeof Uint8Array>"u")throw new V("unimplemented","Uint8Arrays are not available in this environment.")}function Ef(){if(!Sb())throw new V("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ys{constructor(e){this._delegate=e}static fromBase64String(e){return Ef(),new ys(Ft.fromBase64String(e))}static fromUint8Array(e){return wf(),new ys(Ft.fromUint8Array(e))}toBase64(){return Ef(),this._delegate.toBase64()}toUint8Array(){return wf(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Qc(r){return QR(r,["next","error","complete"])}function QR(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class JR{enableIndexedDbPersistence(e,t){return oR(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return aR(e._delegate)}clearIndexedDbPersistence(e){return cR(e._delegate)}}class c_{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof vn||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Lt("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){nR(this._delegate,e,t,n)}enableNetwork(){return uR(this._delegate)}disableNetwork(){return hR(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Bg("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return lR(this._delegate)}onSnapshotsInSync(e){return MR(this._delegate,e)}get app(){if(!this._appCompat)throw new V("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ei(this,Wg(this._delegate,e))}catch(t){throw nt(t,"collection()","Firestore.collection()")}}doc(e){try{return new _t(this,Wo(this._delegate,e))}catch(t){throw nt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new tt(this,rR(this._delegate,e))}catch(t){throw nt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return jR(this._delegate,t=>e(new l_(this,t)))}batch(){return Xe(this._delegate),new u_(new UR(this._delegate,e=>Bs(this._delegate,e)))}loadBundle(e){return dR(this._delegate,e)}namedQuery(e){return fR(this._delegate,e).then(t=>t?new tt(this,t):null)}}class Pa extends Au{constructor(e){super(),this.firestore=e}convertBytes(e){return new ys(new Ft(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return _t.forKey(t,this.firestore,null)}}function YR(r){KT(r)}class l_{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Pa(e)}get(e){const t=Gn(e);return this._delegate.get(t).then(n=>new vs(this._firestore,new Ht(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const i=Gn(e);return n?(Su("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=Gn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=Gn(e);return this._delegate.delete(t),this}}class u_{constructor(e){this._delegate=e}set(e,t,n){const i=Gn(e);return n?(Su("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const s=Gn(e);return arguments.length===2?this._delegate.update(s,t):this._delegate.update(s,t,n,...i),this}delete(e){const t=Gn(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ar{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Ji(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Is(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=ar.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let s=i.get(t);return s||(s=new ar(e,new Pa(e),t),i.set(t,s)),s}}ar.INSTANCES=new WeakMap;class _t{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Pa(e)}static forPath(e,t,n){if(e.length%2!==0)throw new V("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new _t(t,new Ee(t._delegate,n,new U(e)))}static forKey(e,t,n){return new _t(t,new Ee(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new ei(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ei(this.firestore,Wg(this._delegate,e))}catch(t){throw nt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof Ee?Gg(this._delegate,e):!1}set(e,t){t=Su("DocumentReference.set",t);try{return t?vf(this._delegate,e,t):vf(this._delegate,e)}catch(n){throw nt(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?If(this._delegate,e):If(this._delegate,e,t,...n)}catch(i){throw nt(i,"updateDoc()","DocumentReference.update()")}}delete(){return OR(this._delegate)}onSnapshot(...e){const t=h_(e),n=d_(e,i=>new vs(this.firestore,new Ht(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return a_(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=CR(this._delegate):(e==null?void 0:e.source)==="server"?t=xR(this._delegate):t=kR(this._delegate),t.then(n=>new vs(this.firestore,new Ht(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new _t(this.firestore,e?this._delegate.withConverter(ar.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function nt(r,e,t){return r.message=r.message.replace(e,t),r}function h_(r){for(const e of r)if(typeof e=="object"&&!Qc(e))return e;return{}}function d_(r,e){var t,n;let i;return Qc(r[0])?i=r[0]:Qc(r[1])?i=r[1]:typeof r[0]=="function"?i={next:r[0],error:r[1],complete:r[2]}:i={next:r[1],error:r[2],complete:r[3]},{next:s=>{i.next&&i.next(e(s))},error:(t=i.error)===null||t===void 0?void 0:t.bind(i),complete:(n=i.complete)===null||n===void 0?void 0:n.bind(i)}}class vs{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new _t(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return o_(this._delegate,e._delegate)}}class Is extends vs{data(e){const t=this._delegate.data(e);return this._delegate._converter||HT(t!==void 0),t}}class tt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Pa(e)}where(e,t,n){try{return new tt(this.firestore,an(this._delegate,vR(e,t,n)))}catch(i){throw nt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new tt(this.firestore,an(this._delegate,IR(e,t)))}catch(n){throw nt(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new tt(this.firestore,an(this._delegate,wR(e)))}catch(t){throw nt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new tt(this.firestore,an(this._delegate,ER(e)))}catch(t){throw nt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new tt(this.firestore,an(this._delegate,TR(...e)))}catch(t){throw nt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new tt(this.firestore,an(this._delegate,bR(...e)))}catch(t){throw nt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new tt(this.firestore,an(this._delegate,AR(...e)))}catch(t){throw nt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new tt(this.firestore,an(this._delegate,RR(...e)))}catch(t){throw nt(t,"endAt()","Query.endAt()")}}isEqual(e){return Kg(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=DR(this._delegate):(e==null?void 0:e.source)==="server"?t=VR(this._delegate):t=NR(this._delegate),t.then(n=>new Jc(this.firestore,new bn(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=h_(e),n=d_(e,i=>new Jc(this.firestore,new bn(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return a_(this._delegate,t,n)}withConverter(e){return new tt(this.firestore,e?this._delegate.withConverter(ar.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class XR{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Is(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Jc{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new tt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Is(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new XR(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Is(this._firestore,n))})}isEqual(e){return o_(this._delegate,e._delegate)}}class ei extends tt{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new _t(this.firestore,e):null}doc(e){try{return e===void 0?new _t(this.firestore,Wo(this._delegate)):new _t(this.firestore,Wo(this._delegate,e))}catch(t){throw nt(t,"doc()","CollectionReference.doc()")}}add(e){return LR(this._delegate,e).then(t=>new _t(this.firestore,t))}isEqual(e){return Gg(this._delegate,e._delegate)}withConverter(e){return new ei(this.firestore,e?this._delegate.withConverter(ar.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Gn(r){return ce(r,Ee)}/**
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
 */class Pu{constructor(...e){this._delegate=new Tn(...e)}static documentId(){return new Pu(ve.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof Tn?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class $n{constructor(e){this._delegate=e}static serverTimestamp(){const e=$R();return e._methodName="FieldValue.serverTimestamp",new $n(e)}static delete(){const e=qR();return e._methodName="FieldValue.delete",new $n(e)}static arrayUnion(...e){const t=zR(...e);return t._methodName="FieldValue.arrayUnion",new $n(t)}static arrayRemove(...e){const t=WR(...e);return t._methodName="FieldValue.arrayRemove",new $n(t)}static increment(e){const t=GR(e);return t._methodName="FieldValue.increment",new $n(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const ZR={Firestore:c_,GeoPoint:va,Timestamp:we,Blob:ys,Transaction:l_,WriteBatch:u_,DocumentReference:_t,DocumentSnapshot:vs,Query:tt,QueryDocumentSnapshot:Is,QuerySnapshot:Jc,CollectionReference:ei,FieldPath:Pu,FieldValue:$n,setLogLevel:YR,CACHE_SIZE_UNLIMITED:sR};function eS(r,e){r.INTERNAL.registerComponent(new Vt("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("firestore").getImmediate();return e(n,i)},"PUBLIC").setServiceProps(Object.assign({},ZR)))}/**
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
 */function tS(r){eS(r,(e,t)=>new c_(e,t,new JR)),r.registerVersion(KR,HR)}tS(lr);const nS={apiKey:"***********************",authDomain:"*********************",projectId:"*********************",storageBucket:"*********************",messagingSenderId:"***************",appId:"**********************",measurementId:"****************"},rS=lr.initializeApp(nS);rS.firestore();const iS=lr.auth(),sS=({local_varaiable:r,ThemeChanger:e})=>{const[t,n]=ue.useState(""),[i,s]=ue.useState("");ue.useEffect(()=>{const T=localStorage.getItem("userData");T&&(n(JSON.parse(T).name),s(JSON.parse(T).role))},[]);const[o,c]=ue.useState(!1),l=()=>{o?document.exitFullscreen():document.documentElement.requestFullscreen()};ue.useEffect(()=>{const T=()=>{c(!!document.fullscreenElement)};return document.addEventListener("fullscreenchange",T),()=>{document.removeEventListener("fullscreenchange",T)}},[]),ue.useEffect(()=>{const T=()=>{};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}},[]);function h(){const T=at.getState();window.innerWidth<=992&&e({...T,dataToggled:"close"}),window.innerWidth>=992&&e({...T,dataToggled:r.dataToggled?r.dataToggled:""})}ue.useEffect(()=>{const T=()=>{};return window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}},[]);const f=()=>{const T=at.getState(),D=T.dataNavLayout;if(window.innerWidth>=992){if(D==="vertical"){const N=T.dataVerticalStyle,$=T.dataNavStyle;switch(N){case"closed":e({...T,dataNavStyle:""}),T.dataToggled==="close-menu-close"?e({...T,dataToggled:""}):e({...T,dataToggled:"close-menu-close"});break;case"overlay":e({...T,dataNavStyle:""}),T.dataToggled==="icon-overlay-close"?e({...T,dataToggled:"",iconOverlay:""}):window.innerWidth>=992&&e({...T,dataToggled:"icon-overlay-close",iconOverlay:""});break;case"icontext":e({...T,dataNavStyle:""}),T.dataToggled==="icon-text-close"?e({...T,dataToggled:""}):e({...T,dataToggled:"icon-text-close"});break;case"doublemenu":if(e({...T,dataNavStyle:""}),e({...T,dataNavStyle:""}),T.dataToggled==="double-menu-open")e({...T,dataToggled:"double-menu-close"});else{const Q=document.querySelector(".side-menu__item.active");Q&&(e({...T,dataToggled:"double-menu-open"}),Q.nextElementSibling?Q.nextElementSibling.classList.add("double-menu-active"):e({...T,dataToggled:"double-menu-close"}))}break;case"detached":T.dataToggled==="detached-close"?e({...T,dataToggled:"",iconOverlay:""}):e({...T,dataToggled:"detached-close",iconOverlay:""});break;case"default":e({...T,dataToggled:""})}switch($){case"menu-click":T.dataToggled==="menu-click-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"menu-click-closed"});break;case"menu-hover":T.dataToggled==="menu-hover-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"menu-hover-closed"});break;case"icon-click":T.dataToggled==="icon-click-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"icon-click-closed"});break;case"icon-hover":T.dataToggled==="icon-hover-closed"?e({...T,dataToggled:""}):e({...T,dataToggled:"icon-hover-closed"});break}}}else T.dataToggled==="close"?(e({...T,dataToggled:"open"}),setTimeout(()=>{if(T.dataToggled=="open"){const N=document.querySelector("#responsive-overlay");N&&(N.classList.add("active"),N.addEventListener("click",()=>{const $=document.querySelector("#responsive-overlay");$&&($.classList.remove("active"),h())}))}window.addEventListener("resize",()=>{if(window.screen.width>=992){const N=document.querySelector("#responsive-overlay");N&&N.classList.remove("active")}})},100)):e({...T,dataToggled:"close"})},m=()=>{e({...r,class:r.class=="dark"?"light":"dark",dataHeaderStyles:r.class=="dark"?"light":"dark",dataMenuStyles:r.dataNavLayout=="horizontal"&&r.class=="dark"?"light":"dark"});const T=at.getState();T.class!="dark"?(e({...T,bodyBg:"",Light:"",darkBg:"",inputBorder:""}),localStorage.setItem("ynexlighttheme","light"),localStorage.removeItem("ynexdarktheme"),localStorage.removeItem("ynexMenu"),localStorage.removeItem("ynexHeader"),localStorage.removeItem("darkBgRGB"),localStorage.removeItem("bodyBgRGB"),localStorage.removeItem("Light")):(localStorage.setItem("ynexdarktheme","dark"),localStorage.removeItem("ynexlighttheme"),localStorage.removeItem("ynexMenu"),localStorage.removeItem("ynexHeader"))};ue.useEffect(()=>{const T=document==null?void 0:document.querySelector(".header"),D=document==null?void 0:document.querySelector(".app-sidebar"),N=T==null?void 0:T.clientHeight;function $(){window.pageYOffset>=N?(T==null||T.classList.add("sticky-pin"),D==null||D.classList.add("sticky-pin")):(T==null||T.classList.remove("sticky-pin"),D==null||D.classList.remove("sticky-pin"))}return window.addEventListener("scroll",$),window.addEventListener("DOMContentLoaded",$),()=>{window.removeEventListener("scroll",$),window.removeEventListener("DOMContentLoaded",$)}},[]);const _=W_(),A=()=>{const T="/firebase/login";localStorage.removeItem("userData"),localStorage.removeItem("token"),localStorage.removeItem("balance"),_(T)};return I.jsxs(ue.Fragment,{children:[I.jsx("div",{className:"app-header",children:I.jsx("nav",{className:"main-header !h-[3.75rem]","aria-label":"Global",children:I.jsxs("div",{className:"main-header-container ps-[0.725rem] pe-[1rem] ",children:[I.jsxs("div",{className:"header-content-left",children:[I.jsx("div",{className:"header-element",children:I.jsx("div",{className:"horizontal-logo",children:I.jsxs(Me,{to:"/dashboards/corporate",className:"header-logo",children:[I.jsx("img",{src:Q_,alt:"logo",className:"desktop-logo"}),I.jsx("img",{src:J_,alt:"logo",className:"toggle-logo"}),I.jsx("img",{src:kh,alt:"logo",className:"desktop-dark"}),I.jsx("img",{src:Y_,alt:"logo",className:"toggle-dark"}),I.jsx("img",{src:kh,alt:"logo",className:"desktop-white"}),I.jsx("img",{src:X_,alt:"logo",className:"toggle-white"})]})})}),I.jsx("div",{className:"header-element md:px-[0.325rem] !items-center",onClick:()=>f(),children:I.jsx(Me,{"aria-label":"Hide Sidebar",className:"sidemenu-toggle animated-arrow  hor-toggle horizontal-navtoggle inline-flex items-center",to:"#",children:I.jsx("span",{})})})]}),I.jsxs("div",{className:"header-content-right",children:[I.jsx("div",{className:"header-element py-[1rem] md:px-[0.65rem] px-2 header-search",children:I.jsx(Et,{disabled:!0,Label:"button",buttontype:"button",Overlay:"#search-modal",customClass:"inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",children:I.jsx("i",{className:"bx bx-search-alt-2 header-link-icon"})})}),I.jsx(pc,{Customclass:"header-element py-[1rem] md:px-[0.65rem] px-2  header-country hidden sm:block [--placement:bottom-left]",buttonid:"dropdown-flag",CustomToggleclass:"hs-dropdown-toggle !p-0 flex-shrink-0 !m-0 !border-0 !rounded-full !shadow-none",Imagetag:!0,Image:Ph,Imagename:"flag-img",Imageclass:"h-[1.25rem] w-[1.25rem] rounded-full",Custommenuclass:"min-w-[10rem] !-mt-3",Menulabel:"dropdown-flag",children:I.jsx("div",{className:"ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10",children:I.jsx("div",{className:"py-2 first:pt-0 last:pb-0",children:I.jsx("div",{className:"ti-dropdown-item !p-[0.65rem] ",children:I.jsxs("div",{className:"flex items-center space-x-2 rtl:space-x-reverse w-full",children:[I.jsx("div",{className:"h-[1.375rem] flex items-center w-[1.375rem] rounded-full",children:I.jsx("img",{src:Ph,alt:"flag-img",className:"h-[1rem] w-[1rem] rounded-full"})}),I.jsx("div",{children:I.jsx("p",{className:"!text-[0.8125rem] font-medium",children:"English"})})]})})})})}),I.jsxs("div",{className:"header-element header-theme-mode hidden !items-center sm:block !py-[1rem] md:!px-[0.65rem] px-2",onClick:()=>m(),children:[I.jsx(Et,{Label:"anchor",customClass:"hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium transition-all text-xs dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",Themevalue:"dark",children:I.jsx("i",{className:"bx bx-moon header-link-icon"})}),I.jsx(Et,{Label:"anchor",customClass:"hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium text-defaulttextcolor  transition-all text-xs  dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",Themevalue:"light",children:I.jsx("i",{className:"bx bx-sun header-link-icon"})})]}),I.jsxs("div",{className:"hs-dropdown ti-dropdown  header-element py-[1rem] md:px-[0.65rem] px-2 notifications-dropdown header-notification  !hidden md:!block [--placement:bottom-right]",children:[I.jsx(Et,{Id:"dropdown-notification",buttontype:"button",customClass:"hs-dropdown-toggle relative ti-dropdown-toggle !p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none align-middle text-xs",children:I.jsx("i",{className:"bx bx-bell header-link-icon  text-[1.125rem]"})}),I.jsxs("div",{className:"main-header-dropdown !-mt-3 !p-0 hs-dropdown-menu ti-dropdown-menu bg-white !w-[22rem] border-0 border-defaultborder hidden !m-0","aria-labelledby":"dropdown-notification",children:[I.jsx("div",{className:"ti-dropdown-header !m-0 !p-4 !bg-transparent flex justify-between items-center",children:I.jsx("p",{className:"mb-0 text-[1.0625rem] text-defaulttextcolor font-semibold ",children:"Notifications"})}),I.jsx("div",{className:"dropdown-divider"}),I.jsx("ul",{className:"list-none !m-0 !p-0 end-0",id:"header-notification-scroll"})]})]}),I.jsxs(pc,{Customclass:"header-element header-apps dark:text-[#8c9097] dark:text-white/50 py-[1rem] md:px-[0.65rem] px-2 md:!block !hidden [--placement:bottom-left]",buttonid:"dropdown-apps",CustomToggleclass:"!p-0 !border-0 flex-shrink-0  !rounded-full !shadow-none text-xs",Menulabel:"dropdown-apps",Icon:!0,IconClass:"bx bx-grid-alt header-link-icon text-[1.125rem]",Custommenuclass:"main-header-dropdown !-mt-3 !w-[22rem] border-0 border-defaultborder",children:[I.jsx("div",{className:"p-4",children:I.jsx("div",{className:"flex items-center justify-between",children:I.jsx("p",{className:"mb-0 text-defaulttextcolor text-[1.0625rem]  font-semibold",children:"Corporate Dashboard"})})}),I.jsx("div",{className:"dropdown-divider mb-0"}),I.jsx("div",{className:"ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10 main-header-shortcuts p-2",id:"header-shortcut-scroll"})]}),I.jsx("div",{className:"header-element header-fullscreen py-[1rem] md:px-[0.65rem] px-2",children:I.jsx(Et,{Label:"anchor",onclickfunc:()=>l(),customClass:"inline-flex flex-shrink-0 justify-center items-center gap-2  !rounded-full font-medium dark:hover:bg-black/20 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",children:o?I.jsx("i",{className:"bx bx-exit-fullscreen full-screen-close header-link-icon"}):I.jsx("i",{className:"bx bx-fullscreen full-screen-open header-link-icon"})})}),I.jsxs("div",{className:"header-element md:!px-[0.65rem] px-2 hs-dropdown !items-center ti-dropdown [--placement:bottom-left]",children:[I.jsx(Et,{Id:"dropdown-profile",buttontype:"button",customClass:"hs-dropdown-toggle ti-dropdown-toggle !gap-2 !p-0 flex-shrink-0 sm:me-2 me-0 !rounded-full !shadow-none text-xs align-middle !border-0 !shadow-transparent ",children:I.jsx("img",{className:"inline-block rounded-full ",src:H_,width:"32",height:"32",alt:"Image Description"})}),I.jsxs("div",{className:"md:block hidden dropdown-profile",children:[I.jsx("p",{className:"font-semibold mb-0 leading-none text-[#536485] text-[0.813rem] ",children:t}),I.jsx("span",{className:"opacity-[0.7] font-normal text-[#536485] block text-[0.6875rem] ",children:i})]}),I.jsx("div",{className:"hs-dropdown-menu ti-dropdown-menu !-mt-3 border-0 w-[11rem] !p-0 border-defaultborder hidden main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end","aria-labelledby":"dropdown-profile",children:I.jsx("ul",{className:"text-defaulttextcolor font-medium dark:text-[#8c9097] dark:text-white/50",children:I.jsx("li",{children:I.jsxs("a",{className:"w-full ti-dropdown-item !text-[0.8125rem] !p-[0.65rem] !gap-x-0 !inline-flex",href:"#",onClick:T=>{T.preventDefault(),iS.signOut(),A()},children:[I.jsx("i",{className:"ti ti-logout text-[1.125rem] me-2 opacity-[0.7] !inline-flex"}),"Log Out"]})})})})]}),I.jsx("div",{className:"header-element md:px-[0.48rem]",children:I.jsx(Et,{Label:"button",buttontype:"button",customClass:"hs-dropdown-toggle switcher-icon inline-flex flex-shrink-0 justify-center items-center gap-2  rounded-full font-medium  align-middle transition-all text-xs dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10",Overlay:"#hs-overlay-switcher",children:I.jsx("i",{className:"bx bx-cog header-link-icon animate-spin-slow"})})})]})]})})}),I.jsx(ny,{})]})},oS=r=>({local_varaiable:r}),aS=Yc(oS,{ThemeChanger:Ko})(sS);function f_({local_varaiable:r,MenuItems:e,toggleSidemenu:t,level:n,HoverToggleInnerMenuFn:i}){const s=o=>{o.preventDefault()};return I.jsxs(ue.Fragment,{children:[I.jsxs(Me,{to:"#",className:`side-menu__item ${e!=null&&e.selected?"active":""}`,onClick:o=>{o.preventDefault(),t(o,e)},onMouseEnter:o=>i(o,e),children:[I.jsx("span",{className:`hs-tooltip inline-block [--placement:right] leading-none ${(r==null?void 0:r.dataVerticalStyle)=="doublemenu"?"":"hidden"}`,children:I.jsxs(Et,{buttontype:"button",customClass:"hs-tooltip-toggle  inline-flex justify-center items-center",children:[e.icon,I.jsx("span",{className:"hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-2 px-3 rounded-sm bg-black text-xs font-medium text-white shadow-sm dark:bg-neutral-700",role:"tooltip",children:e.title})]})}),(r==null?void 0:r.dataVerticalStyle)!="doublemenu"?e.icon:"",I.jsxs("span",{className:`${n==1?"side-menu__label":""}`,children:[" ",e.title," ",e.badgetxt?I.jsxs("span",{className:e.class,children:[" ",e.badgetxt," "]}):""]}),I.jsx("i",{className:"fe fe-chevron-right side-menu__angle"})]}),I.jsxs("ul",{className:`slide-menu child${n}  ${e.active?"double-menu-active":""} ${e!=null&&e.dirchange?"force-left":""} `,style:e.active?{display:"block"}:{display:"none"},children:[n<=1?I.jsx("li",{className:"slide side-menu__label1",children:I.jsx(Me,{to:"#",children:e.title})}):"",e.children.map((o,c)=>I.jsxs("li",{className:`${o.menutitle?"slide__category":""} ${(o==null?void 0:o.type)=="empty"?"slide":""} ${(o==null?void 0:o.type)=="link"?"slide":""} ${(o==null?void 0:o.type)=="sub"?"slide has-sub":""} ${o!=null&&o.active?"open":""} ${o!=null&&o.selected?"active":""}`,children:[o.type==="link"?I.jsxs(Me,{to:o.path+"/",className:`side-menu__item ${o.selected?"active":""}`,children:[o.icon,I.jsxs("span",{className:"",children:[" ",o.title," ",o.badgetxt?I.jsxs("span",{className:o.class,children:[" ",o.badgetxt]}):""]})]}):"",o.type==="empty"?I.jsxs(Me,{to:"#",className:"side-menu__item",onClick:s,children:[" ",o.icon,I.jsxs("span",{className:"",children:[" ",o.title," ",o.badgetxt?I.jsxs("span",{className:o.class,children:[" ",o.badgetxt," "]}):""]})]}):"",o.type==="sub"?I.jsx(f_,{MenuItems:o,toggleSidemenu:t,HoverToggleInnerMenuFn:i,level:n+1}):""]},c))]})]})}const cS=r=>({local_varaiable:r}),lS=Yc(cS,{ThemeChanger:Ko})(f_),Ar="/assets/ddinLogoWhite-hxpcdvYF.png",uS=({local_varaiable:r,ThemeChanger:e})=>{const[t,n]=ue.useState(Vi);function i(){const k=M=>{M==null||M.forEach(z=>{z.active=!1,k(z.children)})};k(Vi),n(M=>[...M])}ue.useEffect(()=>{window.addEventListener("resize",f),window.addEventListener("resize",_);const k=document.querySelector(".main-content");if(window.innerWidth<=992)if(k){const M=at.getState();e({...M,dataToggled:"close"})}else document.documentElement.getAttribute("data-nav-layout")=="horizontal"&&i();return k.addEventListener("click",l),()=>{window.removeEventListener("resize",f),window.removeEventListener("resize",_)}},[]);const s=Tf();function o(){const k=at.getState();(k.dataToggled=="icon-overlay-close"||k.dataToggled=="detached-close")&&k.iconOverlay!="open"&&e({...k,iconOverlay:"open"})}function c(){const k=at.getState();(k.dataToggled=="icon-overlay-close"||k.dataToggled=="detached-close")&&k.iconOverlay=="open"&&e({...k,iconOverlay:""})}function l(){const k=at.getState();window.innerWidth<=992&&e({...k,dataToggled:"close"});const M=document.querySelector("#responsive-overlay");M&&M.classList.remove("active"),(k.dataNavLayout=="horizontal"||k.dataNavStyle=="menu-click"||k.dataNavStyle=="icon-click")&&i()}const h=typeof window<"u"?[window.innerWidth]:[];function f(){if(typeof window>"u")return;h.push(window.innerWidth),h.length>2&&h.shift();const k=at.getState(),M=h[h.length-1],z=h[h.length-2];h.length>1&&(M<992&&z>=992&&e({...k,dataToggled:"close"}),M>=992&&z<992&&e({...k,dataToggled:k.dataVerticalStyle==="doublemenu"?"double-menu-open":""}))}function m(){function k(){const M=document.querySelectorAll(".slide"),z=document.querySelectorAll(".slide-menu");M.forEach(q=>{q.classList.contains("is-expanded")&&q.classList.remove("is-expanded")}),z.forEach(q=>{q.classList.contains("open")&&(q.classList.remove("open"),q.style.display="none")})}k()}const _=()=>{var X;const k=document.querySelector(".main-menu"),M=document.querySelector(".main-sidebar"),z=Math.ceil(Number(window.getComputedStyle(k).marginLeft.split("px")[0])),q=Math.ceil(Number(window.getComputedStyle(k).marginRight.split("px")[0])),te=k.scrollWidth-M.offsetWidth;k.scrollWidth>M.offsetWidth||(k.style.marginLeft="0px",k.style.marginRight="0px",k.style.marginInlineStart="0px"),((X=document.querySelector("html"))==null?void 0:X.getAttribute("dir"))!=="rtl"?k.scrollWidth>M.offsetWidth&&Math.abs(te)<Math.abs(z)&&(k.style.marginLeft=-te+"px"):k.scrollWidth>M.offsetWidth&&Math.abs(te)<Math.abs(q)&&(k.style.marginRight=-te+"px")};function A(){const k=document.querySelector(".main-menu"),M=document.querySelector(".main-sidebar");if(k&&M){const z=Math.ceil(Number(window.getComputedStyle(k).marginInlineStart.split("px")[0])),q=Math.ceil(Number(window.getComputedStyle(k).marginInlineEnd.split("px")[0])),te=k.scrollWidth-M.offsetWidth;let X=M.offsetWidth;if(k.scrollWidth>M.offsetWidth){if(r.dataVerticalStyle.dir!=="rtl"){if(Math.abs(te)>Math.abs(z)){if(k.style.marginInlineEnd="0",!(Math.abs(te)>Math.abs(z)+X)){X=Math.abs(te)-Math.abs(z);const Ve=document.querySelector("#slide-right");Ve&&Ve.classList.add("hidden")}k.style.marginInlineStart=Number(k.style.marginInlineStart.split("px")[0])-Math.abs(X)+"px";const he=document.querySelector("#slide-right");he&&he.classList.remove("hidden")}}else if(Math.abs(te)>Math.abs(q)){if(k.style.marginInlineEnd="0",!(Math.abs(te)>Math.abs(q)+X)){X=Math.abs(te)-Math.abs(q);const Ve=document.querySelector("#slide-right");Ve&&Ve.classList.add("hidden")}k.style.marginInlineStart=Number(k.style.marginInlineStart.split("px")[0])-Math.abs(X)+"px";const he=document.querySelector("#slide-left");he&&he.classList.remove("hidden")}}const le=document.querySelector(".main-menu > .slide.open"),De=document.querySelector(".main-menu > .slide.open > ul");le&&le.classList.remove("active"),De&&(De.style.display="none")}m(),_()}function T(){const k=document.querySelector(".main-menu"),M=document.querySelector(".main-sidebar");if(k&&M){const z=Math.ceil(Number(window.getComputedStyle(k).marginInlineStart.split("px")[0])),q=Math.ceil(Number(window.getComputedStyle(k).marginInlineEnd.split("px")[0])),te=k.scrollWidth-M.offsetWidth;let X=M.offsetWidth;if(k.scrollWidth>M.offsetWidth){if(r.dataVerticalStyle.dir!=="rtl")Math.abs(te)<=Math.abs(z)&&(k.style.marginInlineStart="0px");else if(Math.abs(te)>Math.abs(q)){if(k.style.marginInlineStart="0",!(Math.abs(te)>Math.abs(q)+X)){X=Math.abs(te)-Math.abs(q);const Ve=document.querySelector("#slide-right");Ve&&Ve.classList.add("hidden")}k.style.marginInlineStart=Number(k.style.marginInlineStart.split("px")[0])-Math.abs(X)+"px";const he=document.querySelector("#slide-left");he&&he.classList.remove("hidden")}}const le=document.querySelector(".main-menu > .slide.open"),De=document.querySelector(".main-menu > .slide.open > ul");le&&le.classList.remove("active"),De&&(De.style.display="none")}m()}const D=()=>{typeof window<"u"&&(window.scrollY>30&&document.querySelector(".app-sidebar")?document.querySelectorAll(".app-sidebar").forEach(M=>{M.classList.add("sticky-pin")}):document.querySelectorAll(".app-sidebar").forEach(M=>{M.classList.remove("sticky-pin")}))};typeof window<"u"&&window.addEventListener("scroll",D);const N=0;let $=!1,Q=0;function G(k,M,z=t){const q=at.getState();if((window.screen.availWidth<=992||q.dataNavStyle!="icon-hover")&&(window.screen.availWidth<=992||q.dataNavStyle!="menu-hover"))for(const te of z)te===M?(te.active=!0,te.selected=!0,ne(te)):!te.active&&!te.selected?(te.active=!1,te.selected=!1):Y(te),te.children&&te.children.length>0&&G(k,M,te.children);n(te=>[...te])}function H(k,M){for(const z in k)if(k.hasOwnProperty(z)){if(typeof k[z]=="object"&&JSON.stringify(k[z])===JSON.stringify(M))return k;if(typeof k[z]=="object"){const q=H(k[z],M);if(q!==null)return q}}return null}function ne(k){const M=H(t,k),z=at.getState();M?(Q>2&&($=!0),M.active=!0,M.selected=!0,Q+=1,ne(M)):$||z.dataVerticalStyle=="doublemenu"&&e({...z,dataToggled:"double-menu-close"})}function Y(k){if(k){if(Array.isArray(k))for(const M of k)M.active=!1,M.selected=!1;k.active=!1,k.selected=!1,k.children&&k.children.length>0&&Y(k.children)}}function w(k){$=!1,Q=1;const M=z=>{z==null||z.forEach(q=>{q.path==""||q.path===k&&G(null,q),M(q.children)})};M(Vi)}const[g,y]=ue.useState("/");ue.useEffect(()=>{const k=document.documentElement,M=new MutationObserver(xn),z={attributes:!0};M.observe(k,z);let q=s.pathname.endsWith("/")?s.pathname.slice(0,-1):s.pathname;q!==g&&(w(q),y(q))},[s]);function E(k,M,z=t){const q=at.getState();let te=k.target;if(q.dataNavStyle!="icon-hover"&&q.dataNavStyle!="menu-hover"||window.innerWidth<992||q.dataNavLayout!="horizontal"&&q.dataToggled!="icon-hover-closed"&&q.dataToggled!="menu-hover-closed"){for(const X of z){if(X===M){if(q.dataVerticalStyle=="doublemenu"&&X.active)return;X.active=!X.active,X.active?S(z,X):q.dataVerticalStyle=="doublemenu"&&e({...q,dataToggled:"double-menu-close"}),b(z,X)}else X.active||q.dataVerticalStyle!="doublemenu"&&(X.active=!1);X.children&&X.children.length>0&&E(k,M,X.children)}if(M!=null&&M.children&&M.active&&q.dataVerticalStyle=="doublemenu"&&q.dataToggled!="double-menu-open"&&e({...q,dataToggled:"double-menu-open"}),te&&q.dataNavLayout=="horizontal"&&(q.dataNavStyle=="menu-click"||q.dataNavStyle=="icon-click")){const X=te.closest("li");if(X){const le=X.querySelector("ul");let De=0,he=X.closest("ul:not(.main-menu)");for(;he;)he=he.parentElement.closest("ul:not(.main-menu)"),he&&(De+=he.clientWidth);if(le){let Ve=X.getBoundingClientRect();q.dir=="rtl"?Ve.left-Ve.width-De+150<0&&De<window.innerWidth&&De+Ve.width+Ve.width<window.innerWidth?M.dirchange=!0:M.dirchange=!1:De+Ve.right+Ve.width+50>window.innerWidth&&Ve.right>=0&&De+Ve.width+Ve.width<window.innerWidth?M.dirchange=!0:M.dirchange=!1}}}}n(X=>[...X])}function b(k,M){const z=at.getState(),q=v(k,M);q?(q.active=!0,q.active&&e({...z,dataToggled:"double-menu-open"}),b(k,q)):z.dataVerticalStyle=="doublemenu"&&e({...z,dataToggled:"double-menu-close"})}function S(k,M){for(const z of k)z!==M&&(z.active=!1,z.children&&z.children.length>0&&S(z.children,M))}function v(k,M){for(const z of k){if(z.children&&z.children.includes(M))return z;if(z.children&&z.children.length>0){const q=v(k=z.children,M);if(q)return q}}return null}function It(k,M){const z=at.getState();let q=k.target;if(q&&z.dataNavLayout=="horizontal"&&(z.dataNavStyle=="menu-hover"||z.dataNavStyle=="icon-hover")){const te=q.closest("li");if(te){const X=te.querySelector("ul");let le=0,De=te.closest("ul:not(.main-menu)");for(;De;)De=De.parentElement.closest("ul:not(.main-menu)"),De&&(le+=De.clientWidth);if(X){let he=te.getBoundingClientRect();z.dir=="rtl"?he.left-he.width-le+150<0&&le<window.innerWidth&&le+he.width+he.width<window.innerWidth?M.dirchange=!0:M.dirchange=!1:le+he.right+he.width+50>window.innerWidth&&he.right>=0&&le+he.width+he.width<window.innerWidth?M.dirchange=!0:M.dirchange=!1}}}}function xn(k){for(const M of k)if(M.type==="attributes"&&M.attributeName==="data-nav-layout")if(M.target.getAttribute("data-nav-layout")=="vertical"){let q=s.pathname.endsWith("/")?s.pathname.slice(0,-1):s.pathname;q=q||"/dashboard/ecommerce",w(q)}else i()}const ka=k=>{k.preventDefault()};return I.jsxs(ue.Fragment,{children:[I.jsx("div",{id:"responsive-overlay",onClick:()=>{l()}}),I.jsxs("aside",{className:"app-sidebar",id:"sidebar",onMouseOver:()=>o(),onMouseLeave:()=>c(),children:[I.jsx("div",{className:"main-sidebar-header",children:I.jsxs(Me,{to:"/dashboards/corporate/",className:"header-logo",children:[I.jsx("img",{src:Ar,alt:"logo",className:"desktop-logo"}),I.jsx("img",{src:Ar,alt:"logo",className:"toggle-logo"}),I.jsx("img",{src:Ar,alt:"logo",className:"desktop-dark"}),I.jsx("img",{src:Ar,alt:"logo",className:"toggle-dark"}),I.jsx("img",{src:Ar,alt:"logo",className:"desktop-white"}),I.jsx("img",{src:Ar,alt:"logo",className:"toggle-white"})]})}),I.jsx(Z_,{className:"main-sidebar ",id:"sidebar-scroll",children:I.jsxs("nav",{className:"main-menu-container nav nav-pills flex-column sub-open",children:[I.jsx("div",{className:"slide-left",id:"slide-left",onClick:()=>{T()},children:I.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#7b8191",width:"24",height:"24",viewBox:"0 0 24 24",children:I.jsx("path",{d:"M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"})})}),I.jsx("ul",{className:"main-menu",children:Vi.map((k,M)=>I.jsx(ue.Fragment,{children:I.jsxs("li",{className:`${k.menutitle?"slide__category":""} ${k.type==="link"?"slide":""}
                                           ${k.type==="sub"?"slide has-sub":""} ${k!=null&&k.active?"open":""} ${k!=null&&k.selected?"active":""}`,children:[k.menutitle?I.jsx("span",{className:"category-name",children:k.menutitle}):"",k.type==="link"?I.jsxs(Me,{to:k.path+"/",className:`side-menu__item ${k.selected?"active":""}`,children:[I.jsx("span",{className:`hs-tooltip inline-block [--placement:right] leading-none ${(r==null?void 0:r.dataVerticalStyle)=="doublemenu"?"":"hidden"}`,children:I.jsxs(Et,{buttontype:"button",customClass:"hs-tooltip-toggle  inline-flex justify-center items-center",children:[k.icon,I.jsx("span",{className:"hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 !py-2 !px-3 !rounded-md bg-black text-xs font-medium text-white shadow-sm dark:bg-neutral-700",role:"tooltip",children:k.title})]})}),r.dataVerticalStyle!="doublemenu"?k.icon:"",I.jsxs("span",{className:"side-menu__label",children:[k.title," ",k.badgetxt?I.jsxs("span",{className:k.class,children:[" ",k.badgetxt]}):""]})]}):"",k.type==="empty"?I.jsxs(Me,{to:"#",className:"side-menu__item",onClick:ka,children:[k.icon,I.jsxs("span",{className:"",children:[" ",k.title," ",k.badgetxt?I.jsxs("span",{className:k.class,children:[k.badgetxt," "]}):""]})]}):"",k.type==="sub"?I.jsx(lS,{MenuItems:k,level:N+1,toggleSidemenu:E,HoverToggleInnerMenuFn:It}):""]})},M))}),I.jsx("div",{className:"slide-right",onClick:()=>{A()},id:"slide-right",children:I.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#7b8191",width:"24",height:"24",viewBox:"0 0 24 24",children:I.jsx("path",{d:"M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"})})})]})})]})]})},hS=r=>({local_varaiable:r}),dS=Yc(hS,{ThemeChanger:Ko})(uS),fS=()=>I.jsx(ue.Fragment,{children:I.jsx("footer",{className:"footer mt-auto xl:ps-[15rem]  font-normal font-inter bg-white text-defaultsize leading-normal text-[0.813] shadow-[0_0_0.4rem_rgba(0,0,0,0.1)] dark:bg-bodybg py-4 text-center",children:I.jsx("div",{className:"container",children:I.jsxs("span",{className:"text-gray dark:text-defaulttextcolor/50",children:[" Copyright © ",I.jsx("span",{id:"year",children:"2025"})," ",I.jsx(Me,{to:"#",className:"text-defaulttextcolor font-semibold dark:text-defaulttextcolor",children:"DDIN Group Ltd"}),". Designed by ",I.jsxs(Me,{to:"https://ddin.rw/",children:[" ",I.jsx("span",{className:"font-semibold text-primary underline",children:"DDIN Team"})," "]})," All rights reserved "]})})})}),HS=()=>{const[r,e]=ue.useState(""),t=()=>{const o=at.getState();localStorage.getItem("ynexverticalstyles")=="icontext"&&e(""),window.innerWidth>992&&o.iconOverlay==="open"&&Ko({...o,iconOverlay:""})},[n,i]=ue.useState(!1);ue.useEffect(()=>{i(!0)});const s=Tf();return ue.useEffect(()=>{window.HSStaticMethods.autoInit()},[s.pathname]),I.jsx(I.Fragment,{children:I.jsx(ue.Fragment,{children:I.jsx(ty,{children:I.jsxs("div",{style:{display:`${n?"block":"none"}`},children:[I.jsx(K_,{}),I.jsxs("div",{className:"page",children:[I.jsx(aS,{}),I.jsx(dS,{}),I.jsx("div",{className:"content",children:I.jsx("div",{className:"main-content",onClick:t,children:I.jsx(G_,{})})}),I.jsx(fS,{})]}),I.jsx(ey,{})]})})})})};export{HS as default};
