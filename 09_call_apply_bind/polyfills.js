let name={
    firstname:"Akshay",
    lastname:"Waghmare"
}

let printMe=function(hometown,state,country){
    console.log(this.firstname+" "+this.lastname+" from "+hometown+","+state+","+country);
}

let printMyName=printMe.bind(name,"Mumbai");
printMyName("Maharashtra","India");

Function.prototype.myBind=function(...args){
    let obj=this
    params=args.slice(1);
    return function(...args2){
        obj.call(args[0],params,[...args2])
    }
}
let printName2=printMe.myBind(name,"Dehradun");
printName2("Uttrakhand","India");