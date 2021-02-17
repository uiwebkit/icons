import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-19fcd88d.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
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
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
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
            return __sc_import_icn(/* webpackChunkName: "polyfills-dom" */ './dom-fb6a473e.js').then(() => opts);
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
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
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
  return bootstrapLazy([["uni-bs-alarm",[[0,"uni-bs-alarm"]]],["uni-bs-alarm-fill",[[0,"uni-bs-alarm-fill"]]],["uni-bs-star",[[0,"uni-bs-star"]]],["uni-bs-star-fill",[[0,"uni-bs-star-fill"]]],["uni-bs-star-half",[[0,"uni-bs-star-half"]]],["uni-fa-styles",[[0,"uni-fa-styles"]]],["uni-fab-bootstrap",[[0,"uni-fab-bootstrap"]]],["uni-fab-facebook",[[0,"uni-fab-facebook"]]],["uni-fab-font-awesome",[[0,"uni-fab-font-awesome"]]],["uni-fab-font-awesome-alt",[[0,"uni-fab-font-awesome-alt"]]],["uni-fab-github",[[0,"uni-fab-github"]]],["uni-fab-instagram",[[0,"uni-fab-instagram"]]],["uni-fab-npm",[[0,"uni-fab-npm"]]],["uni-fab-twitter",[[0,"uni-fab-twitter"]]],["uni-far-copy",[[0,"uni-far-copy"]]],["uni-far-envelope",[[0,"uni-far-envelope"]]],["uni-far-file-alt",[[0,"uni-far-file-alt"]]],["uni-fas-angle-down",[[0,"uni-fas-angle-down"]]],["uni-fas-balance-scale",[[0,"uni-fas-balance-scale"]]],["uni-fas-bug",[[0,"uni-fas-bug"]]],["uni-fas-chart-line",[[0,"uni-fas-chart-line"]]],["uni-fas-download",[[0,"uni-fas-download"]]],["uni-fas-file-download",[[0,"uni-fas-file-download"]]],["uni-fas-lightbulb",[[0,"uni-fas-lightbulb"]]],["uni-fas-question-circle",[[0,"uni-fas-question-circle"]]],["uni-fas-rocket",[[0,"uni-fas-rocket"]]],["uni-fas-user-secret",[[0,"uni-fas-user-secret"]]],["uni-flag",[[0,"uni-flag",{"name":[513],"square":[516],"round":[516]}]]],["uni-flag-cn",[[0,"uni-flag-cn",{"square":[516],"round":[516]}]]],["uni-flag-es",[[0,"uni-flag-es",{"square":[516],"round":[516]}]]],["uni-flag-gb",[[0,"uni-flag-gb",{"square":[516],"round":[516]}]]],["uni-flag-ru",[[0,"uni-flag-ru",{"square":[516],"round":[516]}]]],["uni-flag-us",[[0,"uni-flag-us",{"square":[516],"round":[516]}]]],["uni-icon-bs",[[0,"uni-icon-bs",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icon-fa",[[0,"uni-icon-fa",{"type":[513],"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icon-mat",[[0,"uni-icon-mat",{"type":[513],"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-fa",[[0,"uni-icons-fa",{"type":[513],"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-fa-b",[[0,"uni-icons-fa-b",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-fa-b-wrap",[[0,"uni-icons-fa-b-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-fa-r",[[0,"uni-icons-fa-r",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-fa-r-wrap",[[0,"uni-icons-fa-r-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-fa-s",[[0,"uni-icons-fa-s",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-fa-s-wrap",[[0,"uni-icons-fa-s-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-fa-wrap",[[4,"uni-icons-fa-wrap",{"type":[513],"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-mat",[[4,"uni-icons-mat",{"type":[513],"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-mat-f",[[4,"uni-icons-mat-f",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-mat-f-wrap",[[0,"uni-icons-mat-f-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-mat-o",[[4,"uni-icons-mat-o",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-mat-o-wrap",[[0,"uni-icons-mat-o-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-mat-r",[[4,"uni-icons-mat-r",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-mat-r-wrap",[[0,"uni-icons-mat-r-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-mat-s",[[4,"uni-icons-mat-s",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-mat-s-wrap",[[0,"uni-icons-mat-s-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-mat-tt",[[4,"uni-icons-mat-tt",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514]}]]],["uni-icons-mat-tt-wrap",[[0,"uni-icons-mat-tt-wrap",{"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-icons-mat-wrap",[[4,"uni-icons-mat-wrap",{"type":[513],"name":[513],"color":[513],"size":[520],"angle":[514],"spin":[516],"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-mat-f-3d-rotation",[[0,"uni-mat-f-3d-rotation"]]],["uni-mat-f-add-shopping-cart",[[0,"uni-mat-f-add-shopping-cart"]]],["uni-mat-f-arrow-drop-down",[[0,"uni-mat-f-arrow-drop-down"]]],["uni-mat-f-arrow-drop-up",[[0,"uni-mat-f-arrow-drop-up"]]],["uni-mat-f-close",[[0,"uni-mat-f-close"]]],["uni-mat-f-favorite",[[0,"uni-mat-f-favorite"]]],["uni-mat-f-home",[[0,"uni-mat-f-home"]]],["uni-mat-f-play-circle",[[0,"uni-mat-f-play-circle"]]],["uni-mat-f-rotate-right",[[0,"uni-mat-f-rotate-right"]]],["uni-mat-o-play-circle",[[0,"uni-mat-o-play-circle"]]],["uni-mat-tt-add-shopping-cart",[[0,"uni-mat-tt-add-shopping-cart"]]],["uni-mat-tt-album",[[0,"uni-mat-tt-album"]]],["uni-mat-tt-bubble-chart",[[0,"uni-mat-tt-bubble-chart"]]],["uni-mat-tt-build-circle",[[0,"uni-mat-tt-build-circle"]]],["uni-mat-tt-chat",[[0,"uni-mat-tt-chat"]]],["uni-mat-tt-code",[[0,"uni-mat-tt-code"]]],["uni-mat-tt-compare-arrows",[[0,"uni-mat-tt-compare-arrows"]]],["uni-mat-tt-dashboard",[[0,"uni-mat-tt-dashboard"]]],["uni-mat-tt-favorite",[[0,"uni-mat-tt-favorite"]]],["uni-mat-tt-http",[[0,"uni-mat-tt-http"]]],["uni-mat-tt-info",[[0,"uni-mat-tt-info"]]],["uni-mat-tt-language",[[0,"uni-mat-tt-language"]]],["uni-mat-tt-layers",[[0,"uni-mat-tt-layers"]]],["uni-mat-tt-person-add",[[0,"uni-mat-tt-person-add"]]],["uni-mat-tt-play-circle",[[0,"uni-mat-tt-play-circle"]]],["uni-mat-tt-rotate-degrees",[[0,"uni-mat-tt-rotate-degrees"]]],["uni-mat-tt-router",[[0,"uni-mat-tt-router"]]],["uni-mat-tt-storage",[[0,"uni-mat-tt-storage"]]],["uni-mat-tt-text-fields",[[0,"uni-mat-tt-text-fields"]]],["uni-mat-tt-visibility",[[0,"uni-mat-tt-visibility"]]],["uni-mat-tt-web",[[0,"uni-mat-tt-web"]]],["uni-mat-tt-widgets",[[0,"uni-mat-tt-widgets"]]],["uni-spin-wrap",[[0,"uni-spin-wrap",{"speed":[514],"steps":[514],"selector":[513],"all":[516]}]]],["uni-theme-wrap",[[0,"uni-theme-wrap",{"color":[513],"filter":[513],"size":[520],"fontSize":[520,"font-size"],"selector":[513],"all":[516]}]]],["uni-tilt-wrap",[[0,"uni-tilt-wrap",{"angle":[514],"selector":[513],"all":[516]}]]],["uni-wrap",[[0,"uni-wrap",{"classes":[513],"selector":[513],"all":[516]}]]]], options);
});
