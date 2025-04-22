// object literals are a way to create a object in JavaScripts that stores complex data 
// object literals are a key value pair that are seperated by the coma 
// this pairs are enclosed in curly breaces 
// objest can store all types of data like string and numbers even array or a another object

let student = {
    name: "sohail",
    age: 21,
    marks: 83.3,
    city: "mumbai",
};

// example create a tread of a twitter post that contain all of the information about the users 

let tweet = {
    username: "sohail",
    content: "this is the first post form sohail Ansari",
    likes: 10,
    reposts: 40,
    tags: ["#sohail", "#ansari", "#twitter"],
};

// you can also extract thje data form the object using the dot notation or the bracket notation 

// dot notation 
console.log(tweet.username);

// bracket notation 
console.log(tweet["content"]);

// dot operator is used more often than the bracket notation 
// but the bracket notation is used when the key of the object is not a valid identifier


// javaScript coverts the keys in the object into string that allows us to use the keys that are already predefined in javaScript but its not a good practices 
// so we should avoid using the keys that are already predefined in javaScript
// for example 

let example = {
    true: 55,
    false: 52,
    null: " fake null",
    undefined: " fake undefined",
    NaN: " fake NaN",
}

// here you can see that the keys are already predefined in the JS but you can use them as a key because JS sees them as a object 


// there are ways to add update and delete the keys in the objects

// to update 

student.age = 22;
// or
student["Previous age"] = 22;

// to add a key 

student.gender = "male";


// to delete a key we can use the delete operator

delete student.previousAge;


// objects can be stored inside another objects 
// for example 

const classInfo = {
    aman: {
        age: 22,
        marks: 90,
    },
    sohail: {
        age: 21,
        marks: 85,
    },
    shivam: {
        age: 23,
        marks: 95,
    },
}

// this is known as nested objects 


// you can also store mutiple objects inside a array \

const Student = [
    {
        name: "sohail",
        age: 21,
        marks: 83.3,
        city: "mumbai",
    },
    {
        name: "aman",
        age: 22,
        marks: 90,
        city: "delhi",
    },
    {
        name: "shivam",
        age: 23,
        marks: 95,
        city: "pune",
    },
]

// math objects are also objects in JS
// math object is a built in object in JS that allows us to perform mathematical operations
// it has a lot of properties and methods that are used to perform mathematical operations


Math.abs();        // Returns the absolute value of the input.
Math.acos();       // Returns the arccosine of the input.
Math.acosh();      // Returns the hyperbolic arccosine of the input.
Math.asin();       // Returns the arcsine of the input.
Math.asinh();      // Returns the hyperbolic arcsine of a number.
Math.atan();       // Returns the arctangent of the input.
Math.atan2();      // Returns the arctangent of the quotient of its arguments.
Math.atanh();      // Returns the hyperbolic arctangent of the input.
Math.cbrt();       // Returns the cube root of the input.
Math.ceil();       // Returns the smallest integer greater than or equal to the input.
Math.clz32();      // Returns the number of leading zero bits of the 32-bit integer input.
Math.cos();        // Returns the cosine of the input.
Math.cosh();       // Returns the hyperbolic cosine of the input.
Math.exp();        // Returns e^x, where x is the argument.
Math.expm1();      // Returns exp(x) - 1.
Math.floor();      // Returns the largest integer less than or equal to the input.
Math.f16round();   // Returns the nearest half precision float representation of the input.
Math.fround();     // Returns the nearest single precision float representation of the input.
Math.hypot();      // Returns the square root of the sum of squares of its arguments.
Math.imul();       // Returns the result of the 32-bit integer multiplication of the inputs.
Math.log();        // Returns the natural logarithm (base e) of the input.
Math.log10();      // Returns the base-10 logarithm of the input.
Math.log1p();      // Returns the natural logarithm of (1 + x).
Math.log2();       // Returns the base-2 logarithm of the input.
Math.max();        // Returns the largest of zero or more numbers.
Math.min();        // Returns the smallest of zero or more numbers.
Math.pow();        // Returns base x raised to the power y (x^y).
Math.random();     // Returns a pseudo-random number between 0 and 1.
Math.round();      // Returns the input rounded to the nearest integer.
Math.sign();       // Returns the sign of the input (-1, 0, or 1).
Math.sin();        // Returns the sine of the input.
Math.sinh();       // Returns the hyperbolic sine of the input.
Math.sqrt();       // Returns the positive square root of the input.
//Math.sumPrecise(); // Returns the sum of an iterable of numbers with high precision (experimental).
Math.tan();        // Returns the tangent of the input.
Math.tanh();       // Returns the hyperbolic tangent of the input.
Math.trunc();      // Returns the integer part of the input by removing any fractional digits.


// most used math object are the math.random() and the math.floor() math.PI and the math.sqrt()

