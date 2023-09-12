import { r as registerInstance, g as getElement } from './index-0ff8f39d.js';
import { u as uniSetDefaultStyles } from './index-899401b3.js';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 3h14v14H7z" opacity=".3"/><path d="M3 23h16v-2H3V5H1v16c0 1.1.9 2 2 2zM21 1H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14z"/></svg>`;

const UniMatTtFilterNoneComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
  get el() { return getElement(this); }
};

export { UniMatTtFilterNoneComponent as uni_mat_tt_filter_none };
