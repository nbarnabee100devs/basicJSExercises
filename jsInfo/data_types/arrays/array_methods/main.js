// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.


const camelize = (string) => string.split("-").map((e,i) => (i===0) ? e : (e[0].toUpperCase() + e.slice(1))).join("");


// Filter range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.



let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => arr.filter(e => (e >= a && e <= b));

filterRange(arr, 1, 4);




// Filter range "in place"

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

let arr2 = [5, 3, 8, 1]

function filterRangeInPlace(arr, a, b) {
 for (let i in arr) {
   if (arr[i] >= a && arr[i] <= b)
   arr.splice(i, 1);
 }
}


// Sort in decreasing order

function sortDecrease(arr) {
  return arr.sort((a, b) => b - a);
}



// Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort((a, b) => a > b ? 1 : -1);
}


// Create an extendable calculator

// blah blah blah a million instructions.
// Honestly, I do not understand how this one works.  Or, rather, I think I understand it, but there's no way I could replicate it myself.  I am copying the solution here, just to get the practice of typing it, and adding comments to explain it, but I have got to move on from these exercises.

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };  // this really frustrated me the first time I read it, because it doesn't make sense until you get on to the calculate method

  this.calculate = function(str) {

    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

      // Ok, so you take the string and split it into an array, and then assign the values of the array to particular variables

    if (!this.methods[op] || isNaN(a) || isNaN(b))
      return NaN;
    return this.methods[op](a, b);
  };
  
  // so when you enter your string, e.g. "1 + 2", the calculate method is splitting it, assigning the various parts to variables, and then passing them to methods
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
  
}

const powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a**b);

  // honestly I hate some of these exercises, but perhaps my perspective is wrong:  I came in assuming that we would be able to do these based on what we learned in this chapter, but this task, the "shuffle" task and one of the other ones about destructuring objects.... I'm sorry, but no way is anyone without prior knowledge going to be able to come in here and do these problems.



let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 29 };

let users = [ john, pete, mary ];


// Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

const userNames = (arr) => arr.map((e) => e.name);


// Map to objects

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// You're turning each object in the array into another object





// Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

function sortByAge(users) {
  return users.sort((a, b) => a.age > b.age ? 1 : -1);
}



// Shuffle an array

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. 

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.



// Get average age

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.




// Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.




// Create keyed object from array

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

let usersKeyed = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

// let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// Frankly I do not understand at all what is happening here.  As with the calculator exercise, I am just copying it.  But I do not understand what is happening with reduce() in this case.


// Ok, apparently if the initial value is set to an empty array or an empty object (as in this case), the calculated values will be pushed into the object.  Nice to know!  Shame that the person who wrote javascript.info didn't bother to mention that!!!!!!!

// I still don't really understand why this works or what it's doing, though.

/* 
Here's an explanation I was given on Discord:

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

Reduce is a function that transforms an array into another single thing (it could be a number, another array, an object, etc). It will invoke a callback function on every iteration, and the return of this callback function is what affects the ending structure. 

So, the accumulator represents the ending structure we want to output (in the case of the array sum, this structure is just a number)

In the javascript info question, you want to return a new object that has all the array data inside properties with their id names. So, obj is the accumulator, and value is the current element in the array iteration. On each iteration, it is adding the actual array element to obj and returning the full object, so it will be accessible on the next iteration
obj[value.id] = value;

Lets say the current element is the first of the array, so, it's doing:

//first element: {id: 'john', name: "John Smith", age: 20}

obj[john] = {id: 'john', name: "John Smith", age: 20} 
So the new object (obj) you want to return now is like this

{
  john : {id: 'john', name: "John Smith", age: 20}
}
And so on for every iteration until the loop ends and you can return the full new object

*/