import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniSetDefaultStyles } from '@uiwebkit/flag';

import svg from '../../../../assets/svg/mat/fiber-smart-record/two-tone.svg';

@Component({ tag: 'uni-mat-tt-fiber-smart-record' })
export class UniMatTtfFiberSmartRecordComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
