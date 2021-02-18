import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/wysiwyg/two-tone.svg';

@Component({ tag: 'uni-mat-tt-wysiwyg' })
export class UniMatTtWysiwygComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}
