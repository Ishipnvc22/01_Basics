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


function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "Meet",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200 , 400 , 500 , 1000]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200 , 400 , 500 , 1000]))