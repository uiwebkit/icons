import{e as s,i as t}from"./p-9f981772.js";function e(s,t){return t?"Host"===t||!!s.querySelector(t):!!s.firstElementChild}function i(t,e,i,n){if(!s(e))if(t.selector)if("Host"===t.selector)i([t.el],e);else{const s=t.all?t.el.querySelectorAll(t.selector):[t.el.querySelector(t.selector)];s[0]&&(i(s,e),null==n||n.disconnect())}else{const s=t.all?[...t.el.children]:[t.el.firstElementChild];s&&s[0]&&(i(s,e),null==n||n.disconnect())}}function n(n,o,f){if(t(o)&&!s(o))if(e(n.el,n.selector))i(n,o,f);else{const s=new MutationObserver((()=>{i(n,o,f,s)}));s.observe(n.el,{childList:!0,subtree:!0})}}export{n as a,e as i,i as u}