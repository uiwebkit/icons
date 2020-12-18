import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/fa/brands/font-awesome-alt.svg';
import { uniModifyAttr } from '../../../../utils';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-fab-font-awesome-alt' })
export class UniFabFontAwesomeAltComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniModifyAttr([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
