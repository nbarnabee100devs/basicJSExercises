// *Variables*
// Create a variable and console log the value
let foo = 10;
console.log(foo);
// Create a variable, add 10 to it, and alert the value
let bar = 5;
bar += 5;
alert(bar);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFour(x, y, z, b) {
  alert(x-y-z-b);
}

// Create a function that divides one number by another and returns the remainder

function remainder(x, y) {
  let z = x%y;
  return z;
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji

function jumCheck(x,y) {
  z = x + y;
  if (z > 50) alert("Jumanji");
  else return;
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function zebraCheck(x, y, z){
  let zCheck = x*y*z;
  if ((zCheck % 3) == 0) alert("ZEBRA");
  else return;
}
