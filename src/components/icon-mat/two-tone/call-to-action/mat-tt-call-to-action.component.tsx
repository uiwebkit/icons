import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/call-to-action/two-tone.svg';

@Component({ tag: 'uni-mat-tt-call-to-action' })
export class UniMatTtCallToActionComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
