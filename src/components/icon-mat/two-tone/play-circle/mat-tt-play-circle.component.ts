import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/play-circle/two-tone.svg';
import { uniSetDefaultStyles } from '../../../../utils';

@Component({ tag: 'uni-mat-tt-play-circle' })
export class UniMatTtPlayCircleComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
