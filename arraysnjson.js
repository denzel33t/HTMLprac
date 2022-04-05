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