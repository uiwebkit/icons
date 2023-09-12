import { r as registerInstance, h, e as Host, g as getElement } from './index-0ff8f39d.js';
import { U as UniTemplate, c as uniSmartWrap } from './index-899401b3.js';

const iconsMatRoundCss = "@font-face{font-family:'Material Icons Round';font-style:normal;font-weight:400;src:url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/mat/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmP.woff2) format('woff2'),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/mat/LDItaoyNOAY6Uewc665JcIzCKsKc_M9flwmJ.woff) format('woff')}.material-icons-round{font-family:'Material Icons Round';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga'}";

const UniIconsMatRoundComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spin = false;
  }
  render() {
    return UniTemplate(h(Host, { class: 'material-icons-round' }, h("slot", null), this.name));
  }
  componentDidRender() {
    const { el, color, angle, spin, speed, steps } = this;
    const props = { el, color, fontSize: this.size, angle, spin, speed, steps, selector: `Host` };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};
UniIconsMatRoundComponent.style = iconsMatRoundCss;

export { UniIconsMatRoundComponent as uni_icons_mat_r };
