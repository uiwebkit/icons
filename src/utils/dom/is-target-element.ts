export function isTargetElement(el: HTMLElement, selector: string): boolean {
  return selector ? selector === 'Host' || !!el.querySelector(selector) : !!el.firstElementChild;
}
