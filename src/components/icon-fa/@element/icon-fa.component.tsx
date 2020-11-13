import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
import { uniIconsFaFontClass, UniRotateTemplate, UniThemeRotateTemplate, UniThemeTemplate } from '../../../utils';

@Component({ tag: 'uni-icon-fa' })
export class UniIconMatComponent implements ComponentInterface {

  @Prop({ reflect: true }) category: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { color, size, degree, speed, steps } = this;
    const props = { color, size, degree, speed, steps, selector: 'svg' };
    const UniIconTag = `uni-icon-${uniIconsFaFontClass(this.category)}-${this.name}`;

    return this.rotate && (this.color || this.size)
      ? UniThemeRotateTemplate({ ...props }, <UniIconTag />)
      : this.rotate
        ? UniRotateTemplate({ ...props }, <UniIconTag />)
        : this.color || this.size
          ? UniThemeTemplate({ ...props }, <UniIconTag />)
          : <UniIconTag />;
  }
}
