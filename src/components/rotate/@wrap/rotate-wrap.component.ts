import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { uniModifyAsync, uniModifyStyle } from '../../../utils';

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
    const { el, selector, all } = this;
    let styles: any = {};

    if (this.degree) {
      const rotate = `rotate(${this.degree}deg)`;

      styles.transform = rotate;
      styles['-webkit-transform'] = rotate;
    } else {
      this.speed = this.speed || 1;
      const rotation = `uni-rotate ${this.speed}s infinite ${this.steps ? 'steps(' + this.steps + ')' : 'linear'}`;

      styles.animation = rotation;
      styles['-webkit-animation'] = rotation;
    }

    if (Object.keys(styles).length > 0) {
      uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
    }
  }
}
