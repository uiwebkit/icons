import { Component, ComponentInterface, h, VNode, Prop, Host, Element } from '@stencil/core';

import { uniSmartWrap, UniTemplate } from '@uiwebkit/common';

import { UniColor, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-r',
  styleUrl: '../styles/icons-mat-round.css',
})
export class UniIconsMatRoundComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    return UniTemplate(
      <Host class={'material-icons-round'}>
        <slot />
        {this.name}
      </Host>
    );
  }

  componentDidRender(): void {
    const { el, color, angle, spin, speed, steps } = this;
    const props = { el, color, fontSize: this.size, angle, spin, speed, steps, selector: `Host` };

    uniSmartWrap(props);
  }
}
