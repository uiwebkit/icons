import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { uniGetRotation, uniModifyAsync, uniModifyStyle } from '../../../utils';

@Component({
  tag: 'uni-rotate-wrap',
  styleUrl: 'rotate-wrap.css',
})
export class UniRotateWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true, mutable: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, degree, speed, steps, selector, all } = this;

    uniModifyAsync({ el, selector, all }, uniGetRotation({ degree, speed, steps }).styles, uniModifyStyle);
  }
}
