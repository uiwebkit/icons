import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/add/filled.svg';

@Component({
  tag: 'uni-mat-f-add',
  styles: 'uni-mat-f-add {display: inherit}'
})
export class UniMatFAddComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}