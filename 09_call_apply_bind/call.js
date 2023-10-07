const person1={
    firstname:"amit",
    lastname:"garad",
    printMe:function(){
        console.log(`${this.firstname} and ${this.lastname}`);
    }
}
const person2={
    firstname:"aniket",
    lastname:"sakatkar",
    printMe:function(){
        console.log(`${this.firstname} and ${this.lastname}`);
    }
}

function open(email){
    console.log(`${this.firstname} and ${this.lastname} and ${email}`);
}
open.call(person1,"amit@gmail.com");// call method is use the commmon methods for the object by passsing refernce
open.apply(person1,["aniket@gmail.com"]);//apply methods takes other args as a array
const fun=open.bind(person2,"ravi@gmail.com");//it only creates the copy of the function 
fun();// we can store the function copy to the another var and call by using the var.

