import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/radio-button-checked/two-tone.svg';

@Component({ tag: 'uni-mat-tt-radio-button-checked' })
export class UniMatTtRadioButtonCheckedComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
