var __spreadArrays=this&&this.__spreadArrays||function(){for(var n=0,e=0,t=arguments.length;e<t;e++)n+=arguments[e].length;for(var r=Array(n),i=0,e=0;e<t;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,i++)r[i]=s[a];return r};System.register(["./p-c53ea3f0.system.js","./p-330643a7.system.js","./p-9a895e97.system.js"],(function(n){"use strict";var e,t,r;return{setters:[function(n){e=n.a},function(n){t=n.u},function(n){r=n.u}],execute:function(){n({a:s,b:a,c:o,d:l,e:f,u:i});function i(n){var e=document.head.querySelectorAll("style");var t=Array.from(e).some((function(e){return e.textContent===n}));if(!t){var r=document.createElement("style");r.appendChild(document.createTextNode(n));document.head.appendChild(r)}}function s(n){var e={};var t="rotate("+n+"deg)";e.transform=t;e["-webkit-transform"]=t;return{styles:e}}function a(n){var e=n.speed,t=n.steps;var r={};var i="uni-rotate "+(e||1)+"s infinite "+(t?"steps("+t+")":"linear");r.animation=i;r["-webkit-animation"]=i;return{styles:r}}function o(n){var e=n.color,t=n.filter,r=n.size,i=n.fontSize;var s=["primary","success","accent","warn"];var a=["lg","md","sm","xs"];var o=[];var l={};if(s.includes(e)){o.push("uni-color-"+e)}else if(e){l.color=e;l.fill=e}if(s.includes(t)){o.push("uni-filter-"+t)}else if(t){l.filter=t}if(a.includes(r)){o.push("uni-size-"+r)}else if(r){l.height=r;l.width=r}if(a.includes(i)){o.push("uni-font-size-"+i)}else if(i){l.fontSize=i+"px"}return{classes:o,styles:l}}function l(n,e){if(!!e){n.forEach((function(n){n.textContent=e}))}}function f(n){var f=n.el,d=n.color,g=n.filter,m=n.size,x=n.fontSize,z=n.selector,y=n.all;var b=d||g||m||x?o({color:d,filter:g,size:m,fontSize:x}):{classes:[],styles:{}},w=b.classes,k=b.styles;w=__spreadArrays(w,n.classes?n.classes.split(" "):[]);if(!!d){i(u)}if(g){i(c)}if(m){i(v)}if(x){i(h)}if(n.angle){k=Object.assign(Object.assign({},k),s(n.angle).styles)}if(n.spin){i(p);k=Object.assign(Object.assign({},k),a(n).styles)}e({el:f,selector:z,all:y},w,t);e({el:f,selector:z,all:y},k,r);e({el:f,selector:z,all:y},n.content,l)}var u=n("U","\n.uni-color-primary {\n  color: #3f51b5;\n  color: var(--uni-color-primary, #3f51b5);\n  fill: #3f51b5;\n  fill: var(--uni-color-primary, #3f51b5);\n}\n.uni-color-success {\n  color: #018786;\n  color: var(--uni-color-success, #018786);\n  fill: #018786;\n  fill: var(--uni-color-success, #018786);\n}\n.uni-color-accent {\n  color: #ff4081;\n  color: var(--uni-color-accent, #ff4081);\n  fill: #ff4081;\n  fill: var(--uni-color-accent, #ff4081);\n}\n.uni-color-warn {\n  color: #f44336;\n  color: var(--uni-color-warn, #f44336);\n  fill: #f44336;\n  fill: var(--uni-color-warn, #f44336);\n}");var c=n("f","\n.uni-filter-primary {\n  filter: invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%);\n  filter: var(--uni-color-primary-fix, invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%));\n}\n.uni-filter-success {\n  filter: invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%);\n  filter: var(--uni-color-success-fix, invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%));\n}\n.uni-filter-accent {\n  filter: invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%);\n  filter: var(--uni-color-accent-fix, invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%));\n}\n.uni-filter-warn {\n  filter: invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%);\n  filter: var(--uni-color-warn-fix, invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%));\n}");var h=n("g","\n.uni-font-size-lg {\n  font-size: 48px;\n  font-size: var(--uni-size-lg, 48px);\n}\n.uni-font-size-md {\n  font-size: 36px;\n  font-size: var(--uni-size-md, 36px);\n}\n.uni-font-size-sm {\n  font-size: 24px;\n  font-size: var(--uni-size-sm, 24px);\n}\n.uni-font-size-xs {\n  font-size: 12px;\n  font-size: var(--uni-size-xs, 12px);\n}");var p=n("h","\n@-webkit-keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n@keyframes uni-rotate {\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}");var v=n("i","\n.uni-size-lg {\n  height: 48px;\n  height: var(--uni-size-lg, 48px);\n  width: 48px;\n  width: var(--uni-size-lg, 48px);\n}\n.uni-size-md {\n  height: 36px;\n  height: var(--uni-size-md, 36px);\n  width: 36px;\n  width: var(--uni-size-md, 48px);\n}\n.uni-size-sm {\n  height: 24px;\n  height: var(--uni-size-sm, 24px);\n  width: 24px;\n  width: var(--uni-size-sm, 24px);\n}\n.uni-size-xs {\n  height: 12px;\n  height: var(--uni-size-xs, 12px);\n  width: 12px;\n  width: var(--uni-size-xs, 12px);\n}")}}}));