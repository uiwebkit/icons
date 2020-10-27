import { Component, ComponentInterface, Host, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-two-tone-mat',
  styleUrl: '../../styles/icons-two-tone-mat.css'
})
export class UniIconsTwoToneMatComponent implements ComponentInterface {
  render(): VNode {
    return <Host class={'material-icons-two-tone'}/>
  }
}
