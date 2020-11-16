import { Component, ComponentInterface, h, VNode, Prop, Element } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniModifyStart } from '../../../../utils';

@Component({
  tag: 'uni-icons-fab-wrap',
  styleUrl: '../styles/icons-fa-brands.css',
})
export class UniIconsFaBrandsWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentDidLoad(): void {
    const { el, color, rotate, degree, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `fab fa-${this.name}`,
      color,
      fontSize: this.size,
      rotate,
      degree,
      speed,
      steps,
      selector,
      all,
    };

    uniModifyStart(props);
  }

  render(): VNode {
    return <slot />;
  }
}
