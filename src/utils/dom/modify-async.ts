import { isEmpty, isTargetElement, uniModify } from '..';

export function uniModifyAsync(context, data: any, cbFunction) {
  if (!isEmpty(data)) {
    if (isTargetElement(context.el, context.selector)) {
      uniModify(context, data, cbFunction);
    } else {
      const observer = new MutationObserver(() => {
        uniModify(context, data, cbFunction, observer);
      });

      observer.observe(context.el, { childList: true, subtree: true });
    }
  }
}
