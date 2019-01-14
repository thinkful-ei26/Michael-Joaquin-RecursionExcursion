'use strict';
function countSheep(x) {
  if (x === 0) {
    return;
  }
  console.log(`${x} - Another sheep over the fence`);
  return countSheep(x - 1);
}

countSheep(3);

// Iterative solution
// function countSheepIterative(x) {
//   for (let i = 0; i <= x; i++) {
//     console.log(i);
//   }
// }

// console.log(countSheepIterative(5));
