import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../../assets/svg/bi/question-circle.svg';
import { uniSetDefaultStyles } from '../../../../../utils';

@Component({ tag: 'uni-bi-question-circle' })
export class UniBiQuestionCircleComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
