import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';

@Component({
  tag: 'uni-icons-mat-two-tone',
  styleUrl: '../styles/icons-mat-two-tone.css',
})
export class UniIconsMatTwoToneComponent implements ComponentInterface {
  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    return (
      <uni-icons-mat-wrap
        font={'two-tone'}
        name={this.name}
        color={this.color}
        size={this.size}
        rotate={this.rotate}
        degree={this.degree}
        speed={this.speed}
        steps={this.steps}
      >
        <i>
          {this.name}
          <slot />
        </i>
      </uni-icons-mat-wrap>
    );
  }
}
