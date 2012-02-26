/* The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

function range(start, end) {
 var foo = [];
 for (var i = start; i <= end; i++) foo.push(i);
 return foo; 
}

function sumOfSquares(N) {
  var foo = range(1, N);
  var sum = foo.reduce(function(prev, curr) {
   return prev + curr * curr;
  }, 0);
  return sum;
}

function squareOfSum(N) {
  var foo = range(1, N);
  var sum = foo.reduce(function(prev, curr) {
   return prev + curr;
  }, 0);
  return sum*sum;
}