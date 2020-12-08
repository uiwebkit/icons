import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/favorite/two-tone.svg';

@Component({ tag: 'uni-mat-tt-favorite' })
export class UniMatTtFavoriteComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
