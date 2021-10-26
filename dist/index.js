"use strict";
// Basic Types
let id = 5;
let company = "My Company";
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, "three", true];
//Tuple
let person = [1, "Pooja", true];
let employee;
employee = [
    [1, "Pooja"],
    [2, "Pratik"]
];
// Union
let identifier = 22;
identifier = '22';
// Enum
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "Up";
    Direction1["Down"] = "Down";
    Direction1["Left"] = "Left";
    Direction1["Right"] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
// Objects
const user = {
    id: 1,
    name: "Pooja"
};
const userTwo = {
    id: 2,
    name: "Pratik"
};
// Type Assertion
let cid = 1;
let customerId = cid;
//or
let customerIdTwo = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
console.log(addNum(1, 4));
log("hiiiii");
const user1 = {
    id: 2,
    name: "Pratik"
};
user1.age = 33;
const p1 = 'one';
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const pooja = new Person(1, "pooja");
console.log(pooja.register());
class PersonNew {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp1 = new Employee(1, "pooja", "developer");
console.log(emp1.register());
console.log(emp1.position);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["jack", "jill", "john"]);
numArray.push("one"); // this will accept string since we have type any.
function getGenericArray(items) {
    return new Array().concat(items);
}
let genNumArray = getGenericArray([1, 2, 3, 4]);
let genStrArray = getGenericArray(["jack", "jill", "john"]);
// getGenericArray.push("one")  //this is now not allowed
