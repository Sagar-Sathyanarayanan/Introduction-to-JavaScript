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

# Orbiter transfers from ground to internal power (T-50 seconds)
# Ground launch sequencer is go for auto sequence start (T-31 seconds)
# Activate launch pad sound suppression system (T-16 seconds)
# Activate main engine hydrogen burnoff system (T-10 seconds)
# Main engine start (T-6 seconds)
# Solid rocket booster ignition and liftoff! (T-0 seconds)
```
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

## Question 4: Changing the Loops

```
Rewrite the following while loop as a for loop:

var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
```
## Answer 4: 

```
for(var x = 9; x >= 1; x = x - 1){
    console.log("hello" + x); 
}

```
## Question 5: Fix the Error 1

```
Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!

for (x < 10; x++) /* You can also use the expression x++ instead of x = x+1 */ {
  console.log(x);
}
```

## Answer 5: 

```

for(var x = 5; x < 10; x++) /* This is the same as x = x + 1 */ {
    console.log(x);
}
```
## Question 6: Fix the error 2
```
The for loop below has an error. Fix it!

for (var k = 0 k < 200 k++) {
  console.log(k);
}
```
## Answer 6: 

```
for(var k = 0; k < 200; k++){
    console.log(k);

}
```

## Question 7: Factorials! 
```
Write a for (note: not a function) loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 63!=3∗2∗1=6
4! = 4 * 3 * 2 * 1 = 244!=4∗3∗2∗1=24
5! = 5 * 4 * 3 * 2 * 1 = 1205!=5∗4∗3∗2∗1=120

Save your final answer in a variable called solution and print it to the console.
```
## Answer 7: 

```

var solution = 1; 
for(var x = 1; x<=12; x++){
    solution = solution * x;
}
console.log(solution);
```
## Question 8: 
```
Directions:
```
![](red%20Seats.PNG)
Creative Commons - Jeffrey Smith - "State Theater"

```
Theater seats often display a row and seat number to help theatergoers find their seats. If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, write a nested for loop to print out all of the different seat combinations in the theater.

Example output for row-seat information: output each row and seat number on a separate line

0-0
0-1
0-2
...
25-97
25-98
25-99
```
## Answer 8: 

```
for(var x =0;x<26;x++){
    for(var y=0;y<100;y++){
        
        console.log(x+ ","+ y);
    }
}
```
## Question 9: Julia-James done using for loop. 

```
Write a while loop that:

*Loop through the numbers 1 to 20
*If the number is divisible by 3, print "Julia"
*If the number is divisible by 5, print "James"
*If the number is divisible by 3 and 5, print "JuliaJames"
*If the number is not divisible by 3 or 5, print the number
```
```
for (var x = 1; x <=20; x++) {
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
    
    }  
```
