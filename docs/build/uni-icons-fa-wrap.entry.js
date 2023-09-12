import { r as registerInstance, h } from './index-0ff8f39d.js';
import { U as UniTemplate } from './index-899401b3.js';
import { a as uniFaTypeShort } from './index-35f37625.js';

const UniIconsFaWrapComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'solid';
    this.spin = false;
    this.all = false;
  }
  render() {
    const { name, color, size, angle, spin, speed, steps, selector, all } = this;
    const props = { name, color, size, angle, spin, speed, steps, selector, all };
    const UniIconsFaTag = `uni-icons-fa-${uniFaTypeShort(this.type)}-wrap`;
    return UniTemplate(h(UniIconsFaTag, Object.assign({}, props), h("slot", null)));
  }
};

export { UniIconsFaWrapComponent as uni_icons_fa_wrap };
