// write a Js program to return that return the larger number from the array of numbers 
function largerNumber(arr, n) {
    let number = n;
    return arr.filter((num) => num > number);
}

// remove  the duplicates in the given string 
function duplicate(str) {
    let cleanStr = "";
    for ( let i = 0 ; i < str.length ; i++){
       if(!cleanStr.includes(str[i])){
        cleanStr += str[i];
       }
    }
    return cleanStr;
}

// write a js program that takes the list of the country name as input and display the longest name as the output 
function CountryName(country) {
    let longestName = "";
    for (let i = 0; i < country.length; i++) {
        if (country[i].length > longestName.length) {
            longestName = country[i];
        }
    }
    return longestName;
}

// Example usage:
let countryList = ["India", "United States of America", "Australia", "Canada"];
console.log(CountryName(countryList));  // Output: "United States of America"


// write a js code for the count of vowel in the string 
function vowel(str) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i])) {
            count += 1;
        }
    }
    return count;
}

let str = "vewffwnfnjavmfgedrvivfrfofvqefqv";
console.log(vowel(str));


// write a js code to genate a random number within the range of the given start and end 

function randomNumber(start , end){

    let diff = end - start  ;
    return Math.floor(Math.random() * diff) + start ; 
    
}
//