function carousel(num) {
  for (i = 1; i <= num; i++)
    console.log(`Turn number ${i}`)
}

function parity(num) {
  for (i = 1; i <= 10; i++) {
    (num % 2 === 0) ?
    console.log(`${num} is even`) :
    console.log(`${num} is odd`);
    num++;
  }
}

function numPrompt() {
let num = prompt("Please enter a number between 50 and 100");
while (num <= 50 || num >= 100) 
num = prompt("Please enter a number between 50 and 100");
}

function multiTable(num) {
  for (i = 1; i <= 12; i++)
  console.log(i*num);
}

function multiTableBound() {
  let num = prompt("Please enter a number between 2 and 9");
  while (num >= 9 || num <=2)
  num = prompt("Please enter a number between 2 and 9");
  for (i = 1; i <= 12; i++)
  console.log(i*num);
}

function yesOrNo() {
  let response = prompt("Please enter a word");
  while (response.toLowerCase() !== "yes" && response.toLowerCase() !== "no")
  response = prompt("Please enter a word");
}

function fizzBuzz() {
  for (i=1; i <= 100; i++) {
  switch (true) {
    case (i%3 == 0 && i%5 == 0):
      console.log("FizzBuzz");
      break;
    case (i%3 == 0):
      console.log("Fizz");
      break;
    case (i%5 == 0):
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
  }
}