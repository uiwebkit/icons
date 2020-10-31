import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-filled',
  styleUrl: '../styles/icons-mat-filled.css',
})
export class UniIconsMatFilledComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Host class={`material-icons uni-color-${this.color}`}>
        {this.name}
        <slot/>
        <uni-icons-mat-common />
      </Host>
    );
  }
}
