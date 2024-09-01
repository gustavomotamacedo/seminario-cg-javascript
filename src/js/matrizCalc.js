const canva = document.querySelector("#plot");
const ctx = canva.getContext("2d");

var offset = 30;
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
ctx.lineWidth = 1;
ctx.strokeStyle="#000";
ctx.closePath();
ctx.stroke();

const btnReset = document.querySelector("#btnReset");
const matriz = document.querySelectorAll(".valores");

matriz.forEach(e => {
    e.addEventListener("change", ()=>{
        bidimensionalTransform(matriz);
    });
})

btnReset.addEventListener("click", () => {
    matriz[0].value = 1;
    matriz[1].value = 0;
    matriz[2].value = 0;
    matriz[3].value = 0;
    matriz[4].value = 1;
    matriz[5].value = 0;
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

    if (
        transform.a == 5 &&
        transform.b == 5 &&
        transform.tx == 0 &&
        transform.c == -2.5 &&
        transform.d == 2.5 &&
        transform.ty == 75 
    ) {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle="#0F0";
        ctx.stroke();
        ctx.closePath();
    } else if (
        transform.a == 0.52 &&
        transform.b == -0.85 &&
        transform.c == 0.85 &&
        transform.d == 0.52
    ) {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle="#0F0";
        ctx.stroke();
        ctx.closePath();
    } else {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle="#111";
        ctx.stroke();
        ctx.closePath();
    }

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