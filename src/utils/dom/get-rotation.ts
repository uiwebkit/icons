export function uniGetRotation({ speed, steps }) {
  let styles: any = {};
  const rotation = `uni-rotate ${speed || 1}s infinite ${steps ? 'steps(' + steps + ')' : 'linear'}`;

  styles.animation = rotation;
  styles['-webkit-animation'] = rotation;

  return { styles };
}
