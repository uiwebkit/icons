import { Component, ComponentInterface, h, VNode, Prop, Host } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-solid',
  styleUrl: '../styles/icons-fa-solid.css',
})
export class UniIconsFaSolidComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Host class={`fas fa-${this.name} uni-color-${this.color}`}>
        <uni-icons-fa-common />
      </Host>
    );
  }
}
