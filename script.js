let angleX = 0;
let angleY = 0;
let textureImg;

function preload() {
  // Load your texture image
  textureImg = loadImage('panama.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textureMode(NORMAL);
  noStroke();
}

function draw() {
  background(255);

  let camX = map(mouseX, 0, width, -PI, PI);
  let camY = map(mouseY, 0, height, -PI / 2, PI / 2);

  rotateX(camY);
  rotateY(camX);

  // Apply the texture
  texture(textureImg);
  sphere(200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}