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
//this code hides the set highscore block
initialss.style.display = "none";
//this function countsdown the timer with a conditional code to esecute for when the timer reaches zero
function timelimit() {
  timer--;
  clock.textContent = timer;
  if (timer <= 0) {
    endTest();
  }
}

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

function showoptions() {
  questions.textContent = ask[currentindex];
  button1.textContent = respond1[currentindex];
  button2.textContent = respond2[currentindex];
  button3.textContent = respond3[currentindex];
  button4.textContent = respond4[currentindex];
  currentindex++;
  console.log(currentindex);

  if (currentindex >= 5) {
    qa.style.display = "none";
    initialss.style.display = "initial";
  }
}
function question1Check(event) {
  if (button1.id === this.event.target.id) {
    console.log(button1.id);
    console.log(this.event.target.id);
    console.log("allgood");
    showoptions();
  } else timer -= 15;
  console.log("somthing went wrong");
  showoptions();
}
function question2Check(event) {
  if (button4.id === !this.event.target.id) {
    timer -= 15;
    console.log(button4.id);
    console.log(event.target.id);
  } else showoptions();
  console.log("allgood");
}

button1.addEventListener("click", function (event) {
  clock = setInterval(timelimit, 1000);

  if (started === false) {
    started = true;
    showoptions();
    question1Check();
  }
});

