var clock = document.getElementById("time");
var questions = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var maincontainer = document.getElementById("container");
var wordposition = document.getElementById("ask");
var respondA = ["true"];
var respondB = ["false"];
var ask = [
  "is javascript a progarming language",
  "is javascript case sensative",
  "is javascript case sensative",
  "is javascript a progarming language:",
];
var timer = 60;
// function showquestions() {
//   maincontainer.attributes=null;
//   wordpositon.textContent = ask[1];
//   buttonA.text = respondA;
//   buttonB.text = respondB;
// }
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
