function forCarousel(turns) {
  for (i=1; i <= turns; i++)
  console.log(`This is turn ${i}!`);  
}


function whileCarousel(turns) {
  let i = 1;
  while (i<=turns) {
    console.log(`This is turn ${i}!`); 
    i++;
  }
}


function forParity(num) {
  for (i=0; i<10; i++) {
    if (num%2 === 0)
    console.log(`${num} is even.`);
    else console.log(`${num} is odd.`);
    num++;
  }
}

function whileParity(num) {
  let i = 0;
  while (i < 10) {
    if (num%2 === 0)
    console.log(`${num} is even.`);
    else console.log(`${num} is odd.`);
    num++;
    i++;
  }
}

function inputVal() {
  const num = Number(prompt("Please enter a number between 50 and 100."));
  console.log(num);
  (!Number(num) || (num >= 100) || (num <= 50)) ? inputVal() : 
  alert("Congratulations!  You can follow simple instructions!");
}

function forMultiT() {
  const num = Number(prompt("Please enter a number between 2 and 9 inclusive."));
  if (!Number(num) || (num > 9) || (num < 2)) 
  forMultiT();
  else {
    for (i=1; i<=12; i++) {
    console.log(`${i} * ${num} = ${i * num}`);
    }
  }
}

function whileMultiT() {
  const num = Number(prompt("Please enter a number between 2 and 9 inclusive."));
  if (!Number(num) || (num > 9) || (num < 2)) 
  whileMultiT();
  else {
    let i = 1;
    while (i<=12) {
    console.log(`${i} * ${num} = ${i * num}`);
    i++;
    }
  }
}

function neitherYesNo() {
  const word = prompt("Please enter a word.").toLowerCase();
  while ((word !== "yes") && (word !== "no")) {
    neitherYesNo();
  }
  alert("You did it!");
}

function forFizz() {
  for (i=1; i <= 100; i++)
  if (i%3 === 0 && i%5 === 0) 
    console.log("FizzBuzz");
  else if (i%3 === 0)
    console.log("Fizz");
  else if (i%5 === 0)
    console.log("Buzz");
  else console.log(i);
}

function whileFizz() {
  let i = 1;
  while (i <= 100) {
  if (i%3 === 0 && i%5 === 0) 
    console.log("FizzBuzz");
  else if (i%3 === 0)
    console.log("Fizz");
  else if (i%5 === 0)
    console.log("Buzz");
  else console.log(i);
  i++;
  }
}