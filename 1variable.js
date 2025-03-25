// JavaScript is case-sensitive, meaning uppercase and lowercase letters are treated differently.
let fullname = "sohail ansari";
console.log(fullname); // Prints the value of the variable 'fullname'

// If we put a string in quotes inside console.log, it will print that exact string.
// For example:
console.log("fullname"); // Prints "fullname" as a string
console.log(fullname);    // Prints the value of the variable 'fullname'

let age = 20;
console.log(age); // Prints the value of the variable 'age'

// You can concatenate different variables like this:
console.log(fullname + age); // This will print 'sohail ansari20'

// Always use meaningful variable names for better readability.
// For instance, if you want to store the radius, name the variable 'radius'.

// Boolean values

// A Boolean variable can only be true or false, nothing else.
let EPwatched = true;
console.log(EPwatched); // Prints true

// Null and Undefined

// Some variables can be either null or undefined:
let n = null; // 'null' indicates an intentional absence of value.
let y;        // 'undefined' means the variable has been declared but not yet assigned a value.
console.log(n); // Prints null
console.log(y); // Prints undefined

// 'null' means there's an empty space reserved in memory for that variable,
// while 'undefined' means the variable hasn't been assigned any value yet.

// Variable Declaration

// Variables can be defined by simply assigning values, but we use different keywords
// like let, const, and var for better control and scoping.

let bro = "diptest";    // Declare a variable using 'let'
let bro_age = 21;       // Declare another variable
bro_age = 22;           // You can update the value of a variable
let bro_status = "double"; // Declare another variable
console.log(bro);      // Prints the value of 'bro'
console.log(bro_age);  // Prints the updated value of 'bro_age'
console.log(bro_status); // Prints the value of 'bro_status'

// Here, variables are declared using the 'let' keyword.
// Using 'let' provides better scope management.
// You cannot redeclare a variable declared with 'let' in the same scope. For example, 
// if you declare 'bro', you cannot create another variable with the same name 'bro' 
// because 'let' prevents variable redefinition in the same scope.

// Using var

// Before ES6 (2015), 'var' was used for variable declarations.
// However, 'var' allows redeclaring the same variable, which can lead to confusion and memory issues.
var givenname = "akash";
var givenname = "pranav"; // Re-defining the variable
var givenname = "beta";    // Re-defining the variable again
console.log(givenname); // Prints 'beta', the last assigned value

// As you can see, the variable can be redefined multiple times without any error.

// Using const

// 'const' declares a constant variable, meaning its value cannot be changed once assigned.
const PI = 3.14;
console.log(PI);

// Here you can see that the constant value of PI is 3.14, and it will remain constant throughout the code.


// var is the global scope variable and the let and the const is the block scope variable means that the let and he const can be used between thw code block 