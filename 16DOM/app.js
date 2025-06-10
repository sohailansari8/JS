// DOM = Document Object Model
// It allows JavaScript to interact with HTML elements and modify them dynamically.

// -------------------------------------
// WHAT IS DOM?
// -------------------------------------
// - The DOM represents a web page as a tree of nodes (HTML elements).
// - Using JavaScript, we can access and change elements, styles, text, etc.
// - It makes web pages dynamic and interactive.

// -------------------------------------
// SELECTING ELEMENTS
// -------------------------------------

// 1. getElementById() – selects one element by ID
let imgObj = document.getElementById("mainImg");
console.dir(imgObj); // log element's object
// Example: change innerHTML of a paragraph by ID
document.getElementById("description").innerHTML = "This is the new description using getElementById() method";

// 2. getElementsByClassName() – selects all elements by class name
let smallImg = document.getElementsByClassName("oldImg");
console.dir(smallImg); // HTMLCollection (array-like)

// Change the src of the first image
smallImg[0].src = "https://picsum.photos/200/300?random=1";

// 3. getElementsByTagName() – selects all elements by tag name
let heading = document.getElementsByTagName("h1");
console.dir(heading); // HTMLCollection of all <h1> elements

// Change the content of the first <h1>
heading[0].innerHTML = "Peter Parker";

// 4. querySelector() – selects the first element matching a CSS selector
let mainImage = document.querySelector("#mainImg"); // by ID
let button = document.querySelector(".btn"); // by class
let paragraph = document.querySelector("p"); // by tag

// 5. querySelectorAll() – selects all elements matching a CSS selector
let allParagraphs = document.querySelectorAll("p");
console.dir(allParagraphs); // NodeList of <p> elements

// Other selection methods:
document.getElementsByClassName("btn");
document.getElementsByTagName("div");

// -------------------------------------
// SETTING CONTENT
// -------------------------------------

let para = document.querySelector("p");

// View or change content
console.log(para.innerHTML);    // includes tags
console.log(para.innerText);    // only visible text
console.log(para.textContent);  // all text (including hidden)

// -------------------------------------
// GET & SET ATTRIBUTES
// -------------------------------------

let img = document.querySelector("img");
console.log(img.getAttribute("src")); // get src value
img.setAttribute("src", "assets/creation_3.jpeg"); // change src

// -------------------------------------
// STYLING ELEMENTS
// -------------------------------------

heading[0].style.color = "red"; // text color
heading[0].style.backgroundColor = "blue"; // background color

// Example: change all anchor (<a>) tags inside a .box to black
let links = document.querySelectorAll(".box a");
for (let i = 0; i < links.length; i++) {
    links[i].style.color = "black";
}

// -------------------------------------
// CLASSLIST – ADD / REMOVE / CHECK CLASSES
// -------------------------------------

let about = document.querySelectorAll("h2");

// Add a class
about[0].classList.add("reverse");

// Remove a class
about[1].classList.remove("reverse");

// Check if class exists
console.log(about[0].classList.contains("reverse")); // true or false

// Toggle a class (add if not present, remove if present)
about[1].classList.toggle("reverse");
// Example: toggle class on click


// -------------------------------
// CREATING AND INSERTING ELEMENTS IN DOM
// -------------------------------

// Why we use this?
// - Sometimes, we want to create new HTML elements using JavaScript (like adding a new paragraph, image, or div).
// - This is useful for dynamic content like comments, new tasks, notifications, etc.
// - JavaScript allows us to create elements, set their content or attributes, and insert them into the webpage dynamically.

// -----------------------------------------------------
// 1. CREATE ELEMENT
// -----------------------------------------------------

let newPara = document.createElement("p");  // this creates a new <p> tag
console.dir(newPara); // shows the new element in the console

// -----------------------------------------------------
// 2. SET CONTENT OR ATTRIBUTES
// -----------------------------------------------------

newPara.innerText = "This is a new paragraph added using JavaScript"; // sets the inner text of the paragraph
newPara.classList.add("highlight"); // adds a class name to the paragraph

// You can also set attributes like id, src, href etc.
newPara.setAttribute("id", "newPara"); // sets id="newPara" to the element

// -----------------------------------------------------
// 3. INSERT AND REMOVE THE ELEMENT INTO DOM
// -----------------------------------------------------

// appendChild() → inserts the element as the last child of a parent
document.body.appendChild(newPara); // adds <p> at the end of <body>

// prepend() → inserts the element as the first child
document.body.prepend(newPara); // adds <p> at the beginning of <body>

// insertBefore() → inserts the element before a specified element
let referenceElement = document.getElementById("mainImg"); // selecting reference element
document.body.insertBefore(newPara, referenceElement); // inserts <p> before mainImg

// append() → similar to appendChild but can also add strings
document.body.append("This is a plain text added using append()");



// remove the eleemnt from the DOM 
newPara.remove(); // removes the newly created paragraph from the DOM


