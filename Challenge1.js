// ### Challenge 1: Create an Age Calculator

// Store your birth year in a variable.<br>
// Store a future year in another variable. <br>
// Calculate your possible ages for the future year and display it in the console. <br>
// Example: If you were born in 1988, then in 2026 you’ll be 37 or 38 (depending on the month in 2026).

//https://www.w3schools.com/js/js_dates.asp
//https://www.w3schools.com/js/js_date_methods.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

const date = new Date();
const month = date.toLocaleString('default', { month: 'long' });

let ageCal = (myBirthYear , futureYear) => {
    console.log(    `Your Birth Year is ${myBirthYear}
The year that you want to calculate ${futureYear}
Your ages are ${futureYear - myBirthYear} years old or ${futureYear - myBirthYear-1} years old if you born before ${month}`);


};

ageCal(1988,2026);
