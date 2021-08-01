import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/open-with/two-tone.svg';

@Component({ tag: 'uni-mat-tt-open-with' })
export class UniMatTtOpenWithComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
