import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/bubble-chart/two-tone.svg';

@Component({ tag: 'uni-mat-tt-bubble-chart' })
export class UniMatTtBubbleChartComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
