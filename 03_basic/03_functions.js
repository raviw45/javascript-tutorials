const user={
    name:"ravikant",
    email:"ravicoder45@gmail.com",
    password:"ravi@234"
}

function print(anyobject){
     console.log(`Hii ${anyobject.name} , welcome to the application your password is ${anyobject.password}`);
}

print(user);


function syMyFunction(val1,val2,...num1){
   return num1;
}

console.log(syMyFunction(200,400,500,300,3000));

function anotherFun(name="ravikant"){
    return name;
}

console.log(anotherFun("Akash"));