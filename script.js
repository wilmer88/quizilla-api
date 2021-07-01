var clock = document.getElementById("time");
var questions = document.getElementById("questions");
var mainButton = document.getElementById("option")
var maincontainer = document.getElementById("container");
var wordposition = document.getElementById("ask");
var respond1 = ["framework", "programing language", "scripting language", "gaming program"];
var respond2 = ["functions", "variables", "for loops", "c++"];
var respond3 = ["1990", "1998", "2002", "1995"];
var respond4 = ["loki", "wanda vision", "falcon and the winter soilder", "agent carter"];
var respond2 = ["frank", "victor", "felix", "wilmer"];
var ask = [
  "is javascript",
  "is not part of javascript",
  "year javascript was created",
  "time travel marvel show",
  "who wrote this code",
];
var timer = 60;

var answers = 0;
function showoptions() {
  wordposition.textContent = ask[answers];
  buttonB.innerHTML = respondA[answers];
  buttonC.innerHTML = respondB[answers];
  answers++;
}

function setTimer() {
  var prepareInterval = setInterval(function () {
    clock.textContent = timer;
    timer--;
    if (timer <= 0) {
      clearInterval(prepareInterval);
    }
  }, 1000);
}
buttonA.addEventListener("click", function () {
  setTimer();
  
});
