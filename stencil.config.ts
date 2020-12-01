import { Config } from '@stencil/core';

export const config: Config = {
  /**
   * The namespace config is a string representing a namespace for the app.
   * For apps that are not meant to be a library of reusable components,
   * the default of App is just fine. However, if the app is meant to be consumed
   * as a third-party library, such as Ionic, a unique namespace is required.
   */
  namespace: 'icn',
  /**
   * Sets if the ES5 build should be generated or not. Stencil generates a modern build without ES5,
   * whereas this setting to `true` will also create es5 builds for both dev and prod modes. Setting
   * `buildEs5` to `prod` will only build ES5 in prod mode. Basically if the app does not need to run
   * on legacy browsers (IE11 and Edge 18 and below), it's safe to not build ES5, which will also speed
   * up build times. Defaults to `false`.
   */
  buildEs5: 'prod',
  /**
   * Stencil will cache build results in order to speed up rebuilds.
   * To disable this feature, set enableCache to false.
   */
  enableCache: false,
  taskQueue: 'async',
  extras: {
    /**
     * By default, the slot polyfill does not update `appendChild()` so that it appends
     * new child nodes into the correct child slot like how shadow dom works. This is an opt-in
     * polyfill for those who need it when using `element.appendChild(node)` and expecting the
     * child to be appended in the same location shadom dom would. This is not required for
     * IE11 or Edge 18, but can be enabled if the app is using `appendChild()`. Defaults to `false`.
     */
    appendChildSlotFix: true,
    /**
     * By default, the runtime does not polyfill `cloneNode()` when cloning a component
     * that uses the slot polyfill. This is an opt-in polyfill for those who need it.
     * This is not required for IE11 or Edge 18, but can be enabled if the app is using
     * `cloneNode()` and unexpected node are being cloned due to the slot polyfill
     * simulating shadow dom. Defaults to `false`.
     */
    cloneNodeFix: true,
    /**
     * Include the CSS Custom Property polyfill/shim for legacy browsers. ESM builds will
     * not include the css vars shim. Defaults to `false`
     */
    cssVarsShim: true,
    /**
     * Dynamic `import()` shim. This is only needed for Edge 18 and below, and Firefox 67
     * and below. Defaults to `false`.
     */
    dynamicImportShim: true,
    /**
     * Safari 10 supports ES modules with `<script type="module">`, however, it did not implement
     * `<script nomodule>`. When set to `true`, the runtime will patch support for Safari 10
     * due to its lack of `nomodule` support.
     * Defaults to `false`.
     */
    safari10: true,
    /**
     * It is possible to assign data to the actual `<script>` element's `data-opts` property,
     * which then gets passed to Stencil's initial bootstrap. This feature is only required
     * for very special cases and rarely needed. Defaults to `false`.
     */
    scriptDataOpts: false,
    /**
     * If enabled `true`, the runtime will check if the shadow dom shim is required. However,
     * if it's determined that shadow dom is already natively supported by the browser then
     * it does not request the shim. When set to `false` it will avoid all shadow dom tests.
     * Defaults to `false`.
     */
    shadowDomShim: true,
    /**
     * When a component is first attached to the DOM, this setting will wait a single tick before
     * rendering. This worksaround an Angular issue, where Angular attaches the elements before
     * settings their initial state, leading to double renders and unnecesary event dispatchs.
     * Defaults to `false`.
     */
    initializeNextTick: true,
    /**
     * For browsers that do not support shadow dom (IE11 and Edge 18 and below), slot is polyfilled
     * to simulate the same behavior. However, the host element's `childNodes` and `children`
     * getters are not patched to only show the child nodes and elements of the default slot.
     * Defaults to `false`.
     */
    slotChildNodesFix: true,
    /**
     * Enables the tagNameTransform option of `defineCustomElements()`, so the component tagName
     * can be customized at runtime. Defaults to `false`.
     */
    tagNameTransform: true,
  },
  hydratedFlag: {
    /**
     * Defaults to `hydrated`.
     */
    name: `hydrated`,
    /**
     * Can be either `class` or `attribute`. Defaults to `class`.
     */
    selector: 'class',
    /**
     * The CSS property used to show and hide components. Defaults to use the CSS `visibility`
     * property. Other commonly used CSS properties would be `display` with the `initialValue`
     * setting as `none`, or `opacity` with the `initialValue` as `0`. Defaults to `visibility`
     * and the default `initialValue` is `hidden`.
     */
    property: `visibility`,
    /**
     * This is the CSS value to give all components before it has been hydrated.
     * Defaults to `hidden`.
     */
    initialValue: `hidden`,
    /**
     * This is the CSS value to assign once a component has finished hydrating.
     * This is the CSS value that'll allow the component to show. Defaults to `inherit`.
     */
    hydratedValue: `inherit`,
  },
  devServer: {
    port: 1111,
    openBrowser: false,
    reloadStrategy: 'pageReload',
    // experimentalDevModules: true,
    // logRequests: true,
  },
  outputTargets: [
    {
      type: 'dist',
      copy: [{ src: 'assets/fonts', dest: '../assets/fonts', warn: true }],
      esmLoaderPath: '../loader',
      polyfills: true,
      empty: true,
    },
    {
      type: 'dist-custom-elements-bundle',
      empty: true,
    },
    {
      type: 'docs-readme',
      footer: '*Powered by [UiWebKit](https://uiwebkit.com/)*',
      dependencies: true,
      // strict: true,
    },
    {
      type: 'www',
      copy: [{ src: 'assets/fonts', dest: 'assets/fonts', warn: true }],
      serviceWorker: null, // disable service workers
    },
  ],
};
