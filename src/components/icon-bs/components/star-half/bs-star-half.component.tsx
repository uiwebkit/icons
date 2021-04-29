import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/bs/s/star-half.svg';

@Component({ tag: 'uni-bs-star-half' })
export class UniBsStarHalfComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
