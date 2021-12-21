let img;

function preload() {
  img = loadImage('hydrogen.png');
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  image(img, 0, 0);
  
}
