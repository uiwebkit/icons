import { Component, ComponentInterface, Element, Prop } from '@stencil/core';

import { UniColor, UniSize } from '../../../models';
import { uniGetTheme, uniModifyAsync, uniModifyClass, uniModifyStyle } from '../../../utils';

@Component({
  tag: 'uni-theme-wrap',
  styleUrl: 'theme-wrap.css',
})
export class UniThemeWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) fontSize: UniSize | number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, color, size, fontSize, selector, all } = this;
    const { classes, styles } = uniGetTheme({ color, size, fontSize });

    uniModifyAsync({ el, selector, all }, classes, uniModifyClass);
    uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
  }
}
