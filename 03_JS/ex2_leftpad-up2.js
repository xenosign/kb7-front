function leftpad(str, len, ch = " ") {
  str += "";
  let pad = "";
  while (pad.length < len - str.length) {
    pad += ch;
  }
  return pad.slice(0, len - str.length) + str;
}
