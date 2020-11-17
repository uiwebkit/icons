import { uniGetTheme } from './get-theme';
import { uniGetRotation } from './get-rotation';
import { uniModifyClass, uniModifyStyle } from './modify';
import { uniAppendStyle, UniColorCSS, UniFontSizeCSS, uniModifyAsync, UniRotateCSS, UniSizeCSS } from '..';

export function uniSmartWrap(props) {
  const { el, selector, all } = props;
  const { color, size, fontSize } = props;
  let { classes, styles } = color || size || fontSize
    ? uniGetTheme({ color, size, fontSize })
    : { classes: [], styles: {}};

  classes = [
    ...classes,
    ...(props.classes ? props.classes.split(' ') : []),
  ];

  if (props.color) {
    uniAppendStyle(UniColorCSS);
  }

  if (props.size) {
    uniAppendStyle(UniSizeCSS);
  }

  if (props.fontSize) {
    uniAppendStyle(UniFontSizeCSS);
  }

  if (props.rotate) {
    uniAppendStyle(UniRotateCSS);

    styles = {
      ...styles,
      ...uniGetRotation(props).styles,
    };
  }

  uniModifyAsync({ el, selector, all }, classes, uniModifyClass);
  uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
}
