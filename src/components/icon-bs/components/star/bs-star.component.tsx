import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/bs/s/star.svg';

@Component({ tag: 'uni-bs-star' })
export class UniBsStarComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
