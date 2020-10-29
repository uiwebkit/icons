import { Component, ComponentInterface, Element, Prop, Watch } from '@stencil/core';

import { uniAddClasses } from '../../../utils';

@Component({
  tag: 'uni-icons-mat-round-wrap',
  styleUrl: '../styles/icons-mat-round.css',
})
export class UniIconsMatRoundWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  private get data() {
    const { el, selector, all } = this;
    return { el, selector, all };
  }

  @Watch('active')
  onActiveChanged(newValue: boolean): void {
    if (newValue) {
      uniAddClasses(this.data, ['material-icons-round'], 'uni-icons-mat-round-wrap');
      this.active = false;
    }
  }

  componentWillLoad(): Promise<void> | void {
    if (this.active) {
      uniAddClasses(this.data, ['material-icons-round'], 'uni-icons-mat-round-wrap');
      this.active = false;
    }
  }
}
