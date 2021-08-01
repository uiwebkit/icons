import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/visibility/two-tone.svg';

@Component({ tag: 'uni-mat-tt-visibility' })
export class UniMatTtVisibilityComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
