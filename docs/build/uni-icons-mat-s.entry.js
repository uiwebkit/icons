import { r as registerInstance, h, e as Host, g as getElement } from './index-0ff8f39d.js';
import { U as UniTemplate, c as uniSmartWrap } from './index-899401b3.js';

const iconsMatSharpCss = "@font-face{font-family:'Material Icons Sharp';font-style:normal;font-weight:400;src:url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/mat/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvR.woff2) format('woff2'),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/mat/oPWQ_lt5nv4pWNJpghLP75WiFR4kLh3kvmvX.woff) format('woff')}.material-icons-sharp{font-family:'Material Icons Sharp';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga'}";

const UniIconsMatSharpComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spin = false;
  }
  render() {
    return UniTemplate(h(Host, { class: 'material-icons-sharp' }, h("slot", null), this.name));
  }
  componentDidRender() {
    const { el, color, angle, spin, speed, steps } = this;
    const props = { el, color, fontSize: this.size, angle, spin, speed, steps, selector: `Host` };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};
UniIconsMatSharpComponent.style = iconsMatSharpCss;

export { UniIconsMatSharpComponent as uni_icons_mat_s };
