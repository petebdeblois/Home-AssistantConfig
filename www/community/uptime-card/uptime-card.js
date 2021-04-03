/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},r=`{{lit-${String(Math.random()).slice(2)}}}`,o=`\x3c!--${r}--\x3e`,i=new RegExp(`${r}|${o}`);class s{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],s=document.createTreeWalker(t.content,133,null,!1);let c=0,d=-1,h=0;const{strings:f,values:{length:p}}=e;for(;h<p;){const e=s.nextNode();if(null!==e){if(d++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let r=0;for(let e=0;e<n;e++)a(t[e].name,"$lit$")&&r++;for(;r-- >0;){const t=f[h],n=u.exec(t)[2],r=n.toLowerCase()+"$lit$",o=e.getAttribute(r);e.removeAttribute(r);const s=o.split(i);this.parts.push({type:"attribute",index:d,name:n,strings:s}),h+=s.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const r=e.parentNode,o=t.split(i),s=o.length-1;for(let t=0;t<s;t++){let n,i=o[t];if(""===i)n=l();else{const e=u.exec(i);null!==e&&a(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}r.insertBefore(n,e),this.parts.push({type:"node",index:++d})}""===o[s]?(r.insertBefore(l(),e),n.push(e)):e.data=o[s],h+=s}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&d!==c||(d++,t.insertBefore(l(),e)),c=d,this.parts.push({type:"node",index:d}),null===e.nextSibling?e.data="":(n.push(e),d--),h++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),h++}}else s.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const a=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},c=e=>-1!==e.index,l=()=>document.createComment(""),u=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function d(e,t){const{element:{content:n},parts:r}=e,o=document.createTreeWalker(n,133,null,!1);let i=f(r),s=r[i],a=-1,c=0;const l=[];let u=null;for(;o.nextNode();){a++;const e=o.currentNode;for(e.previousSibling===u&&(u=null),t.has(e)&&(l.push(e),null===u&&(u=e)),null!==u&&c++;void 0!==s&&s.index===a;)s.index=null!==u?-1:s.index-c,i=f(r,i),s=r[i]}l.forEach(e=>e.parentNode.removeChild(e))}const h=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},f=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(c(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const p=new WeakMap,m=e=>"function"==typeof e&&p.has(e),g={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let i,s=0,a=0,l=o.nextNode();for(;s<r.length;)if(i=r[s],c(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(n.push(l),o.currentNode=l.content),null===(l=o.nextNode())&&(o.currentNode=n.pop(),l=o.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));s++}else this.__parts.push(void 0),s++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),_=` ${r} `;class w{constructor(e,t,n,r){this.strings=e,this.values=t,this.type=n,this.processor=r}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let i=0;i<e;i++){const e=this.strings[i],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const a=u.exec(e);t+=null===a?e+(n?_:o):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==b&&(t=b.createHTML(t)),e.innerHTML=t,e}}class S extends w{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const e=super.getTemplateElement(),t=e.content,n=t.firstChild;return t.removeChild(n),((e,t,n=null,r=null)=>{for(;t!==n;){const n=t.nextSibling;e.insertBefore(t,r),t=n}})(t,n.firstChild),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=e=>null===e||!("object"==typeof e||"function"==typeof e),P=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class N{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new C(this)}_getValue(){const e=this.strings,t=e.length-1,n=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=n[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!P(e))return e}let r="";for(let o=0;o<t;o++){r+=e[o];const t=n[o];if(void 0!==t){const e=t.value;if(x(e)||!P(e))r+="string"==typeof e?e:String(e);else for(const t of e)r+="string"==typeof t?t:String(t)}}return r+=e[t],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||x(e)&&e===this.value||(this.value=e,m(e)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class I{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(l()),this.endNode=e.appendChild(l())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=l()),e.__insert(this.endNode=l())}insertAfterPart(e){e.__insert(this.startNode=l()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(x(e)?e!==this.value&&this.__commitText(e):e instanceof w?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):P(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const n=new v(t,e.processor,this.options),r=n._clone();n.update(e.values),this.__commitNode(r),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,r=0;for(const o of e)n=t[r],void 0===n&&(n=new I(this.options),t.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(t[r-1])),n.setValue(o),n.commit(),r++;r<t.length&&(t.length=r,this.clear(n&&n.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class k{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class E extends N{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends C{}let T=!1;(()=>{try{const e={get capture(){return T=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class A{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;m(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,n=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),r=null!=e&&(null==t||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=D(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const D=e=>e&&(T?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function M(e){let t=j.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},j.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(r);return n=t.keyString.get(o),void 0===n&&(n=new s(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const j=new Map,R=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,n,r){const o=t[0];if("."===o){return new E(e,t.slice(1),n).parts}if("@"===o)return[new A(e,t.slice(1),r.eventContext)];if("?"===o)return[new k(e,t.slice(1),n)];return new N(e,t,n).parts}handleTextExpression(e){return new I(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const B=(e,...t)=>new w(e,t,"html",$),z=(e,...t)=>new S(e,t,"svg",$)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,U=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const L=e=>t=>{const n=U(t.type,e);let o=j.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},j.set(n,o));let i=o.stringsArray.get(t.strings);if(void 0!==i)return i;const a=t.strings.join(r);if(i=o.keyString.get(a),void 0===i){const n=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(n,e),i=new s(t,n),o.keyString.set(a,i)}return o.stringsArray.set(t.strings,i),i},F=["html","svg"],H=new Set,Y=(e,t,n)=>{H.add(e);const r=n?n.element:document.createElement("template"),o=t.querySelectorAll("style"),{length:i}=o;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(r,e);const s=document.createElement("style");for(let e=0;e<i;e++){const t=o[e];t.parentNode.removeChild(t),s.textContent+=t.textContent}(e=>{F.forEach(t=>{const n=j.get(U(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),d(e,n)})})})(e);const a=r.content;n?function(e,t,n=null){const{element:{content:r},parts:o}=e;if(null==n)return void r.appendChild(t);const i=document.createTreeWalker(r,133,null,!1);let s=f(o),a=0,c=-1;for(;i.nextNode();){c++;for(i.currentNode===n&&(a=h(t),n.parentNode.insertBefore(t,n));-1!==s&&o[s].index===c;){if(a>0){for(;-1!==s;)o[s].index+=a,s=f(o,s);return}s=f(o,s)}}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(s,a.firstChild);const e=new Set;e.add(s),d(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},W=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:W};class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const r=this._attributeNameForProperty(n,t);void 0!==r&&(this._attributeToPropertyMap.set(r,n),e.push(r))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);void 0!==r&&Object.defineProperty(this.prototype,e,r)}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const o=this[e];this[t]=r,this.requestUpdateInternal(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||J}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=W){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,r=t.converter||q,o="function"==typeof r?r:r.fromAttribute;return o?o(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,r=t.converter;return(r&&r.toAttribute||q.toAttribute)(e,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=J){const r=this.constructor,o=r._attributeNameForProperty(e,n);if(void 0!==o){const e=r._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(o):this.setAttribute(o,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(e);if(void 0!==r){const e=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,n){let r=!0;if(void 0!==e){const o=this.constructor;n=n||o.getPropertyOptions(e),o._valueHasChanged(this[e],t,n.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}K.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(t){window.customElements.define(e,t)}}})(e,t),Q=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function G(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):Q(e,t)}function X(e){return G({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ee=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol();class ne{constructor(e,t){if(t!==te)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ee?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const re=(e,...t)=>{const n=t.reduce((t,n,r)=>t+(e=>{if(e instanceof ne)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]);return new ne(n,te)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const oe={};class ie extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,n)=>e.reduceRight((e,n)=>Array.isArray(n)?t(n,e):(e.add(n),e),n),n=t(e,new Set),r=[];n.forEach(e=>r.unshift(e)),this._styles=r}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!ee){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ne(String(t),te)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ee?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==oe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return oe}}ie.finalized=!0,ie.render=(e,t,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const o=r.scopeName,i=R.has(t),s=V&&11===t.nodeType&&!!t.host,a=s&&!H.has(o),c=a?document.createDocumentFragment():t;if(((e,t,r)=>{let o=R.get(t);void 0===o&&(n(t,t.firstChild),R.set(t,o=new I(Object.assign({templateFactory:M},r))),o.appendInto(t)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:L(o)},r)),a){const e=R.get(c);R.delete(c);const r=e.value instanceof v?e.value.template:void 0;Y(o,c,r),n(t,t.firstChild),t.appendChild(c),R.set(t,e)}!i&&s&&window.ShadyCSS.styleElement(t.host)};var se=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,ae="[^\\s]+",ce=/\[([^]*?)\]/gm;function le(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n.push(e[r].substr(0,t));return n}var ue=function(e){return function(t,n){var r=n[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return r>-1?r:null}};function de(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++){var i=o[r];for(var s in i)e[s]=i[s]}return e}var he=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],fe=["January","February","March","April","May","June","July","August","September","October","November","December"],pe=le(fe,3),me={dayNamesShort:le(he,3),dayNames:he,monthNamesShort:pe,monthNames:fe,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},ge=de({},me),ye=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ve={D:function(e){return String(e.getDate())},DD:function(e){return ye(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return ye(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return ye(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ye(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ye(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return ye(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return ye(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return ye(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return ye(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return ye(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ye(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ye(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ye(Math.floor(Math.abs(t)/60),2)+":"+ye(Math.abs(t)%60,2)}},be=function(e){return+e-1},_e=[null,"[1-9]\\d?"],we=[null,ae],Se=["isPm",ae,function(e,t){var n=e.toLowerCase();return n===t.amPm[0]?0:n===t.amPm[1]?1:null}],xe=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var n=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?n:-n}return 0}],Pe=(ue("monthNamesShort"),ue("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Ne=function(e,t,n){if(void 0===t&&(t=Pe.default),void 0===n&&(n={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var r=[];t=(t=Pe[t]||t).replace(ce,(function(e,t){return r.push(t),"@@@"}));var o=de(de({},ge),n);return(t=t.replace(se,(function(t){return ve[t](e,o)}))).replace(/@@@/g,(function(){return r.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var Ce=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}();function Ie(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}function ke(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function Ee(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function Oe(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function Te(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}"undefined"==typeof Promise&&require("lie/polyfill");let Ae;const De={},Me=Object.prototype.toString;function je(e){return"boolean"==typeof Ae?Promise.resolve(Ae):function(e){return new Promise((function(t){var n=e.transaction("local-forage-detect-blob-support","readwrite"),r=Ie([""]);n.objectStore("local-forage-detect-blob-support").put(r,"key"),n.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},n.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return Ae=e,Ae}))}function Re(e){var t=De[e.name],n={};n.promise=new Promise((function(e,t){n.resolve=e,n.reject=t})),t.deferredOperations.push(n),t.dbReady?t.dbReady=t.dbReady.then((function(){return n.promise})):t.dbReady=n.promise}function $e(e){var t=De[e.name].deferredOperations.pop();if(t)return t.resolve(),t.promise}function Be(e,t){var n=De[e.name].deferredOperations.pop();if(n)return n.reject(t),n.promise}function ze(e,t){return new Promise((function(n,r){if(De[e.name]=De[e.name]||{forages:[],db:null,dbReady:null,deferredOperations:[]},e.db){if(!t)return n(e.db);Re(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=Ce.open.apply(Ce,o);t&&(i.onupgradeneeded=function(t){var n=i.result;try{n.createObjectStore(e.storeName),t.oldVersion<=1&&n.createObjectStore("local-forage-detect-blob-support")}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),r(i.error)},i.onsuccess=function(){n(i.result),$e(e)}}))}function Ue(e){return ze(e,!1)}function Ve(e){return ze(e,!0)}function Le(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function Fe(e){return Ie([function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}(atob(e.data))],{type:e.type})}function He(e){return e&&e.__local_forage_encoded_blob}function Ye(e){var t=this,n=t._initReady().then((function(){var e=De[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return Ee(n,e,e),n}function qe(e,t,n,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,t);n(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return Promise.resolve().then(()=>{if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),Ve(e)}).then(()=>function(e){Re(e);for(var t=De[e.name],n=t.forages,r=0;r<n.length;r++){const e=n[r];e._dbInfo.db&&(e._dbInfo.db.close(),e._dbInfo.db=null)}return e.db=null,Ue(e).then(t=>(e.db=t,Le(e)?Ve(e):t)).then(r=>{e.db=t.db=r;for(var o=0;o<n.length;o++)n[o]._dbInfo.db=r}).catch(t=>{throw Be(e,t),t})}(e).then((function(){qe(e,t,n,r-1)}))).catch(n);n(o)}}var We={_driver:"asyncStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]=e[r];var o=De[n.name];o||(o={forages:[],db:null,dbReady:null,deferredOperations:[]},De[n.name]=o),o.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=Ye);var i=[];function s(){return Promise.resolve()}for(var a=0;a<o.forages.length;a++){var c=o.forages[a];c!==t&&i.push(c._initReady().catch(s))}var l=o.forages.slice(0);return Promise.all(i).then((function(){return n.db=o.db,Ue(n)})).then((function(e){return n.db=e,Le(n,t._defaultConfig.version)?Ve(n):e})).then((function(e){n.db=o.db=e,t._dbInfo=n;for(var r=0;r<l.length;r++){var i=l[r];i!==t&&(i._dbInfo.db=n.db,i._dbInfo.version=n.version)}}))},_support:function(){try{if(!Ce||!Ce.open)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=new Promise((function(t,r){n.ready().then((function(){qe(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName).openCursor(),a=1;s.onsuccess=function(){var n=s.result;if(n){var r=n.value;He(r)&&(r=Fe(r));var o=e(r,n.key,a++);void 0!==o?t(o):n.continue()}else t()},s.onerror=function(){r(s.error)}}catch(e){r(e)}}))})).catch(r)}));return ke(r,t),r},getItem:function(e,t){var n=this;e=Oe(e);var r=new Promise((function(t,r){n.ready().then((function(){qe(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName).get(e);s.onsuccess=function(){var e=s.result;void 0===e&&(e=null),He(e)&&(e=Fe(e)),t(e)},s.onerror=function(){r(s.error)}}catch(e){r(e)}}))})).catch(r)}));return ke(r,t),r},setItem:function(e,t,n){var r=this;e=Oe(e);var o=new Promise((function(n,o){var i;r.ready().then((function(){return i=r._dbInfo,"[object Blob]"===Me.call(t)?je(i.db).then((function(e){return e?t:(n=t,new Promise((function(e,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");e({__local_forage_encoded_blob:!0,data:r,type:n.type})},r.readAsBinaryString(n)})));var n})):t})).then((function(t){qe(r._dbInfo,"readwrite",(function(i,s){if(i)return o(i);try{var a=s.objectStore(r._dbInfo.storeName);null===t&&(t=void 0);var c=a.put(t,e);s.oncomplete=function(){void 0===t&&(t=null),n(t)},s.onabort=s.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return ke(o,n),o},removeItem:function(e,t){var n=this;e=Oe(e);var r=new Promise((function(t,r){n.ready().then((function(){qe(n._dbInfo,"readwrite",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(s.error)},i.onabort=function(){var e=s.error?s.error:s.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return ke(r,t),r},clear:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){qe(t._dbInfo,"readwrite",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return ke(n,e),n},length:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){qe(t._dbInfo,"readonly",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return ke(n,e),n},key:function(e,t){var n=this,r=new Promise((function(t,r){e<0?t(null):n.ready().then((function(){qe(n._dbInfo,"readonly",(function(o,i){if(o)return r(o);try{var s=i.objectStore(n._dbInfo.storeName),a=!1,c=s.openKeyCursor();c.onsuccess=function(){var n=c.result;n?0===e||a?t(n.key):(a=!0,n.advance(e)):t(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}}))})).catch(r)}));return ke(r,t),r},keys:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){qe(t._dbInfo,"readonly",(function(r,o){if(r)return n(r);try{var i=o.objectStore(t._dbInfo.storeName).openKeyCursor(),s=[];i.onsuccess=function(){var t=i.result;t?(s.push(t.key),t.continue()):e(s)},i.onerror=function(){n(i.error)}}catch(e){n(e)}}))})).catch(n)}));return ke(n,e),n},dropInstance:function(e,t){t=Te.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,o=this;if(e.name){const t=e.name===n.name&&o._dbInfo.db?Promise.resolve(o._dbInfo.db):Ue(e).then(t=>{const n=De[e.name],r=n.forages;n.db=t;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=t;return t});r=e.storeName?t.then(t=>{if(!t.objectStoreNames.contains(e.storeName))return;const n=t.version+1;Re(e);const r=De[e.name],o=r.forages;t.close();for(let e=0;e<o.length;e++){const t=o[e];t._dbInfo.db=null,t._dbInfo.version=n}return new Promise((t,r)=>{const o=Ce.open(e.name,n);o.onerror=e=>{o.result.close(),r(e)},o.onupgradeneeded=()=>{o.result.deleteObjectStore(e.storeName)},o.onsuccess=()=>{const e=o.result;e.close(),t(e)}}).then(e=>{r.db=e;for(let t=0;t<o.length;t++){const n=o[t];n._dbInfo.db=e,$e(n._dbInfo)}}).catch(t=>{throw(Be(e,t)||Promise.resolve()).catch(()=>{}),t})}):t.then(t=>{Re(e);const n=De[e.name],r=n.forages;t.close();for(var o=0;o<r.length;o++){r[o]._dbInfo.db=null}return new Promise((t,n)=>{var r=Ce.deleteDatabase(e.name);r.onerror=r.onblocked=e=>{const t=r.result;t&&t.close(),n(e)},r.onsuccess=()=>{const e=r.result;e&&e.close(),t(e)}}).then(e=>{n.db=e;for(var t=0;t<r.length;t++){$e(r[t]._dbInfo)}}).catch(t=>{throw(Be(e,t)||Promise.resolve()).catch(()=>{}),t})})}else r=Promise.reject("Invalid arguments");return ke(r,t),r}};var Je="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Ke=/^~~local_forage_type~([^~]+)~/,Ze="__lfsc__:".length,Qe=Ze+"arbf".length,Ge=Object.prototype.toString;function Xe(e){var t,n,r,o,i,s=.75*e.length,a=e.length,c=0;"="===e[e.length-1]&&(s--,"="===e[e.length-2]&&s--);var l=new ArrayBuffer(s),u=new Uint8Array(l);for(t=0;t<a;t+=4)n=Je.indexOf(e[t]),r=Je.indexOf(e[t+1]),o=Je.indexOf(e[t+2]),i=Je.indexOf(e[t+3]),u[c++]=n<<2|r>>4,u[c++]=(15&r)<<4|o>>2,u[c++]=(3&o)<<6|63&i;return l}function et(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=Je[n[t]>>2],r+=Je[(3&n[t])<<4|n[t+1]>>4],r+=Je[(15&n[t+1])<<2|n[t+2]>>6],r+=Je[63&n[t+2]];return n.length%3==2?r=r.substring(0,r.length-1)+"=":n.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}var tt={serialize:function(e,t){var n="";if(e&&(n=Ge.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===Ge.call(e.buffer))){var r,o="__lfsc__:";e instanceof ArrayBuffer?(r=e,o+="arbf"):(r=e.buffer,"[object Int8Array]"===n?o+="si08":"[object Uint8Array]"===n?o+="ui08":"[object Uint8ClampedArray]"===n?o+="uic8":"[object Int16Array]"===n?o+="si16":"[object Uint16Array]"===n?o+="ur16":"[object Int32Array]"===n?o+="si32":"[object Uint32Array]"===n?o+="ui32":"[object Float32Array]"===n?o+="fl32":"[object Float64Array]"===n?o+="fl64":t(new Error("Failed to get type for BinaryArray"))),t(o+et(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n="~~local_forage_type~"+e.type+"~"+et(this.result);t("__lfsc__:blob"+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(n){console.error("Couldn't convert value into a JSON string: ",e),t(null,n)}},deserialize:function(e){if("__lfsc__:"!==e.substring(0,Ze))return JSON.parse(e);var t,n=e.substring(Qe),r=e.substring(Ze,Qe);if("blob"===r&&Ke.test(n)){var o=n.match(Ke);t=o[1],n=n.substring(o[0].length)}var i=Xe(n);switch(r){case"arbf":return i;case"blob":return Ie([i],{type:t});case"si08":return new Int8Array(i);case"ui08":return new Uint8Array(i);case"uic8":return new Uint8ClampedArray(i);case"si16":return new Int16Array(i);case"ur16":return new Uint16Array(i);case"si32":return new Int32Array(i);case"ui32":return new Uint32Array(i);case"fl32":return new Float32Array(i);case"fl64":return new Float64Array(i);default:throw new Error("Unkown type: "+r)}},stringToBuffer:Xe,bufferToString:et};function nt(e,t,n,r){e.executeSql(`CREATE TABLE IF NOT EXISTS ${t.storeName} (id INTEGER PRIMARY KEY, key unique, value)`,[],n,r)}function rt(e,t,n,r,o,i){e.executeSql(n,r,o,(function(e,s){s.code===s.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[t.storeName],(function(e,a){a.rows.length?i(e,s):nt(e,t,(function(){e.executeSql(n,r,o,i)}),i)}),i):i(e,s)}),i)}function ot(e,t,n,r){var o=this;e=Oe(e);var i=new Promise((function(i,s){o.ready().then((function(){void 0===t&&(t=null);var a=t,c=o._dbInfo;c.serializer.serialize(t,(function(t,l){l?s(l):c.db.transaction((function(n){rt(n,c,`INSERT OR REPLACE INTO ${c.storeName} (key, value) VALUES (?, ?)`,[e,t],(function(){i(a)}),(function(e,t){s(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(r>0)return void i(ot.apply(o,[e,a,n,r-1]));s(t)}}))}))})).catch(s)}));return ke(i,n),i}function it(e){return new Promise((function(t,n){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(n,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);t({db:e,storeNames:o})}),(function(e,t){n(t)}))}),(function(e){n(e)}))}))}var st={_driver:"webSQLStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new Promise((function(e,r){try{n.db=openDatabase(n.name,String(n.version),n.description,n.size)}catch(e){return r(e)}n.db.transaction((function(o){nt(o,n,(function(){t._dbInfo=n,e()}),(function(e,t){r(t)}))}),r)}));return n.serializer=tt,o},_support:"function"==typeof openDatabase,iterate:function(e,t){var n=this,r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){rt(n,o,"SELECT * FROM "+o.storeName,[],(function(n,r){for(var i=r.rows,s=i.length,a=0;a<s;a++){var c=i.item(a),l=c.value;if(l&&(l=o.serializer.deserialize(l)),void 0!==(l=e(l,c.key,a+1)))return void t(l)}t()}),(function(e,t){r(t)}))}))})).catch(r)}));return ke(r,t),r},getItem:function(e,t){var n=this;e=Oe(e);var r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){rt(n,o,`SELECT * FROM ${o.storeName} WHERE key = ? LIMIT 1`,[e],(function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return ke(r,t),r},setItem:function(e,t,n){return ot.apply(this,[e,t,n,1])},removeItem:function(e,t){var n=this;e=Oe(e);var r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){rt(n,o,`DELETE FROM ${o.storeName} WHERE key = ?`,[e],(function(){t()}),(function(e,t){r(t)}))}))})).catch(r)}));return ke(r,t),r},clear:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){rt(t,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,t){n(t)}))}))})).catch(n)}));return ke(n,e),n},length:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){rt(t,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(t,n){var r=n.rows.item(0).c;e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return ke(n,e),n},key:function(e,t){var n=this,r=new Promise((function(t,r){n.ready().then((function(){var o=n._dbInfo;o.db.transaction((function(n){rt(n,o,`SELECT key FROM ${o.storeName} WHERE id = ? LIMIT 1`,[e+1],(function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)}),(function(e,t){r(t)}))}))})).catch(r)}));return ke(r,t),r},keys:function(e){var t=this,n=new Promise((function(e,n){t.ready().then((function(){var r=t._dbInfo;r.db.transaction((function(t){rt(t,r,"SELECT key FROM "+r.storeName,[],(function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)}),(function(e,t){n(t)}))}))})).catch(n)}));return ke(n,e),n},dropInstance:function(e,t){t=Te.apply(this,arguments);var n=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||n.name,e.storeName=e.storeName||n.storeName);var r,o=this;return ke(r=e.name?new Promise((function(t){var r;r=e.name===n.name?o._dbInfo.db:openDatabase(e.name,"","",0),e.storeName?t({db:r,storeNames:[e.storeName]}):t(it(r))})).then((function(e){return new Promise((function(t,n){e.db.transaction((function(r){function o(e){return new Promise((function(t,n){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){t()}),(function(e,t){n(t)}))}))}for(var i=[],s=0,a=e.storeNames.length;s<a;s++)i.push(o(e.storeNames[s]));Promise.all(i).then((function(){t()})).catch((function(e){n(e)}))}),(function(e){n(e)}))}))})):Promise.reject("Invalid arguments"),t),r}};function at(e,t){var n=e.name+"/";return e.storeName!==t.storeName&&(n+=e.storeName+"/"),n}function ct(){return!function(){try{return localStorage.setItem("_localforage_support_test",!0),localStorage.removeItem("_localforage_support_test"),!1}catch(e){return!0}}()||localStorage.length>0}var lt={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var n in e)t[n]=e[n];return t.keyPrefix=at(e,this._defaultConfig),ct()?(this._dbInfo=t,t.serializer=tt,Promise.resolve()):Promise.reject()},_support:function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}(),iterate:function(e,t){var n=this,r=n.ready().then((function(){for(var t=n._dbInfo,r=t.keyPrefix,o=r.length,i=localStorage.length,s=1,a=0;a<i;a++){var c=localStorage.key(a);if(0===c.indexOf(r)){var l=localStorage.getItem(c);if(l&&(l=t.serializer.deserialize(l)),void 0!==(l=e(l,c.substring(o),s++)))return l}}}));return ke(r,t),r},getItem:function(e,t){var n=this;e=Oe(e);var r=n.ready().then((function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r}));return ke(r,t),r},setItem:function(e,t,n){var r=this;e=Oe(e);var o=r.ready().then((function(){void 0===t&&(t=null);var n=t;return new Promise((function(o,i){var s=r._dbInfo;s.serializer.serialize(t,(function(t,r){if(r)i(r);else try{localStorage.setItem(s.keyPrefix+e,t),o(n)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return ke(o,n),o},removeItem:function(e,t){var n=this;e=Oe(e);var r=n.ready().then((function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return ke(r,t),r},clear:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,n=localStorage.length-1;n>=0;n--){var r=localStorage.key(n);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return ke(n,e),n},length:function(e){var t=this.keys().then((function(e){return e.length}));return ke(t,e),t},key:function(e,t){var n=this,r=n.ready().then((function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t}));return ke(r,t),r},keys:function(e){var t=this,n=t.ready().then((function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r}));return ke(n,e),n},dropInstance:function(e,t){if(t=Te.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var n=this.config();e.name=e.name||n.name,e.storeName=e.storeName||n.storeName}var r,o=this;return ke(r=e.name?new Promise((function(t){e.storeName?t(at(e,o._defaultConfig)):t(e.name+"/")})).then((function(e){for(var t=localStorage.length-1;t>=0;t--){var n=localStorage.key(t);0===n.indexOf(e)&&localStorage.removeItem(n)}})):Promise.reject("Invalid arguments"),t),r}};const ut=(e,t)=>{const n=e.length;let r=0;for(;r<n;){if((o=e[r])===(i=t)||"number"==typeof o&&"number"==typeof i&&isNaN(o)&&isNaN(i))return!0;r++}var o,i;return!1},dt=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},ht={},ft={},pt={INDEXEDDB:We,WEBSQL:st,LOCALSTORAGE:lt},mt=[pt.INDEXEDDB._driver,pt.WEBSQL._driver,pt.LOCALSTORAGE._driver],gt=["dropInstance"],yt=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(gt),vt={description:"",driver:mt.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1};function bt(e,t){e[t]=function(){const n=arguments;return e.ready().then((function(){return e[t].apply(e,n)}))}}function _t(){for(let e=1;e<arguments.length;e++){const t=arguments[e];if(t)for(let e in t)t.hasOwnProperty(e)&&(dt(t[e])?arguments[0][e]=t[e].slice():arguments[0][e]=t[e])}return arguments[0]}class wt{constructor(e){for(let e in pt)if(pt.hasOwnProperty(e)){const t=pt[e],n=t._driver;this[e]=n,ht[n]||this.defineDriver(t)}this._defaultConfig=_t({},vt),this._config=_t({},this._defaultConfig,e),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch(()=>{})}config(e){if("object"==typeof e){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(let t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e)||!e.driver||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config}defineDriver(e,t,n){const r=new Promise((function(t,n){try{const r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void n(o);const i=yt.concat("_initStorage");for(let t=0,r=i.length;t<r;t++){const r=i[t];if((!ut(gt,r)||e[r])&&"function"!=typeof e[r])return void n(o)}(function(){const t=function(e){return function(){const t=new Error(`Method ${e} is not implemented by the current driver`),n=Promise.reject(t);return ke(n,arguments[arguments.length-1]),n}};for(let n=0,r=gt.length;n<r;n++){const r=gt[n];e[r]||(e[r]=t(r))}})();const s=function(n){ht[r]&&console.info("Redefining LocalForage driver: "+r),ht[r]=e,ft[r]=n,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(s,n):s(!!e._support):s(!0)}catch(e){n(e)}}));return Ee(r,t,n),r}driver(){return this._driver||null}getDriver(e,t,n){const r=ht[e]?Promise.resolve(ht[e]):Promise.reject(new Error("Driver not found."));return Ee(r,t,n),r}getSerializer(e){const t=Promise.resolve(tt);return Ee(t,e),t}ready(e){const t=this,n=t._driverSet.then(()=>(null===t._ready&&(t._ready=t._initDriver()),t._ready));return Ee(n,e,e),n}setDriver(e,t,n){const r=this;dt(e)||(e=[e]);const o=this._getSupportedDrivers(e);function i(){r._config.driver=r.driver()}function s(e){return r._extend(e),i(),r._ready=r._initStorage(r._config),r._ready}const a=null!==this._driverSet?this._driverSet.catch(()=>Promise.resolve()):Promise.resolve();return this._driverSet=a.then(()=>{const e=o[0];return r._dbInfo=null,r._ready=null,r.getDriver(e).then(e=>{r._driver=e._driver,i(),r._wrapLibraryMethodsWithReady(),r._initDriver=function(e){return function(){let t=0;return function n(){for(;t<e.length;){let o=e[t];return t++,r._dbInfo=null,r._ready=null,r.getDriver(o).then(s).catch(n)}i();const o=new Error("No available storage method found.");return r._driverSet=Promise.reject(o),r._driverSet}()}}(o)})}).catch(()=>{i();const e=new Error("No available storage method found.");return r._driverSet=Promise.reject(e),r._driverSet}),Ee(this._driverSet,t,n),this._driverSet}supports(e){return!!ft[e]}_extend(e){_t(this,e)}_getSupportedDrivers(e){const t=[];for(let n=0,r=e.length;n<r;n++){const r=e[n];this.supports(r)&&t.push(r)}return t}_wrapLibraryMethodsWithReady(){for(let e=0,t=yt.length;e<t;e++)bt(this,yt[e])}createInstance(e){return new wt(e)}}var St=new wt;const xt={hours_to_show:24,severity:100},Pt={ok:"#45C669",ko:"#C66445",half:"#C6B145",none:"#C9C9C9"},Nt={header:!0,icon:!0,status:!0,timeline:!0,footer:!0},Ct={height:46,round:1,spacing:4,amount:36};let It=class extends ie{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}render(){return this.hass&&this._helpers&&this.options?(this._helpers.importMoreInfoControl("climate"),B`
      <div class="card-config">
        ${Object.entries(this.options).map(e=>this.renderOption(e[0],e[1]))}
      </div>
    `):B``}renderOption(e,t){return B`
      <div class="option" @click=${this._toggleOption} .option=${e}>
        <div class="row">
          <ha-icon .icon=${"mdi:"+t.icon}></ha-icon>
          <div class="title">${t.name}</div>
        </div>
        <div class="secondary">${t.description}</div>
      </div>

      ${t.show?B`
        <div class="values">
          ${t.properties.map(e=>this.renderProperty(e))}
        </div>
      `:""}
    `}renderProperty(e){return"input"==e.type?this.renderInputProperty(e):"number"==e.type?this.renderNumberProperty(e):"dropdown"==e.type?this.renderDropdownProperty(e):"switch"==e.type?this.renderSwitchProperty(e):B``}renderInputProperty(e){return B`
      <paper-input
        label=${e.label}
        .value=${this.getPropertyValue(e)||e.default||""}
        .configValue=${e.name}
        .configSection=${e.section}
        @value-changed=${this._valueChanged}
      ></paper-input>
    `}renderNumberProperty(e){return B`
      <paper-input
        label=${e.label}
        .value=${this.getPropertyValue(e)||e.default||""}
        .configValue=${e.name}
        .configSection=${e.section}
        .number=${!0}
        @value-changed=${this._valueChanged}
      ></paper-input>
    `}renderSwitchProperty(e){return B`
      <br />
      <ha-formfield .label=${e.label}>
        <ha-switch
          .checked=${this.getPropertyValue(e)||e.default||!1}
          .configValue=${e.name}
          .configSection=${e.section}
          @change=${this._valueChanged}
        ></ha-switch>
      </ha-formfield>
    `}renderDropdownProperty(e){var t;return B`
      <paper-dropdown-menu
        label=${e.label}
        .value=${this.getPropertyValue(e)||e.default||""}
        @value-changed=${this._valueChanged}
        .configValue=${e.name}
        .configSection=${e.section}
      >
        <paper-listbox slot="dropdown-content" .selected=${e.items.indexOf((null===(t=this._config)||void 0===t?void 0:t.entity)||"")}>
          ${e.items.map(e=>B`<paper-item>${e}</paper-item>`)}
        </paper-listbox>
      </paper-dropdown-menu>
    `}getPropertyValue(e){if(null==this._config)return;const t=e.section?this._config[e.section]:this._config;return null!=t?t[e.name]:void 0}_initialize(){if(void 0===this.hass)return;if(void 0===this._config)return;if(void 0===this._helpers)return;this._initialized=!0;const e=Object.keys(this.hass.states).filter(e=>"binary_sensor"===e.substr(0,e.indexOf(".")));this.options={mandatory:{icon:"tune",name:"Mandatory",description:"Required options for this card to function",show:!0,properties:[{type:"dropdown",items:e,name:"entity",label:"Entity"}]},customization:{icon:"cog",name:"Global customization",description:"Customize the name, icon, etc",show:!1,properties:[{type:"input",name:"name",label:"Name"},{type:"input",name:"icon",label:"Icon",default:"mdi:heart"},{type:"number",name:"severity",label:"Severity",min:0,max:100,default:xt.severity},{type:"number",name:"hours_to_show",label:"Hours to show",min:1/60,max:8760,default:xt.hours_to_show},{type:"input",name:"ok",label:"Ok status name"},{type:"input",name:"ko",label:"Ko status name"}]},bar:{icon:"chart-bar",name:"Bar customization",description:"Customize the bar style",show:!1,properties:[{type:"number",name:"height",section:"bar",label:"Height",min:4,max:200,default:Ct.height},{type:"number",name:"round",section:"bar",label:"Round corner ratio",min:0,max:100,default:Ct.round},{type:"number",name:"spacing",section:"bar",label:"Spacing",min:0,max:10,default:Ct.spacing},{type:"number",name:"amount",section:"bar",label:"Amount",min:1,max:100,default:Ct.amount}]},color:{icon:"palette",name:"Color customization",description:"Customize the color palette",show:!1,properties:[{type:"input",name:"ok",section:"color",label:"Ok's element color",default:Pt.ok},{type:"input",name:"ko",section:"color",label:"Ko's element color",default:Pt.ko},{type:"input",name:"none",section:"color",label:"Unknown's element color",default:Pt.none},{type:"input",name:"half",section:"color",label:"Half's element color",default:Pt.half}]},show:{icon:"eye",name:"Toggle elements",description:"Show or hide uptime card elements",show:!1,properties:[{type:"switch",name:"header",section:"show",label:"Toggle header",default:Nt.header},{type:"switch",name:"icon",section:"show",label:"Toggle icon",default:Nt.icon},{type:"switch",name:"status",section:"show",label:"Toggle status",default:Nt.status},{type:"switch",name:"timeline",section:"show",label:"Toggle timeline",default:Nt.timeline},{type:"switch",name:"footer",section:"show",label:"Toggle footer",default:Nt.footer}]},alias:{icon:"reload",name:"Alias",description:"Replace status name by alias",show:!1,properties:[{type:"input",name:"ok",section:"alias",label:"Alias for Ok status"},{type:"input",name:"ko",section:"alias",label:"Alias for Ko status"}]}}}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleOption(e){if(null==this.options)return;const t=!this.options[e.target.option].show;for(const[e]of Object.entries(this.options))this.options[e].show=!1;this.options[e.target.option].show=t,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target,n=t.configSection,r=Object.assign({},this._config),o=(n?Object.assign({},r[n]):r)||{};if(t.configValue)if(void 0===t.value&&void 0===t.checked||""===t.value)delete o[t.configValue],this._config=n?Object.assign(Object.assign({},r),{[n]:o}):Object.assign({},o);else{const e=t.configValue,o=void 0!==t.checked?t.checked:t.value,i=t.number?parseFloat(o):o;this._config=n?Object.assign(Object.assign({},r),{[n]:Object.assign(Object.assign({},r[n]),{[e]:i})}):Object.assign(Object.assign({},r),{[e]:i})}!function(e,t,n,r){r=r||{},n=null==n?{}:n;var o=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});o.detail=n,e.dispatchEvent(o)}(this,"config-changed",{config:this._config})}static get styles(){return re`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};e([G({attribute:!1})],It.prototype,"hass",void 0),e([X()],It.prototype,"_config",void 0),e([X()],It.prototype,"_toggle",void 0),e([X()],It.prototype,"_helpers",void 0),e([X()],It.prototype,"options",void 0),It=e([Z("uptime-card-editor")],It);const kt=re`
  :host {
    display: flex;
    flex-direction: column;
  }
  ha-card {
    flex-direction: column;
    flex: 1;
    padding: 16px 0;
    position: relative;
    overflow: hidden;
  }
  ha-card > div {
    padding: 0px 16px 16px 16px;
  }
  ha-card > div:last-child {
    padding-bottom: 0;
  }

  .flex {
    display: flex;
    display: -webkit-flex;
    min-width: 0;
  }

  .header {
    justify-content: space-between;
    padding-bottom: 0px;
  }

  .name > span {
    font-size: 1.2em;
    font-weight: var(--mcg-title-font-weight, 500);
    max-height: 1.4em;
    min-height: 1.4em;
    opacity: .65;
  }

  .icon {
    color: var(--paper-item-icon-color, #44739e);
    display: inline-block;
    flex: 0 0 1.7em;
    text-align: center;
  }

  .icon > ha-icon {
    height: 1.7em;
    width: 1.7em;
  }

  .status {
    padding-bottom: 10px;
  }

  .status > span {
    font-size: 1em;
    font-weight: var(--mcg-title-font-weight, 500);
    max-height: 1em;
    min-height: 1em;
  }

  .timeline {
    padding-top: 2px;
    padding-bottom: 0px;
  }

  .footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .footer-text {
    color: #aaaaaa;
    opacity: 0.6;
  }

  .line {
    background: #aaaaaa;
    opacity: 0.3;
    flex: 1;
    margin: 0.75rem 1rem 0 1rem;
    height: 1px;
  }
`;console.info("%c Uptime card version 0.0.1 ","color: orange; font-weight: bold; background: black"),window.customCards=window.customCards||[],window.customCards.push({type:"uptime-card",name:"Uptime Card",description:"The uptime card show you the history of your binary sensors in a cool way."});let Et=class extends ie{constructor(){super(...arguments),this.updating=!1,this.initialized=!1}static async getConfigElement(){return document.createElement("uptime-card-editor")}static getStubConfig(){return{}}set hass(e){this._hass=e,this.sensor=this._hass.states[this.config.entity],null==this.sensor&&(this.initialized=!1),this.updateData()}setConfig(e){if(!e)throw new Error("Invalid configuration !");this.config=Object.assign(Object.assign(Object.assign({},xt),e),{color:Object.assign(Object.assign({},Pt),e.color),alias:Object.assign({},e.alias),show:Object.assign(Object.assign({},Nt),e.show),bar:Object.assign(Object.assign({},Ct),e.bar),tap_action:{action:"more-info"}}),this.updateData()}shouldUpdate(e){return!!this.config&&function(e,t,n){if(t.has("config")||n)return!0;if(e.config.entity){var r=t.get("hass");return!r||r.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}firstUpdated(e){this.updateData()}connectedCallback(){super.connectedCallback(),this.config.update_interval&&(this.interval=setInterval(()=>this.updateData(),1e3*this.config.update_interval))}disconnectedCallback(){this.interval&&clearInterval(this.interval),super.disconnectedCallback()}async updateData(){if(this.updating=!0,0==this.initialized){if(null==this._hass)return;if(this.sensor=this._hass.states[this.config.entity],null==this.sensor)return}this.initialized=!0;const{entity:e,hours_to_show:t}=this.config,n=await this.getCache(e),r=(new Date).getTime();let o;if(null==n){const e=new Date(this.sensor.last_changed).getTime();o={points:[{x:e,y:this.sensor.state}],lastFetched:r,lastChanged:e,hoursToShow:t}}else{const i=n.hoursToShow<t,s=i?this.getMinimumDate():n.lastFetched,a=await this.fetchRecent(e,new Date(s),new Date),c=i?a:[...n.points,...a],l=c.findIndex(e=>e.x>this.getMinimumDate()),u=0==l?c:c.slice(l-1),d=this.cleanPoints(u);if(d.length>0)o={points:d,lastFetched:r,lastChanged:d[d.length-1].x,hoursToShow:t};else{const e=new Date(this.sensor.last_changed).getTime();o={points:[{x:e,y:this.sensor.state}],lastFetched:r,lastChanged:e,hoursToShow:t}}}await this.setCache(e,o),this.cache=o,this.updating=!1}async getCache(e){const t=await St.getItem(e);return null==t?(console.warn(`Can't load the key ${e} from cache.`),null):(n=t,JSON.parse(n));var n}async setCache(e,t){return St.setItem(e,(n=t,JSON.stringify(n)));var n}isOk(e){const{ok:t,ko:n}=this.config;return t==e||n!=e&&(null!=t||null!=n?null==t||null!=n&&void 0:void 0)}findBarPeriod(e){const{bar:t}=this.config,n=this.getUptimeSize()/t.amount,r=(new Date).getTime()-(t.amount-1-e)*n;return{from:r-n+1,to:r}}findBarRepartition(e){const t=this.cache.points.findIndex(t=>t.x>=e.from),n=this.cache.points.findIndex(t=>t.x>e.to),r={ok:0,ko:0,none:100};let o;if(0==this.cache.points.length)return r;if(-1==t)o=[this.cache.points[this.cache.points.length-1]];else{if(0==t&&0==n)return r;{const e=0==t?0:1,r=-1==n?this.cache.points.length:n;o=this.cache.points.slice(t-e,r)}}const i={ok:0,ko:0,none:0},s=e.to-e.from;for(let t=0;t<o.length;t++){const n=(o[t+1]?o[t+1].x:e.to)-Math.max(o[t].x,e.from);1==this.isOk(o[t].y)?i.ok+=n:0==this.isOk(o[t].y)?i.ko+=n:i.none+=n}const a=i.ok/s*100,c=i.ko/s*100;return{ok:a,ko:c,none:100-(a+c)}}getUptimeSize(){const{hours_to_show:e}=this.config;return 36e5*e}getMinimumDate(){return(new Date).getTime()-this.getUptimeSize()}getColor(e){const{color:t}=this.config;return null==e?t.none:1==this.isOk(e)?t.ok:0==this.isOk(e)?t.ko:t.none}async fetchRecent(e,t,n){let r="history/period";t&&(r+="/"+t.toISOString()),r+="?filter_entity_id="+e,n&&(r+="&end_time="+n.toISOString()),r+="&minimal_response";return(await this._hass.callApi("GET",r))[0].map(e=>({x:new Date(e.last_changed).getTime(),y:e.state}))}cleanPoints(e){const t=[];let n=void 0;for(const r of e)r.y!=n&&(t.push(r),n=r.y);return t}render(){if(0==this.initialized)return B``;const{bar:e}=this.config,t=[...Array(e.amount).keys()].map((e,t)=>{const n=this.findBarPeriod(t);return this.findBarRepartition(n)});return console.log(t),B`
      <ha-card class="flex">
        ${this.renderHeader()}
        ${this.renderState()}
        ${this.renderTimeline(t)}
        ${this.renderFooter(t)}
      </ha-card>
    `}renderHeader(){const{show:e}=this.config;return e.header?B`
      <div class="header flex">
        ${this.renderName()} ${this.renderIcon()}
      </div>
    `:""}renderName(){const{name:e}=this.config;return B`
      <div class="name">
        <span>${e}</span>
      </div>
    `}renderState(){const{alias:e,show:t}=this.config;let n=this.sensor.state;1==this.isOk(this.sensor.state)&&e.ok?n=e.ok:0==this.isOk(this.sensor.state)&&e.ko?n=e.ko:null==this.isOk(this.sensor.state)&&(n="Unknown");const r=`color: ${this.getColor(this.sensor.state)};`;return t.status?B`
      <div class="status">
        <span style=${r}>${n}</span>
      </div>
    `:""}renderIcon(){const{icon:e,show:t}=this.config,n=e||this.sensor.attributes.icon||"mdi:heart";return t.icon?B`
      <div class="icon flex">
        <ha-icon .icon=${n}></ha-icon>
      </div>
    `:""}renderTimeline(e){const{show:t,color:n,bar:r,severity:o}=this.config,i=r.spacing*(r.amount-1),s=Math.floor((500-i)/r.amount),a=500-i-s*r.amount;if(0==t.timeline)return"";const c=e.map((e,t)=>{let i;return i=100==e.none?n.none:100==e.ok?n.ok:e.ko>=o?n.ko:n.half,this.renderBar(t*(s+r.spacing)+a/2,0,s,r.height,i,r.round)});return B`
      <div class="timeline">
        <svg width='100%' height="100%"} viewBox='0 0 ${500} ${r.height}'>
          ${c}
        </svg>
      </div>
    `}renderBar(e,t,n,r,o,i){return z`<rect
      class='bar'
      x=${e}
      y=${t}
      rx=${i}
      ry=${i}
      height=${r}
      width=${n}
      fill=${o}
    ></rect>`}renderFooter(e){const{show:t}=this.config;if(0==t.footer)return"";const n=(e.reduce((e,t)=>e+t.ok,0)/e.length).toFixed(2),r=this.generateMinimalDate();return B`
    <div class="footer">
      <div class="footer-text">${r}</div>
      ${this.renderLine()}
      <div class="footer-text">${n}% uptime</div>
      ${this.renderLine()}
      <div class="footer-text">Now</div>
    </div>`}generateMinimalDate(){const{hours_to_show:e}=this.config;if(0==e)return"Now";if(e%168==0){const t=e/168;return 1==t?t+" week ago":t+" weeks ago"}if(e%24==0){const t=e/24;return 1==t?t+" day ago":t+" days ago"}return 1==e?e+" hour ago":e+" hours ago"}renderLine(){return B`<div class="line"></div>`}_showWarning(e){return B`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),B`
      ${t}
    `}static get styles(){return kt}};e([G({attribute:!1})],Et.prototype,"_hass",void 0),e([X()],Et.prototype,"config",void 0),e([X()],Et.prototype,"sensor",void 0),e([X()],Et.prototype,"interval",void 0),e([X()],Et.prototype,"cache",void 0),e([X()],Et.prototype,"updating",void 0),e([X()],Et.prototype,"initialized",void 0),Et=e([Z("uptime-card")],Et);export{Et as UptimeCard};
