let turn = 1;
while (turn <= 10) {
  console.log(`Turn number ${turn}!`);
  turn++;
}

for (i=1; i<=10; i++) 
  console.log(`Turn number ${i}!`);

function carousel(x) {
  for (i = 1; i <= x; i++)
    console.log(`Turn number ${i}!`);
}

function parity(x) {
  for (let i = 1; i <= 10; i++) {
    if (x % 2 === 0) {
      console.log(`${x} is even`);
    }
    else console.log(`${x} is odd`);
    x++;
  }
}

function inputVal() {
  x = prompt("Please enter a number between 50 and 100");
  while (x <= 50 || x >= 100) x = prompt("Please enter a number between 50 and 100");
}

function multiTable() {
  x = prompt("Please enter a number between 2 and 9, inclusive");
  while (x <= 1 || x >= 10) x = prompt("Please enter a number between 2 and 9, inclusive");
  for (i = 1; i<=12; i++) 
  console.log(x*i);
}

function yesOrNo() {
  answer = prompt("Password, please");
  while (answer.toLowerCase() !=="yes" && answer.toLowerCase() !=="no") 
  answer = prompt("Password, please.");
  alert ("Correct!");
}

function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if (i%3 === 0 && i%5 === 0) console.log("FizzBuzz");
    else if (i%3 === 0) console.log("Fizz");
    else if (i%5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

function fizzBuzzSwitch() {
  for (i = 1; i <= 100; i++) {
    switch(true) {
      case ((i%3 === 0) && (i%5 === 0)): 
        console.log("FizzBuzz");
      break;
      case (i%3 === 0):
        console.log("Fizz");
        break;
      case (i%5 === 0):
        console.log("Buzz");
        break;
      default: console.log(i);
    }
  }
}