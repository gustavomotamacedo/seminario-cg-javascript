const canvasInicial = document.querySelector("#canvasInicial");
const canvasTranslacao = document.querySelector("#canvasTranslacao");
const canvasRotacao = document.querySelector("#canvasRotacao");
const canvasEscalonamento = document.querySelector("#canvasEscalonamento");
const canvasCisalhamento = document.querySelector("#canvasCisalhamento");
const canvasEspelhamento = document.querySelector("#canvasEspelhamento");

const ctxInicial = canvasInicial.getContext("2d");
const ctxTranslacao = canvasTranslacao.getContext("2d");
const ctxRotacao = canvasRotacao.getContext("2d");
const ctxEscalonamento = canvasEscalonamento.getContext("2d");
const ctxCisalhamento = canvasCisalhamento.getContext("2d");
const ctxEspelhamento = canvasEspelhamento.getContext("2d");

offset = 100;
x = 0;
y = 0;
h = 1;

var tl = {};
var tr = {};
var bl = {};
var br = {};

drawBaseRect(ctxInicial);

drawTransRect(ctxTranslacao, 100, 100);

drawRotRect(ctxRotacao, 30);

drawEscaRect(ctxEscalonamento, 2, 2);

drawCisRect(ctxCisalhamento, 1, 0);
drawCisRect(ctxCisalhamento, 0, 1);
drawCisRect(ctxCisalhamento, 1, 1);

drawEspRect(ctxEspelhamento, "x");
drawEspRect(ctxEspelhamento, "y");
drawEspRect(ctxEspelhamento, "xy");

function drawBaseRect(ctx) {
    tl.x = x;
    tl.y = y;
    tl.h = h;

    tr.x = x + offset;
    tr.y = y;
    tr.h = h;

    br.x = x + offset;
    br.y = y + offset;
    br.h = h;

    bl.x = x;
    bl.y = y + offset;
    bl.h = h;

    draw(ctx);
}

function drawTransRect(ctx, tx, ty) {
    t = {};

    t.a = 1;
    t.b = 0;
    t.tx = tx;
    t.c = 0;
    t.d = 1;
    t.ty = ty;
    
    transform(t);

    draw(ctx);

}

function drawRotRect(ctx, deg) {
    t = {};

    rad = (deg * Math.PI) / 180;

    t.a = Math.cos(rad);
    t.b = -Math.sin(rad);
    t.tx = 100;
    t.c = Math.sin(rad);
    t.d = Math.cos(rad);
    t.ty = 100;

    transform(t);
    draw(ctx);
}

function drawEscaRect(ctx, sx, sy) {
    t = {};

    t.a = sx;
    t.b = 0;
    t.tx = 100;
    t.c = 0;
    t.d = sy;
    t.ty = 100;

    transform(t)
    draw(ctx);
}

function drawCisRect(ctx, shx, shy) {
    t = {};

    t.a = 2;
    t.b = shx;
    t.tx = 100;
    t.c = shy;
    t.d = 2;
    t.ty = 100;

    transform(t)
    draw(ctx);
}

function drawEspRect(ctx, axis) {
    t = {};

    t.a = 2;
    t.b = 0;
    t.tx = 300;
    t.c = 0;
    t.d = 2;
    t.ty = 250;

    if (axis == "x") {
        t.a = -t.a;
    } else if (axis == "y") {
        t.d = -t.d;
    } else if (axis == "xy" || axis == "yx") {
        t.a = -t.a;
        t.d = -t.d;
    }

    transform(t)
    draw(ctx);
}

function draw(ctx) {
    tl.x = tl.xNow || tl.x;
    tl.y = tl.yNow || tl.y;

    tr.x = tr.xNow || tr.x;
    tr.y = tr.yNow || tr.y;

    br.x = br.xNow || br.x;
    br.y = br.yNow || br.y;

    bl.x = bl.xNow || bl.x;
    bl.y = bl.yNow || bl.y;

    ctx.beginPath()
    ctx.moveTo(tl.x, tl.y);
    ctx.lineTo(tr.x, tr.y);
    ctx.lineTo(br.x, br.y);
    ctx.lineTo(bl.x, bl.y);
    ctx.lineTo(tl.x, tl.y);
    ctx.closePath();
    ctx.stroke();
}

function transform(t) {
    tl.x = x;
    tl.y = y;
    tl.h = h;

    tr.x = x + offset;
    tr.y = y;
    tr.h = h;

    br.x = x + offset;
    br.y = y + offset;
    br.h = h;

    bl.x = x;
    bl.y = y + offset;
    bl.h = h;

    tl.xNow = (t.a * tl.x) + (t.b * tl.y) + (t.tx * tl.h);
    tl.yNow = (t.c * tl.x) + (t.d * tl.y) + (t.ty * tl.h);
    
    tr.xNow = (t.a * tr.x) + (t.b * tr.y) + (t.tx * tr.h);
    tr.yNow = (t.c * tr.x) + (t.d * tr.y) + (t.ty * tr.h);
    
    br.xNow = (t.a * br.x) + (t.b * br.y) + (t.tx * br.h);
    br.yNow = (t.c * br.x) + (t.d * br.y) + (t.ty * br.h);
    
    bl.xNow = (t.a * bl.x) + (t.b * bl.y) + (t.tx * bl.h);
    bl.yNow = (t.c * bl.x) + (t.d * bl.y) + (t.ty * bl.h);
}