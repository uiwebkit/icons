import { h, VNode } from '@stencil/core';

import { UniRotateTemplate } from './rotate.template';

export const UniThemeRotateTemplate = function(props, template: VNode): VNode {
  return (
    <uni-theme-wrap
      classes={props.classes}
      color={props.color}
      size={props.size}
      font-size={props.fontSize}
      selector={props.selector}
      all={props.all}
    >
      <UniRotateTemplate
        degree={props.degree}
        speed={props.speed}
        steps={props.steps}
        selector={props.selector}
        all={props.all}
      >
        {template}
      </UniRotateTemplate>
    </uni-theme-wrap>
  );
};
