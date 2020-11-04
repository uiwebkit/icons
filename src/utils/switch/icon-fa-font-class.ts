import { UniIconsFaFont } from '../../models';

export function uniIconsFaFontClass(font: UniIconsFaFont): string {console.log(font);
  switch (font) {
    case 'brands':
      return 'fab';
    case 'regular':
      return 'far';
    case 'solid':
      return 'fas';
    default:
      return 'fas';
  }
}
