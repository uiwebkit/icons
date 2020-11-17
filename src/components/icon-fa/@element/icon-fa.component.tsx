import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
import { uniIconsFaFontClass, uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-icon-fa' })
export class UniIconMatComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) type: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const UniIconTag = `uni-${uniIconsFaFontClass(this.type)}-${this.name}`;

    return <UniIconTag />;
  }

  componentDidLoad(): void {
    const { el, color, size, rotate, degree, speed, steps } = this;
    const props = { el, color, size, rotate, degree, speed, steps, selector: 'svg' };

    uniSmartWrap(props);
  }
}
