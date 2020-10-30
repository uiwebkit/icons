import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

@Component({
  tag: 'uni-icons-fa-regular',
  styleUrl: '../styles/icons-fa-regular.css',
})
export class UniIconsFaRegularComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <Fragment>
        <i class={`far fa-${this.name}`} />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
