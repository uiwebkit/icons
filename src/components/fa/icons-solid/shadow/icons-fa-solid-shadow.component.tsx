import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-solid-shadow',
  styleUrl: '../styles/icons-fa-solid.css',
  shadow: true,
})
export class UniIconsFaSolidShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <i class={`fas fa-${this.name} uni-color-${this.color}`} />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
