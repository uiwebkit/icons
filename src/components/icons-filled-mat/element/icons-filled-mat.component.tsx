import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-filled-mat',
  styleUrl: '../styles/icons-filled-mat.css',
})
export class UniIconsFilledMatComponent implements ComponentInterface {
  @Prop() name: string;

  @Prop() color: string;

  render(): VNode {
    return <Host class={'material-icons'}>{this.name}</Host>;
  }
}
