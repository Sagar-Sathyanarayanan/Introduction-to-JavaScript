/* The question states that the starting number will be 1. Hence, equate variable (var) = 1 */


/* using the While loop. The condition here is that it will loop until the number 20. Here x <=20. Also use the if loop to statisfy the remaining of the factors invovled in the question. Use the modulo function to find the remainder of x/3, x/5 and x/3 & x/5 together. */

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