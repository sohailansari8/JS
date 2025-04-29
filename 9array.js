/**
 * An array in JavaScript is a data structure used to store multiple values in a single variable.
 * It is an ordered collection of elements, where each element can be accessed by its index.
 * Arrays can hold values of any data type, including numbers, strings, objects, or even other arrays.
 * 
 * Key Features:
 * - Arrays are zero-indexed, meaning the first element is at index 0.
 * - They are dynamic, allowing you to add, remove, or modify elements.
 * - Arrays come with built-in methods for common operations like sorting, filtering, and iterating.
 * 
 * Example:
 * const fruits = ['apple', 'banana', 'cherry'];
 * console.log(fruits[0]); // Output: 'apple'
 */

// making a list of element without the help of array
let student1 = "Ali";
let student2 = "Ahmed"; 
let student3 = "Sara";
let student4 = "Aisha";
 // as you can see the above code is not a good way to store the data becasue if we have to add more students we have to make more variables and it is not a good way to store the data
// so we will use the array to store the data
let students = ["Ali", "Ahmed", "Sara", "Aisha"];
console.log(students); // this will print the array of students

//indexing the array
console.log(students[0]); // this will print the first element of the array

// you can also chain the array methods to perform multiple operations in a single line
// for exampple 
students[0][0];
// this will print the first letter of the first element of the array
// this is not a good way to do it but you can do it if you want to

// you can also use the length property to get the number of elements in the array
console.log(students.length); // this will print the number of elements in the array


// arrays are mutable so you can change the value of the element in the array
students[0] = "Aliya"; // this will change the first element of the array to Aliya



// array methods 
// there are many array methods that you can use to manipulate the array
// some of the most common methods are:
// push() - adds an element to the end of the array
// lets take a example of push method
let cars = ["BMW", "Mercedes", "Toyota"];
console.log(cars); // this will print the array of cars
cars.push("Honda"); // this will add honda to the end of the array
console.log(cars); // this will print the array of cars with honda at the end


// pop() - removes the last element of the array
// lets take a example of pop method
let fruits = ["apple", "banana", "cherry"];
console.log(fruits); // this will print the array of fruits
fruits.pop(); // this will remove the last element of the array
// this will print the array of fruits with cherry removed
console.log(fruits); // this will print the array of fruits with cherry removed


// unshift() - adds an element to the beginning of the array
// lets take a example of unshift method
let animals = ["cat", "dog", "rabbit"];
animals.unshift("lion"); // this will add lion to the beginning of the array
console.log(animals); // this will print the array of animals with lion at the beginning


// shift() - removes the first element of the array
// lets take a example of shift method
let vegetables = ["carrot", "potato", "onion"];
console.log(vegetables); // this will print the array of vegetables
vegetables.shift(); // this will remove the first element of the array
// this will print the array of vegetables with carrot removed
console.log(vegetables); // this will print the array of vegetables with carrot removed



// next is index of methods 
// indexOf() - returns the index of the first occurrence of the specified element in the array
// for example see the previous array of vehitables and we will find the index of potato in the array

console.log(vegetables.indexOf("potato")); // this will return the index of potato in the array
// this will print the index of potato in the array



// include this array method used to check if the element is present in the array or not
// for example see the previous array of vehitables and we will check if potato is present in the array or not
console.log(vegetables.includes("potato")); // this will return true if potato is present in the array otherwise false
// this will print true if potato is present in the array otherwise false


// the next methods we can use is concat() - used to join two or more arrays
// lets make two array and join them using concat method

let primaray=["red", "blue", "yellow"];
let secondary=["green", "orange", "purple"];
let colors = primaray.concat(secondary); // this will join the two arrays
console.log(colors); // this will print the array of colors with primary and secondary colors joined
// this will print the array of colors with primary and secondary colors joined



// lets see the reverse method
// it is used to reverse the order of the elements in the array
// lets take a example of reverse method
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // this will print the array of numbers
numbers.reverse(); // this will reverse the order of the elements in the array
// this will print the array of numbers with the order reversed
console.log(numbers); // this will print the array of numbers with the order reversed
// this will print the array of numbers with the order reversed




// lets see the slice method
// it is used to extract a portion of the array and return it as a new array
// lets take a example of slice method
let fruit = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruit); // this will print the array of fruits
let citrus = fruit.slice(1, 3); // this will extract the elements from index 1 to index 3 and return it as a new array
// this will print the array of fruits with the elements from index 1 to index 3
console.log(citrus); // this will print the array of fruits with the elements from index 1 to index 3
// this will print the array of fruits with the elements from index 1 to index 3


// lets see the splice method
// it is used to add or remove elements from the array
// lets take a example of splice method
let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1); // this will print the array of numbers
let removed = numbers1.splice(2, 2, 6, 7); // this will remove the elements from index 2 to index 4 and add 6 and 7 in their place
// this will print the array of numbers with the elements from index 2 to index 4 removed and 6 and 7 added in their place
// output will be [1, 2, 6, 7, 5]
console.log(numbers1); // this will print the array of numbers with the elements from index 2 to index 4 removed and 6 and 7 added in their place





// lets see the sort method 
// it is used to sort the elements of the array in ascending order by default
// lets take a example of sort method
let numbers2 = [5, 3, 8, 1, 4];
console.log(numbers2); // this will print the array of numbers
numbers2.sort(); // this will sort the elements of the array in ascending order
// this will print the array of numbers in ascending order
console.log(numbers2); // this will print the array of numbers in ascending order
// this will print the array of numbers in ascending order
// output will be [1, 3, 4, 5, 8]





// lets see about the nested array 
// it is used to store arrays inside an array
// lets take a example of nested array
let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // this will create a nested array
// this will print the nested array
console.log(nestedArray); // this will print the nested array



// ARRAY METHODS 

// 1. forEach() method: The forEach() method executes a provided function once for each array element.
// It does not return a new array, but it can be used to perform side effects on each element of the array.
// It is often used for iterating over arrays and performing operations on each element.

const Numbers = [1, 2, 3, 4, 5];
numbers.forEach((numbers) => {
    console.log(numbers * 2);
});
// output will be 2,4,6,8,10

// 2. map() method: The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// it is used ti transform each element and return a new array with the transform values 

let nums = [1, 2, 3, 4, 5];
let double = nums.map((num) => {
    return num * 2;
})
console.log(double);


// 3 . filter() method : the filter method make a new array with all elements that pass the given condition 
// it is used to filter out elements from an array based on a condtion 

let num = [1, 2, 3, 5, 6, 8, 9, 7, 4, 6, 5, 6, 8, 2, 6, 5,];
let sort = num.filter((num) => {
    return num > 5;
})
console.log(sort);


// 4. reduce() method : the method is used to reduce the array to a single value by iterating over each element and applying a function to it
// it is used to perform a calculation on the array and return a single value

let num1 = [1,2,3,4,5,6,7,8,9];
let sum = num1.reduce((num1 , num2) => { 
 return num1+num2;
});
console.log(sum);


