const myHeros={
    hulk:"hammer",
    spiderman:"sling",
    getPowerOfSpiderman:function(){
        console.log(`Spider: ${this.spiderman}`);
    }
}

Object.prototype.ravi=function(){
    console.log(`hello from ravi`);
}
myHeros.ravi()

const myFav=["ironman","thor"];

Array.prototype.ravikant=function(){
    console.log(`hello from the ravikant`);
}

// myFav.ravikant()
// myHeros.ravikant()  we can not access the prototype of the array but we can access the proto of object
//object above the heirarchy 
//object is the parent of function, array and string etc 


const User={
    name:"ravikant",
    email:"ravi@gmail.com"
}

const teacher={
    makeVideo:true
}

const teachingSupport={
    isAvailable:false
}

const TASupport={
    fullfill:'js support'
}

//using this method we can achieve the inheritance
Object.setPrototypeOf(TASupport,teachingSupport);
console.log(TASupport.isAvailable);
Object.setPrototypeOf(teacher,User);
console.log(teacher.name);
console.log(teacher.email);
console.log(teacher.makeVideo);
