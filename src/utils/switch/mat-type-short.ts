import { UniIconsMatFont } from '../../models';

export function uniMatTypeShort(type: UniIconsMatFont): string {
  switch (type) {
    case 'filled':
      return 'f';
    case 'outlined':
      return 'o';
    case 'rounded':
      return 'r';
    case 'sharp':
      return 's';
    case 'two-tone':
      return 'tt';
    default:
      return 'f';
  }
}
