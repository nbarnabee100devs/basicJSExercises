//Write your pseduo code first! 
//1. get variable
//2. convert variable
//3. return variable

document.querySelector("button").addEventListener("click", tempConvert);

function tempConvert() {
  tempCel = Number(document.querySelector("#input").value);
  tempFah = tempCel * 1.8 + 32;
  document.querySelector(".return").innerText = tempFah;
}
