import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

@Component({ tag: 'uni-icons-mat' })
export class UniIconsMatComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { name, color } = this;
    const props = { name, color };

    switch (this.mode) {
      case 'filled':
        return (
          <uni-icons-filled-mat {...props}>
            <slot />
          </uni-icons-filled-mat>
        );
      case 'outlined':
        return (
          <uni-icons-outlined-mat {...props}>
            <slot />
          </uni-icons-outlined-mat>
        );
      case 'round':
        return (
          <uni-icons-round-mat {...props}>
            <slot />
          </uni-icons-round-mat>
        );
      case 'sharp':
        return (
          <uni-icons-sharp-mat {...props}>
            <slot />
          </uni-icons-sharp-mat>
        );
      case 'two-tone':
        return (
          <uni-icons-two-tone-mat {...props}>
            <slot />
          </uni-icons-two-tone-mat>
        );
    }
  }
}
