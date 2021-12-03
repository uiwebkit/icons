import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniSetDefaultStyles } from '@uiwebkit/common';

import svg from '../../../../assets/svg/mat/favorite/filled.svg';

@Component({ tag: 'uni-mat-f-favorite' })
export class UniMatFFavoriteComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
