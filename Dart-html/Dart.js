const punkteEingabefeld = document.getElementById("Punkteingabefeld");
const GewonneneLegsS1 = document.getElementById("bishergewonnenS1");
const GewonneneLegsS2 = document.getElementById("bishergewonnenS2");
const GewonneneSetsS1 = document.getElementById("bishergewonnenS1");
const GewonneneSetsS2 = document.getElementById("bishergewonnenS2");
const Spieler1 = document.getElementById("Spieler1");
const Spieler2 = document.getElementById("Spieler2");
const Spieler1score = document.getElementById("SpielstandtSpieler1");
const Spieler2score = document.getElementById("SpielstandtSpieler2");
document.getElementById("SpielstandtSpieler2").innerHTML = Spieler2score;
const Spieler1Active = Spieler1.active;
const Spieler2Active = Spieler2.active;

document.getElementById("button1");
document.getElementById("Punkteingabefeld");
Spieler2score.textContent = 501;
Spieler1score.textContent = 501;

function addvalue(value) {
  punkteEingabefeld.value += value;
  punkteEingabefeld.maxlength = 3;

  if (punkteEingabefeld.value.length <= 3) {
    punkteEingabefeld.classList.remove("red");
  } else {
    punkteEingabefeld.classList.add("red");
  }
  if (punkteEingabefeld.value <= 180) {
    punkteEingabefeld.classList.remove("red");
  } else {
    punkteEingabefeld.classList.add("red");
  }
}

function Spielzugabschließen() {
  scoreupdate();
  updateactivSpieler();
  removeValue();
}

function spieler1startet() {
  Spieler1.classList.add("SpielerActive");
  Spieler2.classList.remove("SpielerActive");
}
function spieler2startet() {
  Spieler1.classList.remove("SpielerActive");
  Spieler2.classList.add("SpielerActive");
}

function scoreupdate() {
  if (Spieler1.classList.contains("SpielerActive")) {
    Spieler1score.textContent -= punkteEingabefeld.value;
  } else {
    Spieler2score.textContent -= punkteEingabefeld.value;
  }
}
function updateactivSpieler() {
  if (Spieler1.classList.contains("SpielerActive")) {
    Spieler1.classList.remove("SpielerActive");
    Spieler2.classList.add("SpielerActive");
  } else {
    Spieler1.classList.add("SpielerActive");
    Spieler2.classList.remove("SpielerActive");
  }
}

function removeValue(value) {
  punkteEingabefeld.value -= value;
}
function neueravg() {}
