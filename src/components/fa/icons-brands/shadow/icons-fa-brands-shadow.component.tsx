import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

@Component({
  tag: 'uni-icons-fa-brands-shadow',
  styleUrl: '../styles/icons-fa-brands.css',
  shadow: true,
})
export class UniIconsFaBrandsShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <Fragment>
        <i class={`fab fa-${this.name}`} />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
