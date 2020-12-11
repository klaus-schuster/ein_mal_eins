const form_val1 = document.getElementById("val1");
const form_val2 = document.getElementById("val2");
const form_points = document.getElementById("punkteStr");

const upperLimit = 10;

createNumber = () => Math.floor(Math.random() * upperLimit) + 1;

let zahl1, zahl2;
let points = 0;

function setElements() {
  zahl1 = createNumber();
  zahl2 = createNumber();
  form_val1.innerHTML = String(zahl1);
  form_val2.innerHTML = String(zahl2);
  form_points.innerHTML = String("Punkte: " + points);
  return zahl1 * zahl2;
}

let result = setElements();

document.getElementById("inputEingabe").focus();

function checkResult() {
  const eingabe = parseInt(document.getElementById("inputEingabe").value);

  //console.log(result + typeof result);
  //console.log(eingabe + typeof eingabe);

  if (result == eingabe) {
    //console.log("richtig");
    points++;
    document.getElementById("punkte").style.display = "block";
  } else {
    //console.log("falsch");
    points = points -  2;
    if (points < 0) {
      points = 0;
      document.getElementById("punkte").style.display = "none";
    }
  }

  result = setElements();
  document.getElementById("inputEingabe").value = "";
  document.getElementById("inputEingabe").focus();
}

document.getElementById("btn").addEventListener("click", checkResult);

// Execute a function when the user releases a key on the keyboard
document
  .getElementById("inputEingabe")
  .addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("btn").click();
    }
  });
