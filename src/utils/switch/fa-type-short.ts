import { UniIconsFaFont } from '../../models';

export function uniFaTypeShort(type: UniIconsFaFont): string {
  switch (type) {
    case 'solid':
      return 's';
    case 'regular':
      return 'r';
    case 'brands':
      return 'b';
    default:
      return 's';
  }
}
