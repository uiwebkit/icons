import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-mat-round-wrap',
  styleUrl: '../styles/icons-mat-round.css',
})
export class UniIconsMatRoundWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  render(): VNode {
    return <slot />;
  }

  componentDidLoad(): void {
    const { el, color, rotate, degree, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `material-icons-round`,
      content: this.name,
      color,
      fontSize: this.size,
      rotate,
      degree,
      speed,
      steps,
      selector,
      all
    };

    uniSmartWrap(props);
  }
}
