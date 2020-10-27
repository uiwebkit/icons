import { Component, ComponentInterface, Host, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-outlined-mat',
  styleUrl: '../../styles/icons-outlined-mat.css'
})
export class UniIconsOutlinedMatComponent implements ComponentInterface {
  render(): VNode {
    return <Host class={'material-icons-outlined'}/>
  }
}
