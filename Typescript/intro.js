"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var msg = "John watt!!";
console.log(msg);
//let msg:string = "hello";  // we can not same name variable multiple time ts does not allow it even it allowed in js.
var x = 10;
var title = "codevalution";
//const z;   // this is not allowed u must first initialized variable if its const
// by this we can achive less bugs in our code
// Variable Types
var isBeginner = true; // boolean
var value = 44; //number 
var name = "Vishwas"; //string
var sentence = "My name is ".concat(name, " and i am learning ts");
console.log(sentence);
var n = null; // null
var u = undefined; //undefined 
var isNew = null;
var myName = undefined;
// array
var list1 = [1, 2, 2]; // syntax 1 for declaring array in ts
var list2 = [1, 2, 3, 4]; // syntax 2 for  declaring array in ts
// tuple in ts
var person1 = ["charis", 23]; // must follow sequance here as it given
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c);
//any type
var randomValue = 10;
console.log("now value is " + randomValue);
randomValue = true;
console.log("now value is " + randomValue);
randomValue = "vishwas";
console.log("now value is " + randomValue);
// unknown
var myvariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj == "object" &&
        name in obj;
}
if (hasName(myvariable)) {
    console.log(myvariable.name);
}
//myvariable();  this an error
//(myvariable as string).toUpperCase(); // need to do this 
//multi type variable or union types
var multiType;
multiType = 20;
multiType = true;
//multiType ="as" //will showe error becasue only accepts number and boolean values; 
//Functions In TypeScript
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
//add(5,'10') /// this shows error because parameter must be of number type only
// Function with optional paramerter
function mul(num1, num2) {
    if (num2) {
        return num1 * num2;
    }
    else
        return num1;
}
mul(5); // as num2 is optional it does not show error
//Interfaces
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
var batman = {
    firstName: 'Bruce',
    lastName: 'Wayne',
    age: 23,
    job: "Batman",
    address: 'Wayne Manner',
    city: "Gotham" // even if i remove this property then it will not show error because in actual interface its optional property
};
function Info(person) {
    console.log(person.firstName + " " + person.lastName + " " + person.job + " " + person.address + " " + person.city);
    console.log(person);
}
Info(batman);
//Class In TypeScript
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.emplyoeName = name;
    }
    Employee.prototype.greeting = function () {
        console.log("Hello " + this.emplyoeName + "!!");
    };
    return Employee;
}());
var emp1 = new Employee("mark");
console.log(emp1.emplyoeName);
emp1.greeting();
//inheritance and access modifires (public private protected)
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        var _this = _super.call(this, managerName) || this;
        _this.managerName = managerName;
        return _this;
    }
    Manager.prototype.work = function () {
        console.log("".concat(this.managerName, " is manager and he giving work to u"));
    };
    return Manager;
}(Employee));
var m1 = new Manager("Chris");
m1.greeting();
m1.work();
