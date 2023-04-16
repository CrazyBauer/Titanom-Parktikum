const punkteEingabefeld = document.getElementById("Punkteingabefeld");
const GewonneneLegsS1 = document.getElementById("bishergewonnenenelegsS1");
const GewonneneLegsS2 = document.getElementById("bishergewonnenenelegsS2");
const GewonneneSetsS1 = document.getElementById("bishergewonnenenelsetsS1");
const GewonneneSetsS2 = document.getElementById("bishergewonnenenelegsS2");
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
LetzteAufnahmeS1.textContent = 0;
LetzteAufnahmeS2.textContent = 0;

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
  überprüfenObzuVielePunkte();
 // if (!überprüfenObÜberworfen()){
    scoreupdate();
    neueLetzteAufnahme();
    updateactivSpieler();
    removeValue();
    überprüfenObGewonnen(); 
  //}else{ 
 // neueLetzteAufnahmeÜberworfen();
 // scoreupdate();
 //scoreupdateüberworfen();
 // updateactivSpieler();
 // removeValue();
 // überprüfenObGewonnen();
}
//}

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
    if(Spieler1score.textContent - punkteEingabefeld.value == 1 || Spieler1score.textContent - punkteEingabefeld.value < 0 ){
      Spieler1score.textContent = Spieler1score.textContent
      alert("Überworfen")
  }
  else{
    Spieler1score.textContent -= punkteEingabefeld.value;
  }
  } else {
    if(Spieler2score.textContent - punkteEingabefeld.value == 1 || Spieler2score.textContent - punkteEingabefeld.value < 0 ){
      Spieler2score.textContent = Spieler2score.textContent
      alert("Überworfen")
  }
  else{
    Spieler2score.textContent -= punkteEingabefeld.value
  }
}}

function updateactivSpieler() {
  if (Spieler1.classList.contains("SpielerActive")) {
    Spieler1.classList.remove("SpielerActive");
    Spieler1score.classList.remove("SpielerActive")
    Spieler2score.classList.add("SpielerActive")
    Spieler2.classList.add("SpielerActive");
  } else {
    Spieler1score.classList.add("SpielerActive")
    Spieler2score.classList.remove("SpielerActive")
    Spieler1.classList.add("SpielerActive");
    Spieler2.classList.remove("SpielerActive");
  }
}
function überprüfenObÜberworfen() {
if(Spieler1score - punkteEingabefeld.value <= 1 || Spieler2score - punkteEingabefeld.value <= 1){
 }
}
function removeValue(value) {
  punkteEingabefeld.value -= value;
}
function neueLetzteAufnahme() {
  if (Spieler1.classList.contains("SpielerActive")) {
    LetzteAufnahmeS1.textContent = punkteEingabefeld.value;
  } else {
    LetzteAufnahmeS2.textContent = punkteEingabefeld.value;
  }
}
function neueLetzteAufnahmeÜberworfen() {
  if (Spieler1.classList.contains("SpielerActive")) {
    LetzteAufnahmeS1.textContent = 0;
  } else {
    LetzteAufnahmeS2.textContent = 0;
  }
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
  if (GewonneneLegsS1.textContent == 11) {
    GewonneneLegsS1.textContent = 2;
  }
  if (GewonneneLegsS2.textContent == 11) {
    GewonneneLegsS2.textContent = 2;
  }
  if (GewonneneLegsS1.textContent == 21) {
    GewonneneLegsS1.textContent = 3;
  }
  if (GewonneneLegsS2.textContent == 21) {
    GewonneneLegsS2.textContent = 3;
  }
  if (GewonneneLegsS1.textContent == 3) {
    alert("Spieler1 hat gewonnen");
    GewonneneLegsS1.textContent = 0;
    GewonneneLegsS2.textContent = 0;
  }
  if (GewonneneLegsS2.textContent == 3) {
    alert("Spieler2 hat gewonnen");
    GewonneneLegsS1.textContent = 0;
    GewonneneLegsS2.textContent = 0;
    LetzteAufnahmeS1.textContent = 0;
    LetzteAufnahmeS1.textContent = 0;
  }
}

function überprüfenObzuVielePunkte() {
  if (
    punkteEingabefeld.value < 1 ||
    punkteEingabefeld.value > 180 ||
    punkteEingabefeld.value == 163 ||
    punkteEingabefeld.value == 166 ||
    punkteEingabefeld.value == 169 ||
    punkteEingabefeld.value == 172 ||
    punkteEingabefeld.value == 175 ||
    punkteEingabefeld.value == 178 ||
    punkteEingabefeld.value == 179 ||
    punkteEingabefeld.value == 173 ||
    punkteEingabefeld.value == 176 ||
    punkteEingabefeld.value == 169 ||
    punkteEingabefeld.value == 168 ||
    punkteEingabefeld.value == 163
  ) {
    punkteEingabefeld.value = 0;
    alert("error");
  }
}
//  if(Spieler1.classList.contains("SpielerActive")){
 //   Spieler1score.textContent += Spieler1score.textContent + punkteEingabefeld.value
 //   }else{
   // Spieler2score.textContent += Spieler2score.textContent + punkteEingabefeld.value
  //}}