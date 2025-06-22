/**
 * API stands for Application Programming Interface.
 * 
 * Definition:
 * An API is a set of rules and protocols that allows different software applications to communicate with each other.
 * It defines the methods and data formats that applications can use to request and exchange information.
 * 
 * In JavaScript, APIs can refer to:
 * 1. Browser APIs (like DOM, Fetch, etc.)
 * 2. Third-party APIs (like Twitter API, Google Maps API, etc.)
 * 3. Custom APIs (built for specific applications, often using HTTP/REST)
 */

// -----------------------------------------------------------------------------
// Example: Fetching data from a public API using fetch()
// -----------------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    // HTTP Status Handling
    if (!response.ok) {
      // If the response status is not in the range 200-299, throw an error
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Convert the response to JSON
  })
  .then(data => console.log("Data fetched:", data)) // Logs the fetched data
  .catch(error => console.log("Fetch error:", error)); // Handles any errors

// -----------------------------------------------------------------------------
// HTTP STATUS CODES (Common Examples)
// -----------------------------------------------------------------------------

/**
 * 100–199: Informational responses
 * 200–299: Success responses
 *    ✅ 200 OK: The request was successful
 *    ✅ 201 Created: The request succeeded and a new resource was created
 * 300–399: Redirection
 *    🔁 301 Moved Permanently
 *    🔁 302 Found
 * 400–499: Client-side errors
 *    ❌ 400 Bad Request: The server could not understand the request
 *    ❌ 401 Unauthorized: Authentication required
 *    ❌ 403 Forbidden: You do not have permission
 *    ❌ 404 Not Found: Resource not found
 * 500–599: Server-side errors
 *    ❌ 500 Internal Server Error
 *    ❌ 503 Service Unavailable
 */


// -----------------------------------------------------------------------------
// JSON FORMAT
// -----------------------------------------------------------------------------

// The data returned by an API is usually in JSON format.
// JSON stands for JavaScript Object Notation.
// It looks similar to JavaScript objects, but:
// - All keys and string values must use double quotes
// - It does NOT allow: undefined, functions, comments, or circular references


// -----------------------------------------------------------------------------
// Convert JavaScript Object to JSON (string format)
// -----------------------------------------------------------------------------

let user = { name: "Sohail", age: 21 };
let JRes = JSON.stringify(user); // Converts JS object to JSON string
console.log(JRes); // Output: '{"name":"Sohail","age":21}'


// -----------------------------------------------------------------------------
// Convert JSON string back to JavaScript Object
// -----------------------------------------------------------------------------

let user2 = { name: "Kabir", age: 22 };
let JRes2 = JSON.stringify(user2);   // Convert JS object to JSON string
let JSObj = JSON.parse(JRes2);       // Convert JSON string back to JS object
console.log(JSObj); // Output: { name: 'Kabir', age: 22 }
