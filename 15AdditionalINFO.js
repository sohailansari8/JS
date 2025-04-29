// default parameters
// default parameters is used to give a default value to a variable if it is not passed in the function if the parameter is passed then the parameters value will be used and if not the default value will be used 

let a = 5 ;
let b = 0 ;

let sum = (a , b = 5) => {
    return a + b ;
};
console.log(sum(5)); // this will print 10 
// console.log(sum(5, 10)); // this will print 15

// as you can see that if the empty value is passed then the default value will be used and if the value is passed then the passed value will be used

