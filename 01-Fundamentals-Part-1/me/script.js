//******************************** 1-5 variables ********************************
// naming convention
/*
let firstNamec = "ali";
let $lastName = "ghaderi pour";

let PI = 3.14

console.log("🚀 ~ lastName:", $lastName);
let lastName$reza = "karim";
console.log("🚀 ~ lastName$reza:", lastName$reza);

*/

//******************************** 1-7 data types ********************************
/*
// dynamic typing
let jsIsFun = true
console.log(jsIsFun)

jsIsFun = 'of course!'
console.log(jsIsFun)


console.log(typeof true)
console.log(typeof jsIsFun)
console.log(typeof 123)
console.log(typeof 'ali')
console.log('type of null is : ', typeof null )  //type of null is not object, its a bug in js

*/

//******************************** 1-8 let, const, var ********************************
/*
//you can mutate variables declared with let
let myName;
myName = 'ali'
console.log(myName)

// you cannot mutate the const
const PI = 3.14
/*
PI = 3;
console.log(PI) 
script.js:36 Uncaught TypeError: Assignment to constant variable.
    at script.js:36:4 */


// you cannot declare const without assigning it a value
/*    
const myBirthYear;
myBirthYear = 1991
Uncaught SyntaxError: Missing initializer in const declaration (at script.js:44:7)
*/

//******************************** 1-9 basic operators ********************************
/*
// concatination with plus operator
const firstName = 'Ali'
const lastName = 'Ghaderi Pour'
console.log(firstName, ' ', lastName)

//assignment operator
let x = 10 + 5;
x +=10   //x = x + 10
x++ //x = 26

 
//comparison operator   >> to produce boolean values
console.log(12 > 14 ) //either false or true

const currentYear = 2025
const aliBirthYear = 1991
const isAdult = currentYear - aliBirthYear >= 18;
console.log(isAdult)

console.log(currentYear - aliBirthYear  >=18)
*/
//******************************** 1-10 operator precedence ********************************
/*
let x, y
x = y = 25 -10 -5
console.log(x, y)

// grouping  () has higher priority than division
let averageAge;
console.log(averageAge = (32-24)/2)
*/

//******************************** 1-14 strings and template literals. ********************************
/*
// we use template literals to create strings
const firstName = 'Ali'
const job = 'programmer'
const birthYear = 1991

const ali = "I'm" + ' ' + firstName + ' ' + 'and my job is' + ' '+  job +  ' ' + 'and I was born in' +' ' + birthYear + ' .'
console.log(ali)
// this is not a good way
// we use template literals

const aliNew = `I'm ${firstName} and my job is ${job} and I was born in ${birthYear} .`
console.log(aliNew)

const reglularString = `just a regular string`
console.log(reglularString)

const multipleLineString = `just multiple \n\line\n\string`
console.log(multipleLineString)
*/
//******************************** 1-15 Taking Decision if else statement ********************************
/*
const sarahAge = 12
const isOldEnough = sarahAge >=18

if (isOldEnough) {
    console.log(`Sarah can start driving license👍, because sarah is ${sarahAge} .`)
}
else{
    console.log(`Sarah cannot start driving license , because sarah is ${sarahAge} .`)
}
*/

//******************************** 1-18 Type conversion and coersion ********************************
//type conversion is when we manually convert from one type to another.
//type coersion is when js autimatically converts types behind the scene for us, that's necessary in
//some situation but it happens implicitly, completely hidden from us

let inputYear = '1991'
console.log(inputYear + 18)
// we get the result 199118 which is even a string
// we need a string

inputYear = Number(inputYear)
console.log(inputYear + 18)


console.log(Number('ali')) //we get NaN (not a number) NaN is (not a  number)
//NAN is a aslo a number
console.log(typeof NaN)

console.log(String(123), typeof String(123)) 

// javascript has 3 convert types : String, Number and Boolean
// we cannot conver to null or undefined 
