import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-round-shadow',
  styleUrl: '../styles/icons-mat-round.css',
  shadow: true,
})
export class UniIconsMatRoundShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <i class={'material-icons-round'}>
        {this.name}
        <slot />
      </i>
    );
  }
}
