// console.log("Hello"+" World");

const str="Hii";
// console.log(str+" hello");


const strng=new String('Ravikant');//object type string
// console.log(strng.charAt(3));



const str1="ravikant";//primitive strings or string literals
const str2="WELCOME";

console.log(`Smart contact manager owner ${str1} your are most ${str2}`);//string interpolation




console.log(str1.toUpperCase());
console.log(str2.toLowerCase());
console.log(str1.length);//length is the property of the string 
console.log(str1.indexOf('k'));
var a=new String("2+2");
console.log(eval(a.valueOf()));
var splitText=`Hi ${str1} welcome to the programming world.`;
console.log(splitText.split("-"));
var name=" ravikant ";
console.log(name);
var newString=name.trim();
console.log(newString);
console.log(splitText.substring(-2,7));
console.log(splitText.substr(-2,7));
console.log(splitText.slice(2,8));
console.log(splitText.startsWith("Hi"));
console.log(splitText.replace('ravikant','aniket'));
var rep="aman";
const result=name.replaceAll(rep);
console.log(rep);

console.log(splitText.search('ravikant'));
// var a="2+2";
// var b=new String("2+2");
// console.log(eval(a));
// console.log(eval(b));





