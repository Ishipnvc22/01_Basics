var c = 300

if(true){
    let a = 10
    // console.log('Inner : ',a)
}

// console.log(a)
// console.log(b)
// console.log(c)


// u can't access the inner function in outer function
function one(){
    const username = "Hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if(true){
    const username = "Hitesh"
    if(username === "Hitesh"){
        const website = "Youtube"
        console.log(username + website);
    }
    console.log(website);
}
console.log(username);

function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num+2
}
addTwo(5)