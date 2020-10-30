import { Component, ComponentInterface, Element, Prop, Watch } from '@stencil/core';

import { uniAddClasses, uniModifyTarget, uniReplaceContent } from '../../../../utils';

@Component({
  tag: 'uni-icons-mat-two-tone-wrap',
  styleUrl: '../styles/icons-mat-two-tone.css',
})
export class UniIconsMatTwoToneWrapComponent implements ComponentInterface {
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

      uniModifyTarget(this.data, uniAddClasses, ['material-icons-two-tone'], 'uni-icons-mat-two-tone-wrap');
      this.active = false;
    }
  }

  componentWillLoad(): Promise<void> | void {
    this.onActiveChanged(this.active);
  }
}
