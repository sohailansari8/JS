// ---------------------------------------------
// CALLBACKS IN JAVASCRIPT
// ---------------------------------------------

// A callback is a function passed as an argument to another function.
// It is called ("back") later when the task is complete.

// Example of a basic callback
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback("Fetched Data");
    }, 2000);
}

function processData(data) {
    console.log("Processing:", data);
}

// Call fetchData and pass processData as callback
fetchData(processData);

// ---------------------------------------------
// CALLBACK HELL
// ---------------------------------------------

// When callbacks are nested inside each other, it leads to unreadable and hard-to-maintain code.
// This is known as "callback hell".

setTimeout(() => {
    console.log("Task 1");
    setTimeout(() => {
        console.log("Task 2");
        setTimeout(() => {
            console.log("Task 3");
        }, 1000);
    }, 1000);
}, 1000);

// ❌ The above code becomes difficult to manage as tasks grow

// ------------------------------------------------------
// PROMISES: A Better Way to Handle Async Operations
// ------------------------------------------------------

// What is a Promise?
// - A Promise represents the result of an asynchronous operation.
// - It can be in one of three states: Pending, Fulfilled, or Rejected.

let promise = new Promise((resolve, reject) => {
    console.log("I am a promise");
    resolve("Success!"); // you can also reject("Something went wrong");
});

// Using .then() to handle resolved promise
promise
    .then((res) => {
        console.log("Promise resolved with:", res);
    })
    .catch((err) => {
        console.log("Promise rejected with:", err);
    });

// Example: simulate async task with setTimeout
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data is fetched");
            resolve("Data resolved");
        }, 2000);
    });
}

getData()
    .then((res) => {
        console.log("Resolved:", res);
    })
    .catch((err) => {
        console.log("Rejected:", err);
    });

// Chaining Promises: to avoid nested callbacks
function getProcessedData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Processing data...");
            resolve(`${data} processed`);
        }, 2000);
    });
}

getData()
    .then((data) => {
        return getProcessedData(data);
    })
    .then((finalResult) => {
        console.log("Final Result:", finalResult);
    })
    .catch((err) => {
        console.log("Error caught:", err);
    });


// ---------------------------------------------
// Summary of Concepts Covered:
// ---------------------------------------------
// ✔ Callback functions
// ✔ Callback hell and its drawbacks
// ✔ What is a Promise?
// ✔ Creating Promises
// ✔ Handling with .then() and .catch()
// ✔ Promise chaining for clean async flow
