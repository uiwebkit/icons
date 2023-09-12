import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { b as uniGetCleanContent, U as UniTemplate } from './index-899401b3.js';
import { a as uniFaTypeShort } from './index-35f37625.js';

const UniIconsFaComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'solid';
    this.spin = false;
  }
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    const { color, size, angle, spin, speed, steps } = this;
    const props = { name, color, size, angle, spin, speed, steps };
    const UniIconsFaTag = `uni-icons-fa-${uniFaTypeShort(this.type)}`;
    return UniTemplate(h(UniIconsFaTag, Object.assign({}, props), h("slot", null)));
  }
  get el() { return getElement(this); }
};

export { UniIconsFaComponent as uni_icons_fa };
