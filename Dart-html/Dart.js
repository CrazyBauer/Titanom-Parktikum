let Spieler1score = 501;
let Spieler2score = 501;
let Summebishergeworfens1 = 0;
let Summebishergeworfens2 = 0;
let bishergeworfens1 = 0;
let bishergeworfens2 = 0;

let avgS1 = bishergeworfens1 / Summebishergeworfens1;
let avgS2 = bishergeworfens1 / Summebishergeworfens1;
const punkteEingabefeld = document.getElementById("Punkteingabefeld");
const GewonneneLegsS1 = document.getElementById("bishergewonnenS1");
const GewonneneLegsS2 = document.getElementById("bishergewonnenS2");
const GewonneneSetsS1 = document.getElementById("bishergewonnenS1");
const GewonneneSetsS2 = document.getElementById("bishergewonnenS2");
const Spieler1 = document.getElementById("Spieler1");
const Spieler2 = document.getElementById("Spieler2");
const AVGSpieler1 = document.getElementById("avgS1")
const AVGSpieler2 = document.getElementById("avgS2")
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
  addtoAVG()
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

function scoreupdate(Spieler1score, Spieler2score) {
  if (Spieler1.classList.contains("SpielerActive")) {
    Spieler1score -= punkteEingabefeld.value;
  } else {
    Spieler2score -= punkteEingabefeld.value;
  }
}
function updateactivSpieler() {
  if (Spieler1.classList.contains("SpielerActive")) {
    Spieler1.classList.remove("SpielerActive");
    Spieler2.classList.add("SpielerActive");
  }else{
    Spieler1.classList.add("SpielerActive");
    Spieler2.classList.remove("SpielerActive");
  }
}
 
function removeValue(value) {
  punkteEingabefeld.value -= value;
}

//function addtoAVG(){
//
//     if(Spieler1.classList.contains("SpielerActive")){
//     bishergeworfens1 + 1
//     Summebishergeworfens1 + punkteEingabefeld.value
//     return AVGSpieler1.textContent("∅: " + avgS1)
//
//     }else{
//      bishergeworfens2 + 1
//     Summebishergeworfens2 + punkteEingabefeld.value
//     return AVGSpieler2.textContent("∅: "  + avgS2)
//     }
//     }
    