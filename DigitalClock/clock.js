let date = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
let day = days[date.getDay()];


document.getElementById("day").innerHTML = 'Today is ' + day;
document.getElementById("date").innerHTML = date;

console.log(date)
console.log(day)