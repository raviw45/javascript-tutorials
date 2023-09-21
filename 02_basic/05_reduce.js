const arr=[1,2,3];
const InitialValue=0;
const totalSum=arr.reduce((acc,currValue)=>{
    return acc+currValue;
},InitialValue);
console.log(totalSum);

let sumArr=arr.reduce((acc,currValue)=>{
    return acc+currValue;
},0);
console.log(sumArr);

let totalSumArr=arr.reduce((acc,currValue)=>acc+currValue,0);
console.log(totalSumArr);