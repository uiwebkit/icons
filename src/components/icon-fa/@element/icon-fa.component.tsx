import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconDefault, UniIconsFaFont, UniSize } from '../../../models';
import { uniIconsFaFontClass } from '../../../utils';

@Component({ tag: 'uni-icon-fa' })
export class UniIconMatComponent implements ComponentInterface {

  @Prop({ reflect: true }) font: UniIconsFaFont;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: UniSize = UniIconDefault.size as UniSize;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { color, size, rotate, degree, speed, steps } = this;
    const props = { color, size, rotate, degree, speed, steps };
    const UniIconTag = `uni-icon-${uniIconsFaFontClass(this.font)}-${this.name}`;

    return (
      <UniIconTag {...props}>
        <slot />
      </UniIconTag>
    );
  }
}
