// the first version details all the individual actions that make up the cooking process. The second breaks down the recipe

// Our code so has mimicked the first example ( in that it's been very literal), but it's time to start modularizing our example into sub - steps so we can re-use bits and pieces needed. In Javascript, these sub - steps are called functions!

// ===  Functions ===

// A function s a group of instructions that performs a particular task.

// function sayHello() {
//     console.log("Hello!");
// }

// console.log("Start of program");
// sayHello()


// the keyword return indicates that a return value will be given, which is specified mmediately after the word.

// function sayHello() {
//     return "Hello!";
// }

// console.log("Start of program");
// let result = sayHello();
// console.log(result);
// console.log("End of program");

// ===
// Declare myFunction
// function myFunction() {
// calculate return value
//  ...
// return returnValue;
// }

// Get return value from myFunction
// var value = myFunction();
//  ...

// ===

// function message() {
//     return "Good Morning!";
// }

// let result = message();
// console.log(result);

// function sayHello(name) {
//     var message = "Hello, " + name + "!";
//     return message;
// }

// console.log(sayHello("IZZI"));

// ------------------------------------------------

// function sayHello(firstName,lastName) {
//     var message = "Hello, " + firstName + " " + lastName + "!";
//     return message;
// }

// console.log(sayHello("Ismet","Samsodien"));

// ------------------------------------------------

// var name = "Hello There Javascript \nis not Java!".length;

// console.log(name);

// ----------------------------------------------

var animal = "ostrich";
let upperCaseWord = animal.toUpperCase();
console.log(upperCaseWord);

console.log(upperCaseWord[2]);







