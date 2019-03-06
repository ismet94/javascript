// Conditions
/* *********************************************** */
// Basic Syntax
// if (condition) {
//      statement executing the condition 
// }

let number = Number(prompt("Enter a number:"));
    if (number > 0) {
        console.log(number + " is positive.");
    } else if (number < 0) {
        console.log(number + " is negative");
    } else {
        console.log(number + " is zero");
    } if (number >= 0 && number <= 100) {
        console.log(number + " is betweem o and 100, both uncluded");
    }

// Operators 
// <    - less than
// >    - greater than
// =>   - greater than or equal to
// <=   - less than or equal to
// ==   - equal to
// ===  - equal value and equal type
// ||   - or

// The pair of opening and closing braces defines what is called a block of  code associated with an if statement. This statement represents a test. It can result in the following: "If the condition is true, then execute the instructions contained in the code block"

// A condition is an expression that evaluates whether something is true or false. When the value of a condition is ture, we say that this condition is satisfied.

// We have already studied numbers and strings, two types of data in Javascrip. Booleas are another type.

// write a program that helps people decide what to wear based on the weather using the if statement.