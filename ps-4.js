// make a random number generator from 1-6 represent the dice roll 

let diceRoll = Math.floor(Math.random() * 6) + 1;

console.log(diceRoll);


// make a object representing car store containing the name model and color property 

const car = {
    name: "BMW",
    model: "M5",
    color: "black",
}
console.log(car);


// make a person object with some of the information like name age anf city and edit the city to new york and add the new property country and set it as USA 

const person = {
    name: "alex",
    age: 22,
    city: "wadala",
}

person.city = "New York";
person.country = "United states of america ";

console.log(person);