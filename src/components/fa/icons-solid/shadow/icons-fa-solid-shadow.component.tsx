import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

@Component({
  tag: 'uni-icons-fa-solid-shadow',
  styleUrl: '../styles/icons-fa-solid.css',
  shadow: true,
})
export class UniIconsFaSolidShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <Fragment>
        <i class={`fas fa-${this.name}`} />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
