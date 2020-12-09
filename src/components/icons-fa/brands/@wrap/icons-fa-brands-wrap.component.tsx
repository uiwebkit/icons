import { Component, ComponentInterface, h, VNode, Prop, Element, Fragment } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fa-b-wrap',
  styleUrl: '../styles/icons-fa-brands.css',
})
export class UniIconsFaBrandsWrapComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) init: boolean = false;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  @Prop({ reflect: true }) selector: string;

  @Prop({ reflect: true }) all: boolean = false;

  componentWillLoad(): Promise<void> | void {
    console.log(this.name, this.el);
    this.name = this.name || (!this.selector ? test(this.el.firstElementChild) : null);
  }

  render(): VNode {
    return (
      <Fragment>
        <slot />
        {this.init ? <uni-fa-styles-load /> : ''}
      </Fragment>
    );
  }

  componentDidLoad(): void {
    const { el, color, rotate, degree, speed, steps, selector, all } = this;
    const props = {
      el,
      classes: `fab fa-${this.name}`,
      color,
      fontSize: this.size,
      rotate,
      degree,
      speed,
      steps,
      selector,
      all,
    };

    uniSmartWrap(props);
  }
}

function test(el) {
  if (el) {
    const content = el.textContent;
    el.textContent = '';

    return content;
  } else {
    return null;
  }
}
