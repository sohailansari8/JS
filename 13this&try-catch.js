// this keyword 
// this keywords is used to refers the object that is calling the function that means this refers to the object that is calling the function
// if this is used outisde the function then it will refer to the global object that is window object in the browser and global object in nodejs

const student = {
    name : "sohail",
    age : 21,
    math : 90,
    english : 80,
    science : 80,
   getAvg(){
    let avg = (this.math + this.english + this.science) / 3;
    console.log(`the average of the student is ${avg}`);
    return avg ;
   }
}

// now you can call the function using the object name like this 
// student.getAvg();
// this keyword will help the function to access the properties of the object in the function 



// TRY AND CATCH
// try and catch is used to handle errors in the code base that try and catch are work like if else first the try block will throw a error is the error is thrown the catch block will catch the error and excute the code inside the catch block or else the code inside the try block will execute and the catch block will not execute

// for example lets throw a error in which the variable a is not defined and we will catch the error in the catch block

try{
    console.log(a);// this will throe a error because the variable is not defined 
} catch (error) {
    console.log("the variavle is not defined plese define it first ") // this will catch the error and execute the coder inside the catch block 
    console.log(error); // this will print the error in the console
}