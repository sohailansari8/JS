//b write a arrow function that take a array as a input a return the average of the nummbers in the array 
let arr = [1,2,3,4,5,6];

const sum = (arr) => {
   let sum = 0;
   for(let i = 0 ; i < arr.length ; i++){
         sum += arr[i];
   }
   sum = sum / arr.length;
   return sum;
}

// writa a arrow function that take a single numbers a input and return the numbers is Even or not


const IsEven = (num) => num % 2 === 0 ;
IsEven(10);
console.log(IsEven(10)); // this will print true