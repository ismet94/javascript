// let muffin = {
//     type: "muffin",
//     flavour: "vanilla berry",
//     layer: "1",
//     price: "R15",
//     occasion: "party"
// }

// console.log();

// OBJECTS AND PROTOTYPES

// In addtion its specal properties every javascript object has an internal property called prototype. This is a link (known as reference) to another object. When trying to access a property that does not exist in an object Javascript tries to find this property in the prototype of this object.

// var anObject = {
//     a: 2
// };

// // Create anotherObject using an Object as a prototype

// var anotherObject = Object.create(anObject);

// console.log(anotherObject.a); 
// // The above will show 2

// // Ther javascript statement Object.create() is used to create the object anotherObject based on the prototype object anObject.

// // If the prototype of an object does not have a desired property, then research continues in its own prototype until we get to the end of prototype chain. If the property was found in the objects, access returns the value undefined.

// var anObject = {
//     b: 3
// };

// // Create anotherObject using an Object as a prototype

// var anotherObject = Object.create(anObject);

// console.log(anotherObject.b);
// console.log(anotherObject.c);

// // This type of relationship between Javascript objects is called delegations an object delegates part of its operation to its prototype.

// // CAKE PROTOTYPE

// let Pastry = {
//     type: "",
//     flavour: "",
//     layers: 0,
//     price: "",
//     occasion: "",

// // Describe the pastry

// describe: function() {
//     var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour " + this.layers + " layer(s), and costs " + this.price + ".";
//     return description; 
//     }
// };

// let muffin = Object.create(Pastry);
//     muffin.type = "muffin",
//     muffin.flavour = "vanilla berry",
//     muffin.layers = 1,
//     muffin.price = "R15",
//     muffin.occasion = "breakfast";

// let cake = Object.create(Pastry);
//     cake.type = "cake",
//     cake.flavour = "chocolate",
//     cake.layers = 3,
//     cake.price = "R150",
//     cake.occasion = "party";

// console.log(muffin.describe());
// console.log(cake.describe());

// We created an object named Pastry, which brings together the properties common to all the characters. The cake and muffin are created via Pastry as a prototype, which deleagtes its features to them.

//  The process of creating a Pastry is a little repetitive: for each character, you must successively give a value to each of its properties. You cna do better by creating an initialization function.

// let Pastry = {
//     // initialize the pastry
//     init: function(type ,flavour, layers, price, occasion) {
//         this.type = type;
//         this.flavour = flavour;
//         this.layers = layers;
//         this.price = price;
//         this.occasion = occasion;
//     },

//     // Describes the Pastry

//     describe: function() {
//         var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour " + this.layers + " layer(s), and costs " + this.price + ".";
//         return description; 
//         },

//     bake: function() {
//         var baked = "The " + this.type + " is placed in an oven for 7 minutes. It's done!"
//         return baked;
//         },

//     eat: function() {
//         var eat = "First take your " + this.type + ". Use a spork to tackle your " + this.layers + " layer cake.";
//         return eat;
//     }
// };

// var muffin = Object.create(Pastry);
// muffin.init("muffin", "vanilla berry", 1, "R15", "breakfast");

// var cake = Object.create(Pastry);
// cake.init("cake", "chocolate", 3, "R150", "party");

// console.log(muffin.bake());
// console.log(muffin.describe());
// console.log(cake.eat());

// The mothod int() takes the initial property values of the passtry as parameters. The pastry creation code is therefore reduced to only 2 steps:

// The actual creation, with the Pastry object as prototype,

// The initialization of its properties, using the function init() on the Pastry object.

// -------------------------------------------------------------------------------
// -------------------------------------------------------------------------------


// Creating a game that has characters, players and enemies. A player can attack an opponent the reverse should also be true. So if attacked the character sees their life on deceased from the force of the attack. If the characters number of points reaches zero then the game ends or the chracter s elimanated.

// Prototype has to be created then we have parameters name, health, force. 
// text based game using console.log.

let name = prompt("New Challanger. Speak Your Name!");

console.log(name + ", You have entered the realm of the Great Gods");

if (enemy === "punch") {
        console.log("-10 Points" + (health - 10));
    } else if (enemy === "kick") {
        console.log("-10 Points" + (health - 10));
    } else if (enemy === "uppertcut") {
        console.log("-10 Points" + (health - 15));
    } else if (enemy === "superforce") {
        console.log("-10 Points" + (health - 25));
    } else {
        console.log("Eish that ain't a valid weather type")
    }
