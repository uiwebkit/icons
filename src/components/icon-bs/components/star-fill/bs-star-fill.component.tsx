import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/bs/s/star-fill.svg';

@Component({ tag: 'uni-bs-star-fill' })
export class UniBsStarFillComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
