const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "Ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for(const key in programming) {
    //console.log(programming[key]);
}

const map = new Map() //map is not iterable
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

for (const key in map) {
    console.log(key);
}

// for objects we will use for in loop
// for array we will use for of loop and many others