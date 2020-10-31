import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniIconsMatMode } from '../models';
import { UniColor } from '../../../../models';

@Component({ tag: 'uni-icons-mat-wrap' })
export class UniIconsMatWrapComponent implements ComponentInterface {
  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) mode: UniIconsMatMode = 'filled';

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    const { active, selector, all, name, color } = this;
    const props = { active, selector, all, name, color };
    const UniIconsWrapTag = `uni-icons-mat-${this.mode}-wrap`;

    return <UniIconsWrapTag {...props}><slot/></UniIconsWrapTag>;
  }
}
