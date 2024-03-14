const user = {
    username: "Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);

        console.log(this);
    }

}

user.welcomeMessage()
user.username="Sam"
user.welcomeMessage()


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Hitesh"
    console.log(this);
}



