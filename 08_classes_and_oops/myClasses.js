/*
class User{
     constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
     }
     encryptPassword(){
        return `${this.password}abc`;
     }
     changeUser(){
        return `${this.username.toUpperCase()}`
     }
}

const chai=new User("DrinkChai","chai@gmail.com","123");
console.log(chai.encryptPassword());
console.log(chai.changeUser());
*/

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

const chai=new User("ravi","ravi4@gmail.com","a123");
console.log(chai.encryptPassword());

