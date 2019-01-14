'use strict';

// given 6, return 110

//given a decimal number , divide by 2, and mod 2
// 6 /2 = 3
// 6%2 = 0
// 0 will be our first binary
// then:
// 3/2 = 1
//3%2 = 1
// so 1 is our second binary digit, we now have 10
//finally 1/2 = 0
//1%2 = 1, so our third and final digit is one and we have a total of 110

function binary(n) {
  //base case n <= 0;
  if (n <= 0) {
    return '';
  } else {
    return  binary(Math.floor(n / 2))+(n % 2);
  }
}

console.log(binary(8));
