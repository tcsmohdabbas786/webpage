    //1. ways to print in javascript

    // alert("me")
    //document.write("this is document write");

    //javascript console api

    console.log("hello world");
    console.warn("this is warning");
    console.error("this is error");

    // 3. javascript variables

    // what are variable? - containers to store data values
    var number1=34;
    var number2=50;
    console.log(number1+number2);

    // 4. data type in javascript

    // Numbers
    var num1=50;
    var num2=15.5;

    //String
    var str1="this is a string";
    var str2='this is also a string';

    //objects
    var marks={
        mohd:90,
        rahul:95,
        rohit:50,
    }
    console.log(marks);

    // Booleans
    var a = true;
    var b = false;
    console.log(a,b);

    // var und = undifined;
    var und;
    console.log(und);

    var n = null;
    console.log(n);

    /*
    1. primitive data types: undifined,null,number,string,boolean,symbol
    2. reference data types: arrays and objects
    */

    var arr=[2,3,4, "mohd" ,5,6,7];
    console.log(arr);

    // oprators in javascript
    // arithmetic opratures

    var a = 30;
    var b = 50;
    console.log("the value of a+b is",a+b);
    console.log("the value of a-b is",a-b);
    console.log("the value of a*b is",a*b);
    console.log("the value of a/b is",a/b);

    // assignment operators
    var c = b;
    c+=40;
    console.log(c);

    // comparison oprators
    var x=50;
    var y=90;
    console.log(x==y);
    console.log(x<=y);
    console.log(x>=y);
    console.log(x<y);
    console.log(x>y);

    // logical not
    console.log(true && true);
    console.log(true && false);
    console.log(false && false);

    console.log(true || true);
    console.log(true || false);
    console.log(false || false);
    console.log(false || true);

    //logical not
    console.log(!false);
    console.log(!true);

    //function in javascript
    // DRY = Do not repeat yourself
    function avg(a,b)
    {
        c=(a+b)/2;
        return c;
    }
    c1=avg(4,6);
    c2=avg(40,60);
    console.log(c1,c2);

    // conditionals in javascript
    var age=41;
    if(age>32)
    {
        console.log("you are not kid");
    }
    else if(age>26)
    {
        console.log("you are a kid");
    }
    else if(age>22)
    {
        console.log(" yes you are a kid");
    }
    else if(age>18)
    {
        console.log(" 40 you are a kid");
    }
    else{
        console.log("bachhe rahe");
    }
    console.log("end of lader");

    var arr=[2,3,4,5,8,6,7];
    console.log(arr);
    for(var i=0; i<arr.length; i++)
    {
        console.log(arr[i]);
    }

    var arr=[2,3,4,5,8,6,7];
    arr.forEach(function(element)
    {
        console.log(element);
    })

    var arr=[2,3,4,5,8,6,7];
    let j=0;
    while(j<arr.length)
    {
        console.log(arr[j]);
        j++;
    }

    var arr=[2,3,4,5,8,6,7];
    let p=6;
    do{
        console.log(arr[p]);  
        p++;
    }
    while(p<arr.length);

    var arr=[2,3,4,5,8,6,7];
    for(var i=0; i<arr.length; i++)
    {
        if(i==2)
        {
            break;
           // continue;
        }
        console.log(arr[i]);
    }

    let myArr=["fan","mohd",34,null,true];
    console.log(myArr.length);
    myArr.pop();
    myArr.push("abbas");
    console.log(myArr);


    let myArr1=["fan","mohd",34,null,true];
    console.log(myArr1.length);
    const newLen=myArr1.unshift("harry");
    console.log(newLen);
    console.log(myArr1);

    // string methods in javascript
    // let mystring="mohd is a very good boy good good";
    // console.log(mystring.length);
    // console.log(mystring.indexOf("good"));
    // console.log(mystring.lastIndexOf("good"));
    // console.log(mystring.slice(5,6));
    //d=mystring.replace("mohd","rohan");
    // d=d.replace("good","bad");
    // console.log(d,mystring);

    let myDate=new Date();
    // console.log(myDate.getTime());
    // console.log(myDate.getFullYear());
    // console.log(myDate.getDay());
   

// dom manipulaction
let elem = document.getElementById("click");
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
//elemClass[0].style.backgound="yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
// elemClass[0].classList.remove("text-success");
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);

tn=document.getElementsByTagName("div");
console.log(tn);
createdElement=document.createElement("p");
createdElement.innerText="this is a created para";
tn[0].appendChild(createdElement);
createdElement2=document.createElement("b");
createdElement2.innerText="this is a created bold";
tn[0].replaceChild(createdElement2, createdElement);

// selecting using query
sel=document.querySelector(".container");
console.log(sel);
sel=document.querySelectorAll(".container");
console.log(sel);

function clicked()
{
    console.log("the button was clicked");
}
// window.onload=function()
// {
//     console.log("the document was clicked");
// }

// events in javascript
// firstContainer.addEventListener("click",function(){
//     console.log("clicked on container")
// })

// firstContainer.addEventListener("mouseover",function(){
//     console.log("mouse on container")
// })


// firstContainer.addEventListener("mouseout",function(){
//     console.log("mouse out of container")
// })

// firstContainer.addEventListener("mouseup",function(){
//     console.log("mouse up when clicked on container")
// })

// firstContainer.addEventListener("mousedown",function(){
//     console.log("mouse down when clicked on container")
// })

//arrow function

// summ=(a,b)=>{
//     return a+b;
// }

// json
obj={name:"harry",length: 1}
jso=JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);      
