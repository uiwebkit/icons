import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-sharp-mat',
  styleUrl: '../styles/icons-sharp-mat.css'
})
export class UniIconsSharpMatComponent implements ComponentInterface {
  @Prop() name: string;

  @Prop() color: string;

  render(): VNode {
    return <Host class={'material-icons-sharp'}>{this.name}</Host>
  }
}
