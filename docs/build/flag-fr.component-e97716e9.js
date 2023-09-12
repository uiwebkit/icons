import { r as registerInstance, g as getElement } from './index-0ff8f39d.js';
import { a as uniSetRound, b as uniSetDefaultStyles } from './index-6b825bea.js';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-fr" viewBox="0 0 640 480">
  <g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#fff" d="M0 0h640v480H0z"/>
    <path fill="#00267f" d="M0 0h213.3v480H0z"/>
    <path fill="#f31830" d="M426.7 0H640v480H426.7z"/>
  </g>
</svg>
`;

const squareSvg = `<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-fr" viewBox="0 0 512 512">
  <g fill-rule="evenodd" stroke-width="1pt">
    <path fill="#fff" d="M0 0h512v512H0z"/>
    <path fill="#00267f" d="M0 0h170.7v512H0z"/>
    <path fill="#f31830" d="M341.3 0H512v512H341.3z"/>
  </g>
</svg>
`;

const UniFlagFrComponent = class {
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

export { UniFlagFrComponent as U };
