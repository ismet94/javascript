// To create an object using constructor function, we simply write a standalone funtion containing theinit funtionality that we want for our object.Instead of calling it init, this funtion will have the name of our object's "class."

// let Pastry = {
//     init: funtion (type, flavour, levels, price, occasion) {
//     this.type = type;
//     this.flavour = flavour;
//     this.levels = levels;
//     this.price = price;
//     this.occasion = occasion;
//     },
//     ...
// }

// It will be like this

function Pastry(type, flavour, levels, price, occasion) {
    this.type = type;
    this.flavour = flavour;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
}

Pastry.prototype.describe = function () {
    var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour " + this.layers + " layer(s), and costs " + this.price + ".";
    return description; 
}


// Now, to instantiate it, instead of calling and then an init function, we'll simply do 

// new Pastry(type, flavour, levels, price, occasion);

// What about other function that was defined by our Pastry object, though? Remember that ourpastries had a "describe" function:

// This is where Prototype comes in again.

// Remeber that the Pastry objetc in the previous exxample served as the prototypr for all the pastriees we've created. All the functions, like init and describe, that we had defined on the Pastry object, were automatically available on all the pastries because we passed Passtry in to Object.create when we created them.

// Using the constructor function is slightly different, though. We can't just add properties to our Pastryconstructor funtion, and expect them to be present on the instantiated instances of our class, because constructors aren't the same thing as the prototype of the objects they create.

// Now that we're using the constructor funtion, we'll assign our descrbe function to the Pastry prototype like this:

// function Pastry(type, flavour, levels, price, occasion) {
//     this.type = type;
//     this.flavour = flavour;
//     this.levels = levels;
//     this.price = price;
//     this.occasion = occasion;
// }

// Now, using constructor functions, we can instantiate our objects on just one line and have the same result:

let muffin = new Pastry("muffin", "blueberry", 1, "R20", "breakfast");
let cake = new Pastry("cake", "vanilla", 3, "R100", "birthday");

console.log(muffin.describe());
console.log(cake.describe());

// ------------------------------------------------------------------------

function Intern(salary, job, laptop) {
    this.salary = salary;
    this.job = job;
    this.laptop = laptop;
}

Intern.prototype.describe = function () {
    var description = "The Intern will be earning " + this.salary + " and will be working as a " + this.job + " with a " + this.laptop + " laptop."
    return description;
}

let work = new Intern("R9000", "Web development", "Alienware");

console.log(work.describe());


// ---------------------------------------------------------------------------

function Mobile(brand, model, specs, service, price) {
    this.brand = brand;
    this.model = model;
    this.specs = specs;
    this.service = service;
    this.price = price;
}

Mobile.prototype.describe = function () {
    var description = "This is an exclusive brand called the " + this.brand + " with the software " + this.model + " It has a " + this.specs + " and runs on " + this.service + " all for only " + this.price + " once off."
    return description;
}

let phone = new Mobile("Eazi Phone", "Version 1", "1 Month Battery Life", "5G Wireless", "R2000");

console.log(phone.describe());