// make a variable name num with a value and now print good if the value is divisible by 10 pring good or else print bad 

let num = 20;
if (num % 10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}


// take the user name using prompts and then print the name and age in the alerts as name is year old format use template literals for the output 

let name = prompt("enter the name of the user ");
let age = prompt("enter the age of the user ");
alert(` ${name} is ${age} year old`);


// use switch case to make a switch that divide the months od the year in 4 quaters and make the case according to the months 

let month = "january";
switch (month) {
    case "january":
    case "february":
    case "march":
        console.log("Quater 1 ");
        break;
    case "april":
    case "may":
    case "june":
        console.log("Quater 2 ");
        break;
    case "july":
    case "august":
    case "september":
        console.log("Quater 3 ");
        break;
    case "october":
    case "november":
    case "december":
        console.log("Quater 4 ");
        break;
    default:
        console.log("Invalid month name ");
        break;
}


// the string is a golden string if it starts with a or A and has length greater than 5.
let str = "Apple is good "
if ((str[0] == "A" || "a") && str.length > 5) {
    console.log("golden string ");
} else {
    console.log("not golden string ");
}



// write a progam to find the largest of 3 numbers using if else

let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2 && num1 > num3) {
    console.log("num1 is the largest number ");
} else if (num2 > num1 && num2 > num3) {
    console.log("num2 is the largest number ");
} else {
    console.log("num3 is the largest number ");
}

// write a program to find the last digit of two numbers and check if they are same or not

let number1 = 10;
let number2 = 20;

if (number1 % 10 == number2 % 10) {
    console.log("last digit is same");
} else {
    console.log("last digit is different");
}
