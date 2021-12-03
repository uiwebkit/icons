import { Component, ComponentInterface, h, VNode, Prop, Element } from '@stencil/core';

import { uniGetCleanContent, UniHostTemplate, uniSmartWrap } from '@uiwebkit/common';

import { UniColor, UniSize } from '../../../models';

@Component({ tag: 'uni-icons-bi' })
export class UniIconsBiComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  // @Prop({ reflect: true }) angle: number;
  //
  // @Prop({ reflect: true }) spin: boolean = false;
  //
  // @Prop({ reflect: true }) speed: number;
  //
  // @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const name = this.name || uniGetCleanContent(this.el);

    return UniHostTemplate({ classes: `bi-${name}` }, <slot />);
  }

  componentDidRender(): void {
    const { el, color } = this;
    const props = { el, color, fontSize: this.size, selector: `Host` };

    uniSmartWrap(props);
  }
}
