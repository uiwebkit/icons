import { Component, ComponentInterface, h, VNode, Prop, Host, Element } from '@stencil/core';

import { UniTemplate, uniSmartWrap } from '@uiwebkit/common';

import { UniColor, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-tt',
  styleUrl: '../styles/icons-mat-two-tone.css',
})
export class UniIconsMatTwoToneComponent implements ComponentInterface {

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
      <Host class={'material-icons-two-tone'}>
        <slot />
        {this.name}
      </Host>
    );
  }

  componentDidRender(): void {
    const { el, angle, spin, speed, steps } = this;
    const props = { el, filter: this.color, fontSize: this.size, angle, spin, speed, steps, selector: `Host` };

    uniSmartWrap(props);
  }
}
