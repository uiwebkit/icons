import { Component, ComponentInterface, Prop, Element } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniGetCleanContent, uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-s-wrap',
  styleUrl: '../styles/icons-fa-solid.css',
})
export class UniIconsFaSolidWrapComponent implements ComponentInterface {

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

  componentDidLoad(): void {
    const name = this.name || uniGetCleanContent(this.el.firstElementChild as HTMLElement);
    const { el, color, angle, spin, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `fas fa-${name}`,
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
