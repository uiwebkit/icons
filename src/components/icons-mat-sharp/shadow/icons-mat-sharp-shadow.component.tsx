import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-sharp-shadow',
  styleUrl: '../styles/icons-mat-sharp.css',
  shadow: true,
})
export class UniIconsMatSharpShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    return (
      <i class={'material-icons-sharp'}>
        {this.name}
        <slot />
      </i>
    );
  }
}
