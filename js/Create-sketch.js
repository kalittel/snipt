
let mode = 'draw';
let statusText = 'Mode: Drawing';
let colorPicker;
let selectedImg;
let images = [];
let imagePaths = [
  "imgs/fish.png",
  "imgs/collage1.png",
  "imgs/collage2.png",
  "imgs/collage3.png",
  "imgs/collage4.png",
  "imgs/collage5.png",
  "imgs/collage6.png",
  "imgs/collage7.png",
  "imgs/collage8.png",
  "imgs/collage9.png",
  "imgs/collage10.png",
  "imgs/collage11.png",
  "imgs/collage12.png",
  "imgs/collage13.png",
  "imgs/collage14.png",
  "imgs/collage15.png",
  "imgs/collage16.png",
  "imgs/collage17.png",
  "imgs/collage18.png",
  "imgs/collage19.png",
  "imgs/collage20.png",
  "imgs/collage21.png",
  "imgs/collage22.png",

];

let brushSize = 8;
let stickerSize = 50;
////gemini
let popup;

function preload() {
  images[0] = loadImage('imgs/fish.png');
  images[1] = loadImage('imgs/collage1.png');
  images[2] = loadImage('imgs/collage2.png');
  images[3] = loadImage('imgs/collage3.png');
  images[4] = loadImage('imgs/collage4.png');
  images[5] = loadImage('imgs/collage5.png');
  images[6] = loadImage('imgs/collage6.png');
  images[7] = loadImage('imgs/collage7.png');
  images[8] = loadImage('imgs/collage8.png');
  images[9] = loadImage('imgs/collage9.png');
  images[10] = loadImage('imgs/collage10.png');
  images[11] = loadImage('imgs/collage11.png');
  images[12] = loadImage('imgs/collage12.png');
  images[13] = loadImage('imgs/collage13.png');
  images[14] = loadImage('imgs/collage14.png');
  images[15] = loadImage('imgs/collage15.png');
  images[16] = loadImage('imgs/collage16.png');
  images[17] = loadImage('imgs/collage17.png');
  images[18] = loadImage('imgs/collage18.png');
  images[19] = loadImage('imgs/collage19.png');
  images[20] = loadImage('imgs/collage20.png');
  images[21] = loadImage('imgs/collage21.png');
  images[22] = loadImage('imgs/collage22.png');
  selectedImg = images[0];
}

function setup() {
//console.log(firebaseConfig);
canvas = createCanvas(462, 642);
 canvas.position(500, 135);
 background('white');
  

 //creates and positions button that saves drawing to users computer (AI)
button = createButton('Download');
button.position(1173, 210);
button.style('font-weight', 'bold');
button.style('color', '#fd6f89');
button.style('background-color', '#ffd7d8'); 
button.style('border-radius', '10px');
button.style('border-color', '#fd6f89');
button.style('height', '40px');
button.style('width', '80px');
button.mousePressed(() => {
  saveDrawing();
  showPopup();
});

  let drawBtn = createButton('Drawing Mode');
  drawBtn.position(1104, 270);
  drawBtn.style('font-weight', 'bold');
  drawBtn.style('color', '#fd6f89'); 
  drawBtn.style('background-color', '#ffd7d8'); 
  drawBtn.style('border-radius', '10px');
  drawBtn.style('border-color', '#fd6f89');
  drawBtn.style('height', '40px');
  drawBtn.style('width', '150px');
  drawBtn.mousePressed(() => { mode = 'draw'; statusText = 'Mode: Drawing'; });

   let collageBtn = createButton('Collage Mode');
  collageBtn.position(1104, 330);
  collageBtn.style('font-weight', 'bold');
  collageBtn.style('color', '#fd6f89'); 
  collageBtn.style('background-color', '#ffd7d8'); 
  collageBtn.style('border-radius', '10px');
  collageBtn.style('border-color', '#fd6f89');
  collageBtn.style('height', '40px');
  collageBtn.style('width', '150px');
  collageBtn.mousePressed(() => { mode = 'collage'; statusText = 'Mode: Collage'; });

  colorPicker = createColorPicker('#fd6f89');
  colorPicker.position(1104, 210);
  colorPicker.style('width', '55px')
  colorPicker.style('height', '40px')
  colorPicker.style('border-color', '#fd6f89');

   let clearBtn = createButton('Clear All');
  clearBtn.position(1202, 665);
  clearBtn.mousePressed(() => background(255));
  clearBtn.style('font-weight', 'bold');
  clearBtn.style('color', '#fd6f89'); 
  clearBtn.style('background-color', '#ffd7d8'); 
  clearBtn.style('border-radius', '10px');
  clearBtn.style('border-color', '#fd6f89');
  clearBtn.style('height', '30px');
  clearBtn.style('width', '70px');

  //chatGPT
  let panel = createDiv();
panel.position(115, 150);
panel.size(250, 600);
panel.style("overflow-y", "scroll");
panel.style("background", "#FFF0F3");
panel.style("padding", "5px");
panel.style("display", "flex");
panel.style("flex-direction", "column");
panel.style("gap", "10px");

// add all your images into the scroll panel
for (let i = 0; i < imagePaths.length; i++) {
  let imgBtn = createImg(imagePaths[i]);
  imgBtn.parent(panel);
  imgBtn.style('width', '200px');
imgBtn.style('height', 'auto');

  imgBtn.mousePressed(() => {
    selectedImg = images[i];
    mode = 'collage';
    statusText = 'Mode: Collage (Sticker ' + (i + 1) + ')';
  });
}

//gemini
  popup = createDiv('Go to the gallery page to upload your art!');
  popup.style('padding', '20px');
  popup.style('background-color', '#FFF0F3');
  popup.position(580, 300);
  popup.hide();
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
  if (mode === 'collage' && mouseY < height) {
    imageMode(CENTER);
   let w = stickerSize;
    let h = selectedImg.height * (w / selectedImg.width);

    image(selectedImg, mouseX, mouseY, w, h);
  }
}

//saves drawing as MyMasterpiece.jpg
 function saveDrawing() {
  save("MyMasterpiece.jpg");
}

////gemini
function showPopup() {
  popup.show(); 
   setTimeout(() => {
    popup.hide();
  }, 3000);
}
