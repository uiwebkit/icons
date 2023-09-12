import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { b as uniGetCleanContent, i as isEmptyString, U as UniTemplate, c as uniSmartWrap } from './index-899401b3.js';
import { b as uniMatTypeShort } from './index-35f37625.js';

const UniIconMatComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'filled';
    this.spin = false;
  }
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    const UniIconTag = !isEmptyString(name) ? `uni-mat-${uniMatTypeShort(this.type)}-${name}` : null;
    return UniTemplate(h(UniIconTag, null, h("slot", null)));
  }
  componentDidRender() {
    const { el, color, size, angle, spin, speed, steps } = this;
    const props = { el, color, size, angle, spin, speed, steps, selector: 'svg' };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};

export { UniIconMatComponent as uni_icon_mat };
