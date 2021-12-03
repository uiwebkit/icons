import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniTemplate } from '@uiwebkit/common';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';
import { uniMatTypeShort } from '../../../utils';

@Component({ tag: 'uni-icons-mat-wrap' })
export class UniIconsMatWrapComponent implements ComponentInterface {

  @Prop({ reflect: true }) type: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) selector: string;

  render(): VNode {
    const { name, color, size, angle, spin, speed, steps, selector, all } = this;
    const props = { name, color, size, angle, spin, speed, steps, selector, all };
    const UniIconsMatTag = `uni-icons-mat-${uniMatTypeShort(this.type)}-wrap`;

    return UniTemplate(
      <UniIconsMatTag {...props}>
        <slot/>
      </UniIconsMatTag>
    );
  }
}
