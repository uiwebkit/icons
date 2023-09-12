import { r as registerInstance, g as getElement } from './index-0ff8f39d.js';
import { u as uniSetDefaultStyles } from './index-899401b3.js';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>`;

const UniMatFVisibilityComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
  get el() { return getElement(this); }
};

export { UniMatFVisibilityComponent as uni_mat_f_visibility };
