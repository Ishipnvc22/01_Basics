// singleton 

// object literals

const mySym = Symbol("Key1")


const JsUser = {
    name : "Meet",
    "full name": "Meet Pachchigar",
    [mySym]:"myKey1",
    age : 20,
    Location : "Surat",
    email: "meet@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Sunday","Saturday"]
} //here curly braces are the object


// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "meet22@gmail.com"
// Object.freeze(JsUser)
JsUser.age = 21

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());