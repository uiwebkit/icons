import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniSetDefaultStyles } from '@uiwebkit/flag';

import svg from '../../../../assets/svg/fa/brands/bootstrap.svg';

import { uniIconFaDimensions } from '../../../../models';
import { uniModifyAttr } from '../../../../utils';

@Component({ tag: 'uni-fab-bootstrap' })
export class UniFabBootstrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
    uniModifyAttr([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
