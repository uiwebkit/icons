import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

import { UniColor, UniIconDefault, UniIconsMatDefault, UniIconsMatFont, UniSize } from '../../../models';

@Component({ tag: 'uni-icons-mat-shadow' })
export class UniIconsMatShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) font: UniIconsMatFont = UniIconsMatDefault.font as UniIconsMatFont;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: UniSize = UniIconDefault.size as UniSize;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { name, color, size, rotate, degree, speed, steps } = this;
    const props = { name, color, size, rotate, degree, speed, steps };
    const UniIconsMatShadowTag = `uni-icons-mat-${this.font}-shadow`;
    const UniIconsMatTag = `uni-icons-mat-${this.font}`;

    return (
      <Fragment>
        <UniIconsMatShadowTag {...props}>
          <slot />
        </UniIconsMatShadowTag>
        {/*To load font face (shadow root cannot)*/}
        <UniIconsMatTag hidden/>
      </Fragment>
    );
  }
}
