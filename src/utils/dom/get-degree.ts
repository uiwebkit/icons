export function uniGetDegree(degree: number) {
  let styles: any = {};
  const rotate = `rotate(${degree}deg)`;

  styles.transform = rotate;
  styles['-webkit-transform'] = rotate;

  return { styles };
}
