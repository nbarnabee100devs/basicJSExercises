/* Objects: The Basics */

// Hello, object

// Write the code, one line for each action:

//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
console.log(user);



// Check for emptiness

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

let obj = {}

function isEmpty(obj) {
for (let key in obj) 
  if (key) 
  return false;
  return true;
}

console.log(isEmpty(user));
console.log(isEmpty(obj));


// Sum object properties

// We have an object storing salaries of our team
// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(obj) {
  let sum = 0;
  for (let key in obj) 
  sum += obj[key];
  return sum;
}

console.log(sumSalaries(salaries));


// Multiply numeric property values by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number")
    obj[key] *= 2;
  }
}

console.log(menu);
multiplyNumeric(menu);
console.log(menu);