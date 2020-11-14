import { VNode } from '@stencil/core';

import { UniRotateTemplate, UniThemeRotateTemplate, UniThemeTemplate } from '..';

export function uniSmartWrap(props, template: VNode): VNode {
  return props.rotate && (props.classes || props.color || props.size || props.fontSize)
    ? UniThemeRotateTemplate({ ...props }, template)
    : props.rotate
      ? UniRotateTemplate({ ...props }, template)
      : props.classes || props.color || props.size || props.fontSize
        ? UniThemeTemplate({ ...props }, template)
        : template;
}
