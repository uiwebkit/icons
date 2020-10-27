import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-filled-mat-shadow',
  styleUrl: '../../styles/icons-filled-mat.css',
  shadow: true,
})
export class UniIconsFilledMatShadowComponent implements ComponentInterface {
  render(): VNode {
    return (
      <i class={'material-icons'}>
        <slot />
      </i>
    );
  }
}
