import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';

const IconSvg = function(): VNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48
          21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48
          48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0
          0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6
          6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z" />
    </svg>
  );
};

@Component({ tag: 'uni-icon-far-copy' })
export class UniIconFarCopyComponent implements ComponentInterface {

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    return (
      <uni-theme-wrap
        color={this.color}
        size={this.size}
        selector={'svg'}
      >
        {this.rotate
          ? <uni-rotate-wrap
            degree={this.degree}
            speed={this.speed}
            steps={this.steps}
          >
            <IconSvg />
          </uni-rotate-wrap>
          : <IconSvg />
        }
      </uni-theme-wrap>
    );
  }
}
