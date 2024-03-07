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
let negValue = -value // -value will return the value in minus as negative value/number. 

console.log(negValue);

// operation should be done in a proper manner
// if u declare and assinging value of let m1,m2,m3 like m1=m2=m3 then it is a wrong practice.

console.log("1" + 2);
console.log(1 + "2"); // this type of operation is concate method

console.log("1" + 2 + 2);
console.log(1 + 2 + "2"); // this type of operation is also concate method

console.log(3 + 4 * 5 % 3);
console.log((3 + 4) * 5 % 3); // this is proper form of code 





console.log(+true); // +true will return the value 1.
console.log(+""); // +"" will return the value 0.
