const obj={
    key1:"value1",
    key2:"value2",
}
const obj2={...obj};
obj.key3="value3";
obj.key4="value4";
console.log(obj);
console.log(obj2);

const user={
    firstName:"mohd abbas",
    address:{houseNumber: "1234"}
}
console.log(user.firstName);
console.log(user.address.houseNumber);

// method

const person={
    firstName:"mohd",
    age:8,
    about:function()
    {
        console.log("person name is mohd and person age is 8");
    }
}
person.about();

function myFunc()
{
    console.log("hellow world");
}
window.myFunc();

function hello()
{
    console.log("hellow world");
}
hello.call();

// call apply bind

const user4={
    firstName:"mohmmad",
    age:17,
    about:function()
    {
        console.log(this.firstName, this.age)

    }
}
const user2={
    firstName:"nadeem",
    age:38,
}
user4.about.call(user2);

// arrow functions

const user3={
    firstName:"mohmmad",
    age:17,
    about:()=>{
        console.log(this.firstName, this.age)
    }
}
user3.about(user3);

//proto,prototype
// function (that function create object)

const userMethods={
    about:function()
    {
        return `${this.firstName} is ${this.age} years and blongs to ${this.address}` 
    },
    is18:function()
    {
        return this.age>=18;
    },
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

const object1={
    key1:"value1",
    key2:"value2",
}
// const object2=object.create(object1);
// object2.key3="value3";
// console.log(object2.key2);
const object2={
    key3:"value3",
}
console.log(object2.key3);

