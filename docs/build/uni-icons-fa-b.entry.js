import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { b as uniGetCleanContent, d as UniHostTemplate, c as uniSmartWrap } from './index-899401b3.js';

const iconsFaBrandsCss = "/*!\n * Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */@font-face{font-family:'Font Awesome 5 Brands';font-style:normal;font-weight:400;font-display:block;src:url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/fa/fa-brands-400.eot);src:url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/fa/fa-brands-400.eot?#iefix) format(\"embedded-opentype\"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/fa/fa-brands-400.woff2) format(\"woff2\"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/fa/fa-brands-400.woff) format(\"woff\"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/fa/fa-brands-400.ttf) format(\"truetype\"),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/fa/fa-brands-400.svg#fontawesome) format(\"svg\")}.fab{font-family:'Font Awesome 5 Brands';font-weight:400}";

const UniIconsFaBrandsComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spin = false;
  }
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    return UniHostTemplate({ classes: `fab fa-${name}` }, h("slot", null));
  }
  componentDidRender() {
    const { el, color, angle, spin, speed, steps } = this;
    const props = { el, color, fontSize: this.size, angle, spin, speed, steps, selector: `Host` };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};
UniIconsFaBrandsComponent.style = iconsFaBrandsCss;

export { UniIconsFaBrandsComponent as uni_icons_fa_b };
