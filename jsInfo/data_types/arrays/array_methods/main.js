// Translate border-left-width to borderLeftWidth

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function camelize(str) {
  let newStr = str.split("-").map((e, i) => (i===0) ? e : (e[0].toUpperCase() + e.slice(1))).join("");
  return newStr;
};
  

let string = "your-text-here";

// I continue to struggle with this one.  I understand the solution when I see it, but I can't seem to get there organically.




// Filter range

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
  let newArr = arr.filter(e => ((e >= a && e <= b)));
  return newArr;
}

let arr = [5, 3, 8, 1];




// Filter range "in place"

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {
  arr.forEach((e, i) => (e >= a && e <= b) ? e : arr.splice(i, 1));
}

console.log(arr);
filterRangeInPlace(arr, 1, 4);
console.log(arr);



// Sort in decreasing order

let arr2 = [5, 2, 1, -10, 8];
console.log(arr2);
arr2.sort((a, b) => (b - a));
console.log(arr2);


// Copy and sort array

// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr3 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let newArr = arr3.slice().sort((a, b) => (a > b) ? 1 : -1);
  return newArr;
}


// Create an extendable calculator

// go fuck yourself


let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 29 };

let users = [ john, pete, mary ];


// Map to names

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.


let names = users.map(e => e.name);



// Map to objects

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// You're turning each object in the array into another object

let usersMapped = users.map(e => ({
  fullname: `${e.name} ${e.surname}`,
  id: e.id,
}));


// Sort users by age

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

let arrAges = [ pete, john, mary ];

function sortByAge(arr) {
  return arr.sort((a, b) => (a.age - b.age))
};



// Shuffle an array

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. 

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

let arrNums = [1, 2, 3]

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  return arr;
}


// Get average age

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

function getAverageAge(arr) {
  return arr.reduce((a, b) => a + b.age, 0) / arr.length;
}