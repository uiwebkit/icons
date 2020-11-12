import { Component, ComponentInterface, Element, h, VNode, Prop } from '@stencil/core';

import { UniColor, UniIconsMatFont, UniSize } from '../../../models';
import { uniModify, uniModifyClass, uniModifyContent } from '../../../utils';

@Component({
  tag: 'uni-icons-mat-wrap',
  styleUrl: 'icons-mat-wrap.css',
})
export class UniIconsMatWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) font: UniIconsMatFont = 'filled';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    const { el, selector, all } = this;

    if (this.name) {
      uniModify({ el, selector, all }, this.name, uniModifyContent);
    }

    if (this.font === 'two-tone') {
      const classes = [`uni-color-${this.color}-fix`];

      uniModify({ el, selector, all }, classes, uniModifyClass);
    }
  }

  render(): VNode {
    const classes = `${uniIconsMatFontClass(this.font)} uni-icons-mat`;

    return (
      <uni-icon-wrap
        classes={classes}
        color={this.color}
        size={this.size}
        rotate={this.rotate}
        degree={this.degree}
        speed={this.speed}
        steps={this.steps}
        selector={this.selector}
        all={this.all}
      >
        <slot />
      </uni-icon-wrap>
    );
  }
}

function uniIconsMatFontClass(font: UniIconsMatFont): string {
  switch (font) {
    case 'filled':
      return 'material-icons';
    case 'outlined':
      return 'material-icons-outlined';
    case 'round':
      return 'material-icons-round';
    case 'sharp':
      return 'material-icons-sharp';
    case 'two-tone':
      return 'material-icons-two-tone';
    default:
      return '';
  }
}
