const arr=[1,2,3,4,5,6,7,8,9,10];
const newArr=arr.map((num)=>num+10);
console.log(newArr);
console.log(arr.map((num)=>{return num*10})
.map((num)=>{return num+1}).filter((num)=>num<=40));