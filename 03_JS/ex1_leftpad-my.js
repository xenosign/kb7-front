function leftpad(str, len, ch) {
  str = String(str);
  // str += '';
  len = len - str.length;

  if (len < 1) return str;

  if (!ch && ch !== 0) ch = ' ';

  for (let i = 0; i < len; i++) {
    str = ch + str;
  }

  return str;
}

const str = '123';
console.log(leftpad(str, 5, 0));
