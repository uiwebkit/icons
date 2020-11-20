// import { Component, ComponentInterface, h, Prop, VNode } from '@stencil/core';
//
// import { UniColor, UniIconsFaFont, UniSize } from '../../../models';
// import { uniIconsFaFontClass } from '../../../utils';
//
// @Component({ tag: 'uni-icons-fa-wrap' })
// export class UniIconsFaWrapComponent implements ComponentInterface {
//
//   @Prop({ reflect: true }) init: boolean = false;
//
//   @Prop({ reflect: true }) type: UniIconsFaFont = 'solid';
//
//   @Prop({ reflect: true }) name!: string;
//
//   @Prop({ reflect: true }) color: UniColor;
//
//   @Prop({ reflect: true }) size: UniSize | number;
//
//   @Prop({ reflect: true }) degree: number;
//
//   @Prop({ reflect: true }) rotate: boolean = false;
//
//   @Prop({ reflect: true }) speed: number;
//
//   @Prop({ reflect: true }) steps: number;
//
//   @Prop({ reflect: true }) selector: string;
//
//   @Prop({ reflect: true }) all: boolean = false;
//
//   render(): VNode {
//     const { init, name, color, size, rotate, degree, speed, steps, selector, all } = this;
//     const props = { init, name, color, size, rotate, degree, speed, steps, selector, all };
//     const UniIconsFaTag = `uni-icons-${uniIconsFaFontClass(this.type)}-wrap`;
//
//     return (
//       <UniIconsFaTag {...props}>
//         <slot />
//       </UniIconsFaTag>
//     );
//   }
// }
