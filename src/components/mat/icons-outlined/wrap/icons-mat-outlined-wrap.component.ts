import { Component, ComponentInterface, Element, Prop, Watch } from '@stencil/core';

import { uniAddClasses, uniModifyTarget, uniReplaceContent } from '../../../../utils';

@Component({
  tag: 'uni-icons-mat-outlined-wrap',
  styleUrl: '../styles/icons-mat-outlined.css',
})
export class UniIconsMatOutlinedWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  private get data() {
    const { el, selector, all } = this;
    return { el, selector, all };
  }

  @Watch('active')
  onActiveChanged(newValue: boolean): void {
    if (newValue) {
      if (this.name) {
        uniModifyTarget(this.data, uniReplaceContent, this.name, 'uni-icons-mat-filled-wrap');
      }

      uniModifyTarget(this.data, uniAddClasses, ['material-icons-outlined'], 'uni-icons-mat-outlined-wrap');
      this.active = false;
    }
  }

  componentWillLoad(): Promise<void> | void {
    this.onActiveChanged(this.active);
  }
}
