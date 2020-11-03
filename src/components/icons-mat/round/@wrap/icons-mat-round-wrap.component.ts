// import { Component, ComponentInterface, Element, Prop, Watch } from '@stencil/core';
//
// import { UniColor } from '../../../../models';
// import { uniAddClasses, uniModifyTarget, uniReplaceContent } from '../../../../utils';
//
// @Component({
//   tag: 'uni-icons-mat-round-wrap',
//   styleUrl: '../styles/icons-mat-round.css',
// })
// export class UniIconsMatRoundWrapComponent implements ComponentInterface {
//   @Element() el!: HTMLElement;
//
//   @Prop({ reflect: true }) active: boolean = false;
//
//   @Prop({ reflect: true }) name: string;
//
//   @Prop({ reflect: true }) color: UniColor = 'default';
//
//   @Prop({ reflect: true }) selector: string;
//
//   @Prop({ reflect: true }) all: boolean = false;
//
//   private get context() {
//     const { el, selector, all } = this;
//     return { el, selector, all };
//   }
//
//   @Watch('active')
//   onActiveChanged(newValue: boolean): void {
//     if (newValue) {
//       if (this.name) {
//         uniModifyTarget(this.context, uniReplaceContent, this.name, 'uni-icons-mat-filled-wrap');
//       }
//
//       const classes = ['material-icons-round', `uni-color-${this.color}`];
//       uniModifyTarget(this.context, uniAddClasses, classes, 'uni-icons-mat-round-wrap');
//       this.active = false;
//     }
//   }
//
//   componentWillLoad(): Promise<void> | void {
//     this.onActiveChanged(this.active);
//   }
// }
