import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniIconsMatMode } from '../models';

@Component({ tag: 'uni-icons-mat' })
export class UniIconsMatComponent implements ComponentInterface {
  @Prop({ reflect: true }) mode: UniIconsMatMode = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: string;

  render(): VNode {
    const { name, color } = this;
    const props = { name, color };
    const UniIconsTag = `uni-icons-mat-${this.mode}`;

    return <UniIconsTag {...props}><slot/></UniIconsTag>;
  }
}
