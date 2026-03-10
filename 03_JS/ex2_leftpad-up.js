function leftpad(str, len, ch) {
  str = String(str);

  len = len - str.length;

  if (len < 1) return str;

  if (!ch && ch !== 0) ch = ' ';
  let i = -1;

  while (++i < len) {
    str = ch + str;
  }

  return str;
}

const str = '123';
console.log(leftpad(str, 5, 0));
