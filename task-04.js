"use strict";

const Calculator = (function () {
  let number;

  function getValue() {
    console.log(Number(Number(number).toFixed(2)));
    return this;
  }

  function setValue(x) {
    number = x;
    number = Number(Number(number).toFixed(2));
    return this;
  }

  function apend(y) {
    number = number + y;
    number = Number(Number(number).toFixed(2));
    return this;
  }

  function substract(y) {
    number = number - y;
    number = Number(Number(number).toFixed(2));
    return this;
  }

  function multiply(y) {
    number = (number * y).toFixed(2);
    number = Number(Number(number).toFixed(2));
    return this;
  }

  function divide(y) {
    number = (number / y).toFixed(2);
    number = Number(Number(number).toFixed(2));
    return this;
  }

  function pow(y) {
    number = Math.pow(number, y).toFixed(2);
    number = Number(Number(number).toFixed(2));
    return this;
  }

  return {
    getValue,
    setValue,
    apend,
    substract,
    multiply,
    divide,
    pow,
  };
})();

Calculator.setValue(3)
  .getValue()
  .apend(3)
  .substract(3)
  .divide(3)
  .multiply(9)
  .pow(2)
  .getValue();
