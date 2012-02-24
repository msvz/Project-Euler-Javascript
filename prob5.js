/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
function euclidGCD(a, b) { 
  if (a === 0) {
    return b;
  } else if (b === 0) {
    return a; 
  } else if (a > b) {
    return euclidGCD(b, a%b);
  } else if (b > a) {
    return euclidGCD(a, b%a);
  }
}

function LCM(a, b) {
 return (a * b) / euclidGCD(a, b);
}

var smallest = 1;
for(var i=2; i <= 20; i++) { 
 smallest = LCM(smallest, i); 
}

console.log(smallest);