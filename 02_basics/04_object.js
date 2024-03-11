//const tinderUser = new Object() // singleton object
const tinderUser = {} // non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Meet"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Meet@gmail.com",
    fullname: {
        userfullname:{
             firstname : "Meet",
             lastname : "Pachchigar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

// const obj3 = {...obj1,...obj2} // this is 1 way
// console.log(typeof(obj3));
// const obj4 = Object.assign({}, obj1, obj2, obj5); // this is another way to declare object

const obj3 = {}

console.log(obj3);


const user = [
    {
        id:1,
        email:"meet@gmail.com"
    },
    {
        id:2,
        email:"abc@gmail.com"
    },
    {
        id:3,
        email:"xyz@gmail.com"
    },
]

user[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


