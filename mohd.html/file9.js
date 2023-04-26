console.log(this);
console.log(window);
console.log(firstName);
console.log(myFunction);
myFunction();
console.log(fullName);

function myFunction()
{
    console.log("this is my function");
}

var firstName="mohd";
var lastName="Abbas";
var fullName=firstName+""+lastName;
console.log(fullName);

var myFunction=function()
{
    console.log("this is my function");
}
console.log(myFunction);

var firstName="mohdAbbas";
console.log(firstName);

let foo="foo";
console.log(foo);
function getFullName(firstName,lastName)
{
    console.log(arguments.length);
    let myVar="var inside func";
    console.log(myVar);
    const fullName=firstName+""+lastName;
    return fullName;
}
const personName=getFullName("Mohd","abbas");
console.log(personName);

//const cube = myFunction(3);
//const ans2 = cube(3);
//console.log(ans2);

// function myFunction(power)
// {
//    return function(number)
//    {
//     return number ** power
//    }
// }
// const square=myFunction(2);
// const ans=square(3);
// console.log(ans);

// function myFunction()
// {
//     let counter=0;
//     return function()
//     {
//         if(counter<1)
//         {
//             console.log("hii you called me");
//             counter++;
//         }
//         else
//         {
//             console.log("mai already ek bar call ho chuka hoon");
//         }
//     }
// }
// const myFunction = func();
// myFunction();
// myFunction();
// const myFunction2=func();
// myFunction2();
// myFunction2();

