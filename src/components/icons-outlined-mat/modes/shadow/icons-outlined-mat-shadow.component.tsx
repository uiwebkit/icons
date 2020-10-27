import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-outlined-mat-shadow',
  styleUrl: '../../styles/icons-outlined-mat.css',
  shadow: true,
})
export class UniIconsOutlinedMatShadowComponent implements ComponentInterface {
  render(): VNode {
    return (
      <i class={'material-icons-outlined'}>
        <slot />
      </i>
    );
  }
}
