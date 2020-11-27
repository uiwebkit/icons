import { UniIconsMatFont } from '../../models';

export function uniMatTypeShort(type: UniIconsMatFont): string {
  switch (type) {
    case 'filled':
      return 'f';
    case 'outlined':
      return 'o';
    case 'rounded':
      return 'r';
    case 'two-tone':
      return 'tt';
    case 'sharp':
      return 's';
    default:
      return 'f';
  }
}
