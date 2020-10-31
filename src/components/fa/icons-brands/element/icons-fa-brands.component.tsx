import { Component, ComponentInterface, h, VNode, Prop, Host } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-brands',
  styleUrl: '../styles/icons-fa-brands.css',
})
export class UniIconsFaBrandsComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Host class={`fab fa-${this.name} uni-color-${this.color}`}>
        <uni-icons-fa-common />
      </Host>
    );
  }
}
