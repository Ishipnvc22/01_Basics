console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
the reason is that == operator and >,<,>=,<= works differently
comparisons convert null to a number, treating it as 0.
that's why null>=0 is true and null>0 is false.
*/

// === will not only check value but also check it's datatype.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2); 

// above written all the code should not be in use while it create confusion while proper coding.