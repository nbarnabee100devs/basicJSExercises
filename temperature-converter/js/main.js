document.querySelector("#inputButton").addEventListener("click", convertTemp);

function convertTemp() {
const celsius = Number(document.getElementById("input").value);
let fahren = celsius * 1.8 + 32;
document.querySelector(".return").innerHTML = fahren;
}