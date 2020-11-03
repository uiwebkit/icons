// import { Component, ComponentInterface, h, VNode, Prop, Fragment, Element, Watch } from '@stencil/core';
//
// import { UniColor } from '../../../../models';
// import { uniAddClasses, uniModifyTarget } from '../../../../utils';
//
// @Component({
//   tag: 'uni-icons-fa-brands-wrap',
//   styleUrl: '../styles/icons-fa-brands.css',
// })
// export class UniIconsFaBrandsWrapComponent implements ComponentInterface {
//   @Element() el!: HTMLElement;
//
//   @Prop({ reflect: true }) active: boolean = false;
//
//   @Prop({ reflect: true }) name!: string;
//
//   @Prop({ reflect: true }) color: UniColor = 'default';
//
//   @Prop({ reflect: true }) selector: string;
//
//   @Prop({ reflect: true }) all: boolean = false;
//
//   @Watch('active')
//   onActiveChanged(newValue: boolean): void {
//     if (newValue) {
//       const { el, selector, all } = this;
//       const classes = ['fab', `fa-${this.name}`, `uni-color-${this.color}`];
//
//       uniModifyTarget({ el, selector, all }, uniAddClasses, classes, 'uni-icons-fa-brands-wrap');
//       this.active = false;
//     }
//   }
//
//   componentWillLoad(): Promise<void> | void {
//     this.onActiveChanged(this.active);
//   }
//
//   render(): VNode {
//     return (
//       <Fragment>
//         <slot />
//         <uni-icons-fa-common />
//       </Fragment>
//     );
//   }
// }
