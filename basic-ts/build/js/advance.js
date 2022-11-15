"use strict";
// Index Signatures 
const todaysTransactions = {
    Adi: -10,
    Sgi: -5,
    Appl: 23,
    Ggle: 20
};
let prop = 'Appl';
console.log(todaysTransactions[prop]); // 23
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
/*
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`) // assertion of keys
}
*/
Object.keys(student).map(key => {
    console.log(student[key]); // assertion in map
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
