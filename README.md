# Introduction-to-JavaScript
Questions solved on Loops (While Loops, For Loops and Nested Loops)

## Question 1: 
```
*Write a while loop that:

*Loop through the numbers 1 to 20
*If the number is divisible by 3, print "Julia"
*If the number is divisible by 5, print "James"
*If the number is divisible by 3 and 5, print "JuliaJames"
*If the number is not divisible by 3 or 5, print the number
```
## Answer: 
```
/* The question states that the starting number will be 1. Hence, equate variable (var) = 1 */

var x = 1; 

/* using the While loop. The condition here is that it will loop until the number 20. Here x <=20. Also use the if loop to statisfy the remaining of the factors invovled in the question. Use the modulo function to find the remainder of x/3, x/5 and x/3 & x/5 together. */

while(x <=20){
  if(x %3 ==0){
    console.log("Julia")
  }else if(x % 5 == 0){
    console.log("James");
  }else if(x % 3 ==0 && x % 5 == 0){
    console.log("JuliaJames");
  }else{
    console.log(x);
  }
    x++ /* This is incremeting the number x by x + 1. This can also be written as x = x+ 1 */
 
 }   
```
