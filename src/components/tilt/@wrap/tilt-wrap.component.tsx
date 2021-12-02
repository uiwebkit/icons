import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-tilt-wrap' })
export class UniTiltWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) selector: string;

  componentWillLoad(): Promise<void> | void {
    const { el, angle, selector, all } = this;
    const props = { el, angle, selector, all };

    uniSmartWrap(props);
  }

  render(): VNode {
    return <slot/>;
  }
}
