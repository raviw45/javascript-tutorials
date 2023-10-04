const promisOne=new Promise(function(resolve,reject){
    setTimeout(() => {
         console.log('Async task completed');
         resolve();
    }, 1000);
})

promisOne.then(function(){
     console.log('Promise consumed');
})

//second method
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async 2 task completed");
        resolve();
    }, 1000);
}).then(function(){
    console.log("Promise2 consumed");
})

// promise threee
const promiseThree=new Promise(function(resolve,reject){
     setTimeout(() => {
         resolve({username:"chai",email:"chai@chaiaurcode.com"});
     }, 1000);
})
promiseThree.then(function(user){
    console.log(user);
})


//promise fourth
const promiseFourth=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"ravikant",email:"ravicoder45@gmail.com"});
        }else{
            reject("ERROR: something went wrong!!!");
        }
    }, 1000);
})

promiseFourth.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log("Username: "+username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("Finallly called!!"));


//promise five
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"javascript",password:"123"});
        }else{
            reject("ERROR: js went wrong")
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response=await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();


// async function getAllUsers(){
//      const response=await fetch("https://api.github.com/users/hiteshchoudhary");
//      const result=await response.json();
//      console.log(result);
// }

// getAllUsers();

//another method to fetch the data
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})