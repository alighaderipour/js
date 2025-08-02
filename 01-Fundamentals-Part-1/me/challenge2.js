/*
CHALLENGE #1
Instructions
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / (height * height) (mass in kg and height in meters).


Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

Test(s)
Test 1
// /* Helpers */
// Array.prototype.includesAll = function(...values) {
//   for (const value of values) {
//     if (!this.includes(value)) return false;
//   }

//   return true;
// };

// String.prototype.includesAll = function(...values) {
//   for (const value of values) {
//     if (!this.includes(value)) return false;
//   }

//   return true;
// };

// Array.prototype.includesSomeVariationOf = function(...values) {
//   return this.some((str) => str.includesAll(...values));
// };

// /* Helpers specific to this challenge logic */
// function calcBMI(mass, height) {
//   return mass / (height * height);
// }

// /* Tests */
// describe('Challenge #1', function() {
//   const TEST_DATA_1 = {
//     BMIMark: calcBMI(78, 1.69),
//     BMIJohn: calcBMI(92, 1.95)
//   };

//   const TEST_DATA_2 = {
//     BMIMark: calcBMI(95, 1.88),
//     BMIJohn: calcBMI(85, 1.76)
//   };

//   it('should log the correct values of BMI for either TEST DATA 1 or TEST DATA 2', function() {
//     const output = consoleOutput.loggedMessages;
//     const message = `The logged values of BMI should be either ${TEST_DATA_1.BMIMark} and ${TEST_DATA_1.BMIJohn} for TEST DATA 1 or ${TEST_DATA_2.BMIMark} and ${TEST_DATA_2.BMIJohn} for TEST DATA 2`;

//     const conditions = [
//       output.includesSomeVariationOf(TEST_DATA_1.BMIMark, TEST_DATA_1.BMIJohn) || output.includesAll(TEST_DATA_1.BMIMark, TEST_DATA_1.BMIJohn),
//       output.includesSomeVariationOf(TEST_DATA_2.BMIMark, TEST_DATA_2.BMIJohn) || output.includesAll(TEST_DATA_2.BMIMark, TEST_DATA_2.BMIJohn),
//       output.includesSomeVariationOf(TEST_DATA_1.BMIMark, TEST_DATA_1.BMIJohn, TEST_DATA_2.BMIMark, TEST_DATA_2.BMIJohn) || output.includesAll(TEST_DATA_1.BMIMark, TEST_DATA_1.BMIJohn)
//     ];

//     since(message)
//       .expect(conditions.some(condition => condition))
//       .toBe(true);
//   });
// });

let massMark  = 78 ;
let heightMark = 1.69;
let massJohn  = 92;
let heightJohn =1.95;
let BMIMark = massMark /(heightMark * heightMark);
let BMIJohn = massJohn / ( heightJohn * heightJohn);
let markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn} BMI`)
else console.log(`John's BMI  ${BMIJohn} is higher than Mark's  ${BMIMark} BMI`)

massMark  = 95 ;
heightMark = 1.88;
massJohn  = 85;
heightJohn =1.76
BMIMark = massMark /(heightMark * heightMark);
BMIJohn = massJohn / ( heightJohn * heightJohn);
markHigherBMI = BMIMark > BMIJohn;
if (BMIMark > BMIJohn) console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn} BMI`)
else console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} BMI`)