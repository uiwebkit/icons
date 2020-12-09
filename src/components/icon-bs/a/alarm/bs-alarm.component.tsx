import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/bs/alarm.svg';

@Component({ tag: 'uni-bs-alarm' })
export class UniBsAlarmComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
