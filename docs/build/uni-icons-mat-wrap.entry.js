import { r as registerInstance, h } from './index-0ff8f39d.js';
import { U as UniTemplate } from './index-899401b3.js';
import { b as uniMatTypeShort } from './index-35f37625.js';

const UniIconsMatWrapComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'filled';
    this.spin = false;
    this.all = false;
  }
  render() {
    const { name, color, size, angle, spin, speed, steps, selector, all } = this;
    const props = { name, color, size, angle, spin, speed, steps, selector, all };
    const UniIconsMatTag = `uni-icons-mat-${uniMatTypeShort(this.type)}-wrap`;
    return UniTemplate(h(UniIconsMatTag, Object.assign({}, props), h("slot", null)));
  }
};

export { UniIconsMatWrapComponent as uni_icons_mat_wrap };
