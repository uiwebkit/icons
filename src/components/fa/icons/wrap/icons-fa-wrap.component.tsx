import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniIconsFaMode } from '../models';
import { UniColor } from '../../../../models';

@Component({ tag: 'uni-icons-fa-wrap' })
export class UniIconsFaWrapComponent implements ComponentInterface {
  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) mode: UniIconsFaMode = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  render(): VNode {
    const CustomIconsTag = `uni-icons-fa-${this.mode}-wrap`;

    return (
      <CustomIconsTag
        active={this.active}
        name={this.name}
        color={this.color}
        selector={this.selector}
        all={this.all}
        test={'123'}
      >
        <slot />
      </CustomIconsTag>
    );
  }
}
