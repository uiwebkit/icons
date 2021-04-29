import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import svg from '../../../../assets/svg/flag/4x3/ru.svg';
import squareSvg from '../../../../assets/svg/flag/1x1/ru.svg';

import { uniSetRound } from '../../../../utils';

@Component({ tag: 'uni-flag-ru' })
export class UniFlagRuComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) square: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = this.square ? squareSvg : svg;

    uniSetRound(this.el, this.round);
  }
}
