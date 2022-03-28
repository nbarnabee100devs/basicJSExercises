/* Objects: The Basics - Chapter 1 */


/* Hello, Object
Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.
    */


let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


/* Check for emptiness 
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise. */

function isEmpty(obj) {
  for (let prop in obj) 
  return false;
  return true;
}

/* Sum object properties
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example. */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function salSum(obj) {
  let sum = 0;
 for (let prop in obj) {
  sum += obj[prop];
 }
 return sum;
}

/* Multiply numeric property values by 2
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2. */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
 for (let prop in obj) {
   if (typeof obj[prop] === "number")
   obj[prop] *= 2;
 }
 console.log(obj);
}


/* ----------------------------------  */


/* Object methods, "this" */





/* ----------------------------------  */


/* Constructor, operator "new" */

