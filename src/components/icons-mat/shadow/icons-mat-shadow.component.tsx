import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

@Component({
  tag: 'uni-icons-mat-shadow',
  shadow: true,
})
export class UniIconsMatShadowComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { name, color } = this;
    const props = { name, color };

    switch (this.mode) {
      case 'filled':
        return (
          <uni-icons-filled-mat-shadow {...props}>
            <slot />
          </uni-icons-filled-mat-shadow>
        );
      case 'outlined':
        return (
          <uni-icons-outlined-mat-shadow {...props}>
            <slot />
          </uni-icons-outlined-mat-shadow>
        );
      case 'round':
        return (
          <uni-icons-round-mat-shadow {...props}>
            <slot />
          </uni-icons-round-mat-shadow>
        );
      case 'sharp':
        return (
          <uni-icons-sharp-mat-shadow {...props}>
            <slot />
          </uni-icons-sharp-mat-shadow>
        );
      case 'two-tone':
        return (
          <uni-icons-two-tone-mat-shadow {...props}>
            <slot />
          </uni-icons-two-tone-mat-shadow>
        );
    }
  }
}
