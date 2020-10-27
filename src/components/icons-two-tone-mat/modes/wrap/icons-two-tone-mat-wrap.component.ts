import { Component, ComponentInterface, Element, Prop, Watch } from '@stencil/core';

import { uniAddClasses } from '../../../../utils';

@Component({
  tag: 'uni-icons-two-tone-mat-wrap',
  styleUrl: '../../styles/icons-two-tone-mat.css',
})
export class UniIconsTwoToneMatWrapComponent implements ComponentInterface {
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
      uniAddClasses(this.data, ['material-icons-two-tone'], 'uni-icons-two-tone-mat-wrap');
      this.active = false;
    }
  }

  componentWillLoad(): Promise<void> | void {
    if (this.active) {
      uniAddClasses(this.data, ['material-icons-two-tone'], 'uni-icons-two-tone-mat-wrap');
      this.active = false;
    }
  }
}
