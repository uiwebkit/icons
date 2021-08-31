import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../../assets/svg/bi/bootstrap.svg';
import { uniSetDefaultStyles } from '../../../../../utils';

@Component({ tag: 'uni-bi-bootstrap' })
export class UniBiBootstrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
