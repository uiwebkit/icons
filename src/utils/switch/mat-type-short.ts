import { UniIconsMatFont } from '../../models';

export function uniMatTypeShort(type: UniIconsMatFont): string {
  switch (type) {
    case 'fill':
      return 'f';
    case 'outline':
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
