// String Methods in JavaScript

// 1. Creating Strings
let str1 = "Hello, World!";
let str2 = 'JavaScript is awesome!';
let str3 = `This is a template literal`;

console.log("Original Strings:");
console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3:", str3);

// 2. length - Returns the length of a string
console.log("Length of str1:", str1.length);

// 3. toUpperCase() - Converts string to uppercase
console.log("Uppercase str1:", str1.toUpperCase());

// 4. toLowerCase() - Converts string to lowercase
console.log("Lowercase str2:", str2.toLowerCase());

// 5. trim() - Removes leading and trailing spaces
let str4 = "   Hello JavaScript!   ";
console.log("Trimmed str4:", str4.trim());

// 6. slice(start, end) - Extracts a portion of a string
console.log("Slice (0,5) from str1:", str1.slice(0, 5)); // "Hello"

// 7. substring(start, end) - Similar to slice but does not accept negative values
console.log("Substring (7,12) from str1:", str1.substring(7, 12)); // "World"

// 8. replace(old, new) - Replaces a part of the string
console.log("Replace 'World' with 'JavaScript':", str1.replace("World", "JavaScript"));

// 9. replaceAll(old, new) - Replaces all occurrences of a string
let str5 = "apple apple apple";
console.log("Replace all 'apple' with 'banana':", str5.replaceAll("apple", "banana"));

// 10. concat() - Joins two or more strings
console.log("Concatenated String:", str1.concat(" ", str2));

// 11. split(separator) - Converts a string into an array
let str6 = "red,blue,green,yellow";
console.log("Split string into array:", str6.split(",")); 

// 12. includes(substring) - Checks if a string contains a specific substring
console.log("Does str1 include 'Hello'? :", str1.includes("Hello"));

// 13. startsWith() - Checks if a string starts with a specific substring
console.log("Does str1 start with 'Hello'? :", str1.startsWith("Hello"));

// 14. endsWith() - Checks if a string ends with a specific substring
console.log("Does str1 end with 'World!'? :", str1.endsWith("World!"));

// 15. charAt(index) - Returns the character at a specific index
console.log("Character at index 1 in str1:", str1.charAt(1)); 

// 16. charCodeAt(index) - Returns the Unicode of the character at a given position
console.log("Unicode of character at index 1 in str1:", str1.charCodeAt(1)); 

// 17. indexOf(substring) - Returns the first index of a substring
console.log("Index of 'World' in str1:", str1.indexOf("World"));

// 18. lastIndexOf(substring) - Returns the last index of a substring
let str7 = "Hello World! Welcome to the World!";
console.log("Last index of 'World':", str7.lastIndexOf("World"));

// 19. repeat(n) - Repeats a string multiple times
console.log("Repeat str1 three times:", str1.repeat(3));

// 20. padStart(totalLength, padString) - Pads the beginning of a string
console.log("PadStart (10, '*') on '42':", "42".padStart(10, "*"));

// 21. padEnd(totalLength, padString) - Pads the end of a string
console.log("PadEnd (10, '*') on '42':", "42".padEnd(10, "*"));

/*
Summary of String Methods:
| Method       | Description |
|-------------|-------------|
| length      | Returns string length |
| toUpperCase() | Converts to uppercase |
| toLowerCase() | Converts to lowercase |
| trim()      | Removes spaces |
| slice()     | Extracts part of string |
| substring() | Extracts part of string without negative index support |
| replace()   | Replaces a substring |
| replaceAll() | Replaces all occurrences of a substring |
| concat()    | Joins strings |
| split()     | Converts string to array |
| includes()  | Checks if substring exists |
| startsWith() | Checks if string starts with a substring |
| endsWith()  | Checks if string ends with a substring |
| charAt()    | Returns character at a position |
| charCodeAt() | Returns Unicode of character |
| indexOf()   | Returns first index of substring |
| lastIndexOf() | Returns last index of substring |
| repeat()    | Repeats string |
| padStart()  | Pads start of string |
| padEnd()    | Pads end of string |

These methods help in manipulating and working with strings efficiently in JavaScript!
*/
// Note: The above methods are case-sensitive and may behave differently based on the input string.