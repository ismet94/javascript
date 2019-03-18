// modify documents after they have finished laoding- add new content to a page, change the colour of an element to reflect a chaning state, or remove an element the user does not need anymore;

// interact with your users- whether ticking a box, commenting on a blog post, or submeitting a tax form, your users need to be able to communicate with you, and Javascript allows them to do so;

// send and receive data to and from external API's harness the power of the thousands of useful API's that already exist or plug your frontend app into your own custom backend

// Get access to the DOM

// document.getElementByTagName()
// document.getElementByClassName()
// document.querySelector()
// document.getElementById()

function changeColor(newColor) {
    let btn = document.getElementById("text");
    btn.style.backgroundColor = newColor;
}

// function moveText(newText) {
//     let btn = document.getElementById("move");
//     btn.style.resize = newText;
// }

