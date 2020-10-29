import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-fa-solid',
  styleUrl: '../styles/icons-fa-solid.css',
})
export class UniIconsFaSolidComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return <Host class={`fas fa-${this.name}`}/>;
  }
}
