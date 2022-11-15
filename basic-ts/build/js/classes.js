"use strict";
class Coder {
    constructor(name, age, music = 'rock') {
        this.name = name;
        this.name = name,
            this._age = age,
            this._music = music;
        this._dataState = [];
    }
    set lang(lang) {
        this._lang = lang;
    }
    get lang() {
        return this._lang;
    }
    get age() {
        return this._age;
    }
    get data() {
        return this._dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this._dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, age, music);
        this.computer = computer;
        this.computer = computer;
    }
    set lang(lang) {
        this._lang = lang;
    }
    get lang() {
        return this._lang;
    }
}
const dave = new Coder("Dave", 42, "classic");
dave.lang = "typescript";
console.log(dave);
console.log(dave.lang);
const sam = new WebDev("Mac", "Sam", "pop", 53);
console.log(sam.name);
sam.lang = "javascript";
console.log(sam.lang);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this._instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this._instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
// Static
class Peeps {
    constructor(name) {
        this._name = name;
        this._id = ++Peeps.count;
    }
    static getCount() {
        return Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy._id);
console.log(Steve._id);
console.log(John._id);
console.log(Peeps.count);
