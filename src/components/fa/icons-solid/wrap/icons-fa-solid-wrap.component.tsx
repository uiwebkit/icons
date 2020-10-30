import { Component, ComponentInterface, h, VNode, Prop, Fragment, Element, Watch } from '@stencil/core';

import { uniAddClasses, uniModifyTarget } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-solid-wrap',
  styleUrl: '../styles/icons-fa-solid.css',
})
export class UniIconsFaSolidWrapComponent implements ComponentInterface {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) active: boolean = false;

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  @Prop({ reflect: true }) color: string;

  private get data() {
    const { el, selector, all } = this;
    return { el, selector, all };
  }

  @Watch('active')
  onActiveChanged(newValue: boolean): void {
    if (newValue) {
      uniModifyTarget(this.data, uniAddClasses, ['fas', `fa-${this.name}`], 'uni-icons-fa-solid-wrap');
      this.active = false;
    }
  }

  componentWillLoad(): Promise<void> | void {
    this.onActiveChanged(this.active);
  }

  render(): VNode {
    return (
      <Fragment>
        <slot />
        <uni-icons-fa-common />
      </Fragment>
    );
  }
}
