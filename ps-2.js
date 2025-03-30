// write a javaScript program to get the first n element of the array 

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = 5;
let newArr = arr.slice(0, n);
console.log(newArr); // Output: [1, 2, 3, 4, 5]

// write a javaScript program to get the last n element of the array

let arr2=[1,2,3,4,5,6,7,8,9,10];
let n2=5;
let newArr2 = arr2.slice(-n2);
console.log(newArr2); // Output: [6, 7, 8, 9, 10]



// write a program to detemine weather the string is empty or not
let str = "Hello, World!";
if(str.length === 0){
    console.log("String is empty");
}else{
    console.log("string is not empty ")
}



// write a program to check if the first letter of the string is capital or not


let character = "Appotuapothecary diaries";
if(character.charAt(0) === character.charAt(0).toLowerCase()){
    console.log("first letter is capital ")
}else {
    console.log("first letter is not capital")
}




// write a program to strip the leading and the tailing spaces of the string
let str2 = "         Hello, World!       ";
let trimmedstr = str2.trim();
console.log(trimmedstr); // Output: "Hello, World!"



// write a program to check if the element is present in the array or not

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let number= 5 ;
if(arr3.includes(number)){
    console.log("element is present in the array ")
}else {
    console.log("element is not present in the array ")
}


// write a js program to determine the given number is even or odd 

let num = 45 ;
if(num%2 === 0){
    console.log("the given number is even")
}else{
    console.log("the given number is odd ")
}

 