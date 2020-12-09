import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/bs/alarm-fill.svg';

@Component({ tag: 'uni-bs-alarm-fill' })
export class UniBsAlarmFillComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
