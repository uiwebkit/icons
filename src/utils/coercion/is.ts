export const isDefined = (value: unknown): boolean => typeof value !== 'undefined' && value !== null;

export const isArray = (value: unknown): boolean => Array.isArray(value);

export const isObject = (value: unknown): boolean => typeof value === 'object' && !isArray(value);

export const isString = (value: unknown): boolean => typeof value === 'string';

export function isEmptyString(value: any): boolean {
  return isDefined(value) && (isString(value) && value === '');
}

export function isEmpty(value: any): boolean {
  return isDefined(value) && (
    (isArray(value) && value.length === 0)
    || (isObject(value) && Object.keys(value).length === 0)
    || (isString(value) && value === '')
  );
}
