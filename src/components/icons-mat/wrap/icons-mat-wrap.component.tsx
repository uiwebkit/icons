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
    const UniIconsWrapTag = `uni-icons-${this.mode}-mat-wrap`;

    return <UniIconsWrapTag {...props}><slot/></UniIconsWrapTag>;
  }
}
