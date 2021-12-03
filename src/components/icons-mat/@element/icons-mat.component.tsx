import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniTemplate } from '@uiwebkit/common';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';
import { uniMatTypeShort } from '../../../utils';

@Component({ tag: 'uni-icons-mat' })
export class UniIconsMatComponent implements ComponentInterface {

  @Prop({ reflect: true }) type: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { name, color, size, angle, spin, speed, steps } = this;
    const props = { name, color, size, angle, spin, speed, steps };
    const UniIconsMatTag = `uni-icons-mat-${uniMatTypeShort(this.type)}`;

    return UniTemplate(
      <UniIconsMatTag {...props}>
        <slot/>
      </UniIconsMatTag>
    );
  }
}
