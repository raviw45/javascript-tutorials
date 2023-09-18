console.log("hello world welcome to the javascript programming!!!");


//practice with the variables
//const is the identifier used to declare the constant values that cannot be modified in the program


const a="amit";
function call(){
    console.log(a);
}
call();

//let is the block scoped variable 
//and var has scope throught the function
 var num=1234;
 if(true){
    var num=1432;
    console.log(num);//it will print 1432
 }
 console.log(num); //it will print 1432



 let am="Ravi";
 if(true){
    let am="Aniket";
    console.log(am);
 }

 console.log(am);