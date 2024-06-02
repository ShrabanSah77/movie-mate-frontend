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

const gen = "o";
switch (true) {
  case gen === "m":
    console.log("you are male");
    break;
  case gen === "f":
    console.log("you are female");
    break;
  case gen === "o":
    console.log("you are third gender");
    break;
  default:
    console.log("something went wrong");
}
