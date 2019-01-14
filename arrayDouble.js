'use strict';

function doubler(arr) {
  // double each element
  // base case till we are out of elements
  if (arr.length === 0) return [];
  //  let output = []
  else {
    // return arr[0] * 2;
    return [arr[0] * 2, ...doubler(arr.slice(1))];
  }
}

console.log(doubler([1, 1, 1]));
// [1, 2, 4, 5, 6][(2, 4, 8, 10.12)];