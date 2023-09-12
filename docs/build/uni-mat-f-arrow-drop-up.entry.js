import { r as registerInstance, g as getElement } from './index-0ff8f39d.js';
import { u as uniSetDefaultStyles } from './index-899401b3.js';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 14l5-5 5 5z" /></svg>
`;

const UniMatFArrowDropUpComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
  get el() { return getElement(this); }
};

export { UniMatFArrowDropUpComponent as uni_mat_f_arrow_drop_up };
