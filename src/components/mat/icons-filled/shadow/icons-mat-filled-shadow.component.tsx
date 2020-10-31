import { Component, ComponentInterface, h, Fragment, Prop, VNode } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-filled-shadow',
  styleUrl: '../styles/icons-mat-filled.css',
  shadow: true,
})
export class UniIconsMatFilledShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <i class={`material-icons uni-color-${this.color}`}>
          {this.name}
          <slot />
        </i>
        <uni-icons-mat-common />
      </Fragment>
    );
  }
}
