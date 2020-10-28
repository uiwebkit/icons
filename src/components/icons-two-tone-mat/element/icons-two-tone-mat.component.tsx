import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-two-tone-mat',
  styleUrl: '../styles/icons-two-tone-mat.css'
})
export class UniIconsTwoToneMatComponent implements ComponentInterface {
  @Prop() name: string;

  @Prop() color: string;

  render(): VNode {
    return <Host class={'material-icons-two-tone'}>{this.name}</Host>
  }
}
