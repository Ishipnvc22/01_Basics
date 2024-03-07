let score = "33"

// console.log(typeof 33);
// console.log(typeof(score)); // method way to check type

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// "33" => this will get easily converted to number 33
// "33abc" => this will not convert into number but gives you NaN
// "true" => If we use true as a value it will return 1.
// "false" => If we use false as a value it will return 0.

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

// if u use "" empty string it will return false as boolean type.
// if u use "..." not an empty string it will return true as boolean type.

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);

// ********************** Operations *************************

let value = 3
let negValue = -value

console.log(negValue);