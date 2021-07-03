var answerBox = document.getElementsByTagName("button");
var listItem = document.getElementsByTagName("ul");
var listChoice = document.getElementsByTagName("li");
var clock = document.getElementById("time");
var questions = document.getElementById("qa");
var button1 = document.getElementById("bsb");
var button2 = document.getElementById("nsync");
var button3 = document.getElementById("98");
var button4 = document.getElementById("otown");
var button5 = document.getElementById("newkid");
var maincontainer = document.getElementById("container");

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

for (var i = 0; i < respond3.length; i++) {
  answerBox.textContent = respond3[i];
}
var listNumber = 1;
for (var i = 0; i < respond3.length; i++) {
  listChoice.id = listNumber++;
}
for (var i = 0; i < respond3.length; i++) {
  listChoice.value = answerBox;
}
for (var i = 0; i < respond3.length; i++) {
  listItem.append(listChoice);
}

var timer = 60;

var currentindex = 0;
function showoptions() {
  questions.textContent = ask[currentindex];
  button5.textContent = respond1[currentindex];
  button2.textContent = respond2[currentindex];
  button3.textContent = respond3[currentindex];
  button4.textContent = respond4[currentindex];

  currentindex++;
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
function wasClicked() {
  console.log("buttonkl[o] was clicked");
}
page.button2.addEventListener("click", function () {
  wasClicked();
  // setTimer();
  // showoptions();
});
// button1.addEventListener("click", function () {
//   button1.style.display = "none";
//   showoptions();
// });
