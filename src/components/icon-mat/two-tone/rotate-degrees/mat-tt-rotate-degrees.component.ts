import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniSetDefaultStyles } from '@uiwebkit/common';

import svg from '../../../../assets/svg/mat/rotate-degrees/two-tone.svg';

@Component({ tag: 'uni-mat-tt-rotate-degrees' })
export class UniMatTtRotateDegreesComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
