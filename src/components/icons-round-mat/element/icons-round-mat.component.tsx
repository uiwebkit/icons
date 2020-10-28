import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-round-mat',
  styleUrl: '../styles/icons-round-mat.css'
})
export class UniIconsRoundMatComponent implements ComponentInterface {
  @Prop() name: string;

  @Prop() color: string;

  render(): VNode {
    return <Host class={'material-icons-round'}>{this.name}</Host>
  }
}
