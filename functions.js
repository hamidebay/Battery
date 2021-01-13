function getColor() {
  if (level == 0) {
    firstPart.style.background = "white";
    secondPart.style.background = "white";
    thirtPart.style.background = "white";
    chargingCount.innerHTML = "0 %";
  } else if (level == 1) {
    firstPart.style.background = "red";
    secondPart.style.background = "white";
    thirtPart.style.background = "white";
    chargingCount.innerHTML = "33 %";
  } else if (level == 2) {
    firstPart.style.background = "orange";
    secondPart.style.background = "orange";
    thirtPart.style.background = "white";
    chargingCount.innerHTML = "66 %";
  } else if (level == 3) {
    firstPart.style.background = "green";
    secondPart.style.background = "green";
    thirtPart.style.background = "green";
    chargingCount.innerHTML = "100 %";
  } else if (level > 3) {
    alert("Battery ist vollständig geladen");
  } else if (level < 0) {
    alert("Battery ist leer");
  }
}
