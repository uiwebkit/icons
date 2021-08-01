import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/smart-button/two-tone.svg';

@Component({ tag: 'uni-mat-tt-smart-button' })
export class UniMatTtSmartButtonComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
