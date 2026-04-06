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
  
   textAlign(CENTER, CENTER);
  textSize(24);
  fill('black')
  text('hello', 50, 50);
  
  rectMode(CORNER);
  fill('#FFF0F3');
  noStroke();
  rect(0, 0, width, 225); 
  
  rectMode(CENTER);
  fill('#FFF0F3');
  noStroke();
  rect(windowWidth/2, windowHeight/2.1, 555, 100); 
  
  rectMode(CENTER);
  fill('#FFF0F3');
  noStroke();
  rect(windowWidth/2, windowHeight/1.15, 555, 100); 
  
  rectMode(CENTER);
  fill('#FFF0F3');
  noStroke();
  rect(windowWidth/2, windowHeight/1.5, 555, 100); 
  
  imageMode(CENTER);
  image(img2, windowWidth/2, windowHeight/5.5, 350, 270);
}
