import { Component, ComponentInterface, h, VNode, Prop, Fragment } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-brands-shadow',
  styleUrl: '../styles/icons-fa-brands.css',
  shadow: true,
})
export class UniIconsFaBrandsShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <i class={`fab fa-${this.name} uni-color-${this.color}`} />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
