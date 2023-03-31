const punkteEingabefeld = document.getElementById("Punkteingabefeld");
const GewonneneLegsS1 = document.getElementById("bishergewonnenS1");
const GewonneneLegsS2 = document.getElementById("bishergewonnenS2");
const GewonneneSetsS1 = document.getElementById("bishergewonnenS1");
const GewonneneSetsS2 = document.getElementById("bishergewonnenS2");
const Spieler1 = document.getElementById("Spieler1");
const Spieler2 = document.getElementById("Spieler2");
const Spieler1score = document.getElementById("SpielstandtSpieler1");
const Spieler2score = document.getElementById("SpielstandtSpieler2");
const LetzteAufnahmeS1 = document.getElementById("LetzteS1");
const LetzteAufnahmeS2 = document.getElementById("LetzteS2");
document.getElementById("SpielstandtSpieler2").innerHTML = Spieler2score;
document.getElementById("button1");
document.getElementById("Punkteingabefeld");
Spieler2score.textContent = 501;
Spieler1score.textContent = 501;
LetzteAufnahmeS1.value = 0;
LetzteAufnahmeS2.value = 0;

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
  neueLetzteAufnahme();
  updateactivSpieler();
  removeValue();
  überprüfenObGewonnen();
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
function überprüfenObGewonnen() {
  if (Spieler1score.textContent == 0) {
    GewonneneLegsS1.textContent += 1;
    Spieler1score.textContent = 501;
    Spieler2score.textContent = 501;
  }
  if (Spieler2score.textContent == 0) {
    GewonneneLegsS2.textContent += 1;
    Spieler2score.textContent = 501;
    Spieler1score.textContent = 501;
  }
}
function neueLetzteAufnahme() {
  console.log(
    Spieler1.classList.contains("SpielerActive"),
    punkteEingabefeld.value,
    LetzteAufnahmeS1.textContent,
    LetzteAufnahmeS2.textContent
  );
  if (Spieler1.classList.contains("SpielerActive")) {
    LetzteAufnahmeS1.textContent = punkteEingabefeld.value;
  } else {
    LetzteAufnahmeS2.textContent = punkteEingabefeld.value;
  }
}

//Aufnahmenarr[0];
//function neuerAVG() {}
