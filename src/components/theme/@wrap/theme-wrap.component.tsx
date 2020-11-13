import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { UniColor, UniSize } from '../../../models';
import { uniModifyAsync, uniModifyClass, uniModifyStyle } from '../../../utils';

@Component({
  tag: 'uni-theme-wrap',
  styleUrl: 'theme-wrap.css',
})
export class UniThemeWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) classes: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, selector, all } = this;
    const inColor = ['primary', 'success', 'accent', 'warn'].includes(this.color);
    const inSize = ['lg', 'md', 'sm', 'xs'].includes(this.size as UniSize);
    let classes: string[] = this.classes ? this.classes.split(' ') : [];
    let styles: any = {};

    if (inColor) {
      classes.push(`uni-color-${this.color}`);
    } else if (this.color) {
      styles.color = this.color;
      styles.fill = this.color;
    }

    if (inSize) {
      classes.push(`uni-size-${this.size}`);
    } else if (this.size) {
      styles.height = this.size;
      styles.width = this.size;
    }

    if (classes.length > 0) {
      uniModifyAsync({ el, selector, all }, classes, uniModifyClass);
    }

    if (Object.keys(styles).length > 0) {
      uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
    }
  }
}
