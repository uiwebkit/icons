import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/fa/brands/twitter.svg';
import { uniModifyStyle } from '../../../../utils';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-fab-twitter' })
export class UniFabTwitterComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniModifyStyle([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
