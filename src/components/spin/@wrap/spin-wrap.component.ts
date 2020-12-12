import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-spin-wrap' })
export class UniSpinWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, speed, steps, selector, all } = this;
    const props = { el, spin: true, speed, steps, selector, all };

    uniSmartWrap(props);
  }
}
