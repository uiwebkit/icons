import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/format-list-bulleted/two-tone.svg';

@Component({ tag: 'uni-mat-tt-format-list-bulleted' })
export class UniMatTtFormatListBulletedComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
