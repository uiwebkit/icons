import { h, VNode } from '@stencil/core';

export const UniThemeTemplate = function(props, template: VNode): VNode {
  return (
    <uni-theme-wrap
      color={props.color}
      size={props.size}
      font-size={props.fontSize}
      selector={props.selector}
      all={props.all}
    >
      {template}
    </uni-theme-wrap>
  );
};
