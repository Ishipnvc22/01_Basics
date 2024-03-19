// falsy values
// false,0,-0,BigInt 0n, "",null,undefined,Nan

// truthy values
// "0", 'false',"",[],{},function(){}

const userEmail = ""

if (userEmail){
    console.log("Got the User Email.");
} else {
    console.log("No Email found")
}

if (userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 8??9 // this type of operator is use while using any firebase type of software
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("Less than 80") : console.log("More than 80")

