const user={
    name:'ravi',
    email:'ravi2@gmail.com',
    password:'1234',
    LoggedIn:function(){
        console.log("Logged In.!");
    }
}

console.log(Object.getOwnPropertyDescriptor(user,'name'));
Object.defineProperty(user,'name',{
    value:23,
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(user,'name'));
user.name=24;//now we cannot make any changes to the property
console.log(user.name);
Object.defineProperty(user,'name',{
    writable:true,
    enumerable:true
})
console.log(Object.getOwnPropertyDescriptor(user,'name'));
user.name="amit";//if we change the property of the object or the access to the properties then and then only we can access the properties
console.log(user.name);

for (let [key,value] of Object.entries(user)) {
    if(typeof value!=='function'){
        console.log(`key:${key} and value:${value}`);
    }
}