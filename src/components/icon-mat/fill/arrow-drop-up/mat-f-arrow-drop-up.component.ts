import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/arrow-drop-up/filled.svg';

@Component({ tag: 'uni-mat-f-arrow-drop-up' })
export class UniMatFArrowDropUpComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
