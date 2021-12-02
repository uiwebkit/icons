import { Component, ComponentInterface, h, VNode, Prop, Element, Host } from '@stencil/core';

import { uniGetCleanContent } from '@uiwebkit/flag';

import { UniColor, UniSize } from '../../../models';
import { uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-icons-bi' })
export class UniIconsBsComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  // @Prop({ reflect: true }) angle: number;
  //
  // @Prop({ reflect: true }) spin: boolean = false;
  //
  // @Prop({ reflect: true }) speed: number;
  //
  // @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const name = this.name || uniGetCleanContent(this.el);

    return (
      <Host class={`bi-${name}`}>
        <slot />
      </Host>
    );
  }

  componentDidRender(): void {
    const { el, color } = this;
    const props = { el, color, fontSize: this.size, selector: `Host` };

    uniSmartWrap(props);
  }
}
