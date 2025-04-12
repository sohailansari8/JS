// Loops are used in JavaScript to perform repeated tasks based on a condition. 
// Conditions typically return true or false, and the loop will continue to execute as long as the condition evaluates to true.

// About the 'for' Loop in JavaScript:
// The 'for' loop is one of the most commonly used loops in JavaScript. 
// It is used when the number of iterations is known beforehand. 
// It consists of three parts: initialization, condition, and increment/decrement.

// Syntax of 'for' Loop:
// for (initialization; condition; increment/decrement) {
//     // Code to be executed in each iteration
// }

// Example of a 'for' Loop:
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}

// write a js code to find the odd numbers between 1 to 15 
for(let i = 0 ; i<=15 ; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

// write a js code to find the even numbers between 1 to 10 
for(let i = 0 ; i<=10 ; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

// wrtie a program to print a multiplication table of 5 
for(let i = 0 ; i<=10 ; i++){
    let table = 5 ;
    console.log("5 X", i , "=" , table*i)
}

// nested for loops 
// nested means writing a element inside a element so we can also nest for loops 
for(let i = 0 ; i <= 3 ; i++){
    console.log(`The outer repetitions: ${i}`);
    for(let j = 0 ; j <= 3 ; j++){
        console.log(j);
    }
}

// while loop 
// while loop will run until the given condition is true 
console.log(`lets see the while loop`);
let i =1 ;
while(i<=5 ){
    console.log(i)
    i++
}

// break statement 
// break statement is used to break out from a loop
// It is used to terminate the loop prematurely when a certain condition is met.
console.log("Example of break statement:");
for (let i = 1; i <= 10; i++) {
    if (i === 6) {
        console.log("Breaking the loop at i =", i);
        break; // Exit the loop when i equals 6
    }
    console.log(i);
}

// for of loop 
// it is a recently added loop type so we need to check the compatibility with the browser 
// example: internet explorer browser will not support the for of loop 
// but in maximum cases it will work 
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// the for...of loop is used to directly get values from an iterable like an array
