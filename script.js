var clock = document.getElementById("time");
var questions = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var maincontainer = document.getElementById("container");
var wordposition = document.getElementById("ask");
var respondA = ["true", "yes", "always", "true"];
var respondB = ["false", "no", "never", "false"];
var ask = [
  "is javascript a progarming language",
  "is javascript case sensative",
  "was java script here in 1960",
  "is javascript a progarming language:",
  "your are done with this quiz",
];
var timer = 60;

var answers = 0;
function showoptions() {
  wordposition.textContent = ask[answers];
  buttonB.innerHTML = respondA[answers];
  buttonC.innerHTML = respondB[answers];
  answers++;
}

// showquestions();
//buttonA.addEventListener("click", showquestion);

buttonA.addEventListener("click", setTimer);

function setTimer() {
  var prepareInterval = setInterval(function () {
    clock.textContent = timer;
    timer--;
    if (timer <= 0) {
      clearInterval(prepareInterval);
    }
  }, 1000);
}
buttonB.addEventListener("click", showoptions);
buttonC.addEventListener("click", showoptions);
