/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
Find the largest palindrome made from the product of two 3-digit numbers.

*/

function isPalindrome(str) {
 var len = str.length - 1;
 for (var i = 0; i < len; i++) {
  if(str[i] === str[len - i]) continue;
  else return false; 
 } 
 return true;
}

var palindrome, product; 
for (i = 999; i >= 100; i--) {
 for (j = 999; j >= 100; j--) { 
  product = i * j;
  if (isPalindrome(product.toString())) {   
   palindrome = palindrome > product ? palindrome : product;
  }
 }
}

console.log(palindrome);