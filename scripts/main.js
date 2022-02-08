let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let y = (canvas.height/2) - 200
let x = canvas.width - 100;
let ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, math.PI*2);
    ctx.fillStyle =  "lime";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    drawBall();
    setInterval(2)
}