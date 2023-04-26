//parm destructuring
//object
//react
const person={
    firstName:"mohd",
    gender:"male",
    age:"2",
}
// function printDetails(obj)
// {
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }
function printDetails({firstName,gender,age})
{
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);

//call back function

function myFunc(a)
{
console.log(a);
console.log("hello word");
}
myFunc({name:"mohd"});
// myFunc("absc");
//myFunc([1,2,3,4]);

function myFunc2(name)
{
    console.log("inside my func 2");
    console.log("your name is ${name}")
}
function myFunc1(Callback)
{
    console.log("hello i am afunc and i can ");
    Callback("mohd");
    //console.log("hello word");
}
myFunc1(myFunc2);

//function returning function

function myFunc3()
{
    function hello()
    {
        console.log("hellow word")
        return "hello word"
    }
    return hello;
}
const ans = myFunc3();
console.log(ans);
console.log(ans());

// important array function
//forEach
//map
//filter
//reduce

const number=[1,2,3,4,5,];
function myFunc(number, index)
{
    console.log("index is ",index);
    //console.log('${"number"}*2=${"number*2"}')
    console.log(number*2);
}
//  multiplyBy2(number[2],3);
//  for(i=0; i<number.length; i++)
//  {
//     multiplyBy2(number[i],i);  
//  }
number.forEach(myFunc)


const numbers=[1,2,3,4,5,];
number.forEach(function(number,index)
{
    console.log(number*4,index);
})

const user=[
    {firstName:"mohd", age:20},
    {firstName:"ram", age:40},
    {firstName:"rohan", age:70},
    {firstName:"swati", age:60},
]
user.forEach(function(user)
{
    console.log(user.firstName,user.age);
});

user.forEach((user,index)=>{
    console.log(user.firstName,user.age,index);
})
// for(let user of users)
// {
//     console.log(user.firstName);
// }

// map method

const number2=[3,4,5,6,7];
const square=function(number)
{
    return number * number;
}
const squareNumber=number2.map(square);
console.log(squareNumber);

const number3=[3,4,5,6,7];
// const square=function(number)
// {
//     return number * number;
// }
const squareNumber1=number2.map(function(number){
         return number * number;
     });
console.log(squareNumber1);

const number4=[3,4,5,6,7];
// const square=function(number)
// {
//     return number * number;
// }
const squareNumber2=number2.map((number,)=>{
         return number * number;
     });
console.log(squareNumber2);

const users=[
    {firstName:"mohd", age:20},
    {firstName:"ram", age:40},
    {firstName:"rohan", age:70},
    {firstName:"swati", age:60},
]
const userNames=users.map((user)=>{
    return user.firstName;
});
console.log(userNames);

//filter method

const numbers1=[1,2,3,4,5,6,7,9];
const isOdd=function(number)
{
    return number%2!==0;
}
const evenNumber = numbers1.filter(isOdd);
console.log(evenNumber)

//reduce

// const numbers2=[1,2,3,4,5,6,7];
// aim : sum of all the number is array
// const sum = numbers.reduce((accumulator,currentValue):
// return accumulator+currentValue;
// )};

const userCart=[
    {productId: 1, productName:"mobail", price:12000},
    {productId: 2, productName:"laptop", price:22000},
    {productId: 3, productName:"tv",     price:145000},
]
 const totalAmount = userCart.reduce((totalprice,currentproduct)=>
 {
return totalprice + currentproduct.price;
 },0)
 console.log(totalAmount);

 // short

 const numbers30 = [3,4,56,800,];
 //["3","4","56","800"]
 number.sort();
 console.log(numbers30);

 const userName=["mohd","abcd","dert","swati"]
 userName.sort();
 console.log(userName);

 const numbers10 = [3,4,56,800,];
 number.sort((a,b)=>{
    return a-b;
 });
 //numbers10.sort((a,b)=>a-b);
 console.log(numbers10);

 const products=[
    {productId:1, productName:"p1",price:300},
    {productId:2, productName:"p2",price:3000},
    {productId:3, productName:"p3",price:30000},
    {productId:4, productName:"p4",price:300000},
    {productId:5, productName:"p5",price:3000000},
    {productId:6, productName:"p6",price:30000000},
 ]
 products.sort((a,b)=>{
    return a.price-b.price
 });
 console.log(products);

 const products1=[
    {productId:1, productName:"p1",price:300},
    {productId:2, productName:"p2",price:3000},
    {productId:3, productName:"p3",price:30000},
    {productId:4, productName:"p4",price:300000},
    {productId:5, productName:"p5",price:3000000},
    {productId:6, productName:"p6",price:30000000},
 ]
 // low to high 
 const lowToHigh=products1.slice(0).sort((a,b)=>{
    return b.price-a.price
 });
 console.log(lowToHigh);

 //  find method

 const myArray=["hellow","catt","dogey","lion"];
 function isLength3(string)
 {
    return string.lenght===3;
 }
   // myArray.find()
   const ans1= myArray.find(isLength3);
   console.log(ans1);

   // every method
   const numbers15 = [2,4,6,8,10];
   const ans2 = numbers15.every((number)=>number%2===0);
   console.log(ans2);

   //  some method

   const numbers12 = [3,5,7,9];
   const ans3=numbers12.some((number)=>number%2===0);
   console.log(ans3);

   //splice method
   //start,delete,insert

   const myArray1=["item1","item2","item3"];
   //detele
   myArray1.splice(1,2);
   console.log(myArray1);

//    const myArray2=["item1","item2","item3"];
//    //inserted
//    myArray2.splice(1,'inserted item5');
//    console.log(myArray2);
const myArray6=["item1","item2","item3"];
myArray6.splice(0,0,"inserted item4");
console.log(myArray6);

// delete and return value

const myArray3=["item1","item2","item3"];
const deletedItem=myArray3.splice(1,1);
console.log("deletedItem",deletedItem);
console.log(myArray3);

const myArray4=["item1","item2","item3","item4"];
const deletedItem1=myArray4.splice(1,3);
console.log("deletedItem1",deletedItem1);
console.log(myArray4);

// const myArray5=["item1","item2","item3","item4"];
// myArray5.spline(0,1,"inserted item1","inserted item2");
// console.log(myArray5);

// iterables

const firstName="mohdabbas";
for(let char of firstName)
{
    console.log(char);
}

const items=["item1","item2","item3","item4"];
for(let item of items)
{
    console.log(item);
}

const firstName1="mohmmadabbas";
console.log(firstName1.length);
console.log(firstName[5]);

// const number20 = new set();
// number20.add(1);
// number20.add(2);
// number20.add(3);
// console.log(number20);

const myArray5=[1,6,3,4,6,5];
const uniqueElements=new Set(myArray5);
console.log(uniqueElements);
console.log(myArray5);

const myArray2=[1,2,1,3,1,3,4,5,6];
const uniqueElements1=new set(myArray2);
let length=0;
for(let elements of uniqueElements1)
{
    length++;
}
console.log(length);

const persons=new Map();
persons.set("firstName","mohdabbas");
persons.set("age",3);
persons.set(1,"one");
console.log(persons);

// clone using object.assign

const obj={
    key1: "value1",
    key2: "value2",
}
const obj2=obj;
obj.key3="value3";
console.log(obj);
console.log(obj2);
