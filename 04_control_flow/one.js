// if

const isUserloggedIn = true
const temperature = 41

// if (2 != 3){ // condition can be true or false 
//     console.log("Executed");
// }

if (temperature < 50){
     console.log("Less than 50");
}
else{
    console.log("Temparature is greater than 50");
}


const score = 200

if (score > 100){
    const power = "Fly"
    console.log(`User Power : ${power}`);
}
// console.log(`User Power: ${power}`);

const balance = 1000

// if(balance>500) console.log("test"),console.log("test");

if(balance < 500){
    console.log("Less than 500");
}else if(balance < 750) {
    console.log("Less than 750");
}else if(balance < 900) {
    console.log("Less than 750");
} else {
    console.log("Less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged In");
}

