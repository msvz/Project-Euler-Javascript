/*
Source : http://projecteuler.net/index.php?section=problems 

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

// Solution 1 : 

var sum=0;
for(var i=0; i < 1000 ; i++){
    if (i%3===0 || i%5===0){
	sum += i;
    }
}
console.log(sum);

// Solution 2 : Sum divisible by 3 + Sum divisible by 5 - Sum divisble by LCM of (3,5)

/*
3 (1+ 2+ 3+ ...+333) =  (3 * 333*334)/2
*/
function sumDivisibleBy3(n){
	var lastNum = Math.floor(n/3);        
	return (3 * lastNum * (lastNum +1) )/ 2;
}

function sumDivisibleBy5(n){
	var lastNum = Math.floor(n/5);
	return (5 * lastNum * (lastNum + 1) )/ 2;
}

function euclidGCD(a, b){ 
    if( a === 0 ) {
	return b;
    } else if ( b === 0 ) {
	return a; 
    } else if ( a > b ) {
	return euclidGCD( b, a%b );
    } else if ( b > a ) {
	return euclidGCD( a, b%a );
    }
}

function sumDivisibleByLCM( a , b , n ){
	var lcm = (a * b) / euclidGCD( a, b) ; // LCM(a, b) * GCD(a, b) = a * b;
	var lastNum = Math.floor(n/lcm);        
	return (lcm * lastNum * (lastNum +1) )/ 2;	
}

console.log (sumDivisibleBy3(999) + sumDivisibleBy5(999) - sumDivisibleByLCM(3,5,999));
