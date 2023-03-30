let SpielstandS1 = 501;
let SpielstandS2 = 501;
const punkteEingabefeld = document.getElementById("Punkteingabefeld");
const Spieler1 = document.getElementById("Spieler1");
const Spieler2 = document.getElementById("Spieler2");
const GewonneneLegsS1 = document.getElementById("bishergewonnenS1");
const GewonneneLegsS2 = document.getElementById("bishergewonnenS2");
const GewonneneSetsS1 = document.getElementById("bishergewonnenS1");
const GewonneneSetsS2 = document.getElementById("bishergewonnenS2");
document.getElementById("SpielstandtSpieler1").innerHTML = SpielstandS1;
document.getElementById("SpielstandtSpieler2").innerHTML = SpielstandS2;

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
  //console.log(punkteEingabefeld.value, punkteEingabefeld.classList);
}

Spieler2 = Objekt();
{
  Spieler1.aktiv = true;
  Spieler1.name = "Spieler1";
  Spieler1.Spielstad = SpielstandS1;
}
Spieler2 = Objekt();
{
  Spieler2.aktiv = false;
  Spieler2.name = "Spieler2";
  Spieler2.Spielstad = SpielstandS2;
}

function neueraktiverSpieler() {
  if (Spieler1.aktiv) {
    !Spieler1.aktiv;
    !Spieler2.aktiv;
  } else {
    !Spieler1.aktiv;
    !Spieler2.aktiv;
  }
}
function updateSpielstand() {
  if (Spieler1.classList.contains("aktiverSpieler")) {
    SpielstandS1 = SpielstandS1 - punkteEingabefeld.value;
  } else {
    SpielstandS2 = SpielstandS2 - punkteEingabefeld.value;
  }
}

function Spielzugabschließen() {
  updateSpielstand();
  neueraktiverSpieler();
}

//function spieler1startet() {
//Spieler1.classList.add("aktiverSpieler");
//  Spieler2.classList.remove("aktiverSpieler");
//}
//function spieler2startet() {
//  Spieler2.classList.add("aktiverSpieler");
//  Spieler1.classList.remove("aktiverSpieler");}
