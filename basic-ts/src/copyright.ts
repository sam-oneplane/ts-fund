// Original JS code
// const year = document.getElementById("year")
// const thisYear = new Date().getFullYear()
// year.setAttribute("datetime", thisYear)
// year.textContent = thisYear


// 2nd variation: (with Type Assertion)
const year = document.getElementById("year") as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
console.log(thisYear);
year.setAttribute("datetime", thisYear)
year.textContent = thisYear