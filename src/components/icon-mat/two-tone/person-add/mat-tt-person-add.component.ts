import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/person-add/two-tone.svg';

@Component({ tag: 'uni-mat-tt-person-add' })
export class UniMatTtPersonAddComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
