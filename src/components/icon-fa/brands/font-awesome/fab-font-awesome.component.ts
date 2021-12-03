import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniSetDefaultStyles } from '@uiwebkit/common';

import svg from '../../../../assets/svg/fa/brands/font-awesome.svg';
import { uniModifyAttr } from '@uiwebkit/common';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-fab-font-awesome' })
export class UniFabFontAwesomeComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
    uniModifyAttr([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
