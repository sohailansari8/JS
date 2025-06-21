// --------------------------------------------------------------------
// ASYNC / AWAIT IN JAVASCRIPT
// --------------------------------------------------------------------

/**
 * Asynchronously generates a random number.
 *
 * This async function simulates an asynchronous operation.
 * Even though there is no explicit Promise inside, it still returns a Promise automatically.
 *
 * @returns {Promise<number>} A Promise that resolves with a random number between 1 and 10.
 */
async function num() {
    let num = Math.floor(Math.random() * 10) + 1;
    console.log("I am an async function and I am running.");
    return num; // returns a Promise that resolves with this number
}

// Handling the returned Promise from async function using .then() and .catch()
num()
    .then((res) => {
        console.log("Resolved:", res);
    })
    .catch((err) => {
        console.log("Rejected:", err);
    });

// You can also log the returned Promise object directly
console.log(num()); // Outputs: Promise {<pending>} — because async functions always return a Promise


// --------------------------------------------------------------------
// AWAIT IN ASYNC FUNCTIONS
// --------------------------------------------------------------------

// The `await` keyword is used to pause the execution inside an async function
// until the awaited Promise is resolved or rejected.

async function getData() {
    console.log("I am an async function and I am running.");

    // This is just a setTimeout, not a Promise. Await won't wait for this.
    // So this will not behave asynchronously as expected.
    let res = setTimeout(() => {
        console.log("Data is fetched");
    }, 2000);

    // 'await' here does nothing because setTimeout doesn't return a Promise
    let response = await res;
}
getData()
    .then((res) => {
        console.log("Resolved:", res); // will log undefined
    })
    .catch((err) => {
        console.log("Rejected:", err);
    });


// --------------------------------------------------------------------
// HANDLING REJECTIONS WITH TRY...CATCH INSIDE ASYNC FUNCTIONS
// --------------------------------------------------------------------

// If a Promise inside an async function might reject,
// it's better to wrap it with try...catch to handle the error gracefully.

async function doSomething() {
    try {
        const x = await mightReject(); // assume this returns a Promise that might reject
        console.log('Result:', x);
    } catch (error) {
        console.error('Error:', error); // handles rejection here instead of using .catch()
    }
}

// Note: You need to define or mock mightReject() for this to work
// Example:
function mightReject() {
    return new Promise((resolve, reject) => {
        let success = Math.random() > 0.5;
        setTimeout(() => {
            success ? resolve("Success value") : reject("Failure reason");
        }, 1000);
    });
}
doSomething();


// --------------------------------------------------------------------
// SUMMARY:
// --------------------------------------------------------------------
// ✔ `async` functions always return a Promise
// ✔ `await` pauses the execution until the Promise resolves/rejects
// ✔ Use `.then()` / `.catch()` or `try...catch` to handle results
// ✔ Only use `await` inside async functions
// ✔ Don't use `await` on functions like setTimeout — wrap them in Promises
