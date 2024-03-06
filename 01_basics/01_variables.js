const accountId  = 144553
let accountEmail = "internshipnvc@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"

// when u declare a variable without value then js will consider it as undefined.

//accountId = 2 // not allow as it already got declared with const keyword

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope.
*/

accountEmail = "hvhc@gmail.com" // 
accountPassword = "21212121"
accountCity = "Ahmedabad"

console.table([accountId,accountEmail,accountPassword,accountCity])