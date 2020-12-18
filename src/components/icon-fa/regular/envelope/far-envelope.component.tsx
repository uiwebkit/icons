import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/fa/regular/envelope.svg';
import { uniModifyAttr } from '../../../../utils';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-far-envelope' })
export class UniFarEnvelopeComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniModifyAttr([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
