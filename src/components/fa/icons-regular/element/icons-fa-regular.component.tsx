import { Component, ComponentInterface, h, VNode, Prop, Host } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-regular',
  styleUrl: '../styles/icons-fa-regular.css',
})
export class UniIconsFaRegularComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Host class={`far fa-${this.name} uni-color-${this.color}`}>
        <uni-icons-fa-common />
      </Host>
    );
  }
}
