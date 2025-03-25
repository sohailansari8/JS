/* 
Operators are used to perform operations on data. 
These operations can include addition, subtraction, multiplication, and more.
First, let's explore arithmetic operators.
*/

let a = 5;
let b = 2;

console.log("a =", a, " & b =", b);
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("a / b =", a / b); // Division

/*
Arithmetic operators allow us to perform basic mathematical operations like addition, subtraction, multiplication, and division.
These operators are widely used in calculations.
*/

/* 
Now let's look at some additional arithmetic operators in JavaScript.
*/

// Modulus operator (%) returns the remainder of a division
console.log("a % b =", a % b); // Prints the remainder when a is divided by b (5 % 2 = 1)

// Exponentiation operator (**) raises the base to the power of the exponent
// For example, a ** b = 5 raised to the power of 2 (5^2)
console.log("a ** b =", a ** b); // Prints 25

/*
In addition to these basic operators, JavaScript supports unary operators for incrementing and decrementing values.
These operators are known as:
1. Increment (++) – Increases a variable's value by 1
2. Decrement (--) – Decreases a variable's value by 1
*/

// Post-increment (a++): The value of 'a' is used first, then it's incremented.
console.log("Post-increment (a++):", a++); // Prints 5, then increments 'a' to 6

// Pre-increment (++a): The value of 'a' is incremented first, then used.
console.log("Pre-increment (++a):", ++a); // Increments 'a' to 7, then prints 7

// Post-decrement (a--): The value of 'a' is used first, then it's decremented.
console.log("Post-decrement (a--):", a--); // Prints 7, then decrements 'a' to 6

// Pre-decrement (--a): The value of 'a' is decremented first, then used.
console.log("Pre-decrement (--a):", --a); // Decrements 'a' to 5, then prints 5

/*
Summary of pre- and post-increment/decrement:
- Post-increment (a++): Uses the current value, then increments it.
- Pre-increment (++a): Increments the value first, then uses it.
- Post-decrement (a--): Uses the current value, then decrements it.
- Pre-decrement (--a): Decrements the value first, then uses it.

This difference is important when the order of operations matters in your code.
*/
