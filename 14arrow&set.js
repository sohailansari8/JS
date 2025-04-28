// ARROW FUNCTION 
// the arrow function is way to write a function in a shorter way that helps to write a function in single line 
// the syntax of the arrow function is const functionName = (parameters) => { // function body }

const sum = (num1, num2) => {
    console.log(num1 + num2);
};
sum(10, 20);


// implicit return
// the implicit return is used to return a value from a function without using the return keyword 
// the syntax of the implicit return is const functionName = (parameters) => value
// here it does not required to use the curly braces and the return keyword but it is highly recommended to use the curly braces to improve the redability of the code 

const cube = (num) => num * num * num;
console.log(cube(3)); // this will print the cube of the numbers 

// SET TIMEOUT FUNCTION
// the setTImeout is the function that is used to execute a function after a specified amount of time 
// to do so the function takes two parameters the first one is the function that you want to execute

 setTimeout(() => {
    console.log(" hello i appear after 5seconds ");
} ,5000);
// this will print the message after 5 seconds 

let id = setInterval(() => {
    console.log(" hello i will apppear after  every 2 second ")
} , 2000); 

console.log(id);

clearInterval(2); // this will clear the interval and stop the function from executing again
// the clearInterval function takes the id of the interval as a parameter and stops the function from executing again