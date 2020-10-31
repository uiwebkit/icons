import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-regular-shadow',
  styleUrl: '../styles/icons-fa-regular.css',
  shadow: true,
})
export class UniIconsFaRegularShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <i class={`far fa-${this.name} uni-color-${this.color}`} />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
