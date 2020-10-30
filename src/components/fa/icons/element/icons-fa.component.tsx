import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniIconsFaMode } from '../models';

@Component({ tag: 'uni-icons-fa' })
export class UniIconsFaComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: UniIconsFaMode = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const CustomIconsTag = `uni-icons-fa-${this.mode}`;

    return <CustomIconsTag name={this.name}><slot/></CustomIconsTag>;
  }
}
