import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { isEmptyString } from '@uiwebkit/flag';

import { uniGetCleanContent } from '@uiwebkit/flag';

import { UniColor, UniSize } from '../../../models';
import { uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-icon-bi' })
export class UniIconBiComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) img: boolean = false;

  @Prop({ reflect: true }) url: string = 'https://cdn.jsdelivr.net/npm/@uiwebkit/icn';

  @Prop({ reflect: true }) version: string = '0.1.0';

  @Prop({ reflect: true }) alter: string = 'uni-icon-bi';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const name = this.name || uniGetCleanContent(this.el);
    const UniIconTag = !isEmptyString(name) ? `uni-bi-${name}` : null;

    return this.img
      ? <img src={`${this.url}@${this.version}/dist/assets/svg/bi/${name}.svg`} alt={this.alter} />
      : (
        <UniIconTag>
          <slot />
        </UniIconTag>
      );
  }

  componentDidRender(): void {
    const { el, color, size, angle, spin, speed, steps } = this;
    const props = { el, color, size, angle, spin, speed, steps, selector: this.img ? 'img' : 'svg' };

    uniSmartWrap(props);
  }
}
