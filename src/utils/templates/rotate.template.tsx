import { h, VNode } from '@stencil/core';

export const UniRotateTemplate = function(props, template: VNode): VNode {
  return (
    <uni-rotate-wrap
      degree={props.degree}
      speed={props.speed}
      steps={props.steps}
      selector={props.selector}
      all={props.all}
    >
      {template}
    </uni-rotate-wrap>
  );
};
