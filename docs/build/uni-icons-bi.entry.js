import { r as registerInstance, h, g as getElement } from './index-0ff8f39d.js';
import { b as uniGetCleanContent, d as UniHostTemplate, c as uniSmartWrap } from './index-899401b3.js';

const UniIconsBiComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  // @Prop({ reflect: true }) angle: number;
  //
  // @Prop({ reflect: true }) spin: boolean = false;
  //
  // @Prop({ reflect: true }) speed: number;
  //
  // @Prop({ reflect: true }) steps: number;
  render() {
    const name = this.name || uniGetCleanContent(this.el);
    return UniHostTemplate({ classes: `bi-${name}` }, h("slot", null));
  }
  componentDidRender() {
    const { el, color } = this;
    const props = { el, color, fontSize: this.size, selector: `Host` };
    uniSmartWrap(props);
  }
  get el() { return getElement(this); }
};

export { UniIconsBiComponent as uni_icons_bi };
