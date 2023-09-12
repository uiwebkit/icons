import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { b as uniGetCleanContent, i as isEmptyString, U as UniTemplate, c as uniSmartWrap } from './index-899401b3.js';
import { u as uniIconsFaFontClass } from './index-35f37625.js';

const UniIconFaComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'solid';
    this.spin = false;
  }
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    const UniIconTag = !isEmptyString(name) ? `uni-${uniIconsFaFontClass(this.type)}-${name}` : null;
    return UniTemplate(h(UniIconTag, null, h("slot", null)));
  }
  componentDidRender() {
    const { el, color, size, angle, spin, speed, steps } = this;
    const props = { el, color, size, angle, spin, speed, steps, selector: 'svg' };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};

export { UniIconFaComponent as uni_icon_fa };
