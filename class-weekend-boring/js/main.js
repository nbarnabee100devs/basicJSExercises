document.getElementById("check").onclick = dayCheck;

function dayCheck() {
  const day = document.getElementById("day").value.toLowerCase();
  const response = document.getElementById("placeToSee");
  if (day === "sunday" || day === "saturday") 
    response.innerHTML = "It's the weekend!";
 else if (day === "monday" || day === "wednesday")
    response.innerHTML = "Booooring!";
 else if (day === "tuesday" || day === "thursday")
    response.innerHTML = "Class day!!";
 else if (day === "friday")
    response.innerHTML = "Thank god!!";
  else if  (day.includes("day"))
    response.innerHTML = "What kind of a day is that??";
  else response.innerHTML = "That's not a day!!";
}