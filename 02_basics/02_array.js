const marvel_heros = ["Thor" , "Ironman", "Spiderman"]

const dc = ["Superman" , "Flash" , "Batman"]

// marvel_heros.push(dc)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const allHeros = marvel_heros.concat(dc)
// console.log(allHeros);

const all_New_Heros = [...marvel_heros, ...dc] // use to spread the multiple arrays

console.log(all_New_Heros)

const another_array = [1 , 2 , 3 , [4 , 5 , 6], 7 , [6, 7 ,[4 , 5]]]

const real_another_array = another_array.flat(Infinity) // use to have a depth of array in one
console.log(real_another_array);    

console.log(Array.isArray("Meet"))
console.log(Array.from("Meet"))
console.log(Array.from({name: "Meet"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
