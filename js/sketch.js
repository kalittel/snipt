function preload() {
  
  // bg image 
  img=loadImage('imgs/Background.JPG');
  img2=loadImage('imgs/Sniptlogoo.png');
}
function setup() {
  const game = createCanvas(windowWidth, windowHeight);
  game.canvas.style = "";

  link=createA('create.html', '<img src="imgs/Create.png" alt="CreateButton">');
  link.position(width/3.1, height/2.88);
  link.style('transform', 'scale(.476)');
}

function draw() {
  imageMode(CORNER);
  image(img, 1, 0, width, height);
  
   textAlign(CENTER, CENTER);
  textSize(24);
  fill('black');
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

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}