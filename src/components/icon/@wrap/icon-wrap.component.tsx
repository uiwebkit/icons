import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { UniColor, UniIconDefault, UniSize } from '../../../models';
import { uniModify, uniModifyClass, uniModifyStyle } from '../../../utils';

@Component({
  tag: 'uni-icon-wrap',
  styleUrl: 'icon-wrap.css',
})
export class UniIconWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) classes: string;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: UniSize = UniIconDefault.size as UniSize;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true, mutable: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, selector, all } = this;
    const inColor = ['default', 'primary', 'success', 'accent', 'warn'].includes(this.color);
    const inSize = ['default', 'lg', 'md', 'sm', 'xs'].includes(this.size);
    let classes: string[] = this.classes ? this.classes.split(' ') : [];
    let styles: any = {};

    if (inColor) {
      classes.push(`uni-color-${this.color}`);
    } else {
      styles.color = this.color;
      styles.fill = this.color;
    }

    if (inSize) {
      classes.push(`uni-icon-size-${this.size}`);
    } else {
      styles.height = this.size;
      styles.width = this.size;
    }

    if (this.degree) {
      const rotate = `rotate(${this.degree}deg)`;

      styles.transform = rotate;
      styles['-webkit-transform'] = rotate;
    }

    if (this.rotate) {
      this.speed = this.speed || 1;
      const rotation = `uni-rotate ${this.speed}s infinite ${this.steps ? 'steps(' + this.steps + ')' : 'linear'}`;

      styles.animation = rotation;
      styles['-webkit-animation'] = rotation;
    }

    if (classes.length > 0) {
      uniModify({ el, selector, all }, uniModifyClass, classes, 'uni-icon-wrap');
    }

    if (Object.keys(styles).length > 0) {
      uniModify({ el, selector, all }, uniModifyStyle, styles, 'uni-icon-wrap');
    }
  }
}
