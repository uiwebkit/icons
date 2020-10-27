import { Component, ComponentInterface, Host, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-filled-mat',
  styleUrl: '../../styles/icons-filled-mat.css'
})
export class UniIconsFilledMatComponent implements ComponentInterface {
  render(): VNode {
    return <Host class={'material-icons'}/>
  }
}
