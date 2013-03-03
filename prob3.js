/*
Problem 3
The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?
*/

function sqrt_root(N) {
  var oldguess = -1, guess = 1;
  while(Math.abs(guess - oldguess) > 1) { // Take avg of N and N/R till both converge
	oldguess = guess;
	guess = (guess + N/guess) / 2;
  }
  return guess;
}

function isPrime(N) {
  var root = Math.ceil(sqrt_root(N));
  for(var i = 2; i < root; i++) {
    if (N%i === 0) return false;
  }
  return true;
}

function findLargestPrime(N) {

 if(isPrime(N)) {
   return N; // return if N is prime.
 }
 var root = Math.ceil(sqrt_root(N)), // Log N
     factors = [],
     largestPrimeFactor = 1, factor;

 if (N%2 === 0) factors.push(2);

 // Store all factors
 for(var i = 3; i < root; i = i+2) {
   if(N % i === 0) factors.push(i); // Log N
 }

 //
 factors.forEach(function(number) {
   if(isPrime(number)) {
     largestPrimeFactor = largestPrimeFactor > number? largestPrimeFactor : number;
   }
  });
 return largestPrimeFactor;
}

console.log(findLargestPrime(13195));
console.log(findLargestPrime(600851475143));