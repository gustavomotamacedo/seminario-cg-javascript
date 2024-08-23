let canvas1 = document.querySelector("#canvas1");
let canvasCtx = canvas1.getContext("2d");

let centerX = canvas1.getAttribute("width");
let centerY = canvas1.getAttribute("height");
centerX = centerX / 2;
centerY = centerY / 2; 

let rectW = 100;
let rectH = 100;

centerX = centerX - (rectW/2);
centerY = centerY - (rectH/2);

canvasCtx.fillStyle = "#00f"
canvasCtx.fillRect(centerX, centerY, rectW, rectH);