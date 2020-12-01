export function uniAppendStyle(css) {
  const styles = document.head.querySelectorAll('style');
  const hasStyle = Array.from(styles).some((style: HTMLStyleElement): boolean => style.textContent === css);

  if (!hasStyle) {
    const newStyle = document.createElement('style');

    newStyle.appendChild(document.createTextNode(css));
    document.head.appendChild(newStyle);
  }
}
