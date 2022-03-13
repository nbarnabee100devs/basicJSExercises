// Minimum

const min = (x, y) => Number(x) < Number(y) ? 
  console.log(x) : console.log(y);


// Recursion

function isEven(num) {
  if (Number(num) < 0)
    isEven(num * -1);
  else if 
    (Number(num) === 0)
      console.log("Even");
  else if 
    (Number(num) === 1)
      console.log("Odd");
  else isEven(num - 2);
}



// Bean counting

function countBs(string) {
  let i = 0;
  let bCount = 0;
  while (i <= (string.length - 1)) {
    if (string[i] === "B")
    bCount++;
    i++;
  }
  console.log(bCount)
}


function countChar(string, char) {
  let i = 0;
  let charCount = 0;
  while (i <= (string.length - 1)) {
    if (string[i] === char)
    charCount++;
    i++;
  }
  console.log(charCount)
}