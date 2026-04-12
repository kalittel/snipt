let colors = ['#ff3535', '#ffba3b', '#ffff7b', '#74ff74', '#2d88ff', '#b86cff', '#FFC0CB', '#000000', '#FFFFFF']; // Array of colors (red, orange, yellow, green, blue, violet, pink, black, white)
let currentColor = 0; 
let brushSize = 10;


function preload() {

}
function setup() {

let canvas = createCanvas(462, 642);
 canvas.position(500, 135);
 background('white');

  button = createButton('Download');
  button.position(1045, 580);
  button.mousePressed(saveDrawing);
 
}

function draw() {

    if (mouseIsPressed) {
    stroke(colors[currentColor]);
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);}

}

function keyPressed() {
  // Change color based on key pressed
  switch (key) {
    case 'r':
    case 'R':
      currentColor = 0; // Red
      break;
    case 'o':
    case 'O':
      currentColor = 1; // Orange
      break;
    case 'y':
    case 'Y':
      currentColor = 2; // Yellow
      break;
    case 'g':
    case 'G':
      currentColor = 3; // Green
      break;
    case 'b':
    case 'B':
      currentColor = 4; // Blue
      break;
    case 'v':
    case 'V':
      currentColor = 5; // Violet
      break;
    case 'p':
    case 'P':
      currentColor = 6; // Pink
      break;
    case 'k':
    case 'K':
      currentColor = 7; // Black
      break;
    case 'w':
    case 'W':
    case 'e':
    case 'E':
      currentColor = 8; // White (Eraser)
      break;
  }
  // Change brush size when the up arrow key is pressed
  if (keyCode === UP_ARROW) {
    brushSize += 2;
  }
  // Change brush size when the down arrow key is pressed
  else if (keyCode === DOWN_ARROW) {
   brushSize -= 2;
  }
}
  function saveDrawing() {
  save("MyMasterpiece.jpg");
}

