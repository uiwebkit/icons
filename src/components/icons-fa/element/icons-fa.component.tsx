import { Component, ComponentInterface, Host, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-fa',
  styleUrl: '../styles/icons-fa.css',
})
export class UniIconsFaComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: 's' | 'r' | 'b' = 's';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return <Host class={`fa${this.mode} fa-${this.name}`}/>;
  }
}
