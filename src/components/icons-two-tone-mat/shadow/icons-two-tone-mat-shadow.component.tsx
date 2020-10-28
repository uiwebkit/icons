import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-two-tone-mat-shadow',
  styleUrl: '../styles/icons-two-tone-mat.css',
  shadow: true,
})
export class UniIconsTwoToneMatShadowComponent implements ComponentInterface {
  render(): VNode {
    return (
      <i class={'material-icons-two-tone'}>
        <slot />
      </i>
    );
  }
}
