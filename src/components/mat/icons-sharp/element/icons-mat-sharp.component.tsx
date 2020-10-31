import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-sharp',
  styleUrl: '../styles/icons-mat-sharp.css',
})
export class UniIconsMatSharpComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Host class={`material-icons-sharp uni-color-${this.color}`}>
        {this.name}
        <slot/>
        <uni-icons-mat-common />
      </Host>
    );
  }
}
