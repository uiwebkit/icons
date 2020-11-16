export function uniGetRotation({ degree, speed, steps }) {
  let styles: any = {};

  if (degree) {
    const rotate = `rotate(${degree}deg)`;

    styles.transform = rotate;
    styles['-webkit-transform'] = rotate;
  } else {
    const rotation = `uni-rotate ${speed || 1}s infinite ${steps ? 'steps(' + steps + ')' : 'linear'}`;

    styles.animation = rotation;
    styles['-webkit-animation'] = rotation;
  }

  return { styles };
}
