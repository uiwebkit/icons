import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { UniColor, UniIconDefault, UniSize } from '../../../models';
import { uniModify, uniModifyClass, uniModifyStyle } from '../../../utils';

@Component({
  tag: 'uni-theme-wrap',
  styleUrl: 'theme-wrap.css',
})
export class UniThemeWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) classes: string;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: UniSize = UniIconDefault.size as UniSize;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, selector, all } = this;
    const inColor = ['default', 'primary', 'success', 'accent', 'warn'].includes(this.color);
    const inSize = ['default', 'lg', 'md', 'sm', 'xs'].includes(this.size);
    let classes: string[] = this.classes ? this.classes.split(' ') : [];
    let styles: any = {};

    if (inColor) {
      classes.push(`uni-theme-color-${this.color}`);
    } else {
      styles.color = this.color;
      styles.fill = this.color;
    }

    if (inSize) {
      classes.push(`uni-theme-size-${this.size}`);
    } else {
      styles.height = this.size;
      styles.width = this.size;
    }

    if (classes.length > 0) {
      uniModify({ el, selector, all }, uniModifyClass, classes, 'uni-theme-wrap');
    }

    if (Object.keys(styles).length > 0) {
      uniModify({ el, selector, all }, uniModifyStyle, styles, 'uni-theme-wrap');
    }
  }
}
