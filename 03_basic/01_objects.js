
const mySym=Symbol("key1");// it is an unique value

const User={
    name:"Ravikant",
    email:"ravicoder45@gmail.com",
    "full name":"Ravikant waghmare",
    [mySym]:"MySymbol",
    age:25,
    location:"pune",
    isLoggedIn:false,
    lastLoginDays:["Monay","Tuesday"]
};
// console.log(User[mySym]);
// console.log(User);
// Object.freeze(User);//if we modify the value of the object it wont affect to the object
// User.email="ravikantwaghmare82@gmail.com";
// console.log(User);


const User2={
    name:"Aniket",
    email:"ani45@gmail.com",
    "full name":"aniket waghmare",
    [mySym]:"MySymbol",
    age:25,
    location:"Bangalore",
    isLoggedIn:false,
    lastLoginDays:["Monay","Tuesday"]
};

console.log(User2);
User2.greeting=function(){
    console.log("Hello greetings");
}
console.log(User2.greeting());
User2.greeting2=function(){
    console.log(`Hello ${this.name} welcome to the js coding`);
}
console.log(User2.greeting2());
