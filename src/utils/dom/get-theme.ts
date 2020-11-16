import { UniSize } from '../../models';

export function uniGetTheme({ color, size, fontSize }) {
  const inColor = ['primary', 'success', 'accent', 'warn'].includes(color);
  const inSize = ['lg', 'md', 'sm', 'xs'].includes(size as UniSize);
  const inFontSize = ['lg', 'md', 'sm', 'xs'].includes(fontSize as UniSize);

  let classes: string[] = [];
  let styles: any = {};

  if (inColor) {
    classes.push(`uni-color-${color}`);
  } else if (color) {
    styles.color = color;
    styles.fill = color;
  }

  if (inSize) {
    classes.push(`uni-size-${size}`);
  } else if (size) {
    styles.height = size;
    styles.width = size;
  }

  if (inFontSize) {
    classes.push(`uni-font-size-${fontSize}`);
  } else if (fontSize) {
    styles.fontSize = `${fontSize}px`;
  }

  return { classes, styles };
}
