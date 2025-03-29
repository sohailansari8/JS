// Alerts and Prompts in JavaScript

// 1. alert() Method
// The alert() method displays a popup message to the user.
// It is mainly used to show important messages or warnings.

alert("Welcome to our website!");

// 2. prompt() Method
// The prompt() method asks the user for input and returns the entered value.

let userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome!");

// 3. Using prompt() with a default value
// If the user does not enter anything, the default value is used.

let age = prompt("Enter your age:", "18");
alert("Your age is " + age);

// 4. Handling prompt() when the user clicks "Cancel"
// If the user clicks "Cancel", prompt() returns null.

let favoriteColor = prompt("What is your favorite color?");
if (favoriteColor === null) {
    alert("You didn't enter anything!");
} else {
    alert("Your favorite color is " + favoriteColor);
}

// 5. confirm() Method
// The confirm() method asks for user confirmation (OK or Cancel).
// It returns true if "OK" is clicked, and false if "Cancel" is clicked.

let isAdult = confirm("Are you 18 or older?");
if (isAdult) {
    alert("You are an adult.");
} else {
    alert("You are not an adult.");
}

/*
Summary of Alert, Prompt, and Confirm:
| Method     | Description |
|------------|-------------|
| alert()    | Displays a popup message to the user. |
| prompt()   | Asks the user for input and returns the value. |
| confirm()  | Asks for confirmation (OK/Cancel) and returns true or false. |

These methods are useful for user interaction in JavaScript.
*/
