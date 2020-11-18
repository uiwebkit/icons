import { uniGetTheme } from './get-theme';
import { uniGetRotation } from './get-rotation';
import { uniModifyClass, uniModifyContent, uniModifyStyle } from './modify';
import {
  uniAppendStyle,
  UniColorCSS,
  UniFilterCSS,
  UniFontSizeCSS,
  uniGetDegree,
  uniModifyAsync,
  UniRotateCSS,
  UniSizeCSS,
} from '..';

export function uniSmartWrap(props) {
  const { el, selector, all } = props;
  const { color, filter, size, fontSize } = props;
  let { classes, styles } = color || filter || size || fontSize
    ? uniGetTheme({ color, filter, size, fontSize })
    : { classes: [], styles: {}};

  classes = [
    ...classes,
    ...(props.classes ? props.classes.split(' ') : []),
  ];

  if (props.color) {
    uniAppendStyle(UniColorCSS);
  }

  if (props.filter) {
    uniAppendStyle(UniFilterCSS);
  }

  if (props.size) {
    uniAppendStyle(UniSizeCSS);
  }

  if (props.fontSize) {
    uniAppendStyle(UniFontSizeCSS);
  }

  if (props.degree) {
    styles = {
      ...styles,
      ...uniGetDegree(props.degree).styles,
    };
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
  uniModifyAsync({ el, selector, all }, props.content, uniModifyContent);
}
