import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-filled-shadow',
  styleUrl: '../styles/icons-mat-filled.css',
  shadow: true,
})
export class UniIconsMatFilledShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <i class={'material-icons'}>
        {this.name}
        <slot />
      </i>
    );
  }
}
