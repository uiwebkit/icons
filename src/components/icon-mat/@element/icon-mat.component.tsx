import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';
import { isEmptyString, uniGetCleanContent, uniMatTypeShort, uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-icon-mat' })
export class UniIconMatComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) type: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) angle: number;

  @Prop({ reflect: true }) spin: boolean = false;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const name = this.name || uniGetCleanContent(this.el);
    const UniIconTag = !isEmptyString(name) ? `uni-mat-${uniMatTypeShort(this.type)}-${name}` : null;

    return <UniIconTag />;
  }

  componentDidRender(): void {
    const { el, color, size, angle, spin, speed, steps } = this;
    const props = { el, color, size, angle, spin, speed, steps, selector: 'svg' };
    this.el.style.display = 'inherit';

    uniSmartWrap(props);
  }
}
