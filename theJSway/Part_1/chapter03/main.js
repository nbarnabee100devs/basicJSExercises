function tomorrow() {
  const currentDay = prompt("What day of the week is it?").toLowerCase();
  console.log(currentDay);
  switch (currentDay) {
    case "sunday":
      alert("Tomorrow is Monday.");
      break;
    case "monday":
      alert("Tomorrow is Tuesday.");
      break;
    case "tuesday":
      alert("Tomorrow is Wednesday.");
      break;
    case "wednesday":
      alert("Tomorrow is Thursday.");
      break;
    case "thursday":
      alert("Tomorrow is Friday.");
      break;
    case "friday":
      alert("Tomorrow is Saturday.");
      break;
    case "saturday":
      alert("Tomorrow is Sunday.");
      break;
    default: {
      alert("That isn't a day of the week.  Please try again.")
      tomorrow()
    };
  }
}

function compareNum() {
  const x = Number(prompt("Enter a number"));
  const y = Number(prompt("Enter a number"));
  if (!x || !y) {
    alert("Invalid entry.  Please try again.");
    compareNum();
  }
  else if (x < y) {
    alert(`${y} is greater than ${x}`);
  }
  else if (x > y) {
    alert(`${x} is greater than ${y}`);
  }
  else alert("The numbers are equal.");
}


function numberGames(nb1, nb2, nb3) {
// let nb1 = Number(prompt("Enter nb1:"));
// let nb2 = Number(prompt("Enter nb2:"));
// let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3)
console.log("nailed it");
}


function monthDay() {
  const month = Number(prompt("Please enter the month number."));
  const month31 = [1, 3, 5, 7, 8, 10, 12];
  if ((month > 12) || (month < 1) || !(Number.isInteger(month)) || !(month)) {
    alert("Invalid entry.  Please try again.");
    monthDay();
  }
  else if (month === 2) {
    alert(`Month ${month} has 28 days.`);
  }
  else if (month31.includes(month)) {
    alert(`Month ${month} has 31 days.`);
  }
  else alert(`Month ${month} has 30 days.`);
}

function nextSecond() {
  let hour = Number(prompt("Please enter the hour."));
  let minute = Number(prompt("Please enter the minute."));
  let second = Number(prompt("Please enter the second."));
    if ((hour < 0) || (hour > 24) || !(Number.isInteger(hour)) || !(hour) ||(minute < 0) || (minute > 59) || !(Number.isInteger(minute)) || !(minute) || (second < 0) || (second > 59) || !(Number.isInteger(second)) || !(second)) {
      alert("Invalid entry.  Please try again");
    }
    else {
      second += 1;
        if (second < 60) {
          alert(`In one second it will be ${hour}h${minute}m${second}s`);
        }
        else {
          second = 0;
          minute += 1;
          if (minute < 60) {
            alert(`In one second it will be ${hour}h${minute}m${second}s`);
        }
        else {
          minute = 0;
          hour += 1;
          if (hour < 24) {
            alert(`In one second it will be ${hour}h${minute}m${second}s`);
          }
          else {
            hour = 0;
            alert(`In one second it will be ${hour}h${minute}m${second}s`);
          }
        }
      }
    }
  }

// function checkInput(x, y, z) {
//   console.log(x, y, z);
//   if ((x < 0) || (x > 24) || !(Number.isInteger(x)) || !(x) ||(y < 0) || (y > 59) || !(Number.isInteger(y)) || !(y) || (z < 0) || (z > 59) || !(Number.isInteger(z)) || !(z)) {
//     alert("Invalid entry.  Please try again");
//     nextSecond();
//   }
//   else return true;
// }