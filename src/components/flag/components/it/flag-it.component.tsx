import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import svg from '../../../../assets/svg/flag/4x3/it.svg';
import squareSvg from '../../../../assets/svg/flag/1x1/it.svg';

import { uniSetDefaultStyles, uniSetRound } from '../../../../utils';

@Component({ tag: 'uni-flag-it' })
export class UniFlagItComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) square: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = this.square ? squareSvg : svg;
    uniSetDefaultStyles(this.el);
    uniSetRound(this.el, this.round);
  }
}
