function createUser(username,score){
    this.username=username;
    this.score=score;
}

createUser.prototype.increment=function(){
    score++
}

createUser.prototype.printMe=function(){
    console.log(`Your score is ${this.score}`);
}

const chai=new createUser("chai",24);
const code=new createUser("code",240);
chai.printMe();
code.printMe();

