System.register(["./p-552b001a.system.js","./p-e6c0da18.system.js","./p-89866ac7.system.js","./p-1aa7a26d.system.js","./p-f26b0565.system.js"],(function(t){"use strict";var n,e,s,i;return{setters:[function(t){n=t.r;e=t.g},function(t){s=t.u},function(t){i=t.u},function(){},function(){}],execute:function(){var r='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-fr" viewBox="0 0 640 480">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h640v480H0z"/>\n    <path fill="#00267f" d="M0 0h213.3v480H0z"/>\n    <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>\n  </g>\n</svg>\n';var o='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-fr" viewBox="0 0 512 512">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h512v512H0z"/>\n    <path fill="#00267f" d="M0 0h170.7v512H0z"/>\n    <path fill="#f31830" d="M341.3 0H512v512H341.3z"/>\n  </g>\n</svg>\n';var f=t("uni_flag_fr",function(){function t(t){n(this,t);this.square=false;this.round=false}t.prototype.onSquare=function(t){this.el.innerHTML=t?o:r};t.prototype.onRound=function(t){i(this.el,t)};t.prototype.componentWillLoad=function(){this.el.innerHTML=this.square?o:r;s(this.el);i(this.el,this.round)};Object.defineProperty(t.prototype,"el",{get:function(){return e(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{square:["onSquare"],round:["onRound"]}},enumerable:false,configurable:true});return t}())}}}));