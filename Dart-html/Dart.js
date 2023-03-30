let Spieler1score = 501;
let Spieler2score = 501;
Spieler1 = document.getElementById("Spieler1");
Spieler2 = document.getElementById("Spieler2");
const punkteEingabefeld = document.getElementById("Punkteingabefeld");
const GewonneneLegsS1 = document.getElementById("bishergewonnenS1");
const GewonneneLegsS2 = document.getElementById("bishergewonnenS2");
const GewonneneSetsS1 = document.getElementById("bishergewonnenS1");
const GewonneneSetsS2 = document.getElementById("bishergewonnenS2");
document.getElementById("SpielstandtSpieler1").innerHTML = Spieler1score;
document.getElementById("SpielstandtSpieler2").innerHTML = Spieler2score;
const Spieler1Active = Spieler1.active;
const Spieler2Active = Spieler2.active;

document.getElementById("button1");
document.getElementById("Punkteingabefeld");
function addvalue(value) {
  punkteEingabefeld.value += value;
  punkteEingabefeld.maxlength = 3;

  if (punkteEingabefeld.value.length <= 3) {
    punkteEingabefeld.classList.remove("red");
  } else {
    punkteEingabefeld.classList.add("red");
  }
  if (punkteEingabefeld.value < 180) {
    punkteEingabefeld.classList.remove("red");
  } else {
    punkteEingabefeld.classList.add("red");
  }
}
function updateSpielstand() {
  if (Spieler1.activ) {
    Spieler1.SpielstandS1 = Spieler1.SpielstandS1 - punkteEingabefeld.value;
  } else {
    Spieler2.SpielstandS2 = Spieler2.SpielstandS2 - punkteEingabefeld.value;
  }
}

function Spielzugabschließen() {
  scoreupdate();
  updateactivSpieler();
  removeValue();
}

function spieler1startet() {
  Spieler1.active = true;
  Spieler2.active = false;
}
function spieler2startet() {
  Spieler1.active = false;
  Spieler2.active = true;
}

function scoreupdate(Spieler1, Spieler2) {
  if (Spieler1.classList.contains("SpielerActive")) {
    Spieler1score = Spieler1score - punkteEingabefeld.value;
  } else {
    Spieler2score = Spieler2score - punkteEingabefeld.value;
  }
}
function updateactivSpieler() {
  if (Spieler1.classList.contains("SpielerActive")) {
    Spieler1.classList.remove("SpielerActive");
    Spieler2.classList.add("SpielerActive");
  }
  Spieler1active = !Spieler1.active;
  Spieler2active = !Spieler2.active;
}

function removeValue(value) {
  punkteEingabefeld.value -= value;
}
