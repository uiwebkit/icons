export function uniModifyAsync(context, data: any, cbFunction) {
  if (isTargetElement(context.el, context.selector)) {
    uniModify(context, data, cbFunction);
  } else {
    const observer = new MutationObserver(() => {
      uniModify(context, data, cbFunction, observer);
    });

    observer.observe(context.el, { childList: true, subtree: true });
  }
}

export function uniModify(context, data: any, cbFunction, observer?): void {
  if (context.selector) {
    const targets = context.all
      ? context.el.querySelectorAll(context.selector)
      : [context.el.querySelector(context.selector)];

    if (targets[0]) {
      targets.forEach((target: Element): void => {
        cbFunction(target, data);
      });

      observer?.disconnect();
    }
  } else {
    const firstChild = context.el.firstElementChild;

    if (firstChild) {
      cbFunction(firstChild, data);
      observer?.disconnect();
    }
  }
}

export function uniModifyContent(target: Element, content: string): void {
  target.textContent = content;
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
  return selector ? !!el.querySelector(selector) : !!el.firstElementChild;
}
