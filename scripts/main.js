let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

//the postions of the ball//
let y = (canvas.height/2) - 200
let x = canvas.width - 100;

let ballRadius = 10;

let score = 0;

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
}

let interval = setInterval(draw, 1000);

function drawScore() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "blue"; 
    ctx.fillText("Score: " + score, 8, 20);
}

//when the ball is clicked, the score increases by 1//
function onclick(drawBall) {
    score++;
}