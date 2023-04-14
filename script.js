let data = [];
let dataManual = [];
let months = ['J', 'F', 'MÇ', 'A', 'M', 'JN', 'JL', 'A', 'S', 'O', 'N', 'D']
colors = [[240, 84, 44], [250, 164, 41], [254, 205, 27], [222, 224, 37], [149, 201, 64], [73, 180, 72], [18, 161, 71], [20, 164, 92], [19, 188, 183], [27, 136, 203], [44, 87, 166], [64, 64, 154]];
let diagram;

//Carrega imagem na biblioteca
function preload() {
  diagram = loadImage("diagram.png")
}

//Configura canva
function setup() {
  createCanvas(681, 657);
  background(255);
  noLoop();
  textSize(16);
  textAlign(CENTER, CENTER);
}

//Insere imagem
function draw() {
  image(diagram, 0, 0, 681, 657);
}

//Desenha pontos
function drawPoint(x, y, r, g, b) {
  strokeWeight(20);
  stroke(0);
  point(x, y);

  strokeWeight(18.5);
  stroke(r, g, b);
  point(x, y);
}

//Converte milimetros pro eixo X
function millimetersToX(mm) {
  x = map(mm, 0, 600, 0, 681);
  return x;
}

//Converte celcius pro eixo Y
function celciusToY(c) {
  y = map(c, 40, -40, 0, 657)
  return y;
}

//Converte dados pra coordenadas
function convertToCoord(mm, c, r, g, b) {
  x = millimetersToX(mm);
  y = celciusToY(c);
  drawPoint(x, y, r, g, b);
}

//Desenha pontos de um ano inteiro
function plotMonth() {
  
  getData();

  for (let i = 0; i < data.length; i++) {
    x = data[i][0];
    y = data[i][1];

    r = colors[i][0];
    g = colors[i][1];
    b = colors[i][2];


    convertToCoord(x, y, r, g, b);

    fill(255);
    noStroke();
    textSize(10);
    text(months[i], x, y+1);
  }
}

//Le dados do usuário
function getData() {
  let millimeters = document.getElementsByName('millimeters');
  let celcius = document.getElementsByName('celcius');
  
  for (i = 0; i < 12; i++) {
    let pair = []

    pair.push(millimeters[i].value)
    pair.push(celcius[i].value)

    data.push(pair);

  }
  
}

//Desenha pontos de um ano inteiro
function plot() {
  
  getData();

  for (let i = 0; i < dataManual.length; i++) {
    x = dataManual[i][0];
    y = dataManual[i][1];

    r = colors[i][0];
    g = colors[i][1];
    b = colors[i][2];


    convertToCoord(x, y, r, g, b);

    fill(255);
    noStroke();
    textSize(10);
    text(months[i], x, y+1);
  }
}

