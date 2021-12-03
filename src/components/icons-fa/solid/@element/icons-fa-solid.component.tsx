import { Component, ComponentInterface, h, VNode, Prop, Element } from '@stencil/core';

import { uniGetCleanContent, UniHostTemplate, uniSmartWrap } from '@uiwebkit/common';

import { UniColor, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-s',
  styleUrl: '../styles/icons-fa-solid.css',
})
export class UniIconsFaSolidComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const name = this.name || uniGetCleanContent(this.el);

    return UniHostTemplate({ classes: `fas fa-${name}` }, <slot />);
  }

  componentDidRender(): void {
    const { el, color, angle, spin, speed, steps } = this;
    const props = { el, color, fontSize: this.size, angle, spin, speed, steps, selector: `Host` };

    uniSmartWrap(props);
  }
}
