import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconDefault, UniIconsFaDefault, UniIconsFaFont, UniSize } from '../../../models';

@Component({
  tag: 'uni-icons-fa-wrap',
  styleUrl: 'icons-fa-wrap.css',
})
export class UniIconsFaWrapComponent implements ComponentInterface {
  @Prop({ reflect: true }) font: UniIconsFaFont = UniIconsFaDefault.font as UniIconsFaFont;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor = UniIconDefault.color as UniColor;

  @Prop({ reflect: true }) size: UniSize = UniIconDefault.size as UniSize;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  render(): VNode {
    const classes = `${uniIconsFaFontClass(this.font)} fa-${this.name}`;

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

function uniIconsFaFontClass(font: UniIconsFaFont): string {
  switch (font) {
    case 'brands':
      return 'fab';
    case 'regular':
      return 'far';
    case 'solid':
      return 'fas';
    default:
      return '';
  }
}
