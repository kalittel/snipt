
let mode = 'draw';
let statusText = 'Mode: Drawing';
let colorPicker;
let selectedImg;
let images = [];
let imagePaths = [
  "imgs/fish.png",
  "imgs/collage1.png",
  "imgs/collage2.png",
  "imgs/collage47.png",
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
  "imgs/collage23.png",
  "imgs/collage24.png",
  "imgs/collage25.png",
  "imgs/collage26.png",
  "imgs/collage27.png",
  "imgs/collage28.png",
  "imgs/collage29.png",
  "imgs/collage30.png",
  "imgs/collage31.png",
  "imgs/collage32.png",
  "imgs/collage33.png",
  "imgs/collage34.png",
  "imgs/collage35.png",
  "imgs/collage36.png",
  "imgs/collage37.png",
  "imgs/collage38.png",
  "imgs/collage39.png",
  "imgs/collage40.png",
  "imgs/collage41.png",
  "imgs/collage42.png",
  "imgs/collage43.png",
  "imgs/collage44.png",
  "imgs/collage45.png",
  "imgs/collage46.png",
 "imgs/collage48.png",
"imgs/collage49.png",
"imgs/collage50.png",
"imgs/collage51.png",
"imgs/collage52.png",
"imgs/collage53.png",
"imgs/collage54.png",
"imgs/collage55.png",
"imgs/collage56.png",
"imgs/collage57.png",
"imgs/collage58.png",
"imgs/collage59.png",
"imgs/collage60.png",
"imgs/collage61.png",
"imgs/collage62.png",
"imgs/collage63.png",
"imgs/collage64.png",
"imgs/collage65.png",
"imgs/collage66.png",
"imgs/collage67.png",
"imgs/collage68.png",
"imgs/collage69.png",
"imgs/collage70.png",
"imgs/collage71.png",
"imgs/collage72.png",
"imgs/collage73.png",
"imgs/collage74.png",
"imgs/collage75.png",
"imgs/collage76.png",
"imgs/collage77.png",
"imgs/collage78.png",
"imgs/collage79.png",
"imgs/collage80.png",
"imgs/collage81.png",
"imgs/collage82.png",
"imgs/collage83.png",
"imgs/collage84.png",
"imgs/collage85.png",
"imgs/collage86.png",
"imgs/collage87.png",
"imgs/collage88.png",
"imgs/collage89.png",
"imgs/collage90.png",
"imgs/collage91.png",
"imgs/collage92.png",
"imgs/collage93.png",
"imgs/collage94.png",
"imgs/collage95.png",
"imgs/collage96.png",
"imgs/collage97.png",
"imgs/collage98.png",
"imgs/collage99.png",
"imgs/collage100.png",
"imgs/collage101.png",
"imgs/collage102.png",
"imgs/collage103.png",
"imgs/collage104.png"
];

let brushSize = 8;
let stickerSize = 50;
////gemini
let popup;

function preload() {
  images[0] = loadImage('imgs/fish.png');
  images[1] = loadImage('imgs/collage1.png');
  images[2] = loadImage('imgs/collage2.png');
  images[3] = loadImage('imgs/collage47.png');
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
  images[23] = loadImage('imgs/collage23.png');
  images[24] = loadImage('imgs/collage24.png');
  images[25] = loadImage('imgs/collage25.png');
  images[26] = loadImage('imgs/collage26.png');
  images[27] = loadImage('imgs/collage27.png');
  images[28] = loadImage('imgs/collage28.png');
  images[29] = loadImage('imgs/collage29.png');
  images[30] = loadImage('imgs/collage30.png');
  images[31] = loadImage('imgs/collage31.png');
  images[32] = loadImage('imgs/collage32.png');
  images[33] = loadImage('imgs/collage33.png');
  images[34] = loadImage('imgs/collage34.png');
  images[35] = loadImage('imgs/collage35.png');
  images[36] = loadImage('imgs/collage36.png');
  images[37] = loadImage('imgs/collage37.png');
  images[38] = loadImage('imgs/collage38.png');
  images[39] = loadImage('imgs/collage39.png');
  images[40] = loadImage('imgs/collage40.png');
  images[41] = loadImage('imgs/collage41.png');
  images[42] = loadImage('imgs/collage42.png');
  images[43] = loadImage('imgs/collage43.png');
  images[44] = loadImage('imgs/collage44.png');
  images[45] = loadImage('imgs/collage45.png');
  images[46] = loadImage('imgs/collage46.png');
  images[47] = loadImage('imgs/collage48.png');
images[48] = loadImage('imgs/collage49.png');
images[49] = loadImage('imgs/collage50.png');
images[50] = loadImage('imgs/collage51.png');
images[51] = loadImage('imgs/collage52.png');
images[52] = loadImage('imgs/collage53.png');
images[53] = loadImage('imgs/collage54.png');
images[54] = loadImage('imgs/collage55.png');
images[55] = loadImage('imgs/collage56.png');
images[56] = loadImage('imgs/collage57.png');
images[57] = loadImage('imgs/collage58.png');
images[58] = loadImage('imgs/collage59.png');
images[59] = loadImage('imgs/collage60.png');
images[60] = loadImage('imgs/collage61.png');
images[61] = loadImage('imgs/collage62.png');
images[62] = loadImage('imgs/collage63.png');
images[63] = loadImage('imgs/collage64.png');
images[64] = loadImage('imgs/collage65.png');
images[65] = loadImage('imgs/collage66.png');
images[66] = loadImage('imgs/collage67.png');
images[67] = loadImage('imgs/collage68.png');
images[68] = loadImage('imgs/collage69.png');
images[69] = loadImage('imgs/collage70.png');
images[70] = loadImage('imgs/collage71.png');
images[71] = loadImage('imgs/collage72.png');
images[72] = loadImage('imgs/collage73.png');
images[73] = loadImage('imgs/collage74.png');
images[74] = loadImage('imgs/collage75.png');
images[75] = loadImage('imgs/collage76.png');
images[76] = loadImage('imgs/collage77.png');
images[77] = loadImage('imgs/collage78.png');
images[78] = loadImage('imgs/collage79.png');
images[79] = loadImage('imgs/collage80.png');
images[80] = loadImage('imgs/collage81.png');
images[81] = loadImage('imgs/collage82.png');
images[82] = loadImage('imgs/collage83.png');
images[83] = loadImage('imgs/collage84.png');
images[84] = loadImage('imgs/collage85.png');
images[85] = loadImage('imgs/collage86.png');
images[86] = loadImage('imgs/collage87.png');
images[87] = loadImage('imgs/collage88.png');
images[88] = loadImage('imgs/collage89.png');
images[89] = loadImage('imgs/collage90.png');
images[90] = loadImage('imgs/collage91.png');
images[91] = loadImage('imgs/collage92.png');
images[92] = loadImage('imgs/collage93.png');
images[93] = loadImage('imgs/collage94.png');
images[94] = loadImage('imgs/collage95.png');
images[95] = loadImage('imgs/collage96.png');
images[96] = loadImage('imgs/collage97.png');
images[97] = loadImage('imgs/collage98.png');
images[98] = loadImage('imgs/collage99.png');
images[99] = loadImage('imgs/collage100.png');
images[100] = loadImage('imgs/collage101.png');
images[101] = loadImage('imgs/collage102.png');
images[102] = loadImage('imgs/collage103.png');
images[103] = loadImage('imgs/collage104.png');
//default selected image back to image 1
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
//allows the user to save the drawing and have the popup show up both with one click of button
button.mousePressed(() => {
  saveDrawing();
  showPopup();
});

//allows user to switch from adding images to drawing
  let drawBtn = createButton('Drawing Mode');
  drawBtn.position(1104, 270);
  drawBtn.style('font-weight', 'bold');
  drawBtn.style('color', '#fd6f89'); 
  drawBtn.style('background-color', '#ffd7d8'); 
  drawBtn.style('border-radius', '10px');
  drawBtn.style('border-color', '#fd6f89');
  drawBtn.style('height', '40px');
  drawBtn.style('width', '150px');

  //if user in draw mode
  drawBtn.mousePressed(() => { mode = 'draw'; statusText = 'Mode: Drawing'; });

  //allows user to switch from drawing to adding images 
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

  //allows user to pick their color from a color picker when drawing andstyles the button
  colorPicker = createColorPicker('#fd6f89');
  colorPicker.position(1104, 210);
  colorPicker.style('width', '55px')
  colorPicker.style('height', '40px')
  colorPicker.style('border-color', '#fd6f89');


  //creates a clear button and styles it
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

  //chatGPT - created panel/div for all images to be stored and displayed in
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


  // when both conditions are met - draw mode AND the mouse is being pressed
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
    //decreased 5
    stickerSize -= 5;
  } else if (key === ']') {
    //increased 5
    stickerSize += 5;
  }
}
//if user clickign in canvas and in collage mode - will allow picture to be used as sticker
  function mousePressed() {
  if (mode === 'collage' && mouseY < height) {
    imageMode(CENTER);
   let w = stickerSize;
   //scales height proportionally to w in order for it to not stretch the image when placed on canvas
    let h = selectedImg.height * (w / selectedImg.width);

    image(selectedImg, mouseX, mouseY, w, h);
  }
}

//saves drawing as MyMasterpiece.jpg
 function saveDrawing() {
  save("MyMasterpiece.jpg");
}

//gemini
function showPopup() {
  //display popup
  popup.show(); 
  //makes display disappear after a certain amount of time
   setTimeout(() => {
    popup.hide();
    //3 secs - time pop up is up for
  }, 3000);
}
