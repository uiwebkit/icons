import { Component, ComponentInterface, Host, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-round-mat',
  styleUrl: '../../styles/icons-round-mat.css'
})
export class UniIconsRoundMatComponent implements ComponentInterface {
  render(): VNode {
    return <Host class={'material-icons-round'}/>
  }
}
