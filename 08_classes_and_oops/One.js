//this is an example of object literal
//if we want to write the multiple users then we need to write the struture for that we need classes
const user={
    username:"ravikant",
    email:"ravicoder45@gmail.com",
    city:"pune",
    getUserInfo:function(){
        console.log(`name is ${this.username} and email is ${this.email} `);
    }
}

console.log(user.username);
console.log(user.getUserInfo());

function User(username,email,city){
    this.username=username;
    this.email=email;
    this.city=city;
    // return this;
}

const userOne=new User("amit","amit@gmail.com","pune");
const userTwo=new User("aniket","aniket@gmail.com","pune");
console.log(userOne);
console.log(userTwo);
