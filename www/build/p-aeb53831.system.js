var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{o(n.next(e))}catch(r){i(r)}}function s(e){try{o(n["throw"](e))}catch(r){i(r)}}function o(e){e.done?t(e.value):a(e.value).then(l,s)}o((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(r){return o([e,r])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:t.label++;return{value:l[1],done:false};case 5:t.label++;a=l[1];l=[0];continue;case 7:l=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1];i=l;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(l);break}if(i[2])t.ops.pop();t.trys.pop();continue}l=r.call(e,t)}catch(s){l=[6,s];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],l=0,s=i.length;l<s;l++,a++)n[a]=i[l];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n=e("N","icn");var a;var i;var l=false;var s=false;var o=false;var f=false;var $=false;var u=e("w",typeof window!=="undefined"?window:{});var c=e("C",u.CSS);var v=e("d",u.document||{head:{}});var d=e("H",u.HTMLElement||function(){function e(){}return e}());var h=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)},ce:function(e,r){return new CustomEvent(e,r)}});var p=e("a",(function(e){return Promise.resolve(e)}));var m=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var g="{visibility:hidden}.hydrated{visibility:inherit}";var y="http://www.w3.org/1999/xlink";var b=function(e,r){if(r===void 0){r=""}{return function(){return}}};var N=function(e,r){{return function(){return}}};var w=new WeakMap;var _=function(e,r,t){var n=Ie.get(e);if(m&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Ie.set(e,n)};var S=function(e,r,t,n){var a=x(r);var i=Ie.get(a);e=e.nodeType===11?e:v;if(i){if(typeof i==="string"){e=e.head||e;var l=w.get(e);var s=void 0;if(!l){w.set(e,l=new Set)}if(!l.has(a)){{if(h.$cssShim$){s=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var o=s["s-sc"];if(o){a=o;l=null}}else{s=v.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var R=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=b("attachStyles",r.$tagName$);var a=S(t.getRootNode(),r,e.$modeName$,t);n()};var x=function(e,r){return"sc-"+e.$tagName$};var k={};var T="http://www.w3.org/2000/svg";var C="http://www.w3.org/1999/xhtml";var j=function(e){e=typeof e;return e==="object"||e==="function"};var E=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var l=null;var s=false;var o=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!j(a)){a=String(a)}if(s&&o){f[f.length-1].$text$+=a}else{f.push(s?A(null,a):a)}o=s}}};$(t);if(r){if(r.key){i=r.key}if(r.name){l=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,P)}var c=A(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=l}return c}));var A=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var O=e("c",{});var M=function(e){return e&&e.$tag$===O};var P={forEach:function(e,r){return e.map(B).forEach(r)},map:function(e,r){return e.map(B).map(r).map(L)}};var B=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var L=function(e){if(typeof e.vtag==="function"){var r=Object.assign({},e.vattrs);if(e.vkey){r.key=e.vkey}if(e.vname){r.name=e.vname}return E.apply(void 0,__spreadArrays([e.vtag,r],e.vchildren||[]))}var t=A(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var H=function(e,r,t,n,a,i){if(t!==n){var l=Pe(e,r);var s=r.toLowerCase();if(r==="class"){var o=e.classList;var f=U(t);var $=U(n);o.remove.apply(o,f.filter((function(e){return e&&!$.includes(e)})));o.add.apply(o,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var c in t){if(!n||n[c]==null){if(c.includes("-")){e.style.removeProperty(c)}else{e.style[c]=""}}}}for(var c in n){if(!t||n[c]!==t[c]){if(c.includes("-")){e.style.setProperty(c,n[c])}else{e.style[c]=n[c]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Pe(u,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var v=j(n);if((l||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){l=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(m){}}var p=false;{if(s!==(s=s.replace(/^xlink\:?/,""))){r=s;p=true}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""){if(p){e.removeAttributeNS(y,r)}else{e.removeAttribute(r)}}}else if((!l||i&4||a)&&!v){n=n===true?"":n;if(p){e.setAttributeNS(y,r,n)}else{e.setAttribute(r,n)}}}}};var I=/\s/;var U=function(e){return!e?[]:e.split(I)};var z=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||k;var l=r.$attrs$||k;{for(n in i){if(!(n in l)){H(a,n,i[n],undefined,t,r.$flags$)}}}for(n in l){H(a,n,i[n],l[n],t,r.$flags$)}};var V=function(e,r,t,n){var s=r.$children$[t];var $=0;var u;var c;var d;if(!l){o=true;if(s.$tag$==="slot"){s.$flags$|=s.$children$?2:1}}if(s.$text$!==null){u=s.$elm$=v.createTextNode(s.$text$)}else if(s.$flags$&1){u=s.$elm$=v.createTextNode("")}else{if(!f){f=s.$tag$==="svg"}u=s.$elm$=v.createElementNS(f?T:C,s.$flags$&2?"slot-fb":s.$tag$);if(f&&s.$tag$==="foreignObject"){f=false}{z(null,s,f)}if(s.$children$){for($=0;$<s.$children$.length;++$){c=V(e,s,$);if(c){u.appendChild(c)}}}{if(s.$tag$==="svg"){f=false}else if(u.tagName==="foreignObject"){f=true}}}{u["s-hn"]=i;if(s.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=s.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===s.$tag$&&e.$elm$){q(e.$elm$,false)}}}return u};var q=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==i&&a["s-ol"]){K(a).insertBefore(a,J(a));a["s-ol"].remove();a["s-ol"]=undefined;o=true}if(r){q(a,r)}}h.$flags$&=~1};var F=function(e,r,t,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var s;for(;a<=i;++a){if(n[a]){s=V(null,t,a);if(s){n[a].$elm$=s;l.insertBefore(s,J(r))}}}};var W=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;re(n);{s=true;if(a["s-ol"]){a["s-ol"].remove()}else{q(a,true)}}a.remove()}}};var G=function(e,r,t,n){var a=0;var i=0;var l=0;var s=0;var o=r.length-1;var f=r[0];var $=r[o];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=o&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(D(f,c)){Q(f,c);f=r[++a];c=n[++i]}else if(D($,v)){Q($,v);$=r[--o];v=n[--u]}else if(D(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){q(f.$elm$.parentNode,false)}Q(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(D($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){q($.$elm$.parentNode,false)}Q($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--o];c=n[++i]}else{l=-1;{for(s=a;s<=o;++s){if(r[s]&&r[s].$key$!==null&&r[s].$key$===c.$key$){l=s;break}}}if(l>=0){h=r[l];if(h.$tag$!==c.$tag$){d=V(r&&r[i],t,l)}else{Q(h,c);r[l]=undefined;d=h.$elm$}c=n[++i]}else{d=V(r&&r[i],t,i);c=n[++i]}if(d){{K(f.$elm$).insertBefore(d,J(f.$elm$))}}}}if(a>o){F(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){W(r,a,o)}};var D=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var J=function(e){return e&&e["s-ol"]||e};var K=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var Q=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var l=r.$text$;var s;if(l===null){{f=i==="svg"?true:i==="foreignObject"?false:f}{if(i==="slot");else{z(e,r,f)}}if(n!==null&&a!==null){G(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}F(t,null,r,a,0,a.length-1)}else if(n!==null){W(n,0,n.length-1)}if(f&&i==="svg"){f=false}}else if(s=t["s-cr"]){s.parentNode.textContent=l}else if(e.$text$!==l){t.data=l}};var X=function(e){var r=e.childNodes;var t;var n;var a;var i;var l;var s;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){l=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){s=r[i].nodeType;if(l!==""){if(s===1&&l===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(s===1||s===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}X(t)}}};var Y=[];var Z=function(e){var r;var t;var n;var a;var i;var l;var o=0;var f=e.childNodes;var $=f.length;for(;o<$;o++){r=f[o];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(l=n.length-1;l>=0;l--){t=n[l];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(ee(t,a)){i=Y.find((function(e){return e.$nodeToRelocate$===t}));s=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{Y.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){Y.map((function(e){if(ee(e.$nodeToRelocate$,t["s-sn"])){i=Y.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!Y.some((function(e){return e.$nodeToRelocate$===t}))){Y.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){Z(r)}}};var ee=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var re=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(re)}};var te=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||A(null,null);var $=M(r)?r:E(null,null,r);i=t.tagName;if(n.$attrsToReflect$){$.$attrs$=$.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return $.$attrs$[n]=t[r]}))}$.$tag$=null;$.$flags$|=4;e.$vnode$=$;$.$elm$=f.$elm$=t;{a=t["s-cr"];l=(n.$flags$&1)!==0;s=false}Q(f,$);{h.$flags$|=1;if(o){Z($.$elm$);var u=void 0;var c=void 0;var d=void 0;var p=void 0;var m=void 0;var g=void 0;var y=0;for(;y<Y.length;y++){u=Y[y];c=u.$nodeToRelocate$;if(!c["s-ol"]){d=v.createTextNode("");d["s-nr"]=c;c.parentNode.insertBefore(c["s-ol"]=d,c)}}for(y=0;y<Y.length;y++){u=Y[y];c=u.$nodeToRelocate$;if(u.$slotRefNode$){p=u.$slotRefNode$.parentNode;m=u.$slotRefNode$.nextSibling;d=c["s-ol"];while(d=d.previousSibling){g=d["s-nr"];if(g&&g["s-sn"]===c["s-sn"]&&p===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){m=g;break}}}if(!m&&p!==c.parentNode||c.nextSibling!==m){if(c!==m){if(!c["s-hn"]&&c["s-ol"]){c["s-hn"]=c["s-ol"].parentNode.nodeName}p.insertBefore(c,m)}}}else{if(c.nodeType===1){c.hidden=true}}}}if(s){X($.$elm$)}h.$flags$&=~1;Y.length=0}};var ne=e("g",(function(e){return Ae(e).$hostElement$}));var ae=function(e,r,t){var n=h.ce(r,t);e.dispatchEvent(n);return n};var ie=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var le=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ie(e,e.$ancestorComponent$);var t=function(){return se(e,r)};return Ge(t)};var se=function(e,r){var t=b("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(r){{a=ce(n,"componentWillLoad")}}t();return ve(a,(function(){return oe(e,n,r)}))};var oe=function(e,r,n){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,s,o;return __generator(this,(function(f){t=e.$hostElement$;a=b("update",e.$cmpMeta$.$tagName$);i=t["s-rc"];if(n){R(e)}l=b("render",e.$cmpMeta$.$tagName$);{{{te(e,fe(e,r))}}}if(h.$cssShim$){h.$cssShim$.updateHost(t)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}l();a();{s=t["s-p"];o=function(){return $e(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}return[2]}))}))};var fe=function(e,r){try{r=r.render&&r.render();{e.$flags$&=~16}{e.$flags$|=2}}catch(t){Be(t,e.$hostElement$)}return r};var $e=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=b("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{de(t)}{ce(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){ue()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){We((function(){return le(e,false)}))}e.$flags$&=~(4|512)}};var ue=function(e){{de(v.documentElement)}We((function(){return ae(u,"appload",{detail:{namespace:n}})}))};var ce=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Be(n)}}return undefined};var ve=function(e,r){return e&&e.then?e.then(r):r()};var de=function(e){return e.classList.add("hydrated")};var he=function(e,r){if(e!=null&&!j(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var pe=function(e,r){return Ae(e).$instanceValues$.get(r)};var me=function(e,r,t,n){var a=Ae(e);var i=a.$instanceValues$.get(r);var l=a.$flags$;var s=a.$lazyInstance$;t=he(t,n.$members$[r][0]);if((!(l&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(s){if((l&(2|16))===2){le(a,false)}}}};var ge=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return pe(this,n)},set:function(e){me(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var ye=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,s,o,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=He(n);if(!i.then)return[3,2];e=N();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){ge(i,n,2);i.isProxied=true}t=b("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(u){Be(u)}{r.$flags$&=~8}t();if(i.style){a=i.style;l=x(n);if(!Ie.has(l)){s=b("registerStyles",n.$tagName$);_(l,a,!!(n.$flags$&1));s()}}$.label=3;case 3:o=r.$ancestorComponent$;f=function(){return le(r,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var be=function(e){if((h.$flags$&1)===0){var r=Ae(e);var t=r.$cmpMeta$;var n=b("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){Ne(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ie(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{We((function(){return ye(e,r,t)}))}}n()}};var Ne=function(e){var r=e["s-cr"]=v.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var we=function(e){if((h.$flags$&1)===0){var r=Ae(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var _e=function(e){var r=e.cloneNode;e.cloneNode=function(e){var t=this;var n=r.call(t,false);if(e){var a=0;var i=void 0,l=void 0;var s=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;a<t.childNodes.length;a++){i=t.childNodes[a]["s-nr"];l=s.every((function(e){return!t.childNodes[a][e]}));if(i){if(n.__appendChild){n.__appendChild(i.cloneNode(true))}else{n.appendChild(i.cloneNode(true))}}if(l){n.appendChild(t.childNodes[a].cloneNode(true))}}}return n}};var Se=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var r=e["s-sn"]=xe(e);var t=ke(this.childNodes,r);if(t){var n=Te(t,r);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var Re=function(e,r){var t=function(e){__extends(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}r.prototype.item=function(e){return this[e]};return r}(Array);if(r.$flags$&8){var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((h.$flags$&1)===0&&Ae(this).$flags$&2){var r=new t;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){r.push(i)}}return r}return t.from(e)}})}};var xe=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var ke=function(e,r){var t=0;var n;for(;t<e.length;t++){n=e[t];if(n["s-sr"]&&n["s-sn"]===r){return n}n=ke(n.childNodes,r);if(n){return n}}return null};var Te=function(e,r){var t=[e];while((e=e.nextSibling)&&e["s-sn"]===r){t.push(e)}return t};var Ce=e("b",(function(e,r){if(r===void 0){r={}}var t=b();var n=[];var a=r.exclude||[];var i=u.customElements;var l=v.head;var s=l.querySelector("meta[charset]");var o=v.createElement("style");var f=[];var $;var c=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",v.baseURI).href;e.map((function(e){return e[1].map((function(t){var l={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{l.$members$=t[2]}{l.$attrsToReflect$=[]}var s=r.transformTagName?r.transformTagName(l.$tagName$):l.$tagName$;var o=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;Me(r,l);{Re(r,l)}return t}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(c){f.push(this)}else{h.jmp((function(){return be(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return we(e)}))};r.prototype.componentOnReady=function(){return Ae(this).$onReadyPromise$};return r}(HTMLElement);{_e(o.prototype)}{Se(o.prototype)}l.$lazyBundleId$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,ge(o,l,1))}}))}));{o.innerHTML=n+g;o.setAttribute("data-styles","");l.insertBefore(o,s?s.nextSibling:l.firstChild)}c=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return $=setTimeout(ue,30)}))}}t()}));var je=e("F",(function(e,r){return r}));var Ee=new WeakMap;var Ae=function(e){return Ee.get(e)};var Oe=e("r",(function(e,r){return Ee.set(r.$lazyInstance$=e,r)}));var Me=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Ee.set(e,t)};var Pe=function(e,r){return r in e};var Be=function(e,r){return(0,console.error)(e,r)};var Le=new Map;var He=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=Le.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Le.set(i,e)}return e[a]}),Be)};var Ie=new Map;var Ue=[];var ze=[];var Ve=function(e,r){return function(t){e.push(t);if(!$){$=true;if(r&&h.$flags$&4){We(Fe)}else{h.raf(Fe)}}}};var qe=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Be(t)}}e.length=0};var Fe=function(){qe(Ue);{qe(ze);if($=Ue.length>0){h.raf(Fe)}}};var We=function(e){return p().then(e)};var Ge=Ve(ze,true)}}}));