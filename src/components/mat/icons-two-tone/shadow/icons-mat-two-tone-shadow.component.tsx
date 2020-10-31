import { Component, ComponentInterface, Fragment, h, Prop, VNode } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-two-tone-shadow',
  styleUrl: '../styles/icons-mat-two-tone.css',
  shadow: true,
})
export class UniIconsMatTwoToneShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <i class={`material-icons-two-tone uni-color-${this.color}-fix`}>
          {this.name}
          <slot />
        </i>
        <uni-icons-mat-common />
      </Fragment>
    );
  }
}
