import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { UniColor, UniIconDefault } from '../../../models';
import { uniAddClasses, uniModifyStyle, uniModifyTarget } from '../../../utils';

@Component({
  tag: 'uni-icon-wrap',
  styleUrl: '../styles/icon-wrap.css',
})
export class UniIconWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: string = UniIconDefault.size;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true, mutable: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  componentWillLoad(): Promise<void> | void {
    const { el } = this;
    const inColor = ['default', 'primary', 'success', 'accent', 'warn'].includes(this.color);
    const inSize = ['default'].includes(this.size);
    let classes: string[] = [];
    let styles: any = {};

    if (inColor) {
      classes.push(`uni-color-${this.color}`);
    } else {
      styles.fill = this.color;
    }

    if (inSize) {
      classes.push(`uni-icon-size-${this.size}`);
    } else {
      styles.height = this.size;
      styles.width = this.size;
    }

    if (this.rotate) {
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
    }

    if (classes.length > 0) {
      uniModifyTarget({ el }, uniAddClasses, classes, 'uni-icon-wrap');
    }

    if (Object.keys(styles).length > 0) {
      uniModifyTarget({ el }, uniModifyStyle, styles, 'uni-icon-wrap');
    }
  }
}
