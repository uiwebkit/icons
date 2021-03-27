import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/menu/filled.svg';

@Component({ tag: 'uni-mat-f-menu' })
export class UniMatFMenuComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.style.display = 'inherit';
    this.el.innerHTML = svg;
  }
}
