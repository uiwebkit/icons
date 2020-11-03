import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor } from '../../../models';

@Component({ tag: 'uni-icon-fa' })
export class UniIconMatComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  @Prop({ reflect: true }) size: string = 'default';

  render(): VNode {
    const UniIconTag = `uni-icon-fa-${this.name}`;

    return (
      <UniIconTag color={this.color} size={this.size}>
        <slot />
      </UniIconTag>
    );
  }
}
