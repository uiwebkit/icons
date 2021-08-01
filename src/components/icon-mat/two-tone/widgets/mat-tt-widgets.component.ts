import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/widgets/two-tone.svg';

@Component({ tag: 'uni-mat-tt-widgets' })
export class UniMatTtWidgetsComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
