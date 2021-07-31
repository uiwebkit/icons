import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../../assets/svg/bi/lightbulb-fill.svg';

@Component({ tag: 'uni-bi-lightbulb-fill' })
export class UniBiLightbulbFillComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
