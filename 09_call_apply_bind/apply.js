let user={
    firstname:"ravi",
    lastname:"waghmare"
}

let user2={
    firstname:"akash",
    lastname:"waghmare"
}

function printFullName(hometown,city){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+" and "+city);
}

printFullName.apply(user,["Dharashiv","Kallamb"]);//it takes the array as argument
printFullName.call(user2,"Mumbai","Dharavi");//it takes comma separeted values 
const print=printFullName.bind(user,"Pune","Pune");
print();