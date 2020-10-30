import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-filled',
  styleUrl: '../styles/icons-mat-filled.css',
})
export class UniIconsMatFilledComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return <Host class={'material-icons'}>{this.name}</Host>;
  }
}
