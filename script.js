
var starter = document.getElementById("lll");
var qa = document.getElementById("show");
var initialsss = document.getElementById("hide");
var currentindex = 0;
var grade = document.getElementById("confirm");
var clock = document.getElementById("time");
var sco = document.getElementById("scoreT")
var btUno= document.getElementById("bsb");
var qaEl= document.getElementById("start");
var maincontainer = document.getElementById("container");
var initalSaveLS = document.getElementById("saveB")
var btDos = document.getElementById("ppp");
var btTres = document.getElementById("ttt");
var btFour = document.getElementById("eee");
var started = false
var inPut = document.getElementById("Hsc");

var timer = 100;

//array called ask with five objects containing two properties
var ask = [
  {
    pregunta: "is javascript",
    options: ["framework", "for loops", "1990", "scripting language"],
    answer: "scripting language"
  },
  {
    pregunta: "is not part of javascript",
    options: ["Methods", "variables", "objects", "c++"],
    answer: "c++"
  },
  {
    pregunta: "year javascript was created",
    options: ["1995", "1999", "2002", "1984"],
    answer: "1995"
  },
  {
    pregunta: "not a type of variables",
    options: ["object", "c sharp", "boolian", "interger"],
    answer: "c sharp"
  },
  {
    pregunta: "who inveted javascript",
    options: ["Bill Gates", "Brendan Eich", "Steve Jobs", "steven Hopkings"],
    answer: "Brendan Eich"
  },
];





function setTime() {
  var timerInterval = setInterval(function () {
    timer--;
    clock.textContent = timer;
    if (timer === 0 || currentindex > 4) {
      clearInterval(timerInterval);
      qa.style.display = "none";
      initialsss.style.display = "";
      sco.textContent = timer

      clock = "";
    }
  }, 1000);
};




function checkAnswer(){
 
  if(this.event.target.textContent !== ask[currentindex].answer){
    timer -= 15
    console.log(this.event.target.textContent);
    console.log(this.ask[currentindex].answer);
    console.log(currentindex)
    currentindex++
    showQuestions()
  }else(showQuestions,currentindex++)
};


 
  function showQuestions(){
    var objectVariableThatContainsQCA = ask[currentindex];
 qaEl.textContent = objectVariableThatContainsQCA.pregunta
btUno.textContent = objectVariableThatContainsQCA.options[0];
btDos.textContent = objectVariableThatContainsQCA.options[1];
btTres.textContent = objectVariableThatContainsQCA.options[2];
btFour.textContent = objectVariableThatContainsQCA.options[3];

};
function locsave(){
  highscore= JSON.parse(window.localStorage.getItem("highscore")) || [];
var addnew= {
  score: timer,
  inital: inPut.value
};
highscore.push(addnew);
window.localStorage.setItem("highscore", JSON.stringify(highscore));
window.location.href = "highScore.html";
}

initialsss.style.display = "none";

  starter.addEventListener("click",function(){
    if(!started){
      setTime()
      started = true;
    };
starter.style.display = "none";
    showQuestions()
   
   btFour.onclick=function(){
     
    checkAnswer();
    showQuestions()
   }
   btUno.onclick=function(){
    

    checkAnswer()
    showQuestions()
    }
    btDos.onclick=function(){
    

      checkAnswer()
      showQuestions()
    }
    btTres.onclick=function(){
    

      checkAnswer()
      showQuestions()
    }
initalSaveLS.onclick=function(){
  locsave();

}
   
  })
    
    
    
    
  
 
 
    
   
 

 


 
  //function that starts quiz


  
    
    
    
    
  
  
  