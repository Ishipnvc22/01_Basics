// string is denoted by both single and double quote

const name = "hitesh"
const repoCount = 50 

console.log(name + repoCount + " value "); // outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // nowadays use back text

// string

const gameName = new String('hitesh-hc');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8 , 4) // you can only give negative values in slice.
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20','-'))