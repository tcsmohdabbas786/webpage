//computed properties

const key1 ="objkey1";
const key2 ="objkey2";

const value1="myvalue1";
const value2="myvalue2";

const obj={
    [key1] : value1,
    [key2] : value2,

}
console.log(obj);

//spread oprator

const array1=[1,2,3];
const array2=[7,6,4];
//const newArray=[...array1,...array2,98,67];
const newArray=[..."abbas"];
console.log(newArray);

//spread oprator in objects

const obj1={
    key1:"value1",
    key2:"value2",
};
const obj2={
    key3:"value3",
    key4:"value4",
};
const newObject={...obj1,...obj2,key69: 76};
console.log(newObject);

//object inside array
//very useful in real world applictions

const users=[
    {userId:1, fristName:"mohd", gender:"male"},
    {userId:2, fristName:"mohan", gender:"male"},
    {userId:3, fristName:"mohit", gender:"male"},
]
for(let user of users){
    console.log(user);
    //console.log(user.userId);
}

// nested destructuring

const user=[
    {userId:1, fristName:"mohd", gender:"male"},
    {userId:2, fristName:"mohan", gender:"male"},
    {userId:3, fristName:"mohit", gender:"male"},
]
const [{fristName:user1fristName},{userId:user2Id} ,{gender: user3gender}]=user;
console.log(user1fristName);
console.log(user3gender);
console.log(user2Id);

//const[user1,user2,user3]=user;
//console.log(user1);
//console.log(user2);
//console.log(user3);

// function in javascript 

function HappyBirthday()
{
    console.log("happy birth day to you .....");
}
HappyBirthday();

function twoplusfour()
{
    console.log(2+4+9);  
}
twoplusfour();

function sumTowNumber(number1,number2)
{
    return number1+number2;
}
const returnedValue=sumTowNumber(9,8);
console.log(returnedValue);

// od or even
function isEven(number)
{
    if(number%2===0)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(7));

function isEven1(number)
{
    return number % 2===0;
}
console.log(isEven(4));

// function
// input : string
// output : frist character

function fristChar(anyString)
{
    return anyString[0];
}
console.log(fristChar("qwe"));

// function
// input : array, target(number)
// output : index of target if target present array

function findTarget(array,target)
{
    for(let i=0; i<array.length; i++)
    {
        if(array[i]===target)
        {
            return i;
        }
        return-1;
    }
}
const myArray=[2,3,4,5,6,7,]
const ans = findTarget(myArray,7);
console.log(ans);

//function of expression

//const singHappyBirthday1 =(){
//console.log("happy birth day to you ....");
//}
    

// arrow function 

//const singHappyBirthday = () => {
//console.log("happy birth day to you ....");
//}

// hoisting

function hello()
{
    console.log("hello world");
}
hello();



