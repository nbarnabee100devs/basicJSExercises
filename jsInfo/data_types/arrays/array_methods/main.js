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