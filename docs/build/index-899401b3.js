import { h, e as Host } from './index-0ff8f39d.js';

const isDefined = (value) => typeof value !== 'undefined';
const isNull = (value) => value === null;
const isArray = (value) => Array.isArray(value);
const isObject = (value) => typeof value === 'object' && value !== null && !isArray(value);
const isString = (value) => typeof value === 'string';
const isBoolean = (value) => typeof value === 'boolean';
function isEmptyString(value) {
  return isDefined(value) && (isString(value) && value === '');
}
function isEmpty(value) {
  return isDefined(value) && ((isArray(value) && value.length === 0)
    || (isObject(value) && Object.keys(value).length === 0)
    || (isString(value) && value === '')
    || isNull(value));
}
function isJSON(value) {
  try {
    JSON.parse(value);
  }
  catch (e) {
    return false;
  }
  return isString(value);
}
function isNestedData(value) {
  return isArray(value) || isObject(value);
}
function uniIsEqual(state, value) {
  return isNestedData(state)
    ? JSON.stringify(state) === (isNestedData(value) ? JSON.stringify(value) : value)
    : uniGetValue(state) === uniGetValue(value);
}
function uniStringifyEqual(value, equal) {
  return isNestedData(value) ? JSON.stringify(value) === equal : value === uniGetValue(equal);
}
function uniStringifyNoEqual(value, noEqual) {
  return isNestedData(value) ? JSON.stringify(value) !== noEqual : value !== uniGetValue(noEqual);
}
function isBind(value, start = '{{', end = '}}') {
  return isString(value) && value.includes(start) && value.includes(end);
}
// export function isBinding(value, start = '{{', end = '}}'): boolean {
//   return isDefined(value) && isBind(value, start, end);
// }
// export function isNotBinding(value, start = '{{', end = '}}'): boolean {
//   return isDefined(value) && !isBind(value, start, end);
// }
// export function isCleanNotBinding(value, start = '{{', end = '}}'): boolean {
//   return !isDefined(value) || !isBind(value, start, end);
// }
// export function isCleanNotBindings(values, start = '{{', end = '}}'): boolean {
//   return values.every((value) => isCleanNotBinding(value, start, end));
// }

const isNumber = (value) => typeof value === 'number';
/**
 * Whether the provided value is considered a number.
 */
function isNumberValue(value) {
  // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
  // and other non-number values as NaN, where Number just uses 0) but it considers the string
  // '123hello' to be a valid number. Therefore, we also check if Number(value) is NaN.
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceNumberProperty(value, fallbackValue = 0) {
  return isNumberValue(value) ? Number(value) : fallbackValue;
}

function uniGetValue(value) {
  return value === 'true' ? true
    : value === 'false' ? false
      : value === 'null' ? null
        : value === 'undefined' ? undefined
          : isNumberValue(value) ? Number(value)
            : isJSON(value) ? JSON.parse(value)
              : isObject(value) ? Object.assign({}, value) : isArray(value) ? [...value]
                : value;
}

function uniAddClass(element, value, prefix = '', suffix = '') {
  if (value && value !== '') {
    element.classList.add(`${prefix}${value}${suffix}`);
  }
}

function uniGetTargetElements(el, all, selector) {
  const elements = all
    ? selector
      ? el.querySelectorAll(selector)
      : el.children || []
    : selector
      ? el.querySelector(selector) ? [el.querySelector(selector)] : []
      : el.firstElementChild ? [el.firstElementChild] : [];
  if (!elements || !elements[0]) {
    console.error('No Element target: ' + selector);
    console.warn('For Element', el);
  }
  return Array.from(elements);
}

function uniAddProp(el, prop, value, all, selector) {
  Array.from(uniGetTargetElements(el, all, selector))
    .forEach((element) => {
    if (element) {
      element[prop] = value;
    }
  });
}

function uniAppendStyle(css) {
  const styles = document.head.querySelectorAll('style');
  const hasStyle = Array.from(styles).some((style) => style.textContent === css);
  if (!hasStyle) {
    const newStyle = document.createElement('style');
    newStyle.appendChild(document.createTextNode(css));
    document.head.appendChild(newStyle);
  }
}

function uniClearContent(el) {
  if (isDefined(el)) {
    el.textContent = '';
  }
}

function uniGetAngle(angle) {
  let styles = {};
  const rotate = `rotate(${angle}deg)`;
  styles.transform = rotate;
  styles['-webkit-transform'] = rotate;
  return { styles };
}

function uniGetShadowInnerElements(elems, selector) {
  const elements = [];
  Array.from(elems || [])
    .filter((element) => !!element.shadowRoot)
    .forEach((element) => {
    elements.push(...Array.from(element.shadowRoot.querySelectorAll(selector) || []));
  });
  return elements;
}

function uniGetAnyElements(data) {
  const { top, shadow, frame, selector } = data;
  const elements = Array.from((top ? window.top : window).document.body.querySelectorAll(selector) || []);
  if (shadow) {
    elements.push(...uniGetShadowInnerElements((top ? window.top : window).document.body.getElementsByTagName('*'), selector));
  }
  if (frame) {
    Array.from((top ? window.top : window).document.body.querySelectorAll('iframe') || [])
      .forEach((frame) => {
      var _a, _b, _c, _d;
      elements.push(...Array.from(((_b = (_a = frame.contentDocument) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.querySelectorAll(selector)) || []));
      if (shadow) {
        elements.push(...uniGetShadowInnerElements((_d = (_c = frame.contentDocument) === null || _c === void 0 ? void 0 : _c.body) === null || _d === void 0 ? void 0 : _d.getElementsByTagName('*'), selector));
      }
    });
  }
  return elements;
}

function uniGetContent(el) {
  return el === null || el === void 0 ? void 0 : el.textContent.trim();
}

function uniGetCleanContent(el) {
  const content = uniGetContent(el);
  uniClearContent(el);
  return content || null;
}

function uniGetElementIndex(el, nodes) {
  return [...nodes]
    .map((element, index) => element.isSameNode(el) ? index : null)
    .reduce((acc, index) => acc === 0 || acc > 0 ? acc : index);
}

function uniGetRotation({ speed, steps }) {
  let styles = {};
  const rotation = `uni-rotate ${speed || 1}s infinite ${steps ? 'steps(' + steps + ')' : 'linear'}`;
  styles.animation = rotation;
  styles['-webkit-animation'] = rotation;
  return { styles };
}

function uniGetTargetAttribute(el, target, attribute) {
  const child = el.querySelector(target) || {};
  return child[attribute] || '';
}

function uniGetTheme({ color, filter, size, fontSize }) {
  const colors = ['primary', 'success', 'accent', 'warn'];
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  let classes = [];
  let styles = {};
  if (colors.includes(color)) {
    classes.push(`uni-color-${color}`);
  }
  else if (color) {
    styles.color = color;
    styles.fill = color;
  }
  if (colors.includes(filter)) {
    classes.push(`uni-filter-${filter}`);
  }
  else if (filter) {
    styles.filter = filter;
  }
  if (sizes.includes(size)) {
    classes.push(`uni-size-${size}`);
  }
  else if (size) {
    styles.height = size;
    styles.width = size;
  }
  if (sizes.includes(fontSize)) {
    classes.push(`uni-font-size-${fontSize}`);
  }
  else if (fontSize) {
    styles.fontSize = `${fontSize}px`;
  }
  return { classes, styles };
}

function uniRemoveClass(element, value, prefix = '', suffix = '') {
  if (value && value !== '') {
    element.classList.remove(`${prefix}${value}${suffix}`);
  }
}

function uniHandleClass(el, value, isNew, prefix = '', suffix = '') {
  if (isNew) {
    uniAddClass(el, value, prefix, suffix);
  }
  else {
    uniRemoveClass(el, value, prefix, suffix);
  }
}

function uniHandleClasses(el, classes) {
  if (isObject(classes)) {
    Object.keys(classes)
      .forEach(key => {
      uniHandleClass(el, key, classes[key]);
    });
  }
}

function uniHandleOldClass(el, oldValue, newValue, prefix = '', suffix = '') {
  uniRemoveClass(el, oldValue, prefix, suffix);
  uniAddClass(el, newValue, prefix, suffix);
}

function uniHandleTargetClasses(el, classes, all, selector) {
  uniGetTargetElements(el, all, selector)
    .forEach((target) => {
    uniHandleClasses(target, classes);
  });
}

function isTargetElement(el, selector) {
  return selector ? selector === 'Host' || !!el.querySelector(selector) : !!el.firstElementChild;
}

function uniModify(context, data, cbFunction, observer) {
  if (!isEmpty(data)) {
    if (context.selector) {
      if (context.selector === 'Host') {
        cbFunction([context.el], data);
      }
      else {
        const targets = context.all
          ? context.el.querySelectorAll(context.selector)
          : [context.el.querySelector(context.selector)];
        if (targets[0]) {
          cbFunction(targets, data);
          observer === null || observer === void 0 ? void 0 : observer.disconnect();
        }
      }
    }
    else {
      const firstChildren = context.all ? [...context.el.children] : [context.el.firstElementChild];
      if (firstChildren && firstChildren[0]) {
        cbFunction(firstChildren, data);
        observer === null || observer === void 0 ? void 0 : observer.disconnect();
      }
    }
  }
}

function uniModifyAsync(context, data, cbFunction) {
  if (isDefined(data) && !isEmpty(data)) {
    if (isTargetElement(context.el, context.selector)) {
      uniModify(context, data, cbFunction);
    }
    else {
      const observer = new MutationObserver(() => {
        uniModify(context, data, cbFunction, observer);
      });
      observer.observe(context.el, { childList: true, subtree: true });
    }
  }
}

function uniModifyAttr(targets, attrs) {
  for (const [key, value] of Object.entries(attrs)) {
    targets.forEach((target) => {
      target.setAttribute(key, value);
    });
  }
}

function uniModifyClass(targets, classNames) {
  classNames.forEach((className) => {
    targets.forEach((target) => {
      target.classList.add(className);
    });
  });
}

function uniModifyContent(targets, content) {
  if (!!content) {
    targets.forEach((target) => {
      target.textContent = content;
    });
  }
}

function uniModifyStyle(targets, styles) {
  for (const [key, value] of Object.entries(styles)) {
    targets.forEach((target) => {
      target.style[key] = `${value}${isNaN(Number(value)) ? '' : 'px'}`;
    });
  }
}

function uniRemoveClasses(element, ...values) {
  element.classList.remove(...values);
}

function uniSetDefaultStyles(el) {
  el.style.display = 'inherit';
}

function uniSetRound(el, round) {
  if (round) {
    uniModifyAsync({ el, selector: 'svg' }, { 'border-radius': '50%' }, uniModifyStyle);
  }
}

function uniSmartWrap(props) {
  const { el, color, filter, size, fontSize, selector, all } = props;
  let { classes, styles } = color || filter || size || fontSize
    ? uniGetTheme({ color, filter, size, fontSize })
    : { classes: [], styles: {} };
  classes = [
    ...classes,
    ...(props.classes ? props.classes.split(' ') : []),
  ];
  if (!!color) {
    uniAppendStyle(UniColorCSS);
  }
  if (filter) {
    uniAppendStyle(UniFilterCSS);
  }
  if (size) {
    uniAppendStyle(UniSizeCSS);
  }
  if (fontSize) {
    uniAppendStyle(UniFontSizeCSS);
  }
  if (props.angle) {
    styles = Object.assign(Object.assign({}, styles), uniGetAngle(props.angle).styles);
  }
  if (props.spin) {
    uniAppendStyle(UniRotateCSS);
    styles = Object.assign(Object.assign({}, styles), uniGetRotation(props).styles);
  }
  uniModifyAsync({ el, selector, all }, classes, uniModifyClass);
  uniModifyAsync({ el, selector, all }, styles, uniModifyStyle);
  uniModifyAsync({ el, selector, all }, props.content, uniModifyContent);
}

async function uniFetch(url, type, options) {
  const response = await fetch(url, options);
  return await response[type]();
}

const UniColorClasses = {
  primary: 'uni-color-primary',
  success: 'uni-color-success',
  accent: 'uni-color-accent',
  warn: 'uni-color-warn'
};

function uniGetColorClass(color) {
  return {
    [UniColorClasses.primary]: color === 'primary',
    [UniColorClasses.success]: color === 'success',
    [UniColorClasses.accent]: color === 'accent',
    [UniColorClasses.warn]: color === 'warn'
  };
}

async function uniLoad(url, type, options) {
  return await uniFetch(url, type, options);
}

const UniColorCSS = `
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
}`;

const UniFilterCSS = `
.uni-filter-primary {
  filter: invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%);
  filter: var(--uni-color-primary-fix, invert(31%) sepia(10%) saturate(6644%) hue-rotate(204deg) brightness(95%) contrast(89%));
}
.uni-filter-success {
  filter: invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%);
  filter: var(--uni-color-success-fix, invert(26%) sepia(88%) saturate(1958%) hue-rotate(160deg) brightness(94%) contrast(99%));
}
.uni-filter-accent {
  filter: invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%);
  filter: var(--uni-color-accent-fix, invert(48%) sepia(88%) saturate(3768%) hue-rotate(315deg) brightness(99%) contrast(106%));
}
.uni-filter-warn {
  filter: invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%);
  filter: var(--uni-color-warn-fix, invert(42%) sepia(40%) saturate(3627%) hue-rotate(336deg) brightness(93%) contrast(107%));
}`;

const UniFontSizeCSS = `
.uni-font-size-xs {
  font-size: 12px;
  font-size: var(--uni-size-xs, 12px);
}
.uni-font-size-sm {
  font-size: 16px;
  font-size: var(--uni-size-sm, 16px);
}
.uni-font-size-md {
  font-size: 20px;
  font-size: var(--uni-size-md, 20px);
}
.uni-font-size-lg {
  font-size: 24x;
  font-size: var(--uni-size-lg, 24px);
}
.uni-font-size-xl {
  font-size: 35px;
  font-size: var(--uni-size-xl, 35px);
}
.uni-font-size-xxl {
  font-size: 50px;
  font-size: var(--uni-size-xxl, 50px);
}`;

const UniRotateCSS = `
@-webkit-keyframes uni-rotate {
  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}
@keyframes uni-rotate {
  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
}`;

const UniSizeCSS = `
.uni-size-xs {
  height: 12px;
  height: var(--uni-size-xs, 12px);
  width: 12px;
  width: var(--uni-size-xs, 12px);
}
.uni-size-sm {
  height: 16px;
  height: var(--uni-size-sm, 16px);
  width: 16px;
  width: var(--uni-size-sm, 16px);
}
.uni-size-md {
  height: 20px;
  height: var(--uni-size-md, 20px);
  width: 20px;
  width: var(--uni-size-md, 20px);
}
.uni-size-lg {
  height: 24px;
  height: var(--uni-size-lg, 24px);
  width: 24px;
  width: var(--uni-size-lg, 24px);
}
.uni-size-xl {
  height: 35px;
  height: var(--uni-size-xl, 35px);
  width: 35px;
  width: var(--uni-size-xl, 35px);
}
.uni-size-xxl {
  height: 50px;
  height: var(--uni-size-xxl, 50px);
  width: 50px;
  width: var(--uni-size-xxl, 50px);
}`;

const UniTemplate = function (template) {
  return template;
};

const UniHostTemplate = function ({ props, classes }, template) {
  return h(Host, Object.assign({}, props, { class: classes }), UniTemplate(template));
};

export { UniTemplate as U, uniModifyAttr as a, uniGetCleanContent as b, uniSmartWrap as c, UniHostTemplate as d, isEmptyString as i, uniSetDefaultStyles as u };
