import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/toggle-on/two-tone.svg';

@Component({ tag: 'uni-mat-tt-toggle-on' })
export class UniMatTtToggleOnComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
