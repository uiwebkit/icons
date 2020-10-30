import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-two-tone-shadow',
  styleUrl: '../styles/icons-mat-two-tone.css',
  shadow: true,
})
export class UniIconsMatTwoToneShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <i class={'material-icons-two-tone'}>
        {this.name}
        <slot />
      </i>
    );
  }
}
