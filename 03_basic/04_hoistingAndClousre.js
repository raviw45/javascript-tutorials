function one(){
    const username="amar";
    function two(){
        const sirname="pawar";
        console.log(username);//accessing the variable of the outside function is called the closure
    }
    // console.log(sirname);
    two();
}
one();


console.log(addOne(4));//we can call the function before it's defination that is called hoisting or function hoisting
function addOne(num){
    return  num+1;
}

const addTwo=function(num){
    return num+5;
}
console.log(addTwo(5));//function hoisting is not applicable for the anonymous function
const addThree=(num)=>{
    return num+10;
}
console.log(addThree(5));//function hoisting is also not applicable for the arrow function