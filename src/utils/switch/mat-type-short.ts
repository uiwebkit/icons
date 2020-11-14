import { UniIconsMatFont } from '../../models';

export function uniMatTypeShort(type: UniIconsMatFont): string {
  switch (type) {
    case 'filled':
      return 'f';
    case 'outlined':
      return 'o';
    case 'round':
      return 'r';
    case 'two-tone':
      return 't';
    case 'sharp':
      return 's';
    default:
      return 'f';
  }
}
