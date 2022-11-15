// Index Signatures 

interface TransactionObj { // key/value interface
    readonly [index: string]: number // key is string value is number
    Ggle: number,
}

const todaysTransactions: TransactionObj = {
    Adi: -10,
    Sgi: -5,
    Appl: 23,
    Ggle: 20
}

let prop: string = 'Appl'
console.log(todaysTransactions[prop]) // 23

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))

interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[] //optional
}

const student: Student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
} 
/*
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) // assertion of keys
}
*/
Object.keys(student).map(key => {
    console.log(student[key as keyof Student]) // assertion in map
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student, 'name')

// Records
type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number|string> // can use string as keys

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}

for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue as keyof Incomes])
}