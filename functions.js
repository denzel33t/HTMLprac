`use strict`

function subtract (num1, num2) {
    return num1 - num2;
}

console.log(subtract(10,5));

welcome = function(name, age , gender) {
    console.log(`My name is ${name}, I am ${age} and of gender ${gender}`);
}

welcome(`denzel`, 22, `male`);

powerUp = (n1, n2) => console.log(Math.pow(n1,n2));

powerUp(6,7);