import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/fa/solid/file-download.svg';
import { uniModifyAttr } from '../../../../utils';
import { uniIconFaDimensions } from '../../../../models';

@Component({ tag: 'uni-fas-file-download' })
export class UniFasFileDownloadComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniModifyAttr([this.el.firstElementChild as HTMLElement], uniIconFaDimensions);
  }
}
