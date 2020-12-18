export function uniGetAngle(angle: number) {
  let styles: any = {};
  const rotate = `rotate(${angle}deg)`;

  styles.transform = rotate;
  styles['-webkit-transform'] = rotate;

  return { styles };
}
