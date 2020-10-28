import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-outlined-mat',
  styleUrl: '../styles/icons-outlined-mat.css'
})
export class UniIconsOutlinedMatComponent implements ComponentInterface {
  @Prop() name: string;

  @Prop() color: string;

  render(): VNode {
    return <Host class={'material-icons-outlined'}>{this.name}</Host>
  }
}
