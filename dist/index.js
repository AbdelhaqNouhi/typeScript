"use strict";
// Basic types
let id = 5;
let user = "abdelhaq";
let isHere = true;
let x = "hello";
let age = 24;
let ids = [1, 2, 3, 4, 5];
let arr = [1, 'nouhi', true];
// Tuple
let person = [1, 'anouhi', false];
// Typel array 
let employee;
employee = [
    [1, 'med'],
    [2, 'brahim'],
    [3, 'hala']
];
// Union 
let ref;
ref = 33;
ref = '33';
// functions
function addnumber(x, y) {
    return x + y;
}
console.log(addnumber(5, 6));
const user2 = {
    id: 1,
    name: 'gaba',
};
const add = (x, y) => x + y;
const sub = (x, y) => x + y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const brad = new Person(1, 'brad ziani');
const mike = new Person(2, 'mike gaba');
//  sub class 
class Client extends Person {
    constructor(id, name, point) {
        super(id, name);
        this.point = point;
    }
}
const p = new Client(3, 'abdelhaq', 'Developer');
// console.log(p);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3]);
let strArray = getArray(['hala', 'gaba', 'nouhi']);
numArray.push(8);
console.log(numArray);
