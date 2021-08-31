import { Component, ComponentInterface, Element} from '@stencil/core';

import svg from '../../../../assets/svg/mat/build-circle/two-tone.svg';
import { uniSetDefaultStyles } from '../../../../utils';

@Component({ tag: 'uni-mat-tt-build-circle' })
export class UniMatTtBuildCircleComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
    uniSetDefaultStyles(this.el);
  }
}
