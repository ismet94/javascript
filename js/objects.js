// Think about objects in the non-programming sense, like a pen. A pen can have different in colours, be manufactured by different people, have a different tip and many other properties.

// Similarly, an object in programming is an entity that has properties. Each property defines a characteristics of the object. A property can be inforamtion associated with the object (the colour of the pen) or action (the pens ability).

// OOP changes the way a program is written and organized. So far, you've been writting sunction-based code, sometimes called the procedural programming. Now let's discover how to write object - oriented code.

// Javascript and objects

// Like many other languages, Javascript involves programming objects, so we can say it's

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "penflex"
};

// The above code defines a variable named pen whose value is an objects: you can therefor say pen s an object. This object hass three properties: type, color, and brand. Each property has a name and a value and is seperated by a comma (except the last one).

// Getting a value

// After creating the object, you can access the value of its properties using dot notations such as myObject.myProperty.

console.log(pen.type); 
console.log(pen.color);
console.log(pen.brand);

console.log("we use the " + pen.type + " pen in our company, usually by the colour" + pen.color + " and should always be the" + pen.brand + " brand");

// ----------------------------------------------------------------

let cake = {
    flavour: "Chocolate",
    price: "R300",
    layers: "Tripple Layer",
    occasion: "Farewell Party"
};

console.log("We will be having a " + cake.flavour + " " + cake.layers + " cake, at a price of " + cake.price + " for our yearly farewell party.");

cake.occasion = "Wedding";

console.log(cake.occasion);

function describe(cake) {
    var description = "The " + cake.occasion + " cake has a " + cake.flavour + " flavour, " + cake.layers + " and costs " + cake.price + ".";
    return description;
}

console.log(describe(cake));


// -----------------------------------------------------------------------


let cake2 = {
    flavour: "Vanilla Sponge",
    price: "R350",
    layers: "Quattro Layer",
    occasion: "Farewell Party",


describe: function () {
    var description = "The " + this.occasion + " cake has a " + this.flavour + " flavour, " + this.layers + " and costs " + this.price + ".";
    return description;
}
};

console.log(cake2.describe());

cake2.occasion = "Wedding";
cake2.price = "R500"

console.log(cake2.describe());

// -----------------------------------------------------------------

let intern = {
    occupation: "internship",
    salary: "R11000",
    company: "Samsung",
    name: "Ismet Samsodien",
    age: "24",

describe: function() {
    var description = "My name is " + this.name + " I am " + this.age + " I am in an " + this.occupation + " at " + this.company + " cuurently earning " + this.salary ;
    return description;
}
};

console.log(intern.describe());




