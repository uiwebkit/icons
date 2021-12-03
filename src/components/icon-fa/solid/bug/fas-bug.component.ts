import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniModifyAttr, uniSetDefaultStyles } from '@uiwebkit/common';

import svg from '../../../../assets/svg/fa/solid/bug.svg';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-fas-bug' })
export class UniFasBugComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
    uniModifyAttr([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
