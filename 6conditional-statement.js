// Conditional statements are used to execute different code blocks based on conditions.

// 1. if Statement
// It executes a block of code if the given condition is true.

let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. if-else Statement
// It executes one block if the condition is true, otherwise, it executes another block.

let marks = 40;
if (marks >= 50) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}

// 3. if-else if-else Statement
// It checks multiple conditions one by one.

let num = 0;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// 4. Ternary Operator (? :)
// It is a shorthand for if-else and returns a value based on a condition.

let speed = 80;
let result = speed > 60 ? "You are overspeeding!" : "You are driving safely.";
console.log(result);

// 5. switch Statement
// It is used when we have multiple possible values for a single variable.

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number.");
}

// Summary of Conditional Statements:
// | Statement         | Description |
// |------------------|-------------|
// | if              | Executes a block if condition is true |
// | if-else        | Executes one block if condition is true, otherwise another block |
// | if-else if-else | Checks multiple conditions one by one |
// | Ternary Operator | Shorthand for if-else (condition ? trueValue : falseValue) |
// | switch         | Used when multiple cases exist for a single variable |

// Conditional statements help in decision-making based on different conditions.
