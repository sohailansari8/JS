// Comparison operators are used to compare two values and return a Boolean (true or false).
// They help in making decisions in programming (like in if-else conditions).

let a = 10;
let b = 5;
let c = "10";

console.log("a =", a, ", b =", b, ", c =", c);

// 1. Equal to (==)
// Checks if two values are equal, but does NOT check the data type.
console.log("a == c:", a == c); // Output: true (because "10" is converted to number)

// 2. Strict Equal to (===)
// Checks if two values AND their data types are equal.
console.log("a === c:", a === c); // Output: false (because one is a number, the other is a string)

// 3. Not Equal to (!=)
// Checks if two values are NOT equal, but does NOT check the data type.
console.log("a != b:", a != b); // Output: true

// 4. Strict Not Equal to (!==)
// Checks if two values AND their data types are NOT equal.
console.log("a !== c:", a !== c); // Output: true (because one is a number, the other is a string)

// 5. Greater than (>)
// Checks if the left value is greater than the right value.
console.log("a > b:", a > b); // Output: true

// 6. Less than (<)
// Checks if the left value is less than the right value.
console.log("a < b:", a < b); // Output: false

// 7. Greater than or Equal to (>=)
// Checks if the left value is greater than OR equal to the right value.
console.log("a >= 10:", a >= 10); // Output: true

// 8. Less than or Equal to (<=)
// Checks if the left value is less than OR equal to the right value.
console.log("b <= 5:", b <= 5); // Output: true

// Summary Table:
// | Operator  | Example   | Description |
// |-----------|----------|-------------|
// | ==        | a == b   | Equal value (loose comparison, type conversion happens) |
// | ===       | a === b  | Equal value AND type (strict comparison) |
// | !=        | a != b   | Not equal value |
// | !==       | a !== b  | Not equal value OR type |
// | >         | a > b    | Greater than |
// | <         | a < b    | Less than |
// | >=        | a >= b   | Greater than or equal to |
// | <=        | a <= b   | Less than or equal to |

// Comparison operators are commonly used in decision-making statements like if-else.
