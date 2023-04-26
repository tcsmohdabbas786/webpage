// use const for certing array

const fruits  = ["apple","banana","orange"];
fruits.push("mango");
console.log(fruits);

// while loop

const vagitable = ["apple","banana","orange"];
let i=0;
while(i<vagitable.lenght)
{
console.log(fruit[i]);
i++;
}

//for of loop in array

const fruitS = ["apple","mango","orang","grapes"];
for(let fruit of fruitS){
    console.log(fruit);
}

const Fruits=["apple","mango","orang","grapes"];
const  Fruits1=[];
for(let Fruit of Fruits )
{
    Fruits1.push(Fruit.toUpperCase());
}
console.log( Fruits1);

const Fruit=["apple","mango","orang","grapes"]; // index show
const  Fruit1=[];
for(let index in Fruit)
{
    console.log(index);
}

const Fruit3=["apple","mango","orang","grapes"]; 
//const  Fruit4=[];
for(let index in Fruit)
{
    console.log( Fruit3[index]);
}

const Fruit0=["apple","mango","orang","grapes"]; 
const Fruit2=[];
for(let index in Fruit)
{
    Fruit2.push( Fruit3[index].toUpperCase());
}
console.log( Fruit2);

// array destructuring

const myArray=["value1","value2"];
let myvar1=myArray[0];
let myvar2=myArray[1];
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);

const array=["value1","value2"];
let [var4,var5]=array;
console.log("value of var4", var4);
console.log("value of var5", var5);

//Objects Reference type
// how to crecte objects

const person={name:"mohd",age:22};
console.log(  person);

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

