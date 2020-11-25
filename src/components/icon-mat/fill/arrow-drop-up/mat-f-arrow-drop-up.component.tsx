import { Component, ComponentInterface, h, VNode } from '@stencil/core';

@Component({ tag: 'uni-mat-f-arrow-drop-up' })
export class UniMatFArrowDropUpComponent implements ComponentInterface {

  render(): VNode {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7 14l5-5 5 5z" />
      </svg>
    );
  }
}
