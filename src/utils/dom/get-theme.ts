export function uniGetTheme({ color, filter, size, fontSize }) {
  const colors = ['primary', 'success', 'accent', 'warn'];
  const sizes = ['lg', 'md', 'sm', 'xs'];

  let classes: string[] = [];
  let styles: any = {};

  if (colors.includes(color)) {
    classes.push(`uni-color-${color}`);
  } else if (color) {
    styles.color = color;
    styles.fill = color;
  }

  if (colors.includes(filter)) {
    classes.push(`uni-filter-${filter}`);
  } else if (filter) {
    styles.filter = filter;
  }

  if (sizes.includes(size)) {
    classes.push(`uni-size-${size}`);
  } else if (size) {
    styles.height = size;
    styles.width = size;
  }

  if (sizes.includes(fontSize)) {
    classes.push(`uni-font-size-${fontSize}`);
  } else if (fontSize) {
    styles.fontSize = `${fontSize}px`;
  }

  return { classes, styles };
}
