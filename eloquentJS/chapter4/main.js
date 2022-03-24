/* Sum of a range */

function range(start, end, step = 1) {
  let numRange = [];
  if (step > 0) {
    while (start <= end) {
      numRange.push(start);
      start += step;
    }
  }
  else while (start >= end) {
    numRange.push(start);
      start += step;
  }
  return numRange;
}

function sum(a) {
  return a.reduce((a, b) => a + b);
}


/* Reversing array */

function reverseArray(arr) {
  let reversedArray = [];
  for (let i = (arr.length - 1); i >= 0; i--)
    reversedArray.push(arr[i]);
  return reversedArray;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}