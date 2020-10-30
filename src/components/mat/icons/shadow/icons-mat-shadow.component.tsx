import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

import { UniIconsMatMode } from '../models';

@Component({ tag: 'uni-icons-mat-shadow' })
export class UniIconsMatShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: UniIconsMatMode = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { name, color } = this;
    const props = { name, color };
    const UniIconsTagShadow = `uni-icons-mat-${this.mode}-shadow`;
    const UniIconsTag = `uni-icons-mat-${this.mode}`;

    return (
      <Fragment>
        <UniIconsTagShadow {...props}>
          <slot />
        </UniIconsTagShadow>
        {/*To load font face (shadow root cannot)*/}
        <UniIconsTag/>
      </Fragment>
    );
  }
}
