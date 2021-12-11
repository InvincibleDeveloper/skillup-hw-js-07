"use strict";

const StrModule = (function () {
  let string;

  function setStr(str) {
    if (str.valueOf() === undefined) {
      string = "";
    } else if (str.valueOf() === "number") {
      string = String(str);
    } else {
      string = str;
    }

    return string;
  }

  function getStr() {
    return string;
  }

  function getStrLength() {
    return string.length;
  }

  function getReversedStr() {
    let revStr = "";
    for (let i = string.length - 1; i >= 0; i--) {
      revStr += string[i];
    }
    return revStr;
  }

  return {
    setStr,
    getStr,
    getStrLength,
    getReversedStr,
  };
})();

console.log(StrModule.setStr("abcde"));
console.info(StrModule.getStr());
console.info(StrModule.getStrLength());
console.log(StrModule.getReversedStr());
