import { Component, ComponentInterface, Element, h, Prop, VNode } from '@stencil/core';

import { isEmpty } from '../../../utils';

@Component({
  tag: 'uni-flag',
  styleUrl: '../styles/flag.css'
})
export class UniFlagComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) square: boolean = false;

  @Prop({ reflect: true }) round: boolean = false;

  componentWillLoad(): Promise<void> | void {
    this.name = this.name || this.el.textContent;
    this.el.innerHTML = '';
  }

  render(): VNode {
    const UniFlagTag = !isEmpty(this.name) ? `uni-flag-${this.name}` : null;

    return <UniFlagTag square={this.square || this.round} round={this.round} />;
  }
}
