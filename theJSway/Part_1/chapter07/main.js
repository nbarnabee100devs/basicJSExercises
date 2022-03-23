// Musketeers

const musketeers = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < musketeers.length; i++) 
  console.log(musketeers[i]);

musketeers.push("D'Artagnan");

musketeers.forEach(member => console.log(member));

let rem = musketeers.indexOf("Aramis");
console.log(rem);
musketeers.splice(rem, 1);

for (member of musketeers) console.log(member);


// Sum of values

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
values.forEach(value => sum += value);
console.log(sum);

const reduceSum = values.reduce((x, y) => x + y);
console.log(reduceSum);


// Array maxiumum

const values2 = [3, 11, 7, 2, 15, 9, 10, 12];
let max = 0;
values2.forEach(value => (value > max) ? (max = value) : max);
console.log(max);


// list of words

const wordList = [];

function makeWordList() {
  newWord = prompt("Enter a word");
  if (newWord !== "stop") {
    wordList.push(newWord);
    makeWordList();
  }
  else console.log(wordList.join(" "));
}

