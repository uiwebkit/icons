import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { isEmptyString } from '@uiwebkit/flag';

import { uniGetCleanContent } from '@uiwebkit/flag';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
import { uniIconsFaFontClass, uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-icon-fa' })
export class UniIconFaComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) type: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const name = this.name || uniGetCleanContent(this.el);
    const UniIconTag = !isEmptyString(name) ? `uni-${uniIconsFaFontClass(this.type)}-${name}` : null;

    return (
      <UniIconTag>
        <slot/>
      </UniIconTag>
    );
  }

  componentDidRender(): void {
    const { el, color, size, angle, spin, speed, steps } = this;
    const props = { el, color, size, angle, spin, speed, steps, selector: 'svg' };

    uniSmartWrap(props);
  }
}
