import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';

@Component({ tag: 'uni-icons-fa-shadow' })
export class UniIconsFaShadowComponent implements ComponentInterface {

  @Prop({ reflect: true }) font: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { name, color, size, rotate, degree, speed, steps } = this;
    const props = { name, color, size, rotate, degree, speed, steps };
    const UniIconsFaShadowTag = `uni-icons-fa-${this.font}-shadow`;
    const UniIconsFaTag = `uni-icons-fa-${this.font}`;

    return (
      <Fragment>
        <UniIconsFaShadowTag {...props}>
          <slot />
        </UniIconsFaShadowTag>
        {/*To load font face (shadow root cannot)*/}
        <UniIconsFaTag hidden />
      </Fragment>
    );
  }
}
