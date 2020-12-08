import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/fa/regular/copy.svg';
import { uniModifyStyle } from '../../../../utils';

@Component({ tag: 'uni-far-copy' })
export class UniFarCopyComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniModifyStyle([this.el.firstElementChild as HTMLElement], {height: '20px', width: '20px'});
  }
}
