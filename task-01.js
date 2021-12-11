"use strict";

function minus(x) {
  if (x === undefined) {
    x = 0;
  }

  return (y) => {
    if (y === undefined) {
      y = 0;
    }

    return x - y;
  };
}

console.log(minus(10)(6));
console.log(minus(5)(6));
console.info(minus(10)());
console.info(minus()(6));
console.log(minus()());
