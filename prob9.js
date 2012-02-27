/*
A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

Better method: http://www.allmathwords.org/en/p/pythagoreantriple.html

*/

var i = 1, j = 2, k = 1000, found = false;

inner: while (!found) {
    for(;;i++) {
     for(j=i+1;k > j;j++) {
       k = 1000 - i - j; 
       if (k < j) break inner;
       if (i*i + j*j === k*k) {
         value = i + " " + j + " " + k;
         found = true;
         break inner;
       }
     }
    }
}

console.log(value);