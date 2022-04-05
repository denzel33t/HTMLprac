`use strict`

let strictA = true;
let strictB = 1;

console.log(strictA == strictB);
console.log(strictA === strictB);

let age = 90;

if(age >=18 && age <= 65) {
    console.log(`Legal age`)
} else if (age < 18) {
    console.log(`under age`)
} else {
    console.log(`OAP`)
}


