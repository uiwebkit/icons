import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { c as uniSmartWrap, U as UniTemplate } from './index-899401b3.js';

const UniThemeWrapComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.all = false;
  }
  componentWillLoad() {
    const { el, color, filter, size, fontSize, selector, all } = this;
    const props = { el, color, filter, size, fontSize, selector, all };
    uniSmartWrap(props);
  }
  render() {
    return UniTemplate(h("slot", null));
  }
  get el() { return getElement(this); }
};

export { UniThemeWrapComponent as uni_theme_wrap };
