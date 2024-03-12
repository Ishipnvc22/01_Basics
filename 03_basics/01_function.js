function myName () {
    console.log("M");
    console.log("E");
    console.log("E");
    console.log("T");
}

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1 , number2){
    return number1 + number2
}

const result = addTwoNumbers(10,8)
console.log("Result : ", result)

// addTwoNumbers(10,8);

function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Meet"))