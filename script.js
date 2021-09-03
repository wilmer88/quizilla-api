var currentindex = 0;
var answerBox = document.getElementsByTagName("button");
var listItem = document.getElementsByTagName("ul");
var listChoice = document.getElementsByTagName("li");
var clock = document.getElementById("time");
var questions = document.getElementById("start");
var button1 = document.getElementById("bsb");
var button2 = document.getElementById("nsync");
var button3 = document.getElementById("98");
var button4 = document.getElementById("otown");
var maincontainer = document.getElementById("container");
var timer = 60;
var started = false; 
var respond1 = ["framework", "for loops", "1990", "loki"];
var respond2 = ["gaming program", "variables", "1995", "c sharp"];
var respond3 = ["scripting language", "functions", "2002", "rugrats"];
var respond4 = ["programing language", "c++", "1986", "agent carter"];

function setTime() {
  var timerInterval = setInterval(function() {
    timer--;
    clock.textContent = timer;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      
    }

  }, 1000);
}

var ask = [
  "is javascript",
  "is not part of javascript",
  "year javascript was created",
  "time travel marvel show",
  "who wrote this code",
];





function showoptions() {
  questions.textContent = ask[currentindex];
  button1.textContent = respond1[currentindex];
  button2.textContent = respond2[currentindex];
  button3.textContent = respond3[currentindex];
  button4.textContent = respond4[currentindex];
  currentindex++;
  console.log(currentindex)
  
}


function wasClicked() {
  console.log("buttonkl[o] was clicked");
  currentindex++;
}
button1.addEventListener("click", function () {
  setTime()
  console.log(currentindex)
if(started == false){
  started = true;
  showoptions()
  }else(showoptions());


});



