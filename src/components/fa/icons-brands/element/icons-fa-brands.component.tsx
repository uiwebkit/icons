import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

@Component({
  tag: 'uni-icons-fa-brands',
  styleUrl: '../styles/icons-fa-brands.css',
})
export class UniIconsFaBrandsComponent implements ComponentInterface {
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
