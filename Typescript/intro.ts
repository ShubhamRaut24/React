export{}
let msg = "John watt!!";
console.log(msg);


//let msg:string = "hello";  // we can not same name variable multiple time ts does not allow it even it allowed in js.

let x = 10;
const title = "codevalution";
//const z;   // this is not allowed u must first initialized variable if its const
// by this we can achive less bugs in our code

// Variable Types

let isBeginner : boolean = true; // boolean
let value : number = 44;  //number 
let name: string = "Vishwas"; //string

let sentence : string = `My name is ${name} and i am learning ts`;
console.log(sentence);

let n : null = null // null
let u : undefined = undefined //undefined 

let isNew : boolean = null;
let myName : string = undefined;

// array
let list1: number[] =  [1,2,2]; // syntax 1 for declaring array in ts
let list2: Array<number> = [1,2,3,4] // syntax 2 for  declaring array in ts

// tuple in ts

let person1 : [string , number] = ["charis", 23]; // must follow sequance here as it given

//Enum

enum Color {Red,Green,Blue};
let c :Color =Color.Red;
console.log(c);

//any type

let randomValue : any = 10;
console.log("now value is "+randomValue);
randomValue = true;
console.log("now value is "+randomValue);
randomValue = "vishwas";
console.log("now value is "+randomValue);

// unknown

let myvariable : unknown = 10;

function hasName(obj:any):obj is{name:string}
{
    return !!obj &&
    typeof obj == "object" && 
    name in obj
}
if(hasName(myvariable)){
console.log(myvariable.name);
}
//myvariable();  this an error
//(myvariable as string).toUpperCase(); // need to do this 

//multi type variable or union types

let multiType : number | boolean;
multiType = 20;
multiType = true;
//multiType ="as" //will showe error becasue only accepts number and boolean values; 


//Functions In TypeScript

function add (num1:number, num2:number)
{
    return num1+num2;
}
add(5,10);
//add(5,'10') /// this shows error because parameter must be of number type only

// Function with optional paramerter

function mul(num1:number, num2?:number)
{
   if(num2)
   {
       return num1*num2
   }
   else
   return num1;
}
mul(5);  // as num2 is optional it does not show error

//Interfaces

function fullName(person:{firstName:string, lastName:string})
{
    console.log(person.firstName+" "+person.lastName);
}
let p = {
    firstName : 'Bruce',
    lastName : 'Wayne'
} ;

fullName(p);
// above code is good but what if p obj has lot more info that just full name it has age address number blood group 
// and u have to use that p obj in many function so this will make code very lengthy and clumsy so Solution is 
//INTERFACE

interface Person{
    firstName : string,
    lastName : string,
    age : number,
    job : string,
    address : string,
    city?: string;
}

const batman= {
    firstName : 'Bruce',
    lastName : 'Wayne',
    age : 23,
    job : "Batman",
    address : 'Wayne Manner',
    city: "Gotham" // even if i remove this property then it will not show error because in actual interface its optional property
}

function Info(person :Person)
{
    console.log(person.firstName+" "+person.lastName+" "+person.job+" "+person.address+" "+person.city);
    console.log(person);
}
Info(batman);


//Class In TypeScript

class Employee{
     emplyoeName : string

     constructor(name : string)
     {
         this.emplyoeName = name;
     }

     greeting()
     {
       console.log(`Hello `+this.emplyoeName+"!!");
     }
 }

 let emp1 = new Employee("mark");
 console.log(emp1.emplyoeName);
 emp1.greeting();

 //inheritance and access modifires (public private protected)

 class Manager extends Employee{
     private managerName:string;  // we can not access this outside manager class
     constructor(managerName:string)
    {
        super(managerName);
        this.managerName = managerName;
    }

    work()
    {
        console.log(`${this.managerName} is manager and he giving work to u`);
    }
 }

 let m1 = new Manager("Chris")
 m1.greeting();
 m1.work();