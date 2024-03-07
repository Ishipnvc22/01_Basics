// call by value
// call by reference

// Primitive
// 7 types : String, Number, BigInt, Null, Undefined, Boolean, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // it will return false

const bigNumber = 5875555544545454n

// reference (Non primitive)
// Array, Objects, Functions
// u can treat function as variable in javaScript.

heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}  

console.log(typeof heros); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // it is object function.
console.log(typeof bigNumber); // bigint
console.log(typeof id); //symbol
console.log(typeof isLoggedIn); //boolean
console.log(typeof outsideTemp); // object (when null is used)
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof userEmail); //undefined
console.log(typeof anotherId); //symbol




// -------------------------------------------

// there are 2 kind of memory one is Stack and another is Heap Memory

// Primitive data stores into Stack Memory.
// Non-Primitive data stores into heap Memory.


let myYoutubename = "hiteshchoudarydotcom"

let anothername = myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);