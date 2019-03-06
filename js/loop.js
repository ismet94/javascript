console.log("While Loop");
console.log("Start Program");
let number = 1;
    while(number <= 15) {
        console.log(number);
        number++;
    }

console.log("End Program");

// Basic Syntax

// Before each loop iteration, the condition in parentheses is evaluated to determine whether it's true or not. The code associated with a loop is called it's body.

// If the body condition's true, the code in the 



// ------------------------------------------------

// This is a little more complicated than the while loop.

// Initialization only happens once, when the code first is running.

// the condition s evaluated once before the loop runns each time. If it's true, the code runs. If not, the code doesn't run.

// The final expression is evaluated after the loop runs each time. It's often used to update a counter variable, as we saw in the while loop example.


console.log("For Loop");
for (var counter = 1; counter <= 5; counter++) {
    console.log(counter);
}

// Which loop should I use?

let letter = "";
while (letter !== "X") {
    letter = prompt("Type any letter or letter X to exit:");
    console.log(letter);
}