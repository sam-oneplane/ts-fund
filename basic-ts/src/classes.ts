class Coder {
    protected _lang! : string // un init class member
    private _age : number
    public _music : string
    private _dataState: string[]

    constructor(public readonly name: string, age: number, music: string = 'rock' ) {
        this.name = name,
        this._age = age,
        this._music = music
        this._dataState = [] 
    }

    public set lang(lang : string) {
        this._lang = lang;
    }

    public get lang(): string {
        return this._lang
    }

    public get age(): number {
        return this._age;
    }

    public get data(): string[] {
        return this._dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this._dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number,
    ) {
        super(name, age, music)
        this.computer = computer
    }

    public set lang(lang : string) {
        this._lang = lang;
    }

    public get lang(): string {
        return this._lang
    }
}

const dave = new Coder("Dave", 42, "classic");
dave.lang = "typescript";
console.log(dave);
console.log(dave.lang)
const sam = new WebDev("Mac", "Sam", "pop", 53)
console.log(sam.name)
sam.lang = "javascript";
console.log(sam.lang)



// Using interface
interface Musician {
    name: string,
    _instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    _instrument: string

    constructor(name: string, instrument: string) {
        this.name = name
        this._instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this._instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))


// Static
class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public _id: number
    public _name: string

    constructor(name: string) {
        this._name = name
        this._id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy._id)
console.log(Steve._id)
console.log(John._id)
console.log(Peeps.count)