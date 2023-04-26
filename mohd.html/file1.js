
"use strict";
//hello word
console.log("hello word");

var firstName = "mohd"; // camel case writing
console.log("mohd");

var firstname = "abbas";
console.log("abbas");

var value1 = 10;
console.log("10*10=100");

var _firstname="mohd";
console.log("mohd");

var first_name="mohd"; // snake case writing
console.log("abbas");

var first$name="mohd";
console.log("abbas");

var $firstname="mohd";
console.log("abbas");

//var first name = "mohit"; (invalid)

var firstName = "mohit";
console.log("mohit");

//let firstName="rohit";
//firstName="mohit";
//console.log("firstName");

//declare constants

const pi=3.14;
console.log(pi);

//string indexing

var firstName = "allah";

// a l l a h
// 0 1 2 3 4

console.log(firstName[4]);

//lenght of string
//fristName.lenght

console.log("firstName.lenght");
console.log("firstName[firstName.lenght-1]");

//last index : lenght-1

// trim()
// touppercase()
// tolowercase()
// slice

//let firstName = "    harshit    ";
//console.log("fristName.lenght");
//let newString = firstName.trim(); //"harshit"
//console.log(newString)
//console.log("newString.lenght");

let fristNam = "  harshit   ";
console.log("fristNam.lenght");
fristNam = fristNam.trim(); //"harshit"
console.log(fristNam)
console.log("fristNam.lenght");

//console.log(fristNam.toUpperCase());
fristNam = fristNam.toUpperCase();
console.log(fristNam);

fristNam = fristNam.toLowerCase();
console.log(fristNam);

// start index
// end index

let newString = fristNam.slice(0,3);
console.log(newString);

//type of operator

//data types(primitive data types)
//string 'harshit'
//number 2,3,4,5,6
//booleans
//undefined
//null
//bigint
//symbol

let age = 22;
let fristName = "harshit";

console.log(typeof "age");

//convert number to string

console.log(age + "");
console.log(typeof (age+ ""));


//convert string to number 

let myStr = +"34";
console.log(typeof myStr);

//second method string and number converd

let AGE = "18";
AGE = String(AGE);
console.log(typeof AGE);

let Age = "18";
Age = Number(Age);
console.log(typeof Age);

// string concatenation

let string1 = "harshit";
let string2 = "vashistha"
let fullName = string1+ " " +string2;
console.log(fullName);

let string3 = "10";
let string4 = "30";
let newsString = string3 + string4;
console.log(newsString);

let string5 = "10";
let string6 = "30";
let oldString = +string5 + +string6;
console.log(oldString);
console.log(typeof oldString);

//template string

let agE = 22;
let secondName = "mohd";
// "my name is mohd and my agE is 22"
let aboutMe = " my name is " + secondName + " and my age is " + agE;
//let aboutMe = `my name is ${secondName} and my age is ${agE};`
console.log(aboutMe);

//undefined

let thirdName;
console.log(typeof thirdName);
thirdName = "ABBAS";
console.log(typeof thirdName, thirdName);

//null

let myVariable = null;
console.log(myVariable);
let myVariables = "abbas";
console.log(typeof myVariables, myVariables);

console.log(typeof null); //bug , error

//BigInt

let myNumber = BigInt(123);
let sameMyNumber = 123n;
console.log(myNumber +  sameMyNumber);
console.log(Number.MAX_SAFE_INTEGER);

//booleans & comparison operator
//booleans(true , false)

let num1 = "7";
let num2 = 7;
console.log(num1>=num2);

// == vs ===

console.log(num1===num2);

//!= vs !==

console.log(num1 !== num2);

// if else condition

let aGe = 13;
if(age>=18)
{
    console.log("user can play cricket");
}
else
{
    console.log("user can plays mario"); 
}

let num = 14;
if(num%3===0)
{
    console.log("even");
}
else{
    console.log("odd");
}

//truthly and fulsy values
//""
//null
//0
//undefined
//truthy
//"xyz"
//1,-1

let fristsName="";
if(fristsName)
{
    console.log(fristsName);
}
else{
    console.log("fristsName is kind empthy");
}

//ternary oprator

let age1 = 2;
let drink;
if(age>=5)
{
drink = "coffee";
}
else
{
    drink = "milk";
}
console.log(drink);

//ternary  oprator / conditional oprator

var age2 = 5;
var drink1 = age >=8 ? "coffee" : "milk";
console.log(drink1);

//and or oprator

let SecondName = "mohd";
let age3 = 4;
if(SecondName[0] === "m")
{
  console.log("your name stsrts with m")
}

if(age3>18)
{
    console.log("you are above 18")  
}

//and oprator

let sEcondName = "Mohd";
let age4 = 24;
if(sEcondName[0] === "m" && age4>=18)
{
    console.log("name starts with m and above 18");
}
else{
    console.log("inside else"); 
}


// or oprator

let sECondName = "mohd";
let age5 = 24;
if(sEcondName[0] === "m" || age4>=18)
{
    console.log("name starts with m and above 18");
}
else{
    console.log("inside else"); 
}

//nested if else

//winning number 18
//18 your guess is right
//17 too law
//20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
if(userGuess ===  winningNumber)
{
    console.log("your guess is right");
}
else
{
    if(userGuess <  winningNumber)
    {
        console.log("too low ");
    }
    else{
        console.log("too high");
    }
}


   