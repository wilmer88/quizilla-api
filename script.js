var timer = document.getElementById("time");
var questions = document.getElementById("questions");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var container = document.getElementsByClassName("container");

var ask = [
  {
    "what is javascript?": [
      "clothesbrand",
      "videogame",
      "programing language",
      "tv",
    ],
  },
  { "is javascript case-sensitive?": ["maybe", "sometimes", "false", "true"] },
  {
    "what is the syntex for an array": ["programinglanguge", "no", "<>", "[]"],
  },
  {
    "is java able to change images": ["tvshow", "maybe", "[]", "true", "false"],
  },
];

// function showquestions() {
//   for (var i = 0; i < ask.length; i++) {
//     var questionShown = ask[0];
//   }
//   showquestions();

buttonA.addEventListener("click", function () {
  ask.text = ask[0];
});
// }
// questions.textcontent = ask[i];
// function setTimer(){
//       var timer = 60;
//       var prepareInterval = setInterval(function(){
//        timer--;
//         if (timer === 0){
//          }, 1000
//        }

//

// var currentaskIndex = 0;
// function addAndRemove (){
//    var currentaskIndex = 0;
//     ask.textContent = ask[currentaskIndex];
//     //askArray = ask.split("")

//   // .empty
//      .questions.setAttribute.textContent = ask[currrentaskIndex]
// // if else
//       answerA.setAttribuete.textContent == answerA[0]; +

//     answerB.setAttribuete.textContent == answerB[0]; +
//     answerC.setAttribute.textConttent == answerC[0]; +
//    answerD.setAttribute.textConttent == answerD[0];
