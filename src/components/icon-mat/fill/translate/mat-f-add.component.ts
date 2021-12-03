import { Component, ComponentInterface, Element } from '@stencil/core';

import { uniSetDefaultStyles } from '@uiwebkit/common';

import svg from '../../../../assets/svg/mat/translate/filled.svg';

@Component({ tag: 'uni-mat-f-translate' })
export class UniMatFTranslateComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
