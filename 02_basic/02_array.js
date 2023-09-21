const marvel_heroes=["ironman","hulk","spiderman","thor"];
const dc_heroes=["superman","flash"];
//console.log(marvel_heroes.push(dc_heroes));
//console.log(marvel_heroes);
// console.log(marvel_heroes.concat(dc_heroes));

const newArr=[...marvel_heroes,...dc_heroes];
console.log(newArr);

console.log(Array.from("ravikant").toString());
console.log(Array.from({name:"ravikant",...dc_heroes}));

console.log(Array.of("amit","aniket","amit"));

