import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
import { uniIconsFaFontClass } from '../../../utils';

@Component({
  tag: 'uni-icons-fa-wrap',
  styleUrl: 'icons-fa-wrap.css',
})
export class UniIconsFaWrapComponent implements ComponentInterface {

  @Prop({ reflect: true }) font: UniIconsFaFont = 'solid';

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

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
