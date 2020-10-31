import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniIconsMatMode } from '../models';
import { UniColor } from '../../../../models';

@Component({ tag: 'uni-icons-mat' })
export class UniIconsMatComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: UniIconsMatMode = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    const UniIconsTag = `uni-icons-mat-${this.mode}`;

    return (
      <UniIconsTag
        name={this.name}
        color={this.color}
      >
        <slot/>
      </UniIconsTag>
    );
  }
}
