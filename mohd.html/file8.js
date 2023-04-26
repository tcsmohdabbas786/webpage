const userMethods={
    about:function()
    {
        return `${this.firstName} is ${this.age} years and blongs to ${this.address}` 
    },
    is18:function()
    {
        return this.age>=18;
    },
    sing:function(){
        return 'toon na na na la la';
    }
}
function createUser(firstName,lastName,email,age,address)
{
    const user={};
    
    user.firstName=firstName;
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about=userMethods.about;
    user.is18=userMethods.is18;
    return user;
}
const user5=createUser("Ram","abbas","mohmmadabbas@gmail.com",60,"fazalpur khas");
const user6=createUser("Mohan","abbas","mohmmadabbas@gmail.com",50,"fazalpur khas");
const user7=createUser("Rohan","abbas","mohmmadabbas@gmail.com",40,"fazalpur khas");
console.log(user5.about());
console.log(user6.about());
console.log(user7.about());

function hello(){
    console.log("hello word");
}
//console.log(hello.name);
if(hello.prototype)
{
    console.log("prototype is precent");
}
else
{
console.log("prototype is note precent");
}

//new keyword

function creatUser(firstName,age)
{
    this.firstName=firstName;
    this.age=age;
}
const user30=new creatUser("mohd",6);
console.log(user30);



function creatUser(firstName,age)
{
    this.firstName=firstName;
    this.age=age;
}
creatUser.prototype.about=function()
{
    console.log(this.firstName,this.age);
}
const user3=new creatUser("mohd",6);
//console.log(user30);
user30.about();

let numbers=[1,2,3,4,5,6];
//numbers.
console.log(numbers);

//getter and setters
class person
{
constructor(firstName,lastName,age)
{
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
}
fullName()
{
    return `${this.firstName} ${this.lastName}`
}
}

const person1=new person("hershit","sharma",5);
console.log(person1.fullName());