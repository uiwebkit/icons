import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/tab-unselected/two-tone.svg';

@Component({ tag: 'uni-mat-tt-tab-unselected' })
export class UniMatTtTabUnselectedComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
