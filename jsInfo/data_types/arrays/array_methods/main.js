/* Translate border-left-width to borderLeftWidth
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.
*/
// This one took some time and I didn't really get it the first time.  I should repeat it

function camelize(str) {
  let cArr = str.split("-");
  let upperArr = cArr.map((element, i) => (i===0) ? element : element[0].toUpperCase() + element.slice(1));
  let newStr = upperArr.join("");
  console.log(newStr);
}

function craycray(str) {
  const newStr = str.split("-").map((element, i) => (i===0) ? element : element[0].toUpperCase() + element.slice(1)).join("");
  console.log(newStr);
}

/* Filter range

Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

*/

// Seriously I think I should stop, my brain is clearly fried

function filterRange(arr, a, b) {
  return arr.filter(element => (element >= a && element <= b));
};