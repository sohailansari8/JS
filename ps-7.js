// write a function that takes an array of numbers and returns the average of the square of the numbers in the array using arrow function and implicit return
let arr = [1,2,3,4,5,6,7,8];

let SquareAndSum = (arr) => {
    let square = arr.map((num)  => num * num);
    let sum = square.reduce ((acc ,val) => acc + val , 0 );
    let avg = sum / arr.length;
    return avg;
}
console.log(SquareAndSum(arr)); // this will print the avg of the square of the numbers in the array


// create a new array whose element are plus 5 than the original array 

let arr2 = [1,2,3,4,5,6,7,8];
let Arr2 = arr2.map((num) => num+5);
console.log(Arr2);

// create a new arrry whose elements are in uppercase than the original array 

let words = ["hello", "world", "javascript", "is", "awesome"];
let WORDS = words.map((word) => word.toUpperCase());
console.log(WORDS); // this will print the array of words in uppercase



// create a new array that take the the array and the number of arguments and the arguments are returned double 
let arg = [1,2,3,4];
let arg2 = [5,6,7,8];

function DoubleAndReturn(arr1 , ...arr2){
    let double = arr2.map((num) => num*2);

    return arr1.concat(double);
}
console.log(DoubleAndReturn(arg , ...arg2)); // this will print the array of numbers in double



// create function named as MergeObjects that takes two objects and merge them into one object
let obj1 = {
    name : "sohail",
    age : 21,
}
let obj2 = {
    cource : "MCA",
    location : " INDIA"
}

function MergeObjects(obj1 , obj2){
    return {...obj1 , ...obj2};
}
console.log(MergeObjects(obj1 , obj2));