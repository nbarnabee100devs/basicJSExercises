/* Looping a triangle */

function makeTriangle(x) {
  let triangle = "#";
  while (triangle.length <= x) {
  console.log(triangle);
  triangle += "#";
  }
};


/* FizzBuzz */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i%3 === 0 && i%5 === 0)
      console.log("FizzBuzz");
    else if (i%3 === 0)
      console.log("Fizz");
    else if (i%5 === 0)
      console.log("Buzz");
    else console.log(i); 
  };
}


/* Chessboard maker */

function makeGrid(size) {
  
  let grid = "0"
  let rowCount = 1
  let rowCharCount = 1
  let lastCharHash = false
  let jobDone = false

  while (jobDone === false) {

    if (rowCount === size && rowCharCount === size) {
      console.log(grid);
      jobDone = true;
    }

    else if (rowCharCount === size) {
      grid += "\n";
      rowCharCount = 0;
      rowCount += 1;
      if (lastCharHash === true)
      lastCharHash = false;
      else lastCharHash = true;
    }

    else while (rowCharCount < size) {
      if (lastCharHash === true) {
        grid += "0";
        lastCharHash = false;
      }

      else if (lastCharHash === false) {
        grid += "#";
        lastCharHash = true;
      }
      rowCharCount += 1;
    }
  }
}


function makeGridRefactored(size) {
  
  let grid = "0";
  let rowCount = 1;
  let rowCharCount = 1;
  let lastCharHash = false;
  let jobDone = false;

let swapColors = () => lastCharHash ? lastCharHash = false : lastCharHash = true;

  while (jobDone === false) {

    if (rowCount === size && rowCharCount === size) {
      console.log(grid);
      jobDone = true;
    }

    else if (rowCharCount === size) {
      grid += "\n";
      rowCharCount = 0;
      rowCount += 1;
      swapColors();
    }

    else while (rowCharCount < size) {
      if (lastCharHash === true) {
        grid += "0";
        swapColors();
      }

      else if (lastCharHash === false) {
        grid += "#";
        swapColors();
      }
      rowCharCount += 1;
    }
  }
}

// There has got to be a better way