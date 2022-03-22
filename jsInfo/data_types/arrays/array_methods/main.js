/* Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/
// This one took some time and I didn't really get it the first time.  I should repeat it
let test = "this-is-a-test";
function camelize(str) {
  const newStr = str.split("-").map((e, i) => (i===0) ? e : (e[0].toUpperCase() + e.slice(1))).join("");
  return newStr;
}

/* Filter range

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  const newArr = arr.filter(e => e >= a && e <= b);
  return newArr;
};


/* Filter "range in place"

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

*/

function filterRangeInPlace(arr, a, b) {
  arr.forEach((e, i, arr) => (e >= a && e <= b) ? e : arr.splice(i, 1));
  console.log(arr);
};


/* Sort in decreasing order */
arr = [5, 2, 1, -10, 8];

function sortDecreasing(arr) {
 arr.sort((a, b) => b - a);
 return arr;
}


/*  Copy and sort array

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

*/

stringArr = ["HTML", "JavaScript", "CSS"]

function copySorted(arr) {
  let sorted = arr.slice();
  sorted.sort();
  };


  /* Calculator */

  // skip this one


  /* Map to Names
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
 */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let users = [ john, pete, mary ];

let names = users.map(e => e.name);

console.log(names); // John, Pete, Mary


/* Sort by age

Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
*/

let sortByAge = function(users) {return users.sort((a, b) => a.age < b.age ? -1 : 1)};

function sortByAge2(users) {
  return users.sort((a, b) => a.age < b.age ? -1 : 1);
};

/*  Shuffle an array
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
*/

// Could make a 2nd array with a length = arr.length
// 2nd array would contain randomly ordered numbers from 0 - array.length -1

function shuffle(arr) {

}

/* Get average age 
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age. */

function getAverageAge(users) {
  let average = 0;
  users.forEach(a => average += a.age);
  return average/users.length;
}

/* the "official" solution */

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


/* Filter unique array members
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/


let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
  let uniqueArr = [];
  
  for (let string of arr) {
    if (!uniqueArr.includes(string))
    uniqueArr.push(string);
  };
    console.log(uniqueArr);
  };


  /* Create keyed object from array

  Let’s say we received an array of users in the form {id:..., name:..., age:... }.

Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
  */