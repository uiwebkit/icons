import { Component, ComponentInterface, Fragment, h, Prop, VNode } from '@stencil/core';

import { UniColor } from '../../../models';

@Component({ tag: 'uni-icon-mat-arrow-drop-down' })
export class UniIconArrowDropDownMatComponent implements ComponentInterface {
  @Prop({ reflect: true }) color: UniColor = 'default';

  render(): VNode {
    return (
      <Fragment>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             class={`uni-icon-mat-size uni-color-${this.color}`}>
          <path d="M7 10l5 5 5-5z" />
        </svg>
        <uni-icons-mat-common />
      </Fragment>
    );
  }
}
