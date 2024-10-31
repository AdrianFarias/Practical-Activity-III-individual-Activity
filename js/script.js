
/*Declare firstName, lastName, country, city, age, isMarried, year variable and 
assign value to it and use the typeof operator to check different data types*/
let firstname = "Adrian";
let lastname = "Farias"; 
let country = "Mexico";
let city = "Playa del carmen";
let age = 20;
let ismarried = false;
let year = 2024;

console.log(typeof firstname); // string
console.log(typeof lastname); // string
console.log(typeof country); // string
console.log(typeof city); // string 
console.log(typeof age); // number
console.log(typeof ismarried); // boolean
console.log(typeof year); // number


//Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false

//Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false


/*Boolean value is either true or false. 
a. Write three JavaScript statements which provide truthy value. */
console.log(20 > 5); // true
console.log(70 > 20); // true
console.log(100 > 99); // true

/*b. Write three JavaScript statements which provide falsy value.  */
console.log(20 < 5); // false
console.log(70 < 20); // false
console.log(100 < 100); // false



/*Figure out the result of the following comparison expression first without 
using console.log(). After you decide the result confirm it using console.log()*/
console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4);  // true
console.log(4 === 4); // true
console.log(4 != 4);  // false
console.log(4 !== 4); // true
console.log(4 != '4'); // true
console.log(4 == '4'); // false
console.log(4 === '4'); // false


/* Use the Date object to do the following activities 
a. What is the year today? 
b. What is the month today as a number? 
c. What is the date today? 
d. What day is today as a number? 
e. What are the hours now? 
f. What are the minutes now? 
g. Find out the numbers of seconds elapsed from January 1, 1970, to 
now.*/
const now = new Date()
console.log(now.getFullYear()) // What is the year today? 
console.log(now.getMonth()) //  What is the month today as a number? 
console.log(now.getDate()) // What is the date today?
console.log(now.getDay()) // What day is today as a number?
console.log(now.getHours()) // What are the hours now? 
console.log(now.getMinutes()) // What are the minutes now?
console.log(now.getTime()) //Find out the numbers of seconds elapsed from January 1, 1970, to now


/*Write a script that prompts the user to enter base and height of the triangle 
and calculate an area of a triangle (area = 0.5 x b x h)*/
let base = prompt('enter base')
let height = prompt('enter height')
let area = 0.5 * base * height
console.log('the area of the triangle is ' + area)


/*Write a script that prompts the user to enter side a, side b, and side c of the 
triangle and calculate the perimeter of triangle (perimeter = a + b + c) */
let a = Number(prompt('enter side a'))
let b = Number(prompt('enter side b')) 
let c = Number(prompt('enter side c'))
let perimeter = a + b + c
console.log('the perimeter of the triangle is ' + perimeter)