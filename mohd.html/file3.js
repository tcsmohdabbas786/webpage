//for loop 
    //print 0 to 9

    for(let i=0; i<=9; i++)
    {
        console.log(i);
    }

    for(var i=0; i<=9; i++)
    {
        console.log(i);
    }
    console.log("value of i is",i);

    let total = 0;
    let num = 10;
    for(let i=1; i<=num; i++)
    {
        total=total+i;
    }
    console.log(total);
   
    //break keyword
    //continue keyword

    for(var i=1; i<=10; i++){
        if(1==4){
            breaak;
        }
        console.log(i);
    }
    console.log("hellow dear");

    //do while loop

    let = 9;
    do{
        console.log(i);
        i++;
    }
    while(i<=9);
    console.log("value of i is",i);

    //intro to arrays
    //reference type
    //how to create arrays

    var fruits=["apple","mango","orange","papaya"];
    console.log(fruits);

    var student=["ram","mohan","sunita","param"];
    console.log(student[3]); //indexing per name

    let mixed = [1,2,3,4, "mohd", null, "undifine"];
    console.log(mixed);

    let Fruits=["apple","mango","orange","papaya"];
    let obj={}; 
    console.log(Fruits);
    Fruits[3]= "banana";
    console.log(Fruits);
    console.log(typeof fruits);
    console.log(Array.isArray(Fruits));
    console.log(Array.isArray(obj));

    //array push pop
    //array shift unshift

    let fruitS=["apple","mango","orange","papaya"];
    console.log(fruitS);
    fruitS.push("banana");
    console.log(fruitS);

    //pop

    let fruit=["apple","mango","orange","papaya"];
    console.log(fruit);
    console.log(fruit.pop());
    console.log(fruit);

    let fRuits=["apple","mango","orange","papaya"];
    console.log(fRuits);
    let poppedfRuits=fRuits.pop();
    console.log(fRuits);
    console.log("popped fRuits is",poppedfRuits);

    //unshift

    let frUits=["apple","mango","orange","papaya"];
    console.log(frUits);
    frUits.unshift("banana");
    frUits.unshift("gawawa");
    console.log( frUits);

    //shift

    let frUIts=["apple","mango","orange","papaya"];
    console.log(frUIts);
    frUIts.shift();
    console.log(frUIts);

    let removedfrUIts=frUIts.shift();
    console.log(frUIts);
    console.log("removed frUIts is ",removedfrUIts );

    let frUITs=["apple","mango","orange","papaya"];
    console.log(frUITs);
    removedfrUITs=frUITs.shift();
    console.log(frUITs);
    console.log(" removed frUITs is", removedfrUITs);

    //primitiv  data type

    let num1 = 6;
    let num2 = num1;
    console.log("value is num1 is",num1);
    console.log("value is num is",num2);
    num1++;
    console.log("after incrimenting num1");
    console.log("value is num1 is",num1);
    console.log("value is num is",num2);

    // reference data type

    let array1=["item1","item2"];
    let array2=array1;
    console.log("array1",array1);
    console.log("array2",array2);
    array1.push("item3");
    console.log("aafter pushing element to array 1");
    console.log("array1",array1);
    console.log("array2",array2);

    //how to clone array
    //how to concatenation two arraay

    let array3=["item1","item2"]; 
    let array4=array3;
    console.log(array3===array4);

    let array5=["item1","item2"]; //clone 1st method
    let array6=["item1","item2"];
    //let array6=array5.slice(0).concat(["item3","item4"]);//second array mai extra itam add
    array5.push("item3");
    console.log(array5===array6);
    console.log(array5);
    //console.log(array6);

    let array7=["item1","item2"];  //clone 2nd method
    let array8=array7.slice(0);
    //let array8=array7.slice(0).concat(["itam4", "itam5"]);//second array mai extra itam add
    array7.push("item3");
    console.log(array7===array8);
    console.log(array7);
    //console.log(array8);

    let array0=["item1","item2"];  //clone 3rd  method
    let array9=[].concat(array0);
    //let array9=[].concat(array9,"itam4", "itam5"); //second array mai extra itam add
    array0.push("item3");
    console.log(array0===array9);
    console.log(array0);
    //console.log(array9);

    let array10=["item1","item2"];  //clone 4th new way spread oprater
    let array11=[...array10,];
    //let array11=[...array11, "itam4", "itam5"]; //second array mai extra itam add
    array5.push("item3");
    array10.push("item3");
    console.log(array10===array11);
    console.log(array10);
    //console.log(array11);

    let array=["item1","item2"];
    let oneMoreArray=["item1","item2"];
    let array12=[...array,...oneMoreArray];
    array.push("item3");
    console.log(array===array12);
    console.log(array);
    //console.log(array12);

    // for loop in array

    let _fruits = ["apple","mango","orange","papaya"];
    //console.log(fruit1.lenght);
    //console.log(fruit1[fruit1.lenght-1]);
    for(let i=0; i<_fruits.lenght; i++)
    {
        console.log(_fruits[i]);
    }

   
    let fruits3 = ["apple","mango","orange","papaya"]; 
    let fruits2=[];
    for(let i=0; i<fruits3.lenght; i++)
    {
        fruits2.push(fruits3[i].toUpperCase());
    }
    console.log(fruits2);



    //rest peramiter

    
    function myfunc(a,b,...c)
{
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log("c is ",c);
}
myfunc(3,4,5,6,7,8,9);

function addAll(nunber)
{
    let total=0;
    for(let numbe of numbers)
    {
        total=total+number;
    }
    return total;
}
const ans=addAll(1,2,3,4,5);
console.log(ans);

//parm destructuring
//object
//react
const person={
    firstName:"mohd",
    gender:"male",
}
function printDetails(obj)
{
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.age);
}
printDetails(person);


    






