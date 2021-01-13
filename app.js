let plusButton = document.querySelector("#firstBtn");
const minusButton = document.querySelector("#secondBtn");
const battery = document.getElementById("batteryPart");
const firstPart = document.getElementById("firstPart");
const secondPart = document.getElementById("secondPart");
const thirtPart = document.getElementById("thirdPart");
let level = 0;
let chargingCount = document.getElementById("textArea");

plusButton.addEventListener("click", function () {
  level++;
  getColor();
});

minusButton.addEventListener("click", function () {
  level--;
  getColor();
});

