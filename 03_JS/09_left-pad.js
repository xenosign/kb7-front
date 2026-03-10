function leftpad(str, len, ch) {
  str = String(str);
  len = len - str.length;

  if (len < 1) return str;

  if (!ch && ch !== 0) ch = " ";
  // else if (ch === 0) ch = "0";

  for (let i = 0; i < len; i++) {
    str = ch + str;
  }

  return str;
}

console.log(leftPad("abc", 5, "*")); // "**abc"
console.log(leftPad("123", 2, "0")); // "123")
console.log(leftPad("7", 4, "0")); // "0007")
console.log(leftPad("hi", 5)); // "   hi")
