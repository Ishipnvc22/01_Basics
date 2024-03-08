const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // this toFixed function is used in e-commerce app mostly.

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); // it will give round of value.

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // it will help us to set as per india numeric manner

// ++++++++++++++++++ MATHS ++++++++++++++++++++

// Math library is install by default in JS.

console.log(Math);
console.log(Math.abs(-4)); // gives value in positive numbers only
console.log(Math.round(4.6)); // round off the value
console.log(Math.ceil(4.2)) // it will round off the lower value
console.log(Math.floor(4.9)) // it will round off the upper value
console.log(Math.min(4,3,6,8)); 
console.log(Math.max(4,3,6,8));

console.log(Math.random()); // it will give value between 0 and 1.
console.log(Math.random()*10 + 1);
console.log(Math.random()*10 + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))