const currentDate=new Date();
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toString());
console.log(currentDate);

const customDate=new Date("2023/09/21");
console.log(customDate.toDateString());

const anotherCustomDate=new Date("2023-09-21");
console.log(anotherCustomDate.toDateString());



console.log('date:'+customDate.getDate());
console.log('year:'+customDate.getFullYear());
console.log('hours:'+customDate.getHours());
console.log('Month:'+(customDate.getMonth()+1));
console.log(customDate.getMinutes());
console.log(customDate.getTime());

console.log(customDate.getUTCHours());
