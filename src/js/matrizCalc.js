const canva = document.querySelector("#plot");
const ctx = canva.getContext("2d");

var offset = 100;
var x = 0;
var y = 0;
var h = 1;
var tL = {};
var tR = {};
var bL = {};
var bR = {};

tL.x = x;
tL.y = y;
tL.h = h;

tR.x = x+offset;
tR.y = y;
tR.h = h;

bR.x = x+offset;
bR.y = y+offset;
bR.h = h;

bL.x = x;
bL.y = y+offset;
bL.h = h;

ctx.beginPath()
ctx.moveTo(tL.x, tL.y);
ctx.lineTo(tR.x, tR.y);
ctx.lineTo(bR.x, bR.y);
ctx.lineTo(bL.x, bL.y);
ctx.lineTo(tL.x, tL.y);
ctx.closePath();
ctx.stroke();

const btnCalcular = document.querySelector("#btnCalc")
const matriz = document.querySelectorAll(".valores");

matriz.forEach(e => {
    e.addEventListener("change", ()=>{
        bidimensionalTransform(matriz);
    });
})

btnCalcular.addEventListener("click", () => {
    bidimensionalTransform(matriz);
})

function bidimensionalTransform(matriz) {
    var mValues = [];

    matriz.forEach((e) => {
        mValues.push(parseFloat(e.value));
    })

    ctx.clearRect(0,0,640,480);
    let transform = {};

    transform.a = mValues[0];
    transform.b = mValues[1];
    transform.tx = mValues[2];
    transform.c = mValues[3];
    transform.d = mValues[4];
    transform.ty = mValues[5];

    tL.xNow = (transform.a * tL.x) + (transform.b*tL.y) + (transform.tx * tL.h);
    tR.xNow = (transform.a * tR.x) + (transform.b*tR.y) + (transform.tx * tR.h);
    bL.xNow = (transform.a * bL.x) + (transform.b*bL.y) + (transform.tx * bL.h);
    bR.xNow = (transform.a * bR.x) + (transform.b*bR.y) + (transform.tx * bR.h);

    tL.yNow = (transform.c * tL.x) + (transform.d*tL.y) + (transform.ty * tL.h);
    tR.yNow = (transform.c * tR.x) + (transform.d*tR.y) + (transform.ty * tR.h);
    bL.yNow = (transform.c * bL.x) + (transform.d*bL.y) + (transform.ty * bL.h);
    bR.yNow = (transform.c * bR.x) + (transform.d*bR.y) + (transform.ty * bR.h);

    ctx.clearRect(0, 0, canva.width, canva.height);
    draw();
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(tL.xNow, tL.yNow);
    ctx.lineTo(tR.xNow, tR.yNow);
    ctx.lineTo(bR.xNow, bR.yNow);
    ctx.lineTo(bL.xNow, bL.yNow);
    ctx.lineTo(tL.xNow, tL.yNow);
    ctx.closePath();
    ctx.stroke();
}