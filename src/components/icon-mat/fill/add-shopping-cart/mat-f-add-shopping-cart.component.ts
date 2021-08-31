import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/add-shopping-cart/filled.svg';
import { uniSetDefaultStyles } from '../../../../utils';

@Component({ tag: 'uni-mat-f-add-shopping-cart' })
export class UniMatFAddShoppingCartComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
