// *Variables*
// Create a variable and console log the value

let foo = 10;
console.log(foo);


// Create a variable, add 10 to it, and alert the value

let bar = 15;
alert(bar += 10);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

let subFour = (x, y, z, a) => alert(x-y-z-a);



// Create a function that divides one number by another and returns the remainder

let remainder = (x, y) => x%y;


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

let jumanji = (x, y) => ((x+y)>50) ? alert("Jumanji") : (x+y);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

let zebra = (x, y, z) => ((x*y*z)%3===0) ? alert("Zebra") : x;
