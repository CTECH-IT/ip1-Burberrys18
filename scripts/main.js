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

    drawScore();

    drawTimer();
}

let startInterval = setInterval(draw, 1200);
let interval = setInterval(draw, 950);
let endInterval = setInterval(draw, 700);

function drawScore() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "blue"; 
    ctx.fillText("Score: " + score, 280, 20);
}

function drawTimer() {
    ctx.font = "18px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Timer: " + timer, 8, 20);
}

//counting down function//
function countDown() {
    timer--;
    
    if(timer < 70){
        startInterval = setInterval(draw,1200);
    }else if(timer < 40) {
        clearInterval(startInterval)
        interval = setInterval(draw, 950);
    }else if(timer < 15) {
        clearInterval(interval)
        endInterval = setInterval(draw, 700);
    }
    if (timer==0) {
        alert("Game Over");
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