import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';

@Component({ tag: 'uni-icons-mat' })
export class UniIconsMatComponent implements ComponentInterface {

  @Prop({ reflect: true }) type: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { name, color, size, rotate, degree, speed, steps } = this;
    const props = { name, color, size, rotate, degree, speed, steps };
    const UniIconsMatTag = `uni-icons-mat-${this.type}`;

    return (
      <UniIconsMatTag {...props}>
        <slot/>
      </UniIconsMatTag>
    );
  }
}
