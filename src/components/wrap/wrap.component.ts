import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { uniModifyAsync, uniModifyClass } from '../../utils';

@Component({ tag: 'uni-wrap' })
export class UniWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) classes: string;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, selector, all } = this;

    uniModifyAsync({ el, selector, all }, this.classes?.split(' '), uniModifyClass);
  }
}
