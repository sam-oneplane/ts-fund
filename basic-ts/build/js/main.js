"use strict";
/* BASIC TYPES */
let username = "sam";
console.log(username);
let a = 6;
let b = '2';
let c = true;
let d = "wow"; // any type of value
let e; // union like c
d = 42; // legal
let re = /\w+/g;
console.log(6 / Number(b));
/* ARRAYS */
let arr0 = ['foo', 'hoo', 'yoo', 3];
let arr1 = ['moo', 'doo', 2];
// alloc
let arr2 = new Array();
let arr3 = new Array();
// assertion
let arr4 = [];
let arr5 = new Array();
let arr6 = Array();
let arr7 = [];
let arr8 = new Array();
let arr9 = Array();
let arr10 = Array();
arr0.push('moo');
arr0[5] = 4;
arr0.unshift('goo');
console.log(arr0);
// TUPLES : strict datatype array
let tup0 = ["samuel", "moore", 53];
let arr11 = tup0;
console.log(arr11);
// tup0 = arr11; not allowed different type 
// OBJECTS :
let obj0;
obj0 = [];
obj0 = {};
let obj1 = {
    firstName: "Sam",
    lastName: "MAsh",
    age: 53,
    desc: function () {
        var _a;
        return `hello ${this.firstName} ${(_a = this.lastName) === null || _a === void 0 ? void 0 : _a.toLowerCase()} how are you ?`;
    }
};
let person = (p) => {
    return `hello ${p.firstName} how are you ?`;
};
console.log(person(obj1));
console.log(obj1.desc());
let obj2 = {
    firstName: "libby",
    lastName: "mash",
    age: 12,
    desc: function () {
        return `hello ${this.firstName} ${this.lastName} how are you ?`;
    }
};
console.log(obj2.desc());
// ENUMS :  added in typescript at run time 
//          it is not a type-level addition to java-script
var Steak;
(function (Steak) {
    Steak[Steak["R"] = 1] = "R";
    Steak[Steak["MR"] = 10] = "MR";
    Steak[Steak["M"] = 11] = "M";
    Steak[Steak["MW"] = 100] = "MW";
    Steak[Steak["W"] = 111] = "W";
    Steak[Steak["WD"] = 1000] = "WD";
})(Steak || (Steak = {}));
// literal type
let user;
user = "dave";
/* FUNCTIONS */
let sum = (a, b) => {
    return a + Number(b);
};
console.log(sum(14, '17'));
let p_sum = (a, b) => {
    console.log(a + b);
};
let mul = function (x, y) {
    return x * y;
};
let mod = (x, y) => x % y;
console.log(mul(18, 4));
console.log(mod(18, 4));
// optional has to be last parameter
const addAll = (x, y, z) => {
    if (typeof z !== 'undefined') {
        return x + y + z;
    }
    return x + y;
};
console.log(addAll(18, 4, 2));
console.log(addAll(18, 4));
// Rest Parameters
const total = (x, ...nums) => {
    return x + nums.reduce((sum, curr) => sum + curr);
};
console.log(total(4, 5, 3, 17));
// Never type in case of error function and infinite loops
const throwErr = (errMsg) => {
    throw new Error(errMsg);
};
const isNumber = (x) => {
    return typeof x === 'number' ? true : false;
};
console.log(isNumber('5'));
console.log(throwErr('fuck'));
// Assertion in DOM
let img = document.querySelector('img'); // not a null object (HTMLImageElement)
let myImg = document.getElementById('#img');
let newImg = document.getElementById('#img');
img.src;
myImg.src;
newImg.src; // does not work for react 
