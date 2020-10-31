import { Component, ComponentInterface, Fragment, h, Prop, VNode } from '@stencil/core';

import { UniColor } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-sharp-shadow',
  styleUrl: '../styles/icons-mat-sharp.css',
  shadow: true,
})
export class UniIconsMatSharpShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <i class={`material-icons-sharp uni-color-${this.color}`}>
          {this.name}
          <slot />
        </i>
        <uni-icons-mat-common />
      </Fragment>
    );
  }
}
