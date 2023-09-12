import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { c as uniSmartWrap, U as UniTemplate } from './index-899401b3.js';

const UniTiltWrapComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.all = false;
  }
  componentWillLoad() {
    const { el, angle, selector, all } = this;
    const props = { el, angle, selector, all };
    uniSmartWrap(props);
  }
  render() {
    return UniTemplate(h("slot", null));
  }
  get el() { return getElement(this); }
};

export { UniTiltWrapComponent as uni_tilt_wrap };
