import { Component, ComponentInterface, h, Host, VNode, Prop, Element } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-r',
  styleUrl: '../styles/icons-fa-regular.css',
})
export class UniIconsFaRegularComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) init: boolean = false;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    return (
      <Host class={`far fa-${this.name}`}>
        {this.init ? <uni-fa-styles-load/> : ''}
      </Host>
    );
  }

  componentDidLoad(): void {
    const { el, color, rotate, degree, speed, steps } = this;
    const props = { el, color, fontSize: this.size, rotate, degree, speed, steps, selector: `Host` };

    uniSmartWrap(props);
  }
}
