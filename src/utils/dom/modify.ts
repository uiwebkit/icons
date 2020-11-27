import { isEmpty } from '..';

export function uniModify(context, data: any, cbFunction, observer?): void {
  if (!isEmpty(data)) {
    if (context.selector) {
      if (context.selector === 'Host') {
        cbFunction([context.el], data);
      } else {
        const targets = context.all
          ? context.el.querySelectorAll(context.selector)
          : [context.el.querySelector(context.selector)];

        if (targets[0]) {
          cbFunction(targets, data);
          observer?.disconnect();
        }
      }
    } else {
      const firstChildren = context.all ? [...context.el.children] : [context.el.firstElementChild];

      if (firstChildren && firstChildren[0]) {
        cbFunction(firstChildren, data);
        observer?.disconnect();
      }
    }
  }
}
