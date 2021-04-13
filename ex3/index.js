const currentDate = require("moment");

console.log (currentDate().format('ddd, MMM Do YYYY'));
console.log(currentDate("1976-11-26", "YYYY, MMM Do").fromNow());