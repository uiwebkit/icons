import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

@Component({ tag: 'uni-icons-mat-shadow' })
export class UniIconsMatShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { name, color } = this;
    const props = { name, color };
    const UniIconsTag = `uni-icons-${this.mode}-mat`;
    const UniIconsTagShadow = `uni-icons-${this.mode}-mat-shadow`;

    return (
      <Fragment>
        {/*To load font face (shadow root cannot)*/}
        <UniIconsTag/>

        <UniIconsTagShadow {...props}>
          <slot />
        </UniIconsTagShadow>
      </Fragment>
    );
  }
}
