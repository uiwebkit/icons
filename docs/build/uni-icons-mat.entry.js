import { r as registerInstance, h } from './index-0ff8f39d.js';
import { U as UniTemplate } from './index-899401b3.js';
import { b as uniMatTypeShort } from './index-35f37625.js';

const UniIconsMatComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.type = 'filled';
    this.spin = false;
  }
  render() {
    const { name, color, size, angle, spin, speed, steps } = this;
    const props = { name, color, size, angle, spin, speed, steps };
    const UniIconsMatTag = `uni-icons-mat-${uniMatTypeShort(this.type)}`;
    return UniTemplate(h(UniIconsMatTag, Object.assign({}, props), h("slot", null)));
  }
};

export { UniIconsMatComponent as uni_icons_mat };
