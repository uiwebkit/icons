export function uniModifyClass(targets: Element[], classNames: string[]): void {
  classNames.forEach((className: string): void => {
    targets.forEach((target: Element): void => {
      target.classList.add(className);
    });
  });
}
