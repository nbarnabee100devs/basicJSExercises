//create a function that adds two numbers and alerts the sum
let sum = (x,y) => alert(x+y);

//create a function that multiplys three numbers and console logs the product
let multi = (x,y,z) => console.log(x*y*z);

//create a function that divides two numbers and returns the ???

let div = (x, y) => x/y;

let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask ("Do you agree?",
() => alert("You agreed."),
() => alert("You cancelled the execution."));