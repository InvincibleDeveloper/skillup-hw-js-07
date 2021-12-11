"use strict";

function multiplyMaker(num1) {
  if (num1 === undefined) {
    num1 = 0;
  }
  let result = num1;
  return (num2) => {
    result *= num2;
    return result;
  };
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.info(multiply(1));
console.log(multiply(3));
console.info(multiply(10));
