import { Component, ComponentInterface, Fragment, h, Prop, VNode } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-round-shadow',
  styleUrl: '../styles/icons-mat-round.css',
  shadow: true,
})
export class UniIconsMatRoundShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <i class={`material-icons-round uni-color-${this.color}`}>
          {this.name}
          <slot />
        </i>
        <uni-icons-mat-common />
      </Fragment>
    );
  }
}
