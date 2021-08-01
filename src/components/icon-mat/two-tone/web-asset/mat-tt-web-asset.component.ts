import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/web-asset/two-tone.svg';

@Component({ tag: 'uni-mat-tt-web-asset' })
export class UniMatTtWebAssetComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
