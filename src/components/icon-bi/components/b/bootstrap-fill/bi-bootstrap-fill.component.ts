import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../../assets/svg/bi/bootstrap-fill.svg';
import { uniSetDefaultStyles } from '../../../../../utils';

@Component({ tag: 'uni-bi-bootstrap-fill' })
export class UniBiBootstrapFillComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
