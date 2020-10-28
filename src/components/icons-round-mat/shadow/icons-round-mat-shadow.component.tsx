import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-round-mat-shadow',
  styleUrl: '../styles/icons-round-mat.css',
  shadow: true,
})
export class UniIconsRoundMatShadowComponent implements ComponentInterface {
  render(): VNode {
    return (
      <i class={'material-icons-round'}>
        <slot />
      </i>
    );
  }
}
