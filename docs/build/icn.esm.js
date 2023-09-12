import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-0ff8f39d.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.14.2 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        // because the mark/measure APIs are designed to write entries to a buffer in the browser that does not exist,
        // simply stub the implementations out.
        // TODO(STENCIL-323): Remove this patch when support for older browsers is removed (breaking)
        // @ts-ignore
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find((s) => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) ||
            s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = "";
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return __sc_import_icn(/* webpackChunkName: "polyfills-dom" */ './dom-a385e381.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], {
                    type: 'application/javascript',
                }));
                mod = new Promise((resolve) => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy(JSON.parse("[[\"uni-bi-alarm\",[[0,\"uni-bi-alarm\"]]],[\"uni-bi-alarm-fill\",[[0,\"uni-bi-alarm-fill\"]]],[\"uni-bi-bootstrap\",[[0,\"uni-bi-bootstrap\"]]],[\"uni-bi-bootstrap-fill\",[[0,\"uni-bi-bootstrap-fill\"]]],[\"uni-bi-bug\",[[0,\"uni-bi-bug\"]]],[\"uni-bi-bug-fill\",[[0,\"uni-bi-bug-fill\"]]],[\"uni-bi-download\",[[0,\"uni-bi-download\"]]],[\"uni-bi-envelope\",[[0,\"uni-bi-envelope\"]]],[\"uni-bi-envelope-fill\",[[0,\"uni-bi-envelope-fill\"]]],[\"uni-bi-facebook\",[[0,\"uni-bi-facebook\"]]],[\"uni-bi-files\",[[0,\"uni-bi-files\"]]],[\"uni-bi-github\",[[0,\"uni-bi-github\"]]],[\"uni-bi-hand-thumbs-up\",[[0,\"uni-bi-hand-thumbs-up\"]]],[\"uni-bi-hand-thumbs-up-fill\",[[0,\"uni-bi-hand-thumbs-up-fill\"]]],[\"uni-bi-instagram\",[[0,\"uni-bi-instagram\"]]],[\"uni-bi-lightbulb\",[[0,\"uni-bi-lightbulb\"]]],[\"uni-bi-lightbulb-fill\",[[0,\"uni-bi-lightbulb-fill\"]]],[\"uni-bi-question-circle\",[[0,\"uni-bi-question-circle\"]]],[\"uni-bi-question-circle-fill\",[[0,\"uni-bi-question-circle-fill\"]]],[\"uni-bi-star\",[[0,\"uni-bi-star\"]]],[\"uni-bi-star-fill\",[[0,\"uni-bi-star-fill\"]]],[\"uni-bi-star-half\",[[0,\"uni-bi-star-half\"]]],[\"uni-bi-styles\",[[0,\"uni-bi-styles\"]]],[\"uni-bi-twitter\",[[0,\"uni-bi-twitter\"]]],[\"uni-bi-youtube\",[[0,\"uni-bi-youtube\"]]],[\"uni-fa-styles\",[[0,\"uni-fa-styles\"]]],[\"uni-fab-bootstrap\",[[0,\"uni-fab-bootstrap\"]]],[\"uni-fab-facebook\",[[0,\"uni-fab-facebook\"]]],[\"uni-fab-font-awesome\",[[0,\"uni-fab-font-awesome\"]]],[\"uni-fab-font-awesome-alt\",[[0,\"uni-fab-font-awesome-alt\"]]],[\"uni-fab-github\",[[0,\"uni-fab-github\"]]],[\"uni-fab-instagram\",[[0,\"uni-fab-instagram\"]]],[\"uni-fab-npm\",[[0,\"uni-fab-npm\"]]],[\"uni-fab-twitter\",[[0,\"uni-fab-twitter\"]]],[\"uni-far-copy\",[[0,\"uni-far-copy\"]]],[\"uni-far-envelope\",[[0,\"uni-far-envelope\"]]],[\"uni-far-file-alt\",[[0,\"uni-far-file-alt\"]]],[\"uni-fas-angle-down\",[[0,\"uni-fas-angle-down\"]]],[\"uni-fas-balance-scale\",[[0,\"uni-fas-balance-scale\"]]],[\"uni-fas-bug\",[[0,\"uni-fas-bug\"]]],[\"uni-fas-chart-line\",[[0,\"uni-fas-chart-line\"]]],[\"uni-fas-download\",[[0,\"uni-fas-download\"]]],[\"uni-fas-file-download\",[[0,\"uni-fas-file-download\"]]],[\"uni-fas-lightbulb\",[[0,\"uni-fas-lightbulb\"]]],[\"uni-fas-question-circle\",[[0,\"uni-fas-question-circle\"]]],[\"uni-fas-rocket\",[[0,\"uni-fas-rocket\"]]],[\"uni-fas-user-secret\",[[0,\"uni-fas-user-secret\"]]],[\"uni-flag\",[[4,\"uni-flag\",{\"name\":[513],\"square\":[516],\"round\":[516]}]]],[\"uni-flag-cn\",[[0,\"uni-flag-cn\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-de\",[[0,\"uni-flag-de\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-es\",[[0,\"uni-flag-es\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-fr\",[[0,\"uni-flag-fr\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-gb\",[[0,\"uni-flag-gb\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-it\",[[0,\"uni-flag-it\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-jp\",[[0,\"uni-flag-jp\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-kr\",[[0,\"uni-flag-kr\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-pt\",[[0,\"uni-flag-pt\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-ru\",[[0,\"uni-flag-ru\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-shadow\",[[1,\"uni-flag-shadow\",{\"name\":[513],\"square\":[516],\"round\":[516]}]]],[\"uni-flag-ua\",[[0,\"uni-flag-ua\",{\"square\":[516],\"round\":[516]}]]],[\"uni-flag-us\",[[0,\"uni-flag-us\",{\"square\":[516],\"round\":[516]}]]],[\"uni-icon-bi\",[[4,\"uni-icon-bi\",{\"img\":[516],\"url\":[513],\"version\":[513],\"alter\":[513],\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icon-fa\",[[4,\"uni-icon-fa\",{\"type\":[513],\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icon-mat\",[[4,\"uni-icon-mat\",{\"type\":[513],\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-bi\",[[4,\"uni-icons-bi\",{\"name\":[513],\"color\":[513],\"size\":[520]}]]],[\"uni-icons-bi-wrap\",[[4,\"uni-icons-bi-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-fa\",[[4,\"uni-icons-fa\",{\"type\":[513],\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-fa-b\",[[4,\"uni-icons-fa-b\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-fa-b-wrap\",[[4,\"uni-icons-fa-b-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-fa-r\",[[4,\"uni-icons-fa-r\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-fa-r-wrap\",[[4,\"uni-icons-fa-r-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-fa-s\",[[4,\"uni-icons-fa-s\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-fa-s-wrap\",[[4,\"uni-icons-fa-s-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-fa-wrap\",[[4,\"uni-icons-fa-wrap\",{\"type\":[513],\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-mat\",[[4,\"uni-icons-mat\",{\"type\":[513],\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-mat-f\",[[4,\"uni-icons-mat-f\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-mat-f-wrap\",[[4,\"uni-icons-mat-f-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-mat-o\",[[4,\"uni-icons-mat-o\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-mat-o-wrap\",[[4,\"uni-icons-mat-o-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-mat-r\",[[4,\"uni-icons-mat-r\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-mat-r-wrap\",[[4,\"uni-icons-mat-r-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-mat-s\",[[4,\"uni-icons-mat-s\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-mat-s-wrap\",[[4,\"uni-icons-mat-s-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-mat-tt\",[[4,\"uni-icons-mat-tt\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514]}]]],[\"uni-icons-mat-tt-wrap\",[[4,\"uni-icons-mat-tt-wrap\",{\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-icons-mat-wrap\",[[4,\"uni-icons-mat-wrap\",{\"type\":[513],\"name\":[513],\"color\":[513],\"size\":[520],\"angle\":[514],\"spin\":[516],\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-mat-f-3d-rotation\",[[0,\"uni-mat-f-3d-rotation\"]]],[\"uni-mat-f-add\",[[0,\"uni-mat-f-add\"]]],[\"uni-mat-f-add-shopping-cart\",[[0,\"uni-mat-f-add-shopping-cart\"]]],[\"uni-mat-f-album\",[[0,\"uni-mat-f-album\"]]],[\"uni-mat-f-arrow-drop-down\",[[0,\"uni-mat-f-arrow-drop-down\"]]],[\"uni-mat-f-arrow-drop-up\",[[0,\"uni-mat-f-arrow-drop-up\"]]],[\"uni-mat-f-close\",[[0,\"uni-mat-f-close\"]]],[\"uni-mat-f-contact-mail\",[[0,\"uni-mat-f-contact-mail\"]]],[\"uni-mat-f-favorite\",[[0,\"uni-mat-f-favorite\"]]],[\"uni-mat-f-fingerprint\",[[0,\"uni-mat-f-fingerprint\"]]],[\"uni-mat-f-home\",[[0,\"uni-mat-f-home\"]]],[\"uni-mat-f-menu\",[[0,\"uni-mat-f-menu\"]]],[\"uni-mat-f-play-circle\",[[0,\"uni-mat-f-play-circle\"]]],[\"uni-mat-f-rotate-right\",[[0,\"uni-mat-f-rotate-right\"]]],[\"uni-mat-f-send\",[[0,\"uni-mat-f-send\"]]],[\"uni-mat-f-settings\",[[0,\"uni-mat-f-settings\"]]],[\"uni-mat-f-translate\",[[0,\"uni-mat-f-translate\"]]],[\"uni-mat-f-visibility\",[[0,\"uni-mat-f-visibility\"]]],[\"uni-mat-f-visibility-off\",[[0,\"uni-mat-f-visibility-off\"]]],[\"uni-mat-o-play-circle\",[[0,\"uni-mat-o-play-circle\"]]],[\"uni-mat-r-done\",[[0,\"uni-mat-r-done\"]]],[\"uni-mat-r-done-all\",[[0,\"uni-mat-r-done-all\"]]],[\"uni-mat-r-done-outline\",[[0,\"uni-mat-r-done-outline\"]]],[\"uni-mat-tt-add-shopping-cart\",[[0,\"uni-mat-tt-add-shopping-cart\"]]],[\"uni-mat-tt-album\",[[0,\"uni-mat-tt-album\"]]],[\"uni-mat-tt-bubble-chart\",[[0,\"uni-mat-tt-bubble-chart\"]]],[\"uni-mat-tt-build-circle\",[[0,\"uni-mat-tt-build-circle\"]]],[\"uni-mat-tt-call-to-action\",[[0,\"uni-mat-tt-call-to-action\"]]],[\"uni-mat-tt-chat\",[[0,\"uni-mat-tt-chat\"]]],[\"uni-mat-tt-check-box\",[[0,\"uni-mat-tt-check-box\"]]],[\"uni-mat-tt-code\",[[0,\"uni-mat-tt-code\"]]],[\"uni-mat-tt-compare-arrows\",[[0,\"uni-mat-tt-compare-arrows\"]]],[\"uni-mat-tt-contact-support\",[[0,\"uni-mat-tt-contact-support\"]]],[\"uni-mat-tt-dashboard\",[[0,\"uni-mat-tt-dashboard\"]]],[\"uni-mat-tt-dynamic-feed\",[[0,\"uni-mat-tt-dynamic-feed\"]]],[\"uni-mat-tt-favorite\",[[0,\"uni-mat-tt-favorite\"]]],[\"uni-mat-tt-fiber-smart-record\",[[0,\"uni-mat-tt-fiber-smart-record\"]]],[\"uni-mat-tt-filter-none\",[[0,\"uni-mat-tt-filter-none\"]]],[\"uni-mat-tt-format-list-bulleted\",[[0,\"uni-mat-tt-format-list-bulleted\"]]],[\"uni-mat-tt-grid-on\",[[0,\"uni-mat-tt-grid-on\"]]],[\"uni-mat-tt-highlight-alt\",[[0,\"uni-mat-tt-highlight-alt\"]]],[\"uni-mat-tt-how-to-reg\",[[0,\"uni-mat-tt-how-to-reg\"]]],[\"uni-mat-tt-http\",[[0,\"uni-mat-tt-http\"]]],[\"uni-mat-tt-info\",[[0,\"uni-mat-tt-info\"]]],[\"uni-mat-tt-input\",[[0,\"uni-mat-tt-input\"]]],[\"uni-mat-tt-language\",[[0,\"uni-mat-tt-language\"]]],[\"uni-mat-tt-layers\",[[0,\"uni-mat-tt-layers\"]]],[\"uni-mat-tt-lens\",[[0,\"uni-mat-tt-lens\"]]],[\"uni-mat-tt-link\",[[0,\"uni-mat-tt-link\"]]],[\"uni-mat-tt-menu\",[[0,\"uni-mat-tt-menu\"]]],[\"uni-mat-tt-open-with\",[[0,\"uni-mat-tt-open-with\"]]],[\"uni-mat-tt-person-add\",[[0,\"uni-mat-tt-person-add\"]]],[\"uni-mat-tt-play-circle\",[[0,\"uni-mat-tt-play-circle\"]]],[\"uni-mat-tt-playlist-add-check\",[[0,\"uni-mat-tt-playlist-add-check\"]]],[\"uni-mat-tt-radio-button-checked\",[[0,\"uni-mat-tt-radio-button-checked\"]]],[\"uni-mat-tt-rotate-degrees\",[[0,\"uni-mat-tt-rotate-degrees\"]]],[\"uni-mat-tt-router\",[[0,\"uni-mat-tt-router\"]]],[\"uni-mat-tt-smart-button\",[[0,\"uni-mat-tt-smart-button\"]]],[\"uni-mat-tt-storage\",[[0,\"uni-mat-tt-storage\"]]],[\"uni-mat-tt-tab-unselected\",[[0,\"uni-mat-tt-tab-unselected\"]]],[\"uni-mat-tt-text-fields\",[[0,\"uni-mat-tt-text-fields\"]]],[\"uni-mat-tt-toggle-on\",[[0,\"uni-mat-tt-toggle-on\"]]],[\"uni-mat-tt-view-sidebar\",[[0,\"uni-mat-tt-view-sidebar\"]]],[\"uni-mat-tt-visibility\",[[0,\"uni-mat-tt-visibility\"]]],[\"uni-mat-tt-waves\",[[0,\"uni-mat-tt-waves\"]]],[\"uni-mat-tt-web\",[[0,\"uni-mat-tt-web\"]]],[\"uni-mat-tt-web-asset\",[[0,\"uni-mat-tt-web-asset\"]]],[\"uni-mat-tt-widgets\",[[0,\"uni-mat-tt-widgets\"]]],[\"uni-mat-tt-wysiwyg\",[[0,\"uni-mat-tt-wysiwyg\"]]],[\"uni-spin-wrap\",[[4,\"uni-spin-wrap\",{\"speed\":[514],\"steps\":[514],\"all\":[516],\"selector\":[513]}]]],[\"uni-theme-wrap\",[[4,\"uni-theme-wrap\",{\"color\":[513],\"filter\":[513],\"size\":[520],\"fontSize\":[520,\"font-size\"],\"all\":[516],\"selector\":[513]}]]],[\"uni-tilt-wrap\",[[4,\"uni-tilt-wrap\",{\"angle\":[514],\"all\":[516],\"selector\":[513]}]]]]"), options);
});
