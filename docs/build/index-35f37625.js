function uniIconsFaFontClass(font) {
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

function uniFaTypeShort(type) {
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

function uniMatTypeShort(type) {
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

export { uniFaTypeShort as a, uniMatTypeShort as b, uniIconsFaFontClass as u };
