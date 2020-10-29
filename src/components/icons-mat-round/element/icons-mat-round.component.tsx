import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-round',
  styleUrl: '../styles/icons-mat-round.css',
})
export class UniIconsMatRoundComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return <Host class={'material-icons-round'}>{this.name}</Host>;
  }
}
