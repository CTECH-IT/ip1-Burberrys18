let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//the postions of the ball//
let y = (canvas.height/2) - 200
let x = canvas.width - 100;

let ballRadius = 10;

let mouseClicked = false;

let score = 0;

let highscore = localStorage.getItem("highscore");

let timer = 30;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    //clear//
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawBall();
    //randomizing the position of the ball//
    x = Math.random() * canvas.width;
    y = Math.random() * canvas.height;

    drawScore();

    //adding high score//
    drawHighScore();
    if(highscore !== 0){
        if (score > highscore) {
            localStorage.setItem("highscore", score);      
        }
    }
    else{
        localStorage.setItem("highscore", score);
    }

    drawTimer();
}

let interval = setInterval(draw, 800);

function drawScore() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "blue"; 
    ctx.fillText("Score: " + score, 275, 20);
}

function drawHighScore() {
    ctx.font = "18px Roboto";
    ctx.fillStyle = "black";
    ctx.fillText("High score: " + highscore, 260, 40);
}



function drawTimer() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Timer: " + timer, 8, 20);
}

//counting down function//
function countDown() {
    timer--;
    
    if (timer==0) {
        alert("Game Over!", "Score: ", score);
        document.location.reload();
        clearInterval(time);
    }
}

let time = setInterval(countDown, 1000);

document.body.addEventListener("mousedown", mouseDownHandler);
document.body.addEventListener("mouseup", mouseUpHandler);

function mouseDownHandler(event) {
        mouseClicked = true;
        //if mouseClicked is true, add on the score by 1//
        score++;
}

function mouseUpHandler(event) {
        mouseClicked = false;
}