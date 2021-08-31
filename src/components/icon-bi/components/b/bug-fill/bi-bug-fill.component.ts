import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../../assets/svg/bi/bug-fill.svg';
import { uniSetDefaultStyles } from '../../../../../utils';

@Component({ tag: 'uni-bi-bug-fill' })
export class UniBiBugFillComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
