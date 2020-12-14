import { uniGetTheme } from './get-theme';
import { uniGetRotation } from './get-rotation';
import {
  uniAppendStyle,
  UniColorCSS,
  UniFilterCSS,
  UniFontSizeCSS,
  uniGetAngle,
  uniModifyAsync,
  uniModifyClass,
  uniModifyContent,
  uniModifyStyle,
  UniRotateCSS,
  UniSizeCSS,
} from '..';

export function uniSmartWrap(props) {
  const { el, color, filter, size, fontSize, selector, all } = props;
  let { classes, styles } = color || filter || size || fontSize
    ? uniGetTheme({ color, filter, size, fontSize })
    : { classes: [], styles: {} };

  classes = [
    ...classes,
    ...(props.classes ? props.classes.split(' ') : []),
  ];

  if (!!color) {
    uniAppendStyle(UniColorCSS);
  }

  if (filter) {
    uniAppendStyle(UniFilterCSS);
  }

  if (size) {
    uniAppendStyle(UniSizeCSS);
  }

  if (fontSize) {
    uniAppendStyle(UniFontSizeCSS);
  }

  if (props.angle) {
    styles = {
      ...styles,
      ...uniGetAngle(props.angle).styles,
    };
  }

  if (props.spin) {
    uniAppendStyle(UniRotateCSS);

    styles = {
      ...styles,
      ...uniGetRotation(props).styles,
    };
  }

  uniModifyAsync({ el, selector, all }, classes, uniModifyClass);
  uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
  uniModifyAsync({ el, selector, all }, props.content, uniModifyContent);
}
