import { r as registerInstance, h, e as Host, g as getElement } from './index-0ff8f39d.js';
import { U as UniTemplate, c as uniSmartWrap } from './index-899401b3.js';

const iconsMatTwoToneCss = "@font-face{font-family:'Material Icons Two Tone';font-style:normal;font-weight:400;src:url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/mat/hESh6WRmNCxEqUmNyh3JDeGxjVVyMg4tHGctNCu0.woff2) format('woff2'),\n  url(https://cdn.jsdelivr.net/npm/@uiwebkit/icn@0.1.0/dist/assets/font/mat/hESh6WRmNCxEqUmNyh3JDeGxjVVyMg4tHGctNCuy.woff) format('woff')}.material-icons-two-tone{font-family:'Material Icons Two Tone';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:'liga'}";

const UniIconsMatTwoToneComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.spin = false;
  }
  render() {
    return UniTemplate(h(Host, { class: 'material-icons-two-tone' }, h("slot", null), this.name));
  }
  componentDidRender() {
    const { el, angle, spin, speed, steps } = this;
    const props = { el, filter: this.color, fontSize: this.size, angle, spin, speed, steps, selector: `Host` };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};
UniIconsMatTwoToneComponent.style = iconsMatTwoToneCss;

export { UniIconsMatTwoToneComponent as uni_icons_mat_tt };
