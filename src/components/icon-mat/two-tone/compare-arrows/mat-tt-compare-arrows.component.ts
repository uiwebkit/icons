import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/compare-arrows/two-tone.svg';
import { uniSetDefaultStyles } from '../../../../utils';

@Component({ tag: 'uni-mat-tt-compare-arrows' })
export class UniMatTtCompareArrowsComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
