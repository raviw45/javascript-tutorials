class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`${this.username} is logged in.`);
    }

     static isCreatedId(){
        console.log(`12312`);
    }
}

const user=new User("ravikant");
User.isCreatedId();// to access the static method you have to  use class name to access the non
//static method use the object reference