// functions are the building block of JS 
// you can see the functions as a block of code that can be resued any time 

// defining a function 

function hello() {
    console.log("Hello world");
}

// calling a function 

hello();

// calling a function is the process of executing the code inside the function

// make a function that roll a dice and show the number between 1 to 6 

function RollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
}
RollDice();


// function with arguments 
// we can pass the values to the function using the arguments

function NameAge(name, age) {
    console.log(`hello my name is  ${name} and my age is ${age}`);
}
NameAge("sohail", 21);

// create a function to calculate a average of 3 numbers 

function Average(num1, num2, num3) {
    let average = (num1 + num2 + num3) / 3;
    console.log(` the average of the numbers is ${average}`);
}
Average(10, 20, 30);


// print the multiplication table of a numbers using a function arguments 
function table(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`)
    }
}
table(5);

// return keyword 
// the return keyword is used to return a value from a function 
// if we don't use the return keyword the function will return undefined aslo the return ketword will stop the execution of the function so used it in the end of the function 

function sum(num1, num2) {
    return num1 + num2; // this will return the sum of the two numbers 
}
let result = sum(10, 20); // this will call the function and store the result in the variable result
// here you can see that the function is called and the result is stored in the variable result but does not print the result 
// so we can use the console.log to print the result
console.log(result); // this will print the result of the function


// nested functions 
// we can call a function inside another function 

let nestedSun = sum(sum(10, 20), sum(30, 40)); // this will call the function sum and pass the result of the first function to the second function
console.log(nestedSun); // this will print the result of the nested function


// sum of the n numbers 

function Nsum(n){
    let sum = 0;
    for(let i = 1 ; i <=n ; i++){
       sum += i;; 
    } 
    return sum ;
}
console.log(Nsum(10));


// concatenate the array of strings

let arr = ["hello", "i am ","sohail","ansari"];
function concatianteARR(arr){
let str = "";
for (let i = 0 ; i < arr.length ; i++){
    str += arr[i] + "";
}
return str;
}
console.log(concatianteARR(arr)); // this will print the result of the function

// FUNCTION METHODS 
//function methods is the way to define a function inside a variable 

let Trysum = function(a , b){
    return a + b ;
}

console.log(sum(10,20 ));