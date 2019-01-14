'use strict';
//creating a function that displays the nth number of the fibonacci sequence

// base case for 1 and 0
// base case would be that I have reached n
// recursive case would be that I add the two previous numbers

function fibseq(x) {
  if (x === 0) {
    return 0;
  } else if (x === 1) {
    return 1;
  } else {
    return fibseq(x - 1) + fibseq(x - 2);
  }
}

// console.log(fibseq(6));
// Iterative version
function fibseqIterative(x) {

  for (let i = 1; i <= x; i++) {
      return x *= (x - i)
//     if (x === 0) return 0;
//     else if (x === 1) {
//       return 1;
//     } else {
//       return;
//     }
//   }
// console.log(x)
}
console.log(fibseqIterative(3))
//for n = 3, return n*(n-1)*(n-2) = 3*2*1 = 6, so 
// n = 3, 3*(3-1)*(3-2)
