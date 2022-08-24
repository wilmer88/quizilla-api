function printallscores(){
var highscorez= JSON.parse(window.localStorage.getItem("highscore"))||[];
highscorez.sort(function (a, b){
    return b.score - a.score
})
highscorez.forEach(function(score){
    litag = document.createElement("li");
   
    tdData = document.createElement("td");
    tdData.textContent = score.inital + "-" + score.score;
    litag.appendChild(tdData);
    
    var olEle = document.getElementById("pands");
    olEle.appendChild(litag)
})
}





printallscores()