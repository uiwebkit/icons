import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { UniColor, UniSize } from '../../../models';
import { uniSmartWrap } from '../../../utils';

@Component({ tag: 'uni-theme-wrap' })
export class UniThemeWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) filter: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) fontSize: UniSize | number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, color, filter, size, fontSize, selector, all } = this;
    const props = { el, color, filter, size, fontSize, selector, all };

    uniSmartWrap(props);
  }
}
