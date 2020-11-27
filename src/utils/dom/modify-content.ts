export function uniModifyContent(targets: Element[], content: string): void {
  if (!!content) {
    targets.forEach((target: Element): void => {
      target.textContent = content;
    });
  }
}
