import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { b as uniGetCleanContent, i as isEmptyString, U as UniTemplate, c as uniSmartWrap } from './index-899401b3.js';

const UniIconBiComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.img = false;
    this.url = 'https://cdn.jsdelivr.net/npm/@uiwebkit/icn';
    this.version = '0.1.0';
    this.alter = 'uni-icon-bi';
    this.spin = false;
  }
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    const UniIconTag = !isEmptyString(name) ? `uni-bi-${name}` : null;
    return this.img
      ? h("img", { src: `${this.url}@${this.version}/dist/assets/svg/bi/${name}.svg`, alt: this.alter })
      : UniTemplate(h(UniIconTag, null, h("slot", null)));
  }
  componentDidRender() {
    const { el, color, size, angle, spin, speed, steps } = this;
    const props = { el, color, size, angle, spin, speed, steps, selector: this.img ? 'img' : 'svg' };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};

export { UniIconBiComponent as uni_icon_bi };
