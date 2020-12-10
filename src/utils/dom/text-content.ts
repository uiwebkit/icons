import { isEmpty } from '../coercion/is';

export function uniGetCleanContent(el): string {
  const content = uniGetContent(el);

  if (!isEmpty(content)) {
    uniClearContent(el);
  }

  return content || null;
}

export function uniGetContent(el): string {
  return el?.textContent;
}

export function uniClearContent(el): void {
  el.textContent = '';
}
