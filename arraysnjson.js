`use strict`

let darthVader = {allegiance: `empire`, weapon: `lightsaber`, sith: true, jedi: false};

console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ` + darthVader.allegiance);

console.log(`Darth Vader's weapon of choice is a ` + darthVader.weapon);

console.log(`Darth Vader is a sith? ` + darthVader.sith);

console.log(`Darth Vader is a Jedi? ` + darthVader.jedi);

let myArray = [`hello`,`everyone`];
console.log(myArray.length);
console.log(myArray.push(`hi`));
console.log(myArray.length);
console.log(myArray.shift());
console.log(myArray);

for(item of myArray){
    console.log(item);
}

// JSON

// JavaScript Object Notation
// Literal notation for JS objects

let newJSON = {
    name : `Denzel`,
    age : 22,
    nationality: `Nigeria`
}

// to convert JSON to different datatypes 
// we have to use OVERLOADED methods

// JSON to string
let str = JSON.stringify(newJSON);

console.log(newJSON);
console.log(str);

// String to JSON
let person = JSON.parse(`{"name":"raine","age":22,"nationality":"Jamaica"}`);
console.log(person);