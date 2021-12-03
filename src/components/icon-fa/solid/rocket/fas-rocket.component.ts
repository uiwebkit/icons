import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniModifyAttr, uniSetDefaultStyles } from '@uiwebkit/common';

import svg from '../../../../assets/svg/fa/solid/rocket.svg';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-fas-rocket' })
export class UniFasRocketComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
    uniModifyAttr([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
