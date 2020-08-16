function capitalize(str: string): string {
  str = str || '';
  str = str.trim();

  if (str[0]) {
    str = str[0].toUpperCase() + str.substr(1).toLowerCase();
  }

  return str;
}

function underscore(str: string): string {
  str = str || '';
  str = str.toString(); // might be a number
  str = str.trim();
  str = str.replace(/([a-z\d])([A-Z]+)/g, '$1_$2');
  str = str.replace(/[-\s]+/g, '_').toLowerCase();

  return str;
}

function extname(str: string): string {
  const index = str.lastIndexOf('.');
  const ext = str.substring(index, str.length);

  return (index === -1) ? '' : ext;
}

export function humanize(str: string): string {
  str = str || '';
  str = str.toString(); // might be a number
  str = str.trim();
  str = str.replace(extname(str), '');
  str = underscore(str);
  str = str.replace(/[\W_]+/g, ' ');

  return capitalize(str);
}



