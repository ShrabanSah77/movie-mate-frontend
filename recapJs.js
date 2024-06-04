// JS
console.log("Hello world");

// 3 types of variable

// 1. var
// 2. let
// 3. const

// ES5 version
//var person = "shraban sah";

//ES6

// updated version

// In ES5

// let person = "shraban sah";
// person = "ram";
// console.log({person});

// In ES6

// const person = "shraban sah";
// person1 = "ram"; (you can't define same class twice or more)
// console.log({ person, person1 });

// person = "shraban sah";
// var person;
// console.log({ person });

// what is Hoisting?

// ANS: the process whereby the interpreter appears to move
// the declaration of functions, variables, classes, or imports to
// the top of their scope, prior to execution of the code.

// 1. Statement.

// if ((gender = "m")) {
//   console.log("You are Male");
// } else {
//   console.log("you are female");
// }

// 3 or more

/*
switch(){
    case:
    default:
}
*/

// Switch case use for conditional checking.
// const gen = "q";
// switch (true) {
//   case gen === "m":
//     console.log("you are male.");
//     break;
//   case gen === "f":
//     console.log("you are female.");
//     break;
//   case gen === "o":
//     console.log("you are third gender.");
//     break;
//   default:
//     console.log("something went wrong.");
// }

// Q1. write a js function for (otp code has been sent to 9869800209
// in (98...209) form)

// We can use padStart method.

// const str = "9869800209";
// if (str.length === 10) {
//   const last3Digits = str.slice(-3);
//   const replacedData = last3Digits.padStart(str.length, "*");
//   console.log({ replacedData });
// } else {
//   console.log("Invalid Number");
// }

// Q2. Lets try padStart and padEnd method .

// Input 12365478963215587sdhsdgjsksbfsi
// Output 123....bfs

// const str = "12365478963215587sdhsdgjsksbfs";
// if (str.length === 30) {
//   const first2Digits = str.slice(0, 3);
//   const last3Digits = str.slice(-3);
//   const replacedData = first2Digits.padEnd(2);
//   const replacedData1 = last3Digits.padStart(8, "*");
//   console.log(`${replacedData}${replacedData1}`);
// } else {
//   console.log("Invalid numbers");
// }

// Ternary Operator

// Q1.1 Firt Question in ternary Operator

// const str = "9869800209";
// const result =
//   str.length === 10
//     ? console.log(str.slice(-3).padStart(str.length, "*"))
//     : console.log("Invalid Number");

// Q2.1 Second question in ternary Operator

// const str = "12365478963215587sdhsdgjsksbfs";
// const result =
//   str.length === 30
//     ? console.log(
//         `${str.slice(0, 3).padEnd(2)}${str.slice(-3).padStart(8, "*")}`
//       )
//     : console.log("Invalid numbers");

// Q3. Write a function to check fi the number is even or odd?

// const num = prompt("Enter a number");
// if (num % 2 == 0) {
//   console.log("The number is even");
// } else {
//   console.log("the number is odd");
// }

// Write a js function that convert full name to proper case

// const properName = (name) =>
//   name
//     .split(" ")
//     .map(
//       (word) =>
//         word.slice(0, 1).toUpperCase() +
//         word.slice(1, word.length).toLowerCase()
//     )
//     .join(" ");
// console.log(properName("shraban kumar sah"));

// Write a js function to check if the phone number is Nepal mobile number or not?

const nepalNumber = (number) =>
  number.length === 10 && number.match(/9[8|7]/gi) ? true : false;

console.log(nepalNumber("9869800209"));

// Write the factorial of 5

// function factorialize(num) {
//   if (num < 0) return -1;
//   else if (num == 0) return 1;
//   else {
//     return num * factorialize(num - 1);
//   }
// }
// factorialize(5);
// console.log(factorialize);

// write the fibonacci series for nth Number

// function fib(n) {
//   let a = 0,
//     b = 1,
//     c,
//     i;
//   if (n == 0) return a;
//   for (i = 2; i <= n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }
// let n = 9;
// document.write(fib(n));

// Driver code
