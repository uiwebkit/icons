import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/contact-mail/filled.svg';

@Component({ tag: 'uni-mat-f-contact-mail' })
export class UniMatFContactMailComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
