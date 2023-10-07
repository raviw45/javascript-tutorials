let name={
    firstname:"ravi",
    lastname:"waghmare",
    printFullName:function(){
        console.log(this.firstname+" "+this.lastname);
    }
}

let name2={
    firstname:"sachin",
    lastname:"Tendulkar",
}
//function borrowing ==> borrow functions from anther object
name.printFullName.call(name2);