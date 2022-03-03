function greeting() {
const currentUser = prompt("What is your name?");
alert(`Hello, ${currentUser}.`);
}

const checkAge = (age) => (age > 18) ? true : confirm("Did your parents allow you?");

function checkAge2(age) {
  return (age > 18) || confirm("Did your parents allow you?");
}

const min = (a, b) => (a < b) ? a : b;

document.getElementById("submit").addEventListener("click", evalNumbers);

function evalNumbers() {
  const x = Number(document.getElementById("xValue").value);
  const n = Number(document.getElementById("nValue").value);
  if (Number.isInteger(x) && x > 0 && Number.isInteger(n) && n > 0) calcPower(x, n);
  else alert("Please enter two integers greater than 0.");
}

function calcPower(x,n) {
  let result = 1;
  for (i = 0; i < n; i++) 
  result *= x;
  document.querySelector("#result").innerHTML = `${x}<sup>${n}</sup> = ${result}`;
}

const ask = (question, yes, no) => confirm(question) ? yes() : no();

ask (
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You cancelled the execution.")
)