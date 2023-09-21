const shoppingCart=[{
    item:"mobile phone",
    price:10000
},{
    item:"smart watch",
    price:2000
},{
    item:"analog watch",
    price:1400
},{
    item:"footware",
    price:5000
}];


const shoppingCartTotal=shoppingCart.reduce((acc,item)=>{
    return acc+item.price;
},0);
console.log(shoppingCartTotal);