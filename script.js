var qa = document.getElementById("show");
var initialss = document.getElementById("hide");
var currentindex = 0;
var grade = document.getElementById("confirm");
var clock = document.getElementById("time");
var questions = document.getElementById("start");
var button1 = document.getElementById("bsb");
var button2 = document.getElementById("nsync");
var button3 = document.getElementById("98");
var button4 = document.getElementById("otown");
var maincontainer = document.getElementById("container");
var timer = 60;
//array called ask with five objects containing two properties
var ask = [
  {
    pregunta: "is javascript",
    options: ["framework", "for loops", "1990", "loki"],
  },
  {
    pregunta: "is not part of javascript",
    options: ["gaming program", "variables", "1995", "c sharp"],
  },
  {
    pregunta: "year javascript was created",
    options: ["scripting language", "functions", "2002", "rugrats"],
  },
  {
    pregunta: "time travel marvel show",
    options: ["programing language", "c++", "1986", "agent carter"],
  },
  {
    pregunta: "who inveted javascript",
    options: ["Bill Gates", "Brendan Eich", "Steve Jobs", "steven Hopkings"],
  },
];
//instance where the timer on the screen begins to count down unsing the timelimit function
clock.textContent = setInterval(timelimit, 1000);
//this code hides the set highscore html block
initialss.style.display = "none";

//this function countsdown the timer with a conditional code to esecute for when the timer reaches zero
function timelimit() {
  timer--;
  clock.textContent = timer;
  if (timer <= 0) {
    clearInterval(timelimit);
    clock=""
    console.log("timer reached 0 value");
  }
};
//function that starts quiz
function comienzaPrueba() {
console.log("code will execute when ready");

}

button1.addEventListener("click", function () {
  console.log("button1 was clicked");
   comienzaPrueba();
  
});

// function setTime() {
//   var timerInterval = setInterval(function () {
//     timer--;
//     clock.textContent = timer;

//     if (timer === 0) {
//       clearInterval(timerInterval);
//       clock = "";
//     }
//   }, 1000);
// }
