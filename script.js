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
var timer = 5;
//array called ask with five objects containing two properties
var ask = [
  {
    pregunta: "is javascript",
    options: ["framework", "for loops", "1990", "scripting language"],
    answer: "scripting language"
  },
  {
    pregunta: "is not part of javascript",
    options: ["Methods", "variables", "objects", "c sharp"],
  },
  {
    pregunta: "year javascript was created",
    options: ["1995", "1999", "2002", "1984"],
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
function setTime() {
  var timerInterval = setInterval(function () {
    timer--;
    clock.textContent = timer;

    if (timer === 0) {
      clearInterval(timerInterval);
      clock = "";
    }
  }, 1000);
}

//this code hides the set highscore html block
initialss.style.display = "none";


//function that starts quiz
function comienzaPrueba() {
  var objectVariableThatContainsQCA = ask[currentindex]
console.log("code will execute when ready");
 
}

button1.addEventListener("click", function () {
 
  console.log("button1 was clicked");
   comienzaPrueba();
   setTime()
  
});


