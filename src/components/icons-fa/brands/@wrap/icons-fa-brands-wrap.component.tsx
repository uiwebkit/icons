import { Component, ComponentInterface, Prop, Element, VNode, h } from '@stencil/core';

import { uniGetCleanContent, uniSmartWrap, UniTemplate } from '@uiwebkit/common';

import { UniColor, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-fa-b-wrap',
  styleUrl: '../styles/icons-fa-brands.css',
})
export class UniIconsFaBrandsWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

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
    return UniTemplate(<slot/>);
  }

  componentDidRender(): void {
    const name = this.name || uniGetCleanContent(this.el.firstElementChild as HTMLElement);
    const { el, color, angle, spin, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `fab fa-${name}`,
      color,
      fontSize: this.size,
      angle,
      spin,
      speed,
      steps,
      selector,
      all,
    };

    uniSmartWrap(props);
  }
}

