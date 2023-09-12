import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { U as UniTemplate, b as uniGetCleanContent, c as uniSmartWrap } from './index-899401b3.js';

const UniIconsBiWrapComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // @Prop({ reflect: true }) angle: number;
    //
    // @Prop({ reflect: true }) spin: boolean = false;
    //
    // @Prop({ reflect: true }) speed: number;
    //
    // @Prop({ reflect: true }) steps: number;
    this.all = false;
  }
  render() {
    return UniTemplate(h("slot", null));
  }
  componentDidRender() {
    const name = this.name || uniGetCleanContent(this.el.firstElementChild);
    const { el, color, selector, all } = this;
    const props = { el, classes: `bi-${name}`, color, fontSize: this.size, selector, all };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};

export { UniIconsBiWrapComponent as uni_icons_bi_wrap };
