import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniIconsFaMode } from '../models';

@Component({ tag: 'uni-icons-fa-wrap' })
export class UniIconsFaWrapComponent implements ComponentInterface {
  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) mode: UniIconsFaMode = 'solid';

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { active, selector, all, name, color } = this;
    const props = { active, selector, all, name, color };
    const CustomIconsTag = `uni-icons-fa-${this.mode}-wrap`;

    return <CustomIconsTag {...props}><slot/></CustomIconsTag>;
  }
}
