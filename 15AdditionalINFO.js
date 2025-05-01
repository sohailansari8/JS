// default parameters
// default parameters is used to give a default value to a variable if it is not passed in the function if the parameter is passed then the parameters value will be used and if not the default value will be used 

let a = 5 ;
let b = 0 ;

let sum = (a , b = 5) => {
    return a + b ;
};
console.log(sum(5)); // this will print 10 
// console.log(sum(5, 10)); // this will print 15

// as you can see that if the empty value is passed then the default value will be used and if the value is passed then the passed value will be used

// default parameters
// default parameters is used to give a default value to a variable if it is not passed in the function 
// if the parameter is passed then the parameter's value will be used and if not, the default value will be used

let A = 5;
let B = 0;

let Sum = (A, B = 5) => {
    return a + b;
};
console.log(sum(5)); // this will print 10 
// console.log(sum(5, 10)); // this will print 15

// as you can see that if the empty value is passed then the default value will be used 
// and if the value is passed then the passed value will be used

//--------------------------------------------------------
// Spread Operator
// Spread is used to expand arrays or objects into individual elements

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // spreads arr1 into arr2
console.log(arr2); // Output: [1, 2, 3, 4, 5]

let numbers = [10, 20];
let add = (x, y) => x + y;
console.log(add(...numbers)); // Output: 30

//--------------------------------------------------------
// Rest Parameters
// Rest is used to collect all remaining arguments into a single array

let multiply = (...nums) => {
    return nums.reduce((acc, val) => acc * val, 1);
};
console.log(multiply(2, 3, 4)); // Output: 24

//--------------------------------------------------------
// Destructuring
// Destructuring is used to unpack values from arrays or objects into variables

// Array Destructuring
let colors = ['red', 'green', 'blue'];
let [firstColor, secondColor] = colors;
console.log(firstColor); // Output: red
console.log(secondColor); // Output: green

// Object Destructuring
let person = { name: 'Alice', age: 25 };
let { name, age } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 25
