import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';
import { uniMatTypeShort } from '../../../utils';

@Component({ tag: 'uni-icons-mat-wrap' })
export class UniIconsMatWrapComponent implements ComponentInterface {

  @Prop({ reflect: true }) type: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  render(): VNode {
    const { name, color, size, rotate, degree, speed, steps } = this;
    const props = { name, color, size, rotate, degree, speed, steps };
    const UniIconsMatTag = `uni-icons-mat-${uniMatTypeShort(this.type)}-wrap`;

    return (
      <UniIconsMatTag {...props}>
        <slot/>
      </UniIconsMatTag>
    );
  }
}
