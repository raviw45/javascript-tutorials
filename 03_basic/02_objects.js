const obj=new Object();

obj.id=1001;
obj.name="ravikant",
obj.marks=45

console.log(obj);

const returnedUser={
    fullname:{
        fullUserName:{
            firstName:"Ravikant",
            lastName:"Waghmare"
        }
    }
}

console.log(returnedUser.fullname.fullUserName.firstName);
console.log(returnedUser.fullname.fullUserName.lastName);


const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"d"};
//const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);
const obj3={...obj1,...obj2};
console.log(obj3);
console.log(obj3===obj1);


console.log(Object.keys(obj));//returns keys in array format
console.log(Object.values(obj));//returns values in array
console.log(Object.entries(obj));//returns key pair in the form of array
console.log(obj.hasOwnProperty('name'));//returns booleans



const course={
    coursename:"java",
    price:3000,
    courseInstructor:"aniket"
}

// course.courseInstructor
const {courseInstructor:instructor}=course;//object destructure
const {price}=course;
console.log(instructor);
console.log(price);

