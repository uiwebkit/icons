import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';
import { isEmpty, uniMatTypeShort, uniSmartWrap } from '../../../utils';

@Component({
  tag: 'uni-icon-mat',
  styles: 'uni-icon-mat {line-height: 1}'
})
export class UniIconMatComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) type: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || this.el.textContent;
    this.el.innerHTML = '';
  }

  render(): VNode {
    const UniIconTag = `uni-mat-${uniMatTypeShort(this.type)}-${this.name}`;

    return !isEmpty(this.name) ? <UniIconTag /> : null;
  }

  componentDidLoad(): void {
    const { el, color, size, rotate, degree, speed, steps } = this;
    const props = { el, color, size, rotate, degree, speed, steps, selector: 'svg' };

    uniSmartWrap(props);
  }
}
