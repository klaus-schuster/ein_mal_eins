const form_val1 = document.getElementById("val1");
const form_val2 = document.getElementById("val2");
const form_points = document.getElementById("punkteStr");
const form_coutndown = document.getElementById("countdown");
const form_highscore = document.getElementById("highscore");

let countdown_timer = 5;
let upperLimit = 10;

createNumber = () => Math.floor(Math.random() * upperLimit) + 1;

let zahl1, zahl2, x, countdown;
let highscore = 0;
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
  clearInterval(x);
  const eingabe = parseInt(document.getElementById("inputEingabe").value);

  //console.log(result + typeof result);
  //console.log(eingabe + typeof eingabe);

  if (result == eingabe) {
    //console.log("richtig");
    points++;
    if (points > highscore) {
      highscore = points;
      form_highscore.innerHTML = String("Highscore: " + highscore);
    }

    document.getElementById("punkte").style.display = "block";
    document.getElementById("punkte").style.backgroundColor =
      "rgba(201, 254, 216, 0.45)";
    if (points > 15) {
      upperLimit = 20;
      countdown_timer = 3;
    } else if (points > 10) upperLimit = 15;
  } else {
    //console.log("falsch");
    points = points - 2;
    document.getElementById("punkte").style.backgroundColor =
      "rgba(255, 166, 164, 0.45)";

    if (points < 0) {
      points = 0;
      //document.getElementById("punkte").style.display = "none";
    } else if (points <= 10) {
      upperLimit = 10;
    } else if (points <= 15) {upperLimit = 15;
      countdown_timer = 5;
    }
  }

  result = setElements();
  document.getElementById("inputEingabe").value = "";

  countdown = countdown_timer;
  form_coutndown.innerHTML = String("Countdown: " + countdown);
  if (points > 0) x = setInterval(f_countdown, 1000);

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

function f_countdown() {
  countdown--;
  form_coutndown.innerHTML = String("Countdown: " + countdown);
  if (countdown == 0) {
    document.getElementById("btn").click();
  }
}
