function preload() {
  
  // bg image 
  img=loadImage('imgs/Background.JPG');
  img2=loadImage('imgs/Sniptlogoo.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  imageMode(CORNER);
  image(img, 1, 0, width, height);
}
