// An array is a data type thta can store a set pf elements.

// Now to create our list of movies in the form of a table

// let movies = ["PS I Love You", "Titanic", "What men want"];

// Create a table with a pair of square brackets: []. Everything wihtin the brackets makes up the array.

// Since an array conatins multiple things, it's good to name the array using a plural (for example, movies),

// Identify an array's size

// The number of elements stored in a table is called its size. Here's how to access it.

let movies = ["PS I Love You", "Titanic", "What Men Want"];

console.log(movies.length);
// The Output will be 3

// Each item in an array identified by a number called its index, we can represent an array as a set of boxes, each storing a specific value and associated with an index. Here is how one might represent the files array:

console.log(movies[0]);
// The Output will be PS I Love You

console.log(movies[1]);
// The Output will be Titanic

console.log(movies[2]);
// The Output will be What Men Want

console.log(movies[3]);
// The Output will be Unidentified

// Thats exactly the way you accesswed characters in a string! The same golen rules apply:

// The index of the first element of an array is 0 and not 1

// The highest index number is the array's length minus 1

// Using an invalid index to access a javascript array element returns the value undefined.

// Add an element to an array

// Lets say you watched Captain Marvel and you want to add it to the list. Here's how you'd do so:

movies.push("Captain Marvel");

console.log