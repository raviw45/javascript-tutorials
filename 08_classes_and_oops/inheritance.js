class User{
    constructor(username){
        this.username=username;
    }
  fun1(){
    return `USERNAME IS ${this.username}`;
  }

}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    fun2(){
        return `your username is ${this.username}`
    }
}

const teacher=new Teacher("ravi","ravi33@gmail.com","1244");
console.log(teacher.fun2());
console.log(teacher.fun1());

// const user=new User("amit");
// console.log(user.fun2());
// console.log(user.fun1());  this will throw the exception because we cannnot access the child by using the parent instance