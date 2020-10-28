import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

@Component({ tag: 'uni-icons-mat-wrap' })
export class UniIconsMatWrapComponent implements ComponentInterface {
  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) mode: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'filled';

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { active, selector, all, name, color } = this;
    const props = { active, selector, all, name, color };

    switch (this.mode) {
      case 'filled':
        return (
          <uni-icons-filled-mat-wrap {...props}>
            <slot />
          </uni-icons-filled-mat-wrap>
        );
      case 'outlined':
        return (
          <uni-icons-outlined-mat-wrap {...props}>
            <slot />
          </uni-icons-outlined-mat-wrap>
        );
      case 'round':
        return (
          <uni-icons-round-mat-wrap {...props}>
            <slot />
          </uni-icons-round-mat-wrap>
        );
      case 'sharp':
        return (
          <uni-icons-sharp-mat-wrap {...props}>
            <slot />
          </uni-icons-sharp-mat-wrap>
        );
      case 'two-tone':
        return (
          <uni-icons-two-tone-mat-wrap {...props}>
            <slot />
          </uni-icons-two-tone-mat-wrap>
        );
    }
  }
}
