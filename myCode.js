var holes = [];
var speedX = 0;
var speedY = 0;
var posX = 30;
var posY = 30;
var startGame = 0;
var ball = document.getElementById("ball");
let container = document.getElementsByClassName("container")[0];

function createHole() {
    for(i=2;i<(window.innerWidth/100);i++){
        let hole = document.createElement('div');
        hole.classList.add("hole");
        hole.style.left=100*i+Math.random()*75-95+'px';
        hole.style.top=Math.random()*(window.innerHeight-95)/2+'px';
        holes.push(hole);
        container.appendChild(hole);
    }
    for(i=2;i<(window.innerWidth/100);i++){
        let hole = document.createElement('div');
        hole.classList.add("hole");
        hole.style.left=100*i+Math.random()*75-95+'px';
        hole.style.top=Math.random()*(window.innerHeight)/2+window.innerHeight/2-100+'px';
        holes.push(hole);
        container.appendChild(hole);
    }
}
createHole();