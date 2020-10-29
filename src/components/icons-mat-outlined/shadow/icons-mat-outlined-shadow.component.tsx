import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-outlined-shadow',
  styleUrl: '../styles/icons-mat-outlined.css',
  shadow: true,
})
export class UniIconsMatOutlinedShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <i class={'material-icons-outlined'}>
        {this.name}
        <slot />
      </i>
    );
  }
}
