import { h, VNode } from '@stencil/core';

export const UniRotateTemplate = function(props, template: VNode): VNode {
  return (
    <uni-rotate-wrap {...props}>
      {template}
    </uni-rotate-wrap>
  );
};
