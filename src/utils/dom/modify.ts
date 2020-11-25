import { isEmpty } from '..';

export function uniModify(context, data: any, cbFunction, observer?): void {
  if (!isEmpty(data)) {
    if (context.selector) {
      if (context.selector === 'Host') {
        cbFunction(context.el, data);
      } else {
        const targets = context.all
          ? context.el.querySelectorAll(context.selector)
          : [context.el.querySelector(context.selector)];

        if (targets[0]) {
          targets.forEach((target: Element): void => {
            cbFunction(target, data);
          });

          observer?.disconnect();
        }
      }
    } else {
      const firstChild = context.el.firstElementChild;

      if (firstChild) {
        cbFunction(firstChild, data);
        observer?.disconnect();
      }
    }
  }
}

export function uniModifyContent(target: Element, content: string): void {
  if (!!content) {
    target.textContent = content;
  }
}

export function uniModifyClass(target: Element, classNames: string[]): void {
  classNames.forEach((className: string): void => {
    target.classList.add(className);
  });
}

export function uniModifyStyle(target: HTMLElement, styles: any): void {
  for (const [key, value] of Object.entries(styles)) {
    target.style[key] = value;
  }
}

export function isTargetElement(el: HTMLElement, selector: string): boolean {
  return selector ? selector === 'Host' || !!el.querySelector(selector) : !!el.firstElementChild;
}
