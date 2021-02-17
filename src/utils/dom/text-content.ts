import { isDefined } from '../coercion/is';

export function uniGetCleanContent(el: HTMLElement): string {
  const content = uniGetContent(el);
  uniClearContent(el);

  return content || null;
}

export function uniGetContent(el: HTMLElement): string {
  return el?.textContent.trim();
}

export function uniClearContent(el: HTMLElement): void {
  if (isDefined(el)) {
    el.textContent = '';
  }
}
