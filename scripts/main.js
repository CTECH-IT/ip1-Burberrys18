let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//the postions of the ball//
let y = (canvas.height/2) - 200
let x = canvas.width - 100;

let ballRadius = 10;

let mouseClicked = false;

let score = 0;

let timer = 70;

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

    do {
        setInterval(interval);
    } while (timer);

    drawScore();

    drawTimer();
}

//setting different intervals//
let interval = setInterval(draw, 1200);
let int = setInterval(draw, 1000);
let er = setInterval(draw, 700);
let val = setInterval(draw, 500);

function drawScore() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "blue"; 
    ctx.fillText("Score: " + score, 280, 20);
}

function drawTimer() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "lime";
    ctx.fillText("Timer: " + timer, 8, 20);
}

document.addEventListener("mousedown", mouseDownHandler, false);
document.addEventListener("mouseup", mouseUpHandler, false);

function mouseDownHandler(e) {
    if (e.button==1 || e.button==2) {
        mouseClicked = true;
        //if mouseClicked is true, add on the score by 1//
        score++;
    }
}

function mouseUpHandler(e) {
    if (e.button==1 || e.button==2) {
        mouseClicked = false;
    }
}