import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniSetDefaultStyles } from '@uiwebkit/flag';

import svg from '../../../../assets/svg/mat/3d-rotation/filled.svg';

@Component({ tag: 'uni-mat-f-3d-rotation' })
export class UniMatF3dRotationComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
