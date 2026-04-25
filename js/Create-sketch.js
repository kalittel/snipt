let mode = 'draw';
let statusText = 'Mode: Drawing';
let colorPicker;
let selectedImg;
let images = [];
let imagePaths = [
  "imgs/fish.png",
  "imgs/fish.png",
  "imgs/fish.png",
  "imgs/fish.png",
  "imgs/create.png",
  "imgs/create.png",
  "imgs/create.png",
  "imgs/create.png",
  "imgs/create.png",
  "imgs/create.png"
];

let brushSize = 8;
let stickerSize = 50;

function preload() {
  images[0] = loadImage('imgs/fish.png');
  images[1] = loadImage('imgs/fish.png');
  images[2] = loadImage('imgs/fish.png');
  images[3] = loadImage('imgs/fish.png');
  images[4] = loadImage('imgs/create.png');
  images[5] = loadImage('imgs/create.png');
  images[6] = loadImage('imgs/create.png');
  images[7] = loadImage('imgs/create.png');
  images[8] = loadImage('imgs/create.png');
  images[9] = loadImage('imgs/create.png');
  selectedImg = images[0];
}
function setup() {
//console.log(firebaseConfig);
canvas = createCanvas(462, 642);
 canvas.position(500, 135);
 background('white');

 //creates and positions button that saves drawing to users computer (AI)
button = createButton('Download');
button.position(1045, 580);
button.mousePressed(saveDrawing);

  let drawBtn = createButton('Drawing Mode');
  drawBtn.position(10, 420);
  drawBtn.style('color', 'hotpink'); 
  drawBtn.style('background-color', 'pink'); 
  drawBtn.style('border-radius', '10px');
  drawBtn.style('height', '50px');
  drawBtn.mousePressed(() => { mode = 'draw'; statusText = 'Mode: Drawing'; });

   let collageBtn = createButton('Collage Mode');
  collageBtn.position(110, 420);
  collageBtn.style('color', 'hotpink'); 
  collageBtn.style('background-color', 'pink'); 
  collageBtn.style('border-radius', '10px');
  collageBtn.style('height', '50px');
  collageBtn.mousePressed(() => { mode = 'collage'; statusText = 'Mode: Collage'; });

  colorPicker = createColorPicker('#000000');
  colorPicker.position(220, 420);

   let clearBtn = createButton('Clear All');
  clearBtn.position(520, 660);
  clearBtn.mousePressed(() => background(255));

  //AI
  let panel = createDiv();
panel.position(20, 150);
panel.size(120, 500);
panel.style("overflow-y", "scroll");
panel.style("background", "#FFF0F3");
panel.style("padding", "5px");
panel.style("display", "flex");
panel.style("flex-direction", "column");
panel.style("gap", "10px");

// add all your images into the scroll panel
for (let i = 0; i < imagePaths.length; i++) {
  let imgBtn = createImg(imagePaths[i]);
  imgBtn.size(80, 80);
  imgBtn.parent(panel);

  imgBtn.mousePressed(() => {
    selectedImg = images[i];
    mode = 'collage';
    statusText = 'Mode: Collage (Sticker ' + (i + 1) + ')';
  });
}
}




function draw() {

  if (mode === 'draw' && mouseIsPressed) {
    stroke(colorPicker.color());
    strokeWeight(brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function keyPressed() {

  // brush size
  if (keyCode === UP_ARROW) {
    brushSize += 2;
  } else if (keyCode === DOWN_ARROW) {
    brushSize -= 2;
  }

  // sticker size
  if (key === '[') {
    stickerSize -= 5;
  } else if (key === ']') {
    stickerSize += 5;
  }
}

  function mousePressed() {
  // --- ORIGINAL COLLAGE LOGIC ---
  if (mode === 'collage' && mouseY < height) {
    imageMode(CENTER);
    image(selectedImg, mouseX, mouseY, stickerSize, stickerSize);
  }
}

//saves drawing as MyMasterpiece.jpg
 function saveDrawing() {
  save("MyMasterpiece.jpg");
}
