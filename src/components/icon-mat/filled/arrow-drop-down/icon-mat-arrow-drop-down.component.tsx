import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';

@Component({ tag: 'uni-icon-mat-arrow-drop-down' })
export class UniIconArrowDropDownMatComponent implements ComponentInterface {

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    return (
      <uni-icon-wrap
        color={this.color}
        size={this.size}
        rotate={this.rotate}
        degree={this.degree}
        speed={this.speed}
        steps={this.steps}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </uni-icon-wrap>
    );
  }
}
