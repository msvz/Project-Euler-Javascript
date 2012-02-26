/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/

function range(start, end) {
 var foo = [];
 for (var i = start; i <= end; i++) foo.push(i);
 return foo; 
}

var max_limit = 1000000;
var numbers = range(2, max_limit);
var product = 0, value_changed = true;


for(var i = 2; i < max_limit + 2 && value_changed; i++) {
 if (numbers[i - 2] === 0) continue; 
 value_changed = false;
 product = 0;
 for(var j = 2; product < max_limit; j++) {  
  product = numbers[i - 2] * j;   
  if (product < max_limit + 2 && numbers[product - 2] !== 0) {
    numbers[product - 2] = 0; 
    value_changed = true;
  }
 }
}

numbers = numbers.filter(function(number) {
    return number !== 0;
});

console.log(numbers[10000]);