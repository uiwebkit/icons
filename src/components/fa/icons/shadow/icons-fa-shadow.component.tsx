import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

import { UniIconsFaMode } from '../models';
import { UniColor } from '../../../../models';

@Component({ tag: 'uni-icons-fa-shadow' })
export class UniIconsFaShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: UniIconsFaMode = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    const CustomIconsShadowTag = `uni-icons-fa-${this.mode}-shadow`;
    const CustomIconsTag = `uni-icons-fa-${this.mode}`;

    return (
      <Fragment>
        <CustomIconsShadowTag
          name={this.name}
          color={this.color}
        >
          <slot/>
        </CustomIconsShadowTag>
        {/*To load font face (shadow root cannot)*/}
        <CustomIconsTag/>
      </Fragment>
    );
  }
}
