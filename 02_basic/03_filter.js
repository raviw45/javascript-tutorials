const arr=[0,1,2,3,4,5,6,7,8,9];

const newArr=arr.filter((item)=>item>4);
console.log(newArr.toString());
console.log(arr.filter((num)=>{
    if(num>5){
        return num;
    }
}));
console.log(arr.filter((num)=>{return num>7}));



const Books=[{title:"first book",genre:"History",publish:1997,edition:2005},
{title:"second book",genre:"Science",publish:1995,edition:2001},
{title:"third book",genre:"History",publish:1990,edition:2007},
{title:"four book",genre:"Science",publish:1997,edition:2006}];


const newBooks=Books.filter((book)=>{return book.publish>=1997 && book.edition===2006 && book.genre==='Science'})
console.log(newBooks);