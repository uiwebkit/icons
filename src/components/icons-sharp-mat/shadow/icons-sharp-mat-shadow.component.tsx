import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-sharp-mat-shadow',
  styleUrl: '../styles/icons-sharp-mat.css',
  shadow: true,
})
export class UniIconsSharpMatShadowComponent implements ComponentInterface {
  render(): VNode {
    return (
      <i class={'material-icons-sharp'}>
        <slot />
      </i>
    );
  }
}
