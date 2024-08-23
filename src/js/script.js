let canvas1 = document.querySelector("#canvas1");
let ctx1 = canvas1.getContext("2d");

// let centerX = canvas1.getAttribute("width");
// let centerY = canvas1.getAttribute("height");
// centerX = centerX / 2;
// centerY = centerY / 2; 

let coordenadas = [ [100, 200] , [200, 200],
                    [200, 400] , [100, 400]];

ctx1.moveTo(coordenadas[0][0], coordenadas[0][1]);
ctx1.lineTo(coordenadas[1][0], coordenadas[1][1]); // top rigth
ctx1.lineTo(coordenadas[2][0], coordenadas[2][1]); // bottom rigth
ctx1.lineTo(coordenadas[3][0], coordenadas[3][1]); // bottom left
ctx1.lineTo(coordenadas[0][0], coordenadas[0][1]); // top left
ctx1.stroke();

let canvasTranslacao = document.querySelector("#canvasTranslacao");
let ctxTranslacao = canvasTranslacao.getContext("2d");

let coordenadasTranslacao = [[0, 0],[0, 0],
                            [0, 0],[0, 0]];

// Transladado 100px à direita e 100px pra cima

for (let i = 0; i < coordenadasTranslacao.length; i++) {
    for (let j = 0; j < coordenadasTranslacao[0].length; j++) {
        if (j == 0)
            coordenadasTranslacao[i][j] = coordenadas[i][j] + 100;
        else
            coordenadasTranslacao[i][j] = coordenadas[i][j] - 100;;
    }
}

ctxTranslacao.moveTo(coordenadasTranslacao[0][0], coordenadasTranslacao[0][1]);
ctxTranslacao.lineTo(coordenadasTranslacao[1][0], coordenadasTranslacao[1][1]); // top rigth
ctxTranslacao.lineTo(coordenadasTranslacao[2][0], coordenadasTranslacao[2][1]); // bottom rigth
ctxTranslacao.lineTo(coordenadasTranslacao[3][0], coordenadasTranslacao[3][1]); // bottom left
ctxTranslacao.lineTo(coordenadasTranslacao[0][0], coordenadasTranslacao[0][1]); // top left
ctxTranslacao.stroke();