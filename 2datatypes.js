// There are multiple types of data in the programming world. Some of them include numbers, strings, and Boolean values.
// To store and manage this data properly, we use different data types. Let's learn about data types.

// There are mainly two types of data types in JavaScript: primitive and non-primitive.
// Let's first learn about the primitive data types. There are 7 different primitive data types. Let's go through them one by one.

// The first one is Number.
// We've seen number data types before. If a variable holds a numeric value, its data type will be 'number'.
// For example, age:
let age = 55;
console.log(age); // Prints 55
console.log(typeof age); // Prints 'number'

// Here, you can see that the output is 'number', meaning the variable 'age' stores a value of the number data type.

// Next is the String data type.
// Strings hold sequences of characters (text).
// For example, fullname:
let fullname = "Ichigo Kurosaki";
console.log(fullname); // Prints "Ichigo Kurosaki"
console.log(typeof fullname); // Prints 'string'

// Here, you can see that the variable 'fullname' holds a string value.

// Boolean values
// Boolean values can either be true or false.
// For example, isfollow:
let isfollow = true;
console.log(isfollow); // Prints true
console.log(typeof isfollow); // Prints 'boolean'

// Undefined
// 'undefined' means the value of the variable has not been defined yet.
// For example:
let x;
console.log(x); // Prints undefined
console.log(typeof x); // Prints 'undefined'

// Null
// 'null' may seem similar to 'undefined', but it's different. 
// 'null' means the variable intentionally has no value (empty space is reserved).
let y = null;
console.log(y); // Prints null
console.log(typeof y); // Prints 'object'

// Here, you can see that the type of 'y' is printed as 'object'.
// Even though 'null' is classified as an object in JavaScript, it is still considered a primitive data type.
// 'null' simply means the absence of an object in memory.

// Now we'll move to the last two primitive data types: bigint and symbol. 
// These are rarely used in JavaScript.

// BigInt
// BigInt is used to store large integers that are beyond the safe range of the 'number' type.
// In JavaScript, the largest safe integer is 2^53 - 1. If you need to handle numbers larger than that, BigInt is used.
let a = BigInt("1234567890123456789012345678901234567890");
console.log(a); // Prints a large BigInt value
console.log(typeof a); // Prints 'bigint'

// You can perform arithmetic operations with BigInt, but note that BigInt cannot be mixed with regular numbers.
// BigInt values are denoted by an 'n' at the end, like 123n, to differentiate them from normal numbers.

// Symbol
// Symbol is a unique and immutable data type used to create unique identifiers.
// Every Symbol is guaranteed to be unique, even if two symbols have the same description.
let b = Symbol("uniqueIdentifier");
console.log(b); // Prints Symbol(uniqueIdentifier)
console.log(typeof b); // Prints 'symbol'

// Symbols are often used as unique keys for object properties to avoid property name collisions.
// Even if you create multiple Symbols with the same description, they are distinct from each other.
let c = Symbol("uniqueIdentifier");
console.log(b === c); // Prints false, because each Symbol is unique, even if they share the same description.


// Now we will move on to non-primitive data types. In JavaScript, the primary non-primitive data type is the Object.
// Within Objects, we also have Arrays and Functions, which we will learn about later. Let's first learn about Objects.

// An Object is a collection of different data types, such as numbers, strings, or booleans, all grouped together.
// For example, let's create a student object:
const student = {
    name: "Diptesh Padwal",
    age: 22,
    cgpa: 9.5,
    isPass: true
};

// In an Object, we use key-value pairs. Instead of the equals sign (=), we use a colon (:) to assign values,
// and separate different key-value pairs with a comma (,).
// In the example above, we have an object named 'student' which stores multiple values of different data types in one place.
// 'const' is commonly used for creating objects because the object itself doesn't need to be redefined.

console.log(student); // Prints the entire student object
console.log(typeof student); // Prints 'object'

// You can also access specific values from an object individually.
// There are two ways to do that:

// 1. Using square brackets:
console.log(student["name"]); // Prints "Diptesh Padwal"

// 2. Using dot notation (no brackets or quotes):
console.log(student.age); // Prints 22

// If you want to change any value in the object, you can do that as well.
// Let's increase the student's CGPA by 0.2:
student["cgpa"] = student["cgpa"] + 0.1;
console.log(student.cgpa); // Prints 9.7

// The dot notation can also be used for updating object properties:
student.cgpa = student.cgpa + 0.1;
console.log(student.cgpa); // Prints 9.8
