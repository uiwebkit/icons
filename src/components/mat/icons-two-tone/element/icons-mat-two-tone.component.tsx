import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-two-tone',
  styleUrl: '../styles/icons-mat-two-tone.css',
})
export class UniIconsMatTwoToneComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return <Host class={'material-icons-two-tone'}>{this.name}</Host>;
  }
}
