export function uniModifyStyle(targets: HTMLElement[], styles: any): void {
  for (const [key, value] of Object.entries(styles)) {
    targets.forEach((target: HTMLElement): void => {
      target.style[key] = value;
    });
  }
}
