'use strict';

function revStr(str) {
  if (str.length === 0) return '';
  else {
    return revStr(str.slice(1)) + str[0];
  }
}

console.log(revStr('hello'));
