import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
import { uniIconsFaFontClass } from '../../../utils';

@Component({ tag: 'uni-icon-fa' })
export class UniIconMatComponent implements ComponentInterface {

  @Prop({ reflect: true }) font: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { color, size, rotate, degree, speed, steps } = this;
    const props = { color, size, rotate, degree, speed, steps };
    const UniIconTag = `uni-icon-${uniIconsFaFontClass(this.font)}-${this.name}`;

    const UniThemeIconTag = () => {
      return (
        <uni-theme-wrap color={this.color} size={this.size} selector={'svg'}>
          <UniIconTag {...props} />
        </uni-theme-wrap>
      );
    };

    const UniRotateIconTag = () => {
      return (
        <uni-rotate-wrap degree={this.degree} speed={this.speed} steps={this.steps} selector={'svg'}>
          <UniIconTag {...props} />
        </uni-rotate-wrap>
      );
    };

    const UniRotateThemeIconTag = () => {
      return (
        <uni-rotate-wrap degree={this.degree} speed={this.speed} steps={this.steps} selector={'svg'}>
          <UniThemeIconTag />
        </uni-rotate-wrap>
      );
    };

    return this.rotate && (this.color || this.size)
      ? <UniRotateThemeIconTag />
      : this.rotate
        ? <UniRotateIconTag />
        : this.color || this.size
          ? <UniThemeIconTag />
          : <UniIconTag {...props} />;
  }
}
