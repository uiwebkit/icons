import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/fingerprint/filled.svg';

@Component({ tag: 'uni-mat-f-fingerprint' })
export class UniMatFFingerprintComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
