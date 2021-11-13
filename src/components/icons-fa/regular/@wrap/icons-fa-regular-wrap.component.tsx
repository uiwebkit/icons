import { Component, ComponentInterface, Prop, Element } from '@stencil/core';

import { uniGetCleanContent } from '@uiwebkit/flag';

import { UniColor, UniSize } from '../../../../models';
import { uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-r-wrap',
  styleUrl: '../styles/icons-fa-regular.css',
})
export class UniIconsFaRegularWrapComponent implements ComponentInterface {

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

  componentDidRender(): void {
    const name = this.name || uniGetCleanContent(this.el.firstElementChild as HTMLElement);
    const { el, color, angle, spin, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `far fa-${name}`,
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
