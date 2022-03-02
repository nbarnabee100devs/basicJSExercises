// ----------  Variables  -------------


// Working with variables
let admin;
let name;
name = "John";
admin = name;
// alert(admin);

//Giving the right name
const homePlanet = "Earth";
let currentVisitor;

//Uppercase const
/* 
Using upper case for "birthday" is appropriate, as the value is fixed
Using upper case for "age" not, because it is derived via a function and can change 
*/


// ----------  Function Basics  -------------

// Is "else" required?
// No.


//Rewrite the function
function checkAge(age) {
  return (age > 18) ? true : confirm("Did your parents allow you?");
}

function checkAge(age) {
  return (age > 18) || confirm("Did your parents allow you?");
}

//Function min(a,b)

function min(a,b) {
  return (a >= b) ? b : a;
}


document.getElementById("submit").addEventListener("click", checkSubmit);

function checkSubmit() {
 const x = Number(document.getElementById("x").value);
 const n = Number(document.getElementById("n").value);
 if (Number.isInteger(x) &&  ( x >= 1 ) && Number.isInteger(n) && (n >= 1)) 
 pow(x,n);
 else alert("Please enter two integers greater than 0.");
}

function pow(x,n) {
  result = x;
  for (i = 1; i < n; i++) {
    result *= x;
  }
  document.getElementById("result").innerHTML = `${x}<sup>${n}</sup> = ${result}`
}


// ----------  Arrow Functions  -------------

//Rewrite with arrow functions
let ask = (question, yes, no) => 
confirm(question) ? yes() : no();

ask (
  "Do you agree?",
  () => alert("You agreed"),
  () => alert("You cancelled the execution.")
)