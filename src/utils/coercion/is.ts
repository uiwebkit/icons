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
