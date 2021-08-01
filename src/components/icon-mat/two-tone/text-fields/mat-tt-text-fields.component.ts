import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/text-fields/two-tone.svg';

@Component({ tag: 'uni-mat-tt-text-fields' })
export class UniMatTtTextFieldsComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
