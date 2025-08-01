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

//******************************** let, const, var ********************************
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