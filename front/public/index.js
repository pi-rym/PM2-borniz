(()=>{var e={551:e=>{e.exports=class{constructor(e,t,n,r,o,s,i){console.log("Creando una fecha"),this.title=e,this.year=t,this.director=n,this.duraction=r,this.genre=o,this.rate=s,this.poster=i}}},788:(e,t,n)=>{n(139);const r=n(472),o=n(517);e.exports=()=>{event.preventDefault();const e=document.getElementsByName("txttitle")[0].value,t=document.getElementsByName("txtyear")[0].value,n=document.getElementsByName("txtDirec")[0].value,s=document.getElementsByName("txtDurac")[0].value,i=document.getElementsByName("txtRate")[0].value,a=document.getElementsByName("txtPoster")[0].value,c=o();if(console.log(`el genero es ${c}`),!(e&&t&&n&&s&&c&&i&&a))throw new Error("Faltan datos");{alert(`los datos se agregaron correctamente ${e}`);let o=document.getElementById("contarinerAddMovie");o.style.display="block",o.style.textAlign="center",console.log(`${a}`),o.innerHTML=`\n    <h2><strong>Se Agrego la pelicula</strong> </h2>\n    <h3 class="pagiletas"><strong>Título: ${e} (${t})</strong></h3>\n    <img src="${a}" class="imagencards" alt="imagen"></img>\n      `,new r;const l={title:e,year:t,director:n,duraction:s,genre:c,rate:i,poster:a},u=JSON.stringify(l);JSON.parse(u),console.log(u),fetch("http://localhost:3000/movies",{method:"POST",headers:{"Content-Type":"application/json "},body:u}).then((e=>e.json())).then((e=>console.log(e)))}}},517:e=>{const t=["Action","Aventure","comedy","Sci - fi","Romance"],n=document.getElementById("opcions");function r(){n.innerHTML="";for(const e of t){const t=document.createElement("input"),r=document.createElement("label");t.type="Checkbox",t.id=e,t.name="Genre[]",t.value=e,r.htmlFor=e,r.textContent=e,n.appendChild(t),n.appendChild(r)}}console.log("se estan creando los genre"),r(),r(),e.exports=function(){const e=document.querySelectorAll('input[name="Genre[]"]');console.log(e);for(const t of e)if(t.checked)return t.classList.add("selected"),!0}},602:(e,t,n)=>{const r=n(828),o=n(472);e.exports=e=>{console.log(`los datos que entran en handler son ${e}`),console.log("Entro en el manejador");const t=document.getElementById("showmovie");t.innerHTML="";const n=new o;e.forEach((e=>{n.createMovie(e)})),console.log(`El director de la película es ${e.title}`),n.getAllMovies().map(r).forEach((e=>t.appendChild(e))),(e=>{console.log(e.getAllMovies())})(n)}},828:e=>{e.exports=({title:e,year:t,director:n,duraction:r,genre:o,rate:s,poster:i})=>{console.log(`Creando la tarjeta en el mapa: ${e}`);const a=document.createElement("div"),c=document.createElement("div");return a.classList.add("containercards"),a.innerHTML=`\n        <h3 class="pagiletas"><strong>Título: ${e} (${t})</strong></h3>\n        <img src="${i}" class="imagencards" alt="imagen"></img>\n    `,console.log(`estamos en map y se esta creadon el contenedor de la pelicula ${e}`),c.innerHTML=`\n        <p><strong class="pagiletas">Director: ${n}</strong></p>\n        <p><strong class="pagiletas">Duración: ${r}</strong></p>\n        <p><strong class="pagiletas">Género: ${o.join(", ")}</strong></p>\n        <p><strong class="pagiletas">Calificación: ${s}</strong></p>\n    `,a.style.border="solid 1px #3A3335",a.style.width="250px",a.style.margin="15px",a.style.paddingLeft="1em",a.appendChild(c),a}},472:(e,t,n)=>{const r=n(551);e.exports=class{constructor(){this.movies=[],console.log("Entrando en el repositorio")}createMovie({title:e,year:t,director:n,duraction:o,genre:s,rate:i,poster:a}){const c=new r(e,t,n,o,s,i,a);this.movies.push(c),console.log(`Se creó la película: ${c.title}`)}getAllMovies(){return console.log("Obteniendo todas las películas"),this.movies}}},139:(e,t,n)=>{"use strict";function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:s}=Object,i=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>i(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,d=l("undefined"),f=c("ArrayBuffer"),p=l("string"),h=l("function"),m=l("number"),g=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==i(e))return!1;const t=s(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),E=c("File"),w=c("Blob"),O=c("FileList"),S=c("URLSearchParams");function v(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let i;for(r=0;r<s;r++)i=o[r],t.call(null,e[i],i,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n.g,T=e=>!d(e)&&e!==A,x=(j="undefined"!=typeof Uint8Array&&s(Uint8Array),e=>j&&e instanceof j);var j;const N=c("HTMLFormElement"),C=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),P=c("RegExp"),B=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};v(n,((n,o)=>{let s;!1!==(s=t(n,o,e))&&(r[o]=s||n)})),Object.defineProperties(e,r)},_="abcdefghijklmnopqrstuvwxyz",L="0123456789",F={DIGIT:L,ALPHA:_,ALPHA_DIGIT:_+_.toUpperCase()+L},D=c("AsyncFunction");var U={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=i(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:g,isPlainObject:y,isUndefined:d,isDate:b,isFile:E,isBlob:w,isRegExp:P,isFunction:h,isStream:e=>g(e)&&h(e.pipe),isURLSearchParams:S,isTypedArray:x,isFileList:O,forEach:v,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const s=t&&R(n,o)||o;y(n[s])&&y(r)?n[s]=e(n[s],r):y(r)?n[s]=e({},r):u(r)?n[s]=r.slice():n[s]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&v(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(v(t,((t,o)=>{n&&h(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&s(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:i,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:N,hasOwnProperty:C,hasOwnProp:C,reduceDescriptors:B,freezeMethods:e=>{B(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:R,global:A,isContextDefined:T,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(g(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return v(e,((e,t)=>{const s=n(e,r+1);!d(s)&&(o[t]=s)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:D,isThenable:e=>e&&(g(e)||h(e))&&h(e.then)&&h(e.catch)};function k(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}U.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:U.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const M=k.prototype,q={};function I(e){return U.isPlainObject(e)||U.isArray(e)}function H(e){return U.endsWith(e,"[]")?e.slice(0,-2):e}function z(e,t,n){return e?e.concat(t).map((function(e,t){return e=H(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(k,q),Object.defineProperty(M,"isAxiosError",{value:!0}),k.from=(e,t,n,r,o,s)=>{const i=Object.create(M);return U.toFlatObject(e,i,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),k.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,s&&Object.assign(i,s),i};const $=U.toFlatObject(U,{},null,(function(e){return/^is[A-Z]/.test(e)}));function J(e,t,n){if(!U.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=U.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!U.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,s=n.dots,i=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&U.isSpecCompliantForm(t);if(!U.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(U.isDate(e))return e.toISOString();if(!a&&U.isBlob(e))throw new k("Blob is not supported. Use a Buffer instead.");return U.isArrayBuffer(e)||U.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(U.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(U.isArray(e)&&function(e){return U.isArray(e)&&!e.some(I)}(e)||(U.isFileList(e)||U.endsWith(n,"[]"))&&(a=U.toArray(e)))return n=H(n),a.forEach((function(e,r){!U.isUndefined(e)&&null!==e&&t.append(!0===i?z([n],r,s):null===i?n:n+"[]",c(e))})),!1;return!!I(e)||(t.append(z(o,n,s),c(e)),!1)}const u=[],d=Object.assign($,{defaultVisitor:l,convertValue:c,isVisitable:I});if(!U.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!U.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),U.forEach(n,(function(n,s){!0===(!(U.isUndefined(n)||null===n)&&o.call(t,n,U.isString(s)?s.trim():s,r,d))&&e(n,r?r.concat(s):[s])})),u.pop()}}(e),t}function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function K(e,t){this._pairs=[],e&&J(e,this,t)}const V=K.prototype;function G(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(e,t,n){if(!t)return e;const r=n&&n.encode||G,o=n&&n.serialize;let s;if(s=o?o(t,n):U.isURLSearchParams(t)?t.toString():new K(t,n).toString(r),s){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}V.append=function(e,t){this._pairs.push([e,t])},V.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Q=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){U.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:K,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const ee="undefined"!=typeof window&&"undefined"!=typeof document,te=(ne="undefined"!=typeof navigator&&navigator.product,ee&&["ReactNative","NativeScript","NS"].indexOf(ne)<0);var ne;const re="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var oe={...Object.freeze({__proto__:null,hasBrowserEnv:ee,hasStandardBrowserWebWorkerEnv:re,hasStandardBrowserEnv:te}),...Y};function se(e){function t(e,n,r,o){let s=e[o++];if("__proto__"===s)return!0;const i=Number.isFinite(+s),a=o>=e.length;return s=!s&&U.isArray(r)?r.length:s,a?(U.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!i):(r[s]&&U.isObject(r[s])||(r[s]=[]),t(e,n,r[s],o)&&U.isArray(r[s])&&(r[s]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let s;for(r=0;r<o;r++)s=n[r],t[s]=e[s];return t}(r[s])),!i)}if(U.isFormData(e)&&U.isFunction(e.entries)){const n={};return U.forEachEntry(e,((e,r)=>{t(function(e){return U.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const ie={transitional:Z,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=U.isObject(e);if(o&&U.isHTMLForm(e)&&(e=new FormData(e)),U.isFormData(e))return r?JSON.stringify(se(e)):e;if(U.isArrayBuffer(e)||U.isBuffer(e)||U.isStream(e)||U.isFile(e)||U.isBlob(e))return e;if(U.isArrayBufferView(e))return e.buffer;if(U.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return J(e,new oe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return oe.isNode&&U.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((s=U.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return J(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(U.isString(e))try{return(0,JSON.parse)(e),U.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||ie.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&U.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw k.from(e,k.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oe.classes.FormData,Blob:oe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};U.forEach(["delete","get","head","post","put","patch"],(e=>{ie.headers[e]={}}));var ae=ie;const ce=U.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),le=Symbol("internals");function ue(e){return e&&String(e).trim().toLowerCase()}function de(e){return!1===e||null==e?e:U.isArray(e)?e.map(de):String(e)}function fe(e,t,n,r,o){return U.isFunction(r)?r.call(this,t,n):(o&&(t=n),U.isString(t)?U.isString(r)?-1!==t.indexOf(r):U.isRegExp(r)?r.test(t):void 0:void 0)}class pe{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ue(t);if(!o)throw new Error("header name must be a non-empty string");const s=U.findKey(r,o);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||t]=de(e))}const s=(e,t)=>U.forEach(e,((e,n)=>o(e,n,t)));return U.isPlainObject(e)||e instanceof this.constructor?s(e,t):U.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?s((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ce[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ue(e)){const n=U.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(U.isFunction(t))return t.call(this,e,n);if(U.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ue(e)){const n=U.findKey(this,e);return!(!n||void 0===this[n]||t&&!fe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ue(e)){const o=U.findKey(n,e);!o||t&&!fe(0,n[o],o,t)||(delete n[o],r=!0)}}return U.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!fe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return U.forEach(this,((r,o)=>{const s=U.findKey(n,o);if(s)return t[s]=de(r),void delete t[o];const i=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();i!==o&&delete t[o],t[i]=de(r),n[i]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return U.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&U.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[le]=this[le]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ue(e);t[r]||(function(e,t){const n=U.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return U.isArray(e)?e.forEach(r):r(e),this}}pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),U.reduceDescriptors(pe.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),U.freezeMethods(pe);var he=pe;function me(e,t){const n=this||ae,r=t||n,o=he.from(r.headers);let s=r.data;return U.forEach(e,(function(e){s=e.call(n,s,o.normalize(),t?t.status:void 0)})),o.normalize(),s}function ge(e){return!(!e||!e.__CANCEL__)}function ye(e,t,n){k.call(this,null==e?"canceled":e,k.ERR_CANCELED,t,n),this.name="CanceledError"}U.inherits(ye,k,{__CANCEL__:!0});var be=oe.hasStandardBrowserEnv?{write(e,t,n,r,o,s){const i=[e+"="+encodeURIComponent(t)];U.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),U.isString(r)&&i.push("path="+r),U.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function Ee(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var we=oe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=U.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Oe(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,s=0,i=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[i];o||(o=c),n[s]=a,r[s]=c;let u=i,d=0;for(;u!==s;)d+=n[u++],u%=e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const s=o.loaded,i=o.lengthComputable?o.total:void 0,a=s-n,c=r(a);n=s;const l={loaded:s,total:i,progress:i?s/i:void 0,bytes:a,rate:c||void 0,estimated:c&&i&&s<=i?(i-s)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Se={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=he.from(e.headers).normalize();let s,i,{responseType:a,withXSRFToken:c}=e;function l(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}if(U.isFormData(r))if(oe.hasStandardBrowserEnv||oe.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(i=o.getContentType())){const[e,...t]=i?i.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const d=Ee(e.baseURL,e.url);function f(){if(!u)return;const r=he.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new k("Request failed with status code "+n.status,[k.ERR_BAD_REQUEST,k.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),X(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(f)},u.onabort=function(){u&&(n(new k("Request aborted",k.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new k("Network Error",k.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Z;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new k(t,r.clarifyTimeoutError?k.ETIMEDOUT:k.ECONNABORTED,e,u)),u=null},oe.hasStandardBrowserEnv&&(c&&U.isFunction(c)&&(c=c(e)),c||!1!==c&&we(d))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&be.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&U.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),U.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",Oe(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",Oe(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{u&&(n(!t||t.type?new ye(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);p&&-1===oe.protocols.indexOf(p)?n(new k("Unsupported protocol "+p+":",k.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};U.forEach(Se,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const ve=e=>`- ${e}`,Re=e=>U.isFunction(e)||null===e||!1===e;var Ae=e=>{e=U.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let s=0;s<t;s++){let t;if(n=e[s],r=n,!Re(n)&&(r=Se[(t=String(n)).toLowerCase()],void 0===r))throw new k(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+s]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new k("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(ve).join("\n"):" "+ve(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ye(null,e)}function xe(e){return Te(e),e.headers=he.from(e.headers),e.data=me.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ae(e.adapter||ae.adapter)(e).then((function(t){return Te(e),t.data=me.call(e,e.transformResponse,t),t.headers=he.from(t.headers),t}),(function(t){return ge(t)||(Te(e),t&&t.response&&(t.response.data=me.call(e,e.transformResponse,t.response),t.response.headers=he.from(t.response.headers))),Promise.reject(t)}))}const je=e=>e instanceof he?e.toJSON():e;function Ne(e,t){t=t||{};const n={};function r(e,t,n){return U.isPlainObject(e)&&U.isPlainObject(t)?U.merge.call({caseless:n},e,t):U.isPlainObject(t)?U.merge({},t):U.isArray(t)?t.slice():t}function o(e,t,n){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function s(e,t){if(!U.isUndefined(t))return r(void 0,t)}function i(e,t){return U.isUndefined(t)?U.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,s){return s in t?r(n,o):s in e?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(e,t)=>o(je(e),je(t),!0)};return U.forEach(Object.keys(Object.assign({},e,t)),(function(r){const s=c[r]||o,i=s(e[r],t[r],r);U.isUndefined(i)&&s!==a||(n[r]=i)})),n}const Ce={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ce[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Pe={};Ce.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.7] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,s)=>{if(!1===e)throw new k(r(o," has been removed"+(t?" in "+t:"")),k.ERR_DEPRECATED);return t&&!Pe[o]&&(Pe[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,s)}};var Be={assertOptions:function(e,t,n){if("object"!=typeof e)throw new k("options must be an object",k.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const s=r[o],i=t[s];if(i){const t=e[s],n=void 0===t||i(t,s,e);if(!0!==n)throw new k("option "+s+" must be "+n,k.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new k("Unknown option "+s,k.ERR_BAD_OPTION)}},validators:Ce};const _e=Be.validators;class Le{constructor(e){this.defaults=e,this.interceptors={request:new Q,response:new Q}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=Ne(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Be.assertOptions(n,{silentJSONParsing:_e.transitional(_e.boolean),forcedJSONParsing:_e.transitional(_e.boolean),clarifyTimeoutError:_e.transitional(_e.boolean)},!1),null!=r&&(U.isFunction(r)?t.paramsSerializer={serialize:r}:Be.assertOptions(r,{encode:_e.function,serialize:_e.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let s=o&&U.merge(o.common,o[t.method]);o&&U.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=he.concat(s,o);const i=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[xe.bind(this),void 0];for(e.unshift.apply(e,i),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=i.length;let f=t;for(d=0;d<u;){const e=i[d++],t=i[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=xe.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return X(Ee((e=Ne(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}U.forEach(["delete","get","head","options"],(function(e){Le.prototype[e]=function(t,n){return this.request(Ne(n||{},{method:e,url:t,data:(n||{}).data}))}})),U.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Ne(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Le.prototype[e]=t(),Le.prototype[e+"Form"]=t(!0)}));var Fe=Le;class De{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ye(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new De((function(t){e=t})),cancel:e}}}var Ue=De;const ke={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ke).forEach((([e,t])=>{ke[t]=e}));var Me=ke;const qe=function e(t){const n=new Fe(t),o=r(Fe.prototype.request,n);return U.extend(o,Fe.prototype,n,{allOwnKeys:!0}),U.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(Ne(t,n))},o}(ae);qe.Axios=Fe,qe.CanceledError=ye,qe.CancelToken=Ue,qe.isCancel=ge,qe.VERSION="1.6.7",qe.toFormData=J,qe.AxiosError=k,qe.Cancel=qe.CanceledError,qe.all=function(e){return Promise.all(e)},qe.spread=function(e){return function(t){return e.apply(null,t)}},qe.isAxiosError=function(e){return U.isObject(e)&&!0===e.isAxiosError},qe.mergeConfig=Ne,qe.AxiosHeaders=he,qe.formToJSON=e=>se(U.isHTMLForm(e)?new FormData(e):e),qe.getAdapter=Ae,qe.HttpStatusCode=Me,qe.default=qe,e.exports=qe}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{const e=n(602),t=n(139),r=n(788);document.addEventListener("DOMContentLoaded",(function(){(async()=>{console.log("entro en requestMovie");try{const{data:n}=await t("http://localhost:3000/movies");console.log(n),e(n)}catch(e){console.error("No entro")}})()})),document.getElementsByName;const o=document.getElementById("btnAddMovie");console.log("se creo el evento addmovies"),o.addEventListener("click",r),console.log("se esta ejecutando event");const s=document.getElementById("btnClear");console.log("se creo el evento Clear"),s.addEventListener("click",(()=>{console.log("Entramos en clear"),form=document.getElementById("addForm"),location.reload(!0)}))})()})();