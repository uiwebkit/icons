import { r as registerInstance, g as getElement } from './index-0ff8f39d.js';
import { a as uniSetRound, b as uniSetDefaultStyles } from './index-6b825bea.js';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 640 480">
  <path fill="#ffce00" d="M0 320h640v160H0z"/>
  <path d="M0 0h640v160H0z"/>
  <path fill="#d00" d="M0 160h640v160H0z"/>
</svg>
`;

const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512">
  <path fill="#ffce00" d="M0 341.3h512V512H0z"/>
  <path d="M0 0h512v170.7H0z"/>
  <path fill="#d00" d="M0 170.7h512v170.6H0z"/>
</svg>
`;

const UniFlagDeComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.square = false;
    this.round = false;
  }
  onSquare(newValue) {
    this.el.innerHTML = newValue ? squareSvg : svg;
  }
  onRound(newValue) {
    uniSetRound(this.el, newValue);
  }
  componentWillLoad() {
    this.el.innerHTML = this.square ? squareSvg : svg;
    uniSetDefaultStyles(this.el);
    uniSetRound(this.el, this.round);
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "square": ["onSquare"],
    "round": ["onRound"]
  }; }
};

export { UniFlagDeComponent as U };
