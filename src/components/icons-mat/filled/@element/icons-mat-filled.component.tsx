import { Component, ComponentInterface, h, VNode, Prop, Element, Host } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-mat-filled',
  styleUrl: '../styles/icons-mat-filled.css',
})
export class UniIconsMatFilledComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    return (
      <Host class={'material-icons'}>
        <slot />
        {this.name}
      </Host>
    );
  }

  componentDidLoad(): void {
    const { el, color, rotate, degree, speed, steps } = this;
    const props = { el, color, fontSize: this.size, rotate, degree, speed, steps, selector: `Host` };

    uniSmartWrap(props);
  }
}
