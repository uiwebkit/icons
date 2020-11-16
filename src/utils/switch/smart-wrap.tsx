import { h, VNode } from '@stencil/core';

export function uniSmartWrap(props, template: VNode): VNode {
  const isTheme = props.color || props.size || props.fontSize;

  const Wrap = `uni-wrap`;
  const Theme = `uni-theme-wrap`;
  const Rotate = `uni-rotate-wrap`;

  return (
    props.classes && isTheme && props.rotate
      ? <Wrap {...props}><Theme {...props}><Rotate {...props}>{template}</Rotate></Theme></Wrap>
      : props.classes && isTheme
      ? <Wrap {...props}><Theme {...props}>{template}</Theme></Wrap>
      : props.classes && props.rotate
        ? <Wrap {...props}><Rotate {...props}>{template}</Rotate></Wrap>
        : isTheme && props.rotate
          ? <Theme {...props}><Rotate {...props}>{template}</Rotate></Theme>
          : props.classes
            ? <Wrap {...props}>{template}</Wrap>
            : isTheme
              ? <Theme {...props}>{template}</Theme>
              : props.rotate
                ? <Rotate {...props}>{template}</Rotate>
                : template
  );
}
