// my try 
// let value = Math.floor(Math.random() * 10) + 1;

// let guess = prompt(" Guess the number between 1 to 10 ");

// if (value != guess) {
//     guess = prompt(" your guess is wrong please try again ");
// } if (value == guess) {
//     alert(" your guess is right ");
// } if (guess == Quit || guess == null) {
//     alert(" you have exited the game");
// };


// internet help 
let value = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Guess the number between 1 to 10");

while (guess !== null && guess.toLowerCase() !== "quit") {
    if (parseInt(guess) === value) {
        alert("Your guess is right!");
        break;
    } else {
        guess = prompt("Your guess is wrong, please try again or type 'quit' to exit:");
    }
}

if (guess === null || guess.toLowerCase() === "quit") {
    alert("You have exited the game");
}
