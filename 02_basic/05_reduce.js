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

/*what is diffenrence between map, filter and reduce?

  map returns the array by modifying the exiting item.
  filter returns the exiting array by true false condition.
  reduce returns the reduced or compressed value in the single unit.
*/

const pracArrr=[1,2,3,4,5,6];
const result=pracArrr.map(item=>item*item).map(item=>item+1);
console.log(result);



const result2=pracArrr.filter(item=>item>4);//it wont change the array value it will return the array on the basis of true and false condition
console.log(result2);

const result3=pracArrr.reduce((acc,item)=>acc+item,0);
console.log(result3);//it will reduce the array and return the single unit value


