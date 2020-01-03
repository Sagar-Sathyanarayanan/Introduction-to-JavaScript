# Introduction-to-JavaScript
Questions solved on Loops (While Loops, For Loops and Nested Loops)

## Question 1: Julia-James
```
Write a while loop that:

*Loop through the numbers 1 to 20
*If the number is divisible by 3, print "Julia"
*If the number is divisible by 5, print "James"
*If the number is divisible by 3 and 5, print "JuliaJames"
*If the number is not divisible by 3 or 5, print the number
```
## Answer 1: 
```
/* The question states that the starting number will be 1. Hence, equate variable (var) = 1 */

var x = 1; 

/* using the While loop. The condition here is that it will loop until the number 20. Here x <=20. Also use the if loop to statisfy the remaining of the factors invovled in the question. Use the modulo function to find the remainder of x/3, x/5 and x/3 & x/5 together. */

while (x <=20) {
    if (x%3 === 0 && x%5 === 0) {
        console.log("JuliaJames");
    }
    else if (x%5 === 0) {
        console.log("James");
    }
    else if (x%3 === 0){
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    x++; /* This is incremeting the number x by x + 1. This can also be written as x = x+ 1 */
    }  
```

## Question 2: 99 Bottles of Juice
```
Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!
```
## Answer 2:
```
var num = 99;

while (num >=0) {
       if  (num > 2) {
           sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
       }
        else if (num == 2){
            sub=num - 1;
           console.log(num +" bottles of juice on the wall! " + num+ " bottles of juice! Take one down, pass it around... "+ sub + " bottle of juice on the wall!");
        }
        else if (num === 1) {
            sub=num - 1;
           console.log(num +" bottle of juice on the wall! " + num+ " bottle of juice! Take one down, pass it around... "+ sub + " bottles of juice on the wall!");
        }
           num = num - 1;
    }
```

## Question 3: Countdown, Liftoff!
```
NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
```
var sec = 60; /* setting seconds to 60 as the questions T- counts starts at 60. If the T- count started from any other number, please enter the number in the question */

var message = "" 
while (sec >=0){
  if(sec ===50){
    message ="Orbiter transfers from ground to internal power";
 }else if(sec===31){
    message = "Ground launch sequencer is go for auto sequence start";
 }else if(sec===16){
    message = "Activate launch pad sound suppression system";
 }else if(sec===10){
    message = "Activate main engine hydrogen burnoff system";
 }else if(sec===6){
     message ="Main engine start";
 }else if(sec===0){
     message ="Solid rocket booster ignition and liftoff!";
 }else{
     message = "T-"+sec+ "seconds";
 }
 sec--; /* This is also represented by sec = sec -1. This is the formula to bring the count down from 60 secs (or any given sec) to 0. */
 
 console.log(message);
}

```

##Qus
