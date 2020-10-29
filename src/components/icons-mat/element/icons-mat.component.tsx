import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

@Component({ tag: 'uni-icons-mat' })
export class UniIconsMatComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: 'filled' | 'outlined' | 'round' | 'sharp' | 'two-tone' = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { name, color } = this;
    const props = { name, color };
    const UniIconsTag = `uni-icons-${this.mode}-mat`;

    return <UniIconsTag {...props}><slot/></UniIconsTag>;
  }
}
