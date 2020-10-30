import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-outlined',
  styleUrl: '../styles/icons-mat-outlined.css',
})
export class UniIconsMatOutlinedComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return <Host class={'material-icons-outlined'}>{this.name}</Host>;
  }
}
