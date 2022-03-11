function sayHello(firstName, lastName) {
  const message = `Hello, ${firstName} ${lastName}!`;
  return message;
}

function friendlyGreeting() {
  const first = prompt("Please enter your first name.");
  const last = prompt("Please enter your last name.");
  let greeting = sayHello(first, last);
  console.log(greeting);
}

function square1(x) {
  return (x*x);
}

const square2 = x => x*x;

function squareToTen() {
  for (i=1; i<=10; i++)
  console.log(square2(i));
}

function min(x, y) {
  if (x > y) 
  return y;
  else return x;
}

const arMin = (x, y) => (x < y) ? x : y;

function calculate(x, operator, y) {
  if (operator === "+")
  return (x + y);
  else if (operator === "-")
  return (x - y);
  else if (operator === "*")
  return (x * y);
  else if (operator === "/")
  return (x / y);
  else console.log("Error");
}

function circle(r) {
  let circumference = () => 2 * Math.PI * r;
  let area = () => Math.PI * r ** 2;
  console.log(`The circumference of a circle with radius ${r} is ${circumference(r)}, and its area is ${area(r)}`);
}