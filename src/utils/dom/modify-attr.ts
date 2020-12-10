export function uniModifyAttr(targets: HTMLElement[], attrs: any): void {
  for (const [key, value] of Object.entries(attrs)) {
    targets.forEach((target: HTMLElement): void => {
      target.setAttribute(key, value as string);
    });
  }
}
