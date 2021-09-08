function printallscores(){
var highscorez= JSON.parse(window.localStorage.getItem("highscore"))||[];
highscorez.sort(function (a, b){
    return b.score - a.score
})
highscorez.forEach(function(score){
    litag = document.createElement("li");
    litag.textContent = score.inital + "-" + score.score
    console.log(typeof highscorez.inital)
    var olEle = document.getElementById("pands");
    olEle.appendChild(litag)
})
}





printallscores()