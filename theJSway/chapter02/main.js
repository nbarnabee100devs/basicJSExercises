function improvedHello() {
  const firstName = prompt("Please enter your first name.")
  const lastName = prompt("Please enter your last name.")
  alert(`Hello, ${firstName} ${lastName}`);
}

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
console.log("Nailed it");

function totalPrice() {
  let price = Number(prompt("Please enter the raw price in digits."));
  price += price * .206;
  alert(`The total price is ${price}`);
}

function convertTemp() {
  let tempCel = Number(prompt("Please enter the temperature in Celsius"));
  let tempFah = tempCel * (9/5) + 32;
  alert(`The temperature is ${tempFah} degrees Fahrenheit`);
}

function variableSwap() {
  let number1 = 5;
  let number2 = 3;
  let number3 = number2;
  number2 = number1;
  number1 = number3;
  console.log(number1);
  console.log(number2);
}

function variableSwap2() {
  let number1 = 5;
  let number2 = 3;
  number1 += number2;
  number2 = number1 - number2;
  number1 -= number2;
  console.log(number1);
  console.log(number2);
}