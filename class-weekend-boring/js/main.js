document.getElementById("check").addEventListener("click", checkDate);

function checkDate() {
  let dateValue = document.getElementById("day").value.toLowerCase();
  console.log(dateValue);
}