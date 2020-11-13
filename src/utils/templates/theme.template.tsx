import { h, VNode } from '@stencil/core';

export const UniThemeTemplate = function(props, template: VNode): VNode {
  return (
    <uni-theme-wrap {...props}>
      {template}
    </uni-theme-wrap>
  );
};
