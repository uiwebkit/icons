import { Component, ComponentInterface, Host, h, VNode } from '@stencil/core';

@Component({
  tag: 'uni-icons-sharp-mat',
  styleUrl: '../../styles/icons-sharp-mat.css'
})
export class UniIconsSharpMatComponent implements ComponentInterface {
  render(): VNode {
    return <Host class={'material-icons-sharp'}/>
  }
}
