function timelimit() {
  timer--;
  clock.textContent = timer;
  if (timer <= 0) {
    endTest();
  }
}

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
var started = false;
var started2 = false;
var started3 = false;
var showinghigscore = false;
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

initialss.style.display = "none";

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

//  button3.addEventListener ("click", function(event){
//   if(currentindex == 1 && event.target.id === button3.id ){
//     console.log("correct")
//     showoptions()
//   }else( timer -=15, showoptions())
//   })

// if(event.target.id === button3.id && currentindex == 1){
//   showoptions()
//   console.log("correct")
// }
