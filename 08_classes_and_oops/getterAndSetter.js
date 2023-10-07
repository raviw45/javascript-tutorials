/*
class User{
    constructor(username,email){
        this._username=username;
        this._email=email;
    }

      get username(){
        return this._username.toUpperCase();
      }
       set username(username){
        this._username=username;
       }

       get email(){
        return `${this._email.toUpperCase()}arr`
       }

       set email(email){
         this._email=email
       }
    logMe(){
        console.log(`${this._username} logged In`);
    }

}

const u=new User("ravi","u@mail.com");
u.logMe();
console.log(u.username);
console.log(u.email);
u.username="amit"
u.logMe();


*/

function User(username,email){
   this._username=username,
   this._email=email

     Object.defineProperty(this,'username',{
        get:function(){
            return `${this._username.toUpperCase()}`;
        },
        set:function(value){
            this._username=value;
        }
     })

     Object.defineProperty(this,'email',{
        get:function(){
            return `${this._email.toUpperCase()}`;
        },
        set:function(value){
            this._email=value;
        }
     })
}

User.prototype.printMe=function(){
     console.log(`${this.username} and ${this.email}`);
}

const use=new User("aniket","ani17@gmail.com");
use.printMe();
use.email="amit@gmail.com";
console.log(use.email);
use.username="Amit";
console.log(use.username);
use.printMe();

