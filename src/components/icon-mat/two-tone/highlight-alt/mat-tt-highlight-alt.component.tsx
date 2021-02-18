import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/highlight-alt/two-tone.svg';

@Component({ tag: 'uni-mat-tt-highlight-alt' })
export class UniMatTtHighlightAltComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
