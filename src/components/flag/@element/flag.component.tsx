import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniSize } from '../../../models';
import { isEmpty, uniSmartWrap } from '../../../utils';

@Component({
  tag: 'uni-flag',
  styleUrl: '../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) square: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || this.el.textContent;
    this.el.innerHTML = '';
  }

  render(): VNode {
    const UniFlagTag = !isEmpty(this.name) ? `uni-flag-${this.name}` : null;

    return <UniFlagTag square={this.square || this.round} round={this.round} />;
  }

  componentDidLoad(): void {
    const { el, size, angle, spin, speed, steps } = this;
    const props = { el, size, angle, spin, speed, steps, selector: 'svg' };

    uniSmartWrap(props);
  }
}
