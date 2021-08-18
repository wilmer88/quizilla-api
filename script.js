var boton = document.createElement("button");
var listItem = document.getElementsByTagName("ol");
var listChoice = document.getElementsByTagName("li");
var clock = document.getElementById("time");
var questions = document.getElementById("qa");

var respond1 = ["framework", "for loops", "1990", "loki"];
var respond2 = ["gaming program", "variables", "1995", "c sharp"];
var respond3 = ["scripting language", "functions", "2002", "rugrats"];
var respond4 = ["programing language", "c++", "1986", "agent carter"];

var ask = [
  "is javascript",
  "is not part of javascript",
  "year javascript was created",
  "time travel marvel show",
  "who wrote this code",
];



document.body.append(boton);

// for (var i = 0; i < respond3.length; i++) {
//   buton.textContent = respond3[i];
//   listChoice.id = listNumber++;

//   listChoice.textContent = answerBox;

// for (var i = 0; i < respond3.length; i++) {
//   listItem.append(listChoice);
// }

var timer = 60;



function setTimer() {
  var prepareInterval = setInterval(function () {
    clock.textContent = timer;
    timer--;
    if (timer <= 0) {
      clearInterval(prepareInterval);
    }
  }, 1000);
}
function wasClicked() {
  console.log("buttonkl[o] was clicked");
}
listChoice.addEventListener("click", function () {
  wasClicked();
  // setTimer();
  // showoptions();
});

