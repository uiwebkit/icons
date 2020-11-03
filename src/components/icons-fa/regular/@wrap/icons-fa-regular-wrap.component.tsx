// import { Component, ComponentInterface, h, VNode, Prop, Fragment, Element, Watch } from '@stencil/core';
//
// import { uniAddClasses, uniModifyTarget } from '../../../../utils';
// import { UniColor } from '../../../../models';
//
// @Component({
//   tag: 'uni-icons-fa-regular-wrap',
//   styleUrl: '../styles/icons-fa-regular.css',
// })
// export class UniIconsFaRegularWrapComponent implements ComponentInterface {
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
//   private get data() {
//     const { el, selector, all } = this;
//     return { el, selector, all };
//   }
//
//   @Watch('active')
//   onActiveChanged(newValue: boolean): void {
//     if (newValue) {
//       const classes = ['far', `fa-${this.name}`];
//
//       uniModifyTarget(this.data, uniAddClasses, classes, 'uni-icons-fa-regular-wrap');
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
