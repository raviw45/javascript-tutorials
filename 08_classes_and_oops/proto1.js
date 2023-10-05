let ravi="chai      ";
console.log(ravi.length);

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is:${this.trim().length}`);
}
ravi.trueLength()


function setUserName(username){
    this.username=username
}

function userDetails(username,email,city){
    setUserName.call(this,username);
    //due to the call stack when function get removed from the global 
    //excution context variable username also get deleted. 
    //to avoid this we have call method but we also have to pass the reference of function
    // then that function will use the parametered this reference
    this.email=email;
    this.city=city;
}
const chai=new userDetails("chai","chai@gmail.com","pune");
console.log(chai);