import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniSize } from '../../../models';
import { isEmpty, uniSmartWrap } from '../../../utils';

@Component({
  tag: 'uni-icon-bs',
  styles: 'uni-icon-bs {line-height: 1}'
})
export class UniIconBsComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || this.el.textContent;
    this.el.innerHTML = '';
  }

  render(): VNode {
    const UniIconTag = `uni-bs-${this.name}`;

    return !isEmpty(this.name) ? <UniIconTag /> : null;
  }

  componentDidLoad(): void {
    const { el, color, size, degree, spin, speed, steps } = this;
    const props = { el, color, size, degree, spin, speed, steps, selector: 'svg' };

    uniSmartWrap(props);
  }
}
