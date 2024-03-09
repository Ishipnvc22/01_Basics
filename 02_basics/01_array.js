//array

// js array are resizable and can contain a mix of different data types.
// js array are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes
// js arrays are zero-indexed.
// js array-copy operation create shallow copies.

const myArr = [0,1,2,3,4,5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)

console.log(myArr[1]);

// array methods
myArr.push(6) // this method use to add the value to the array
myArr.pop() // remove the value from the array

myArr.unshift(9) // it will add a value from beginning
myArr.shift() // it will remove the value from where it got added

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn2);

console.log("B", myArr);
const myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);
