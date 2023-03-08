function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},r=e.parcelRequire6b37;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},e.parcelRequire6b37=r),r.register("2sH7u",(function(e,n){t(e.exports,"includeFavoriteNew",(function(){return r})),t(e.exports,"loadAllFavorites",(function(){return a})),t(e.exports,"excludeFavoriteNew",(function(){return i}));const s="favorite";function r(t){try{let e=a();return"object"==typeof e&&!1!==Array.isArray(e)||(e=[],console.log(e)),e.unshift(t),o(e),!0}catch(t){return console.error(t.message),!1}}function i(t){try{const e=a(),n=e.findIndex(((e,n)=>e.id===t));return e.splice(n,1),o(e),!0}catch(t){return console.error(t.message),!1}}function o(t){const e="Wrong data to save: array with objects is expected.";if("object"==typeof t)if(!1!==Array.isArray(t))try{const e=JSON.stringify(t);localStorage.setItem(s,e)}catch(t){console.error("Set state error: ",t.message)}else console.log(e);else console.log(e)}function a(){try{const t=localStorage.getItem(s);return null===t?void 0:JSON.parse(t)}catch(t){console.error(t.message)}}})),r.register("9Ka1f",(function(e,n){function s(t){const e=i();for(key of Object.keys(e)){const n=e[key].findIndex((e=>e.id===t.id));n>-1&&(console.log(e[key]),e[key].splice(n,1))}localStorage.setItem("read",JSON.stringify(e))}function r(t){s(t);const e=i(),n=o();e[n]||(e[n]=[]),e[n].push(t),localStorage.setItem("read",JSON.stringify(e))}function i(){try{const t=localStorage.getItem("read");return null===t?{}:JSON.parse(t)}catch(t){console.log(t)}}function o(){return(new Date).toLocaleString().slice(0,10).split(".").join("/")}function r(t){s(t);const e=i(),n=o();e[n]||(e[n]=[]),e[n].push(t),localStorage.setItem("read",JSON.stringify(e))}t(e.exports,"loadReadStorage",(function(){return i})),t(e.exports,"writeReadStorage",(function(){return r}))}));var i,o,a,c=i={};function u(){throw new Error("setTimeout has not been defined")}function h(){throw new Error("clearTimeout has not been defined")}function l(t){if(o===setTimeout)return setTimeout(t,0);if((o===u||!o)&&setTimeout)return o=setTimeout,setTimeout(t,0);try{return o(t,0)}catch(e){try{return o.call(null,t,0)}catch(e){return o.call(this,t,0)}}}!function(){try{o="function"==typeof setTimeout?setTimeout:u}catch(t){o=u}try{a="function"==typeof clearTimeout?clearTimeout:h}catch(t){a=h}}();var d,f=[],p=!1,g=-1;function m(){p&&d&&(p=!1,d.length?f=d.concat(f):g=-1,f.length&&y())}function y(){if(!p){var t=l(m);p=!0;for(var e=f.length;e;){for(d=f,f=[];++g<e;)d&&d[g].run();g=-1,e=f.length}d=null,p=!1,function(t){if(a===clearTimeout)return clearTimeout(t);if((a===h||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(t);try{a(t)}catch(e){try{return a.call(null,t)}catch(e){return a.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function w(){}c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new v(t,e)),1!==f.length||p||l(y)},v.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=w,c.addListener=w,c.once=w,c.off=w,c.removeListener=w,c.removeAllListeners=w,c.emit=w,c.prependListener=w,c.prependOnceListener=w,c.listeners=function(t){return[]},c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0};var E=r("2sH7u"),b=r("9Ka1f");
/**
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
 */
const T=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&s+1<t.length&&56320==(64512&t.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++s)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},I={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let e=0;e<t.length;e+=3){const r=t[e],i=e+1<t.length,o=i?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=r>>2,h=(3&r)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(l=64)),s.push(n[u],n[h],n[l],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[s++]=String.fromCharCode(55296+(i>>10)),e[s++]=String.fromCharCode(56320+(1023&i))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let e=0;e<t.length;){const r=n[t.charAt(e++)],i=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==r||null==i||null==o||null==a)throw new S;const c=r<<2|i>>4;if(s.push(c),64!==o){const t=i<<4&240|o>>2;if(s.push(t),64!==a){const t=o<<6&192|a;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
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
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C=function(t){return function(t){const e=T(t);return I.encodeByteArray(e,!0)}(t).replace(/\./g,"")},A=function(t){try{return I.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */
const _=()=>
/**
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
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,D=()=>{try{return _()||(()=>{if(void 0===i||void 0===i.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&A(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},N=t=>{const e=(t=>{var e,n;return null===(n=null===(e=D())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),s]:[e.substring(0,n),s]};
/**
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
 */
class k{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */function L(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[C(JSON.stringify({alg:"none",type:"JWT"})),C(JSON.stringify(i)),""].join(".")}
/**
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
 */function R(){try{return"object"==typeof indexedDB}catch(t){return!1}}class O extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{create(t,...e){const n=e[0]||{},s=`${this.service}/${t}`,r=this.errors[t],i=r?function(t,e){return t.replace(M,((t,n)=>{const s=e[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new O(s,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const M=/\{\$([^}]+)}/g;
/**
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
 */function F(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const n=t[r],i=e[r];if(V(n)&&V(i)){if(!F(n,i))return!1}else if(n!==i)return!1}for(const t of s)if(!n.includes(t))return!1;return!0}function V(t){return null!==t&&"object"==typeof t}
/**
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
 */
/**
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
 */
function P(t){return t&&t._delegate?t._delegate:t}class U{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
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
 */
/**
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
 */
class B{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new k;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),s=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(s)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(s)}return s}onInit(t,e){var n;const s=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&t(i,s),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=t,"[DEFAULT]"===s?void 0:s),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var s;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class j{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new B(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}
/**
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
 */const q=[];var K,z;(z=K||(K={}))[z.DEBUG=0]="DEBUG",z[z.VERBOSE=1]="VERBOSE",z[z.INFO=2]="INFO",z[z.WARN=3]="WARN",z[z.ERROR=4]="ERROR",z[z.SILENT=5]="SILENT";const G={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},H=K.INFO,$={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},Q=(t,e,...n)=>{if(e<t.logLevel)return;const s=(new Date).toISOString(),r=$[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${s}]  ${t.name}:`,...n)};class W{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?G[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}constructor(t){this.name=t,this._logLevel=H,this._logHandler=Q,this._userLogHandler=null,q.push(this)}}let X,Y;const J=new WeakMap,Z=new WeakMap,tt=new WeakMap,et=new WeakMap,nt=new WeakMap;let st={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return Z.get(t);if("objectStoreNames"===e)return t.objectStoreNames||tt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function rt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Y||(Y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(at(this),e),ot(J.get(this))}:function(...e){return ot(t.apply(at(this),e))}:function(e,...n){const s=t.call(at(this),e,...n);return tt.set(s,e.sort?e.sort():[e]),ot(s)}}function it(t){return"function"==typeof t?rt(t):(t instanceof IDBTransaction&&function(t){if(Z.has(t))return;const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",i),t.removeEventListener("abort",i)},r=()=>{e(),s()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",i),t.addEventListener("abort",i)}));Z.set(t,e)}(t),e=t,(X||(X=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,st):t);var e}function ot(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",i)},r=()=>{e(ot(t.result)),s()},i=()=>{n(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&J.set(e,t)})).catch((()=>{})),nt.set(e,t),e}(t);if(et.has(t))return et.get(t);const e=it(t);return e!==t&&(et.set(t,e),nt.set(e,t)),e}const at=t=>nt.get(t);function ct(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=ot(o);return s&&o.addEventListener("upgradeneeded",(t=>{s(ot(o.result),t.oldVersion,t.newVersion,ot(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),r&&t.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const ut=["get","getKey","getAll","getAllKeys","count"],ht=["put","add","delete","clear"],lt=new Map;function dt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(lt.get(e))return lt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ht.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!ut.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&i.done]))[0]};return lt.set(e,i),i}st=(t=>({...t,get:(e,n,s)=>dt(e,n)||t.get(e,n,s),has:(e,n)=>!!dt(e,n)||t.has(e,n)}))(st);
/**
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
 */
class ft{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const pt=new W("@firebase/app"),gt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},mt=new Map,yt=new Map;function vt(t,e){try{t.container.addComponent(e)}catch(n){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wt(t){const e=t.name;if(yt.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;yt.set(e,t);for(const e of mt.values())vt(e,t);return!0}function Et(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
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
 */
const bt=new x("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
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
 */
class Tt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new U("app",(()=>this),"PUBLIC"))}}
/**
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
 */function It(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const s=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),r=s.name;if("string"!=typeof r||!r)throw bt.create("bad-app-name",{appName:String(r)});var i;if(n||(n=null===(i=D())||void 0===i?void 0:i.config),!n)throw bt.create("no-options");const o=mt.get(r);if(o){if(F(n,o.options)&&F(s,o.config))return o;throw bt.create("duplicate-app",{appName:r})}const a=new j(r);for(const t of yt.values())a.addComponent(t);const c=new Tt(n,s,a);return mt.set(r,c),c}function St(t="[DEFAULT]"){const e=mt.get(t);if(!e&&"[DEFAULT]"===t)return It();if(!e)throw bt.create("no-app",{appName:t});return e}function Ct(t,e,n){var s;let r=null!==(s=gt[t])&&void 0!==s?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const t=[`Unable to register library "${r}" with version "${e}":`];return i&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void pt.warn(t.join(" "))}wt(new U(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}let At=null;function _t(){return At||(At=ct("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore("firebase-heartbeat-store")}}).catch((t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})}))),At}async function Dt(t,e){try{const n=(await _t()).transaction("firebase-heartbeat-store","readwrite"),s=n.objectStore("firebase-heartbeat-store");return await s.put(e,Nt(t)),n.done}catch(t){if(t instanceof O)pt.warn(t.message);else{const e=bt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});pt.warn(e.message)}}}function Nt(t){return`${t.name}!${t.options.appId}`}
/**
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
 */class kt{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Lt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Lt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let s=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),Ot(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ot(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=C(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function Lt(){return(new Date).toISOString().substring(0,10)}class Rt{async runIndexedDBEnvironmentCheck(){return!!R()&&new Promise(((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await _t()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Nt(t))}catch(t){if(t instanceof O)pt.warn(t.message);else{const e=bt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});pt.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Ot(t){return C(JSON.stringify({version:2,heartbeats:t})).length}
/**
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
 */var xt;xt="",wt(new U("platform-logger",(t=>new ft(t)),"PRIVATE")),wt(new U("heartbeat",(t=>new kt(t)),"PRIVATE")),Ct("@firebase/app","0.9.4",xt),Ct("@firebase/app","0.9.4","esm2017"),Ct("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ct("firebase","9.17.2","app");var Mt,Ft="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},Vt={},Pt=Pt||{},Ut=Ft||self;function Bt(){}function jt(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function qt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var Kt="closure_uid_"+(1e9*Math.random()>>>0),zt=0;function Gt(t,e,n){return t.call.apply(t.bind,arguments)}function Ht(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function $t(t,e,n){return($t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Gt:Ht).apply(null,arguments)}function Qt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Wt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return e.prototype[n].apply(t,r)}}function Xt(){this.s=this.s,this.o=this.o}Xt.prototype.s=!1,Xt.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,Kt)&&t[Kt]||(t[Kt]=++zt))},Xt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Jt(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Zt(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(jt(n)){const e=t.length||0,s=n.length||0;t.length=e+s;for(let r=0;r<s;r++)t[e+r]=n[r]}else t.push(n)}}function te(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}te.prototype.h=function(){this.defaultPrevented=!0};var ee=function(){if(!Ut.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Ut.addEventListener("test",Bt,e),Ut.removeEventListener("test",Bt,e)}catch(t){}return t}();function ne(t){return/^[\s\xa0]*$/.test(t)}var se=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function re(t,e){return t<e?-1:t>e?1:0}function ie(){var t=Ut.navigator;return t&&(t=t.userAgent)?t:""}function oe(t){return-1!=ie().indexOf(t)}function ae(t){return ae[" "](t),t}ae[" "]=Bt;var ce,ue,he=oe("Opera"),le=oe("Trident")||oe("MSIE"),de=oe("Edge"),fe=de||le,pe=oe("Gecko")&&!(-1!=ie().toLowerCase().indexOf("webkit")&&!oe("Edge"))&&!(oe("Trident")||oe("MSIE"))&&!oe("Edge"),ge=-1!=ie().toLowerCase().indexOf("webkit")&&!oe("Edge");function me(){var t=Ut.document;return t?t.documentMode:void 0}t:{var ye="",ve=(ue=ie(),pe?/rv:([^\);]+)(\)|;)/.exec(ue):de?/Edge\/([\d\.]+)/.exec(ue):le?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ue):ge?/WebKit\/(\S+)/.exec(ue):he?/(?:Version)[ \/]?(\S+)/.exec(ue):void 0);if(ve&&(ye=ve?ve[1]:""),le){var we=me();if(null!=we&&we>parseFloat(ye)){ce=String(we);break t}}ce=ye}var Ee,be={};function Te(){return function(t){var e=be;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=se(String(ce)).split("."),n=se("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var r=e[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==r[0].length&&0==i[0].length)break;t=re(0==r[1].length?0:parseInt(r[1],10),0==i[1].length?0:parseInt(i[1],10))||re(0==r[2].length,0==i[2].length)||re(r[2],i[2]),r=r[3],i=i[3]}while(0==t)}return 0<=t}))}if(Ut.document&&le){var Ie=me();Ee=Ie||(parseInt(ce,10)||void 0)}else Ee=void 0;var Se=Ee;function Ce(t,e){if(te.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(pe){t:{try{ae(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Ae[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ce.X.h.call(this)}}Wt(Ce,te);var Ae={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),De=0;function Ne(t,e,n,s,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=r,this.key=++De,this.ba=this.ea=!1}function ke(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Le(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function Re(t){const e={};for(const n in t)e[n]=t[n];return e}const Oe="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xe(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<Oe.length;e++)n=Oe[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Me(t){this.src=t,this.g={},this.h=0}function Fe(t,e){var n=e.type;if(n in t.g){var s,r=t.g[n],i=Yt(r,e);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ke(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Ve(t,e,n,s){for(var r=0;r<t.length;++r){var i=t[r];if(!i.ba&&i.listener==e&&i.capture==!!n&&i.ha==s)return r}return-1}Me.prototype.add=function(t,e,n,s,r){var i=t.toString();(t=this.g[i])||(t=this.g[i]=[],this.h++);var o=Ve(t,e,s,r);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new Ne(e,this.src,i,!!s,r)).ea=n,t.push(e)),e};var Pe="closure_lm_"+(1e6*Math.random()|0),Ue={};function Be(t,e,n,s,r){if(s&&s.once)return qe(t,e,n,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Be(t,e[i],n,s,r);return null}return n=We(n),t&&t[_e]?t.N(e,n,qt(s)?!!s.capture:!!s,r):je(t,e,n,!1,s,r)}function je(t,e,n,s,r,i){if(!e)throw Error("Invalid event type");var o=qt(r)?!!r.capture:!!r,a=$e(t);if(a||(t[Pe]=a=new Me(t)),(n=a.add(e,n,s,o,i)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}const e=He;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)ee||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),s,r);else if(t.attachEvent)t.attachEvent(Ge(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function qe(t,e,n,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)qe(t,e[i],n,s,r);return null}return n=We(n),t&&t[_e]?t.O(e,n,qt(s)?!!s.capture:!!s,r):je(t,e,n,!0,s,r)}function Ke(t,e,n,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ke(t,e[i],n,s,r);else s=qt(s)?!!s.capture:!!s,n=We(n),t&&t[_e]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=Ve(i=t.g[e],n,s,r))&&(ke(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=$e(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ve(e,n,s,r)),(n=-1<t?e[t]:null)&&ze(n))}function ze(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[_e])Fe(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Ge(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=$e(e))?(Fe(n,t),0==n.h&&(n.src=null,e[Pe]=null)):ke(t)}}}function Ge(t){return t in Ue?Ue[t]:Ue[t]="on"+t}function He(t,e){if(t.ba)t=!0;else{e=new Ce(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&ze(t),t=n.call(s,e)}return t}function $e(t){return(t=t[Pe])instanceof Me?t:null}var Qe="__closure_events_fn_"+(1e9*Math.random()>>>0);function We(t){return"function"==typeof t?t:(t[Qe]||(t[Qe]=function(e){return t.handleEvent(e)}),t[Qe])}function Xe(){Xt.call(this),this.i=new Me(this),this.P=this,this.I=null}function Ye(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new te(e,t);else if(e instanceof te)e.target=e.target||t;else{var r=e;xe(e=new te(s,t),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];r=Je(o,s,!0,e)&&r}if(r=Je(o=e.g=t,s,!0,e)&&r,r=Je(o,s,!1,e)&&r,n)for(i=0;i<n.length;i++)r=Je(o=e.g=n[i],s,!1,e)&&r}function Je(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&Fe(t.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}Wt(Xe,Xt),Xe.prototype[_e]=!0,Xe.prototype.removeEventListener=function(t,e,n,s){Ke(this,t,e,n,s)},Xe.prototype.M=function(){if(Xe.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ke(n[s]);delete e.g[t],e.h--}}this.I=null},Xe.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},Xe.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Ze=Ut.JSON.stringify;function tn(){var t=cn;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var en,nn=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new sn),(t=>t.reset()));class sn{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function rn(t){Ut.setTimeout((()=>{throw t}),0)}function on(t,e){en||function(){var t=Ut.Promise.resolve(void 0);en=function(){t.then(un)}}(),an||(en(),an=!0),cn.add(t,e)}var an=!1,cn=new class{add(t,e){const n=nn.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function un(){for(var t;t=tn();){try{t.h.call(t.g)}catch(t){rn(t)}var e=nn;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}an=!1}function hn(t,e){Xe.call(this),this.h=t||1,this.g=e||Ut,this.j=$t(this.lb,this),this.l=Date.now()}function ln(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function dn(t,e,n){if("function"==typeof t)n&&(t=$t(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=$t(t.handleEvent,t)}return 2147483647<Number(e)?-1:Ut.setTimeout(t,e||0)}function fn(t){t.g=dn((()=>{t.g=null,t.i&&(t.i=!1,fn(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Wt(hn,Xe),(Mt=hn.prototype).ca=!1,Mt.R=null,Mt.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ye(this,"tick"),this.ca&&(ln(this),this.start()))}},Mt.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Mt.M=function(){hn.X.M.call(this),ln(this),delete this.g};class pn extends Xt{l(t){this.h=arguments,this.g?this.i=!0:fn(this)}M(){super.M(),this.g&&(Ut.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function gn(t){Xt.call(this),this.h=t,this.g={}}Wt(gn,Xt);var mn=[];function yn(t,e,n,s){Array.isArray(n)||(n&&(mn[0]=n.toString()),n=mn);for(var r=0;r<n.length;r++){var i=Be(e,n[r],s||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function vn(t){Le(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ze(t)}),t),t.g={}}function wn(){this.g=!0}function En(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Ze(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}gn.prototype.M=function(){gn.X.M.call(this),vn(this)},gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},wn.prototype.Aa=function(){this.g=!1},wn.prototype.info=function(){};var bn={},Tn=null;function In(){return Tn=Tn||new Xe}function Sn(t){te.call(this,bn.Pa,t)}function Cn(t){const e=In();Ye(e,new Sn(e))}function An(t,e){te.call(this,bn.STAT_EVENT,t),this.stat=e}function _n(t){const e=In();Ye(e,new An(e,t))}function Dn(t,e){te.call(this,bn.Qa,t),this.size=e}function Nn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return Ut.setTimeout((function(){t()}),e)}bn.Pa="serverreachability",Wt(Sn,te),bn.STAT_EVENT="statevent",Wt(An,te),bn.Qa="timingevent",Wt(Dn,te);var kn={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Ln={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Rn(){}function On(t){return t.h||(t.h=t.i())}function xn(){}Rn.prototype.h=null;var Mn,Fn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Vn(){te.call(this,"d")}function Pn(){te.call(this,"c")}function Un(){}function Bn(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new gn(this),this.O=qn,t=fe?125:void 0,this.T=new hn(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new jn}function jn(){this.i=null,this.g="",this.h=!1}Wt(Vn,te),Wt(Pn,te),Wt(Un,Rn),Un.prototype.g=function(){return new XMLHttpRequest},Un.prototype.i=function(){return{}},Mn=new Un;var qn=45e3,Kn={},zn={};function Gn(t,e,n){t.K=1,t.v=hs(is(e)),t.s=n,t.P=!0,Hn(t,null)}function Hn(t,e){t.F=Date.now(),Xn(t),t.A=is(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),Is(n.i,"t",s),t.C=0,n=t.l.H,t.h=new jn,t.g=Tr(t.l,n?e:null,!t.s),0<t.N&&(t.L=new pn($t(t.La,t,t.g),t.N)),yn(t.S,t.g,"readystatechange",t.ib),e=t.H?Re(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Cn(),function(t,e,n,s,r,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function $n(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Qn(t,e,n){let s,r=!0;for(;!t.I&&t.C<n.length;){if(s=Wn(t,n),s==zn){4==e&&(t.o=4,_n(14),r=!1),En(t.j,t.m,null,"[Incomplete Response]");break}if(s==Kn){t.o=4,_n(15),En(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}En(t.j,t.m,s,null),es(t,s)}$n(t)&&s!=zn&&s!=Kn&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,_n(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),pr(e),e.K=!0,_n(11))):(En(t.j,t.m,n,"[Invalid Chunked Response]"),ts(t),Zn(t))}function Wn(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?zn:(n=Number(e.substring(n,s)),isNaN(n)?Kn:(s+=1)+n>e.length?zn:(e=e.substr(s,n),t.C=s+n,e))}function Xn(t){t.V=Date.now()+t.O,Yn(t,t.O)}function Yn(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Nn($t(t.gb,t),e)}function Jn(t){t.B&&(Ut.clearTimeout(t.B),t.B=null)}function Zn(t){0==t.l.G||t.I||yr(t.l,t)}function ts(t){Jn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,ln(t.T),vn(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function es(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Ns(n.h,t)))if(!t.J&&Ns(n.h,t)&&3==n.G){try{var s=n.Fa.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;mr(n),or(n)}fr(n),_n(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=Nn($t(n.cb,n),6e3));if(1>=Ds(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else wr(n,11)}else if((t.J||n.g==t)&&mr(n),!ne(e))for(r=n.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const e=u[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(s=1.5*h,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=s.h;i.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ks(i,i.h),i.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.za=t,us(s.F,s.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((s=n).sa=br(s,s.H?s.ka:null,s.V),o.J){Ls(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Jn(a),Xn(a)),s.g=o}else dr(s);0<n.i.length&&cr(n)}else"stop"!=u[0]&&"close"!=u[0]||wr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?wr(n,7):ir(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}Cn()}catch(t){}}function ns(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(jt(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(jt(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}(t),s=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(jt(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],n&&n[i],t)}(Mt=Bn.prototype).setTimeout=function(t){this.O=t},Mt.ib=function(t){t=t.target;const e=this.L;e&&3==Zs(t)?e.l():this.La(t)},Mt.La=function(t){try{if(t==this.g)t:{const h=Zs(this.g);var e=this.g.Ea();this.g.aa();if(!(3>h)&&(3!=h||fe||this.g&&(this.h.h||this.g.fa()||tr(this.g)))){this.I||4!=h||7==e||Cn(),Jn(this);var n=this.g.aa();this.Y=n;e:if($n(this)){var s=tr(this.g);t="";var r=s.length,i=4==Zs(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ts(this),Zn(this);var o="";break e}this.h.i=new Ut.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,s,r,i,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ne(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,_n(12),ts(this),Zn(this);break t}En(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,es(this,n)}this.P?(Qn(this,h,o),fe&&this.i&&3==h&&(yn(this.S,this.T,"tick",this.hb),this.T.start())):(En(this.j,this.m,o,null),es(this,o)),4==h&&ts(this),this.i&&!this.I&&(4==h?yr(this.l,this):(this.i=!1,Xn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,_n(12)):(this.o=0,_n(13)),ts(this),Zn(this)}}}catch(t){}},Mt.hb=function(){if(this.g){var t=Zs(this.g),e=this.g.fa();this.C<e.length&&(Jn(this),Qn(this,t,e),this.i&&4!=t&&Xn(this))}},Mt.cancel=function(){this.I=!0,ts(this)},Mt.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Cn(),_n(17)),ts(this),this.o=2,Zn(this)):Yn(this,this.V-t)};var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rs(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rs){this.h=void 0!==e?e:t.h,os(this,t.j),this.s=t.s,this.g=t.g,as(this,t.m),this.l=t.l,e=t.i;var n=new ws;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cs(this,n),this.o=t.o}else t&&(n=String(t).match(ss))?(this.h=!!e,os(this,n[1]||"",!0),this.s=ls(n[2]||""),this.g=ls(n[3]||"",!0),as(this,n[4]),this.l=ls(n[5]||"",!0),cs(this,n[6]||"",!0),this.o=ls(n[7]||"")):(this.h=!!e,this.i=new ws(null,this.h))}function is(t){return new rs(t)}function os(t,e,n){t.j=n?ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function as(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cs(t,e,n){e instanceof ws?(t.i=e,function(t,e){e&&!t.j&&(Es(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(bs(this,e),Is(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=ds(e,ys)),t.i=new ws(e,t.h))}function us(t,e,n){t.i.set(e,n)}function hs(t){return us(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ds(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,fs),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function fs(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}rs.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ds(e,ps,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ds(e,ps,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ds(n,"/"==n.charAt(0)?ms:gs,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ds(n,vs)),t.join("")};var ps=/[#\/\?@]/g,gs=/[#\?:]/g,ms=/[#\?]/g,ys=/[#\?@]/g,vs=/#/g;function ws(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Es(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),r=null;if(0<=s){var i=t[n].substring(0,s);r=t[n].substring(s+1)}else i=t[n];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function bs(t,e){Es(t),e=Ss(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Ts(t,e){return Es(t),e=Ss(t,e),t.g.has(e)}function Is(t,e,n){bs(t,e),0<n.length&&(t.i=null,t.g.set(Ss(t,e),Jt(n)),t.h+=n.length)}function Ss(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(Mt=ws.prototype).add=function(t,e){Es(this),this.i=null,t=Ss(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},Mt.forEach=function(t,e){Es(this),this.g.forEach((function(n,s){n.forEach((function(n){t.call(e,n,s,this)}),this)}),this)},Mt.oa=function(){Es(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const r=t[s];for(let t=0;t<r.length;t++)n.push(e[s])}return n},Mt.W=function(t){Es(this);let e=[];if("string"==typeof t)Ts(this,t)&&(e=e.concat(this.g.get(Ss(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},Mt.set=function(t,e){return Es(this),this.i=null,Ts(this,t=Ss(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},Mt.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},Mt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),t.push(r)}}return this.i=t.join("&")};function Cs(t){this.l=t||As,Ut.PerformanceNavigationTiming?t=0<(t=Ut.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(Ut.g&&Ut.g.Ga&&Ut.g.Ga()&&Ut.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var As=10;function _s(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Ds(t){return t.h?1:t.g?t.g.size:0}function Ns(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ks(t,e){t.g?t.g.add(e):t.h=e}function Ls(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function Rs(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Jt(t.i)}function Os(){}function xs(){this.g=new Os}function Ms(t,e,n){const s=n||"";try{ns(t,(function(t,n){let r=t;qt(t)&&(r=Ze(t)),e.push(s+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function Fs(t,e,n,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch(t){}}function Vs(t){this.l=t.ac||null,this.j=t.jb||!1}function Ps(t,e){Xe.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Us,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Cs.prototype.cancel=function(){if(this.i=Rs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Os.prototype.stringify=function(t){return Ut.JSON.stringify(t,void 0)},Os.prototype.parse=function(t){return Ut.JSON.parse(t,void 0)},Wt(Vs,Rn),Vs.prototype.g=function(){return new Ps(this.l,this.j)},Vs.prototype.i=function(t){return function(){return t}}({}),Wt(Ps,Xe);var Us=0;function Bs(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,qs(t)}function qs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(Mt=Ps.prototype).open=function(t,e){if(this.readyState!=Us)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,qs(this)},Mt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Ut).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},Mt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,js(this)),this.readyState=Us},Mt.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qs(this)),this.g&&(this.readyState=3,qs(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==Ut.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Bs(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},Mt.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?js(this):qs(this),3==this.readyState&&Bs(this)}},Mt.Va=function(t){this.g&&(this.response=this.responseText=t,js(this))},Mt.Ua=function(t){this.g&&(this.response=t,js(this))},Mt.ga=function(){this.g&&js(this)},Mt.setRequestHeader=function(t,e){this.v.append(t,e)},Mt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},Mt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ps.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ks=Ut.JSON.parse;function zs(t){Xe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Gs,this.K=this.L=!1}Wt(zs,Xe);var Gs="",Hs=/^https?$/i,$s=["POST","PUT"];function Qs(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ws(t),Ys(t)}function Ws(t){t.D||(t.D=!0,Ye(t,"complete"),Ye(t,"error"))}function Xs(t){if(t.h&&void 0!==Pt&&(!t.C[1]||4!=Zs(t)||2!=t.aa()))if(t.v&&4==Zs(t))dn(t.Ha,0,t);else if(Ye(t,"readystatechange"),4==Zs(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var r=String(t.H).match(ss)[1]||null;if(!r&&Ut.self&&Ut.self.location){var i=Ut.self.location.protocol;r=i.substr(0,i.length-1)}s=!Hs.test(r?r.toLowerCase():"")}n=s}if(n)Ye(t,"complete"),Ye(t,"success");else{t.m=6;try{var o=2<Zs(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",Ws(t)}}finally{Ys(t)}}}function Ys(t,e){if(t.g){Js(t);const n=t.g,s=t.C[0]?Bt:null;t.g=null,t.C=null,e||Ye(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function Js(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Ut.clearTimeout(t.A),t.A=null)}function Zs(t){return t.g?t.g.readyState:0}function tr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Gs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function er(t){let e="";return Le(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function nr(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=er(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):us(t,e,n))}function sr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.Ca=0,this.i=[],this.j=new wn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=sr("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=sr("baseRetryDelayMs",5e3,t),this.bb=sr("retryDelaySeedMs",1e4,t),this.$a=sr("forwardChannelMaxRetries",2,t),this.ta=sr("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Cs(t&&t.concurrentRequestLimit),this.Fa=new xs,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function ir(t){if(ar(t),3==t.G){var e=t.U++,n=is(t.F);us(n,"SID",t.I),us(n,"RID",e),us(n,"TYPE","terminate"),hr(t,n),(e=new Bn(t,t.j,e,void 0)).K=2,e.v=hs(is(n)),n=!1,Ut.navigator&&Ut.navigator.sendBeacon&&(n=Ut.navigator.sendBeacon(e.v.toString(),"")),!n&&Ut.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xn(e)}Er(t)}function or(t){t.g&&(pr(t),t.g.cancel(),t.g=null)}function ar(t){or(t),t.u&&(Ut.clearTimeout(t.u),t.u=null),mr(t),t.h.cancel(),t.m&&("number"==typeof t.m&&Ut.clearTimeout(t.m),t.m=null)}function cr(t){_s(t.h)||t.m||(t.m=!0,on(t.Ja,t),t.C=0)}function ur(t,e){var n;n=e?e.m:t.U++;const s=is(t.F);us(s,"SID",t.I),us(s,"RID",n),us(s,"AID",t.T),hr(t,s),t.o&&t.s&&nr(s,t.o,t.s),n=new Bn(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=lr(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ks(t.h,n),Gn(n,s,e)}function hr(t,e){t.ia&&Le(t.ia,(function(t,n){us(e,n,t)})),t.l&&ns({},(function(t,n){us(e,n,t)}))}function lr(t,e,n){n=Math.min(t.i.length,n);var s=t.l?$t(t.l.Ra,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=e,0>n)e=Math.max(0,r[o].h-100),i=!1;else try{Ms(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(i){s=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,s}function dr(t){t.g||t.u||(t.Z=1,on(t.Ia,t),t.A=0)}function fr(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=Nn($t(t.Ia,t),vr(t,t.A)),t.A++,!0)}function pr(t){null!=t.B&&(Ut.clearTimeout(t.B),t.B=null)}function gr(t){t.g=new Bn(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=is(t.sa);us(e,"RID","rpc"),us(e,"SID",t.I),us(e,"CI",t.L?"0":"1"),us(e,"AID",t.T),us(e,"TYPE","xmlhttp"),hr(t,e),t.o&&t.s&&nr(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=hs(is(e)),n.s=null,n.P=!0,Hn(n,t)}function mr(t){null!=t.v&&(Ut.clearTimeout(t.v),t.v=null)}function yr(t,e){var n=null;if(t.g==e){mr(t),pr(t),t.g=null;var s=2}else{if(!Ns(t.h,e))return;n=e.D,Ls(t.h,e),s=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var r=t.C;Ye(s=In(),new Dn(s,n)),cr(t)}else dr(t);else if(3==(r=e.o)||0==r&&0<t.pa||!(1==s&&function(t,e){return!(Ds(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=Nn($t(t.Ja,t,e),vr(t,t.C)),t.C++,0)))}(t,e)||2==s&&fr(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:wr(t,5);break;case 4:wr(t,10);break;case 3:wr(t,6);break;default:wr(t,2)}}function vr(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function wr(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var s=$t(t.kb,t);n||(n=new rs("//www.google.com/images/cleardot.gif"),Ut.location&&"http"==Ut.location.protocol||os(n,"https"),hs(n)),function(t,e){const n=new wn;if(Ut.Image){const s=new Image;s.onload=Qt(Fs,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Qt(Fs,n,s,"TestLoadImage: error",!1,e),s.onabort=Qt(Fs,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Qt(Fs,n,s,"TestLoadImage: timeout",!1,e),Ut.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else _n(2);t.G=0,t.l&&t.l.va(e),Er(t),ar(t)}function Er(t){if(t.G=0,t.la=[],t.l){const e=Rs(t.h);0==e.length&&0==t.i.length||(Zt(t.la,e),Zt(t.la,t.i),t.h.i.length=0,Jt(t.i),t.i.length=0),t.l.ua()}}function br(t,e,n){var s=n instanceof rs?is(n):new rs(n,void 0);if(""!=s.g)e&&(s.g=e+"."+s.g),as(s,s.m);else{var r=Ut.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new rs(null,void 0);s&&os(i,s),e&&(i.g=e),r&&as(i,r),n&&(i.l=n),s=i}return n=t.D,e=t.za,n&&e&&us(s,n,e),us(s,"VER",t.ma),hr(t,s),s}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new zs(new Vs({jb:!0})):new zs(t.ra)).Ka(t.H),e}function Ir(){}function Sr(){if(le&&!(10<=Number(Se)))throw Error("Environmental error: no available transport.")}function Cr(t,e){Xe.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!ne(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ne(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Dr(this)}function Ar(t){Vn.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function _r(){Pn.call(this),this.status=1}function Dr(t){this.g=t}(Mt=zs.prototype).Ka=function(t){this.L=t},Mt.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Mn.g(),this.C=this.u?On(this.u):On(Mn),this.g.onreadystatechange=$t(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Qs(this,t)}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const t of s.keys())n.set(t,s.get(t))}s=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=Ut.FormData&&t instanceof Ut.FormData,!(0<=Yt($s,e))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Js(this),0<this.B&&((this.K=function(t){return le&&Te()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$t(this.qa,this)):this.A=dn(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Qs(this,t)}},Mt.qa=function(){void 0!==Pt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ye(this,"timeout"),this.abort(8))},Mt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ye(this,"complete"),Ye(this,"abort"),Ys(this))},Mt.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ys(this,!0)),zs.X.M.call(this)},Mt.Ha=function(){this.s||(this.F||this.v||this.l?Xs(this):this.fb())},Mt.fb=function(){Xs(this)},Mt.aa=function(){try{return 2<Zs(this)?this.g.status:-1}catch(t){return-1}},Mt.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},Mt.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ks(e)}},Mt.Ea=function(){return this.m},Mt.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Mt=rr.prototype).ma=8,Mt.G=1,Mt.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Bn(this,this.j,t,void 0);let i=this.s;if(this.S&&(i?(i=Re(i),xe(i,this.S)):i=this.S),null!==this.o||this.N||(r.H=i,i=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var s=this.i[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=lr(this,r,e),us(n=is(this.F),"RID",t),us(n,"CVER",22),this.D&&us(n,"X-HTTP-Session-Id",this.D),hr(this,n),i&&(this.N?e="headers="+encodeURIComponent(String(er(i)))+"&"+e:this.o&&nr(n,this.o,i)),ks(this.h,r),this.Ya&&us(n,"TYPE","init"),this.O?(us(n,"$req",e),us(n,"SID","null"),r.Z=!0,Gn(r,n,null)):Gn(r,n,e),this.G=2}}else 3==this.G&&(t?ur(this,t):0==this.i.length||_s(this.h)||ur(this))},Mt.Ia=function(){if(this.u=null,gr(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Nn($t(this.eb,this),t)}},Mt.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,_n(10),or(this),gr(this))},Mt.cb=function(){null!=this.v&&(this.v=null,or(this),fr(this),_n(19))},Mt.kb=function(t){t?(this.j.info("Successfully pinged google.com"),_n(2)):(this.j.info("Failed to ping google.com"),_n(1))},(Mt=Ir.prototype).xa=function(){},Mt.wa=function(){},Mt.va=function(){},Mt.ua=function(){},Mt.Ra=function(){},Sr.prototype.g=function(t,e){return new Cr(t,e)},Wt(Cr,Xe),Cr.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;_n(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=br(t,null,t.V),cr(t)},Cr.prototype.close=function(){ir(this.g)},Cr.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Ze(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&cr(e)},Cr.prototype.M=function(){this.g.l=null,delete this.j,ir(this.g),delete this.g,Cr.X.M.call(this)},Wt(Ar,Vn),Wt(_r,Pn),Wt(Dr,Ir),Dr.prototype.xa=function(){Ye(this.g,"a")},Dr.prototype.wa=function(t){Ye(this.g,new Ar(t))},Dr.prototype.va=function(t){Ye(this.g,new _r)},Dr.prototype.ua=function(){Ye(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Cr.prototype.send=Cr.prototype.u,Cr.prototype.open=Cr.prototype.m,Cr.prototype.close=Cr.prototype.close,kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,Ln.COMPLETE="complete",xn.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",Xe.prototype.listen=Xe.prototype.N,zs.prototype.listenOnce=zs.prototype.O,zs.prototype.getLastError=zs.prototype.Oa,zs.prototype.getLastErrorCode=zs.prototype.Ea,zs.prototype.getStatus=zs.prototype.aa,zs.prototype.getResponseJson=zs.prototype.Sa,zs.prototype.getResponseText=zs.prototype.fa,zs.prototype.send=zs.prototype.da,zs.prototype.setWithCredentials=zs.prototype.Ka;var Nr=Vt.createWebChannelTransport=function(){return new Sr},kr=Vt.getStatEventTarget=function(){return In()},Lr=Vt.ErrorCode=kn,Rr=Vt.EventType=Ln,Or=Vt.Event=bn,xr=Vt.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Mr=Vt.FetchXmlHttpFactory=Vs,Fr=Vt.WebChannel=xn,Vr=Vt.XhrIo=zs;
/**
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
 */
class Pr{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Pr.UNAUTHENTICATED=new Pr(null),Pr.GOOGLE_CREDENTIALS=new Pr("google-credentials-uid"),Pr.FIRST_PARTY=new Pr("first-party-uid"),Pr.MOCK_USER=new Pr("mock-user");
/**
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
 */
let Ur="9.17.2";
/**
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
 */const Br=new W("@firebase/firestore");function jr(){return Br.logLevel}function qr(t,...e){if(Br.logLevel<=K.DEBUG){const n=e.map(Gr);Br.debug(`Firestore (${Ur}): ${t}`,...n)}}function Kr(t,...e){if(Br.logLevel<=K.ERROR){const n=e.map(Gr);Br.error(`Firestore (${Ur}): ${t}`,...n)}}function zr(t,...e){if(Br.logLevel<=K.WARN){const n=e.map(Gr);Br.warn(`Firestore (${Ur}): ${t}`,...n)}}function Gr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
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
 */function Hr(t="Unexpected state"){const e=`FIRESTORE (${Ur}) INTERNAL ASSERTION FAILED: `+t;throw Kr(e),new Error(e)}function $r(t,e){t||Hr()}function Qr(t,e){return t}
/**
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
 */const Wr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Xr extends O{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */class Yr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
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
 */class Jr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Zr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Pr.UNAUTHENTICATED)))}shutdown(){}}class ti{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}constructor(t){this.token=t,this.changeListener=null}}class ei{start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Yr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Yr,t.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{qr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(qr("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Yr)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(qr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?($r("string"==typeof e.accessToken),new Jr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return $r(null===t||"string"==typeof t),new Pr(t)}constructor(t){this.t=t,this.currentUser=Pr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class ni{I(){return this.g?this.g():($r(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s,this.type="FirstParty",this.user=Pr.FIRST_PARTY,this.p=new Map}}class si{getToken(){return Promise.resolve(new ni(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(Pr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n,s){this.h=t,this.l=e,this.m=n,this.g=s}}class ri{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ii{start(t,e){const n=t=>{null!=t.error&&qr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,qr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{qr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?s(t):qr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?($r("string"==typeof t.token),this.A=t.token,new ri(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
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
 */class ai{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=oi(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<e&&(n+=t.charAt(s[r]%t.length))}return n}}function ci(t,e){return t<e?-1:t>e?1:0}function ui(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
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
 */
class hi{static now(){return hi.fromMillis(Date.now())}static fromDate(t){return hi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ci(this.nanoseconds,t.nanoseconds):ci(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Xr(Wr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Xr(Wr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Xr(Wr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Xr(Wr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
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
 */class li{static fromTimestamp(t){return new li(t)}static min(){return new li(new hi(0,0))}static max(){return new li(new hi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
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
 */class di{get length(){return this.len}isEqual(t){return 0===di.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof di?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),r=e.get(s);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Hr(),void 0===n?n=t.length-e:n>t.length-e&&Hr(),this.segments=t,this.offset=e,this.len=n}}class fi extends di{construct(t,e,n){return new fi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Xr(Wr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new fi(e)}static emptyPath(){return new fi([])}}const pi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gi extends di{construct(t,e,n){return new gi(t,e,n)}static isValidIdentifier(t){return pi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new gi(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const r=()=>{if(0===n.length)throw new Xr(Wr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new Xr(Wr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Xr(Wr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(i=!i,s++):"."!==e||i?(n+=e,s++):(r(),s++)}if(r(),i)throw new Xr(Wr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gi(e)}static emptyPath(){return new gi([])}}
/**
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
 */class mi{static fromPath(t){return new mi(fi.fromString(t))}static fromName(t){return new mi(fi.fromString(t).popFirst(5))}static empty(){return new mi(fi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===fi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return fi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new mi(new fi(t.slice()))}constructor(t){this.path=t}}
/**
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
 */class yi{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}yi.UNKNOWN_ID=-1;function vi(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=li.fromTimestamp(1e9===s?new hi(n+1,0):new hi(n,s));return new Ei(r,mi.empty(),e)}function wi(t){return new Ei(t.readTime,t.key,-1)}class Ei{static min(){return new Ei(li.min(),mi.empty(),-1)}static max(){return new Ei(li.max(),mi.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function bi(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=mi.comparator(t.documentKey,e.documentKey),0!==n?n:ci(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ii{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
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
 */async function Si(t){if(t.code!==Wr.FAILED_PRECONDITION||t.message!==Ti)throw t;qr("LocalStore","Unexpectedly lost primary lease")}
/**
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
 */class Ci{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Hr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ci(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ci?e:Ci.resolve(e)}catch(t){return Ci.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ci.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ci.reject(e)}static resolve(t){return new Ci(((e,n)=>{e(t)}))}static reject(t){return new Ci(((e,n)=>{n(t)}))}static waitFor(t){return new Ci(((e,n)=>{let s=0,r=0,i=!1;t.forEach((t=>{++s,t.next((()=>{++r,i&&r===s&&e()}),(t=>n(t)))})),i=!0,r===s&&e()}))}static or(t){let e=Ci.resolve(!1);for(const n of t)e=e.next((t=>t?Ci.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}static mapArray(t,e){return new Ci(((n,s)=>{const r=t.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===r&&n(i)}),(t=>s(t)))}}))}static doWhile(t,e){return new Ci(((n,s)=>{const r=()=>{!0===t()?e().next((()=>{r()}),s):n()};r()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
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
 */function Ai(t){return"IndexedDbTransactionError"===t.name}
/**
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
 */
class _i{ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}}_i.at=-1;
/**
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
 */
class Di{constructor(t,e,n,s,r,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ni{static empty(){return new Ni("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ni&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
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
 */function ki(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Li(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ri(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
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
 */function Oi(t){return null==t}function xi(t){return 0===t&&1/t==-1/0}function Mi(t){return"number"==typeof t&&Number.isInteger(t)&&!xi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
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
 */class Fi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw t instanceof DOMException?new Fi("Invalid base64 string: "+t):t}}(t);return new Pi(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Pi(e)}[Vi](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ci(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}Pi.EMPTY_BYTE_STRING=new Pi("");const Ui=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bi(t){if($r(!!t),"string"==typeof t){let e=0;const n=Ui.exec(t);if($r(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ji(t.seconds),nanos:ji(t.nanos)}}function ji(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function qi(t){return"string"==typeof t?Pi.fromBase64String(t):Pi.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zi(t){const e=t.mapValue.fields.__previous_value__;return Ki(e)?zi(e):e}function Gi(t){const e=Bi(t.mapValue.fields.__local_write_time__.timestampValue);return new hi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $i(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ki(t)?4:oo(t)?9007199254740991:10:Hr()}function Qi(t,e){if(t===e)return!0;const n=$i(t);if(n!==$i(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gi(t).isEqual(Gi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Bi(t.timestampValue),s=Bi(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,qi(t.bytesValue).isEqual(qi(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ji(t.geoPointValue.latitude)===ji(e.geoPointValue.latitude)&&ji(t.geoPointValue.longitude)===ji(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ji(t.integerValue)===ji(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ji(t.doubleValue),s=ji(e.doubleValue);return n===s?xi(n)===xi(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return ui(t.arrayValue.values||[],e.arrayValue.values||[],Qi);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(ki(n)!==ki(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!Qi(n[t],s[t])))return!1;return!0}(t,e);default:return Hr()}var s}function Wi(t,e){return void 0!==(t.values||[]).find((t=>Qi(t,e)))}function Xi(t,e){if(t===e)return 0;const n=$i(t),s=$i(e);if(n!==s)return ci(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ci(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ji(t.integerValue||t.doubleValue),s=ji(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return Yi(t.timestampValue,e.timestampValue);case 4:return Yi(Gi(t),Gi(e));case 5:return ci(t.stringValue,e.stringValue);case 6:return function(t,e){const n=qi(t),s=qi(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=ci(n[t],s[t]);if(0!==e)return e}return ci(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ci(ji(t.latitude),ji(e.latitude));return 0!==n?n:ci(ji(t.longitude),ji(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=Xi(n[t],s[t]);if(e)return e}return ci(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Hi.mapValue&&e===Hi.mapValue)return 0;if(t===Hi.mapValue)return 1;if(e===Hi.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),r=e.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let t=0;t<s.length&&t<i.length;++t){const e=ci(s[t],i[t]);if(0!==e)return e;const o=Xi(n[s[t]],r[i[t]]);if(0!==o)return o}return ci(s.length,i.length)}(t.mapValue,e.mapValue);default:throw Hr()}}function Yi(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ci(t,e);const n=Bi(t),s=Bi(e),r=ci(n.seconds,s.seconds);return 0!==r?r:ci(n.nanos,s.nanos)}function Ji(t){return Zi(t)}function Zi(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Bi(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?qi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,mi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=Zi(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const r of e)s?s=!1:n+=",",n+=`${r}:${Zi(t.fields[r])}`;return n+"}"}(t.mapValue):Hr()}function to(t){return!!t&&"integerValue"in t}function eo(t){return!!t&&"arrayValue"in t}function no(t){return!!t&&"nullValue"in t}function so(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ro(t){return!!t&&"mapValue"in t}function io(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Li(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=io(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=io(t.arrayValue.values[n]);return e}return Object.assign({},t)}function oo(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */
class ao{constructor(t,e){this.position=t,this.inclusive=e}}function co(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(s=i.field.isKeyField()?mi.comparator(mi.fromName(o.referenceValue),n.key):Xi(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function uo(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qi(t.position[n],e.position[n]))return!1;return!0}
/**
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
 */class ho{}class lo extends ho{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Eo(t,e,n):"array-contains"===e?new So(t,n):"in"===e?new Co(t,n):"not-in"===e?new Ao(t,n):"array-contains-any"===e?new _o(t,n):new lo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new bo(t,n):new To(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Xi(e,this.value)):null!==e&&$i(this.value)===$i(e)&&this.matchesComparison(Xi(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Hr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class fo extends ho{static create(t,e){return new fo(t,e)}matches(t){return po(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ft||(this.ft=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt((t=>t.isInequality()));return null!==t?t.field:null}dt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}constructor(t,e){super(),this.filters=t,this.op=e,this.ft=null}}function po(t){return"and"===t.op}function go(t){return mo(t)&&po(t)}function mo(t){for(const e of t.filters)if(e instanceof fo)return!1;return!0}function yo(t){if(t instanceof lo)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(go(t))return t.filters.map((t=>yo(t))).join(",");{const e=t.filters.map((t=>yo(t))).join(",");return`${t.op}(${e})`}}function vo(t,e){return t instanceof lo?(n=t,(s=e)instanceof lo&&n.op===s.op&&n.field.isEqual(s.field)&&Qi(n.value,s.value)):t instanceof fo?function(t,e){return e instanceof fo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,s)=>t&&vo(n,e.filters[s])),!0)}(t,e):void Hr();var n,s}function wo(t){return t instanceof lo?`${(e=t).field.canonicalString()} ${e.op} ${Ji(e.value)}`:t instanceof fo?function(t){return t.op.toString()+" {"+t.getFilters().map(wo).join(" ,")+"}"}(t):"Filter";var e}class Eo extends lo{matches(t){const e=mi.comparator(t.key,this.key);return this.matchesComparison(e)}constructor(t,e,n){super(t,e,n),this.key=mi.fromName(n.referenceValue)}}class bo extends lo{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Io("in",e)}}class To extends lo{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Io("not-in",e)}}function Io(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>mi.fromName(t.referenceValue)))}class So extends lo{matches(t){const e=t.data.field(this.field);return eo(e)&&Wi(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Co extends lo{matches(t){const e=t.data.field(this.field);return null!==e&&Wi(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Ao extends lo{matches(t){if(Wi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Wi(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class _o extends lo{matches(t){const e=t.data.field(this.field);return!(!eo(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Wi(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}
/**
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
 */class Do{constructor(t,e="asc"){this.field=t,this.dir=e}}function No(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
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
 */class ko{insert(t,e){return new ko(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ro.BLACK,null,null))}remove(t){return new ko(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ro.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Lo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Lo(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||Ro.EMPTY}}class Lo{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&s&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class Ro{copy(t,e,n,s,r){return new Ro(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const r=n(t,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===r?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ro.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return Ro.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ro.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ro.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Hr();if(this.right.isRed())throw Hr();const t=this.left.check();if(t!==this.right.check())throw Hr();return t+(this.isRed()?0:1)}constructor(t,e,n,s,r){this.key=t,this.value=e,this.color=null!=n?n:Ro.RED,this.left=null!=s?s:Ro.EMPTY,this.right=null!=r?r:Ro.EMPTY,this.size=this.left.size+1+this.right.size}}Ro.EMPTY=null,Ro.RED=!0,Ro.BLACK=!1,Ro.EMPTY=new class{get key(){throw Hr()}get value(){throw Hr()}get color(){throw Hr()}get left(){throw Hr()}get right(){throw Hr()}copy(t,e,n,s,r){return this}insert(t,e,n){return new Ro(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
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
 */
class Oo{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xo(this.data.getIterator())}getIteratorFrom(t){return new xo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Oo))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Oo(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new ko(this.comparator)}}class xo{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mo{static empty(){return new Mo([])}unionWith(t){let e=new Oo(gi.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Mo(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ui(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(gi.comparator)}}
/**
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
 */class Fo{static empty(){return new Fo({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ro(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=io(e)}setAll(t){let e=gi.emptyPath(),n={},s=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=r.popLast()}t?n[r.lastSegment()]=io(t):s.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,s)}delete(t){const e=this.field(t.popLast());ro(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Qi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];ro(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){Li(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Fo(io(this.value))}constructor(t){this.value=t}}function Vo(t){const e=[];return Li(t.fields,((t,n)=>{const s=new gi([t]);if(ro(n)){const t=Vo(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new Mo(e)
/**
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
 */}class Po{static newInvalidDocument(t){return new Po(t,0,li.min(),li.min(),li.min(),Fo.empty(),0)}static newFoundDocument(t,e,n,s){return new Po(t,1,e,li.min(),n,s,0)}static newNoDocument(t,e){return new Po(t,2,e,li.min(),li.min(),Fo.empty(),0)}static newUnknownDocument(t,e){return new Po(t,3,e,li.min(),li.min(),Fo.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(li.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Fo.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Fo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=li.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Po&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Po(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,s,r,i,o){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}}
/**
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
 */class Uo{constructor(t,e=null,n=[],s=[],r=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this._t=null}}function Bo(t,e=null,n=[],s=[],r=null,i=null,o=null){return new Uo(t,e,n,s,r,i,o)}function jo(t){const e=Qr(t);if(null===e._t){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>yo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Oi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ji(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ji(t))).join(",")),e._t=t}return e._t}function qo(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!No(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vo(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uo(t.startAt,e.startAt)&&uo(t.endAt,e.endAt)}function Ko(t){return mi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
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
 */
class zo{constructor(t,e=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Go(t,e,n,s,r,i,o,a){return new zo(t,e,n,s,r,i,o,a)}function Ho(t){return new zo(t)}function $o(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Qo(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wo(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function Xo(t){return null!==t.collectionGroup}function Yo(t){const e=Qr(t);if(null===e.wt){e.wt=[];const t=Wo(e),n=Qo(e);if(null!==t&&null===n)t.isKeyField()||e.wt.push(new Do(t)),e.wt.push(new Do(gi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.wt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Do(gi.keyField(),t))}}}return e.wt}function Jo(t){const e=Qr(t);if(!e.gt)if("F"===e.limitType)e.gt=Bo(e.path,e.collectionGroup,Yo(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Yo(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Do(n.field,e))}const n=e.endAt?new ao(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new ao(e.startAt.position,e.startAt.inclusive):null;e.gt=Bo(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.gt}function Zo(t,e,n){return new zo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ta(t,e){return qo(Jo(t),Jo(e))&&t.limitType===e.limitType}function ea(t){return`${jo(Jo(t))}|lt:${t.limitType}`}function na(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>wo(t))).join(", ")}]`),Oi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ji(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ji(t))).join(",")),`Target(${e})`}(Jo(t))}; limitType=${t.limitType})`}function sa(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):mi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Yo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=co(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,Yo(n),s)||n.endAt&&!function(t,e,n){const s=co(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,Yo(n),s)));var n,s}function ra(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ia(t){return(e,n)=>{let s=!1;for(const r of Yo(t)){const t=oa(r,e,n);if(0!==t)return t;s=s||r.field.isKeyField()}return 0}}function oa(t,e,n){const s=t.field.isKeyField()?mi.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),r=n.data.field(t);return null!==s&&null!==r?Xi(s,r):Hr()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return Hr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xi(e)?"-0":e}}function ca(t){return{integerValue:""+t}}function ua(t,e){return Mi(e)?ca(e):aa(t,e)}
/**
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
 */class ha{constructor(){this._=void 0}}function la(t,e,n){return t instanceof pa?ga(t,e):t instanceof ma?ya(t,e):n}function da(t,e){var n,s;return t instanceof va?to(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null}class fa extends ha{}class pa extends ha{constructor(t){super(),this.elements=t}}function ga(t,e){const n=Ea(e);for(const e of t.elements)n.some((t=>Qi(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ma extends ha{constructor(t){super(),this.elements=t}}function ya(t,e){let n=Ea(e);for(const e of t.elements)n=n.filter((t=>!Qi(t,e)));return{arrayValue:{values:n}}}class va extends ha{constructor(t,e){super(),this.Tt=t,this.It=e}}function wa(t){return ji(t.integerValue||t.doubleValue)}function Ea(t){return eo(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
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
 */class ba{constructor(t,e){this.version=t,this.transformResults=e}}class Ta{static none(){return new Ta}static exists(t){return new Ta(void 0,t)}static updateTime(t){return new Ta(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Ia(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Sa{}function Ca(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ma(t.key,Ta.none()):new ka(t.key,t.data,Ta.none());{const n=t.data,s=Fo.empty();let r=new Oo(gi.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?s.delete(t):s.set(t,e),r=r.add(t)}return new La(t.key,s,new Mo(r.toArray()),Ta.none())}}function Aa(t,e,n){var s;t instanceof ka?function(t,e,n){const s=t.value.clone(),r=Oa(t.fieldTransforms,e,n.transformResults);s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof La?function(t,e,n){if(!Ia(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Oa(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Ra(t)),r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function _a(t,e,n,s){return t instanceof ka?function(t,e,n,s){if(!Ia(t.precondition,e))return n;const r=t.value.clone(),i=xa(t.fieldTransforms,s,e);return r.setAll(i),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,s):t instanceof La?function(t,e,n,s){if(!Ia(t.precondition,e))return n;const r=xa(t.fieldTransforms,s,e),i=e.data;return i.setAll(Ra(t)),i.setAll(r),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,s):(r=e,i=n,Ia(t.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):i);var r,i}function Da(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),r=da(s.transform,t||null);null!=r&&(null===n&&(n=Fo.empty()),n.set(s.field,r))}return n||null}function Na(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&ui(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof pa&&s instanceof pa||n instanceof ma&&s instanceof ma?ui(n.elements,s.elements,Qi):n instanceof va&&s instanceof va?Qi(n.It,s.It):n instanceof fa&&s instanceof fa);var n,s}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,s}class ka extends Sa{getFieldMask(){return null}constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class La extends Sa{getFieldMask(){return this.fieldMask}constructor(t,e,n,s,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}}function Ra(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Oa(t,e,n){const s=new Map;$r(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,la(o,a,n[r]))}return s}function xa(t,e,n){const s=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);s.set(a.field,(i=c,o=e,(r=t)instanceof fa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,i):r instanceof pa?ga(r,i):r instanceof ma?ya(r,i):function(t,e){const n=da(t,e),s=wa(n)+wa(t.It);return to(n)&&to(t.It)?ca(s):aa(t.Tt,s)}(r,i)))}var r,i,o;return s}class Ma extends Sa{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Fa extends Sa{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
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
 */class Va{constructor(t){this.count=t}}
/**
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
 */var Pa,Ua;function Ba(t){switch(t){default:return Hr();case Wr.CANCELLED:case Wr.UNKNOWN:case Wr.DEADLINE_EXCEEDED:case Wr.RESOURCE_EXHAUSTED:case Wr.INTERNAL:case Wr.UNAVAILABLE:case Wr.UNAUTHENTICATED:return!1;case Wr.INVALID_ARGUMENT:case Wr.NOT_FOUND:case Wr.ALREADY_EXISTS:case Wr.PERMISSION_DENIED:case Wr.FAILED_PRECONDITION:case Wr.ABORTED:case Wr.OUT_OF_RANGE:case Wr.UNIMPLEMENTED:case Wr.DATA_LOSS:return!0}}function ja(t){if(void 0===t)return Kr("GRPC error has no .code"),Wr.UNKNOWN;switch(t){case Pa.OK:return Wr.OK;case Pa.CANCELLED:return Wr.CANCELLED;case Pa.UNKNOWN:return Wr.UNKNOWN;case Pa.DEADLINE_EXCEEDED:return Wr.DEADLINE_EXCEEDED;case Pa.RESOURCE_EXHAUSTED:return Wr.RESOURCE_EXHAUSTED;case Pa.INTERNAL:return Wr.INTERNAL;case Pa.UNAVAILABLE:return Wr.UNAVAILABLE;case Pa.UNAUTHENTICATED:return Wr.UNAUTHENTICATED;case Pa.INVALID_ARGUMENT:return Wr.INVALID_ARGUMENT;case Pa.NOT_FOUND:return Wr.NOT_FOUND;case Pa.ALREADY_EXISTS:return Wr.ALREADY_EXISTS;case Pa.PERMISSION_DENIED:return Wr.PERMISSION_DENIED;case Pa.FAILED_PRECONDITION:return Wr.FAILED_PRECONDITION;case Pa.ABORTED:return Wr.ABORTED;case Pa.OUT_OF_RANGE:return Wr.OUT_OF_RANGE;case Pa.UNIMPLEMENTED:return Wr.UNIMPLEMENTED;case Pa.DATA_LOSS:return Wr.DATA_LOSS;default:return Hr()}}(Ua=Pa||(Pa={}))[Ua.OK=0]="OK",Ua[Ua.CANCELLED=1]="CANCELLED",Ua[Ua.UNKNOWN=2]="UNKNOWN",Ua[Ua.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ua[Ua.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ua[Ua.NOT_FOUND=5]="NOT_FOUND",Ua[Ua.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ua[Ua.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ua[Ua.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ua[Ua.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ua[Ua.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ua[Ua.ABORTED=10]="ABORTED",Ua[Ua.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ua[Ua.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ua[Ua.INTERNAL=13]="INTERNAL",Ua[Ua.UNAVAILABLE=14]="UNAVAILABLE",Ua[Ua.DATA_LOSS=15]="DATA_LOSS";
/**
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
 */
class qa{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Li(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return Ri(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
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
 */const Ka=new ko(mi.comparator);function za(){return Ka}const Ga=new ko(mi.comparator);function Ha(...t){let e=Ga;for(const n of t)e=e.insert(n.key,n);return e}function $a(t){let e=Ga;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Qa(){return Xa()}function Wa(){return Xa()}function Xa(){return new qa((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ya=new ko(mi.comparator),Ja=new Oo(mi.comparator);function Za(...t){let e=Ja;for(const n of t)e=e.add(n);return e}const tc=new Oo(ci);function ec(){return tc}
/**
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
 */class nc{static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,sc.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new nc(li.min(),s,ec(),za(),Za())}constructor(t,e,n,s,r){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}}class sc{static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new sc(n,e,Za(),Za(),Za())}constructor(t,e,n,s,r){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}}
/**
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
 */class rc{constructor(t,e,n,s){this.Et=t,this.removedTargetIds=e,this.key=n,this.At=s}}class ic{constructor(t,e){this.targetId=t,this.Rt=e}}class oc{constructor(t,e,n=Pi.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class ac{get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return 0!==this.bt}get Ct(){return this.St}xt(t){t.approximateByteSize()>0&&(this.St=!0,this.Pt=t)}Nt(){let t=Za(),e=Za(),n=Za();return this.vt.forEach(((s,r)=>{switch(r){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:Hr()}})),new sc(this.Pt,this.Vt,t,e,n)}kt(){this.St=!1,this.vt=hc()}Ot(t,e){this.St=!0,this.vt=this.vt.insert(t,e)}Mt(t){this.St=!0,this.vt=this.vt.remove(t)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}constructor(){this.bt=0,this.vt=hc(),this.Pt=Pi.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}}class cc{Qt(t){for(const e of t.Et)t.At&&t.At.isFoundDocument()?this.jt(e,t.At):this.zt(e,t.key,t.At);for(const e of t.removedTargetIds)this.zt(e,t.key,t.At)}Wt(t){this.forEachTarget(t,(e=>{const n=this.Ht(e);switch(t.state){case 0:this.Jt(e)&&n.xt(t.resumeToken);break;case 1:n.$t(),n.Dt||n.kt(),n.xt(t.resumeToken);break;case 2:n.$t(),n.Dt||this.removeTarget(e);break;case 3:this.Jt(e)&&(n.Bt(),n.xt(t.resumeToken));break;case 4:this.Jt(e)&&(this.Yt(e),n.xt(t.resumeToken));break;default:Hr()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qt.forEach(((t,n)=>{this.Jt(n)&&e(n)}))}Zt(t){const e=t.targetId,n=t.Rt.count,s=this.Xt(e);if(s){const t=s.target;if(Ko(t))if(0===n){const n=new mi(t.path);this.zt(e,n,Po.newNoDocument(n,li.min()))}else $r(1===n);else this.te(e)!==n&&(this.Yt(e),this.Gt=this.Gt.add(e))}}ee(t){const e=new Map;this.qt.forEach(((n,s)=>{const r=this.Xt(s);if(r){if(n.current&&Ko(r.target)){const e=new mi(r.target.path);null!==this.Ut.get(e)||this.ne(s,e)||this.zt(s,e,Po.newNoDocument(e,t))}n.Ct&&(e.set(s,n.Nt()),n.kt())}}));let n=Za();this.Kt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.Xt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.Ut.forEach(((e,n)=>n.setReadTime(t)));const s=new nc(t,e,this.Gt,this.Ut,n);return this.Ut=za(),this.Kt=uc(),this.Gt=new Oo(ci),s}jt(t,e){if(!this.Jt(t))return;const n=this.ne(t,e.key)?2:0;this.Ht(t).Ot(e.key,n),this.Ut=this.Ut.insert(e.key,e),this.Kt=this.Kt.insert(e.key,this.se(e.key).add(t))}zt(t,e,n){if(!this.Jt(t))return;const s=this.Ht(t);this.ne(t,e)?s.Ot(e,1):s.Mt(e),this.Kt=this.Kt.insert(e,this.se(e).delete(t)),n&&(this.Ut=this.Ut.insert(e,n))}removeTarget(t){this.qt.delete(t)}te(t){const e=this.Ht(t).Nt();return this.Lt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ft(t){this.Ht(t).Ft()}Ht(t){let e=this.qt.get(t);return e||(e=new ac,this.qt.set(t,e)),e}se(t){let e=this.Kt.get(t);return e||(e=new Oo(ci),this.Kt=this.Kt.insert(t,e)),e}Jt(t){const e=null!==this.Xt(t);return e||qr("WatchChangeAggregator","Detected inactive target",t),e}Xt(t){const e=this.qt.get(t);return e&&e.Dt?null:this.Lt.ie(t)}Yt(t){this.qt.set(t,new ac),this.Lt.getRemoteKeysForTarget(t).forEach((e=>{this.zt(t,e,null)}))}ne(t,e){return this.Lt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Lt=t,this.qt=new Map,this.Ut=za(),this.Kt=uc(),this.Gt=new Oo(ci)}}function uc(){return new ko(mi.comparator)}function hc(){return new ko(mi.comparator)}
/**
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
 */const lc={asc:"ASCENDING",desc:"DESCENDING"},dc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fc={and:"AND",or:"OR"};class pc{constructor(t,e){this.databaseId=t,this.yt=e}}function gc(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mc(t,e){return t.yt?e.toBase64():e.toUint8Array()}function yc(t,e){return gc(t,e.toTimestamp())}function vc(t){return $r(!!t),li.fromTimestamp(function(t){const e=Bi(t);return new hi(e.seconds,e.nanos)}(t))}function wc(t,e){return(n=t,new fi(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Ec(t){const e=fi.fromString(t);return $r(Uc(e)),e}function bc(t,e){return wc(t.databaseId,e.path)}function Tc(t,e){const n=Ec(e);if(n.get(1)!==t.databaseId.projectId)throw new Xr(Wr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Xr(Wr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new mi(Ac(n))}function Ic(t,e){return wc(t.databaseId,e)}function Sc(t){const e=Ec(t);return 4===e.length?fi.emptyPath():Ac(e)}function Cc(t){return new fi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ac(t){return $r(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function _c(t,e,n){return{name:bc(t,e),fields:n.value.mapValue.fields}}function Dc(t,e){let n;if(e instanceof ka)n={update:_c(t,e.key,e.value)};else if(e instanceof Ma)n={delete:bc(t,e.key)};else if(e instanceof La)n={update:_c(t,e.key,e.data),updateMask:Pc(e.fieldMask)};else{if(!(e instanceof Fa))return Hr();n={verify:bc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof fa)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof pa)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ma)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof va)return{fieldPath:e.field.canonicalString(),increment:n.It};throw Hr()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(r=e.precondition).updateTime?{updateTime:yc(s,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Hr())),n;var s,r}function Nc(t,e){return{documents:[Ic(t,e.path)]}}function kc(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=Ic(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Ic(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(t){if(0!==t.length)return Vc(fo.create(t,"and"))}(e.filters);r&&(n.structuredQuery.where=r);const i=function(t){if(0!==t.length)return t.map((t=>{return{field:Mc((e=t).field),direction:Oc(e.dir)};var e}))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=(a=t,c=e.limit,a.yt||Oi(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Lc(t){let e=Sc(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){$r(1===s);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=function(t){const e=Rc(t);return e instanceof fo&&go(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Do(Fc((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Oi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ao(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ao(n,e)}(n.endAt)),Go(e,r,o,i,a,"F",c,u)}function Rc(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Fc(t.unaryFilter.field);return lo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Fc(t.unaryFilter.field);return lo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Fc(t.unaryFilter.field);return lo.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Fc(t.unaryFilter.field);return lo.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Hr()}}(t):void 0!==t.fieldFilter?(n=t,lo.create(Fc(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Hr()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?(e=t,fo.create(e.compositeFilter.filters.map((t=>Rc(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Hr()}}(e.compositeFilter.op))):Hr();var e,n}function Oc(t){return lc[t]}function xc(t){return dc[t]}function Mc(t){return{fieldPath:t.canonicalString()}}function Fc(t){return gi.fromServerFormat(t.fieldPath)}function Vc(t){return t instanceof lo?function(t){if("=="===t.op){if(so(t.value))return{unaryFilter:{field:Mc(t.field),op:"IS_NAN"}};if(no(t.value))return{unaryFilter:{field:Mc(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(so(t.value))return{unaryFilter:{field:Mc(t.field),op:"IS_NOT_NAN"}};if(no(t.value))return{unaryFilter:{field:Mc(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mc(t.field),op:xc(t.op),value:t.value}}}(t):t instanceof fo?function(t){const e=t.getFilters().map((t=>Vc(t)));return 1===e.length?e[0]:{compositeFilter:{op:(n=t.op,fc[n]),filters:e}};var n}(t):Hr()}function Pc(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Uc(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
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
 */const Bc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],jc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],qc=jc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
class Kc{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Aa(s,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=_a(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=_a(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Wa();return this.mutations.forEach((s=>{const r=t.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=e.has(s.key)?null:o;const a=Ca(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(li.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Za())}isEqual(t){return this.batchId===t.batchId&&ui(this.mutations,t.mutations,((t,e)=>Na(t,e)))&&ui(this.baseMutations,t.baseMutations,((t,e)=>Na(t,e)))}constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}}class zc{static from(t,e,n){$r(t.mutations.length===n.length);let s=Ya;const r=t.mutations;for(let t=0;t<r.length;t++)s=s.insert(r[t].key,n[t].version);return new zc(t,e,n,s)}constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}}
/**
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
 */class Gc{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
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
 */class Hc{withSequenceNumber(t){return new Hc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Hc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Hc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,s,r=li.min(),i=li.min(),o=Pi.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}}
/**
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
 */class $c{constructor(t){this.oe=t}}function Qc(t){const e=Lc({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Zo(e,e.limit,"L"):e}
/**
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
 */class Wc{ae(t,e){this.he(t,e),e.le()}he(t,e){if("nullValue"in t)this.fe(e,5);else if("booleanValue"in t)this.fe(e,10),e.de(t.booleanValue?1:0);else if("integerValue"in t)this.fe(e,15),e.de(ji(t.integerValue));else if("doubleValue"in t){const n=ji(t.doubleValue);isNaN(n)?this.fe(e,13):(this.fe(e,15),xi(n)?e.de(0):e.de(n))}else if("timestampValue"in t){const n=t.timestampValue;this.fe(e,20),"string"==typeof n?e._e(n):(e._e(`${n.seconds||""}`),e.de(n.nanos||0))}else if("stringValue"in t)this.we(t.stringValue,e),this.me(e);else if("bytesValue"in t)this.fe(e,30),e.ge(qi(t.bytesValue)),this.me(e);else if("referenceValue"in t)this.ye(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.fe(e,45),e.de(n.latitude||0),e.de(n.longitude||0)}else"mapValue"in t?oo(t)?this.fe(e,Number.MAX_SAFE_INTEGER):(this.pe(t.mapValue,e),this.me(e)):"arrayValue"in t?(this.Ie(t.arrayValue,e),this.me(e)):Hr()}we(t,e){this.fe(e,25),this.Te(t,e)}Te(t,e){e._e(t)}pe(t,e){const n=t.fields||{};this.fe(e,55);for(const t of Object.keys(n))this.we(t,e),this.he(n[t],e)}Ie(t,e){const n=t.values||[];this.fe(e,50);for(const t of n)this.he(t,e)}ye(t,e){this.fe(e,37),mi.fromName(t).path.forEach((t=>{this.fe(e,60),this.Te(t,e)}))}fe(t,e){t.de(e)}me(t){t.de(2)}constructor(){}}Wc.Ee=new Wc;
/**
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
 */
class Xc{addToCollectionParentIndex(t,e){return this.Ze.add(e),Ci.resolve()}getCollectionParents(t,e){return Ci.resolve(this.Ze.getEntries(e))}addFieldIndex(t,e){return Ci.resolve()}deleteFieldIndex(t,e){return Ci.resolve()}getDocumentsMatchingTarget(t,e){return Ci.resolve(null)}getIndexType(t,e){return Ci.resolve(0)}getFieldIndexes(t,e){return Ci.resolve([])}getNextCollectionGroupToUpdate(t){return Ci.resolve(null)}getMinOffset(t,e){return Ci.resolve(Ei.min())}getMinOffsetFromCollectionGroup(t,e){return Ci.resolve(Ei.min())}updateCollectionGroup(t,e,n){return Ci.resolve()}updateIndexEntries(t,e){return Ci.resolve()}constructor(){this.Ze=new Yc}}class Yc{add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Oo(fi.comparator),r=!s.has(n);return this.index[e]=s.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Oo(fi.comparator)).toArray()}constructor(){this.index={}}}
/**
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
 */new Uint8Array(0);class Jc{static withCacheSize(t){return new Jc(t,Jc.DEFAULT_COLLECTION_PERCENTILE,Jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */Jc.DEFAULT_COLLECTION_PERCENTILE=10,Jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Jc.DEFAULT=new Jc(41943040,Jc.DEFAULT_COLLECTION_PERCENTILE,Jc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Jc.DISABLED=new Jc(-1,0,0);
/**
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
 */
class Zc{next(){return this.Pn+=2,this.Pn}static Vn(){return new Zc(0)}static Sn(){return new Zc(-1)}constructor(t){this.Pn=t}}
/**
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
 */
/**
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
 */
class tu{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Po.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ci.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new qa((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
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
 */
/**
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
 */
/**
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
 */
class eu{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
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
 */class nu{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((s=>(n=s,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&_a(n.mutation,t,Mo.empty(),hi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Za()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Za()){const s=Qa();return this.populateOverlays(t,s,e).next((()=>this.computeViews(t,e,s,n).next((t=>{let e=Ha();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Qa();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Za())))}populateOverlays(t,e,n){const s=[];return n.forEach((t=>{e.has(t)||s.push(t)})),this.documentOverlayCache.getOverlays(t,s).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,s){let r=za();const i=Xa(),o=Xa();return e.forEach(((t,e)=>{const o=n.get(e.key);s.has(e.key)&&(void 0===o||o.mutation instanceof La)?r=r.insert(e.key,e):void 0!==o?(i.set(e.key,o.mutation.getFieldMask()),_a(o.mutation,e,o.mutation.getFieldMask(),hi.now())):i.set(e.key,Mo.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new eu(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Xa();let s=new ko(((t,e)=>t-e)),r=Za();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Mo.empty();o=r.applyToLocalView(i,o),n.set(t,o);const a=(s.get(r.batchId)||Za()).add(t);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,u=Wa();c.forEach((t=>{if(!r.has(t)){const s=Ca(e.get(t),n.get(t));null!==s&&u.set(t,s),r=r.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Ci.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return s=e,mi.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Xo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var s}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-r.size):Ci.resolve(Qa());let o=-1,a=r;return i.next((e=>Ci.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?Ci.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Za()))).next((t=>({batchId:o,changes:$a(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new mi(e)).next((t=>{let e=Ha();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const s=e.collectionGroup;let r=Ha();return this.indexManager.getCollectionParents(t,s).next((i=>Ci.forEach(i,(i=>{const o=(a=e,c=i.child(s),new zo(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{r=r.insert(t,e)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,e,n){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s)))).next((t=>{s.forEach(((e,n)=>{const s=n.getKey();null===t.get(s)&&(t=t.insert(s,Po.newInvalidDocument(s)))}));let n=Ha();return t.forEach(((t,r)=>{const i=s.get(t);void 0!==i&&_a(i.mutation,r,Mo.empty(),hi.now()),sa(e,r)&&(n=n.insert(t,r))})),n}))}constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{getBundleMetadata(t,e){return Ci.resolve(this.es.get(e))}saveBundleMetadata(t,e){var n;return this.es.set(e.id,{id:(n=e).id,version:n.version,createTime:vc(n.createTime)}),Ci.resolve()}getNamedQuery(t,e){return Ci.resolve(this.ns.get(e))}saveNamedQuery(t,e){return this.ns.set(e.name,{name:(n=e).name,query:Qc(n.bundledQuery),readTime:vc(n.readTime)}),Ci.resolve();var n}constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}}
/**
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
 */class ru{getOverlay(t,e){return Ci.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Qa();return Ci.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.ce(t,e,s)})),Ci.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.ss.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.ss.delete(n)),Ci.resolve()}getOverlaysForCollection(t,e,n){const s=Qa(),r=e.length+1,i=new mi(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===r&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Ci.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let r=new ko(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Qa(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Qa(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Ci.resolve(o)}ce(t,e,n){const s=this.overlays.get(n.key);if(null!==s){const t=this.ss.get(s.largestBatchId).delete(n.key);this.ss.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Gc(e,n));let r=this.ss.get(e);void 0===r&&(r=Za(),this.ss.set(e,r)),this.ss.set(e,r.add(n.key))}constructor(){this.overlays=new ko(mi.comparator),this.ss=new Map}}
/**
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
 */class iu{isEmpty(){return this.rs.isEmpty()}addReference(t,e){const n=new ou(t,e);this.rs=this.rs.add(n),this.us=this.us.add(n)}hs(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.ls(new ou(t,e))}fs(t,e){t.forEach((t=>this.removeReference(t,e)))}ds(t){const e=new mi(new fi([])),n=new ou(e,t),s=new ou(e,t+1),r=[];return this.us.forEachInRange([n,s],(t=>{this.ls(t),r.push(t.key)})),r}_s(){this.rs.forEach((t=>this.ls(t)))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const e=new mi(new fi([])),n=new ou(e,t),s=new ou(e,t+1);let r=Za();return this.us.forEachInRange([n,s],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new ou(t,0),n=this.rs.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.rs=new Oo(ou.os),this.us=new Oo(ou.cs)}}class ou{static os(t,e){return mi.comparator(t.key,e.key)||ci(t.gs,e.gs)}static cs(t,e){return ci(t.gs,e.gs)||mi.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.gs=e}}
/**
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
 */class au{checkEmpty(t){return Ci.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,s){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new Kc(r,e,n,s);this.mutationQueue.push(i);for(const e of s)this.ps=this.ps.add(new ou(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Ci.resolve(i)}lookupMutationBatch(t,e){return Ci.resolve(this.Is(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Ts(n),r=s<0?0:s;return Ci.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Ci.resolve(0===this.mutationQueue.length?-1:this.ys-1)}getAllMutationBatches(t){return Ci.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ou(e,0),s=new ou(e,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([n,s],(t=>{const e=this.Is(t.gs);r.push(e)})),Ci.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Oo(ci);return e.forEach((t=>{const e=new ou(t,0),s=new ou(t,Number.POSITIVE_INFINITY);this.ps.forEachInRange([e,s],(t=>{n=n.add(t.gs)}))})),Ci.resolve(this.Es(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let r=n;mi.isDocumentKey(r)||(r=r.child(""));const i=new ou(new mi(r),0);let o=new Oo(ci);return this.ps.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.gs)),!0)}),i),Ci.resolve(this.Es(o))}Es(t){const e=[];return t.forEach((t=>{const n=this.Is(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){$r(0===this.As(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ps;return Ci.forEach(e.mutations,(s=>{const r=new ou(s.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.ps=n}))}bn(t){}containsKey(t,e){const n=new ou(e,0),s=this.ps.firstAfterOrEqual(n);return Ci.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ci.resolve()}As(t,e){return this.Ts(t)}Ts(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Is(t){const e=this.Ts(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ys=1,this.ps=new Oo(ou.os)}}
/**
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
 */class cu{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),r=s?s.size:0,i=this.Rs(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ci.resolve(n?n.document.mutableCopy():Po.newInvalidDocument(e))}getEntries(t,e){let n=za();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Po.newInvalidDocument(t))})),Ci.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let r=za();const i=e.path,o=new mi(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!i.isPrefixOf(t.path))break;t.path.length>i.length+1||bi(wi(o),n)<=0||(s.has(o.key)||sa(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Ci.resolve(r)}getAllFromCollectionGroup(t,e,n,s){Hr()}bs(t,e){return Ci.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new uu(this)}getSize(t){return Ci.resolve(this.size)}constructor(t){this.Rs=t,this.docs=new ko(mi.comparator),this.size=0}}class uu extends tu{applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Xn.addEntry(t,s)):this.Xn.removeEntry(n)})),Ci.waitFor(e)}getFromCache(t,e){return this.Xn.getEntry(t,e)}getAllFromCache(t,e){return this.Xn.getEntries(t,e)}constructor(t){super(),this.Xn=t}}
/**
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
 */class hu{forEachTarget(t,e){return this.vs.forEach(((t,n)=>e(n))),Ci.resolve()}getLastRemoteSnapshotVersion(t){return Ci.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ci.resolve(this.Ps)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),Ci.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ps&&(this.Ps=e),Ci.resolve()}xn(t){this.vs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ss=new Zc(e),this.highestTargetId=e),t.sequenceNumber>this.Ps&&(this.Ps=t.sequenceNumber)}addTargetData(t,e){return this.xn(e),this.targetCount+=1,Ci.resolve()}updateTargetData(t,e){return this.xn(e),Ci.resolve()}removeTargetData(t,e){return this.vs.delete(e.target),this.Vs.ds(e.targetId),this.targetCount-=1,Ci.resolve()}removeTargets(t,e,n){let s=0;const r=[];return this.vs.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.vs.delete(i),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Ci.waitFor(r).next((()=>s))}getTargetCount(t){return Ci.resolve(this.targetCount)}getTargetData(t,e){const n=this.vs.get(e)||null;return Ci.resolve(n)}addMatchingKeys(t,e,n){return this.Vs.hs(e,n),Ci.resolve()}removeMatchingKeys(t,e,n){this.Vs.fs(e,n);const s=this.persistence.referenceDelegate,r=[];return s&&e.forEach((e=>{r.push(s.markPotentiallyOrphaned(t,e))})),Ci.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Vs.ds(e),Ci.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Vs.ws(e);return Ci.resolve(n)}containsKey(t,e){return Ci.resolve(this.Vs.containsKey(e))}constructor(t){this.persistence=t,this.vs=new qa((t=>jo(t)),qo),this.lastRemoteSnapshotVersion=li.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new iu,this.targetCount=0,this.Ss=Zc.Vn()}}
/**
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
 */class lu{start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ru,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Ds[t.toKey()];return n||(n=new au(e,this.referenceDelegate),this.Ds[t.toKey()]=n),n}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(t,e,n){qr("MemoryPersistence","Starting transaction:",t);const s=new du(this.Cs.next());return this.referenceDelegate.Ms(),n(s).next((t=>this.referenceDelegate.Fs(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}$s(t,e){return Ci.or(Object.values(this.Ds).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Ds={},this.overlays={},this.Cs=new _i(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new hu(this),this.indexManager=new Xc,this.remoteDocumentCache=new cu((t=>this.referenceDelegate.ks(t))),this.Tt=new $c(e),this.Os=new su(this.Tt)}}class du extends Ii{constructor(t){super(),this.currentSequenceNumber=t}}class fu{static qs(t){return new fu(t)}get Us(){if(this.Ls)return this.Ls;throw Hr()}addReference(t,e,n){return this.Bs.addReference(n,e),this.Us.delete(n.toString()),Ci.resolve()}removeReference(t,e,n){return this.Bs.removeReference(n,e),this.Us.add(n.toString()),Ci.resolve()}markPotentiallyOrphaned(t,e){return this.Us.add(e.toString()),Ci.resolve()}removeTarget(t,e){this.Bs.ds(e.targetId).forEach((t=>this.Us.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Us.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ms(){this.Ls=new Set}Fs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ci.forEach(this.Us,(n=>{const s=mi.fromPath(n);return this.Ks(t,s).next((t=>{t||e.removeEntry(s,li.min())}))})).next((()=>(this.Ls=null,e.apply(t))))}updateLimboDocument(t,e){return this.Ks(t,e).next((t=>{t?this.Us.delete(e.toString()):this.Us.add(e.toString())}))}ks(t){return 0}Ks(t,e){return Ci.or([()=>Ci.resolve(this.Bs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.$s(t,e)])}constructor(t){this.persistence=t,this.Bs=new iu,this.Ls=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
class pu{static Ni(t,e){let n=Za(),s=Za();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new pu(t,e.fromCache,n,s)}constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Ci=n,this.xi=s}}
/**
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
 */class gu{initialize(t,e){this.Oi=t,this.indexManager=e,this.ki=!0}getDocumentsMatchingQuery(t,e,n,s){return this.Mi(t,e).next((r=>r||this.Fi(t,e,s,n))).next((n=>n||this.$i(t,e)))}Mi(t,e){if($o(e))return Ci.resolve(null);let n=Jo(e);return this.indexManager.getIndexType(t,n).next((s=>0===s?null:(null!==e.limit&&1===s&&(e=Zo(e,null,"F"),n=Jo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((s=>{const r=Za(...s);return this.Oi.getDocuments(t,r).next((s=>this.indexManager.getMinOffset(t,n).next((n=>{const i=this.Bi(e,s);return this.Li(e,i,r,n.readTime)?this.Mi(t,Zo(e,null,"F")):this.qi(t,i,e,n)}))))})))))}Fi(t,e,n,s){return $o(e)||s.isEqual(li.min())?this.$i(t,e):this.Oi.getDocuments(t,n).next((r=>{const i=this.Bi(e,r);return this.Li(e,i,n,s)?this.$i(t,e):(jr()<=K.DEBUG&&qr("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),na(e)),this.qi(t,i,e,vi(s,-1)))}))}Bi(t,e){let n=new Oo(ia(t));return e.forEach(((e,s)=>{sa(t,s)&&(n=n.add(s))})),n}Li(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}$i(t,e){return jr()<=K.DEBUG&&qr("QueryEngine","Using full collection scan to execute query:",na(e)),this.Oi.getDocumentsMatchingQuery(t,e,Ei.min())}qi(t,e,n,s){return this.Oi.getDocumentsMatchingQuery(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.ki=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new nu(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ki)))}constructor(t,e,n,s){this.persistence=t,this.Ui=e,this.Tt=s,this.Ki=new ko(ci),this.Gi=new qa((t=>jo(t)),qo),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.Os=t.getBundleCache(),this.zi(n)}}function yu(t,e,n,s){return new mu(t,e,n,s)}async function vu(t,e){const n=Qr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.mutationQueue.getAllMutationBatches(t).next((r=>(s=r,n.zi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],i=[];let o=Za();for(const t of s){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Wi:t,removedBatchIds:r,addedBatchIds:i})))}))}))}function wu(t){const e=Qr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Ns.getLastRemoteSnapshotVersion(t)))}function Eu(t,e,n){let s=Za(),r=Za();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=za();return n.forEach(((n,i)=>{const o=t.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(li.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):qr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{Hi:s,Ji:r}}))}function bu(t,e){const n=Qr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Tu(t,e){const n=Qr(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.Ns.getTargetData(t,e).next((r=>r?(s=r,Ci.resolve(s)):n.Ns.allocateTargetId(t).next((r=>(s=new Hc(e,r,0,t.currentSequenceNumber),n.Ns.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.Ki.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(t.targetId,t),n.Gi.set(e,t.targetId)),t}))}async function Iu(t,e,n){const s=Qr(t),r=s.Ki.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(t=>s.persistence.referenceDelegate.removeTarget(t,r)))}catch(t){if(!Ai(t))throw t;qr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Su(t,e,n){const s=Qr(t);let r=li.min(),i=Za();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=Qr(t),r=s.Gi.get(n);return void 0!==r?Ci.resolve(s.Ki.get(r)):s.Ns.getTargetData(e,n)}(s,t,Jo(e)).next((e=>{if(e)return r=e.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(t,e.targetId).next((t=>{i=t}))})).next((()=>s.Ui.getDocumentsMatchingQuery(t,e,n?r:li.min(),n?i:Za()))).next((t=>(Cu(s,ra(e),t),{documents:t,Yi:i})))))}function Cu(t,e,n){let s=t.Qi.get(e)||li.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.Qi.set(e,s)}class Au{sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=ec()}}class _u{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,e,n){this.Kr[t]=e}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Au,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Ur=new Au,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
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
 */class Du{Gr(t){}shutdown(){}}
/**
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
 */class Nu{Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){qr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){qr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */class Lu{Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}}
/**
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
 */class Ru extends class{get ho(){return!1}lo(t,e,n,s,r){const i=this.fo(t,e);qr("RestConnection","Sending: ",i,n);const o={};return this._o(o,s,r),this.wo(t,i,o,n).then((t=>(qr("RestConnection","Received: ",t),t)),(e=>{throw zr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}mo(t,e,n,s,r,i){return this.lo(t,e,n,s,r)}_o(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ur,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}fo(t,e){const n=ku[t];return`${this.co}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.co=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{wo(t,e,n,s){return new Promise(((r,i)=>{const o=new Vr;o.setWithCredentials(!0),o.listenOnce(Rr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Lr.NO_ERROR:const e=o.getResponseJson();qr("Connection","XHR received:",JSON.stringify(e)),r(e);break;case Lr.TIMEOUT:qr("Connection",'RPC "'+t+'" timed out'),i(new Xr(Wr.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const n=o.getStatus();if(qr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Wr).indexOf(e)>=0?e:Wr.UNKNOWN}(e.status);i(new Xr(t,e.message))}else i(new Xr(Wr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Xr(Wr.UNAVAILABLE,"Connection failed."));break;default:Hr()}}finally{qr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}yo(t,e,n){const s=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Nr(),i=kr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Mr({})),this._o(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=s.join("");qr("Connection","Creating WebChannel: "+a,o);const c=r.createWebChannel(a,o);let u=!1,h=!1;const l=new Lu({Yr:t=>{h?qr("Connection","Not sending because WebChannel is closed:",t):(u||(qr("Connection","Opening WebChannel transport."),c.open(),u=!0),qr("Connection","WebChannel sending:",t),c.send(t))},Zr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Fr.EventType.OPEN,(()=>{h||qr("Connection","WebChannel transport opened.")})),d(c,Fr.EventType.CLOSE,(()=>{h||(h=!0,qr("Connection","WebChannel transport closed"),l.oo())})),d(c,Fr.EventType.ERROR,(t=>{h||(h=!0,zr("Connection","WebChannel transport errored:",t),l.oo(new Xr(Wr.UNAVAILABLE,"The operation could not be completed")))})),d(c,Fr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];$r(!!n);const s=n,r=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(r){qr("Connection","WebChannel received error:",r);const t=r.status;let e=function(t){const e=Pa[t];if(void 0!==e)return ja(e)}(t),n=r.message;void 0===e&&(e=Wr.INTERNAL,n="Unknown error status: "+t+" with message "+r.message),h=!0,l.oo(new Xr(e,n)),c.close()}else qr("Connection","WebChannel received:",n),l.uo(n)}})),d(i,Or.STAT_EVENT,(t=>{t.stat===xr.PROXY?qr("Connection","Detected buffering proxy"):t.stat===xr.NOPROXY&&qr("Connection","Detected no buffering proxy")})),setTimeout((()=>{l.ro()}),0),l}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t){return new pc(t,!0)}
/**
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
 */class Mu{reset(){this.Eo=0}bo(){this.Eo=this.To}vo(t){this.cancel();const e=Math.floor(this.Eo+this.Po()),n=Math.max(0,Date.now()-this.Ro),s=Math.max(0,e-n);s>0&&qr("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Eo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,s,(()=>(this.Ro=Date.now(),t()))),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){null!==this.Ao&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){null!==this.Ao&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}constructor(t,e,n=1e3,s=1.5,r=6e4){this.Ys=t,this.timerId=e,this.po=n,this.Io=s,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}}
/**
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
 */class Fu{Oo(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&null===this.xo&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,(()=>this.Lo())))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,e){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,4!==t?this.ko.reset():e&&e.code===Wr.RESOURCE_EXHAUSTED?(Kr(e.toString()),Kr("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):e&&e.code===Wr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(e)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),e=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Co===e&&this.jo(t,n)}),(e=>{t((()=>{const t=new Xr(Wr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.zo(t)}))}))}jo(t,e){const n=this.Qo(this.Co);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.no((t=>{n((()=>this.zo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Fo(){this.state=5,this.ko.vo((async()=>{this.state=0,this.start()}))}zo(t){return qr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return e=>{this.Ys.enqueueAndForget((()=>this.Co===t?e():(qr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,s,r,i,o,a){this.Ys=t,this.So=n,this.Do=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Mu(t,e)}}class Vu extends Fu{Wo(t,e){return this.connection.yo("Listen",t,e)}onMessage(t){this.ko.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:Hr(),i=e.targetChange.targetIds||[],o=function(t,e){return t.yt?($r(void 0===e||"string"==typeof e),Pi.fromBase64String(e||"")):($r(void 0===e||e instanceof Uint8Array),Pi.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?Wr.UNKNOWN:ja(t.code);return new Xr(e,t.message||"")}(a);n=new oc(r,i,o,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Tc(t,s.document.name),i=vc(s.document.updateTime),o=s.document.createTime?vc(s.document.createTime):li.min(),a=new Fo({mapValue:{fields:s.document.fields}}),c=Po.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new rc(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Tc(t,s.document),i=s.readTime?vc(s.readTime):li.min(),o=Po.newNoDocument(r,i),a=s.removedTargetIds||[];n=new rc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Tc(t,s.document),i=s.removedTargetIds||[];n=new rc([],i,r,null)}else{if(!("filter"in e))return Hr();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,r=new Va(s),i=t.targetId;n=new ic(i,r)}}var s;return n}(this.Tt,t),n=function(t){if(!("targetChange"in t))return li.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?li.min():e.readTime?vc(e.readTime):li.min()}(t);return this.listener.Ho(e,n)}Jo(t){const e={};e.database=Cc(this.Tt),e.addTarget=function(t,e){let n;const s=e.target;return n=Ko(s)?{documents:Nc(t,s)}:{query:kc(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=mc(t,e.resumeToken):e.snapshotVersion.compareTo(li.min())>0&&(n.readTime=gc(t,e.snapshotVersion.toTimestamp())),n}(this.Tt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Hr()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.Tt,t);n&&(e.labels=n),this.qo(e)}Yo(t){const e={};e.database=Cc(this.Tt),e.removeTarget=t,this.qo(e)}constructor(t,e,n,s,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,i),this.Tt=r}}class Pu extends Fu{get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,e){return this.connection.yo("Write",t,e)}onMessage(t){if($r(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const s=(e=t.writeResults,n=t.commitTime,e&&e.length>0?($r(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?vc(t.updateTime):vc(e);return n.isEqual(li.min())&&(n=vc(e)),new ba(n,t.transformResults||[])}(t,n)))):[]),r=vc(t.commitTime);return this.listener.eu(r,s)}var e,n;return $r(!t.writeResults||0===t.writeResults.length),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=Cc(this.Tt),this.qo(t)}tu(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Dc(this.Tt,t)))};this.qo(e)}constructor(t,e,n,s,r,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,i),this.Tt=r,this.Zo=!1}}
/**
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
 */class Uu extends class{}{ru(){if(this.iu)throw new Xr(Wr.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,e,n){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.lo(t,e,n,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Wr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Xr(Wr.UNKNOWN,t.toString())}))}mo(t,e,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.mo(t,e,n,r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Wr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Xr(Wr.UNKNOWN,t.toString())}))}terminate(){this.iu=!0}constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.Tt=s,this.iu=!1}}class Bu{au(){0===this.ou&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve()))))}fu(t){"Online"===this.state?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,"Online"===t&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Kr(e),this.cu=!1):qr("OnlineStateTracker",e)}du(){null!==this.uu&&(this.uu.cancel(),this.uu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}}
/**
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
 */class ju{constructor(t,e,n,s,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr((t=>{n.enqueueAndForget((async()=>{Xu(this)&&(qr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Qr(t);e.mu.add(4),await Ku(e),e.pu.set("Unknown"),e.mu.delete(4),await qu(e)}(this))}))})),this.pu=new Bu(n,s)}}async function qu(t){if(Xu(t))for(const e of t.gu)await e(!0)}async function Ku(t){for(const e of t.gu)await e(!1)}function zu(t,e){const n=Qr(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Wu(n)?Qu(n):ph(n).Mo()&&Hu(n,e))}function Gu(t,e){const n=Qr(t),s=ph(n);n.wu.delete(e),s.Mo()&&$u(n,e),0===n.wu.size&&(s.Mo()?s.Bo():Xu(n)&&n.pu.set("Unknown"))}function Hu(t,e){t.Iu.Ft(e.targetId),ph(t).Jo(e)}function $u(t,e){t.Iu.Ft(e),ph(t).Yo(e)}function Qu(t){t.Iu=new cc({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),ph(t).start(),t.pu.au()}function Wu(t){return Xu(t)&&!ph(t).Oo()&&t.wu.size>0}function Xu(t){return 0===Qr(t).mu.size}function Yu(t){t.Iu=void 0}async function Ju(t){t.wu.forEach(((e,n)=>{Hu(t,e)}))}async function Zu(t,e){Yu(t),Wu(t)?(t.pu.fu(e),Qu(t)):t.pu.set("Unknown")}async function th(t,e,n){if(t.pu.set("Online"),e instanceof oc&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t.wu.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t.wu.delete(s),t.Iu.removeTarget(s))}(t,e)}catch(n){qr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await eh(t,n)}else if(e instanceof rc?t.Iu.Qt(e):e instanceof ic?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(li.min()))try{const e=await wu(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Iu.ee(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=t.wu.get(s);r&&t.wu.set(s,r.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.wu.get(e);if(!n)return;t.wu.set(e,n.withResumeToken(Pi.EMPTY_BYTE_STRING,n.snapshotVersion)),$u(t,e);const s=new Hc(n.target,e,1,n.sequenceNumber);Hu(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){qr("RemoteStore","Failed to raise snapshot:",e),await eh(t,e)}}async function eh(t,e,n){if(!Ai(e))throw e;t.mu.add(1),await Ku(t),t.pu.set("Offline"),n||(n=()=>wu(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{qr("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await qu(t)}))}function nh(t,e){return e().catch((n=>eh(t,n,e)))}async function sh(t){const e=Qr(t),n=gh(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;rh(e);)try{const t=await bu(e.localStore,s);if(null===t){0===e._u.length&&n.Bo();break}s=t.batchId,ih(e,t)}catch(t){await eh(e,t)}oh(e)&&ah(e)}function rh(t){return Xu(t)&&t._u.length<10}function ih(t,e){t._u.push(e);const n=gh(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function oh(t){return Xu(t)&&!gh(t).Oo()&&t._u.length>0}function ah(t){gh(t).start()}async function ch(t){gh(t).su()}async function uh(t){const e=gh(t);for(const n of t._u)e.tu(n.mutations)}async function hh(t,e,n){const s=t._u.shift(),r=zc.from(s,e,n);await nh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await sh(t)}async function lh(t,e){e&&gh(t).Xo&&await async function(t,e){if(Ba(n=e.code)&&n!==Wr.ABORTED){const n=t._u.shift();gh(t).$o(),await nh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await sh(t)}var n}(t,e),oh(t)&&ah(t)}async function dh(t,e){const n=Qr(t);n.asyncQueue.verifyOperationInProgress(),qr("RemoteStore","RemoteStore received new credentials");const s=Xu(n);n.mu.add(3),await Ku(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await qu(n)}async function fh(t,e){const n=Qr(t);e?(n.mu.delete(2),await qu(n)):e||(n.mu.add(2),await Ku(n),n.pu.set("Unknown"))}function ph(t){return t.Tu||(t.Tu=function(t,e,n){const s=Qr(t);return s.ru(),new Vu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,n)}(t.datastore,t.asyncQueue,{Xr:Ju.bind(null,t),no:Zu.bind(null,t),Ho:th.bind(null,t)}),t.gu.push((async e=>{e?(t.Tu.$o(),Wu(t)?Qu(t):t.pu.set("Unknown")):(await t.Tu.stop(),Yu(t))}))),t.Tu}function gh(t){return t.Eu||(t.Eu=function(t,e,n){const s=Qr(t);return s.ru(),new Pu(e,s.connection,s.authCredentials,s.appCheckCredentials,s.Tt,n)}(t.datastore,t.asyncQueue,{Xr:ch.bind(null,t),no:lh.bind(null,t),nu:uh.bind(null,t),eu:hh.bind(null,t)}),t.gu.push((async e=>{e?(t.Eu.$o(),await sh(t)):(await t.Eu.stop(),t._u.length>0&&(qr("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))}))),t.Eu
/**
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
 */}class mh{static createAndSchedule(t,e,n,s,r){const i=Date.now()+n,o=new mh(t,e,i,s,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Xr(Wr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,s,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new Yr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function yh(t,e){if(Kr("AsyncQueue",`${e}: ${t}`),Ai(t))return new Xr(Wr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
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
 */class vh{static emptySet(t){return new vh(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof vh))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new vh;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||mi.comparator(e.key,n.key):(t,e)=>mi.comparator(t.key,e.key),this.keyedMap=Ha(),this.sortedSet=new ko(this.comparator)}}
/**
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
 */class wh{track(t){const e=t.doc.key,n=this.Au.get(e);n?0!==t.type&&3===n.type?this.Au=this.Au.insert(e,t):3===t.type&&1!==n.type?this.Au=this.Au.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Au=this.Au.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Au=this.Au.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Au=this.Au.remove(e):1===t.type&&2===n.type?this.Au=this.Au.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Au=this.Au.insert(e,{type:2,doc:t.doc}):Hr():this.Au=this.Au.insert(e,t)}Ru(){const t=[];return this.Au.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Au=new ko(mi.comparator)}}class Eh{static fromInitialDocuments(t,e,n,s,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new Eh(t,e,vh.emptySet(e),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ta(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,s,r,i,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}}
/**
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
 */class bh{constructor(){this.bu=void 0,this.listeners=[]}}class Th{constructor(){this.queries=new qa((t=>ea(t)),ta),this.onlineState="Unknown",this.vu=new Set}}async function Ih(t,e){const n=Qr(t),s=e.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new bh),r)try{i.bu=await n.onListen(s)}catch(t){const n=yh(t,`Initialization of query '${na(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,i),i.listeners.push(e),e.Pu(n.onlineState),i.bu&&e.Vu(i.bu)&&_h(n)}async function Sh(t,e){const n=Qr(t),s=e.query;let r=!1;const i=n.queries.get(s);if(i){const t=i.listeners.indexOf(e);t>=0&&(i.listeners.splice(t,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ch(t,e){const n=Qr(t);let s=!1;for(const t of e){const e=t.query,r=n.queries.get(e);if(r){for(const e of r.listeners)e.Vu(t)&&(s=!0);r.bu=t}}s&&_h(n)}function Ah(t,e,n){const s=Qr(t),r=s.queries.get(e);if(r)for(const t of r.listeners)t.onError(n);s.queries.delete(e)}function _h(t){t.vu.forEach((t=>{t.next()}))}class Dh{Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Eh(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Du?this.xu(t)&&(this.Su.next(t),e=!0):this.Nu(t,this.onlineState)&&(this.ku(t),e=!0),this.Cu=t,e}onError(t){this.Su.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,t)&&(this.ku(this.Cu),e=!0),e}Nu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Ou||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}xu(t){if(t.docChanges.length>0)return!0;const e=this.Cu&&this.Cu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ku(t){t=Eh.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Du=!0,this.Su.next(t)}constructor(t,e,n){this.query=t,this.Su=e,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
class Nh{constructor(t){this.key=t}}class kh{constructor(t){this.key=t}}class Lh{get Wu(){return this.Ku}Hu(t,e){const n=e?e.Ju:new wh,s=e?e.zu:this.zu;let r=e?e.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const u=s.get(t),h=sa(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Yu(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.ju(h,a)>0||c&&this.ju(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(i=i.add(h),r=d?r.add(t):r.delete(t)):(i=i.delete(t),r=r.delete(t)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const t="F"===this.query.limitType?i.last():i.first();i=i.delete(t.key),r=r.delete(t.key),n.track({type:1,doc:t})}return{zu:i,Ju:n,Li:o,mutatedKeys:r}}Yu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.zu;this.zu=t.zu,this.mutatedKeys=t.mutatedKeys;const r=t.Ju.Ru();r.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Hr()}};return n(t)-n(e)}(t.type,e.type)||this.ju(t.doc,e.doc))),this.Zu(n);const i=e?this.Xu():[],o=0===this.Qu.size&&this.current?1:0,a=o!==this.Gu;return this.Gu=o,0!==r.length||a?{snapshot:new Eh(this.query,t.zu,s,r,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),tc:i}:{tc:i}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new wh,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(t){return!this.Ku.has(t)&&!!this.zu.has(t)&&!this.zu.get(t).hasLocalMutations}Zu(t){t&&(t.addedDocuments.forEach((t=>this.Ku=this.Ku.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Ku=this.Ku.delete(t))),this.current=t.current)}Xu(){if(!this.current)return[];const t=this.Qu;this.Qu=Za(),this.zu.forEach((t=>{this.ec(t.key)&&(this.Qu=this.Qu.add(t.key))}));const e=[];return t.forEach((t=>{this.Qu.has(t)||e.push(new kh(t))})),this.Qu.forEach((n=>{t.has(n)||e.push(new Nh(n))})),e}nc(t){this.Ku=t.Yi,this.Qu=Za();const e=this.Hu(t.documents);return this.applyChanges(e,!0)}sc(){return Eh.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,0===this.Gu,this.hasCachedResults)}constructor(t,e){this.query=t,this.Ku=e,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=Za(),this.mutatedKeys=Za(),this.ju=ia(t),this.zu=new vh(this.ju)}}class Rh{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Oh{constructor(t){this.key=t,this.ic=!1}}class xh{get isPrimaryClient(){return!0===this.wc}constructor(t,e,n,s,r,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.rc={},this.oc=new qa((t=>ea(t)),ta),this.uc=new Map,this.cc=new Set,this.ac=new ko(mi.comparator),this.hc=new Map,this.lc=new iu,this.fc={},this.dc=new Map,this._c=Zc.Sn(),this.onlineState="Unknown",this.wc=void 0}}async function Mh(t,e){const n=Zh(t);let s,r;const i=n.oc.get(e);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const t=await Tu(n.localStore,Jo(e));n.isPrimaryClient&&zu(n.remoteStore,t);const i=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,r=await Fh(n,e,s,"current"===i,t.resumeToken)}return r}async function Fh(t,e,n,s,r){t.mc=(e,n,s)=>async function(t,e,n,s){let r=e.view.Hu(n);r.Li&&(r=await Su(t.localStore,e.query,!1).then((({documents:t})=>e.view.Hu(t,r))));const i=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(r,t.isPrimaryClient,i);return $h(t,e.targetId,o.tc),o.snapshot}(t,e,n,s);const i=await Su(t.localStore,e,!0),o=new Lh(e,i.Yi),a=o.Hu(i.documents),c=sc.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState,r),u=o.applyChanges(a,t.isPrimaryClient,c);$h(t,n,u.tc);const h=new Rh(e,n,o);return t.oc.set(e,h),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function Vh(t,e){const n=Qr(t),s=n.oc.get(e),r=n.uc.get(s.targetId);if(r.length>1)return n.uc.set(s.targetId,r.filter((t=>!ta(t,e)))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Iu(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Gu(n.remoteStore,s.targetId),Gh(n,s.targetId)})).catch(Si)):(Gh(n,s.targetId),await Iu(n.localStore,s.targetId,!0))}async function Ph(t,e){const n=Qr(t);try{const t=await function(t,e){const n=Qr(t),s=e.snapshotVersion;let r=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const i=n.ji.newChangeBuffer({trackRemovals:!0});r=n.Ki;const o=[];e.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Ns.removeMatchingKeys(t,i.removedDocuments,a).next((()=>n.Ns.addMatchingKeys(t,i.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var h,l,d;e.targetMismatches.has(a)?u=u.withResumeToken(Pi.EMPTY_BYTE_STRING,li.min()).withLastLimboFreeSnapshotVersion(li.min()):i.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(i.resumeToken,s)),r=r.insert(a,u),l=u,d=i,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Ns.updateTargetData(t,u))}));let a=za(),c=Za();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(Eu(t,i,e.documentUpdates).next((t=>{a=t.Hi,c=t.Ji}))),!s.isEqual(li.min())){const e=n.Ns.getLastRemoteSnapshotVersion(t).next((e=>n.Ns.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Ci.waitFor(o).next((()=>i.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ki=r,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.hc.get(e);s&&($r(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.ic=!0:t.modifiedDocuments.size>0?$r(s.ic):t.removedDocuments.size>0&&($r(s.ic),s.ic=!1))})),await Xh(n,t,e)}catch(t){await Si(t)}}function Uh(t,e,n){const s=Qr(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.oc.forEach(((n,s)=>{const r=s.view.Pu(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Qr(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Pu(e)&&(s=!0)})),s&&_h(n)}(s.eventManager,e),t.length&&s.rc.Ho(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Bh(t,e,n){const s=Qr(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.hc.get(e),i=r&&r.key;if(i){let t=new ko(mi.comparator);t=t.insert(i,Po.newNoDocument(i,li.min()));const n=Za().add(i),r=new nc(li.min(),new Map,new Oo(ci),t,n);await Ph(s,r),s.ac=s.ac.remove(i),s.hc.delete(e),Wh(s)}else await Iu(s.localStore,e,!1).then((()=>Gh(s,e,n))).catch(Si)}async function jh(t,e){const n=Qr(t),s=e.batch.batchId;try{const t=await function(t,e){const n=Qr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const r=n.batch,i=r.keys();let o=Ci.resolve();return i.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);$r(null!==i),e.version.compareTo(i)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Za();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(n.localStore,e);zh(n,s,null),Kh(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xh(n,t)}catch(t){await Si(t)}}async function qh(t,e,n){const s=Qr(t);try{const t=await function(t,e){const n=Qr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>($r(null!==e),s=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,s,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,s))).next((()=>n.localDocuments.getDocuments(t,s)))}))}(s.localStore,e);zh(s,e,n),Kh(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xh(s,t)}catch(t){await Si(t)}}function Kh(t,e){(t.dc.get(e)||[]).forEach((t=>{t.resolve()})),t.dc.delete(e)}function zh(t,e,n){const s=Qr(t);let r=s.fc[s.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Gh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.uc.get(e))t.oc.delete(s),n&&t.rc.gc(s,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach((e=>{t.lc.containsKey(e)||Hh(t,e)}))}function Hh(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);null!==n&&(Gu(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Wh(t))}function $h(t,e,n){for(const s of n)s instanceof Nh?(t.lc.addReference(s.key,e),Qh(t,s)):s instanceof kh?(qr("SyncEngine","Document no longer in limbo: "+s.key),t.lc.removeReference(s.key,e),t.lc.containsKey(s.key)||Hh(t,s.key)):Hr()}function Qh(t,e){const n=e.key,s=n.path.canonicalString();t.ac.get(n)||t.cc.has(s)||(qr("SyncEngine","New document in limbo: "+n),t.cc.add(s),Wh(t))}function Wh(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new mi(fi.fromString(e)),s=t._c.next();t.hc.set(s,new Oh(n)),t.ac=t.ac.insert(n,s),zu(t.remoteStore,new Hc(Jo(Ho(n.path)),s,2,_i.at))}}async function Xh(t,e,n){const s=Qr(t),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach(((t,a)=>{o.push(s.mc(a,e,n).then((t=>{if((t||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=pu.Ni(a.targetId,t);i.push(e)}})))})),await Promise.all(o),s.rc.Ho(r),await async function(t,e){const n=Qr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ci.forEach(e,(e=>Ci.forEach(e.Ci,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Ci.forEach(e.xi,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Ai(t))throw t;qr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Ki.get(e),s=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(s);n.Ki=n.Ki.insert(e,r)}}}(s.localStore,i))}async function Yh(t,e){const n=Qr(t);if(!n.currentUser.isEqual(e)){qr("SyncEngine","User change. New user:",e.toKey());const t=await vu(n.localStore,e);n.currentUser=e,(s=n).dc.forEach((t=>{t.forEach((t=>{t.reject(new Xr(Wr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),s.dc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Xh(n,t.Wi)}var s}function Jh(t,e){const n=Qr(t),s=n.hc.get(e);if(s&&s.ic)return Za().add(s.key);{let t=Za();const s=n.uc.get(e);if(!s)return t;for(const e of s){const s=n.oc.get(e);t=t.unionWith(s.view.Wu)}return t}}function Zh(t){const e=Qr(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ph.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jh.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bh.bind(null,e),e.rc.Ho=Ch.bind(null,e.eventManager),e.rc.gc=Ah.bind(null,e.eventManager),e}function tl(t){const e=Qr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jh.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qh.bind(null,e),e}class el{async initialize(t){this.Tt=xu(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,e){return null}Rc(t,e){return null}Ec(t){return yu(this.persistence,new gu,t.initialUser,this.Tt)}Tc(t){return new lu(fu.qs,this.Tt)}Ic(t){return new _u}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class nl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Uh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yh.bind(null,this.syncEngine),await fh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Th}createDatastore(t){const e=xu(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new Ru(s));var s,r,i;return r=t.authCredentials,i=t.appCheckCredentials,new Uu(r,i,n,e)}createRemoteStore(t){var e,n,s,r,i;return e=this.localStore,n=this.datastore,s=t.asyncQueue,r=t=>Uh(this.syncEngine,t,0),i=Nu.C()?new Nu:new Du,new ju(e,n,s,r,i)}createSyncEngine(t,e){return function(t,e,n,s,r,i,o){const a=new xh(t,e,n,s,r,i);return o&&(a.wc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Qr(t);qr("RemoteStore","RemoteStore shutting down."),e.mu.add(5),await Ku(e),e.yu.shutdown(),e.pu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
class sl{next(t){this.observer.next&&this.vc(this.observer.next,t)}error(t){this.observer.error?this.vc(this.observer.error,t):Kr("Uncaught Error in snapshot listener:",t.toString())}Pc(){this.muted=!0}vc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
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
 */
class rl{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Xr(Wr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Yr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=yh(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=Pr.UNAUTHENTICATED,this.clientId=ai.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{qr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(qr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function il(t,e){t.asyncQueue.verifyOperationInProgress(),qr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await vu(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function ol(t,e){t.asyncQueue.verifyOperationInProgress();const n=await al(t);qr("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>dh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>dh(e.remoteStore,n))),t.onlineComponents=e}async function al(t){return t.offlineComponents||(qr("FirestoreClient","Using default OfflineComponentProvider"),await il(t,new el)),t.offlineComponents}async function cl(t){return t.onlineComponents||(qr("FirestoreClient","Using default OnlineComponentProvider"),await ol(t,new nl)),t.onlineComponents}function ul(t){return cl(t).then((t=>t.syncEngine))}async function hl(t){const e=await cl(t),n=e.eventManager;return n.onListen=Mh.bind(null,e.syncEngine),n.onUnlisten=Vh.bind(null,e.syncEngine),n}function ll(t,e,n={}){const s=new Yr;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,r){const i=new sl({next:n=>{e.enqueueAndForget((()=>Sh(t,o))),n.fromCache&&"server"===s.source?r.reject(new Xr(Wr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:t=>r.reject(t)}),o=new Dh(n,i,{includeMetadataChanges:!0,Ou:!0});return Ih(t,o)}(await hl(t),t.asyncQueue,e,n,s))),s.promise}const dl=new Map;
/**
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
 */function fl(t,e,n){if(!n)throw new Xr(Wr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pl(t){if(!mi.isDocumentKey(t))throw new Xr(Wr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function gl(t){if(mi.isDocumentKey(t))throw new Xr(Wr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ml(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Hr()}function yl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Xr(Wr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ml(t);throw new Xr(Wr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Xr(Wr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Xr(Wr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new Xr(Wr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{get app(){if(!this._app)throw new Xr(Wr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Xr(Wr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Zr;switch(t.type){case"gapi":const e=t.client;return new si(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Xr(Wr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=dl.get(t);e&&(qr("ComponentProvider","Removing Datastore"),dl.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vl({}),this._settingsFrozen=!1}}function El(t,e,n,s={}){var r;const i=(t=yl(t,wl))._getSettings();if("firestore.googleapis.com"!==i.host&&i.host!==e&&zr("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let e,n;if("string"==typeof s.mockUserToken)e=s.mockUserToken,n=Pr.MOCK_USER;else{e=L(s.mockUserToken,null===(r=t._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new Xr(Wr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Pr(i)}t._authCredentials=new ti(new Jr(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Il(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bl(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Tl{withConverter(t){return new Tl(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Il extends Tl{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bl(this.firestore,null,new mi(t))}withConverter(t){return new Il(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,Ho(n)),this._path=n,this.type="collection"}}function Sl(t,e,...n){if(t=P(t),fl("collection","path",e),t instanceof wl){const s=fi.fromString(e,...n);return gl(s),new Il(t,null,s)}{if(!(t instanceof bl||t instanceof Il))throw new Xr(Wr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fi.fromString(e,...n));return gl(s),new Il(t.firestore,null,s)}}function Cl(t,e,...n){if(t=P(t),1===arguments.length&&(e=ai.R()),fl("doc","path",e),t instanceof wl){const s=fi.fromString(e,...n);return pl(s),new bl(t,null,new mi(s))}{if(!(t instanceof bl||t instanceof Il))throw new Xr(Wr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(fi.fromString(e,...n));return pl(s),new bl(t.firestore,t instanceof Il?t.converter:null,new mi(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Al{get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const e=Ou();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise((()=>{}));const e=new Yr;return this.Yc((()=>this.Kc&&this.zc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Uc.push(t),this.Zc())))}async Zc(){if(0!==this.Uc.length){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!Ai(t))throw t;qr("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo((()=>this.Zc()))}}Yc(t){const e=this.qc.then((()=>(this.jc=!0,t().catch((t=>{this.Qc=t,this.jc=!1;throw Kr("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.jc=!1,t))))));return this.qc=e,e}enqueueAfterDelay(t,e,n){this.Jc(),this.Wc.indexOf(t)>-1&&(e=0);const s=mh.createAndSchedule(this,t,e,n,(t=>this.Xc(t)));return this.Gc.push(s),s}Jc(){this.Qc&&Hr()}verifyOperationInProgress(){}async ta(){let t;do{t=this.qc,await t}while(t!==this.qc)}ea(t){for(const e of this.Gc)if(e.timerId===t)return!0;return!1}na(t){return this.ta().then((()=>{this.Gc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Gc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ta()}))}sa(t){this.Wc.push(t)}Xc(t){const e=this.Gc.indexOf(t);this.Gc.splice(e,1)}constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Mu(this,"async_queue_retry"),this.Hc=()=>{const t=Ou();t&&qr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const t=Ou();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Hc)}}class _l extends wl{_terminate(){return this._firestoreClient||kl(this),this._firestoreClient.terminate()}constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=new Al,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}}function Dl(t,e){const n="string"==typeof t?t:e||"(default)",s=Et("object"==typeof t?t:St(),"firestore").getImmediate({identifier:n});if(!s._initialized){const t=N("firestore");t&&El(s,...t)}return s}function Nl(t){return t._firestoreClient||kl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function kl(t){var e;const n=t._freezeSettings(),s=(r=t._databaseId,i=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Di(r,i,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var r,i,o,a;t._firestoreClient=new rl(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{static fromBase64String(t){try{return new Ll(Pi.fromBase64String(t))}catch(t){throw new Xr(Wr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ll(Pi.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Xr(Wr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gi(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol{constructor(t){this._methodName=t}}
/**
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
 */class xl{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ci(this._lat,t._lat)||ci(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Xr(Wr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Xr(Wr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
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
 */const Ml=/^__.*__$/;class Fl{toMutation(t,e){return null!==this.fieldMask?new La(t,this.data,this.fieldMask,e,this.fieldTransforms):new ka(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Vl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Hr()}}class Pl{get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new Pl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.oa({path:n,ca:!1});return s.aa(t),s}ha(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.oa({path:n,ca:!1});return s.ia(),s}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return Wl(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(0===t.length)throw this.fa("Document fields must not be empty");if(Vl(this.ra)&&Ml.test(t))throw this.fa('Document fields cannot begin and end with "__"')}constructor(t,e,n,s,r,i){this.settings=t,this.databaseId=e,this.Tt=n,this.ignoreUndefinedProperties=s,void 0===r&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=i||[]}}class Ul{wa(t,e,n,s=!1){return new Pl({ra:t,methodName:e,_a:n,path:gi.emptyPath(),ca:!1,da:s},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.Tt=n||xu(t)}}function Bl(t){const e=t._freezeSettings(),n=xu(t._databaseId);return new Ul(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jl(t,e,n,s,r,i={}){const o=t.wa(i.merge||i.mergeFields?2:0,e,n,r);Gl("Data must be an object, but it was:",o,s);const a=Kl(s,o);let c,u;if(i.merge)c=new Mo(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const s of i.mergeFields){const r=Hl(e,s,n);if(!o.contains(r))throw new Xr(Wr.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Xl(t,r)||t.push(r)}c=new Mo(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new Fl(new Fo(a),c,u)}function ql(t,e){if(zl(t=P(t)))return Gl("Unsupported field value:",e,t),Kl(t,e);if(t instanceof Ol)return function(t,e){if(!Vl(e.ra))throw e.fa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.fa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&4!==e.ra)throw e.fa("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const r of t){let t=ql(r,e.la(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=P(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return ua(e.Tt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hi.fromDate(t);return{timestampValue:gc(e.Tt,n)}}if(t instanceof hi){const n=new hi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:gc(e.Tt,n)}}if(t instanceof xl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ll)return{bytesValue:mc(e.Tt,t._byteString)};if(t instanceof bl){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:wc(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.fa(`Unsupported field value: ${ml(t)}`)}(t,e)}function Kl(t,e){const n={};return Ri(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Li(t,((t,s)=>{const r=ql(s,e.ua(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function zl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hi||t instanceof xl||t instanceof Ll||t instanceof bl||t instanceof Ol)}function Gl(t,e,n){if(!zl(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=ml(n);throw"an object"===s?e.fa(t+" a custom object"):e.fa(t+" "+s)}var s}function Hl(t,e,n){if((e=P(e))instanceof Rl)return e._internalPath;if("string"==typeof e)return Ql(t,e);throw Wl("Field path arguments must be of type string or ",t,!1,void 0,n)}const $l=new RegExp("[~\\*/\\[\\]]");function Ql(t,e,n){if(e.search($l)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rl(...e.split("."))._internalPath}catch(s){throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new Xr(Wr.INVALID_ARGUMENT,a+t+c)}function Xl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{get id(){return this._key.path.lastSegment()}get ref(){return new bl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Jl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Zl("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,s,r){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=r}}class Jl extends Yl{data(){return super.data()}}function Zl(t,e){return"string"==typeof e?Ql(t,e):e instanceof Rl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Xr(Wr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ed{convertValue(t,e="none"){switch($i(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ji(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(qi(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Hr()}}convertObject(t,e){const n={};return Li(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new xl(ji(t.latitude),ji(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=zi(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Gi(t));default:return null}}convertTimestamp(t){const e=Bi(t);return new hi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=fi.fromString(t);$r(Uc(n));const s=new Ni(n.get(1),n.get(3)),r=new mi(n.popFirst(5));return s.isEqual(e)||Kr(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sd{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class rd extends Yl{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new id(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Zl("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,s,r,i){super(t,e,n,s,i),this._firestore=t,this._firestoreImpl=t,this.metadata=r}}class id extends rd{data(t={}){return super.data(t)}}class od{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new id(this._firestore,this._userDataWriter,n.key,n,new sd(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Xr(Wr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const s=new id(t._firestore,t._userDataWriter,n.doc.key,n.doc,new sd(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new id(t._firestore,t._userDataWriter,e.doc.key,e.doc,new sd(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let r=-1,i=-1;return 0!==e.type&&(r=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),i=n.indexOf(e.doc.key)),{type:ad(e.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new sd(s.hasPendingWrites,s.fromCache),this.query=n}}function ad(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Hr()}}class cd extends ed{convertBytes(t){return new Ll(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bl(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function ud(t){t=yl(t,Tl);const e=yl(t.firestore,_l),n=Nl(e),s=new cd(e);return td(t._query),ll(n,t._query).then((n=>new od(e,s,t,n)))}function hd(t,e,n){t=yl(t,bl);const s=yl(t.firestore,_l),r=nd(t.converter,e,n);return ld(s,[jl(Bl(s),"setDoc",t._key,r,null!==t.converter,n).toMutation(t._key,Ta.none())])}function ld(t,e){return function(t,e){const n=new Yr;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=tl(t);try{const t=await function(t,e){const n=Qr(t),s=hi.now(),r=e.reduce(((t,e)=>t.add(e.key)),Za());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=za(),c=Za();return n.ji.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{i=r;const o=[];for(const t of e){const e=Da(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new La(t.key,e,Vo(e.value.mapValue),Ta.exists(!0)))}return n.mutationQueue.addMutationBatch(t,s,o,e)})).next((e=>{o=e;const s=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:$a(i)})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.fc[t.currentUser.toKey()];s||(s=new ko(ci)),s=s.insert(e,n),t.fc[t.currentUser.toKey()]=s}(s,t.batchId,n),await Xh(s,t.changes),await sh(s.remoteStore)}catch(t){const e=yh(t,"Failed to persist write");n.reject(e)}}(await ul(t),e,n))),n.promise}(Nl(t),e)}!function(t,e=!0){Ur="9.17.2",wt(new U("firestore",((t,{instanceIdentifier:n,options:s})=>{const r=t.getProvider("app").getImmediate(),i=new _l(new ei(t.getProvider("auth-internal")),new ii(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Xr(Wr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(t.options.projectId,e)}(r,n),r);return s=Object.assign({useFetchStreams:e},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),Ct("@firebase/firestore","3.8.4",t),Ct("@firebase/firestore","3.8.4","esm2017")}();It({apiKey:"AIzaSyAJ9sYF6zyqecXJQtvm1O0fMvbLQXgTNkI",authDomain:"commandprogectdb.firebaseapp.com",projectId:"commandprogectdb",storageBucket:"commandprogectdb.appspot.com",messagingSenderId:"70907964230",appId:"1:70907964230:web:1e0412f1260d53bf831347",measurementId:"G-X3684P431F"});const dd=Dl();async function fd(t,e){const n=Cl(dd,t,"Document");await hd(n,{DATA:e})}function pd(t){fd("currentUser",{currentUser:t})}E=r("2sH7u");It({apiKey:"AIzaSyAJ9sYF6zyqecXJQtvm1O0fMvbLQXgTNkI",authDomain:"commandprogectdb.firebaseapp.com",projectId:"commandprogectdb",storageBucket:"commandprogectdb.appspot.com",messagingSenderId:"70907964230",appId:"1:70907964230:web:1e0412f1260d53bf831347",measurementId:"G-X3684P431F"});const gd=Dl(),md=document.querySelector(".footer__login-form");document.querySelector("#logoff").addEventListener("click",(async function(t){const e=Sl(gd,"currentUser"),n=await ud(e);let s="";if(n.docs.map((t=>{s=t.data()})),console.log(s.DATA),console.log(s.DATA.currentUser),curUserEmail=s.DATA.currentUser.trim(),""===curUserEmail)return void alert("Good bye! And Welcome back!");{let t=!1;const e=Sl(gd,curUserEmail);(await ud(e)).docs.map((e=>{t=e.data(),curPassword=t.DATA.password})),console.log("ANS: "+t),console.log(t),"object"==typeof t?answer=!0:alert("Something went wrong... Ask our administrator for help."),data={password:curPassword,favorit:(0,E.loadAllFavorites)(),read:(0,b.loadReadStorage)(),theme:localStorage.getItem("theme")},fd(curUserEmail,data),pd(""),alert("Good bye user ( "+email+" )! And Welcome back!")}})),md.addEventListener("submit",(async function(t){t.preventDefault();const e=t.currentTarget.elements,n=e.email.value,s=e.password.value;let r=!1,i=!1;const o=Sl(gd,n);if((await ud(o)).docs.map((t=>{i=t.data()})),console.log("ANS: "+i),console.log(i),"object"==typeof i&&(r=!0),!1===r){if(r=confirm("We haven`t found you. Would you like to register?"),r){let t=prompt("Enter your password:"),e=prompt("Confirm your password:");t.trim()===e.trim()&&(data={password:t,favorite:"",read:"",theme:"light"},await fd(n,data),pd(n),r?alert("You are registered! Welcome!"):alert("Something went wrong... Try later or ask our administrator for help."))}}else{i.DATA.password.trim()===s.trim()?(pd(n),alert("Welcome to our site, user! ( "+n+" )")):alert("The password you have just entered is incorrect. Try again or ask our administrator for help.")}}));
//# sourceMappingURL=read-main.f2ce156f.js.map
