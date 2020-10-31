import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-two-tone',
  styleUrl: '../styles/icons-mat-two-tone.css',
})
export class UniIconsMatTwoToneComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Host class={`material-icons-two-tone uni-color-${this.color}-fix`}>
        {this.name}
        <slot/>
        <uni-icons-mat-common />
      </Host>
    );
  }
}
