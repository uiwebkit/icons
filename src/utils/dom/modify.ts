import { uniGetTheme } from './get-theme';
import { uniGetRotation } from './get-rotation';

const uniRotateCSS = document.createTextNode(`
@-webkit-keyframes uni-rotate {
  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}

@keyframes uni-rotate {
  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}`);

const uniColorCSS =  document.createTextNode(`
.uni-color-primary {
  color: #3f51b5;
  color: var(--uni-color-primary, #3f51b5);
  fill: #3f51b5;
  fill: var(--uni-color-primary, #3f51b5);
}

.uni-color-success {
  color: #018786;
  color: var(--uni-color-success, #018786);
  fill: #018786;
  fill: var(--uni-color-success, #018786);
}

.uni-color-accent {
  color: #ff4081;
  color: var(--uni-color-accent, #ff4081);
  fill: #ff4081;
  fill: var(--uni-color-accent, #ff4081);
}

.uni-color-warn {
  color: #f44336;
  color: var(--uni-color-warn, #f44336);
  fill: #f44336;
  fill: var(--uni-color-warn, #f44336);
}
`);

const uniSizeCSS =  document.createTextNode(`
.uni-size-lg {
  height: 48px;
  height: var(--uni-size-lg, 48px);
  width: 48px;
  width: var(--uni-size-lg, 48px);
}

.uni-size-md {
  height: 36px;
  height: var(--uni-size-md, 36px);
  width: 36px;
  width: var(--uni-size-md, 48px);
}

.uni-size-sm {
  height: 24px;
  height: var(--uni-size-sm, 24px);
  width: 24px;
  width: var(--uni-size-sm, 24px);
}

.uni-size-xs {
  height: 12px;
  height: var(--uni-size-xs, 12px);
  width: 12px;
  width: var(--uni-size-xs, 12px);
}
`);

const uniFontSizeCSS =  document.createTextNode(`
.uni-font-size-lg {
  font-size: 48px;
  font-size: var(--uni-size-lg, 48px);
}

.uni-font-size-md {
  font-size: 36px;
  font-size: var(--uni-size-md, 36px);
}

.uni-font-size-sm {
  font-size: 24px;
  font-size: var(--uni-size-sm, 24px);
}

.uni-font-size-xs {
  font-size: 12px;
  font-size: var(--uni-size-xs, 12px);
}
`);

export function uniModifyStart(props) {
  const { el, selector, all } = props;
  let { classes, styles } = uniGetTheme(props);

  classes = [
    ...classes,
    ...(props.classes ? props.classes.split(' ') : []),
  ];

  if (props.color) {
    const colorStyle = document.createElement('style');

    colorStyle.appendChild(uniColorCSS);
    document.head.appendChild(colorStyle);
  }

  if (props.size) {
    const sizeStyle = document.createElement('style');

    sizeStyle.appendChild(uniSizeCSS);
    document.head.appendChild(sizeStyle);
  }

  if (props.fontSize) {
    const fontSizeStyle = document.createElement('style');

    fontSizeStyle.appendChild(uniFontSizeCSS);
    document.head.appendChild(fontSizeStyle);
  }

  if (props.rotate) {
    const rotateStyle = document.createElement('style');

    rotateStyle.appendChild(uniRotateCSS);
    document.head.appendChild(rotateStyle);

    styles = {
      ...styles,
      ...uniGetRotation(props).styles,
    };
  }

  uniModifyAsync({ el, selector, all }, classes, uniModifyClass);
  uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
}

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

export function uniModify(context, data: any, cbFunction, observer?): void {
  if (!isEmpty(data)) {
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


export const isDefined = (value: unknown): boolean => typeof value !== 'undefined' && value !== null;

export const isArray = (value: unknown): boolean => isDefined(value) && Array.isArray(value);

export const isObject = (value: unknown): boolean => isDefined(value) && typeof value === 'object' && !isArray(value);

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isEmpty(value: any): boolean {
  return (isArray(value) && value.length === 0)
    || (isObject(value) && Object.keys(value).length === 0)
    || (isString(value) && value === '');
}
