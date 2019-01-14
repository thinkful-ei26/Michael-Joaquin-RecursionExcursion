'use strict';
// Factorial
// Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120

// given 4, return 4*3*2*1 = 24

//BC input > 0
//given 6 , multiply 6 * (6-1)
//4*3*2*1 4* 3!
//3*2*1   3*2!
//2*1
// take given digit and multiply it by (n-1)!

function factorial(n) {
  if (n === 0) return 1;
  else {
    return n * factorial(n - 1);
  }
}
//3 => 3*fn(2) 3*2*1
console.log(factorial(4));
