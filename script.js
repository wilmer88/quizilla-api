var clock = document.getElementById("time");
var questions = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var maincontainer = document.getElementById("container");
var wordposition = document.getElementById("ask");
var respondA = ["true", "yes", "always"];
var respondB = ["false", "no", "never"];
var ask = [
  "is javascript a progarming language",
  "is javascript case sensative",
  "was java script here in 1960",
  "is javascript a progarming language:",
];
var timer = 60;
var index = 0;
function showoptionsS() {
  wordposition.textContent = ask[0];
  index++;
}
var answers = 0;
function showoptions() {
  buttonA.textContent = respondA[0];
  buttonB.innerHTML = respondB[0];
  answers++;
}

// showquestions();
//buttonA.addEventListener("click", showquestion);

buttonA.addEventListener("click", showoptions());
{
  function setTimer() {
    var prepareInterval = setInterval(function () {
      clock.textContent = timer;
      timer--;
      if (timer <= 0) {
        clearInterval(prepareInterval);
      }
    }, 1000);
  }
}
