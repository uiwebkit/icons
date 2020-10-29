import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-sharp',
  styleUrl: '../styles/icons-mat-sharp.css',
})
export class UniIconsMatSharpComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return <Host class={'material-icons-sharp'}>{this.name}</Host>;
  }
}
