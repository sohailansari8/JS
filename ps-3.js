
// write a js program to delete all occorance of the the given nums from an array 
let arr=[1,2,3,4,5,6,2,7,8,9];
let num = 2 ;
for(let i = 0 ; i < arr.length; i++){
    if(arr[i] == num){
        arr.splice(i,1);
        i--;
    }
};
console.log(arr);

// write a JS program to count the number of digits in the given number

let number = 123456789;
let counter = 0;
let numStr = number.toString();
for (let i = 0 ; i < numStr.length ; i++){
   counter = counter + 1
}
console.log(counter);


// write a JS program to add the digits in the given number 

let number2 = 123456789;
let total = 0 ; 
let numStr2 = number2.toString();
for (let i = 0 ; i < numStr2.length ; i++){
    total = total + Number(numStr2[i]);
}
console.log(total);


// write a JS program to find out the factorial of the given number

 let factorialNumber = 7 ;
 let factorial = 1 ; 
 
for (let i = 1 ; i <= factorialNumber ; i++){
    factorial *= i;
}
console.log(factorial);


// 

let arr1 = [1,2,3,4,5,6,7,8,9];
let largestNumber = 0;

for(let i = 0 ; i < arr1.length ; i++){
    if(arr1[i] > largestNumber){
        largestNumber = arr1[i];
      }
}
console.log(largestNumber);