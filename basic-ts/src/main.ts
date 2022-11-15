

/* BASIC TYPES */
let username = "sam";
console.log(username);

let a : number = 6 ;
let b : string = '2' ;
let c : boolean = true;
let d : any = "wow";  // any type of value
let e : string | number ; // union like c
d = 42;  // legal
let re : RegExp = /\w+/g

console.log(6/ Number(b));

/* ARRAYS */
let arr0 : Array<string | number>  = ['foo', 'hoo', 'yoo', 3];
let arr1 : (string | number)[] = ['moo', 'doo', 2];
// alloc
let arr2 : Array<string> = new Array();
let arr3 = new Array<string>();
// assertion
let arr4 = [] as string[];
let arr5 = new Array() as Array<string>;
let arr6 = Array() as string[];
let arr7 = <string[]>[];
let arr8 = <Array<string>> new Array();
let arr9 = <string[]> Array();
let arr10 = Array<boolean>();

arr0.push('moo');
arr0[5] = 4 ;
arr0.unshift('goo');
console.log(arr0);

// TUPLES : strict datatype array
let tup0 : [string, string, number] = ["samuel", "moore", 53];

let arr11 : Array<string|number> = tup0;
console.log(arr11);
// tup0 = arr11; not allowed different type 

// OBJECTS :
let obj0 : object;
obj0 = [] ;
obj0 = {} ;

// type aliases
type Person = {
    firstName: string,
    lastName?: string,  // optional
    age: (number | string),
    desc : Function
}

interface Person2 {  // like class interface
    firstName: string,
    lastName: string,
    age: (number | string),
    desc : Function
}

let obj1 : Person = {
    firstName: "Sam",
    lastName: "MAsh",
    age: 53,
    desc : function() {
        return `hello ${this.firstName} ${this.lastName?.toLowerCase()} how are you ?`
    }
}

let person = (p : Person) => {
    return `hello ${p.firstName} how are you ?`
}
console.log(person(obj1));
console.log(obj1.desc());


let obj2 : Person2 = {
    firstName: "libby",
    lastName: "mash",
    age: 12,
    desc : function(): string {
        return `hello ${this.firstName} ${this.lastName} how are you ?`
    }
}
console.log(obj2.desc());


// ENUMS :  added in typescript at run time 
//          it is not a type-level addition to java-script

enum Steak {
    R=1,
    MR=10,
    M=11,
    MW=100,
    W=111,
    WD=1000,
}

// Type alias and literal

type StrOrNumArr = (string | number)[]  // type alias
type Artist = {
    name: string,
    active?: boolean,
    albums: StrOrNumArr,
}

// literal type
let user : "john" | "dave" | "amy" ;
user = "dave";



/* FUNCTIONS */

let sum = (a : number, b: number | string): number => {
    return a+Number(b);
}
console.log(sum(14,'17'));
let p_sum = (a : number, b: number): void => {
    console.log(a+b);
}

type mathFunc = (a: number, b: number) => number;
let mul : mathFunc = function(x, y) {
    return x*y;
}
let mod : mathFunc = (x,y) => x%y;

console.log(mul(18,4));
console.log(mod(18,4));

// optional has to be last parameter
const addAll = (x: number, y: number, z?:number) : number => {
    if (typeof z !== 'undefined') {
        return x + y + z;
    }
    return x + y;
}
console.log(addAll(18,4,2));
console.log(addAll(18,4));

// Rest Parameters
const total = (x: number, ...nums: number[]): number => {
    return x+nums.reduce((sum, curr) => sum + curr);
} 
console.log(total(4,5,3,17));

// Never type in case of error function and infinite loops
const throwErr = (errMsg: string) : never => {
    throw new Error(errMsg);
}

const isNumber = (x : any) : boolean => {
    return typeof x === 'number' ? true : false ;
}
console.log(isNumber('5'));
console.log(throwErr('fuck'));


// Assertion in DOM

let img = document.querySelector('img')! ; // not a null object (HTMLImageElement)
let myImg = document.getElementById('#img') as HTMLImageElement;  
let newImg = <HTMLImageElement> document.getElementById('#img');
img.src;
myImg.src;
newImg.src; // does not work for react 

