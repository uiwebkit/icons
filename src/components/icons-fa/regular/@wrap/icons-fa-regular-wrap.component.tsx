import { Component, ComponentInterface, Prop, Element } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniGetCleanContent, uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-r-wrap',
  styleUrl: '../styles/icons-fa-regular.css',
})
export class UniIconsFaRegularWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || uniGetCleanContent(this.el.firstElementChild);
  }

  componentDidLoad(): void {
    const { el, color, degree, spin, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `far fa-${this.name}`,
      color,
      fontSize: this.size,
      degree,
      spin,
      speed,
      steps,
      selector,
      all,
    };

    uniSmartWrap(props);
  }
}
