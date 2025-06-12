// -------------------------------
// EVENTS AND EVENT LISTENERS IN DOM
// -------------------------------

// Why do we use Events?
// - Events allow us to add interactivity to our website.
// - We can respond to actions like clicks, mouse movement, key presses, etc.

// There are two ways to handle events:
// 1. Directly assign events like onclick, onmouseenter, etc. (Limited to one handler)
// 2. Using addEventListener() (Preferred and allows multiple handlers)

// -----------------------------------
// 1. Assigning Events Directly
// -----------------------------------

let btns = document.querySelectorAll("button");

// Example: onclick event
btns[0].onclick = function () {
    alert("Button was clicked");
    console.log("Button was clicked");
}

// Example: onmouseenter event
btns[1].onmouseenter = function () {
    btns[1].innerText = "Mouse Entered";
}

// ⚠️ Limitation:
// Using direct assignment, only one event function can be active per event type.

// -----------------------------------
// 2. Using addEventListener() - Better Way
// -----------------------------------

// You can add multiple event listeners for the same element and event type.

function sayHello() {
    alert("Hello World");
    console.log("Hello World");
}

function sayName() {
    alert("My name is Sohail Ansari");
    console.log("My name is Sohail Ansari");
}

// Add multiple click event listeners to the same button
btns[2].addEventListener("click", sayHello);
btns[2].addEventListener("click", sayName);

// Add mouse events
btns[3].addEventListener("mouseenter", function () {
    btns[3].innerText = "Mouse Entered";
});

btns[3].addEventListener("mouseout", function () {
    btns[3].innerText = "Mouse Out";
});

// Change background color on click
btns[4].addEventListener("click", function () {
    btns[4].style.backgroundColor = "green";
});

// -----------------------------------
// 3. Handling Input Events
// -----------------------------------

let inp = document.querySelectorAll("input");

// keypress event (when a key is pressed while input is focused)
inp[0].addEventListener("keypress", function () {
    let val = inp[0].value;
    console.log("Key Pressed: " + val);
});

// Updating an <h4> with live input
inp[0].addEventListener("keypress", function () {
    let heading = document.querySelector("h4");
    heading.innerText = inp[0].value;
});
