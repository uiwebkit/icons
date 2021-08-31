import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../../assets/svg/bi/twitter.svg';
import { uniSetDefaultStyles } from '../../../../../utils';

@Component({ tag: 'uni-bi-twitter' })
export class UniBiTwitterComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
