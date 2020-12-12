import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-angle-wrap' })
export class UniAngleWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, degree, selector, all } = this;
    const props = { el, degree, selector, all };

    uniSmartWrap(props);
  }
}
